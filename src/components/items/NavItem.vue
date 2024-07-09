<script setup lang="ts">
import type { NavItemProps } from '@/assets/js/types'

defineProps<NavItemProps>()
</script>

<template>
  <li class="my-2 p-2 rounded-md hover:bg-red-600 focus:bg-red-600 hover:bg-opacity-40
  focus:bg-opacity-40 hover:text-red-900 focus:text-red-900">
    <RouterLink :to="{name: $props.to}">
      <span class="flex gap-2 items-center">
        <slot></slot>
      </span>
    </RouterLink>
  </li>
</template>
