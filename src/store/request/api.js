const islocal = window.isLoacal = /.+localhost.+/.test(window.location.href)
const bUrl = window.location.origin
const hostName = window.location.hostname
const APIS = {
  baseURL: islocal ? 'https://c.10.com' : bUrl,
  // baseURL: 'https://c.10.com',
  // baseURL: 'http://47.94.18.22:18080',
  wsURL: islocal ? 'wss://c.10.com' : 'wss://' + hostName,
  clusters: {u: '/api/clusters', m: 'get'},
  cluster_add: {u: '/api/cluster/new', m: 'post'},
  cluster_del: {u: '/api/cluster/del', m: 'post'},
  cluster_detail: {u: '/api/cluster/', m: 'get'},
  cluster_update: {u: '/api/cluster/update', m: 'post'},
  server_add: {u: '/api/server/new', m: 'post'},
  server_del: {u: '/api/server/del', m: 'post'},
  server_detail: {u: '/api/server/', m: 'get'},
  server_containers: {u: '/api/server/containers/', m: 'get'},
  server_update: {u: '/api/server/update', m: 'post'},
  server_migration: {u: '/api/server/migration', m: 'post'},
  server_performance: {u: '/api/server/performance', m: 'post'},
  server_start: {u: '/api/server/start/', m: 'get'},
  server_reboot: {u: '/api/server/reboot/', m: 'get'},
  server_stop: {u: '/api/server/stop/', m: 'get'},
  server_operation: {u: '/api/log/operation', m: 'post'},
  app_performance: {u: '/api/server/container/performance', m: 'post'},
  server_status: {u: '/api/server/', m: 'get'}, // {region_id}/{instance_id}/status
  container_start: {u: '/api/server/container/start', m: 'post'},
  container_stop: {u: '/api/server/container/stop', m: 'post'},
  container_del: {u: '/api/server/container/del', m: 'post'},
  container_detail: {u: '/api/server/', m: 'get'},
  projects: {u: '/api/projects', m: 'get'},
  project_del: {u: '/api/project/del', m: 'post'},
  project_add: {u: '/api/project/new', m: 'post'},
  project_update: {u: '/api/project/update', m: 'post'},
  project_repos: {u: '/api/repos', m: 'post'},
  project_detail: {u: '/api/project/', m: 'get'},
  project_vers: {u: '/api/project/', m: 'get'},
  project_image: {u: '/api/project/', m: 'get'},
  project_up_image: {u: '/api/project/image/upload', m: 'post'},
  project_down_image: {u: '/api/project/image/cloud/download', m: 'post'},
  project_branch: {u: '/api/repos/branches', m: 'post'},
  project_vlog: {u: '/api/project/', m: 'get'},
  project_create: {u: '/api/project/image/creation', m: 'post'},
  project_container_list: {u: '/api/project/containers/list', m: 'post'},
  project_deployment: {u: '/api/project/deployment', m: 'post'},
  user_update: {u: '/api/user/update', m: 'post'},
  user_login: {u: '/api/user/login', m: 'post'},
  user_login_password: {u: '/api/user/login/password', m: 'post'},
  user_sms_count: {u: '/api/user/sms/', m: 'get'},
  user_verify: {u: '/api/user/sms', m: 'post'},
  user_logout: {u: '/api/user/logout', m: 'post'},
  user_info: {u: '/api/user', m: 'get'},
  user_thumb_token: {u: '/api/user/token', m: 'get'},
  user_get_captcha: {u: '/api/user/captcha', m: 'get'},
  user_resign: {u: '/api/user/register', m: 'post'},
  user_resetPassword: {u: '/api/user/password/reset', m: 'post'},
  user_setPassword: {u: '/api/user/password/set', m: 'post'},
  user_resetPhone: {u: '/api/user/mobile/reset', m: 'post'},
  file_list: {u: '/api/file/list', m: 'post'},
  file_pages: {u: '/api/file/', m: 'get'},
  file_create_dir: {u: '/api/file/dir/create', m: 'post'},
  file_upload: {u: '/api/file/upload', m: 'post'},
  file_update: {u: '/api/file/update', m: 'post'},
  file_download: {u: '/api/file/download', m: 'post'},
  file_del: {u: '/api/file/delete', m: 'post'},
  company_create: {u: '/api/company/new', m: 'psot'},
  company_get: {u: '/api/companies/list/', m: 'get'},
  company_employe: {u: '/api/company/', m: 'get'},
  company_template: {u: '/api/permission/template/list/', m: 'get'},
  company_detail: {u: '/api/company/', m: 'get'},
  company_updata: {u: '/api/company/update', m: 'get'},
  company_invite: {u: '/api/company/', m: 'get'},
  company_invite_waiting: {u: '/api/company/application/waiting', m: 'post'},
  company_setCondition: {u: '/api/company/', m: 'get'},
  company_apply: {u: '/api/company/application', m: 'post'},
  company_accept: {u: '/api/company/application/accept', m: 'post'},
  company_reject: {u: '/api/company/application/reject', m: 'post'},
  company_code: {u: '/api/company/application', m: 'get'},
  company_dismission: {u: '/api/company/application/dismission', m: 'post'},
  company_employee_dismission: {u: '/api/company/employee/dismission', m: 'post'},
  company_adminTransfer: {u: '/api/company/admin/transfer', m: 'post'},
  company_getPermission: {u: '/api/permission/resource/', m: 'get'},
  company_getTemplate: {u: '/api/permission/template', m: 'get'},
  company_getUserTemplate: {u: '/api/permission/', m: 'get'},
  company_template_user_update: {u: '/api/permission/user/update', m: 'get'},
  message_get: {u: '/api/messages/', m: 'get'},
  message_search: {u: '/api/messages/search', m: 'get'},
  message_count: {u: '/api/messages/count', m: 'get'},
  template_add: {u: '/api/permission/template/add', m: 'post'},

  islocal: islocal
}
export default APIS
