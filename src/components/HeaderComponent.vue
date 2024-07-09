<script setup lang="ts">
import LogoItem from '@/components/items/LogoItem.vue'
import NavComponent from '@/components/NavComponent.vue'
</script>

<template>
  <header class="w-full fixed top-0 z-20 flex items-center justify-between pb-2 bg-white drop-shadow-md">
      <NavComponent />
      <LogoItem />
  </header>
</template>
