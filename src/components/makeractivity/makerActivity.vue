<template>
<div>
  <div class="bg">
    <div class="am-g head_img">
      <img src="../../../static/img/banner_activity.png">
    </div>

    <div class="am-u-sm-10 am-u-sm-centered arrow_img">
      <img src="../../../static/img/img_arrow.png">
    </div>

    <div class="am-u-sm-10 am-u-sm-centered titleDiv">
      <h1 class="title">创客活动</h1>
      <img src="../../../static/img/img_title line.png">
    </div>



    <div class="am-g am-u-sm-8 am-u-sm-centered contentDiv_1" :style="background" v-for="item in activity">
      <router-link :to="{name:'activitydetail',params:{ id: item.id}}">
      <div class="am-u-sm-1 left_decoration">
        <img src="../../../static/img/img_decration_01.png"/>
      </div>

      <div class="am-u-sm-9 middle_content_1">
        <div class="inner_content">
          <span style="font-size: 45px;display: block;margin-bottom: 10%;">{{item.activityName}}</span>
          <span style="font-size: 23px;">活动时间:<span>{{item.startDate}}</span>--<span>{{item.endDate}}</span> </span>
        </div>
      </div>

      <div class="am-u-sm-1 right_decoration">
        <img src="../../../static/img/img_decration_02.png"/>
      </div>
      </router-link>
    </div>


    <div class="am-u-sm-10 am-u-sm-centered" style="text-align: center" v-show="ishide">
      <a class="am-btn am-btn-default am-radius" @click="clickmore(pageNum)">查看更多</a>
    </div>

  </div>
</div>
</template>

<script>
  import {AXIOS} from '../../http-common'
    export default {
        name: "maker-activity",
      props: {
        fileURL: {
          type: String,
          required: true
        }
      },
      data(){
       return{
         activity:[],
         background:{
           backgroundImage: '',
         },
         pageNum:[],
         ishide:true

       }

      },
      created:function () {
        this.reqAxios(1,2)
      },
      methods:{
        reqAxios:function (pageNum,pageSize) {
          AXIOS.get('makerActivity/makerActivityShow',{
            params:{
              pageNum:pageNum,
              pageSize:pageSize
            }
          }).then(response=>{
            this.activity=response.data.list;
            this.pageNum=pageNum;
            var bg='';
            for(var i=0;i<this.activity.length;i++){
              bg=this.activity[i].activityImage
            }
            this.background.backgroundImage="url('"+this.fileURL+bg+"')"
          }).catch(response => {
            this.errors.push(response);
          })

        },
        clickmore:function (pageNum) {
          this.ishide=false;
          this.reqAxios(pageNum,8)

        }
      }
    }
</script>

<style scoped>
  .title{
    font-size: 35px;
    font-weight: normal;
  }
  .arrow_img{
    text-align: center;
  }
  .titleDiv{
    text-align: center;
    margin-top: 50px;
  }

  .titleDiv img{
    margin-top: -50px;
  }

  .contentDiv_1{
    border-radius: 30px;
    /*background: url("../../../static/img/img_activity_01.png") 100% no-repeat;*/
    background-repeat: no-repeat;
    background-position:center center ;
    background-size: cover;
    height: 600px;
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 30px;
  }

  .left_decoration{
    padding-left: 0;
    margin-top: 9%;
  }

  .right_decoration{
    padding-left: 5.7rem;
    margin-top: 9%;
  }

  .middle_content_1{
    margin-top: 8%;
    border: dashed 6px #fff;
    border-radius: 35px;
    margin-left: 50px;
  }

  .inner_content{
    background: url('../../../static/img/login_frame.png') no-repeat;
    background-size: cover;
    height: 400px;
    border-radius: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    padding-top:13%;
  }

  a.am-btn.am-btn-default{
    width: 200px;
    height:50px;
    padding-top: 1%;
    margin-bottom: 2%;
    margin-top: 5%;
    background-color: #fff;
  }

  .am-btn.am-radius {
    border-radius: 5px;
  }

</style>
