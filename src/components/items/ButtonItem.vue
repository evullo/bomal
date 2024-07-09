<script setup lang="ts">
import type { NavItemProps } from '@/assets/js/types'

defineProps<NavItemProps>()
</script>

<template>
  <button class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition duration-500 ease-in-out">
    <router-link :to="{name: $props.to}">
      <slot></slot>
    </router-link>
  </button>
</template>
