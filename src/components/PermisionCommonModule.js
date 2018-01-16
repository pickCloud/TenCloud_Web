export default {
  methods: {
    isShow (name) {
      return !this.$store.state.user.currentUser.cid || this.$store.state.user.currentUser.is_admin || this.$store.state.user.currentPermission.indexOf(this.$store.state.user.permissions[name]) !== -1
    }
  }
}
