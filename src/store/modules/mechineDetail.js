import axios from '../request/axios'
export default {
  namespaced: true,
  state: {
    baseInfo: {
      cluster_id: -1,
      cluster_name: ''
    },
    businessInfo: {
      contract: {},
      provider: ''
    },
    sysInfo: {
      config: {}
    },
    applists: [],
    operations: []
  },
  getters: {
    baseInfo: state => state.baseInfo,
    businessInfo: state => state.businessInfo,
    sysInfo: state => state.sysInfo,
    applists: state => state.applists,
    operations: state => state.operations
  },
  mutations: {
    'setBaseInfo' (state, data) {
      state.baseInfo = data
    },
    'setBusinessInfo' (state, data) {
      state.businessInfo = data
    },
    'setSysInfo' (state, data) {
      state.sysInfo = data
    },
    'setApplists' (state, list) {
      list.forEach(function (item) {
        state.listts.push(item)
      })
    },
    'setOperations' (state, list) {
      list.forEach(function (item) {
        state.listts.push(item)
      })
    }
  },
  actions: {
    getServerDetail (ctx, id) {
      axios.http('server_detail', '', 'get', id).then(d => {
        if (d.status === 0) {
          this.baseInfo = d.data.basic_info
          this.businessInfo = d.data.business_info
          this.sysInfo = d.data.system_info
          if (this.machineStatus[2] === 'run') this.isOpen = true
          if (this.machineStatus[2] === 'stop') this.isOpen = false
          this.statusApiSuf = this.baseInfo.instance_id + '/status'
          // console.log(d.data)
          // console.log(this.baseInfo.machine_status)
          if (this.baseInfo.machine_status === 'Starting' || this.baseInfo.machine_status === 'Stopping') this.loopGetStatus(this.machineStatus[3])

          this.$store.commit('sitepath/SET_PATH', [
            {name: 'Main', cn: '主页'},
            {name: 'Machines', cn: '机器列表'},
            {cn: this.baseInfo.name}
          ])
        }
      })
      axios.http('server_containers', '', 'get', id).then(d => {
        if (d.status === 0) {
          // this.applists = d.data
        }
      })
      axios.http('server_operation', '', 'get', id + '/operation').then(d => {
        if (d.status === 0) {
          console.log(d.data)
          // this.operations = d.data
        }
      })
    }
  }
}
