import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import HelloWorld from '@/components/HelloWorld'
import worksShow from '@/components/worksShow'
import makerCourse from '@/components/makerCourse'
import makerCommunity from '@/components/makerCommunity'
import makerActivity from '@/components/makerActivity'
import materialLibrary from'@/components/materialLibrary'
import makerLife from'@/components/makerLife'
import login from'@/components/login'
import register from'@/components/register'
import registerSuccess from'@/components/registerSuccess'
import lifedetail from'@/components/lifedetail'
import workshowdetail from'@/components/workshowdetail'
import communitydetail from'@/components/communitydetail'
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
  },
  {
    path:'/worksShow',
    name:'worksShow',
    component:worksShow
  },
  {
    path:'/makerCourse',
    name:'makerCourse',
    component:makerCourse
  },
  {
    path:'/makerCommunity',
    name:'makerCommunity',
    component:makerCommunity
  },
  {
    path:'/makerActivity',
    name:'makerActivtity',
    component:makerActivity
  },
  {
   path:'/materialLibrary',
   name:'materialLibrary' ,
   component:materialLibrary
  },{
  path:'/makerLife',
  name:'/makerLife',
  component:makerLife
  },{
  path:'/login',
  name:'login',
  component:login
  },{
  path:'/register',
  name:'register',
  component:register
  },{
  path:'/registerSuccess',
    name:'registerSuccess',
    component:registerSuccess
  },{
  path:'/lifedetail',
  name:'lifedetail',
  component:lifedetail
  },{
    path:'/workshowdetail',
    name:'workshowdetail',
    component:workshowdetail
  },{
  path:''
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
