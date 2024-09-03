<script setup lang="ts">
import ParagraphItem from '@/components/items/ParagraphItem.vue'
import HeaderTwoItem from '@/components/items/HeaderTwoItem.vue'
import LinkItem from '@/components/items/LinkItem.vue'
import type { LinkProps } from '@/assets/js/types'

defineProps<LinkProps>()
</script>

<template>
  <div class="flex flex-col items-center">
    <HeaderTwoItem>
      <slot name="header"></slot>
    </HeaderTwoItem>

    <ParagraphItem>
      <slot name="paragraph"></slot>
    </ParagraphItem>

    <LinkItem :link-to="linkTo">
      <slot name="link"></slot>
    </LinkItem>
  </div>
</template>
