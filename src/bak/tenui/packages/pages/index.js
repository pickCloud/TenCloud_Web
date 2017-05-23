import Pages from './src/main'

Pages.install = function (Vue) {
  Vue.component(Pages.name, Pages)
}

export default Pages
