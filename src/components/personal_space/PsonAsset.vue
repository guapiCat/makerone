<template>
    <div class="hello compon_center">
        <div class="layout">
            <div class="layout-header am-hide-sm-only">
                <!--topbar start-->
                <div class="topbar">
                    <div class="container">
                        <div class="am-g">
                            <div class="am-u-md-3">
                                <div class="topbar-left">

                                    <div class="am-dropdown" data-am-dropdown style="color: #828181;">

                                        <span style="margin-top:10px; display: block;">欢迎光临</span>
                                    </div>
                                </div>
                            </div>
                            <div class="nav-search">
                                <img src="../../../static/img/nav_serch.png"/>
                                <input type="search" placeholder="请输入关键字"/>
                            </div>
                            <div class="p_head_photo">
                                <a id="btn_login2" class="q_btLogin" style="position: relative;"><img
                                        src="../../../static/img/message.png" style="height: 24px;
    margin-top: -8px;"/>
                                    <span style="position: absolute; left: -5px;width: 33px;top: 13px; color: #FFFFFF;">消息</span></a>
                                <a id="btn_login3" class="q_btLogin" href=""><img
                                        src="../../../static/img/img_bitmap.png" alt=""
                                        style="height: 39px; width: 39px;margin-top: 3px;margin-left: 12px;"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <!--topbar end-->

                <div class="header-box" data-am-sticky>

                    <!--nav start-->
                    <div id="x_bg">
                        <div id="x_header_contain">
                            <div class="nav_img">
                                <a href=""> <img src="../../../static/img/logo.png"/></a>
                            </div>
                            <div id="x_nav" style="margin-top: 18px;">
                                <ul style="list-style: none;">
                                    <li id="x_shouye">
                                        <a class="active" href="">我的首页
                                        </a>
                                    </li>
                                    <li id="x_luntan">
                                        <a href="">我的作品</a>
                                    </li>
                                    <li id="x_newProgramming">
                                        <a href="">我的项目</a>
                                    </li>
                                    <li id="x_diyzuopin1">
                                        <a href="">我的学习</a>
                                    </li>
                                    <li id="x_diyzuopin2">
                                        <a href="">我的班级</a>
                                    </li>
                                    <li id="x_contest1">
                                        <a href="">个人资料</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!--===========layout-container================-->
        <div class="am-slider am-slider-default" data-am-flexslider>
            <img src="../../../static/img/img_bitmap.png" alt=""
                 style="float: left;margin-left: 20%;height: 150px;width: 150px;margin-top:1%;"/>
            <h5>昵称：<span>free</span></h5>

            <p>去编辑 <span><a href=""><img src="../../../static/img/arrow_1.png"
                                                              style="height: 24px;width: 17px; margin-left: 15px; cursor: pointer;"/></a> </span>
            </p>
        </div>
        <!--content-->
        <div class="workshow" style="width: 1200px;margin: 50px auto; ">
            <div class="center-title" style="margin-bottom: 20px; color: #969696;">
                <span> <img src="../../../static/img/icon_address.png" alt=""/><i
                        style="margin-left: 15px;">益谷创客平台-作品展示-<span>我的首页</span></i></span>
            </div>
            <div class="person-data">
                <p class="pdata">个人资料</p>

                <p class="p-data"><img src="../../../static/img/personname.png"/>昵称：<span>free</span></p>

                <p class="p-data"><img src="../../../static/img/telphone.png"/>电话：<span>1581545454545</span></p>

                <p class="p-data"><img src="../../../static/img/school.png"/>学校：<span>free</span></p>

                <p class="p-data p-noimg">班级：<span>一年级五班</span></p>

                <p class="p-data p-noimg">学号：<span>12121</span></p>

                <p style="height: 25rem;padding-top: 57%;padding-left: 20%;cursor: pointer;"><a
                        href="../personal_data.html">查看更多资料</a></p>
            </div>
            <div class="my-right">
                <div class="right-top">
                    <p>我的资产
                        <small></small>
                    </p>
                </div>
                <div class="right-content-1">
                    <div style="margin-bottom: 5%;">
                        <img src=""/>星星数目&nbsp;:&nbsp;xxx
                    </div>
                    <div>
                        <img src=""/>货币数目&nbsp;:&nbsp;xxx
                    </div>
                </div>
            </div>
            <div class="my-right">
                <div class="right-top">
                    <p>我的资产获得记录</p>
                    <span><a href="../my_collections.html">查看全部</a> <i><img src="../../../static/img/arrow_2.png"/></i></span>
                </div>
                <div class="right-content-2">
                    <div class="asset_record">
                        2017-10-18&nbsp;通过活动获得XXX星星../../
                    </div>
                    <div class="asset_record">
                        2017-10-18&nbsp;通过活动获得XXX星星
                    </div>
                    <div class="asset_record">
                        2017-10-18&nbsp;通过活动获得XXX星星
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

    .am-thumbnails > li {
        padding: 0 3rem 1rem .5rem;
    }

    .p_head_photo {
        height: 32px;
        float: right;
        margin-left: 30px;
        color: #000000;
    }

    .person-data {
        width: 380px;
        border: solid 1px #d2d2d2;
        float: left;
    }

    .pdata {
        height: 66px;
        line-height: 60px;
        border-top: solid 8px #F7B900;
        border-bottom: solid 1px #d2d2d2;
        font-weight: 600;
        background-color: #fbfbfb;
        padding-left: 10px;
    }

    .p-data {
        height: 50px;
        line-height: 25px;
        border-bottom: solid 1px #d2d2d2;
    }

    .p-data img {
        margin-right: 20px;
        margin-left: 5px;
    }

    .p-noimg {
        padding-left: 50px;

    }

    .my-right {
        float: left;
        margin-left: 30px;
    }

    .right-content-1 {
        height: 300px;
        width: 780px;
        border: solid 1px #dadada;
        margin-bottom: 60px;
        box-shadow: 6px 8px 5px #888888;
        padding-left: 5%;
        padding-top: 4%;
    }

    .right-content-2 {
        height: 500px;
        width: 780px;
        border: solid 1px #dadada;
        margin-bottom: 60px;
        box-shadow: 6px 8px 5px #888888;
        padding-left: 4%;
    }

    .right-top {
        border: solid 1px #dadada;
        border-top: solid 8px #f7b900;
        background-color: #FBFBFB;
    }

    .right-top span {
        float: right;
        margin-top: -40px;
        color: #45B0DA;
        font-weight: bold;
    }

    .right-top i {
        padding-left: 20px;
        padding-right: 15px;
    }

    .right-top p {
        padding-top: 13px;
        font-weight: bold;
        padding-left: 15px;
    }

    .left-img img {
        height: 160px;
        width: 300px;
        margin-top: 20px;
        margin-left: 24px
    }

    .asset_record {
        border-bottom: 1px solid #ECECEC;
        padding-bottom: 3%;
        width: 95%;
        padding-top: 4%;
    }
</style>