import Search from './search' // 按钮
import ECharts from './echarts' // 图表

const options = { Search, ECharts }

options.install = (Vue) => {
  for (let component in options) {
    const componentInstaller = options[component]
    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller)
    }
  }
}

export default options
