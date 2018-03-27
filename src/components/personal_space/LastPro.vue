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
          <label v-if="getMakerWorkDisplay[13]">{{getMakerWorkDisplay[13].dictDesc}}:</label>
          <editor v-on:editor="workscontent" style="width: 740px;margin-left: 13.21%;margin-top: -2%;"></editor>
      </div>
      <div class="am-form-group">
        <label v-if="getMakerWorkDisplay[14]">{{getMakerWorkDisplay[14].dictDesc}}:</label>
        <textarea v-model="difficulty" rows="4" cols="90" placeholder="没有攻克过难关，怎能称得上大神！你们一定也遇到过困难吧，如何克服与解决的呢?"/></textarea>
      </div>
        <div class="am-form-group" >
          <label v-if="getMakerWorkDisplay[12]">{{getMakerWorkDisplay[12].dictDesc}}:</label>
          <textarea v-model="introduce" rows="4" cols="90"  placeholder="把你们的作品简单介绍一下(●'◡'●)ﾉ"/></textarea>
        </div>
      <div class="am-form-group" >
        <label v-if="getMakerWorkDisplay[15]">{{getMakerWorkDisplay[15].dictDesc}}:</label>
        <textarea v-model="summarize" rows="4" cols="90"  placeholder="取得辉煌的成绩也不忘总结分析哦，开个总结会，把创意实现的过程中的成绩与不足，下一步还能如何改进好好总结一下吧！"/></textarea>
      </div>

      <div class="am-form-group" v-show="ishide">
        <label v-if="getMakerWorkDisplay[16]">{{getMakerWorkDisplay[16].dictDesc}}:</label>
        <span style="margin-top: 5px;display: block;">(必须选择活动)</span>
      </div>
      <div class="activity" style="float: left;margin-left: 153px;margin-top: -78px;" >
        <select name="" style="width: 200px;"  v-model="selectActivity" @change="selectAct()">
          <option  v-for="(item,index) in activity"  v-bind:value="index">{{item.activityName}}</option>
        </select>
      </div>
        <div class="am-form-group" v-show="nothide">
          <label >参加的活动:</label>
          <label v-if="this.activity[0]" class="am-radio-inline" style="margin-left: 45px;font-size: 18px;">
            {{this.activity[0].activityName}}
          </label>

        </div>

      <a  style="width: 120px;margin-left: 200px;margin-right: 200px;">
        <button type="submit" class="am-btn am-btn-primary" @click="preserve()">保存作品</button>
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
      alldataplay:[],
      // 回显
      lastmsg:[],
      ishide:true,
      nothide:false,
      upMakerWorkId:this.$route.params.workId,
      activity:[],
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
    if (this.$route.params.workId){
      //回显
      AXIOS.get('makerWorks/editMakerWork', {
        params:{
          makerWorkId: this.$route.params.workId,
        }
      }).then(response => {
        this.lastmsg=response.data
        this.difficulty=this.lastmsg.makerWorkDisplays[13].content;
        this.summarize =this.lastmsg.makerWorkDisplays[14].content;
        this.introduce=this.lastmsg.makerWorkDisplays[11].content;
        if(this.lastmsg.makerWorkDisplays[15].content.length>0){
          this.ishide=false;
          this.nothide=true;
        }

      });
      AXIOS.get('makerActivity/makerActivityParticulars', {
        params:{
          activityId: this.lastmsg.makerWorkDisplays[15].content,
        }
      }).then(response => {
        this.activity=response.data[0].activityName


      })
    }



  },
  methods:{
    workscontent:function (data) {
      this.myworkscontent=data
    },

    selectAct(){
      this.selectActivityname=this.activity[this.selectActivity].id
    },
    submitData(){
      if(typeof(this.upMakerWorkId)=="undefined"){
        this.upMakerWorkId='';

      }else {
        if(this.activity && this.lastmsg.makerWorkDisplays){
          this.thirddisplay.push({key: this.getMakerWorkDisplay[16].dictValue, value:this.lastmsg.makerWorkDisplays[15].content});
        }else {
          this.thirddisplay.push({key: this.getMakerWorkDisplay[16].dictValue, value:this.selectActivityname});
        }
        this.thirddisplay.push({key: this.getMakerWorkDisplay[12].dictValue, value:this.introduce});
        this.thirddisplay.push({key: this.getMakerWorkDisplay[13].dictValue, value:this.myworkscontent});
        this.thirddisplay.push({key: this.getMakerWorkDisplay[14].dictValue, value:this.difficulty });
        this.thirddisplay.push({key: this.getMakerWorkDisplay[15].dictValue, value:this.summarize});
        var newarray=this.firstdisplay.concat(this.seconddata);
        var newarraysecond=newarray.concat(this.thirddisplay);
        this.alldataplay=newarraysecond;
        var params = new URLSearchParams();
        params.append('makerWorkDisplays',JSON.stringify(this.alldataplay) );
        params.append('userLabors',JSON.stringify(this.firstdisplayname));
        params.append('makerWorksSteps',JSON.stringify(this.secondtype));
        params.append('upMakerWorkId',this.upMakerWorkId)
        params.append('type','3');
        AXIOS.post('makerWorks/makerWorksSubmit', params).then(response => {
//              console.log(response.data);
          if(response.data==true){
              alert("提交成功");
              window.history.go(-1);
          }else{
              alert("网络连接错误");
          }
        })
      }

    },
    preserve(){
      if(typeof(this.upMakerWorkId)=="undefined"){
        this.upMakerWorkId='';
        this.thirddisplay.push({key: this.getMakerWorkDisplay[12].dictValue, value:this.introduce});
        this.thirddisplay.push({key: this.getMakerWorkDisplay[13].dictValue, value:this.myworkscontent});
        this.thirddisplay.push({key: this.getMakerWorkDisplay[14].dictValue, value:this.difficulty });
        this.thirddisplay.push({key: this.getMakerWorkDisplay[15].dictValue, value:this.summarize});
        this.thirddisplay.push({key: this.getMakerWorkDisplay[16].dictValue, value:this.selectActivityname});
        var newarray=this.firstdisplay.concat(this.seconddata);
        var newarraysecond=newarray.concat(this.thirddisplay);
        this.alldataplay=newarraysecond;
        var params = new URLSearchParams();
        params.append('makerWorkDisplays',JSON.stringify(this.alldataplay) );
        params.append('userLabors',JSON.stringify(this.firstdisplayname));
        params.append('makerWorksSteps',JSON.stringify(this.secondtype));
        params.append('upMakerWorkId',this.upMakerWorkId)
        params.append('type','2');
        AXIOS.post('makerWorks/makerWorksSubmit', params).then(response => {
//              console.log(response.data);
          if(response.data){
              alert("保存成功");
              window.history.go(-1);
          }else{
              alert("网络连接错误");
          }
        })

      }else {

      }

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
