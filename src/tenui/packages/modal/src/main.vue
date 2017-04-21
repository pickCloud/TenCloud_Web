<template>
  <transition name="ten-fade" @after-enter="afterEnter" @before-leave="beforeLeave">
    <div class="modal-wrapper" v-show="visible">
      <div :class="[typeClass]">
        <div class="modal-header" v-if="title">
          <slot name="title"><span class="modal-header_title">{{title}}</span></slot>
        </div>
        <div class="modal-body">
          <slot>这里是body内容</slot>
        </div>
        <div class="modal-footer align-right clearfix" v-if="buttons">
          <slot name="footer">
            <span v-for="(item, key) in btns" class="waves-effect waves-green" :class="[getBtnsClass(key)]" @click="actions(key)">{{item}}</span>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
      title: {
        type: String,
        default: ''
      },
      typeClass: {
        type: String,
        default: 'modal'
      },
      buttons: {
        type: String,
        default: ''
      },
      buttonsClass: {
        type: String,
        default: ''
      },
      postdata: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        visible: false,
        btnsClass: []
      }
    },
    methods: {
      actions (i) {
        let key = this.btns.length - i - 1
        this.$emit('callback', key, this.postdata)
        this.close()
      },
      show () {
        this.visible = true
      },
      close () {
        this.visible = false
      },
      afterEnter () {
        this.$modaldom.className += ' active'
      },
      beforeLeave () {
        this.$modaldom.className = this.$modaldom.className.replace(' active', '')
      },
      getBtnsClass (key) {
        let temp = 'btn-flat'
        if (this.btnsClass.length === 0) this.btnsClass = this.buttonsClass.split(',').reverse()
        if (this.btnsClass.length > 0) temp = this.btnsClass[key]
        if (!temp) temp = 'btn-flat'
        return temp
      }
    },
    computed: {
      btns () {
        return this.buttons.split(',').reverse()
      }
    },
    mounted () {
      this.$modaldom = this.$el.querySelector('.' + this.typeClass)
    }
  }
</script>
