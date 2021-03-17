import {getRole} from '../../utils/request'
const state = {
  roleList:[],//声明角色列表数据
}

// 操作数据
const mutations = {
  changeRoleList(state,arr){
    state.roleList = arr;
  }
}

const actions = {
  roleListActions(context){
    // 发起获取角色列表请求
    getRole().then(res=>{
      context.commit('changeRoleList',res.data.list)
    })
  }
}

const getters = {
  roleList(state){
    return state.roleList
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced:true,//使用命名空间
}
