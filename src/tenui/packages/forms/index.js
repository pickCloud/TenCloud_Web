import Checkbox from './src/checkbox'

export { Checkbox }
export default {
  Checkbox,
  install (Vue) {
    for (let key in this) {
      if (key !== 'install') {
        let comp = this[key]
        if (comp) Vue.component(comp.name, comp)
      }
    }
  }
}
