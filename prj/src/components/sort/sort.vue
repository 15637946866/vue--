<template>
    <div class="cate">
      <!-- 头部......... -->
      <heade></heade>
      <!-- 内容区........... -->
       <div class="content">
          <div class="wrapper" >
              <ul>
                  <li ref="myli" @click="seIectOne(index,item.id)" :class="{active: currentIndex==index}"  v-for="(item,index) in allcates" :key="index">{{item.title}}</li>
              </ul>
          </div>
       </div>  
    </div>
</template>

<script>
import heade from "./header/header.vue"
import BScroll from '@better-scroll/core'
import {getsort} from "../../api/sort.js"
export default {
  data(){
    return{
      allcates:[],
      bs1:null,
      currentIndex:0,
    }
  },
  components:{
    heade,
  },
  methods:{
    async seIectOne(index){
      this.currentIndex=index
    }

  },
  created(){

  },
  async mounted(){
    this.allcates=await getsort()
    window.console.log(this.allcates[0].id)
    this.$nextTick(()=>{
      this.bs1 = new BScroll('.wrapper', {
          click:true
      })
    })
  }
}
</script>

<style lang="less" scoped>
.active{
  color: #e9232c;
  background: #EFF4FA
}
.cate{
  height: 1334px;
  .content{
    height:1128px;
    display:flex;
  }
  .wrapper{
    height: 1128px;
    ul{
      li{
        width: 140px;
        height: 155px;
        text-align: center;
        line-height:155px;
        font-size: 30px;
      }
    }
  }
}

</style>