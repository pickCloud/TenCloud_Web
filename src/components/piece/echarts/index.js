import Main from './src/Main.vue'
import Line from './src/Line.vue'
import Pie from './src/Pie.vue'

Main.install = function (Vue) {
  Vue.component(Main.name, Main)
  Vue.component(Pie.name, Pie)
  Vue.component(Line.name, Line)
}

export default Main
