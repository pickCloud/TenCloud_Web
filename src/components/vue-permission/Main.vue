<template>
    <div class="">
    </div>
</template>

<script>
    export default {
      name: 'tabs',
      props: ['dataList'],
      data: () => ({
        btnIndex: 0,
        btnIndexSec: 0,
        isSelectAll: [[], []],
        permissions: [],
        access_servers: [],
        access_projects: [],
        access_filehub: [],
        selects: []
      }),
      methods: {
        btnIndexChange (index) {
          this.btnIndex = index
          this.btnIndexSec = 0
        },
        btnIndexSecChange (index) {
          this.btnIndexSec = index
        },
        selectsAllItem (name) {
          let items = this.dataList[this.btnIndex].categories[this.btnIndexSec].data
          console.log(name)
          console.log(items)
          items.forEach(item => {
            if (item.name === name) {
              item.data.forEach(i => {
                if (this.isSelectAll[this.btnIndex][this.btnIndexSec]) {
                  if (this.selects.indexOf(i.id || i.sid) === -1) this.selects.push(i.id || i.sid)
                  console.log(this.selects)
                } else {
                  if (this.selects.indexOf(i.id || i.sid) !== -1) this.selects.splice(this.selects.indexOf(i.id || i.sid), 1)
                  console.log(this.selects)
                }
              })
            }
          })
        },
        SelectId: function (id) {
          if (this.btnIndex === 0) {
            return this.permissions.indexOf(id) !== -1 && this.permissions.push(id)
          } else {
            if (this.btnIndexSec === 0) {
              return this.access_filehub.indexOf(id) !== -1 && this.access_filehub.push(id)
            } else if (this.btnIndexSec === 1) {
              return this.access_projects.indexOf(id) !== -1 && this.access_projects.push(id)
            } else if (this.btnIndexSec === 2) {
              return this.access_servers.indexOf(id) !== -1 && this.access_servers.push(id)
            }
          }
        },
        idArray () {
          return this.permissions
//          if (this.btnIndex === 0) {
//            return 'permissions'
//          } else {
//            if (this.btnIndexSec === 0) {
//              console.log(1)
//              return 'access_filehub'
//            } else if (this.btnIndexSec === 1) {
//              console.log(2)
//              return 'access_projects'
//            } else if (this.btnIndexSec === 2) {
//              console.log(3)
//              return 'access_servers'
//            }
//          }
        }
      },
      computed: {
        isSelectId: function (id) {
//          let items = this.dataList[this.btnIndex]['categories'][this.btnIndexSec]['data']
          if (this.btnIndex === 0) {
            return this.permissions.indexOf(id) !== -1
          } else {
            if (this.btnIndexSec === 0) {
              return this.access_filehub.indexOf(id) !== -1
            } else if (this.btnIndexSec === 1) {
              return this.access_projects.indexOf(id) !== -1
            } else if (this.btnIndexSec === 2) {
              return this.access_servers.indexOf(id) !== -1
            }
          }
        }
      },
      created () {
      },
      watch: {
//        selects (n, o) {
//          console.log('真心的')
//          if (n) {
//            this.dataList[this.btnIndex].categories[this.btnIndexSec].data.forEach((v, i) => {
//              let key = v.id + ''
//              if (this.selects.indexOf(key) === -1) this.selects.push(key)
//            })
//          } else {
//            this.selects = []
//          }
//        },
        btnIndex () {
          if (this.isSelectAll[this.btnIndex][this.btnIndexSec] === undefined) {
            this.isSelectAll[this.btnIndex][this.btnIndexSec] = false
          }
        },
        btnIndexSec () {
          if (this.isSelectAll[this.btnIndex][this.btnIndexSec] === undefined) {
            this.isSelectAll[this.btnIndex][this.btnIndexSec] = false
          }
        }
      }
    }
</script>

<style lang='scss'>
</style>
