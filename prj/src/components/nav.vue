<template>
  <div class="nav">
    <router-link tag="li" to="/Home">
      <i class="iconfont icon-shouye"></i>
      首页
    </router-link>
    <router-link tag="li" to="/sort">
     <i class="iconfont icon-leimupinleifenleileibie"></i>
      分类
    </router-link>
    <router-link tag="li" to="/search">
     <i class="iconfont icon-sousuo"></i>
      搜索
    </router-link>
    <router-link tag="li" to="/car">
    <i class="iconfont icon-gouwuche1"></i>
      购物车
    </router-link>
    <router-link tag="li" to="/My">
    <i class="iconfont icon-wode"></i>
      我的
    </router-link>
  </div>
</template>
<style scoped>
.nav {
  position: fixed;
  z-index: 99;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
 background-color: #fff;
}
.nav li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  /* height: 50px;
  line-height: 50px;
  text-align: center; */
  
}
.router-link-active{
    color: red
}
</style>