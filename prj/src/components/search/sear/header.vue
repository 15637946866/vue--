<template>
  <div class="he">
    <img src="../../../assets/箭头.png" alt="">
      
      <div class="sear">
          <i class="iconfont icon-sousuo"></i>
           <input type="text" ref="inp" placeholder="请输入搜索关键字">
      </div>
    <mt-button type="default" @click="searchData">搜索</mt-button>
  </div>
</template>
<script>
import Vue from "vue";
import {getjiu} from "../../../api/searchaxios.js";
import { Button } from "mint-ui";
Vue.component(Button.name, Button);
export default {
  data() {
    return {
      con:[]
    };
  },
  methods:{
     async searchData(){
         
         this.con=await getjiu() 
         window.console.log(this.$refs.inp.value)
      }
  }
};
</script>
<style lang="less" scoped>
.he {
  width: 100%;
  height: 88px;
    display: flex;
    
  img {
    width: 34px;
    height: 34px;
    padding: 26px 20px;
  }
  .sear{
        border: 1px solid black;
         margin:10px 10px;
        border-radius: 10px; 
        width: 276*2px;
        height: 66px;
        i{
            font-size: 32px
        }
      input{
        width: 480px;
         height: 50px;
         margin:10px 10px;
      }
  }
  .mint-button{
      height: 70px;
      margin-top: 10px;
      font-size: 28px
  }
}
</style>