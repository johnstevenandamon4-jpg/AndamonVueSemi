import { createRouter, createWebHistory } from 'vue-router'

import Library from '../views/Library.vue'
import Announcement from '../views/Announcement.vue'
import Books from '../views/Books.vue'
import Archives from '../views/Archives.vue'
import RegistrationForm from '../views/RegistrationForm.vue'

const routes = [
  {
    path: '/',
    name: 'Library',
    component: Library
  },
  {
    path: '/announcement',
    name: 'Announcement',
    component: Announcement
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/archives',
    name: 'Archives',
    component: Archives
  },
  {
    path: '/registration',
    name: 'RegistrationForm',
    component: RegistrationForm
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router