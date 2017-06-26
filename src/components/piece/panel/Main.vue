<template>
  <div class="panle" :style="[panelStyle]">
    <!--<div class="panle-title"></div>-->
    <slot name="title"><div class="panle-title">{{title}}</div></slot>
    <slot></slot>
    <div class="panle-close close" v-if="hasClose"></div>
  </div>
</template>

<script>
  export default {
    name: 'Panel',
    props: {
      title: String,
      bgColor: String,
      hasClose: Boolean
    },
    computed: {
      panelStyle () {
        let style = {}
        if (this.bgColor) style.backgroundColor = this.bgColor
        return style
      }
    }
  }
</script>
