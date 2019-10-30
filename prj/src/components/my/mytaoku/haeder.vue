<template>
  <div class="header">
    <div class="top">
      <a href="#" class="a1-l">
        <i class="iconfont icon-shezhi"></i>
      </a>
      <a href="#" class="a2-r">
        <i class="iconfont icon-shenglvehao-"></i>
      </a>
    </div>
    <div class="cen">
      <a href="#" class="center-s"></a>
      <a href="#" class="center">
        <span>点击登录</span>
      </a>
    </div>
    <div class="bottom">
      <span>
        <a href="#">
          <i class="iconfont icon-xin"></i>
          <p>商品收藏</p>
        </a>
      </span>
      <span>
        <a href="#">
          <i class="iconfont icon-shangpu"></i>
          <p>店铺收藏</p>
        </a>
      </span>
      <span>
        <a href="#">
          <i class="iconfont icon-zuji"></i>
          <p>我的足迹</p>
        </a>
      </span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 500px;
  background-color: #ed5564;
  background-image: url("../../../assets/mybeijing.png");
}
.top {
  width: 100%;
  height: 86px;
}
.a1-l {
  display: block;
  width: 86px;
  height: 86px;
  float: left;
  position: relative;
}
.icon-shezhi {
  font-size: 46px;
  position: absolute;
  left: 15px;
  top: 13px;
  color: white;
}
.a2-r {
  display: block;
  width: 86px;
  height: 86px;
  float: right;
  position: relative;
}
.icon-shenglvehao- {
  font-size: 46px;
  position: absolute;
  right: 15px;
  top: 8px;
  color: white;
}
.cen {
  width: 552px;
  height: 276px;
  margin: 0 auto;
}
.center-s {
  display: block;
  width: 184px;
  height: 184px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url("../../../assets/mytouxiang.png");
  background-position: 50% 50%;
  background-size: 100%;
  border-radius: 100%;
}
.center {
  display: block;
  width: 147px;
  height: 42px;
  margin: 0 auto;
  margin-top: 8px;
}
.center span {
  font-size: 32px;
  color: white;
  margin-left: 6px;
}
.bottom {
  width: 100%;
  height: 140px;
  background: rgba(0, 0, 0, 0.1);
  span {
    display: inline-block;
    width: 33.33%;
    height: 140px;
    a {
      display: block;
      
      i {
        font-size: 65px;
        color: white;
        margin-left: 36%;
        margin-top: 10px;
        
      }
      p {
        font-size: 25px;
        color: #fff;
        text-align: center;
        margin-bottom: 40px;
      }
    }
  }
}
</style>