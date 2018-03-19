<template>
    <div>
        <div class="am-g">
            <div class="cousera" v-for="item in completeWork"
                 style="padding-top: 2%;border-bottom:5px solid #f0f0f0;padding-bottom: 2%; ">
                <div class="am-g" style="margin-left: 0px">
                    <div class="am-u-sm-6" style="padding-top: 1%;padding-left: 2%;">
                        <img class="cous-img" :src="fileURL+item.worksCoverImage"
                             style="border: 1px solid #000000;width: 300px;height: 300px;margin-left: 50px;"/>
                    </div>
                    <div class="am-u-sm-6" style="padding-top: 1%;padding-right: 10%;padding-left: 1%;">
                        <span style="font-size: 23px;color: #378695">作品信息</span><br/>

                        <div style="width: 100%;padding-left: 2%;padding-top: 1%;">
                            <span>作品名称:<span>{{item.worksName}}</span></span><br/>
                            <span>创建时间:<span>{{item.update}}</span></span><br/>
                            <span>作品当前状态:<span>{{item.status}}</span></span><br/>
              <span>作品简介:<p style="word-wrap: break-word;display: inline">
                  {{item.introduce}}
              </p></span>
                        </div>
                    </div>
                </div>
                <div class="am-g">
                    <div class="am-u-sm-6 am-u-sm-offset-6" style="margin-top: 2%;">
                        <a class="am-btn am-btn-primary" style="border-radius: 7px;width: 130px;"
                           @click="deleteworks(item.id)">移除作品</a>
                        <router-link :to="{name: 'workshowdetail',params: {workId: item.id}}"
                                     class="am-btn am-btn-primary"
                                     style="border-radius: 7px;width: 130px;float: right;margin-right: 17%;">查看详情
                        </router-link>
                    </div>
                </div>
            </div>
            <ul v-if="completeWork.length>0" class="am-pagination" style="margin-left: 700px;">
                <li v-on:click="prevClick"><span class="adPointer">&laquo;</span></li>
                <!--<li class="am-active"><a>1</a></li>-->
                <!--<li><a>2</a></li>-->
                <!--<li><a>3</a></li>-->
                <!--<li><a>4</a></li>-->
                <!--<li><a>5</a></li>-->
                <li v-on:click="goClickPage(item)" v-bind:class="{'am-active':clickPage==item}" v-for="item in allPage"><span class="adPointer" href="">{{item}}</span></li>
                <li v-on:click="nextClick"><span class="adPointer">&raquo;</span></li>
            </ul>
            <div  v-if="completeWork.length==0" style="padding-left: 50px;">快去添加一个作品吧(*^▽^*)</div>
        </div>
    </div>
</template>

<script type="es6">
    import {AXIOS} from "../../http-common";
    export default {
        name: "complete-work",
        props: {
            fileURL: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                completeWork: [],
                maxPage: 1,//最大页数
                nowPage: 1,//当前页
                allPage: [],//总页数，，点击哪一页
                clickPage: 1
            }
        },
        created: function () {
            this.getAllMsg(this.clickPage, 2);
        },
        methods: {
            //分页的上一页下一页点击事件start
            prevClick: function () {
                if (this.clickPage > 1) {
                    this.clickPage--;
                }
                this.getAllMsg(this.clickPage, 2);
            },
            nextClick: function () {
                if (this.clickPage < this.maxPage) {
                    this.clickPage++;
                }
                this.getAllMsg(this.clickPage, 2);
            },
            //点击页码重新挂载数据更新页面
            goClickPage: function (item) {
                this.clickPage = item;
                this.getAllMsg(this.clickPage, 2);
            },
            //分页点击事件end
            getAllMsg: function (pageNum, pageSize) {
                AXIOS.get('user/getFinishedWorks', {
                    params: {
                        "pageNum": pageNum,
                        "pageSize": pageSize
                    }
                }).then(response=> {
                    this.completeWork = response.data.list;
                    //准备分页数据开始start
                    this.nowPage = response.data.pageNum;
                    this.maxPage = response.data.pages;
                    this.allPage = [];
                    if (this.nowPage - 2 > 0) {
                        this.allPage.push(this.nowPage - 2);
                    }
                    if (this.nowPage - 1 > 0) {
                        this.allPage.push(this.nowPage - 1);
                    }
                    this.allPage.push(this.nowPage);
                    if (this.nowPage < this.maxPage) {
                        this.allPage.push(this.nowPage + 1);
                    }
                    if (this.nowPage < this.maxPage - 1) {
                        this.allPage.push(this.nowPage + 2);
                    }
                    //准备分页数据结束end
                }).catch(response=> {
                    this.errors.push(response)
                })
            },
            deleteworks(objectId){
                AXIOS.get('user/deleteWorks', {
                    params: {
                        workId: objectId
                    }
                }).then(response=> {
                    console.log(response.data);
                    window.location.reload();
                    alert('删除成功')
                })
            }
        }

    }
</script>

<style scoped>
    .adPointer{
        cursor: pointer;
    }
    .cous-img {
        height: 300px;
        width: 500px;
    }
</style>
