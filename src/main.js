import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.config.productionTip = false

Vue.use(Vue2TouchEvents)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
