import axios from 'axios'
import qs from 'qs'
import {errorAlert} from './alert'

//设置基础路径
// const baseUrl = "/api";
const baseUrl = "";


// 设置一个响应拦截
axios.interceptors.response.use(res=>{
  // console.group('本次响应路径为:'+res.config.url)
  if(res.data.code !== 200){
    errorAlert(res.data.msg);
    return;
  }
  // console.log(res);
  return res;
})


// 添加菜单
export const addMenu = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/menuadd',
    data:qs.stringify(data)
  })
}

// 菜单列表
export const getMenu = (params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/menulist',
    params,
  })
}


// 获取一条菜单
export const oneMenu = (params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/menuinfo',
    params,
  })
}


// 修改菜单
export const updateMenu = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/menuedit',
    data:qs.stringify(data)
  })
}


// 删除菜单
export const delMenu = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/menudelete',
    data:qs.stringify(data)
  })
}

// 添加角色
export const addRole = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/roleadd',
    data:qs.stringify(data)
  })
}

// 获取角色
export const getRole = ()=>{
  return  axios({
    method:'get',
    url:baseUrl+'/api/rolelist'
  })
}

// 获取角色
export const oneRole = (params)=>{
  return  axios({
    method:'get',
    url:baseUrl+'/api/roleinfo',
    params,
  })
}


// 编辑角色
export const updateRole = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/roleedit',
    data:qs.stringify(data)
  })
}

// 删除角色
export const delRole = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/roledelete',
    data:qs.stringify(data)
  })
}

// 添加管理员
export const addManager = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/useradd',
    data:qs.stringify(data)
  })
}

// 获取管理员列表
export const getManager = (params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/userlist',
    params
  })
}

// 获取管理员总数
export const managerCount = ()=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/usercount',
  })
}

// 获取管理员详情
export const oneManager = (params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/userinfo',
    params
  })
}

// 修改管理员
export const updateManager = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/useredit',
    data:qs.stringify(data)
  })
}

// 删除管理员
export const delManager = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/userdelete',
    data:qs.stringify(data)
  })
}

// 登录
export const requestLogin = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/userlogin',
    data:qs.stringify(data)
  })
}




