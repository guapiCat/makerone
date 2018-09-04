<template>
  <div id="app">
    <component :is="currentView"></component>
    <router-view class="my-body" :schoolESB="schoolESB" :fileURL="fileURL" :downloadURL="downloadURL" v-on:voteReq="voteReq"/>
    <footPart></footPart>


  </div>
</template>

<script type="es6">

  import headPart from './components/headandfoot/headPart'
  import footPart from './components/headandfoot/footPart'
  import userPart from './components/userPart'
  import {AXIOS} from './http-common'

  import router from './router';

  export default {
    name: 'app',
    data (){
      return {
        fileURL: 'http://10000:9000?url=',
        downloadURL: 'http://100000:9000/download?url=',
        currentView: '',
          schoolESB:"创客平台"
      }
    },
    watch:{
       "$route":"changeHead",
    },
    created() {
      const url = location.href;
      if(url.indexOf("user") > -1){
        this.currentView = 'userPart'
      } else{
        this.currentView = 'headPart'
      }
    },
    methods: {
      changeHead() {
        const url = location.href;
        if(url.indexOf("user") > -1){
          this.currentView = 'userPart'
        } else{
          this.currentView = 'headPart'
        }
      },
      voteReq(data) {
//        alert(data.voteObjId+data.voteObjType+data.voteStatus);
         var params = new URLSearchParams();
         AXIOS.get('common/vote', {
             params: {
                 voteObjId: data.voteObjId,
                 voteObjType: data.voteObjType,
                 voteStatus: data.voteStatus
             }
         }).then(response => {
                if(response.data==0){
//                    console.log("vote ok");
                }else if(response.data==-1){
//                    console.log("out vote");
                }
             //console.log(response.data.list);

         }).catch(e => {
             this.errors.push(e);
         });
      }
    },
    components: {
      headPart: headPart,
      footPart: footPart,
      userPart: userPart
    }
  }
</script>

<style>
    .my-body{
        min-height: 800px;
    }
</style>
