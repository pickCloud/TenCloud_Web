<template>
  <div class="tips">
    <transition name="ten-fade">
      <div class="tips-tip" :class="[point]" v-show="visible">
        <slot name="tip"><span class="tips-tip_txt">{{text}}</span></slot>
        <div class="tips-tip_arrow" :class="[point]"></div>
      </div>
    </transition>
    <div class="tip-cont" @mouseenter.prevent="msenter" @mouseleave.prevent="msleave"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'Tips',
    props: {
      point: {
        type: String,
        default: 'tip-up'
      },
      text: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        visible: false
      }
    },
    methods: {
      msenter () {
        this.visible = true
      },
      msleave () {
        this.visible = false
      }
    }
  }
</script>
