webpackJsonp([10],{206:function(t,s,a){var e=a(5)(a(364),a(433),null,null);t.exports=e.exports},223:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(88),i=function(t){return t&&t.__esModule?t:{default:t}}(e),n={theme:"comb-msg",hasClose:!1,buttons:[{label:"确定",theme:""},{label:"取消",theme:""}]};s.default={methods:{popperDelete:function(t,s){var a=this.$createElement;this.$confirm((0,i.default)({},n,{content:a("div",[a("img",{attrs:{src:"./static/img/error_icon.png",class:"vam m-r16"}}),a("span",{attrs:{class:"vam"}},t)])}),function(t){0===(arguments.length<=1?void 0:arguments[1])&&s&&s.call(),t.actionPopper(!1)})},popperInfo:function(t,s,a){this.$confirm((0,i.default)({},n,{content:t}),function(t){0===(arguments.length<=1?void 0:arguments[1])?s&&s.call():a&&a.call(),t.actionPopper(!1)})},popperWaiting:function(t){var s=this.$createElement;return this.$confirm({theme:"comb-msg",hasClose:!1,maskClose:!1,content:s("span",null,[s("img",{attrs:{src:"./static/img/spin.gif",class:"vam m-r8"}}),s("span",{attrs:{class:"vam"}},t)]),buttons:[]})}}}},224:function(t,s,a){t.exports=a.p+"static/img/spin.84f7c1b.gif"},228:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={app_performance:["入量","出量","KB"],server_performance:["入带宽","出带宽","KB/S"]};s.default={data:function(){return{cpu:[],memory:[],block:[],disk:[],nets:[],maxChartNum:5}},methods:{formatDate:function(t){var s=this;return[t.map(function(t,a){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),t[1].percent,s.tipinfo(t)]})]},formatNet:function(t){var s=this;return[t.map(function(t,a){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),parseFloat(t[1].input),s.netTip(t)]}),t.map(function(t,s){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),parseFloat(t[1].output)]})]},netTip:function(t){var s=e[this.performance],a='<p class="tooltip-title">'+new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss")+'</p><p class="tooltip-body">';return a+='<i class="tooltip-dian" style="background-color: #95c099;"></i>'+s[0]+"："+t[1].input+s[2],(a+='<br><i class="tooltip-dian" style="background-color: #eb6565;"></i>'+s[1]+"："+t[1].output+s[2])+"</p>"},tipinfo:function(t){var s=t[1],a='<p class="tooltip-title">'+new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss")+'</p><p class="tooltip-body"><i class="tooltip-dian"></i>使用率：'+s.percent+"%";return s.free&&(a+='<br><i class="tooltip-dian"></i>空余：'+this.toG(s.free)+"G"),s.total&&(a+='<br><i class="tooltip-dian"></i>总量：'+this.toG(s.total)+"G"),a+"</p>"},toG:function(t){return(t/1024/1024/1024).toFixed(2)},getPerformance:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=new Date,e=new Date(a.getTime()-6e4*s);this.performanceData.start_time=Date.parse(e)/1e3,this.performanceData.end_time=Date.parse(a)/1e3,this.$Global.async(this.performance,!0).getData(this.performanceData).then(function(s){if(0===s.status){var a=s.data;a.cpu&&t.chartData("cpu",t.formatDate(a.cpu)),a.memory&&t.chartData("memory",t.formatDate(a.memory)),a.disk&&t.chartData("disk",t.formatDate(a.disk)),a.block&&t.chartData("block",t.formatNet(a.block)),a.net&&t.chartData("nets",t.formatNet(a.net)),t.temptimeout=setTimeout(function(s){t.getPerformance(1),clearTimeout(t.temptimeout)},6e4)}})},chartData:function(t,s){var a=this;s.forEach(function(s,e){a[t][e]||a.$set(a[t],e,{data:[]});var i=a[t][e].data;s.slice(-a.maxChartNum).forEach(function(t,s){i.slice(-1)[0]&&i.slice(-1)[0][0]===t[0]||(i.length>a.maxChartNum&&i.shift(),i.push(t))})})}},mounted:function(){this.getPerformance(60)},beforeDestroy:function(){this.temptimeout&&clearTimeout(this.temptimeout)}}},351:function(t,s,a){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var i=a(28),n=e(i),l=a(228),o=e(l),r=a(223),c=e(r),m={container_stop:["停止容器"],container_start:["启动容器"]};s.default={data:function(){return{isOpen:!0,isDisabled:!1,isWaiting:!1,waitingTip:"",performance:"app_performance",runtime:{},network:{},container:{},timedata:"",name:"",status:"",performanceData:{}}},mixins:[o.default,c.default],methods:{getApiData:function(){var t=this;this.performanceData.server_id=this.$route.params.mid,this.performanceData.container_name=this.$route.params.name,this.$Global.async("container_detail",!0).getData(null,this.$route.params.mid+"/container/"+this.$route.params.cid).then(function(s){0===s.status&&(t.runtime=s.data.runtime,t.network=s.data.network,t.container=s.data.container,t.status=s.data.status,t.name=s.data.name.substr(1),t.timedata=new Date(s.data.created).Format("yyyy/MM/dd hh:mm:ss"),t.isOpen="running"===t.status.toLowerCase())},function(t){console.log(t)})},containerChange:function(){this.isDisabled=!0,this.isOpen?this.operationTip("container_start"):this.operationTip("container_stop")},operationTip:function(t){var s=this;this.popperInfo("您确定要 "+m[t][0]+" 吗?",function(a){s.containerCtr(t)},function(t){s.isOpen=!s.isOpen,s.isDisabled=!1})},containerCtr:function(t){var s=this;this.isWaiting=!0,this.waitingTip=m[t][0]+"中, 请稍后",this.$Global.async(t,!0).getData({server_id:this.$route.params.mid,container_id:this.$route.params.cid}).then(function(t){0===t.status?s.isWaiting=!1:s.$toast(t.message,"cc")},function(t){console.log(void 0===t?"undefined":(0,n.default)(t))})},delContainer:function(){var t=this;this.popperInfo("您确定要删除 "+this.name+" 吗?",function(s){var a=t.popperWaiting("删除中");t.$Global.async("container_del",!0).getData({server_id:t.$route.params.mid,container_id:t.$route.params.cid}).then(function(s){0===s.status&&(a.actionPopper(),t.$router.back()),t.$toast(s.message,"cc")},function(t){console.log(void 0===t?"undefined":(0,n.default)(t))})})}},computed:{volumes:function(){var t=[];for(var s in this.container.volumes)t.push({label:s,value:this.container.volumes[s]});return t},volumesfrom:function(){return this.container.volumesfrom?this.container.volumesfrom.join():""}},created:function(){this.getApiData()}}},364:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(351),i=function(t){return t&&t.__esModule?t:{default:t}}(e);s.default={mixins:[i.default]}},433:function(t,s,a){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-pad page-app-detail"},[e("m-row",{attrs:{gutter:16}},[e("m-col",{staticClass:"xs-12 lg-8"},[e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title",slot:"title"},[e("span",{staticClass:"bold m-r8"},[t._v("监控")]),t._v(" "),e("div",{staticClass:"right",staticStyle:{"margin-top":"-5px"}},[e("m-btn-group",{staticClass:"m-r8 clearfix",attrs:{idx:0}},[e("m-btn",[t._v("实时")]),t._v(" "),e("m-btn",[t._v("24小时")]),t._v(" "),e("m-btn",[t._v("1周")])],1),t._v(" "),e("m-btn",{staticClass:"panel-bg_bg"},[t._v("查看历史")])],1)]),t._v(" "),e("m-row",{staticClass:"mdc-chart",attrs:{gutter:16}},[e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"CPU"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.cpu}})],1)])],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"内存"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.memory,colors:[["#eb6565","rgba(235,101,101,1)","rgba(235,101,101,0)"]]}})],1)])],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"Net I/O"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.nets,colors:[["#95c099","rgba(93,117,103,1)","rgba(93,117,103,0)"],["#eb6565","rgba(235,101,101,1)","rgba(235,101,101,0)"]]}})],1)])],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-6"},[e("panel",{staticClass:"p-b16",attrs:{title:"Block I/O"}},[e("div",{staticClass:"panel-body"},[e("e-line",{attrs:{series:t.block,colors:[["#95c099","rgba(93,117,103,1)","rgba(93,117,103,0)"],["#eb6565","rgba(235,101,101,1)","rgba(235,101,101,0)"]]}})],1)])],1)],1)],1),t._v(" "),e("panel",{staticClass:"m-b16",attrs:{title:"日志"}},[e("div",{staticClass:"panel-body p-b16"},[e("m-table",{staticClass:"hover striped machines-table centered"},[e("col",{attrs:{width:"30%"}}),t._v(" "),e("col",{attrs:{width:"70%"}}),t._v(" "),e("thead",[e("tr",[e("th",[t._v("时间")]),t._v(" "),e("th",[t._v("行为")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("2017.07.06 12:00")]),t._v(" "),e("td",[t._v("创建")])]),t._v(" "),e("tr",[e("td",[t._v("2017.07.06 12:00")]),t._v(" "),e("td",[t._v("创建")])]),t._v(" "),e("tr",[e("td",[t._v("2017.07.06 12:00")]),t._v(" "),e("td",[t._v("创建")])]),t._v(" "),e("tr",[e("td",[t._v("2017.07.06 12:00")]),t._v(" "),e("td",[t._v("创建")])])])])],1)])],1),t._v(" "),e("m-col",{staticClass:"xs-12 lg-4"},[e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title clearfix",slot:"title"},[e("span",{staticClass:"bold"},[t._v(t._s(t.name))])]),t._v(" "),e("div",{staticClass:"panel-list mcd-ctrl-group"},[e("div",{staticClass:"mcd-ctrl-item"},[t._v("启动/停止 "),e("m-switch",{attrs:{disabled:t.isDisabled},on:{change:t.containerChange},model:{value:t.isOpen,callback:function(s){t.isOpen=s},expression:"isOpen"}})],1),t._v(" "),e("div",{staticClass:"mcd-ctrl-item"},[e("m-btn",{nativeOn:{click:function(s){t.delContainer(s)}}},[e("span",{staticClass:"vam"},[t._v("删除")]),t._v(" "),e("i",{staticClass:"icon icon-delete vam"})])],1),t._v(" "),e("span",{staticClass:"justify_fix"})]),t._v(" "),t.isWaiting?e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-12"},[e("img",{staticClass:"vam",attrs:{src:a(224),alt:""}}),t._v(" "),e("span",{staticClass:"vam"},[t._v(t._s(t.waitingTip))])])],1):t._e(),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("状态")]),t._v(" "),e("m-col",{staticClass:"xs-8",domProps:{textContent:t._s(t.status)}})],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("更新时间")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.timedata))])],1)],1),t._v(" "),e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title clearfix",slot:"title"},[e("span",{staticClass:"bold"},[t._v("运行信息")])]),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("所在机器")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.runtime.hostname))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("IP")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.runtime.ip))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("容器端口")]),t._v(" "),e("m-col",{staticClass:"xs-8",domProps:{textContent:t._s(t.runtime.port?t.runtime.port.join():"")}})],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("访问地址")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.runtime.address))])],1)],1),t._v(" "),e("panel",{staticClass:"m-b16 data-config-panel"},[e("div",{staticClass:"panel-title clearfix",slot:"title"},[e("span",{staticClass:"bold"},[t._v("数据配置")])]),t._v(" "),e("div",{staticClass:"panle-body"},[t._l(t.volumes,function(s){return e("m-tip",{key:s.label,attrs:{"has-arrow":""}},[e("div",{staticClass:"data-tip-label",slot:"label"},[t._v(t._s(s.label))]),t._v(" "),e("div",{staticClass:"popper-body",slot:"popper"},t._l(s.value,function(s,a){return e("div",{staticClass:"data-tip-item"},[t._v(t._s(a)+": "+t._s(s))])}))])}),t._v(" "),t.volumesfrom?e("div",{staticClass:"tip-wrap"},[e("div",{staticClass:"data-tip-label"},[t._v(t._s(t.volumesfrom))])]):t._e()],2)]),t._v(" "),e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title clearfix",slot:"title"},[e("span",{staticClass:"bold"},[t._v("容器配置")])]),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("工作目录")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.container.workingdir))])],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("启动命令")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.container.cmd))])],1)],1),t._v(" "),e("panel",{staticClass:"m-b16"},[e("div",{staticClass:"panel-title clearfix",slot:"title"},[e("span",{staticClass:"bold"},[t._v("网路配置")])]),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("DNS")]),t._v(" "),e("m-col",{staticClass:"xs-8",domProps:{textContent:t._s(t.network.dns?t.network.dns.join():"")}})],1),t._v(" "),e("m-row",{staticClass:"panel-list",staticStyle:{height:"auto"}},[e("m-col",{staticClass:"xs-12"},[t._v("端口映射")]),t._v(" "),e("m-col",{staticClass:"xs-12 clearfix"},t._l(t.network.portbind,function(s,a){return e("m-tip",{key:a,attrs:{"has-arrow":""}},[e("div",{staticClass:"data-tip-label",slot:"label"},[t._v(t._s(a))]),t._v(" "),e("div",{staticClass:"popper-body",slot:"popper"},[e("div",{staticClass:"data-tip-item"},[t._v(t._s(s))])])])}))],1),t._v(" "),e("m-row",{staticClass:"panel-list"},[e("m-col",{staticClass:"xs-4"},[t._v("容器连接")]),t._v(" "),e("m-col",{staticClass:"xs-8"},[t._v(t._s(t.network.links))])],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.14fcc85b1ab194a0b5f1.js.map