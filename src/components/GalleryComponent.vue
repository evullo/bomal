<script setup lang="ts">
import images from '@/assets/js/images'
import { ref } from 'vue'
import CarouselComponent from '@/components/CarouselComponent.vue'

const currentIndex = ref(0)
const showCarousel = ref(false)

function openCarousel(index: number) {
  currentIndex.value = index
  showCarousel.value = true
}

function closeCarousel() {
  showCarousel.value = false
}
</script>

<template>
  <div class="masonry md:mx-6 gap-4 my-4">
    <div
      class="masonry-item break-inside-avoid hover:cursor-pointer"
      v-for="(image, index) in images"
      :key="index"
      @click="openCarousel(index)"
    >
      <img class="rounded-md drop-shadow-md" :src="image" alt="Gallery Image" />
    </div>
    <CarouselComponent
      v-if="showCarousel"
      :startIndex="currentIndex"
      :images="images"
      @close="closeCarousel"
    ></CarouselComponent>
  </div>
</template>

<style scoped>
.masonry {
  column-gap: 16px;
  column-count: 2;
}

@media (min-width: 768px) {
  .masonry {
    column-count: 3;
  }
}

@media (min-width: 1024px) {
  .masonry {
    column-count: 4;
  }
}

.masonry-item {
  margin-bottom: 1rem;
}
</style>
