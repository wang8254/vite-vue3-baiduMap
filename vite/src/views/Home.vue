<!--
 * @Author: wangxh wangxh
 * @Date: 2022-11-18 15:32:46
 * @LastEditors: wangxh wangxh
 * @LastEditTime: 2022-12-09 13:57:29
 * @FilePath: \vite\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <HelloWorld msg="Vue3 + vite示例"></HelloWorld>
    <div id="daiduMap"></div>
    <div class="content" style="text-align: center">
      <p>当前vite版本
        <el-tag style="vertical-align: text-top" size="small">2.7.2</el-tag>
      </p>
      <p>
        当前vue版本
        <el-tag style="vertical-align: text-top" size="small">3.2.26</el-tag>
      </p>
      <p>
        当前element-plus版本
        <el-tag style="vertical-align: text-top" size="small">2.2.6</el-tag>
      </p>
      <p>
        当前ant-design-vue版本
        <el-tag style="vertical-align: text-top" size="small">2.2.8</el-tag>
      </p>
    </div>

  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
  created() {},
  mounted() {
    this.daiudiInit();
  },
  methods: {
    daiudiInit() {
      // const BMap = (window as any).BMapGL;
      console.log("window", window, window.__WUJIE_RAW_WINDOW__);
      console.log("BMapGL", BMapGL);
      var b = new BMapGL.Map("daiduMap");
      b.centerAndZoom(
        new BMapGL.Point(113.67247811997585, 34.756471862191795),
        13
      );
      b.enableScrollWheelZoom(true);
    },
  },
};
</script>

<style>
:root {
  --host-color: #f16b5f;
}
#daiduMap,
#leafletmap {
  width: 400px;
  height: 400px;
}
</style>
