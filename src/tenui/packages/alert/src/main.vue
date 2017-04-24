<template>
  <transition name="alert-fade">
    <div class="alert" :class="[ typeClass ]" v-show="visible">
      <i class="alert_icon ten-icon" :class="[isBigIcon]" v-if="showIcon" v-html="iconClass"></i>
      <div class="alert_content">
        <span class="alert_title" :class="[ isBoldTitle ]" v-if="title">{{ title }}</span>
        <slot>
          <p class="alert_description" v-if="description">{{ description }}</p>
        </slot>
        <i class="alert_closebtn" :class="{'ten-icon':closeText=='&#xe6ac;'}" v-show="closable" @click="close()" v-html="closeText"></i>
      </div>
    </div>
  </transition>
</template>

<script>
  const MAP = {
    'success': {'icon': '&#xe690;', 'class': 'green'},
    'info': {'icon': '&#xe692;', 'class': 'blue'},
    'warning': {'icon': '&#xe691;', 'class': 'amber darken-3'},
    'error': {'icon': '&#xe693;', 'class': 'red'}
  }
  export default {
    name: 'Alert',

    props: {
      title: {
        type: String,
        default: '',
        required: true
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: '&#xe6ac;'
      },
      showIcon: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        visible: true
      }
    },

    methods: {
      close () {
        this.visible = false
        this.$emit('close')
      }
    },

    computed: {
      typeClass () {
        return MAP[this.type].class
      },

      iconClass () {
        return MAP[this.type].icon || ''
      },

      isBigIcon () {
        return this.description ? 'is-big' : ''
      },

      isBoldTitle () {
        return this.description ? 'is-bold' : ''
      }
    }
  }
</script>
