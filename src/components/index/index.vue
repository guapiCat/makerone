<template>
    <div>
        <div class="am-slider am-slider-default" data-am-flexslider>
            <ul class="am-slides">
                <li v-for="banner in banners"><img :src="fileURL+banner.adImg"/></li>
            </ul>
        </div>


        <!--content-->
        <div class="section">
            <div class="container">
                <div class="section--header">
                    <img src="../../../static/img/flag.png" alt=""/>
                    <b class="flag-i1">黄陵中学</b>
                    <h5 class="sectionleft">作品展示</h5>
                    <span>WORKS SHOW</span>
                </div>

            </div>
        </div>
        <div class="workshow" style="width: 1200px;margin: 0 auto;">
            <ul class="am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-thumbnails">
                <li v-for="list in ImplementationNotes">
                    <router-link :to="{name: 'workshowdetail', params: {workId: list.makerWorks.id}}">
                        <img class="am-thumbnail workimg" :src="fileURL+list.makerWorks.worksCoverImage"/>

                        <p class="q_coverName">{{list.makerWorks.worksName}}</p>

                        <div class="q_worksCn">
                            <img class="q_head" :src="fileURL+list.avatar"/>
                            <a class="q_works_user">{{list.realName}}</a>
                            <a class="q_dianzan"><img src="static/img/upvote.png"/><span>{{list.makerWorks.worksThumbsUpNum}}</span></a>
                            <a class="q_liulan"><img
                                    src="static/img/browse.png"/><span>{{list.makerWorks.worksScanNum}}</span></a>

                            <div class="clear"></div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="index_link_div">
            <router-link to="/worksShow/list" class="p_lookMore" style="float:right">查看更多</router-link>
        </div>
        <div class="section">
            <div class="container">
                <div class="section--header">
                    <img src="../../../static/img/flag.png" alt=""/>
                    <b class="flag-i1">黄陵中学</b>

                    <h5 class="sectionleft">校本课程</h5>
                    <span>COURSES</span>
                </div>

            </div>
        </div>
        <div class="workshow" style="width: 1200px;margin: 0 auto; overflow: hidden;">
            <div style="width: 780px; height: 500px; float: left;">
                <div class="course1" :style="coursefirst">
                    <div class=""
                         style="height: 100%;width: 30%;float: left;background-color: #50ad5f;color: #fff;background-color: rgba(80,172,95,0.7);">
                        <p v-if="courses[0]" style="text-align: center; margin-top: 30%; font-size: 23px;">
                            {{courses[0].courseName}}</p>

                        <p v-if="courses[0]" style="text-align: center; font-size: 18px;">{{courses[0].courseIntro}}</p>
                    </div>
                </div>
                <div style="width: 780px; height: 300px; margin-top: 5px;">
                    <ul style="float: left; list-style: none; padding-left:0px ;">
                        <li class="courselist" :style="coursesecond ">
                            <div style="height: 38%;width: 100%;float: left;margin-top: 35%; color:#fff;background-color: rgba(67,116,160,.7);">
                                <p v-if="courses[1]" style="text-align: left; font-size: 23px; padding-left: 20px;">
                                    {{courses[1].courseName}}</p>

                                <p v-if="courses[1]" style="text-align: left; font-size: 18px; padding-left: 20px;">
                                    {{courses[1].courseIntro}}</p>
                            </div>
                        </li>
                        <li class="courselist1" :style="coursethird">
                            <div style="height: 38%;width: 100%;float: left;margin-top: 35%; color:#fff;background-color: rgba(67,116,160,.7);">
                                <p v-if="courses[2]" style="text-align: left; font-size: 23px; padding-left: 20px;">
                                    {{courses[2].courseName}}</p>

                                <p v-if="courses[2]" style="text-align: left; font-size: 18px; padding-left: 20px;">
                                    {{courses[2].courseIntro}}</p>
                            </div>
                        </li>
                    </ul>
                    <div>

                    </div>
                </div>

            </div>
            <div class="am-thumbnail course2" :style="courselast">
                <div class=""
                     style="height: 40%;width: 100%;float: left;background-color: #50ad5f;color: #fff;background-color: rgba(240,200,75,0.7);">
                    <p style="text-align: center; margin-top: 10%; font-size: 23px;" v-if="courses[3]">
                        {{courses[3].courseName}}</p>

                    <p style="text-align: center; font-size: 18px;" v-if="courses[3]">{{courses[3].courseIntro}}</p>
                </div>
            </div>
        </div>
        <div class="index_link_div">
            <router-link to="/makercourse/allcourse" class="p_lookMore" style="float:right">查看更多</router-link>
        </div>

        <div class="section">
            <div class="container">
                <div class="section--header">
                    <img src="../../../static/img/flag.png" alt=""/>
                    <b class="flag-i1">黄陵中学</b>

                    <h5 class="sectionleft">创客社团</h5>
                    <span>TEAM</span>
                </div>
                <!--index-container end-->
            </div>
        </div>
        <div class="workshow" style="width: 1200px;margin: 0 auto;">
            <ul class="am-avg-sm-3 am-thumbnails">
                <li v-for="maker,index in teams">
                    <router-link :to="{name: 'communitydetail', params: {workId: maker.id}}">
                        <div class="am-thumbnail"
                             :style="`background: url(../../../static/img/img_shading_`+index+`.png) center top 0px; position: relative; `">
                            <img :src="fileURL+maker.communityLogo"
                                 style="left: 128px; top: 22px;width: 133px;height: 133px;border-radius: 50%; position: absolute;"/>

                            <p style="float: left;height: 30px;width: 390px;text-align: center;margin-top: 165px; color: #FFF; font-size: 20px; margin-bottom: 0;">
                                {{maker.communityName}}</p>

                            <p style="float: left; margin: 0; text-align: center; color: #FFF; font-size: 15px;width: 390px;
    height: 80px;">
                                {{maker.communityIntro}}
                            </p>
                        </div>
                    </router-link>
                </li>

            </ul>
        </div>
        <div class="index_link_div">
            <router-link to="/makerCommunity/list" class="p_lookMore" style="float:right">查看更多</router-link>
        </div>

    </div>


</template>

<script type="es6">
    import '../../../static/js/amazeui.min.js'
    import {AXIOS} from "../../http-common";

    export default {
        name: 'index',
        props: {
            fileURL: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                banners: [],
                ImplementationNotes: [],
                teams: [],
                courses: [],
                coursesfirst: [],
                coursefirst: {
                    backgroundImage: ''
                },
                coursesecond: {
                    backgroundImage: ''
                },
                coursethird: {
                    backgroundImage: ''
                },
                courselast: {
                    backgroundImage: ''
                }

            }

        },
        created: function () {
            AXIOS.get('homePage/banner', {}).then(response => {
                this.banners = response.data;
                $(function () {
                    $('.am-slider').flexslider()
                });
            }).catch(error => {
                alert(error);
                //this.errors.push(response)
            });
            AXIOS.get('homePage/makerworks?pageSize=8', {}).then(response => {
                var worksshow = eval(response.data);
                this.ImplementationNotes = worksshow.data;
            }).catch(error => {
                console.log(error)

            });
            AXIOS.get('homePage/makercommunity?pageSize=6', {}).then(response=> {
                this.teams = response.data;
            }).catch(error => {
                console.log(error)
            });
            AXIOS.get('homePage/makercourse?pageSize=4', {}).then(response=> {
                this.courses = response.data;
                this.coursefirst.backgroundImage = "url('" + this.fileURL + this.courses[0].courseCoverImage + "')";
                this.coursesecond.backgroundImage = "url('" + this.fileURL + this.courses[1].courseCoverImage + "')";
                this.coursethird.backgroundImage = "url('" + this.fileURL + this.courses[2].courseCoverImage + "')";
                this.courselast.backgroundImage = "url('" + this.fileURL + this.courses[3].courseCoverImage + "')";
//        console.log(this.coursefirst.backgroundImage);
            }).catch(error => {
                console.log(error)
            })

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    /*轮播*/
    .flag-i1 {
        font-style: normal;
        position: relative;
        width: 40px;
        left: -55px;
        display: inline-block;
        top: 16px;
        font-size: 14px;
        color: white;
    }

    .workimg {
        height: 220px !important;
        width: 290px !important;
    }

    .am-slides img {
        height: 500px;
        width: 100%;
    }

    .section--header {
        text-align: center;
    }

    .course1 {
        width: 780px;
        height: 300px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .courselist {
        float: left;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 216px;
        width: 383px;
    }

    .courselist1 {
        float: left;
        background-size: cover;
        background-position: center center;
        height: 216px;
        width: 383px;
        background-repeat: no-repeat;
        margin-left: .8rem;
    }

    .course2 {
        height: 520px !important;
        width: 409px;
        float: left;
        background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .am-thumbnail {
        margin-bottom: 0px;
        padding: 0;
        height: 289px;
        border: 0;
    }

    .sectionleft {
        font-size: 20px;
        margin: -52px 0 0 555px;
        letter-spacing: 8px;
        width: 120px;
        border-bottom: solid 1px;
        color: #3FA6E7;
    }

    .section--header {
        text-align: center;
    }

    .section--header span {
        color: #3FA6E7;
    }

    .section--header img {
        height: 60px;
        margin-left: -145px;
        display: inline-block;
        position: relative;
        top: 10px;
    }

    .section--header span {
        display: block;
        margin-left: 60px;
    }

    /*查看更多*/
    .index_link_div {
        margin: auto;
        top: 570px;
        bottom: 0;
        right: 0;
        left: 0;
        width: 1200px;
        height: 40px;
    }

    .p_lookMore {
        display: block;
        width: 130px;
        height: 35px;
        border: 1px solid #e3e2e1;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        background: url("../../../static/img/title1.png") center right 18px no-repeat;
        font-size: 16px;
        color: #999999;
        float: right;
        line-height: 35px;
        padding-right: 20px;
        letter-spacing: 1px;
        margin: 0 auto;
        margin-top: 15px;
        padding-left: 15px;
        margin-right: 3%;
    }

    .q_worksCn {
        overflow: hidden;
    }
</style>
