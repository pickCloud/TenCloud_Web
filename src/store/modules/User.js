export default {
  namespaced: true,
  state: {
    currentUser: {},
    currentPermission: [],
    permissions: {
      'modify_server_info': 33,  // 修改主机信息
      'start_stop_server': 32,  // 开机关机
      'delete_server': 31,  // 删除主机
      'add_server': 30,  // 添加主机
      'add_project': 1,  // 添加项目
      'delete_project': 8,  // 删除项目
      'build_project': 9,  // 版本构建
      'deploy_project': 10,  // 项目部署
      'modify_project_info': 11,  // 信息修改
      'delete_project_version': 12,  // 删除版本
      'start_stop_container': 13,  // 容器重启停止
      'delete_container': 14,  // 容器删除
      'add_directory': 2,  // 新建文件夹
      'delete_file': 20,  // 删除文件
      'copy_file_url': 19,  // 复制url
      'preview_file': 18,  // 预览文件
      'delete_directory': 16,  // 删除文件夹
      'upload_file': 15,  // 上传文件
      'download_file': 17,  // 下载文件
      'view_company_identify_info': 34,  // 查看企业认证信息
      'company_identify': 21,  // 认证企业
      'modify_company_info': 3,  // 修改企业信息
      'dismiss_employee': 26,  // 解除和员工关系
      'view_employee_info': 4,  // 查看员工信息
      'set_join_conditions': 27,  // 设置员工加入条件
      'set_employee_permission': 25,  // 设置员工权限
      'set_admin': 24,  // 更换员工管理员
      'audit_employee': 23,  // 审核员工
      'view_employee_id_info': 22,  // 查看员工身份证信息
      'modify_permission_template': 28,  // 修改权限模版
      'delete_permission_template': 29,  // 删除权限模版
      'add_permission_template': 5,  // 新增权限模版
      'audit_user_id': 6,  // 个人实名制审核
      'company_issue': 7,  // 用户提起企业异议处理
      'audit_company_id': 35,  // 企业认证审核
      'invite_new_employee': 36  // 邀请员工
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
    }
  },
  actions: {
    isPermission (store, permissionName) {
      // return true
      return store.rootState.user.currentUser.is_admin || store.rootState.user.currentPermission.indexOf(store.rootState.user.permissions[permissionName]) !== -1
    }
  }
}
