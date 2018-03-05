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
                    <div class="box-right">
                        <img src="../../../static/img/upvote.png" alt=""/>
                        <i>0</i>
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
                        style="margin-top: 50px; margin-bottom: 10rem;">
                        <li v-for="item in allStep" class="stepLi">
                            <div class="stepMsg">{{item.content}}</div>
                            <img class="am-thumbnail stepImg" src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>

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


        </div>

    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'
    export default {
        name: "workshowdetail",
        data () {
            return {
                workId: this.$route.params.workId,
                typeId: this.$route.params.typeId,
                allMsg:"",
                allStep:[]
            }
        },
        created: function(){
            var params = new URLSearchParams();
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
            }).catch(e => {
                this.errors.push(e)
            });
        }
    }
</script>

<style scoped>
    .stepMsg{
        height: 160px;
        width:280px;

        position: absolute;
        background:  rgba(192, 192, 192, .6);
        opacity: 0;
        transition: all .5s linear;
    }
    .stepMsg:hover{
        opacity: 1;
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
