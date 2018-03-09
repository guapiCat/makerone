<template>
  <div class="hello compon_center">
    <!--content start-->
    <div class="am-g">
      <div class="am-u-sm-7 am-u-sm-centered" style="width:1200px;padding-top: 50px;padding-bottom: 70px">
        <span style="float: left"><img src="../../../static/img/icon_address.png"></span>
        <div style="float: left;padding-top: 6px;margin-left: 3px;">
          <span style="color: #999999;">益谷创客平台-个人空间-我的作品</span>
        </div>
      </div>

      <div class="am-u-sm-7 am-u-sm-centered" style="width:1200px;padding-top: 10px;">
        <div class="am-tabs" data-am-tabs>
          <ul class="am-tabs-nav am-nav am-nav-tabs">
            <li class="am-active">
              <a href="#tab1"><span>未完成的作品</span></a>
            </li>
            <li>
              <a href="#tab2"><span>已完成的作品</span></a>
            </li>


          </ul>

          <div class="am-tabs-bd">
            <div class="am-tab-panel am-fade am-in am-active" id="tab1">
             <uncompleteWork :fileURL="fileURL"></uncompleteWork>
            </div>
            <div class="am-tab-panel am-fade" id="tab2">
              <completeWork :fileURL="fileURL"></completeWork>
            </div>

          </div>
        </div>


      </div>
    </div>
    <!--foot-->
  </div>
</template>

<script type="es6">
  import uncompleteWork from './uncompletedWork'
  import completeWork from './completeWork'

  export default {
    name: 'hello',
    props: {
      fileURL: {
        type: String,
        required: true
      }
    },
    components:{uncompleteWork, completeWork},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',

      }
    }
  }


</script>

<style scoped>
  /*改动的样式-yzh*/

  /*改动样式结束*/
  .am-tabs-nav.am-nav.am-nav-tabs {
    border: solid 1px #F3F3F3;
    border-top: solid 5px #FECB56;
  }

  .am-nav-tabs>li>a:hover {
    border-color: #fff;
  }

  .am-nav-tabs>li>a {
    width: 200px;
    text-align: center;
    height: 50px;
    font-weight: bold;
    line-height: 36px;
  }

  .am-nav-tabs>li.am-active>a,
  .am-nav-tabs>li.am-active>a:hover,
  .am-nav-tabs>li.am-active>a:focus {
    border: 0;
  }

  .am-tabs-nav.am-nav.am-nav-tabs .am-active a {
    background: #FECB56;
    height: 50px;
    line-height: 36px;
    font-weight: bold;
  }
  .layout-footer{
    margin-top: 30px;
  }



  i{
    font-style: normal;
  }
  .header .logo img{
    height: 50px !important;

  }
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
  .login_table tr{
    width:100%;
    display: block;
    margin: 10px;
  }
  .login_table tr td{
    text-align: center;
    width: 915px;
  }

  .login_table a{
    font-size: 10px;
  }

  .am-form input[type="password"]{
    padding: 0.9em;
  }

  table tr{
    display: block;
    margin-bottom: 30px;
  }

  td{
    padding-right: 55px;
  }

  #select_page a{
    font-size: 20px;
    color: #000;
    cursor: pointer;
  }

  #select_page{
    background-color: #ffffff;
    height: 4%;
    border-left: 1px solid#f0f0f0;
    border-right: 1px solid#f0f0f0;
  }
  #select_page img{
    margin-bottom: 9px;
    margin-right: 5px;
    width: 20%;
    height: 20%
  }

  #select_page div{
    float:left;
    width: 140px;
    text-align: center;
  }

  .am-nav>li{
    height: 55px;
  }
  #type_bar span{
    color:#a5a5a4;
  }

  #type_bar a{
    color:#a5a5a4;
  }

  #type_bar a:hover{
    color:#22a2d4;
  }

  #status_bar a{
    color:#a5a5a4;
  }

  #status_bar a:hover{
    color:#22a2d4;
  }
  .left-img img{
    height:260px;
    width: 500px;
    margin-top: 10px;
    margin-left: 5%;
    border:1px solid #000000;
  }
  /*导航栏*/
  #x_bg{
    background: url(../../../static/img/img_mynav.png) center center !important;
  }
  #x_header_contain{
    margin-left: 9%
  }
  #x_nav{
    margin-left:6%!important;
  }
  #x_nav ul li:nth-child(6){
    border-right:0;
    padding-right: 0;
  }
  .nav_img{
    float: left;
    width: 164px;
    padding-left: 9%;
  }
  .nav_img img{
    width: 160px;
    margin-top: 10px;
  }
  .topbar{
    height: 50px;
  }

  .nav-search{
    float: left;
    width: 260px;
    border: solid 1px #fff;
    border-radius: 25px;
    margin-left: 2%;
    margin-top: 12px;
    height: 34px;
    line-height: 28px;
  }
  .nav-search img{
    margin-left: 19px;
    height: 22px;
  }
  .nav-search input{
    margin-left: 11px;
    background: #1076BE;
    border: #1076BE;
    color: #FFFFFF;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    color:    #fff;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #fff;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #fff;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #fff;
  }

  .topbar{
    background-color: #21252E;
  }
  i{
    font-style: normal;
  }
  .clear{
    clear: both;
    line-height: 1;
  }
  .icons{
    border: solid 1px;
    border-radius: 50%;
    padding: 2px 7px;
    line-height: 25px;
  }
  .header .logo{
    padding-top:0;
  }
  .header .logo img{
    height: 50px !important;

  }
  /*结束*/
  /*导航栏边框*/
  #x_nav ul li{
    border-right: dotted 1.5px #fff;
    padding-right: 37px;
  }
</style>
