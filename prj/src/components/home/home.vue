<template>
  <div id="app">
    <!-- 头部 -->
    <headers></headers>
    <!-- 轮播图 -->
    <rotation></rotation>
    <!-- 分类 -->
    <catelist></catelist>
    <selected></selected>
  </div>
</template>
<script>
import headers from "./components/header.vue"
import rotation from './components/rotation.vue'
import catelist from './components/catelist.vue'
import selected from './components/selected.vue'
export default {
  name: "app",
  components: {
    headers,
    rotation,
    catelist,
    selected
  }
};
</script>
<style lang="less" scoped>

</style>