// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/amazeui.css'
import '../static/css/common.min.css'
import comment from './components/comment/comment'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.component("comment", comment)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,},
  template: '<App/>'
})
