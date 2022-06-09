/*
 * @Description: 
 * @version: 
 * @Author: xiaowen
 * @Date: 2022-06-09 15:38:24
 */
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
  } from 'vue-router'
  import Home from '@/views/home/index.vue'

  const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  export default router
