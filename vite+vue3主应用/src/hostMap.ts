/*
 * @Author: wangxh wangxh
 * @Date: 2022-12-08 15:03:32
 * @LastEditors: wangxh wangxh
 * @LastEditTime: 2022-12-08 15:05:43
 * @FilePath: \vite+vue3主应用\src\hostMap.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const map:any = {
  "//localhost:7100/": "//wujie-micro.github.io/demo-react17/",
  "//localhost:7200/": "//wujie-micro.github.io/demo-vue2/",
  "//localhost:7300/": "//wujie-micro.github.io/demo-vue3/",
  "//localhost:7400/": "//wujie-micro.github.io/demo-angular12/",
  "//localhost:7500/": "//wujie-micro.github.io/demo-vite/",
  "//localhost:7600/": "//wujie-micro.github.io/demo-react16/",
  "//localhost:7700/": "//wujie-micro.github.io/demo-main-react/",
  "//localhost:8000/": "//wujie-micro.github.io/demo-main-vue/",
};
declare const process: any;
export default function hostMap(host: string) {
  if (process.env.NODE_ENV === "production") return map[host];
  return host;
}
