<template>
    <div>
        <!--发起社团-->
        <div class="am-tabs" data-am-tabs style="width: 100%;">
            <div class="am-tabs-bd" style="border: 0px;width: 100%;height: 200px; background: #EEEEEE; ">
                <div class="am-tab-panel am-active" id="tab1">
                    <div style="width: 90%;text-align: right;margin-top: 10px;">
                        <a v-on:click="goCreTeam" class="am-btn am-btn-primary" style="border-radius: 10px;">发起团队</a>
                    </div>
                    <div style="text-align: center;margin-top: 1%;padding-left: 4%;">
                        <hr style="width:80%;border-top: 1px solid #ffffff;margin: 0 auto">
                    </div>
                    <div class="clear"></div>
                    <div class="classify" style="margin-top: 2%;float:right;width:86%;">
                        <span style="float: left;margin-right: 2%;">分类:</span>

                        <div id="classify_content" style="float: left">
                            <a v-on:click="showGroup" :class="controlTitle?'am-btn am-btn-default':'am-btn am-btn-primary'">创客团队</a>
                            <a v-on:click="showClub" :class="controlTitle?'am-btn am-btn-primary':'am-btn am-btn-default'">创客社团</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--内容-->
        <div class="workshow" style="width: 70%;margin: 80px auto;text-align: center">
            <ul v-bind:style="{display:controlShow?'block':'none'}" class="am-avg-sm-2 am-avg-md-2 am-avg-lg-2 am-thumbnails">
                <li v-for="item in clubMsg"
                    style="width: 47%;margin-right: 1%;margin-bottom: 4%;">
                    <p class="q_coverName" style="background: #00a0e9;height: 40px; border-top-left-radius:10px; border-top-right-radius:10px;text-align:center;font-size: 18px;padding-top: 5px;color: #ffffff">创客社团</p>
                    <div style="background-color: #D8D8D8; border-bottom-left-radius:10px; border-bottom-right-radius:10px;">
                        <div class="am-g">
                            <div class="am-u-sm-5" style="padding: 10px;">
                                <img :src="fileURL+item.makerCommunity.communityLogo" style="margin-left:40px;width:200px;height:200px"/>
                            </div>
                            <div class="am-u-sm-6" style="padding-left: 36px;padding-top:10px;text-align: left">
                                <span>{{item.makerCommunity.communityName}}</span><br/>
                                创建时间:<span>{{item.makerCommunity.createDate}}</span><br/>
                                需要人数:<span>{{item.maxNum}}</span><br/>
                                当前人数:<span>{{item.makerCommunityNum}}</span><br/>
                                <div class="commIntro">
                                    团队介绍:{{item.makerCommunity.communityIntro}}
                                </div>
                            </div>
                        </div>
                        <div style="margin-top: 1%;padding-bottom: 2%;">
                            <router-link :to="{name: 'communitydetail',params: {workId: item.makerCommunity.id}}"
                                         class="am-btn am-btn-primary" style="margin:0 40px;border-radius: 7px;">
                                查看社团详情
                            </router-link>
                            <router-link :to="{name: 'applyjoindetail',params: {clubJoinId: item.makerCommunity.id}}"
                                         class="am-btn am-btn-primary" style="margin:0 40px;border-radius: 7px;">申请加入
                            </router-link>
                        </div>
                    </div>
                </li>
                <!--分页-->
                <ul class="am-pagination" style="margin-left: 700px;float: right;margin-right: 30px;">
                    <li v-on:click="prevClick"><span class="adPointer">&laquo;</span></li>
                    <!--<li class="am-active"><a>1</a></li>-->
                    <!--<li><a>2</a></li>-->
                    <!--<li><a>3</a></li>-->
                    <!--<li><a>4</a></li>-->
                    <!--<li><a>5</a></li>-->
                    <li v-on:click="goClickPage(item)" v-bind:class="{'am-active':clickPage==item}" v-for="item in allPage"><span class="adPointer" href="">{{item}}</span></li>
                    <li v-on:click="nextClick"><span class="adPointer">&raquo;</span></li>
                </ul>
                <!--分页end-->
                <div v-if="clubMsg.length==0">目前没有数据o(╥﹏╥)o</div>
            </ul>
            <ul v-bind:style="{display:controlShow?'none':'block'}" class="am-avg-sm-2 am-avg-md-2 am-avg-lg-2 am-thumbnails">
                <li v-for="item in groupMsg"
                    style="width: 47%;margin-right: 1%;margin-bottom: 4%;">
                    <p class="q_coverName" style="background: #00a0e9;height: 40px; border-top-left-radius:10px; border-top-right-radius:10px;text-align:center;font-size: 18px;padding-top: 5px;color: #ffffff">创客团队</p>
                    <div style="background-color: #D8D8D8; border-bottom-left-radius:10px; border-bottom-right-radius:10px;">
                        <div class="am-g">
                            <div class="am-u-sm-5" style="padding: 10px;">
                                <img :src="fileURL+item.teamLogo" style="margin-left:40px;width:200px;height:200px"/>
                            </div>
                            <div class="am-u-sm-6" style="padding-left: 36px;padding-top:10px;text-align: left">
                                <span>{{item.teamName}}</span><br/>
                                创建时间:<span>{{item.createDate}}</span><br/>
                                <!--需要人数:<span></span><br/>-->
                                <!--当前人数:<span></span><br/>-->
                                <p class="commIntro">
                                    团队介绍:{{item.teamIntro}}
                                </p>
                            </div>
                        </div>
                        <div style="margin-top: 1%;padding-bottom: 2%;">
                            <router-link :to="{name: 'teamdetail',params: {teamId: item.id}}"
                                         class="am-btn am-btn-primary" style="margin:0 40px;border-radius: 7px;">
                                查看团队详情
                            </router-link>
                            <router-link  :to="{name: 'applyJoinTeam',params: {teamId: item.id}}"
                                         class="am-btn am-btn-primary" style="margin:0 40px;border-radius: 7px;">申请加入
                            </router-link>
                        </div>
                    </div>
                </li>
                <!--分页-->
                <ul class="am-pagination" style="margin-left: 700px;float: right;margin-right: 30px;">
                    <li v-on:click="prevClickTwo"><span class="adPointer">&laquo;</span></li>
                    <!--<li class="am-active"><a>1</a></li>-->
                    <!--<li><a>2</a></li>-->
                    <!--<li><a>3</a></li>-->
                    <!--<li><a>4</a></li>-->
                    <!--<li><a>5</a></li>-->
                    <li v-on:click="goClickPageTwo(item)" v-bind:class="{'am-active':clickPageTwo==item}" v-for="item in allPageTwo"><span class="adPointer" href="">{{item}}</span></li>
                    <li v-on:click="nextClickTwo"><span class="adPointer">&raquo;</span></li>
                </ul>
                <!--分页end-->
                <div v-if="groupMsg.length==0">目前没有数据o(╥﹏╥)o</div>
            </ul>
        </div>

    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'
    export default {
        name: "maker-community",
        props: {
            fileURL: {
                type: String,
                required: true
            }
        },
        data: function () {
            return {
                clubMsg: [],
                //fileURL:"http://192.168.0.103:9000/",
                groupMsg: [],
                controlShow:true,
                controlTitle:true,
                //社团的分页数据
                maxPage:1,
                nowPage:1,
                allPage:[],
                clickPage:1,
                //团队的分页数据
                maxPageTwo:1,
                nowPageTwo:1,
                allPageTwo:[],
                clickPageTwo:1
            }
        },
        methods: {
            //按钮事件
            showClub:function(){
                this.controlTitle=true;
                this.controlShow=true;
                this.clickClub(1,8);
            },
            showGroup:function(){
                this.controlTitle=false;
                this.controlShow=false;
                this.clickGroup(1,8);
            },
            //分页的上一页下一页点击事件
            prevClick:function(){
                if(this.clickPage>1){
                    this.clickPage--;
                }
                this.clickClub(this.clickPage,8);
            },
            nextClick:function(){
                if(this.clickPage<this.maxPage){
                    this.clickPage++;
                }
                this.clickClub(this.clickPage,8);
            },
            //分页点击事件start
            goClickPage:function(item){
                this.clickPage=item;
                //console.log("item为："+item);
                this.clickClub(this.clickPage,8);
            },
            //分页点击事件end
            //分页的上一页下一页点击事件
            prevClickTwo:function(){
                if(this.clickPageTwo>1){
                    this.clickPageTwo--;
                }
                this.clickGroup(this.clickPageTwo,8);
            },
            nextClickTwo:function(){
                if(this.clickPageTwo<this.maxPageTwo){
                    this.clickPageTwo++;
                }
                this.clickGroup(this.clickPageTwo,8);
            },
            //分页点击事件start
            goClickPageTwo:function(item){
                this.clickPageTwo=item;
                //console.log("item为："+item);
                this.clickGroup(this.clickPageTwo,8);
            },
            //分页点击事件end

            goCreTeam:function(){
                this.$router.push({ path: '/user/temGoCre' });
            },
            clickClub: function (pageNum,pageSize) {
                //this.controlTitle=true;
                //this.controlShow=true;
                var params = new URLSearchParams();
                AXIOS.get('community/MakerCommunityShow', {
                    params: {
                        "pageNum":pageNum,
                        "pageSize":pageSize
                    }
                }).then(response => {
                    //console.log(response);
                    this.clubMsg = response.data.list;
                    //准备分页数据开始start
                    this.nowPage=response.data.pageNum;
                    this.maxPage=response.data.pages;
                    this.allPage=[];
                    if(this.nowPage-2>0){
                        this.allPage.push(this.nowPage-2);
                    }
                    if(this.nowPage-1>0){
                        this.allPage.push(this.nowPage-1);
                    }
                    this.allPage.push(this.nowPage);
                    if(this.nowPage<this.maxPage){
                        this.allPage.push(this.nowPage+1);
                    }
                    if(this.nowPage<this.maxPage-1){
                        this.allPage.push(this.nowPage+2);
                    }
                    //准备分页数据结束end
                }).catch(e => {
                    this.errors.push(e)
                });
            },
            clickGroup: function (pageNum,pageSize) {
                this.controlTitle=false;
                this.controlShow=false;
                var params = new URLSearchParams();
                AXIOS.get('team/MakerTeamShow', {
                    params: {
                        pageNum:pageNum,
                        pageSize:pageSize
                    }
                }).then(response => {
                    //console.log(response);
                    this.groupMsg = response.data.list;
                    //准备分页数据开始start
                    this.nowPageTwo=response.data.pageNum;
                    this.maxPageTwo=response.data.pages;
                    this.allPageTwo=[];
                    if(this.nowPageTwo-2>0){
                        this.allPageTwo.push(this.nowPageTwo-2);
                    }
                    if(this.nowPageTwo-1>0){
                        this.allPageTwo.push(this.nowPageTwo-1);
                    }
                    this.allPageTwo.push(this.nowPageTwo);
                    if(this.nowPageTwo<this.maxPageTwo){
                        this.allPageTwo.push(this.nowPageTwo+1);
                    }
                    if(this.nowPageTwo<this.maxPageTwo-1){
                        this.allPageTwo.push(this.nowPageTwo+2);
                    }
                    //准备分页数据结束end
                }).catch(e => {
                    this.errors.push(e)
                });
            }
        },
        created: function () {
            this.clickGroup(this.clickPageTwo,8);
            this.clickClub(this.clickPage,8);
        }
    }
</script>

<style scoped>
    .commIntro{
        width: 160px;
        height: 150px;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:normal;
    }
    .adPointer{
        cursor: pointer;
    }
</style>
