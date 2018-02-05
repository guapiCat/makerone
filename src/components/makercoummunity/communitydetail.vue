<template>
    <div>
      <div class="workshow" style="width: 1200px;margin: 50px auto; ">
        <div class="center-title" style="margin-bottom: 20px; color: #969696;">
          <span> <img src="../../../static/img/icon_address.png" alt="" /><i>益谷创客平台-创客社团-<span>社团详情</span></i></span>
        </div>
        <div class="center-box" style="text-align: center; border: solid 1px #f3f3f3; border-bottom: solid 5px #FAC952; padding: 20px ; background-color: #EEEEEE;">
          <h1>{{allMsg.makerCommunityDTO.communityName}}</h1>
          <p><span>学校:</span><i>{{allMsg.makerCommunityDTO.schoolName}}</i>&nbsp;&nbsp;&nbsp;&nbsp;<span>作者:</span><i>团长</i>&nbsp;&nbsp;&nbsp;&nbsp;<span>时间:</span><i>2017-10-18</i></p>
        </div>
        <div class="center-box" style="border: solid 3px #f3f3f3 ; padding: 20px ;width: 100%;height: 100%;">
          <h1>社团信息</h1>
          <div class="content-center">
            <span class="content-title">{{allMsg.makerCommunityDTO.communityIntro}}</span>
            <div class="content-box-body" style="overflow: hidden;">
              <div class="content-title-hand-left">
                <img src="../../../static/img/airplane.png" />
              </div>
              <div class="content-title-hand-right">
                <h5>{{allMsg.makerCommunityDTO.communityName}}</h5>
                <p>创建时间：<span>{{allMsg.makerCommunityDTO.creatTime}}</span></p>
                <p>需要人数：<span>{{allMsg.maxNum}}</span></p>
                <p>当前人数：<span>{{allMsg.communityNum}}</span></p>
                <p>发起学校：<span>{{allMsg.makerCommunityDTO.schoolName}}</span></p>
                <p>社团介绍：<span>{{allMsg.makerCommunityDTO.communityIntro}}</span></p>
              </div>

            </div>
          </div>
          <div class="content-center">
            <span class="content-title">社团课程计划</span>
            <div class="content-box-body" style="overflow: hidden;">
              <div class="content-title-hand-left">
                <img src="../../../static/img/airplane.png" />
                <p style="font-weight: bold; text-align: center;">课程计划表</p>
              </div>
              <div class="content-title-hand-right">
                <p>课程介绍：<span>注重使用先进的教学方法和手段。精品课程要使用网络进行教学与管理，相关的教学大纲、教案、习题、实验指导、参考文献目录等要上网并免费开放，鼓励将网络课件、授课录像等上网开放，实现优质教学资源共享，带动其他课程的建设</span></p>
              </div>

            </div>
          </div>
          <div class="content-center">
            <span class="content-title">社团成员</span>
            <div class="content-box-body" style="overflow: hidden;">
              <ul class="am-avg-sm-4 am-thumbnails">
                <li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组长:<span>张华</span></p></li>
                <li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>
                <li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>
                <li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>
                <li class="am-thumbnail"><img src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>
                <li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>
                <li class="am-thumbnail"><img  src="../../../static/img/img_bitmap.png" /><p>组员:<span>张华</span></p></li>
              </ul>
            </div>
          </div>
          <div class="content-center">
            <span class="content-title">社团风采</span>
            <div class="content-box-body" style="overflow: hidden;">
              <p><span style="color: #008bbe;font-weight: bold;">精彩图片</span><a href=""><span style="float: right; color: #008bbe; cursor: pointer;">查看全部<img src="../../../static/img/arrow_2.png" style="margin-left: 10px;margin-top: -3px;" /> </span></a></p>
              <ul class="am-avg-sm-4 am-thumbnails">
                <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" /></li>
                <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></li>
                <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></li>
                <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></li>
              </ul>
              <p><span style="color: #008bbe;font-weight: bold;">精彩视频</span><a href=""><span style="float: right; color: #008bbe; cursor: pointer;">查看全部<img src="../../../static/img/arrow_2.png" style="margin-left: 10px;margin-top: -3px;" /> </span></a></p>
              <ul class="am-avg-sm-4 am-thumbnails">
                <li><video>
                </video></li>
                <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></li>
                <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></li>
                <li><img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></li>
              </ul>
            </div>
          </div>

        </div>
        <a href="" style="display: block;margin-left: 50%; margin-top: 5%;"><button v-on:click="applyJoin" type="button" class="am-btn am-btn-primary">申请加入</button></a>

      </div>
    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'
    export default {
        name: "communitydetail",
        data:function(){
            return {
                allMsg:[],
                clubId:this.$route.params.workId
            }
        },
        methods:{
            applyJoin:function(){
                this.$router.push({ path: '/community/applyjoindetail/'+this.clubId });
            }
        },
        created:function(){
            var params = new URLSearchParams();
            AXIOS.get('community/MakerCommunityParticulars', {
                params:{
                    makerCommunityId:this.clubId
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
</style>
