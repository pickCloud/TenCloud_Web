webpackJsonp([16],{121:function(e,t){},124:function(e,t,n){var r=n(7)(n(86),n(131),null,null);e.exports=r.exports},125:function(e,t,n){var r=n(7)(n(88),n(128),null,null);e.exports=r.exports},126:function(e,t,n){var r=n(7)(n(89),n(127),null,null);e.exports=r.exports},127:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel",style:[e.panelStyle]},[e._t("title",[n("div",{staticClass:"panel-title"},[e._v(e._s(e.title))])]),e._v(" "),e._t("default"),e._v(" "),e.hasClose?n("div",{staticClass:"panel-close close"}):e._e()],2)},staticRenderFns:[]}},128:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"epie"},[n("e-chart",{attrs:{option:e.opt,nodes:e.nodes}})],1)},staticRenderFns:[]}},129:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"resize",rawName:"v-resize",value:e.resize,expression:"resize"}],staticClass:"echarts"})},staticRenderFns:[]}},130:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("router-view")},staticRenderFns:[]}},131:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"eline"},[n("e-chart",{attrs:{option:e.opt,nodes:e.nodes}})],1)},staticRenderFns:[]}},20:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(64),a=r(o),u=n(92),i=r(u),s=n(93),l=r(s),c=n(65),p=r(c),d=n(15),f=r(d),m=n(63),h=r(m),v=/.+localhost.+/.test(window.location.href);p.default.defaults.withCredentials=!0;var _={baseURL:"http://console.10.com",wsURL:v?"ws://10.0.1.9:8010":"ws://console.10.com",clusters:{u:"/api/clusters",m:"get"},cluster_add:{u:"/api/cluster/new",m:"post"},cluster_del:{u:"/api/cluster/del",m:"post"},cluster_detail:{u:"/api/cluster/",m:"get"},cluster_update:{u:"/api/cluster/update",m:"post"},server_add:{u:"/api/server/new",m:"post"},server_del:{u:"/api/server/del",m:"post"},server_detail:{u:"/api/server/",m:"get"},server_containers:{u:"/api/server/containers/",m:"get"},server_update:{u:"/api/server/update",m:"post"},server_migration:{u:"/api/server/migration",m:"post"},server_performance:{u:"/api/server/performance",m:"post"},server_start:{u:"/api/server/start/",m:"get"},server_reboot:{u:"/api/server/reboot/",m:"get"},server_stop:{u:"/api/server/stop/",m:"get"},app_performance:{u:"/api/server/container/performance",m:"post"},server_status:{u:"/api/server/",m:"get"},container_start:{u:"/api/server/container/start",m:"post"},container_stop:{u:"/api/server/container/stop",m:"post"},container_del:{u:"/api/server/container/del",m:"post"},container_detail:{u:"/api/server/",m:"get"},projects:{u:"/api/projects",m:"get"},project_del:{u:"/api/project/del",m:"post"},project_add:{u:"/api/project/new",m:"post"},project_update:{u:"/api/project/update",m:"post"},project_repos:{u:"/api/repos",m:"get"},project_detail:{u:"/api/project/",m:"get"},project_vers:{u:"/api/project/",m:"get"},project_image:{u:"/api/project/",m:"get"},project_branch:{u:"/api/repos/branches?repos_name=",m:"get"},project_create:{u:"/api/project/image/creation",m:"post"},project_container_list:{u:"/api/project/container/",m:"get"},project_deployment:{u:"/api/project/deployment",m:"post"},user_update:{u:"/api/user/update",m:"post"},user_login:{u:"/api/user/login",m:"post"},user_verify:{u:"/api/user/sms/",m:"post"},user_logout:{u:"/api/user/logout",m:"post"},user_info:{u:"/api/user",m:"get"},user_thumb_token:{u:"/api/user/token",m:"get"}},g=function(){function e(t){(0,i.default)(this,e),this._data=null,this._api=_.baseURL+_[t].u,this._method=_[t].m}return(0,l.default)(e,[{key:"getData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return new a.default(function(o,a){if(null===t._data)switch(t._method){case"post":if(null===e)throw new Error("post need params");p.default.post(t._api+n,e).then(function(e){200===e.status&&(t._data=e.data,o(e.data))}).catch(function(e){r&&f.default.prototype.$toast(e.response.data.message,"cc"),a(e)});break;case"get":p.default.get(t._api+n,e).then(function(e){200===e.status&&(t._data=e.data,o(e.data))}).catch(function(e){r&&f.default.prototype.$toast(e.response.data.message,"cc"),a(e)})}else o(t._data)})}},{key:"data",set:function(e){this._data=e}}]),e}(),b={},y={apis:_,async:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!_.hasOwnProperty(e))throw new Error("key: "+e+" is no found");return b.hasOwnProperty(e)&&!t||(b[e]=new g(e)),b[e]},login:function(e,t,n){var r=h.default.get("user");r?t({status:0,data:r}):y.async("user_login",!0).getData(e,"",!1).then(function(n){h.default.set("user",e,{expires:1}),t(n)},function(e){n(e)})},logout:function(){h.default.remove("user")},isLogin:function(){return h.default.get("user")}};t.default=y},37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(45),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={props:{nodes:Number},components:{EChart:o.default}}},45:function(e,t,n){n(121);var r=n(7)(n(87),n(129),null,null);e.exports=r.exports},46:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(84),a=r(o),u=n(83),i=r(u),s={Panel:a.default,ECharts:i.default};s.install=function(e){for(var t in s){var n=s[t];n&&"install"!==t&&"theme"!==t&&e.use(n)}},t.default=s},47:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),a=r(o),u=n(132),i=r(u),s=n(20),l=r(s),c=function(e){return n.e(3).then(function(){return e(n(151))}.bind(null,n)).catch(n.oe)},p=function(e){return n.e(14).then(function(){return e(n(143))}.bind(null,n)).catch(n.oe)},d=function(e){return n.e(7).then(function(){return e(n(142))}.bind(null,n)).catch(n.oe)},f=function(e){return n.e(0).then(function(){return e(n(141))}.bind(null,n)).catch(n.oe)},m=function(e){return n.e(8).then(function(){return e(n(140))}.bind(null,n)).catch(n.oe)},h=function(e){return n.e(1).then(function(){return e(n(137))}.bind(null,n)).catch(n.oe)},v=function(e){return n.e(9).then(function(){return e(n(146))}.bind(null,n)).catch(n.oe)},_=function(e){return n.e(11).then(function(){return e(n(144))}.bind(null,n)).catch(n.oe)},g=function(e){return n.e(13).then(function(){return e(n(145))}.bind(null,n)).catch(n.oe)},b=function(e){return n.e(2).then(function(){return e(n(138))}.bind(null,n)).catch(n.oe)},y=function(e){return n.e(5).then(function(){return e(n(139))}.bind(null,n)).catch(n.oe)},j=function(e){return n.e(10).then(function(){return e(n(149))}.bind(null,n)).catch(n.oe)},x=function(e){return n.e(12).then(function(){return e(n(148))}.bind(null,n)).catch(n.oe)},w=function(e){return n.e(4).then(function(){return e(n(150))}.bind(null,n)).catch(n.oe)},M=function(e){return n.e(6).then(function(){return e(n(147))}.bind(null,n)).catch(n.oe)};a.default.use(i.default);var E=new i.default({routes:[{path:"/",component:c,beforeEnter:function(e,t,n){l.default.isLogin()?n():E.replace({name:"Login"})},children:[{path:"/",name:"Main",redirect:{name:"Machines"},meta:{level:0},component:p},{path:"/machines",name:"Machines",meta:{level:1},component:d},{path:"/machinedetail/:id",name:"MachineDetail",meta:{level:2},component:f},{path:"/machineadd/:id",name:"MachineAdd",meta:{level:2},component:m},{path:"/appdetail/:mid/:name/:cid",name:"AppDetail",meta:{level:2},component:h},{path:"/projects",name:"Projects",meta:{level:1},component:v},{path:"/projectadd",name:"ProjectAdd",meta:{level:2},component:_},{path:"/projecteditor/:id",name:"ProjectEditor",meta:{level:2},component:_},{path:"/projectdetail/:id",name:"ProjectDetail",meta:{level:2},component:g},{path:"/build/:id",name:"Build",meta:{level:2},component:b},{path:"/deploy/:id",name:"Deploy",meta:{level:2},component:y},{path:"/verlist",name:"Verlist",meta:{level:2},component:j},{path:"/vernotes/:id",name:"VerNotes",meta:{level:2},component:x},{path:"/userinfo",name:"UserInfo",meta:{level:2},component:M}]},{path:"/login",name:"Login",meta:{level:0},component:w}]});t.default=E},48:function(e,t){},49:function(e,t){},51:function(e,t,n){var r=n(7)(null,n(130),null,null);e.exports=r.exports},53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(90),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=o.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=a},83:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(45),a=r(o),u=n(124),i=r(u),s=n(125),l=r(s);a.default.install=function(e){e.component(a.default.name,a.default),e.component(l.default.name,l.default),e.component(i.default.name,i.default)},t.default=a.default},84:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(126),o=function(e){return e&&e.__esModule?e:{default:e}}(r);o.default.install=function(e){e.component(o.default.name,o.default)},t.default=o.default},85:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(15),a=r(o),u=n(51),i=r(u),s=n(47),l=r(s),c=n(50),p=r(c),d=n(20),f=r(d);n(48),n(49);var m=n(46),h=r(m);a.default.config.productionTip=!1,a.default.prototype.$Global=f.default,a.default.use(p.default),a.default.use(h.default),window.Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},new a.default({el:"#app",router:l.default,data:function(){return{come:"comoa"}},template:"<App/>",components:{App:i.default}})},86:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(37),a=r(o),u=n(53),i=r(u);t.default={name:"ELine",props:{data:Array,lineColor:String,series:Array,colors:{type:Array,default:function(e){return[["#48bbc0","rgba(73, 97, 106, 1)","rgba(73, 97, 106, 0)"]]}},axis:{type:Object,default:function(){return{axisLine:{lineStyle:{color:"#7f8da4"}},axisLabel:{textStyle:{fontSize:14}}}}}},computed:{opt:function(){return{tooltip:{trigger:"axis",formatter:function(e){return e[0].data[2]},padding:0,backgroundColor:"rgba(0,0,0,0.8)",textStyle:{color:"#7f8da4"}},xAxis:(0,i.default)({type:"time",splitLine:{show:!1}},this.axis),yAxis:(0,i.default)({type:"value",boundaryGap:["0%","30%"],splitLine:{show:!1}},this.axis),series:this.seriesFormat}},seriesFormat:function(){var e=this;return this.series.map(function(t,n){return(0,i.default)({type:"line",smooth:!0,sampling:"average",itemStyle:{normal:{color:e.colors[n][0]}},lineStyle:{normal:{color:e.colors[n][0]}},areaStyle:{normal:{color:new window.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:e.colors[n][1]},{offset:1,color:e.colors[n][2]}])}}},t)})}},mixins:[a.default]}},87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MChart",props:{option:Object,nodes:{type:Number,default:60}},watch:{option:{handler:function(e,t){this.$EChart.setOption(e)},deep:!0}},methods:{update:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=this.option.series[r].data;n?e.forEach(function(e,n){o.length>=t.nodes&&o.shift(),o.push(e)}):(o.length>=this.nodes&&o.shift(),o.push(e))},resize:function(){this.$EChart&&this.$EChart.resize()}},mounted:function(){this.$EChart=window.echarts.init(this.$el),this.option&&this.$EChart.setOption(this.option)},beforeDestroy:function(){this.$EChart.dispose()}}},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(37),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={name:"EPie",props:{label:Array,data:Array},computed:{opt:function(){return{tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},legend:{left:"center",data:this.label,textStyle:{color:"#7f8da4"},top:"70%"},series:[{type:"pie",radius:"50%",center:["50%","30%"],data:this.data,label:{normal:{formatter:"{b} {d}%"}}}]}}},mixins:[o.default]}},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Panel",props:{title:String,bgColor:String,hasClose:Boolean},computed:{panelStyle:function(){var e={};return this.bgColor&&(e.backgroundColor=this.bgColor),e}}}}},[85]);
//# sourceMappingURL=app.ea1c6f299951e5dbe74e.js.map