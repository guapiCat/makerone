<template>
    <div>
        <div class="workshow" style="width: 1200px;margin: 50px auto;">
            <div class="center-title" style="margin-bottom: 20px; color: #969696;">
                <span> <img src="../../../static/img/icon_address.png" alt=""/><i>益谷创客平台-作品展示</i></span>

                <div class="classify">
                    <i> <img src="../../../static/img/icon_classify.png"/><span>分类</span></i>
                </div>
                <div class="classifylist">
                    <ul style="overflow: hidden;margin-top: 25px;">
                        <li v-on:click="one(index)" v-for="item,index in proClass" v-bind:class="{on:index==guigeSpan}"
                            class="title">{{item}}
                        </li>
                        <!--<li @click="one(index)" class="title classify-active" style="margin-left: -31px;">全部</li>-->
                        <!--<li class="title" @click="one(index)">3D打印</li>-->
                        <!--<li @click="one(index)" class="title">机器人</li>-->
                        <!--<li @click="one(index)" class="title">木工</li>-->
                        <!--<li @click="one(index)" class="title">Scratch编程</li>-->
                        <!--<li @click="one(index)" class="title">综合课程</li>S-->
                    </ul>
                </div>
                <div class="clear"></div>

            </div>
            <div class="center-box" style="border: solid 3px #f3f3f3 ; padding: 20px ;">
                <div class="center-box-title">
                    <div class="center-left">
                        <i>排序:</i>&nbsp;&nbsp;&nbsp;
                        <span v-on:click="two(index)" class="cxTwo" v-for="item,index in proSee"
                              style="margin-right:10px;">{{item}}</span>
                        <!--<span class="cxTwo">点赞数</span>&nbsp;&nbsp;&nbsp;-->
                        <!--<span class="cxTwo">浏览量</span>&nbsp;&nbsp;-->
                    </div>
                    <div class="center-right">
                        <router-link to="/workshow/submit"  class="am-btn am-btn-primary am-round" style="margin-bottom: 15px;">提交作品</router-link>
                    </div>
                </div>
                <ul class="am-avg-sm-2 am-avg-md-3 am-avg-lg-5 am-thumbnails">
                    <!--作品展示-->
                    <li v-for="item in myProducts">
                        <router-link :to="{name: 'workshowdetail',params: {workId: item.makerWorks.id}}">
                            <img style="height: 166px;width: 220px" class="am-thumbnail" :src="fileURL+item.makerWorks.worksCoverImage"/>

                            <p class="q_coverName">{{item.makerWorks.worksName}}</p>

                            <div class="q_worksCn"
                                 style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
                                <img class="q_head" :src="fileURL+item.avatar"/>
                                <a class="q_works_user">{{item.realName}}</a>
                                <a class="q_dianzan"><img src="../../../static/img/upvote.png"/><span>{{item.makerWorks.worksThumbsUpNum}}</span></a>
                                <a class="q_liulan"><img src="../../../static/img/browse.png"/><span>{{item.makerWorks.worksScanNum}}</span></a>
                                <div class="clear"></div>
                            </div>
                        </router-link>
                        <p>{{item.list}}</p>
                    </li>

                </ul>
              <div class="nodata" v-show="hiddendata">
              </div>

            </div>
        </div>

    </div>
</template>

<script type="es6">
    import {AXIOS} from '../../http-common'
    export default {
        name: "works-show",
      props: {
        fileURL: {
          type: String,
          required: true
        }
      },
        data () {
            return {
              search:'',
              hiddendata:false,
                proClass: [],
                proSee: [
                    "时间",
                    "浏览量",
                    "点赞数"
                ],
                guigeSpan: 0,
                clickOne: 0,
                myProducts: []
            }
        },
        methods: {
            one: function (index) {
                this.guigeSpan = index;
                this.clickOne = index;
                this.reqAxios(this.clickOne, 0, 1, 10);
            },
            two: function (index) {
                //console.log(index);
                this.reqAxios(this.clickOne, index, 1, 10);

            },
            reqAxios: function (makeWorType, sortType, pageNum, pageSize) {
                AXIOS.get('makerWorks/sortMakerWorks', {
                    params: {
                        "makeWorType": makeWorType,
                        "sortType": sortType,
                        "pageNum": pageNum,
                        "pageSize": pageSize
                    }
                }).then(response => {
                    this.myProducts = response.data.list;//将zuopins转为为后台数据
                    //console.log(response.data.list);
                  if(this.myProducts.length<=0){
                    this.hiddendata=true
                  }else {
                    this.hiddendata=false
                  }
                }).catch(e => {
                    this.errors.push(e);
                });
            },
          searchAxios: function (makeWorType, sortType, pageNum, pageSize,makerWorksName) {
            AXIOS.get('makerWorks/sortMakerWorks', {
              params: {
                "makeWorType": makeWorType,
                "sortType": sortType,
                "pageNum": pageNum,
                "pageSize": pageSize,
                "makerWorksName":makerWorksName
              }
            }).then(response => {
              this.myProducts = response.data.list;//将zuopins转为为后台数据
              //console.log(response.data.list);
              if(this.myProducts.length<=0){
                this.hiddendata=true
              }else {
                this.hiddendata=false
              }
            }).catch(e => {
              this.errors.push(e);
            });
          }
        },
      computed:{
        searchval:function(){
          var searchval=document.getElementById("search").value
          return this.search=searchval
        }

      },
        created: function () {
          this.searchval;
          if (this.search==''){
            this.reqAxios(0, 0, 1, 10);
          }else {
          this.searchAxios(0,0,1,10,this.search)

          }


            var params = new URLSearchParams();
            AXIOS.get('common/getGlobalType', {
                params:{}
            }).then(response => {
                //console.log(response);
                for(var i=0;response.data;i++){
                    this.proClass.push(response.data[i].desc);
                }
            }).catch(e => {
                this.errors.push(e)
            });
        },
        mounted: function () {

        }
    }
</script>

<style scoped>
    .on {
        background: #FFCA57 !important;
    }
    .nodata{
      width: 99%;
      height: 400px;
      margin: 0 auto;
      background: url(../../../static/img/nodata.png) top center no-repeat;
    }
    .classify img {
        height: 25px;
        width: 29px;
    }

    .classify span {
        font-size: 20px;
        padding-left: 1%;
        color: #000000;

    }

    .classify {
        margin-left: -15px;
        margin-top: 30px;
    }

    .classifylist li {
        list-style: none;
        float: left;
        border: solid 1px #FFF;
        height: 40px;
        width: 11%;
        text-align: center;
        color: #333;
        margin: 0 20px;
        padding: 5px 0;
        background: #FFFFFF;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
        cursor: pointer;

    }

    .am-thumbnail {
        margin-bottom: 0px;
        padding: 0px;
        border: 0;
    }

    .q_coverName span {
        float: right;
    }

    .q_coverName img {
        height: 16px;
        width: 19px;
    }

    .q_coverName i {
        margin-left: 17px;
        margin-right: 15px;
    }

    .workshow li {
        margin-bottom: 20px;
    }

    .center-title i {
        margin-left: 15px;
    }

    .center-box-title {
        margin-bottom: 20px;
    }

    .center-right {
        float: right;
    }

    .center-left {
        float: left;
        color: #969696;
        cursor: pointer;
    }

    .center-left span:hover {
        border: solid 1px #ffca57;
        background: #FFCA57;
        padding: 10px;
        border-radius: 10px;
    }

    .q_dianzan {
        padding-right: 0px;
    }

    .q_liulan {
        padding-left: 7px;
        margin-right: 0;
    }

    .classify-active {
        background: #FFCA57 !important;
    }

    .q_worksCn {
        overflow: hidden;
    }
</style>
