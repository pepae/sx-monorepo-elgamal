<script setup lang="ts">
import { getChoiceText } from '@/helpers/utils';
import { Proposal, Vote } from '@/types';

withDefaults(
  defineProps<{
    proposal: Proposal;
    vote: Vote;
    showReason?: boolean;
  }>(),
  {
    showReason: true
  }
);
</script>

<template>
  <div
    v-if="proposal.privacy !== 'none'"
    class="flex flex-col gap-1 items-start w-full"
  >
    <div class="flex gap-1 items-center">
      <span class="text-skin-heading leading-[22px]">Encrypted choice</span>
      <IH-lock-closed class="size-[16px] shrink-0" />
    </div>
    <!-- Show ciphertext if available -->
    <div 
      v-if="vote.metadata && (vote.metadata.c1 || vote.metadata.c2)"
      class="text-[14px] text-skin-text font-mono w-full"
    >
      <div class="flex items-center gap-1 mb-0.5">
        <span class="font-semibold text-[12px] uppercase tracking-wide">Ciphertext:</span>
      </div>
      <div v-if="vote.metadata.c1" class="text-[11px] opacity-70 break-all">
        c1: {{ vote.metadata.c1.substring(0, 32) }}...
      </div>
      <div v-if="vote.metadata.c2" class="text-[11px] opacity-70 break-all">
        c2: {{ vote.metadata.c2.substring(0, 32) }}...
      </div>
      <div 
        v-if="vote.metadata.proof_verified === true"
        class="flex items-center gap-1 mt-1 text-[11px]"
      >
        <IH-check-circle class="size-[14px] text-green-500 shrink-0" />
        <span class="text-green-500">ZK proof verified</span>
      </div>
      <div 
        v-else-if="vote.metadata.proof_verified === false"
        class="flex items-center gap-1 mt-1 text-[11px]"
      >
        <IH-x-circle class="size-[14px] text-orange-500 shrink-0" />
        <span class="text-orange-500">ZK proof failed</span>
      </div>
      <div 
        v-else-if="vote.metadata.proof"
        class="flex items-center gap-1 mt-1 text-[11px]"
      >
        <IH-clock class="size-[14px] text-orange-500 shrink-0" />
        <span class="text-orange-500">ZK proof pending</span>
      </div>
    </div>
    <!-- Show if no encrypted data -->
    <div 
      v-else-if="vote.metadata && vote.metadata.encrypted === false"
      class="text-[11px] text-orange-500"
    >
      ⚠️ Vote not encrypted (ElGamal server was not available)
    </div>
  </div>
  <div v-else class="flex flex-col max-w-full truncate items-start">
    <UiTooltip
      v-if="proposal.type !== 'basic'"
      :title="getChoiceText(proposal.choices, vote.choice)"
      class="max-w-full truncate"
    >
      <h4
        class="truncate"
        v-text="getChoiceText(proposal.choices, vote.choice)"
      />
    </UiTooltip>
    <div v-else class="flex items-center gap-2 truncate">
      <div
        class="shrink-0 rounded-full choice-bg inline-block size-[18px]"
        :class="`_${vote.choice}`"
      >
        <IH-check
          v-if="vote.choice === 1"
          class="text-white size-[14px] mt-0.5 ml-0.5"
        />
        <IH-x
          v-else-if="vote.choice === 2"
          class="text-white size-[14px] mt-0.5 ml-0.5"
        />
        <IH-minus-sm
          v-else-if="vote.choice === 3"
          class="text-white size-[14px] mt-0.5 ml-0.5"
        />
      </div>
      <h4
        class="truncate grow"
        v-text="proposal.choices[(vote.choice as number) - 1]"
      />
    </div>
    <div v-if="showReason" class="text-[17px] max-w-full truncate">
      {{ vote.reason }}
    </div>
  </div>
</template>
