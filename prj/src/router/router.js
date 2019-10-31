import Vue from 'vue'
import VueRouter from "vue-router"
import home from '../components/home/home.vue'
import sort from '../components/sort/sort.vue'
import my from '../components/my/my.vue'
import car from '../components/car/car.vue'
import search from '../components/search/search.vue'
import jiu from '../components/search/sear/jiu.vue'
import result from '../components/search/sear/result.vue'
<<<<<<< HEAD
import log from '../components/my/mytaoku/log.vue'
import sign from '../components/my/mytaoku/sign.vue'
=======
import data from '../components/home/components/data.vue'
import sbgg from '../components/car/compnents/sbgg'
>>>>>>> 1cfda4ff4a0443cb2c2502740e2b816975e22cbd
Vue.use(VueRouter)
let routes = [{
        path: '/',
        redirect: "/home"
    },
<<<<<<< HEAD
    {
        path: '/home',
        component: home,
        meta: {
            title: '首页'
=======
     {
         path:'/home',
         component:home,
         meta:{
             title:'首页'
         },
         children: [{
            path: 'data',
            component: data,

        }]
     },
     {
        path:'/sort',
        component:sort,
        meta:{
            title:'分类'
>>>>>>> 1cfda4ff4a0443cb2c2502740e2b816975e22cbd
        }
    },
    {
        path: '/sort',
        component: sort,
        meta: {
            title: '分类'
        }
    },
    {
        path: '/my',
        component: my,
        meta: {
            title: '我的'
        },
    },
    {
        path: '/log',
        component: log,
        children: [{
            path: 'sign',
            component: sign,

        }]
    },
    {
        path: '/search',
        component: search,
        meta: {
            title: '搜索'
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
<<<<<<< HEAD
        path: '/car',
        component: car,
        meta: {
            title: '购物车'
        }
=======
        path:'/car',
        component:car,
        meta:{
            title:'购物车'
        },
        children: [{
            path: 'sbgg',
            component: sbgg,

        }]
>>>>>>> 1cfda4ff4a0443cb2c2502740e2b816975e22cbd
    },


]

let router = new VueRouter({
    routes,
    //  mode:'history'
})
export default router;