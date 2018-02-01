<template>
    <div>
        <div class="am-g">
            <div class="am-u-sm-9 am-u-sm-centered" style="padding-top: 50px;padding-bottom: 70px">
                <span style="float: left"><img src="../../../static/img/icon_address.png"></span>

                <div style="float: left;padding-top: 6px;margin-left: 3px;">
                    <span style="color: #999999;">益谷创客平台-素材库-下载素材</span>
                </div>
            </div>

            <div class="am-u-sm-9 am-u-sm-centered"
                 style="height: 1300px;padding-top: 10px;border: 1px solid #BFBFBF;margin-bottom: 15%;padding-left: 0;padding-right: 0px;">

                <div class="am-u-sm-8" style="margin-left: 0px;margin-top: 5%;padding-left: 0px;">
                    <div id="material_img"
                         style="border-right: 1px solid #BFBFBF;border-bottom:1px solid #BFBFBF;border-top:1px solid #BFBFBF;padding-top: 5%;padding-left: 6%;padding-bottom: 6%;margin-bottom: 3%;">
                        <img src="../../../static/img/img_sucai_01.png"/>
                    </div>
                    <div style="text-align: center;">
                        <span style="color: #818181">上传图片</span>
                    </div>
                </div>

                <div class="am-u-sm-4"
                     style="height:70%;margin-right: 0px;margin-top: 5%;padding-left: 0px;border-left: 1px solid #BFBFBF;border-bottom:1px solid #BFBFBF;border-top:1px solid #BFBFBF;padding-top: 4%;margin-bottom: 10%;">
                    <div style="height: 50px;text-align: center;margin-left: 13%;">
                        <a class="am-btn am-btn-primary" href="javascript:;"
                           style="width: 300px;display: -webkit-box;padding-left: 30%;">下载&nbsp;<img
                                src="../../../static/img/icon_download_01.png" style="width: 34%;"/> </a>
                    </div>

                    <div style="height: 50px;text-align: center;margin-top: 10%;">
                        <img src="../../../static/img/browse.png"/><span
                            style="color: #9d9c9c">浏览</span>&nbsp;:&nbsp;<span>30</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img
                            src="../../../static/img/icon_download_02.png"/><span style="color: #9d9c9c">下载</span>&nbsp;:&nbsp;<span>{{allMsg.downloadNum}}</span>
                    </div>

                    <div style="height: 50px;text-align: center;margin-top: 4%;margin-left: 13%;color: #e5e5e5;">
                        <hr style="width: 90%;"/>
                    </div>

                    <div style="margin-top: 1%;margin-left: 13%;">
                        <h6>详细信息:</h6>

                        <div style="margin-bottom: 5%;">
                            <span style="color: #818181">素材名称</span>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color: #818181">{{allMsg.worksName}}</span>
                        </div>
                        <div style="margin-bottom: 5%;">
                            <span style="color: #818181">素材类型</span>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color: #818181">{{allMsg.materialName}}</span>
                        </div>
                        <div class="am-g" style="margin-bottom: 5%;">
                            <div class="am-u-sm-4" style="margin-right: 0px;">
                                <span style="color: #818181">素材介绍&nbsp;&nbsp;:</span>
                            </div>
                            <div class="am-u-sm-4" style="width: 80%;margin-left: 0px;margin-top: -6%;padding-left: 8%;">
                                <p style="color: #818181">{{allMsg.materialIntro}}</p>
                            </div>
                        </div>
                        <div style="margin-bottom: 5%;">
                            <span style="color: #818181">上传者</span>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color: #818181">&nbsp;&nbsp;&nbsp;<img
                                src="../../../static/img/icon_head sculpture_01.png"/> {{allMsg.realName}}</span>
                        </div>
                        <div style="margin-bottom: 5%;">
                            <span style="color: #818181">上传时间</span>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color: #818181">{{allMsg.createTime}}</span>
                        </div>
                    </div>
                </div>

                <div id="back">
                    <a v-on:click="returnMet" class="am-btn am-btn-primary am-radius" style="width: 150px">返回</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'
    export default {
        name: "detail",
        data () {
            return {
                metId: this.$route.params.metId,
                allMsg:""
            }
        },
        methods:{
            returnMet:function(){
                this.$router.push({ path: '/materialLibrary/list' });
            }
        },
        created:function(){
            var params = new URLSearchParams();
            AXIOS.get('makerMaterial/makerMaterialParticulars', {
                params:{
                    id:this.metId
                }
            }).then(response => {
                console.log(response);
                this.allMsg=response.data;
            }).catch(e => {
                this.errors.push(e)
            });
        }
    }
</script>

<style scoped>
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

    #type_bar span {
        color: #a5a5a4;
    }

    #type_bar a {
        color: #a5a5a4;
    }

    #type_bar a:hover {
        color: #22a2d4;
    }

    #status_bar a {
        color: #a5a5a4;
    }

    #status_bar a:hover {
        color: #22a2d4;
    }

    .left-img img {
        height: 260px;
        width: 400px;
        margin-top: 15px;
        margin-left: 10%;
    }

    .am-btn-primary {
        border-radius: 4px;

        margin-right: 5px
    }

    #back a.am-btn.am-btn-default {

        width: 130px;
        background-color: #f1cd3d;
        color: #FFFFFF;
    }

    #back a.am-radius {

        border-radius: 5px;
    }

    #back {
        margin-left: 45%;
        pa: 20%;
    }
</style>
