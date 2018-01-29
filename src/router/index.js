import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import worksShow from '@/components/workshow/worksShow'
import makerCourse from '@/components/makercourse/makerCourse'
import makerCommunity from '@/components/makercoummunity/makerCommunity'
import makerActivity from '@/components/makeractivity/makerActivity'
import applyjoindetail from '@/components/makercoummunity/applyjoindetail'
import joionactivity from '@/components/makeractivity/joindetail'
import materialLibrary from'@/components/material/materialLibrary'
import makerLife from'@/components/makerlife/makerLife'
import login from'@/components/login/login'
import register from'@/components/login/register'
import registerSuccess from'@/components/login/registerSuccess'
import lifedetail from'@/components/makerlife/lifedetail'
import workshowdetail from'@/components/workshow/workshowdetail'
import communitydetail from'@/components/makercoummunity/communitydetail'
import createdetail from '@/components/makercoummunity/createdetail'
import teamdetail from '@/components/makercoummunity/teamdetail'
import materialdetail from '@/components/material/materialdetail'
import upmaterial from '@/components/material/upmaterial'
import allcourse from '@/components/makercourse/allcourse'
// 评价

Vue.use(Router)
global.headNum = 0;
const Routers = [
  {
    path: '/',
    name: 'index',
    component: index
  },

  {
    path:'/worksShow/list',
    name:'worksShow',
    component:worksShow,

  },{
  path:'/workShow/detail',
  name:'workshowdetail',
  component:workshowdetail
  },
  {
    path:'/makerCourse/list',
    name:'makerCourse',
    component:makerCourse

  },
  {
    path:'/makerCommunity/list',
    name:'makerCommunity',
    component:makerCommunity
  },
  {
    path:'/makerActivity/list',
    name:'makerActivtity',
    component:makerActivity
  },
  {
   path:'/materialLibrary/list',
   name:'materialLibrary' ,
   component:materialLibrary
  },{
  path:'/makerLife/list',
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
  path:'/worklife/detail',
  name:'lifedetail',
  component:lifedetail
  },
  {
       path:'/community/detail',
       name:'communitydetail',
       component:communitydetail
    },
  {
    path:'/community/createdetail',
    name:'createdetail',
    component:createdetail
  },{
    path:'/community/applyjoindetail',
    name:'applyjoindetail',
    component:applyjoindetail
  },{

    path:'/community/joindetail',
    name:'joindetail',
    component:joionactivity

  },{
  path:'/makerteam/detail',
    name:'teamdetail',
    component:teamdetail
  },{
  path:'/material/detail',
    name:'meterialdetail',
    component:materialdetail
  },{
    path:'/material/up',
    name:'up',
    component:upmaterial
  },{
  path:'/makercourse/allcourse',
    name:'allcourse',
    component:allcourse
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
