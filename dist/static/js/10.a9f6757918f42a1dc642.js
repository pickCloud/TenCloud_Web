webpackJsonp([10],{272:function(t,e,i){i(554);var a=i(0)(i(454),i(632),null,null);t.exports=a.exports},291:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(99),n=function(t){return t&&t.__esModule?t:{default:t}}(a),s={theme:"comb-msg",hasClose:!1,buttons:[{label:"确定",theme:""},{label:"取消",theme:""}]};e.default={methods:{popperDelete:function(t,e){var i=this.$createElement;this.$confirm((0,n.default)({},s,{content:i("div",[i("img",{attrs:{src:"./static/img/error_icon.png",class:"vam m-r16"}}),i("span",{attrs:{class:"vam"}},t)])}),function(t){0===(arguments.length<=1?void 0:arguments[1])&&e&&e.call(),t.actionPopper(!1)})},popperInfo:function(t,e,i){this.$confirm((0,n.default)({},s,{content:t}),function(t){0===(arguments.length<=1?void 0:arguments[1])?e&&e.call():i&&i.call(),t.actionPopper(!1)})},popperWaiting:function(t){var e=this.$createElement;return this.$confirm({theme:"comb-msg",hasClose:!1,maskClose:!1,content:e("span",null,[e("img",{attrs:{src:"./static/img/spin.gif",class:"vam m-r8"}}),e("span",{attrs:{class:"vam"}},t)]),buttons:[]})}}}},293:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{selects:[],isSelectAll:!1}},watch:{isSelectAll:function(t,e){var i=this;t?this.listts.forEach(function(t,e){var a=t.id+"";-1===i.selects.indexOf(a)&&i.selects.push(a)}):this.selects=[]}},methods:{getAttrById:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",i=-1,a=[];++i<this.listts.length;){var n=this.listts[i];-1===t.indexOf(n.id+"")&&-1===t.indexOf(n.id)||a.push(n[e])}return a}}}},437:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(52),s=a(n),o=i(6),c=a(o),l=i(31),r=i(587),p=a(r),d=i(291),m=a(d),u=i(293),v=a(u);e.default={mixins:[m.default,v.default],data:function(){return{form:{name:"",mobile:"",create_time:"",update_time:""},isEditor:!1,idType:"",isAdmin:!1}},methods:(0,s.default)({},(0,l.mapMutations)("pop",["setPopState"]),(0,l.mapMutations)("permission",["clearState"]),(0,l.mapActions)("firmData",["getEmployees","getModule"]),{changeData:function(){this.isEditor=!this.isEditor},saveData:function(){var t=this,e={cid:this.$route.params.id,mobile:this.form.mobile,contact:this.form.contact,name:this.form.name};return""===this.form.name?(this.$toast("企业名称不能为空","cc"),!1):""===this.form.mobile?(this.$toast("手机号码不能为空","cc"),!1):""===this.form.contact?(this.$toast("名字不能不能为空","cc"),!1):void c.default.http("company_updata",e,"post").then(function(e){t.isEditor=!1,t.$toast("更改成功","cc")}).catch(function(e){t.$toast(e.message,"cc")})},cancel:function(){this.isEditor=!1},getDataApi:function(){this.getBaseData(),this.getEmployees(this.$route.params.id),this.getModule(this.$route.params.id)},getBaseData:function(){var t=this;c.default.http("company_detail","","get",this.$route.params.id).then(function(e){t.form=e.data[0]})},addTemp:function(){this.clearState(),this.setPopState({name:"pop_all",value:3}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id}})},changeUserTemp:function(t,e){e?(this.setPopState({name:"pop_all",value:6}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id,id:t}})):(this.setPopState({name:"pop_all",value:7}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id,id:t}}))},changeTemp:function(t){this.setPopState({name:"pop_all",value:5}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id,id:t}})},invite:function(){this.setPopState({name:"pop_all",value:1}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id,company_name:this.form.name}})},leaveCompany:function(){this.$router.push({name:"UserInfo"})},inviteCondition:function(){this.setPopState({name:"pop_all",value:2}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id,company_name:this.form.name}})},permissionChange:function(){this.setPopState({name:"pop_all",value:4}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id}})},company_accept:function(t){var e=this;c.default.http("company_accept",{id:t},"post").then(function(t){e.$toast("审核成功","cc"),e.getDataApi()})},company_reject:function(t){var e=this;c.default.http("company_reject",{id:t},"post").then(function(t){e.$toast("已拒绝","cc"),e.getDataApi()})},company_dismission:function(t){var e=this;c.default.http("company_dismission",{id:t},"post").then(function(t){e.$toast("解除成功","cc"),e.getDataApi()})},deleteTemp:function(t){var e=this,i={pt_id:t,cid:this.$route.params.id};c.default.http("company_getTemplate",i,"post","/"+t+"/del").then(function(t){e.$toast("删除成功","cc"),e.getModule(e.$route.params.id)})},moduleMame:function(t){var e=this;this.$Popx({popper:p.default,data:{title:"模板重命名"},callback:function(i){var a=(i.type,i.payload),n=i.next;"sure"===a.type?e.$axios.http("company_getTemplate",{pt_id:t.id,cid:e.$route.params.id,name:a.filename},"post","/"+t.id+"/rename").then(function(t){e.getModule(e.$route.params.id),n()}):n()}})}}),computed:(0,s.default)({},(0,l.mapState)("pop",["pop_all"]),(0,l.mapState)("firmData",["employees","module"]),(0,l.mapState)("user",["currentUser"]),{inputW:function(){return 300*window.innerWidth/1920},inputH:function(){return 190*window.innerWidth/1920}}),created:function(){this.getDataApi()},beforeDestroy:function(){},watch:{$route:"getDataApi",employees:function(){var t=this;this.employees.forEach(function(e){e.mobile===t.$root.userinfo.mobile&&(t.isAdmin=e.is_admin)})}}}},454:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(437),n=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={mixins:[n.default]}},475:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{popxdata:{title:""},filename:""}},methods:{close:function(t){this.$emit("close",{type:t,filename:this.filename})}}}},511:function(t,e,i){e=t.exports=i(263)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"ChangeModuleName.vue",sourceRoot:""}])},518:function(t,e,i){e=t.exports=i(263)(),e.push([t.i,".input-editor{display:block;width:calc(100% + 32px);height:100%;border:none;background:none;color:#7f8da4;font-size:.7rem;margin:0 -16px;padding:0 16px}.input-height{ine-height:50px;height:50px}.input_image{position:relative;height:200px;width:300px;border-radius:5px;background-color:#1d202a;overflow:hidden}.input_image input{font-size:100px;position:absolute;height:100%;opacity:0;width:100%;background-color:transparent}.pass_tip{color:#48bbc0}","",{version:3,sources:["/Users/zyb/TenCloud_Web/src/components/FirmData.vue"],names:[],mappings:"AACA,cACE,cAAe,AACf,wBAAyB,AACzB,YAAa,AACb,YAAa,AACb,gBAAiB,AACjB,cAAe,AACf,gBAAkB,AAClB,eAAgB,AAChB,cAAgB,CACjB,AACD,cACE,gBAAiB,AACjB,WAAa,CACd,AACD,aACE,kBAAmB,AACnB,aAAc,AACd,YAAa,AACb,kBAAmB,AACnB,yBAA0B,AAC1B,eAAiB,CAClB,AACD,mBACI,gBAAiB,AACjB,kBAAmB,AACnB,YAAa,AACb,UAAW,AACX,WAAY,AACZ,4BAA8B,CACjC,AACD,UACE,aAAe,CAChB",file:"FirmData.vue",sourcesContent:["\n.input-editor {\n  display: block;\n  width: calc(100% + 32px);\n  height: 100%;\n  border: none;\n  background: none;\n  color: #7f8da4;\n  font-size: 0.7rem;\n  margin: 0 -16px;\n  padding: 0 16px;\n}\n.input-height {\n  ine-height: 50px;\n  height: 50px;\n}\n.input_image {\n  position: relative;\n  height: 200px;\n  width: 300px;\n  border-radius: 5px;\n  background-color: #1D202A;\n  overflow: hidden;\n}\n.input_image input {\n    font-size: 100px;\n    position: absolute;\n    height: 100%;\n    opacity: 0;\n    width: 100%;\n    background-color: transparent;\n}\n.pass_tip {\n  color: #48bbc0;\n}\n"],sourceRoot:""}])},547:function(t,e,i){var a=i(511);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(264)("1496dca2",a,!0)},554:function(t,e,i){var a=i(518);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(264)("77a83114",a,!0)},587:function(t,e,i){i(547);var a=i(0)(i(475),i(622),null,null);t.exports=a.exports},622:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"popx-new"},[i("div",{staticClass:"popx-new-cont"},[i("div",{staticClass:"popx-new-title p-lr-16"},[i("span",[t._v(t._s(t.popxdata.title))]),t._v(" "),i("span",{staticClass:"close",on:{click:function(e){t.close("cancel")}}})]),t._v(" "),i("div",{staticClass:"popx-new-body"},[i("div",{staticClass:"text-center m-b32"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filename,expression:"filename"}],staticClass:"vam",attrs:{type:"text",placeholder:"请输入模板名称"},domProps:{value:t.filename},on:{input:function(e){e.target.composing||(t.filename=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"btn-group text-center"},[i("m-btn",{staticClass:"primary_bg grey-dark_txt m-r8",nativeOn:{click:function(e){t.close("sure")}}},[t._v("确定")]),t._v(" "),i("m-btn",{staticClass:"cancel_btn",nativeOn:{click:function(e){t.close("cancel")}}},[t._v("取消")])],1)])]),t._v(" "),i("div",{staticClass:"popx-new-overflow"})])},staticRenderFns:[]}},632:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"page-pad page-machine-detail"},[i("m-row",{attrs:{gutter:8}},[i("m-col",{staticClass:"xs-12"},[i("panel",{staticClass:"m-b16"},[i("div",{staticClass:"panel-title flex-space-between",staticStyle:{padding:"0px 16px"},attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"p-lr-16"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"inp-editor input-height",class:{editor:t.isEditor},staticStyle:{"line-height":"30px"},attrs:{type:"text",disabled:!t.isEditor},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),i("div",[t.isEditor?i("div",[i("m-btn",{nativeOn:{click:function(e){t.saveData(e)}}},[t._v("保存")]),t._v(" "),i("m-btn",{nativeOn:{click:function(e){t.cancel(e)}}},[t._v("取消")])],1):i("m-btn",{nativeOn:{click:function(e){t.changeData(e)}}},[i("i",{staticClass:"iconfont icon-xiugai"}),t._v(" 修改")])],1)]),t._v(" "),i("div",{staticClass:"flex-flex",staticStyle:{"flex-wrap":"nowrap"}},[i("div",{}),t._v(" "),i("div",{staticClass:"xs-4"},[i("table",{staticClass:"list-table"},[i("col",{attrs:{width:"40%"}}),t._v(" "),i("col",{attrs:{width:"60%"}}),t._v(" "),i("tbody",[i("tr",[i("td",{staticClass:"text-center",staticStyle:{padding:"0 16px"}},[t._v("联系人")]),t._v(" "),i("td",{staticStyle:{padding:"0  16px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.contact,expression:"form.contact"}],staticClass:"inp-editor input-height",class:{editor:t.isEditor},attrs:{type:"text",disabled:!t.isEditor},domProps:{value:t.form.contact},on:{input:function(e){e.target.composing||t.$set(t.form,"contact",e.target.value)}}})])]),t._v(" "),i("tr",[i("td",{staticClass:"text-center",staticStyle:{padding:"0 16px"}},[t._v("联系方式")]),t._v(" "),i("td",{staticStyle:{padding:"0 16px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile,expression:"form.mobile"}],staticClass:"inp-editor input-height",class:{editor:t.isEditor},attrs:{type:"text",disabled:!t.isEditor},domProps:{value:t.form.mobile},on:{input:function(e){e.target.composing||t.$set(t.form,"mobile",e.target.value)}}})])]),t._v(" "),i("tr",[i("td",{staticClass:"text-center"},[t._v("添加时间")]),t._v(" "),i("td",[t._v(t._s(t.form.create_time))])]),t._v(" "),i("tr",[i("td",{staticClass:"text-center"},[t._v("认证时间")]),t._v(" "),i("td",[t._v(t._s(t.form.update_time))])])])])]),t._v(" "),i("div",{staticClass:"xs-8 flex-table"},[i("div",{staticClass:"tr"},[i("div",{staticClass:"text-center",staticStyle:{padding:"0 16px"}},[t._v("认证资料")]),t._v(" "),i("div",{staticStyle:{padding:"0  16px"}},[i("div",{staticClass:"input_image",style:{width:t.inputW+"px",height:t.inputH+"px"}},[i("input",{attrs:{type:"file",alt:"Submit",accept:"image/*"}})])]),t._v(" "),i("div",{staticStyle:{padding:"0  16px"}},[i("div",{staticClass:"input_image",style:{width:t.inputW+"px",height:t.inputH+"px"}},[i("input",{attrs:{type:"file",alt:"Submit",accept:"image/*"}})])]),t._v(" "),i("div",{staticStyle:{padding:"0  16px"}},[i("div",{staticClass:"input_image",style:{width:t.inputW+"px",height:t.inputH+"px"}},[i("input",{attrs:{type:"file",alt:"Submit",accept:"image/*"}})])])])])])])],1)],1),t._v(" "),i("m-row",{attrs:{gutter:8}},[i("m-col",{staticClass:"col xs-12 lg-8"},[i("panel",{staticClass:"m-b16"},[i("div",{staticClass:"panel-title flex-space-between btn-group",attrs:{slot:"title"},slot:"title"},[i("div",[t._v("员工列表")]),t._v(" "),t.isAdmin?i("div",[i("m-btn",{staticClass:"primary_txt",nativeOn:{click:function(e){t.invite(e)}}},[t._v("邀请员工")]),t._v(" "),i("m-btn",{staticClass:"primary_txt",nativeOn:{click:function(e){t.inviteCondition(e)}}},[t._v("设置")]),t._v(" "),i("m-btn",{staticClass:"primary_txt",nativeOn:{click:function(e){t.permissionChange(e)}}},[t._v("更换管理员")])],1):i("m-btn",{staticClass:"btn primary_txt",nativeOn:{click:function(e){t.leaveCompany(e)}}},[t._v("离开企业")])],1),t._v(" "),i("div",{staticClass:"panel-body p-b16"},[i("table",{staticClass:"table hover striped theme-dft pad-table "},[i("col",{attrs:{width:"10%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("thead",[i("tr",[i("th",[t._v("姓名")]),t._v(" "),i("th",[t._v("手机号码")]),t._v(" "),i("th",[t._v("申请时间")]),t._v(" "),i("th",[t._v("加入时间")]),t._v(" "),i("th",[t._v("状态")]),t._v(" "),i("th",[t._v("操作")])])]),t._v(" "),i("tbody",t._l(t.employees,function(e){return i("tr",[i("td",[e.is_admin?i("i",{staticClass:"iconfont icon-guanliyuan yellow_txt",staticStyle:{"padding-right":"5px"}}):t._e(),t._v(t._s(e.name))]),t._v(" "),i("td",[t._v(t._s(e.mobile))]),t._v(" "),i("td",[t._v(t._s(e.create_time))]),t._v(" "),i("td",[t._v(t._s(e.update_time))]),t._v(" "),i("td",{class:0===e.status?"pass_tip":""},[t._v(t._s(1===e.status||2===e.status?"已通过审核":0===e.status?"待审核":"审核不通过"))]),t._v(" "),i("td",[0===e.status?i("div",[i("m-btn",{nativeOn:{click:function(i){t.company_reject(e.id)}}},[t._v("拒绝")]),i("m-btn",{nativeOn:{click:function(i){t.company_accept(e.id)}}},[t._v("允许")])],1):t._e(),1===e.status?i("div",[i("m-btn",{nativeOn:{click:function(i){t.changeUserTemp(e.uid,t.isAdmin)}}},[t._v("权限")]),t.isAdmin&&!e.is_admin?i("m-btn",{nativeOn:{click:function(i){t.company_dismission(e.id)}}},[t._v("解除")]):t._e()],1):t._e()])])}))])])])],1),t._v(" "),i("m-col",{staticClass:"col xs-12 lg-4"},[i("panel",{staticClass:"p-b16 m-b16"},[i("div",{staticClass:"panel-title flex-space-between",attrs:{slot:"title"},slot:"title"},[i("div",[t._v("权限模板")]),t._v(" "),i("div",[i("m-btn",{nativeOn:{click:function(e){t.addTemp(e)}}},[t._v("新增权限模板")])],1)]),t._v(" "),i("div",{staticClass:"panel-body"},[i("m-table",{staticClass:"hover striped block-table pad-table"},[i("col",{attrs:{width:"30%"}}),t._v(" "),i("col",{attrs:{width:"30%"}}),t._v(" "),i("col",{attrs:{width:"40%"}}),t._v(" "),i("thead",[i("tr",[i("th",[t._v("模板名称")]),t._v(" "),i("th",[t._v("备注")]),t._v(" "),i("th",[t._v("操作")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("管理员")]),t._v(" "),i("td",[t._v("预设")]),t._v(" "),i("td",[t._v("查看")])]),t._v(" "),t._l(t.module,function(e){return i("tr",[i("td",[t._v(t._s(e.name))]),t._v(" "),i("td",[t._v(t._s(e[0]))]),t._v(" "),i("td",[i("m-btn",{nativeOn:{click:function(i){t.changeTemp(e.id)}}},[t._v("修改")]),i("m-btn",{nativeOn:{click:function(i){t.moduleMame(e)}}},[t._v("重命名")]),i("m-btn",{nativeOn:{click:function(i){t.deleteTemp(e.id)}}},[t._v("删除")])],1)])})],2)])],1)])],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=10.a9f6757918f42a1dc642.js.map