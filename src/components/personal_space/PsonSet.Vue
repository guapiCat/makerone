<template>
    <div class="hello compon_center">
        <div class="am-g">
            <div style="margin-top: 4%;margin-left: 6%;">
                <table style="width: 100%">

                    <tr>
                        <td style="width: 130px;"><span style="font-weight: bold">头像设置</span></td>
                        <td style="width: 900px;padding-top: 19px;">
                            <hr/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div style="width:120px;height:120px;margin-right: 10px;"><img
                                    src="../../../static/img/img_bitmap.png" width="100%" height="100%"></div>
                        </td>
                        <td style="width:650px;" valign="top">
                            <span style="font-size: 15px;color: #959595;">最佳尺寸为120*120像素的方形图片(支持JPG、PNG、GIF格式,图片尺寸不超过3MB)</span>
                            <span class="btn-upload" style="margin-top: 20px;">
                              <a href="javascript:;" class="am-btn am-btn-primary am-radius">上传图片</a>
                              <input type="file" multiple name="file_0" class="input-file">
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding-right: 26px;width: 130px;"><span style="font-weight: bold">个人信息设置</span></td>
                        <td style="width: 900px;padding-top: 19px;">
                            <hr/>
                        </td>
                    </tr>

                    <tr>
                        <td style="width: 130px;"><span>昵称:</span></td>
                        <td style="width: 900px;"><input type="text" name="username" id="username"/></td>
                    </tr>

                    <tr>
                        <td style="width: 130px;"><span>用户身份:</span></td>
                        <td style="width: 900px;"><span>学生</span></td>
                    </tr>

                    <tr>
                        <td style="width: 130px;"><span>性别:</span></td>
                        <td style="width: 900px;">
                            <input type="radio" name="sex" id="secret"/><span style="margin-right: 20px;">保密</span>
                            <input type="radio" name="sex" id="male"/><span style="margin-right: 20px;">男</span>
                            <input type="radio" name="sex" id="femal"/><span>女</span>
                        </td>
                    </tr>

                    <tr>
                        <td style="width: 130px;"><span>所属学校:</span></td>
                        <td style="width: 900px;"><input type="text" name="school" id="school"/></td>
                    </tr>

                    <tr>
                        <td style="width: 130px;"><span>所属年级:</span></td>
                        <td style="width: 900px;"><input type="text" name="grade" id="grade"/></td>
                    </tr>

                    <tr>
                        <td style="width: 130px;"><span>真实姓名:</span></td>
                        <td style="width: 900px;"><input type="text" name="name" id="name"/></td>
                    </tr>

                    <tr>
                        <td style="width: 130px;"><span>我的学号:</span></td>
                        <td style="width: 900px;"><input type="text" name="studentId" id="studentId"/></td>
                    </tr>

                    <tr>
                        <td style="width: 130px;"><span>手机号码:</span></td>
                        <td style="width: 900px;"><input type="text" name="mobilephone" id="mobilephone"/></td>
                    </tr>
                    <tr>
                        <td style="width: 130px;" valign="top"><span>简介:</span></td>
                        <td style="width: 900px;"><textarea type="text" name="desc" id="desc"
                                                            style="width: 100%;height: 200px;"></textarea></td>
                    </tr>
                    <tr>
                        <td style="width: 130px;"></td>
                        <td style="width: 900px;">
                            <div>
                                <a href="javascript:;" class="am-btn am-btn-default am-radius table_button"
                                   style="margin-right: 40%;"><span style="color: #FFFFFF">保存</span></a>
                                <a href="javascript:;" class="am-btn am-btn-default am-radius table_button"><span
                                        style="color: #FFFFFF">取消</span></a>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
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

    .header .logo img {
        height: 50px !important;

    }

    .am-nav > li > a:hover, .am-nav > li > a:focus {
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

    .table_button {
        width: 100px;
        height: 30px;
        padding-top: 3px;
    }

    a.am-btn-default {
        background-color: #0094cd;
    }

    a.am-btn-default:visited {
        background-color: #0094cd;
    }

    a.am-btn-default:link {
        background-color: #0094cd;
    }

    a.am-btn-default:active {
        background-color: #0094cd;
    }

    login_table a {
        font-size: 10px;
    }

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

    a.am-btn.am-radius {
        border-radius: 5px;
    }

    table tr {
        display: block;
        margin-bottom: 30px;
    }

    table tr td {
        padding-right: 55px;
    }

    .btn-upload {
        position: relative;
        display: inline-block;
        height: 36px;
        *display: inline;
        overflow: hidden;
        vertical-align: middle;
        cursor: pointer
    }

    .input-file {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        z-index: 1;
        font-size: 30em;
        *font-size: 30px;
        opacity: 0;
        filter: alpha(opacity=0)
    }

    .btn-upload a.am-btn-default:link {
        background-color: #d4d4d4;
    }

    .btn-upload a.am-btn-default:visited {
        background-color: #d4d4d4;
    }

</style>