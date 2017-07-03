import Panel from './panel/index'
// import D3Scale from './d3scale/index'
// import D3Line from './d3line/index'
// import D3Pies from './d3pies/index'
import ECharts from './echarts' // 图表

const options = {Panel, ECharts}

options.install = (Vue) => {
  for (let component in options) {
    const componentInstaller = options[component]
    if (componentInstaller && component !== 'install' && component !== 'theme') {
      Vue.use(componentInstaller)
    }
  }
}

export default options
