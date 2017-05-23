import Tree from './packages/tree/index'
import Modal from './packages/modal/index'
import Percentage from './packages/percentage/index'
import './js/waves'

export { Tree, Modal, Percentage }
export default {
  Tree,
  Modal,
  Percentage,
  install (Vue) {
    for (let key in this) {
      if (key !== 'install') {
        let comp = this[key]
        Vue.component(comp.name, comp)
      }
    }
  }
}
