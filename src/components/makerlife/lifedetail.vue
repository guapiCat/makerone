<template>
    <div>
      <div class="workshow" style="width: 1200px;margin: 50px auto;">
        <div class="center-title" style="margin-bottom: 20px; color: #969696;">
          <span> <img src="../../../static/img/icon_address.png" alt="" /><i>益谷创客平台-创客社团-<span>详情页</span></i></span>
        </div>
        <div>
        <div class="center-box" style="text-align: center; border: solid 1px #f3f3f3; border-bottom: solid 5px #FAC952; padding: 20px ; background-color: #EEEEEE;">
          <h1>{{makelifelist.makerLive.liveTitle}}</h1>
          <p>分类 ：<span>创客动态</span></p>
          <img src="../../../static/img/icon_upvote.png"/>
        </div>
        <div style="border: solid 1px #C1C1C1; border-top: 0px; padding: 20px;">
          <div class="content-title">
             <img :src="fileURL+makelifelist.avatar"/> <span>作者：<i>{{makelifelist.username}}</i></span>
          </div>
          <div class="comment" v-html="contentbox">
          </div>
          <div class="conter-footer">
            <span>点赞数：</span><img src="../../../static/img/upvote.png"/><i>{{makelifelist.makerLive.liveThumbsUpNum}}</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>浏览数：</span><img src="../../../static/img/browse.png"/><i>{{makelifelist.makerLive.liveScanNum}}</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>发布时间：<i>{{makelifelist.makerLive.createDate}}</i></span>
          </div>
        </div>
        </div>
        <comment></comment>

      </div>

    </div>
</template>

<script>
    import {AXIOS} from "../../http-common";

    export default {
        name: "life-detail",
        data(){
          return{
            fileURL: "http://192.168.1.100:9000/",
            workId: this.$route.params.workId,
            makelifelist:[],
            contentbox:[]
          }
         },
        created:function () {
        AXIOS.get('makerLive/makerLiveInfo',{
          params:{
            id:this.workId
          }
        }).then(response=>{
         var makerlife=response.data;
         this.makelifelist = makerlife;
         this.contentbox=this.makelifelist.makerLive.liveContent
        }).catch(response => {
          this.errors.push(response)
        });
      }
    }
</script>

<style scoped>
  .center-box img{
    float: right;
    margin-top: -45px;
    height: 30px;
    padding-right: 40px;
  }

  .content-title img{
    height: 41px;
    width: 41px;
    border-radius: 50%;
  }
  .comment{
    margin-top: 15px;
  }
  .comment img{
    height: 400px;
    width: 100%;
    margin-top: 15px;
  }
  .conter-footer {
    margin-bottom: 3%;
    margin-top: 2%;
  }
  .conter-footer img{
    margin-top: -5px;
  }
  /*评论*/

  .comment span{
    display: block;
    padding-top: 58px;
    margin-left: 14px;
    float: left;
    font-size: 20px;
    font-weight: bold;
  }
  .comment-list-detail img{
    float: left;
  }
  .comment-list-detail{
    margin-left: 15px;
    border-bottom: solid 1px #ebebeb;
    margin-right: 15px;
    margin-top: 20px;
  }
  .comment-conten{
    margin-left: 7%;
  }
  .comment-conten span{
    color: #7394CA;
  }
</style>
