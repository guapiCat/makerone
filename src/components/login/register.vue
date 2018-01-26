<template>
<div>
  <div class="am-g" style="background: url('../../../static/img/img_login shading.png')  center center no-repeat;width:100%;height:966px;position: relative">
    <div class="am-u-sm-5" style= "  background-color:rgba(255,255,255,0.5);position: absolute;top: 15%;left:28%;padding-top: 30px;padding-bottom: 50px">
      <table class="login_table">
        <tr>
          <td>
            <span style="color: #f00;">*</span>
            <input class="login_input" type="text" id="username" name="username" placeholder="  用户名" />
          </td>
        </tr>

        <tr>
          <td>
            <span style="color: #f00;">*</span>
            <input class="login_input" type="text" id="password" name="password" placeholder="  密码" />
          </td>
        </tr>

        <tr>
          <td>
            <span style="color: #f00;">*</span>
            <input class="login_input" type="text" name="repeat_pwd" placeholder="  再次输入密码" />
          </td>
        </tr>

        <tr>
          <td>
            <span style="color: #f00;">*</span>
            <input class="login_input" type="text" id="nickname" name="nickname" placeholder="  昵称" />
          </td>
        </tr>

        <tr>
          <td>
            <div style="margin:0 auto;width: 70%;height:50px">
              <span style="float: left;margin-top: 3px;"><span style="color: #f00">*</span>&nbsp;用户类型</span>
              <input style="float: left;margin-left: 30px;margin-top: 9px;width: 18px;height: 18px;" type="radio" name="user_type" id="student">
              <span style="float: left;margin-left: 10px;margin-top: 3px;margin-right: 30px;" for="student">学生</span>
              <input style="float: left;margin-left: 30px;margin-top: 9px;width: 18px;height:18px;" type="radio" name="user_type" id="teacher">
              <span style="float: left;margin-left: 10px;margin-top: 3px;" for="teacher">老师</span>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            &nbsp;&nbsp;<input class="login_input" type="text" id="mobilephone" name="mobilephone" placeholder="  输入手机号码" />
          </td>
        </tr>

        <tr style="margin-top:40px;">
          <td>
            <div style="width: 70%;height:50px;margin:0 auto">
              <input type="checkbox" style="float:left;margin-right:40px; width: 20px;height: 20px;"/>
              <span style="float: left;">我已阅读并接受服务协议</span>
            </div>
          </td>
        </tr>

        <tr style="margin-top:40px;">
          <td>
          <router-link to="/registerSuccess" class="table_button am-btn am-btn-default am-radius" name="nextstep" id="nextstep" style=";margin-right: 20px"><span style="font-size: 20px;">下一步</span></router-link>
            <a  class="table_button am-btn am-btn-default am-radius" name="cancel" id="cancel"><span style="font-size: 20px;">返回</span></a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</div>

</template>

<script>
    export default {
        name: "register",
      mounted:function () {
        $(function(){
          $(".layout-footer").css("margin-top","0")
        })
      }
    }
</script>

<style scoped>
  .am-nav > li > a:hover, .am-nav > li > a:focus{
    outline:none;
  }
  .am-nav-justify > li{
    width: 150px;
  }
  .am-slider .am-slides img{
    height: 400px;
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
  .login_table{
    width:90%;
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
  .login_input{
    width: 70%;
    height: 50px;
    border-radius: 5px;
  }
  .table_button{
    width: 190px;
    height: 50px;
    padding-top: 15px;
  }

</style>
