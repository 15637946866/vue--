<template>
    <div class="hotse">
        <h1>历史记录</h1>
        <mt-button type="default">无线冲</mt-button>
        <mt-button type="default">登山表</mt-button>
        <button class="btn" >清除历史记录</button>
    </div>
</template>
<script>
import Vue from "vue";
import { Button } from "mint-ui";
Vue.component(Button.name, Button);
export default {
    
}
</script>
<style lang="less" scoped>
.hotse{
    width: 100%;
    height: 300px;
    background-color: #f5f5f5;
     overflow: hidden;
    h1{
        font-size: 30px;
        margin: 20px 50px;
        font-weight: normal;
    }
    .mint-button{
      height: 70px;
      margin-top: 10px;
      font-size: 28px;
      margin-left: 40px;
      border-radius: 30px;
  }
  .btn{
      position: absolute;
      left: 280px;
      top: 500px;
  }
}
</style>