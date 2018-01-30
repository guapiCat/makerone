<template>
    <div class="hello compon_center">
        <!--content start-->
        <div class="am-g">
            <div class="am-u-sm-7 am-u-sm-centered" style="padding-top: 50px;padding-bottom: 70px">
                <span style="float: left"><img src="../../../static/img/icon_address.png"></span>

                <div style="float: left;padding-top: 6px;margin-left: 3px;">
                    <span style="color: #999999;">益谷创客平台-个人空间-个人资料</span>
                </div>
            </div>
            <div class="am-u-sm-7 am-u-sm-centered" style="width:1200px;padding-top: 10px;">
                <div class="am-tabs" data-am-tabs>
                    <ul class="am-tabs-nav am-nav am-nav-tabs">
                        <li class="am-active">
                            <a href="#tab1">
                                <img src="../../../static/img/icon_edit.png"/>
                                <span>个人设置</span>
                            </a>
                        </li>
                        <li>
                            <a href="#tab2"><img src="../../../static/img/icon_correct.png"/>
                                <span>修改密码</span>
                            </a>
                        </li>
                    </ul>

                    <div class="am-tabs-bd">
                        <div class="am-tab-panel am-fade am-in am-active" id="tab1">
                            <!--<iframe id="person-set" src="personal_set.html" width="100%" height="100%"-->
                                    <!--style="border: 0px;" scrolling="no" onload="iframeLoad_1()"></iframe>-->
                            <psonset></psonset>
                        </div>
                        <div class="am-tab-panel am-fade" id="tab2">
                            <!--<iframe id="change_password" src="change_pwd.html" width="100%" height="100%"-->
                                    <!--style="border: 0px;" scrolling="no" onload="iframeLoad_2()"></iframe>-->
                            <div>
                                <span>当前密码</span><input type="text"/>
                            </div>
                            <div>
                                <span style="margin-left: 5px">新密码 </span><input type="password"/>
                            </div>
                            <div style="margin-bottom: 100px">
                                <span>确认密码</span><input type="password"/>
                            </div>
                            <button style="margin-left: 30%;margin-right: 30%" type="button" class="am-btn am-btn-primary">提交</button>
                            <button type="button" class="am-btn am-btn-primary">取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--foot-->
    </div>
</template>

<script type="es6">
    import psonset from './PsonSet'

    export default {
        name: 'hello',
        components:{psonset},
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }


</script>

<style scoped>
    /*改动的样式-yzh*/
    #tab2 div{
        margin-left: 100px ;
        margin-top: 50px;
    }
    #tab2 span{
        margin-right: 50px;
    }
    #tab2 input{
        width: 300px;
    }
    /*改动样式结束*/
    .topbar {
        background-color: #21252E;
    }

    .icons {
        border: solid 1px;
        border-radius: 50%;
        padding: 2px 7px;
        line-height: 25px;
    }

    .header .logo img {
        height: 50px !important;

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

    .login_table tr {
        width: 100%;
        display: block;
        margin: 10px;
    }

    .login_table tr td {
        text-align: center;
        width: 915px;
    }

    login_table a {
        font-size: 10px;
    }

    .am-form input[type="password"] {
        padding: 0.9em;
    }

    table tr {
        display: block;
        margin-bottom: 30px;
    }

    td {
        padding-right: 55px;
    }

    #select_page a {
        font-size: 20px;
        color: #000;
        cursor: pointer;
    }

    #select_page {
        background-color: #ffffff;
        height: 4%;
        border-left: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
        border-right: 1px solid #f0f0f0;
    }

    #select_page img {
        margin-bottom: 9px;
        margin-right: 5px;
        width: 20%;
        height: 20%
    }

    #select_page div {
        float: left;
        width: 140px;
        text-align: center;
    }

    /*.am-nav>li{
        height: 55px;
    }*/
    /*导航栏*/
    /*导航栏*/
    #x_bg {
        background: url(../../../static/img/img_mynav.png) center center !important;
    }

    #x_header_contain {
        margin-left: 9%
    }

    #x_nav {
        margin-left: 6% !important;
    }

    #x_nav ul li:nth-child(6) {
        border-right: 0;
        padding-right: 0;
    }

    .nav_img {
        float: left;
        width: 164px;
        padding-left: 9%;
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
        margin-left: 2%;
        margin-top: 12px;
        height: 34px;
        line-height: 28px;
    }

    .nav-search img {
        margin-left: 19px;
        height: 22px;
    }

    .nav-search input {
        margin-left: 11px;
        background: #1076BE;
        border: #1076BE;
        color: #FFFFFF;
    }

    ::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #fff;
    }

    :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #fff;
    }

    ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #fff;
    }

    :-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #fff;
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

    /*结束*/
    /*导航栏边框*/
    #x_nav ul li {
        border-right: dotted 1.5px #fff;
        padding-right: 37px;
    }

    .am-tabs-nav.am-nav.am-nav-tabs {
        border: solid 1px #F3F3F3;
        border-top: solid 5px #FECB56;
    }

    .am-nav-tabs > li > a:hover {
        border-color: #fff;
    }

    .am-nav-tabs > li > a {
        width: 200px;
        text-align: center;
    }

    .am-nav-tabs > li.am-active > a, .am-nav-tabs > li.am-active > a:hover, .am-nav-tabs > li.am-active > a:focus {
        border: 0;
    }

    .am-tabs-nav.am-nav.am-nav-tabs .am-active a {
        background: #FECB56;
    }
</style>