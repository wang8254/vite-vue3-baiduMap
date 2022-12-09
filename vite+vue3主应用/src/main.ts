/*
 * @Author: wangxh wangxh
 * @Date: 2022-12-08 14:08:53
 * @LastEditors: wangxh wangxh
 * @LastEditTime: 2022-12-09 14:44:07
 * @FilePath: \vite+vue3主应用\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';
import http from './service/https';
declare const projectName: string;

import '@/styles/index.scss';
import 'uno.css';
// 弹框类型组件需要单独引入样式.
import 'element-plus/theme-chalk/src/message.scss';
import 'element-plus/theme-chalk/el-loading.css';
import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-notification.css';
import 'element-plus/theme-chalk/el-message-box.css';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';
const app = createApp(App);
app.config.globalProperties.$https = http;
// app.config.globalProperties.$projectName = projectName;

console.log('主应用', window);
import WujieVue from 'wujie-vue3';
const { setupApp, preloadApp, bus } = WujieVue;
// setupApp({
//   name: "vite2",
//   // url: 'http://localhost:3001/#/login',
//   alive: true,
// });
setupApp({
  name: 'vite',
  // url: 'http://localhost:3001/#/login',
  alive: true,
  plugins: [
    {
      // 排除子应用的这个脚本不加载，防止报错
      jsExcludes: ['https://api.map.baidu.com/api?v=1.0&type=webgl&ak=6gGQ6whIn3QHHHUqPe7XtjcT50fqvdk2'],
      // 在子应用所有的js之前
      jsBeforeLoaders: [
        // 插入一个外联脚本
        { src: 'https://api.map.baidu.com/api?v=1.0&type=webgl&ak=6gGQ6whIn3QHHHUqPe7XtjcT50fqvdk2' }
      ]
    },
    { jsIgnores: ['https://api.map.baidu.com/api?v=1.0&type=webgl&ak=6gGQ6whIn3QHHHUqPe7XtjcT50fqvdk2'] }
  ]
});

// preloadApp({
//   name: 'vite',
//   exec: true,
//   plugins: [
//     {
//       // 排除子应用的这个脚本不加载，防止报错
//       jsExcludes: ['https://api.map.baidu.com/api?v=1.0&type=webgl&ak=6gGQ6whIn3QHHHUqPe7XtjcT50fqvdk2'],
//       // 在子应用所有的js之前
//       jsBeforeLoaders: [
//         // 插入一个外联脚本
//         { src: 'https://api.map.baidu.com/api?v=1.0&type=webgl&ak=6gGQ6whIn3QHHHUqPe7XtjcT50fqvdk2' }
//       ]
//     },
//     // { jsIgnores: ['https://api.map.baidu.com/api?v=1.0&type=webgl&ak=6gGQ6whIn3QHHHUqPe7XtjcT50fqvdk2'] }
//   ],
//   url: '//localhost:7500/'
// });
// preloadApp({
//   name: "vite2",
//   exec:true,
//   url: 'http://localhost:3001/#/login'
// });

app.use(WujieVue);

app.use(router);
app.use(store);
// app.use(ElementPlus);
app.mount('#app');
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
