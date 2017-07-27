webpackJsonp([9],{146:function(t,s,a){var e=a(7)(a(189),a(211),null,null);t.exports=e.exports},179:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={0:"无",1:"构建成功",2:"部署成功","-1":"构建失败","-2":"部署失败"};s.default={data:function(){return{base:{},vers:[]}},methods:{getApiData:function(){var t=this;this.$Global.async("project_detail",!0).getData(null,this.$route.params.id).then(function(s){0===s.status&&(t.base=s.data[0],t.getVerList())})},getVerList:function(){var t=this;this.$Global.async("project_vers",!0).getData(null,this.base.name+"/versions").then(function(s){0===s.status&&(t.vers=s.data)})},editorHandle:function(){this.$router.push({name:"ProjectEditor",params:{id:this.$route.params.id}})},build:function(){this.$router.push({name:"Build",params:{name:this.base.name,repos_url:this.base.repos_url,repos_name:this.base.repos_name,id:this.$route.params.id}})},deploy:function(){0===this.vers.length?this.$toast("请先进行版本构建","cc"):this.$router.push({name:"Deploy",params:{id:this.$route.params.id,name:this.base.name,type:"deploy",image_name:this.base.image_name}})},gotVerListMore:function(){this.$router.push({name:"Verlist",params:{verlist:this.vers}})}},computed:{pstatus:function(){return e[this.base.status+""]},verLimit:function(){return this.vers.slice(0,5)}},created:function(){this.getApiData()}}},189:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(179),i=function(t){return t&&t.__esModule?t:{default:t}}(e);s.default={mixins:[i.default]}},211:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-pad page-project-detail"},[a("m-row",{attrs:{gutter:16}},[a("m-col",{staticClass:"xs-12 lg-8"},[a("panel",{staticClass:"m-b16"},[a("div",{staticClass:"panel-title",slot:"title"},[a("span",[t._v("基本信息")]),t._v(" "),a("div",{staticClass:"right",staticStyle:{"margin-top":"-5px"}},[a("m-btn",{staticClass:"primary_bg grey-dark_txt",nativeOn:{click:function(s){t.build(s)}}},[t._v("版本构建")]),t._v(" "),a("m-btn",{staticClass:"primary_bg grey-dark_txt m-r16",nativeOn:{click:function(s){t.deploy(s)}}},[t._v("项目部署")]),t._v(" "),a("m-btn",{staticClass:"primary_bg grey-dark_txt",nativeOn:{click:function(s){t.editorHandle(s)}}},[a("span",{staticClass:"vam"},[t._v("修改")]),t._v(" "),a("i",{staticClass:"icon icon-editor vam"})])],1)]),t._v(" "),a("table",{staticClass:"list-table"},[a("col",{attrs:{width:"20%"}}),t._v(" "),a("col",{attrs:{width:"80%"}}),t._v(" "),a("tfoot",[a("tr",[a("td",[t._v("名称")]),t._v(" "),a("td",[t._v(t._s(t.base.name))])]),t._v(" "),a("tr",[a("td",[t._v("描述")]),t._v(" "),a("td",[t._v(t._s(t.base.description))])]),t._v(" "),a("tr",[a("td",[t._v("项目来源")]),t._v(" "),a("td",[a("span",{staticClass:"m-r8"},[t._v(t._s(t.base.repos_name)+":")]),a("m-btn",{staticClass:"m-r8 primary_txt",attrs:{sizeh:-1,href:t.base.http_url,target:"_blank"}},[t._v(t._s(t.base.repos_url))])],1)]),t._v(" "),a("tr",[a("td",[t._v("创建时间")]),t._v(" "),a("td",[t._v(t._s(t.base.create_time))])]),t._v(" "),a("tr",[a("td",[t._v("状态")]),t._v(" "),a("td",[a("span",{staticClass:"vam"},[t._v(t._s(t.pstatus))]),t._v(" "),a("m-btn",{staticClass:"primary_txt"},[t._v("部署详情")]),t._v(" "),a("m-btn",{staticClass:"primary_txt"},[t._v("容器详情")]),t._v(" "),a("m-btn",{staticClass:"primary_txt"},[t._v("停止")])],1)]),t._v(" "),a("tr",[a("td",[t._v("更新时间")]),t._v(" "),a("td",[t._v(t._s(t.base.update_time))])])])])]),t._v(" "),a("panel",{staticClass:"m-b16"},[a("div",{staticClass:"panel-title",slot:"title"},[t._v("容器列表")]),t._v(" "),a("div",{staticClass:"panel-body"},[a("table",{staticClass:"table hover striped theme-dft pad-table"},[a("col",{attrs:{width:"20%"}}),t._v(" "),a("col",{attrs:{width:"15%"}}),t._v(" "),a("col",{attrs:{width:"15%"}}),t._v(" "),a("col",{attrs:{width:"20%"}}),t._v(" "),a("col",{attrs:{width:"20%"}}),t._v(" "),a("col",{attrs:{width:"10%"}}),t._v(" "),a("thead",[a("tr",[a("th",[t._v("容器名称")]),t._v(" "),a("th",[t._v("容器ID")]),t._v(" "),a("th",[t._v("状态")]),t._v(" "),a("th",[t._v("创建时间")]),t._v(" "),a("th",[t._v("更新时间")]),t._v(" "),a("th",[t._v("操作")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("容器名1")]),t._v(" "),a("td",[t._v("111")]),t._v(" "),a("td",[t._v("良好")]),t._v(" "),a("td",[t._v("2017-06-28")]),t._v(" "),a("td",[t._v("2017-06-28")]),t._v(" "),a("td",[t._v("详情")])]),t._v(" "),a("tr",[a("td",[t._v("容器名1")]),t._v(" "),a("td",[t._v("111")]),t._v(" "),a("td",[t._v("良好")]),t._v(" "),a("td",[t._v("2017-06-28")]),t._v(" "),a("td",[t._v("2017-06-28")]),t._v(" "),a("td",[t._v("详情")])])])])])]),t._v(" "),a("panel",{staticClass:"m-b16"},[a("div",{staticClass:"panel-title",slot:"title"},[t._v("日志")]),t._v(" "),a("div",{staticClass:"panel-body"},[a("table",{staticClass:"table hover striped theme-dft pad-table"},[a("col",{attrs:{width:"30%"}}),t._v(" "),a("col",{attrs:{width:"70%"}}),t._v(" "),a("thead",[a("tr",[a("th",[t._v("时间")]),t._v(" "),a("th",[t._v("行为")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2017-06-28")]),t._v(" "),a("td",[t._v("项目创建")])]),t._v(" "),a("tr",[a("td",[t._v("2017-06-28")]),t._v(" "),a("td",[t._v("项目构建")])])])])])])],1),t._v(" "),a("m-col",{staticClass:"xs-12 lg-4"},[a("panel",{staticClass:"m-b16"},[a("div",{staticClass:"panel-title",slot:"title"},[a("span",{staticClass:"title"},[t._v("版本列表")]),t._v(" "),a("m-btn",{staticClass:"right",attrs:{sizeh:-1},nativeOn:{click:function(s){t.gotVerListMore(s)}}},[t._v("更多")])],1),t._v(" "),a("div",{staticClass:"panel-body p-b16"},[a("table",{staticClass:"table hover striped theme-dft pad-table"},[a("col",{attrs:{width:"30%"}}),t._v(" "),a("col",{attrs:{width:"40%"}}),t._v(" "),a("col",{attrs:{width:"30%"}}),t._v(" "),a("thead",[a("tr",[a("th",[t._v("版本号")]),t._v(" "),a("th",[t._v("最后构建时间")]),t._v(" "),a("th",[t._v("操作")])])]),t._v(" "),a("tbody",t._l(t.verLimit,function(s){return a("tr",[a("td",[t._v(t._s(s.version))]),t._v(" "),a("td",[t._v(t._s(s.update_time))]),t._v(" "),a("td",[a("m-btn",{staticClass:"primary_txt",nativeOn:{click:function(t){}}},[t._v("日志")])],1)])}))])])]),t._v(" "),a("panel",{staticClass:"m-b16"},[a("div",{staticClass:"panel-title",slot:"title"},[t._v("数据分析")])]),t._v(" "),a("panel",{staticClass:"m-b16"},[a("div",{staticClass:"panel-title",slot:"title"},[t._v("其他")])])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=9.0bd010d6dad0601b392a.js.map