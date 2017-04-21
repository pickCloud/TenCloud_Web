<template>
  <transition name="alert-fade">
    <div class="alert" :class="[ typeClass ]" v-show="visible">
      <i class="alert_icon material-icons" :class="[isBigIcon ]" v-if="showIcon">{{iconClass}}</i>
      <div class="alert_content">
        <span class="alert_title" :class="[ isBoldTitle ]" v-if="title">{{ title }}</span>
        <slot>
          <p class="alert_description" v-if="description">{{ description }}</p>
        </slot>
        <i class="alert_closebtn" :class="{'material-icons':closeText=='clear'}" v-show="closable" @click="close()">
          {{closeText}}
        </i>
      </div>
    </div>
  </transition>
</template>

<script>
  const MAP = {
    'success': {'icon': 'verified_user', 'class': 'green'},
    'info': {'icon': 'info', 'class': 'blue'},
    'warning': {'icon': 'warning', 'class': 'amber darken-3'},
    'error': {'icon': 'cancel', 'class': 'red'}
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
        default: 'clear'
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
