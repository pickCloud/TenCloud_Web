webpackJsonp([0],{138:function(t,e,s){var a=s(7)(s(185),s(167),null,null);t.exports=a.exports},145:function(t,e,s){var a=s(2),n=s(3),i=s(26),o=s(146),r=s(8).f;t.exports=function(t){var e=n.Symbol||(n.Symbol=i?{}:a.Symbol||{});"_"==t.charAt(0)||t in e||r(e,t,{value:o.f(t)})}},146:function(t,e,s){e.f=s(1)},147:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(55),n=function(t){return t&&t.__esModule?t:{default:t}}(a),i={theme:"comb-msg",hasClose:!1,buttons:[{label:"确定",theme:""},{label:"取消",theme:""}]};e.default={methods:{popperDelete:function(t,e){var s=this.$createElement;this.$confirm((0,n.default)({},i,{content:s("div",[s("img",{attrs:{src:"./static/img/error_icon.png",class:"vam m-r16"}}),s("span",{attrs:{class:"vam"}},t)])}),function(t){0===(arguments.length<=1?void 0:arguments[1])&&e&&e.call(),t.actionPopper(!1)})},popperInfo:function(t,e,s){this.$confirm((0,n.default)({},i,{content:t}),function(t){0===(arguments.length<=1?void 0:arguments[1])?e&&e.call():s&&s.call(),t.actionPopper(!1)})},popperWaiting:function(t){var e=this.$createElement;return this.$confirm({theme:"comb-msg",hasClose:!1,maskClose:!1,content:e("span",null,[e("img",{attrs:{src:"./static/img/spin.gif",class:"vam m-r8"}}),e("span",{attrs:{class:"vam"}},t)]),buttons:[]})}}}},148:function(t,e,s){t.exports=s.p+"static/img/spin.84f7c1b.gif"},149:function(t,e,s){var a=s(58),n=s(29).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,n)}},150:function(t,e,s){s(158),s(60),s(159),s(160),t.exports=s(3).Symbol},151:function(t,e,s){s(61),s(62),t.exports=s(146).f("iterator")},152:function(t,e,s){var a=s(25),n=s(53),i=s(52);t.exports=function(t){var e=a(t),s=n.f;if(s)for(var o,r=s(t),c=i.f,l=0;r.length>l;)c.call(t,o=r[l++])&&e.push(o);return e}},153:function(t,e,s){var a=s(11);t.exports=Array.isArray||function(t){return"Array"==a(t)}},154:function(t,e,s){var a=s(25),n=s(15);t.exports=function(t,e){for(var s,i=n(t),o=a(i),r=o.length,c=0;r>c;)if(i[s=o[c++]]===e)return s}},155:function(t,e,s){var a=s(28)("meta"),n=s(13),i=s(10),o=s(8).f,r=0,c=Object.isExtensible||function(){return!0},l=!s(16)(function(){return c(Object.preventExtensions({}))}),u=function(t){o(t,a,{value:{i:"O"+ ++r,w:{}}})},f=function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,a)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[a].i},p=function(t,e){if(!i(t,a)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[a].w},m=function(t){return l&&d.NEED&&c(t)&&!i(t,a)&&u(t),t},d=t.exports={KEY:a,NEED:!1,fastKey:f,getWeak:p,onFreeze:m}},156:function(t,e,s){var a=s(52),n=s(27),i=s(15),o=s(54),r=s(10),c=s(56),l=Object.getOwnPropertyDescriptor;e.f=s(4)?l:function(t,e){if(t=i(t),e=o(e,!0),c)try{return l(t,e)}catch(t){}if(r(t,e))return n(!a.f.call(t,e),t[e])}},157:function(t,e,s){var a=s(15),n=s(149).f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],r=function(t){try{return n(t)}catch(t){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?r(t):n(a(t))}},158:function(t,e,s){"use strict";var a=s(2),n=s(10),i=s(4),o=s(12),r=s(59),c=s(155).KEY,l=s(16),u=s(30),f=s(17),p=s(28),m=s(1),d=s(146),v=s(145),h=s(154),_=s(152),b=s(153),y=s(5),g=s(15),C=s(54),x=s(27),w=s(57),S=s(157),D=s(156),I=s(8),k=s(25),O=D.f,E=I.f,P=S.f,M=a.Symbol,$=a.JSON,j=$&&$.stringify,G=m("_hidden"),N=m("toPrimitive"),F={}.propertyIsEnumerable,T=u("symbol-registry"),A=u("symbols"),W=u("op-symbols"),K=Object.prototype,B="function"==typeof M,V=a.QObject,z=!V||!V.prototype||!V.prototype.findChild,J=i&&l(function(){return 7!=w(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,s){var a=O(K,e);a&&delete K[e],E(t,e,s),a&&t!==K&&E(K,e,a)}:E,R=function(t){var e=A[t]=w(M.prototype);return e._k=t,e},q=B&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},U=function(t,e,s){return t===K&&U(W,e,s),y(t),e=C(e,!0),y(s),n(A,e)?(s.enumerable?(n(t,G)&&t[G][e]&&(t[G][e]=!1),s=w(s,{enumerable:x(0,!1)})):(n(t,G)||E(t,G,x(1,{})),t[G][e]=!0),J(t,e,s)):E(t,e,s)},Y=function(t,e){y(t);for(var s,a=_(e=g(e)),n=0,i=a.length;i>n;)U(t,s=a[n++],e[s]);return t},Q=function(t,e){return void 0===e?w(t):Y(w(t),e)},H=function(t){var e=F.call(this,t=C(t,!0));return!(this===K&&n(A,t)&&!n(W,t))&&(!(e||!n(this,t)||!n(A,t)||n(this,G)&&this[G][t])||e)},L=function(t,e){if(t=g(t),e=C(e,!0),t!==K||!n(A,e)||n(W,e)){var s=O(t,e);return!s||!n(A,e)||n(t,G)&&t[G][e]||(s.enumerable=!0),s}},X=function(t){for(var e,s=P(g(t)),a=[],i=0;s.length>i;)n(A,e=s[i++])||e==G||e==c||a.push(e);return a},Z=function(t){for(var e,s=t===K,a=P(s?W:g(t)),i=[],o=0;a.length>o;)!n(A,e=a[o++])||s&&!n(K,e)||i.push(A[e]);return i};B||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(s){this===K&&e.call(W,s),n(this,G)&&n(this[G],t)&&(this[G][t]=!1),J(this,t,x(1,s))};return i&&z&&J(K,t,{configurable:!0,set:e}),R(t)},r(M.prototype,"toString",function(){return this._k}),D.f=L,I.f=U,s(149).f=S.f=X,s(52).f=H,s(53).f=Z,i&&!s(26)&&r(K,"propertyIsEnumerable",H,!0),d.f=function(t){return R(m(t))}),o(o.G+o.W+o.F*!B,{Symbol:M});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)m(tt[et++]);for(var tt=k(m.store),et=0;tt.length>et;)v(tt[et++]);o(o.S+o.F*!B,"Symbol",{for:function(t){return n(T,t+="")?T[t]:T[t]=M(t)},keyFor:function(t){if(q(t))return h(T,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){z=!0},useSimple:function(){z=!1}}),o(o.S+o.F*!B,"Object",{create:Q,defineProperty:U,defineProperties:Y,getOwnPropertyDescriptor:L,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),$&&o(o.S+o.F*(!B||l(function(){var t=M();return"[null]"!=j([t])||"{}"!=j({a:t})||"{}"!=j(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!q(t)){for(var e,s,a=[t],n=1;arguments.length>n;)a.push(arguments[n++]);return e=a[1],"function"==typeof e&&(s=e),!s&&b(e)||(e=function(t,e){if(s&&(e=s.call(this,t,e)),!q(e))return e}),a[1]=e,j.apply($,a)}}}),M.prototype[N]||s(6)(M.prototype,N,M.prototype.valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(a.JSON,"JSON",!0)},159:function(t,e,s){s(145)("asyncIterator")},160:function(t,e,s){s(145)("observable")},161:function(t,e,s){t.exports={default:s(150),__esModule:!0}},162:function(t,e,s){t.exports={default:s(151),__esModule:!0}},163:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var n=s(162),i=a(n),o=s(161),r=a(o),c="function"==typeof r.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof r.default&&t.constructor===r.default&&t!==r.default.prototype?"symbol":typeof t};e.default="function"==typeof r.default&&"symbol"===c(i.default)?function(t){return void 0===t?"undefined":c(t)}:function(t){return t&&"function"==typeof r.default&&t.constructor===r.default&&t!==r.default.prototype?"symbol":void 0===t?"undefined":c(t)}},164:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={app_performance:["入量","出量","KB"],server_performance:["入带宽","出带宽","KB/S"]};e.default={data:function(){return{cpu:[],memory:[],block:[],disk:[],nets:[],maxChartNum:5}},methods:{formatDate:function(t){var e=this;return[t.map(function(t,s){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),t[1].percent,e.tipinfo(t)]})]},formatNet:function(t){var e=this;return[t.map(function(t,s){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),parseFloat(t[1].input),e.netTip(t)]}),t.map(function(t,e){return[new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss"),parseFloat(t[1].output)]})]},netTip:function(t){var e=a[this.performance],s='<p class="tooltip-title">'+new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss")+'</p><p class="tooltip-body">';return s+='<i class="tooltip-dian" style="background-color: #95c099;"></i>'+e[0]+"："+t[1].input+e[2],(s+='<br><i class="tooltip-dian" style="background-color: #eb6565;"></i>'+e[1]+"："+t[1].output+e[2])+"</p>"},tipinfo:function(t){var e=t[1],s='<p class="tooltip-title">'+new Date(1e3*t[0]).Format("yyyy/MM/dd hh:mm:ss")+'</p><p class="tooltip-body"><i class="tooltip-dian"></i>使用率：'+e.percent+"%";return e.free&&(s+='<br><i class="tooltip-dian"></i>空余：'+this.toG(e.free)+"G"),e.total&&(s+='<br><i class="tooltip-dian"></i>总量：'+this.toG(e.total)+"G"),s+"</p>"},toG:function(t){return(t/1024/1024/1024).toFixed(2)},getPerformance:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=new Date,a=new Date(s.getTime()-6e4*e);this.performanceData.start_time=Date.parse(a)/1e3,this.performanceData.end_time=Date.parse(s)/1e3,this.$Global.async(this.performance,!0).getData(this.performanceData).then(function(e){if(0===e.status){var s=e.data;s.cpu&&t.chartData("cpu",t.formatDate(s.cpu)),s.memory&&t.chartData("memory",t.formatDate(s.memory)),s.disk&&t.chartData("disk",t.formatDate(s.disk)),s.block&&t.chartData("block",t.formatNet(s.block)),s.net&&t.chartData("nets",t.formatNet(s.net)),t.temptimeout=setTimeout(function(e){t.getPerformance(1),clearTimeout(t.temptimeout)},6e4)}})},chartData:function(t,e){var s=this;e.forEach(function(e,a){s[t][a]||s.$set(s[t],a,{data:[]});var n=s[t][a].data;e.slice(-s.maxChartNum).forEach(function(t,e){n.slice(-1)[0]&&n.slice(-1)[0][0]===t[0]||(n.length>s.maxChartNum&&n.shift(),n.push(t))})})}},mounted:function(){this.getPerformance(60)},beforeDestroy:function(){this.temptimeout&&clearTimeout(this.temptimeout)}}},166:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={business:{0:["运行中","primary_bg alpha-black_txt"],1:["已停止","pink_bg alpha-black_txt"],2:["启动中","primary_bg alpha-black_txt"],3:["停止中","pink_bg alpha-black_txt"],4:["满负载","pink_bg alpha-black_txt"]},machine:{Pending:["准备中","primary_bg alpha-black_txt","run"],Stopped:["已停止","pink_bg alpha-black_txt","stop"],Starting:["启动中","primary_bg alpha-black_txt","run","server_start"],Running:["运行中","primary_bg alpha-black_txt","run"],Stopping:["停止中","pink_bg alpha-black_txt","stop","server_stop"],Deleted:["已释放","pink_bg alpha-black_txt","stop"]},server:{server_start:[3,"Starting","Running","机器启动中，请耐心等待","开机"],server_stop:[30,"Stopping","Stopped","机器关机中，请耐心等待","关机"],server_reboot:[30,"Stopping","Running","机器重启中，请耐心等待","重启机器"]}}},167:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-pad page-machine-detail"},[a("m-row",{attrs:{gutter:16}},[a("m-col",{staticClass:"xs-12 lg-8"},[a("panel",{staticClass:"m-b16"},[a("div",{staticClass:"panel-title",slot:"title"},[a("span",{staticClass:"bold m-r8"},[t._v("监控")])]),t._v(" "),a("m-row",{staticClass:"mdc-chart",attrs:{gutter:16}},[a("m-col",{staticClass:"xs-12 lg-6"},[a("panel",{staticClass:"p-b16",attrs:{title:"CPU(%)"}},[a("div",{staticClass:"panel-body"},[a("e-line",{attrs:{series:t.cpu}})],1)])],1),t._v(" "),a("m-col",{staticClass:"xs-12 lg-6"},[a("panel",{staticClass:"p-b16",attrs:{title:"内存(%)"}},[a("div",{staticClass:"panel-body"},[a("e-line",{attrs:{series:t.memory,colors:[["#eb6565","rgba(235,101,101,1)","rgba(235,101,101,0)"]]}})],1)])],1),t._v(" "),a("m-col",{staticClass:"xs-12 lg-6"},[a("panel",{staticClass:"p-b16",attrs:{title:"硬盘使用情况(%)"}},[a("div",{staticClass:"panel-body"},[a("e-line",{attrs:{series:t.disk,colors:[["#95c099","rgba(93,117,103,1)","rgba(93,117,103,0)"]]}})],1)])],1),t._v(" "),a("m-col",{staticClass:"xs-12 lg-6"},[a("panel",{staticClass:"p-b16",attrs:{title:"网络"}},[a("div",{staticClass:"panel-body"},[a("e-line",{attrs:{series:t.nets,colors:[["#95c099","rgba(93,117,103,1)","rgba(93,117,103,0)"],["#eb6565","rgba(235,101,101,1)","rgba(235,101,101,0)"]]}})],1)])],1)],1)],1)],1),t._v(" "),a("m-col",{staticClass:"xs-12 lg-4"},[a("panel",{staticClass:"m-b16"},[a("div",{staticClass:"panel-title clearfix",slot:"title"},[a("span",{staticClass:"bold"},[t._v("基本信息")]),t._v(" "),a("span",{staticClass:"right editor-btn-group"},[t.isInfoEditor?t._e():a("span",{on:{click:t.editorBegin}},[a("m-btn",{attrs:{sizeh:-1}},[a("span",{staticClass:"vam"},[t._v("修改")]),t._v(" "),a("i",{staticClass:"icon icon-editor vam"})])],1),t._v(" "),t.isInfoEditor?a("span",{on:{click:t.editorSure}},[a("m-btn",{attrs:{sizeh:-1}},[t._v("确定")])],1):t._e(),t._v(" "),t.isInfoEditor?a("span",{on:{click:t.editorCancel}},[a("m-btn",{attrs:{sizeh:-1}},[t._v("取消")])],1):t._e()])]),t._v(" "),a("div",{staticClass:"panel-list mcd-ctrl-group"},[a("div",{staticClass:"mcd-ctrl-item"},[t.isWaiting?t._e():a("span",[t._v("开机 "),a("m-switch",{staticClass:"switchMachine",attrs:{disabled:t.isDisabled},on:{change:t.machineChange},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}})],1)]),t._v(" "),a("div",{staticClass:"mcd-ctrl-item"},["run"!==t.machineStatus[2]||t.isWaiting?t._e():a("m-btn",{nativeOn:{click:function(e){t.machineCtrPop("server_reboot")}}},[a("span",{staticClass:"vam"},[t._v("重启")]),t._v(" "),a("i",{staticClass:"icon icon-zhongzhi vam"})])],1),t._v(" "),a("div",{staticClass:"mcd-ctrl-item"},[a("m-btn",{nativeOn:{click:function(e){t.deleteMachine(e)}}},[a("span",{staticClass:"vam"},[t._v("删除")]),t._v(" "),a("i",{staticClass:"icon icon-delete vam"})])],1),t._v(" "),a("span",{staticClass:"justify_fix"})]),t._v(" "),t.isWaiting?a("m-row",{staticClass:"panel-list"},[a("m-col",{staticClass:"xs-12"},[a("img",{staticClass:"vam",attrs:{src:s(148),alt:""}}),t._v(" "),a("span",{staticClass:"vam"},[t._v(t._s(t.waitingTip))])])],1):t._e(),t._v(" "),a("m-row",{staticClass:"panel-list"},[a("m-col",{staticClass:"xs-4"},[t._v("名称")]),t._v(" "),a("m-col",{staticClass:"xs-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.baseInfo.name,expression:"baseInfo.name"}],staticClass:"edirot-input",attrs:{type:"text","data-key":"baseInfo.name","data-name":"name",readonly:""},domProps:{value:t.baseInfo.name},on:{input:function(e){e.target.composing||(t.baseInfo.name=e.target.value)}}})])],1),t._v(" "),a("m-row",{staticClass:"panel-list"},[a("m-col",{staticClass:"xs-4"},[t._v("服务商")]),t._v(" "),a("m-col",{staticClass:"xs-8"},[t._v(t._s(t.baseInfo.cluster_name))])],1),t._v(" "),a("m-row",{staticClass:"panel-list"},[a("m-col",{staticClass:"xs-4"},[t._v("地址")]),t._v(" "),a("m-col",{staticClass:"xs-8"},[t._v(t._s(t.baseInfo.address))])],1),t._v(" "),a("m-row",{staticClass:"panel-list"},[a("m-col",{staticClass:"xs-4"},[t._v("IP")]),t._v(" "),a("m-col",{staticClass:"xs-8"},[t._v(t._s(t.baseInfo.public_ip))])],1),t._v(" "),a("m-row",{staticClass:"panel-list"},[a("m-col",{staticClass:"xs-4"},[t._v("状态")]),t._v(" "),a("m-col",{staticClass:"xs-8"},[a("span",{staticClass:"plate",class:t.machineStatus[1]},[t._v(t._s(t.machineStatus[0]))])])],1)],1),t._v(" "),a("panel",{staticClass:"m-b16"},[a("div",{staticClass:"panel-title clearfix",slot:"title"},[a("span",{staticClass:"bold"},[t._v("配置信息")])]),t._v(" "),a("m-row",{staticClass:"panel-list"},[a("m-col",{staticClass:"xs-4"},[t._v("操作系统")]),t._v(" "),a("m-col",{staticClass:"xs-8"},[t._v(t._s(t.sysInfo.config.os_name))])],1),t._v(" "),a("m-row",{staticClass:"panel-list"},[a("m-col",{staticClass:"xs-4"},[t._v("系统类型")]),t._v(" "),a("m-col",{staticClass:"xs-8"},[t._v(t._s(t.sysInfo.config.os_type))])],1),t._v(" "),a("m-row",{staticClass:"panel-list"},[a("m-col",{staticClass:"xs-4"},[t._v("CPU")]),t._v(" "),a("m-col",{staticClass:"xs-8"},[t._v(t._s(t.sysInfo.config.cpu))])],1),t._v(" "),a("m-row",{staticClass:"panel-list"},[a("m-col",{staticClass:"xs-4"},[t._v("内存")]),t._v(" "),a("m-col",{staticClass:"xs-8"},[t._v(t._s(parseInt(t.sysInfo.config.memory)/1024)+"G")])],1),t._v(" "),a("m-row",{staticClass:"panel-list"},[a("m-col",{staticClass:"xs-4"}),t._v(" "),a("m-col",{staticClass:"xs-8"})],1)],1)],1),t._v(" "),a("m-col",{staticClass:"xs-12"},[a("panel",{staticClass:"p-b16 m-b16"},[a("div",{staticClass:"panel-title",slot:"title"},[a("span",{staticClass:"m-r8"},[t._v("容器列表")]),t._v(" "),a("small",[t._v("(容器: 独立运行的一个或一组应用，以及它们的运行生态环境)\t")])]),t._v(" "),a("div",{staticClass:"panel-body"},[a("m-table",{staticClass:"hover striped block-table centered"},[a("col",{attrs:{width:"15%"}}),t._v(" "),a("col",{attrs:{width:"20%"}}),t._v(" "),a("col",{attrs:{width:"20%"}}),t._v(" "),a("col",{attrs:{width:"25%"}}),t._v(" "),a("col",{attrs:{width:"15%"}}),t._v(" "),a("thead",[a("tr",[a("th",[t._v("containerID")]),t._v(" "),a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("状态")]),t._v(" "),a("th",[t._v("更新时间")]),t._v(" "),a("th",[t._v("操作")])])]),t._v(" "),a("tbody",t._l(t.applists,function(e){return a("tr",[a("td",[t._v(t._s(e[0]))]),t._v(" "),a("td",[t._v(t._s(e[1]))]),t._v(" "),a("td",[t._v(t._s(e[2]))]),t._v(" "),a("td",[t._v(t._s(e[3]))]),t._v(" "),a("td",[a("m-btn",{staticClass:"primary_txt",attrs:{href:{name:"AppDetail",params:{mid:t.$route.params.id,name:e[1],cid:e[0]}}}},[t._v("详情")])],1)])}))])],1)])],1)],1)],1)},staticRenderFns:[]}},177:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isInfoEditor:!1,infoEditorTemp:{}}},methods:{getValueByKey:function(t){return t.split(".").reduce(function(t,e){return t[e]},this)},editorBegin:function(){var t=this;this.isInfoEditor=!0,this.editorElements||(this.editorElements=this.$el.querySelectorAll(".edirot-input")),this.editorElements.forEach(function(e,s){e.removeAttribute("readonly"),t.infoEditorTemp[e.dataset.key]=e.value})},editorSure:function(){var t=this,e={},s=!1;this.isInfoEditor=!1,this.editorElements.forEach(function(a,n){a.setAttribute("readonly","readonly");var i=t.getValueByKey(a.dataset.key);i!==t.infoEditorTemp[a.dataset.key]&&(e[a.dataset.name]=i,s=!0)}),s&&(e.id=this.$route.params.id,this.$Global.async(this.updateApi,!0).getData(e).then(function(e){t.$toast(e.message,"cc")}))},setValueBuKey:function(t,e){var s=this,a=t.split(".");a.forEach(function(t,n){n===a.length-1?s[t]=e:s=s[t]})},editorCancel:function(){var t=this;this.isInfoEditor=!1,this.editorElements.forEach(function(e,s){e.setAttribute("readonly","readonly"),t.setValueBuKey(e.dataset.key,t.infoEditorTemp[e.dataset.key])})}}}},179:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(163),i=a(n),o=s(166),r=a(o),c=s(177),l=a(c),u=s(164),f=a(u),p=s(147),m=a(p);e.default={mixins:[f.default,l.default,m.default],data:function(){return{baseInfo:{cluster_id:-1,cluster_name:""},businessInfo:{contract:{},provider:""},sysInfo:{config:{}},applists:[],machineid:-1,isWaiting:!1,waitingTip:"",isOpen:!1,isDisabled:!1,updateApi:"server_update",performance:"server_performance",performanceData:{}}},methods:{getApiData:function(){var t=this;this.performanceData.id=this.machineid=this.$route.params.id,this.$Global.async("server_detail",!0).getData(null,this.machineid).then(function(e){0===e.status&&(t.baseInfo=e.data.basic_info,t.businessInfo=e.data.business_info,t.sysInfo=e.data.system_info,"run"===t.machineStatus[2]&&(t.isOpen=!0),"stop"===t.machineStatus[2]&&(t.isOpen=!1),t.statusApiSuf=t.baseInfo.instance_id+"/status","Starting"!==t.baseInfo.machine_status&&"Stopping"!==t.baseInfo.machine_status||t.loopGetStatus(t.machineStatus[3]))}),this.$Global.async("server_containers",!0).getData(null,this.machineid).then(function(e){0===e.status&&(t.applists=e.data)})},machineChange:function(){this.isDisabled=!0,this.isOpen?this.machineCtr("server_start"):this.machineCtrPop("server_stop")},machineCtrPop:function(t){var e=this,s=r.default.server[t];this.popperInfo("您确定要 "+s[4]+" 吗?",function(s){e.machineCtr(t)},function(t){e.isOpen=!e.isOpen,e.isDisabled=!1})},machineCtr:function(t){var e=this;this.$Global.async(t,!0).getData(null,this.machineid).then(function(s){0===s.status?e.loopGetStatus(t):e.$toast(s.message,"cc")},function(t){console.log(void 0===t?"undefined":(0,i.default)(t))})},loopGetStatus:function(t){var e=this,s=r.default.server[t];this.waitingTip=s[3],this.isWaiting=!0,this.baseInfo.machine_status=s[1],this.yqvalue=s[2],this.loopIV=setInterval(function(t){e.$Global.async("server_status",!0).getData(null,e.statusApiSuf).then(function(t){0===t.status&&(e.baseInfo.machine_status=t.data,t.data===e.yqvalue&&(e.isWaiting=!1,e.isDisabled=!1,clearInterval(e.loopIV)))})},1e3*s[0])},deleteMachine:function(){var t=this;this.popperDelete(this.baseInfo.name,function(e){t.$Global.async("server_del",!0).getData({id:[t.$route.params.id]}).then(function(e){0===e.status&&t.$router.push({name:"Machines"}),t.$toast(e.message,"cc")})})}},computed:{businessStatus:function(){return r.default.business[this.baseInfo.business_status]||[]},machineStatus:function(){return r.default.machine[this.baseInfo.machine_status]||[]}},created:function(){this.getApiData()},beforeDestroy:function(){this.loopIV&&clearInterval(this.loopIV)}}},185:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(179),n=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={mixins:[n.default]}}});
//# sourceMappingURL=0.54bb8dbff3f8516da9ec.js.map