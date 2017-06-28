export default {
  data: () => ({
    transitionName: 'fade',
    navData: [
      {
        label: '机器',
        link: {name: 'Machines'},
        icon: 'icon icon-jiqun'
      },
      {
        label: '项目',
        icon: 'icon icon-xiangmu'
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
  methods: {
    navChange (item, hasChild) {
      if (!hasChild) {
        console.log(item.link)
        if (item.link) this.$router.push(item.link)
      }
    }
  }
}
