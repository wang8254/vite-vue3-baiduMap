<!--
 * @Author: wangxh
 * @Date: 2022-05-17 09:16:15
 * @LastEditors: wangxh wangxh
 * @LastEditTime: 2022-12-08 15:43:16
 * @FilePath: \my-vue-app\src\pages\login\Login.vue
-->
<style lang="scss" scoped>
.login-menu {
  display: flex;
  height: 100%;
}
.menu-demo {
  width: 200px;
}
.con {
  width: calc(100% - 200px);
}
</style>
<template>
  <div class="login-menu">
    <el-menu class="menu-demo" mode="vertical" router>
      <el-menu-item index="/login/sonAppOne">子应用1</el-menu-item>
      <el-menu-item index="/login/sonAppTow">子应用2</el-menu-item>
      <el-menu-item index="sonAppAll">所有子应用</el-menu-item>
    </el-menu>
    <div class="con">
      <router-view></router-view>
    </div>
  </div>

</template>
<script setup lang="ts">
</script>
  
  
  

  