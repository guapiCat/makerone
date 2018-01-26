<template>
    <div>
      <div class="workshow" style="width: 1200px;margin: 50px auto;">
        <div class="center-title" style="margin-bottom: 20px; color: #969696;">
          <span> <img src="static/img/icon_address.png" alt="" /><i>益谷创客平台-创客社团-<span>详情页</span></i></span>
        </div>
        <div class="center-box" style="text-align: center; border: solid 1px #f3f3f3; border-bottom: solid 5px #FAC952; padding: 20px ; background-color: #EEEEEE;">
          <h1>对于教师和创客而言，如何开展创客教育？</h1>
          <p>分类 ：<span>创客动态</span></p>
          <img src="static/img/icon_upvote.png"/>
        </div>
        <div style="border: solid 1px #C1C1C1; border-top: 0px; padding: 20px;">
          <div class="content-title">
            <img src="static/img/img_bitmap.png"/> <span>作者：<i>sahdj</i></span>
          </div>
          <div class="comment">
            目前大多数学校开展创客教育，创客导师都是从其他边缘学科调过来的。因此，如何创客教育上什么课怎么上课，对老师来说是一个很大的难题。 “创客教育”，是在国家提出“大众创业，万众创新”的政策背景下兴起。创客教育强调的是学习与现实的联系，培养学生的创新思维和动手能力。而日益被人们所熟知的3D打印技术，不仅可以实现将创意变成实物，而且符合学生的学习天性，因而成为了创客教育实现和推广的重要桥梁。所以最早其实是一个3D打印相关企业开始率先做创客教育。先是从提供3D打印桌面机开始，然后发现发展创客教育不是几台机器就能搞定的事，就慢慢开始做教师培训，再到一体化的创客空间建设。这样看着像是走上正轨了。这个也是阿祖拉创客教育在宁波本土的发展脚步，虽然现在已经服务了约10家中小学职高学校，但老师们普遍反映，上课上什么是一个难题，如何设置课程？教学素材哪里找？等等因此阿祖拉3D打印服务云平台（http://www.azura3d.com）上搭建了一个教育云平台，提供在线创客教程视频，比如手把手教你做红外线感应小车，铲车等等，还有电子教材，课件下载，给老师上课提供源源不断的教学内容素材。另外阿祖拉平台上还有易建模软件，课堂上可以在线建模，因为难易程度把握的恰到，可以满足不同年龄段的学生使用，比如小学生可以自己做一个汉诺塔的益智玩具，课堂上可以比赛看谁移动的步数最少。软件算是教学的手段，以乐趣、好玩的方式激发学生的想象力和创造力。内容则是教学的素材，让创客教育有更多有意思的内容可上。但是创客教育，教师是推动发展的重要一环，但是真正的发展，还是离不开学校、体制内的支持和努力。现状虽然是学校、老师都更在意一些科技比赛的成绩，但对老师而言，日常的基础教育也是重要工作，两个手同时抓，相互促进，才能更好的发展创客教育。
            <img src="static/img/img_kecheng.png"/>
          </div>
          <div class="conter-footer">
            <span>点赞数：</span><img src="static/img/upvote.png"/><i>12</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>浏览数：</span><img src="static/img/browse.png"/><i>24</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>发布时间：<i>2016-02-10</i></span>
          </div>
        </div>
        <div class="comment" style="overflow: hidden;">
          <span>您的评价:</span>
        </div>

        <div class="pinglun" style="text-align: center; margin-bottom: 30px;">
          <textarea class=""  cols="143" rows="5" id="doc-ta-1" placeholder="写点评论支持下资源贡献者吧~"></textarea>
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
              <p >2017-9-27 8:50</p>
            </div>

          </div>
          <div class="comment-list-detail">
            <img src="static/img/img_bitmap.png" />
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
</template>

<script>
    export default {
        name: "life-detail"
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
