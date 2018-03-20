<template>
    <div>
        <div class="nav-container">
            <img src="../../../static/img/logo.png" style="height: 60px;width: 200px"/>
        </div>
        <div class="myHeaderMsg">
            <p>
                <router-link to="/"><span>网站首页</span><i>HOME</i></router-link>
            </p>
            <p>
                <router-link to="/worksShow/list"><span>作品展示</span><i class="cgI" style="">WORK SHOW</i>
                </router-link>
            </p>
            <p>
                <router-link to="/makercourse/allcourse"><span>创客课程</span><i>COURSES</i></router-link>
            </p>
            <p>
                <router-link to="/makerCommunity/list"><span>创客社团</span><i>GROUP</i></router-link>
            </p>
            <p>
                <router-link to="/makerActivity/list"><span>创客活动</span><i>ACTIVITY</i></router-link>
            </p>
            <p>
                <router-link to="/materialLibrary/list"><span>素材库</span><i style="">MATERIAL
                 </i></router-link>
            </p>
            <p>
                <router-link to="/user/psonSpace"><span>个人空间</span><i class="cgI" style="">PERSONAL SPACE</i>
                </router-link>
            </p>
            <p>
                <router-link to="/makerLife/list"><span>创客生活</span><i class="cgI" style="">CREATIVE LIFE</i>
                </router-link>
            </p>
            <div class="mySs">
                <a @click="searchall()"><img class="mySs_img" src="../../../static/img/nav_serch.png" alt=""/></a>

                <div class="seachlist" v-show="isHidden">
                    <ul>
                        <li>
                            <router-link :to="{name:'allcourse'}"><span @click="close()">课程</span></router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'materialLibrary'}">
                                <span @click="close()">素材</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'worksShow'}">
                                <span @click="close()">作品</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'/makerLife'}"><span @click="close()">生活</span></router-link>
                        </li>
                    </ul>
                </div>
                <input v-model="searchInput" id="search" class="mySs_inp" type="text" placeholder="请输入关键字"/>

                <div class="mySs_xx">
                    <p>
                        <router-link v-if="!psonImg" :to="{name: 'login',params: {loginType: 2}}"><span class="go-login">登录</span>
                        </router-link>

                        <img v-if="psonImg"
                             style="width: 30px;height: 30px;border-radius: 50%;display: block;margin-top: -12px;margin-left: 5px;"
                             :src="fileURL+psonImg" alt=""/>
                        <span v-if="psonName" style="float: right;color: white;">{{psonName}}</span>
                    </p>
                <div v-if="psonImg" v-on:click="logOut" class="log-out">注销</div>
                </div>

            </div>
        </div>
    </div>

</template>

<script type="es6">
    import {AXIOS} from "../../http-common";


    export default {
        name: 'headPart',

        data () {
            return {
                isHidden: false,
                searchInput: '',
                allMsg: "",
                fileURL: "http://192.168.0.106:9000/",
                psonImg: false,
                psonName:false
            }
        },
        methods: {
            searchall(){
                this.isHidden = !this.isHidden;
            },
            close(){
                this.isHidden = false;
                this.searchInput = ''
            },
            logOut(){
                var params = new URLSearchParams();
                AXIOS.get('preUser/LogOut', {
                    params: {}
                }).then(response => {
                    console.log(response.data);
                    sessionStorage.removeItem("TID");
                    sessionStorage.removeItem("UID");
                    sessionStorage.removeItem("psonImg");
                    sessionStorage.removeItem("psonName");
                    location.reload();
                }).catch(e => {
                    this.errors.push(e);
                });
            }
        },
        created: function () {
            this.psonImg = sessionStorage.getItem("psonImg");
            this.psonName = sessionStorage.getItem("psonName");
            console.log(psonImg);
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    @import "../../../static/css/indexheader.css";
    .go-login{
        color: white;
    }
    .go-login:hover{
        color:yellow;
    }
    .log-out{
        margin-left:40px;
        color: white;
    }
    .log-out:hover{
        color: yellow;
    }
    .seachlist {
        position: absolute;
        left: 74px;
        top: 29px;
        z-index: 999;
        height: 100px;
        width: 80px;
        text-align: center;
        background: #333333;
    }

    .seachlist ul {
        list-style: none;
        border: solid 1px #dfdfdf;
        box-shadow: 0px 0px 3px #ccc;
    }

    .seachlist li {
        background: #c3c3c3;
        height: 27px;
        width: 88px;
        line-height: 27px;
        text-align: center;
        /*font-family: simhei;*/
    }

    .seachlist li:hover {
        color: #FC7E8E;
    }
    @media screen and (max-width: 1200px) {
        .log-out{
            margin-left:30px;
            color: white;
        }
        .go-login{
            color: white;
            margin-left: 10px;
        }
    }
</style>
