import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'
import router from './router'

Vue.use(BootstrapVue)
