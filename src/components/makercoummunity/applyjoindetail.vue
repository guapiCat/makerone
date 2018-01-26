<template>
<div>
  <div class="am-g">
    <div class="am-u-sm-8 am-u-sm-centered" style="padding-top: 50px;padding-bottom: 70px">
      <span style="float: left"><img src="../../../static/img/icon_address.png"></span>
      <div style="float: left;padding-top: 6px;margin-left: 3px;">
        <span style="color: #999999;">益谷创客平台-创客项目-我要加入</span>
      </div>
    </div>

    <div class="am-u-sm-8 am-u-sm-centered" style="background-color: #FFCA57;height: 1200px">

      <div class="am-g" style="background-color: #eeeeee;height: 10%;margin-bottom: 9px;">
        <h1 style="text-align: center;margin-top:4%;font-weight: normal;">我要加入</h1>
      </div>

      <div class="am-g" style="background-color: #FFFFFF;height: 80%;border: 1px solid#f0f0f0">
        <div style="margin-top: 10%;margin-left: 6%;">
          <table style="width: 100%">

            <tr>
              <td><span>姓名:</span></td>
              <td style="width:500px"><input type="text" name="username" id="username" style="width: 100%;border-radius: 4px" readonly/></td>
            </tr>

            <tr>
              <td><span>班级:</span></td>
              <td style="width:500px"><input type="text" name="class" id="class" style="width: 100%;border-radius: 4px" readonly/></td>
            </tr>

            <tr style="padding-bottom: 70px;">
              <td class="desc" valign="top"><span>自我介绍:</span></td>
              <td style="width:500px"><textarea name="self_desc" id="self_desc" style="width: 100%;height: 300px;border-radius: 4px">介绍自己特长......</textarea></td>
            </tr>

            <tr>
              <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>
                <a href="javascript:;" class="am-btn am-btn-primary am-radius table_button"><span style="font-size: 20px;">提交</span></a>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div class="am-g" style="background-color: #FFFFFF;height: 10%"></div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "applyjoin"
    }
</script>

<style scoped>
  login_table a{
    font-size: 10px;
  }
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
  a.am-btn.am-radius {
    border-radius: 5px;
  }

  table tr{
    display: block;
    margin-bottom: 30px;
  }

  td{
    padding-right: 55px;
  }

  .desc{
    padding-right:24px;
  }

  #x_header_contain {
    margin-left: 17%;
  }
  .nav-container {
    background: url(../../../static/img/nav-bg.png) center center;
    width: 100%;
    height: 100px;
    z-index: 2;
  }

  .nav-container img {
    margin-left: 23%;
    margin-top: 1%;
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
    width: 170px;
    height: 50px;
    padding-top: 15px;
    border:2px solid #5e9bb8;
  }

  a.am-btn-default{
    background-color: #ffffff;
    border:2px solid #5e9bb8;
  }
  .am-nav-justify > li{
    width: 150px;
  }
  .am-slider .am-slides img{
    height: 400px;
  }
</style>
