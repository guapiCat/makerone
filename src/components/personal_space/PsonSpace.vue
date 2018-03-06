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
                <span> <img src="../../../static/img/icon_address.png" alt=""/><i
                        style="margin-left: 15px;">益谷创客平台-作品展示-<span>我的首页</span></i></span>
            </div>
            <div class="person-data">
                <p class="pdata">个人资料</p>

                <p class="p-data"><img src="../../../static/img/personname.png"/>昵称：<span>{{allMsg.sysUser.username}}</span></p>

                <p class="p-data"><img src="../../../static/img/school.png"/>学号：<span>{{allMsg.sysUser.stuNum}}</span></p>

                <p class="p-data"><img src="../../../static/img/telphone.png"/>电话：<span>{{allMsg.sysUser.mobile}}</span></p>

                <p class="p-data p-noimg">学校：<span>{{allMsg.schoolName}}</span></p>

                <p class="p-data p-noimg">班级：<span>{{allMsg.fullClassName}}</span></p>

                <p style="height: 25rem;padding-top: 57%;padding-left: 20%;cursor: pointer;">查看更多资料</p>
            </div>
            <div class="my-right">
                <div class="right-top">
                    <p>最近加入的团队(
                        <small>N</small>
                        )
                    </p>
                    <a><span v-on:click="goTeam">查看全部<i><img src="../../../static/img/arrow_2.png"/></i></span></a>
                </div>
                <div class="right-content">
                    <ul class="am-avg-sm-4 am-thumbnails">
                        <li v-for="item in myLatelyTm"><img class="am-thumbnail" :src="fileURL+item.teamLogo"/>

                            <p>{{item.teamName}}</p>
                        </li>
                        <!--<li><img class="am-thumbnail" src="../../../static/img/windmill.png"/>-->

                            <!--<p>元气社团</p>-->
                        <!--</li>-->
                        <!--<li><img class="am-thumbnail" src="../../../static/img/windmill.png"/>-->

                            <!--<p>元气社团</p>-->
                        <!--</li>-->
                        <!--<li><img class="am-thumbnail" src="../../../static/img/windmill.png"/>-->

                            <!--<p>元气社团</p>-->
                        <!--</li>-->
                    </ul>
                </div>
            </div>
            <div class="my-right">
                <div class="right-top">
                    <p>最近的作品 (
                        <small>N</small>
                        )
                    </p>
                    <a><span v-on:click="goWorks">查看全部<i><img src="../../../static/img/arrow_2.png"/></i></span></a>
                </div>
                <div class="right-content">
                    <ul class="am-avg-sm-4 am-thumbnails">
                        <li v-for="item in myLatelyWorks"><img class="am-thumbnail" :src="fileURL+item.worksCoverImage"/>

                            <p>{{item.worksName}}</p>
                        </li>
                        <!--<li><img class="am-thumbnail" src="../../../static/img/windmill.png"/>-->

                            <!--<p>彩虹鱼</p>-->
                        <!--</li>-->
                        <!--<li><img class="am-thumbnail" src="../../../static/img/windmill.png"/>-->

                            <!--<p>彩虹鱼</p>-->
                        <!--</li>-->
                        <!--<li><img class="am-thumbnail" src="../../../static/img/windmill.png"/>-->

                            <!--<p>彩虹鱼</p>-->
                        <!--</li>-->
                    </ul>

                </div>

            </div>
            <div class="my-right">
                <div class="right-top">
                    <p>最近的收藏（N） </p>
                    <a><span v-on:click="goColl">查看全部<i><img src="../../../static/img/arrow_2.png"/></i></span></a>
                </div>
                <div class="right-content">
                    <ul class="am-avg-sm-4 am-thumbnails">
                        <li v-for="item in myLatelyCol"><img class="am-thumbnail" :src="fileURL+item.coverImage"/>

                            <p>{{item.objectType===0?"课程":item.objectType===1?"作品":"素材"}}-{{item.objectName}}</p>
                        </li>
                        <!--<li><img class="am-thumbnail" src="../../../static/img/windmill.png"/>-->

                            <!--<p>彩虹鱼</p>-->
                        <!--</li>-->
                        <!--<li><img class="am-thumbnail" src="../../../static/img/windmill.png"/>-->

                            <!--<p>彩虹鱼</p>-->
                        <!--</li>-->
                        <!--<li><img class="am-thumbnail" src="../../../static/img/windmill.png"/>-->

                            <!--<p>彩虹鱼</p>-->
                        <!--</li>-->
                    </ul>

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
        name: 'hello',
        data () {
            return {
                fileURL:"http://192.168.0.103:9000/",
                allMsg:[],
                myLatelyTm:[],
                myLatelyWorks:[],
                myLatelyCol:[]
            }
        },
        methods:{
            goWorks:function(){
                this.$router.push({ path: '/user/subPro' })
            },
            goColl:function(){
                this.$router.push({ path: '/user/myColl' })
            },
            goTeam:function(){
                this.$router.push({ path: '/user/myGroup' })
            },
            goEdit:function(){
                this.$router.push({ path: '/user/psonData' })
            }
        },
        created:function(){
            //获取用户的部分信息1
            var params = new URLSearchParams();
            AXIOS.get('user/getUserInfo', {
                params: {}
            }).then(response => {
                //console.log(response);
                this.allMsg=response.data;
            }).catch(e => {
                this.errors.push(e)
            });
            //获取用户的部分信息2（最近团队）
            AXIOS.get('user/latelyJoinTeam', {
                params: {
                    pageSize:4
                }
            }).then(response => {
                //console.log(response);
                this.myLatelyTm=response.data;
            }).catch(e => {
                this.errors.push(e)
            });
            //获取部分信息3（最近作品）
            AXIOS.get('user/latelyWorks', {
                params: {
                    pageSize:4
                }
            }).then(response => {
                //console.log(response);
                this.myLatelyWorks=response.data;
            }).catch(e => {
                this.errors.push(e)
            });
            //获取用户部分信息4（最近收藏）
            AXIOS.get('user/latelyFavorite', {
                params: {
                    pageSize:4
                }
            }).then(response => {
                //console.log(response);
                this.myLatelyCol=response.data;
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

    /*导航栏边框*/
    #x_nav ul li {
        border-right: dotted 1.5px #fff;
        padding-right: 37px;
    }

    .nav-contain {
        /*这个图片找不到有改动*/
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

    .am-thumbnail {
        height: 289px;
        border: 0;

    }

    .am-thumbnails > li {
        padding: 0 3rem 1rem .5rem;
    }

    .clear_padding {
        padding: 0 .5rem 1rem .5rem !important;
        border-radius: 0px !important;
    }

    .p_head_photo {
        height: 32px;
        float: left;
        margin-left: 24px;
        margin-top: 4px;

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

    .right-content {
        padding: 20px;
        height: 210px;
        width: 780px;
        border: solid 1px #dadada;
        margin-bottom: 60px;
        box-shadow: 6px 8px 5px #888888;
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

    .left-img {
        float: left;
    }

    .left-img img {
        height: 160px;
        width: 300px;
        margin-top: 20px;
        margin-left: 24px
    }

    .right-center {
        float: left;
        width: 310px;
        margin-left: 5%;
    }

    .button {
        float: left;
        margin-left: 29%;
    }

    .am-btn-primary {
        border-radius: 4px;

        margin-right: 5px
    }

    .am-avg-sm-4 p {
        margin: 0;
        text-align: center;
        background-color: #f3f3f3;

        width: 140px;
    }

    .am-thumbnail {
        border: solid 1px #333333;
        height: 120px !important;
        width: 140px;
    }
</style>