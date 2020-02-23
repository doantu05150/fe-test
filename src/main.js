import Vue from 'vue'
import App from './App.vue'

// import router to vue instance
import Routers from './router'

Vue.config.productionTip = false

new Vue({
  router: Routers,
  render: h => h(App),
}).$mount('#app')
