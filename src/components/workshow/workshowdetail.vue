<template>
    <div>
        <div class="workshow" style="width: 1200px;margin: 50px auto; ">
            <div class="center-title" style="margin-bottom: 20px; color: #969696;">
                <span> <img src="../../../static/img/icon_address.png"
                            alt=""/><i>益谷创客平台-作品展示-<span>{{allMsg.worksName}}</span></i></span>
            </div>
            <div class="center-box" style="border: solid 3px #f3f3f3 ; padding: 20px ; background-color: #fbfbfb;">
                <!--titile-->
                <div class="center-box-title">
                    <div class="box-title"><p>
                        {{allMsg.worksName}}
                    </p></div>
                    <div class="box-center">
                        <span class="author">作者:</span><i>{{allMsg.username}}</i>
                        <span class="box-time">时间:</span><i>{{allMsg.createTime}}</i>
                    </div>
                    <div class="box-right" v-if="voteStatus==1">
                        <img v-on:click="vote" src="../../../static/img/unvote.png" alt="" style="cursor: pointer"/>
                        <i>{{thumbs}}</i>
                    </div>
                    <div class="box-right" v-if="voteStatus==0">
                        <img v-on:click="outVote" src="../../../static/img/upvote.png" alt="" style="cursor: pointer"/>
                        <i>{{thumbs+1}}</i>
                    </div>

                </div>
                <div class="box-team">
                    <h5>{{allMsg.makerWorksDisplays[0].title}}:</h5>

                    <p>{{allMsg.makerWorksDisplays[0].content}}</p>
                </div>
                <div class="box-team">
                    <h5>{{allMsg.makerWorksDisplays[1].title}}:</h5>

                    <p>{{allMsg.makerWorksDisplays[1].content}}</p>
                </div>
                <div class="box-team">
                    <h5>{{allMsg.makerWorksDisplays[2].title}}:</h5>

                    <p><span>电子材料</span>:<span>{{allMsg.makerWorksDisplays[2].content}}</span></p>

                    <!--<p><span>电子材料</span>:<span>回家放大后即可上都会尽快哈市将看到后尽快</span></p>-->

                    <!--<p><span>电子材料</span>:<span>回家放大后即可上都会尽快哈市将看到后尽快</span></p>-->
                </div>
                <div class="box-team">
                    <h5>制作过程:</h5>
                    <ul class="am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-thumbnails"
                        style="margin-top: 50px; margin-bottom: 10rem;margin-left: 30px;">
                        <li v-for="item in allStep" class="stepLi">
                            <div class="stepMsg">{{item.content}}</div>
                            <img class="am-thumbnail stepImg" :src="fileURL+item.stepUrl"/>

                        </li>
                        <!--<li class="stepLi">-->
                            <!--<div class="stepMsg">lorem lorem lorm lorm lorm</div>-->
                            <!--<img class="am-thumbnail stepImg" src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>-->

                        <!--</li>-->
                        <!--<li>-->

                            <!--<img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-2.jpg"/>-->

                        <!--</li>-->
                        <!--<li>-->

                            <!--<img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-3.jpg"/>-->

                        <!--</li>-->
                        <!--<li>-->

                            <!--<img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-4.jpg"/>-->

                        <!--</li>-->

                    </ul>
                </div>

            </div>
            <comment :disId="workId"></comment>


        </div>

    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'
    import comment from '../comment/comment'

    export default {
        name: "workshowdetail",
        component:{comment},
        data () {
            return {
                workId: this.$route.params.workId,
                //typeId: this.$route.params.typeId,
                fileURL:"http://192.168.0.103:9000/",
                allMsg:"",
                allStep:[],
                voteStatus:""
            }
        },
        methods:{
            vote: function () {
                this.$emit('voteReq', {voteObjId:this.workId, voteObjType:1, voteStatus:1});
                this.voteStatus=0;
            },
            outVote:function(){
                this.$emit('voteReq', {voteObjId:this.workId, voteObjType:1, voteStatus:0});
                this.voteStatus=1;
            }
        },
        created: function(){
            var params = new URLSearchParams();
            //获取点赞状态
            AXIOS.get('common/upStatus', {
                params:{
                    objectId:this.workId
                }
            }).then(response => {
                console.log("这是访问点赞状态返回的消息："+response.data);
                if(response.data==false){
                    //没点赞就是1，点赞就是0。。点赞成功得到0，取消点赞成功得到-1
                    this.voteStatus=1;
                }else if(response.data==true){
                    this.voteStatus=0;
                }
            }).catch(e => {
                this.errors.push(e)
            });
            //访问记录
            AXIOS.get('common/view', {
                params:{
                    voteObjId:this.workId,
                    voteObjType:1
                }
            }).then(response => {
                console.log("这是访问记录返回的消息："+response.data);
            }).catch(e => {
                this.errors.push(e)
            });
            //请求页面信息
            AXIOS.get('makerWorks/makerWorksParticulars', {
                params:{
                    makerWorksId:this.workId
                }
            }).then(response => {
                var jsonResult = eval(response.data);
                this.allMsg=response.data;
                this.allStep=response.data.makerWorksSteps;
                this.thumbs=this.allMsg.worksScanNum;
            }).catch(e => {
                this.errors.push(e)
            });
        }
    }
</script>

<style scoped>
    .stepMsg{
        height: 220px;
        width:220px;
        position: absolute;
        background:  rgba(192, 192, 192, .6);
        opacity: 0;
        transition: all .5s linear;
    }
    .stepMsg:hover{
        opacity: 1;
    }
    .stepImg{
        height: 220px;
        width: 220px;
    }


    .classify {
        padding-left: 18%;
    }

    .classify img {
        height: 25px;
        width: 29px;
    }

    .classify span {
        font-size: 20px;
        padding-left: 1%;
        color: #000000;

    }

    .classifylist {
        padding-left: 18%;
    }

    .classifylist li {
        list-style: none;
        float: left;
        border: solid 1px #FFF;
        height: 40px;
        width: 11%;
        text-align: center;
        color: #333;
        margin: 0 20px;
        padding: 5px 0;
        background: #FFFFFF;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
        cursor: pointer;

    }

    .am-thumbnail {
        margin-bottom: 0px;
        padding: 0px;
        border: 0;
    }

    .q_coverName span {
        float: right;
    }

    .q_coverName img {
        height: 16px;
        width: 19px;
    }

    .q_coverName i {
        margin-left: 17px;
        margin-right: 15px;
    }

    .workshow li {
        margin-bottom: 20px;
    }

    .box-title {
        font-size: 25px;
        margin: 0 auto;
       text-align: center;
        width: 100%;
    }

    .box-center {
        font-size: 15px;
        text-align: center;
        margin-top: 30px;
        border-bottom: solid 3px #f6c634;
    }

    .box-right {
        float: right;
        margin-top: -35px;
        border: solid 1px #e6e6e6;
        padding: 1px 10px;
        border-radius: 5px;
    }

    .box-team h5 {
        margin-left: 35px;
    }

    .box-team p {
        margin-left: 55px;
    }

    /*评论*/
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
