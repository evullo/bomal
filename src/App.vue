<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />

  <div class="mt-24 mb-16">
    <RouterView />
  </div>

  <FooterComponent />
</template>
