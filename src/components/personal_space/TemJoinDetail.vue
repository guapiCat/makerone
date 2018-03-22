<template>
    <div>
        <div class="workshow" style="width: 1200px;margin: 50px auto; ">
            <div class="center-title" style="margin-bottom: 20px; color: #969696;">
                <span> <img src="../../../static/img/icon_address.png"
                            alt=""/><i>{{schoolESB}}-创客团队-<span>团队详情</span></i></span>
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
                            <img :src="fileURL+allMsg.teamLogo"/>
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
                        <p style="margin-bottom: 40px;"><span v-on:click="seeOneCont"
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
                        <p style="margin-bottom: 40px;"><span v-on:click="seeTwoCont"
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
                <button v-on:click="outTeam" type="button" class="am-btn am-btn-primary">退出团队</button>
            </a>
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
        name: "makerteam",
        data: function () {
            return {
                allMsg: [],
                teamMemb:[],
                teamId: this.$route.params.teamId,
                //fileURL:"http://192.168.0.103:9000/",
                contOne: true,
                contTwo: true,
                creTrue:true,
                jugCont:false,
                //退出团队发送的信息
                receiverId:"",
                teamName:"",
                username:""
            }
        },
        methods:{
            seeTwoCont:function(){
                this.contTwo=!this.contTwo;
            },
            seeOneCont:function(){
                this.contOne=!this.contOne;
            },
            outTeam:function(){
                this.receiverId=this.teamMemb[0][2];
                this.teamName=this.allMsg.teamName;
                var params = new URLSearchParams();
                AXIOS.get('user/getUserInfo').then(response => {
                    //console.log(response);
                    this.username=response.data.sysUser.realName;
                    var params = new URLSearchParams();
                    AXIOS.get('user/quitTeam', {
                        params: {
                            receiverId:this.receiverId,
                            teamName:this.teamName,
                            username:this.username,
                            teamId:this.teamId
                        }
                    }).then(response => {
                        //console.log(response);
                        if(response.data){
                            if(response.data==true){
                                alert("退出成功");
                                this.$router.push({ path: '/user/myGroup' })
                            }
                        }else{
                            alert(response.data);
                        }
                    }).catch(e => {
                        this.errors.push(e)
                    });
                }).catch(e => {
                    this.errors.push(e)
                });
            }
        },
        created: function () {
            var params = new URLSearchParams();
            AXIOS.get('team/MakerTeamParticulars', {
                params: {
                    makerTeamId: this.teamId
                }
            }).then(response => {
                //console.log(response.data);
                this.allMsg = response.data;
                this.teamMemb.push([this.allMsg.sysUser.realName,this.allMsg.sysUser.avatar,this.allMsg.sysUser.id]);
                for(var i=0;i<this.allMsg.teamMemberUserList.length;i++){
                    this.teamMemb.push([this.allMsg.teamMemberUserList[i].realName,this.allMsg.teamMemberUserList[i].avatar,this.allMsg.teamMemberUserList[i].id]);
                }
                if(response.data.makerWorksList.length==0){
                    this.contOne=false;
                    this.jugCont=true;
                }
            }).catch(e => {
                this.errors.push(e);
            });
        },
        mounted:function(){}
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
