export default {
  namespaced: true,
  state: {
    currentUser: {},
    currentPermission: [],
    permissions: {
      'modify_server_info': 25,  // 修改主机信息
      'start_stop_server': 24,  // 开机关机
      'delete_server': 23,  // 删除主机
      'add_server': 22,  // 添加主机
      'add_project': 1,  // 添加项目
      'create_service': 32,  // 创建服务
      'delete_project': 5,  // 删除项目
      'build_project': 6,  // 构建镜像
      'deploy_project': 7,  // 部署应用
      'modify_project_info': 8,  // 信息修改

      'add_image': 27,  // 新增镜像
      'deploy_image': 28,  // 部署镜像
      'delete_image': 29,  // 删除镜像
      'delete_project_version': 30,  // 删除版本
      'update_project_version': 31,  // 更新版本

      'add_directory': 2,  // 新建文件夹
      'delete_file': 14,  // 删除文件
      'preview_file': 12,  // 预览文件
      'upload_file': 9,  // 上传文件
      'delete_directory': 10,  // 删除文件夹
      'download_file': 11,  // 下载文件
      'copy_file_url': 13,  // 复制url

      'company_identify': 15,  // 认证企业
      'modify_company_info': 3,  // 修改企业信息

      'audit_employee': 17,  // 审核员工
      'set_employee_permission': 18,  // 设置员工权限
      'dismiss_employee': 19,  // 解除和员工关系
      'view_employee_id_info': 16,  // 查看员工身份证信息
      'invite_new_employee': 26,  // 邀请新员工

      'modify_permission_template': 20,  // 修改权限模版
      'delete_permission_template': 21,  // 删除权限模版
      'add_permission_template': 4  // 新增权限模版
    }
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
          if (item.id) {
            arryData.push(item.id)
          } else {
            arryData.push(item)
          }
        })
        data.permissions = arryData
      }
      if (Array.isArray(data.access_servers)) {
        arryData = []
        data.access_servers.forEach(item => {
          if (item.sid) {
            arryData.push(item.sid)
          } else {
            arryData.push(item)
          }
        })
        data.access_servers = arryData
      }
      if (Array.isArray(data.access_projects)) {
        arryData = []
        data.access_projects.forEach(item => {
          if (item.id) {
            arryData.push(item.id)
          } else {
            arryData.push(item)
          }
        })
        data.access_projects = arryData
      }
      if (Array.isArray(data.access_filehub)) {
        arryData = []
        data.access_filehub.forEach(item => {
          if (item.id) {
            arryData.push(item.id)
          } else {
            arryData.push(item)
          }
        })
        data.access_filehub = arryData
      }
      arry = arry.concat(data.permissions, data.access_servers, data.access_projects, data.access_filehub)
      state.currentPermission = arry
    },
    isPermission (state, permissionName) {
      return state.currentUser.is_admin || state.user.currentPermission.indexOf(state.permissions[permissionName]) !== -1
    }
  },
  actions: {
    // isPermission (store, permissionName) {
    //   return store.rootState.user.currentUser.is_admin || store.rootState.user.currentPermission.indexOf(store.rootState.user.permissions[permissionName]) !== -1
    // }
  }
}
