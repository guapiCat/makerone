<template>
<div>
  <div class="workshow" style="width: 1200px;margin: 50px auto;  ">
    <div class="center-title" style="margin-bottom: 20px; color: #969696;">
		<span> <img src="../../../static/img/icon_address.png" alt="" /><i style="margin-left: 15px;">{{schoolESB}}-作品展示-<span>提交作品</span></i>
		</span>
    </div>
    <SubPro  v-on:firstType="firstmessage" :fileURL="fileURL":firstdisplay="firstdisplay" v-show="firsthidden" ></SubPro>
     <Second v-show="secondhidden"  v-on:secondType="secondmessage" ></Second>
    <LastPro v-show="lasthidden" :firstdisplay="firstdisplay" :firstdisplayname="firstdisplayname" :seconddata="seconddata" :secondtype="secondtype"></LastPro>

  </div>
</div>
  </template>
<script>
  import SubPro from './SubPro'
  import Second from './Second'
  import LastPro from './LastPro'
    export default {
        name: "upload-alltype",
        props: {
            schoolESB: {
                type: String,
                required: true
            },
            fileURL: {
                type: String,
                required: true
            }
        },
        data(){
          return{
            firsthidden:true,//是否展示子组件内容
            secondhidden:false,
            lasthidden:false,
            firstdisplay:[],
            firstdisplayname:[],
            seconddata:[],
            secondtype:[]
          }
       },
         props: {
         fileURL: {
          type: String,
          required: true
        }
      },
      methods:{
        firstmessage:function (firstdata,firstdata1,firsthide,lasthide) {
          this.firstdisplay=firstdata;
          this.firstdisplayname=firstdata1
          this.secondhidden=firsthide;
          this.firsthidden=lasthide;
          this.lasthide=lasthide
        },
        secondmessage:function (seconddata,secondtype,firsthide,lasthide) {
          this.seconddata=seconddata,
          this.secondtype=secondtype,
          this.secondhidden=firsthide,
          this.lasthidden=lasthide

        }
      },
        components:{SubPro,Second,LastPro}
    }
</script>

<style scoped>

</style>
