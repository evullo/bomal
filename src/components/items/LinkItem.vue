<script setup lang="ts">
import LinkIcon from '@/components/icons/LinkIcon.vue'
import type { LinkProps } from '@/assets/js/types'

defineProps<LinkProps>()
</script>

<template>
  <a
    :href="linkTo"
    class="w-fit my-4 border-b border-red-600 flex flex-row items-center gap-2"
    target="_blank"
  >
    <LinkIcon></LinkIcon>
    <slot></slot>
  </a>
</template>
