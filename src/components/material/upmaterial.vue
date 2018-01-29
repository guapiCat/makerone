<template>
    <div>
      <div class="am-g">
        <div class="am-u-sm-9 am-u-sm-centered" style="padding-top: 50px;padding-bottom: 40px">
          <span style="float: left"><img src="static/img/icon_address.png"></span>
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
                      <div style="border: 4px dashed #aeaeae;border-radius:8px;width: 400px;height: 200px;cursor: pointer;text-align: center;padding-top: 10%;margin-bottom: 10px;">
                        <input type="file" multiple name="file_0" class="input-file">
                        <a href="javascript:;" class="am-btn am-btn-default am-radius">上传图片</a>

                      </div>
                      <div id="file-box"></div>
                      <span style="font-size: 13px;margin-left: -2%">上传素材，即表示您以同意<a style="text-decoration: underline;">《上传声明》</a>，请勿上传色情，反动等违法素材</span>
                    </td>
                  </tr>

                  <tr>
                    <td style="color: #aaaaaa;width: 95px;">素材名称:</td>
                    <td style="width: 700px;">
                      <input type="text" name="material_name" style="width: 65%;border-radius: 5px;"/>
                    </td>
                  </tr>

                  <tr>
                    <td style="color: #aaaaaa;width: 95px;">素材类型:</td>
                    <td style="width: 700px;">
                      <input type="text" name="material_name" style="width: 65%;border-radius: 5px;"/>
                    </td>
                  </tr>

                  <tr>
                    <td style="color: #aaaaaa;width: 95px;">上传者名称:</td>
                    <td style="width: 700px;">
                      <input type="text" name="material_name" style="width: 65%;border-radius: 5px;"/>
                    </td>
                  </tr>

                  <tr>
                    <td style="color: #aaaaaa;width:95px;">上传时间:</td>
                    <td style="width: 700px;">
                      <input type="text" name="material_name" style="width: 65%;border-radius: 5px;"/>
                    </td>
                  </tr>
                  <tr>
                    <td style="color: #aaaaaa;width:95px;">上传素材:</td>
                    <td style="width: 700px;">
                      <div class="am-form-group am-form-file">
                        <button type="button" class="am-btn am-btn-danger am-btn-sm">
                          <i class="am-icon-cloud-upload"></i> 选择要上传的文件</button>
                        <input id="doc-form-file" type="file" multiple>
                      </div>
                      <div id="file-list"></div>
                    </td>
                  </tr>
                  <tr style="margin-bottom: 10%;">
                    <td style="color: #aaaaaa;width:95px;" valign="top">素材介绍:</td>
                    <td style="width: 700px;">
                      <textarea name="material_desc" style="width: 65%;height: 200px;border-radius: 8px;"></textarea>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="2" style="text-align: center;width: 650px;">
                      <a id="submit_material" href="../material_library.html" class="am-btn am-btn-primary am-radius">提交素材</a>
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

<script>
    export default {
        name: "upmaterial",
      mounted:function () {
        $(function () {
          $('#doc-form-file').on('change', function() {
            var fileNames = '';
            $.each(this.files, function() {
              fileNames += '<span class="am-badge">' + this.name + '</span> ';
            });
            $('#file-list').html(fileNames);
          });
          $('#doc-form-file').on('change', function() {
            var fileNames = '';
            $.each(this.files, function() {
              fileNames += '<span class="am-badge">' + this.name + '</span> ';
            });
            $('#file-box').html(fileNames);
          });
        })
      }
    }
</script>

<style scoped>
  .am-form input[type="text"].am-radius{
    border-radius: 8px;
  }
  .am-form input[type="text"]{
    padding: 0.9em;
  }
  .am-form input[type="password"].am-radius{
    border-radius: 8px;
  }
  .am-form input[type="password"]{
    padding: 0.9em;
  }
  a.am-btn.am-radius {
    border-radius: 5px;
  }

  table tr{
    display: block;
    margin-bottom: 30px;
  }

  td{
    padding-right: 10px;
  }

  #select_page a{
    font-size: 20px;
    color: #000;
    cursor: pointer;
  }

  #select_page img{
    margin-bottom: 9px;
    margin-right: 5px;
    width: 20%;
    height: 20%
  }

  #select_page div{
    float:left;
    width: 140px;
    text-align: center;
  }

  .am-nav>li{
    height: 55px;
  }

  .input-file{
    opacity:0;
    filter: alpha(opacity=0);
    width: 400px;
    height: 100px;
    cursor: pointer;
    position: absolute;
  }

  #submit_material{
    width: 150px;
    height: 40px;
  }
  #submit_material.am-btn-default{
    background-color: #f1cd3d;
    color: #ffffff;
  }

  #submit_material.am-btn-default:hover{
    background-color: #f1cd3d;
    color: #ffffff;
  }

  #submit_material.am-btn-default:visited{
    background-color: #f1cd3d;
    color: #ffffff;
  }
</style>
