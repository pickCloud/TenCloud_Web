webpackJsonp([15],{115:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(66),i=function(e){return e&&e.__esModule?e:{default:e}}(a);i.default.install=function(e){e.component(i.default.name,i.default)},t.default=i.default},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(67),i=function(e){return e&&e.__esModule?e:{default:e}}(a);i.default.install=function(e){e.component(i.default.name,i.default)},t.default=i.default},117:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(23),r=a(i),o=n(41),u=a(o),l=n(45),s=a(l),c=n(40),d=a(c);n(42);var p=n(44),f=a(p),h=n(43),m=a(h);r.default.config.productionTip=!1,r.default.prototype.$Global=f.default,r.default.use(d.default),r.default.use(m.default),window.Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},new r.default({el:"#app",router:s.default,data:function(){return{come:"comoa"}},template:"<App/>",components:{App:u.default}})},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",data:function(){return{transitionName:"fade",navdata:[{label:"服务器",icon:"icon icon-msnui-server",children:[{label:"集群",icon:"icon icon-jiqun",link:{name:"Cluster"}},{label:"应用",icon:"icon icon-yingyong",link:{name:"Application"}}]},{label:"项目",icon:"icon icon-xiangmu",link:{name:"Project"}},{label:"仓库",icon:"icon icon-cangku",children:[{label:"镜像仓库",icon:"icon icon-jingxiang",link:{name:"Hub"}},{label:"文件仓库",icon:"icon icon-552cd47fba2cc",link:{name:"FileHub"}}]}]}},watch:{$route:function(e,t){var n=e.meta.level,a=t.meta.level;this.transitionName=void 0===a?"fade":n<a?"slide-right":"slide-left"}}}},119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MChart",props:{option:Object,nodes:{type:Number,default:60}},watch:{option:{handler:function(e,t){this.$EChart&&e&&this.$EChart.setOption(e)},deep:!0}},methods:{update:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this.option.series[a].data;n?e.forEach(function(e,n){i.length>=t.nodes&&i.shift(),i.push(e)}):(i.length>=this.nodes&&i.shift(),i.push(e))},resize:function(){this.$EChart&&this.$EChart.resize()}},mounted:function(){this.$EChart=window.echarts.init(this.$el),this.option&&this.$EChart.setOption(this.option)},beforeDestroy:function(){this.$EChart.dispose()}}},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Search"}},41:function(e,t,n){n(72);var a=n(13)(n(118),n(69),null,null);e.exports=a.exports},42:function(e,t){},43:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(116),r=a(i),o=n(115),u=a(o),l={Search:r.default,ECharts:u.default};l.install=function(e){for(var t in l){var n=l[t];n&&"install"!==t&&e.use(n)}},t.default=l},44:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(112),r=a(i),o=n(113),u=a(o),l=n(114),s=a(l),c=n(47),d=a(c),p=/.+localhost.+/.test(window.location.href),f={baseURL:p?"http://10.0.1.9":"http://47.94.18.22",wsURL:p?"ws://10.0.1.9:8010":"ws://47.94.18.22",clusters:{u:"/api/clusters",m:"get"},cluster_add:{u:"/api/cluster/new",m:"post"},cluster_del:{u:"/api/cluster/del",m:"post"},cluster_detail:{u:"/api/cluster/",m:"get"},cluster_update:{u:"/api/cluster/update",m:"post"},server_add:{u:"/api/server/new",m:"post"},server_del:{u:"/api/server/del",m:"post"},server_detail:{u:"/api/server/",m:"get"},server_update:{u:"/api/server/update",m:"post"},server_migration:{u:"/api/server/migration",m:"post"},server_performance:{u:"/api/server/performance",m:"post"},server_start:{u:"/api/server/start/",m:"get"},server_reboot:{u:"/api/server/reboot/",m:"get"},server_stop:{u:"/api/server/stop/",m:"get"}},h=function(){function e(t){(0,u.default)(this,e),this._data=null,this._api=f.baseURL+f[t].u,this._method=f[t].m}return(0,s.default)(e,[{key:"getData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new r.default(function(a,i){if(null===e._data)switch(e._method){case"post":if(null===t)throw new Error("post need params");d.default.post(e._api+n,t).then(function(t){200===t.status&&(e._data=t.data,a(t.data))});break;case"get":d.default.get(e._api+n,t).then(function(t){200===t.status&&(e._data=t.data,a(t.data))})}else a(e._data)})}},{key:"data",set:function(e){this._data=e}}]),e}(),m={},v={apis:f,async:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!f.hasOwnProperty(e))throw new Error("key: "+e+" is no found");return m.hasOwnProperty(e)&&!t||(m[e]=new h(e)),m[e]}};t.default=v},45:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(23),r=a(i),o=n(109),u=a(o),l=function(e){return n.e(11).then(function(){return e(n(133))}.bind(null,n)).catch(n.oe)},s=function(e){return n.e(4).then(function(){return e(n(126))}.bind(null,n)).catch(n.oe)},c=function(e){return n.e(2).then(function(){return e(n(127))}.bind(null,n)).catch(n.oe)},d=function(e){return n.e(1).then(function(){return e(n(132))}.bind(null,n)).catch(n.oe)},p=function(e){return n.e(0).then(function(){return e(n(123))}.bind(null,n)).catch(n.oe)},f=function(e){return n.e(10).then(function(){return e(n(124))}.bind(null,n)).catch(n.oe)},h=function(e){return n.e(6).then(function(){return e(n(125))}.bind(null,n)).catch(n.oe)},m=function(e){return n.e(3).then(function(){return e(n(136))}.bind(null,n)).catch(n.oe)},v=function(e){return n.e(5).then(function(){return e(n(135))}.bind(null,n)).catch(n.oe)},_=function(e){return n.e(7).then(function(){return e(n(134))}.bind(null,n)).catch(n.oe)},b=function(e){return n.e(9).then(function(){return e(n(130))}.bind(null,n)).catch(n.oe)},g=function(e){return n.e(8).then(function(){return e(n(131))}.bind(null,n)).catch(n.oe)},w=function(e){return n.e(13).then(function(){return e(n(128))}.bind(null,n)).catch(n.oe)},M=function(e){return n.e(12).then(function(){return e(n(129))}.bind(null,n)).catch(n.oe)};r.default.use(u.default),t.default=new u.default({routes:[{path:"/",name:"Main",redirect:{name:"Cluster"},meta:{level:0},component:l},{path:"/cluster",name:"Cluster",meta:{level:1},component:s},{path:"/clusterdetail/:id",name:"ClusterDetail",meta:{level:2},component:c},{path:"/machinedetail/:id",name:"MachineDetail",meta:{level:3},component:d},{path:"/addhost/:id",name:"AddHost",meta:{level:2},component:p},{path:"/application",name:"Application",meta:{level:1},component:f},{path:"/appdetail/:id",name:"ApplicationDetail",meta:{level:2},component:h},{path:"/project",name:"Project",meta:{level:1},component:m},{path:"/proadd",name:"ProAdd",meta:{level:2},component:_},{path:"/prodetail/:id",name:"ProDetail",meta:{level:2},component:v},{path:"/hub",name:"Hub",meta:{level:1},component:b},{path:"/hubdetail/:id",name:"HubDetail",meta:{level:2},component:g},{path:"/deploy/:id",name:"Deploy",meta:{level:2},component:w},{path:"/filehub",name:"FileHub",meta:{level:1},component:M}]})},66:function(e,t,n){n(73);var a=n(13)(n(119),n(70),null,null);e.exports=a.exports},67:function(e,t,n){var a=n(13)(n(120),n(68),null,null);e.exports=a.exports},68:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"piece-search"},[n("input",{staticClass:"piece-search_input",attrs:{type:"text",placeholder:"搜索"}}),e._v(" "),n("i",{staticClass:"icon icon-sousuo"})])}]}},69:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"top-nav"},[n("div",{staticClass:"top-nav_logo text-center"},[n("router-link",{attrs:{to:{name:"Main"}}},[e._v("COMB")])],1)]),e._v(" "),n("nav",{staticClass:"left-nav"},[n("m-tree",{attrs:{data:e.navdata,collapse:""}})],1),e._v(" "),n("div",{staticClass:"view-box"},[n("transition",{attrs:{name:e.transitionName,appear:""}},[n("router-view",{staticClass:"routerViewBox"})],1)],1)])},staticRenderFns:[]}},70:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"resize",rawName:"v-resize",value:e.resize,expression:"resize"}],staticClass:"echarts"})},staticRenderFns:[]}},72:function(e,t){},73:function(e,t){}},[117]);
//# sourceMappingURL=app.203ccffed25a5cd0bdc5.js.map