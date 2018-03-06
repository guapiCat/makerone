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
        // AXIOS.get('common/vote', {
        //     params: {
        //         "voteObjId": voteObjId,
        //         "voteObjType": voteObjType,
        //         "voteStatus": voteStatus,
        //     }
        // }).then(response => {
        //
        //     //console.log(response.data.list);
        // }).catch(e => {
        //     this.errors.push(e);
        // });
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
