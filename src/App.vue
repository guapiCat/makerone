<template>
  <div id="app">
    <component :is="currentView"></component>
    <router-view/>
    <footPart></footPart>


  </div>
</template>

<script>

  import headPart from './components/headandfoot/headPart'
  import footPart from './components/headandfoot/footPart'
  import userPart from './components/userPart.vue'

  import router from './router';

  export default {
    name: 'app',
    data (){
      return {
        currentView: 'headPart'
      }
    },
    watch:{
       "$route":"changeHead",
    },
    methods: {
      changeHead() {
        const url = location.href;
        if(url.indexOf("user") > -1){
          this.currentView = 'userPart'
        } else{
          this.currentView = 'headPart'
        }
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
