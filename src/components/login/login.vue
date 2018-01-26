<template>
<div>
  <div class="am-g" style="background: url('../../../static/img/img_login shading.png')  center center no-repeat;width:100%;height:966px;position: relative">
    <div class="am-u-sm-5" style= "  background-color:rgba(255,255,255,0.5);position: absolute;top: 15%;left:28%;padding-top: 30px;padding-bottom: 60px">
      <div class="am-u-sm-5 am-u-sm-offset-2" style="padding-top: 140px;">
        <span style="font-size: 50px; ">登录</span>
        <span style="font-size: 30px">LANDED</span>
      </div>
      <div class="am-u-sm-5" style="padding-left: 40px">
        <img src="../../../static/img/img_login man_2.png" />
      </div>
      <form class="am-form">
        <div class="am-form-group am-u-sm-10 am-u-sm-centered">
          <input type="text" class="am-input-lg am-radius" id="phone_studentId" name="phone_studentId" placeholder="手机/学号"/>
        </div>
        <div class="am-form-group am-u-sm-10 am-u-sm-centered">
          <input type="password" class="am-input-lg am-radius" id="password" name="password" placeholder="密码"/>
        </div>
        <div class="am-form-group am-u-sm-10 am-u-sm-centered">
          <label>
            <input type="checkbox"style="height: 20px;width: 20px;" name="auto_login" id="auto_login">
            <span style="font-weight: normal;">下次自动登录</span>
          </label>
          <a href="javascript:;" style="font-weight: normal;float: right;color: #000000">忘记密码?</a>
        </div>
        <div class="am-form-group am-u-sm-10 am-u-sm-centered">
          <div class="am-u-sm-11 am-u-sm-centered">
            <a @click="login()" class="table_button am-btn am-btn-default am-radius" name="login" id="nextstep" style="margin-right: 60px;"><span style="font-size: 20px;">登录</span></a>
           <router-link to="/register"class="table_button am-btn am-btn-default am-radius" name="register" id="cancel"><span style="font-size: 20px;">我要注册</span></router-link>

          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</template>
<script>
  import {AXIOS} from '../../http-common'
  export default {
    name: "login",
    methods: {
      login() {
        var params = new URLSearchParams();
        params.append("username", $("#phone_studentId").val());
        params.append("password",$("#password").val());
        AXIOS.post('user/login', params)
          .then(response => {

            // JSON responses are automatically parsed.
            var jsonResult = eval(response.data);
              sessionStorage.setItem("TID", jsonResult["token"]);
              alert("登录成功");
            // location.href = "/";
          })
          .catch(e => {
            alert("登录失败");
            this.errors.push(e)
          })
      }
    },
    mounted:function () {
      $(function(){
        $(".layout-footer").css("margin-top","0")
      })
    }
  }
</script>

<style scoped>
  .am-form input[type="text"].am-radius{
    border-radius: 8px;
  }
  .am-form input[type="text"]{
    padding: 0.9em;
  }
  .am-form input[type="password"].am-radius{
    border-radius: 8px;
  }
  .am-form input[type="password"]{
    padding: 0.9em;
  }
  .am-btn.am-radius {
    border-radius: 5px;
  }

  #x_nav ul li{
    float:left;
    font-size:16px;
    margin-left:60px;
    color:#fff;
    _margin-left:33px;
  }
  .section--header span{
    color: #3FA6E7;
  }
  .section--header img{
    height: 50px;margin-left: -145px
  }
  .section--header span{
    display: block;
    margin-left:60px ;
  }
  .am-thumbnails > li{
    padding: 0 3rem 1rem .5rem;
  }
  .login_table tr{
    width:100%;
    display: block;
    margin: 10px;
  }
  .login_table tr td{
    text-align: center;
    width: 915px;
  }

  .table_button{
    width: 200px;
    height: 50px;
    padding-top: 15px;
  }

  a.am-btn-default:hover{
    background-color: #0090ff;
  }
</style>
