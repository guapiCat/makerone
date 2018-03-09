<template>
  <div>
    <div class="am-g">
      <div   class="cousera" v-for="item in completeWork" style="padding-top: 2%;border-bottom:5px solid #f0f0f0;padding-bottom: 2%; ">
        <div class="am-g" style="margin-left: 0px">
          <div class="am-u-sm-6" style="padding-top: 1%;padding-left: 2%;">
            <img class="cous-img" :src="fileURL+item.worksCoverImage" style="border: 1px solid #000000" width="100%;"/>
          </div>
          <div class="am-u-sm-6" style="padding-top: 1%;padding-right: 10%;padding-left: 1%;">
            <span style="font-size: 23px;color: #378695">作品信息</span><br/>
            <div style="width: 100%;padding-left: 2%;padding-top: 1%;">
              <span>作品名称:<span>{{item.worksName}}</span></span><br/>
              <span>创建时间:<span>{{item.update}}</span></span><br/>
              <span>作品当前状态:<span>{{item.status}}</span></span><br/>
              <span>作品简介:<p style="word-wrap: break-word;display: inline">
                {{item.introduce}}
                               </p></span>
            </div>
          </div>
        </div>
        <div class="am-g">
          <div class="am-u-sm-6 am-u-sm-offset-6" style="margin-top: 2%;">
            <a class="am-btn am-btn-primary" style="border-radius: 7px;width: 130px;" @click="deleteworks(item.id)">移除作品</a>
            <router-link :to="{name: '',params:{ }}"  class="am-btn am-btn-primary" style="border-radius: 7px;width: 130px;float: right;margin-right: 17%;">编辑作品</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {AXIOS} from "../../http-common";
    export default {
        name: "complete-work",
        props: {
        fileURL: {
          type: String,
          required: true
        }
      },
      data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          completeWork:[]

        }
      },
      mounted:function () {
        AXIOS.get('user/getFinishedWorks',{
          params:{
            pageNum:1,
            pageSize:4

          }
        }).then(response=>{
          this.completeWork=response.data.list;
        }).catch(response=>{
          this.errors.push(response)
        })
      },
      methods:{
        deleteworks(objectId){
          AXIOS.get('user/deleteWorks',{
            params:{
              workId:objectId
            }
          }).then(response=>{
            console.log(response.data);
            window.location.reload();
            alert('删除成功')
          })
        }
      }

    }
</script>

<style scoped>
  .cous-img{
    height: 300px;
    width: 500px;
  }
</style>
