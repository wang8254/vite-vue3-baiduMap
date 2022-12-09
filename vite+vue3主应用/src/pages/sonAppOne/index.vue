<!--
 * @Author: wangxh wangxh
 * @Date: 2022-12-08 14:46:40
 * @LastEditors: wangxh wangxh
 * @LastEditTime: 2022-12-08 15:15:17
 * @FilePath: \vite+vue3主应用\src\pages\sonAppOne\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<style lang="scss" scoped>
</style>
<template>
  <WujieVue width="100%" height="100%" name="vite" :url="viteUrl.url" :sync="true"></WujieVue>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, getCurrentInstance } from "vue";
const viteUrl = reactive({
  url: "//localhost:7500/",
});
</script>
  
  
  

  