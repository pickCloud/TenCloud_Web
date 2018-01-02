export default {
  namespaced: true,
  state: {
    currentUser: {},
    currentPermission: []
  },
  mutations: {
    'UPDATE' (state, data) {
      // 用户数据更新
      state.currentUser = data
    },
    'GET_USER' () {
      // 获取用户数据
    },
    'getPermission' (state, data) {
      let arry = []
      let arryData = []
      if (Array.isArray(data.permissions)) {
        data.permissions.forEach(item => {
          arryData.push(item.id)
        })
        data.permissions = arryData
      }
      if (Array.isArray(data.access_servers)) {
        arryData = []
        data.access_servers.forEach(item => {
          arryData.push(item.id)
        })
        data.access_servers = arryData
      }
      if (Array.isArray(data.access_projects)) {
        arryData = []
        data.access_projects.forEach(item => {
          arryData.push(item.id)
        })
        data.access_projects = arryData
      }
      if (Array.isArray(data.access_filehub)) {
        arryData = []
        data.access_filehub.forEach(item => {
          arryData.push(item.id)
        })
        data.access_filehub = arryData
      }
      arry.concat(data.permissions, data.access_servers, data.access_projects, data.access_filehub)
      state.currentPermission = arry
    }
  }
}
