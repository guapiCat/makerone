<template>
    <div class="hello compon_center">
        <div class="am-g">

            <div v-for="item in coursera" class="cousera"
                 style="padding-top: 2%;border-bottom:5px solid #f0f0f0;padding-bottom: 2%; ">
                <div class="am-g" style="margin-left: 0px">
                    <div class="am-u-sm-6" style="padding-top: 1%;padding-left: 2%;">
                        <img class="cous-img" :src="fileURL+item.coverImage" style="border: 1px solid #000000"
                             width="100%;"/>
                    </div>
                    <div class="am-u-sm-6" style="padding-top: 1%;padding-right: 10%;padding-left: 1%;">
                        <span style="font-size: 23px;color: #378695">课程信息</span><br/>

                        <div style="width: 100%;padding-left: 2%;padding-top: 1%;">
                            <span>课程名称&nbsp;:&nbsp;<span>{{item.objectName}}</span></span><br/>
                            <span>开课时间&nbsp;:&nbsp;<span>{{item.createDate}}</span></span><br/>
                            <span>课程简介&nbsp;:&nbsp;<p style="word-wrap: break-word;display: inline">
                                {{item.introduce}}</p></span>
                        </div>
                    </div>
                </div>
                <div class="am-g">
                    <div class="am-u-sm-6 am-u-sm-offset-6" style="margin-top: 2%;">
                        <a class="am-btn am-btn-primary" style="border-radius: 7px;width: 130px;"
                           @click="delect(item.objectId)">移除收藏</a>
                        <router-link :to="{name: 'makerCourse',params:{ workId: item.objectId,typeId:item.objectType}}"
                                     class="am-btn am-btn-primary"
                                     style="border-radius: 7px;width: 130px;float: right;margin-right: 17%;">查看详情
                        </router-link>
                    </div>
                </div>
            </div>
            <ul v-if="coursera.length>0" class="am-pagination" style="margin-left: 700px;float: right;margin-right: 30px;">
                <li v-on:click="prevClick"><span class="adPointer">&laquo;</span></li>
                <!--<li class="am-active"><a>1</a></li>-->
                <!--<li><a>2</a></li>-->
                <!--<li><a>3</a></li>-->
                <!--<li><a>4</a></li>-->
                <!--<li><a>5</a></li>-->
                <li v-on:click="goClickPage(item)" v-bind:class="{'am-active':clickPage==item}" v-for="item in allPage"><span class="adPointer" href="">{{item}}</span></li>
                <li v-on:click="nextClick"><span class="adPointer">&raquo;</span></li>
            </ul>
            <div v-if="coursera.length==0" style="padding-left: 50px;">去收藏一个课程吧(*^▽^*)</div>
        </div>
    </div>
</template>

<script type="es6">
    import {AXIOS} from "../../http-common";
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
                coursera: [],
                maxPage:1,//最大页数
                nowPage:1,//当前页
                allPage:[],//总页数，，点击哪一页
                clickPage:1
            }
        },
        created:function(){
            this.getAllMsg(this.clickPage,8);
        },
        methods: {
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
                AXIOS.get('user/favoriteCourse', {
                    params: {
                        "pageNum": pageNum,
                        "pageSize": pageSize
                    }
                }).then(response=> {
                    this.coursera = response.data.list;
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
                }).catch(response=> {
                    this.errors.push(response)
                })
            },
            delect(objectId){
                AXIOS.get('user/deleteFavorite', {
                    params: {
                        objectId: objectId
                    }
                }).then(response=> {
                    //console.log(response.data);
                    window.location.reload();
                    alert('删除成功')
                })
            }
        }
    }


</script>

<style scoped>
    /*改动的样式-yzh*/
    .cous-img {
        height: 300px;
        width: 500px;
    }

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

    /*导航栏*/
    #x_nav ul li:nth-child(6) {
        border-right: 0;
        padding-right: 0;
    }

    .nav_img img {
        width: 160px;
        margin-top: 10px;
    }

    .nav-search img {
        margin-left: 19px;
        height: 22px;
    }

    .nav-search input {
        margin-left: 11px;
        background: #21252E;
    . . / . . / . . / border : #21252E;
        color: #FFFFFF;
    }

    #x_nav ul li {
        border-right: dotted 1.5px #fff;
        padding-right: 37px;
    }

    /*导航栏结束*/
</style>
