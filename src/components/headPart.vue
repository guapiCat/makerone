<template>
	<div>
		<div class="nav-container">
				<img src="../../static/img/logo.png" />
			</div>
    <div class="myHeaderMsg">
        <p><router-link to="/"><span>网站首页</span><i>HOME</i></router-link></p>
        <p><router-link to="/worksShow"><span >作品展示</span><i style="margin-left: -5px">WORK SHOW</i></router-link></p>
        <p><router-link to="/makerCourse"><span>创客课程</span><i>COURSES</i></router-link> </p>
        <p><router-link to="/makerCommunity"><span>创客社团</span><i>GROUP</i></router-link></p>
        <p><router-link to="/makerActivity"><span>创客活动</span><i>ACTIVITY</i></router-link></p>
        <p><router-link to="/materialLibrary"><span>素材库</span><i style="margin-left: -26px;">MATERIAL LIBRARY</i></router-link></p>
        <p><router-link to="/user/psonSpace"><span>个人空间</span><i style="margin-left: -13px;">PERSONAL SPACE</i></router-link></p>
        <p><router-link to="/makerLife"><span>创客生活</span><i style="margin-left: -3px;">CREATIVE LIFE</i></router-link></p>
        <div class="mySs">
            <img class="mySs_img" src="../../static/img/nav_serch.png" alt=""/>
            <input class="mySs_inp" type="text" placeholder="请输入关键字"/>
            <div class="mySs_xx">
                <p> <router-link :to="{name: 'login',params: {loginType: 2}}"><span>登陆</span></router-link>&nbsp;|&nbsp;<router-link to="/register"> <span>注册</span></router-link></p>
            </div>

        </div>
    </div>
	</div>

</template>

<script type="es6">
  export default {
    name: 'headPart',
    data() {
      return {

      }
    }/*
    methods: {
        goPsonSpace:function(){
            this.$router.push({ path: '/user/psonAsset' });
            alert("okkk");
            console.log("okkkk");
        }
    }*/
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  @import "../../static/css/indexheader.css";
</style>
