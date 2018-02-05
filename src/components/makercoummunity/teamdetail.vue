<template>
<div>
  <div class="workshow" style="width: 1200px;margin: 50px auto; ">
    <div class="center-title" style="margin-bottom: 20px; color: #969696;">
      <span> <img src="../../../static/img/icon_address.png" alt="" /><i>益谷创客平台-创客社团-<span>团队详情</span></i></span>
    </div>
    <div class="center-box" style="text-align: center; border: solid 1px #f3f3f3; border-bottom: solid 5px #FAC952; padding: 20px ; background-color: #EEEEEE;">
      <h1>{{allMsg.makerTeamDTO.teamName}}</h1>
      <p><span>学校:</span><i>{{allMsg.makerTeamDTO.schoolName}}</i>&nbsp;&nbsp;&nbsp;&nbsp;<span>作者:</span><i>团长</i>&nbsp;&nbsp;&nbsp;&nbsp;<span>时间:</span><i>2017-10-18</i></p>
    </div>
    <div class="center-box" style="border: solid 3px #f3f3f3 ; padding: 20px ;width: 100%;height: 100%;">
      <h1>团队信息</h1>
      <div class="content-center">
        <span class="content-title">团队介绍</span>
        <div class="content-box-body" style="overflow: hidden;">
          <div class="content-title-hand-left">
            <img src="../../../static/img/airplane.png" />
          </div>
          <div class="content-title-hand-right">
            <h5>{{allMsg.makerTeamDTO.teamName}}</h5>
            <p>创建时间：<span>{{allMsg.makerTeamDTO.createTime}}</span></p>
            <p>需要人数：<span>30</span></p>
            <p>当前人数：<span>20</span></p>
            <p>人员需求：<span>有一定团队意识和创造力</span></p>
            <p>团队介绍：<span>{{allMsg.makerTeamDTO.teamIntro}}</span></p>
          </div>

        </div>
      </div>
      <div class="content-center">
        <span class="content-title">团队作品</span>
        <div class="content-box-body" style="overflow: hidden;">
          <p style="margin-bottom: 40px;"><a href=""><span style="float: right; color: #008bbe; cursor: pointer;">查看全部<img src="../../../static/img/arrow_2.png" style="margin-left: 10px;margin-top: -3px;" /> </span></a></p>
          <ul class="am-avg-sm-4 am-thumbnails">
            <li class="am-thumbnail"><img  src="../../../static/img/last-2.png" /><p><span>防盗书包</span></p></li>
            <li class="am-thumbnail"><img  src="../../../static/img/airplane.png" /><p><span>防盗书包</span></p></li>
          </ul>

        </div>
      </div>
      <div class="content-center">
        <span class="content-title">团队成员</span>
        <div class="content-box-body" style="overflow: hidden;">
          <p style="margin-bottom: 40px;"><a href=""><span style="float: right; color: #008bbe; cursor: pointer;">查看全部<img src="../../../static/img/arrow_2.png" style="margin-left: 10px;margin-top: -3px;" /> </span></a></p>
          <ul class="am-avg-sm-4 am-thumbnails">

            <li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>
            <li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>
            <li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>
            <li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>
            <li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>
            <li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>
            <li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>
          </ul>
        </div>
      </div>

    </div>
    <a style="display: block;margin-left: 50%; margin-top: 5%;"><button type="button" class="am-btn am-btn-primary">申请加入</button></a>
  </div>
</div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'
    export default {
        name: "makerteam",
        data:function(){
            return {
                allMsg:[],
                teamId:this.$route.params.teamId
            }
        },
        created:function(){
            var params = new URLSearchParams();
            AXIOS.get('team/MakerTeamParticulars', {
                params:{
                    makerTeamId:this.teamId
                }
            }).then(response => {
                console.log(response);
                this.allMsg=response.data;
            }).catch(e => {
                this.errors.push(e)
            });
        }
    }
</script>

<style scoped>
  .content-title-hand-left{
    float: left;width: 30%;
  }
  .content-title-hand-left img{
    width: 100%;
    height: 100%;
    border: solid 1px #f3f3f3;
  }
  .content-title-hand-right{
    float: left;
    width: 64%;
    margin-left: 4%;
  }
  .content-box-body{
    border-top: solid 5px #e6e6e6;
    padding-top: 3%;
  }
  .content-center{
    position: relative;
    margin-top: 3%;
  }
  .content-title{
    font-weight: bold;
    width: 100px;
    position: absolute;
    background: #fff;
    top: -10px;
  }
  .am-thumbnail{
    background: #f3f3f3;
  }
  .am-thumbnail img{
    padding-top: 5px;
  }
  .am-thumbnail p{
    text-align: center;
  }
  .am-avg-sm-4 > li {
    width: 23%;
    margin-left: 2%;
  }
  .am-thumbnail img{
    width: 150px;
    height: 150px;
  }
</style>
