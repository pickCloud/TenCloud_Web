export default {
  data: () => ({
    transitionName: 'fade',
    isMini: false,
    navData: [
      {
        label: '机器',
        link: {name: 'Machines'},
        icon: 'icon icon-jiqun'
      },
      {
        label: '项目',
        icon: 'icon icon-xiangmu1'
      }
    ]
  }),
  watch: {
    '$route' (to, from) {
      if (from.name !== null) to.meta.from = from
      // const toDepth = to.meta.level
      // const fromDepth = from.meta.level
      // if (fromDepth === undefined) this.transitionName = 'fade'
      // else this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  computed: {
    miniClass () {
      return this.isMini ? 'lay-mini' : ''
    },
    hasBack () {
      return true
    }
  },
  methods: {
    navChange (item, hasChild) {
      if (!hasChild) {
        if (item.link) this.$router.push(item.link)
      }
    },
    back () {
      // console.log(this.$router)
      this.$router.back()
      // let from = this.$route.meta.from
      // if (from) this.$router.push({name: from.name, params: from.params})
    }
  }
}
