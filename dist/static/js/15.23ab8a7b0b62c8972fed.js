webpackJsonp([15],{275:function(t,e,s){s(562);var a=s(0)(s(458),s(641),null,null);t.exports=a.exports},298:function(t,e,s){t.exports=s.p+"static/img/spin.84f7c1b.gif"},441:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(53),i=a(o),n=s(103),r=a(n);e.default={data:function(){return{sokect:null,tcmname:"",formdata:{name:"",public_ip:"",username:"",passwd:"",cluster_id:0},status:"save",clusters:[],notes:[]}},methods:{addHost:function(){var t=this;this.socket?this.sendHostData():this.initSocket(function(e){console.log(t.socket),t.sendHostData()})},sendHostData:function(){return""===this.formdata.name?void this.$toast("机器名称不能为空","cc"):""===this.formdata.public_ip?void this.$toast("ip不能为空","cc"):(this.socket.send((0,i.default)(this.formdata)),void(this.status="waiting"))},selectCluster:function(t){this.formdata.cluster_id=t},initClusters:function(){var t=this;this.rid=this.formdata.cluster_id=this.$route.params.id,0===parseInt(this.rid)?this.$axios.http("clusters").then(function(e){t.clusters=e.data,t.formdata.cluster_id=t.clusters[0].id}):this.initSocket()},initSocket:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;console.log(r.default.wsURL+r.default.server_add.u),this.socket=new WebSocket(r.default.wsURL+r.default.server_add.u,{headers:{Cookie:1}}),this.socket.onopen=function(t){e&&e(),console.log(t)},this.socket.onmessage=function(e){t.notes.push(e.data),"success"===e.data?t.$router.push({name:"Machines"}):"open"!==e.data&&(t.status="save")},this.socket.onclose=function(e){t.timeoutajax&&clearTimeout(t.timeoutajax),t.socket=null,console.log("socket has closed")},this.timeoutajax&&clearTimeout(this.timeoutajax),this.timeoutajax=setTimeout(function(e){t.status="error",t.$toast("异常，请联系客服","cc"),t.socket.close(),clearTimeout(t.timeoutajax)},6e5)}},created:function(){this.initClusters()},beforeDestroy:function(){this.socket&&this.socket.close()}}},458:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(441),o=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={mixins:[o.default]}},525:function(t,e,s){e=t.exports=s(265)(),e.push([t.i,".machineAdd-note p{margin-bottom:8px}","",{version:3,sources:["/Users/zyb/TenCloud_Web/src/components/MachineAdd.vue"],names:[],mappings:"AACA,mBACE,iBAAmB,CACpB",file:"MachineAdd.vue",sourcesContent:["\n.machineAdd-note p {\n  margin-bottom: 8px;\n}\n"],sourceRoot:""}])},562:function(t,e,s){var a=s(525);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(266)("42481d07",a,!0)},641:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"machine-add page-pad"},[a("panel",{attrs:{title:"添加主机"}},[a("table",{staticClass:"add-table"},[a("col",{attrs:{width:"20%"}}),t._v(" "),a("col",{attrs:{width:"80%"}}),t._v(" "),a("tbody",[a("tr",[a("td",{staticClass:"text-center"},[t._v("主机名称")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.name,expression:"formdata.name"}],attrs:{type:"text"},domProps:{value:t.formdata.name},on:{input:function(e){e.target.composing||t.$set(t.formdata,"name",e.target.value)}}})])]),t._v(" "),a("tr",[a("td",{staticClass:"text-center"},[t._v("IP")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.public_ip,expression:"formdata.public_ip"}],attrs:{type:"text"},domProps:{value:t.formdata.public_ip},on:{input:function(e){e.target.composing||t.$set(t.formdata,"public_ip",e.target.value)}}})])]),t._v(" "),a("tr",[a("td",{staticClass:"text-center"},[t._v("用户名")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.username,expression:"formdata.username"}],attrs:{type:"text"},domProps:{value:t.formdata.username},on:{input:function(e){e.target.composing||t.$set(t.formdata,"username",e.target.value)}}})])]),t._v(" "),a("tr",[a("td",{staticClass:"text-center"},[t._v("密码")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.passwd,expression:"formdata.passwd"}],attrs:{type:"text"},domProps:{value:t.formdata.passwd},on:{input:function(e){e.target.composing||t.$set(t.formdata,"passwd",e.target.value)}}})])])])]),t._v(" "),"waiting"===t.status?a("div",{staticClass:"p-16"},[a("img",{staticClass:"vam",attrs:{src:s(298),alt:""}}),t._v(" "),a("span",{staticClass:"vam"},[t._v("等待连接 大约需要1分钟")])]):t._e(),t._v(" "),"error"===t.status?a("div",{staticClass:"p-16"},[a("div",{staticClass:"hongse-text"},[t._v("异常，请联系客服")])]):t._e(),t._v(" "),"save"===t.status?a("div",{staticClass:"p-16 text-center"},[a("m-btn",{staticClass:"primary_bg no-radius grey-dark_txt",nativeOn:{click:function(e){t.addHost(e)}}},[t._v("确定添加")])],1):t._e()]),t._v(" "),a("panel",{staticClass:"machineAdd-note m-t16",attrs:{title:"构建过程"}},[a("div",{staticClass:"p-16",staticStyle:{"overflow-y":"auto","max-height":"300px"},attrs:{id:"scroll"}},t._l(t.notes,function(e){return a("p",[t._v(t._s(e))])}))])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=15.23ab8a7b0b62c8972fed.js.map