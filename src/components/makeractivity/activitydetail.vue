<template>
<div>
  <div class="bg">
    <div class="am-u-sm-10 am-u-sm-centered" style="padding-top: 50px;padding-bottom: 70px">
      <span style="float: left"><img src="../../../static/img/icon_address.png"></span>
      <div style="float: left;padding-top: 6px;margin-left: 3px;">
        <span style="color: #999999;">益谷创客平台-创客活动-活动详情</span>
      </div>
    </div>

    <div class="am-u-sm-10 am-u-sm-centered" >
      <img :src="fileURL+ activity.activityPoster" style="height: 100%;width: 100%">
    </div>



    <div class="am-u-sm-10 am-u-sm-centered" style="text-align: center;margin-top:20px;padding-bottom: 40px;margin-left: 6%; margin-bottom: -50px;">
      <!--<a><img src="../../../static/img/icon_activity_add-button.png" alt=""></a>-->
    </div>
  </div>
</div>
</template>

<script>
  import {AXIOS} from "../../http-common";
    export default {
        name: "activitydetail",
      data(){
          return{
            fileURL: "http://192.168.0.104:9000/",
            id: this.$route.params.id,
            activity:[]
          }
      },
      created:function () {
        AXIOS.get('makerActivity/makerActivityParticulars',{
          params:{
            activityId:this.id
          }
        }).then(response=>{
          this.activity=response.data
        }).catch(response => {
          this.errors.push(response)
        });
      }
    }
</script>

<style scoped>
  .bg{
    /*background: url('../../../static/img/img_activity_background.png');*/
    background-size: cover;
    width: 100%;
  }
  .text-span{
    font-weight: normal;
    color: #FFFFFF;
    font-size: 23px;
    letter-spacing: 0.1em;
    display: block;
    position: absolute;
    left: 20%;
    right: 20%;
  }
  #x_nav ul li{
    float:left;
    font-size:16px;
    margin-left:100px;
    color:#fff;
    _margin-left:33px;
  }
</style>
