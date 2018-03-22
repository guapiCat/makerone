<template>
    <div class="hello compon_center">
        <div class="am-g">

            <div style="margin-left: 20px;" v-if="allMsg.length==0">快去创建你的团队吧(*^▽^*)</div>

            <div v-for="item in allMsg" class="team" style="padding-top: 2%;padding-bottom: 2%; ">
                <div class="am-g">
                    <div class="am-u-sm-12" style="margin-left: 1%;">
                        <!--<div>-->
                        <span style="float: left;margin-top: 7px;margin-right: 2%;font-weight: bold">{{item.teamName}}</span>
                        <!--</div>-->
                        <!--<div>-->
                        <hr style="float: left;border-top: 3px solid #E8E8E8;width: 83%;"/>
                        <!--</div>-->
                    </div>
                </div>
                <div class="am-g">
                    <div class="am-u-sm-3" style="padding-top: 1%;padding-left: 4%;">
                        <img :src="fileURL+item.teamLogo"
                             style="border: 1px solid #000000;width: 200px;height: 200px;margin-top: 15px;"/>
                    </div>
                    <div class="am-u-sm-9" style="padding-top: 1%;padding-right: 10%;padding-left: 1%;">
                        <div style="width: 100%;padding-left: 2%;padding-top: 1%;">
                            <span>{{item.teamName}}</span><br/>
                            <span>创建时间&nbsp;:&nbsp;<span>{{item.createTime}}</span></span><br/>
                            <span>需要人数&nbsp;:&nbsp;<span>{{item.maxNum}}</span></span><br/>
                            <span>当前人数&nbsp;:&nbsp;<span>{{item.teamNum}}</span></span><br/>
                            <span>发起学校&nbsp;:&nbsp;<span>{{item.schoolName}}</span></span><br/>
                            <!--<span>人员需求&nbsp;:&nbsp;<p style="word-wrap: break-word;display: inline">啊实打实大声大声打我大是大非热话题也会让更多购房人的特特瑞特日光灯管凤尾菇</p></span><br/>-->
                            <span>团队介绍&nbsp;:&nbsp;<p style="word-wrap: break-word;display: inline">
                                {{item.teamIntro}}</p></span>
                        </div>
                        <div style="margin-top: 5%;">
                            <router-link :to="{name: 'userTemCreDetail',params: {teamId: item.id}}" class="am-btn am-btn-primary"
                               style="border-radius: 7px;width: 130px;float: right">查看团队详情</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <ul v-if="allMsg.length>0" class="am-pagination" style="margin-left: 700px;float: right;margin-right: 30px;">
                <li v-on:click="prevClick"><span class="adPointer">&laquo;</span></li>
                <!--<li class="am-active"><a>1</a></li>-->
                <!--<li><a>2</a></li>-->
                <!--<li><a>3</a></li>-->
                <!--<li><a>4</a></li>-->
                <!--<li><a>5</a></li>-->
                <li v-on:click="goClickPage(item)" v-bind:class="{'am-active':clickPage==item}" v-for="item in allPage"><span class="adPointer" href="">{{item}}</span></li>
                <li v-on:click="nextClick"><span class="adPointer">&raquo;</span></li>
            </ul>
        </div>
    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'

    export default {
        name: 'hello',
        props: {
            fileURL: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                //fileURL: "http://192.168.0.103:9000/",
                allMsg: "",
                maxPage:1,//最大页数
                nowPage:1,//当前页
                allPage:[],//总页数，，点击哪一页
                clickPage:1
            }
        },
        methods:{
            //分页的上一页下一页点击事件start
            prevClick:function(){
                if(this.clickPage>1){
                    this.clickPage--;
                }
                this.getAllMsg(this.clickPage,8);
            },
            nextClick:function(){
                if(this.clickPage<this.maxPage){
                    this.clickPage++;
                }
                this.getAllMsg(this.clickPage,8);
            },
            //点击页码重新挂载数据更新页面
            goClickPage:function(item){
                this.clickPage=item;
                //console.log("item为："+item);
                this.getAllMsg(this.clickPage,8);
            },
            //分页点击事件end
            getAllMsg:function(pageNum,pageSize){
                var params = new URLSearchParams();
                AXIOS.get('user/createTeam', {
                    params: {
                        "pageNum": pageNum,
                        "pageSize": pageSize
                    }
                }).then(response => {
                    //console.log(response);
                    this.allMsg = response.data.list;
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
            }
        },
        created: function () {
            this.getAllMsg(this.clickPage,8);
        }
    }


</script>

<style scoped>
    /*改动的样式-yzh*/

    /*改动样式结束*/
    i {
        font-style: normal;
    }

    .header .logo img {
        height: 50px !important;

    }

    .am-nav > li > a:hover, .am-nav > li > a:focus {
        outline: none;
    }

    .am-nav-justify > li {
        width: 150px;
    }

    .am-slider .am-slides img {
        height: 400px;
    }

    .section--header span {
        color: #3FA6E7;
    }

    .section--header img {
        height: 50px;
        margin-left: -145px
    }

    .section--header span {
        display: block;
        margin-left: 60px;
    }

    .am-thumbnails > li {
        padding: 0 3rem 1rem .5rem;
    }

    .login_table tr {
        width: 100%;
        display: block;
        margin: 10px;
    }

    .login_table tr td {
        text-align: center;
        width: 915px;
    }

    login_table a {
        font-size: 10px;
    }

    .am-form input[type="password"] {
        padding: 0.9em;
    }

    table tr {
        display: block;
        margin-bottom: 30px;
    }

    td {
        padding-right: 55px;
    }

    #select_page a {
        font-size: 20px;
        color: #000;
        cursor: pointer;
    }

    #select_page img {
        margin-bottom: 9px;
        margin-right: 5px;
        width: 20%;
        height: 20%
    }

    #select_page div {
        float: left;
        width: 140px;
        text-align: center;
    }

    .am-nav > li {
        height: 55px;
    }

    #type_bar span {
        color: #a5a5a4;
    }

    #type_bar a {
        color: #a5a5a4;
    }

    #type_bar a:hover {
        color: #22a2d4;
    }

    #status_bar a {
        color: #a5a5a4;
    }

    #status_bar a:hover {
        color: #22a2d4;
    }

    .left-img img {
        height: 260px;
        width: 500px;
        margin-top: 10px;
        margin-left: 5%;
        border: 1px solid #000000;
    }
</style>