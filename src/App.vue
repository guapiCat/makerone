<template>
  <div id="app">
    <component :is="currentView"></component>
    <router-view :fileURL="fileURL" v-on:voteReq="voteReq"/>
    <footPart></footPart>


  </div>
</template>

<script>

  import headPart from './components/headandfoot/headPart'
  import footPart from './components/headandfoot/footPart'
  import userPart from './components/userPart'
  import {AXIOS} from './http-common'

  import router from './router';

  export default {
    name: 'app',
    data (){
      return {
        fileURL: 'http://192.168.0.103:9000/',
        currentView: ''
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
        alert(data.voteObjId+data.voteObjType+data.voteStatus);
         var params = new URLSearchParams();
         AXIOS.get('common/vote', {
             params: {
                 voteObjId: data.voteObjId,
                 voteObjType: data.voteObjType,
                 voteStatus: data.voteStatus
             }
         }).then(response => {
                if(response.data==0){
                    console.log("vote ok");
                }else if(response.data==-1){
                    console.log("out vote");
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
</style>
