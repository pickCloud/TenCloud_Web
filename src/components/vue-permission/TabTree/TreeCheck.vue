<template>
  <div class="node-tree" :class="['node-tree-' + idx, {'panel':idx === 0}]">
    <div class="node-label">
      <input type="checkbox" v-model="checkModel" :value="checkValue"> <lable>{{model.name}}</lable>
      <!--<m-checkbox class="list-check" v-model="checkModel" :data="{label:model.name, value:checkValue}"></m-checkbox>-->
    </div>
    <tree-check v-for="(item,key) in model.data" v-model="child_selected" :idx="nodeIndex" :model="item" :key="key"></tree-check>
  </div>
</template>

<script>
  export default {
    name: 'TreeCheck',
    props: ['model', 'idx', 'value'],
    data: () => ({
      selected: false,
      child_selected: [],
//      childs_selected: [],
      select_all_temp: null
    }),
    watch: {
      'child_selected' (n, o) {
//        this.$emit('change', n)
        console.log(this.idx + ':' + this.child_selected)
//        let tempValue = this.value.concat()
//        let tempIdx = tempValue.indexOf(this.checkValue)
//        if (n.length && n.length === this.model.data.length) {
//          if (tempIdx === -1) tempValue.push(this.checkValue)
//        } else {
//          tempIdx !== -1 && tempValue.splice(tempIdx, 1)
//        }
        this.$emit('input', n)
      },
      'value' (n, o) {
        console.log(n)
//        if (n.indexOf(this.checkValue) !== -1) {
//          let tempSelected = []
//          this.model.data.forEach((v1, i) => {
//            tempSelected.push(v1.id || v1.name)
//          })
//          this.child_selected = tempSelected
//        } else {
//          this.child_selected = []
//        }
      }
    },
    methods: {
      updateValue (value) {
        console.log(value)
      }
    },
    computed: {
      checkModel: {
        get () {
          return this.value || this.selected
        },
        set (v) {
          this.$emit('input', v)
        }
      },
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
