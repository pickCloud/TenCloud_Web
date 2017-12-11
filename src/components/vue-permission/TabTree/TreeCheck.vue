<template>
  <div class="node-tree" :class="['node-tree-' + idx, {'panel':idx === 0}]">
    <div class="node-label">
      <input type="checkbox" v-model="checkModel" :value="checkValue" @mousedown="mousedown">{{model.name}}
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
      checked: 'checked',
      child_selected: [],
//      childs_selected: [],
      select_all_temp: null
    }),
    watch: {
      'value' (n, o) {
        // 判断子级
//        console.log(window.__nodeidx)
        if (this.nodeIndex >= window.__nodeidx) {
          if (n.indexOf(this.checkValue) !== -1 && this.model.data) {
            let tempSelected = []
            this.model.data.forEach((v1, i) => {
              tempSelected.push((v1.id || v1.name) + '')
            })
            this.child_selected = tempSelected
          } else {
            console.log(this._uid)
            console.log(window.__vmuid)
            if (this._uid >= window.__vmuid) {
              this.child_selected = []
            }
          }
        }
        // 判断父级别
        if (this.$parent.value && window.__vmpuid === this.$parent._uid) {
          let tempIdx = this.$parent.$parent.child_selected.indexOf(this.$parent.checkValue)
          window.__vmpuid = this.$parent.$parent._uid
          if (this.$parent.model.data.length === n.length) {
            this.$parent.$parent.child_selected.push(this.$parent.checkValue)
          } else {
            tempIdx !== -1 && this.$parent.$parent.child_selected.splice(tempIdx, 1)
          }
        }
      }
    },
    methods: {
      updateValue (value) {
        console.log(value)
      },
      mousedown (e) {
        window.__vmpuid = this.$parent._uid
        window.__vmuid = this._uid
        window.__nodeidx = this.nodeIndex
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
