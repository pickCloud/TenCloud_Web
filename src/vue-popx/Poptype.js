export default {
  checkPopper (popper) {
    let type = ''
    if (popper instanceof HTMLElement) {
      type = 'html'
    } else {
      switch ((typeof popper).toLowerCase()) {
        case 'object':
          if (popper.hasOwnProperty('beforeCreate') && popper.hasOwnProperty('beforeDestroy')) type = 'component'
          break
        case 'string':
          type = 'string'
          break
      }
    }
    return type
  }
}
