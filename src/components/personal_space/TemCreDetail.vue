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
                            <li v-for="item,index in teamMemb" class="am-thumbnail">
                                <img style="border-radius: 50%" :src="fileURL+item[1]"/>
                                <p>{{index?"组员":"组长"}}:<span>{{item[0]}}</span></p>
                            </li>
                            <!--添加成员（跳模态框）-->
                            <li class="am-thumbnail">
                                <img data-am-modal="{target: '#my-alertImg'}" style="border-radius: 50%;background: white;cursor: pointer" src="../../../static/img/icon_jiahao.png" alt=""/>
                                <p>添加成员</p>
                            </li>
                            <div class="am-modal am-modal-alert" tabindex="-1" id="my-alertImg">
                                <div class="am-modal-dialog">
                                    <div class="am-modal-hd">
                                        输入成员名字：<input v-model="findName" type="text"/>
                                        <a v-on:click="goFindPson" class="am-btn am-btn-primary">查找</a>
                                    </div>
                                    <div class="am-modal-bd findPsonBody">
                                        <div v-on:click="clickFindPson(index,item.sysUser.id)" :class="{'checkPson':index==addPsonClass}" class="findPsonDiv" v-for="item,index in findNameMsg">
                                            <img class="findPsonImg" :src="fileURL+item.sysUser.avatar" alt=""/>
                                            <p>{{item.sysUser.realName}}</p>
                                        </div>
                                    </div>
                                    <div class="am-modal-footer">
                                        <span class="am-modal-btn">取消</span>
                                        <span v-on:click="addPson" class="am-btn am-modal-btn">确定</span>
                                    </div>
                                </div>
                            </div>
                            <!--<li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>-->
                            <!--<li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>-->
                            <!--<li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>-->
                        </ul>
                    </div>
                </div>

            </div>
            <!--模态框按钮发起层-->
            <a style="display: block;margin-left: 30%; margin-top: 5%;">
                <button style="margin-right: 30%" type="button" class="am-btn am-btn-primary"
                        data-am-modal="{target: '#my-alert1'}">解散团队</button>
                <button type="button" class="am-btn am-btn-primary"
                        data-am-modal="{target: '#my-alert2'}">发送消息</button>
            </a>

            <!--模态框弹出层-->
            <div class="am-modal am-modal-alert" tabindex="-1" id="my-alert1">
                <div class="am-modal-dialog">
                    <div class="am-modal-hd">是否确认解散团队</div>
                    <!--<div class="am-modal-bd">-->
                        <!--Hello world！-->
                    <!--</div>-->
                    <div class="am-modal-footer">
                        <span class="am-modal-btn">取消</span>
                        <span v-on:click="outTeam" class="am-modal-btn">确定</span>
                    </div>
                </div>
            </div>

            <div class="am-modal am-modal-alert" tabindex="-1" id="my-alert2">
                <div class="am-modal-dialog">

                    <div class="am-modal-hd">发送消息内容</div>
                    <div class="am-modal-bd">
                        <textarea maxlength="100" v-model="sendMsgTxt" placeholder="请填写要发送的消息(*^▽^*)" name="" id="" cols="60" rows="10"></textarea>
                    </div>
                    <div class="am-modal-footer">
                        <span class="am-modal-btn">取消</span>
                        <span v-on:click="sendMsg" class="am-modal-btn">发送</span>
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
        name: "makerteam",
        data: function () {
            return {
                allMsg: [],
                teamMemb:[],
                teamId: this.$route.params.teamId,
                //fileURL:"http://192.168.0.103:9000/",
                //修改css的控件数据
                contOne: true,
                contTwo: true,
                creTrue:true,
                jugCont:false,
                //end
                sendMsgTxt:"",
                findName:"",
                findNameMsg:"",
                addPsonClass:-1,
                findPsonId:""
            }
        },
        methods:{
            addPson:function(){
                var params = new URLSearchParams();
                AXIOS.get('user/addMember', {
                    params: {
                        makerTeamId:this.teamId,
                        teamUserId:this.findPsonId
                    }
                }).then(response => {
                    alert(response.data);
                }).catch(e => {
                    this.errors.push(e);
                });
            },
            clickFindPson:function(index,psonId){
                this.addPsonClass=index;
                this.findPsonId=psonId;
            },
            goFindPson:function(){
                var params = new URLSearchParams();
                AXIOS.get('user/likeMember', {
                    params: {
                        userName:this.findName
                    }
                }).then(response => {
                    //console.log("查找个人信息："+response.data);
                    this.findNameMsg=response.data;
                    if(this.findNameMsg.length>4){
                        this.findNameMsg.length=4;
                    }
                }).catch(e => {
                    this.errors.push(e);
                });

            },
            sendMsg:function(){
                var params = new URLSearchParams();
                AXIOS.get('user/messageToAllTeamMember', {
                    params: {
                        makerTeamId:this.teamId,
                        content:this.sendMsgTxt
                    }
                }).then(response => {
                    //console.log(response);
                    if(response.data==true){
                        alert("发送成功");
                    }else{
                        alert("网络连接错误");
                    }
                }).catch(e => {
                    this.errors.push(e)
                });
            },
            seeOneCont:function(){
                this.contOne=!this.contOne;
            },
            seeTwoCont:function(){
                this.contTwo=!this.contTwo;
            },
            outTeam:function(){
                var params = new URLSearchParams();
                AXIOS.get('user/dissolveTeam',{
                    params:{
                        makerTeamId:this.teamId
                    }
                }).then(response => {
                    //console.log(response);
                    if(response.data==true){
                        alert("解散成功");
                        this.$router.push({ path: '/user/myGroup' })
                    }else{
                        alert("网络连接错误");
                    }
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
        mounted:function(){}
    }
</script>

<style scoped>
    .checkPson{
        border:1px solid #0E90D2;
    }
    .findPsonBody{
        display: flex;
        justify-content: center;
        height: 200px;
    }
    .findPsonDiv{
        padding-top: 10px;
    }
    .findPsonDiv:hover{
        border: 1px dashed #0E90D2;
    }
    .findPsonImg{
        width: 100px;
        height:100px;
        margin:10px;
        border-radius: 50%;
    }
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
