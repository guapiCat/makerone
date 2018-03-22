<template>
    <div>
        <div class="workshow" style="width: 1200px;margin: 50px auto;">
            <div class="center-title" style="margin-bottom: 20px; color: #969696;">
                <span> <img src="../../../static/img/icon_address.png"
                            alt=""/><i>益谷创客平台-创客社团-<span>详情页</span></i></span>
            </div>
            <div>
                <div class="center-box"
                     style="text-align: center; border: solid 1px #f3f3f3; border-bottom: solid 5px #FAC952; padding: 20px ; background-color: #EEEEEE;">
                    <h1>{{makelifelist.makerLive.liveTitle}}</h1>

                    <p>分类 ：<span>创客动态</span></p>
                    <img v-on:click="vote" v-if="voteStatus==1" src="../../../static/img/unvote.png" style="cursor: pointer"/>
                    <img v-on:click="outVote" v-if="voteStatus==0" src="../../../static/img/upvote.png" style="cursor: pointer"/>
                </div>
                <div style="border: solid 1px #C1C1C1; border-top: 0px; padding: 20px;">
                    <div class="content-title">
                        <img :src="fileURL+makelifelist.avatar"/> <span>作者：<i>{{makelifelist.username}}</i></span>
                    </div>
                    <div class="comment" v-html="contentbox">
                    </div>
                    <div class="conter-footer">
                        <!--<span>点赞数：</span><img src="../../../static/img/upvote.png"/><i>{{makelifelist.makerLive.liveThumbsUpNum}}</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
                        <span>浏览数：</span><img src="../../../static/img/browse.png"/><i>{{makelifelist.makerLive.liveScanNum}}</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>发布时间：<i>{{makelifelist.makerLive.createDate}}</i></span>
                    </div>
                </div>
            </div>
            <comment :disId="workId"></comment>


        </div>

    </div>
</template>

<script type="es6">
    import {AXIOS} from "../../http-common";
    import comment from '../comment/comment'


    export default {
        name: "life-detail",
        component: {comment},
        props: {
            fileURL: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                workId: this.$route.params.workId,
                makelifelist: [],
                contentbox: [],
                voteStatus:""
            }
        },
        methods:{
            vote: function () {
                this.$emit('voteReq', {voteObjId:this.workId, voteObjType:2, voteStatus:1});
                this.voteStatus=0;
            },
            outVote:function(){
                this.$emit('voteReq', {voteObjId:this.workId, voteObjType:2, voteStatus:0});
                this.voteStatus=1;
            }
        },
        created: function () {
            var params = new URLSearchParams();
            //获取点赞状态
            AXIOS.get('common/upStatus', {
                params:{
                    objectId:this.workId
                }
            }).then(response => {
                //console.log("这是访问点赞状态返回的消息："+response.data);
                if(response.data==false){
                    //没点赞就是1，点赞就是0。。点赞成功得到0，取消点赞成功得到-1
                    this.voteStatus=1;
                }else if(response.data==true){
                    this.voteStatus=0;
                }
            }).catch(e => {
                this.errors.push(e)
            });
//            申请记录
            AXIOS.get('common/view', {
                params: {
                    voteObjId: this.workId,
                    voteObjType: 3
                }
            }).then(response => {
//                console.log("这是访问记录返回的消息："+response.data);
            }).catch(e => {
                this.errors.push(e)
            });
            AXIOS.get('makerLive/makerLiveInfo', {
                params: {
                    id: this.workId
                }
            }).then(response=> {
                var makerlife = response.data;
                this.makelifelist = makerlife;
                this.contentbox = this.makelifelist.makerLive.liveContent
            }).catch(response => {
                this.errors.push(response)
            });
        }
    }
</script>

<style scoped>
    .center-box img {
        float: right;
        margin-top: -45px;
        height: 30px;
        padding-right: 40px;
    }

    .content-title img {
        height: 41px;
        width: 41px;
        border-radius: 50%;
    }

    .comment {
        margin-top: 15px;
    }

    .comment img {
        height: 400px;
        width: 100%;
        margin-top: 15px;
    }

    .conter-footer {
        margin-bottom: 3%;
        margin-top: 2%;
    }

    .conter-footer img {
        margin-top: -5px;
    }

    /*评论*/

    .comment span {
        display: block;
        padding-top: 58px;
        margin-left: 14px;
        float: left;
        font-size: 20px;
        font-weight: bold;
    }

    .comment-list-detail img {
        float: left;
    }

    .comment-list-detail {
        margin-left: 15px;
        border-bottom: solid 1px #ebebeb;
        margin-right: 15px;
        margin-top: 20px;
    }

    .comment-conten {
        margin-left: 7%;
    }

    .comment-conten span {
        color: #7394CA;
    }
</style>
