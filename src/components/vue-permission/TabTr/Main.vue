<template>
    <div class="tab-box">
      <div class="tab-tr tab-bg m-b16" v-for="(item,index) in dataList" :key="item.id">
        <div class="panel">
           <m-checkbox class="list-check" :data="{label: item.name}" v-model="selecteda" :id="'all'+index" @change="getId(index)"></m-checkbox>
        </div>
        <div v-for="it in item.data" class="">
            <div  v-if="it.id" class="p-lr-16 border-bottom-1px tab-td" >
              <m-checkbox  class="list-check" :data="{label:(it.id+'')}" hide-label></m-checkbox>
              <span>{{it.name}}</span>
            </div>
            <div  class="tab-block" v-else>
              <div  class="tab-tr p-lr-16 border-bottom-1px">
                <m-checkbox  class="list-check" @change="" :data="{label:(it.name+'')}"></m-checkbox>
              </div>
              <div class="tab-td p-l-32 border-bottom-1px">
                <div class="tab-inline-b " v-if="!it.id" v-for="i in it.data">
                  <m-checkbox  class="list-check" v-model="permissions" :data="{label:(i.id+'')}" hide-label></m-checkbox>
                  <span>{{i.name}}</span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'TabTr',
      props: ['dataList'],
      data: () => ({
        selects: [],
        isSelectAll: false,
        permissions: [],
        selecte_a: [],
        selecte_child: [],
        access_servers: [],
        access_projects: [],
        access_filehub: []
      }),
      methods: {
        selectsAllItem (item) {
          item.forEach(item => {
            if (!item.id) {
              item.data.forEach(i => {
                if (item.id) {
                  if (this.selects.indexOf(i.id || i.sid) === -1) this.selects.push(i.id || i.sid)
                } else {
                  if (this.selects.indexOf(i.id || i.sid) !== -1) this.selects.splice(this.selects.indexOf(i.id || i.sid), 1)
                }
              })
            } else {

            }
          })
        },
        getId (id) {
          console.log(id)
        }
      },
      computed: {
        selecteda: {
          get () {
            return this.selecte_a
          },
          set (v) {
            console.log(v)
          }
        }
      }
    }
</script>

<style lang='scss'>
  .tab-box{
    .tab-bg{
      background-color: #1d212a;
    }
    .tab-tr{
      line-height: 50px;
    }
    .tab-td{
      line-height: 50px;
    }
    .tab-inline-b{
      display: inline-block;
    }
    .tab-block{
      display: block;
    }
    .p-l-32{
      padding-left: 32px;
    }
  }

</style>
