export default {
  watch: {
    '$route' (to, from) {
      if (from.name !== null) to.meta.from = from
    }
  }
}
