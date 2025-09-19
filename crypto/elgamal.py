"""
Cryptographic utilities for the threshold voting system.
Contains all cryptographic functions: ElGamal encryption, zero-knowledge proofs,
threshold key generation, and verification functions.
"""

import random
import hashlib
from Crypto.Util import number
from sympy import nextprime, isprime
from math import gcd
from Crypto.Util.number import inverse as modinv


def H(*args):
    """
    Hash function that takes multiple arguments and returns a SHA-256 hash as an integer.
    Args:
        *args: Variable length argument list of items to hash.
    Returns:
        int: Integer representation of the SHA-256 hash.
    """
    m = hashlib.sha256()
    for a in args:
        m.update(str(a).encode())
    return int(m.hexdigest(), 16)


def generate_safe_prime(bits=256):
    """Generate a safe prime p = 2q + 1 where q is also prime."""
    while True:
        q = nextprime(random.getrandbits(bits - 1))
        p = 2 * q + 1
        if isprime(p):
            return p, q


def find_generator(p, q):
    """Find a generator for the subgroup of order q in Z_p*."""
    while True:
        h = random.randrange(2, p - 1)
        g = pow(h, (p - 1) // q, p)  # g ∈ G_q
        if g != 1:
            return g


def setup_elgamal(bits=256):
    """Setup ElGamal parameters: safe prime p and generator g."""
    p, q = generate_safe_prime(bits)
    g = find_generator(p, q)
    return p, g


def encrypt(p, g, h, m):
    """
    Encrypt message m using ElGamal encryption in the exponent.
    Returns ciphertext (c1, c2) and random ephemeral secret y.
    """
    gm = pow(g, m, p)
    y = random.randrange(2, p - 1)
    c1 = pow(g, y, p)
    s = pow(h, y, p)
    c2 = (gm * s) % p
    return c1, c2, y


def homomorphic_add(c1_1, c2_1, c1_2, c2_2, p):
    """Homomorphically add two ElGamal ciphertexts."""
    return (c1_1 * c1_2) % p, (c2_1 * c2_2) % p


def brute_force_log(p, g, gm, max_m=100):
    """Brute force discrete logarithm for small exponents."""
    for m in range(-max_m, max_m + 1):
        if pow(g, m, p) == gm:
            return m
    return None


def prove_discrete_log_or(p, g, h, c1, c2, m, r, allowed_m=[-1, 0, 1]):
    """
    Prove in zero-knowledge that ciphertext (c1, c2) encrypts one of allowed_m = [-1, 0, 1]
    using OR-proof of discrete logs.
    """
    assert m in allowed_m
    gms = [pow(g, mi, p) for mi in allowed_m]
    real_index = allowed_m.index(m)

    commitments = []
    challenges = []
    responses = []
    total_challenge = 0

    for i, mi in enumerate(allowed_m):
        gm = gms[i]
        if i == real_index:
            w = random.randrange(1, p - 1)
            a1 = pow(g, w, p)
            a2 = pow(h, w, p)
            commitments.append((a1, a2))
            responses.append(w)
            challenges.append(None)
        else:
            fake_e = random.randrange(1, p - 1)
            fake_z = random.randrange(1, p - 1)
            a1 = (pow(g, fake_z, p) * number.inverse(pow(c1, fake_e, p), p)) % p
            num = c2 * number.inverse(gm, p) % p
            a2 = (pow(h, fake_z, p) * number.inverse(pow(num, fake_e, p), p)) % p
            commitments.append((a1, a2))
            challenges.append(fake_e)
            responses.append(fake_z)
            total_challenge = (total_challenge + fake_e) % (p - 1)

    e = H(g, h, c1, c2, *[item for sub in commitments for item in sub]) % (p - 1)
    real_e = (e - total_challenge) % (p - 1)
    challenges[real_index] = real_e
    responses[real_index] = (r * real_e + w) % (p - 1)

    proof = list(zip(commitments, challenges, responses))
    return proof


def verify_discrete_log_or(p, g, h, c1, c2, proof, allowed_m=[-1, 0, 1]):
    """
    Verify a non-interactive zero-knowledge OR-proof that a ciphertext encrypts one of the allowed messages.
    """
    q = (p-1) // 2
    gms = [pow(g, mi, p) for mi in allowed_m]
    commitments = []
    total_e = 0
    
    for i, ((a1, a2), e, z) in enumerate(proof):
        gm = gms[i]
        lhs1 = pow(g, z, p)
        rhs1 = (a1 * pow(c1, e, p)) % p

        num = c2 * number.inverse(gm, p) % p
        lhs2 = pow(h, z, p)
        rhs2 = (a2 * pow(num, e, p)) % p

        if lhs1 != rhs1 or lhs2 != rhs2:
            return False

        commitments.extend([a1, a2])
        total_e = (total_e + e) % q

    challenge = H(g, h, c1, c2, *commitments) % q
    return challenge == total_e


def generate_dleq_proof(p, g, c1, si, hi):
    """
    Zero-knowledge proof of discrete log equality. 
    Proves that c1^si and hi = g^si have the same exponent.
    """
    q = (p-1) // 2
    
    # Verify inputs are in subgroup
    assert pow(g, q, p) == 1
    assert pow(c1, q, p) == 1
    assert pow(hi, q, p) == 1

    yi = pow(c1, si, p)
    assert pow(yi, q, p) == 1
    
    w = random.randrange(1, q)
    a1 = pow(g, w, p)
    a2 = pow(c1, w, p)
    e = H(hi, yi, a1, a2) % q
    z = (w + si * e) % q
    return yi, (e, z)


def verify_dleq(p, g, h, c1, yi, proof):
    """Verify discrete log equality proof."""
    q = (p-1) // 2
    e, z = proof
    
    for val in [g, h, c1, yi]:
        assert pow(val, q, p) == 1
    
    rhs1 = (pow(g, z, p) * modinv(pow(h, e, p), p)) % p
    rhs2 = (pow(c1, z, p) * modinv(pow(yi, e, p), p)) % p
    challenge = H(h, yi, rhs1, rhs2) % q
    return e == challenge


def lagrange_interpolate(shares, p, t):
    """
    Reconstruct g^secret from t exponentiated shares (i, c1^s_i mod p)
    using Lagrange interpolation in the exponent.
    """
    result = 1
    mod = (p-1) // 2 
    
    for j in range(t):
        j_id, yj = shares[j]
        num = den = 1
        for m in range(t):
            if m == j:
                continue
            m_id, _ = shares[m]
            num = (num * (-m_id)) % mod
            den = (den * (j_id - m_id)) % mod

        if gcd(den, mod) != 1:
            raise ValueError("Lagrange coefficient not invertible. Choose different share IDs or p.")

        inv_den = number.inverse(den, mod)
        lagrange_coeff = (num * inv_den) % mod
        result = (result * pow(yj, lagrange_coeff, p)) % p

    return result


def generate_threshold_keys(p, g, t, n):
    """
    Generate threshold keys using Shamir's Secret Sharing.
    Returns: secret key, public key, shares, and public shares.
    """
    q = (p - 1) // 2
    secret = random.randrange(2, q)
    coeffs = [secret] + [random.randrange(1, p - 1) for _ in range(1, t)]

    def eval_poly(x):
        return sum(coeff * pow(x, i) for i, coeff in enumerate(coeffs)) % q

    shares = []
    public_shares = []
    for j in range(1, n + 1):
        share = eval_poly(j)
        shares.append((j, share))
        public_shares.append((j, pow(g, share, p)))
    
    public_key = pow(g, secret, p)
    return secret, public_key, shares, public_shares
