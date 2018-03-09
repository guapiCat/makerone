<template>
    <div class="hello">
        <div class="am-g compon_center">
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
                            <div style="width:120px;height:120px;margin-right: 10px;"><img :src="fileURL+allMsg.sysUser.avatar" style="border-radius: 50%;width: 100%;height:100%;"></div>
                        </td>
                        <td style="width:650px;" valign="top">
                            <span style="font-size: 15px;color: #959595;">最佳尺寸为120*120像素的方形图片(支持JPG、PNG、GIF格式,图片尺寸不超过3MB)</span>
                            <span class="btn-upload" style="margin-top: 20px;">
                              <!--<a href="javascript:;" class="am-btn am-btn-primary am-radius">上传图片</a>-->
                              <!--<input type="file" multiple name="file_0" class="input-file" id="postImg">-->
                                <input v-on:change="update($event)" accept="image/*" name="img" id="upload_file" type="file">
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
                        <td style="width: 900px;"><input placeholder="username" v-model="username" type="text" name="username" id="username"/></td>
                    </tr>

                    <tr>
                        <td style="width: 130px;"><span>用户身份:</span></td>
                        <td style="width: 900px;"><span>{{allMsg.userType}}</span></td>
                    </tr>

                    <!--<tr>-->
                        <!--<td style="width: 130px;"><span>性别:</span></td>-->
                        <!--<td style="width: 900px;">-->
                            <!--<input value="保密" type="radio" name="sex" id="secret"/><span style="margin-right: 20px;">保密</span>-->
                            <!--<input value="男" type="radio" name="sex" id="male"/><span style="margin-right: 20px;">男</span>-->
                            <!--<input value="女" type="radio" name="sex" id="femal"/><span>女</span>-->
                        <!--</td>-->
                    <!--</tr>-->

                    <tr>
                        <td style="width: 130px;"><span>所属学校:</span></td>
                        <td style="width: 900px;"><input disabled placeholder="school" v-model="school" type="text" name="school" id="school"/></td>
                    </tr>

                    <tr>
                        <td style="width: 130px;"><span>所属年级:</span></td>
                        <td style="width: 900px;"><input disabled placeholder="grade" v-model="grade" type="text" name="grade" id="grade"/></td>
                    </tr>

                    <tr>
                        <td style="width: 130px;"><span>真实姓名:</span></td>
                        <td style="width: 900px;"><input maxlength="16" placeholder="name" v-model="name" type="text" name="name" id="name"/></td>
                    </tr>

                    <tr>
                        <td style="width: 130px;"><span>我的学号:</span></td>
                        <td style="width: 900px;"><input disabled placeholder="studentId" v-model="studentId" type="text" name="studentId" id="studentId"/></td>
                    </tr>

                    <tr>
                        <td style="width: 130px;"><span>手机号码:</span></td>
                        <td style="width: 900px;"><input placeholder="mobilephone" v-model="mobilephone" type="text" name="mobilephone" id="mobilephone"/></td>
                    </tr>
                    <tr>
                        <td style="width: 130px;" valign="top"><span>简介:</span></td>
                        <td style="width: 900px;"><textarea maxlength="100" placeholder="desc" v-model="desc" type="text" name="desc" id="desc"
                                                            style="width: 100%;height: 200px;"></textarea></td>
                    </tr>
                    <tr>
                        <td style="width: 130px;"></td>
                        <td style="width: 900px;">
                            <div>
                                <a href="javascript:;" class="am-btn am-btn-default am-radius table_button"
                                   style="margin-right: 40%;"><span style="color: #FFFFFF" v-on:click="postAllMsg">保存</span></a>
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
    import {AXIOS} from '../../http-common'
    export default {
        name: 'hello',
        data () {
            return {
                allMsg:"",
                param:[],
                username:" ",
                school:" ",
                grade:" ",
                name:" ",
                studentId:" ",
                mobilephone:" ",
                desc:" ",
                file:"",
                avatar:"",
                fileURL:"http://192.168.0.103:9000/"
            }
        },
        created:function(){
            var params = new URLSearchParams();
            AXIOS.get('user/getUserInfo', {
                params: {}
            }).then(response => {
                //console.log(response);
                this.allMsg=response.data;
                this.username=response.data.sysUser.username;
                this.school=response.data.schoolName;
                this.grade=response.data.grade;
                this.name=response.data.sysUser.realName;
                this.studentId=response.data.sysUser.stuNum;
                this.mobilephone=response.data.sysUser.mobile;
                this.desc=response.data.sysUser.intro;
            }).catch(e => {
                this.errors.push(e)
            });
        },
        methods:{
            update:function(e){
                this.file=e.target.files[0];
                console.log(this.file);
            },
            postAllMsg:function(){
                if(this.username.length<2||this.name.length<2){
                    alert("请输入一个更长的用户名");
                }else{
                    //提交图片文件，获取相对路径
                    var param = new FormData(); // 创建form对象
                    param.append('file', this.file, this.file.name); // 通过append向form对象添加数据
                    //param.append("username",this.username);
                    //param.append("realName",this.name);
                    //param.append("mobile",this.mobilephone);
                    //param.append("intro",this.desc);
                    let config = {
                        headers: {'Content-Type': 'multipart/form-data'}
                    };
                    // 添加请求头
                    AXIOS.post('common/upload', param, config).then(response => {
                        //console.log(response.data);
                        this.avatar=response.data;
                        //发送提交的修改信息
                        var params = new URLSearchParams();
                        params.append("avatar",this.avatar);
                        params.append("username",this.username);
                        params.append("realName",this.name);
                        params.append("mobile",this.mobilephone);
                        params.append("intro",this.desc);
                        AXIOS.post('user/editUser', params).then(response => {
                            alert(response.data);
                        }).catch(e => {
                            this.errors.push(e)
                        });
                    })
                }
            }

        },
        mounted:function(){

        }
    }


</script>

<style scoped>
    /*改动的样式-yzh*/
    .compon_center{
        width: 1000px;
        margin: 0 auto;
    }
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