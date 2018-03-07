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
import activitydetail from '@/components/makeractivity/activitydetail'
// 评价
import CollMaterial from '@/components/personal_space/CollMaterial'
import CollCousera from '@/components/personal_space/CollCousera'
import CollWorks from '@/components/personal_space/CollWorks'
import IwantJoin from '@/components/personal_space/IwantJoin'
import JoinAct from '@/components/personal_space/JoinAct'
import MsgHistory from '@/components/personal_space/MsgHistory'
import MyColl from '@/components/personal_space/MyColl'
import MyGroup from '@/components/personal_space/MyGroup'
import MyMsg from '@/components/personal_space/MyMsg'
import MyClass from '@/components/personal_space/MyClass'
import MyTeam from '@/components/personal_space/MyTeam'
import MyWorks from '@/components/personal_space/MyWorks'
import NewMsg from '@/components/personal_space/NewMsg'
import PsonAsset from '@/components/personal_space/PsonAsset'
import PsonData from '@/components/personal_space/PsonData'
import PsonSet from '@/components/personal_space/PsonSet'
import PsonSpace from '@/components/personal_space/PsonSpace'
import SclCourse from '@/components/personal_space/SclCourse'
import Second from '@/components/personal_space/Second'
import SubPro from '@/components/personal_space/SubPro'
import TemCre from '@/components/personal_space/TemCre'
import TemCreDetail from '@/components/personal_space/TemCreDetail'
import TemJoin from '@/components/personal_space/TemJoin'
import TemJoinDetail from '@/components/personal_space/TemJoinDetail'
import TemGoCre from '@/components/personal_space/TemGoCre'
import WorkShow from '@/components/personal_space/WorkShow'
import uploadAlltype from '@/components/personal_space/uploadAlltype'
import LastPro from '@/components/personal_space/LastPro'
import editor from '@/components/personal_space/editor'


Vue.use(Router)
global.headNum = 0;
const Routers = [
 /*   {
        path:"/community/applyJoinTeam/:teamId",//在此添加团队加入页面
        name:"ApplyJoinTeam",
        component:ApplyJoinTeam
    },*/
  {
    path: '/',
    name: 'index',
    component: index,
  },

  {
    path:'/worksShow/list',
    name:'worksShow',
    component:worksShow

  },{
  path:'/workShow/detail/:workId',
  name:'workshowdetail',
  component:workshowdetail
  },
  {
    path:'/makerCourse/list/:workId/:typeId',
    name:'makerCourse',
    component:makerCourse

  },{
    path:'/activity/detail/:id',
    name:'activitydetail',
    component:activitydetail
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
  path:'/makerLife/list/',
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
  path:'/worklife/detail/:workId',
  name:'lifedetail',
  component:lifedetail
  },
  {
       path:'/community/detail/:workId',
       name:'communitydetail',
       component:communitydetail
    },
  {
    path:'/community/createdetail',
    name:'createdetail',
    component:createdetail
  },{
    path:'/community/applyjoindetail/:clubJoinId',
    name:'applyjoindetail',
    component:applyjoindetail
  },{
    path:'/community/joindetail',
    name:'joindetail',
    component:joionactivity

  },{
  path:'/makerteam/detail/:teamId',
    name:'teamdetail',
    component:teamdetail
  },{
  path:'/material/detail/:metId',
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
  }, //个人中心的路由模块
  //{
  //  path:"/user/userHeader",
  //  component:userHeader
  //},
  {
    path:"/user/collMaterial",
    component:CollMaterial
  },
  {
    path:"/user/collCousera",
    component:CollCousera
  },
  {
    path:"/user/collWorks",
    component:CollWorks
  },
  {
    path:"/user/iwantJoin",
    component:IwantJoin
  },{
    path:"/user/joinAct",
    component:JoinAct
  },{
    path:"/user/msgHistory",
    component:MsgHistory
  },{
    path:"/user/myColl",
    component:MyColl
  },{
    path:"/user/myGroup",
    component:MyGroup
  },{
    path:"/user/myMsg",
    component:MyMsg
  },{
    path:"/user/myClass",
    component:MyClass
  },{
    path:"/user/myTeam",
    name:"myTeam",
    component:MyTeam
  },{
    path:"/user/myWorks",
    component:MyWorks
  },{
    path:"/user/newMsg",
    component:NewMsg
  },{
    path:"/user/psonAsset",
    component:PsonAsset
  },{
    path:"/user/psonData",
    component:PsonData
  },{
    path:"/user/psonSet",
    name:"PsonSet",
    component:PsonSet
  },{
    path:"/user/psonSpace",
    name:"PsonSpace",
    component:PsonSpace
  },{
    path:"/user/sclCource",
    component:SclCourse
  },{
    path:"/user/second",
    component:Second,
    name:'Second'
  },{
    path:"/user/subPro",
    name:'Subpro',
    component:SubPro
  },{
    path:"/user/temCre",
    name:"TemCre",
    component:TemCre
  },{
    path:"/user/temJoin",
    component:TemJoin
  },{
    path:"/user/workShow",
    component:WorkShow
  },
  {
    path:'/user/uploadAlltype',
    name:'uploadAlltype',
    component:uploadAlltype
  },
  {
    path:'/user/editor',
    name:'editor',
    component:editor
  },
  {
    path:'/user/LastPro',
    name:'LastPro',
    component:LastPro
  },{
        path:"/user/temCreDetail",
        name:"userTemCreDetail",
        component:TemCreDetail
    },{
        path:"/user/temJoinDetail",
        name:"userTemJoinDetail",
        component:TemJoinDetail
    },{
        path:"/user/temGoCre",
        component:TemGoCre
    }

]

const RouterConfig = {
  // 使用 HTML5 的 History 路由模式
  mode: 'history',
  routes: Routers
};
const router = new Router(RouterConfig);

router.beforeEach((to, from, next) => {
  if (to.matched.some(res =>res.meta.requireAuth)) {
    if (sessionStorage.getItem("UID") && sessionStorage.getItem("TID")) {
      next()
    } else {
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
});

export default router
