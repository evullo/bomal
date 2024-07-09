<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const emit = defineEmits(['toggle'])

const toggleMenu = () => {
  open.value = !open.value
  emit('toggle', open.value)
}
</script>

<template>
    <button class="z-20 w-14 h-14 mt-3 relative rounded-md hover:text-red-600" @click="toggleMenu">
      <div class="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span class="block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out"
              :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
        <span class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
              :class="{'opacity-0': open } "></span>
        <span class="block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out"
              :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
      </div>
    </button>

  <Transition name="slide">
    <div v-show="open" class="bg-orange-100 block absolute z-10 w-1/2 h-[97vh] top-3 drop-shadow-md rounded-r-md md:w-1/4 lg:w-1/6"></div>
  </Transition>

  <div v-show="open" @click="toggleMenu" class="fixed top-0 left-0 w-full h-dvh bg-black opacity-50 z-0"></div>
</template>

<style scoped>
.slide-enter-active {
  transition: all 0.5s ease-in-out;
}

.slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>
