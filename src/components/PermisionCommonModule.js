export default {
  methods: {
    isShow (name) {
      // if (name === 'upload_file') {
      // console.log(!this.$store.state.user.currentUser.cid || this.$store.state.user.currentUser.is_admin || this.$store.state.user.currentPermission.indexOf(this.$store.state.user.permissions[name]) !== -1)
      // }
      return !this.$store.state.user.currentUser.cid || this.$store.state.user.currentUser.is_admin || this.$store.state.user.currentPermission.indexOf(this.$store.state.user.permissions[name]) !== -1
    }
  }
}
