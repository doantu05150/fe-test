import Vue from 'vue'
// import tailwind into vue app
import '@/assets/css/tailwind.css'
// import  font-awesome
import '@/plugins/font-awesome.js'

import App from './App'

// import router to vue instance
import Routers from './router'

Vue.config.productionTip = false

new Vue({
  router: Routers,
  render: h => h(App),
}).$mount('#app')
