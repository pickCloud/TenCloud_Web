webpackJsonp([6],{142:function(t,a,s){var _=s(7)(s(192),s(173),null,null);t.exports=_.exports},173:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page-pad page-project-detail"},[s("m-row",{attrs:{gutter:16}},[s("m-col",{staticClass:"xs-12 lg-8"},[s("panel",{staticClass:"m-b16"},[s("div",{staticClass:"panel-title",slot:"title"},[s("span",[t._v("基本信息")]),t._v(" "),s("div",{staticClass:"right",staticStyle:{"margin-top":"-5px"}},[s("m-btn",{staticClass:"primary_bg grey-dark_txt"},[t._v("版本构建")]),t._v(" "),s("m-btn",{staticClass:"primary_bg grey-dark_txt m-r16"},[t._v("项目部署")]),t._v(" "),s("m-btn",{staticClass:"primary_bg grey-dark_txt",nativeOn:{click:function(a){t.editorHandle(a)}}},[s("span",{staticClass:"vam"},[t._v("修改")]),t._v(" "),s("i",{staticClass:"icon icon-editor vam"})])],1)]),t._v(" "),s("table",{staticClass:"add-table"},[s("col",{attrs:{width:"20%"}}),t._v(" "),s("col",{attrs:{width:"80%"}}),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("名称")]),t._v(" "),s("td",[t._v(t._s(t.base.name))])]),t._v(" "),s("tr",[s("td",[t._v("描述")]),t._v(" "),s("td",[t._v(t._s(t.base.description))])])]),t._v(" "),s("tfoot",[s("tr",[s("td",[t._v("项目来源")]),t._v(" "),s("td",[s("span",{staticClass:"m-r8"},[t._v(t._s(t.base.repos_name))]),s("span",{staticClass:"m-r8"},[t._v(t._s(t.base.repos_url))]),s("m-btn",{staticClass:"primary_bg grey-dark_txt"},[t._v("重新绑定github代码仓库")])],1)]),t._v(" "),s("tr",[s("td",[t._v("创建时间")]),t._v(" "),s("td",[t._v(t._s(t.base.create_time))])]),t._v(" "),s("tr",[s("td",[t._v("状态")]),t._v(" "),s("td",[s("span",{staticClass:"vam"},[t._v(t._s(t.pstatus))]),t._v(" "),s("m-btn",{staticClass:"primary_txt"},[t._v("部署详情")]),t._v(" "),s("m-btn",{staticClass:"primary_txt"},[t._v("容器详情")]),t._v(" "),s("m-btn",{staticClass:"primary_txt"},[t._v("停止")])],1)]),t._v(" "),s("tr",[s("td",[t._v("更新时间")]),t._v(" "),s("td",[t._v(t._s(t.base.update_time))])])])])]),t._v(" "),s("panel",{staticClass:"m-b16"},[s("div",{staticClass:"panel-title",slot:"title"},[t._v("容器列表")]),t._v(" "),s("div",{staticClass:"panel-body"},[s("table",{staticClass:"table hover striped theme-dft pad-table"},[s("col",{attrs:{width:"20%"}}),t._v(" "),s("col",{attrs:{width:"15%"}}),t._v(" "),s("col",{attrs:{width:"15%"}}),t._v(" "),s("col",{attrs:{width:"20%"}}),t._v(" "),s("col",{attrs:{width:"20%"}}),t._v(" "),s("col",{attrs:{width:"10%"}}),t._v(" "),s("thead",[s("tr",[s("th",[t._v("容器名称")]),t._v(" "),s("th",[t._v("容器ID")]),t._v(" "),s("th",[t._v("状态")]),t._v(" "),s("th",[t._v("创建时间")]),t._v(" "),s("th",[t._v("更新时间")]),t._v(" "),s("th",[t._v("操作")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("容器名1")]),t._v(" "),s("td",[t._v("111")]),t._v(" "),s("td",[t._v("良好")]),t._v(" "),s("td",[t._v("2017-06-28")]),t._v(" "),s("td",[t._v("2017-06-28")]),t._v(" "),s("td",[t._v("详情")])]),t._v(" "),s("tr",[s("td",[t._v("容器名1")]),t._v(" "),s("td",[t._v("111")]),t._v(" "),s("td",[t._v("良好")]),t._v(" "),s("td",[t._v("2017-06-28")]),t._v(" "),s("td",[t._v("2017-06-28")]),t._v(" "),s("td",[t._v("详情")])])])])])]),t._v(" "),s("panel",{staticClass:"m-b16"},[s("div",{staticClass:"panel-title",slot:"title"},[t._v("日志")]),t._v(" "),s("div",{staticClass:"panel-body"},[s("table",{staticClass:"table hover striped theme-dft pad-table"},[s("col",{attrs:{width:"30%"}}),t._v(" "),s("col",{attrs:{width:"70%"}}),t._v(" "),s("thead",[s("tr",[s("th",[t._v("时间")]),t._v(" "),s("th",[t._v("行为")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("2017-06-28")]),t._v(" "),s("td",[t._v("项目创建")])]),t._v(" "),s("tr",[s("td",[t._v("2017-06-28")]),t._v(" "),s("td",[t._v("项目构建")])])])])])])],1),t._v(" "),s("m-col",{staticClass:"xs-12 lg-4"},[s("panel",{staticClass:"m-b16"},[s("div",{staticClass:"panel-title",slot:"title"},[t._v("版本列表")]),t._v(" "),s("div",{staticClass:"panel-body"},[s("table",{staticClass:"table hover striped theme-dft pad-table"},[s("col",{attrs:{width:"30%"}}),t._v(" "),s("col",{attrs:{width:"30%"}}),t._v(" "),s("col",{attrs:{width:"40%"}}),t._v(" "),s("thead",[s("tr",[s("th",[t._v("版本号")]),t._v(" "),s("th",[t._v("构建时间")]),t._v(" "),s("th",[t._v("操作")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("版本1")]),t._v(" "),s("td",[t._v("2017-06-28")]),t._v(" "),s("td",[s("m-btn",{staticClass:"primary_txt"},[t._v("查看日志")])],1)]),t._v(" "),s("tr",[s("td",[t._v("版本2")]),t._v(" "),s("td",[t._v("2017-06-28")]),t._v(" "),s("td",[s("m-btn",{staticClass:"primary_txt"},[t._v("查看日志")])],1)])])])])]),t._v(" "),s("panel",{staticClass:"m-b16"},[s("div",{staticClass:"panel-title",slot:"title"},[t._v("数据分析")])]),t._v(" "),s("panel",{staticClass:"m-b16"},[s("div",{staticClass:"panel-title",slot:"title"},[t._v("其他")])])],1)],1)],1)},staticRenderFns:[]}},184:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var _={0:"无",1:"构建成功",2:"部署成功","-1":"构建失败","-2":"部署失败"};a.default={data:function(){return{base:{}}},methods:{getApiData:function(){var t=this;this.$Global.async("project_detail",!0).getData(null,this.$route.params.id).then(function(a){0===a.status&&(t.base=a.data[0])})},editorHandle:function(){this.$router.push({name:"ProjectEditor",params:{id:this.$route.params.id}})}},computed:{pstatus:function(){return _[this.base.status+""]}},created:function(){this.getApiData()}}},192:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var _=s(184),v=function(t){return t&&t.__esModule?t:{default:t}}(_);a.default={mixins:[v.default]}}});
//# sourceMappingURL=6.531d93f2b5797223c15b.js.map