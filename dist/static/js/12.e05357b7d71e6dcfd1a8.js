webpackJsonp([12],{272:function(t,e,a){a(559);var s=a(0)(a(454),a(638),null,null);t.exports=s.exports},293:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(99),n=function(t){return t&&t.__esModule?t:{default:t}}(s),i={theme:"comb-msg",hasClose:!1,buttons:[{label:"确定",theme:""},{label:"取消",theme:""}]};e.default={methods:{popperDelete:function(t,e){var a=this.$createElement;this.$confirm((0,n.default)({},i,{content:a("div",[a("img",{attrs:{src:"./static/img/error_icon.png",class:"vam m-r16"}}),a("span",{attrs:{class:"vam"}},t)])}),function(t){0===(arguments.length<=1?void 0:arguments[1])&&e&&e.call(),t.actionPopper(!1)})},popperInfo:function(t,e,a){this.$confirm((0,n.default)({},i,{content:t}),function(t){0===(arguments.length<=1?void 0:arguments[1])?e&&e.call():a&&a.call(),t.actionPopper(!1)})},popperWaiting:function(t){var e=this.$createElement;return this.$confirm({theme:"comb-msg",hasClose:!1,maskClose:!1,content:e("span",null,[e("img",{attrs:{src:"./static/img/spin.gif",class:"vam m-r8"}}),e("span",{attrs:{class:"vam"}},t)]),buttons:[]})}}}},298:function(t,e,a){t.exports=a.p+"static/img/spin.84f7c1b.gif"},427:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={business:{0:["运行中","primary_bg alpha-black_txt"],1:["已停止","pink_bg alpha-black_txt"],2:["启动中","primary_bg alpha-black_txt"],3:["停止中","pink_bg alpha-black_txt"],4:["满负载","pink_bg alpha-black_txt"]},machine:{Pending:["准备中","primary_bg alpha-black_txt","run"],Stopped:["已停止","pink_bg alpha-black_txt","stop"],Starting:["启动中","primary_bg alpha-black_txt","run","server_start"],Running:["运行中","primary_bg alpha-black_txt","run"],Stopping:["停止中","pink_bg alpha-black_txt","stop","server_stop"],Deleted:["已释放","pink_bg alpha-black_txt","stop"]},server:{server_start:[3,"Starting","Running","机器启动中，请耐心等待","开机"],server_stop:[30,"Stopping","Stopped","机器关机中，请耐心等待","关机"],server_reboot:[30,"Stopping","Running","机器重启中，请耐心等待","重启机器"]}}},437:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(53),i=s(n),o=a(427),r=s(o),c=a(293),l=s(c),p=a(100),u=s(p);e.default={mixins:[l.default],filters:{mstatus:function(t){return r.default.machine[t][0]},mclass:function(t){return r.default.machine[t][1]}},data:function(){return{verdata:[],version:{},container_name:"",notes:[],isDoing:!1}},methods:{getVerList:function(){var t=this,e=void 0===this.$route.params.machines;this.$axios.http("project_image","","get",this.$route.params.name+"/versions").then(function(a){0===a.status&&(t.verdata=a.data.map(function(t,e){return{label:t.version,value:t.version}}),t.version=e?t.verdata[0]:t.$route.params.version)})},gomlist:function(){var t=this.$route.params;t.version=this.version,t.container_name=this.container_name,this.$router.replace({name:"Machines",params:t})},getMachineIps:function(){var t=[];return this.$route.params.machines&&(t=this.$route.params.machines),t.map(function(t,e){return{public_ip:t.public_ip}})},startDeploy:function(){if(!/^[a-z0-9]+$/.test(this.container_name))return this.$toast("容器名称仅允许英文小写字母","cc"),!1;if(""===this.image_name)return void this.$toast("容器名称不能为空","cc");var t={image_name:this.$route.params.image_name+":"+this.version.value,container_name:this.container_name,project_id:this.$route.params.id,ips:this.getMachineIps()};if(0===t.ips.length)return void this.$toast("请选择机器","cc");this.isDoing=!0,this.initSocket("",t)},initSocket:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments[1];this.socket=new WebSocket(u.default.wsURL+u.default.project_deployment.u+"?Cid="+this.$axios.token.cid+"&Authorization="+this.$axios.token.token);var s=document.getElementById("scroll");this.socket.onopen=function(s){e&&e(),t.socket.send((0,i.default)(a))},this.socket.onmessage=function(e){if("open"===e.data)t.notes.push("start");else if("success"===e.data){var a=t;t.popperInfo("部署成功",function(){a.$router.replace({name:"ProjectDetail",params:{id:a.$route.params.id}})}),t.isDoing=!1}else"failure"===e.data?(t.popperInfo("部署失败"),t.isDoing=!1):(t.notes.push(e.data),s&&s.scrollHeight&&(s.scrollTop=s.scrollHeight))},this.socket.onclose=function(e){t.timeoutajax&&clearTimeout(t.timeoutajax),t.socket=null,t.isDoing=!1,console.log("socket has closed")},this.timeoutajax&&clearTimeout(this.timeoutajax),this.timeoutajax=setTimeout(function(e){t.status="error",t.$toast("异常，请联系客服","cc"),t.socket.close(),clearTimeout(t.timeoutajax)},6e5)}},computed:{machines:function(){return this.$route.params.machines||[]}},created:function(){this.$route.params.name?(this.image_name=this.$route.params.image_name||"",this.container_name=this.$route.params.container_name||"",this.getVerList(),this.$store.commit("sitepath/SET_PATH",[{name:"Main",cn:"主页"},{name:"Projects",cn:"项目列表"},{name:"ProjectDetail",cn:this.$route.params.name,params:{id:this.$route.params.id}},{cn:"项目部署"}])):this.$router.replace({name:"ProjectDetail",params:{id:this.$route.params.id}})}}},454:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(437),n=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={mixins:[n.default]}},522:function(t,e,a){e=t.exports=a(265)(),e.push([t.i,".deploy-note h5{font-weight:700}.deploy-note li{padding:8px 0}","",{version:3,sources:["/Users/zyb/TenCloud_Web/src/components/Deploy.vue"],names:[],mappings:"AACA,gBACE,eAAkB,CACnB,AACD,gBACE,aAAe,CAChB",file:"Deploy.vue",sourcesContent:["\n.deploy-note h5 {\n  font-weight: bold;\n}\n.deploy-note li {\n  padding: 8px 0;\n}\n"],sourceRoot:""}])},559:function(t,e,a){var s=a(522);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(266)("068a6caf",s,!0)},638:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-pad page-deploy"},[s("panel",{staticClass:"m-b16",attrs:{title:"部署"}},[s("table",{staticClass:"add-table"},[s("col",{attrs:{width:"20%"}}),t._v(" "),s("col",{attrs:{width:"80%"}}),t._v(" "),s("tbody",[s("tr",[s("td",{staticClass:"text-center"},[t._v("选择版本")]),t._v(" "),s("td",[s("m-select",{attrs:{datas:t.verdata,sizeh:50},model:{value:t.version,callback:function(e){t.version=e},expression:"version"}})],1)]),t._v(" "),s("tr",[s("td",{staticClass:"text-center"},[t._v("容器名称")]),t._v(" "),s("td",{staticStyle:{position:"relative"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.container_name,expression:"container_name"}],attrs:{type:"text"},domProps:{value:t.container_name},on:{input:function(e){e.target.composing||(t.container_name=e.target.value)}}}),t._v(" "),s("p",{staticClass:"deploy-name_tip"},[t._v("项目部署后以容器的形式运行：容器名称仅允许英文小写字母")])])]),t._v(" "),s("tr",[s("td",{staticClass:"text-center"},[t._v("选择服务器")]),t._v(" "),s("td",{staticClass:"p-lr-16 p-b16"},[s("div",{staticStyle:{padding:"16px 0"}},[s("m-btn",{nativeOn:{click:function(e){t.gomlist(e)}}},[t._v("进入机器列表")])],1),t._v(" "),t.machines.length>0?s("div",{staticClass:"git-list"},[s("table",{staticClass:"table hover striped machines-table theme-dft"},[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("服务商")]),t._v(" "),s("th",[t._v("地址")]),t._v(" "),s("th",[t._v("IP")]),t._v(" "),s("th",[t._v("状态")])])]),t._v(" "),s("tbody",t._l(t.machines,function(e,a){return s("tr",[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.provider))]),t._v(" "),s("td",[t._v(t._s(e.address))]),t._v(" "),s("td",[t._v(t._s(e.public_ip))]),t._v(" "),s("td",[s("span",{staticClass:"plate"},[t._v(t._s(e.machine_status))])])])}))])]):t._e()])])])]),t._v(" "),t.isDoing?s("div",{staticClass:"p-16 text-center"},[s("img",{staticClass:"vam",attrs:{src:a(298)}}),t._v(" "),s("span",{staticClass:"vam"},[t._v("部署中请耐心等待...")])]):s("div",{staticClass:"p-16 text-center"},[s("m-btn",{staticClass:"primary_bg no-radius grey-dark_txt",nativeOn:{click:function(e){t.startDeploy(e)}}},[t._v("开始部署")])],1)]),t._v(" "),s("panel",{staticClass:"deploy-note",attrs:{title:"部署日志"}},[s("div",{staticClass:"p-16"},[s("div",{staticClass:"panel",attrs:{id:"scroll"}},t._l(t.notes,function(e){return s("p",[t._v(t._s(e))])}))])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=12.e05357b7d71e6dcfd1a8.js.map