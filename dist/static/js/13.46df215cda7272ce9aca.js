webpackJsonp([13],{144:function(t,a,s){var e=s(7)(s(201),s(256),null,null);t.exports=e.exports},191:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={0:["初创建","primary_bg alpha-black_txt"],1:["构建中","primary_bg alpha-black_txt"],2:["构建成功","primary_bg alpha-black_txt"],3:["部署中","primary_bg alpha-black_txt"],4:["部署成功","primary_bg alpha-black_txt"],"-2":["构建失败","pink_bg alpha-black_txt"],"-4":["部署失败","pink_bg alpha-black_txt"]},i=["普通项目","基础服务","应用组件"];a.default={data:function(){return{base:{},vers:[],containers:[]}},methods:{getApiData:function(){var t=this;this.$Global.async("project_detail",!0).getData(null,this.$route.params.id).then(function(a){0===a.status&&(t.base=a.data[0],t.getVerList(),t.getContainerList())})},getVerList:function(){var t=this;this.$Global.async("project_vers",!0).getData(null,this.base.name+"/versions").then(function(a){0===a.status&&(t.vers=a.data)})},editorHandle:function(){this.$router.push({name:"ProjectEditor",params:{id:this.$route.params.id}})},build:function(){this.$router.push({name:"Build",params:{name:this.base.name,repos_url:this.base.repos_url,repos_name:this.base.repos_name,id:this.$route.params.id,image_name:this.base.image_name}})},deploy:function(){0===this.vers.length?this.$toast("请先进行版本构建","cc"):this.$router.push({name:"Deploy",params:{id:this.$route.params.id,name:this.base.name,type:"deploy",image_name:this.base.image_name}})},gotVerListMore:function(){this.$router.push({name:"Verlist",params:{verlist:this.vers}})},getContainerList:function(){var t=this;this.$Global.async("project_container_list",!0).getData({container_list:this.base.deploy_ips,container_name:this.base.container_name}).then(function(a){0===a.status&&(t.containers=a.data)})}},computed:{pstatus:function(){return this.base.status?e[this.base.status+""][0]:""},pclass:function(){return this.base.status?e[this.base.status+""][1]:""},imgSource:function(){return 0===this.base.image_source?"代码仓库":"外部镜像"},modecn:function(){return i[this.base.mode]},verLimit:function(){return this.vers.slice(0,5)}},created:function(){this.getApiData()}}},201:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(191),i=function(t){return t&&t.__esModule?t:{default:t}}(e);a.default={mixins:[i.default]}},256:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page-pad page-project-detail"},[s("m-row",{attrs:{gutter:16}},[s("m-col",{staticClass:"xs-12 lg-8"},[s("panel",{staticClass:"m-b16"},[s("div",{staticClass:"panel-title",slot:"title"},[s("span",[t._v("基本信息")]),t._v(" "),s("div",{staticClass:"right",staticStyle:{"margin-top":"-5px"}},[s("m-btn",{staticClass:"primary_bg grey-dark_txt",nativeOn:{click:function(a){t.build(a)}}},[t._v("版本构建")]),t._v(" "),s("m-btn",{staticClass:"primary_bg grey-dark_txt m-r16",nativeOn:{click:function(a){t.deploy(a)}}},[t._v("项目部署")]),t._v(" "),s("m-btn",{staticClass:"primary_bg grey-dark_txt",nativeOn:{click:function(a){t.editorHandle(a)}}},[s("span",{staticClass:"vam"},[t._v("修改")]),t._v(" "),s("i",{staticClass:"icon icon-editor vam"})])],1)]),t._v(" "),s("table",{staticClass:"list-table"},[s("col",{attrs:{width:"20%"}}),t._v(" "),s("col",{attrs:{width:"80%"}}),t._v(" "),s("tfoot",[s("tr",[s("td",[t._v("名称")]),t._v(" "),s("td",[t._v(t._s(t.base.name))])]),t._v(" "),s("tr",[s("td",[t._v("描述")]),t._v(" "),s("td",[t._v(t._s(t.base.description))])]),t._v(" "),s("tr",[s("td",[t._v("项目类型")]),t._v(" "),s("td",[t._v(t._s(t.modecn))])]),t._v(" "),s("tr",[s("td",[t._v("项目来源")]),t._v(" "),s("td",[s("span",{staticClass:"m-r8"},[t._v(t._s(t.imgSource))])])]),t._v(" "),s("tr",[s("td",[t._v("创建时间")]),t._v(" "),s("td",[t._v(t._s(t.base.create_time))])]),t._v(" "),s("tr",[s("td",[t._v("状态")]),t._v(" "),s("td",[s("span",{staticClass:"vam plate",class:[t.pclass]},[t._v(t._s(t.pstatus))]),t._v(" "),s("m-btn",{staticClass:"primary_txt"},[t._v("部署详情")]),t._v(" "),s("m-btn",{staticClass:"primary_txt"},[t._v("容器详情")]),t._v(" "),s("m-btn",{staticClass:"primary_txt"},[t._v("停止")])],1)]),t._v(" "),s("tr",[s("td",[t._v("更新时间")]),t._v(" "),s("td",[t._v(t._s(t.base.update_time))])])])])]),t._v(" "),s("panel",{staticClass:"m-b16"},[s("div",{staticClass:"panel-title",slot:"title"},[t._v("容器列表")]),t._v(" "),s("div",{staticClass:"panel-body"},[s("table",{staticClass:"table hover striped theme-dft pad-table"},[s("col",{attrs:{width:"20%"}}),t._v(" "),s("col",{attrs:{width:"20%"}}),t._v(" "),s("col",{attrs:{width:"20%"}}),t._v(" "),s("col",{attrs:{width:"20%"}}),t._v(" "),s("col",{attrs:{width:"20%"}}),t._v(" "),s("thead",[s("tr",[s("th",[t._v("容器名称")]),t._v(" "),s("th",[t._v("容器ID")]),t._v(" "),s("th",[t._v("状态")]),t._v(" "),s("th",[t._v("创建时间")]),t._v(" "),s("th",[t._v("操作")])])]),t._v(" "),s("tbody",t._l(t.containers,function(a){return s("tr",[s("td",[t._v(t._s(a[1]))]),t._v(" "),s("td",[t._v(t._s(a[0]))]),t._v(" "),s("td",[t._v(t._s(a[2]))]),t._v(" "),s("td",[t._v(t._s(a[3]))]),t._v(" "),s("td",[s("m-btn",{staticClass:"primary_txt",attrs:{href:{name:"AppDetail",params:{mid:a[4],name:a[1],cid:a[0]}}}},[t._v("详情")])],1)])}))])])]),t._v(" "),s("panel",{staticClass:"m-b16"},[s("div",{staticClass:"panel-title",slot:"title"},[t._v("日志")]),t._v(" "),s("div",{staticClass:"panel-body"},[s("table",{staticClass:"table hover striped theme-dft pad-table"},[s("col",{attrs:{width:"30%"}}),t._v(" "),s("col",{attrs:{width:"70%"}}),t._v(" "),s("thead",[s("tr",[s("th",[t._v("时间")]),t._v(" "),s("th",[t._v("行为")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("2017-06-28")]),t._v(" "),s("td",[t._v("项目创建")])]),t._v(" "),s("tr",[s("td",[t._v("2017-06-28")]),t._v(" "),s("td",[t._v("项目构建")])])])])])])],1),t._v(" "),s("m-col",{staticClass:"xs-12 lg-4"},[s("panel",{staticClass:"m-b16"},[s("div",{staticClass:"panel-title",slot:"title"},[s("span",{staticClass:"title"},[t._v("版本列表")]),t._v(" "),s("m-btn",{staticClass:"right",attrs:{sizeh:-1},nativeOn:{click:function(a){t.gotVerListMore(a)}}},[t._v("更多")])],1),t._v(" "),s("div",{staticClass:"panel-body p-b16"},[s("table",{staticClass:"table hover striped theme-dft pad-table"},[s("col",{attrs:{width:"30%"}}),t._v(" "),s("col",{attrs:{width:"40%"}}),t._v(" "),s("col",{attrs:{width:"30%"}}),t._v(" "),s("thead",[s("tr",[s("th",[t._v("版本号")]),t._v(" "),s("th",[t._v("更新时间")]),t._v(" "),s("th",[t._v("操作")])])]),t._v(" "),s("tbody",t._l(t.verLimit,function(a){return s("tr",[s("td",[t._v(t._s(a.version))]),t._v(" "),s("td",[t._v(t._s(a.update_time))]),t._v(" "),s("td",[s("m-btn",{staticClass:"primary_txt",attrs:{href:{name:"VerNotes",params:{id:a.id}}},nativeOn:{click:function(t){}}},[t._v("日志")])],1)])}))])])]),t._v(" "),s("panel",{staticClass:"m-b16"},[s("div",{staticClass:"panel-title",slot:"title"},[t._v("数据分析")])]),t._v(" "),s("panel",{staticClass:"m-b16"},[s("div",{staticClass:"panel-title",slot:"title"},[t._v("其他")])])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=13.46df215cda7272ce9aca.js.map