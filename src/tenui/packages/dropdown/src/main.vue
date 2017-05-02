<template>
  <div class="dropdown" :class="[type]">
    <div class="dropdown-label">
      <slot name="label">
        <i class="ten-icon vam" v-if="icon" v-html="icon"></i>
        <img :src="img" class="circle vam" alt="" v-if="img">
        <span class="_label">{{title}}</span>
        <i class="ten-icon vam">&#xe6bb;</i>
      </slot>
    </div>
    <div class="dropdown-items"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'Dropdown',
    props: {
      title: {
        type: String
      },
      icon: {
        type: String,
        default: ''
      },
      img: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'hover'
      }
    },
    mounted () {
      const items = document.querySelector('.dropdown-items').children
      let i = -1
      while (++i < items.length) {
        let tempel = items[i]
        tempel.className += 'dropdown-item'
      }
    }
  }
</script>
