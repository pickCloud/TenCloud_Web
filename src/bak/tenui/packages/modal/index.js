import Modal from './src/main'

Modal.install = function (Vue) {
  Vue.component(Modal.name, Modal)
}

export default Modal
