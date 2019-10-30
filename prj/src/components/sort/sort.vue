<template>
    <div class="cate">
      <!-- 头部......... -->
      <heade></heade>
      <!-- 内容区........... -->
       <div class="content">
          <div class="wrapper" >
              <ul>
                  <li ref="myli" v-for="(item,index) in allcates" :key="index">{{item.title}}</li>
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
    }
  },
  components:{
    heade,
  },
  methods:{

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
.cate{
  height: 100%;
  .content{
    height:calc(100%-148.24px);
    display:flex;
  }
  .wrapper{
    height: 100%;
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