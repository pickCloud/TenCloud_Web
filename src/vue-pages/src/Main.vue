<template>
  <div class="pages">
    <div class="page-btn page-prev" :class="[preveClass]" @click.prevent="itemSelect('prev')"><span>&lt;</span></div>
    <div class="page-btn" v-for="item in pagelist" :class="[activeClass(item)]" @click.prevent="itemSelect(item)">{{item}}</div>
    <div class="page-btn page-next" :class="[nextClass]" @click.prevent="itemSelect('next')"><span>&gt;</span></div>
  </div>
</template>

<script>
  export default {
    name: 'pages',
    props: {
      allpage: {
        type: Number,
        required: true
      },
      nowpage: {
        type: Number,
        required: true
      },
      shownum: {
        type: Number,
        default: 5
      },
      vnum: {
        type: Number,
        default: 2
      }
    },
    data () {
      return {
        pagenum: null
      }
    },
    methods: {
      itemSelect (idx) {
        if (idx === 'prev' || idx === 'next') {
          this.prevOrNext(idx)
        }
        if (!isNaN(parseInt(idx))) {
          this.pagenum = idx
        }
      },
      prevOrNext (t) {
        if (t === 'prev' && this.pagenum > 1) this.pagenum--
        if (t === 'next' && this.pagenum < this.allpage) this.pagenum ++
      },
      activeClass (item) {
        return this.pagenum === parseInt(item) ? 'active' : item !== '...' ? 'waves-effect' : 'normal'
      }
    },
    watch: {
      pagenum (n, o) {
        if (o !== null && n !== o) this.$emit('change', n)
      }
    },
    computed: {
      preveClass () {
        return this.pagenum === 1 ? 'disabled' : 'waves-effect'
      },
      nextClass () {
        return this.pagenum === this.allpage ? 'disabled' : 'waves-effect'
      },
      pagelist () {
        let result = []
        let i = this.pagenum - this.vnum
        let end = this.pagenum + this.vnum
        if (i < 1) {
          i = 1
          end = end - i + 1
        }
        if (end > this.allpage) {
          end = this.allpage
          i = i - (end - this.allpage)
        }
        // add first
        if ((i - 1) >= 1) {
          result.push(1)
          result.push('...')
        }
        while (i <= end) {
          result.push(i)
          i++
        }
        // add end
        if ((this.allpage - end) >= 1) {
          result.push('...')
          result.push(this.allpage)
        }
        return result
      }
    },
    mounted () {
      this.pagenum = this.nowpage
    }
  }
</script>

<style src="./style.scss" lang="scss"></style>
