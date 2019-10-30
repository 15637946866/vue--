<template>
    <div id="header">
    
        <router-link tag="li" to="/Home">
            <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
        </router-link>
        
        <div class="big">
            <img src="../images/big.png" alt="">
            <input placeholder="请输入关键字" type="text">
        </div>
          
            <i class="iconfont icon-caidan"></i>
         

    </div>

</template>



<script>

export default {
    
}
</script>

<style lang="less" scoped>
 #header{
        width: 100%;
        background:white;
        padding: 10px 0;
        display: flex;
        
        .big{
            width: 552px;
            border-radius: 20px;
            display: flex;
            height: 66px;
            align-items: center;
            background: #E8ECF0;
            img{
                width: 44px;
                height: 44px;
            }
            input{
                flex: 1;
                background: transparent;
                width: 330px;
                height: 62px;
            }
        }
        li{
            width: 86px;
            height: 86px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            i{
                font-size: 35px;
            }
        }
       
             i{
                width: 85px;
                height: 85px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 42px;
                
            }
        
      
    }

</style>
