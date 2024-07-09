<script setup lang="ts">
import NavItem from '@/components/items/NavItem.vue'
import MenuToggleItem from '@/components/items/MenuToggleItem.vue'
import { ref } from 'vue'
import HomeIcon from '@/components/icons/HomeIcon.vue'
import PhotoIcon from '@/components/icons/PhotoIcon.vue'
import LocationIcon from '@/components/icons/LocationIcon.vue'
import ChatIcon from '@/components/icons/ChatIcon.vue'
import BookIcon from '@/components/icons/BookIcon.vue'

const isMenuOpen = ref(false)

const handleToggle = (isOpen: boolean) => {
  isMenuOpen.value = isOpen
}
</script>

<template>
  <nav>
    <MenuToggleItem @toggle="handleToggle" />

    <Transition name="slide-fade">
        <ul v-show="isMenuOpen" class="mt-20 mx-2 z-10 absolute w-44 h-dvh top-0 flex flex-col">
          <NavItem to="home">
            <HomeIcon />
            Accueil
          </NavItem>
          <NavItem to="gallery">
            <PhotoIcon />
            Galerie
          </NavItem>
          <NavItem to="position">
            <LocationIcon />
            Position
          </NavItem>
          <NavItem to="contact">
            <ChatIcon />
            Contact
          </NavItem>
          <NavItem to="about">
            <BookIcon />
            À propos
          </NavItem>
        </ul>
    </Transition>
  </nav>
</template>


<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>