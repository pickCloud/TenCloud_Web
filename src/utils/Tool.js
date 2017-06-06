export default {
  unid () {
    return Math.random().toString(36).substr(2, 10)
  },
  jsClassName (p) {
    if (p === undefined) return 'undefined'
    return p.constructor.toString().match(/function\s+(.+)\(/)[1].toLocaleLowerCase()
  }
}
