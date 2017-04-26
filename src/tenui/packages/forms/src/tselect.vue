<template>
  <div class="select">
    <div class="select-label" @click="opationAc">
      <i class="ten-icon select-label_arrow right">&#xe6bb;</i>
      <span class="select-label_label">{{label}}</span>
    </div>
    <dl class="select-opation z-depth-1" :style="'max-height:' + maxHeight">
      <dd class="select-opation_item" :class="[{'active': item.active, 'disabled': item.disabled}]" v-for="(item,key) in data" @click="itemSelect(key,$event)" :value="item.value||item.label">{{item.label}}</dd>
    </dl>
  </div>
</template>

<script>
  import NoDropDown from '@/tenui/js/nodropdown'
  import Tselect from './tselect'

  export default {
    name: 'Tselect',
    props: {
      data: {
        type: Array,
        required: true
      },
      maxHeight: {
        type: String,
        default: '185px'
      }
    },
    data () {
      return {
        value: '请选择',
        label: '请选择',
        key: -1
      }
    },
    watch: {
      data (n, o) {
        let ts = this
        setTimeout(function () {
          ts.tselect.setDefault()
        }, 100)
      }
    },
    methods: {
      itemSelect (key, e) {
        this.tselect.itemSelect(key, e)
        this.ndd.delDomEvent()
      },
      opationAc () {
        if (this.$el.className.split(' ').indexOf('active') !== -1) this.hide()
        else this.show()
      },
      show () {
        this.$el.className += ' active'
        this.ndd.addDomEvent()
      },
      hide () {
        this.$el.className = this.$el.className.replace(' active', '')
      }
    },
    mounted () {
      this.ndd = NoDropDown(this, this.hide)
      this.tselect = Tselect(this)
    }
  }
</script>
