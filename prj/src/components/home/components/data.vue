<template>
  <div class="comp">
    <bottom></bottom>
    <div class="wrapper">
      <div class="c">
        <router-link tag="li" to="/home" class="jt">
          <img src="../../../assets/箭头.png" alt />
        </router-link>
        <banner></banner>
        <div class="top">
          <h2>海尔吸尘器家用小型手持式强力大吸力功率静音地毯小米粒除螨机</h2>
          <span>风动地刷+两用地刷，双倍洁净</span>
          <div class="price">
            <h1>￥599.00</h1>
            <span>销量：11件</span>
          </div>
        </div>
        <div class="deliver">
          <div class="del-l">
          </div>
          <div class="del-r"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import banner from "./data-rotation.vue";
import bottom from "./data-bottom.vue";
export default {
  data() {
    return {
      bs1: null
    };
  },
  components: {
    banner,
    bottom
  },
  mounted() {
    this.$nextTick(() => {
      this.bs1 = new BScroll(".wrapper", {
        click: true
      });
    });
  }
};
</script>
<style lang="less" scoped>
.bottom {
  position: fixed;
  bottom: 0px;
  z-index: 1000;
}
.comp {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
}
.wrapper {
  // position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .c{
    height: 6000px;
  }
  .jt {
    position: absolute;
    z-index: 100;
    height: 40px;
    width: 40px;
  }

  .top {
    padding: 20px;
    > h2 {
      font-size: 36px;
    }
    > span {
      font-size: 30px;
    }
    .price {
      display: flex;
      position: relative;
      h1 {
        font-size: 50px;
        color: red;
      }
      span {
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 24px;
      }
    }
  }
}
</style>
