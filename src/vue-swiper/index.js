import Main from './Main.vue'
import Item from './Item.vue'

export default {
  install (Vue) {
    Vue.component(Main.name, Main)
    Vue.component(Item.name, Item)
  }
}
