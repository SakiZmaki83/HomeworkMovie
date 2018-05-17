import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import AppMovies from './components/AppMovies.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/movies', component: AppMovies }
]


const router = new VueRouter ({
  routes
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
