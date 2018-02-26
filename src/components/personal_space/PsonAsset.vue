<template>
    <div class="hello compon_center">

        <!--===========layout-container================-->
        <div class="am-slider am-slider-default" data-am-flexslider>
            <img src="../../../static/img/img_bitmap.png" alt=""
                 style="float: left;margin-left: 20%;height: 150px;width: 150px;margin-top:1%;"/>
            <h5>昵称：<span>free</span></h5>

            <div v-for="value,index in myHeader" v-on:click="hdClick(index)" v-bind:class="{on:index==guigeSpan}">
                <p class="myHeadP">
                    <a>
                        <span>{{value}}</span>
                    </a>
                </p>
            </div>

            <!--<p><a href="">个人信息</a></p>-->

            <!--<p><a href="">我的社团</a></p>-->

            <!--<p><a href="">我的团队</a></p>-->

            <!--<p><a href="">个人资产</a></p>-->

            <!--<p><a href="">我的作品</a></p>-->

            <!--<p><a href="">我的收藏</a></p>-->

            <div class="mySs">
                <img class="mySs_img" src="../../../static/img/nav_serch.png" alt=""/>
                <input class="mySs_inp" type="text" placeholder="请输入关键字"/>

                <div class="mySs_xx">
                    <img src="../../../static/img/message.png" alt=""/>

                    <p>消息</p>
                </div>
                <img class="mySs_person" src="../../../static/img/img_bitmap.png" alt=""/>
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
                        2017-10-18&nbsp;通过活动获得XXX星星
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