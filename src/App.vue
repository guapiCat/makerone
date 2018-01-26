<template>
  <div id="app">
    <keep-alive>
      <footPart v-if="headNum === 1"></footPart>
      <headPart v-else></headPart>
    </keep-alive>
    <router-view/>
    <footPart></footPart>


  </div>
</template>

<script>

  import headPart from './components/headandfoot/headPart'
  import footPart from './components/headandfoot/footPart'


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
      footPart: footPart
    }
  }
</script>

<style>
</style>

