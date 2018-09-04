<template>
    <div>
        <div class="work-title" style="width: 100%;">

            <!--新按钮start-->
            <div class="newClass">
                <span v-bind:class="{clickClass:index== classLight}" @click="byclaass(index)" v-for="item,index in classtitle" class="classDetail">{{item[0]}}</span>
                <!--<span class="classDetail">八年级</span>-->
                <!--<span class="classDetail">九年级</span>-->
            </div>
            <div class="newClassify">
                <span v-bind:class="{clickClassify:index==classify}" @click="byClassify(item.value)" v-for="item,index in titletype" class="classifyDetail">{{item.desc}}</span>
                <!--<span class="classifyDetail">3D打印</span>-->
                <!--<span class="classifyDetail">search编程</span>-->
                <!--<span class="classifyDetail">机器人</span>-->
                <div class="litClassify">
                    <span v-bind:class="{clickTree:index==sort}" @click="bysort(index)" v-for="item,index in sorttitle" class="litDetail">{{item}}</span>
                    <!--<span class="litDetail">最热</span>-->
                </div>
                <span class="adDown">|</span>
            </div>
            <!--新按钮end-->

        </div>
        <div class="workshow" style="width: 1200px;margin: 20px auto;">
            <div v-for="item in courseslist ">
                <div class="am-g">
                    <div class="am-u-sm-5" style="margin-left: 0%;">
                        <router-link :to="{name: 'makerCourse',params:{ workId: item.id,typeId:item.type}}" style="margin-bottom: 4%;display: block;">
                            <img :src="fileURL+item.courseCoverImage"
                                 style="width: 200px;height: 200px;border: 1px solid #000000;display: inline-block;margin-left: 150px"/>
                        </router-link>
                        <div style="text-align: right;padding-right: 76px">
                            <span>点赞数&nbsp;:&nbsp;</span><img src="../../../static/img/icon_upvote.png" width="4%"
                                                              style="margin-top: -2%;"/><span
                                style="margin-right:10%;margin-left: 2%;">{{item.courseThumbsUpNum}}</span>
                            <span>浏览数&nbsp;:&nbsp;</span><img src="../../../static/img/browse.png"
                                                              style="margin-top: -1%;"/><span style="margin-left: 2%">{{item.courseScanNum}}</span>
                        </div>
                    </div>
                    <div class="am-u-sm-6" style="margin-left: -1%;">
                        <div style="margin-bottom: 2%;">
                            <span class="course_span" style="color: #5fb7cf;">课程信息</span>
                        </div>
                        <div style="padding-left:3%;">
                            <span class="course_span">课程名称&nbsp;:&nbsp;<span>{{item.courseName}}</span></span>
                            <span class="course_span">开课时间&nbsp;  :&nbsp;<span>{{item.createDate}}</span></span>
                            <span class="course_span">浏览人数&nbsp;:&nbsp;<span>{{item.courseScanNum}}</span>人</span>
                    <span class="course_span">课程简介&nbsp;:&nbsp;
						 <span>{{item.courseIntro}}</span>
					 </span>
                        </div>
                        <div style="text-align: right;padding-top: 5%;padding-right: 3%;">
                            <router-link :to="{name: 'makerCourse',params:{ workId: item.id,typeId:item.type}}"
                                         class="am-btn am-btn-primary" style="border-radius: 7px;width: 135px;">查看详情
                            </router-link>
                        </div>
                    </div>
                </div>


                <div style="margin-top: 3%;margin-bottom: 3%;">
                    <hr style="border-top:3px solid #eeeeee;"/>
                </div>


            </div>
            <ul v-if="courseslist.length>0" class="am-pagination" style="margin-left: 850px;">
                <li v-on:click="prevClick"><span class="adPointer">&laquo;</span></li>
                <!--<li class="am-active"><a>1</a></li>-->
                <!--<li><a>2</a></li>-->
                <!--<li><a>3</a></li>-->
                <!--<li><a>4</a></li>-->
                <!--<li><a>5</a></li>-->
                <li v-on:click="goClickPage(item)" v-bind:class="{'am-active':clickPage==item}" v-for="item in allPage">
                    <span class="adPointer" href="">{{item}}</span></li>
                <li v-on:click="nextClick"><span class="adPointer">&raquo;</span></li>
            </ul>

            <div class="nodata" v-show="hiddendata">
            </div>

            <div>

            </div>

        </div>
    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'
    // import bus from '../../assets/eventBus';
    export default {
        name: "allcourse",
        props: {
            fileURL: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                search: '',
                hiddendata: false,
                courseslist: [],
                titletype: [],
                sorttitle: [
                    "最新",
                    "最热"
                ],
                classtitle: [

                ],
                classify: 0,
                sort: 0,
                classes: 0,
                classLight:0,//年级样式点亮
                // 分页
                maxPage: 1,//最大页数
                nowPage: 1,//当前页
                allPage: [],//总页数，，点击哪一页
                clickPage: 1
            }

        },
        created: function () {
            this.searchval;
            if (this.search == "") {
                this.reqAXIOS(7, 0, 0, this.clickPage, 8);
            } else {
                this.searchAXIOS(7, 0, 0, this.clickPage, 8, this.search);
            }
            AXIOS.get('common/getGlobalType', {}).then(response=> {
                this.titletype = response.data;
                //this.sort = this.titletype[0].value;
                this.classify = this.titletype[0].value;//初始化类型
            }).catch(response=> {
                this.errors.push(response);
            });
            AXIOS.get('common/getGrade', {}).then(response=> {
                //console.log(response.data);
                for(var i=0;i<response.data.length;i++){
                    this.classtitle.push([response.data[i].desc,response.data[i].value]);
                }
                this.classes=this.classtitle[0][1];//初始化年级
                //console.log("type test:"+this.classtitle[0][1]);
            }).catch(response=> {
                this.errors.push(response);
            });
        },
        methods: {
            //跳转start

            //跳转end
            searchval: function () {
                var searchval = document.getElementById("search").value;
                return this.search = searchval
            },
            reqAXIOS: function (courseGrade, type, sortType, pageNum, pageSize) {
                AXIOS.get('makerCourse/makerCourseShow', {
                    params: {
                        courseGrade: courseGrade,
                        type: type,
                        sortType: sortType,
                        pageNum: pageNum,
                        pageSize: pageSize
                    }
                }).then(response=> {
                    this.courseslist = response.data.list;
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
                    if (this.courseslist.length < 1) {
                        this.hiddendata = true;
                    } else {
                        this.hiddendata = false
                    }

                }).catch(response=> {
                    this.errors.push(response);
                });

            },
            prevClick: function () {
                if (this.clickPage > 1) {
                    this.clickPage--;
                    if (this.search == '') {
                        this.reqAXIOS(this.classes, this.classify, this.sort, this.clickPage, 8);
                    } else {
                        this.searchAxios(this.classes, this.classify, this.sort, this.clickPage, 8, this.search)
                    }
                }
            },
            nextClick: function () {
                if (this.clickPage < this.maxPage) {
                    this.clickPage++;
                    if (this.search == '') {
                        this.reqAXIOS(this.classes, this.classify, this.sort, this.clickPage, 8);
                    } else {
                        this.searchAxios(this.classes, this.classify, this.sort, this.clickPage, 8, this.search)
                    }
                }
            },
            //点击页码重新挂载数据更新页面
            goClickPage: function (item) {
                this.clickPage = item;
                //console.log("item为：" + item);
                if (this.search == '') {
                    this.reqAXIOS(this.classes, this.classify, this.sort, this.clickPage, 8);
                } else {
                    this.searchAxios(this.classes, this.classify, this.sort, this.clickPage, 8, this.search)
                }
            },
            //分页点击事件end
            searchAXIOS: function (courseGrade, type, sortType, pageNum, pageSize, courseName) {
                AXIOS.get('makerCourse/makerCourseShow', {
                    params: {
                        courseGrade: courseGrade,
                        type: type,
                        sortType: sortType,
                        pageNum: pageNum,
                        pageSize: pageSize,
                        courseName: courseName
                    }
                }).then(response=> {
                    this.courseslist = response.data.list;
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
                    if (this.courseslist.length < 1) {
                        this.hiddendata = true;
                    } else {
                        this.hiddendata = false
                    }
                    if (this.courseslist.length <= 0) {
                        this.hiddendata = true
                    } else {
                        this.hiddendata = false
                    }
                }).catch(response=> {
                    this.errors.push(response);
                });

            },

            byClassify: function (type) {
                this.classify = type;
                this.reqAXIOS(this.classes, this.classify, this.sort, this.clickPage, 8)
            },
            byclaass: function (index) {
                this.classLight=index;
                //console.log("年级的index："+index);
                //console.log("classes的值为："+this.classtitle[index][1]);
                this.classes = this.classtitle[index][1];
                this.reqAXIOS(this.classes, this.classify, this.sort, this.clickPage, 8);
//          console.log(this.courseslist)

            },
            bysort: function (index) {
                this.sort = index;
                this.reqAXIOS(this.classes, this.classify, this.sort, this.clickPage, 8)
            }
        }
    }
</script>

<style scoped>
    /*点击样式atart*/
    .adDown{
        float: right;
        margin: 30px -53px;
    }
    .clickClass{
        border-bottom: 5px solid #0A77BD;
    }
    .clickClassify{
        background: #1177C0;
        color: white;
        border-radius: 20px;
    }
    .clickTree{
        color: #2878B7;
        transition: all .3s linear;
    }
    /*点击样式end*/
    .litClassify{
        float: right;
    }
    .litDetail{
        display: inline-block;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        margin: 20px 10px;
    }
    .newClassify{
        width: 1200px;
        margin: 0 auto;
    }
    .classifyDetail{
        display: inline-block;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin: 30px 30px 30px -5px;
        border-radius: 20px;
        cursor: pointer;
        transition: all .3s linear;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
    }
    .classifyDetail:hover{
        background: #1177C0;
        color: white;
        border-radius: 20px;
    }
    .newClass{
        width: 1200px;
        box-shadow: 0 3px 1px #A8C7DF;
        margin: 0 auto;
    }
    .classDetail{
        display: inline-block;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        /*border-bottom: 4px solid black;*/
        margin-right: 50px;
        margin-left: 10px;
        color:#427EAC;
        cursor: pointer;
        transition: all .5s linear;
    }
    .lighton {
        background: #FFCA57 !important;
    }
    .adPointer{
        cursor: pointer;
    }
    .nodata {
        width: 99%;
        height: 400px;
        margin: 0 auto;
        background: url(../../../static/img/nodata.png) top center no-repeat;
    }

    .course_span {
        padding-bottom: 6px;
        display: block;
    }

    .classify-active {
        background: #FFCA57 !important;
    }

    .am-tabs {
        color: #90ccfa;
    }

    .am-nav-tabs {
        border-bottom: 0px;
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

    .classifylist ul {
        overflow: hidden;
        padding-bottom: 0px;
    }

    .classifylist li {
        list-style: none;
        float: left;
        border: solid 1px #FFF;
        height: 40px;
        width: 9%;
        text-align: center;
        color: #333;
        margin: 6px 4px;
        padding: 5px 0;
        background: #FFFFFF;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
        cursor: pointer;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
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
</style>
