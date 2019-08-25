import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

// Created a global filter which transforms text into all uppercase letters
Vue.filter('transformUpper', function(value) {
  return value.toUpperCase();
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
