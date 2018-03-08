// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/amazeui.css'
import '../static/css/common.min.css'
import comment from './components/comment/comment'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueAwesomeSwiper)
Vue.use(VueQuillEditor)
Vue.config.productionTip = false
Vue.component("comment", comment)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,},
  template: '<App/>'
})
