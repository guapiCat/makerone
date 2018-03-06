<template>
  <div>
    <script id="editor" type="text/plain"></script>
  </div>
</template>

<script>
  import '../../../static/ue/themes/default/css/umeditor.min.css'
  import '../../../static/ue/umeditor.config'
  import '../../../static/ue/umeditor.min'
  import '../../../static/ue/lang/zh-cn/zh-cn'
    export default {
        name: "editor",
        props: {
          id: {
          type: String
        },
        config: {
          type: Object
        }
      } ,
      data() {
        return {
          editor: null
        }
      },
      mounted() {
        //初始化UE
        const _this = this;
        this.editor = UM.getEditor('editor', this.config); // 初始化UE
        this.editor.addListener("ready", function () {
          _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
        });
      },
      destoryed() {
        this.editor.destory();
      },
      methods:{
        getUEContent: function(){  // 获取内容方法
          return this.editor.getContent();
        }
      }
    }
</script>

<style scoped>

</style>
