
<template>
  <div>
    <quilleditor v-model="content"
                 ref="myTextEditor"
                 :options="editorOption"
                 @change="onChange">
      <div id="toolbar" slot="toolbar">
        <span class="ql-formats"><button type="button" class="ql-bold"></button></span>
        <span class="ql-formats"><button type="button" class="ql-italic"></button></span>
        <span class="ql-formats"><button type="button" class="ql-blockquote"></button></span>
        <span class="ql-formats"><button type="button" class="ql-list" value="ordered"></button></span>
        <span class="ql-formats"><button type="button" class="ql-list" value="bullet"></button></span>
        <span class="ql-formats"><button type="button" class="ql-link"></button></span>
        <span class="ql-formats">
        <button type="button" @click="imgClick" style="outline:none">
        <svg viewBox="0 0 18 18"> <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect> <circle class="ql-fill" cx="6" cy="7" r="1"></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>
      	</button>
      </span>
        <span class="ql-formats"><button type="button" class="ql-video"></button></span>
      </div>
    </quilleditor>
  </div>
</template>
<script>
  import {AXIOS} from "../../http-common";
  import {quillEditor} from 'vue-quill-editor'
  export default {
    props:{
      /*上传图片的file控件name*/
      fileName:{
        type:String,
        default: 'upload_file'
      }
    },
    data() {
      return {
        content: "",
        editorOption: {
          modules: {
            toolbar: '#toolbar'
          }
        },
      }
    },
    methods: {
      onChange(){
        this.$emit('editor', this.content)
      },
      /*选择上传图片切换*/
      onFileChange(e){
        var self=this
        var fileInput=e.target
        if(fileInput.files.length==0){
          return
        }
        this.editor.focus()
        if(fileInput.files[0].size>1024*1024*100){
          this.$alert('图片不能大于600KB', '图片尺寸过大', {
            confirmButtonText: '确定',
            type: 'warning',
          })
        }
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
            this.content == null?this.content="":this.content;
            this.content += response.data
          })
      },
      /*点击上传图片按钮*/
      imgClick() {
        /*内存创建input file*/
        var input=document.createElement('input')
        input.type='file'
        input.name=this.fileName
        input.accept='image/jpeg,image/png,image/jpg,image/gif'
        input.onchange=this.onFileChange
        input.click()
      }
    },
    computed:{
      editor() {
        return this.$refs.myTextEditor.quill
      }
    },
    components: {
      'quilleditor': quillEditor
    },
    mounted(){
      AXIOS.get('makerWorks/editMakerWork', {
        params:{
          makerWorkId: this.$route.params.workId,
        }
      }).then(response => {
        this.lastmsg=response.data
        this.content=this.lastmsg.makerWorkDisplays[12].content;
      });
    },
    watch:{
      'value'(newVal, oldVal) {
        if (this.editor) {
          if (newVal !== this.content) {
            this.content = newVal
          }
        }
      },
    }
  }

</script>
