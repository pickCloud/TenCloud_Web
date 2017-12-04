import Main from './Main.vue'
import TreeNode from './TreeNode.vue'
import TreeCheck from './TreeCheck.vue'
Main.install = function (Vue) {
  Vue.component(Main.name, Main)
  Vue.component(TreeNode.name, TreeNode)
  Vue.component(TreeCheck.name, TreeCheck)
}
export default Main

