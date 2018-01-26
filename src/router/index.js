import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import worksShow from '@/components/workshow/worksShow'
import makerCourse from '@/components/makercourse/makerCourse'
import makerCommunity from '@/components/makercoummunity/makerCommunity'
import makerActivity from '@/components/makeractivity/makerActivity'
import applyjoindetail from '@/components/makercoummunity/applyjoindetail'
import jionactivity from '@/components/makeractivity/joindetail'
import materialLibrary from'@/components/materialLibrary'
import makerLife from'@/components/makerlife/makerLife'
import login from'@/components/login/login'
import register from'@/components/login/register'
import registerSuccess from'@/components/login/registerSuccess'
import lifedetail from'@/components/makerlife/lifedetail'
import workshowdetail from'@/components/workshow/workshowdetail'
import communitydetail from'@/components/makercoummunity/communitydetail'
import createdetail from '@/components/makercoummunity/createdetail'
Vue.use(Router)
global.headNum = 0;
const Routers = [
  {
    path: '/',
    name: 'index',
    component: index
  },
,
  {
    path:'/worksShow/list',
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
  name:'makerLife',
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
    path:'/makecommunitydetail/detail',
    name:'communitydetail',
    component:communitydetail
  },{
     path:'/makeractivty/joindetail',
    name:'joindetail',
    component:jionactivity
  },{
    path:'/makercoummunity/applyjoindetail',
    name:'applyjoindetail',
    component:applyjoindetail
  },{
    path:'/createdetail',
    name:'creatddetail',
    component:createdetail
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
