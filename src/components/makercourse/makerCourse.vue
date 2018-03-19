<template>
    <div>
        <div class="workshow" style="width: 1200px;margin: 50px auto;">
            <div class="center-title" style="margin-bottom: 20px; color: #969696;">
                <span> <img src="../../../static/img/icon_address.png" alt=""/><i>益谷创客平台-创客课程</i></span>
            </div>
            <div class="center-box" style="border: solid 3px #f3f3f3 ;">
                <div class="centent-title">
                    <h1>{{makercourse.courseName}}</h1>
                    <h5>分类:<span>{{makercourse.typeName}}</span></h5>

                    <div class="centent-title-right">
                        <img v-if="voteStatus==1" src="../../../static/img/unvote.png" v-on:click="vote"
                             style="height: 30px; width: 40px; margin-right:20px;cursor: pointer;"/>
                        <img v-if="voteStatus==0" v-on:click="outVote" src="../../../static/img/upvote.png" alt="" style="cursor:pointer;height: 30px; width: 40px; margin-right:20px ;"/>
                        <button v-on:click="addColl" type="button" class="am-btn am-btn-primary">我要收藏</button>
                    </div>
                </div>
                <div class="content-title-hand">
                    <div class="content-title-hand-left">
                        <img :src="fileURL+makercourse.courseCoverImage" class="default"/>
                        <video class="myvideo" controls="controls"
                               style="width: 100%;height: 100%;display: none"></video>
                    </div>

                    <div class="content-title-hand-right" style="float: left; width: 40%;">
                        <h5>课程信息</h5>

                        <p>开课时间：<span>{{makercourse.createDate}}</span></p>

                        <p>浏览人数：<span>{{makercourse.courseScanNum}}</span>人</p>

                        <p>课程进度：<span>{{makercourse.chapterName}}</span></p>

                        <p>课程介绍：<span>{{makercourse.courseIntro}}</span></p>
                    </div>

                </div>
                <div class="content-box">
                    <div class="content-box-left">
                        <div class="content-box-left-title">
                            <img src="../../../static/img/book.png"/>
                            <span>课程目录</span>
                        </div>
                        <div class="content-box-body">
                            <div class="zTreeDemoBackground left">
                                <ul id="treeDemo" class="ztree"></ul>
                            </div>
                        </div>
                    </div>

                    <div class="content-box-right">
                        <div class="content-box-left-title" style="margin-left: 62%;">
                            <span>相关作品</span>
                        </div>
                        <div class="content-box-right-body">
                            <ul class="am-avg-sm-2 am-avg-md-3 am-avg-lg-2 am-thumbnails">
                                <li v-for="item in relatedworks ">
                                    <router-link :to="{name: 'workshowdetail', params: {workId: item.makerWorks.id}}">
                                        <img class="am-thumbnail workimg"
                                             :src="fileURL+item.makerWorks.worksCoverImage"/>

                                        <p class="q_coverName">{{item.makerWorks.worksName}}</p>

                                        <div class="q_worksCn" style="overflow: hidden">
                                            <img class="q_head" :src="fileURL+item.makerWorks.worksCoverImage"/>
                                            <a class="q_works_user">{{item.realName}}</a>
                                            <a class="q_dianzan"><img src="../../../static/img/upvote.png"/><span>{{item.makerWorks.worksThumbsUpNum}}</span></a>
                                            <a class="q_liulan"><img src="../../../static/img/browse.png"/><span>{{item.makerWorks.worksScanNum}}</span></a>

                                            <div class="clear"></div>
                                        </div>
                                    </router-link>
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div class="clear"></div>
                    <comment :disId="courseId"></comment>
                </div>
                <!--分页-->


            </div>
        </div>

    </div>
</template>

<script type="es6">
    import '../../../static/css/demo.css'
    import '../../../static/css/zTreeStyle.css'
    import '../../../static/js/jquery.ztree.core'
    import {AXIOS} from "../../http-common";
    export default {
        name: "maker-course",
        props: {
            fileURL: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                courseId: this.$route.params.workId,
                typeId: this.$route.params.typeId,
                makercourse: [],
                relatedworks: [],
                voteStatus:""

            }
        },
        methods: {
            //收藏
            addColl:function(){
                var params = new URLSearchParams();
                params.append("objectId", this.courseId);
                params.append("type", 0);
                AXIOS.post('common/joinFavorite', params).then(response => {
                    alert(response.data);
                }).catch(e => {
                    this.errors.push(e)
                });
            },
            vote: function () {
                this.$emit('voteReq', {voteObjId:this.courseId, voteObjType:3, voteStatus:1});
                this.voteStatus=0;
            },
            outVote:function(){
                this.$emit('voteReq', {voteObjId:this.courseId, voteObjType:3, voteStatus:0});
                this.voteStatus=1;
            },
            playResource: function (type, url) {
                //console.log(type + url);
            }
        },
        created: function () {
            var params = new URLSearchParams();
            //获取点赞状态
            AXIOS.get('common/upStatus', {
                params:{
                    objectId:this.courseId
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
            // 相关作品
            AXIOS.get('makerCourse/relatedWorks?pageSize=3', {
                params: {
                    type: this.typeId
                }
            }).then(response=> {
                this.relatedworks = response.data;
                //console.log(response)
            }).catch(response=> {
                this.errors.push(response)
            });
            // 边栏
            var curMenu = null, zTree_Menu = null;
            var pageid = [];
            var pagepId = [];
            var pagename = [];
            var zNodes = [];
            var vueObj = this;
            var setting = {
                view: {
                    showLine: false,
                    showIcon: false,
                    selectedMulti: false,
                    dblClickExpand: false,
                    addDiyDom: addDiyDom
                },
                data: {
                    simpleData: {
                        enable: true
                    }
                },
                callback: {
                    beforeClick: beforeClick,
                    onClick: zTreeOnClick
                }
            };
            $.ajax({
                async: false,
                cache: false,
                type: 'get',
                dataType: 'json',
                url: "http://192.168.0.106:8080/makerCourse/makerCourseInfo",
                data: {
                    courseId: this.courseId
                },
                error: function () {
                    alert('请求失败');
                },
                success: function (data) {
                    var response = data.makerCourseChapterList;
                    for (var i = 0; i < response.length; i++) {
                        pageid = (response[i].id);
                        pagepId = (response[i].parentId);
                        pagename = (response[i].chapterName);
                        zNodes.push({
                            id: pageid,
                            pId: pagepId,
                            name: pagename,
                            resourceType: response[i].resourceType,
                            chapterResource: response[i].chapterResource,
                            open: false
                        })
                    }
                    ;
                    // zNodes =response;
                    //console.log(zNodes);
                }
            });
            function zTreeOnClick(event, treeId, treeNode) {
                //console.log(zTree_Menu.getNodeByTId(treeNode.tId).chapterResource + ", " + zTree_Menu.getNodeByTId(treeNode.tId).resourceType)
                if (zTree_Menu.getNodeByTId(treeNode.tId).resourceType == 1) {
                    $('.default').hide();
                    $('.myvideo').show();
                    $('.myvideo').attr('src', vueObj.fileURL + zTree_Menu.getNodeByTId(treeNode.tId).chapterResource)
                } else {
                    $('.default').show()
                    $('.default').attr('src', vueObj.fileURL + zTree_Menu.getNodeByTId(treeNode.tId).chapterResource)
                    $('.myvideo').hide();
                }

            };
            function addDiyDom(treeId, treeNode) {
                var spaceWidth = 5;
                var switchObj = $("#" + treeNode.tId + "_switch"),
                        icoObj = $("#" + treeNode.tId + "_ico");
                switchObj.remove();
                icoObj.before(switchObj);

                if (treeNode.level > 1) {
                    var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level) + "px'></span>";
                    switchObj.before(spaceStr);
                }
            }

            function beforeClick(treeId, treeNode) {
                if (treeNode.level == 0) {
                    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                    zTree.expandNode(treeNode);
                    return false;
                }
                return true;
            }

            $(document).ready(function () {
                var treeObj = $("#treeDemo");
                $.fn.zTree.init(treeObj, setting, zNodes);
                zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo");
                //curMenu = zTree_Menu.getNodes()[0].children[0].children[0];
                zTree_Menu.selectNode(curMenu);

                treeObj.hover(function () {
                    if (!treeObj.hasClass("showIcon")) {
                        treeObj.addClass("showIcon");
                    }
                }, function () {
                    treeObj.removeClass("showIcon");
                });
            });

        },
        updated: function () {

        },
        mounted: function () {
            // this.refresh();
            // 展示加载
            AXIOS.get('makerCourse/makerCourseInfo', {
                params: {
                    courseId: this.courseId
                }
            }).then(response=> {
                this.makercourse = response.data.makerCourseDTO
            }).catch(response => {
                this.errors.push(response)
            });

        }

    }
</script>

<style scoped>

    .workimg {
        height: 220px !important;
        width: 290px !important;
    }

    .center-title i {
        margin-left: 15px;
    }

    .content-box {
        overflow: hidden;
    }

    /*content头部样式*/
    .centent-title {
        background-color: #EEEEEE;
        height: 120px;
        border-bottom: solid #ffca58 5px
    }

    .centent-title h1 {
        text-align: center;
        padding-top: 15px;
    }

    .centent-title h5 {
        text-align: center;
        font-weight: 500;
    }

    .centent-title-right {
        float: right;
        margin-top: -60px;
        margin-right: 20px;
    }

    .am-btn-primary {
        border-radius: 8px;
    }

    .content-title-hand {
        margin-top: 30px;
        height: 350px;
        margin-bottom: 25px;
    }

    .content-title-hand-left {
        float: left;
        width: 55%;
        text-align: center;
        height: 90%;

        margin: 15px;
        border: solid 1px;
    }

    .content-title-hand-left img {
        height: 100%;
        width: 100%;
    }

    .content-title-hand-right h5 {
        color: #2f8bb4;
    }

    .content-box-left {
        height: 800px;
        width: 50%;
        float: left;
    }

    .content-box-left-title {

        height: 60px;
        width: 200PX;
        background-color: #EBAD02;
        padding-left: 15px;
        padding-top: 11px;
        margin-left: 13px;
        font-size: 24px;
    }

    .content-box-left-title img {
        padding-right: 15px;
    }

    .content-box-body {
        height: 744px;
        border: solid #555 1px;
        margin-left: 13px;
    }

    .content-box-right-body {
        height: 744px;
        border: solid #555 1px;
        margin-left: 13px;
    }

    /*三级联动*/

    .content-box-right {
        width: 44%;
        float: left;
        margin-left: 5%;

    }

    .am-thumbnail {
        margin-bottom: 0px;
    }

    .q_liulan {
        padding-left: 0;
    }

    /*评价*/
    .comment-list {
        padding-left: 0;
        overflow: hidden;
        float: left;
        margin-left: 17px;
        margin-top: 60px;
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
