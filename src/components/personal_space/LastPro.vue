<template>
<div>
  <div class="center-box" style="">
    <div class="content-title" style="height: 60px;">
      <span style="background: url(../../../static/img/content-title1.png) center center; width: 291px;">第一步</span>
      <span style="background: url(../../../static/img/content-tite2.png) center center; width: 297px;">第二步</span>
      <span style="background: url(../../../static/img/content-title3.2.png) center center; width: 253px;">第三步</span>
    </div>
    <div class="content-box" style="border: solid 1px #F3F3F3; padding: 30px;">

      <h2>基本信息</h2>
      <div class="am-form-group">
        <label >作品展示:</label>
         <editor :defaultMsg=defaultMsg :config=config ref="UM" style="margin-left: 150px"></editor>
        </div>
        <div class="am-form-group">
          <label>困难攻关:</label>
        <textarea class="" rows="4" cols="90" placeholder="没有攻克过难关，怎能称得上大神！你们一定也遇到过困难吧，如何克服与解决的呢?"/></textarea>
          </div>
          <div class="am-form-group" >
          <label>作品总结:</label>
        <textarea class="" rows="4" cols="90"  placeholder="取得辉煌的成绩也不忘总结分析哦，开个总结会，把创意实现的过程中的成绩与不足，下一步还能如何改进好好总结一下吧！"/></textarea>
          </div>

          <div class="am-form-group">
          <label>是否参加活动:</label>
        <label class="am-radio-inline">
          <input type="radio"  value="" name="docInlineRadio" onclick="appended()">否
          </label>
          <label class="am-radio-inline">
          <input type="radio" name="docInlineRadio" onclick="append()"><span>是</span>
          </label>
          </div>
          <div class="activity" style="display: none;float: left;margin-left: 214px;margin-top: -48px;">
          <select name="" style="width: 200px;">
          <option value="">选择参加的活动</option>
          <option value="">活动1</option>
          </select>
          </div>

          <a  style="width: 120px;margin-left: 200px;margin-right: 200px;">
          <button type="submit" class="am-btn am-btn-primary">保存作品</button>
          </a>
          <a style="width: 120px;margin-left: 200px;margin-right: 200px;">
          <button type="submit" class="am-btn am-btn-primary">发布作品</button>
          </a>
          </div>

          </div>
</div>
</template>

<script>
    import editor from "./editor";

    export default {
      components: {editor},
      name: "last-pro",
      data(){
        return{
          config: {
            initialFrameWidth: 750,
            initialFrameHeight: 350,
            autoFloatEnabled: false,　　//是否工具栏可浮动
            nitialContent:'请输入内容'
          }
        }
      },

    }
</script>

<style scoped>
  .content-title span{
    float: left;
    height: 60px;
    line-height:60px ;
    background-size: cover;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  /*textarea*/
  .am-form-group textarea{
    margin-left: 80px;
  }
  .edui-container{
    margin-left: 150px;
    margin-top: -30px;
  }



</style>
