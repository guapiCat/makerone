<template>
<div>
  <div class="work-title" style="background: #F3F3F3;">
    <div class="classify">
      <i> <img src="../../../static/img/icon_classify.png"/><span>分类</span></i>
    </div>
    <div class="classifylist">
      <ul>
        <li  @click="byClassify(item.type)" v-for="item,index in titletype"    class="title">{{item.name}}</li>

      </ul>
    </div>
    <div class="classify" style="margin-top: 20px;">
      <i> <img src="../../../static/img/icon_sort.png"/><span>排序</span></i>
    </div>
    <div class="classifylist" >
      <ul>
        <li  @click="bySort(0)" class=" title">浏览量</li>
        <li  @click="bySort(1)" class=" title">点赞量</li>
        <li  @click="bySort(2)" class=" title">时间</li>

      </ul>
    </div>
  </div>
  <div class="workshow" style="width: 1200px;margin: 50px auto; ">
    <div  class="center-box" v-for="item in makerlife ">
      <h3>{{item.makerLive.liveTitle}}</h3>
      <div class="work-content"><p id="work-content">{{item.makerLive.liveContent}}</p></div>
      <div class="conter-footer">
        <span>点赞数：</span><img src="../../../static/img/upvote.png"/><i>{{item.makerLive.liveThumbsUpNum}}</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>浏览数：</span><img src="../../../static/img/browse.png"/><i>{{item.makerLive.liveScanNum}}</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>作者：<i>{{item.username}}</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>发布时间：<i>{{item.makerLive.createDate}}</i></span>
      </div>
      <router-link to="/worklife/detail"class="see-details"><button type="button" class="am-btn am-btn-primary am-radius">查看详情</button></router-link>
    </div>

  </div>
</div>

</template>

<script type="es6">
     import {AXIOS} from '../../http-common'
     import{formatDate}from  '../../../static/js/data'
    export default {
        name: "maker-life",
      data (){
          return{
            fileURL:"http://192.168.1.100:9000/",
            makerlife:[],
            titletype:[],
            classify:0,
            sort:0,


          }
      },

      created:function () {
        AXIOS.get('makerLive/makerLiveType?typeValue=liveType',{}).then(response=>{
          this.titletype=response.data;
        });
        this.reqAxios(1, 1, 1, 10);
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
          }).catch(response=>{
            this.errors.push(e);
          })
        },
        byClassify: function (type) {
          this.classify= type;
          this.reqAxios(this.classify,this.sort ,1 ,8)
        },
        bySort: function (type) {
          this.sort= type;
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
        })
      }

    }
</script>

<style scoped>
  .toggle{
    background: #FFCA57 !important;
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
