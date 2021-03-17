<template>
  <div>
      <el-dialog :title="info.title" :visible.sync="info.show">
        <el-form :model="form">
            <el-form-item label="上级分类" :label-width="formLabelWidth">
            <el-select v-model="form.pid" >
              <el-option label="--请选择--" disabled value=""></el-option>
              <el-option label="顶级分类" :value="0"></el-option>
              <!-- 遍历分类列表 -->
              <el-option v-for="item in cateList" :key="item.id" :label="item.catename" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="分类名称" :label-width="formLabelWidth">
            <el-input v-model="form.catename"></el-input> 
          </el-form-item>
           <el-form-item label="图片" :label-width="formLabelWidth">
             <!-- 自定义文件上传 -->
             <div class="img-box">
               <h3>+</h3>
               <img v-if="imageUrl" :src="imageUrl" alt="">
               <input type="file" @change="changeImg1">
             </div>

             <!-- 采用element-ui方式上传 -->
              <!-- <el-upload
                  class="avatar-uploader"
                  action="#"
                  :show-file-list="false"
                  :on-change="changeImg"
                 >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" >
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload> -->
          </el-form-item>
           <el-form-item label="分类状态" :label-width="formLabelWidth">
              <el-switch
                  v-model="form.status"
                  active-color="blue"
                  inactive-color="grey" :active-value="1" :inactive-value="2">
                </el-switch>
           </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="confirm" v-if="info.isAdd"> 确 定</el-button>
          <el-button type="primary" @click="update" v-else>修 改</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import { addCate, oneCate, updateCate } from "../../../utils/request";
import { successAlert, warningAlert } from '../../../utils/alert';
import { mapActions, mapGetters } from 'vuex'
export default {
    props:['info'],
    data(){
        return {
            imageUrl:'',
            formLabelWidth:'120px',
            form:{
                pid:0,
                catename:'',
                img:'',
                status:1
            }
        }
    },
    computed:{
        ...mapGetters({
            "cateList":"cate/cateList"
        })
    },
    methods:{
        ...mapActions({
            "requestCateList":"cata/cataListActions"
        }),
        changeImg1(i){
            // 取出上传的文件信息
            var file = i.target.files[0];
            // 处理文件大小
            if(file.size > 4*1024*1024) {
                warningAlert("文件大小不能超过4M");
                return;
            }
            // 处理文件后缀
            var ext = ['.jpg','.png',',gif','.jpeg'];
            var extName = file.name.silce(file.name.lastIndexOf('.'));
            if(!ext.some(item=>item==extName)){
                warningAlert('上传文件格式不正确');
                return;
            }
            // 将图片显示在页面上
            this.imageUrl = URL.createObjectURL(file);
            this.form.img = file;
        },
        // 改变图片时，获取图片路径及信息
        changeImg(i){
            // 处理文件大小
            if(i.size > 4*1024*1024){
                warningAlert('文件大小不能超过4M');
                return
            }
            // 处理文件后缀
            var ext = ['.jpg','.png','.gif','.jpeg'];
            var extName = i.name.slice(i.name.lastIndexOf('.'));
            if(!ext.some(item => item == extName)){
                warningAlert('上传文件格式不正确');
                return;
            }
            // 将图片显示在页面上
            this.imageUrl = URL.createObjectURL(i.raw);
            // 将文件存放在form.img中
            this.form.img = i.raw;
        },
        cancel(){
            this.info.show = false;
            this.form = {
                pid:0,
                catename:'',
                img:'',
                status:1
            }
            this,this.imageUrl = '';
        },
        confirm(){
            addCate(this.form).then(res=>{
                successAlert(res.data.msg);
                this.cancel();
                this.requestCateList();
            })
        },
        getDetail(id){
            // 获取分类详情
            oneCate({id}).then(res=>{
                this.form = res.data.list;
                this.form.id = id;
                this.imageUrl = this.$preImg+this.form.img;
            })
        },
        update(){
            updateCate(this.form).then(res=>{
                successAlert(res.data.msg);
                this.cancel();
                this.requestCateList()
            })
        }
    },
    mounted(){
        this.requestCateList()
    }
}
</script>

<style scoped>
.img-box{
    width:150px;
    height: 150px;
    border: 1px dashed #000;
    position: relative;
}
.img-box h3{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 150px;
}
.img-box img{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.img-box input{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
}
.avatar-uploader >>> .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader >>> .el-upload:hover{
    border-color: #fff;
}
.avatar-uploader-icon{
    width: 180px;
    height: 180px;
    font-size: 28px;
    color: #8c939d;
    line-height: 180px;
    text-align: center;
}
.avatar{
    width: 180px;
    height: 180px;
    display: block;
}
</style>