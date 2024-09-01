<script setup lang="ts">
import type { PositionRowItemProps } from '@/assets/js/types'

defineProps<PositionRowItemProps>()
</script>

<template>
  <div
    class="flex flex-row justify-between items-center py-2 px-2 text-sm md:text-base md:items-end"
  >
    <p class="w-auto">{{ position }}</p>
    <hr
      class="flex-grow h-[1px] border-0 border-t border-dotted border-red-600 mx-2 md:-translate-y-1"
    />
    <p class="w-auto max-w-[47%] text-right">{{ dates }}</p>
  </div>
</template>
