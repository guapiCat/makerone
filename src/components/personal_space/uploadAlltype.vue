<template>
<div>
  <div class="workshow" style="width: 1200px;margin: 50px auto;  ">
    <div class="center-title" style="margin-bottom: 20px; color: #969696;">
		<span> <img src="../../../static/img/icon_address.png" alt="" /><i style="margin-left: 15px;">益谷创客平台-作品展示-<span>提交作品</span></i>
		</span>
    </div>
    <SubPro  v-on:firstType="firstmessage" :fileURL="fileURL" v-show="!hidden" ></SubPro>
     <Second v-show="hidden" :fileURL="fileURL" v-on:secondType="secondmessage" ></Second>

  </div>
</div>
  </template>
<script>
  import SubPro from './SubPro'
  import Second from './Second'

    export default {
        name: "upload-alltype",
        data(){
          return{
            hidden:false,//是否展示子组件内容
          }
       },
         props: {
         fileURL: {
          type: String,
          required: true
        }
      },
      methods:{
        firstmessage:function (firstdata,firstdata1,firsthiden) {
          console.log(firstdata);
          console.log(firstdata1)
          this.hidden=firsthiden
        },
        secondmessage:function (seconddata,secondtype,secondhiden) {
          console.log(seconddata);
          console.log(secondtype);
          this.hidden=secondhiden
        }
      },
        components:{SubPro,Second}
    }
</script>

<style scoped>

</style>
