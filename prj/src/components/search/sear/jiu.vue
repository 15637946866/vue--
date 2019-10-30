<template>
  <div>
    <sales></sales>
    <div class="wrapper">
      <ul>
        <li v-for="(item,index) in data" :key="index">
          <img :src="item.img" alt />
          <h4>{{item.h4}}</h4>
          <span>{{item.span}}</span>
          <p>{{item.p}}</p>
          <b>{{item.addr}}</b>
        </li>
      </ul>
    </div>
    <router-link  tag="li" to='/search' >
    <img class="hui" src="../../../assets/箭头.png" alt="">
      </router-link>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import {mapState} from "vuex";
import sales from "./sales.vue";
export default {
  data() {
    return {
      bs: null
    };
  },
  components: {
    sales
  },
   computed: {
    ...mapState([
      // 映射 this.count 为 store.state.count
      "data"
    ])
  },
  mounted(){
  this.$nextTick(() => {
        this.bs = new BScroll(".wrapper", {
          click: true
        });
      });
  },
 
  
};
</script>
<style lang="less" scoped>
.wrapper {
  position: absolute;
  left: 0;
  top: 170px;
  width: 100%;
  height: 1100px;
  z-index: 98;
  background-color: #f5f5f5;
  overflow: hidden;
  li {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
    img {
      margin-top: 20px;
      width: 200px;
      height: 200px;
      float: left;
      margin-right: 20px;
    }
    h4 {
      margin-top: 20px;
    }
    span {
      color: red;
      font-size: 40px;
      display: block;
      margin-top: 40px;
    }
    b {
      position: absolute;
      right: 18px;
      bottom: 0;
      color: #666;
    }
  }
}
.hui{
    position: absolute;
    left: 0;
    top: 0;
     width: 34px;
    height: 34px;
    padding: 26px 20px;
    }
</style>