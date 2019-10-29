<template>
  <div class="tou">
    <div class="touz">
      <a href="#">
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
      </a>
    </div>
    <div class="touzh">
      <h1>购物车</h1>
    </div>
    <div class="touy">
      <a href="#">
        <i class="iconfont icon-caidan"></i>
      </a>
    </div>
    <navs></navs>
  </div>
</template>

<style lang="less" scoped>
.tou {
  background: rgba(248, 248, 248, 0.95);
  width: 100%;
  height: 88px;
  display: flex;
}
.touz {
  float: left;
  //   display: block;
  width: 88px;
  height: 88px;
}
.touz a {
  // display: block;
  width: 86px;
  height: 86px;
}
.icon-changyongtubiao-xianxingdaochu-zhuanqu- {
  font-size: 45px;
  line-height: 86px;
  margin-left: 15px;
}
.touzh {
  display: flex;
  flex: 1;
  line-height: 86px;
  width: 106px;
  height: 86px;
  align-items: center;
  justify-content: center;
}
.touzh h1 {
  // flex: 1;
  font-size: 35px;
  font-weight: 550;
}
.touy {
  float: right;
  width: 86px;
  height: 86px;
}
.touy a {
  display: block;
  width: 100%;
  height: 100%;
}
.icon-caidan {
  font-size: 45px;
  line-height: 86px;
  color: #969696;
}
.nav{
    // display: none;
    position: absolute;
    right: 0;
}
</style>
<script>
import navs from "./nav.vue";
export default {
  components: {
    navs
  }
};
</script>
