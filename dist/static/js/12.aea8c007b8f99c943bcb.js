webpackJsonp([12],{283:function(t,s,a){var e=a(0)(a(467),a(624),null,null);t.exports=e.exports},300:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(101),i=function(t){return t&&t.__esModule?t:{default:t}}(e),n={theme:"comb-msg",hasClose:!1,buttons:[{label:"确定",theme:""},{label:"取消",theme:""}]};s.default={methods:{popperDelete:function(t,s){var a=this.$createElement;this.$confirm((0,i.default)({},n,{content:a("div",[a("img",{attrs:{src:"./static/img/error_icon.png",class:"vam m-r16"}}),a("span",{attrs:{class:"vam"}},t)])}),function(t){0===(arguments.length<=1?void 0:arguments[1])&&s&&s.call(),t.actionPopper(!1)})},popperInfo:function(t,s,a){this.$confirm((0,i.default)({},n,{content:t}),function(t){0===(arguments.length<=1?void 0:arguments[1])?s&&s.call():a&&a.call(),t.actionPopper(!1)})},popperWaiting:function(t){var s=this.$createElement;return this.$confirm({theme:"comb-msg",hasClose:!1,maskClose:!1,content:s("span",null,[s("img",{attrs:{src:"./static/img/spin.gif",class:"vam m-r8"}}),s("span",{attrs:{class:"vam"}},t)]),buttons:[]})}}}},305:function(t,s,a){t.exports=a.p+"static/img/spin.84f7c1b.gif"},433:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={app_performance:["入量","出量","KB"],server_performance:["入带宽","出带宽","KB/S"]};s.default={data:function(){return{cpu:[],memory:[],block:[],disk:[],nets:[],maxChartNum:8}},methods:{formatDate:function(t){var s=this;return[t.map(function(t,a){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),t[1].percent,s.tipinfo(t)]})]},formatNet:function(t){var s=this;return[t.map(function(t,a){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),parseFloat(t[1].input),s.netTip(t)]}),t.map(function(t,s){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),parseFloat(t[1].output)]})]},netTip:function(t){var s=e[this.performance],a='<p class="tooltip-title">'+new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss")+'</p><p class="tooltip-body">';return a+='<i class="tooltip-dian" style="background-color: #95c099;"></i>'+s[0]+"："+t[1].input+s[2],(a+='<br><i class="tooltip-dian" style="background-color: #eb6565;"></i>'+s[1]+"："+t[1].output+s[2])+"</p>"},tipinfo:function(t){var s=t[1],a='<p class="tooltip-title">'+new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss")+'</p><p class="tooltip-body"><i class="tooltip-dian"></i>使用率：'+s.percent+"%";return s.free&&(a+='<br><i class="tooltip-dian"></i>空余：'+this.toG(s.free)+"G"),s.total&&(a+='<br><i class="tooltip-dian"></i>总量：'+this.toG(s.total)+"G"),a+"</p>"},toG:function(t){return(t/1024/1024/1024).toFixed(2)},getPerformance:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=(new Date).getTime(),i=e-6e4*s;this.performanceData.start_time=Math.floor(i/1e3),this.performanceData.end_time=Math.floor(e/1e3),this.performanceData.type=0,this.$axios.http(this.performance,this.performanceData,"post").then(function(e){if(0===e.status){if(a){var i=t;t.cpu[0]&&t.cpu[0].data&&i.cpu[0].data.splice(0,i.cpu[0].data.length),t.memory[0]&&t.memory[0].data&&i.memory[0].data.splice(0,i.memory[0].data.length),t.nets[0]&&t.nets[0].data&&t.nets[1]&&t.nets[1].data&&(i.nets[0].data.splice(0,i.nets[0].data.length),i.nets[1].data.splice(0,i.nets[1].data.length)),t.disk[0]&&t.disk[0].data&&i.disk[0].data.splice(0,i.disk[0].data.length)}var n=e.data;n.cpu&&t.chartData("cpu",t.formatDate(n.cpu)),n.memory&&t.chartData("memory",t.formatDate(n.memory)),n.disk&&t.chartData("disk",t.formatDate(n.disk)),n.block&&t.chartData("block",t.formatNet(n.block)),n.net&&t.chartData("nets",t.formatNet(n.net)),60===s&&(t.temptimeout=setTimeout(function(s){t.getPerformance(1),clearTimeout(t.temptimeout)},6e4))}})},btnChange:function(t){var s=0;switch(t){case 0:s=60;break;case 1:s=1440;break;case 2:s=10080;break;case 3:s=43200}this.getPerformance(s,!0)},chartData:function(t,s){var a=this;s.forEach(function(s,e){a[t][e]||a.$set(a[t],e,{data:[]});var i=a[t][e].data;s.slice(-a.maxChartNum).forEach(function(t,s){i.slice(-1)[0]&&i.slice(-1)[0][0]===t[0]||(i.length>a.maxChartNum&&i.shift(),i.push(t))})})}},mounted:function(){},beforeDestroy:function(){this.temptimeout&&clearTimeout(this.temptimeout)}}},434:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={business:{0:["运行中","primary_bg alpha-black_txt"],1:["已停止","pink_bg alpha-black_txt"],2:["启动中","primary_bg alpha-black_txt"],3:["停止中","pink_bg alpha-black_txt"],4:["满负载","pink_bg alpha-black_txt"]},machine:{Pending:["准备中","primary_bg alpha-black_txt","run"],Stopped:["已停止","pink_bg alpha-black_txt","stop"],Starting:["启动中","primary_bg alpha-black_txt","run","server_start"],Running:["运行中","primary_bg alpha-black_txt","run"],Stopping:["停止中","pink_bg alpha-black_txt","stop","server_stop"],Deleted:["已释放","pink_bg alpha-black_txt","stop"]},server:{server_start:[3,"Starting","Running","机器启动中，请耐心等待","开机"],server_stop:[30,"Stopping","Stopped","机器关机中，请耐心等待","关机"],server_reboot:[30,"Stopping","Running","机器重启中，请耐心等待","重启机器"]}}},448:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{isInfoEditor:!1,infoEditorTemp:{}}},methods:{getValueByKey:function(t){return t.split(".").reduce(function(t,s){return t[s]},this)},editorBegin:function(){var t=this;this.isInfoEditor=!0,this.editorElements||(this.editorElements=this.$el.querySelectorAll(".edirot-input")),this.editorElements.forEach(function(s,a){s.removeAttribute("readonly"),t.infoEditorTemp[s.dataset.key]=s.value})},editorSure:function(){var t=this,s={},a=!1;this.isInfoEditor=!1,this.editorElements.forEach(function(e,i){e.setAttribute("readonly","readonly");var n=t.getValueByKey(e.dataset.key);n!==t.infoEditorTemp[e.dataset.key]&&(s[e.dataset.name]=n,a=!0)}),a&&(s.id=this.$route.params.id,this.$axios.http(this.updateApi,s,"post").then(function(s){t.$toast(s.message,"cc")}))},setValueBuKey:function(t,s){var a=this,e=t.split(".");e.forEach(function(t,i){i===e.length-1?a[t]=s:a=a[t]})},editorCancel:function(){var t=this;this.isInfoEditor=!1,this.editorElements.forEach(function(s,a){s.setAttribute("readonly","readonly"),t.setValueBuKey(s.dataset.key,t.infoEditorTemp[s.dataset.key])})}}}},450:function(t,s,a){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=a(21),n=e(i),o=a(100),r=e(o),l=a(434),c=e(l),p=a(448),m=e(p),u=a(433),d=e(u),_=a(300),v=e(_),h=a(51);s.default={mixins:[d.default,m.default,v.default],data:function(){return{machineid:-1,isWaiting:!1,waitingTip:"",isOpen:!1,isDisabled:!1,updateApi:"server_update",performance:"server_performance",btnidx:0,performanceData:{},baseInfo:{cluster_id:-1,cluster_name:""},businessInfo:{contract:{},provider:""},sysInfo:{config:{}}}},methods:(0,r.default)({},(0,h.mapMutations)("mechineDetail",["setApplists","setOperations"]),(0,h.mapActions)("mechineDetail",["getServerDetail","getServerContainers","getServerOperation"]),{getApiData:function(){var t=this;this.performanceData.id=this.machineid=this.$route.params.id,this.getServerDetail(this.machineid).then(function(s){0===s.status&&(t.baseInfo=s.data.basic_info,t.businessInfo=s.data.business_info,t.sysInfo=s.data.system_info,"run"===t.machineStatus[2]&&(t.isOpen=!0),"stop"===t.machineStatus[2]&&(t.isOpen=!1),t.statusApiSuf=t.baseInfo.instance_id+"/status","Starting"!==t.baseInfo.machine_status&&"Stopping"!==t.baseInfo.machine_status||t.loopGetStatus(t.machineStatus[3]),t.$store.commit("sitepath/SET_PATH",[{name:"Main",cn:"主页"},{name:"Machines",cn:"机器列表"},{cn:t.baseInfo.name}]))}),this.getServerContainers(this.machineid),this.getServerOperation({object_type:0,object_id:this.machineid})},machineChange:function(){this.isDisabled=!0,this.isOpen?this.machineCtr("server_start"):this.machineCtrPop("server_stop")},machineCtrPop:function(t){var s=this,a=c.default.server[t];this.popperInfo("您确定要 "+a[4]+" 吗?",function(a){s.machineCtr(t)},function(t){s.isOpen=!s.isOpen,s.isDisabled=!1})},machineCtr:function(t){var s=this;this.$axios.http(t,"","get",this.machineid).then(function(a){0===a.status?s.loopGetStatus(t):s.$toast(a.message,"cc")},function(t){console.log(void 0===t?"undefined":(0,n.default)(t))})},loopGetStatus:function(t){var s=this,a=c.default.server[t];this.waitingTip=a[3],this.isWaiting=!0,this.baseInfo.machine_status=a[1],this.yqvalue=a[2],this.loopIV=setInterval(function(t){s.$axios.http("server_status","","get",s.statusApiSuf).then(function(t){0===t.status&&(s.baseInfo.machine_status=t.data,t.data===s.yqvalue&&(s.isWaiting=!1,s.isDisabled=!1,clearInterval(s.loopIV)))})},1e3*a[0])},deleteMachine:function(){var t=this;this.popperDelete(this.baseInfo.name,function(s){if(t.isOpen)return t.popperInfo("请关机后再删除"),!1;t.$axios.http("server_del",{id:[t.$route.params.id]},"post").then(function(s){0===s.status&&t.$router.push({name:"Machines"}),t.$toast(s.message,"cc")})})},getHistory:function(){this.$router.push({name:"ChartHistory",params:{id:this.$route.params.id,name:this.baseInfo.name}})}}),computed:(0,r.default)({},(0,h.mapGetters)("mechineDetail",["applists","operations"]),{businessStatus:function(){return c.default.business[this.baseInfo.business_status]||[]},machineStatus:function(){var t="";if(this.baseInfo.machine_status)switch(this.baseInfo.machine_status){case"准备中":t=["Pending","primary_bg alpha-black_txt","run"];break;case"已停止":t=["Stopped","pink_bg alpha-black_txt","stop"];break;case"启动中":t=["Starting","primary_bg alpha-black_txt","run","server_start"];break;case"运行中":t=["Running","primary_bg alpha-black_txt","run"];break;case"停止中":t=["Stopping","pink_bg alpha-black_txt","stop","server_stop"];break;case"已释放":t=["Deleted","pink_bg alpha-black_txt","stop"]}return t||[]}}),created:function(){this.getApiData()},beforeDestroy:function(){this.loopIV&&clearInterval(this.loopIV)}}},467:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(450),i=function(t){return t&&t.__esModule?t:{default:t}}(e);s.default={mixins:[i.default]}},624:function(t,s,a){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-pad page-machine-detail"},[e("m-row",{attrs:{gutter:16}},[e("m-col",{staticClass:"xs-12 lg-8"},[e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title",attrs:{slot:"title"},slot:"title"},[e("span",{staticClass:"bold m-r8"},[t._v("监控")]),t._v(" "),e("div",{staticClass:"right",staticStyle:{"margin-top":"-5px"}},[e("m-btn-group",{staticClass:"m-r8 clearfix",attrs:{idx:t.btnidx},on:{change:t.btnChange}},[e("m-btn",[t._v("1个小时")]),t._v(" "),e("m-btn",[t._v("24小时")]),t._v(" "),e("m-btn",[t._v("1周")]),t._v(" "),e("m-btn",[t._v("1个月")])],1),t._v(" "),e("m-btn",{staticClass:"panel-bg_bg",nativeOn:{click:function(s){t.getHistory(s)}}},[t._v("查看历史")])],1)]),t._v(" "),e("m-row",{staticClass:"mdc-chart",attrs:{gutter:16}},[e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"CPU(%)"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.cpu}})],1)])],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"内存(%)"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.memory,colors:[["#eb6565","rgba(235,101,101,1)","rgba(235,101,101,0)"]]}})],1)])],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"硬盘使用情况(%)"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.disk,colors:[["#95c099","rgba(93,117,103,1)","rgba(93,117,103,0)"]]}})],1)])],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"网络"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.nets,colors:[["#95c099","rgba(93,117,103,1)","rgba(93,117,103,0)"],["#eb6565","rgba(235,101,101,1)","rgba(235,101,101,0)"]]}})],1)])],1)],1)],1)],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-4"},[e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title clearfix",attrs:{slot:"title"},slot:"title"},[e("span",{staticClass:"bold"},[t._v("基本信息")]),t._v(" "),e("span",{staticClass:"right editor-btn-group"},[t.isInfoEditor?t._e():e("span",{on:{click:t.editorBegin}},[e("m-btn",{attrs:{sizeh:-1}},[e("span",{staticClass:"vam"},[t._v("修改")]),t._v(" "),e("i",{staticClass:"iconfont icon-xiugai vam"})])],1),t._v(" "),t.isInfoEditor?e("span",{on:{click:t.editorSure}},[e("m-btn",{attrs:{sizeh:-1}},[t._v("确定")])],1):t._e(),t._v(" "),t.isInfoEditor?e("span",{on:{click:t.editorCancel}},[e("m-btn",{attrs:{sizeh:-1}},[t._v("取消")])],1):t._e()])]),t._v(" "),e("div",{staticClass:"panel-list mcd-ctrl-group"},[e("div",{staticClass:"mcd-ctrl-item"},[t.isWaiting?t._e():e("span",[t._v("开机/关机 "),e("m-switch",{staticClass:"switchMachine",attrs:{disabled:t.isDisabled,sizeh:-1},on:{change:t.machineChange},model:{value:t.isOpen,callback:function(s){t.isOpen=s},expression:"isOpen"}})],1)]),t._v(" "),e("div",{staticClass:"mcd-ctrl-item"},["run"!==t.machineStatus[2]||t.isWaiting?t._e():e("m-btn",{attrs:{sizeh:-1},nativeOn:{click:function(s){t.machineCtrPop("server_reboot")}}},[e("span",{staticClass:"vam"},[t._v("重启")]),t._v(" "),e("i",{staticClass:"icon icon-zhongzhi vam"})])],1),t._v(" "),e("div",{staticClass:"mcd-ctrl-item"},[e("m-btn",{attrs:{sizeh:-1},nativeOn:{click:function(s){t.deleteMachine(s)}}},[e("span",{staticClass:"vam"},[t._v("删除")]),t._v(" "),e("i",{staticClass:"iconfont icon-shanchu vam"})])],1),t._v(" "),e("span",{staticClass:"justify_fix"})]),t._v(" "),t.isWaiting?e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-12"},[e("img",{staticClass:"vam",attrs:{src:a(305),alt:""}}),t._v(" "),e("span",{staticClass:"vam"},[t._v(t._s(t.waitingTip))])])],1):t._e(),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("名称")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.baseInfo.name,expression:"baseInfo.name"}],staticClass:"edirot-input",attrs:{type:"text","data-key":"baseInfo.name","data-name":"name",readonly:""},domProps:{value:t.baseInfo.name},on:{input:function(s){s.target.composing||t.$set(t.baseInfo,"name",s.target.value)}}})])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("服务商")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.businessInfo.provider))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("地址")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.baseInfo.address))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("IP")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.baseInfo.public_ip))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("状态")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[e("span",{staticClass:"plate",class:t.machineStatus[1]},[t._v(t._s(t.baseInfo.machine_status))])])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("添加时间")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[e("span",{staticClass:"plate"},[t._v(t._s(t.baseInfo.created_time))])])],1)],1),t._v(" "),e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title clearfix",attrs:{slot:"title"},slot:"title"},[e("span",{staticClass:"bold"},[t._v("配置信息")])]),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("操作系统")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.sysInfo.config.os_name))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("系统类型")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.sysInfo.config.os_type))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("CPU")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.sysInfo.config.cpu))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("内存")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(parseInt(t.sysInfo.config.memory)/1024)+"G")])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"}),t._v(" "),e("m-col",{staticClass:"xs-8"})],1)],1)],1),t._v(" "),e("m-col",{staticClass:"xs-12"},[e("panel",{staticClass:"p-b16 m-b16"},[e("div",{staticClass:"panel-title",attrs:{slot:"title"},slot:"title"},[e("span",{staticClass:"m-r8"},[t._v("容器列表")]),t._v(" "),e("small",[t._v("(容器: 独立运行的一个或一组应用，以及它们的运行生态环境)\t")])]),t._v(" "),e("div",{staticClass:"panel-body"},[e("m-table",{staticClass:"hover striped block-table centered"},[e("col",{attrs:{width:"15%"}}),t._v(" "),e("col",{attrs:{width:"20%"}}),t._v(" "),e("col",{attrs:{width:"20%"}}),t._v(" "),e("col",{attrs:{width:"25%"}}),t._v(" "),e("col",{attrs:{width:"15%"}}),t._v(" "),e("thead",[e("tr",[e("th",[t._v("containerID")]),t._v(" "),e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("状态")]),t._v(" "),e("th",[t._v("更新时间")]),t._v(" "),e("th",[t._v("操作")])])]),t._v(" "),e("tbody",t._l(t.applists,function(s){return e("tr",[e("td",[t._v(t._s(s[0]))]),t._v(" "),e("td",[t._v(t._s(s[1]))]),t._v(" "),e("td",[t._v(t._s(s[2]))]),t._v(" "),e("td",[t._v(t._s(s[3]))]),t._v(" "),e("td",[e("m-btn",{staticClass:"primary_txt",attrs:{href:{name:"AppDetail",params:{mid:t.$route.params.id,name:s[1],cid:s[0]}}}},[t._v("详情")])],1)])}))])],1)]),t._v(" "),e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title",attrs:{slot:"title"},slot:"title"},[t._v("日志")]),t._v(" "),e("div",{staticClass:"panel-body"},[e("table",{staticClass:"table hover striped theme-dft pad-table"},[e("col",{attrs:{width:"25%"}}),t._v(" "),e("col",{attrs:{width:"25%"}}),t._v(" "),e("col",{attrs:{width:"25%"}}),t._v(" "),e("col",{attrs:{width:"25%"}}),t._v(" "),e("thead",[e("tr",[e("th",[t._v("时间")]),t._v(" "),e("th",[t._v("行为")]),t._v(" "),e("th",[t._v("状态")]),t._v(" "),e("th",[t._v("操作人")])])]),t._v(" "),e("tbody",t._l(t.operations,function(s){return e("tr",[e("td",[t._v(t._s(s.created_time))]),t._v(" "),e("td",[t._v(t._s(0==s.operation?"开机":1==s.operation?"关机":"重启"))]),t._v(" "),e("td",[t._v(t._s(0==s.operation_status?"成功":"失败"))]),t._v(" "),e("td",[t._v(t._s(s.user))])])}))])])])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=12.aea8c007b8f99c943bcb.js.map