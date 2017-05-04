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
        theme：弹窗主题  类型：String 默认modal
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
    - tabs 标签页
      ```base
      <tabs :labels="['运行环境','版本管理','数据分析','日志']" theme="block">
        <div>neirong1</div>
        <div>neirong2</div>
        <div>neirong3</div>
        <div>neirong4</div>
      </tabs>
      参数
        labels：标签名 Array 必须
        tabkey：标签索引 Number 默认0
        theme：主题 String 默认default 可选block
      ```
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
    - checkbox 组件
      ```base
      <checkbox></checkbox>
      参数:
        label：标签 String 默认''
        name：input属性name String 默认''
        theme：主题 String 默认''
      ```
    - fileinput 组件
      ```base
      <fileinput></fileinput>
      参数：
        accept：文件类型 String 默认image/png,image/gif,image/jpg,image/jpeg
        showview: 预览 Boolean 默认true
      ```
    - tips 提示
      ``` bash
      <tips text="" point="">default slot</tips>
      参数：
        text: String 默认为'' 提示文本信息
        point: String 默认为'tip-up' 提示的位置 tip-up tip-bottom tip-left tip-right
      事件：
        change: 参数label value key
      slot
        default: 默认的卡槽
        tip: tip卡槽
      ```
    - 分页组件
      ```base
      <pages :allpage="10" :nowpage="1" @change="pageChange"></pages>
      参数：
        allpage: 总页码
        nowpage: 当前页码
        shownum：显示页码
      事件：
        change：页码变更的时候抛送
                参数 pagenum
      ```
    - dropdown
      ```base
      <dropdown class="top-nav_user right center-align" title="标题啊" img="/static/images/user-head.jpg">
        <div>列表1</div>
        <div>列表2</div>
        <div>列表3</div>
        <div>列表4</div>
      </dropdown>
      参数:
        title：String 标题 默认''
        icon：String 图标 默认''
        img：String 图片图标 默认''
        type：String 触发方式 默认'hover'
      ```
    - toast
      ```base
      vm.$toast(options)
      参数:
        content: 内容 String
        duration：消失时间间隔 Number 默认3000
        type：类型 String 默认'info'
        pointClass：显示位置 String 默认'b' 可选l r t b lt lb rt rb cc
        customClass：自定义样式 String 默认''
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


