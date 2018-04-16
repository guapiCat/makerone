<template>
    <div>
        <div class="workshow" style="width: 1200px;margin: 50px auto;">
            <div class="center-title" style="margin-bottom: 20px; color: #969696;">
                <span> <img src="../../../static/img/icon_address.png" alt=""/><i>{{schoolESB}}-创客课程</i></span>
            </div>
            <div class="center-box" style="border: solid 3px #f3f3f3 ;">
                <div class="centent-title">
                    <h1>{{makercourse.courseName}}</h1>
                    <h5>分类:<span>{{makercourse.typeName}}</span></h5>

                    <div class="centent-title-right">
                        <img v-if="voteStatus==1" src="../../../static/img/unvote.png" v-on:click="vote"
                             style="height: 30px; width: 40px; margin-right:20px;cursor: pointer;"/>
                        <img v-if="voteStatus==0" v-on:click="outVote" src="../../../static/img/upvote.png" alt=""
                             style="cursor:pointer;height: 30px; width: 40px; margin-right:20px ;"/>
                        <button v-on:click="addColl" type="button" class="am-btn am-btn-primary">我要收藏</button>
                    </div>
                </div>
                <div class="content-title-hand">
                    <div class="content-title-hand-left">
                        <img v-if="nowSourseType==2" :src="fileURL+makercourse.courseCoverImage" class="default"/>
                        <img v-if="nowSourseType==0" :src="fileURL+nowClickSourse" class="default"/>
                        <video v-if="nowSourseType==1" :src="fileURL+nowClickSourse" class="myvideo" controls="controls"
                               style="width: 100%;height: 100%;"></video>
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
                                <div id="treeDemo">


                                    <ul style="margin: 0px;width: 565px;" class="am-list admin-sidebar-list" id="collapase-nav-1">

                                        <li v-for="bigItem,index in handleCourse" class="am-panel">
                                            <a style="background-color: #EEEEEE;" :data-am-collapse="`{parent: '#collapase-nav-1', target: '#user-nav`+index+`'}`">
                                                {{bigItem[1]}}<i class="am-icon-angle-right am-fr am-margin-right"></i>
                                            </a>
                                            <ul style="width: 520px;margin: 0px;" class="am-list am-collapse admin-sidebar-sub" :id="`user-nav`+index">
                                                <li v-for="litItem in bigItem[4]">
                                                    <a v-on:click="choseResouse(litItem[2],litItem[3])">
                                                        <span style="display: inline-block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;">{{litItem[1]}}</span>
                                                        <span v-if="litItem[4]" style="display: inline-block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:335px;"> : {{litItem[4]}}</span>
                                                        <a style="margin-right: 15px;" href="javascript:;" download="" :href=downloadURL+litItem[2] class="am-icon-cloud-download am-fr"></a>
                                                    </a>

                                                </li>
                                                <!--<li><a href="#/userList/0"></i> 人员列表 </a></li>-->
                                            </ul>
                                        </li>

                                        <!--<li class="am-panel">-->
                                            <!--<a style="background-color: #EEEEEE;" data-am-collapse="{parent: '#collapase-nav-1', target: '#company-nav'}">-->
                                                <!--单位（部门）管理 <i class="am-icon-angle-right am-fr am-margin-right"></i>-->
                                            <!--</a>-->
                                            <!--<ul style="width: 520px;" class="am-list am-collapse admin-sidebar-sub" id="company-nav">-->
                                                <!--<li><a href="#/companyAdd">添加单位（部门） </a></li>-->
                                                <!--<li><a href="#/companyList/0">单位（部门）列表 </a></li>-->
                                            <!--</ul>-->
                                        <!--</li>-->

                                        <!--<li class="am-panel">-->
                                            <!--<a style="background-color: #EEEEEE;" data-am-collapse="{parent: '#collapase-nav-1', target: '#role-nav'}">-->
                                                <!--角色管理 <i class="am-icon-angle-right am-fr am-margin-right"></i>-->
                                            <!--</a>-->
                                            <!--<ul style="width: 520px;" class="am-list am-collapse admin-sidebar-sub" id="role-nav">-->
                                                <!--<li><a href="#/roleAdd">添加角色 </a></li>-->
                                                <!--<li><a href="#/roleList/0">角色列表 </a></li>-->
                                            <!--</ul>-->
                                        <!--</li>-->
                                    </ul>


                                </div>
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
    import {AXIOS} from "../../http-common"
    export default {
        name: "maker-course",
        props: {
            fileURL: {
                type: String,
                required: true
            },
            downloadURL: {
                type: String,
                required: true
            },
            schoolESB: {
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
                voteStatus: "",
                //fileURL:"http://192.168.0.103:9000/",
                //课程目录展示数据
                courseCatalog:"",
                handleCourse:[],
                nowSourseType:2,
                nowClickSourse:""
            }
        },
        methods: {
            //下载资源
            //downSource:function(sourseUrl){
            //    var downUrl=sourseUrl;
            //    console.log(downUrl);
            //    var params = new URLSearchParams();
            //    AXIOS.get('common/download', {
            //        params: {
            //            url:downUrl
            //        }
            //    }).then(response => {
            //        //alert(response.data);
            //    }).catch(e => {
            //        this.errors.push(e);
            //    });
            //},
            //切换视频资源
            choseResouse:function(sourse,type){
                console.log(type,sourse);
                this.nowSourseType=type;
                this.nowClickSourse=sourse;
            },
            //收藏start
            addColl: function () {
                var params = new URLSearchParams();
                params.append("objectId", this.courseId);
                params.append("type", 0);
                AXIOS.post('common/joinFavorite', params).then(response => {
                    alert(response.data);
                }).catch(e => {
                    this.errors.push(e)
                });
            },
            //收藏end
            //点赞start
            vote: function () {
                this.$emit('voteReq', {voteObjId: this.courseId, voteObjType: 3, voteStatus: 1});
                this.voteStatus = 0;
            },
            outVote: function () {
                this.$emit('voteReq', {voteObjId: this.courseId, voteObjType: 3, voteStatus: 0});
                this.voteStatus = 1;
            },
            //点赞end
            playResource: function (type, url) {
                //console.log(type + url);
            }
        },
        created: function () {
            var params = new URLSearchParams();
            //访问记录
            AXIOS.get('common/view', {
                params:{
                    voteObjId:this.courseId,
                    voteObjType:3
                }
            }).then(response => {
                //console.log("这是访问记录返回的消息："+response.data);
            }).catch(e => {
                this.errors.push(e)
            });
            //得到课程目录信息
            AXIOS.get('makerCourse/makerCourseInfo', {
                params: {
                    courseId:this.courseId
                }
            }).then(response => {
                //console.log("即将处理的目录信息："+response.data);
                this.courseCatalog=response.data.makerCourseChapterList;
                //保存章节内容
                for(var i=0;i<this.courseCatalog.length;i++){
                    if(this.courseCatalog[i].parentId==null){
                        //章节信息【章节id，章节名字，章节资源，章节资源类型，【小节】,章节介绍】
                        this.handleCourse.push([this.courseCatalog[i].id,this.courseCatalog[i].chapterName,this.courseCatalog[i].chapterResource,this.courseCatalog[i].resourceType,[],this.courseCatalog[i].chapterIntro])
                    }
                }
                //保存章节的小节内容
                for(var k=0;k<this.courseCatalog.length;k++){
                    for(var j=0;j<this.handleCourse.length;j++){
                        if(this.courseCatalog[k].parentId==this.handleCourse[j][0]){
                            this.handleCourse[j][4].push([this.courseCatalog[k].id,this.courseCatalog[k].chapterName,this.courseCatalog[k].chapterResource,this.courseCatalog[k].resourceType,this.courseCatalog[k].chapterIntro]);
                        }
                    }
                }
            }).catch(e => {
                this.errors.push(e);
            });
            //获取点赞状态
            AXIOS.get('common/upStatus', {
                params: {
                    objectId: this.courseId
                }
            }).then(response => {
                //console.log("这是访问点赞状态返回的消息："+response.data);
                if (response.data == false) {
                    //没点赞就是1，点赞就是0。。点赞成功得到0，取消点赞成功得到-1
                    this.voteStatus = 1;
                } else if (response.data == true) {
                    this.voteStatus = 0;
                }
            }).catch(e => {
                this.errors.push(e)
            });
            // 相关作品
            AXIOS.get('makerCourse/relatedWorks', {
                params: {
                    type: this.typeId,
                    pageSize:4
                }
            }).then(response=> {
                this.relatedworks = response.data;
                //console.log(response)
            }).catch(response=> {
                this.errors.push(response)
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
    .zTreeDemoBackground{
        overflow: scroll;
        height: 750px;
    }
    #treeDemo{
        width: 550px;
    }
    /*amaze-ui修改课程目录start*/
    .am-panel>ul>li>a[data-v-97d1cc7c] {
        font-size: 14px;
        color: #44AED8;
        width: 565px;
    }
    .am-list {
        margin-bottom: 1.6rem;
        padding-left: 0px;
        box-sizing: border-box;
        width: 580px;
    }
    .am-list > li {
        position: relative;
        display: block;
        margin-bottom: -1px;
        background-color: white;
        border: 1px solid #dedede;
        border-width: 1px 0;
    }
    .am-list > li > a {
        display: block;
        padding: 1rem 0;
        padding-left: 30px;
        color: black;
    }
    .am-panel>ul>li>a{
        font-size: 14px;
        color: #44AED8;
    }
    /*amaze-ui修改课程目录end*/


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
