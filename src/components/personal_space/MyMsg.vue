<template>
    <div class="hello compon_center">
        <!--content start-->
        <div class="am-g">
            <div class="am-u-sm-9 am-u-sm-centered" style="padding-top: 50px;padding-bottom: 70px">
                <span style="float: left"><img src="../../../static/img/icon_address.png"></span>

                <div style="float: left;padding-top: 6px;margin-left: 3px;">
                    <span style="color: #999999;">益谷创客平台-个人空间-我的消息</span>
                </div>
            </div>

            <div class="am-u-sm-9 am-u-sm-centered" style="height: 100%;padding-top: 10px;">
                <div class="am-tabs" data-am-tabs>
                    <ul class="am-tabs-nav am-nav am-nav-tabs">
                        <li class="am-active">
                            <a href="#tab1"><span>新消息</span></a>
                        </li>
                        <li>
                            <a href="#tab2"><span>历史消息</span></a>
                        </li>

                    </ul>

                    <div class="am-tabs-bd">
                        <div class="am-tab-panel am-fade am-in am-active" id="tab1">

                            <div v-for="itemNew in allMsgNew" class="content" style="padding-bottom: 14%;border-bottom: 1px dashed gray">
                                <div class="am-u-sm-8" style="padding-left: 5%;">
                                    <div>
                                        <div>
                                            <div style="float: left;width: 12%;text-align: right;margin-right: 10px;margin-top: 20px;"><span>{{itemNew.createTime}}</span>
                                            </div>
                                            <div style="float: left;width: 800px;word-wrap:break-word;">
                                                <p style="display: inline;">
                                                    {{itemNew.content}}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="itemNew.messageType==1" class="am-u-sm-4" style="margin-top: 8%;">
                                    <a v-on:click="agreeHim(itemNew.id)" class="am-btn am-btn-primary" style="border-radius: 7px;width: 130px;">同意</a>
                                    <a v-on:click="refuseHim(itemNew.id)" class="am-btn am-btn-primary"
                                       style="border-radius: 7px;width: 130px;float: right;margin-right: 20%;">忽略</a>
                                </div>
                            </div>


                        </div>

                        <div class="am-tab-panel am-fade" id="tab2">


                            <div v-for="itemOld in allMsgOld" class="content" style="padding-bottom: 14%;border-bottom: 1px dashed gray">
                                <div class="am-u-sm-8" style="padding-left: 5%;">
                                    <div>
                                        <div>
                                            <div style="float: left;width: 12%;text-align: right;margin-right: 10px;margin-top: 20px;"><span>{{itemOld.createTime}}</span>
                                            </div>
                                            <div style="float: left;width: 800px;clear: both;margin-left: 4%;word-wrap:break-word;">
                                                <p style="display: inline;">
                                                    {{itemOld.content}}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="itemOld.messageType==1" class="am-u-sm-4" style="margin-top: 8%;">
                                    <a v-on:click="agreeHim(itemOld.id)" class="am-btn am-btn-primary" style="border-radius: 7px;width: 130px;">同意</a>
                                    <a v-on:click="refuseHim(itemOld.id)" class="am-btn am-btn-primary"
                                       style="border-radius: 7px;width: 130px;float: right;margin-right: 20%;">忽略</a>
                                </div>
                                <div v-if="itemOld.messageType==2" class="am-u-sm-2" style="margin-right:45px;margin-top: 8%;">
                                    <a class="am-btn am-btn-default" style="border-radius: 7px;width: 130px;">已同意</a>
                                </div>
                                <div v-if="itemOld.messageType==3" class="am-u-sm-2" style="margin-right:45px;margin-top: 8%;">
                                    <a class="am-btn am-btn-default" style="border-radius: 7px;width: 130px;">已忽略</a>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'

    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                allMsgNew:"",
                allMsgOld:""
            }
        },
        methods:{
            //拒绝申请
            refuseHim:function(getId){
                var params = new URLSearchParams();
                AXIOS.get('message/ignoreMessage', {
                    params: {
                        messageId:getId
                    }
                }).then(response => {
                    //console.log(response);
                    alert(response.data);
                }).catch(e => {
                    this.errors.push(e)
                });
            },
            //同意申请
            agreeHim:function(getId){
                var params = new URLSearchParams();
                AXIOS.get('message/agreeMessage', {
                    params: {
                        messageId:getId
                    }
                }).then(response => {
                    //console.log(response);
                    alert(response.data);
                }).catch(e => {
                    this.errors.push(e)
                });
            }
        },
        created:function(){
            var params = new URLSearchParams();
            //获取type为0的信息（新消息）
            AXIOS.get('message/messageList', {
                params: {
                    messagesType:0
                }
            }).then(response => {
                //console.log(response);
                this.allMsgNew=response.data;
            }).catch(e => {
                this.errors.push(e)
            });
            //获取type为1的信息（历史消息）
            AXIOS.get('message/messageList', {
                params: {
                    messagesType:1
                }
            }).then(response => {
                //console.log(response);
                this.allMsgOld=response.data;
            }).catch(e => {
                this.errors.push(e)
            });
        }
    }


</script>

<style scoped>
    .topbar {
        background-color: #21252E;
    }

    .icons {
        border: solid 1px;
        border-radius: 50%;
        padding: 2px 7px;
        line-height: 25px;
    }

    .header .logo img {
        height: 50px !important;
    }

    .am-nav > li > a:hover,
    .am-nav > li > a:focus {
        outline: none;
    }

    .am-nav-justify > li {
        width: 150px;
    }

    .am-slider .am-slides img {
        height: 400px;
    }

    .section--header span {
        color: #3FA6E7;
    }

    .section--header img {
        height: 50px;
        margin-left: -145px
    }

    .section--header span {
        display: block;
        margin-left: 60px;
    }

    .am-thumbnails > li {
        padding: 0 3rem 1rem .5rem;
    }

    .login_table tr {
        width: 100%;
        display: block;
        margin: 10px;
    }

    .login_table tr td {
        text-align: center;
        width: 915px;
    }

    .login_table a {
        font-size: 10px;
    }

    .am-form input[type="password"] {
        padding: 0.9em;
    }

    table tr {
        display: block;
        margin-bottom: 30px;
    }

    td {
        padding-right: 55px;
    }

    #select_page a {
        font-size: 20px;
        color: #000;
        cursor: pointer;
    }

    #select_page {
        background-color: #ffffff;
        height: 4%;
        border-left: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
        border-right: 1px solid #f0f0f0;
    }

    #select_page img {
        margin-bottom: 9px;
        margin-right: 5px;
        width: 20%;
        height: 20%
    }

    #select_page div {
        float: left;
        width: 140px;
        text-align: center;
    }

    /*.am-nav>li{
    height: 55px;
}*/
    /*导航栏*/
    /*导航栏*/

    #x_bg {
        background: url(../../../static/img/img_mynav.png) center center !important;
    }

    #x_header_contain {
        margin-left: 9%
    }

    #x_nav ul li:nth-child(6) {
        border-right: 0;
        padding-right: 0;
    }

    .nav_img {
        float: left;
        width: 164px;
        padding-left: 6%;
    }

    .nav_img img {
        width: 160px;
        margin-top: 10px;
    }

    .topbar {
        height: 50px;
    }

    .nav-search {
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
        color: #fff;
    }

    :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #fff;
    }

    ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #fff;
    }

    :-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #fff;
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

    .am-tabs-nav.am-nav.am-nav-tabs {
        border: solid 1px #F3F3F3;
        border-top: solid 5px #FECB56;
    }

    .am-nav-tabs > li > a:hover {
        border-color: #fff;
    }

    .am-nav-tabs > li > a {
        width: 200px;
        text-align: center;
        height: 50px;
        font-weight: bold;
        line-height: 36px;
    }

    .am-nav-tabs > li.am-active > a,
    .am-nav-tabs > li.am-active > a:hover,
    .am-nav-tabs > li.am-active > a:focus {
        border: 0;
    }

    .am-tabs-nav.am-nav.am-nav-tabs .am-active a {
        background: #FECB56;
        height: 50px;
        line-height: 36px;
        font-weight: bold;
    }

    .layout-footer {
        margin-top: 30px;
    }
</style>