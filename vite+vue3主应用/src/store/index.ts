/*
 * @Author: wangxh
 * @Date: 2022-05-17 09:16:15
 * @LastEditors: wangxh wangxh
 * @LastEditTime: 2022-05-27 13:40:57
 * @FilePath: \my-vue-app\src\store\mian.ts
 */
import { createStore } from 'vuex';

import state from "./state"
import mutations from "./mutations"
import actions from "./actions"
const store = createStore({
  state,
  mutations,
  actions,
});
export default store
