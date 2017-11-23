<template>
    <div class="">
      <m-table class="hover striped machines-table" v-for="itemOut in access_servers">
        <col width="55px" >
        <thead>
        <tr>
          <th><m-checkbox class="list-check" :data="{label: itemOut.name}" v-model="isSelectServerAll"></m-checkbox></th>
        </tr>
        </thead>
        <tbody>
        <tr >
          <td>
              <span >
              <m-checkbox  class="list-check" v-model="selectServers" :data="{label:(item.id+'')}" hide-label></m-checkbox>
                <span>{{item.name}}</span>
              </span>
          </td>
        </tr>
        </tbody>
      </m-table>
    </div>
</template>

<script>
    export default {
      name: 'TabLabel',
      prop: ['dataList'],
      data: () => ({
        list: [
          {name: '功能'},
          {name: '数据'}
        ],
        btnIndex: 0
      }),
      methods: {
        btnIndexChange (index) {
          this.btnIndex = index
        }
      }
    }
</script>

<style lang='scss'>
</style>
