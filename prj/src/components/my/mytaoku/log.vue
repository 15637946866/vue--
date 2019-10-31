<template>
  <div class="log_on">
    <router-link tag="li" to="/my">
      <img class="hui" src="../../../assets/箭头.png" alt />
    </router-link>
    <img src="../../../assets/mylogo.png" class="mylogo" />
    <h2>淘&emsp;&emsp;库&emsp;&emsp;欢&emsp;&emsp;迎&emsp;&emsp;您&emsp;&emsp;！</h2>
    <div class="log">
      <p class="one">
        用户名:
        <input type="text" placeholder="请输入账号" />
      </p>
      <p class="two">
        密
        <span>码:</span>
        <input type="password" placeholder="请输入密码" />
      </p>
      <p class="three">
        <input id="log" type="submit" value="立即登录" />
      </p>
      <p class="four">
        还没有账号？
        <router-view></router-view>
      <router-link tag="li" to=/log/sign class="zhu">马上注册</router-link>
      </p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.log_on {

  position: absolute;
  left: 0;
  top: 0px;
  width: 100%;
  height: 1210px;
  background-color: #7bbfea;
  .hui {
    width: 34px;
    height: 34px;
    padding: 26px 20px;
  }
}
.mylogo {
  margin-top: 40px;
  width: 400px;
  margin-left: 200px;
}
h2 {
  margin-top: 40px;
  font-size: 60px;
  text-align: center;
  color: #228fbd;
  margin-left: 30px;
}


.one {
  width: 600px;
  height: 100px;
  font-size: 50px;
  line-height: 100px;
  color: #228fbd;
  margin-left: 100px;
  input {
    width: 300px;
    height: 52px;
    border: solid 1px #2468a2;
  }
}
.two {
  margin-top: 20px;
  width: 600px;
  height: 100px;
  font-size: 50px;
  line-height: 100px;
  color: #228fbd;
  margin-left: 100px;
  span {
    margin-left: 45px;
  }
  input {
    margin-left: 20px;
    width: 300px;
    height: 50px;
    border: solid 1px #2468a2;
  }
}
.three {
  margin-top: 40px;
  width: 600px;
  height: 100px;
  line-height: 100px;
  margin-left: 140px;

  input {
    font-size: 60px;
    width: 400px;
    height: 100px;
    background-color: red;
  }
}
.four {
  margin-top: 40px;
  width: 600px;
  height: 100px;
  font-size: 50px;
  line-height: 100px;
 margin-left: 100px;
  color: #228fbd;
  .zhu{
      width: 200px;
      color: aqua;
      border-bottom: solid 1px aqua;
  }
}
</style>