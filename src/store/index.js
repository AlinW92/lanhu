import { createStore } from 'vuex'
import axios from 'axios'
// import { getQrCodeUrl } from '../api'

export default createStore({
  state: {
    qrUrls: []
  },
  mutations: {
    SET_QR_CODE_URL (state, data) {
      state.qrUrl = data
      // console.log(111111111111111111111)
      console.log(data)
    }
  },
  actions: {
    async queryQrCodeUrl (state, payload = {}) {
      // 原本应该这样调用的，但是我axios不知道如何配置，只能直接请求了
      // const data = await getQrCodeUrl(payload)
      const data = await axios.get('/api/tagList')
      // 可以打印下data
      console.log(data)
      // state.commit('SET_QR_CODE_URL', data?.data)
    }
  },
  modules: {
  }
})
