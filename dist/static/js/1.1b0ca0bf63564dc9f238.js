webpackJsonp([1],{139:function(t,e,a){var s=a(7)(a(162),a(149),null,null);t.exports=s.exports},143:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(52),i=function(t){return t&&t.__esModule?t:{default:t}}(s),n={theme:"comb-msg",hasClose:!1,buttons:[{label:"确定",theme:""},{label:"取消",theme:""}]};e.default={methods:{popperDelete:function(t,e){var a=this.$createElement;this.$confirm((0,i.default)({},n,{content:a("div",[a("img",{attrs:{src:"./static/img/error_icon.png",class:"vam m-r16"}}),a("span",{attrs:{class:"vam"}},"您确定删除主机"+t+"吗？")])}),function(t){0===(arguments.length<=1?void 0:arguments[1])&&e&&e.call(),t.actionPopper(!1)})},popperInfo:function(t,e,a){this.$confirm((0,i.default)({},n,{content:t}),function(t){0===(arguments.length<=1?void 0:arguments[1])?e&&e.call():a&&a.call(),t.actionPopper(!1)})}}}},144:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={business:{0:["运行中","primary_bg alpha-black_txt"],1:["已停止","pink_bg alpha-black_txt"],2:["启动中","primary_bg alpha-black_txt"],3:["停止中","pink_bg alpha-black_txt"],4:["满负载","pink_bg alpha-black_txt"]},machine:{Pending:["准备中","primary_bg alpha-black_txt","run"],Stopped:["已停止","pink_bg alpha-black_txt","stop"],Starting:["启动中","primary_bg alpha-black_txt","run"],Running:["运行中","primary_bg alpha-black_txt","run"],Stopping:["停止中","pink_bg alpha-black_txt","stop"],Deleted:["已释放","pink_bg alpha-black_txt","stop"]},server:{server_start:[3,"Starting","Running","机器启动中，这个过程需要大约","开机"],server_stop:[20,"Stopping","Stopped","机器关机中，这个过程需要大约","关机"],server_reboot:[30,"Stopping","Running","机器重启中，这个过程需要大约","重启机器"]}}},149:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-pad page-machines"},[a("panel",[a("div",{staticClass:"panel-title",slot:"title"},[a("m-btn",{staticClass:"primary_bg no-radius grey-dark_txt",attrs:{href:{name:"MachineAdd",params:{id:1}}}},[t._v("添加已有主机")]),t._v(" "),a("m-btn",{staticClass:"pink_bg no-radius grey-dark_txt",nativeOn:{click:function(e){t.delMachine(-1)}}},[t._v("删除")])],1),t._v(" "),a("div",{staticClass:"panel-body p-b16"},[a("m-table",{staticClass:"hover striped machines-table"},[a("col",{attrs:{width:"55px"}}),t._v(" "),a("col",{attrs:{width:"15%"}}),t._v(" "),a("col",{attrs:{width:"15%"}}),t._v(" "),a("col",{attrs:{width:"15%"}}),t._v(" "),a("col",{attrs:{width:"15%"}}),t._v(" "),a("col",{attrs:{width:"15%"}}),t._v(" "),a("thead",[a("tr",[a("th",[a("m-checkbox",{staticClass:"list-check",attrs:{data:{label:"全选"},hideLabel:""},model:{value:t.isSelectAll,callback:function(e){t.isSelectAll=e},expression:"isSelectAll"}})],1),t._v(" "),a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("服务商")]),t._v(" "),a("th",[t._v("地址")]),t._v(" "),a("th",[t._v("IP")]),t._v(" "),a("th",[t._v("状态")]),t._v(" "),a("td",[t._v("操作")])])]),t._v(" "),a("tbody",t._l(t.listts,function(e){return a("tr",[a("td",[a("m-checkbox",{staticClass:"list-check",attrs:{data:{label:e.id+""},"hide-label":""},model:{value:t.selects,callback:function(e){t.selects=e},expression:"selects"}})],1),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v("阿里云")]),t._v(" "),a("td",[t._v(t._s(e.address))]),t._v(" "),a("td",[t._v(t._s(e.public_ip))]),t._v(" "),a("td",[a("span",{staticClass:"plate",class:t._f("mclass")(e.machine_status)},[t._v(t._s(t._f("mstatus")(e.machine_status)))])]),t._v(" "),a("td",[a("m-btn",{staticClass:"primary_txt",attrs:{href:{name:"MachineDetail",params:{id:e.id}}}},[t._v("详情")]),t._v(" "),a("m-btn",{staticClass:"pink_txt",nativeOn:{click:function(a){t.delMachine(e.id)}}},[t._v("删除")])],1)])}))])],1)])],1)},staticRenderFns:[]}},157:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(143),n=s(i),l=a(158),c=s(l),r=a(144),o=s(r);e.default={mixins:[n.default,c.default],filters:{mstatus:function(t){return o.default.machine[t][0]},mclass:function(t){return o.default.machine[t][1]}},methods:{delMachine:function(t){var e=this,a=this.selects;-1!==t&&(a=[t+""]),0===a.length?this.$toast("请选择要删除的主机","cc"):this.popperDelete(this.getAttrById(a).join(","),function(t){e.$Global.async("server_del",!0).getData({id:a}).then(function(t){0===t.status&&e.getApiData(),e.$toast(t.message,"cc")})})},getApiData:function(){var t=this,e=this.clusterid=1;this.$Global.async("cluster_detail",!0).getData(null,e).then(function(e){t.listts=e.data.server_list})}},created:function(){this.getApiData()}}},158:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{listts:[],selects:[],isSelectAll:!1}},watch:{isSelectAll:function(t,e){var a=this;t?this.listts.forEach(function(t,e){var s=t.id+"";-1===a.selects.indexOf(s)&&a.selects.push(s)}):this.selects=[]}},methods:{getAttrById:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",a=-1,s=[];++a<this.listts.length;){var i=this.listts[a];-1!==t.indexOf(i.id+"")&&s.push(i[e])}return s}}}},162:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(157),i=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={mixins:[i.default]}}});
//# sourceMappingURL=1.1b0ca0bf63564dc9f238.js.map