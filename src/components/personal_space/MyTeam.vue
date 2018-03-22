<template>
    <div class="hello">

        <!--===========layout-container================-->
        <div class="am-slider am-slider-default" data-am-flexslider>
            <img :src="fileURL+psonMsg.sysUser.avatar" alt=""  style="border-radius: 50%;float: left;margin-left: 20%;height: 150px;width: 150px;margin-top:1%;"/>
                <h5>昵称：<span>{{psonMsg.sysUser.realName}}</span></h5>
            <p style="cursor: pointer" v-on:click="goEdit">去编辑 <span><a href=""><img src="../../../static/img/arrow_1.png" style="height: 24px;width: 17px; margin-left: 15px; cursor: pointer;"/></a> </span></p>
        </div>
        <!--content-->
        <div class="workshow compon_center" style="width: 1200px;margin: 50px auto; ">
            <div class="center-title" style="margin-bottom: 20px; color: #969696;">
                <span> <img src="../../../static/img/icon_address.png" alt=""/><i style="margin-left: 15px;">{{schoolESB}}-我的社团-<span>我加入的社团</span></i></span>
            </div>
            <div class="am-panel-group" id="accordion">
                <div class="am-panel am-panel-default">

                    <div v-for="item,index in allMsg" class="am-panel-hd">
                        <h4 v-on:click="cgClubCss(index)" :class="index==clubCss?'am-panel-title on':'am-panel-title'"
                            :data-am-collapse="`{parent: '#accordion', target: '#`+item.makerCommunityDTO.id+`'}`">
                            社团-{{item.makerCommunityDTO.communityName}}
                        </h4>
                        <!--<h4 v-for="item,index in allMsg" class="am-panel-title"-->
                        <!--data-am-collapse="{parent: '#accordion', target: '#1'}">-->
                        <!--社团-{{item.makerCommunityDTO.communityName}}-->
                        <!--</h4>-->

                    </div>

                    <div v-for="item,index in allMsg" :id="item.makerCommunityDTO.id" :class="index==0?'am-panel-collapse am-collapse am-in':'am-panel-collapse am-collapse'">
                        <div class="am-panel-bd">
                            <div class="center-box" style="padding: 20px ;width: 100%;height: 100%;">
                                <h1>社团信息-{{item.makerCommunityDTO.communityName}}</h1>

                                <div class="content-center">
                                    <span class="content-title">社团介绍</span>

                                    <div class="content-box-body" style="overflow: hidden;">
                                        <div class="content-title-hand-left">
                                            <img :src="fileURL+item.makerCommunityDTO.communityLogo"/>
                                        </div>
                                        <div class="content-title-hand-right">
                                            <h5>{{item.makerCommunityDTO.communityName}}</h5>

                                            <p>创建时间：<span>{{item.makerCommunityDTO.creatDate}}</span></p>

                                            <p>需要人数：<span>{{item.needNum}}</span></p>

                                            <p>当前人数：<span>{{item.nowNum}}</span></p>

                                            <p>发起学校：<span>{{item.makerCommunityDTO.schoolName}}</span></p>

                                            <p>社团介绍：<span>{{item.makerCommunityDTO.communityIntro}}</span></p>
                                        </div>

                                    </div>
                                </div>
                                <div class="content-center">
                                    <span class="content-title">社团课程计划</span>

                                    <div class="content-box-body" style="overflow: hidden;">
                                        <div class="content-title-hand-left">
                                            <img src="../../../static/img/airplane.png"/>

                                            <p style="font-weight: bold; text-align: center;">课程计划表</p>
                                        </div>
                                        <div class="content-title-hand-right">
                                            <p>课程介绍：<span>{{item.makerCommunityDTO.communityLessonPlan}}</span></p>
                                        </div>

                                    </div>
                                </div>
                                <div class="content-center">
                                    <span class="content-title">社团成员</span>

                                    <div class="content-box-body" style="overflow: hidden;">
                                        <ul class="am-avg-sm-4 am-thumbnails">
                                            <li v-if="item.sysUserDTO" class="am-thumbnail"><img class="cg-img" :src="fileURL+item.sysUserDTO.avatar"/>
                                                <p style="padding-left: 30px">组长:<span>{{item.sysUserDTO.realName}}</span></p>
                                            </li>
                                            <li  v-for="member in item.sysUserList" class="am-thumbnail"><img class="cg-img" v-if="member.avatar" :src="fileURL+member.avatar"/>
                                                <p style="padding-left: 30px">组员:<span>{{member.realName}}</span></p>
                                            </li>
                                            <!--<li class="am-thumbnail"><img src="../../../static/img/img_bitmap.png"/>-->

                                                <!--<p>组员:<span>张华</span></p></li>-->

                                        </ul>
                                    </div>
                                </div>
                                <div class="content-center">
                                    <span class="content-title">社团风采</span>

                                    <div class="content-box-body" style="overflow: hidden;">
                                        <p>
                                            <span style="color: #008bbe;font-weight: bold;">精彩图片</span>
                                            <span v-on:click="clickOne" style="float: right; color: #008bbe; cursor: pointer;">
                                                查看全部<img src="../../../static/img/arrow_2.png" style="margin-left: 10px;margin-top: -3px;"/>
                                            </span>
                                        </p>
                                        <ul :class="contOne?'am-avg-sm-4 am-thumbnails contOne':'am-avg-sm-4 am-thumbnails'">
                                            <li v-for="goodImg in item.imgResourceList"><img style="height: 250px;width: 250px" class="am-thumbnail"
                                                     :src="fileURL+goodImg.resourceUrl"/></li>
                                            <!--<li><img class="am-thumbnail"-->
                                                     <!--src="http://s.amazeui.org/media/i/demos/bing-2.jpg"/></li>-->
                                            <!--<li><img class="am-thumbnail"-->
                                                     <!--src="http://s.amazeui.org/media/i/demos/bing-3.jpg"/></li>-->
                                            <!--<li><img class="am-thumbnail"-->
                                                     <!--src="http://s.amazeui.org/media/i/demos/bing-4.jpg"/></li>-->
                                        </ul>
                                        <p><span style="color: #008bbe;font-weight: bold;">精彩视频</span><span v-on:click="clickTwo"
                                                style="float: right; color: #008bbe; cursor: pointer;">查看全部<img
                                                src="../../../static/img/arrow_2.png"
                                                style="margin-left: 10px;margin-top: -3px;"/> </span></p>
                                        <ul :class="contTwo?'am-avg-sm-4 am-thumbnails contTwo':'am-avg-sm-4 am-thumbnails'">
                                            <li v-for="goodVideo in item.videoResourceList">
                                                <video preload="none" controls="controls" :src="fileURL+goodVideo.resourceUrl" style="width:250px;height:250px"></video>
                                            </li>
                                            <!--<li><img class="am-thumbnail"-->
                                                     <!--src="http://s.amazeui.org/media/i/demos/bing-2.jpg"/></li>-->
                                            <!--<li><img class="am-thumbnail"-->
                                                     <!--src="http://s.amazeui.org/media/i/demos/bing-3.jpg"/></li>-->
                                            <!--<li><img class="am-thumbnail"-->
                                                     <!--src="http://s.amazeui.org/media/i/demos/bing-4.jpg"/></li>-->
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                    <!--申请退出社团部分-begin-->
                        <a class="lastbutton" style="">
                            <button type="button" class="am-btn am-btn-primary" :data-am-modal="`{target: '#my-confirm`+index+`'}`" id="doc-confirm-toggle">申请退出</button>
                            <button type="button" class="am-btn am-btn-primary" :data-am-modal="`{target: '#my-alert`+index+`'}`">
                                社团评分
                            </button>
                        </a>
                        <!--罩层-->
                        <div :class="`am-modal am-modal-confirm`+index" tabindex="-1" :id="`my-confirm`+index">
                            <div class="am-modal-dialog">

                                <div class="am-modal-bd">
                                    是否确认申请退出社团
                                </div>
                                <div class="am-modal-footer">
                                    <span v-on:click="outClub(index)" class="am-modal-btn" data-am-modal-confirm>确定</span>
                                    <span class="am-modal-btn" data-am-modal-cancel>取消</span>
                                </div>
                            </div>
                        </div>
                        <!--评分-->
                        <div class="am-modal am-modal-alert" tabindex="-1" :id="`my-alert`+index">
                            <div class="am-modal-dialog">

                                <div class="am-modal-bd">
                                    该功能尚未开通,敬请期待
                                </div>
                                <div class="am-modal-footer">
                                    <span class="am-modal-btn">返回</span>
                                </div>
                            </div>
                        </div>
                    <!--申请退出社团部分-end-->

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'

    export default {
        props: {
            schoolESB: {
                type: String,
                required: true
            },
            fileURL: {
                type: String,
                required: true
            }

        },
        name: 'myTeam',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                //fileURL:"http://192.168.0.103:9000/",
                allMsg: "",
                clubImg:[],
                clubVideo:[],
                psonMsg:"",
                clubCss:0,
                //控制图片和视频是否查看全部
                contOne:true,
                contTwo:true,
                //保存退出社团的post请求信息
                receiverId:"",
                communityName:"",
                username:"",
                communityId:"",
                teamLeader:[]
            }
        },
        methods:{
            goEdit:function(){
                this.$router.push({ path: '/user/psonData' })
            },
            cgClubCss:function(index){
                this.clubCss=index;
            },
            clickOne:function(){
                this.contOne=!this.contOne;
            },
            clickTwo:function(){
                this.contTwo=!this.contTwo;
            },
            outClub:function(index){
                this.receiverId=this.allMsg[index].sysUserDTO.id;
                this.communityName=this.allMsg[index].makerCommunityDTO.communityName;
                this.username=this.psonMsg.sysUser.realName;
                this.communityId=this.allMsg[index].makerCommunityDTO.id;
                var params = new URLSearchParams();
                params.append("receiverId",this.receiverId );
                params.append("communityName",this.communityName );
                params.append("username", this.username);
                params.append("communityId", this.communityId);
                AXIOS.post('user/exitCommunity',params).then(response => {
                    //console.log(response);
                    alert(response.data);
                }).catch(e => {
                    this.errors.push(e)
                });
            }
        },
        created: function () {
            var params = new URLSearchParams();
            //获取社团的信息
            AXIOS.get('user/getUserCommunity', {
                params: {
                }
            }).then(response => {
                //console.log(response);
                this.allMsg = response.data;
            }).catch(e => {
                this.errors.push(e)
            });
           //获取用户的信息
            AXIOS.get('user/getUserInfo', {
                params: {
                }
            }).then(response => {
                //console.log(response);
                this.psonMsg = response.data;
            }).catch(e => {
                this.errors.push(e)
            });
        }
    }


</script>

<style scoped>
    /*改动的样式-yzh*/
    .cg-img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-top: 20px;
        margin-left: 40px;
    }
    .on{
        color: #E9D258;
    }
    .contOne{
        height:262px;
        transition: all .5s linear;
    }
    .contTwo{
        height:268px;
        transition: all .5s linear;
    }
    /*改动样式结束*/
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

    .button {
        float: left;
        margin-left: 29%;
    }

    .am-btn-primary {
        border-radius: 4px;

        margin-right: 5px
    }

    .am-panel-hd {
        border-top: solid 5px #ffce58 !important;
    }

    .content-title-hand-left {
        float: left;
        width: 30%;
    }

    .content-title-hand-left img {
        width: 100%;
        height: 100%;
        border: solid 1px #f3f3f3;
    }

    .content-title-hand-right {
        float: left;
        width: 64%;
        margin-left: 4%;
    }

    .content-box-body {
        border-top: solid 5px #e6e6e6;
        padding-top: 3%;
    }

    .content-center {
        position: relative;
        margin-top: 3%;
    }

    .content-title {
        font-weight: bold;
        width: 100px;
        position: absolute;
        background: #fff;
        top: -10px;
    }

    .am-thumbnail {
        background: #f3f3f3;
    }

    .am-thumbnail img {
        padding-top: 5px;
    }

    .am-thumbnail p {
        text-align: center;
    }

    .lastbutton {
        display: block;
        margin-left: 45%;
        margin-top: 5%;
    }

    .lastbutton button:first-child {
        margin-left: -15%;
    }

    .lastbutton button:last-child {
        margin-left: 15%;
    }
</style>