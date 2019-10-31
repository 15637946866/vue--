<template>
  <div class="tou">
    <ul>
       <router-link tag="li" to="/search/jiu" @click.native="zohe">
        综合排序
        <i class="iconfont icon-arrow"></i>
        <dl class="list">
          <dt>综合排序</dt>
          <dt>价格从高到低</dt>
          <dt>价格从低到高</dt>
        </dl>
      </router-link>
      <router-link tag="li" to="/search/jiu" @click.native="searchData">销量</router-link>
      <router-view></router-view>
      <router-link tag="li" to="/search/jiu/result" >筛选</router-link>
    </ul>
  </div>
</template>
<script>
import { getjiu } from "../../../api/searchaxios.js";
import {mapState} from "vuex";
export default {
  computed: {
    ...mapState([
      // 映射 this.count 为 store.state.count
      "cone"
    ])
  },
  methods: {
    async searchData() {
      this.searval = this.cone+"销";
     this.con = await getjiu(this.searval);
     this.$store.commit("sub",this.con); 
    },
    async zohe() {
      this.searval = this.cone;
     this.con = await getjiu(this.searval);
     this.$store.commit("sub",this.con); 
    }
  }
};
</script>
<style lang="less" scoped>
.tou {
  position: absolute;
  left: 0;
  top: 88px;
  z-index: 99;
  width: 750px;
  height: 80px;
  background-color: #fff;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;

  font-size: 30px;
  font-weight: 800;
  color: #666;
  ul {
    display: flex;
    li {
      flex: 1;
      text-align: center;
      line-height: 80px;
    }
  }
  .list {
    background-color: white;
    position: absolute;
    width: 750px;
    height: 300px;
    dt {
      border-bottom: 1px solid #000;
    }
    display: none;
  }
}
</style>