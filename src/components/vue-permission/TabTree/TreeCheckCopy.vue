<template>
    <div class="node-tree" :class="['node-tree-' + idx, {'panel':idx === 0}]">
      <div class="node-label">
        <m-checkbox class="list-check" v-model="$parent.child_selected" :data="{label:model.name, value:checkValue}"></m-checkbox>
        <!--<m-checkbox v-else  class="list-check" v-model="select_c" :data="{label:model.name}"></m-checkbox>-->
      </div>
      <tree-check v-for="(item,key) in model.data" :idx="nodeIndex" :model="item" :key="key"></tree-check>
    </div>
</template>

<script>
    export default {
      name: 'TreeCheck',
      props: ['model', 'idx'],
      data: () => ({
        selected: false,
        child_selected: [],
        select_all_temp: null
      }),
      watch: {
        'child_selected' (n, o) {
          let tempIdx = this.$parent.child_selected.indexOf(this.checkValue)
          if (n.length === this.model.data.length) {
            if (tempIdx === -1) this.$parent.child_selected.push(this.checkValue)
          } else {
            tempIdx !== -1 && this.$parent.child_selected.splice(tempIdx, 1)
          }
//          this.$children.forEach((v, i) => {
//            if (i > 0 && v.hasChild) {
//              if (tempIdx !== -1) v.child_selected = v.selectAll
//              else v.child_selected = []
//            }
//          })
        }
      },
      methods: {
        selectChange () {
//          let tempIdx = this.$parent.child_selected.indexOf(this.checkValue)
//          if (this.hasChild) {
//            if (tempIdx !== -1) {
//              this.model.data.forEach((v, i) => {
//                this.child_selected.push((v.id || v.name) + '')
//              })
//            } else {
//              this.child_selected = []
//            }
//          }
        }
      },
      computed: {
        nodeIndex () {
          return this.idx + 1
        },
        checkValue () {
          return (this.model.id || this.model.name) + ''
        },
        hasChild () {
          return this.model.data && this.model.data.length > 0
        },
        selectAll () {
          if (this.select_all_temp === null) {
            this.select_all_temp = []
            this.model.data.forEach((v, i) => {
              this.select_all_temp.push((v.id || v.name) + '')
            })
          }
          return this.select_all_temp
        }
      }
    }
</script>

<style lang='scss'>
  .node-tree {
    padding-left: 16px;
  }
</style>
