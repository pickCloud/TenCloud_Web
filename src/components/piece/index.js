import Panel from './panel/index'
import D3 from './arcscale/index'

const options = {Panel, D3}

options.install = (Vue) => {
  for (let component in options) {
    const componentInstaller = options[component]
    if (componentInstaller && component !== 'install' && component !== 'theme') {
      Vue.use(componentInstaller)
    }
  }
}

export default options
