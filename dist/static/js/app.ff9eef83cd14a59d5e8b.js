webpackJsonp([10],{118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(69),i=function(e){return e&&e.__esModule?e:{default:e}}(a);i.default.install=function(e){e.component(i.default.name,i.default)},t.default=i.default},119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(70),i=function(e){return e&&e.__esModule?e:{default:e}}(a);i.default.install=function(e){e.component(i.default.name,i.default)},t.default=i.default},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(122),i=function(e){return e&&e.__esModule?e:{default:e}}(a),r="JIMU_COS_"+i.default.unid(),u=[];window.onresize=function(){u.forEach(function(e){return e[r].handle()})},t.default={bind:function(e,t,n){var a=u.push(e)-1,i=function(){var e=n.context[t.expression];t.expression&&e?e():t.value&&t.value()};e[r]={id:a,handle:i,methodName:t.expression,bindingFn:t.value}},update:function(e,t){e[r].methodName=t.expression,e[r].bindingFn=t.value},unbind:function(e){for(var t=u.length,n=0;n<t;n++)if(u[n][r].id===e[r].id){u.splice(n,1);break}}}},121:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(23),r=a(i),u=n(41),o=a(u),s=n(45),l=a(s),c=n(46),d=a(c);n(42);var f=n(44),p=a(f),h=n(43),v=a(h);r.default.config.productionTip=!1,r.default.prototype.$Global=p.default,r.default.use(d.default),r.default.use(v.default),window.Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},new r.default({el:"#app",router:l.default,data:function(){return{come:"comoa"}},template:"<App/>",components:{App:o.default}})},122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={unid:function(){return Math.random().toString(36).substr(2,10)},jsClassName:function(e){return void 0===e?"undefined":e.constructor.toString().match(/function\s+(.+)\(/)[1].toLocaleLowerCase()}}},123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",data:function(){return{navdata:[{label:"服务器",icon:"icon icon-msnui-server",children:[{label:"集群",icon:"icon icon-jiqun",link:{name:"Cluster"}},{label:"应用",icon:"icon icon-yingyong",link:{name:"Application"}}]},{label:"项目",icon:"icon icon-xiangmu",link:""},{label:"仓库",icon:"icon icon-cangku",children:[{label:"镜像仓库",icon:"icon icon-jingxiang",link:{name:"Hub"}},{label:"文件仓库",icon:"icon icon-552cd47fba2cc",link:{name:"FileHub"}}]}]}}}},124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(120),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"MChart",directives:{Resize:i.default},props:{option:Object,nodes:{type:Number,default:60}},watch:{option:{handler:function(e,t){this.$EChart&&e&&this.$EChart.setOption(e)},deep:!0}},methods:{update:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this.option.series[a].data;n?e.forEach(function(e,n){i.length>=t.nodes&&i.shift(),i.push(e)}):(i.length>=this.nodes&&i.shift(),i.push(e))},resize:function(){this.$EChart&&this.$EChart.resize()}},mounted:function(){this.$EChart=window.echarts.init(this.$el),this.option&&this.$EChart.setOption(this.option)},beforeDestroy:function(){this.$EChart.dispose()}}},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Search"}},41:function(e,t,n){n(75);var a=n(13)(n(123),n(72),null,null);e.exports=a.exports},42:function(e,t){},43:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(119),r=a(i),u=n(118),o=a(u),s={Search:r.default,ECharts:o.default};s.install=function(e){for(var t in s){var n=s[t];n&&"install"!==t&&e.use(n)}},t.default=s},44:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(115),r=a(i),u=n(116),o=a(u),s=n(117),l=a(s),c=n(48),d=a(c),f=/.+localhost.+/.test(window.location.href),p={baseURL:f?"http://10.0.1.15":"http://47.94.18.22",wsURL:f?"ws://10.0.1.15:8010":"ws://47.94.18.22",clusters:{u:"/api/clusters",m:"get"},cluster_add:{u:"/api/cluster/new",m:"post"},cluster_del:{u:"/api/cluster/del",m:"post"},cluster_detail:{u:"/api/cluster/",m:"get"},cluster_update:{u:"/api/cluster/update",m:"post"},server_add:{u:"/api/server/new",m:"post"},server_del:{u:"/api/server/del",m:"post"},server_detail:{u:"/api/server/",m:"get"},server_update:{u:"/api/server/update",m:"post"},server_migration:{u:"/api/server/migration",m:"post"},server_deletion:{u:"/api/server/deletion",m:"post"},server_performance:{u:"/api/server/performance",m:"post"},server_start:{u:"/api/server/start/",m:"get"},server_reboot:{u:"/api/server/reboot/",m:"get"},server_stop:{u:"/api/server/stop/",m:"get"}},h=function(){function e(t){(0,o.default)(this,e),this._data=null,this._api=p.baseURL+p[t].u,this._method=p[t].m}return(0,l.default)(e,[{key:"getData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new r.default(function(a,i){if(null===e._data)switch(e._method){case"post":if(null===t)throw new Error("post need params");d.default.post(e._api+n,t).then(function(t){200===t.status&&(e._data=t.data,a(t.data))});break;case"get":d.default.get(e._api+n,t).then(function(t){200===t.status&&(e._data=t.data,a(t.data))})}else a(e._data)})}},{key:"data",set:function(e){this._data=e}}]),e}(),v={},m={apis:p,async:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!p.hasOwnProperty(e))throw new Error("key: "+e+" is no found");return v.hasOwnProperty(e)&&!t||(v[e]=new h(e)),v[e]}};t.default=m},45:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(23),r=a(i),u=n(112),o=a(u),s=function(e){return n.e(7).then(function(){return e(n(136))}.bind(null,n)).catch(n.oe)},l=function(e){return n.e(3).then(function(){return e(n(131))}.bind(null,n)).catch(n.oe)},c=function(e){return n.e(2).then(function(){return e(n(132))}.bind(null,n)).catch(n.oe)},d=function(e){return n.e(1).then(function(){return e(n(135))}.bind(null,n)).catch(n.oe)},f=function(e){return n.e(0).then(function(){return e(n(128))}.bind(null,n)).catch(n.oe)},p=function(e){return n.e(6).then(function(){return e(n(129))}.bind(null,n)).catch(n.oe)},h=function(e){return n.e(4).then(function(){return e(n(130))}.bind(null,n)).catch(n.oe)},v=function(e){return n.e(5).then(function(){return e(n(134))}.bind(null,n)).catch(n.oe)},m=function(e){return n.e(8).then(function(){return e(n(133))}.bind(null,n)).catch(n.oe)};r.default.use(o.default),t.default=new o.default({routes:[{path:"/",name:"Main",redirect:{name:"Cluster"},component:s},{path:"/cluster",name:"Cluster",component:l},{path:"/clusterdetail/:id",name:"ClusterDetail",component:c},{path:"/machinedetail/:id",name:"MachineDetail",component:d},{path:"/addhost/:id",name:"AddHost",component:f},{path:"/application",name:"Application",component:p},{path:"/appdetail/:id",name:"ApplicationDetail",component:h},{path:"/hub",name:"Hub",component:v},{path:"/filehub",name:"FileHub",component:m}]})},69:function(e,t,n){n(76);var a=n(13)(n(124),n(73),null,null);e.exports=a.exports},70:function(e,t,n){var a=n(13)(n(125),n(71),null,null);e.exports=a.exports},71:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"piece-search"},[n("input",{staticClass:"piece-search_input",attrs:{type:"text",placeholder:"搜索"}}),e._v(" "),n("i",{staticClass:"icon icon-sousuo"})])}]}},72:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"top-nav"},[n("div",{staticClass:"top-nav_logo text-center"},[n("router-link",{attrs:{to:{name:"Main"}}},[e._v("COMB")])],1)]),e._v(" "),n("nav",{staticClass:"left-nav"},[n("m-tree",{attrs:{data:e.navdata,collapse:""}})],1),e._v(" "),n("div",{staticClass:"view-box"},[n("router-view")],1)])},staticRenderFns:[]}},73:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"resize",rawName:"v-resize",value:e.resize,expression:"resize"}],staticClass:"echarts"})},staticRenderFns:[]}},75:function(e,t){},76:function(e,t){}},[121]);
//# sourceMappingURL=app.ff9eef83cd14a59d5e8b.js.map