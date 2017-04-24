/*
 * componet tab 标签卡组件
 * 参数
 *  labels 数组 标签文字
 *  tabkey 数字 默认选中第几个标签
 * 内容
 *  默认提取tabs的直属子集 并默认加上class:tab-cont_item
 * eg:
 * <tabs :labels="['标签1','标签2']" :tabkey="0">
 *  <div>内容1</div>
 *  <div>内容2</div>
 * </tabs>
 */

import Tabs from './src/main'

Tabs.install = function (Vue) {
  Vue.component(Tabs.name, Tabs)
}

export default Tabs
