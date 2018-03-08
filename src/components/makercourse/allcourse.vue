<template>
    <div>
      <div class="work-title" style="background: #F3F3F3;">
        <div class="classify">
          <i> <img src="../../../static/img/icon_classify.png"/><span>班级</span></i>
        </div>
        <div class="classifylist" style="margin: 0 0 20px 0; padding-top: 20px;">
          <ul>
            <li  @click="byclaass(index)" v-for="item,index in classtitle" class="title" v-bind:class="{lighton:index== classes-1 }">{{item}}</li>
          </ul>
        </div>
        <div class="classify">
          <i> <img src="../../../static/img/icon_classify.png"/><span>分类</span></i>
        </div>
        <div class="classifylist">
          <ul>
            <li @click="byClassify(item.value)"  v-for="item,index in titletype" class="title" v-bind:class="{lighton:index==classify}">{{item.desc}}</li>
          </ul>
        </div>
        <div class="classify" style="margin-top: 20px;">
          <i> <img src="../../../static/img/icon_sort.png"/><span>排序</span></i>
        </div>
        <div class="classifylist" >
          <ul>
            <li @click="bysort(index)"  v-for="item,index in sorttitle" class=" title" v-bind:class="{lighton:index==sort}" >{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="workshow" style="width: 1200px;margin: 80px auto;">
        <div v-for="item in courseslist ">
          <div class="am-g">
            <div class="am-u-sm-5" style="margin-left: -2%;">
              <div style="margin-bottom: 4%;">
                <img :src="fileURL+item.courseCoverImage" width="140%" height="400px" style="border: 1px solid #000000"/>
              </div>
              <div style="text-align: right;">
                <span>点赞数&nbsp;:&nbsp;</span><img src="../../../static/img/icon_upvote.png" width="4%" style="margin-top: -2%;"/><span style="margin-right:10%;margin-left: 2%;">{{item.courseThumbsUpNum}}</span>
                <span>浏览数&nbsp;:&nbsp;</span><img src="../../../static/img/browse.png" style="margin-top: -1%;"/><span style="margin-left: 2%">{{item.courseScanNum}}</span>
              </div>
            </div>
            <div class="am-u-sm-5" style="margin-left: -1%;">
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
                   <router-link :to="{name: 'makerCourse',params:{ workId: item.id,typeId:item.type}}"  class="am-btn am-btn-primary" style="border-radius: 7px;width: 135px;">查看详情</router-link>
              </div>
            </div>
          </div>


          <div style="margin-top: 3%;margin-bottom: 3%;">
            <hr style="border-top:3px solid #eeeeee;"/>
          </div>
        </div>
        <div class="nodata" v-show="hiddendata">
        </div>

        <div>

        </div>

      </div>
    </div>
</template>

<script>
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
          return{
            search:'',
            hiddendata:false,
            courseslist:[],
            titletype:[],
            sorttitle:[
              "最新",
              "最热"
            ],
            classtitle:[
              "一年级",
              "二年级",
              "三年级",
              "四年级",
              "五年级",
              "六年级",
            ],
            classify: 0,
            sort: 0,
            classes:0
          }
      },
      mounted(){
        this.searchval;
        if(this.search==""){
          this.reqAXIOS(1, 0, 1, 1,8);
        }else {
          this.searchAXIOS(1, 0, 1, 1,8,this.search);
          if(this.courseslist.length<=0){
           this.hiddendata=true
          }

        }
      },
      computed:{
        searchval:function(){
          var searchval=document.getElementById("search").value
          return this.search=searchval
        }

      },
      created:function () {
          AXIOS.get('common/getGlobalType',{}).then(response=>{
            this.titletype=response.data;
            this.sort = this.titletype[0].value;
            this.classes=this.titletype[0].value+1
          }).catch(response=>{
            this.errors.push(response);
          });


      },
      methods:{
        reqAXIOS:function (courseGrade,type,sortType,pageNum,pageSize) {
          AXIOS.get('makerCourse/makerCourseShow',{
            params:{
              courseGrade:courseGrade,
              type:type,
              sortType:sortType,
              pageNum:pageNum,
              pageSize:pageSize
            }
          }).then(response=>{
            this.courseslist=response.data.list;
          }).catch(response=>{
            this.errors.push(response);
          });

        },
        searchAXIOS:function (courseGrade,type,sortType,pageNum,pageSize,courseName) {
          AXIOS.get('makerCourse/makerCourseShow',{
            params:{
              courseGrade:courseGrade,
              type:type,
              sortType:sortType,
              pageNum:pageNum,
              pageSize:pageSize,
              courseName:courseName
            }
          }).then(response=>{
            this.courseslist=response.data.list;
          }).catch(response=>{
            this.errors.push(response);
          });

        },

        byClassify: function (type) {
          this.classify= type;
          this.reqAXIOS(this.classes,this.classify,this.sort,1 ,8)
        },
        byclaass:function (index) {
          this.classes=index+1;
          this.reqAXIOS(this.classes,this.classify,this.sort,1 ,8)
        },
        bysort:function (index) {
          this.sort=index;
          this.reqAXIOS(this.classes,this.classify,this.sort,1 ,8)
        }
      }
    }
</script>

<style scoped>
  .lighton{
    background: #FFCA57 !important;
  }
  .nodata{
    width: 99%;
    height: 400px;
    margin: 0 auto;
    background: url(../../../static/img/nodata.png) top center no-repeat;
  }
  .course_span{
    padding-bottom: 3%;
    display: block;
  }
  .classify-active{
    background: #FFCA57 !important;
  }
  .am-tabs{
    color: #90ccfa;
  }
  .am-nav-tabs{
    border-bottom: 0px;
  }
  .classify{
    padding-left: 18%;
  }
  .classify img{
    height: 25px;
    width: 29px;
  }
  .classify span{
    font-size: 20px;
    padding-left: 1%;
    color: #000000;


  }
  .classifylist{
    padding-left: 18%;
    margin: 20px 0;
  }
  .classifylist ul{
    overflow: hidden;
    padding-bottom: 5px;
  }
  .classifylist li{
    margin-bottom: 2px;
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

  .q_coverName span{
    float: right;
  }
  .q_coverName img{
    height: 16px;
    width: 19px;
  }
  .q_coverName i{
    margin-left: 17px;
    margin-right: 15px;
  }
  .workshow li{
    margin-bottom: 20px;
  }
</style>
