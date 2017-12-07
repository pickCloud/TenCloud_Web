<template>
  <div class="node-tree" :class="['node-tree-' + idx, {'panel':idx === 0}]">
    <div class="node-label">
      <m-checkbox class="list-check" v-model="child_selected" v-on:change="updateValue(checkValue)" :value="checkValue" :data="{label:model.name, value:checkValue}"></m-checkbox>
    </div>
    <tree-check v-for="(item,key) in model.data" :idx="nodeIndex" :model="item" :key="key"></tree-check>
  </div>
</template>

<script>
  export default {
    name: 'TreeCheck',
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: ['model', 'idx'],
    data: () => ({
      selected: false,
      child_selected: [],
      childs_selected: [],
      select_all_temp: null
    }),
    watch: {
      'child_selected' (n, o) {
        this.$emit('change', n)
        console.log(this.child_selected)
//        let tempIdx = this.$parent.child_selected.indexOf(this.checkValue)
//        if (n.length && n.length === this.model.data.length) {
//          if (tempIdx === -1) this.$parent.child_selected.push(this.checkValue)
//        } else {
//          tempIdx !== -1 && this.$parent.child_selected.splice(tempIdx, 1)
//        }
//        this.$on('change', function (v) {
//          console.log(v)
//        })
      }
    },
    methods: {
      updateValue (value) {
        console.log(value)
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
