import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'lib-flexible'
import './style/index.css'
import './style/txt.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
