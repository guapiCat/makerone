<template>
    <div>
      <div class="am-g" style="background: url('static/img/img_login shading.png')  center center no-repeat;width:100%;height:966px;position: relative;">
        <div class="am-u-sm-5" style= "  height:200px;background-color:rgba(255,255,255,0.5);position: absolute;top: 25%;left:28%;padding-top: 4%;padding-bottom: 60px;text-align: center;">
          <span>恭喜您注册成功，请您马上 <router-link to="/login" style="color: #ff0000">登录</router-link></span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "register-success"
    }
</script>

<style scoped>

</style>
