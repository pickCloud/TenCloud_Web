webpackJsonp([8],{227:function(t,a,s){var e=s(4)(s(396),s(469),null,null);t.exports=e.exports},240:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(91),i=function(t){return t&&t.__esModule?t:{default:t}}(e),n={theme:"comb-msg",hasClose:!1,buttons:[{label:"确定",theme:""},{label:"取消",theme:""}]};a.default={methods:{popperDelete:function(t,a){var s=this.$createElement;this.$confirm((0,i.default)({},n,{content:s("div",[s("img",{attrs:{src:"./static/img/error_icon.png",class:"vam m-r16"}}),s("span",{attrs:{class:"vam"}},t)])}),function(t){0===(arguments.length<=1?void 0:arguments[1])&&a&&a.call(),t.actionPopper(!1)})},popperInfo:function(t,a,s){this.$confirm((0,i.default)({},n,{content:t}),function(t){0===(arguments.length<=1?void 0:arguments[1])?a&&a.call():s&&s.call(),t.actionPopper(!1)})},popperWaiting:function(t){var a=this.$createElement;return this.$confirm({theme:"comb-msg",hasClose:!1,maskClose:!1,content:a("span",null,[a("img",{attrs:{src:"./static/img/spin.gif",class:"vam m-r8"}}),a("span",{attrs:{class:"vam"}},t)]),buttons:[]})}}}},241:function(t,a,s){t.exports=s.p+"static/img/spin.84f7c1b.gif"},360:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={app_performance:["入量","出量","KB"],server_performance:["入带宽","出带宽","KB/S"]};a.default={data:function(){return{cpu:[],memory:[],block:[],disk:[],nets:[],maxChartNum:8}},methods:{formatDate:function(t){var a=this;return[t.map(function(t,s){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),t[1].percent,a.tipinfo(t)]})]},formatNet:function(t){var a=this;return[t.map(function(t,s){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),parseFloat(t[1].input),a.netTip(t)]}),t.map(function(t,a){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),parseFloat(t[1].output)]})]},netTip:function(t){var a=e[this.performance],s='<p class="tooltip-title">'+new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss")+'</p><p class="tooltip-body">';return s+='<i class="tooltip-dian" style="background-color: #95c099;"></i>'+a[0]+"："+t[1].input+a[2],(s+='<br><i class="tooltip-dian" style="background-color: #eb6565;"></i>'+a[1]+"："+t[1].output+a[2])+"</p>"},tipinfo:function(t){var a=t[1],s='<p class="tooltip-title">'+new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss")+'</p><p class="tooltip-body"><i class="tooltip-dian"></i>使用率：'+a.percent+"%";return a.free&&(s+='<br><i class="tooltip-dian"></i>空余：'+this.toG(a.free)+"G"),a.total&&(s+='<br><i class="tooltip-dian"></i>总量：'+this.toG(a.total)+"G"),s+"</p>"},toG:function(t){return(t/1024/1024/1024).toFixed(2)},getPerformance:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=(new Date).getTime(),i=e-6e4*a;this.performanceData.start_time=Math.floor(i/1e3),this.performanceData.end_time=Math.floor(e/1e3),this.performanceData.type=0,this.$Global.async(this.performance,!0).getData(this.performanceData).then(function(e){if(0===e.status){if(s){var i=t;t.cpu[0]&&t.cpu[0].data&&i.cpu[0].data.splice(0,i.cpu[0].data.length),t.memory[0]&&t.memory[0].data&&i.memory[0].data.splice(0,i.memory[0].data.length),t.nets[0]&&t.nets[0].data&&t.nets[1]&&t.nets[1].data&&(i.nets[0].data.splice(0,i.nets[0].data.length),i.nets[1].data.splice(0,i.nets[1].data.length)),t.disk[0]&&t.disk[0].data&&i.disk[0].data.splice(0,i.disk[0].data.length)}var n=e.data;n.cpu&&t.chartData("cpu",t.formatDate(n.cpu)),n.memory&&t.chartData("memory",t.formatDate(n.memory)),n.disk&&t.chartData("disk",t.formatDate(n.disk)),n.block&&t.chartData("block",t.formatNet(n.block)),n.net&&t.chartData("nets",t.formatNet(n.net)),60===a&&(t.temptimeout=setTimeout(function(a){t.getPerformance(1),clearTimeout(t.temptimeout)},6e4))}})},btnChange:function(t){var a=0;switch(t){case 0:a=60;break;case 1:a=1440;break;case 2:a=10080;break;case 3:a=43200}this.getPerformance(a,!0)},chartData:function(t,a){var s=this;a.forEach(function(a,e){s[t][e]||s.$set(s[t],e,{data:[]});var i=s[t][e].data;a.slice(-s.maxChartNum).forEach(function(t,a){i.slice(-1)[0]&&i.slice(-1)[0][0]===t[0]||(i.length>s.maxChartNum&&i.shift(),i.push(t))})})}},mounted:function(){},beforeDestroy:function(){this.temptimeout&&clearTimeout(this.temptimeout)}}},362:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={business:{0:["运行中","primary_bg alpha-black_txt"],1:["已停止","pink_bg alpha-black_txt"],2:["启动中","primary_bg alpha-black_txt"],3:["停止中","pink_bg alpha-black_txt"],4:["满负载","pink_bg alpha-black_txt"]},machine:{Pending:["准备中","primary_bg alpha-black_txt","run"],Stopped:["已停止","pink_bg alpha-black_txt","stop"],Starting:["启动中","primary_bg alpha-black_txt","run","server_start"],Running:["运行中","primary_bg alpha-black_txt","run"],Stopping:["停止中","pink_bg alpha-black_txt","stop","server_stop"],Deleted:["已释放","pink_bg alpha-black_txt","stop"]},server:{server_start:[3,"Starting","Running","机器启动中，请耐心等待","开机"],server_stop:[30,"Stopping","Stopped","机器关机中，请耐心等待","关机"],server_reboot:[30,"Stopping","Running","机器重启中，请耐心等待","重启机器"]}}},383:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{isInfoEditor:!1,infoEditorTemp:{}}},methods:{getValueByKey:function(t){return t.split(".").reduce(function(t,a){return t[a]},this)},editorBegin:function(){var t=this;this.isInfoEditor=!0,this.editorElements||(this.editorElements=this.$el.querySelectorAll(".edirot-input")),this.editorElements.forEach(function(a,s){a.removeAttribute("readonly"),t.infoEditorTemp[a.dataset.key]=a.value})},editorSure:function(){var t=this,a={},s=!1;this.isInfoEditor=!1,this.editorElements.forEach(function(e,i){e.setAttribute("readonly","readonly");var n=t.getValueByKey(e.dataset.key);n!==t.infoEditorTemp[e.dataset.key]&&(a[e.dataset.name]=n,s=!0)}),s&&(a.id=this.$route.params.id,this.$Global.async(this.updateApi,!0).getData(a).then(function(a){t.$toast(a.message,"cc")}))},setValueBuKey:function(t,a){var s=this,e=t.split(".");e.forEach(function(t,i){i===e.length-1?s[t]=a:s=s[t]})},editorCancel:function(){var t=this;this.isInfoEditor=!1,this.editorElements.forEach(function(a,s){a.setAttribute("readonly","readonly"),t.setValueBuKey(a.dataset.key,t.infoEditorTemp[a.dataset.key])})}}}},385:function(t,a,s){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var i=s(28),n=e(i),o=s(362),l=e(o),r=s(383),c=e(r),p=s(360),m=e(p),u=s(240),d=e(u);a.default={mixins:[m.default,c.default,d.default],data:function(){return{baseInfo:{cluster_id:-1,cluster_name:""},businessInfo:{contract:{},provider:""},sysInfo:{config:{}},applists:[],machineid:-1,isWaiting:!1,waitingTip:"",isOpen:!1,isDisabled:!1,updateApi:"server_update",performance:"server_performance",performanceData:{},btnidx:0}},methods:{getApiData:function(){var t=this;this.performanceData.id=this.machineid=this.$route.params.id,this.$Global.async("server_detail",!0).getData(null,this.machineid).then(function(a){0===a.status&&(t.baseInfo=a.data.basic_info,t.businessInfo=a.data.business_info,t.sysInfo=a.data.system_info,"run"===t.machineStatus[2]&&(t.isOpen=!0),"stop"===t.machineStatus[2]&&(t.isOpen=!1),t.statusApiSuf=t.baseInfo.instance_id+"/status","Starting"!==t.baseInfo.machine_status&&"Stopping"!==t.baseInfo.machine_status||t.loopGetStatus(t.machineStatus[3]),t.$store.commit("sitepath/SET_PATH",[{name:"Main",cn:"主页"},{name:"Machines",cn:"机器列表"},{cn:t.baseInfo.name}]))}),this.$Global.async("server_containers",!0).getData(null,this.machineid).then(function(a){0===a.status&&(t.applists=a.data)})},machineChange:function(){this.isDisabled=!0,this.isOpen?this.machineCtr("server_start"):this.machineCtrPop("server_stop")},machineCtrPop:function(t){var a=this,s=l.default.server[t];this.popperInfo("您确定要 "+s[4]+" 吗?",function(s){a.machineCtr(t)},function(t){a.isOpen=!a.isOpen,a.isDisabled=!1})},machineCtr:function(t){var a=this;this.$Global.async(t,!0).getData(null,this.machineid).then(function(s){0===s.status?a.loopGetStatus(t):a.$toast(s.message,"cc")},function(t){console.log(void 0===t?"undefined":(0,n.default)(t))})},loopGetStatus:function(t){var a=this,s=l.default.server[t];this.waitingTip=s[3],this.isWaiting=!0,this.baseInfo.machine_status=s[1],this.yqvalue=s[2],this.loopIV=setInterval(function(t){a.$Global.async("server_status",!0).getData(null,a.statusApiSuf).then(function(t){0===t.status&&(a.baseInfo.machine_status=t.data,t.data===a.yqvalue&&(a.isWaiting=!1,a.isDisabled=!1,clearInterval(a.loopIV)))})},1e3*s[0])},deleteMachine:function(){var t=this;this.popperDelete(this.baseInfo.name,function(a){t.$Global.async("server_del",!0).getData({id:[t.$route.params.id]}).then(function(a){0===a.status&&t.$router.push({name:"Machines"}),t.$toast(a.message,"cc")})})},getHistory:function(){this.$router.push({name:"ChartHistory",params:{id:this.$route.params.id,name:this.baseInfo.name}})}},computed:{businessStatus:function(){return l.default.business[this.baseInfo.business_status]||[]},machineStatus:function(){var t="";if(this.baseInfo.machine_status)switch(this.baseInfo.machine_status){case"准备中":t=["Pending","primary_bg alpha-black_txt","run"];break;case"已停止":t=["Stopped","pink_bg alpha-black_txt","stop"];break;case"启动中":t=["Starting","primary_bg alpha-black_txt","run","server_start"];break;case"运行中":t=["Running","primary_bg alpha-black_txt","run"];break;case"停止中":t=["Stopping","pink_bg alpha-black_txt","stop","server_stop"];break;case"已释放":t=["Deleted","pink_bg alpha-black_txt","stop"]}return t||[]}},created:function(){this.getApiData()},beforeDestroy:function(){this.loopIV&&clearInterval(this.loopIV)}}},396:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(385),i=function(t){return t&&t.__esModule?t:{default:t}}(e);a.default={mixins:[i.default]}},469:function(t,a,s){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-pad page-machine-detail"},[e("m-row",{attrs:{gutter:16}},[e("m-col",{staticClass:"xs-12 lg-8"},[e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title",slot:"title"},[e("span",{staticClass:"bold m-r8"},[t._v("监控")]),t._v(" "),e("div",{staticClass:"right",staticStyle:{"margin-top":"-5px"}},[e("m-btn-group",{staticClass:"m-r8 clearfix",attrs:{idx:t.btnidx},on:{change:t.btnChange}},[e("m-btn",[t._v("1个小时")]),t._v(" "),e("m-btn",[t._v("24小时")]),t._v(" "),e("m-btn",[t._v("1周")]),t._v(" "),e("m-btn",[t._v("1个月")])],1),t._v(" "),e("m-btn",{staticClass:"panel-bg_bg",nativeOn:{click:function(a){t.getHistory(a)}}},[t._v("查看历史")])],1)]),t._v(" "),e("m-row",{staticClass:"mdc-chart",attrs:{gutter:16}},[e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"CPU(%)"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.cpu}})],1)])],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"内存(%)"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.memory,colors:[["#eb6565","rgba(235,101,101,1)","rgba(235,101,101,0)"]]}})],1)])],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"硬盘使用情况(%)"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.disk,colors:[["#95c099","rgba(93,117,103,1)","rgba(93,117,103,0)"]]}})],1)])],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"网络"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.nets,colors:[["#95c099","rgba(93,117,103,1)","rgba(93,117,103,0)"],["#eb6565","rgba(235,101,101,1)","rgba(235,101,101,0)"]]}})],1)])],1)],1)],1)],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-4"},[e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title clearfix",slot:"title"},[e("span",{staticClass:"bold"},[t._v("基本信息")]),t._v(" "),e("span",{staticClass:"right editor-btn-group"},[t.isInfoEditor?t._e():e("span",{on:{click:t.editorBegin}},[e("m-btn",{attrs:{sizeh:-1}},[e("span",{staticClass:"vam"},[t._v("修改")]),t._v(" "),e("i",{staticClass:"iconfont icon-xiugai vam"})])],1),t._v(" "),t.isInfoEditor?e("span",{on:{click:t.editorSure}},[e("m-btn",{attrs:{sizeh:-1}},[t._v("确定")])],1):t._e(),t._v(" "),t.isInfoEditor?e("span",{on:{click:t.editorCancel}},[e("m-btn",{attrs:{sizeh:-1}},[t._v("取消")])],1):t._e()])]),t._v(" "),e("div",{staticClass:"panel-list mcd-ctrl-group"},[e("div",{staticClass:"mcd-ctrl-item"},[t.isWaiting?t._e():e("span",[t._v("开机/关机 "),e("m-switch",{staticClass:"switchMachine",attrs:{disabled:t.isDisabled,sizeh:-1},on:{change:t.machineChange},model:{value:t.isOpen,callback:function(a){t.isOpen=a},expression:"isOpen"}})],1)]),t._v(" "),e("div",{staticClass:"mcd-ctrl-item"},["run"!==t.machineStatus[2]||t.isWaiting?t._e():e("m-btn",{attrs:{sizeh:-1},nativeOn:{click:function(a){t.machineCtrPop("server_reboot")}}},[e("span",{staticClass:"vam"},[t._v("重启")]),t._v(" "),e("i",{staticClass:"icon icon-zhongzhi vam"})])],1),t._v(" "),e("div",{staticClass:"mcd-ctrl-item"},[e("m-btn",{attrs:{sizeh:-1},nativeOn:{click:function(a){t.deleteMachine(a)}}},[e("span",{staticClass:"vam"},[t._v("删除")]),t._v(" "),e("i",{staticClass:"iconfont icon-shanchu vam"})])],1),t._v(" "),e("span",{staticClass:"justify_fix"})]),t._v(" "),t.isWaiting?e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-12"},[e("img",{staticClass:"vam",attrs:{src:s(241),alt:""}}),t._v(" "),e("span",{staticClass:"vam"},[t._v(t._s(t.waitingTip))])])],1):t._e(),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("名称")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.baseInfo.name,expression:"baseInfo.name"}],staticClass:"edirot-input",attrs:{type:"text","data-key":"baseInfo.name","data-name":"name",readonly:""},domProps:{value:t.baseInfo.name},on:{input:function(a){a.target.composing||(t.baseInfo.name=a.target.value)}}})])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("服务商")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.businessInfo.provider))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("地址")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.baseInfo.address))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("IP")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.baseInfo.public_ip))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("状态")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[e("span",{staticClass:"plate",class:t.machineStatus[1]},[t._v(t._s(t.baseInfo.machine_status))])])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("添加时间")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[e("span",{staticClass:"plate"},[t._v(t._s(t.businessInfo.created_time))])])],1)],1),t._v(" "),e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title clearfix",slot:"title"},[e("span",{staticClass:"bold"},[t._v("配置信息")])]),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("操作系统")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.sysInfo.config.os_name))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("系统类型")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.sysInfo.config.os_type))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("CPU")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.sysInfo.config.cpu))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("内存")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(parseInt(t.sysInfo.config.memory)/1024)+"G")])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"}),t._v(" "),e("m-col",{staticClass:"xs-8"})],1)],1)],1),t._v(" "),e("m-col",{staticClass:"xs-12"},[e("panel",{staticClass:"p-b16 m-b16"},[e("div",{staticClass:"panel-title",slot:"title"},[e("span",{staticClass:"m-r8"},[t._v("容器列表")]),t._v(" "),e("small",[t._v("(容器: 独立运行的一个或一组应用，以及它们的运行生态环境)\t")])]),t._v(" "),e("div",{staticClass:"panel-body"},[e("m-table",{staticClass:"hover striped block-table centered"},[e("col",{attrs:{width:"15%"}}),t._v(" "),e("col",{attrs:{width:"20%"}}),t._v(" "),e("col",{attrs:{width:"20%"}}),t._v(" "),e("col",{attrs:{width:"25%"}}),t._v(" "),e("col",{attrs:{width:"15%"}}),t._v(" "),e("thead",[e("tr",[e("th",[t._v("containerID")]),t._v(" "),e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("状态")]),t._v(" "),e("th",[t._v("更新时间")]),t._v(" "),e("th",[t._v("操作")])])]),t._v(" "),e("tbody",t._l(t.applists,function(a){return e("tr",[e("td",[t._v(t._s(a[0]))]),t._v(" "),e("td",[t._v(t._s(a[1]))]),t._v(" "),e("td",[t._v(t._s(a[2]))]),t._v(" "),e("td",[t._v(t._s(a[3]))]),t._v(" "),e("td",[e("m-btn",{staticClass:"primary_txt",attrs:{href:{name:"AppDetail",params:{mid:t.$route.params.id,name:a[1],cid:a[0]}}}},[t._v("详情")])],1)])}))])],1)])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=8.6efefe241cd23c69dd49.js.map