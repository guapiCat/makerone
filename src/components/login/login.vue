<template>
    <div>
        <div class="am-g"
             style="background: url('../../../static/img/img_login shading.png')  center center no-repeat;width:100%;height:966px;position: relative">
            <div class="am-u-sm-5"
                 style="  background-color:rgba(255,255,255,0.5);position: absolute;top: 15%;left:28%;padding-top: 30px;padding-bottom: 60px">
                <div class="am-u-sm-5 am-u-sm-offset-2" style="padding-top: 140px;">
                    <span style="font-size: 50px; ">登录</span>
                    <span style="font-size: 30px">LANDED</span>
                </div>
                <div class="am-u-sm-5" style="padding-left: 40px">
                    <img src="../../../static/img/img_login man_2.png"/>
                </div>
                <form class="am-form">
                    <div class="am-form-group am-u-sm-10 am-u-sm-centered">
                        <input type="text" class="am-input-lg am-radius" id="phone_studentId" name="phone_studentId"
                               placeholder="昵称"/>
                    </div>
                    <div class="am-form-group am-u-sm-10 am-u-sm-centered">
                        <input type="password" class="am-input-lg am-radius" id="password" name="password"
                               placeholder="密码"/>
                    </div>
                    <div class="am-form-group am-u-sm-10 am-u-sm-centered">
                        <label>
                            <input type="checkbox" style="height: 20px;width: 20px;" name="auto_login" id="auto_login">
                            <span style="font-weight: normal;">下次自动登录</span>
                        </label>
                        <a href="javascript:;" style="font-weight: normal;float: right;color: #000000">忘记密码?</a>
                    </div>
                    <div class="am-form-group am-u-sm-12 am-u-sm-centered">
                        <div class="am-u-sm-6 am-u-sm-centered">
                            <a style="display: block;margin-bottom: 10px;" @click="login()" class="table_button am-btn am-btn-default am-radius" name="login"
                               id="nextstep"><span style="font-size: 20px;">登录</span></a>
                            <!--<router-link to="/register" class="table_button am-btn am-btn-default am-radius"-->
                                         <!--name="re gister" id="cancel"><span style="font-size: 20px;margin-top: 10px;">我要注册</span>-->
                            <!--</router-link>-->

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script type="es6">
    import {AXIOS} from '../../http-common'
    import '../../../static/js/md5'
    export default {
        name: "login",
        data(){
            return {
                loginType: this.$route.params.loginType
            }
        },
        methods: {
            login() {
                var params = new URLSearchParams();
                var mad5password = $('#password').val();
                var mad5pass = $.md5(mad5password);
                //console.log(mad5pass);
                params.append("username", $("#phone_studentId").val());
                params.append("password", mad5pass);
                AXIOS.post('preUser/login', params)
                        .then(response => {
                            // JSON responses are automatically parsed.
                            //console.log(response.data);
                            var jsonResult = eval(response.data);
                            sessionStorage.setItem("TID", jsonResult["token"]);
                            sessionStorage.setItem("UID", jsonResult["sysUser"]["id"]);
                            sessionStorage.setItem("loginCasType", 2);//cas平台登录类型为1，yigu为2
                            sessionStorage.setItem("psonImg", response.data.sysUser.avatar);
                            sessionStorage.setItem("psonName", response.data.sysUser.realName);
                            alert("登录成功");
                            //保存头像图片到session
                            location.href = "/";

                        })
                        .catch(e => {
                            alert("账号或密码错误");
                            this.errors.push(e)
                        })
            }
        },
        created: function () {
            if (this.loginType == 1) {
                alert("请先登录");
            }
        },
        mounted: function () {
            $(function () {
                $(".layout-footer").css("margin-top", "0")
            })
        }
    }
</script>

<style scoped>
    .am-form input[type="text"].am-radius {
        border-radius: 8px;
    }

    .am-form input[type="text"] {
        padding: 0.9em;
    }

    .am-form input[type="password"].am-radius {
        border-radius: 8px;
    }

    .am-form input[type="password"] {
        padding: 0.9em;
    }

    .am-btn.am-radius {
        border-radius: 5px;
    }

    #x_nav ul li {
        float: left;
        font-size: 16px;
        margin-left: 60px;
        color: #fff;
        _margin-left: 33px;
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

    .table_button {
        width: 200px;
        height: 50px;
        padding-top: 15px;
    }

    a.am-btn-default:hover {
        background-color: #0090ff;
    }
</style>
