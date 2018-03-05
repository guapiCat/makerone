<template>
    <div class="hello">
        <!--内容-->
        <div class="workshow" style="width: 1200px;margin: 50px auto; ">
            <div class="center-title" style="margin-bottom: 20px; color: #969696;">
                <span> <img src="static/img/icon_address.png" alt=""/><i>益谷创客平台-创客社团-<span>创建团队</span></i></span>
            </div>
            <div class="center-box"
                 style="text-align: center; border: solid 1px #f3f3f3; border-bottom: solid 5px #FAC952; padding: 20px ; background-color: #EEEEEE;">
                <h1>创建团队</h1>
            </div>
            <div class="center-box" style="border: solid 3px #f3f3f3 ; padding: 20px ;width: 100%;height: 100%;">
                <h1>团队信息</h1>

                <div class="content-center">
                    <form action="" method="post">
                        <div class="am-form-group">
                            <label>团队名称：</label>
                            <input v-model="teamName" type="text" style="width: 750px;" class="" id="team-name">
                        </div>
                        <div class="am-form-group">
                            <label>需要人数：</label>
                            <input disabled="disabled" placeholder="系统默认最多为10人" type="text" style="width: 750px;" class="" id="team-number">
                        </div>
                        <div class="am-form-group">
                            <label for="doc-ta-1">团队介绍：</label>
                            <textarea v-model="teamIntro" class="" cols="91" rows="5" id="doc-ta-1"></textarea>
                        </div>
                        <div class="am-form-group" style="overflow: hidden;">
                            <label for="doc-ta-1" style="float: left;">上传logo：</label>

                            <div id="uploader-demo" style="float: left;">
                                <!--用来存放item-->
                                <span style="font-size: 15px;color: #959595;">最佳尺寸为120*120像素的方形图片(支持JPG、PNG、GIF格式,图片尺寸不超过3MB)</span>
                                <span class="btn-upload" style="margin-top: 20px;">
                                <!--<a href="javascript:;" class="am-btn am-btn-primary am-radius">上传图片</a>-->
                                <!--<input type="file" multiple name="file_0" class="input-file" id="postImg">-->
                                <input v-on:change="update($event)" accept="image/*" name="img" id="upload_file"
                                       type="file">
                            </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <a style="display: block;margin-left: 42%; margin-top: 5%;">
            <button v-on:click="creTeam" type="button" class="am-btn am-btn-primary" style="margin-right: 15%; width: 100px;">创建</button>
            <button v-on:click="goBack" type="button" class="am-btn am-btn-primary">取消创建</button>
        </a>

        <!--分页-->
        <!--foot-->

    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'

    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                file:"",
                teamName:"",
                teamIntro:"",
                teamLogo:"",
                schoolId:""
            }
        },
        created:function(){
            var params = new URLSearchParams();
            AXIOS.get('user/getUserInfo', {
                params: {}
            }).then(response => {
                //console.log(response);
                this.schoolId=response.data.schoolId;
            }).catch(e => {
                this.errors.push(e)
            });
        },
        methods:{
            goBack:function(){
                window.history.back(-1);
            },
            update:function(e){
                this.file=e.target.files[0];
                console.log(this.file);
            },
            creTeam:function(){
                //提交图片文件，获取相对路径
                var param = new FormData(); // 创建form对象
                param.append('file', this.file, this.file.name); // 通过append向form对象添加数据
                let config = {
                    headers: {'Content-Type': 'multipart/form-data'}
                };
                // 添加请求头
                AXIOS.post('common/upload', param, config).then(response => {
                    //console.log(response.data);
                    this.teamLogo=response.data;
                    //发送提交的修改信息
                    var params = new URLSearchParams();
                    AXIOS.get('user/newCreateTeam', {
                        params:{
                            teamLogo:this.teamLogo,
                            teamIntro:this.teamIntro,
                            teamName:this.teamName,
                            schoolId:this.schoolId
                        }
                    }).then(response => {
                        console.log(response.data);
                        if(response.data){
                            this.$router.push({ path: '/user/myGroup' });
                        }else{
                            alert(response.data);
                        }
                    }).catch(e => {
                        this.errors.push(e)
                    });
                })
            }
        }
    }


</script>

<style scoped>
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

    /*nav-border*/

    #x_bg {
        height: 57px;
        width: 100%;
        background: url(../../../static/img/navborder.png) center center;
        z-index: 2;
    }

    /*nav-border*/
    #x_nav {
        float: left;
        margin-top: 10px;
        margin-left: -145px;
    }

    /*nav seach*/
    .nav-search {
        float: left;
        width: 260px;
        border: solid 1px #fff;
        border-radius: 25px;
        margin-left: 2%;
        margin-top: 15px;
        height: 34px;
        line-height: 28px;
    }

    .nav-search input {
        background: #0f76be;
        border: #0F76BE;
        color: #FFFFFF;
    }

    .p_head_self_photo {
        width: 83px;
        height: 32px;
        float: left;
        color: #000000;
    }

    /*top����*/
    i {
        font-style: normal;
    }

    .clear {
        clear: both;
        line-height: 1;
    }

    .footer {
        background: #28303d;
        margin-top: 3%;
    }

    .am-form-group {
        margin-bottom: 4rem;
    }
</style>