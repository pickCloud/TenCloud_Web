webpackJsonp([7],{148:function(t,e,s){s(198);var a=s(7)(s(191),s(209),null,null);t.exports=a.exports},191:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{lists:[]}},created:function(){this.$route.params.verlist?this.lists=this.$route.params.verlist:this.$router.replace({name:"Main"})}}},196:function(t,e,s){e=t.exports=s(136)(),e.push([t.i,".page-verlist td,.page-verlist th{padding-left:8px!important}","",{version:3,sources:["/Users/10com/FrontEnd/src/components/Verlist.vue"],names:[],mappings:"AACA,kCACE,0BAA6B,CAC9B",file:"Verlist.vue",sourcesContent:["\n.page-verlist th, .page-verlist td {\n  padding-left: 8px !important;\n}\n"],sourceRoot:""}])},198:function(t,e,s){var a=s(196);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(137)("64f29a6a",a,!0)},209:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-pad page-verlist"},[s("panel",{attrs:{title:"版本列表"}},[s("div",{staticClass:"panel-body p-b16"},[s("m-table",{staticClass:"hover striped machines-table m-b16"},[s("col",{attrs:{width:"25%"}}),t._v(" "),s("col",{attrs:{width:"25%"}}),t._v(" "),s("col",{attrs:{width:"25%"}}),t._v(" "),s("col",{attrs:{width:"25%"}}),t._v(" "),s("thead",[s("tr",[s("th",[t._v("镜像名称")]),t._v(" "),s("th",[t._v("版本号")]),t._v(" "),s("th",[t._v("构建时间")]),t._v(" "),s("th",[t._v("操作")])])]),t._v(" "),s("tbody",t._l(t.lists,function(e){return s("tr",[s("td",[t._v(t._s(e.image_name))]),t._v(" "),s("td",[t._v(t._s(e.version))]),t._v(" "),s("td",[t._v(t._s(e.update_time))]),t._v(" "),s("td",[s("m-btn",{staticClass:"primary_txt"},[t._v("日志")]),t._v(" "),s("m-btn",{staticClass:"pink_txt"},[t._v("删除")])],1)])}))])],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=7.ae60b5f9862f664a0310.js.map