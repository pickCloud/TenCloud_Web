webpackJsonp([15],{241:function(t,e,i){i(496);var a=i(4)(i(423),i(559),null,null);t.exports=a.exports},258:function(t,e,i){"use strict";e.__esModule=!0;var a=i(31),n=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default=n.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t}},406:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(258),s=a(n),o=i(17),c=a(o),l=i(93);e.default={data:function(){return{form:{name:"",mobile:"",create_time:"",update_time:""},isEditor:!1,module:[],employees:[],idType:""}},methods:(0,s.default)({},(0,l.mapMutations)("pop",["setPopState"]),{changeData:function(){this.isEditor=!this.isEditor},saveData:function(){var t=this,e={cid:this.$route.params.id,mobile:this.form.mobile,contact:this.form.contact,name:this.form.name};c.default.http("company_updata",e,"post").then(function(e){t.isEditor=!1,t.$toast("更改成功","cc")}).catch(function(e){t.$toast(e.message,"cc")})},cancel:function(){this.isEditor=!1},getDataApi:function(){this.getBaseData(),this.getEmployees()},getBaseData:function(){var t=this;c.default.http("company_detail","","get",this.$route.params.id).then(function(e){t.form=e.data[0]})},getEmployees:function(){var t=this;c.default.http("company_employe","","get",this.$route.params.id+"/employees").then(function(e){t.employees=e.data})},getModule:function(){var t=this;c.default.http("company_employe","","get",this.$route.params.id+"/employees").then(function(e){t.module=e.data})},invite:function(){this.setPopState({name:"pop_all",value:1}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id}})},inviteCondition:function(){this.setPopState({name:"pop_all",value:2}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id}})},company_accept:function(t){var e=this;c.default.http("company_accept",{id:t},"post").then(function(t){e.$toast("审核成功","cc"),e.getDataApi()})},company_reject:function(t){var e=this;c.default.http("company_reject",{id:t},"post").then(function(t){e.$toast("已拒绝","cc"),e.getDataApi()})},company_dismission:function(t){var e=this;c.default.http("company_dismission",{id:t},"post").then(function(t){e.$toast("解除成功","cc"),e.getDataApi()})}}),computed:(0,s.default)({},(0,l.mapState)("pop",["pop_all"])),created:function(){this.getDataApi()},beforeDestroy:function(){},watch:{$route:"getDataApi"}}},423:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(406),n=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={mixins:[n.default]}},467:function(t,e,i){e=t.exports=i(232)(),e.push([t.i,".input-editor{display:block;width:calc(100% + 32px);height:100%;border:none;background:none;color:#7f8da4;font-size:.7rem;margin:0 -16px;padding:0 16px}.input-height{ine-height:50px;height:50px}.input_image{position:relative;height:200px;width:300px;border-radius:5px;background-color:#1d202a;overflow:hidden}.input_image input{font-size:100px;position:absolute;height:100%;opacity:0;width:100%;background-color:transparent}.pass_tip{color:#48bbc0}","",{version:3,sources:["D:/sourceTreeItem/src/components/FirmData.vue"],names:[],mappings:"AACA,cACE,cAAe,AACf,wBAAyB,AACzB,YAAa,AACb,YAAa,AACb,gBAAiB,AACjB,cAAe,AACf,gBAAkB,AAClB,eAAgB,AAChB,cAAgB,CACjB,AACD,cACE,gBAAiB,AACjB,WAAa,CACd,AACD,aACE,kBAAmB,AACnB,aAAc,AACd,YAAa,AACb,kBAAmB,AACnB,yBAA0B,AAC1B,eAAiB,CAClB,AACD,mBACI,gBAAiB,AACjB,kBAAmB,AACnB,YAAa,AACb,UAAW,AACX,WAAY,AACZ,4BAA8B,CACjC,AACD,UACE,aAAe,CAChB",file:"FirmData.vue",sourcesContent:["\n.input-editor {\n  display: block;\n  width: calc(100% + 32px);\n  height: 100%;\n  border: none;\n  background: none;\n  color: #7f8da4;\n  font-size: 0.7rem;\n  margin: 0 -16px;\n  padding: 0 16px;\n}\n.input-height {\n  ine-height: 50px;\n  height: 50px;\n}\n.input_image {\n  position: relative;\n  height: 200px;\n  width: 300px;\n  border-radius: 5px;\n  background-color: #1D202A;\n  overflow: hidden;\n}\n.input_image input {\n    font-size: 100px;\n    position: absolute;\n    height: 100%;\n    opacity: 0;\n    width: 100%;\n    background-color: transparent;\n}\n.pass_tip {\n  color: #48bbc0;\n}\n"],sourceRoot:""}])},496:function(t,e,i){var a=i(467);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(233)("5cd02022",a,!0)},559:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"page-pad page-machine-detail"},[i("m-row",{attrs:{gutter:8}},[i("m-col",{staticClass:"xs-12"},[i("panel",{staticClass:"m-b16"},[i("div",{staticClass:"panel-title flex-space-between",staticStyle:{padding:"0px 16px"},attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"p-lr-16"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"inp-editor input-height",class:{editor:t.isEditor},staticStyle:{"line-height":"30px"},attrs:{type:"text",disabled:!t.isEditor},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),i("div",[t.isEditor?i("div",[i("m-btn",{nativeOn:{click:function(e){t.saveData(e)}}},[t._v("保存")]),t._v(" "),i("m-btn",{nativeOn:{click:function(e){t.cancel(e)}}},[t._v("取消")])],1):i("m-btn",{nativeOn:{click:function(e){t.changeData(e)}}},[i("i",{staticClass:"iconfont icon-xiugai"}),t._v(" 修改")])],1)]),t._v(" "),i("div",{staticClass:"flex-flex"},[i("div",{}),t._v(" "),i("div",{staticClass:"xs-3"},[i("table",{staticClass:"list-table"},[i("col",{attrs:{width:"40%"}}),t._v(" "),i("col",{attrs:{width:"60%"}}),t._v(" "),i("tbody",[i("tr",[i("td",{staticClass:"text-center",staticStyle:{padding:"0 16px"}},[t._v("联系人")]),t._v(" "),i("td",{staticStyle:{padding:"0  16px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.contact,expression:"form.contact"}],staticClass:"inp-editor input-height",class:{editor:t.isEditor},attrs:{type:"text",disabled:!t.isEditor},domProps:{value:t.form.contact},on:{input:function(e){e.target.composing||t.$set(t.form,"contact",e.target.value)}}})])]),t._v(" "),i("tr",[i("td",{staticClass:"text-center",staticStyle:{padding:"0 16px"}},[t._v("联系方式")]),t._v(" "),i("td",{staticStyle:{padding:"0 16px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile,expression:"form.mobile"}],staticClass:"inp-editor input-height",class:{editor:t.isEditor},attrs:{type:"text",disabled:!t.isEditor},domProps:{value:t.form.mobile},on:{input:function(e){e.target.composing||t.$set(t.form,"mobile",e.target.value)}}})])]),t._v(" "),i("tr",[i("td",{staticClass:"text-center"},[t._v("添加时间")]),t._v(" "),i("td",[t._v(t._s(t.form.create_time))])]),t._v(" "),i("tr",[i("td",{staticClass:"text-center"},[t._v("认证时间")]),t._v(" "),i("td",[t._v(t._s(t.form.update_time))])])])])]),t._v(" "),i("div",{staticClass:"flex-table"},[i("div",{staticClass:"tr"},[i("div",{staticClass:"text-center",staticStyle:{padding:"0 16px"}},[t._v("认证资料")]),t._v(" "),i("div",{staticStyle:{padding:"0  16px"}},[i("div",{staticClass:"input_image"},[i("input",{attrs:{type:"file",alt:"Submit"}})])]),t._v(" "),i("div",{staticStyle:{padding:"0  16px"}},[i("div",{staticClass:"input_image"},[i("input",{attrs:{type:"file",alt:"Submit"}})])]),t._v(" "),i("div",{staticStyle:{padding:"0  16px"}},[i("div",{staticClass:"input_image"},[i("input",{attrs:{type:"file",alt:"Submit"}})])])])])])])],1)],1),t._v(" "),i("m-row",{attrs:{gutter:8}},[i("m-col",{staticClass:"col xs-12 lg-8"},[i("panel",{staticClass:"m-b16"},[i("div",{staticClass:"panel-title flex-space-between",attrs:{slot:"title"},slot:"title"},[i("div",[t._v("员工列表")]),t._v(" "),i("div",[i("m-btn",{staticClass:"primary_txt",nativeOn:{click:function(e){t.invite(e)}}},[t._v("邀请员工")]),t._v(" "),i("m-btn",{staticClass:"primary_txt",nativeOn:{click:function(e){t.inviteCondition(e)}}},[t._v("设置")]),t._v(" "),i("m-btn",{staticClass:"primary_txt"},[t._v("更换管理员")])],1)]),t._v(" "),i("div",{staticClass:"panel-body p-b16"},[i("table",{staticClass:"table hover striped theme-dft pad-table "},[i("col",{attrs:{width:"10%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("thead",[i("tr",[i("th",[t._v("姓名")]),t._v(" "),i("th",[t._v("手机号码")]),t._v(" "),i("th",[t._v("身份证号")]),t._v(" "),i("th",[t._v("申请时间")]),t._v(" "),i("th",[t._v("加入时间")]),t._v(" "),i("th",[t._v("状态")]),t._v(" "),i("th",[t._v("操作")])])]),t._v(" "),i("tbody",t._l(t.employees,function(e){return i("tr",[i("td",[t._v(t._s(e.name))]),t._v(" "),i("td",[t._v(t._s(e.mobile))]),t._v(" "),i("td",[t._v(t._s(e.is_admin))]),t._v(" "),i("td",[t._v(t._s(e.ctime))]),t._v(" "),i("td",[t._v(t._s(e.utime))]),t._v(" "),i("td",{class:0===e.status?"pass_tip":""},[t._v(t._s(1===e.status?"已通过审核":0===e.status?"待审核":"审核部通过"))]),t._v(" "),0===e.status?i("td",[i("m-btn",{nativeOn:{click:function(i){t.company_reject(e.id)}}},[t._v("拒绝")]),i("m-btn",{nativeOn:{click:function(i){t.company_accept(e.id)}}},[t._v("允许")])],1):t._e(),t._v(" "),1===e.status?i("td",[i("m-btn",[t._v("权限")]),e.is_admin?t._e():i("m-btn",{nativeOn:{click:function(i){t.company_dismission(e.id)}}},[t._v("解除")])],1):t._e()])}))])])])],1),t._v(" "),i("m-col",{staticClass:"col xs-12 lg-4"},[i("panel",{staticClass:"p-b16 m-b16"},[i("div",{staticClass:"panel-title flex-space-between",attrs:{slot:"title"},slot:"title"},[i("div",[t._v("权限模板")]),t._v(" "),i("div",[i("m-btn",[t._v("新增权限模板")])],1)]),t._v(" "),i("div",{staticClass:"panel-body"},[i("m-table",{staticClass:"hover striped block-table"},[i("col",{attrs:{width:"30%"}}),t._v(" "),i("col",{attrs:{width:"30%"}}),t._v(" "),i("col",{attrs:{width:"40%"}}),t._v(" "),i("thead",[i("tr",[i("th",[t._v("模板名称")]),t._v(" "),i("th",[t._v("模板类型")]),t._v(" "),i("th",[t._v("操作")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("管理员")]),t._v(" "),i("td",[t._v("功能|数据")]),t._v(" "),i("td",[t._v("查看")])]),t._v(" "),t._l(t.module,function(e){return i("tr",[i("td",[t._v(t._s(e[0]))]),t._v(" "),i("td",[t._v(t._s(e[1]))]),t._v(" "),i("td",[i("m-btn",[t._v("修改")]),i("m-btn",[t._v("重命名")]),i("m-btn",[t._v("删除")])],1)])})],2)])],1)])],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=15.8b82c0a897d53f3c3c4e.js.map