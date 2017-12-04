<template>
    <div class="">
      <m-table class="hover striped machines-table m-t16" v-for="(item,index) in dataList">
        <col width="55px">
        <thead>
        <tr class="panel">
          <th><m-checkbox class="list-check" :data="{label: item.name}" v-model="isSelectAll" @change="selectsAllItem(item.name)" ></m-checkbox></th>
        </tr>
        </thead>
        <tbody>
        <tr >
          <td>
              <span v-for="items in item.data">
              <m-checkbox  class="list-check" v-model="selects" :data="{label:(items.id||items.id+'')}" hide-label></m-checkbox>
                <span>{{items.name}}</span>
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
      props: ['dataList'],
      data: () => ({
        selects: [],
        isSelectAll: false
      }),
      methods: {
        selectsAllItem (name) {
          let items = this.dataList.data
          items.forEach(item => {
            if (item.name === name) {
              item.data.forEach(i => {
                if (this.isSelectAll) {
                  if (this.selects.indexOf(i.id || i.sid) === -1) this.selects.push(i.id || i.sid)
                } else {
                  if (this.selects.indexOf(i.id || i.sid) !== -1) this.selects.splice(this.selects.indexOf(i.id || i.sid), 1)
                }
              })
            }
          })
        }
      }
    }
</script>

<style lang='scss'>
</style>
