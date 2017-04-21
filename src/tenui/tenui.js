import Tree from './packages/tree/index'
import './js/waves'

export { Tree }
export default {
  Tree,
  install (Vue) {
    for (let key in this) {
      if (key !== 'install') {
        let comp = this[key]
        Vue.component(comp.name, comp)
      }
    }
  }
}
