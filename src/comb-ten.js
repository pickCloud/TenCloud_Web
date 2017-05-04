import Tree from './tenui/packages/tree/index'
import Modal from './tenui/packages/modal/index'
import Percentage from './tenui/packages/percentage/index'
import Tabs from './tenui/packages/tabs/index'
import Alert from './tenui/packages/alert/index'
import Forms from './tenui/packages/forms/index'
import Tips from './tenui/packages/tips/index'
import Pages from './tenui/packages/pages/index'
import Dropdown from './tenui/packages/dropdown/index'
import Toast from './tenui/packages/toast/index'
import Search from './components/piece/search/index'
import './tenui/js/waves'

const options = { Tree, Modal, Percentage, Tabs, Alert, Search, Forms, Tips, Pages, Dropdown }

options.install = (Vue) => {
  Vue.prototype.$toast = Toast
  for (let component in options) {
    const componentInstaller = options[component]
    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller)
    }
  }
}

export default options

