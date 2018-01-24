<template>
<div>
  <div class="workshow" style="width: 1200px;margin: 50px auto;">
    <div class="center-title" style="margin-bottom: 20px; color: #969696;">
      <span> <img src="static/img/icon_address.png" alt="" /><i>益谷创客平台-创客课程</i></span>
    </div>
    <div class="center-box" style="border: solid 3px #f3f3f3 ;">
      <div class="centent-title">
        <h1>防盗书包</h1>
        <h5>分类:<span>创客项目</span></h5>
        <div class="centent-title-right">
          <img src="static/img/icon_upvote.png" style="height: 30px; width: 30px; margin-right:20px ;" />
          <button type="button" class="am-btn am-btn-primary">我要收藏</button>
        </div>
      </div>
      <div class="content-title-hand">
        <div class="content-title-hand-left">
          <img src="static/img/airplane.png" />
        </div>

        <div class="content-title-hand-right" style="float: left; width: 40%;" >
          <h5>课程信息</h5>
          <p>开课时间：<span>2017-7-10</span></p>
          <p>浏览人数：<span>1730</span>人</p>
          <p>课程进度：<span>连载至第三件</span></p>
          <p>主讲人：<span>free</span></p>
          <p>课程介绍：<span>注重使用先进的教学方法和手段。精品课程要使用网络进行教学与管理，相关的教学大纲、教案、习题、实验指导、参考文献目录等要上网并免费开放，鼓励将网络课件、授课录像等上网开放，实现优质教学资源共享，带动其他课程的建设</span></p>
        </div>

      </div>
      <div class="content-box">
        <div class="content-box-left">
          <div class="content-box-left-title">
            <img src="static/img/book.png" />
            <span>课程目录</span>
          </div>
          <div class="content-box-body">

          </div>
        </div>

        <div class="content-box-right">
          <div class="content-box-left-title" style="margin-left: 62%;">
            <span>相关作品</span>
          </div>
          <div class="content-box-right-body">
            <ul class="am-avg-sm-2 am-avg-md-3 am-avg-lg-2 am-thumbnails">
              <li><img class="am-thumbnail" src="static/img/last-2.png" />
                <p class="q_coverName">创客作品</p>
                <div class="q_worksCn">
                  <img class="q_head" src="static/img/img_head.png" />
                  <a class="q_works_user">小王</a>
                  <a class="q_dianzan"><img src="static/img/upvote.png" /><span>5537</span></a>
                  <a class="q_liulan"><img src="static/img/browse.png" /><span>5537</span></a>
                  <div class="clear"></div>
                </div>
              </li>
              <li><img class="am-thumbnail" src="static/img/last-2.png" />
                <p class="q_coverName">创客作品</p>
                <div class="q_worksCn">
                  <img class="q_head" src="static/img/img_head.png" />
                  <a class="q_works_user">小王</a>
                  <a class="q_dianzan"><img src="static/img/upvote.png" /><span>5537</span></a>
                  <a class="q_liulan"><img src="static/img/browse.png" /><span>5537</span></a>
                  <div class="clear"></div>
                </div>
              </li>
            </ul>

          </div>
        </div>
        <div class="clear"></div>

        <div class="comment" style="overflow: hidden;">
          <span>您的评价:</span>
        </div>

        <div class="pinglun" style="text-align: center; margin-bottom: 30px;">
          <textarea class=""  style="margin-top: 20px" cols="143" rows="5" id="doc-ta-1" placeholder="写点评论支持下资源贡献者吧~"></textarea>
          <button type="button" class="am-btn am-btn-default am-radius" style="margin-left: 89%;margin-top: 2%;">发布评论</button>
        </div>
        <div class="all-comment-list">
          <h1 style="margin-left: 15px;">作品评论</h1>
          <div class="comment-list-detail">
            <img src="static/img/img_bitmap.png" />
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
            <img src="static/img/img_bitmap.png" />
            <div class="comment-conten">
              <span>小娃娃</span>
              <p>好棒好棒</p>
            </div>
            <div class="comment-right" style="float: right;margin-top: -8%;">
              <button type="button" class="am-btn am-btn-primary" style="margin-left: 40%;">回复</button>
              <p>2017-9-27 8:50</p>
            </div>

          </div>
          <div class="comment-list-detail">
            <img src="static/img/img_bitmap.png" />
            <div class="comment-conten">
              <span>小萝莉</span>
              <p>6666</p>
            </div>
            <div class="comment-right" style="float: right;margin-top: -8%;">
              <button type="button" class="am-btn am-btn-primary" style="margin-left: 40%;">回复</button>
              <p>2017-9-27 8:50</p>
            </div>
          </div>
        </div>


      </div>
      <!--分页-->
      <ul class="am-pagination am-pagination-right">
        <li class="am-disabled"><a href="#">&laquo;</a></li>
        <li class="am-active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&raquo;</a></li>
      </ul>

    </div>
  </div>

</div>
</template>

<script>


  export default {
        name: "maker-course",
    methods:{

    }

    }
</script>

<style scoped>
  .center-title i{
    margin-left: 15px;
  }
  .content-box{
    overflow: hidden;
  }
  /*content头部样式*/
  .centent-title{
    background-color:#EEEEEE;
    height: 120px;
    border-bottom: solid #ffca58 5px
  }
  .centent-title h1{
    text-align: center;
    padding-top: 15px;
  }
  .centent-title h5{
    text-align: center;
    font-weight: 500;
  }
  .centent-title-right{
    float: right;
    margin-top: -60px;
    margin-right: 20px;
  }
  .am-btn-primary{
    border-radius: 8px;
  }
  .content-title-hand{
    margin-top: 30px;
    height: 350px;
    margin-bottom: 25px;
  }
  .content-title-hand-left{
    float: left;
    width: 55%;
    text-align: center;
    height: 90%;

    margin: 15px;
    border: solid 1px;
  }
  .content-title-hand-left img{
    height: 100%;
    width: 100%;
  }
  .content-title-hand-right h5{
    color: #2f8bb4;
  }
  .content-box-left{
    height: 800px;
    width: 50%;
    float: left;
  }
  .content-box-left-title {

    height: 60px;
    width: 200PX;
    background-color: #EBAD02;
    padding-left: 15px;
    padding-top: 11px;
    margin-left: 13px;
    font-size: 24px;
  }
  .content-box-left-title img{
    padding-right: 15px;
  }
  .content-box-body{
    height: 744px;
    border: solid #555 1px;
    margin-left: 13px;
  }
  .content-box-right-body{
    height: 744px;
    border: solid #555 1px;
    margin-left: 13px;
  }
  /*三级联动*/

  #menu h1 { font-size:12px;  background-color:#eee; height: 50px; line-height: 38px; padding: 0; margin: 0;}
  #menu h2 { font-size:12px; border:#E7E7E7 1px solid; border-top-color:#FFF; background-color:#F4F4F4; padding: 0; margin: 0;}
  #menu ul { padding-left:15px;border:#E7E7E7 1px solid; border-top:none;overflow:auto; margin: 0; padding: 0;}
  #menu a { display:block; padding:5px 0 3px 10px; text-decoration:none; overflow:hidden;border-bottom: solid 1px #eee;    height: 42px;
    line-height: 34px;}

  #menu .no {display:none;}
  #menu .h1 a{color:#000;}
  #menu .h2 a{color:#000;}
  #menu  h1 a{color:#000;}
  .content-box-right{
    width: 44%;
    float: left;
    margin-left: 5%;

  }
  .am-thumbnail{
    margin-bottom: 0px;
  }
  .q_liulan{
    padding-left:0 ;
  }
  /*评价*/
    .comment-list{
    padding-left: 0;
    overflow: hidden;
    float: left;
    margin-left: 17px;
    margin-top: 60px;
  }


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
