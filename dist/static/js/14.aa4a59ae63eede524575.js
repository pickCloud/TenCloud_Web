webpackJsonp([14],{232:function(t,e,n){n(440);var a=n(4)(n(404),n(486),null,null);t.exports=a.exports},404:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{ver:"",pn:"",data:{}}},methods:{getApiData:function(){var t=this;this.ver=this.$route.params.v,this.pn=this.$route.params.pname,this.$Global.async("project_vlog",!0).getData(null,this.pn+"/image/"+this.ver+"/log").then(function(e){t.data=e.data})}},created:function(){this.$route.params.pname?this.getApiData():this.$router.replace({name:"Projects"})}}},426:function(t,e,n){e=t.exports=n(218)(),e.push([t.i,".note-code{padding:16px!important;background-color:#1d202a}.note-code li{padding:4px 0}","",{version:3,sources:["D:/FrontEnd/src/components/VerNotes.vue"],names:[],mappings:"AACA,WACE,uBAAyB,AACzB,wBAA0B,CAC3B,AACD,cACI,aAAe,CAClB",file:"VerNotes.vue",sourcesContent:["\n.note-code {\n  padding: 16px !important;\n  background-color: #1d202a;\n}\n.note-code li {\n    padding: 4px 0;\n}\n"],sourceRoot:""}])},440:function(t,e,n){var a=n(426);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(219)("280632dc",a,!0)},486:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-pad page-vernote"},[n("panel",[n("div",{staticClass:"panel-title",slot:"title"},[t._v("【"+t._s(t.ver)+"】构建日志")]),t._v(" "),n("div",{staticClass:"p-16"},[n("div",{staticClass:"m-b16"},[t._v("构建过程")]),t._v(" "),n("ul",{staticClass:"note-code"},[n("li",[t._v("更新日期："+t._s(t.data.update_time))]),t._v(" "),n("li",{staticStyle:{padding:"16px 0"}},[n("strong",[t._v("out:")])]),t._v(" "),t._l(t.data.log.out,function(e){return n("li",[t._v(t._s(e))])}),t._v(" "),n("li",{staticStyle:{padding:"16px 0"}},[n("strong",[t._v("err:")])]),t._v(" "),t._l(t.data.log.err,function(e){return n("li",[t._v(t._s(e))])})],2)])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=14.aa4a59ae63eede524575.js.map