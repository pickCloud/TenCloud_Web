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
      ```bash
      <modal buttons="确定,取消" buttonsClass="comb-btn lvse,comb-btn qingse" ref="delcluster" class="comb-dialog mini">
        default content
      </modal>
      参数：
        title：标题 类型：String 可选
        typeClass：弹窗主题  类型：String 默认modal
        buttons：按钮 类型：String 默认''
        buttonsClass：按钮样式 类型：String 默认''
        postdata：抛送的数据 类型：String 默认''
      事件：
        callback
      slot:
        default：展示内容
        title：展示头部
        footer：展示底部
      ```
    - percentage 圆形百分比
    - tree 树形菜单
      ``` bash
      <tree :data="data" collapse></tree>
      参数：
        data：Array 必须字段 树形列表
          eg: [
                {
                  label: '服务器', icon: '&#xe698;',
                  children: [
                    {
                      label: '集群', icon: '&#xe763;', link: '/#/cluster'
                    },
                    {
                      label: '应用', icon: '&#xe6f0;', link: '/#/apps'
                    }
                  ]
                },
                {
                  label: '项目', link: '/#/project', icon: '&#xe62c;'
                },
                {
                  label: '仓库', icon: '&#xe6ea;',
                  children: [
                    {
                      label: '镜像仓库', icon: '&#xe696;', link: '/#/hub'
                    },
                    {
                      label: '文件仓库', icon: '&#xe610;', link: '/#/filehub'
                    }
                  ]
                }
              ]
        collapse: Boolean 默认flase 手拉风琴效果
      ```
    - select 组件
      ``` bash
      <tselect :data="data"></tselect>
      参数：
        data: Array 选项列表 必须字段
          eg: [{label: 'label1', value: 'value1', active: true}] ，
            label:必须 选项名， 
            value:可选 如果没有填写为label值 
            active:可选&唯一 默认值
            disabled:可选 禁用
        maxHeight：String 默认185px 最大高度
      ```
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


