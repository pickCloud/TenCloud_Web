import Checkbox from './src/checkbox.vue'
import FileInput from './src/fileinput.vue'
import TSelect from './src/tselect.vue'

export { Checkbox, FileInput, TSelect }
export default {
  Checkbox,
  FileInput,
  TSelect,
  install (Vue) {
    for (let key in this) {
      if (key !== 'install') {
        let comp = this[key]
        if (comp) Vue.component(comp.name, comp)
      }
    }
  }
}
