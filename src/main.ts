import Vue from 'vue'

import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/vendor/animate.css/animate.min.css'
import '@/assets/vendor/icofont/icofont.min.css'
import '@/assets/vendor/boxicons/css/boxicons.min.css'
import '@/assets/vendor/venobox/venobox.css'
import '@/assets/vendor/owl.carousel/assets/owl.carousel.min.css'
// import '@/assets/vendor/aos/aos.css'

import '@/assets/css/style.css'

import App from './App.vue'
import router from './router'
import store from './store'
// import $ from 'jquery'

// var $ = require('jquery')
AOS.init()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
