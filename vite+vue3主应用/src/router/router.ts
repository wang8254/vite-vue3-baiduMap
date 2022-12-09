/*
 * @Author: wangxh
 * @Date: 2022-05-17 09:16:15
 * @LastEditors: wangxh wangxh
 * @LastEditTime: 2022-12-09 14:35:58
 * @FilePath: \my-vue-app\src\router\router.ts
 */
import { createRouter, createWebHashHistory,createWebHistory, RouteRecordRaw } from 'vue-router';

import myStore from '../store';
const $store = myStore;
declare const ifDebugger: boolean;
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'),
    children: [
      {
        path: 'sonAppOne',
        name: 'sonAppOne',
        component: () => import('@/pages/sonAppOne/index.vue')
      },
      {
        path: 'sonAppTow',
        name: 'sonAppTow',
        component: () => import('@/pages/sonAppTow/index.vue')
      },
      {
        path: 'sonAppAll',
        name: 'sonAppAll',
        component: () => import('@/pages/sonAppAll/index.vue')
      }
    ]
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
let hasRouter: Boolean = true;
router.beforeEach((to, from, next) => {
  next();
});
export default router;
