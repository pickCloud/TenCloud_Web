webpackJsonp([12],{122:function(e,t){},125:function(e,t,n){var a=n(7)(n(86),n(132),null,null);e.exports=a.exports},126:function(e,t,n){var a=n(7)(n(88),n(129),null,null);e.exports=a.exports},127:function(e,t,n){var a=n(7)(n(89),n(128),null,null);e.exports=a.exports},128:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel",style:[e.panelStyle]},[e._t("title",[n("div",{staticClass:"panel-title"},[e._v(e._s(e.title))])]),e._v(" "),e._t("default"),e._v(" "),e.hasClose?n("div",{staticClass:"panel-close close"}):e._e()],2)},staticRenderFns:[]}},129:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"epie"},[n("e-chart",{attrs:{option:e.opt,nodes:e.nodes}})],1)},staticRenderFns:[]}},130:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"resize",rawName:"v-resize",value:e.resize,expression:"resize"}],staticClass:"echarts"})},staticRenderFns:[]}},131:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"app-top",class:[e.miniClass]},[n("aside",{staticClass:"lay-aside left"},[n("span",{staticClass:"_logo vam"},[n("router-link",{attrs:{to:{name:"Main"}}},[n("span",{staticClass:"show-lay-mini"},[e._v("CO")]),n("span",{staticClass:"hide-lay-mini"},[e._v("Console")])])],1),e._v(" "),n("span",{staticClass:"_cndesc vam right hide-mini"},[e._v("控制台")])]),e._v(" "),n("div",{staticClass:"lay-body"},[e.hasBack?n("m-btn",{nativeOn:{click:function(t){e.back(t)}}},[n("i",{staticClass:"icon icon-return"})]):e._e()],1)]),e._v(" "),n("div",{staticClass:"app-body clearfix",class:[e.miniClass]},[n("aside",{staticClass:"lay-aside left"},[n("div",{staticClass:"mini-ctrl text-center",on:{click:function(t){e.isMini=!e.isMini}}},[n("i",{staticClass:"icon icon-category"})]),e._v(" "),n("m-tree",{attrs:{model:e.navData,sizeh:50},on:{change:e.navChange}})],1),e._v(" "),n("div",{staticClass:"lay-body left"},[n("router-view",{staticClass:"routerViewBox"})],1)])])},staticRenderFns:[]}},132:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"eline"},[n("e-chart",{attrs:{option:e.opt,nodes:e.nodes}})],1)},staticRenderFns:[]}},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(44),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={props:{nodes:Number},components:{EChart:r.default}}},44:function(e,t,n){n(122);var a=n(7)(n(87),n(130),null,null);e.exports=a.exports},45:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(83),o=a(r),i=n(82),s=a(i),u={Panel:o.default,ECharts:s.default};u.install=function(e){for(var t in u){var n=u[t];n&&"install"!==t&&"theme"!==t&&e.use(n)}},t.default=u},46:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(92),o=a(r),i=n(93),s=a(i),u=n(94),l=a(u),c=n(63),d=a(c),p=n(15),f=a(p),m=/.+localhost.+/.test(window.location.href),h={baseURL:"http://47.94.18.22",wsURL:m?"ws://10.0.1.9:8010":"ws://47.94.18.22",clusters:{u:"/api/clusters",m:"get"},cluster_add:{u:"/api/cluster/new",m:"post"},cluster_del:{u:"/api/cluster/del",m:"post"},cluster_detail:{u:"/api/cluster/",m:"get"},cluster_update:{u:"/api/cluster/update",m:"post"},server_add:{u:"/api/server/new",m:"post"},server_del:{u:"/api/server/del",m:"post"},server_detail:{u:"/api/server/",m:"get"},server_containers:{u:"/api/server/containers/",m:"get"},server_update:{u:"/api/server/update",m:"post"},server_migration:{u:"/api/server/migration",m:"post"},server_performance:{u:"/api/server/performance",m:"post"},server_start:{u:"/api/server/start/",m:"get"},server_reboot:{u:"/api/server/reboot/",m:"get"},server_stop:{u:"/api/server/stop/",m:"get"},app_performance:{u:"/api/server/container/performance",m:"post"},server_status:{u:"/api/server/",m:"get"},container_start:{u:"/api/server/container/start",m:"post"},container_stop:{u:"/api/server/container/stop",m:"post"},container_del:{u:"/api/server/container/del",m:"post"},container_detail:{u:"/api/server/",m:"get"},projects:{u:"/api/projects",m:"get"},project_del:{u:"/api/project/del",m:"post"},project_add:{u:"/api/project/new",m:"post"},project_update:{u:"/api/project/update",m:"post"},project_repos:{u:"/api/repos",m:"get"},project_detail:{u:"/api/project/",m:"get"},project_vers:{u:"/api/project/",m:"get"},project_image:{u:"/api/project/",m:"get"},project_branch:{u:"/api/repos/branches?repos_name=",m:"get"},project_create:{u:"/api/project/image/creation",m:"post"},project_deployment:{u:"/api/project/deployment",m:"post"}},v=function(){function e(t){(0,s.default)(this,e),this._data=null,this._api=h.baseURL+h[t].u,this._method=h[t].m}return(0,l.default)(e,[{key:"getData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new o.default(function(a,r){if(null===e._data)switch(e._method){case"post":if(null===t)throw new Error("post need params");d.default.post(e._api+n,t).then(function(t){200===t.status&&(e._data=t.data,a(t.data))}).catch(function(e){f.default.prototype.$toast(e.response.data.message,"cc"),r(e)});break;case"get":d.default.get(e._api+n,t).then(function(t){200===t.status&&(e._data=t.data,a(t.data))}).catch(function(e){f.default.prototype.$toast(e.response.data.message,"cc"),r(e)})}else a(e._data)})}},{key:"data",set:function(e){this._data=e}}]),e}(),_={},g={apis:h,async:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!h.hasOwnProperty(e))throw new Error("key: "+e+" is no found");return _.hasOwnProperty(e)&&!t||(_[e]=new v(e)),_[e]}};t.default=g},47:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),o=a(r),i=n(133),s=a(i),u=function(e){return n.e(10).then(function(){return e(n(144))}.bind(null,n)).catch(n.oe)},l=function(e){return n.e(3).then(function(){return e(n(143))}.bind(null,n)).catch(n.oe)},c=function(e){return n.e(0).then(function(){return e(n(142))}.bind(null,n)).catch(n.oe)},d=function(e){return n.e(4).then(function(){return e(n(141))}.bind(null,n)).catch(n.oe)},p=function(e){return n.e(1).then(function(){return e(n(138))}.bind(null,n)).catch(n.oe)},f=function(e){return n.e(5).then(function(){return e(n(147))}.bind(null,n)).catch(n.oe)},m=function(e){return n.e(8).then(function(){return e(n(145))}.bind(null,n)).catch(n.oe)},h=function(e){return n.e(9).then(function(){return e(n(146))}.bind(null,n)).catch(n.oe)},v=function(e){return n.e(2).then(function(){return e(n(139))}.bind(null,n)).catch(n.oe)},_=function(e){return n.e(6).then(function(){return e(n(140))}.bind(null,n)).catch(n.oe)},g=function(e){return n.e(7).then(function(){return e(n(148))}.bind(null,n)).catch(n.oe)};o.default.use(s.default),t.default=new s.default({routes:[{path:"/",name:"Main",redirect:{name:"Machines"},meta:{level:0},component:u},{path:"/machines",name:"Machines",meta:{level:1},component:l},{path:"/machinedetail/:id",name:"MachineDetail",meta:{level:2},component:c},{path:"/machineadd/:id",name:"MachineAdd",meta:{level:2},component:d},{path:"/appdetail/:mid/:name/:cid",name:"AppDetail",meta:{level:2},component:p},{path:"/projects",name:"Projects",meta:{level:1},component:f},{path:"/projectadd",name:"ProjectAdd",meta:{level:2},component:m},{path:"/projecteditor/:id",name:"ProjectEditor",meta:{level:2},component:m},{path:"/projectdetail/:id",name:"ProjectDetail",meta:{level:2},component:h},{path:"/build/:id",name:"Build",meta:{level:2},component:v},{path:"/deploy/:id",name:"Deploy",meta:{level:2},component:_},{path:"/verlist",name:"Verlist",meta:{level:2},component:g}]})},48:function(e,t){},49:function(e,t){},51:function(e,t,n){var a=n(7)(n(85),n(131),null,null);e.exports=a.exports},53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(90),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=o},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{transitionName:"fade",isMini:!1,navData:[{label:"机器",link:{name:"Machines"},icon:"icon icon-jiqun"},{label:"项目",link:{name:"Projects"},icon:"icon icon-xiangmu1"}]}},watch:{$route:function(e,t){null!==t.name&&(e.meta.from=t)}},computed:{miniClass:function(){return this.isMini?"lay-mini":""},hasBack:function(){return!0}},methods:{navChange:function(e,t){t||e.link&&this.$router.push(e.link)},back:function(){this.$router.back()}}}},82:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(44),o=a(r),i=n(125),s=a(i),u=n(126),l=a(u);o.default.install=function(e){e.component(o.default.name,o.default),e.component(l.default.name,l.default),e.component(s.default.name,s.default)},t.default=o.default},83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(127),r=function(e){return e&&e.__esModule?e:{default:e}}(a);r.default.install=function(e){e.component(r.default.name,r.default)},t.default=r.default},84:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(15),o=a(r),i=n(51),s=a(i),u=n(47),l=a(u),c=n(50),d=a(c),p=n(46),f=a(p);n(48),n(49);var m=n(45),h=a(m);o.default.config.productionTip=!1,o.default.prototype.$Global=f.default,o.default.use(d.default),o.default.use(h.default),window.Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},new o.default({el:"#app",router:l.default,data:function(){return{come:"comoa"}},template:"<App/>",components:{App:s.default}})},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(81),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"app",mixins:[r.default]}},86:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(36),o=a(r),i=n(53),s=a(i);t.default={name:"ELine",props:{data:Array,lineColor:String,series:Array,colors:{type:Array,default:function(e){return[["#48bbc0","rgba(73, 97, 106, 1)","rgba(73, 97, 106, 0)"]]}},axis:{type:Object,default:function(){return{axisLine:{lineStyle:{color:"#7f8da4"}},axisLabel:{textStyle:{fontSize:14}}}}}},computed:{opt:function(){return{tooltip:{trigger:"axis",formatter:function(e){return e[0].data[2]},padding:0,backgroundColor:"rgba(0,0,0,0.8)",textStyle:{color:"#7f8da4"}},xAxis:(0,s.default)({type:"time",splitLine:{show:!1}},this.axis),yAxis:(0,s.default)({type:"value",boundaryGap:["0%","30%"],splitLine:{show:!1}},this.axis),series:this.seriesFormat}},seriesFormat:function(){var e=this;return this.series.map(function(t,n){return(0,s.default)({type:"line",smooth:!0,sampling:"average",itemStyle:{normal:{color:e.colors[n][0]}},lineStyle:{normal:{color:e.colors[n][0]}},areaStyle:{normal:{color:new window.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:e.colors[n][1]},{offset:1,color:e.colors[n][2]}])}}},t)})}},mixins:[o.default]}},87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MChart",props:{option:Object,nodes:{type:Number,default:60}},watch:{option:{handler:function(e,t){this.$EChart.setOption(e)},deep:!0}},methods:{update:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=this.option.series[a].data;n?e.forEach(function(e,n){r.length>=t.nodes&&r.shift(),r.push(e)}):(r.length>=this.nodes&&r.shift(),r.push(e))},resize:function(){this.$EChart&&this.$EChart.resize()}},mounted:function(){this.$EChart=window.echarts.init(this.$el),this.option&&this.$EChart.setOption(this.option)},beforeDestroy:function(){this.$EChart.dispose()}}},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(36),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"EPie",props:{label:Array,data:Array},computed:{opt:function(){return{tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},legend:{left:"center",data:this.label,textStyle:{color:"#7f8da4"},top:"70%"},series:[{type:"pie",radius:"50%",center:["50%","30%"],data:this.data,label:{normal:{formatter:"{b} {d}%"}}}]}}},mixins:[r.default]}},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Panel",props:{title:String,bgColor:String,hasClose:Boolean},computed:{panelStyle:function(){var e={};return this.bgColor&&(e.backgroundColor=this.bgColor),e}}}}},[84]);
//# sourceMappingURL=app.1253392e9e486b82f711.js.map