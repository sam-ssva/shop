import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {state,mutations,getters} from './mutations'
import actions from './actions'
import menu from './modules/menu'
import role from './modules/role'
import cate from './modules/cate'

const store = new Vuex.Store({
  state,//存储数据
  mutations,//操作数据
  actions,//对接组件中的方法
  getters,//返回数据并对接组件
  modules:{//modules中存放子模块信息
    menu,
    role,
    cate
  }
})

export default store
