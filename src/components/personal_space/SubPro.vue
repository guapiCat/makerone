<template>
    <div class="firstType">
        <div class="center-box">
            <div class="content-title" style="height: 60px;">
                <span style="background: url(../../../static/img/content-title1.1.png) center center; width: 291px;">第一步</span>

                <span style="background: url(../../../static/img/content-tite2.png) center center; width: 297px;">第二步</span>

                <span style="background: url(../../../static/img/content-title3.png) center center; width: 253px;">第三步</span>
            </div>
            <div class="content-box" style="border: solid 1px #F3F3F3; position: relative;">
                <h2>基本信息</h2>

                <div class="am-form-group">
                    <label v-if="this.getMakerWorkDisplay[1]"><span style="color: red;">*</span>{{this.getMakerWorkDisplay[1].dictDesc}}</label>

                    <textarea v-model="workName" minlength="10" maxlength="12" class="" rows="4" cols="90"
                              placeholder="为你的项目取个响亮的名字吧!"></textarea>
                </div>
                <div class="am-form-group">
                    <label v-if="this.getMakerWorkDisplay[0]"><span style="color: red;">*</span>{{this.getMakerWorkDisplay[0].dictDesc}}</label>
                    <select v-show="selectteam" class="selectpicker bla bla bli" v-model="titleclassify"
                            style="width: 741px;" @change="classifyfirst()">
                        <option v-for="(item,index) in classify" v-bind:value="index">{{item.desc}}</option>
                    </select>
                    <span v-show="newselect">:{{this.changeclass}}</span>
                </div>
                <div class="am-form-group">
                    <label v-if="this.getMakerWorkDisplay[2]"><span style="color: red;">*</span>{{this.getMakerWorkDisplay[2].dictDesc}}:</label>

                    <select v-show="selectteam" id="id_select1" class="selectpicker bla bla bli" v-model="teamSelect"
                            style="width: 741px;" @change="show()">
                        <option selected value="no">个人作品不选择团队</option>
                        <option v-for="(item,index) in teambox" v-bind:value="index">{{item.teamName}}</option>
                    </select>
                    <span v-show="newselect">{{this.creatteamname}}</span>

                    <div class="am-form-group" v-show="newselect" id="newselect" style="margin-top: 50px;">

                    </div>
                </div>

                <div class="am-form-group" v-show="ishide" style="margin-top: 50px;">
                    <label>团队分工:</label>

                    <div v-for="(item,index) in  selectedTeam " class="team"
                         style="margin-left: 95px;margin-top: -90px;">
                        <img :src="fileURL+item.avatar"
                             style="width:100px;height: 100px; padding: 12px; border-radius: 50%;margin: 4% 0"/>
                        <span>{{item.realName}}</span>
                        <input type="hidden" name="workLaborId" v-bind:value="item.id"/>
                        <input type="text" name="workLaborValue" value=""/>
                    </div>
                </div>
                <div class="am-form-group am-form-file"
                     style="overflow: hidden; position: absolute;top: 50px;right: 30px;">
                    <div class="am-form-group am-form-file">
                        <span style="color: red;display: inline-block;margin-right: 10px;">*</span><button type="button" class="am-btn am-btn-danger am-btn-sm">
                            <i class="am-icon-cloud-upload"></i> 上传封面
                        </button>
                        <input id="doc-form-file" v-on:change="update($event)" style="margin-left: 20px;" type="file"
                               multiple accept="image/*">
                    </div>
                    <div id="file-list"></div>
                    <div>{{fileCover}}</div>
                </div>
                <div class="am-form-group" style="margin-top: 50px;">
                    <label v-if="getMakerWorkDisplay[3]">{{this.getMakerWorkDisplay[3].dictDesc}}</label>
                    <input type="text" name="" value="" v-model="teachervalue">
                    <button type="button" class="am-btn am-btn-primary" @click="searchT()">搜索</button>
                </div>
                <div class="am-form-group" v-show="teacherhide" v-for="item in counselor"
                     style="margin-left: 10%;width: 700px;border: solid 1px #f3f3f3;">
                    <img :src="fileURL+item.avatar" style="width:100px;height: 100px; padding: 12px; border-radius: 50%"
                         alt="">
                    <span>{{item.realName}}</span>
                    <button type="button" class="am-btn am-btn-primary" style="margin-left: 15px"
                            data-am-modal="{target: '#my-alert1'}" @click="seeDetail(item.id)">查看详细信息
                    </button>
                    <button type="button" class="am-btn am-btn-primary" style="margin-left: 20px"
                            @click="invite(item.id)">邀请
                    </button>
                </div>
                <!--模态框弹出层-->
                <div class="am-modal am-modal-alert" tabindex="-1" id="my-alert1">
                    <div class="am-modal-dialog">
                        <div class="person-data">
                            <p class="pdata">个人资料</p>

                            <p class="p-data"><img src="../../../static/img/personname.png"/>昵称：<span>{{this.teacherdetail.realName}}</span>
                            </p>

                            <p class="p-data"><img src="../../../static/img/telphone.png"/>电话：<span>{{this.teacherdetail.mobile}}</span>
                            </p>

                            <p class="p-data p-noimg">班级：{{this.teacheruser.className}}<span></span></p>

                            <p class="p-data p-noimg">学校：{{this.teacheruser.schoolName}}<span></span></p>
                        </div>
                        <div class="am-modal-footer">
                            <span class="am-modal-btn">返回</span>
                        </div>

                    </div>
                </div>

                <div class="am-form-group">
                    <label v-if="getMakerWorkDisplay[4]">{{this.getMakerWorkDisplay[4].dictDesc}}</label>
                    <textarea v-model="productIdeas" class="" rows="4" cols="136"
                              placeholder="给我们渗透渗透你们的创意闪光点来自哪里，有怎样的光明前程吧！"></textarea>
                </div>
                <div class="am-form-group">
                    <label v-if="getMakerWorkDisplay[5]">{{this.getMakerWorkDisplay[5].dictDesc}}</label>
                    <textarea v-model="referenceData" class="" rows="4" cols="136"
                              placeholder="你们参考了哪些资料，访问了哪些网站？"></textarea>
                </div>
                <div class="am-form-group">
                    <label v-if="this.getMakerWorkDisplay[6]">{{this.getMakerWorkDisplay[6].dictDesc}}</label>
                    <textarea v-model="knowledgeApplication" class="" rows="4" cols="136"
                              placeholder="你们运用了哪些课堂知识,如有没有用到爱因斯坦的E=mc2"></textarea>
                </div>
                <a style="width: 120px;margin: 50px auto;display: block;">
                    <button style="width: 120px;" type="submit" class="am-btn am-btn-default" @click="save()">下一步
                    </button>
                </a>

            </div>
        </div>
    </div>
</template>

<script type="es6">
    import {AXIOS} from "../../http-common";
    export default {
        name: 'hello',
        props: {
            fileURL: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                teamSelect: '',
                teachervalue: '',
                ishide: false,
                teamhide: false,
                teacherhide: false,
                teambox: [],
                classify: [],
                classify1: [],
                teamboxtitle: '',
                teacherdetail: [],
                teacheruser: [],
                teacheruserId: '',
                getMakerWorkDisplay: [],
                // 团队成员
                allteam: [],
                selectedTeam: '',
                selectionTeam: '',
                //辅导老师
                counselor: '',
                // v-model
                workName: '',
                fileCover: '',
                productIdeas: '',
                referenceData: '',
                knowledgeApplication: '',
                titleclassify: '',
                classifyselect: '',
                workDisplay: [],
                workLabor: [],
                firsthiden: true,
                // 数据回显
                workId: this.$route.params.workId,
                firstallmsg: '',
                creatteam: '',
                selectteam: true,
                newselect: false,
                userLabors: [],
                selectuser: [],
                classification: '',
                changeclass: '',
                creatteamname: []
            }
        },

        methods: {
            update: function (e) {
                var file = e.target.files[0];
                var param = new FormData(); //创建form对象
                param.append('file', file, file.name);//通过append向form对象添加数据
                param.append('chunk', '0');//添加form表单中其他数据
                console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
                let config = {
                    headers: {'Content-Type': 'multipart/form-data'}
                };  //添加请求头
                AXIOS.post('common/upload', param, config)
                        .then(response => {
                            this.fileCover = response.data
                        })

            },
            show: function () {
                if (this.teamSelect == 'no') {
                    this.ishide = false;
                    this.selectionTeam = ''
                } else {
                    this.ishide = true;
                    // 团队详情
                    this.selectedTeam = this.teambox[this.teamSelect].sysUserDTOList;
                    this.selectionTeam = this.teambox[this.teamSelect].id;
                    return false
                }

            },
            classifyfirst(){
                this.classifyselect = this.classify[this.titleclassify - 1].value

            },
            searchT() {
                if (this.teachervalue !== "") {
                    this.teacherhide = true;
                    AXIOS.get('makerWorks/counselor', {
                        params: {
                            realName: this.teachervalue
                        }
                    }).then(response => {
                        this.counselor = response.data;
                        if (response.data.length <= 0) {
                            alert("不存在此老师信息");
                            this.teacherhide = false
                        }
                    }).catch(response => {
                        this.errors.push(response)
                    });
                } else {
                    this.teacherhide = false
                }

            },
            seeDetail(userId) {
                var params1 = new URLSearchParams();
                params1.append('userId', userId);
                AXIOS.post('common/getOtherUser', params1).then(response => {
                    console.log(response.data);
                    this.teacheruser = response.data;
                    this.teacherdetail = response.data.sysUser
                })
            },
            invite(uesId) {
                alert("已邀请");
                this.teacheruserId = uesId;

            },
            save() {
                //this.classifyfirst();
                var vue = this;
                var idArray = $("input[name='workLaborId']");
                $("input[name='workLaborValue']").each(function (i, item) {
                    vue.workLabor[i] = {key: idArray[i].value, value: item.value}
                });
                //if (this.titleclassify.length > 0) {
                    this.workDisplay.push({key: this.getMakerWorkDisplay[0].dictValue, value: this.titleclassify});
                //} else {
                //    this.workDisplay.push({key: this.getMakerWorkDisplay[0].dictValue, value: this.classifyselect});
                //}
                if (this.creatteam.length > 0) {
                    this.workDisplay.push({key: this.getMakerWorkDisplay[2].dictValue, value: this.creatteam});
                } else {
                    this.workDisplay.push({key: this.getMakerWorkDisplay[2].dictValue, value: this.selectionTeam});
                }
                this.workDisplay.push({key: this.getMakerWorkDisplay[1].dictValue, value: this.workName});

                this.workDisplay.push({key: this.getMakerWorkDisplay[3].dictValue, value: this.teacheruserId});
                this.workDisplay.push({key: this.getMakerWorkDisplay[4].dictValue, value: this.productIdeas});
                this.workDisplay.push({key: this.getMakerWorkDisplay[5].dictValue, value: this.referenceData});
                this.workDisplay.push({key: this.getMakerWorkDisplay[6].dictValue, value: this.knowledgeApplication});
                this.workDisplay.push({key: this.getMakerWorkDisplay[7].dictValue, value: this.fileCover});
                this.$emit('firstType', this.workDisplay, this.workLabor, this.firsthiden);
            }

        },
        created: function () {
            // this.workDisplay[0].key = "创意来源";
            AXIOS.get('makerWorks/userCreateTeams', {}).then(response => {
                this.teambox = response.data;
            }).catch(response => {
                this.errors.push(response)
            });
            //获取分类
            AXIOS.get('common/getGlobalType', {}).then(response => {
                this.classify1 = response.data;
                this.classify1.splice(0, 1);
                this.classify = this.classify1;
            }).catch(response => {
                this.errors.push(response);
            });
            // 获取标题
            AXIOS.get('makerWorks/getMakerWorkDisplay', {}).then(response => {
                this.getMakerWorkDisplay = response.data;
            }).catch(response => {
                this.errors.push(response)
            });
            //图片上传
            $(function () {
                $('#doc-form-file').on('change', function () {
                    var fileNames = '';
                    $.each(this.files, function () {
                        fileNames += '<span class="am-badge">' + this.name + '</span> ';
                    });
                    $('#file-list').html(fileNames);
                });
            });
            // 数据回显
            AXIOS.get('makerWorks/editMakerWork', {
                params: {
                    makerWorkId: this.$route.params.workId
                }
            }).then(response => {
                this.firstallmsg = response.data;
                this.workName = response.data.makerWorkDisplays[1].content;
                // this.titleclassify=response.data.makerWorkDisplays[0].content
                this.productIdeas = response.data.makerWorkDisplays[3].content;
                this.referenceData = response.data.makerWorkDisplays[4].content;
                this.knowledgeApplication = response.data.makerWorkDisplays[5].content;
                this.fileCover = response.data.makerWorkDisplays[6].content;
                this.creatteam = response.data.makerWorkDisplays[2].content;
                this.titleclassify = response.data.makerWorkDisplays[0].content;
                this.changeclass = this.classify1[this.titleclassify - 1].desc;
                this.userLabors = response.data.userLabors;
                if (this.creatteam.length > 0) {
                    this.selectteam = false;
                    this.newselect = true;
                    AXIOS.get('team/MakerTeamParticulars', {
                        params: {
                            makerTeamId: this.firstallmsg.teamId
                        }
                    }).then(response=> {
                        this.selectuser = response.data.sysUser;
                        var html = '';
                        for (var i = 0; i < this.userLabors.length; i++) {
                            this.userLabors[i].realName = this.selectuser.realName;
                            this.userLabors[i].avatar = this.selectuser.avatar;
                            html += '<div  class="team"  style="margin-left: 95px;margin-top: -90px;" >'
                            html += '<img src=' + this.fileURL + this.userLabors[i].avatar + ' style="width:100px;height: 100px; padding: 12px; border-radius: 50%;margin: 4% 0"/>'
                            html += '<span>' + this.userLabors[i].realName + '</span>'
                            html += ' <input type="hidden" name="workLaborId" value=' + this.userLabors[i].workId + '/>'
                            html += '<input type="text"   name="workLaborValue" value=' + this.userLabors[i].userLabor + ' /></div>'
                            $('#newselect').html(html);
                        }
                    });
                    // 团队名字
                    AXIOS.get('team/MakerTeamParticulars', {
                        params: {
                            makerTeamId: this.creatteam
                        }
                    }).then(response=> {
                        this.creatteamname = response.data.teamName

                    })

                }
            }).catch(response => {
                this.errors.push(response)
            });

            // 作品分类
            if (this.classification.length > 0) {

            }

        }

    }


</script>

<style scoped>
    /*改动的样式-yzh*/

    /*改动样式结束*/
    /*模态框*/
    .person-data {
        width: 100%;
        float: left;
    }

    .pdata {
        height: 66px;
        line-height: 60px;
        border-top: solid 8px #F7B900;
        border-bottom: solid 1px #d2d2d2;
        font-weight: 600;
        background-color: #fbfbfb;
        padding-left: 10px;
    }

    .p-data {
        height: 50px;
        line-height: 25px;
        border-bottom: solid 1px #d2d2d2;
        text-align: left;
    }

    .p-data img {
        margin-right: 20px;
        margin-left: 5px;
    }

    .p-noimg {
        padding-left: 50px;

    }

    .topbar {
        height: 50px;
    }

    .nav-search {
        text-decoration: none;
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

    .nav-active {
        color: #21a2d3;
    }

    /*content-title*/
    .content-title {

    }

    .content-title span {
        float: left;
        height: 60px;
        line-height: 60px;
        background-size: cover;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }

    /*end*/
    .am-form-group {
        margin-left: 20px;
        margin-top: 15px;
    }

    .btn-group .bootstrap-select {
        width: 650px;
    }

</style>
