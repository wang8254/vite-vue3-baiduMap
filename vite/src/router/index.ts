/*
 * @Author: wangxh wangxh
 * @Date: 2022-11-18 15:32:46
 * @LastEditors: wangxh wangxh
 * @LastEditTime: 2022-12-09 14:15:44
 * @FilePath: \vite\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Home from "../views/Home.vue";
import { defineAsyncComponent } from "vue";
const _import = (name: string) => defineAsyncComponent(() => import(`../views/${name}.vue`));

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/dialog",
    name: "Dialog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: _import("Dialog"),
  },
  {
    path: "/location",
    name: "Location",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: _import("Location"),
  },
  // {
  //   path: "/state",
  //   name: "State",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: _import('State')
  // },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: _import("Communication"),
  },
];

export default routes;
