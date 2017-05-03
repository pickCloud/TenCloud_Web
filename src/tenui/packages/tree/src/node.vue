<template>
  <li class="tree-node" :class="{'empty':node.link,'active':nowidx.indexOf(nodeidx) === 0 || cacheidx.indexOf(nodeidx) === 0}" :idx="nodeidx">
    <div class="tree-node_title" @click="nodeSelect($event, node.children)">
      <i class="ten-icon tree-node_icon" v-if="node.icon" v-html="node.icon"></i>
      <span class="tree-node_label">{{node.label}}</span>
      <i class="ten-icon tree-node_arrow" v-if="node.children">&#xe6bb;</i>
      <a class="tree-node_link" :href="node.link" v-if="node.link"></a>
    </div>
    <ul class="tree-node_child" v-if="node.children">
      <tree-node v-for="(item,key) in node.children" :key="key"
                 :node="item" :nodeidx="nodeidx + '-' + key"
                 :cacheidx="cacheidx"
                 :nowidx="nowidx" @nodeSelect="childSelect"></tree-node>
    </ul>
  </li>
</template>

<script>
//  import $ from 'jquery'
  export default {
    name: 'TreeNode',
    props: {
      node: {
        type: Object
      },
      collapse: {
        type: Boolean,
        default: false
      },
      nodeidx: {
        type: String
      },
      nowidx: {
        type: String
      },
      cacheidx: {
        type: String
      }
    },
    methods: {
      nodeSelect (e, n) {
        let tempidx = e.currentTarget.parentElement.getAttribute('idx')
        let hassub = n && n.length > 0
        this.$emit('nodeSelect', tempidx, hassub)
      },
      childSelect (idx, sub) {
        this.$emit('nodeSelect', idx, sub)
      }
    }
  }
</script>
