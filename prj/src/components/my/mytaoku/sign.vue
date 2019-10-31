<template>
  <div class="sign-out">
    <router-link tag="li" to="/my">
      <img class="hui" src="../../../assets/箭头.png" alt />
    </router-link>
    <img src="../../../assets/mylogo.png" class="mylogo" />
    <h2>欢&emsp;&emsp;迎&emsp;&emsp;注&emsp;&emsp;册&emsp;&emsp;淘&emsp;&emsp;库</h2>
    <div class="log">
      <p class="one">
        设置账户：
        <input type="text" placeholder="请输入账号" />
      </p>
      <p class="one">
        设置密码：
        <input type="password" placeholder="请输入密码" />
      </p>
      <p class="one">
        重复密码：
        <input type="password" placeholder="请重复密码" />
      </p>
      <p class="three">
        <input id="log" type="submit" value="立即注册" />
      </p>
      <p class="four">
        <router-view></router-view>
      <router-link tag="li" to=/log class="zhu">马上去登录</router-link>
      </p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.sign-out {
  position: absolute;
  left: 0;
  top: 0;
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

.three {
  margin-top: 40px;
  width: 600px;
  height: 100px;
  line-height: 100px;
  margin-left: 140px;

  input {
    font-size: 60px;
    width: 400px;
    height: 110px;
    background-color: red;
  }
}

  .zhu{
      width: 250px;
      color: aqua;
      border-bottom: solid 1px aqua;
      margin-top: 40px;
      margin-left: 140px;
  }

</style>