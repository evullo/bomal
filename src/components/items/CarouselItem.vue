<script setup lang="ts">
import type { CarouselItemProps } from '@/assets/js/types'

defineProps<CarouselItemProps>()
</script>

<template>
  <div class="flex justify-center items-center min-w-full">
    <img
      class="max-w-[90vw] max-h-[90vh] md:max-w-[75vw] object-contain rounded-md"
      :src="src"
      alt="carousel item"
    />
  </div>
</template>
