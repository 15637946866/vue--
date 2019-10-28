<template>
    <div>
     <button @click="selectOne"></button>
     {{con}}
      <button @click="selectTwo"></button>
    </div>
</template>
<script>
import {getjiu,getbanner} from "../../api/searchaxios.js";
export default {
  data(){
    return{
      con:[]
    }
  },
  methods: {
   async selectOne() {
     window.console.log('11')
      this.con=await getjiu() 
    },
    async selectTwo() {
     window.console.log('11')
      this.con=await getbanner() 
    },
}
}
</script>
<style lang="less" scoped>
button{
  width: 100px;
  height: 50px;
}
</style>