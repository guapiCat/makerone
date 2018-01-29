<template>
    <div>
      <div class="center-box" style=" margin-top: 30px; border: solid 3px #f3f3f3 ; padding: 20px ; background-color: #fbfbfb;width: 100%;">
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
</template>

<script>
    export default {
        name: "comment"
    }
</script>

<style scoped>
  .center-box textarea{
    margin-top: 40px;
  }
  .all-comment-list{
    margin-top: 60px;
  }
  .comment-list {
    padding-left: 0;
    overflow: hidden;
    float: left;
    margin-left: 17px;
    margin-top: 60px;
  }
  .comment-list li {
    float: left;
    list-style: none;
    width: 27px;
    height: 27px;

  }
  .comment-list li a {
    display: block;
    width: 100%;
    padding-top: 27px;
    overflow: hidden;
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

  .comment-list li a {
    display: block;
    width: 100%;
    padding-top: 27px;
    overflow: hidden;
  }
  .comment-list li.light {
    background-position: 0 -29px;
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
