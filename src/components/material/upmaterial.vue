<template>
    <div>
        <div class="am-g">
            <div class="am-u-sm-9 am-u-sm-centered" style="padding-top: 50px;padding-bottom: 40px">
                <span style="float: left"><img src="../../../static/img/icon_address.png"></span>

                <div style="float: left;padding-top: 6px;margin-left: 3px;">
                    <span style="color: #999999;">益谷创客平台-素材库-上传素材</span>
                </div>
            </div>

            <div class="am-u-sm-9 am-u-sm-centered" style="height: 1400px;padding-top: 10px;">

                <div class="am-g" style="background-color: #FFFFFF;height: 3%;"></div>
                <div class="am-g" id="content" style="background-color: #FFFFFF;height: 95%;border: 1px solid#f0f0f0;">
                    <div class="am-g am-u-sm-centered">
                        <div class="am-u-sm-centered" style="margin-top:10%;margin-left: 22%;">
                            <!--上传-->
                            <table style="width: 100%">
                                <tr style="margin-bottom: 10%;">
                                    <td colspan="2" style="width: 700px;padding-left: 13%;">
                                        <div style="border: 4px dashed #aeaeae;border-radius:8px;width: 400px;height: 400px;cursor: pointer;text-align: center;padding-top: 2%;margin-bottom: 10px;">
                                            <!--<input type="file" multiple name="file_0" class="input-file">-->
                                            <!--<a href="javascript:;" class="am-btn am-btn-default am-radius">上传图片</a>-->

                                            <div class="am-form-group am-form-file">
                                                <p style="font-size: 15px;color: #959595;">最佳尺寸为400*400像素的方形图片(支持JPG、PNG、GIF格式,图片尺寸不超过3MB)</p>
                                                <button style="margin-bottom: 40px;" type="button" class="am-btn am-btn-default am-btn-sm">
                                                    <i class="am-icon-cloud-upload"></i> 选择要上传的素材logo</button>
                                                <input v-on:change="logoPost($event)" id="doc-form-file" accept="image/*" type="file" multiple>
                                                <img style="margin:0 auto;display: block;width: 200px;height:200px" id="preview" src="" alt=""/>
                                            </div>
                                            <div id="file-list"></div>

                                        </div>
                                        <!--<div id="file-box"></div>-->
                                        <span style="font-size: 13px;margin-left: -2%">上传素材，即表示您以同意<a
                                                style="text-decoration: underline;">《上传声明》</a>，请勿上传色情，反动等违法素材</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="color: #aaaaaa;width: 95px;">素材文件:</td>
                                    <td style="width: 700px;">
                                        <input v-on:change="metzipPost($event)" name="img" id="upload_file" type="file">
                                    </td>
                                </tr>

                                <tr>
                                    <td style="color: #aaaaaa;width: 95px;">所属作品:</td>
                                    <td style="width: 700px;">
                                        <input placeholder="请输入٩(๑>◡<๑)۶" v-model="fromWork" type="text" name="material_name" style="width: 65%;border-radius: 5px;"/>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="color: #aaaaaa;width: 95px;">素材名称:</td>
                                    <td style="width: 700px;">
                                        <input maxlength="15" v-model="metName" type="text" name="material_name" style="width: 65%;border-radius: 5px;"/>
                                    </td>
                                </tr>

                                <tr style="margin-bottom: 10%;">
                                    <td style="color: #aaaaaa;width:95px;" valign="top">素材介绍:</td>
                                    <td style="width: 700px;">
                                        <textarea maxlength="100" placeholder="最多输入100字哦" v-model="metIntro" name="material_desc"
                                                  style="width: 65%;height: 200px;border-radius: 8px;"></textarea>
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="2" style="text-align: center;width: 650px;">
                                        <a v-on:click="postMet" id="submit_material"
                                           class="am-btn am-btn-primary am-radius">提交素材</a>
                                    </td>
                                </tr>
                            </table>
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
        name: "upmaterial",
        data () {
            return {
                allMsg:"",
                fileURL:"http://192.168.0.103:9000/",
                logoFile:"",
                logoUrl:"",
                metzipFile:"",
                metzipUrl:"",
                schoolId:"",
                metName:"",
                metIntro:"",
                fromWork:"",
                workId:"",
                type:""
            }
        },
        methods:{
            logoPost:function(e){
                if (window.FileReader) {
                    var reader = new FileReader();
                } else {
                    alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
                }
                this.logoFile=e.target.files[0];
                console.log(this.logoFile);
                reader.onload = function(e) {
                    //获取图片dom
                    var img = document.getElementById("preview");
                    //图片路径设置为读取的图片
                    img.src = e.target.result;
                };
                reader.readAsDataURL(this.logoFile);
            },
            metzipPost:function(e){
                this.metzipFile=e.target.files[0];
                console.log(this.metzipFile);
            },
            postMet:function(){
                //先获取个人-schoolId（同时判断if登录）-》获得logo的url-》获得metzip的url
                var params = new URLSearchParams();
                AXIOS.get('user/getUserInfo', {
                    params: {}
                }).then(response => {
                    if(response.data){
                        this.schoolId=response.data.schoolId;//获取学校id
                        var param = new FormData(); // 创建form对象，准备提交文件并得到地址
                        param.append('file', this.logoFile, this.logoFile.name);
                        let config = {
                            headers: {'Content-Type': 'multipart/form-data'}
                        };
                        AXIOS.post('common/upload', param, config).then(response => {
                            this.logoUrl=response.data;//得到logo的url
                            var param = new FormData();
                            param.append('file', this.metzipFile, this.metzipFile.name);
                            let config = {
                                headers: {'Content-Type': 'multipart/form-data'}
                            };
                            AXIOS.post('common/upload', param, config).then(response => {
                                this.metzipUrl=response.data;//得到metzip的url
                                //获取作品id
                                AXIOS.get('makerMaterial/getWork', {
                                    params: {
                                        workName:this.fromWork
                                    }
                                }).then(response => {
                                    //console.log(response);
                                    this.workId=response.data.data.id;
                                    this.type=response.data.data.type;
                                    AXIOS.get('makerMaterial/uploadingMakerMaterial', {
                                        params: {
                                            materialName:this.metName,
                                            materialCoverImage:this.logoUrl,
                                            materialIntro:this.metIntro,
                                            materialResource:this.metzipUrl,
                                            type:this.type,
                                            schoolId:this.schoolId,
                                            worksId:this.workId
                                        }
                                    }).then(response => {
                                        //console.log(response);
                                        console.log("上传素材返回的数据"+response.data);
                                        if(response.data.code==0){
                                            alert("上传成功");
                                            window.history.go(-1);
                                        }
                                    }).catch(e => {
                                        this.errors.push(e)
                                    });
                                }).catch(e => {
                                    this.errors.push(e)
                                });
                            })
                        });

                    }else{
                        alert("请先登录(*^▽^*)");
                    }

                }).catch(e => {
                    this.errors.push(e);
                });
            }
        },
        created:function(){

        },
        mounted: function () {
//            $(function () {
//                $('#doc-form-file').on('change', function () {
//                    var fileNames = '';
//                    $.each(this.files, function () {
//                        fileNames += '<span class="am-badge">' + this.name + '</span> ';
//                    });
//                    $('#file-list').html(fileNames);
//                });
//                $('#doc-form-file').on('change', function () {
//                    var fileNames = '';
//                    $.each(this.files, function () {
//                        fileNames += '<span class="am-badge">' + this.name + '</span> ';
//                    });
//                    $('#file-box').html(fileNames);
//                });
//            })
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

    a.am-btn.am-radius {
        border-radius: 5px;
    }

    table tr {
        display: block;
        margin-bottom: 30px;
    }

    td {
        padding-right: 10px;
    }

    #select_page a {
        font-size: 20px;
        color: #000;
        cursor: pointer;
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

    .am-nav > li {
        height: 55px;
    }

    .input-file {
        opacity: 0;
        filter: alpha(opacity=0);
        width: 400px;
        height: 100px;
        cursor: pointer;
        position: absolute;
    }

    #submit_material {
        width: 150px;
        height: 40px;
    }

    #submit_material.am-btn-default {
        background-color: #f1cd3d;
        color: #ffffff;
    }

    #submit_material.am-btn-default:hover {
        background-color: #f1cd3d;
        color: #ffffff;
    }

    #submit_material.am-btn-default:visited {
        background-color: #f1cd3d;
        color: #ffffff;
    }
</style>
