webpackJsonp([11],{217:function(t,e,s){var i=s(4)(s(375),s(439),null,null);t.exports=i.exports},229:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(89),a=function(t){return t&&t.__esModule?t:{default:t}}(i),l={theme:"comb-msg",hasClose:!1,buttons:[{label:"确定",theme:""},{label:"取消",theme:""}]};e.default={methods:{popperDelete:function(t,e){var s=this.$createElement;this.$confirm((0,a.default)({},l,{content:s("div",[s("img",{attrs:{src:"./static/img/error_icon.png",class:"vam m-r16"}}),s("span",{attrs:{class:"vam"}},t)])}),function(t){0===(arguments.length<=1?void 0:arguments[1])&&e&&e.call(),t.actionPopper(!1)})},popperInfo:function(t,e,s){this.$confirm((0,a.default)({},l,{content:t}),function(t){0===(arguments.length<=1?void 0:arguments[1])?e&&e.call():s&&s.call(),t.actionPopper(!1)})},popperWaiting:function(t){var e=this.$createElement;return this.$confirm({theme:"comb-msg",hasClose:!1,maskClose:!1,content:e("span",null,[e("img",{attrs:{src:"./static/img/spin.gif",class:"vam m-r8"}}),e("span",{attrs:{class:"vam"}},t)]),buttons:[]})}}}},231:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{listts:[],selects:[],isSelectAll:!1}},watch:{isSelectAll:function(t,e){var s=this;t?this.listts.forEach(function(t,e){var i=t.id+"";-1===s.selects.indexOf(i)&&s.selects.push(i)}):this.selects=[]}},methods:{getAttrById:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",s=-1,i=[];++s<this.listts.length;){var a=this.listts[s];-1===t.indexOf(a.id+"")&&-1===t.indexOf(a.id)||i.push(a[e])}return i}}}},364:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=s(229),l=i(a),n=s(231),c=i(n);e.default={mixins:[l.default,c.default],data:function(){return{isDeploy:!1}},methods:{delMachine:function(t){var e=this,s=this.selects;-1!==t&&(s=[t+""]),0===s.length?this.$toast("请选择要删除的主机","cc"):this.popperDelete("您确定要删除主机"+this.getAttrById(s).join(",")+"吗？",function(t){e.$Global.async("server_del",!0).getData({id:s}).then(function(t){0===t.status&&e.getApiData(),e.$toast(t.message,"cc")})})},getApiData:function(){var t=this,e=this.clusterid=1;this.$Global.async("cluster_detail",!0).getData(null,e).then(function(e){t.listts=e.data.server_list})},getMdataByIds:function(t){for(var e=-1,s=[];++e<this.listts.length;){var i=this.listts[e];-1!==t.indexOf(i.id+"")&&s.push(i)}return s},deploySelect:function(){var t=this.selects;if(0===t.length)this.$toast("请选择要部署的主机","cc");else{var e=this.$route.params;e.machines=this.getMdataByIds(t),e.machineids=t,this.$router.replace({name:"Deploy",params:e})}}},created:function(){this.getApiData(),this.isDeploy=this.$route.params.type&&"deploy"===this.$route.params.type,this.$route.params.machineids&&(this.selects=this.$route.params.machineids)}}},375:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(364),a=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={mixins:[a.default]}},439:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-pad page-machines"},[s("panel",{attrs:{title:t.isDeploy?"机器列表":""}},[t.isDeploy?t._e():s("div",{staticClass:"panel-title",slot:"title"},[s("m-btn",{staticClass:"primary_bg no-radius grey-dark_txt",attrs:{href:{name:"MachineAdd",params:{id:1}}}},[t._v("添加已有主机")]),t._v(" "),s("m-btn",{staticClass:"pink_bg no-radius grey-dark_txt",nativeOn:{click:function(e){t.delMachine(-1)}}},[t._v("删除")])],1),t._v(" "),s("div",{staticClass:"panel-body p-b16"},[s("m-table",{staticClass:"hover striped machines-table m-b16"},[s("col",{attrs:{width:"55px"}}),t._v(" "),s("col",{attrs:{width:t.isDeploy?"20%":"15%"}}),t._v(" "),s("col",{attrs:{width:t.isDeploy?"20%":"15%"}}),t._v(" "),s("col",{attrs:{width:t.isDeploy?"20%":"15%"}}),t._v(" "),s("col",{attrs:{width:"15%"}}),t._v(" "),t.isDeploy?t._e():s("col",{attrs:{width:"15%"}}),t._v(" "),s("thead",[s("tr",[s("th",[s("m-checkbox",{staticClass:"list-check",attrs:{data:{label:"全选"},hideLabel:""},model:{value:t.isSelectAll,callback:function(e){t.isSelectAll=e},expression:"isSelectAll"}})],1),t._v(" "),s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("服务商")]),t._v(" "),s("th",[t._v("地址")]),t._v(" "),s("th",[t._v("IP")]),t._v(" "),s("th",[t._v("状态")]),t._v(" "),t.isDeploy?t._e():s("th",[t._v("操作")])])]),t._v(" "),s("tbody",t._l(t.listts,function(e){return s("tr",[s("td",[s("m-checkbox",{staticClass:"list-check",attrs:{data:{label:e.id+""},"hide-label":""},model:{value:t.selects,callback:function(e){t.selects=e},expression:"selects"}})],1),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.provider))]),t._v(" "),s("td",[t._v(t._s(e.address))]),t._v(" "),s("td",[t._v(t._s(e.public_ip))]),t._v(" "),s("td",[s("span",{staticClass:"plate"},[t._v(t._s(e.machine_status))])]),t._v(" "),t.isDeploy?t._e():s("td",[s("m-btn",{staticClass:"primary_txt",attrs:{href:{name:"MachineDetail",params:{id:e.id}}}},[t._v("详情")]),t._v(" "),s("m-btn",{staticClass:"pink_txt",nativeOn:{click:function(s){t.delMachine(e.id)}}},[t._v("删除")])],1)])}))]),t._v(" "),t.isDeploy?s("div",{staticClass:"text-center"},[s("m-btn",{staticClass:"primary_bg grey-dark_txt",nativeOn:{click:function(e){t.deploySelect(e)}}},[t._v("确定")])],1):t._e()],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=11.0ef530c2aecaa6cb72c9.js.map