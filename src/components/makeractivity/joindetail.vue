<template>
    <div>
      <div class="am-g">
        <div class="am-u-sm-9 am-u-sm-centered" style="padding-top: 50px;padding-bottom: 70px">
          <span style="float: left"><img src="../../../static/img/icon_address.png"></span>
          <div style="float: left;padding-top: 6px;margin-left: 3px;">
            <span style="color: #999999;">益谷创客平台-创客活动-加入活动</span>
          </div>
        </div>

        <div class="am-u-sm-9 am-u-sm-centered" style="background-color: #FFCA57;height: 1200px">

          <div class="am-g" style="background-color: #eeeeee;height: 10%;margin-bottom: 9px;">
            <h1 style="text-align: center;margin-top:4%;font-weight: normal;">我要加入</h1>
          </div>

          <div class="am-g" style="background-color: #FFFFFF;height: 80%;border: 1px solid#f0f0f0">
            <div style="margin-top: 10%;margin-left: 6%;">
              <table style="width: 100%">

                <tr>
                  <td style="width: 125px;"><span>参加单位:</span></td>
                  <td style="width:500px">
                    <select style="width: 100%;">
                      <option>1</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <td style="width: 125px;"><span>作品名称:</span></td>
                  <td style="width:500px"><input type="text" name="class" id="class" style="width: 100%;border-radius: 4px"/></td>
                </tr>

                <tr>
                  <td style="width: 125px;"><span>参加单位:</span></td>
                  <td style="width:500px">
                    <select style="width: 100%;">
                      <option>1</option>
                    </select>
                  </td>
                </tr>

                <tr style="padding-bottom: 25px;">
                  <td class="desc" valign="top" style="width: 125px;"><span>分类介绍:</span></td>
                  <td style="width:500px"><textarea name="classify_desc" id="classify_desc" style="width: 100%;height: 200px;border-radius: 4px"></textarea></td>
                </tr>

                <tr style="padding-bottom: 70px;">
                  <td class="desc" valign="top" style="width: 125px;"><span>创意来源:</span></td>
                  <td style="width:500px"><textarea name="idea_source" id="idea_source" style="width: 100%;height: 200px;border-radius: 4px"></textarea></td>
                </tr>

                <tr>
                  <td style="width: 125px;"></td>
                  <td style="width: 1040px;text-align: center;">
                    <a href="javascript:;" class="am-btn am-btn-primary am-radius table_button"><span style="color: #FFFFFF">申请</span></a>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div class="am-g" style="background-color: #FFFFFF;height: 10%"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "joinactivity",

    }
</script>

<style scoped>

</style>
