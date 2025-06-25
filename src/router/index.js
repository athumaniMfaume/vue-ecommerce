import { createRouter, createWebHistory } from 'vue-router'
import AHome from '../pages/AHome.vue'
import AAbout from '../pages/AAbout.vue'
import AContact from '../pages/AContact.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import ACart from '../pages/ACart.vue'

const routes = [
  { path: '/', component: AHome },
  { path: '/about', component: AAbout },
  { path: '/contact', component: AContact },
  { path: '/product/:id', component: ProductDetail, props: true },
  { path: '/cart', component: ACart },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
