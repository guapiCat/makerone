import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
global.headNum = 0;
const Routers = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/user/list',
    name: 'userList',
    component: HelloWorld
  }
]

const RouterConfig = {
  // 使用 HTML5 的 History 路由模式
  mode: 'history',
  routes: Routers
};
const router = new Router(RouterConfig);

router.beforeEach((to, from, next) => {
  if(to.path.indexOf("user") > -1){
    global.headNum = 1;
  }else{
    global.headNum = 0;
  }
  next();
});

export default router
