<template>
    <div>
      <div class="workshow" style="width: 1200px;margin: 50px auto; ">
        <div class="center-title" style="margin-bottom: 20px; color: #969696;">
          <span> <img src="static/img/icon_address.png" alt="" /><i>益谷创客平台-创客社团-<span>创建团队</span></i></span>
        </div>
        <div class="center-box" style="text-align: center; border: solid 1px #f3f3f3; border-bottom: solid 5px #FAC952; padding: 20px ; background-color: #EEEEEE;">
          <h1>创建团队</h1>
        </div>
        <div class="center-box" style="border: solid 3px #f3f3f3 ; padding: 20px ;width: 100%;height: 100%;">
          <h1>团队信息</h1>
          <div class="content-center">
            <form action="" method="post">
              <div class="am-form-group">
                <label >团队名称：</label>
                <input type="text" style="width: 750px;" class="" id="team-name" >
              </div>
              <div class="am-form-group">
                <label >需要人数：</label>
                <input type="text" style="width: 750px;" class="" id="team-number" >
              </div>
              <div class="am-form-group">
                <label for="doc-ta-1">人员需求：</label>
                <textarea class="" cols="91" rows="5" id="doc-ta-1"></textarea>
              </div>
              <div class="am-form-group">
                <label for="doc-ta-1">团队介绍：</label>
                <textarea class="" cols="91" rows="5" id="doc-ta-1"></textarea>
              </div>
              <div class="am-form-group" style="overflow: hidden;">
                <label for="doc-ta-1" style="float: left;">上传logo：</label>
                <div id="uploader-demo" style="float: left;">
                  <!--用来存放item-->
                  <div id="fileList" class="uploader-list"></div>
                  <div id="filePicker">上传图片</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <a style="display: block;margin-left: 42%; margin-top: 5%;"><button type="button" class="am-btn am-btn-primary" style="margin-right: 15%; width: 100px;">创建</button><button type="button" class="am-btn am-btn-primary">取消创建</button></a>
    </div>
</template>

<script>
    export default {
        name: "createdetail",
      mounted:function () {
        $(function () {
          var $list = $('#fileList');
          var $uploadBtn = $("#uploader_btn");
          var uploader = WebUploader.create({
            //auto : true,
            swf : '',
            // 文件接收服务端。
            server : '',
            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick : {id : '#filePicker',
              //只能选择一个文件上传
              multiple: false},
            //限制只能上传一个文件
            fileNumLimit: 1,
            // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
            resize : false,
            //生成缩略图的策略
            thumb: {
              width: 200,
              height: 150,

              // 图片质量，只有type为`image/jpeg`的时候才有效。
              quality: 70,

              // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
              allowMagnify: true,

              // 是否允许裁剪。
              crop: true,

              // 为空的话则保留原有图片格式。
              // 否则强制转换成指定的类型。
              type: 'image/jpeg'
            },
          });
          // 当有文件添加进来的时候
          uploader.on( 'fileQueued', function( file ) {
            var $li = $(
              '<div id="' + file.id + '" class="file-item thumbnail">' +
              '<img>' +
              '<div class="info">' + file.name + '</div>' +
              '</div>'
              ),
              $img = $li.find('img');


            // $list为容器jQuery实例
            $list.append( $li );

            // 创建缩略图
            // 如果为非图片文件，可以不用调用此方法。

            uploader.makeThumb( file, function( error, src ) {
              if ( error ) {
                $img.replaceWith('<span>不能预览</span>');
                return;
              }

              $img.attr( 'src', src );
            }, 350, 200 );
          });
        })
      }

    }

</script>

<style scoped>

</style>
