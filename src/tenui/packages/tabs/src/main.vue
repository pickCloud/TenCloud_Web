<template>
  <div class="tab-wrap">
    <ul class="tab-label">
      <li :class="{'active':tabindex == key}" v-for="(label, key) in labels" @click="labelSelect(key, $event)">{{label}}</li>
      <li class="tab-line" :style="{'left':lineleft,'width':linewidth}"></li>
    </ul>
    <div class="tab-cont">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//  import $ from 'jquery'
  export default {
    name: 'Tabs',
    data () {
      return {
        tabindex: -1,
        lineleft: 0,
        linewidth: 0
      }
    },
    props: {
      labels: {
        type: Array,
        default: []
      },
      tabkey: {
        type: Number,
        default: 0
      }
    },
    methods: {
      labelSelect (key, e) {
        this.tabindex = key
        this.linestyle(e.target)
      },
      linestyle (e) {
        this.lineleft = e.offsetLeft + 'px'
        this.linewidth = e.clientWidth + 'px'
        let items = this.$el.querySelector('.tab-cont').children
        let i = -1
        while (++i < items.length) {
          let item = items[i]
          if (this.tabindex === i) item.className += ' active'
          else item.className = item.className.replace(' active', '')
        }
      },
      initTabContItem () {
        let items = this.$el.querySelector('.tab-cont').children
        let i = -1
        while (++i < items.length) {
          let item = items[i]
          if (item.className.indexOf('tab-cont_item') === -1) item.className += 'tab-cont_item'
        }
      }
    },
    created () {
      this.tabindex = this.tabkey
    },
    mounted () {
      this.initTabContItem()
      this.linestyle(this.$el.querySelector('.tab-label .active'))
    }
  }
</script>
