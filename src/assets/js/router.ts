import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../views/HomeView.vue'
import AboutView from '../../views/AboutView.vue'
import GalleryView from '@/views/GalleryView.vue'
import PositionView from '@/views/PositionView.vue'
import ContactView from '@/views/ContactView.vue'
import PricingView from '@/views/PricingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/position',
      name: 'position',
      component: PositionView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router