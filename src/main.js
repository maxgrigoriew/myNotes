import Vue from 'vue'
import vClickOutside from 'v-click-outside'

import App from './App.vue'
import router from './router'
import store from './store'
import './components.js'
import './assets/scss/main.scss'

Vue.config.productionTip = false
Vue.use(vClickOutside)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
