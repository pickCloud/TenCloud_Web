<template>
  <li class="tree-node" :class="{'empty':node.link}">
    <div class="tree-node_title" @click="nodeSelect($event)">
      <i class="material-icons tree-node_icon" v-if="node.icon">{{node.icon}}</i>
      <a class="tree-node_link" :href="node.link" v-if="node.link">{{node.label}}</a>
      <span class="tree-node_label" v-else>{{node.label}}</span>
      <i class="material-icons tree-node_arrow" v-if="node.children">keyboard_arrow_down</i>
    </div>
    <ul class="tree-node_child" v-if="node.children">
      <tree-node v-for="(item,key) in node.children" :key="key" :node="item"></tree-node>
    </ul>
  </li>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'TreeNode',
    props: {
      node: {
        type: Object
      },
      collapse: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      nodeSelect (e) {
        const parent = $(e.currentTarget).parent()
        const parents = $(e.currentTarget).parents('.tree-node')
        const hasac = parent.hasClass('active')
        const hasem = parent.hasClass('empty')
        if (hasac && !hasem) {
          parent.removeClass('active')
        } else {
          parent.addClass('active')
          if (hasem) {
            parents.siblings().removeClass('active').find('.tree-node').removeClass('active')
          } else {
            parents.siblings('.tree-node:not(".empty")').removeClass('active')
          }
        }
      }
    }
  }
</script>
