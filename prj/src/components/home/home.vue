<template>
  <div id="app">
    <!-- 头部 -->
    <headers></headers>
    <!-- 轮播图 -->
    <rotation></rotation>
    <!-- 分类 -->
    <catelist></catelist>
    <selected></selected>
    <seackill></seackill>
    <brand></brand>
    <shopper></shopper>
  </div>
</template>
<script>
import headers from "./components/header.vue"
import rotation from './components/rotation.vue'
import catelist from './components/catelist.vue'
import selected from './components/selected.vue'
import seackill from './components/seckill'
import brand from './components/brand.vue'
import shopper from './components/shopper'
export default {
  name: "app",
  components: {
    headers,
    rotation,
    catelist,
    selected,
    seackill,
    brand,
    shopper
  }
};
</script>
<style lang="less" scoped>

#app{
  overflow-y: auto; 
  width: 100%;
  margin-bottom: 96px
}
</style>