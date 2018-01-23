<template>
	<div>
		<div class="nav-container">
				<img src="../../static/img/logo.png" />
			</div>
    <div class="myHeaderMsg">

        <p><a href=""><span>网站首页</span><i>HOME</i></a></p>
        <p><a href=""><span>作品展示</span><i style="margin-left: -3px;">WORK SHOW</i></a></p>
        <p><a href=""><span>创客课程</span><i>COURSES</i></a></p>
        <p><a href=""><span>创客社团</span><i>GROUP</i></a></p>
        <p><a href=""><span>创客活动</span><i>ACTIVITY</i></a></p>
        <p><a href=""><span>素材库 </span><i style="margin-left: -26px;">MATERIAL LIBRARY</i></a></p>
        <p><a href=""><span>个人空间</span><i style="margin-left: -13px;">PERSONAL SPACE</i></a></p>
        <p><a href=""><span>创客生活</span><i style="margin-left: -3px;">CREATIVE LIFE</i></a></p>
        <div class="mySs">
            <img class="mySs_img" src="../../static/img/nav_serch.png" alt=""/>
            <input class="mySs_inp" type="text" placeholder="请输入关键字"/>
            <div class="mySs_xx">
                <p><span>登陆</span>&nbsp;|&nbsp;<span>注册</span></p>
            </div>

        </div>
    </div>
	</div>

</template>

<script>
  export default {
    name: 'headPart',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  @import "../../static/css/indexheader.css";
</style>
