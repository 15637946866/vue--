<template>
  <div class="cate">
    <!-- 头部......... -->
    <heade></heade>
    <!-- 内容区........... -->
    <div class="content">
      <!-- 左边滑动。。。 -->
      <div class="wrapper">
        <ul>
          <li
            ref="myli"
            @click="seIectOne(index,item.id)"
            :class="{active: currentIndex==index}"
            v-for="(item,index) in allcates"
            :key="index"
          >{{item.title}}</li>
        </ul>
      </div>
      <!-- 右边模块。。。。。。。 -->
      <div class="content-right">
        <div class="wrapper-right">
         
              <ul>
                <li v-for="(item,index) in 6" :key="index">
                  11111
                  <ul>
                    <li v-for="(item,index) in allbrand" :key="index" class="pic">
                      <img :src="item.img" alt />
                      <span>{{item.span}}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import heade from "./comment/header.vue";
import BScroll from "@better-scroll/core";
import { getsort, getbrand } from "../../api/sort.js";

export default {
  data() {
    return {
      allcates: [],
      allbrand: null,
      alltitle: [],
      bs1: null,
      bs2: null,
      currentIndex: 0
    };
  },
  components: {
    heade
  },
  methods: {
    async seIectOne(index, id) {
      this.currentIndex = index;
      this.back(index);

      this.allbrand = await getbrand(id);
      this.$nextTick(() => {
        this.bs2.refresh();
      });
    },
    back(index) {
      var Li = this.$refs.myli[index];

      if (Li.offsetTop <= 630) {
        this.bs1.scrollTo(0, -index * 70, 100);
      } else {
        this.bs1.scrollTo(0, -628, 100);
      }
    }
  },
  created() {},
  async mounted() {
    this.allcates = await getsort();
    //  this.alltitle = await gettitle();
    this.allbrand = await getbrand(this.allcates[0].id);
    window.console.log(this.allbrand);
    this.$nextTick(() => {
      this.bs1 = new BScroll(".wrapper", {
        click: true
      });
      this.bs2 = new BScroll(".wrapper-right", {
        click: true
      });
    });
  }
};
</script>

<style lang="less" scoped>
.active {
  color: #e9232c;
  background: #eff4fa;
}
.cate {
  height: 1334px;
  overflow: hidden;
  .content {
    height: 1128px;
    display: flex;
    margin-top: 106px;
  }
  .wrapper {
    height: 1128px;

    ul {
      margin-bottom: 100px;
      li {
        width: 140px;
        height: 140px;
        text-align: center;
        line-height: 140px;
        font-size: 30px;
      }
    }
  }
  // 右边样式。。。
  .content-right {
    margin-left: 10px;
    height: 100%;
    width: 100%;
    background: white;
    .wrapper-right {
      height: 100%;
    }
  }
}
.pic {
  float: left;
  img {
    width: 100px;
    height: 100px;
  }
}
</style>