import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Product from '../views/product/Product.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '蓝湖官网 - 首页' }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: { title: '蓝湖官网 - 产品说明' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to) => {
  // 遍历meta改变title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  window.scrollTo(0, 0)
})

export default router
