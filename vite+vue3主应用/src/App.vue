<template>
  <el-config-provider namespace="el">
    <router-view></router-view>
  </el-config-provider>

</template>
<script setup lang="ts">
import { getCurrentInstance, onMounted } from "vue";
const { proxy }: any = getCurrentInstance();
onMounted(() => {
  setTitleName();
});
const setTitleName = () => {
  document.getElementsByTagName("title")[0].innerText = proxy.$projectName;
};
</script>
<style>
html,
body {
  height: 100%;
}
#app {
  /* text-align: center; */
  height: 100%;
}

.element-plus-logo {
  width: 50%;
}
</style>
