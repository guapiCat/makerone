<template>
    <div class="hello compon_center">


        <!--===========layout-container================-->
        <div class="am-slider am-slider-default"data-am-flexslider>
            <img :src="fileURL+allMsg.sysUser.avatar" alt=""  style="border-radius: 50%;float: left;margin-left: 20%;height: 150px;width: 150px;margin-top:1%;"/>
            <h5>昵称：<span>{{allMsg.sysUser.realName}}</span></h5>
            <p style="cursor: pointer" v-on:click="goEdit">去编辑 <span><a href=""><img src="../../../static/img/arrow_1.png" style="height: 24px;width: 17px; margin-left: 15px; cursor: pointer;"/></a> </span></p>
        </div>
        <!--content-->
        <div class="workshow" style="width: 1200px;margin: 50px auto; ">
            <div class="center-title" style="margin-bottom: 20px; color: #969696;">
                <span> <img src="../../../static/img/icon_address.png" alt="" /><i style="margin-left: 15px;">{{schoolESB}}-我的空间-<span>个人资产</span></i></span>
            </div>
            <div class="person-data">
                <p class="pdata">个人资料</p>
                <p class="p-data"><img src="../../../static/img/personname.png"/>昵称：<span>{{allMsg.sysUser.realName}}</span></p>
                <p class="p-data"><img src="../../../static/img/telphone.png"/>电话：<span>{{allMsg.sysUser.mobile}}</span></p>
                <p class="p-data"><img src="../../../static/img/school.png"/>学校：<span>{{allMsg.schoolName}}</span></p>
                <p class="p-data p-noimg">班级：<span>{{allMsg.className}}</span></p>
                <p class="p-data p-noimg">学号：<span>{{allMsg.sysUser.stuNum}}</span></p>
                <p style="height: 25rem;padding-top: 57%;padding-left: 20%;cursor: pointer;"><a href="../personal_data.html">查看更多资料</a></p>
            </div>
            <div class="my-right">
                <div class="right-top">
                    <p>我的资产<small></small></p>
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
                    <p >我的资产获得记录</p>
                    <span><a href="">查看全部</a> <i><img src="../../../static/img/arrow_2.png"/></i></span>
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
    import {AXIOS} from '../../http-common'
    export default {
        props: {
            schoolESB: {
                type: String,
                required: true
            }
        },
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                userId:this.$route.params.userId,
                allMsg:"",
                fileURL:"http://192.168.0.103:9000/"
            }
        },
        methods:{
            goEdit:function(){
                this.$router.push({ path: '/user/psonData' })
            }
        },
        created:function(){
            var params = new URLSearchParams();
            AXIOS.get('user/getUserInfo', {
                params: {
                    userId:this.userId
                }
            }).then(response => {
                //console.log(response);
                this.allMsg=response.data;
            }).catch(e => {
                this.errors.push(e)
            });
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