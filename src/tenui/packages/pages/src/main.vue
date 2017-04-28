<template>
  <div class="pages">
    <div class="page-btn page-prev" :class="[preveClass]" @click.prevent="itemSelect('prev')"><i class="ten-icon">&#xe720;</i></div>
    <div class="page-btn" v-for="item in pagelist" :class="[activeClass]" @click.prevent="itemSelect(item)">{{item}}</div>
    <div class="page-btn page-next" :class="[nextClass]" @click.prevent="itemSelect('next')"><i class="ten-icon">&#xe6f8;</i></div>
  </div>
</template>

<script>
  export default {
    name: 'Pages',
    props: {
      total: {
        type: Number,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    data () {
      return {
        nowidx: null,
        pagelist: []
      }
    },
    methods: {
      pageListAc () {
        return ['1', '2', '3', '...', '10']
      },
      itemSelect (idx) {
        this.nowidx = idx
        console.log(idx)
      }
    },
    computed: {
      preveClass () {
        return this.nowidx === 1 ? 'disabled' : 'waves-effect'
      },
      nextClass () {
        return this.nowidx === this.total ? 'disabled' : 'waves-effect'
      },
      activeClass () {
        console.log(arguments)
        return ''
//        return this.nowidx === parseInt(item) ? 'active' : item !== '...' ? 'waves-effect' : ''
      }
    },
    mounted () {
      this.nowidx = this.index
      this.pagelist = this.pageListAc()
    }
  }
</script>
