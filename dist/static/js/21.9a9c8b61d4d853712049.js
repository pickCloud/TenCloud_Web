webpackJsonp([21],{279:function(e,t,s){s(534);var a=s(0)(s(462),s(607),null,null);e.exports=a.exports},462:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(6),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={data:function(){return{type:0,searchWord:"",messages:[],page:1,isStillHave:!0,mode:1,selects:[{label:"全部",value:"0"},{label:"加入企业",value:"1"},{label:"企业变更",value:"2"},{label:"离开企业",value:"3"}],selectValue:{label:"全部",value:"0"}}},methods:{selectType:function(e){this.type=e,this.page=1,this.messages=[],this.isStillHave=!0,this.getMessages()},getMessages:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];console.log(this.selectValue.value);var s="0"===this.selectValue.value?"":"&mode="+this.selectValue.value;i.default.http("message_get","","get",this.type+"?page="+this.page+s).then(function(s){s.data?t?e.messages=s.data:s.data.forEach(function(t){e.messages.push(t)}):e.isStillHave=!1})},iscroll:function(e){e.target.scrollHeight<e.target.scrollTop+e.target.offsetHeight+1&&this.isStillHave&&(this.page++,this.getMessages())},messagesType:function(e){switch(e){case 1:return"加入企业";case 2:return"企业变更"}},messagesTip:function(e){switch(e){case 1:return"你可以核对信息后重新提交申请";case 2:return"你可以进入企业了";case 3:case 0:return""}},messagesBtn:function(e){switch(e){case 1:return"重新提交";case 2:return"进入企业";case 3:return"马上查看";case 0:return"马上审核"}},btn:function(e){var t=[];switch(e.tip&&(t=e.tip.split(":")),e.sub_mode){case 1:return this.$router.push({name:"CompleteData",query:{code:t[1]}});case 2:case 3:case 0:return this.$router.push({name:"FirmData",params:{id:t[0]}})}}},created:function(){this.getMessages()},beforeDestroy:function(){},watch:{"selectValue.value":function(e){this.page=1,this.getMessages(!0)},searchWord:function(e){var t=this;if(e){var s=0===this.type?"":"status="+this.type,a="0"===this.selectValue.value?"":"&mode="+this.selectValue.value,i="&keywords="+e;this.$axios.http("message_search","","get","?"+s+a+i).then(function(e){e.data&&(t.messages=e.data)})}else this.getMessages()}}}},497:function(e,t,s){t=e.exports=s(265)(),t.push([e.i,".messages-type{color:#556278}.messages-content{width:450px}","",{version:3,sources:["/Users/zyb/TenCloud_Web/src/components/Messages.vue"],names:[],mappings:"AACA,eACE,aAAe,CAChB,AACD,kBACE,WAAa,CACd",file:"Messages.vue",sourcesContent:["\n.messages-type {\n  color: #556278;\n}\n.messages-content {\n  width: 450px;\n}\n"],sourceRoot:""}])},534:function(e,t,s){var a=s(497);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(266)("3714e9c1",a,!0)},607:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page-pad page-machine-detail"},[s("m-row",{attrs:{gutter:16}},[s("m-col",{staticClass:"xs-12"},[s("panel",{staticClass:"m-b16"},[s("div",{staticClass:"panel-title flex-space-between",attrs:{slot:"title"},slot:"title"},[s("div",{staticClass:"flex-felx"},[s("m-btn",{staticClass:"btn theme-dft",class:0==e.type?"select-active":"",nativeOn:{click:function(t){e.selectType(0)}}},[e._v("最新消息")]),e._v(" "),s("m-btn",{staticClass:"btn theme-dft",class:1==e.type?"select-active":"",nativeOn:{click:function(t){e.selectType(1)}}},[e._v("历史消息")])],1),e._v(" "),s("div",{staticClass:"login-form_inp flex-space-between",staticStyle:{height:"30px","line-height":"30px"}},[s("m-select",{staticStyle:{"border-bottom":"1px solid #464e5c","border-left":"1px solid #464e5c","border-top":"1px solid #464e5c"},attrs:{datas:e.selects,sizeh:36,sizew:300},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchWord,expression:"searchWord"}],staticStyle:{height:"38px","line-height":"38px"},attrs:{type:"text",placeholder:"输入关键字"},domProps:{value:e.searchWord},on:{input:function(t){t.target.composing||(e.searchWord=t.target.value)}}})],1)]),e._v(" "),e.messages.length>0?s("ul",{staticClass:"ul-li-border-bottom",staticStyle:{overflow:"auto",height:"800px"},on:{scroll:e.iscroll}},e._l(e.messages,function(t){return s("li",{staticClass:"flex-flex m-l16 p-b16 m-t16"},[s("div",{staticClass:"m-l16"},[s("div",{staticClass:"messages-type m-b16"},[s("i",{staticClass:"iconfont icon-xiaoxi1"}),e._v(" "),s("span",[e._v(e._s(e.messagesType(t.mode)))]),e._v(" "),s("span",[e._v(e._s(t.update_time))])]),e._v(" "),s("div",{staticClass:"messages-content line-25"},[e._v("\n                "+e._s(t.content)+"\n              ")]),e._v(" "),3!==t.mode?s("div",{staticClass:"btn primary_txt",on:{click:function(s){e.btn(t)}}},[e._v(e._s(e.messagesBtn(t.sub_mode)+" >"))]):e._e()])])})):s("div",{staticClass:"p-16",staticStyle:{overflow:"auto",height:"600px"}},[e._v("暂无消息")])])],1)],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=21.9a9c8b61d4d853712049.js.map