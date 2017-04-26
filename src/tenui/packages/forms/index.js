import Checkbox from './src/checkbox'
import FileInput from './src/fileinput'
import TSelect from './src/tselect'

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
