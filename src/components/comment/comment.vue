<template>
    <div>
        <div class="center-box"
             style=" margin-top: 30px; border: solid 3px #f3f3f3 ; padding: 20px ; background-color: #fbfbfb;width: 100%;">
            <textarea v-model="discuss" rows="5" cols="140" value="" name=""
                      placeholder="写点评论支持下载资源贡献者，注意字数不要超过70字~"></textarea>

            <div class="am-btn-group" style="float: right;margin-top:10px;">
                <button v-on:click="goDis" type="button" class="am-btn am-btn-default">发表评论</button>
            </div>
            <div class="all-comment-list">
                <h1 style="margin-left: 15px;">作品评论</h1>

                <div v-for="item,index in allMsg.list" class="comment-list-detail">
                    <img style="width:70px;height:70px;border-radius: 50%" :src="fileURL+item.avatar"/>

                    <div class="comment-conten">
                        <span class="replayCss">
                            {{item.realName}}
                            <span v-if="item.objectType==3">&nbsp;回复&nbsp;{{item.replyRealName}} : {{item.replyComment}}</span>
                        </span>

                        <p style="width: 1000px;word-wrap:break-word;">{{item.content}}</p>
                    </div>
                    <div class="comment-right" style="width: 100%;text-align: right">
                        <button type="button" :data-am-modal="`{target: '#my-alert`+index+`'}`" class="am-btn am-btn-primary" style="margin-left: 40%;">回复</button>
                        <p>{{item.createDate}}</p>
                    </div>
                    <!--评论回复-->

                    <!--模态框弹出层-->
                    <div class="am-modal am-modal-alert" tabindex="-1" :id="`my-alert`+index">
                        <div class="am-modal-dialog">
                            <textarea v-model="replyCont" placeholder="请输入回复的内容(*^▽^*)" name="" id="" cols="60" rows="10"></textarea>
                            <!--<div class="am-modal-bd">-->
                            <!--Hello world！-->
                            <!--</div>-->
                            <div class="am-modal-footer">
                                <span class="am-modal-btn">取消</span>
                                <span v-on:click="goReplay(item.id,item.objectId)" class="am-modal-btn">确定</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="comment-list-detail">-->
                    <!--<img src="../../../static/img/img_bitmap.png"/>-->

                    <!--<div class="comment-conten">-->
                        <!--<span>小娃娃</span>-->

                        <!--<p>好棒好棒</p>-->
                    <!--</div>-->
                    <!--<div class="comment-right" style="float: right;margin-top: -8%;">-->
                        <!--<button type="button" class="am-btn am-btn-primary" style="margin-left: 40%;">回复</button>-->
                        <!--<p>2017-9-27 8:50</p>-->
                    <!--</div>-->

                <!--</div>-->
                <!--<div class="comment-list-detail">-->
                    <!--<img src="../../../static/img/img_bitmap.png"/>-->

                    <!--<div class="comment-conten">-->
                        <!--<span>小莉</span>-->

                        <!--<p>6666</p>-->
                    <!--</div>-->
                    <!--<div class="comment-right" style="float: right;margin-top: -8%;">-->
                        <!--<button type="button" class="am-btn am-btn-primary" style="margin-left: 40%;">回复</button>-->
                        <!--<p>2017-9-27 8:50</p>-->
                    <!--</div>-->
                <!--</div>-->
            </div>

        </div>
    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'

    export default {
        name: "comment",
        props:["disId"],
        data: function () {
            return {
                fileURL:"http://192.168.0.103:9000/",
                discuss: "",
                allMsg:"",
                replyCont:""
            }
        },
        methods:{
            goReplay:function(userCommentId,objectId){
                var params = new URLSearchParams();
                AXIOS.get('common/replyComment', {
                    params: {
                        userCommentId:userCommentId,
                        objectId:objectId,
                        content:this.replyCont
                    }
                }).then(response => {
                    alert(response.data);
                    location.reload();
                }).catch(e => {
                    this.errors.push(e)
                });
            },
            goDis:function(){
                var params = new URLSearchParams();
                AXIOS.get('common/comment', {
                    params: {
                        objectId:this.disId,
                        content:this.discuss
                    }
                }).then(response => {
                    alert(response.data);
                    location.reload();
                }).catch(e => {
                    this.errors.push(e)
                });
            },
            showAllDis:function(){
                var params = new URLSearchParams();
                AXIOS.get('common/commentShow', {
                    params: {
                        objectId:this.disId
                        //token:'AFAECF0B40845121',
                        //UID:968325839853285378,
                        //pageNum:1,
                        //pageSize:10
                    }
                }).then(response => {
                    //console.log(response);
                    this.allMsg=response.data;
                }).catch(e => {
                    this.errors.push(e)
                });
            }
        },
        created:function(){
            this.showAllDis();
        }
    }
</script>

<style scoped>
    /*添加样式*/
    .replayCss{
        display:inline-block;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        width:500px;
    }
    /*结束添加*/
    .center-box textarea {
        margin-top: 40px;
    }

    .all-comment-list {
        margin-top: 60px;
    }

    .comment-list {
        padding-left: 0;
        overflow: hidden;
        float: left;
        margin-left: 17px;
        margin-top: 60px;
    }

    .comment-list li {
        float: left;
        list-style: none;
        width: 27px;
        height: 27px;

    }

    .comment-list li a {
        display: block;
        width: 100%;
        padding-top: 27px;
        overflow: hidden;
    }

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

    .comment-list li a {
        display: block;
        width: 100%;
        padding-top: 27px;
        overflow: hidden;
    }

    .comment-list li.light {
        background-position: 0 -29px;
    }

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
