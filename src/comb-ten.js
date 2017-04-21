import Tree from './tenui/packages/tree/index'
import Modal from './tenui/packages/modal/index'
import Percentage from './tenui/packages/percentage/index'
import Tabs from './tenui/packages/tabs/index'
import './tenui/js/waves'

export { Tree, Modal, Percentage, Tabs }
export default {
  Tree,
  Modal,
  Percentage,
  Tabs,
  install (Vue) {
    for (let key in this) {
      if (key !== 'install') {
        let comp = this[key]
        Vue.component(comp.name, comp)
      }
    }
  }
}
