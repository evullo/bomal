<script setup lang="ts">
import type { CarouselProps } from '@/assets/js/types'
import { ref } from 'vue'
import CarouselItem from '@/components/items/CarouselItem.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import ChevronRightIcon from '@/components/icons/ChevronRightIcon.vue'
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon.vue'

const props = defineProps<CarouselProps>()
const currentIndex = ref(props.startIndex)

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}
</script>

<template>
  <div
    class="fixed top-0 left-0 z-40 w-full h-full bg-black bg-opacity-60 backdrop-blur flex flex-row justify-center items-center"
  >
    <div
      class="flex transition transition-duration-0.5 transition-ease"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <CarouselItem v-for="(image, index) in images" :src="image" :key="index"></CarouselItem>
    </div>

    <button
      @click="prev"
      class="absolute left-0 bottom-0 md:top-1/2 md:-translate-y-1/2 mb-4 ml-4 md:mb-0 text-white"
    >
      <ChevronLeftIcon class="w-6 text-white"></ChevronLeftIcon>
    </button>
    <button
      @click="next"
      class="absolute right-0 bottom-0 md:top-1/2 md:-translate-y-1/2 mb-4 mr-4 md:mb-0"
    >
      <ChevronRightIcon class="w-6 text-white"></ChevronRightIcon>
    </button>
    <button @click="$emit('close')" class="absolute top-0 right-0 mt-4 mr-4">
      <CloseIcon class="w-6 text-white"></CloseIcon>
    </button>
  </div>
</template>
