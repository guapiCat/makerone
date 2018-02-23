<template>
  <div id="app">
    <keep-alive>
      <userPart v-if="headNum === 1"></userPart>
      <headPart v-else></headPart>
    </keep-alive>
    <router-view/>
    <footPart></footPart>


  </div>
</template>

<script>

  import headPart from './components/headandfoot/headPart'
  import footPart from './components/headandfoot/footPart'
  import userPart from './components/userPart'

  import router from './router';

  export default {
    name: 'app',
    data (){
      return {
        headNum: global.headNum
      }
    },
    components: {
      headPart: headPart,
      footPart: footPart,
      userPart:userPart
    }
  }
</script>

<style>
</style>

