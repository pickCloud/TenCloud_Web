<template>
    <div class="">
      <slot name="tabFitst" class="m-t16">
        <m-btn v-for="(item,index) in dataList" :sizeh="30" :sizew="70" class="m-r16" :class="btnIndex==index?'primary_bg grey-dark_txt':'panel-bg_bg'" @click.native="btnIndexChange(index)">{{item.name}}</m-btn>
      </slot>
      <slot name ='tabSecond'>
        <div class="m-t16">
          <m-btn v-for="(item,index) in dataList[btnIndex]['categories']" :sizeh="30" :class="btnIndexSec==index?'select-active':''" @click.native="btnIndexSecChange(index)">{{item.name}}</m-btn>
        </div>
      </slot>
      <slot name="tabLable">
        <m-table class="hover striped machines-table m-t16" v-for="(item,index) in dataList[btnIndex]['categories'][btnIndexSec]['data']">
            <col width="55px">
            <thead>
            <tr class="panel">
              <th><m-checkbox class="list-check" :data="{label: item.name}"  ></m-checkbox></th>
            </tr>
            </thead>
            <tbody>
            <tr >
              <td>
              <span v-for="items in item.data">
              <m-checkbox  class="list-check" v-model="WatchId" :data="{label:(items.id+'')}" hide-label></m-checkbox>
                <span>{{items.filename||items.name}}</span>
              </span>
              </td>
            </tr>
            </tbody>
        </m-table>
      </slot>
    </div>
</template>

<script>
    export default {
      name: 'tabs',
      props: ['dataList'],
      data: () => ({
        btnIndex: 0,
        btnIndexSec: 0,
        select: false,
        permissions: [],
        access_servers: [],
        access_projects: [],
        access_filehub: []
      }),
      methods: {
        btnIndexChange (index) {
          this.btnIndex = index
          this.btnIndexSec = 0
        },
        btnIndexSecChange (index) {
          this.btnIndexSec = index
        },
        selectIdAll (ids) {
          if (this.btnIndex === 0) {

          } else if (this.btnIndex === 1) {

          }
          return true
        },
        SelectId: function (id) {
//          let items = this.dataList[this.btnIndex]['categories'][this.btnIndexSec]['data']
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
        selects (n, o) {
          if (n) {
            this.dataList[this.btnIndex].categories[this.btnIndexSec].data.forEach((v, i) => {
              let key = v.id + ''
              if (this.selects.indexOf(key) === -1) this.selects.push(key)
            })
          } else {
            this.selects = []
          }
        },
        WatchId () {
          if (this.btnIndex === 0) {
            return this.permissions
          } else {
            if (this.btnIndexSec === 0) {
              return this.access_filehub
            } else if (this.btnIndexSec === 1) {
              return this.access_projects
            } else if (this.btnIndexSec === 2) {
              return this.access_servers
            }
          }
        }
      }
    }
</script>

<style lang='scss'>
</style>
