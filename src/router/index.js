import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/components/LandingPage.vue'
import Admin from '@/components/Admin.vue'
import Books from '@/components/Books.vue'
import Cart from '@/components/Cart.vue'
import Library from '@/components/Library.vue'
import WishList from '@/components/WishList.vue'
import Profile from '@/components/Profile.vue'
import ViewBook from '@/components/ViewBook.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/books',
      component: Books
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/library',
      compoent: Library
    },
    {
      path: '/wish_List',
      component: WishList
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/view_book',
      component: ViewBook
    },
  ],
})

export default router
