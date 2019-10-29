import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible'
import './style/index.css'
import './style/txt.css'
import './style/home.css'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
