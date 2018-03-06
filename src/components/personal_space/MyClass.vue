<template>
    <div class="hello compon_center">
        <div class="layout">
            <div class="layout-header am-hide-sm-only">
                <!--topbar start-->
                <!--<div class="topbar">-->
                    <!--<div class="container">-->
                        <!--<div class="am-g">-->
                            <!--<div class="am-u-md-3">-->
                                <!--<div class="topbar-left">-->
                                    <!--<div class="am-dropdown" data-am-dropdown style="color: #828181;">-->
                                        <!--<span style="margin-top:10px; display: block;">欢迎光临</span>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                            <!--<div class="nav-search">-->
                                <!--<img src="../../../static/img/nav_serch.png"/>-->
                                <!--<input type="search" placeholder="请输入关键字"/>-->
                            <!--</div>-->
                            <!--<div class="p_head_photo">-->
                                <!--<a id="btn_login2" class="q_btLogin" style="position: relative;"><img-->
                                        <!--src="../../../static/img/message.png" style="height: 24px;-->
    <!--margin-top: -8px;"/>-->
                                    <!--<span style="position: absolute; left: -5px;width: 33px;top: 13px; color: #FFFFFF;">消息</span></a>-->
                                <!--<a id="btn_login3" class="q_btLogin"><img src="../../../static/img/img_bitmap.png" alt=""-->
                                                                          <!--style="height: 39px; width: 39px;margin-top: 3px;margin-left: 12px;"/></a>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--topbar end-->

                <div class="header-box" data-am-sticky>

                    <!--nav start-->
                    <!--<div id="x_bg">-->
                        <!--<div id="x_header_contain">-->
                            <!--<div class="nav_img">-->
                                <!--<img src="../../../static/img/logo.png"/>-->
                            <!--</div>-->
                            <!--<div id="x_nav" style="margin-top: 18px;">-->
                                <!--<ul style="list-style: none;">-->
                                    <!--<li id="x_shouye">-->
                                        <!--<a href="">我的首页-->
                                        <!--</a>-->
                                    <!--</li>-->
                                    <!--<li id="x_luntan">-->
                                        <!--<a href="">我的作品</a>-->
                                    <!--</li>-->
                                    <!--<li id="x_newProgramming">-->
                                        <!--<a href="">我的项目</a>-->
                                    <!--</li>-->
                                    <!--<li id="x_diyzuopin1">-->
                                        <!--<a href="">我的学习</a>-->
                                    <!--</li>-->
                                    <!--<li id="x_diyzuopin2">-->
                                        <!--<a class="active">我的班级</a>-->
                                    <!--</li>-->
                                    <!--<li id="x_contest1">-->
                                        <!--<a href="">个人资料</a>-->
                                    <!--</li>-->
                                <!--</ul>-->
                            <!--</div>-->

                        <!--</div>-->
                    <!--</div>-->

                </div>
            </div>
        </div>
        <!--===========layout-container================-->

        <!--content-->
        <div class="workshow" style="width: 1200px;margin: 50px auto; ">
            <div class="center-title" style="margin-bottom: 20px; color: #969696;">
		<span> <img src="../../../static/img/icon_address.png" alt=""/><i
                style="margin-left: 15px;">益谷创客平台-作品展示-<span>我的班级</span></i>
		</span>
            </div>
            <div class="am-tabs" data-am-tabs style="width: 100%;border: solid 1px #dadada;">
                <ul class="am-tabs-nav am-nav am-nav-tabs" style="padding-top: 17px;">
                    <li class="am-active">
                        <a href="#tab1">我的同学</a>
                    </li>
                    <li>
                        <a href="#tab2">班级作业</a>
                    </li>
                    <!--<p style="margin-left: 90%;margin-top: -5px;">班级:<span>2年级一班</span></p>-->
                </ul>
                <div class="am-tabs-bd" style="border: none;width: 100%;height: 600px; background: #EEEEEE; ">
                    <div class="am-tab-panel am-active" id="tab1">

                        <div class="classifylist">
                            <ul class="am-avg-sm-12 am-thumbnails">
                                <li><img class="am-thumbnail" src="../../../static/img/panda.png"/>

                                    <p style="text-align: center;">小明</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div class="am-tab-panel" id="tab2">
                        <div class="classifylist">
                            <ul>
                                2
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

            <div class="clear"></div>
        </div>

        <!--foot-->
    </div>
</template>

<script type="es6">
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }


</script>

<style scoped>
    /*改动的样式-yzh*/

    /*改动样式结束*/
    /*导航栏*/
    #x_bg {
        background: url(../../../static/img/img_mynav.png) center center !important;
    }

    #x_nav {
        margin-left: 12% !important;
    }

    #x_nav ul li:nth-child(6) {
        border-right: 0;
        padding-right: 0;
    }

    .nav_img {
        float: left;
        width: 64px;
    }

    .nav_img img {
        width: 160px;
        margin-top: 10px;
    }

    .topbar {
        height: 50px;
    }

    .nav-search {
        float: left;
        width: 260px;
        border: solid 1px #fff;
        border-radius: 25px;
        margin-left: 41%;
        margin-top: 6px;
        height: 34px;
        line-height: 28px;
    }

    .nav-search img {
        margin-left: 19px;
        height: 22px;
    }

    .nav-search input {
        margin-left: 11px;
        background: #21252E;
        border: #21252E;
        color: #FFFFFF;
    }

    /*导航栏结束*/
    .topbar {
        background-color: #21252E;
    }

    i {
        font-style: normal;
    }

    .clear {
        clear: both;
        line-height: 1;
    }

    .icons {
        border: solid 1px;
        border-radius: 50%;
        padding: 2px 7px;
        line-height: 25px;
    }

    .header .logo {
        padding-top: 0;
    }

    .header .logo img {
        height: 50px !important;

    }

    /*导航栏边框*/
    #x_nav ul li {
        border-right: dotted 1.5px #fff;
        padding-right: 37px;
    }

    .nav-contain {
        background: url(../../../static/img/img_bitmap.png) no-repeat center center;
    }

    .am-nav > li > a:hover, .am-nav > li > a:focus {
        outline: none;
    }

    .am-nav-justify > li {
        width: 150px;
    }

    .am-slider .am-slides img {
        height: 400px;
    }

    .am-slider-default {
        height: 215px;
        background: url(../../../static/img/penson-banner.png) center center;
        background-size: cover;
        font-size: 18px;
    }

    .am-slider h5 {
        float: left;
        margin-left: 6%;
        margin-top: 5%;
        font-weight: 300;
    }

    .am-slider p {
        float: left;
        margin-left: 35%;
        margin-top: 5%;
    }

    .sectionleft {
        font-size: 20px;
        margin: -52px 0 0 555px;
        letter-spacing: 8px;
        width: 120px;
        border-bottom: solid 1px;
        color: #3FA6E7;
    }

    .section--header {
        text-align: center;
    }

    .section--header span {
        color: #3FA6E7;
    }

    .section--header img {
        height: 50px;
        margin-left: -145px
    }

    .section--header span {
        display: block;
        margin-left: 60px;
    }

    .am-thumbnail {
        margin-bottom: 0px;
        padding: 0;

    }

    .index_link_div {
        margin: auto;
        top: 570px;
        bottom: 0;
        right: 0;
        left: 0;
        width: 1200px;
        height: 40px;
    }

    .p_head_photo {
        height: 32px;
        float: right;
        margin-left: 30px;
        color: #000000;
    }
</style>