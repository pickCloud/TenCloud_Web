webpackJsonp([21],{278:function(t,e,a){a(556);var n=a(0)(a(461),a(626),null,null);t.exports=n.exports},461:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={data:function(){return{inviteData:{cid:2,company_name:"",contact:"",setting:""},personData:{id_card:"",code:"",name:"",mobile:""}}},methods:{checkData:function(){var t=this;return""!==this.personData.mobile&&/^1[34578]\d{9}$/.test(this.personData.mobile)?this.personData.name?this.personData.name?!this.personData.id_card&&this.isId_card()?(this.$toast("请填写身份证","cc"),!1):void s.default.http("company_apply",this.personData,"post").then(function(e){t.$toast("申请成功,待审核","cc"),t.$router.push({name:"UserInfo"})}).catch(function(e){t.$toast(e.message,"cc")}):(this.$toast("请填写联系人","cc"),!1):(this.$toast("请填写企业名称","cc"),!1):(this.$toast("请填写正确的手机号码","cc"),!1)},isId_card:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id_card";return!!this.inviteData.setting&&this.inviteData.setting.match(t)}},created:function(){var t=this;this.personData.mobile=this.$root.userinfo.mobile,this.personData.code=this.$route.query.code,s.default.http("company_code","","get","?code="+this.$route.query.code).then(function(e){t.inviteData=e.data}).catch(function(t){})},beforeDestroy:function(){}}},523:function(t,e,a){e=t.exports=a(272)(),e.push([t.i,".personContent{width:430px;padding:16px 0}.personContent input{border:1px solid #2f3543;outline:none;width:100%;padding:10px;border-radius:5px;background-color:transparent;color:#7f8da4}.personContent input:focus{border:1px solid #7f8da4}.personContent .btn{width:100%}","",{version:3,sources:["D:/tenWeb/src/components/CompleteData.vue"],names:[],mappings:"AACA,eACE,YAAa,AACb,cAAgB,CACjB,AACD,qBACI,yBAA0B,AAC1B,aAAc,AACd,WAAY,AACZ,aAAc,AACd,kBAAmB,AACnB,6BAA8B,AAC9B,aAAe,CAClB,AACD,2BACM,wBAA0B,CAC/B,AACD,oBACI,UAAY,CACf",file:"CompleteData.vue",sourcesContent:["\n.personContent {\n  width: 430px;\n  padding: 16px 0;\n}\n.personContent input {\n    border: #2f3543 1px solid;\n    outline: none;\n    width: 100%;\n    padding: 10px;\n    border-radius: 5px;\n    background-color: transparent;\n    color: #7f8da4;\n}\n.personContent input:focus {\n      border: #7f8da4 1px solid;\n}\n.personContent .btn {\n    width: 100%;\n}\n"],sourceRoot:""}])},556:function(t,e,a){var n=a(523);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(273)("d63b2a10",n,!0)},626:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-pad page-machine-detail"},[a("m-row",{attrs:{gutter:16}},[a("m-col",{staticClass:"xs-12"},[a("panel",{staticClass:"m-b16"},[a("div",{staticClass:"panel-title flex-space-between",attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"bold m-r8"},[t._v("完善资料")])]),t._v(" "),a("div",{staticClass:"p-16"},[a("div",{staticClass:"flex-flex"},[a("span",{staticClass:"primary_txt"},[t._v(t._s(t.inviteData.contact)+" ")]),t._v(" "),a("span",[t._v("邀请你加入")]),t._v(" "),a("span",{staticClass:"primary_txt"},[t._v(" "+t._s(t.inviteData.company_name))])]),t._v(" "),a("div",[t._v("请先完善你的资料")]),t._v(" "),a("div",{staticClass:"personContent"},[a("div",{staticClass:"m-b16"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.personData.name,expression:"personData.name"}],attrs:{placeholder:"姓名"},domProps:{value:t.personData.name},on:{input:function(e){e.target.composing||t.$set(t.personData,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"m-b16"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.personData.mobile,expression:"personData.mobile"}],attrs:{placeholder:"手机号码"},domProps:{value:t.personData.mobile},on:{input:function(e){e.target.composing||t.$set(t.personData,"mobile",e.target.value)}}})]),t._v(" "),t.isId_card("id_card")?a("div",{staticClass:"m-b16"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.personData.id_card,expression:"personData.id_card"}],attrs:{placeholder:"身份证号码"},domProps:{value:t.personData.id_card},on:{input:function(e){e.target.composing||t.$set(t.personData,"id_card",e.target.value)}}})]):t._e(),t._v(" "),a("m-btn",{staticClass:"btn primary_bg grey-dark_txt",attrs:{hsize:50},nativeOn:{click:function(e){t.checkData(e)}}},[t._v("提交")])],1)])])],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=21.d131670fbfee103ab120.js.map