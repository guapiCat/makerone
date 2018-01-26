<template>
    <div>
      <!--发起社团-->
      <div class="am-tabs" data-am-tabs style="width: 100%;">
        <div class="am-tabs-bd" style="border: 0px;width: 100%;height: 200px; background: #EEEEEE; ">
          <div class="am-tab-panel am-active" id="tab1">
            <div style="width: 90%;text-align: right;margin-top: 10px;">
              <a class="am-btn am-btn-primary" style="border-radius: 10px;">发起社团</a>
            </div>
            <div style="text-align: center;margin-top: 1%;padding-left: 4%;">
              <hr style="width:80%;border-top: 1px solid #ffffff;margin: 0 auto">
            </div>
            <div class="clear"></div>
            <div class="classify" style="margin-top: 2%;float:right;width:86%;">
              <span style="float: left;margin-right: 2%;">分类:</span>
              <div id="classify_content" style="float: left">
                <a class="am-btn am-btn-primary">创客社团</a>
                <a class="am-btn am-btn-primary">创客团队</a>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--内容-->
      <div class="workshow" style="width: 70%;margin: 80px auto;text-align: center">
        <ul class="am-avg-sm-2 am-avg-md-2 am-avg-lg-2 am-thumbnails">
          <li style="width: 47%;margin-right: 1%;margin-bottom: 4%;">
            <p class="q_coverName" style="background: #00a0e9;height: 40px; border-top-left-radius:10px; border-top-right-radius:10px;text-align:center;font-size: 18px;padding-top: 5px;color: #ffffff">创客社团</p>
            <div  style="background-color: #D8D8D8; border-bottom-left-radius:10px; border-bottom-right-radius:10px;">
              <div class="am-g">
                <div class="am-u-sm-5" style="padding: 10px;">
                  <img src="static/img/airplane.png" width="130%" height="130%"/>
                </div>
                <div class="am-u-sm-6" style="padding-left: 25px;padding-top:10px;text-align: left">
                  <span>元气社团</span><br/>
                  创建时间:<span>10月18日</span><br/>
                  需要人数:<span>30</span><br/>
                  当前人数:<span>20</span><br/>
                  团队介绍:<span>作为学生一族，在放学的路中很容易把书包弄丢，为了不把书包弄丢，我们小组研发了这一款书包...</span>
                </div>
              </div>
              <div style="margin-top: 1%;padding-bottom: 2%;margin-left: 15%;">
                <router-link to="/makecommunitydetail/detail" class="am-btn am-btn-primary"style="border-radius: 7px;margin-right: 50%;" >查看社团详情</router-link>
                <a class="am-btn am-btn-primary" style="border-radius: 7px;">申请加入</a>
              </div>
            </div>
          </li>
          <li style="width: 47%;margin-right: 1%;margin-bottom: 4%;">
            <p class="q_coverName" style="background: #00a0e9;height: 40px; border-top-left-radius:10px; border-top-right-radius:10px;text-align:center;font-size: 18px;padding-top: 5px;color: #ffffff">创客社团</p>
            <div  style="background-color: #D8D8D8; border-bottom-left-radius:10px; border-bottom-right-radius:10px;">
              <div class="am-g">
                <div class="am-u-sm-5" style="padding: 10px;">
                  <img src="static/img/airplane.png" width="130%" height="130%"/>
                </div>
                <div class="am-u-sm-6" style="padding-left: 25px;padding-top:10px;text-align: left">
                  <span>元气社团</span><br/>
                  创建时间:<span>10月18日</span><br/>
                  需要人数:<span>30</span><br/>
                  当前人数:<span>20</span><br/>
                  团队介绍:<span>作为学生一族，在放学的路中很容易把书包弄丢，为了不把书包弄丢，我们小组研发了这一款书包...</span>
                </div>
              </div>
              <div style="margin-top: 1%;padding-bottom: 2%;margin-left: 15%;">
                <a class="am-btn am-btn-primary" style="border-radius: 7px;margin-right: 50%;">查看社团详情</a>
                <a class="am-btn am-btn-primary" style="border-radius: 7px;">申请加入</a>
              </div>
            </div>
          </li>
          <li style="width: 47%;margin-right: 1%;margin-bottom: 4%;">
            <p class="q_coverName" style="background: #00a0e9;height: 40px; border-top-left-radius:10px; border-top-right-radius:10px;text-align:center;font-size: 18px;padding-top: 5px;color: #ffffff">创客社团</p>
            <div  style="background-color: #D8D8D8; border-bottom-left-radius:10px; border-bottom-right-radius:10px;">
              <div class="am-g">
                <div class="am-u-sm-5" style="padding: 10px;">
                  <img src="static/img/airplane.png" width="130%" height="130%"/>
                </div>
                <div class="am-u-sm-6" style="padding-left: 25px;padding-top:10px;text-align: left">
                  <span>元气社团</span><br/>
                  创建时间:<span>10月18日</span><br/>
                  需要人数:<span>30</span><br/>
                  当前人数:<span>20</span><br/>
                  团队介绍:<span>作为学生一族，在放学的路中很容易把书包弄丢，为了不把书包弄丢，我们小组研发了这一款书包...</span>
                </div>
              </div>
              <div style="margin-top: 1%;padding-bottom: 2%;margin-left: 15%;">
                <a class="am-btn am-btn-primary" style="border-radius: 7px;margin-right: 50%;">查看社团详情</a>
                <a class="am-btn am-btn-primary" style="border-radius: 7px;">申请加入</a>
              </div>
            </div>
          </li>
          <li style="width: 47%;margin-right: 1%;margin-bottom: 4%;">
            <p class="q_coverName" style="background: #00a0e9;height: 40px; border-top-left-radius:10px; border-top-right-radius:10px;text-align:center;font-size: 18px;padding-top: 5px;color: #ffffff">创客社团</p>
            <div  style="background-color: #D8D8D8; border-bottom-left-radius:10px; border-bottom-right-radius:10px;">
              <div class="am-g">
                <div class="am-u-sm-5" style="padding: 10px;">
                  <img src="static/img/airplane.png" width="130%" height="130%"/>
                </div>
                <div class="am-u-sm-6" style="padding-left: 25px;padding-top:10px;text-align: left">
                  <span>元气社团</span><br/>
                  创建时间:<span>10月18日</span><br/>
                  需要人数:<span>30</span><br/>
                  当前人数:<span>20</span><br/>
                  团队介绍:<span>作为学生一族，在放学的路中很容易把书包弄丢，为了不把书包弄丢，我们小组研发了这一款书包...</span>
                </div>
              </div>
              <div style="margin-top: 1%;padding-bottom: 2%;margin-left: 15%;">
                <a class="am-btn am-btn-primary" style="border-radius: 7px;margin-right: 50%;">查看社团详情</a>
                <a class="am-btn am-btn-primary" style="border-radius: 7px;">申请加入</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
    export default {
        name: "maker-community"
    }
</script>

<style scoped>

</style>
