webpackJsonp([11],{220:function(t,a,s){var e=s(4)(s(388),s(465),null,null);t.exports=e.exports},238:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(91),i=function(t){return t&&t.__esModule?t:{default:t}}(e),n={theme:"comb-msg",hasClose:!1,buttons:[{label:"确定",theme:""},{label:"取消",theme:""}]};a.default={methods:{popperDelete:function(t,a){var s=this.$createElement;this.$confirm((0,i.default)({},n,{content:s("div",[s("img",{attrs:{src:"./static/img/error_icon.png",class:"vam m-r16"}}),s("span",{attrs:{class:"vam"}},t)])}),function(t){0===(arguments.length<=1?void 0:arguments[1])&&a&&a.call(),t.actionPopper(!1)})},popperInfo:function(t,a,s){this.$confirm((0,i.default)({},n,{content:t}),function(t){0===(arguments.length<=1?void 0:arguments[1])?a&&a.call():s&&s.call(),t.actionPopper(!1)})},popperWaiting:function(t){var a=this.$createElement;return this.$confirm({theme:"comb-msg",hasClose:!1,maskClose:!1,content:a("span",null,[a("img",{attrs:{src:"./static/img/spin.gif",class:"vam m-r8"}}),a("span",{attrs:{class:"vam"}},t)]),buttons:[]})}}}},239:function(t,a,s){t.exports=s.p+"static/img/spin.84f7c1b.gif"},358:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={app_performance:["入量","出量","KB"],server_performance:["入带宽","出带宽","KB/S"]};a.default={data:function(){return{cpu:[],memory:[],block:[],disk:[],nets:[],maxChartNum:8}},methods:{formatDate:function(t){var a=this;return[t.map(function(t,s){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),t[1].percent,a.tipinfo(t)]})]},formatNet:function(t){var a=this;return[t.map(function(t,s){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),parseFloat(t[1].input),a.netTip(t)]}),t.map(function(t,a){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),parseFloat(t[1].output)]})]},netTip:function(t){var a=e[this.performance],s='<p class="tooltip-title">'+new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss")+'</p><p class="tooltip-body">';return s+='<i class="tooltip-dian" style="background-color: #95c099;"></i>'+a[0]+"："+t[1].input+a[2],(s+='<br><i class="tooltip-dian" style="background-color: #eb6565;"></i>'+a[1]+"："+t[1].output+a[2])+"</p>"},tipinfo:function(t){var a=t[1],s='<p class="tooltip-title">'+new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss")+'</p><p class="tooltip-body"><i class="tooltip-dian"></i>使用率：'+a.percent+"%";return a.free&&(s+='<br><i class="tooltip-dian"></i>空余：'+this.toG(a.free)+"G"),a.total&&(s+='<br><i class="tooltip-dian"></i>总量：'+this.toG(a.total)+"G"),s+"</p>"},toG:function(t){return(t/1024/1024/1024).toFixed(2)},getPerformance:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=(new Date).getTime(),i=e-6e4*a;this.performanceData.start_time=Math.floor(i/1e3),this.performanceData.end_time=Math.floor(e/1e3),this.performanceData.type=0,this.$Global.async(this.performance,!0).getData(this.performanceData).then(function(a){if(0===a.status){if(s){var e=t;t.cpu[0]&&t.cpu[0].data&&e.cpu[0].data.splice(0,e.cpu[0].data.length),t.memory[0]&&t.memory[0].data&&e.memory[0].data.splice(0,e.memory[0].data.length),t.nets[0]&&t.nets[0].data&&t.nets[1]&&t.nets[1].data&&(e.nets[0].data.splice(0,e.nets[0].data.length),e.nets[1].data.splice(0,e.nets[1].data.length)),t.disk[0]&&t.disk[0].data&&e.disk[0].data.splice(0,e.disk[0].data.length)}var i=a.data;i.cpu&&t.chartData("cpu",t.formatDate(i.cpu)),i.memory&&t.chartData("memory",t.formatDate(i.memory)),i.disk&&t.chartData("disk",t.formatDate(i.disk)),i.block&&t.chartData("block",t.formatNet(i.block)),i.net&&t.chartData("nets",t.formatNet(i.net)),t.temptimeout=setTimeout(function(a){t.getPerformance(1),clearTimeout(t.temptimeout)},6e4)}})},chartData:function(t,a){var s=this;a.forEach(function(a,e){s[t][e]||s.$set(s[t],e,{data:[]});var i=s[t][e].data;a.slice(-s.maxChartNum).forEach(function(t,a){i.slice(-1)[0]&&i.slice(-1)[0][0]===t[0]||(i.length>s.maxChartNum&&i.shift(),i.push(t))})})}},mounted:function(){},beforeDestroy:function(){this.temptimeout&&clearTimeout(this.temptimeout)}}},376:function(t,a,s){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var i=s(28),n=e(i),o=s(358),l=e(o),r=s(238),c=e(r),m={container_stop:["停止容器"],container_start:["启动容器"]};a.default={data:function(){return{isOpen:!0,isDisabled:!1,isWaiting:!1,waitingTip:"",performance:"app_performance",runtime:{},network:{},container:{},timedata:"",name:"",status:"",performanceData:{}}},mixins:[l.default,c.default],methods:{getApiData:function(){var t=this;this.performanceData.server_id=this.$route.params.mid,this.performanceData.container_name=this.$route.params.name,this.$Global.async("container_detail",!0).getData(null,this.$route.params.mid+"/container/"+this.$route.params.cid).then(function(a){0===a.status&&(t.runtime=a.data.runtime,t.network=a.data.network,t.container=a.data.container,t.status=a.data.status,t.name=a.data.name.substr(1),t.timedata=new Date(a.data.created).Format("yyyy/MM/dd hh:mm:ss"),t.isOpen="running"===t.status.toLowerCase(),t.$store.commit("sitepath/SET_PATH",[{name:"Main",cn:"主页"},{name:"Machines",cn:"机器列表"},{name:"MachineDetail",cn:t.runtime.hostname,params:{id:t.$route.params.mid}},{cn:t.name}]))},function(t){console.log(t)})},containerChange:function(){this.isDisabled=!0,this.isOpen?this.operationTip("container_start"):this.operationTip("container_stop")},operationTip:function(t){var a=this;this.popperInfo("您确定要 "+m[t][0]+" 吗?",function(s){a.containerCtr(t)},function(t){a.isOpen=!a.isOpen,a.isDisabled=!1})},containerCtr:function(t){var a=this;this.isWaiting=!0,this.waitingTip=m[t][0]+"中, 请稍后",this.$Global.async(t,!0).getData({server_id:this.$route.params.mid,container_id:this.$route.params.cid}).then(function(t){0===t.status?a.isWaiting=!1:a.$toast(t.message,"cc")},function(t){console.log(void 0===t?"undefined":(0,n.default)(t))})},delContainer:function(){var t=this;this.popperInfo("您确定要删除 "+this.name+" 吗?",function(a){var s=t.popperWaiting("删除中");t.$Global.async("container_del",!0).getData({server_id:t.$route.params.mid,container_id:t.$route.params.cid}).then(function(a){0===a.status&&(s.actionPopper(),t.$router.back()),t.$toast(a.message,"cc")},function(t){console.log(void 0===t?"undefined":(0,n.default)(t))})})},lookHistory:function(){this.$router.push({name:"ChartHistory",params:{id:1}})}},computed:{volumes:function(){var t=[];for(var a in this.container.volumes)t.push({label:a,value:this.container.volumes[a]});return t},volumesfrom:function(){return this.container.volumesfrom?this.container.volumesfrom.join():""}},created:function(){this.getApiData()}}},388:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(376),i=function(t){return t&&t.__esModule?t:{default:t}}(e);a.default={mixins:[i.default]}},465:function(t,a,s){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-pad page-app-detail"},[e("m-row",{attrs:{gutter:16}},[e("m-col",{staticClass:"xs-12 lg-8"},[e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title",slot:"title"},[e("span",{staticClass:"bold m-r8"},[t._v("监控")]),t._v(" "),e("div",{staticClass:"right",staticStyle:{"margin-top":"-5px"}},[e("m-btn-group",{staticClass:"m-r8 clearfix",attrs:{idx:0}},[e("m-btn",[t._v("实时")]),t._v(" "),e("m-btn",[t._v("24小时")]),t._v(" "),e("m-btn",[t._v("1周")])],1),t._v(" "),e("m-btn",{staticClass:"panel-bg_bg",nativeOn:{click:function(a){t.lookHistory(a)}}},[t._v("查看历史")])],1)]),t._v(" "),e("m-row",{staticClass:"mdc-chart",attrs:{gutter:16}},[e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"CPU"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.cpu}})],1)])],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"内存"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.memory,colors:[["#eb6565","rgba(235,101,101,1)","rgba(235,101,101,0)"]]}})],1)])],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"Net I/O"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.nets,colors:[["#95c099","rgba(93,117,103,1)","rgba(93,117,103,0)"],["#eb6565","rgba(235,101,101,1)","rgba(235,101,101,0)"]]}})],1)])],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"Block I/O"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.block,colors:[["#95c099","rgba(93,117,103,1)","rgba(93,117,103,0)"],["#eb6565","rgba(235,101,101,1)","rgba(235,101,101,0)"]]}})],1)])],1)],1)],1),t._v(" "),e("panel",{staticClass:"m-b16",attrs:{title:"日志"}},[e("div",{staticClass:"panel-body p-b16"},[e("m-table",{staticClass:"hover striped machines-table centered"},[e("col",{attrs:{width:"30%"}}),t._v(" "),e("col",{attrs:{width:"70%"}}),t._v(" "),e("thead",[e("tr",[e("th",[t._v("时间")]),t._v(" "),e("th",[t._v("行为")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("2017.07.06 12:00")]),t._v(" "),e("td",[t._v("创建")])]),t._v(" "),e("tr",[e("td",[t._v("2017.07.06 12:00")]),t._v(" "),e("td",[t._v("创建")])]),t._v(" "),e("tr",[e("td",[t._v("2017.07.06 12:00")]),t._v(" "),e("td",[t._v("创建")])]),t._v(" "),e("tr",[e("td",[t._v("2017.07.06 12:00")]),t._v(" "),e("td",[t._v("创建")])])])])],1)])],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-4"},[e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title clearfix",slot:"title"},[e("span",{staticClass:"bold"},[t._v(t._s(t.name))])]),t._v(" "),e("div",{staticClass:"panel-list mcd-ctrl-group"},[e("div",{staticClass:"mcd-ctrl-item"},[t._v("启动/停止 "),e("m-switch",{attrs:{disabled:t.isDisabled},on:{change:t.containerChange},model:{value:t.isOpen,callback:function(a){t.isOpen=a},expression:"isOpen"}})],1),t._v(" "),e("div",{staticClass:"mcd-ctrl-item"},[e("m-btn",{nativeOn:{click:function(a){t.delContainer(a)}}},[e("span",{staticClass:"vam"},[t._v("删除")]),t._v(" "),e("i",{staticClass:"iconfont icon-shanchu vam"})])],1),t._v(" "),e("span",{staticClass:"justify_fix"})]),t._v(" "),t.isWaiting?e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-12"},[e("img",{staticClass:"vam",attrs:{src:s(239),alt:""}}),t._v(" "),e("span",{staticClass:"vam"},[t._v(t._s(t.waitingTip))])])],1):t._e(),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("状态")]),t._v(" "),e("m-col",{staticClass:"xs-8",domProps:{textContent:t._s(t.status)}})],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("更新时间")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.timedata))])],1)],1),t._v(" "),e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title clearfix",slot:"title"},[e("span",{staticClass:"bold"},[t._v("运行信息")])]),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("所在机器")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.runtime.hostname))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("IP")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.runtime.ip))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("容器端口")]),t._v(" "),e("m-col",{staticClass:"xs-8",domProps:{textContent:t._s(t.runtime.port?t.runtime.port.join():"")}})],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("访问地址")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.runtime.address))])],1)],1),t._v(" "),e("panel",{staticClass:"m-b16 data-config-panel"},[e("div",{staticClass:"panel-title clearfix",slot:"title"},[e("span",{staticClass:"bold"},[t._v("数据配置")])]),t._v(" "),e("div",{staticClass:"panle-body"},[t._l(t.volumes,function(a){return e("m-tip",{key:a.label,attrs:{"has-arrow":""}},[e("div",{staticClass:"data-tip-label",slot:"label"},[t._v(t._s(a.label))]),t._v(" "),e("div",{staticClass:"popper-body",slot:"popper"},t._l(a.value,function(a,s){return e("div",{staticClass:"data-tip-item"},[t._v(t._s(s)+": "+t._s(a))])}))])}),t._v(" "),t.volumesfrom?e("div",{staticClass:"tip-wrap"},[e("div",{staticClass:"data-tip-label"},[t._v(t._s(t.volumesfrom))])]):t._e()],2)]),t._v(" "),e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title clearfix",slot:"title"},[e("span",{staticClass:"bold"},[t._v("容器配置")])]),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("工作目录")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.container.workingdir))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("启动命令")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.container.cmd))])],1)],1),t._v(" "),e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title clearfix",slot:"title"},[e("span",{staticClass:"bold"},[t._v("网路配置")])]),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("DNS")]),t._v(" "),e("m-col",{staticClass:"xs-8",domProps:{textContent:t._s(t.network.dns?t.network.dns.join():"")}})],1),t._v(" "),e("m-row",{staticClass:"panel-list",staticStyle:{height:"auto"}},[e("m-col",{staticClass:"xs-12"},[t._v("端口映射")]),t._v(" "),e("m-col",{staticClass:"xs-12 clearfix"},t._l(t.network.portbind,function(a,s){return e("m-tip",{key:s,attrs:{"has-arrow":""}},[e("div",{staticClass:"data-tip-label",slot:"label"},[t._v(t._s(s))]),t._v(" "),e("div",{staticClass:"popper-body",slot:"popper"},[e("div",{staticClass:"data-tip-item"},[t._v(t._s(a))])])])}))],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("容器连接")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.network.links))])],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=11.7a09afd126d7ed405ec9.js.map