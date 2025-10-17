/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimalVP: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Text: { input: any; output: any; }
};

/** Execution hash for tracking proposal execution status */
export type ExecutionHash = {
  _indexer: Scalars['String']['output'];
  /** Unique identifier for the execution hash */
  id: Scalars['String']['output'];
  /** ID of the proposal this execution hash belongs to */
  proposal_id: Scalars['String']['output'];
};

export type ExecutionHash_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proposal_id?: InputMaybe<Scalars['String']['input']>;
  proposal_id_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proposal_id_not?: InputMaybe<Scalars['String']['input']>;
  proposal_id_not_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ExecutionHash_OrderBy =
  | '_indexer'
  | 'id'
  | 'proposal_id';

/** Execution strategy configuration for how proposals are executed onchain */
export type ExecutionStrategy = {
  _indexer: Scalars['String']['output'];
  /** Contract address of the execution strategy */
  address: Scalars['String']['output'];
  /** Axiom snapshot contract address for storage proofs (optional) */
  axiom_snapshot_address: Maybe<Scalars['String']['output']>;
  /** Axiom snapshot storage slot for proofs (optional) */
  axiom_snapshot_slot: Maybe<Scalars['BigInt']['output']>;
  /** Destination address for execution (optional) */
  destination_address: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the execution strategy */
  id: Scalars['String']['output'];
  /** Minimum voting power required for execution */
  quorum: Scalars['BigDecimalVP']['output'];
  /** Delay in blocks before timelock execution can proceed */
  timelock_delay: Scalars['BigInt']['output'];
  /** Guardian address that can veto timelock executions (optional) */
  timelock_veto_guardian: Maybe<Scalars['String']['output']>;
  /** Treasury address for funding execution (optional) */
  treasury: Maybe<Scalars['String']['output']>;
  /** Chain ID where the treasury is located (optional) */
  treasury_chain: Maybe<Scalars['Int']['output']>;
  /** Type of execution strategy (e.g., 'SimpleQuorum', 'Timelock') */
  type: Scalars['String']['output'];
};

export type ExecutionStrategy_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  axiom_snapshot_address?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_contains?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  axiom_snapshot_address_not?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_not_contains?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  axiom_snapshot_slot?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_gt?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_gte?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  axiom_snapshot_slot_lt?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_lte?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_not?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  destination_address?: InputMaybe<Scalars['String']['input']>;
  destination_address_contains?: InputMaybe<Scalars['String']['input']>;
  destination_address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  destination_address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  destination_address_not?: InputMaybe<Scalars['String']['input']>;
  destination_address_not_contains?: InputMaybe<Scalars['String']['input']>;
  destination_address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  destination_address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quorum?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_gt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_gte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  quorum_lt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_lte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_not?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  timelock_delay?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timelock_delay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_not?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timelock_veto_guardian?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_contains?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timelock_veto_guardian_not?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_not_contains?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  treasury?: InputMaybe<Scalars['String']['input']>;
  treasury_chain?: InputMaybe<Scalars['Int']['input']>;
  treasury_chain_gt?: InputMaybe<Scalars['Int']['input']>;
  treasury_chain_gte?: InputMaybe<Scalars['Int']['input']>;
  treasury_chain_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  treasury_chain_lt?: InputMaybe<Scalars['Int']['input']>;
  treasury_chain_lte?: InputMaybe<Scalars['Int']['input']>;
  treasury_chain_not?: InputMaybe<Scalars['Int']['input']>;
  treasury_chain_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  treasury_contains?: InputMaybe<Scalars['String']['input']>;
  treasury_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  treasury_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  treasury_not?: InputMaybe<Scalars['String']['input']>;
  treasury_not_contains?: InputMaybe<Scalars['String']['input']>;
  treasury_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  treasury_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ExecutionStrategy_OrderBy =
  | '_indexer'
  | 'address'
  | 'axiom_snapshot_address'
  | 'axiom_snapshot_slot'
  | 'destination_address'
  | 'id'
  | 'quorum'
  | 'timelock_delay'
  | 'timelock_veto_guardian'
  | 'treasury'
  | 'treasury_chain'
  | 'type';

/** Leaderboard tracks user participation statistics within a space */
export type Leaderboard = {
  _indexer: Scalars['String']['output'];
  /** Unique identifier for the leaderboard entry */
  id: Scalars['String']['output'];
  /** Number of proposals created by user in this space */
  proposal_count: Scalars['Int']['output'];
  /** Space this leaderboard entry belongs to */
  space: Space;
  /** User being tracked */
  user: User;
  /** Number of votes cast by user in this space */
  vote_count: Scalars['Int']['output'];
};

export type Leaderboard_Space_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  controller?: InputMaybe<Scalars['String']['input']>;
  controller_contains?: InputMaybe<Scalars['String']['input']>;
  controller_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  controller_not?: InputMaybe<Scalars['String']['input']>;
  controller_not_contains?: InputMaybe<Scalars['String']['input']>;
  controller_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  max_voting_period?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_gt?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_gte?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  max_voting_period_lt?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_lte?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_not?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  min_voting_period?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_gt?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_gte?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  min_voting_period_lt?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_lte?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_not?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  next_strategy_index?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_gt?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_gte?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  next_strategy_index_lt?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_lte?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_not?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_threshold?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_gt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_gte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  proposal_threshold_lt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_lte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_not?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  proposer_count?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposer_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  turbo?: InputMaybe<Scalars['Boolean']['input']>;
  turbo_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  turbo_not?: InputMaybe<Scalars['Boolean']['input']>;
  turbo_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy_not?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy_params_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_not_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  verified_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  verified_not?: InputMaybe<Scalars['Boolean']['input']>;
  verified_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voter_count?: InputMaybe<Scalars['Int']['input']>;
  voter_count_gt?: InputMaybe<Scalars['Int']['input']>;
  voter_count_gte?: InputMaybe<Scalars['Int']['input']>;
  voter_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voter_count_lt?: InputMaybe<Scalars['Int']['input']>;
  voter_count_lte?: InputMaybe<Scalars['Int']['input']>;
  voter_count_not?: InputMaybe<Scalars['Int']['input']>;
  voter_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_delay?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_gt?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_gte?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_delay_lt?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_lte?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_not?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_power_validation_strategy_metadata?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  voting_power_validation_strategy_metadata_not?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vp_decimals?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vp_decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_not?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Leaderboard_User_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_type?: InputMaybe<Scalars['Int']['input']>;
  address_type_gt?: InputMaybe<Scalars['Int']['input']>;
  address_type_gte?: InputMaybe<Scalars['Int']['input']>;
  address_type_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  address_type_lt?: InputMaybe<Scalars['Int']['input']>;
  address_type_lte?: InputMaybe<Scalars['Int']['input']>;
  address_type_not?: InputMaybe<Scalars['Int']['input']>;
  address_type_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proposal_count?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Leaderboard_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proposal_count?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_?: InputMaybe<Leaderboard_Space_Filter>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<Leaderboard_User_Filter>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Leaderboard_OrderBy =
  | '_indexer'
  | 'id'
  | 'proposal_count'
  | 'space'
  | 'user'
  | 'vote_count';

/** Network statistics for blockchain network activity */
export type Network = {
  _indexer: Scalars['String']['output'];
  /** Network identifier (e.g., 'sn', 'eth', 'sep') */
  id: Scalars['String']['output'];
  /** Total number of proposals on this network */
  proposal_count: Scalars['Int']['output'];
  /** Total number of spaces on this network */
  space_count: Scalars['Int']['output'];
  /** Total number of votes on this network */
  vote_count: Scalars['Int']['output'];
};

export type Network_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proposal_count?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space_count?: InputMaybe<Scalars['Int']['input']>;
  space_count_gt?: InputMaybe<Scalars['Int']['input']>;
  space_count_gte?: InputMaybe<Scalars['Int']['input']>;
  space_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space_count_lt?: InputMaybe<Scalars['Int']['input']>;
  space_count_lte?: InputMaybe<Scalars['Int']['input']>;
  space_count_not?: InputMaybe<Scalars['Int']['input']>;
  space_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Network_OrderBy =
  | '_indexer'
  | 'id'
  | 'proposal_count'
  | 'space_count'
  | 'vote_count';

export type OrderDirection =
  | 'asc'
  | 'desc';

/** Proposal represents a governance proposal within a space */
export type Proposal = {
  _indexer: Scalars['String']['output'];
  /** User who created the proposal */
  author: User;
  /** Axiom snapshot contract address for storage proofs */
  axiom_snapshot_address: Maybe<Scalars['String']['output']>;
  /** Axiom snapshot storage slot for proofs */
  axiom_snapshot_slot: Maybe<Scalars['BigInt']['output']>;
  /** Whether proposal has been cancelled */
  cancelled: Scalars['Boolean']['output'];
  /** Whether proposal is completed (deprecated: use execution_settled) */
  completed: Scalars['Boolean']['output'];
  /** Timestamp when proposal was created */
  created: Scalars['Int']['output'];
  /** Timestamp when proposal was last edited (optional) */
  edited: Maybe<Scalars['Int']['output']>;
  /** Whether proposal has been executed */
  executed: Scalars['Boolean']['output'];
  /** Destination address for proposal execution */
  execution_destination: Maybe<Scalars['String']['output']>;
  /** Hash for tracking proposal execution */
  execution_hash: Scalars['String']['output'];
  /** Whether proposal is ready for execution */
  execution_ready: Scalars['Boolean']['output'];
  /** Whether proposal execution has been settled */
  execution_settled: Scalars['Boolean']['output'];
  /** Address of the execution strategy contract */
  execution_strategy: Scalars['String']['output'];
  /** Detailed execution strategy configuration */
  execution_strategy_details: Maybe<ExecutionStrategy>;
  /** Type of execution strategy used */
  execution_strategy_type: Scalars['String']['output'];
  /** Timestamp when proposal can be executed */
  execution_time: Scalars['Int']['output'];
  /** Transaction hash of proposal execution (optional) */
  execution_tx: Maybe<Scalars['String']['output']>;
  /** Unique identifier for the proposal */
  id: Scalars['String']['output'];
  /** UI link to proposal interface */
  link: Scalars['String']['output'];
  /** Maximum block number when voting must end */
  max_end: Scalars['Int']['output'];
  /** Proposal metadata containing title, body, and choices */
  metadata: Maybe<ProposalMetadataItem>;
  /** Minimum block number when voting can end */
  min_end: Scalars['Int']['output'];
  /** Privacy level of the proposal */
  privacy: Scalars['String']['output'];
  /** Numeric ID of the proposal within the space */
  proposal_id: Scalars['Int']['output'];
  /** Minimum voting power required for execution */
  quorum: Scalars['BigDecimalVP']['output'];
  /** Voting power for choice 1 */
  scores_1: Scalars['BigDecimalVP']['output'];
  /** Parsed voting power for choice 1 as float */
  scores_1_parsed: Scalars['Float']['output'];
  /** Voting power for choice 2 */
  scores_2: Scalars['BigDecimalVP']['output'];
  /** Parsed voting power for choice 2 as float */
  scores_2_parsed: Scalars['Float']['output'];
  /** Voting power for choice 3 */
  scores_3: Scalars['BigDecimalVP']['output'];
  /** Parsed voting power for choice 3 as float */
  scores_3_parsed: Scalars['Float']['output'];
  /** Total voting power cast */
  scores_total: Scalars['BigDecimalVP']['output'];
  /** Parsed total voting power as float */
  scores_total_parsed: Scalars['Float']['output'];
  /** Block number used for voting power calculation */
  snapshot: Scalars['Int']['output'];
  /** Space this proposal belongs to */
  space: Space;
  /** When voting starts (blocks on EVM, seconds on Starknet) */
  start: Scalars['Int']['output'];
  /** Array of strategy contract addresses */
  strategies: Array<Scalars['String']['output']>;
  /** Array of strategy indices used for voting */
  strategies_indices: Array<Scalars['Int']['output']>;
  /** Array of strategy parameters */
  strategies_params: Array<Scalars['String']['output']>;
  /** Delay in blocks before timelock execution */
  timelock_delay: Maybe<Scalars['BigInt']['output']>;
  /** Guardian address that can veto timelock executions */
  timelock_veto_guardian: Maybe<Scalars['String']['output']>;
  /** Array of treasury addresses involved in execution */
  treasuries: Array<Scalars['String']['output']>;
  /** Transaction hash of proposal creation */
  tx: Scalars['String']['output'];
  /** Type of proposal (e.g., 'basic', 'single-choice') */
  type: Scalars['String']['output'];
  /** Transaction hash of proposal veto (optional) */
  veto_tx: Maybe<Scalars['String']['output']>;
  /** Whether proposal has been vetoed */
  vetoed: Scalars['Boolean']['output'];
  /** Number of votes cast on this proposal */
  vote_count: Scalars['Int']['output'];
  /** Number of decimal places for voting power display */
  vp_decimals: Scalars['Int']['output'];
};

/** Metadata for a proposal containing display content and voting options */
export type ProposalMetadataItem = {
  _indexer: Scalars['String']['output'];
  /** Main body text of the proposal */
  body: Maybe<Scalars['Text']['output']>;
  /** Array of voting choices (e.g., ['For', 'Against', 'Abstain']) */
  choices: Array<Scalars['String']['output']>;
  /** Link to discussion forum or thread */
  discussion: Maybe<Scalars['Text']['output']>;
  /** Execution details and parameters */
  execution: Maybe<Scalars['Text']['output']>;
  /** Unique identifier for the metadata item */
  id: Scalars['String']['output'];
  /** Array of label tags for categorization */
  labels: Array<Scalars['String']['output']>;
  /** Title of the proposal */
  title: Maybe<Scalars['Text']['output']>;
};

export type ProposalMetadataItem_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  body_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discussion_contains?: InputMaybe<Scalars['String']['input']>;
  discussion_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discussion_not_contains?: InputMaybe<Scalars['String']['input']>;
  discussion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_contains?: InputMaybe<Scalars['String']['input']>;
  execution_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_not_contains?: InputMaybe<Scalars['String']['input']>;
  execution_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type ProposalMetadataItem_OrderBy =
  | '_indexer'
  | 'body'
  | 'discussion'
  | 'execution'
  | 'id'
  | 'title';

export type Proposal_ExecutionStrategy_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  axiom_snapshot_address?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_contains?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  axiom_snapshot_address_not?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_not_contains?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  axiom_snapshot_slot?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_gt?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_gte?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  axiom_snapshot_slot_lt?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_lte?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_not?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  destination_address?: InputMaybe<Scalars['String']['input']>;
  destination_address_contains?: InputMaybe<Scalars['String']['input']>;
  destination_address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  destination_address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  destination_address_not?: InputMaybe<Scalars['String']['input']>;
  destination_address_not_contains?: InputMaybe<Scalars['String']['input']>;
  destination_address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  destination_address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quorum?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_gt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_gte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  quorum_lt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_lte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_not?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  timelock_delay?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timelock_delay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_not?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timelock_veto_guardian?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_contains?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timelock_veto_guardian_not?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_not_contains?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  treasury?: InputMaybe<Scalars['String']['input']>;
  treasury_chain?: InputMaybe<Scalars['Int']['input']>;
  treasury_chain_gt?: InputMaybe<Scalars['Int']['input']>;
  treasury_chain_gte?: InputMaybe<Scalars['Int']['input']>;
  treasury_chain_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  treasury_chain_lt?: InputMaybe<Scalars['Int']['input']>;
  treasury_chain_lte?: InputMaybe<Scalars['Int']['input']>;
  treasury_chain_not?: InputMaybe<Scalars['Int']['input']>;
  treasury_chain_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  treasury_contains?: InputMaybe<Scalars['String']['input']>;
  treasury_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  treasury_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  treasury_not?: InputMaybe<Scalars['String']['input']>;
  treasury_not_contains?: InputMaybe<Scalars['String']['input']>;
  treasury_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  treasury_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Proposal_ProposalMetadataItem_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  body_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discussion_contains?: InputMaybe<Scalars['String']['input']>;
  discussion_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discussion_not_contains?: InputMaybe<Scalars['String']['input']>;
  discussion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_contains?: InputMaybe<Scalars['String']['input']>;
  execution_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_not_contains?: InputMaybe<Scalars['String']['input']>;
  execution_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Proposal_Space_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  controller?: InputMaybe<Scalars['String']['input']>;
  controller_contains?: InputMaybe<Scalars['String']['input']>;
  controller_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  controller_not?: InputMaybe<Scalars['String']['input']>;
  controller_not_contains?: InputMaybe<Scalars['String']['input']>;
  controller_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  max_voting_period?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_gt?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_gte?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  max_voting_period_lt?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_lte?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_not?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  min_voting_period?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_gt?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_gte?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  min_voting_period_lt?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_lte?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_not?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  next_strategy_index?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_gt?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_gte?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  next_strategy_index_lt?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_lte?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_not?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_threshold?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_gt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_gte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  proposal_threshold_lt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_lte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_not?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  proposer_count?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposer_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  turbo?: InputMaybe<Scalars['Boolean']['input']>;
  turbo_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  turbo_not?: InputMaybe<Scalars['Boolean']['input']>;
  turbo_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy_not?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy_params_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_not_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  verified_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  verified_not?: InputMaybe<Scalars['Boolean']['input']>;
  verified_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voter_count?: InputMaybe<Scalars['Int']['input']>;
  voter_count_gt?: InputMaybe<Scalars['Int']['input']>;
  voter_count_gte?: InputMaybe<Scalars['Int']['input']>;
  voter_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voter_count_lt?: InputMaybe<Scalars['Int']['input']>;
  voter_count_lte?: InputMaybe<Scalars['Int']['input']>;
  voter_count_not?: InputMaybe<Scalars['Int']['input']>;
  voter_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_delay?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_gt?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_gte?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_delay_lt?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_lte?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_not?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_power_validation_strategy_metadata?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  voting_power_validation_strategy_metadata_not?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vp_decimals?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vp_decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_not?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Proposal_User_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_type?: InputMaybe<Scalars['Int']['input']>;
  address_type_gt?: InputMaybe<Scalars['Int']['input']>;
  address_type_gte?: InputMaybe<Scalars['Int']['input']>;
  address_type_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  address_type_lt?: InputMaybe<Scalars['Int']['input']>;
  address_type_lte?: InputMaybe<Scalars['Int']['input']>;
  address_type_not?: InputMaybe<Scalars['Int']['input']>;
  address_type_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proposal_count?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Proposal_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author?: InputMaybe<Scalars['String']['input']>;
  author_?: InputMaybe<Proposal_User_Filter>;
  author_contains?: InputMaybe<Scalars['String']['input']>;
  author_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not?: InputMaybe<Scalars['String']['input']>;
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  author_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  axiom_snapshot_address?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_contains?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  axiom_snapshot_address_not?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_not_contains?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  axiom_snapshot_address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  axiom_snapshot_slot?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_gt?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_gte?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  axiom_snapshot_slot_lt?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_lte?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_not?: InputMaybe<Scalars['BigInt']['input']>;
  axiom_snapshot_slot_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  cancelled?: InputMaybe<Scalars['Boolean']['input']>;
  cancelled_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  cancelled_not?: InputMaybe<Scalars['Boolean']['input']>;
  cancelled_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  completed_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  completed_not?: InputMaybe<Scalars['Boolean']['input']>;
  completed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  edited?: InputMaybe<Scalars['Int']['input']>;
  edited_gt?: InputMaybe<Scalars['Int']['input']>;
  edited_gte?: InputMaybe<Scalars['Int']['input']>;
  edited_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  edited_lt?: InputMaybe<Scalars['Int']['input']>;
  edited_lte?: InputMaybe<Scalars['Int']['input']>;
  edited_not?: InputMaybe<Scalars['Int']['input']>;
  edited_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  executed?: InputMaybe<Scalars['Boolean']['input']>;
  executed_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  executed_not?: InputMaybe<Scalars['Boolean']['input']>;
  executed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  execution_destination?: InputMaybe<Scalars['String']['input']>;
  execution_destination_contains?: InputMaybe<Scalars['String']['input']>;
  execution_destination_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_destination_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  execution_destination_not?: InputMaybe<Scalars['String']['input']>;
  execution_destination_not_contains?: InputMaybe<Scalars['String']['input']>;
  execution_destination_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_destination_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  execution_hash?: InputMaybe<Scalars['String']['input']>;
  execution_hash_contains?: InputMaybe<Scalars['String']['input']>;
  execution_hash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  execution_hash_not?: InputMaybe<Scalars['String']['input']>;
  execution_hash_not_contains?: InputMaybe<Scalars['String']['input']>;
  execution_hash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_hash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  execution_ready?: InputMaybe<Scalars['Boolean']['input']>;
  execution_ready_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  execution_ready_not?: InputMaybe<Scalars['Boolean']['input']>;
  execution_ready_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  execution_settled?: InputMaybe<Scalars['Boolean']['input']>;
  execution_settled_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  execution_settled_not?: InputMaybe<Scalars['Boolean']['input']>;
  execution_settled_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  execution_strategy?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_contains?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_details?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_details_?: InputMaybe<Proposal_ExecutionStrategy_Filter>;
  execution_strategy_details_contains?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_details_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_details_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  execution_strategy_details_not?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_details_not_contains?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_details_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_details_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  execution_strategy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  execution_strategy_not?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_not_contains?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  execution_strategy_type?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_type_contains?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  execution_strategy_type_not?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_type_not_contains?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_strategy_type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  execution_time?: InputMaybe<Scalars['Int']['input']>;
  execution_time_gt?: InputMaybe<Scalars['Int']['input']>;
  execution_time_gte?: InputMaybe<Scalars['Int']['input']>;
  execution_time_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  execution_time_lt?: InputMaybe<Scalars['Int']['input']>;
  execution_time_lte?: InputMaybe<Scalars['Int']['input']>;
  execution_time_not?: InputMaybe<Scalars['Int']['input']>;
  execution_time_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  execution_tx?: InputMaybe<Scalars['String']['input']>;
  execution_tx_contains?: InputMaybe<Scalars['String']['input']>;
  execution_tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_tx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  execution_tx_not?: InputMaybe<Scalars['String']['input']>;
  execution_tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  execution_tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  execution_tx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  max_end?: InputMaybe<Scalars['Int']['input']>;
  max_end_gt?: InputMaybe<Scalars['Int']['input']>;
  max_end_gte?: InputMaybe<Scalars['Int']['input']>;
  max_end_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  max_end_lt?: InputMaybe<Scalars['Int']['input']>;
  max_end_lte?: InputMaybe<Scalars['Int']['input']>;
  max_end_not?: InputMaybe<Scalars['Int']['input']>;
  max_end_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_?: InputMaybe<Proposal_ProposalMetadataItem_Filter>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  min_end?: InputMaybe<Scalars['Int']['input']>;
  min_end_gt?: InputMaybe<Scalars['Int']['input']>;
  min_end_gte?: InputMaybe<Scalars['Int']['input']>;
  min_end_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  min_end_lt?: InputMaybe<Scalars['Int']['input']>;
  min_end_lte?: InputMaybe<Scalars['Int']['input']>;
  min_end_not?: InputMaybe<Scalars['Int']['input']>;
  min_end_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  privacy?: InputMaybe<Scalars['String']['input']>;
  privacy_contains?: InputMaybe<Scalars['String']['input']>;
  privacy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  privacy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  privacy_not?: InputMaybe<Scalars['String']['input']>;
  privacy_not_contains?: InputMaybe<Scalars['String']['input']>;
  privacy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  privacy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  proposal_id_gt?: InputMaybe<Scalars['Int']['input']>;
  proposal_id_gte?: InputMaybe<Scalars['Int']['input']>;
  proposal_id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_id_lt?: InputMaybe<Scalars['Int']['input']>;
  proposal_id_lte?: InputMaybe<Scalars['Int']['input']>;
  proposal_id_not?: InputMaybe<Scalars['Int']['input']>;
  proposal_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quorum?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_gt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_gte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  quorum_lt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_lte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_not?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  quorum_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  scores_1?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_1_gt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_1_gte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_1_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  scores_1_lt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_1_lte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_1_not?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_1_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  scores_1_parsed?: InputMaybe<Scalars['Float']['input']>;
  scores_1_parsed_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  scores_1_parsed_not?: InputMaybe<Scalars['Float']['input']>;
  scores_1_parsed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  scores_2?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_2_gt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_2_gte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_2_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  scores_2_lt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_2_lte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_2_not?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_2_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  scores_2_parsed?: InputMaybe<Scalars['Float']['input']>;
  scores_2_parsed_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  scores_2_parsed_not?: InputMaybe<Scalars['Float']['input']>;
  scores_2_parsed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  scores_3?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_3_gt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_3_gte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_3_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  scores_3_lt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_3_lte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_3_not?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_3_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  scores_3_parsed?: InputMaybe<Scalars['Float']['input']>;
  scores_3_parsed_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  scores_3_parsed_not?: InputMaybe<Scalars['Float']['input']>;
  scores_3_parsed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  scores_total?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_total_gt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_total_gte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_total_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  scores_total_lt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_total_lte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_total_not?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  scores_total_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  scores_total_parsed?: InputMaybe<Scalars['Float']['input']>;
  scores_total_parsed_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  scores_total_parsed_not?: InputMaybe<Scalars['Float']['input']>;
  scores_total_parsed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  snapshot?: InputMaybe<Scalars['Int']['input']>;
  snapshot_gt?: InputMaybe<Scalars['Int']['input']>;
  snapshot_gte?: InputMaybe<Scalars['Int']['input']>;
  snapshot_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  snapshot_lt?: InputMaybe<Scalars['Int']['input']>;
  snapshot_lte?: InputMaybe<Scalars['Int']['input']>;
  snapshot_not?: InputMaybe<Scalars['Int']['input']>;
  snapshot_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_?: InputMaybe<Proposal_Space_Filter>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  start?: InputMaybe<Scalars['Int']['input']>;
  start_gt?: InputMaybe<Scalars['Int']['input']>;
  start_gte?: InputMaybe<Scalars['Int']['input']>;
  start_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  start_lt?: InputMaybe<Scalars['Int']['input']>;
  start_lte?: InputMaybe<Scalars['Int']['input']>;
  start_not?: InputMaybe<Scalars['Int']['input']>;
  start_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  timelock_delay?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timelock_delay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_not?: InputMaybe<Scalars['BigInt']['input']>;
  timelock_delay_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timelock_veto_guardian?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_contains?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timelock_veto_guardian_not?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_not_contains?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  timelock_veto_guardian_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  veto_tx?: InputMaybe<Scalars['String']['input']>;
  veto_tx_contains?: InputMaybe<Scalars['String']['input']>;
  veto_tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  veto_tx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  veto_tx_not?: InputMaybe<Scalars['String']['input']>;
  veto_tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  veto_tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  veto_tx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vetoed?: InputMaybe<Scalars['Boolean']['input']>;
  vetoed_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  vetoed_not?: InputMaybe<Scalars['Boolean']['input']>;
  vetoed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vp_decimals?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vp_decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_not?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Proposal_OrderBy =
  | '_indexer'
  | 'author'
  | 'axiom_snapshot_address'
  | 'axiom_snapshot_slot'
  | 'cancelled'
  | 'completed'
  | 'created'
  | 'edited'
  | 'executed'
  | 'execution_destination'
  | 'execution_hash'
  | 'execution_ready'
  | 'execution_settled'
  | 'execution_strategy'
  | 'execution_strategy_details'
  | 'execution_strategy_type'
  | 'execution_time'
  | 'execution_tx'
  | 'id'
  | 'link'
  | 'max_end'
  | 'metadata'
  | 'min_end'
  | 'privacy'
  | 'proposal_id'
  | 'quorum'
  | 'scores_1'
  | 'scores_1_parsed'
  | 'scores_2'
  | 'scores_2_parsed'
  | 'scores_3'
  | 'scores_3_parsed'
  | 'scores_total'
  | 'scores_total_parsed'
  | 'snapshot'
  | 'space'
  | 'start'
  | 'timelock_delay'
  | 'timelock_veto_guardian'
  | 'tx'
  | 'type'
  | 'veto_tx'
  | 'vetoed'
  | 'vote_count'
  | 'vp_decimals';

export type Query = {
  _checkpoint: Maybe<_Checkpoint>;
  _checkpoints: Array<_Checkpoint>;
  _metadata: Maybe<_Metadata>;
  _metadatas: Array<_Metadata>;
  executionhash: Maybe<ExecutionHash>;
  executionhashes: Array<ExecutionHash>;
  executionstrategies: Array<ExecutionStrategy>;
  executionstrategy: Maybe<ExecutionStrategy>;
  leaderboard: Maybe<Leaderboard>;
  leaderboards: Array<Leaderboard>;
  network: Maybe<Network>;
  networks: Array<Network>;
  proposal: Maybe<Proposal>;
  proposalmetadataitem: Maybe<ProposalMetadataItem>;
  proposalmetadataitems: Array<ProposalMetadataItem>;
  proposals: Array<Proposal>;
  space: Maybe<Space>;
  spacemetadataitem: Maybe<SpaceMetadataItem>;
  spacemetadataitems: Array<SpaceMetadataItem>;
  spaces: Array<Space>;
  starknetl1execution: Maybe<StarknetL1Execution>;
  starknetl1executions: Array<StarknetL1Execution>;
  strategiesparsedmetadatadataitem: Maybe<StrategiesParsedMetadataDataItem>;
  strategiesparsedmetadatadataitems: Array<StrategiesParsedMetadataDataItem>;
  strategiesparsedmetadataitem: Maybe<StrategiesParsedMetadataItem>;
  strategiesparsedmetadataitems: Array<StrategiesParsedMetadataItem>;
  user: Maybe<User>;
  users: Array<User>;
  vote: Maybe<Vote>;
  votemetadataitem: Maybe<VoteMetadataItem>;
  votemetadataitems: Array<VoteMetadataItem>;
  votes: Array<Vote>;
  votingpowervalidationstrategiesparsedmetadataitem: Maybe<VotingPowerValidationStrategiesParsedMetadataItem>;
  votingpowervalidationstrategiesparsedmetadataitems: Array<VotingPowerValidationStrategiesParsedMetadataItem>;
};


export type Query_CheckpointArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type Query_CheckpointsArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<_Checkpoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<_Checkpoint_Filter>;
};


export type Query_MetadataArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type Query_MetadatasArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<_Metadata_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<_Metadata_Filter>;
};


export type QueryExecutionhashArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExecutionhashesArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<ExecutionHash_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExecutionHash_Filter>;
};


export type QueryExecutionstrategiesArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<ExecutionStrategy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExecutionStrategy_Filter>;
};


export type QueryExecutionstrategyArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLeaderboardArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLeaderboardsArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Leaderboard_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Leaderboard_Filter>;
};


export type QueryNetworkArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNetworksArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Network_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network_Filter>;
};


export type QueryProposalArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProposalmetadataitemArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProposalmetadataitemsArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<ProposalMetadataItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProposalMetadataItem_Filter>;
};


export type QueryProposalsArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Proposal_Filter>;
};


export type QuerySpaceArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySpacemetadataitemArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySpacemetadataitemsArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<SpaceMetadataItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SpaceMetadataItem_Filter>;
};


export type QuerySpacesArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Space_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Space_Filter>;
};


export type QueryStarknetl1executionArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStarknetl1executionsArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<StarknetL1Execution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StarknetL1Execution_Filter>;
};


export type QueryStrategiesparsedmetadatadataitemArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStrategiesparsedmetadatadataitemsArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<StrategiesParsedMetadataDataItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StrategiesParsedMetadataDataItem_Filter>;
};


export type QueryStrategiesparsedmetadataitemArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStrategiesparsedmetadataitemsArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<StrategiesParsedMetadataItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StrategiesParsedMetadataItem_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<User_Filter>;
};


export type QueryVoteArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVotemetadataitemArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVotemetadataitemsArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<VoteMetadataItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VoteMetadataItem_Filter>;
};


export type QueryVotesArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Vote_Filter>;
};


export type QueryVotingpowervalidationstrategiesparsedmetadataitemArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  indexer?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVotingpowervalidationstrategiesparsedmetadataitemsArgs = {
  block?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<VotingPowerValidationStrategiesParsedMetadataItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VotingPowerValidationStrategiesParsedMetadataItem_Filter>;
};

/** Space represents a DAO or governance organization on Snapshot X */
export type Space = {
  _indexer: Scalars['String']['output'];
  /** Array of authenticator contract addresses for proposal validation */
  authenticators: Array<Scalars['String']['output']>;
  /** Address of the space controller/owner */
  controller: Scalars['String']['output'];
  /** Timestamp when the space was created */
  created: Scalars['Int']['output'];
  /** Unique identifier for the space */
  id: Scalars['String']['output'];
  /** UI link to space interface */
  link: Scalars['String']['output'];
  /** Maximum voting period duration (blocks on EVM, seconds on Starknet) */
  max_voting_period: Scalars['Int']['output'];
  /** Space metadata containing name, description, avatar, and other details */
  metadata: Maybe<SpaceMetadataItem>;
  /** Minimum voting period duration (blocks on EVM, seconds on Starknet) */
  min_voting_period: Scalars['Int']['output'];
  /** Index for the next strategy to be added */
  next_strategy_index: Scalars['Int']['output'];
  /** Total number of proposals created in this space */
  proposal_count: Scalars['Int']['output'];
  /** Minimum voting power required to create a proposal */
  proposal_threshold: Scalars['BigDecimalVP']['output'];
  /** All proposals belonging to this space */
  proposals: Array<Proposal>;
  /** Number of unique proposers in this space */
  proposer_count: Scalars['Int']['output'];
  /** Protocol of the space ('snapshot-x', 'governor-bravo') */
  protocol: Scalars['String']['output'];
  /** Array of strategy contract addresses */
  strategies: Array<Scalars['String']['output']>;
  /** Array of decimal places for each strategy's voting power */
  strategies_decimals: Array<Scalars['Int']['output']>;
  /** Array of strategy indices currently active */
  strategies_indices: Array<Scalars['Int']['output']>;
  /** Array of strategy metadata as JSON strings */
  strategies_metadata: Array<Scalars['String']['output']>;
  /** Array of strategy parameters as encoded strings */
  strategies_params: Array<Scalars['String']['output']>;
  /** Parsed strategy metadata with structured data */
  strategies_parsed_metadata: Array<StrategiesParsedMetadataItem>;
  /** Whether the space has turbo mode enabled (premium space) */
  turbo: Scalars['Boolean']['output'];
  /** Transaction hash of space creation */
  tx: Scalars['String']['output'];
  /** Main validation strategy contract address */
  validation_strategy: Scalars['String']['output'];
  /** Parameters for the validation strategy */
  validation_strategy_params: Scalars['Text']['output'];
  /** Whether the space is verified by Snapshot team */
  verified: Scalars['Boolean']['output'];
  /** Total number of votes cast in this space */
  vote_count: Scalars['Int']['output'];
  /** Number of unique voters in this space */
  voter_count: Scalars['Int']['output'];
  /** Delay before voting starts after proposal creation (blocks on EVM, seconds on Starknet) */
  voting_delay: Scalars['Int']['output'];
  /** Parsed metadata for voting power validation strategies */
  voting_power_validation_strategies_parsed_metadata: Array<VotingPowerValidationStrategiesParsedMetadataItem>;
  /** Metadata for voting power validation strategies */
  voting_power_validation_strategy_metadata: Scalars['String']['output'];
  /** Array of voting power validation strategy addresses */
  voting_power_validation_strategy_strategies: Array<Scalars['String']['output']>;
  /** Array of parameters for voting power validation strategies */
  voting_power_validation_strategy_strategies_params: Array<Scalars['String']['output']>;
  /** Number of decimal places for voting power display */
  vp_decimals: Scalars['Int']['output'];
};

/** Metadata for a Space containing display information and configuration */
export type SpaceMetadataItem = {
  _indexer: Scalars['String']['output'];
  /** Description of the space and its purpose */
  about: Scalars['String']['output'];
  /** Avatar image URL for the space */
  avatar: Scalars['String']['output'];
  /** Cover image URL for the space */
  cover: Scalars['String']['output'];
  /** Array of delegation contract addresses */
  delegations: Array<Scalars['String']['output']>;
  /** Discord server invite link */
  discord: Scalars['String']['output'];
  /** Array of executor contract addresses */
  executors: Array<Scalars['String']['output']>;
  /** Array of executor destination addresses */
  executors_destinations: Array<Scalars['String']['output']>;
  /** Array of execution strategy configurations */
  executors_strategies: Array<ExecutionStrategy>;
  /** Array of executor types (e.g., 'SimpleQuorum', 'Timelock') */
  executors_types: Array<Scalars['String']['output']>;
  /** External website URL for the space */
  external_url: Scalars['String']['output'];
  /** Farcaster profile or channel */
  farcaster: Scalars['String']['output'];
  /** GitHub organization or repository link */
  github: Scalars['String']['output'];
  /** Unique identifier for the metadata item */
  id: Scalars['String']['output'];
  /** List of labels that can be used on this space for tagging proposals */
  labels: Array<Scalars['String']['output']>;
  /** Display name of the space */
  name: Scalars['String']['output'];
  /** Array of treasury contract addresses */
  treasuries: Array<Scalars['String']['output']>;
  /** Twitter/X handle or URL */
  twitter: Scalars['String']['output'];
  /** Symbol for voting power display (e.g., 'UNI', 'AAVE') */
  voting_power_symbol: Scalars['String']['output'];
  /** Unused field (legacy) */
  wallet: Scalars['String']['output'];
};

export type SpaceMetadataItem_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  about?: InputMaybe<Scalars['String']['input']>;
  about_contains?: InputMaybe<Scalars['String']['input']>;
  about_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  about_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  about_not?: InputMaybe<Scalars['String']['input']>;
  about_not_contains?: InputMaybe<Scalars['String']['input']>;
  about_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  about_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatar_contains?: InputMaybe<Scalars['String']['input']>;
  avatar_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  avatar_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  avatar_not?: InputMaybe<Scalars['String']['input']>;
  avatar_not_contains?: InputMaybe<Scalars['String']['input']>;
  avatar_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  avatar_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cover?: InputMaybe<Scalars['String']['input']>;
  cover_contains?: InputMaybe<Scalars['String']['input']>;
  cover_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cover_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cover_not?: InputMaybe<Scalars['String']['input']>;
  cover_not_contains?: InputMaybe<Scalars['String']['input']>;
  cover_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cover_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  discord?: InputMaybe<Scalars['String']['input']>;
  discord_contains?: InputMaybe<Scalars['String']['input']>;
  discord_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discord_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  discord_not?: InputMaybe<Scalars['String']['input']>;
  discord_not_contains?: InputMaybe<Scalars['String']['input']>;
  discord_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discord_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external_url?: InputMaybe<Scalars['String']['input']>;
  external_url_contains?: InputMaybe<Scalars['String']['input']>;
  external_url_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  external_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external_url_not?: InputMaybe<Scalars['String']['input']>;
  external_url_not_contains?: InputMaybe<Scalars['String']['input']>;
  external_url_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  external_url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  farcaster?: InputMaybe<Scalars['String']['input']>;
  farcaster_contains?: InputMaybe<Scalars['String']['input']>;
  farcaster_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  farcaster_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  farcaster_not?: InputMaybe<Scalars['String']['input']>;
  farcaster_not_contains?: InputMaybe<Scalars['String']['input']>;
  farcaster_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  farcaster_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  github?: InputMaybe<Scalars['String']['input']>;
  github_contains?: InputMaybe<Scalars['String']['input']>;
  github_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  github_not?: InputMaybe<Scalars['String']['input']>;
  github_not_contains?: InputMaybe<Scalars['String']['input']>;
  github_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  twitter_contains?: InputMaybe<Scalars['String']['input']>;
  twitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitter_not?: InputMaybe<Scalars['String']['input']>;
  twitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  voting_power_symbol?: InputMaybe<Scalars['String']['input']>;
  voting_power_symbol_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_symbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  voting_power_symbol_not?: InputMaybe<Scalars['String']['input']>;
  voting_power_symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_symbol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wallet?: InputMaybe<Scalars['String']['input']>;
  wallet_contains?: InputMaybe<Scalars['String']['input']>;
  wallet_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wallet_not?: InputMaybe<Scalars['String']['input']>;
  wallet_not_contains?: InputMaybe<Scalars['String']['input']>;
  wallet_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SpaceMetadataItem_OrderBy =
  | '_indexer'
  | 'about'
  | 'avatar'
  | 'cover'
  | 'discord'
  | 'external_url'
  | 'farcaster'
  | 'github'
  | 'id'
  | 'name'
  | 'twitter'
  | 'voting_power_symbol'
  | 'wallet';

export type Space_SpaceMetadataItem_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  about?: InputMaybe<Scalars['String']['input']>;
  about_contains?: InputMaybe<Scalars['String']['input']>;
  about_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  about_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  about_not?: InputMaybe<Scalars['String']['input']>;
  about_not_contains?: InputMaybe<Scalars['String']['input']>;
  about_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  about_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatar_contains?: InputMaybe<Scalars['String']['input']>;
  avatar_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  avatar_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  avatar_not?: InputMaybe<Scalars['String']['input']>;
  avatar_not_contains?: InputMaybe<Scalars['String']['input']>;
  avatar_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  avatar_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cover?: InputMaybe<Scalars['String']['input']>;
  cover_contains?: InputMaybe<Scalars['String']['input']>;
  cover_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cover_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cover_not?: InputMaybe<Scalars['String']['input']>;
  cover_not_contains?: InputMaybe<Scalars['String']['input']>;
  cover_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cover_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  discord?: InputMaybe<Scalars['String']['input']>;
  discord_contains?: InputMaybe<Scalars['String']['input']>;
  discord_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discord_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  discord_not?: InputMaybe<Scalars['String']['input']>;
  discord_not_contains?: InputMaybe<Scalars['String']['input']>;
  discord_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  discord_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external_url?: InputMaybe<Scalars['String']['input']>;
  external_url_contains?: InputMaybe<Scalars['String']['input']>;
  external_url_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  external_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  external_url_not?: InputMaybe<Scalars['String']['input']>;
  external_url_not_contains?: InputMaybe<Scalars['String']['input']>;
  external_url_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  external_url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  farcaster?: InputMaybe<Scalars['String']['input']>;
  farcaster_contains?: InputMaybe<Scalars['String']['input']>;
  farcaster_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  farcaster_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  farcaster_not?: InputMaybe<Scalars['String']['input']>;
  farcaster_not_contains?: InputMaybe<Scalars['String']['input']>;
  farcaster_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  farcaster_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  github?: InputMaybe<Scalars['String']['input']>;
  github_contains?: InputMaybe<Scalars['String']['input']>;
  github_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  github_not?: InputMaybe<Scalars['String']['input']>;
  github_not_contains?: InputMaybe<Scalars['String']['input']>;
  github_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  twitter_contains?: InputMaybe<Scalars['String']['input']>;
  twitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitter_not?: InputMaybe<Scalars['String']['input']>;
  twitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  voting_power_symbol?: InputMaybe<Scalars['String']['input']>;
  voting_power_symbol_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_symbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  voting_power_symbol_not?: InputMaybe<Scalars['String']['input']>;
  voting_power_symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_symbol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wallet?: InputMaybe<Scalars['String']['input']>;
  wallet_contains?: InputMaybe<Scalars['String']['input']>;
  wallet_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wallet_not?: InputMaybe<Scalars['String']['input']>;
  wallet_not_contains?: InputMaybe<Scalars['String']['input']>;
  wallet_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wallet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Space_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  controller?: InputMaybe<Scalars['String']['input']>;
  controller_contains?: InputMaybe<Scalars['String']['input']>;
  controller_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  controller_not?: InputMaybe<Scalars['String']['input']>;
  controller_not_contains?: InputMaybe<Scalars['String']['input']>;
  controller_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  max_voting_period?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_gt?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_gte?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  max_voting_period_lt?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_lte?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_not?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_?: InputMaybe<Space_SpaceMetadataItem_Filter>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  min_voting_period?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_gt?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_gte?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  min_voting_period_lt?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_lte?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_not?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  next_strategy_index?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_gt?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_gte?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  next_strategy_index_lt?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_lte?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_not?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_threshold?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_gt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_gte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  proposal_threshold_lt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_lte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_not?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  proposer_count?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposer_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  turbo?: InputMaybe<Scalars['Boolean']['input']>;
  turbo_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  turbo_not?: InputMaybe<Scalars['Boolean']['input']>;
  turbo_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy_not?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy_params_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_not_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  verified_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  verified_not?: InputMaybe<Scalars['Boolean']['input']>;
  verified_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voter_count?: InputMaybe<Scalars['Int']['input']>;
  voter_count_gt?: InputMaybe<Scalars['Int']['input']>;
  voter_count_gte?: InputMaybe<Scalars['Int']['input']>;
  voter_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voter_count_lt?: InputMaybe<Scalars['Int']['input']>;
  voter_count_lte?: InputMaybe<Scalars['Int']['input']>;
  voter_count_not?: InputMaybe<Scalars['Int']['input']>;
  voter_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_delay?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_gt?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_gte?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_delay_lt?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_lte?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_not?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_power_validation_strategy_metadata?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  voting_power_validation_strategy_metadata_not?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vp_decimals?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vp_decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_not?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Space_OrderBy =
  | '_indexer'
  | 'controller'
  | 'created'
  | 'id'
  | 'link'
  | 'max_voting_period'
  | 'metadata'
  | 'min_voting_period'
  | 'next_strategy_index'
  | 'proposal_count'
  | 'proposal_threshold'
  | 'proposer_count'
  | 'protocol'
  | 'turbo'
  | 'tx'
  | 'validation_strategy'
  | 'validation_strategy_params'
  | 'verified'
  | 'vote_count'
  | 'voter_count'
  | 'voting_delay'
  | 'voting_power_validation_strategy_metadata'
  | 'vp_decimals';

/** Starknet L1 execution tracking for cross-chain proposal execution */
export type StarknetL1Execution = {
  _indexer: Scalars['String']['output'];
  /** Timestamp when L1 execution was initiated */
  created: Scalars['Int']['output'];
  /** Unique identifier for the L1 execution */
  id: Scalars['String']['output'];
  /** Proposal ID being executed on L1 */
  proposalId: Scalars['Int']['output'];
  /** Space ID where the proposal originated */
  space: Scalars['String']['output'];
  /** Transaction hash of L1 execution */
  tx: Scalars['String']['output'];
};

export type StarknetL1Execution_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proposalId?: InputMaybe<Scalars['Int']['input']>;
  proposalId_gt?: InputMaybe<Scalars['Int']['input']>;
  proposalId_gte?: InputMaybe<Scalars['Int']['input']>;
  proposalId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposalId_lt?: InputMaybe<Scalars['Int']['input']>;
  proposalId_lte?: InputMaybe<Scalars['Int']['input']>;
  proposalId_not?: InputMaybe<Scalars['Int']['input']>;
  proposalId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StarknetL1Execution_OrderBy =
  | '_indexer'
  | 'created'
  | 'id'
  | 'proposalId'
  | 'space'
  | 'tx';

/** Parsed metadata data for strategies containing token and display information */
export type StrategiesParsedMetadataDataItem = {
  _indexer: Scalars['String']['output'];
  /** Number of decimal places for the token */
  decimals: Scalars['Int']['output'];
  /** Description of what the strategy does */
  description: Scalars['String']['output'];
  /** Unique identifier for the data item */
  id: Scalars['String']['output'];
  /** Display name of the strategy */
  name: Scalars['String']['output'];
  /** Additional strategy-specific payload data */
  payload: Maybe<Scalars['String']['output']>;
  /** Token symbol (e.g., 'UNI', 'AAVE') */
  symbol: Scalars['String']['output'];
  /** Token contract address (optional) */
  token: Maybe<Scalars['String']['output']>;
};

export type StrategiesParsedMetadataDataItem_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  payload?: InputMaybe<Scalars['String']['input']>;
  payload_contains?: InputMaybe<Scalars['String']['input']>;
  payload_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  payload_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  payload_not?: InputMaybe<Scalars['String']['input']>;
  payload_not_contains?: InputMaybe<Scalars['String']['input']>;
  payload_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  payload_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StrategiesParsedMetadataDataItem_OrderBy =
  | '_indexer'
  | 'decimals'
  | 'description'
  | 'id'
  | 'name'
  | 'payload'
  | 'symbol'
  | 'token';

/** Parsed metadata for voting strategies */
export type StrategiesParsedMetadataItem = {
  _indexer: Scalars['String']['output'];
  /** Parsed metadata data for the strategy */
  data: Maybe<StrategiesParsedMetadataDataItem>;
  /** Unique identifier for the metadata item */
  id: Scalars['String']['output'];
  /** Index of the strategy in the space */
  index: Scalars['Int']['output'];
  /** Space this strategy belongs to */
  space: Space;
};

export type StrategiesParsedMetadataItem_Space_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  controller?: InputMaybe<Scalars['String']['input']>;
  controller_contains?: InputMaybe<Scalars['String']['input']>;
  controller_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  controller_not?: InputMaybe<Scalars['String']['input']>;
  controller_not_contains?: InputMaybe<Scalars['String']['input']>;
  controller_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  max_voting_period?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_gt?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_gte?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  max_voting_period_lt?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_lte?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_not?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  min_voting_period?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_gt?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_gte?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  min_voting_period_lt?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_lte?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_not?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  next_strategy_index?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_gt?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_gte?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  next_strategy_index_lt?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_lte?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_not?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_threshold?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_gt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_gte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  proposal_threshold_lt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_lte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_not?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  proposer_count?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposer_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  turbo?: InputMaybe<Scalars['Boolean']['input']>;
  turbo_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  turbo_not?: InputMaybe<Scalars['Boolean']['input']>;
  turbo_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy_not?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy_params_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_not_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  verified_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  verified_not?: InputMaybe<Scalars['Boolean']['input']>;
  verified_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voter_count?: InputMaybe<Scalars['Int']['input']>;
  voter_count_gt?: InputMaybe<Scalars['Int']['input']>;
  voter_count_gte?: InputMaybe<Scalars['Int']['input']>;
  voter_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voter_count_lt?: InputMaybe<Scalars['Int']['input']>;
  voter_count_lte?: InputMaybe<Scalars['Int']['input']>;
  voter_count_not?: InputMaybe<Scalars['Int']['input']>;
  voter_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_delay?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_gt?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_gte?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_delay_lt?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_lte?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_not?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_power_validation_strategy_metadata?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  voting_power_validation_strategy_metadata_not?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vp_decimals?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vp_decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_not?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type StrategiesParsedMetadataItem_StrategiesParsedMetadataDataItem_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  payload?: InputMaybe<Scalars['String']['input']>;
  payload_contains?: InputMaybe<Scalars['String']['input']>;
  payload_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  payload_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  payload_not?: InputMaybe<Scalars['String']['input']>;
  payload_not_contains?: InputMaybe<Scalars['String']['input']>;
  payload_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  payload_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StrategiesParsedMetadataItem_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  data?: InputMaybe<Scalars['String']['input']>;
  data_?: InputMaybe<StrategiesParsedMetadataItem_StrategiesParsedMetadataDataItem_Filter>;
  data_contains?: InputMaybe<Scalars['String']['input']>;
  data_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  data_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  data_not?: InputMaybe<Scalars['String']['input']>;
  data_not_contains?: InputMaybe<Scalars['String']['input']>;
  data_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  data_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  index?: InputMaybe<Scalars['Int']['input']>;
  index_gt?: InputMaybe<Scalars['Int']['input']>;
  index_gte?: InputMaybe<Scalars['Int']['input']>;
  index_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  index_lt?: InputMaybe<Scalars['Int']['input']>;
  index_lte?: InputMaybe<Scalars['Int']['input']>;
  index_not?: InputMaybe<Scalars['Int']['input']>;
  index_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_?: InputMaybe<StrategiesParsedMetadataItem_Space_Filter>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StrategiesParsedMetadataItem_OrderBy =
  | '_indexer'
  | 'data'
  | 'id'
  | 'index'
  | 'space';

/** User represents a governance participant (voter or proposer) */
export type User = {
  _indexer: Scalars['String']['output'];
  /** Type of address (1 for Ethereum, 2 for Starknet) */
  address_type: Scalars['Int']['output'];
  /** Timestamp when user first interacted */
  created: Scalars['Int']['output'];
  /** Unique identifier for the user (wallet address) */
  id: Scalars['String']['output'];
  /** Number of proposals created by this user */
  proposal_count: Scalars['Int']['output'];
  /** All proposals created by this user */
  proposals: Array<Proposal>;
  /** Number of votes cast by this user */
  vote_count: Scalars['Int']['output'];
  /** All votes cast by this user */
  votes: Array<Vote>;
};

export type User_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_type?: InputMaybe<Scalars['Int']['input']>;
  address_type_gt?: InputMaybe<Scalars['Int']['input']>;
  address_type_gte?: InputMaybe<Scalars['Int']['input']>;
  address_type_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  address_type_lt?: InputMaybe<Scalars['Int']['input']>;
  address_type_lte?: InputMaybe<Scalars['Int']['input']>;
  address_type_not?: InputMaybe<Scalars['Int']['input']>;
  address_type_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proposal_count?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type User_OrderBy =
  | '_indexer'
  | 'address_type'
  | 'created'
  | 'id'
  | 'proposal_count'
  | 'vote_count';

/** Vote represents a user's vote on a specific proposal */
export type Vote = {
  _indexer: Scalars['String']['output'];
  /** Voting choice (1, 2, 3, etc.) */
  choice: Scalars['Int']['output'];
  /** Timestamp when vote was cast */
  created: Scalars['Int']['output'];
  /** Unique identifier for the vote */
  id: Scalars['String']['output'];
  /** Vote metadata containing optional reason */
  metadata: Maybe<VoteMetadataItem>;
  /** Numeric ID of the proposal being voted on */
  proposal: Scalars['Int']['output'];
  /** Space where the vote was cast */
  space: Space;
  /** Transaction hash of the vote */
  tx: Scalars['String']['output'];
  /** User who cast the vote */
  voter: User;
  /** Voting power used for this vote */
  vp: Scalars['BigDecimalVP']['output'];
  /** Parsed voting power as float */
  vp_parsed: Scalars['Float']['output'];
};

/** Metadata for a vote containing optional reasoning */
export type VoteMetadataItem = {
  _indexer: Scalars['String']['output'];
  /** ElGamal ciphertext component 1 */
  c1: Maybe<Scalars['String']['output']>;
  /** ElGamal ciphertext component 2 */
  c2: Maybe<Scalars['String']['output']>;
  /** Whether the vote is encrypted */
  encrypted: Maybe<Scalars['Boolean']['output']>;
  /** Unique identifier for the metadata item */
  id: Scalars['String']['output'];
  /** Zero-knowledge proof */
  proof: Maybe<Scalars['String']['output']>;
  /** Whether the ZK proof has been verified */
  proof_verified: Maybe<Scalars['Boolean']['output']>;
  /** Optional reason provided by the voter */
  reason: Scalars['Text']['output'];
};

export type VoteMetadataItem_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  c1?: InputMaybe<Scalars['String']['input']>;
  c1_contains?: InputMaybe<Scalars['String']['input']>;
  c1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  c1_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  c1_not?: InputMaybe<Scalars['String']['input']>;
  c1_not_contains?: InputMaybe<Scalars['String']['input']>;
  c1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  c1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  c2?: InputMaybe<Scalars['String']['input']>;
  c2_contains?: InputMaybe<Scalars['String']['input']>;
  c2_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  c2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  c2_not?: InputMaybe<Scalars['String']['input']>;
  c2_not_contains?: InputMaybe<Scalars['String']['input']>;
  c2_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  c2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  encrypted?: InputMaybe<Scalars['Boolean']['input']>;
  encrypted_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  encrypted_not?: InputMaybe<Scalars['Boolean']['input']>;
  encrypted_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proof?: InputMaybe<Scalars['String']['input']>;
  proof_contains?: InputMaybe<Scalars['String']['input']>;
  proof_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proof_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proof_not?: InputMaybe<Scalars['String']['input']>;
  proof_not_contains?: InputMaybe<Scalars['String']['input']>;
  proof_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proof_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proof_verified?: InputMaybe<Scalars['Boolean']['input']>;
  proof_verified_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  proof_verified_not?: InputMaybe<Scalars['Boolean']['input']>;
  proof_verified_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  reason_contains?: InputMaybe<Scalars['String']['input']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type VoteMetadataItem_OrderBy =
  | '_indexer'
  | 'c1'
  | 'c2'
  | 'encrypted'
  | 'id'
  | 'proof'
  | 'proof_verified'
  | 'reason';

export type Vote_Space_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  controller?: InputMaybe<Scalars['String']['input']>;
  controller_contains?: InputMaybe<Scalars['String']['input']>;
  controller_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  controller_not?: InputMaybe<Scalars['String']['input']>;
  controller_not_contains?: InputMaybe<Scalars['String']['input']>;
  controller_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  max_voting_period?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_gt?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_gte?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  max_voting_period_lt?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_lte?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_not?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  min_voting_period?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_gt?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_gte?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  min_voting_period_lt?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_lte?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_not?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  next_strategy_index?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_gt?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_gte?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  next_strategy_index_lt?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_lte?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_not?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_threshold?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_gt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_gte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  proposal_threshold_lt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_lte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_not?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  proposer_count?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposer_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  turbo?: InputMaybe<Scalars['Boolean']['input']>;
  turbo_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  turbo_not?: InputMaybe<Scalars['Boolean']['input']>;
  turbo_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy_not?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy_params_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_not_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  verified_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  verified_not?: InputMaybe<Scalars['Boolean']['input']>;
  verified_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voter_count?: InputMaybe<Scalars['Int']['input']>;
  voter_count_gt?: InputMaybe<Scalars['Int']['input']>;
  voter_count_gte?: InputMaybe<Scalars['Int']['input']>;
  voter_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voter_count_lt?: InputMaybe<Scalars['Int']['input']>;
  voter_count_lte?: InputMaybe<Scalars['Int']['input']>;
  voter_count_not?: InputMaybe<Scalars['Int']['input']>;
  voter_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_delay?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_gt?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_gte?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_delay_lt?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_lte?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_not?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_power_validation_strategy_metadata?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  voting_power_validation_strategy_metadata_not?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vp_decimals?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vp_decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_not?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Vote_User_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_type?: InputMaybe<Scalars['Int']['input']>;
  address_type_gt?: InputMaybe<Scalars['Int']['input']>;
  address_type_gte?: InputMaybe<Scalars['Int']['input']>;
  address_type_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  address_type_lt?: InputMaybe<Scalars['Int']['input']>;
  address_type_lte?: InputMaybe<Scalars['Int']['input']>;
  address_type_not?: InputMaybe<Scalars['Int']['input']>;
  address_type_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proposal_count?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Vote_VoteMetadataItem_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  c1?: InputMaybe<Scalars['String']['input']>;
  c1_contains?: InputMaybe<Scalars['String']['input']>;
  c1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  c1_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  c1_not?: InputMaybe<Scalars['String']['input']>;
  c1_not_contains?: InputMaybe<Scalars['String']['input']>;
  c1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  c1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  c2?: InputMaybe<Scalars['String']['input']>;
  c2_contains?: InputMaybe<Scalars['String']['input']>;
  c2_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  c2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  c2_not?: InputMaybe<Scalars['String']['input']>;
  c2_not_contains?: InputMaybe<Scalars['String']['input']>;
  c2_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  c2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  encrypted?: InputMaybe<Scalars['Boolean']['input']>;
  encrypted_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  encrypted_not?: InputMaybe<Scalars['Boolean']['input']>;
  encrypted_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proof?: InputMaybe<Scalars['String']['input']>;
  proof_contains?: InputMaybe<Scalars['String']['input']>;
  proof_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proof_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proof_not?: InputMaybe<Scalars['String']['input']>;
  proof_not_contains?: InputMaybe<Scalars['String']['input']>;
  proof_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proof_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proof_verified?: InputMaybe<Scalars['Boolean']['input']>;
  proof_verified_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  proof_verified_not?: InputMaybe<Scalars['Boolean']['input']>;
  proof_verified_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  reason_contains?: InputMaybe<Scalars['String']['input']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Vote_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  choice?: InputMaybe<Scalars['Int']['input']>;
  choice_gt?: InputMaybe<Scalars['Int']['input']>;
  choice_gte?: InputMaybe<Scalars['Int']['input']>;
  choice_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  choice_lt?: InputMaybe<Scalars['Int']['input']>;
  choice_lte?: InputMaybe<Scalars['Int']['input']>;
  choice_not?: InputMaybe<Scalars['Int']['input']>;
  choice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_?: InputMaybe<Vote_VoteMetadataItem_Filter>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  proposal?: InputMaybe<Scalars['Int']['input']>;
  proposal_gt?: InputMaybe<Scalars['Int']['input']>;
  proposal_gte?: InputMaybe<Scalars['Int']['input']>;
  proposal_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_lt?: InputMaybe<Scalars['Int']['input']>;
  proposal_lte?: InputMaybe<Scalars['Int']['input']>;
  proposal_not?: InputMaybe<Scalars['Int']['input']>;
  proposal_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_?: InputMaybe<Vote_Space_Filter>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  voter?: InputMaybe<Scalars['String']['input']>;
  voter_?: InputMaybe<Vote_User_Filter>;
  voter_contains?: InputMaybe<Scalars['String']['input']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  voter_not?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vp?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  vp_gt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  vp_gte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  vp_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  vp_lt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  vp_lte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  vp_not?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  vp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  vp_parsed?: InputMaybe<Scalars['Float']['input']>;
  vp_parsed_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  vp_parsed_not?: InputMaybe<Scalars['Float']['input']>;
  vp_parsed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type Vote_OrderBy =
  | '_indexer'
  | 'choice'
  | 'created'
  | 'id'
  | 'metadata'
  | 'proposal'
  | 'space'
  | 'tx'
  | 'voter'
  | 'vp'
  | 'vp_parsed';

/** Parsed metadata for voting power validation strategies */
export type VotingPowerValidationStrategiesParsedMetadataItem = {
  _indexer: Scalars['String']['output'];
  /** Parsed metadata data for the validation strategy */
  data: Maybe<StrategiesParsedMetadataDataItem>;
  /** Unique identifier for the metadata item */
  id: Scalars['String']['output'];
  /** Index of the validation strategy in the space */
  index: Scalars['Int']['output'];
  /** Space this validation strategy belongs to */
  space: Space;
};

export type VotingPowerValidationStrategiesParsedMetadataItem_Space_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  controller?: InputMaybe<Scalars['String']['input']>;
  controller_contains?: InputMaybe<Scalars['String']['input']>;
  controller_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  controller_not?: InputMaybe<Scalars['String']['input']>;
  controller_not_contains?: InputMaybe<Scalars['String']['input']>;
  controller_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  controller_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  created?: InputMaybe<Scalars['Int']['input']>;
  created_gt?: InputMaybe<Scalars['Int']['input']>;
  created_gte?: InputMaybe<Scalars['Int']['input']>;
  created_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  created_lt?: InputMaybe<Scalars['Int']['input']>;
  created_lte?: InputMaybe<Scalars['Int']['input']>;
  created_not?: InputMaybe<Scalars['Int']['input']>;
  created_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  max_voting_period?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_gt?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_gte?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  max_voting_period_lt?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_lte?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_not?: InputMaybe<Scalars['Int']['input']>;
  max_voting_period_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  min_voting_period?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_gt?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_gte?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  min_voting_period_lt?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_lte?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_not?: InputMaybe<Scalars['Int']['input']>;
  min_voting_period_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  next_strategy_index?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_gt?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_gte?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  next_strategy_index_lt?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_lte?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_not?: InputMaybe<Scalars['Int']['input']>;
  next_strategy_index_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposal_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposal_threshold?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_gt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_gte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  proposal_threshold_lt?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_lte?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_not?: InputMaybe<Scalars['BigDecimalVP']['input']>;
  proposal_threshold_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigDecimalVP']['input']>>>;
  proposer_count?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_gt?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_gte?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  proposer_count_lt?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_lte?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_not?: InputMaybe<Scalars['Int']['input']>;
  proposer_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  turbo?: InputMaybe<Scalars['Boolean']['input']>;
  turbo_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  turbo_not?: InputMaybe<Scalars['Boolean']['input']>;
  turbo_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy_not?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validation_strategy_params_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_not_contains?: InputMaybe<Scalars['String']['input']>;
  validation_strategy_params_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  verified_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  verified_not?: InputMaybe<Scalars['Boolean']['input']>;
  verified_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_gte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vote_count_lt?: InputMaybe<Scalars['Int']['input']>;
  vote_count_lte?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not?: InputMaybe<Scalars['Int']['input']>;
  vote_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voter_count?: InputMaybe<Scalars['Int']['input']>;
  voter_count_gt?: InputMaybe<Scalars['Int']['input']>;
  voter_count_gte?: InputMaybe<Scalars['Int']['input']>;
  voter_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voter_count_lt?: InputMaybe<Scalars['Int']['input']>;
  voter_count_lte?: InputMaybe<Scalars['Int']['input']>;
  voter_count_not?: InputMaybe<Scalars['Int']['input']>;
  voter_count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_delay?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_gt?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_gte?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_delay_lt?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_lte?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_not?: InputMaybe<Scalars['Int']['input']>;
  voting_delay_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  voting_power_validation_strategy_metadata?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  voting_power_validation_strategy_metadata_not?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voting_power_validation_strategy_metadata_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vp_decimals?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  vp_decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_not?: InputMaybe<Scalars['Int']['input']>;
  vp_decimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type VotingPowerValidationStrategiesParsedMetadataItem_StrategiesParsedMetadataDataItem_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  payload?: InputMaybe<Scalars['String']['input']>;
  payload_contains?: InputMaybe<Scalars['String']['input']>;
  payload_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  payload_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  payload_not?: InputMaybe<Scalars['String']['input']>;
  payload_not_contains?: InputMaybe<Scalars['String']['input']>;
  payload_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  payload_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VotingPowerValidationStrategiesParsedMetadataItem_Filter = {
  _indexer?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _indexer_not?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  _indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  data?: InputMaybe<Scalars['String']['input']>;
  data_?: InputMaybe<VotingPowerValidationStrategiesParsedMetadataItem_StrategiesParsedMetadataDataItem_Filter>;
  data_contains?: InputMaybe<Scalars['String']['input']>;
  data_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  data_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  data_not?: InputMaybe<Scalars['String']['input']>;
  data_not_contains?: InputMaybe<Scalars['String']['input']>;
  data_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  data_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  index?: InputMaybe<Scalars['Int']['input']>;
  index_gt?: InputMaybe<Scalars['Int']['input']>;
  index_gte?: InputMaybe<Scalars['Int']['input']>;
  index_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  index_lt?: InputMaybe<Scalars['Int']['input']>;
  index_lte?: InputMaybe<Scalars['Int']['input']>;
  index_not?: InputMaybe<Scalars['Int']['input']>;
  index_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space?: InputMaybe<Scalars['String']['input']>;
  space_?: InputMaybe<VotingPowerValidationStrategiesParsedMetadataItem_Space_Filter>;
  space_contains?: InputMaybe<Scalars['String']['input']>;
  space_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space_not?: InputMaybe<Scalars['String']['input']>;
  space_not_contains?: InputMaybe<Scalars['String']['input']>;
  space_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VotingPowerValidationStrategiesParsedMetadataItem_OrderBy =
  | '_indexer'
  | 'data'
  | 'id'
  | 'index'
  | 'space';

/** Contract and Block where its event is found. */
export type _Checkpoint = {
  block_number: Scalars['Int']['output'];
  contract_address: Scalars['String']['output'];
  /** id computed as last 5 bytes of sha256(contract+block) */
  id: Scalars['ID']['output'];
  indexer: Scalars['String']['output'];
};

export type _Checkpoint_Filter = {
  block_number?: InputMaybe<Scalars['Int']['input']>;
  block_number_gt?: InputMaybe<Scalars['Int']['input']>;
  block_number_gte?: InputMaybe<Scalars['Int']['input']>;
  block_number_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  block_number_lt?: InputMaybe<Scalars['Int']['input']>;
  block_number_lte?: InputMaybe<Scalars['Int']['input']>;
  block_number_not?: InputMaybe<Scalars['Int']['input']>;
  block_number_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contract_address?: InputMaybe<Scalars['String']['input']>;
  contract_address_contains?: InputMaybe<Scalars['String']['input']>;
  contract_address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contract_address_not?: InputMaybe<Scalars['String']['input']>;
  contract_address_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  indexer_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  indexer_not?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type _Checkpoint_OrderBy =
  | 'block_number'
  | 'contract_address'
  | 'id'
  | 'indexer';

/** Core metadata values used internally by Checkpoint */
export type _Metadata = {
  /** example: last_indexed_block */
  id: Scalars['ID']['output'];
  indexer: Scalars['String']['output'];
  value: Maybe<Scalars['String']['output']>;
};

export type _Metadata_Filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  indexer_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  indexer_not?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type _Metadata_OrderBy =
  | 'id'
  | 'indexer'
  | 'value';

export type VoteFieldsFragment = { id: string, proposal: number, choice: number, vp: any, created: number, tx: string, voter: { id: string }, space: { id: string }, metadata: { reason: any, encrypted: boolean | null, c1: string | null, c2: string | null, proof: string | null, proof_verified: boolean | null } | null };

export type SpaceFieldsFragment = { id: string, _indexer: string, protocol: string, verified: boolean, turbo: boolean, controller: string, voting_delay: number, min_voting_period: number, max_voting_period: number, proposal_threshold: any, validation_strategy: string, validation_strategy_params: any, voting_power_validation_strategy_strategies: Array<string>, voting_power_validation_strategy_strategies_params: Array<string>, strategies_indices: Array<number>, strategies: Array<string>, strategies_params: Array<string>, authenticators: Array<string>, proposal_count: number, vote_count: number, created: number, metadata: { name: string, avatar: string, cover: string, about: string, external_url: string, github: string, twitter: string, discord: string, farcaster: string, voting_power_symbol: string, treasuries: Array<string>, labels: Array<string>, delegations: Array<string>, executors: Array<string>, executors_types: Array<string>, executors_destinations: Array<string>, executors_strategies: Array<{ id: string, address: string, destination_address: string | null, type: string, treasury_chain: number | null, treasury: string | null }> } | null, voting_power_validation_strategies_parsed_metadata: Array<{ index: number, data: { id: string, name: string, description: string, decimals: number, symbol: string, token: string | null, payload: string | null } | null }>, strategies_parsed_metadata: Array<{ index: number, data: { id: string, name: string, description: string, decimals: number, symbol: string, token: string | null, payload: string | null } | null }> };

export type ProposalFieldsFragment = { id: string, proposal_id: number, quorum: any, execution_hash: string, start: number, min_end: number, max_end: number, snapshot: number, vp_decimals: number, scores_1: any, scores_2: any, scores_3: any, scores_total: any, execution_time: number, execution_strategy: string, execution_strategy_type: string, execution_destination: string | null, treasuries: Array<string>, timelock_veto_guardian: string | null, strategies_indices: Array<number>, strategies: Array<string>, strategies_params: Array<string>, created: number, edited: number | null, tx: string, execution_tx: string | null, veto_tx: string | null, vote_count: number, execution_ready: boolean, executed: boolean, vetoed: boolean, execution_settled: boolean, cancelled: boolean, privacy: string, space: { id: string, _indexer: string, protocol: string, verified: boolean, turbo: boolean, controller: string, voting_delay: number, min_voting_period: number, max_voting_period: number, proposal_threshold: any, validation_strategy: string, validation_strategy_params: any, voting_power_validation_strategy_strategies: Array<string>, voting_power_validation_strategy_strategies_params: Array<string>, strategies_indices: Array<number>, strategies: Array<string>, strategies_params: Array<string>, authenticators: Array<string>, proposal_count: number, vote_count: number, created: number, metadata: { name: string, avatar: string, cover: string, about: string, external_url: string, github: string, twitter: string, discord: string, farcaster: string, voting_power_symbol: string, treasuries: Array<string>, labels: Array<string>, delegations: Array<string>, executors: Array<string>, executors_types: Array<string>, executors_destinations: Array<string>, executors_strategies: Array<{ id: string, address: string, destination_address: string | null, type: string, treasury_chain: number | null, treasury: string | null }> } | null, voting_power_validation_strategies_parsed_metadata: Array<{ index: number, data: { id: string, name: string, description: string, decimals: number, symbol: string, token: string | null, payload: string | null } | null }>, strategies_parsed_metadata: Array<{ index: number, data: { id: string, name: string, description: string, decimals: number, symbol: string, token: string | null, payload: string | null } | null }> }, author: { id: string, address_type: number }, metadata: { id: string, title: any | null, body: any | null, discussion: any | null, execution: any | null, choices: Array<string>, labels: Array<string> } | null, execution_strategy_details: { id: string, address: string, destination_address: string | null, type: string, treasury_chain: number | null, treasury: string | null, quorum: any } | null };

export type ProposalQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ProposalQuery = { proposal: { id: string, proposal_id: number, quorum: any, execution_hash: string, start: number, min_end: number, max_end: number, snapshot: number, vp_decimals: number, scores_1: any, scores_2: any, scores_3: any, scores_total: any, execution_time: number, execution_strategy: string, execution_strategy_type: string, execution_destination: string | null, treasuries: Array<string>, timelock_veto_guardian: string | null, strategies_indices: Array<number>, strategies: Array<string>, strategies_params: Array<string>, created: number, edited: number | null, tx: string, execution_tx: string | null, veto_tx: string | null, vote_count: number, execution_ready: boolean, executed: boolean, vetoed: boolean, execution_settled: boolean, cancelled: boolean, privacy: string, space: { id: string, _indexer: string, protocol: string, verified: boolean, turbo: boolean, controller: string, voting_delay: number, min_voting_period: number, max_voting_period: number, proposal_threshold: any, validation_strategy: string, validation_strategy_params: any, voting_power_validation_strategy_strategies: Array<string>, voting_power_validation_strategy_strategies_params: Array<string>, strategies_indices: Array<number>, strategies: Array<string>, strategies_params: Array<string>, authenticators: Array<string>, proposal_count: number, vote_count: number, created: number, metadata: { name: string, avatar: string, cover: string, about: string, external_url: string, github: string, twitter: string, discord: string, farcaster: string, voting_power_symbol: string, treasuries: Array<string>, labels: Array<string>, delegations: Array<string>, executors: Array<string>, executors_types: Array<string>, executors_destinations: Array<string>, executors_strategies: Array<{ id: string, address: string, destination_address: string | null, type: string, treasury_chain: number | null, treasury: string | null }> } | null, voting_power_validation_strategies_parsed_metadata: Array<{ index: number, data: { id: string, name: string, description: string, decimals: number, symbol: string, token: string | null, payload: string | null } | null }>, strategies_parsed_metadata: Array<{ index: number, data: { id: string, name: string, description: string, decimals: number, symbol: string, token: string | null, payload: string | null } | null }> }, author: { id: string, address_type: number }, metadata: { id: string, title: any | null, body: any | null, discussion: any | null, execution: any | null, choices: Array<string>, labels: Array<string> } | null, execution_strategy_details: { id: string, address: string, destination_address: string | null, type: string, treasury_chain: number | null, treasury: string | null, quorum: any } | null } | null };

export type ProposalsQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  where?: InputMaybe<Proposal_Filter>;
}>;


export type ProposalsQuery = { proposals: Array<{ id: string, proposal_id: number, quorum: any, execution_hash: string, start: number, min_end: number, max_end: number, snapshot: number, vp_decimals: number, scores_1: any, scores_2: any, scores_3: any, scores_total: any, execution_time: number, execution_strategy: string, execution_strategy_type: string, execution_destination: string | null, treasuries: Array<string>, timelock_veto_guardian: string | null, strategies_indices: Array<number>, strategies: Array<string>, strategies_params: Array<string>, created: number, edited: number | null, tx: string, execution_tx: string | null, veto_tx: string | null, vote_count: number, execution_ready: boolean, executed: boolean, vetoed: boolean, execution_settled: boolean, cancelled: boolean, privacy: string, space: { id: string, _indexer: string, protocol: string, verified: boolean, turbo: boolean, controller: string, voting_delay: number, min_voting_period: number, max_voting_period: number, proposal_threshold: any, validation_strategy: string, validation_strategy_params: any, voting_power_validation_strategy_strategies: Array<string>, voting_power_validation_strategy_strategies_params: Array<string>, strategies_indices: Array<number>, strategies: Array<string>, strategies_params: Array<string>, authenticators: Array<string>, proposal_count: number, vote_count: number, created: number, metadata: { name: string, avatar: string, cover: string, about: string, external_url: string, github: string, twitter: string, discord: string, farcaster: string, voting_power_symbol: string, treasuries: Array<string>, labels: Array<string>, delegations: Array<string>, executors: Array<string>, executors_types: Array<string>, executors_destinations: Array<string>, executors_strategies: Array<{ id: string, address: string, destination_address: string | null, type: string, treasury_chain: number | null, treasury: string | null }> } | null, voting_power_validation_strategies_parsed_metadata: Array<{ index: number, data: { id: string, name: string, description: string, decimals: number, symbol: string, token: string | null, payload: string | null } | null }>, strategies_parsed_metadata: Array<{ index: number, data: { id: string, name: string, description: string, decimals: number, symbol: string, token: string | null, payload: string | null } | null }> }, author: { id: string, address_type: number }, metadata: { id: string, title: any | null, body: any | null, discussion: any | null, execution: any | null, choices: Array<string>, labels: Array<string> } | null, execution_strategy_details: { id: string, address: string, destination_address: string | null, type: string, treasury_chain: number | null, treasury: string | null, quorum: any } | null }> };

export type VotesQueryVariables = Exact<{
  indexer: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderBy: Vote_OrderBy;
  orderDirection: OrderDirection;
  where?: InputMaybe<Vote_Filter>;
}>;


export type VotesQuery = { votes: Array<{ id: string, proposal: number, choice: number, vp: any, created: number, tx: string, voter: { id: string }, space: { id: string }, metadata: { reason: any, encrypted: boolean | null, c1: string | null, c2: string | null, proof: string | null, proof_verified: boolean | null } | null }> };

export type UserVotesQueryVariables = Exact<{
  indexer: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  spaceIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  voter?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserVotesQuery = { votes: Array<{ id: string, proposal: number, choice: number, vp: any, created: number, tx: string, voter: { id: string }, space: { id: string }, metadata: { reason: any, encrypted: boolean | null, c1: string | null, c2: string | null, proof: string | null, proof_verified: boolean | null } | null }> };

export type SpaceQueryVariables = Exact<{
  indexer: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type SpaceQuery = { space: { id: string, _indexer: string, protocol: string, verified: boolean, turbo: boolean, controller: string, voting_delay: number, min_voting_period: number, max_voting_period: number, proposal_threshold: any, validation_strategy: string, validation_strategy_params: any, voting_power_validation_strategy_strategies: Array<string>, voting_power_validation_strategy_strategies_params: Array<string>, strategies_indices: Array<number>, strategies: Array<string>, strategies_params: Array<string>, authenticators: Array<string>, proposal_count: number, vote_count: number, created: number, metadata: { name: string, avatar: string, cover: string, about: string, external_url: string, github: string, twitter: string, discord: string, farcaster: string, voting_power_symbol: string, treasuries: Array<string>, labels: Array<string>, delegations: Array<string>, executors: Array<string>, executors_types: Array<string>, executors_destinations: Array<string>, executors_strategies: Array<{ id: string, address: string, destination_address: string | null, type: string, treasury_chain: number | null, treasury: string | null }> } | null, voting_power_validation_strategies_parsed_metadata: Array<{ index: number, data: { id: string, name: string, description: string, decimals: number, symbol: string, token: string | null, payload: string | null } | null }>, strategies_parsed_metadata: Array<{ index: number, data: { id: string, name: string, description: string, decimals: number, symbol: string, token: string | null, payload: string | null } | null }> } | null };

export type SpacesQueryVariables = Exact<{
  indexer?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  where?: InputMaybe<Space_Filter>;
}>;


export type SpacesQuery = { spaces: Array<{ id: string, _indexer: string, protocol: string, verified: boolean, turbo: boolean, controller: string, voting_delay: number, min_voting_period: number, max_voting_period: number, proposal_threshold: any, validation_strategy: string, validation_strategy_params: any, voting_power_validation_strategy_strategies: Array<string>, voting_power_validation_strategy_strategies_params: Array<string>, strategies_indices: Array<number>, strategies: Array<string>, strategies_params: Array<string>, authenticators: Array<string>, proposal_count: number, vote_count: number, created: number, metadata: { name: string, avatar: string, cover: string, about: string, external_url: string, github: string, twitter: string, discord: string, farcaster: string, voting_power_symbol: string, treasuries: Array<string>, labels: Array<string>, delegations: Array<string>, executors: Array<string>, executors_types: Array<string>, executors_destinations: Array<string>, executors_strategies: Array<{ id: string, address: string, destination_address: string | null, type: string, treasury_chain: number | null, treasury: string | null }> } | null, voting_power_validation_strategies_parsed_metadata: Array<{ index: number, data: { id: string, name: string, description: string, decimals: number, symbol: string, token: string | null, payload: string | null } | null }>, strategies_parsed_metadata: Array<{ index: number, data: { id: string, name: string, description: string, decimals: number, symbol: string, token: string | null, payload: string | null } | null }> }> };

export type UserQueryVariables = Exact<{
  indexer: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type UserQuery = { user: { id: string, proposal_count: number, vote_count: number, created: number } | null };

export type LeaderboardQueryVariables = Exact<{
  indexer: Scalars['String']['input'];
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderBy?: InputMaybe<Leaderboard_OrderBy>;
  orderDirection: OrderDirection;
  where?: InputMaybe<Leaderboard_Filter>;
}>;


export type LeaderboardQuery = { leaderboards: Array<{ id: string, proposal_count: number, vote_count: number, user: { id: string, created: number }, space: { id: string } }> };

export type _MetadataQueryVariables = Exact<{
  indexer: Scalars['String']['input'];
}>;


export type _MetadataQuery = { _metadata: { value: string | null } | null };

export const VoteFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"voteFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Vote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"voter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"space"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"encrypted"}},{"kind":"Field","name":{"kind":"Name","value":"c1"}},{"kind":"Field","name":{"kind":"Name","value":"c2"}},{"kind":"Field","name":{"kind":"Name","value":"proof"}},{"kind":"Field","name":{"kind":"Name","value":"proof_verified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal"}},{"kind":"Field","name":{"kind":"Name","value":"choice"}},{"kind":"Field","name":{"kind":"Name","value":"vp"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"tx"}}]}}]} as unknown as DocumentNode<VoteFieldsFragment, unknown>;
export const SpaceFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"spaceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Space"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_indexer"}},{"kind":"Field","name":{"kind":"Name","value":"protocol"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"turbo"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"external_url"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"discord"}},{"kind":"Field","name":{"kind":"Name","value":"farcaster"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_symbol"}},{"kind":"Field","name":{"kind":"Name","value":"treasuries"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"delegations"}},{"kind":"Field","name":{"kind":"Name","value":"executors"}},{"kind":"Field","name":{"kind":"Name","value":"executors_types"}},{"kind":"Field","name":{"kind":"Name","value":"executors_destinations"}},{"kind":"Field","name":{"kind":"Name","value":"executors_strategies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"destination_address"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"treasury_chain"}},{"kind":"Field","name":{"kind":"Name","value":"treasury"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"controller"}},{"kind":"Field","name":{"kind":"Name","value":"voting_delay"}},{"kind":"Field","name":{"kind":"Name","value":"min_voting_period"}},{"kind":"Field","name":{"kind":"Name","value":"max_voting_period"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_threshold"}},{"kind":"Field","name":{"kind":"Name","value":"validation_strategy"}},{"kind":"Field","name":{"kind":"Name","value":"validation_strategy_params"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategy_strategies"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategy_strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategies_parsed_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"strategies_indices"}},{"kind":"Field","name":{"kind":"Name","value":"strategies"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_parsed_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"authenticators"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_count"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SpaceFieldsFragment, unknown>;
export const ProposalFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"proposalFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Proposal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_id"}},{"kind":"Field","name":{"kind":"Name","value":"space"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"spaceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quorum"}},{"kind":"Field","name":{"kind":"Name","value":"execution_hash"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"discussion"}},{"kind":"Field","name":{"kind":"Name","value":"execution"}},{"kind":"Field","name":{"kind":"Name","value":"choices"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"min_end"}},{"kind":"Field","name":{"kind":"Name","value":"max_end"}},{"kind":"Field","name":{"kind":"Name","value":"snapshot"}},{"kind":"Field","name":{"kind":"Name","value":"vp_decimals"}},{"kind":"Field","name":{"kind":"Name","value":"scores_1"}},{"kind":"Field","name":{"kind":"Name","value":"scores_2"}},{"kind":"Field","name":{"kind":"Name","value":"scores_3"}},{"kind":"Field","name":{"kind":"Name","value":"scores_total"}},{"kind":"Field","name":{"kind":"Name","value":"execution_time"}},{"kind":"Field","name":{"kind":"Name","value":"execution_strategy"}},{"kind":"Field","name":{"kind":"Name","value":"execution_strategy_details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"destination_address"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"treasury_chain"}},{"kind":"Field","name":{"kind":"Name","value":"treasury"}},{"kind":"Field","name":{"kind":"Name","value":"quorum"}}]}},{"kind":"Field","name":{"kind":"Name","value":"execution_strategy_type"}},{"kind":"Field","name":{"kind":"Name","value":"execution_destination"}},{"kind":"Field","name":{"kind":"Name","value":"treasuries"}},{"kind":"Field","name":{"kind":"Name","value":"timelock_veto_guardian"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_indices"}},{"kind":"Field","name":{"kind":"Name","value":"strategies"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"edited"}},{"kind":"Field","name":{"kind":"Name","value":"tx"}},{"kind":"Field","name":{"kind":"Name","value":"execution_tx"}},{"kind":"Field","name":{"kind":"Name","value":"veto_tx"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"execution_ready"}},{"kind":"Field","name":{"kind":"Name","value":"executed"}},{"kind":"Field","name":{"kind":"Name","value":"vetoed"}},{"kind":"Field","name":{"kind":"Name","value":"execution_settled"}},{"kind":"Field","name":{"kind":"Name","value":"cancelled"}},{"kind":"Field","name":{"kind":"Name","value":"privacy"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"spaceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Space"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_indexer"}},{"kind":"Field","name":{"kind":"Name","value":"protocol"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"turbo"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"external_url"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"discord"}},{"kind":"Field","name":{"kind":"Name","value":"farcaster"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_symbol"}},{"kind":"Field","name":{"kind":"Name","value":"treasuries"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"delegations"}},{"kind":"Field","name":{"kind":"Name","value":"executors"}},{"kind":"Field","name":{"kind":"Name","value":"executors_types"}},{"kind":"Field","name":{"kind":"Name","value":"executors_destinations"}},{"kind":"Field","name":{"kind":"Name","value":"executors_strategies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"destination_address"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"treasury_chain"}},{"kind":"Field","name":{"kind":"Name","value":"treasury"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"controller"}},{"kind":"Field","name":{"kind":"Name","value":"voting_delay"}},{"kind":"Field","name":{"kind":"Name","value":"min_voting_period"}},{"kind":"Field","name":{"kind":"Name","value":"max_voting_period"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_threshold"}},{"kind":"Field","name":{"kind":"Name","value":"validation_strategy"}},{"kind":"Field","name":{"kind":"Name","value":"validation_strategy_params"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategy_strategies"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategy_strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategies_parsed_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"strategies_indices"}},{"kind":"Field","name":{"kind":"Name","value":"strategies"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_parsed_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"authenticators"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_count"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<ProposalFieldsFragment, unknown>;
export const ProposalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Proposal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"proposalFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"spaceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Space"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_indexer"}},{"kind":"Field","name":{"kind":"Name","value":"protocol"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"turbo"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"external_url"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"discord"}},{"kind":"Field","name":{"kind":"Name","value":"farcaster"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_symbol"}},{"kind":"Field","name":{"kind":"Name","value":"treasuries"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"delegations"}},{"kind":"Field","name":{"kind":"Name","value":"executors"}},{"kind":"Field","name":{"kind":"Name","value":"executors_types"}},{"kind":"Field","name":{"kind":"Name","value":"executors_destinations"}},{"kind":"Field","name":{"kind":"Name","value":"executors_strategies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"destination_address"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"treasury_chain"}},{"kind":"Field","name":{"kind":"Name","value":"treasury"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"controller"}},{"kind":"Field","name":{"kind":"Name","value":"voting_delay"}},{"kind":"Field","name":{"kind":"Name","value":"min_voting_period"}},{"kind":"Field","name":{"kind":"Name","value":"max_voting_period"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_threshold"}},{"kind":"Field","name":{"kind":"Name","value":"validation_strategy"}},{"kind":"Field","name":{"kind":"Name","value":"validation_strategy_params"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategy_strategies"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategy_strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategies_parsed_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"strategies_indices"}},{"kind":"Field","name":{"kind":"Name","value":"strategies"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_parsed_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"authenticators"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_count"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"proposalFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Proposal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_id"}},{"kind":"Field","name":{"kind":"Name","value":"space"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"spaceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quorum"}},{"kind":"Field","name":{"kind":"Name","value":"execution_hash"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"discussion"}},{"kind":"Field","name":{"kind":"Name","value":"execution"}},{"kind":"Field","name":{"kind":"Name","value":"choices"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"min_end"}},{"kind":"Field","name":{"kind":"Name","value":"max_end"}},{"kind":"Field","name":{"kind":"Name","value":"snapshot"}},{"kind":"Field","name":{"kind":"Name","value":"vp_decimals"}},{"kind":"Field","name":{"kind":"Name","value":"scores_1"}},{"kind":"Field","name":{"kind":"Name","value":"scores_2"}},{"kind":"Field","name":{"kind":"Name","value":"scores_3"}},{"kind":"Field","name":{"kind":"Name","value":"scores_total"}},{"kind":"Field","name":{"kind":"Name","value":"execution_time"}},{"kind":"Field","name":{"kind":"Name","value":"execution_strategy"}},{"kind":"Field","name":{"kind":"Name","value":"execution_strategy_details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"destination_address"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"treasury_chain"}},{"kind":"Field","name":{"kind":"Name","value":"treasury"}},{"kind":"Field","name":{"kind":"Name","value":"quorum"}}]}},{"kind":"Field","name":{"kind":"Name","value":"execution_strategy_type"}},{"kind":"Field","name":{"kind":"Name","value":"execution_destination"}},{"kind":"Field","name":{"kind":"Name","value":"treasuries"}},{"kind":"Field","name":{"kind":"Name","value":"timelock_veto_guardian"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_indices"}},{"kind":"Field","name":{"kind":"Name","value":"strategies"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"edited"}},{"kind":"Field","name":{"kind":"Name","value":"tx"}},{"kind":"Field","name":{"kind":"Name","value":"execution_tx"}},{"kind":"Field","name":{"kind":"Name","value":"veto_tx"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"execution_ready"}},{"kind":"Field","name":{"kind":"Name","value":"executed"}},{"kind":"Field","name":{"kind":"Name","value":"vetoed"}},{"kind":"Field","name":{"kind":"Name","value":"execution_settled"}},{"kind":"Field","name":{"kind":"Name","value":"cancelled"}},{"kind":"Field","name":{"kind":"Name","value":"privacy"}}]}}]} as unknown as DocumentNode<ProposalQuery, ProposalQueryVariables>;
export const ProposalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Proposals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Proposal_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proposals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"created"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"proposalFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"spaceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Space"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_indexer"}},{"kind":"Field","name":{"kind":"Name","value":"protocol"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"turbo"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"external_url"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"discord"}},{"kind":"Field","name":{"kind":"Name","value":"farcaster"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_symbol"}},{"kind":"Field","name":{"kind":"Name","value":"treasuries"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"delegations"}},{"kind":"Field","name":{"kind":"Name","value":"executors"}},{"kind":"Field","name":{"kind":"Name","value":"executors_types"}},{"kind":"Field","name":{"kind":"Name","value":"executors_destinations"}},{"kind":"Field","name":{"kind":"Name","value":"executors_strategies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"destination_address"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"treasury_chain"}},{"kind":"Field","name":{"kind":"Name","value":"treasury"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"controller"}},{"kind":"Field","name":{"kind":"Name","value":"voting_delay"}},{"kind":"Field","name":{"kind":"Name","value":"min_voting_period"}},{"kind":"Field","name":{"kind":"Name","value":"max_voting_period"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_threshold"}},{"kind":"Field","name":{"kind":"Name","value":"validation_strategy"}},{"kind":"Field","name":{"kind":"Name","value":"validation_strategy_params"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategy_strategies"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategy_strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategies_parsed_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"strategies_indices"}},{"kind":"Field","name":{"kind":"Name","value":"strategies"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_parsed_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"authenticators"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_count"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"proposalFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Proposal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_id"}},{"kind":"Field","name":{"kind":"Name","value":"space"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"spaceFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quorum"}},{"kind":"Field","name":{"kind":"Name","value":"execution_hash"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"discussion"}},{"kind":"Field","name":{"kind":"Name","value":"execution"}},{"kind":"Field","name":{"kind":"Name","value":"choices"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}}]}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"min_end"}},{"kind":"Field","name":{"kind":"Name","value":"max_end"}},{"kind":"Field","name":{"kind":"Name","value":"snapshot"}},{"kind":"Field","name":{"kind":"Name","value":"vp_decimals"}},{"kind":"Field","name":{"kind":"Name","value":"scores_1"}},{"kind":"Field","name":{"kind":"Name","value":"scores_2"}},{"kind":"Field","name":{"kind":"Name","value":"scores_3"}},{"kind":"Field","name":{"kind":"Name","value":"scores_total"}},{"kind":"Field","name":{"kind":"Name","value":"execution_time"}},{"kind":"Field","name":{"kind":"Name","value":"execution_strategy"}},{"kind":"Field","name":{"kind":"Name","value":"execution_strategy_details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"destination_address"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"treasury_chain"}},{"kind":"Field","name":{"kind":"Name","value":"treasury"}},{"kind":"Field","name":{"kind":"Name","value":"quorum"}}]}},{"kind":"Field","name":{"kind":"Name","value":"execution_strategy_type"}},{"kind":"Field","name":{"kind":"Name","value":"execution_destination"}},{"kind":"Field","name":{"kind":"Name","value":"treasuries"}},{"kind":"Field","name":{"kind":"Name","value":"timelock_veto_guardian"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_indices"}},{"kind":"Field","name":{"kind":"Name","value":"strategies"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"edited"}},{"kind":"Field","name":{"kind":"Name","value":"tx"}},{"kind":"Field","name":{"kind":"Name","value":"execution_tx"}},{"kind":"Field","name":{"kind":"Name","value":"veto_tx"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"execution_ready"}},{"kind":"Field","name":{"kind":"Name","value":"executed"}},{"kind":"Field","name":{"kind":"Name","value":"vetoed"}},{"kind":"Field","name":{"kind":"Name","value":"execution_settled"}},{"kind":"Field","name":{"kind":"Name","value":"cancelled"}},{"kind":"Field","name":{"kind":"Name","value":"privacy"}}]}}]} as unknown as DocumentNode<ProposalsQuery, ProposalsQueryVariables>;
export const VotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Votes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"indexer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Vote_orderBy"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Vote_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"indexer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"indexer"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"voteFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"voteFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Vote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"voter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"space"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"encrypted"}},{"kind":"Field","name":{"kind":"Name","value":"c1"}},{"kind":"Field","name":{"kind":"Name","value":"c2"}},{"kind":"Field","name":{"kind":"Name","value":"proof"}},{"kind":"Field","name":{"kind":"Name","value":"proof_verified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal"}},{"kind":"Field","name":{"kind":"Name","value":"choice"}},{"kind":"Field","name":{"kind":"Name","value":"vp"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"tx"}}]}}]} as unknown as DocumentNode<VotesQuery, VotesQueryVariables>;
export const UserVotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserVotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"indexer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"spaceIds"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"voter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"votes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"indexer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"indexer"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"space_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"spaceIds"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"voter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"voter"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"voteFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"voteFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Vote"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"voter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"space"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"encrypted"}},{"kind":"Field","name":{"kind":"Name","value":"c1"}},{"kind":"Field","name":{"kind":"Name","value":"c2"}},{"kind":"Field","name":{"kind":"Name","value":"proof"}},{"kind":"Field","name":{"kind":"Name","value":"proof_verified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal"}},{"kind":"Field","name":{"kind":"Name","value":"choice"}},{"kind":"Field","name":{"kind":"Name","value":"vp"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"tx"}}]}}]} as unknown as DocumentNode<UserVotesQuery, UserVotesQueryVariables>;
export const SpaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Space"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"indexer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"space"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"indexer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"indexer"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"spaceFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"spaceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Space"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_indexer"}},{"kind":"Field","name":{"kind":"Name","value":"protocol"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"turbo"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"external_url"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"discord"}},{"kind":"Field","name":{"kind":"Name","value":"farcaster"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_symbol"}},{"kind":"Field","name":{"kind":"Name","value":"treasuries"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"delegations"}},{"kind":"Field","name":{"kind":"Name","value":"executors"}},{"kind":"Field","name":{"kind":"Name","value":"executors_types"}},{"kind":"Field","name":{"kind":"Name","value":"executors_destinations"}},{"kind":"Field","name":{"kind":"Name","value":"executors_strategies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"destination_address"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"treasury_chain"}},{"kind":"Field","name":{"kind":"Name","value":"treasury"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"controller"}},{"kind":"Field","name":{"kind":"Name","value":"voting_delay"}},{"kind":"Field","name":{"kind":"Name","value":"min_voting_period"}},{"kind":"Field","name":{"kind":"Name","value":"max_voting_period"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_threshold"}},{"kind":"Field","name":{"kind":"Name","value":"validation_strategy"}},{"kind":"Field","name":{"kind":"Name","value":"validation_strategy_params"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategy_strategies"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategy_strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategies_parsed_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"strategies_indices"}},{"kind":"Field","name":{"kind":"Name","value":"strategies"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_parsed_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"authenticators"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_count"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SpaceQuery, SpaceQueryVariables>;
export const SpacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Spaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"indexer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Space_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spaces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"indexer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"indexer"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"vote_count"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"spaceFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"spaceFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Space"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_indexer"}},{"kind":"Field","name":{"kind":"Name","value":"protocol"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"turbo"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"external_url"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"discord"}},{"kind":"Field","name":{"kind":"Name","value":"farcaster"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_symbol"}},{"kind":"Field","name":{"kind":"Name","value":"treasuries"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"delegations"}},{"kind":"Field","name":{"kind":"Name","value":"executors"}},{"kind":"Field","name":{"kind":"Name","value":"executors_types"}},{"kind":"Field","name":{"kind":"Name","value":"executors_destinations"}},{"kind":"Field","name":{"kind":"Name","value":"executors_strategies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"destination_address"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"treasury_chain"}},{"kind":"Field","name":{"kind":"Name","value":"treasury"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"controller"}},{"kind":"Field","name":{"kind":"Name","value":"voting_delay"}},{"kind":"Field","name":{"kind":"Name","value":"min_voting_period"}},{"kind":"Field","name":{"kind":"Name","value":"max_voting_period"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_threshold"}},{"kind":"Field","name":{"kind":"Name","value":"validation_strategy"}},{"kind":"Field","name":{"kind":"Name","value":"validation_strategy_params"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategy_strategies"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategy_strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"voting_power_validation_strategies_parsed_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"strategies_indices"}},{"kind":"Field","name":{"kind":"Name","value":"strategies"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_params"}},{"kind":"Field","name":{"kind":"Name","value":"strategies_parsed_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"authenticators"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_count"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<SpacesQuery, SpacesQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"indexer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"indexer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"indexer"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_count"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const LeaderboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Leaderboard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"indexer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Leaderboard_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Leaderboard_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaderboards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"indexer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"indexer"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}},{"kind":"Field","name":{"kind":"Name","value":"space"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_count"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}}]}}]}}]} as unknown as DocumentNode<LeaderboardQuery, LeaderboardQueryVariables>;
export const _MetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"_Metadata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"indexer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"indexer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"indexer"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"last_indexed_block","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<_MetadataQuery, _MetadataQueryVariables>;