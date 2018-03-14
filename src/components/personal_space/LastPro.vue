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
          <label v-if="getMakerWorkDisplay[12]">{{getMakerWorkDisplay[12].dictDesc}}:</label>
          <editor v-on:editor="workscontent" style="width: 740px;margin-left: 13.21%;margin-top: -2%;"></editor>
      </div>
      <div class="am-form-group">
        <label v-if="getMakerWorkDisplay[13]">{{getMakerWorkDisplay[13].dictDesc}}:</label>
        <textarea v-model="difficulty" rows="4" cols="90" placeholder="没有攻克过难关，怎能称得上大神！你们一定也遇到过困难吧，如何克服与解决的呢?"/></textarea>
      </div>
        <div class="am-form-group" >
          <label v-if="getMakerWorkDisplay[11]">{{getMakerWorkDisplay[11].dictDesc}}:</label>
          <textarea v-model="introduce" rows="4" cols="90"  placeholder="把你们的作品简单介绍一下(●'◡'●)ﾉ"/></textarea>
        </div>
      <div class="am-form-group" >
        <label v-if="getMakerWorkDisplay[14]">{{getMakerWorkDisplay[14].dictDesc}}:</label>
        <textarea v-model="summarize" rows="4" cols="90"  placeholder="取得辉煌的成绩也不忘总结分析哦，开个总结会，把创意实现的过程中的成绩与不足，下一步还能如何改进好好总结一下吧！"/></textarea>
      </div>

      <div class="am-form-group">
        <label v-if="getMakerWorkDisplay[15]">{{getMakerWorkDisplay[15].dictDesc}}:</label>
        <label class="am-radio-inline">
          <input type="radio"  value="" name="docInlineRadio" @click="notjoin()">否
        </label>
        <label class="am-radio-inline">
          <input type="radio" name="docInlineRadio" @click="joinactivity()"><span>是</span>
        </label>
      </div>
      <div class="activity" style="float: left;margin-left: 214px;margin-top: -48px;">
        <select name="" style="width: 200px;" v-show="ishidden"  v-model="selectActivity" @change="selectAct()">
          <option  v-for="(item,index) in activity"  v-bind:value="index">{{item.activityName}}</option>
        </select>
      </div>

      <a  style="width: 120px;margin-left: 200px;margin-right: 200px;">
        <button type="submit" class="am-btn am-btn-primary">保存作品</button>
      </a>
      <a style="width: 120px;margin-left: 200px;margin-right: 200px;">
        <button type="submit" class="am-btn am-btn-primary" @click="submitData()">发布作品</button>
      </a>
    </div>

  </div>
</div>
</template>

<script>
import editor from "./editor";
import {AXIOS} from "../../http-common";
export default {
  components: {editor},
  name: "last-pro",
  props:{
    firstdisplay:{
      type:Array
    },
    firstdisplayname:{
      type:Array
    },
    seconddata:{
      type:Array
    },
    secondtype:{
      type:Array
    }
  },
  data(){
    return{
      ishidden:false,
      myworkscontent:[],
      activity:[],
     getMakerWorkDisplay:[],
      difficulty:'',
      summarize:'',
      selectActivity:'',
      selectActivityname:'',
      introduce:'',
      thirddisplay:[],
      alldataplay:[]
    }
  },
  created:function () {
    // 获取标题
    AXIOS.get('makerWorks/getMakerWorkDisplay', {}).then(response => {
      this.getMakerWorkDisplay = response.data;
    }).catch(response => {
      this.errors.push(response)
    });
    // 获取活动
    AXIOS.get('makerActivity/makerActivityList', {}).then(response => {
      this.activity = response.data;

    }).catch(response => {
      this.errors.push(response)
    });
  },
  methods:{
    workscontent:function (data) {
      this.myworkscontent=data
    },
    notjoin(){
      this.ishidden=false
    },
    joinactivity(){
      this.ishidden=true;
    },
    selectAct(){
      this.selectActivityname=this.activity[this.selectActivity].activityName
    },
    submitData(){
      this.thirddisplay.push({key: this.getMakerWorkDisplay[12].dictValue, value:this.myworkscontent});
      this.thirddisplay.push({key: this.getMakerWorkDisplay[13].dictValue, value:this.difficulty});
      this.thirddisplay.push({key: this.getMakerWorkDisplay[11].dictValue, value:this.introduce });
      this.thirddisplay.push({key: this.getMakerWorkDisplay[14].dictValue, value:this.summarize});
      this.thirddisplay.push({key: this.getMakerWorkDisplay[15].dictValue, value:this.selectActivityname});
      var newarray=this.firstdisplay.concat(this.seconddata);
      var newarraysecond=newarray.concat(this.thirddisplay);
      this.alldataplay=newarraysecond;
      var params = new URLSearchParams();
      params.append('makerWorkDisplays',JSON.stringify(this.alldataplay) );
      params.append('userLabors',JSON.stringify(this.firstdisplayname));
      params.append('makerWorksSteps',JSON.stringify(this.secondtype));
      AXIOS.post('makerWorks/makerWorksSubmit', params).then(response => {
//        console.log(response.data)
      })
    }
  }

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
