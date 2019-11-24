import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import log from '@/service/log'
import http from '@/network/http'
import api from '@/network/api'

Vue.use(ElementUI)
Vue.config.productionTip = false

window.$log = log
window.$http = http
window.$api = api

Vue.prototype.$http = http;  // 挂载服务
Vue.prototype.$api = api;  // 接口请求

console.log(process.env)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
