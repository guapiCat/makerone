<template>
<div>
  <div class="work-title" style="background: #F3F3F3;">
    <div class="classify">
      <i> <img src="../../../static/img/icon_classify.png"/><span>分类</span></i>
    </div>
    <div class="classifylist">
      <ul>
        <li  @click="byClassify(item.value)" v-for="item,index in titletype" v-bind:class="{on:index==classifyClass}"   class="title">{{item.desc}}</li>

      </ul>
    </div>
    <div class="classify" style="margin-top: 20px;">
      <i> <img src="../../../static/img/icon_sort.png"/><span>排序</span></i>
    </div>
    <div class="classifylist" >
      <ul>
        <li v-for="item,index in sorttitle"  @click="bySort(index)" v-bind:class="{on:index==sortClass}"  class=" title">{{item}}</li>

      </ul>
    </div>
  </div>
  <div class="workshow" style="width: 1200px;margin: 50px auto; ">
    <div  class="center-box" v-for="item in makerlife ">
      <h3>{{item.makerLive.liveTitle}}</h3>
      <div class="work-content"><p id="work-content" v-html="contentbox"></p></div>
      <div class="conter-footer">
        <span>点赞数：</span><img src="../../../static/img/upvote.png"/><i>{{item.makerLive.liveThumbsUpNum}}</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>浏览数：</span><img src="../../../static/img/browse.png"/><i>{{item.makerLive.liveScanNum}}</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>作者：<i>{{item.username}}</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>发布时间：<i>{{item.makerLive.createDate}}</i></span>
      </div>
      <router-link :to="{name: 'lifedetail',params:{ workId: item.makerLive.id}}"class="see-details"><button type="button" class="am-btn am-btn-primary am-radius">查看详情</button></router-link>
    </div>
    <ul class="am-pagination" style="margin-left: 700px;">
      <li v-on:click="prevClick"><span class="adPointer">&laquo;</span></li>
      <!--<li class="am-active"><a>1</a></li>-->
      <!--<li><a>2</a></li>-->
      <!--<li><a>3</a></li>-->
      <!--<li><a>4</a></li>-->
      <!--<li><a>5</a></li>-->
      <li v-on:click="goClickPage(item)" v-bind:class="{'am-active':clickPage==item}" v-for="item in allPage"><span class="adPointer" href="">{{item}}</span></li>
      <li v-on:click="nextClick"><span class="adPointer">&raquo;</span></li>
    </ul>
    <div class="nodata" v-show="hiddendata">
    </div>

  </div>
</div>

</template>

<script type="es6">
     import {AXIOS} from '../../http-common'
    export default {
        name: "maker-life",
        props: {
        fileURL: {
          type: String,
          required: true
        }
      },
      data (){
          return{
            search:'',
            hiddendata:false,
            makerlife:[],
            titletype:[],
            classify: 0,
            sort: 0,
            classifyClass:0,
            sortClass:0,
            sorttitle:[
              "时间",
              "浏览量",
              "点赞数"
            ],
            contentbox:[],
            // 分页
            maxPage:1,//最大页数
            nowPage:1,//当前页
            allPage:[],//总页数，，点击哪一页
            clickPage:1


          }
      },
      created:function () {
        AXIOS.get('common/getGlobalType',{}).then(response=>{
          this.titletype=response.data;
          this.classify = this.titletype[0].value;

        });


      },
      computed:{
        searchval:function(){
            var searchval=document.getElementById("search").value;
            this.search=searchval
        }

      },
      methods:{
        reqAxios:function (type,sortType,pageNum, pageSize) {
          AXIOS.get('makerLive/makerLiveShow',{
            params:{
              "type":type,
              "sortType":sortType,
              "pageNum":pageNum,
              "pageSize":pageSize
            }
          }).then(response=>{
            this.makerlife=response.data.list;
            for (var i=0;i<this.makerlife.length;i++){
              this.contentbox=this.makerlife[i].makerLive.liveContent;
            };
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
            if(this.contentbox.length<1){
              this.hiddendata=true;
            }else {
              this.hiddendata=false
            }

          }).catch(response=>{
            this.errors.push(response);
          })
        },
        prevClick:function(){
          if(this.clickPage>1){
            this.clickPage--;
            if (this.search == '') {
              this.reqAxios(this.classify, this.sort, this.clickPage, 8);
            } else {
              this.searchAxios(this.classify, this.sort, this.clickPage, 8, this.search)
            }
          }
        },
        nextClick:function(){
          if(this.clickPage<this.maxPage){
            this.clickPage++;
            if (this.search == '') {
              this.reqAxios(this.classify, this.sort, this.clickPage, 8);
            } else {
              this.searchAxios(this.classify, this.sort, this.clickPage, 8, this.search)
            }
          }
        },
        //点击页码重新挂载数据更新页面
        goClickPage:function(item){
          this.clickPage=item;
          console.log("item为："+item);
          if (this.search == '') {
            this.reqAxios(this.classify, this.sort, this.clickPage, 8);
          } else {
            this.searchAxios(this.classify, this.sort, this.clickPage, 8, this.search)
          }
        },
        searchAxios:function (type,sortType,pageNum, pageSize,liveTitle) {
          AXIOS.get('makerLive/makerLiveShow',{
            params:{
              "type":type,
              "sortType":sortType,
              "pageNum":pageNum,
              "pageSize":pageSize,
              "liveTitle":liveTitle
            }
          }).then(response=>{
            this.makerlife=response.data.list;
            for (var i=0;i<this.makerlife.length;i++){
              this.contentbox=this.makerlife[i].makerLive.liveContent;
            };
            if(this.contentbox.length<1){
              this.hiddendata=true;
            }else {
              this.hiddendata=false
            }

          }).catch(response=>{
            this.errors.push(response);
          })
        },
        byClassify: function (value) {
          this.classify= value;
          this.classifyClass=value;
          this.reqAxios(this.classify,this.sort , 1,8)
        },
        bySort: function (index) {
          this.sort= index;
          this.sortClass=index;
          this.reqAxios(this.classify,this.sort ,1 ,8)
        }
      },

      mounted:function () {
        $(function(){
          $(".work-content").each(function (i) {
            var divH = $(this).height();
            var $p = $("#work-content", $(this)).eq(0);
            while ($p.height() > divH) {
              $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
            };
          });
        });
        this.searchval;
        if(this.search==''){
          this.reqAxios(0, 0, this.clickPage, 8);
        }else {
          this.searchAxios(0,1,1,10,this.search)
          if(this.makerlife.length<=0){
            this.hiddendata=true
          }
        }
      }

    }
</script>

<style scoped>
   .on {
    background: #FFCA57 !important;
  }
   .nodata{
     width: 99%;
     height: 400px;
     margin: 0 auto;
     background: url(../../../static/img/nodata.png) top center no-repeat;
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

  }
  .classifylist ul{
    overflow: hidden;
    padding-bottom: 1%;
    margin-left: -3%;
    padding-top: 2%;
  }

  .classifylist li{
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
  .classify-active{

    background: #FFCA57 !important;
  }
  .center-box{
    border: solid 2px #E6E6E6;
    padding: 20px;
  }
  .work-content{
    height: 65px;
    overflow: hidden;
  }
  .conter-footer {
    margin-bottom: 3%;
    margin-top: 2%;
  }
  .conter-footer img{
    margin-top: -5px;
  }
  .see-details{
    float: right;
    display: block;
    margin-top: -2%;
  }
  .see-details button{
    width: 120px;
  }

</style>
