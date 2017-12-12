<template>
  <div class="node-tree" :class="['node-tree-' + idx, {'panel':idx === 0}]">
    <div class="node-label" style="position: relative">
      <div class="check-box" :class="{checked:selected}"></div>
      <input style="opacity: 0;position: absolute;left: 0;width: 14px;height: 14px;margin-top: 4px;" type="checkbox" :checkType="model.type" v-model="checkModel" :value="checkValue" @mousedown="mousedown">{{model.name || model.filename}}

      <!--<m-checkbox class="list-check" v-model="checkModel" :data="{label:model.name, value:checkValue}"></m-checkbox>-->
    </div>
    <tree-check v-for="(item,key) in model.data" v-model="child_selected" :idx="nodeIndex" :model="item" :key="key"></tree-check>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'TreeCheck',
    props: ['model', 'idx', 'value'],
    data: () => ({
      selected: false,
      checked: 'checked',
      checkType: false,
      child_selected: [],
//      childs_selected: [],
      select_all_temp: null
    }),
    watch: {
      'value' (n, o) {
        // 判断子级
        if (this.nodeIndex >= window.__nodeidx) {
          if (n.indexOf(this.checkValue) !== -1 && this.model.data) {
            let tempSelected = []
            this.model.data.forEach((v1, i) => {
              tempSelected.push((v1.id || v1.name) + '')
//              if (v1.id) {
//                if (v1.type === 'permissions') {
//                  this.permissions.push(v1.id)
//                } else if (v1.type === 'access_servers') {
//                  this.access_servers.push(v1.id)
//                } else if (v1.type === 'access_projects') {
//                  this.permissions.push(v1.id)
//                } else if (v1.type === 'access_filehub') {
//                  this.access_filehub.push(v1.id)
//                }
//              }
            })
            this.child_selected = tempSelected
          } else {
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
      },
      '$parent.child_selected' () {
        if (this.$parent.child_selected.indexOf(this.checkValue) === -1) {
          this.selected = false
          if (this.model.id) this.deleteState({name: this.model.type, value: this.model.id})
        } else {
          this.selected = true
//          if (this.model.type === 'permissions' && this.model.id) {
//            this.setState({name: 'permissions', value: this.model.id})
//          } else if (this.model.type === 'access_servers' && this.model.id) {
//            this.setState({name: 'access_servers', value: this.model.id})
//          } else if (this.model.type === 'access_projects' && this.model.id) {
//            this.setState({name: 'access_projects', value: this.model.id})
//          } else if (this.model.type === 'access_filehub' && this.model.id) {
//            this.setState({name: 'access_filehub', value: this.model.id})
//          }
          if (this.model.id) this.setState({name: this.model.type, value: this.model.id})
        }
      },
      'child_selected' () {
      }
    },
    methods: {
      ...mapMutations('permission', ['setState', 'deleteState']),
      mousedown (e) {
        window.__vmpuid = this.$parent._uid
        window.__vmuid = this._uid
        window.__nodeidx = this.nodeIndex
      }
    },
    computed: {
      ...mapState('permission', ['permissions', 'access_servers', 'access_projects', 'access_filehub']),
      checkModel: {
        get () {
          return this.value || this.selected
        },
        set (v) {
          console.log(v)
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
      }
    },
    created () {
    }
  }
</script>

<style lang='scss'>
  .node-tree {
    padding-left: 16px;
    .check-box{
      width: 14px;
      height: 14px;
      border: 1px solid #e0e0e0;
      background-color: #fff;
      transition: all 0.3s;
      margin-right: 6.4px;
      background-color: #899ab6;
      border-color: #899ab6;
      display: inline-block;
      vertical-align: middle;
      position: relative;
      &.checked:before {
        position: absolute;
        content: " ";
        left: 50%;
        top: 50%;
        content: ' ';
        width: 6.4px;
        height: 11.2px;
        margin-left: -3.2px;
        margin-top: -6.4px;
        border-right: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(30deg);
      }
      &.checked {
        order-color: #48bbc0;
        background-color: #48bbc0;
      }
    }
  }
</style>
