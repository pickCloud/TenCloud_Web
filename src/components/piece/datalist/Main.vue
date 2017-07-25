<template>
  <div class="data-list">
    <input type="text" v-model="selfmodel" @input="inpChange" @blur="onBlur" @focus="onFocus" placeholder="输入/选择版本号">
    <div class="data-list-items" v-if="isfocus && dataitems.length > 0">
      <div class="data-list-item" v-for="item in dataitems" @click="itemSelect(item)">{{item[okey]}}</div>
    </div>
  </div>
</template>

<script>
//  [
//    {'version': 1},
//    {'version': 2222},
//    {'version': 33},
//    {'version': 456},
//    {'version': 489}
//  ]
  import { focus } from 'vue-focus'
  export default {
    directives: { focus: focus },
    props: {
      items: {
        type: Array,
        default: _ => []
      },
      okey: {
        type: String,
        default: 'key'
      },
      value: {
        type: Object
      }
    },
    data: () => ({
      dataitems: [],
      selfmodel: '',
      isfocus: false
    }),
    methods: {
      inpChange () {
        let temp = {}
        temp[this.okey] = this.selfmodel
        this.$emit('input', temp)
      },
      onFocus () {
        this.isfocus = true
        this.search()
      },
      onBlur (e) {
        let tt = setTimeout(_ => {
          clearTimeout(tt)
          this.isfocus = false
        }, 150)
      },
      search () {
        this.dataitems = this.items.filter((v, i) => {
          if (v[this.okey].toString().indexOf(this.selfmodel) === 0) return v
        })
      },
      itemSelect (d) {
        this.$emit('input', d)
        this.isfocus = false
      }
    },
    watch: {
      value (n, o) {
        this.selfmodel = this.value ? this.value[this.okey] : ''
        this.search()
      }
    },
    mounted () {
      this.selfmodel = this.value ? this.value[this.okey] : ''
    }
  }
</script>

<style>
  .data-list {
    position: relative;
    z-index: 999;
  }
  .data-list-item {
    padding: 16px;
    border-top: 1px solid #262a35;
    cursor: pointer;
  }
  .data-list-item:hover {
    background-color: rgba(255,255,255,0.1);
  }
  .data-list-items {
    background-color: #1d212a;
    position: absolute;
    left: 0;
    width: 100%;
  }
</style>
