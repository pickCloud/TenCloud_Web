webpackJsonp([6],{274:function(t,e,i){i(558);var a=i(0)(i(457),i(637),null,null);t.exports=a.exports},293:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(99),s=function(t){return t&&t.__esModule?t:{default:t}}(a),n={theme:"comb-msg",hasClose:!1,buttons:[{label:"确定",theme:""},{label:"取消",theme:""}]};e.default={methods:{popperDelete:function(t,e){var i=this.$createElement;this.$confirm((0,s.default)({},n,{content:i("div",[i("img",{attrs:{src:"./static/img/error_icon.png",class:"vam m-r16"}}),i("span",{attrs:{class:"vam"}},t)])}),function(t){0===(arguments.length<=1?void 0:arguments[1])&&e&&e.call(),t.actionPopper(!1)})},popperInfo:function(t,e,i){this.$confirm((0,s.default)({},n,{content:t}),function(t){0===(arguments.length<=1?void 0:arguments[1])?e&&e.call():i&&i.call(),t.actionPopper(!1)})},popperWaiting:function(t){var e=this.$createElement;return this.$confirm({theme:"comb-msg",hasClose:!1,maskClose:!1,content:e("span",null,[e("img",{attrs:{src:"./static/img/spin.gif",class:"vam m-r8"}}),e("span",{attrs:{class:"vam"}},t)]),buttons:[]})}}}},295:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{selects:[],isSelectAll:!1}},watch:{isSelectAll:function(t,e){var i=this;t?this.listts.forEach(function(t,e){var a=t.id+"";-1===i.selects.indexOf(a)&&i.selects.push(a)}):this.selects=[]}},methods:{getAttrById:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",i=-1,a=[];++i<this.listts.length;){var s=this.listts[i];-1===t.indexOf(s.id+"")&&-1===t.indexOf(s.id)||a.push(s[e])}return a}}}},417:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{isShow:function(t){return!this.$store.state.user.currentUser.cid||this.$store.state.user.currentUser.is_admin||-1!==this.$store.state.user.currentPermission.indexOf(this.$store.state.user.permissions[t])}}}},440:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(52),n=a(s),o=i(6),c=a(o),l=i(31),r=i(592),p=a(r),d=i(293),m=a(d),u=i(295),v=a(u),_=i(417),h=a(_);e.default={mixins:[m.default,v.default,h.default],data:function(){return{form:{name:"",mobile:"",create_time:"",update_time:""},isEditor:!1,idType:"",isAdmin:!1}},methods:(0,n.default)({},(0,l.mapMutations)("pop",["setPopState"]),(0,l.mapMutations)("permission",["clearState"]),(0,l.mapMutations)("user",["UPDATE"]),(0,l.mapActions)("firmData",["getEmployees","getModule"]),(0,l.mapActions)("navTop",["getCompany"]),{changeData:function(){this.isEditor=!this.isEditor},saveData:function(){var t=this,e={cid:this.$route.params.id,mobile:this.form.mobile,contact:this.form.contact,name:this.form.name};return""===this.form.name?(this.$toast("企业名称不能为空","cc"),!1):""===this.form.mobile?(this.$toast("手机号码不能为空","cc"),!1):""===this.form.contact?(this.$toast("名字不能不能为空","cc"),!1):void c.default.http("company_updata",e,"post").then(function(e){t.isEditor=!1,t.$toast("更改成功","cc")}).catch(function(e){t.$toast(e.message,"cc")})},cancel:function(){this.isEditor=!1},getDataApi:function(){var t=this;this.getEmployees(this.$route.params.id),this.getModule(this.$route.params.id).then(function(e){t.getBaseData()})},getBaseData:function(){var t=this;c.default.http("company_detail","","get",this.$route.params.id).then(function(e){var i=e.data[0];i.cid=i.id,delete i.id,t.form=i,t.form.is_admin=t.isAdmin,t.UPDATE(t.form),console.log(t.form)})},addTemp:function(){this.clearState(),this.setPopState({name:"pop_all",value:3}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id}})},changeUserTemp:function(t){this.setPopState({name:"pop_all",value:6}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id,id:t}})},lookUserTemp:function(t){this.setPopState({name:"pop_all",value:7}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id,id:t}})},changeTemp:function(t){this.setPopState({name:"pop_all",value:5}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id,id:t}})},invite:function(){this.setPopState({name:"pop_all",value:1}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id,company_name:this.form.name}})},leaveCompany:function(){var t=this,e="";this.employees.forEach(function(i){if(i.uid===t.$root.userinfo.id)return e=i.id,!1}),c.default.http("company_employee_dismission",{id:e},"post").then(function(e){t.$toast("成功","cc"),t.getCompany(3)}),this.$router.push({name:"UserInfo"})},inviteCondition:function(){this.setPopState({name:"pop_all",value:2}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id,company_name:this.form.name}})},permissionChange:function(){this.setPopState({name:"pop_all",value:4}),this.setPopState({name:"pop_params",value:{cid:this.$route.params.id}})},company_accept:function(t){var e=this;c.default.http("company_accept",{id:t},"post").then(function(t){e.$toast("审核成功","cc"),e.getDataApi()})},company_reject:function(t){var e=this;c.default.http("company_reject",{id:t},"post").then(function(t){e.$toast("已拒绝","cc"),e.getDataApi()})},company_dismission:function(t){var e=this;c.default.http("company_dismission",{id:t},"post").then(function(t){e.$toast("解除成功","cc"),e.getDataApi()})},deleteTemp:function(t){var e=this;this.popperDelete("您确定要删除 "+t.name+" 模板吗？",function(i){var a={pt_id:t.id,cid:e.$route.params.id};e.$axios.http("company_getTemplate",a,"post","/"+t.id+"/del").then(function(t){e.$toast("删除成功","cc"),e.getModule(e.$route.params.id)},function(t){})})},moduleMame:function(t){var e=this;this.$Popx({popper:p.default,data:{title:"模板重命名"},callback:function(i){var a=(i.type,i.payload),s=i.next;"sure"===a.type?e.$axios.http("company_getTemplate",{pt_id:t.id,cid:e.$route.params.id,name:a.filename},"post","/"+t.id+"/rename").then(function(t){e.getModule(e.$route.params.id),s()}):s()}})}}),computed:(0,n.default)({},(0,l.mapState)("pop",["pop_all"]),(0,l.mapState)("firmData",["employees","module"]),(0,l.mapState)("user",["currentUser"]),{inputW:function(){return 300*window.innerWidth/1920},inputH:function(){return 190*window.innerWidth/1920}}),created:function(){this.getDataApi(),this.$store.commit("sitepath/SET_PATH",[{name:"Main",cn:"主页"},{cn:"企业资料"}])},beforeDestroy:function(){},watch:{$route:"getDataApi",employees:function(){var t=this;this.employees.forEach(function(e){e.mobile===t.$root.userinfo.mobile&&(t.isAdmin=e.is_admin)})}}}},457:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(440),s=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={mixins:[s.default]}},478:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{popxdata:{title:""},filename:""}},methods:{close:function(t){this.$emit("close",{type:t,filename:this.filename})}}}},514:function(t,e,i){e=t.exports=i(265)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"ChangeModuleName.vue",sourceRoot:""}])},521:function(t,e,i){e=t.exports=i(265)(),e.push([t.i,".input-editor{display:block;width:calc(100% + 32px);height:100%;border:none;background:none;color:#7f8da4;font-size:.7rem;margin:0 -16px;padding:0 16px}.input-height{ine-height:50px;height:50px}.input_image{position:relative;height:200px;width:300px;border-radius:5px;background-color:#1d202a;overflow:hidden}.input_image input{font-size:100px;position:absolute;height:100%;opacity:0;width:100%;background-color:transparent}.pass_tip{color:#48bbc0}","",{version:3,sources:["/Users/zyb/TenCloud_Web/src/components/FirmData.vue"],names:[],mappings:"AACA,cACE,cAAe,AACf,wBAAyB,AACzB,YAAa,AACb,YAAa,AACb,gBAAiB,AACjB,cAAe,AACf,gBAAkB,AAClB,eAAgB,AAChB,cAAgB,CACjB,AACD,cACE,gBAAiB,AACjB,WAAa,CACd,AACD,aACE,kBAAmB,AACnB,aAAc,AACd,YAAa,AACb,kBAAmB,AACnB,yBAA0B,AAC1B,eAAiB,CAClB,AACD,mBACI,gBAAiB,AACjB,kBAAmB,AACnB,YAAa,AACb,UAAW,AACX,WAAY,AACZ,4BAA8B,CACjC,AACD,UACE,aAAe,CAChB",file:"FirmData.vue",sourcesContent:["\n.input-editor {\n  display: block;\n  width: calc(100% + 32px);\n  height: 100%;\n  border: none;\n  background: none;\n  color: #7f8da4;\n  font-size: 0.7rem;\n  margin: 0 -16px;\n  padding: 0 16px;\n}\n.input-height {\n  ine-height: 50px;\n  height: 50px;\n}\n.input_image {\n  position: relative;\n  height: 200px;\n  width: 300px;\n  border-radius: 5px;\n  background-color: #1D202A;\n  overflow: hidden;\n}\n.input_image input {\n    font-size: 100px;\n    position: absolute;\n    height: 100%;\n    opacity: 0;\n    width: 100%;\n    background-color: transparent;\n}\n.pass_tip {\n  color: #48bbc0;\n}\n"],sourceRoot:""}])},551:function(t,e,i){var a=i(514);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(266)("1496dca2",a,!0)},558:function(t,e,i){var a=i(521);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(266)("77a83114",a,!0)},592:function(t,e,i){i(551);var a=i(0)(i(478),i(627),null,null);t.exports=a.exports},627:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"popx-new"},[i("div",{staticClass:"popx-new-cont"},[i("div",{staticClass:"popx-new-title p-lr-16"},[i("span",[t._v(t._s(t.popxdata.title))]),t._v(" "),i("span",{staticClass:"close",on:{click:function(e){t.close("cancel")}}})]),t._v(" "),i("div",{staticClass:"popx-new-body"},[i("div",{staticClass:"text-center m-b32"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filename,expression:"filename"}],staticClass:"vam",attrs:{type:"text",placeholder:"请输入模板名称"},domProps:{value:t.filename},on:{input:function(e){e.target.composing||(t.filename=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"btn-group text-center"},[i("m-btn",{staticClass:"primary_bg grey-dark_txt m-r8",nativeOn:{click:function(e){t.close("sure")}}},[t._v("确定")]),t._v(" "),i("m-btn",{staticClass:"cancel_btn",nativeOn:{click:function(e){t.close("cancel")}}},[t._v("取消")])],1)])]),t._v(" "),i("div",{staticClass:"popx-new-overflow"})])},staticRenderFns:[]}},637:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"page-pad page-machine-detail"},[i("m-row",{attrs:{gutter:8}},[i("m-col",{staticClass:"xs-12"},[i("panel",{staticClass:"m-b16"},[i("div",{staticClass:"panel-title flex-space-between",staticStyle:{padding:"0px 16px"},attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"p-lr-16"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"inp-editor input-height",class:{editor:t.isEditor},staticStyle:{"line-height":"30px","text-overflow":"ellipsis"},attrs:{type:"text",disabled:!t.isEditor},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),t._v(" "),t.isShow("modify_company_info")?i("div",[t.isEditor?i("div",[i("m-btn",{nativeOn:{click:function(e){t.saveData(e)}}},[t._v("保存")]),t._v(" "),i("m-btn",{nativeOn:{click:function(e){t.cancel(e)}}},[t._v("取消")])],1):i("m-btn",{nativeOn:{click:function(e){t.changeData(e)}}},[i("i",{staticClass:"iconfont icon-xiugai"}),t._v("修改")])],1):t._e()]),t._v(" "),i("div",{staticClass:"flex-flex",staticStyle:{"flex-wrap":"nowrap"}},[i("div",{}),t._v(" "),i("div",{staticClass:"xs-4"},[i("table",{staticClass:"list-table"},[i("col",{attrs:{width:"40%"}}),t._v(" "),i("col",{attrs:{width:"60%"}}),t._v(" "),i("tbody",[i("tr",[i("td",{staticClass:"text-center",staticStyle:{padding:"0 16px"}},[t._v("联系人")]),t._v(" "),i("td",{staticStyle:{padding:"0  16px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.contact,expression:"form.contact"}],staticClass:"inp-editor input-height",class:{editor:t.isEditor},attrs:{type:"text",disabled:!t.isEditor},domProps:{value:t.form.contact},on:{input:function(e){e.target.composing||t.$set(t.form,"contact",e.target.value)}}})])]),t._v(" "),i("tr",[i("td",{staticClass:"text-center",staticStyle:{padding:"0 16px"}},[t._v("联系方式")]),t._v(" "),i("td",{staticStyle:{padding:"0 16px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile,expression:"form.mobile"}],staticClass:"inp-editor input-height",class:{editor:t.isEditor},attrs:{type:"text",disabled:!t.isEditor},domProps:{value:t.form.mobile},on:{input:function(e){e.target.composing||t.$set(t.form,"mobile",e.target.value)}}})])]),t._v(" "),i("tr",[i("td",{staticClass:"text-center"},[t._v("添加时间")]),t._v(" "),i("td",[t._v(t._s(t.form.create_time))])]),t._v(" "),i("tr",[i("td",{staticClass:"text-center"},[t._v("认证时间")]),t._v(" "),i("td",[t._v(t._s(t.form.update_time))])])])])]),t._v(" "),i("div",{staticClass:"xs-8 flex-table"},[i("div",{staticClass:"tr"},[i("div",{staticClass:"text-center",staticStyle:{padding:"0 16px"}},[t._v("认证资料")]),t._v(" "),i("div",{staticStyle:{padding:"0  16px"}},[i("div",{staticClass:"input_image",style:{width:t.inputW+"px",height:t.inputH+"px"}},[i("input",{attrs:{type:"file",alt:"Submit",accept:"image/*"}})])]),t._v(" "),i("div",{staticStyle:{padding:"0  16px"}},[i("div",{staticClass:"input_image",style:{width:t.inputW+"px",height:t.inputH+"px"}},[i("input",{attrs:{type:"file",alt:"Submit",accept:"image/*"}})])]),t._v(" "),i("div",{staticStyle:{padding:"0  16px"}},[i("div",{staticClass:"input_image",style:{width:t.inputW+"px",height:t.inputH+"px"}},[i("input",{attrs:{type:"file",alt:"Submit",accept:"image/*"}})])])])])])])],1)],1),t._v(" "),i("m-row",{attrs:{gutter:8}},[i("m-col",{staticClass:"col xs-12 lg-8"},[i("panel",{staticClass:"m-b16"},[i("div",{staticClass:"panel-title flex-space-between btn-group",attrs:{slot:"title"},slot:"title"},[i("div",[t._v("员工列表")]),t._v(" "),i("div",[t.isAdmin?t._e():i("m-btn",{staticClass:"btn primary_txt",nativeOn:{click:function(e){t.leaveCompany(e)}}},[t._v("离开企业")]),t._v(" "),t.isShow("invite_new_employee")?i("m-btn",{staticClass:"primary_txt",nativeOn:{click:function(e){t.invite(e)}}},[t._v("邀请员工")]):t._e(),t._v(" "),t.isShow("set_join_conditions")?i("m-btn",{staticClass:"primary_txt",nativeOn:{click:function(e){t.inviteCondition(e)}}},[t._v("设置")]):t._e(),t._v(" "),t.isShow("set_admin")?i("m-btn",{staticClass:"primary_txt",nativeOn:{click:function(e){t.permissionChange(e)}}},[t._v("更换管理员")]):t._e()],1)]),t._v(" "),i("div",{staticClass:"panel-body p-b16"},[i("table",{staticClass:"table hover striped theme-dft pad-table "},[i("col",{attrs:{width:"10%"}}),t._v(" "),i("col",{attrs:{width:"10%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("col",{attrs:{width:"10%"}}),t._v(" "),i("col",{attrs:{width:"15%"}}),t._v(" "),i("thead",[i("tr",[i("th",[t._v("姓名")]),t._v(" "),i("th",[t._v("手机号码")]),t._v(" "),i("th",[t._v("身份证号")]),t._v(" "),i("th",[t._v("申请时间")]),t._v(" "),i("th",[t._v("加入时间")]),t._v(" "),i("th",[t._v("状态")]),t._v(" "),i("th",[t._v("操作")])])]),t._v(" "),i("tbody",t._l(t.employees,function(e){return i("tr",[i("td",[e.is_admin?i("i",{staticClass:"iconfont icon-guanliyuan yellow_txt",staticStyle:{"padding-right":"5px"}}):t._e(),t._v(t._s(e.name))]),t._v(" "),i("td",[t._v(t._s(e.mobile))]),t._v(" "),i("td",[t._v(t._s(e.id_card))]),t._v(" "),i("td",[t._v(t._s(e.create_time))]),t._v(" "),i("td",[t._v(t._s(e.update_time))]),t._v(" "),i("td",{class:2===e.status?"pass_tip":""},[t._v(t._s(3===e.status||4===e.status?"已通过审核":5===e.status?"待审核":"审核不通过"))]),t._v(" "),i("td",[i("div",[5===e.status?i("span",[t.isShow("audit_employee")?i("m-btn",{nativeOn:{click:function(i){t.company_reject(e.id)}}},[t._v("拒绝")]):t._e(),t.isShow("audit_employee")?i("m-btn",{nativeOn:{click:function(i){t.company_accept(e.id)}}},[t._v("允许")]):t._e()],1):t._e(),4===e.status||3===e.status?i("span",[t.isShow("set_employee_permission")?i("m-btn",{nativeOn:{click:function(i){t.changeUserTemp(e.uid)}}},[t._v("权限")]):i("m-btn",{nativeOn:{click:function(i){t.lookUserTemp(e.uid)}}},[t._v("查看")]),t.isShow("dismiss_employee")?i("m-btn",{nativeOn:{click:function(i){t.company_dismission(e.id)}}},[t._v("解除")]):t._e()],1):t._e()])])])}))])])])],1),t._v(" "),i("m-col",{staticClass:"col xs-12 lg-4"},[i("panel",{staticClass:"p-b16 m-b16"},[i("div",{staticClass:"panel-title flex-space-between",attrs:{slot:"title"},slot:"title"},[i("div",[t._v("权限模板")]),t._v(" "),i("div",[t.isShow("add_permission_template")?i("m-btn",{nativeOn:{click:function(e){t.addTemp(e)}}},[t._v("新增权限模板")]):t._e()],1)]),t._v(" "),i("div",{staticClass:"panel-body"},[i("m-table",{staticClass:"hover striped block-table pad-table"},[i("col",{attrs:{width:"30%"}}),t._v(" "),i("col",{attrs:{width:"30%"}}),t._v(" "),i("col",{attrs:{width:"40%"}}),t._v(" "),i("thead",[i("tr",[i("th",[t._v("模板名称")]),t._v(" "),i("th",[t._v("备注")]),t._v(" "),i("th",[t._v("操作")])])]),t._v(" "),i("tbody",t._l(t.module,function(e){return i("tr",[i("td",[t._v(t._s(e.name))]),t._v(" "),i("td",[t._v(t._s(0===e.type?"预设":"新增"))]),t._v(" "),i("td",[0===e.type?i("span",[t.isShow("modify_permission_template")?i("m-btn",{nativeOn:{click:function(i){t.lookUserTemp(e.id)}}},[t._v("查看")]):t._e()],1):i("span",[t.isShow("modify_permission_template")?i("m-btn",{nativeOn:{click:function(i){t.changeTemp(e.id)}}},[t._v("修改")]):t._e(),t._v(" "),t.isShow("delete_permission_template")?i("m-btn",{nativeOn:{click:function(i){t.deleteTemp(e)}}},[t._v("删除")]):t._e()],1)])])}))])],1)])],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=6.931b9181e23f7dafccf1.js.map