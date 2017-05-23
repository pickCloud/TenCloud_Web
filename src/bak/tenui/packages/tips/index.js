import Tips from './src/main'

Tips.install = function (Vue) {
  Vue.component(Tips.name, Tips)
}

export default Tips
