<!--这是头部组件-->
<template>
    <div class="hello">
        <div class="myHeaderMsg">
            <img v-on:click="goHome" class="myLogo" style="cursor: pointer" src="../../static/img/logo.png" alt=""/>


            <div v-for="value,index in myHeader" v-on:click="hdClick(index)" v-bind:class="{useron:index==guigeSpan}">
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
                <img class="mySs_img" src="../../static/img/nav_serch.png" alt=""/>
                <input class="mySs_inp" type="text" placeholder="请输入关键字"/>

                <div v-on:click="goSeeMsg" class="mySs_xx">
                    <img src="../../static/img/message.png" alt=""/>

                    <p>消息</p>
                    <div v-if="isMessage" class="redDot"></div>
                </div>
                <img v-if="allMsg" class="mySs_person" :src="fileURL+allMsg.sysUser.avatar" style="border-radius: 50%" alt=""/>
            </div>
        </div>
    </div>
</template>

<script type="es6">
    import {AXIOS} from '../http-common'
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
                guigeSpan: -1,
                allMsg:"",
                fileURL:"http://192.168.0.103:9000/",
                isMessage:false
            }
        },
        created:function(){
            var params = new URLSearchParams();
            //获取个人信息
            AXIOS.get('user/getUserInfo', {
                params: {}
            }).then(response => {
                //console.log(response);
                if(response.data){
                    this.allMsg=response.data;
                }else{
                    alert(response.data);
                }
            }).catch(e => {
                this.errors.push(e)
            });
            //获取新消息
            var params = new URLSearchParams();
            //获取type为0的信息（新消息）
            AXIOS.get('message/haveMessage', {
                params: {

                }
            }).then(response => {
                //console.log(response);
                if(response.data==true){
                    this.isMessage=true;
                }
            }).catch(e => {
                this.errors.push(e)
            });
        },
        methods: {
            goHome:function(){
                this.$router.push({ path: '/' })
            },
            goSeeMsg:function(){
                this.$router.push({ path: '/user/myMsg' })
            },
            hdClick: function (index) {
                this.guigeSpan = index;
                //可以根据index跳转对应的组件
                if(index==0){
                    this.$router.push({ path: '/user/psonSpace' })
                }else if(index==1){
                    this.$router.push({ path: '/user/myTeam' })
                }else if(index==2){
                    this.$router.push({ path: '/user/myGroup' })
                }else if(index==3){
                    this.$router.push({ path: '/user/psonAsset' })
                }else if(index==4){
                    this.$router.push({ path: '/user/MyWorks' })
                }else if(index==5){
                    this.$router.push({ path: '/user/myColl' })
                }
            }
        }
    }


</script>

<style scoped>
    /*改动的样式-yzh*/
    .redDot{
        border: 4px solid red;
        border-radius: 50%;
        width: 0px;
        height: 0px;
        float: left;
        margin: -17px -54px;
    }
    span{
        color:white;
    }
    .myHeadP{
        border-right: dotted 2px white;
        margin-top: 15px;
        margin-left: 30px;
    }
    .useron p a span{
        color: yellow;
    }
    a {
        cursor: pointer;
    }
    /*改动样式结束*/
    .myHeaderMsg {
        background: url("../../static/img/img_mynav.png");
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        background-position: 50% -14px;
    }

    .myHeaderMsg  p {
        border-right: dashed 2px white;
        font-size: 18px;
        margin-right: 20px;
        margin-left: 20px;
        margin-top: 8px;
        padding-right: 20px;
        cursor: pointer;
        line-height: 40px;
    }

    /*.myHeaderP span{*/
        /*color: white;*/
    /*}*/

    .myHeaderMsg  p  a:link {
        text-decoration: none;
    }

    .myHeaderMsg  p  a:hover {
        border-bottom: 1px solid yellow;
        color: yellow;
    }

    .myLogo {
        display: block;
        position: relative;
        width: 180px;
        height: 50px;
        left: -4%;
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
        margin-top: 6px;
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
