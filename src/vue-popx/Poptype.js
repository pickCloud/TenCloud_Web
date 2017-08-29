export default {
  checkPopper (popper) {
    let type = ''
    // console.log(popper)
    if (popper instanceof HTMLElement) {
      type = 'html'
    } else {
      switch ((typeof popper).toLowerCase()) {
        case 'object':
          if (popper.hasOwnProperty('render') && popper.hasOwnProperty('staticRenderFns')) type = 'component'
          break
        case 'string':
          type = 'string'
          break
      }
    }
    return type
  }
}
