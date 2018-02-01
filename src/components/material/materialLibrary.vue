<template>
    <div>
        <div>
            <img src="../../../static/img/banner_fodder.png" style="width: 100%;"/>
        </div>

        <div style="background-color: #e5e5e5">
            <div class="am-g">
                <div style="padding-top:25px;padding-bottom: 45px;margin-left: 13%">
                    <div class="center-left">
                        <i style="color:#000;">分类:</i>&nbsp;&nbsp;&nbsp;
                        <span v-on:click="one(index)" v-bind:class="{on:index==type}"
                              v-for="item,index in metClass" class="titleOne" style="margin-left: 10px">{{item}}</span>
                        <!--<span class="title">Scratch编程</span>&nbsp;&nbsp;&nbsp;-->
                        <!--<span class="title">电子书籍</span>&nbsp;&nbsp;&nbsp;-->
                        <!--<span class="title">软件</span>&nbsp;&nbsp;&nbsp;-->
                        <!--<span class="title">VR视频</span>&nbsp;&nbsp;-->
                    </div>
                </div>
                <div style="padding-top:25px;padding-bottom: 45px;margin-left: 13%">
                    <div class="center-left">
                        <i style="color:#000;">排序:</i>&nbsp;&nbsp;&nbsp;
                        <span class="title" v-on:click="two(index)" v-for="item,index in metSee"
                              v-bind:class="{on:index==orderStr}" style="margin-left: 10px">{{item}}</span>
                        <!--<span class="title">下载量</span>&nbsp;&nbsp;-->
                    </div>
                </div>
            </div>
        </div>
        <div style="margin-left: 13%;position: relative;cursor: pointer">
            <!--<input type="file" multiple name="file_0" class="input-file">-->
            <span v-on:click="postMet" class="am-btn am-btn-default" style="margin-right: 45px;margin-top: 35px;">我要上传</span>
        </div>
        <div class="am-u-sm-10 am-avg-sm-5  am-thumbnails pic_content" style="margin-top: 60px;margin-left: 12%;">

            <li v-for="item,index in allMet" class="testLi">
                <router-link class="goMetDel" :to="{name: 'meterialdetail',params: {metId: item.id}}">
                    <div class="img-content" style="margin-left: 1px;margin-top: 13px;position: relative;">
                        <!--图片未做处理-->
                        <img class="am-thumbnail" src="../../../static/img/img_fodder_03.png" style="height: 245px"/>
                    </div>
                    <span style="border-radius: 0;color: #000;border: 0px">{{item.materialIntro}}</span>
                </router-link>
            </li>
            <!--<li>-->
            <!--<div class="img-content" style="margin-left: 1px;margin-top: 13px;position: relative;">-->
            <!--<img class="am-thumbnail" src="../../../static/img/img_fodder_03.png" style="height: 245px"/>-->
            <!--</div>-->
            <!--<span style="border-radius: 0;color: #000;border: 0px">hall</span>-->
            <!--</li>-->


        </div>

        <div class="am-u-sm-10 am-u-sm-centered" style="margin-top: 100px;margin-right: 11%; clear: both;">
            <ul class="am-pagination am-pagination-right">
                <li class="am-disabled"><a href="#">&laquo;</a></li>
                <li class="am-active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&raquo;</a></li>
            </ul>
        </div>
    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'
    export default {
        name: "material-library",
        data () {
            return {
                fileURL: "http://192.168.1.110:9000/",//图片地址
                allMet: [],//所有素材
                metClass: [],//素材分类
                metSee: ["最新", "下载量"],//查看素材分类（2级）
                type: 0,
                orderStr: 0
            }
        },
        methods: {
            postMet:function(){
                this.$router.push({ path: '/material/up' });
            },
            one: function (index) {
                console.log("one" + index);
                this.type = index;
                this.reqAxios(this.type, this.orderStr, 1, 10);
            },
            two: function (index) {
                console.log("two:" + index);
                this.orderStr = index;
                this.reqAxios(this.type, this.orderStr, 1, 10);
            },
            reqAxios: function (type, orderStr, pageNum, pageSize) {
                AXIOS.get('makerMaterial/MakerMaterialControllerShow', {
                    params: {
                        "type": type,
                        "orderStr": orderStr,
                        "pageNum": pageNum,
                        "pageSize": pageSize
                    }
                }).then(response => {
                    this.allMet = response.data.list;//将zuopins转为为后台数据
                    //console.log(response.data.list);
                }).catch(e => {
                    this.errors.push(e);
                });
            }
        },
        created: function () {
            this.reqAxios(0, 0, 1, 10);
            var params = new URLSearchParams();
            AXIOS.get('makerWorks/makeWorkType', {
                params: {}
            }).then(response => {
                for (var i = 0; response.data; i++) {
                    this.metClass.push(response.data[i].name);
                }
            }).catch(e => {
                this.errors.push(e)
            });
        }
    }

</script>

<style>
    .on {
        background: #FFCA57 !important;
    }

    .goMetDel{
        display: block;
    }

    .on {
        background-color: #f1cd3d;
    }

    .center-active {
        background-color: #f1cd3d;
    }

    .center-left {
        float: left;
        color: #969696;
        cursor: pointer;
    }

    .center-left > span {
        border-radius: 10px;
        padding: 10px;
        color: #000000;
    }

    .pic_content li img {
        border: 0px;
    }

    .pic_content li {
        background: url("../../../static/img/img_fodder-frame.png") 100% no-repeat;
        width: 267px;
        height: 339px;
        text-align: center;
        padding: 5px 10px 0px 10px;
        margin-left: 20px;
        display: inline-block;
    }

    .pic_content li span {
        background-color: #FFFFFF;
        border-radius: 20px;
        border: 1px solid #0094CD;
        color: #0094CD
    }

    .pic_content li span:hover {
        background-color: #FFFFFF;
    }

    .input-file {
        opacity: 0;
        filter: alpha(opacity=0);
        width: 200px;
        height: 90px;
        cursor: pointer;
        position: absolute;
    }

    .shade {
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 245px;
        position: absolute;
        top: 0px;
        left: 0px;
    }

    .content-a {
        margin-top: 20px;
        margin-right: 15px;
        float: right;
        color: #FFFFFF;
    }

    .content-a:hover {
        color: #FFFFFF;
    }

    .content-a.am-btn.am-btn-default {
        width: 80px;
        height: 37px;
        background-color: #0c85ae;
    }

    .content-a.am-radius {
        border-radius: 5px;
    }

</style>
