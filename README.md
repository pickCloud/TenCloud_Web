# combconsole

> Comb Console Project

## COMB-CONSOLE

 - assets 图片等素材
 - components 组件
 - router 路由
 - scss 样式
 - tenui tenui样式框架

## TENUI 目录结构

 - fonts 字体
 - js 纯js实现的功能，或者功能插件等
    - waves.js 水波纹功能
 - packages VUE模块
    - alert 提示元素
    - modal 弹窗
    - percentage 圆形百分比
    - tree 树形菜单
    - tips 提示
      ``` bash
      <tips text="" point="">default slot</tips>
      参数：
        text: String 默认为'' 提示文本信息
        point: String 默认为'tip-up' 提示的位置 tip-up tip-bottom tip-left tip-right
      slot
        default: 默认的卡槽
        tip: tip卡槽
      ```
 - sass 样式
    - common 通用包含variables，mixins等等
    - extends 扩展（多元素组合，JS辅助，多样式风格）
    - tenui.js 打包所需模块
    - tenui.scss 打包所需样式

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 致谢
- <a href="vuejs.org">vuejs</a>
- <a href="http://materializecss.com/">materializecss</a>
- <a href="https://github.com/mzabriskie/axios">axios</a>
- <a href="http://jquery.com/">jQuery</a>


