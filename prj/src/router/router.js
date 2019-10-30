import Vue from 'vue'
import VueRouter from "vue-router"
import home from '../components/home/home.vue'
import sort from '../components/sort/sort.vue'
import my from '../components/my/my.vue'
import car from '../components/car/car.vue'
import search from '../components/search/search.vue'
import jiu from '../components/search/sear/jiu.vue'
import result from '../components/search/sear/result.vue'
Vue.use(VueRouter)
 let routes=[
    {
        path:'/',
        redirect: "/home"
    },
     {
         path:'/home',
         component:home,
         meta:{
             title:'首页'
         }
     },
     {
        path:'/sort',
        component:sort,
        meta:{
            title:'分类'
        }
    },
    {
        path:'/my',
        component:my,
        meta:{
            title:'我的'
        }
    },
    {
        path:'/search',
        component:search,
        meta:{
            title:'搜索'
        },
        children: [{
            path: 'jiu',
            component: jiu,
            children: [{
                path: 'result',
                component: result,
    
            }]
        }]
    },
    {
        path:'/car',
        component:car,
        meta:{
            title:'购物车'
        }
    },
     
  
 ]

 let router=new VueRouter({
     routes,
    //  mode:'history'
 })
 export default router;