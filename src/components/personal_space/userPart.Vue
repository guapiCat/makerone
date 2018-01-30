<!--这是头部组件-->
<template>
    <div class="hello">
        <div class="myHeaderMsg">
            <img class="myLogo" src="../../../static/img/logo.png" alt=""/>


            <div v-for="value,index in myHeader" v-on:click="hdClick(index)" v-bind:class="{on:index==guigeSpan}">
                <p class="myHeadP">
                    <a>
                        <span>{{value}}</span>
                    </a>
                </p>
            </div>

            <!--<p><a href="">个人信息</a></p>-->

            <!--<p><a href="">我的社团</a></p>-->

            <!--<p><a href="">我的团队</a></p>-->

            <!--<p><a href="">个人资产</a></p>-->

            <!--<p><a href="">我的作品</a></p>-->

            <!--<p><a href="">我的收藏</a></p>-->

            <div class="mySs">
                <img class="mySs_img" src="../../../static/img/nav_serch.png" alt=""/>
                <input class="mySs_inp" type="text" placeholder="请输入关键字"/>

                <div class="mySs_xx">
                    <img src="../../../static/img/message.png" alt=""/>

                    <p>消息</p>
                </div>
                <img class="mySs_person" src="../../../static/img/img_bitmap.png" alt=""/>
            </div>
        </div>
    </div>
</template>

<script type="es6">
    export default {
        name: 'hello',
        data () {
            return {
                myHeader: [
                    "个人信息",
                    "我的社团",
                    "我的团队",
                    "个人资产",
                    "我的作品",
                    "我的收藏"
                ],
                guigeSpan: -1
            }
        },
        methods: {
            hdClick: function (index) {
                this.guigeSpan = index;
                console.log(index);
                //可以根据index跳转对应的组件
                if(index==0){
                    this.$router.push({ path: '/user/psonData' })
                }else if(index==2){
                    this.$router.push({ path: '/user/myGroup' })
                }else if(index==4){
                    this.$router.push({ path: '/user/subPro' })
                }else if(index==5){
                    this.$router.push({ path: '/user/myColl' })
                }
            }
        }
    }


</script>

<style scoped>
    /*改动的样式-yzh*/
    .myHeadP{
        border-right: dotted 2px white;
    }
    .on p a {
        color: yellow;
    }

    a {
        cursor: pointer;
    }
    /*改动样式结束*/
    .myHeaderMsg {
        background: url("../../../static/img/img_mynav.png");
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        background-position: 50% -14px;
    }

    .myHeaderMsg > p {
        border-right: dashed 2px white;
        font-size: 18px;
        margin-right: 20px;
        margin-left: 20px;
        padding-right: 20px;
        cursor: pointer;
        line-height: 40px;
    }

    .myHeaderMsg > p > a {
        color: white;
    }

    .myHeaderMsg > p > a:link {
        text-decoration: none;
    }

    .myHeaderMsg > p > a:hover {
        border-bottom: 1px solid yellow;
        color: yellow;
    }

    .myLogo {
        display: block;
        position: relative;
        width: 180px;
        height: 50px;
        left: -8%;
        top: 5px;
    }

    .mySs {
        height: 30px;
        width: 160px;
        border-radius: 20px;
        border: solid 2px white;
        position: relative;
        top: 16px;
        left: 2%;
        cursor: pointer;
    }

    .mySs .mySs_img {
        height: 25px;
        position: absolute;
        top: 2px;
        left: 5px;
    }

    .mySs .mySs_inp {
        background: #0F76BE;
        position: absolute;
        width: 95px;
        top: 2px;
        left: 40px;
        outline: none;
        border: none;
        color: white;
    }

    .mySs .mySs_person {
        width: 40px;
        height: 40px;
        position: relative;
        left: 100%;
        top: -8px;
    }

    .mySs .mySs_xx {
        position: relative;
        left: 120%;
    }

    .mySs .mySs_xx > img {
        float: left;
        margin-top: -14px;
    }

    .mySs .mySs_xx > p {
        float: left;
        color: white;
        margin-top: 10px;
        margin-left: -28px;
        border:none;
    }

    /*改变默认字体*/
    .mySs_inp::-webkit-input-placeholder {
        /*WebKit browsers*/

        color: white;

    }

    .mySs_inp::-moz-input-placeholder {
        /*Mozilla Firefox*/

        color: white;

    }

    .mySs_inp::-ms-input-placeholder {
        /*Internet Explorer*/

        color: white;

    }

    /*默认字体结束*/
</style>