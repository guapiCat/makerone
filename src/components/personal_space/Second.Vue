<template>
    <div class="hello compon_center">
        <div class="myBigBorder">
            <div class="center-title" style="margin-bottom: 20px; color: #969696;">
		<span> <img src="../../../static/img/icon_address.png" alt=""/><i style="margin-left: 15px;">益谷创客平台-作品展示-<span>提交作品</span></i>
		</span>
            </div>
            <div class="content-title" style="height: 60px;">
                <span style="background: url(../../../static/img/content-title1.png) center center; width: 291px;">第一步</span>

                <span style="background: url(../../../static/img/content-title1.1.png) center center; width: 291px;">第二步</span>

                <span style="background: url(../../../static/img/content-title3.png) center center; width: 253px;">第三步</span>
            </div>
            <section class="se_1" style="height:870px">
                <h1 class="se_1_h1">基本信息</h1>

                <p class="se_1_p1">
                    <span>设计思路：</span>
      <textarea name="" id="" cols="130" rows="15"
                placeholder="你们计划如何将创意一步一步变为现实呢？用到了哪些技术，设计原理，有怎样大胆的思维和设计..."></textarea>
                </p>

                <p class="se_1_p2">
                    <span>时间安排：</span>
      <textarea name="" id="" cols="130" rows="15"
                placeholder="合理的时间安排可以大大提高工作效率哦，为你的创意实现一个时间安排吧！"></textarea>
                </p>

                <p class="se_1_p3">
                    <span>器材与材料清单：</span>
     <textarea name="" id="" cols="130" rows="15"
               placeholder="在实现创意中需要哪些工具和器材开个清单吧！"></textarea>
                </p>
            </section>
            <section class="se_2">
                <p class="se_2_p"><span style="color: red">*</span>制作过程：</p>
                <div class="adNewMsg2">
                    <div class="se_2_div1" v-for="(item,index) in stepX">
                        <div class="se_2_step">第{{index+1}}步</div>
                        <div>
                            <span class="se_2_sp">步骤标题</span><input type="text"/>
                            <span style="margin-left:100px;margin-right: 20px">选择源文件</span><input type="text"/>
                            <button class="se_2_button">浏览</button>
                        </div>
                        <div>
                            <span class="se_2_sp bzms">步骤描述</span><textarea class="bzmsTxt" name="" id="" cols="30"
                                                                            rows="4"></textarea>
                        </div>
                    </div>
                </div>
                <nav class="nav">
                    <div class="nav_ad" v-on:click="adStep">+</div>
                    <div class="nav_dec" v-on:click="decStep">-</div>
                </nav>
                <div style="clear:both" v-on:click="gooo()"></div>
            </section>
        </div>
    </div>
</template>

<script type="es6">
    export default {
        name: 'hello',
        data () {
            return {
                stepX:[1]
            }
        },
        methods:{
            adStep:function(){
                this.stepX.push(1);
            },
            decStep: function () {
                if(this.stepX.length>1){
                    this.stepX.pop();
                }
            }
        }
    }


</script>

<style scoped>
    #x_bg {
        background: url(../../../static/img/img_mynav.png) center center !important;
    }

    #x_header_contain {
        margin-left: 9%
    }

    #x_nav {
        margin-left: 6% !important;
    }

    #x_nav ul li:nth-child(6) {
        border-right: 0;
        padding-right: 0;
    }

    .nav_img {
        float: left;
        width: 164px;
        padding-left: 9%;
    }

    .nav_img img {
        width: 160px;
        margin-top: 10px;
    }

    .topbar {
        height: 50px;
    }

    .nav-search {
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

    .nav-search img {
        margin-left: 19px;
        height: 22px;
    }

    .nav-search input {
        margin-left: 11px;
        background: #1076BE;
        border: #1076BE;
        color: #FFFFFF;
    }

    ::-webkit-input-placeholder {
        /* WebKit browsers */
        /*color: #fff;*/
    }

    :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        /*color: #fff;*/
    }

    ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        /*color: #fff;*/
    }

    :-ms-input-placeholder {
        /* Internet Explorer 10+ */
        /*color: #fff;*/
    }

    .topbar {
        background-color: #21252E;
    }

    i {
        font-style: normal;
    }

    .clear {
        clear: both;
        line-height: 1;
    }

    .icons {
        border: solid 1px;
        border-radius: 50%;
        padding: 2px 7px;
        line-height: 25px;
    }

    .header .logo {
        padding-top: 0;
    }

    .header .logo img {
        height: 50px !important;

    }

    /*结束*/
    /*导航栏边框*/
    #x_nav ul li {
        border-right: dotted 1.5px #fff;
        padding-right: 37px;
    }

    /*section1部分*/
    .myBigBorder {
        width: 1200px;
        margin: 0 auto;
        border: 1px solid #EEEEEE;
        margin-top: 35px;
    }

    .se_1_h1 {
        margin-left: 50px;
        margin-bottom: 0px;
    }

    .se_1 p span {
        display: block;
        float: left;
        margin-top: 30px;
        margin-left: 50px;
    }

    .se_1 p textarea {
        float: left;
        margin-left: 185px;
        margin-top: -17px;
        border: solid 2px #BFBFBF;
        border-radius: 5px;
    }

    /*section_2部分*/
    .se_2 {
        clear: both;
    }

    .se_2_p {
        margin-left: 50px;
    }

    .se_2_div1 {
        float: left;
        margin-left: 185px;
        width: 800px;
        margin-top: -35px;
        border: solid #BFBFBF 2px;
        height: 280px;
    }

    .se_2_div1 .se_2_step {
        background: #BFBFBF;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: black;
        margin-bottom: 20px;
    }

    .se_2 .se_2_sp {
        margin: 20px;
    }

    .se_2 .se_2_button {
        width: 70px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        color: white;
        background: #169BD6;
        border: none;
        border-radius: 2px;
        cursor: pointer;
    }

    .se_2 input {
        outline: 1px;
        /*border:2px solid #BFBFBF;*/
        border-radius: 2px;
    }

    .se_2 .bzms {
        float: left;
        margin-left: 20px;
    }

    .se_2 .bzmsTxt {
        margin-top: 20px;
    }

    .nav .nav_ad {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: #0F76BC;
        border: 5px solid #0F76BC;
        float: right;
        color: white;
        line-height: 50px;
        text-align: center;
        font-size: 65px;
        margin-right: 110px;
        margin-top: 70px;
        cursor: pointer;
    }

    .nav .nav_dec {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: #0F76BC;
        border: 5px solid #0F76BC;
        float: right;
        color: white;
        line-height: 50px;
        text-align: center;
        font-size: 65px;
        margin-right: 19px;
        margin-top: -70px;
        cursor: pointer;
    }

    .nav_dec:hover {
        background: white;
        color: #0F76BC;
        border: 5px solid #0F76BC;
    }

    .nav_ad:hover {
        background: white;
        color: #0F76BC;
        border: 5px solid #0F76BC;
    }

    .content-title span {
        float: left;
        height: 60px;
        line-height: 60px;
        background-size: cover;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
</style>