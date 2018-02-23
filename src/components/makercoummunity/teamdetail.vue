<template>
    <div>
        <div class="workshow" style="width: 1200px;margin: 50px auto; ">
            <div class="center-title" style="margin-bottom: 20px; color: #969696;">
                <span> <img src="../../../static/img/icon_address.png"
                            alt=""/><i>益谷创客平台-创客团队-<span>团队详情</span></i></span>
            </div>
            <div class="center-box"
                 style="text-align: center; border: solid 1px #f3f3f3; border-bottom: solid 5px #FAC952; padding: 20px ; background-color: #EEEEEE;">
                <h1>{{allMsg.teamName}}</h1>

                <p><span>学校:</span><i>{{allMsg.schoolName}}</i>&nbsp;&nbsp;&nbsp;&nbsp;<span>组长:</span><i>{{allMsg.sysUser.realName}}</i>&nbsp;&nbsp;&nbsp;&nbsp;<span>时间:</span><i>2017-10-18</i>
                </p>
            </div>
            <div class="center-box" style="border: solid 3px #f3f3f3 ; padding: 20px ;width: 100%;height: 100%;">
                <h1>团队信息</h1>

                <div class="content-center">
                    <span class="content-title">团队介绍</span>

                    <div class="content-box-body" style="overflow: hidden;">
                        <div class="content-title-hand-left">
                            <img src="../../../static/img/airplane.png"/>
                        </div>
                        <div class="content-title-hand-right">
                            <h5>{{allMsg.teamName}}</h5>

                            <p>创建时间：<span>{{allMsg.createTime}}</span></p>

                            <p>需要人数：<span>{{allMsg.maxNum}}</span></p>

                            <p>当前人数：<span>{{allMsg.teamNum}}</span></p>
                            <!--<p>人员需求：<span>有一定团队意识和创造力</span></p>-->
                            <p>团队介绍：<span>{{allMsg.teamIntro}}</span></p>
                        </div>

                    </div>
                </div>
                <div class="content-center">
                    <span class="content-title">团队作品</span>

                    <div class="content-box-body" style="overflow: hidden;">
                        <p style="margin-bottom: 40px;"><span v-on:click="switchBol(contOne)"
                                style="float: right; color: #008bbe; cursor: pointer;">查看全部<img
                                src="../../../static/img/arrow_2.png"
                                style="margin-left: 10px;margin-top: -3px;"/> </span></p>
                        <ul :class="{'am-avg-sm-4':creTrue,'am-thumbnails':creTrue,'seeAll':contOne,'noCont':jugCont}">
                            <li class="am-thumbnail" v-for="item in allMsg.makerWorksList"><img
                                    :src="fileURL+item.worksCoverImage"/>

                                <p><span>{{item.worksName}}</span></p></li>
                            <!--<li class="am-thumbnail"><img  src="../../../static/img/airplane.png" /><p><span>防盗书包</span></p></li>-->
                        </ul>

                    </div>
                </div>
                <div class="content-center">
                    <span class="content-title">团队成员</span>

                    <div class="content-box-body" style="overflow: hidden;">
                        <p style="margin-bottom: 40px;"><span v-on:click="switchBol(contTwo)"
                                style="float: right; color: #008bbe; cursor: pointer;">查看全部<img
                                src="../../../static/img/arrow_2.png"
                                style="margin-left: 10px;margin-top: -3px;"/> </span></p>
                        <ul :class="{'am-avg-sm-4':true,'am-thumbnails':true,'seeAll':contTwo}">
                            <li v-for="item,index in teamMemb" class="am-thumbnail"><img
                                    :src="fileURL+item[1]"/>

                                <p>{{index?"组员":"组长"}}:<span>{{item[0]}}</span></p></li>
                            <!--<li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>-->
                            <!--<li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>-->
                            <!--<li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>-->
                        </ul>
                    </div>
                </div>

            </div>
            <a style="display: block;margin-left: 50%; margin-top: 5%;">
                <button type="button" class="am-btn am-btn-primary">申请加入</button>
            </a>
        </div>
    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'
    export default {
        name: "makerteam",
        data: function () {
            return {
                allMsg: [],
                teamMemb:[],
                teamId: this.$route.params.teamId,
                fileURL: "http://192.168.0.105:9000/",
                contOne: true,
                contTwo: true,
                creTrue:true,
                jugCont:false
            }
        },
        methods:{
            switchBol:function(goSwich){
                goSwich = !goSwich
            }
            /*seeAllOne:function(){
                //this.switchBol(this.contOne);
                if(this.contOne==false){
                    this.contOne=true;
                }else{
                    this.contOne=false;
                }
            },
            seeAllTwo:function(){
                //this.switchBol(this.contTwo);
                if(this.contTwo==false){
                    this.contTwo=true;
                }else{
                    this.contTwo=false;
                }
            }*/
        },
        created: function () {
            var params = new URLSearchParams();
            AXIOS.get('team/MakerTeamParticulars', {
                params: {
                    makerTeamId: this.teamId
                }
            }).then(response => {
                console.log(response.data);
                this.allMsg = response.data;
                this.teamMemb.push([this.allMsg.sysUser.username,this.allMsg.sysUser.avatar,this.allMsg.sysUser.id]);
                for(var i=0;i<this.allMsg.teamMemberUserList.length;i++){
                    this.teamMemb.push([this.allMsg.teamMemberUserList[i].username,this.allMsg.teamMemberUserList[i].avatar,this.allMsg.teamMemberUserList[i].id]);
                }
                if(response.data.makerWorksList.length==0){
                    this.contOne=false;
                    this.jugCont=true;
                }
            }).catch(e => {
                this.errors.push(e);
            });
        },
        mounted:function(){
        }
    }
</script>

<style scoped>
    .noCont{
        display:none;
    }
    .seeAll{
        /*height: 10px;*/
        height: 257.375px;
        overflow: hidden;
        transition: all .5s linear;
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

    .am-avg-sm-4 > li {
        width: 23%;
        margin-left: 2%;
        margin-bottom: 30px;
    }

    .am-thumbnail img {
        width: 150px;
        height: 150px;
    }
</style>
