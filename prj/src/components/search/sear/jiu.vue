<template>
    <div>
        <ul>
            <li v-for="(item,index) in con" :key='index'>
                <img :src="item.img" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            con:[]
        }
    },
    created(){
      this.getParams()
    },
    methods :{
        getParams(){
        // 取到路由带过来的参数
        const routerParams = this.$route.query.mallCode
        // 将数据放在当前组件的数据内
        this.con = routerParams;  
         window.console.log(this.con)
      }
    },
    watch: {
      '$route': 'getParams'
    }
}
</script>
<style lang="less" scoped>
div{
    position: absolute;
    left: 0;
    top: 88px;
    width: 100%;
    height: 1000px;
    z-index: 999;
    background-color: #f5f5f5;
}
</style>