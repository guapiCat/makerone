<template>
    <div class="hello compon_center">
        <!--===========layout-container================-->

        <!--content-->
        <div class="workshow" style="width: 1200px;margin: 50px auto;  ">
            <div class="center-title" style="margin-bottom: 20px; color: #969696;">
		<span> <img src="../../../static/img/icon_address.png" alt="" /><i style="margin-left: 15px;">益谷创客平台-作品展示-<span>提交作品</span></i>
		</span>

            </div>
            <div class="center-box">
                <div class="content-title" style="height: 60px;">
                    <span style="background: url(../../../static/img/content-title1.1.png) center center; width: 291px;">第一步</span>

                    <span style="background: url(../../../static/img/content-tite2.png) center center; width: 297px;">第二步</span>

                    <span style="background: url(../../../static/img/content-title3.png) center center; width: 253px;">第三步</span>
                </div>
                <div class="content-box" style="border: solid 1px #F3F3F3; position: relative;">
                    <form action="" method="post">
                        <h2>基本信息</h2>
                        <div class="am-form-group">
                            <label for="doc-ipt-email-1">作品名称:</label>
                            <textarea class="" rows="4" cols="90"  placeholder="为你的项目取个响亮的名字吧!"></textarea>
                        </div>
                        <div class="am-form-group" >
                            <label for="doc-ipt-email-1">选择团队:</label>
                            <select id="id_select1" class="selectpicker bla bla bli" style="width: 650px;" onchange="show(this.value)">
                                <option  selected value="0" >点击选择</option>
                                <option>cow</option>
                                <option>bull</option>
                                <option>ox</option>
                            </select>
                            <!--<select data-am-selected  id="change" onchange="show(this.value)" >
                             <option  selected value="0" >点击选择</option>
                              <option value="1">Apple</option>
                              <option value="2" >Banana</option>
                               <option value="3">Orange</option>

                            </select>-->

                        </div>
                        <div class="am-form-group" style="margin-top: 50px;">
                            <label for="doc-ipt-email-1">团队分工:</label>
                            <div class="team" style="margin-left: 95px;margin-top: -46px; display: none;" >
                                <img src="../../../static/img/airplane.png"/>
                                <input type="text" name="" id="" value="" />
                                <input type="text" name="" id="" value="" />
                            </div>
                        </div>
                        <div class="am-form-group" style="overflow: hidden; position: absolute;top: 50px;right: 30px;">
                            <label for="doc-ta-1" style="float: left;">上传logo：</label>
                            <div id="uploader-demo" style="float: left;">
                                <!--用来存放item-->
                                <div id="fileList" class="uploader-list"></div>
                                <div id="filePicker">上传图片</div>
                            </div>
                        </div>
                        <div class="am-form-group" style="margin-top: 50px;">
                            <label for="doc-ipt-email-1">邀请辅导老师:</label>
                            <select id="id_select2" class="selectpicker bla bla bli"  data-live-search="true">
                                <option>cow</option>
                                <option>bull</option>
                                <option>ox</option>
                            </select>
                        </div>
                        <div class="am-form-group">
                            <label for="doc-ipt-email-1">创意来源:</label>
                            <textarea class="" rows="4" cols="136"  placeholder="给我们渗透渗透你们的创意闪光点来自哪里，有怎样的光明前程吧！"></textarea>
                        </div>
                        <div class="am-form-group">
                            <label for="doc-ipt-email-1">参考资料:</label>
                            <textarea class="" rows="4" cols="136"  placeholder="你们参考了哪些资料，访问了哪些网站？"></textarea>
                        </div>
                        <div class="am-form-group">
                            <label for="doc-ipt-email-1">知识运用:</label>
                            <textarea class="" rows="4" cols="136"  placeholder="你们运用了哪些课堂知识,如有没有用到爱因斯坦的E=mc2"></textarea>
                        </div>
                        <a href="" style="width: 120px;margin: 50px auto;display: block;">
                            <button style="width: 120px;" type="button" class="am-btn am-btn-default">下一步</button>
                        </a>

                    </form>

                </div>

            </div>

        </div>

        <!--foot-->../../
    </div>
</template>

<script type="es6">
export default {
    name: 'hello',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}


</script>

<style scoped>
    /*改动的样式-yzh*/

    /*改动样式结束*/
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
        text-decoration: none;
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


    .nav-active{
        color:#21a2d3 ;
    }

    /*content-title*/
    .content-title{

    }
    .content-title span{
        float: left;
        height: 60px;
        line-height:60px ;
        background-size: cover;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }

    /*end*/
    .am-form-group{
        margin-left: 20px;
        margin-top: 15px;
    }
    .btn-group .bootstrap-select {
        width: 650px;
    }
</style>