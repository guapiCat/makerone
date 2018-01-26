<template>
  <div>
    <div class="workshow" style="width: 1200px;margin: 50px auto; ">
      <div class="center-title" style="margin-bottom: 20px; color: #969696;">
        <span> <img src="../../../static/img/icon_address.png" alt="" /><i>益谷创客平台-作品展示-<span>防盗书包</span></i></span>
      </div>
      <div class="center-box" style="border: solid 3px #f3f3f3 ; padding: 20px ; background-color: #fbfbfb;">
        <!--titile-->
        <div class="center-box-title">
          <div class="box-title"><p>
            防盗书包
          </p></div>
          <div class="box-center">
            <span class="author">作者:</span><i>元气组</i>
            <span class="box-time">时间:</span><i>2016-11-16</i>
          </div>
          <div class="box-right">
            <img src="../../../static/img/upvote.png" alt="" />
            <i>0</i>
          </div>

        </div>
        <div class="box-team">
          <h5>制作团队:</h5>
          <p>元气组</p>
        </div>
        <div class="box-team">
          <h5>创意来源:</h5>
          <p>会尽快发多少级技术假死机哈斯建安大环境阿卡后视镜卡上解决</p>
        </div>
        <div class="box-team">
          <h5>材料清单:</h5>
          <p><span>电子材料</span>:<span>回家放大后即可上都会尽快哈市将看到后尽快</span></p>
          <p><span>电子材料</span>:<span>回家放大后即可上都会尽快哈市将看到后尽快</span></p>
          <p><span>电子材料</span>:<span>回家放大后即可上都会尽快哈市将看到后尽快</span></p>
        </div>
        <div class="box-team">
          <h5>制作过程:</h5>
          <ul class="am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-thumbnails" style="margin-top: 50px; margin-bottom: 10rem;">
            <li>

              <img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />

            </li>
            <li>

              <img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />

            </li>
            <li>

              <img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />

            </li>
            <li>

              <img class="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-4.jpg" />

            </li>

          </ul>
        </div>

      </div>
      <div class="center-box" style="border: solid 3px #f3f3f3 ; padding: 20px ; background-color: #fbfbfb;width: 100%;">
        <textarea  rows="5" cols="140" value=""  name="" placeholder="写点评论支持下载资源贡献者，注意字数不要超过70字~"></textarea>
        <div class="am-btn-group" style="float: right;margin-top:10px;">
          <button type="button" class="am-btn am-btn-default">发表评论</button>
        </div>
        <div class="all-comment-list">
          <h1 style="margin-left: 15px;">作品评论</h1>
          <div class="comment-list-detail">
            <img src="../../../static/img/img_bitmap.png" />
            <div class="comment-conten">
              <span>标仔</span>
              <p>厉害厉害</p>
            </div>
            <div class="comment-right" style="float: right;margin-top: -8%;">
              <button type="button" class="am-btn am-btn-primary" style="margin-left: 40%;">回复</button>
              <p >2017-9-27 8:50</p>
            </div>
          </div>
          <div class="comment-list-detail">
            <img src="../../../static/img/img_bitmap.png" />
            <div class="comment-conten">
              <span>小娃娃</span>
              <p>好棒好棒</p>
            </div>
            <div class="comment-right" style="float: right;margin-top: -8%;">
              <button type="button" class="am-btn am-btn-primary" style="margin-left: 40%;">回复</button>
              <p >2017-9-27 8:50</p>
            </div>

          </div>
          <div class="comment-list-detail">
            <img src="../../../static/img/img_bitmap.png" />
            <div class="comment-conten">
              <span>小莉</span>
              <p>6666</p>
            </div>
            <div class="comment-right" style="float: right;margin-top: -8%;">
              <button type="button" class="am-btn am-btn-primary" style="margin-left: 40%;">回复</button>
              <p>2017-9-27 8:50</p>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
    export default {
        name: "workshowdetail",
        data () {
          return {

          }
        }
    }
</script>

<style scoped>
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
  .am-thumbnail{
    margin-bottom: 0px;
    padding: 0px;
    border: 0;
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

  .center-title i{
    margin-left: 15px;
  }
  .center-box-title{
    margin-bottom: 20px;
  }
  .box-title{
    font-size: 25px;
    margin: 0 auto;
    width: 100px;
  }
  .box-center{
    font-size: 15px;
    text-align: center;
    margin-top: 30px;
    border-bottom: solid 3px #f6c634;
  }
  .box-right{
    float: right;
    margin-top: -35px;
    border: solid 1px #e6e6e6;
    padding: 1px 10px;
    border-radius: 5px;
  }
  .box-team h5{
    margin-left: 35px;
  }
  .box-team p{
    margin-left: 55px;
  }
  /*评论*/
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
