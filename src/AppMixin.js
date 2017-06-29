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
  // watch: {
  //   '$route' (to, from) {
  //     const toDepth = to.meta.level
  //     const fromDepth = from.meta.level
  //     if (fromDepth === undefined) this.transitionName = 'fade'
  //     else this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  //   }
  // },
  computed: {
    miniClass () {
      return this.isMini ? 'lay-mini' : ''
    },
    hasBack () {
      return this.$route.meta.parent
    }
  },
  methods: {
    navChange (item, hasChild) {
      if (!hasChild) {
        if (item.link) this.$router.push(item.link)
      }
    },
    back () {
      if (this.$route.meta.parent) this.$router.push({name: this.$route.meta.parent})
    }
  }
}
