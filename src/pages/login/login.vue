<template>
  <div class="container">
    <div class="con">
      <h3>欢迎登录</h3>
      <el-input placeholder="请输入用户名"></el-input>
      <el-input type="password" placeholder="请输入密码"></el-input>
      <div class="btn">
        <el-button  type="primary" @click="login">登录</el-button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    login(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.container{
  width:100vw;
  height: 100vh;
  background-image: linear-gradient(to right, red , blue);
  position:fixed;
  top:0;
  left:0;
}
.con{
  width:400px;
  height: 300px;
  background: white;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border-radius: 10px;
}
h3{
  text-align: center;
  margin: 20px;
}
.el-input,.el-button{
  width:90%;
  margin:20px;
}
.el-button{
  color:white;
}
</style>
