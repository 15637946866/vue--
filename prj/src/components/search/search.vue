<template>
    <div>
     <button @click="selectOne"></button>
     {{con}}
    
    </div>
</template>
<script>
import {getjiu} from "../../api/searchaxios.js";
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
 
}
}
</script>
<style lang="less" scoped>
button{
  width: 100px;
  height: 50px;
}
</style>