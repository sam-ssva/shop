<template>
  <div>
    <el-button type="primary">添加</el-button>
  </div>
</template>

<script>
import vAdd from './components/add.vue'
import vList from './components/list.vue'
export default {
    data(){
        return {
            info:{
                show:false,
                title:'',
                isAdd:true
            }
        }
    },
    methods:{
        add(){
            this.info.show = true;
            this.info.title = '添加商品';
            this.info.isAdd = true;
        },
        edit(){
            this.info.show = true;
            this.info.title = '编辑商品';
            this.info.isAdd = false;
            this.$refs.add.getDetail(id);
        }
    },
    components:{
        vAdd,
        vList
    }
}
</script>

<style>
.el-button{
    margin-top: 10px;
}
</style>