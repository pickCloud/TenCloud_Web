webpackJsonp([10],{275:function(t,e,s){s(550);var i=s(0)(s(458),s(621),null,null);t.exports=i.exports},291:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(99),n=function(t){return t&&t.__esModule?t:{default:t}}(i),a={theme:"comb-msg",hasClose:!1,buttons:[{label:"确定",theme:""},{label:"取消",theme:""}]};e.default={methods:{popperDelete:function(t,e){var s=this.$createElement;this.$confirm((0,n.default)({},a,{content:s("div",[s("img",{attrs:{src:"./static/img/error_icon.png",class:"vam m-r16"}}),s("span",{attrs:{class:"vam"}},t)])}),function(t){0===(arguments.length<=1?void 0:arguments[1])&&e&&e.call(),t.actionPopper(!1)})},popperInfo:function(t,e,s){this.$confirm((0,n.default)({},a,{content:t}),function(t){0===(arguments.length<=1?void 0:arguments[1])?e&&e.call():s&&s.call(),t.actionPopper(!1)})},popperWaiting:function(t){var e=this.$createElement;return this.$confirm({theme:"comb-msg",hasClose:!1,maskClose:!1,content:e("span",null,[e("img",{attrs:{src:"./static/img/spin.gif",class:"vam m-r8"}}),e("span",{attrs:{class:"vam"}},t)]),buttons:[]})}}}},295:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{selects:[],isSelectAll:!1}},watch:{isSelectAll:function(t,e){var s=this;t?this.listts.forEach(function(t,e){var i=t.id+"";-1===s.selects.indexOf(i)&&s.selects.push(i)}):this.selects=[]}},methods:{getAttrById:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",s=-1,i=[];++s<this.listts.length;){var n=this.listts[s];-1===t.indexOf(n.id+"")&&-1===t.indexOf(n.id)||i.push(n[e])}return i}}}},441:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(52),a=i(n),r=s(291),o=i(r),c=s(295),l=i(c),p=s(31);e.default={mixins:[o.default,l.default],data:function(){return{isDeploy:!1}},computed:(0,a.default)({},(0,p.mapGetters)("machines",["listts"]),(0,p.mapState)("user",["currentUser"])),methods:(0,a.default)({},(0,p.mapMutations)("machines",["setListts"]),(0,p.mapActions)("machines",["getApiData","deleteAsyn"]),{delMachine:function(t){var e=this,s=this.selects;-1!==t&&(s=[t+""]),0===s.length?this.$toast("请选择要删除的主机","cc"):this.popperDelete("您确定要删除主机"+this.getAttrById(s).join(",")+"吗？",function(t){e.deleteAsyn(s).then(function(t){0===t.status&&e.getApiData(),e.$toast(t.message,"cc")})})},getMdataByIds:function(t){for(var e=-1,s=[];++e<this.listts.length;){var i=this.listts[e];-1!==t.indexOf(i.id+"")&&s.push(i)}return s},deploySelect:function(){var t=this.selects;if(0===t.length)this.$toast("请选择要部署的主机","cc");else{var e=this.$route.params;e.machines=this.getMdataByIds(t),e.machineids=t,this.$router.replace({name:"Deploy",params:e})}},loopGetData:function(){var t=this;this.sitv=setInterval(function(e){clearTimeout(t.sitv),t.getApiData()},18e5)},refresh:function(){this.getApiData()},choose:function(t){return"运行中"===t?"":"重启"===t?"restart":"停止"===t?"stop":void 0},getBusiness:function(t){return"阿里云"===t?"icon-aliyun":"亚马逊云"===t?"icon-yamaxun":"腾讯云"===t?"icon-tengxunyun":"微软云"===t?"icon-azure":void 0}}),beforeDestroy:function(){clearInterval(this.sitv)},created:function(){this.getApiData(),this.loopGetData(),this.isDeploy=this.$route.params.type&&"deploy"===this.$route.params.type,this.$route.params.machineids&&(this.selects=this.$route.params.machineids),this.$store.commit("sitepath/SET_PATH",[{name:"Main",cn:"主页"},{cn:"机器列表"}])},watch:{currentUser:function(){this.getApiData()}}}},458:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(441),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={mixins:[n.default]}},517:function(t,e,s){e=t.exports=s(263)(),e.push([t.i,".server-tip{position:relative}.server-tip-popper{white-space:nowrap}.percent-box{position:relative;height:8px;width:80%;background:#1d212a;border:1px solid #2b2f3a;border-radius:4px;overflow:hidden;margin-top:4px}.percent-box-bar{position:absolute;left:0;top:0;background-color:#48bbc0;height:8px;width:10%}.percent-box-bar.warning{background-color:#f25630}.add.machine_status{padding:1px 4px;border-radius:4px;border:1px solid #48bbc0;color:#48bbc0;display:block;width:74px;text-align:center}.add.machine_status.restart{border:1px solid #a5d6a7;color:#a5d6a7}.add.machine_status.stop{border:1px solid #ff8a80;color:#ff8a80}","",{version:3,sources:["/Users/zyb/TenCloud_Web/src/components/Machines.vue"],names:[],mappings:"AACA,YACE,iBAAmB,CACpB,AACD,mBACE,kBAAoB,CACrB,AACD,aACE,kBAAmB,AACnB,WAAY,AACZ,UAAW,AACX,mBAAoB,AACpB,yBAA0B,AAC1B,kBAAmB,AACnB,gBAAiB,AACjB,cAAgB,CACjB,AACD,iBACE,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,yBAA0B,AAC1B,WAAY,AACZ,SAAW,CACZ,AACD,yBACI,wBAA0B,CAC7B,AACD,oBACE,gBAAiB,AACjB,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,cAAe,AACf,WAAY,AACZ,iBAAmB,CACpB,AACD,4BACI,yBAA0B,AAC1B,aAAe,CAClB,AACD,yBACI,yBAA0B,AAC1B,aAAe,CAClB",file:"Machines.vue",sourcesContent:["\n.server-tip {\n  position: relative;\n}\n.server-tip-popper {\n  white-space: nowrap;\n}\n.percent-box {\n  position: relative;\n  height: 8px;\n  width: 80%;\n  background: #1D212A;\n  border: 1px solid #2B2F3A;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-top: 4px;\n}\n.percent-box-bar {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #48BBC0;\n  height: 8px;\n  width: 10%;\n}\n.percent-box-bar.warning {\n    background-color: #F25630;\n}\n.add.machine_status {\n  padding: 1px 4px;\n  border-radius: 4px;\n  border: 1px solid #48BBC0;\n  color: #48BBC0;\n  display: block;\n  width: 74px;\n  text-align: center;\n}\n.add.machine_status.restart {\n    border: 1px solid #A5D6A7;\n    color: #A5D6A7;\n}\n.add.machine_status.stop {\n    border: 1px solid #FF8A80;\n    color: #FF8A80;\n}\n"],sourceRoot:""}])},550:function(t,e,s){var i=s(517);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(264)("3e25761a",i,!0)},559:function(t,e){t.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUNJREFUeNqs0z8ohVEYx/FzrzcRkcXibgaZDNiUIpNi0d0RdxCDQVFKSlIYlMEtRboGrkHpDgaLstiVRQYDm3/lv3xPPXQ6Obf3qfvUp9737by/c97zPiexlC2sG2MyKDO6+sIGxuxNhFGcIK8MGpB3/4KsLewqg57R83uTNCWqyLluxBrKA2PtqnOhoKS3ecXqI+6KrtFbik9rwZ737AadgXe/Q0F3OPb26Mq5TqELCaddOv4LusV4YPZJLDqTvGPGHR/n9/dhBQuoQR1WsYx+TdAUDjCPJ9xjGoey0thBrYHjc4R2TdCrfI5ftXjTBNk/NIEK51kVRlDQBM2iAacYkoAzNOFCE2QHd0v/bCIrx8mevTmk/T4qVudoQ73sywMq8YIdPNqgTwyjWnm80tIW+9iOZKkZaX9N2bN2iUE0/wgwAGtmP0mIaA3fAAAAAElFTkSuQmCC"},621:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-pad page-machines"},[i("panel",{attrs:{title:"机器列表"}},[i("div",{staticClass:"panel-body p-b16"},[t.isDeploy?t._e():i("div",{staticClass:"btn-group text-right m-t16 m-b16"},[i("m-btn",{staticClass:"primary_bg no-radius grey-dark_txt",attrs:{href:{name:"MachineAdd",params:{id:1}}}},[t._v("添加已有主机")]),t._v(" "),i("m-btn",{staticClass:"primary_bg no-radius grey-dark_txt",nativeOn:{click:function(e){t.refresh(e)}}},[t._v("刷新")])],1),t._v(" "),i("m-table",{staticClass:"hover striped machines-table m-b16"},[i("col",{attrs:{width:"55px"}}),t._v(" "),i("col",{attrs:{width:t.isDeploy?"20%":"15%"}}),t._v(" "),i("col",{attrs:{width:t.isDeploy?"20%":"15%"}}),t._v(" "),i("col",{attrs:{width:t.isDeploy?"20%":"10%"}}),t._v(" "),i("col",{attrs:{width:"10%"}}),t._v(" "),i("col",{attrs:{width:"10%"}}),t._v(" "),t.isDeploy?t._e():i("col",{attrs:{width:"10%"}}),t._v(" "),i("thead",[i("tr",[i("th",[i("m-checkbox",{staticClass:"list-check",attrs:{data:{label:"全选"},hideLabel:""},model:{value:t.isSelectAll,callback:function(e){t.isSelectAll=e},expression:"isSelectAll"}})],1),t._v(" "),i("th",[t._v("名称")]),t._v(" "),i("th",[t._v("服务商")]),t._v(" "),i("th",[t._v("状态")]),t._v(" "),i("th",[t._v("CPU")]),t._v(" "),i("th",[t._v("内存")]),t._v(" "),i("th",[t._v("磁盘")]),t._v(" "),i("th",[t._v("网络(入/出 KB/S)")]),t._v(" "),t.isDeploy?t._e():i("th",[t._v("操作")])])]),t._v(" "),i("tbody",t._l(t.listts,function(e){return i("tr",[i("td",[i("m-checkbox",{staticClass:"list-check",attrs:{data:{label:e.id+""},"hide-label":""},model:{value:t.selects,callback:function(e){t.selects=e},expression:"selects"}})],1),t._v(" "),i("td",[t._v(t._s(e.name))]),t._v(" "),i("td",[i("m-tip",{staticClass:"server-tip",attrs:{"has-arrow":""}},[i("span",{attrs:{slot:"label"},slot:"label"},[i("i",{staticClass:"iconfont",class:t.getBusiness(e.provider),staticStyle:{"margin-right":"5px",color:"#48BBC0"}}),t._v(" "),i("span",[t._v(t._s(e.public_ip))])]),t._v(" "),i("div",{staticClass:"white_txt server-tip-popper",attrs:{slot:"popper"},slot:"popper"},[i("p",[t._v(t._s(e.provider)+":"+t._s(e.address))])])])],1),t._v(" "),i("td",[i("span",{staticClass:"add machine_status",class:t.choose(e.machine_status)},[t._v(t._s(e.machine_status))])]),t._v(" "),i("td",[i("div",[t._v(t._s(e.cpu_content.percent)+"%")]),t._v(" "),i("div",{staticClass:"percent-box"},[i("div",{staticClass:"percent-box-bar",class:{warning:e.cpu_content.percent>80},style:{width:e.cpu_content.percent+"%"}})])]),t._v(" "),i("td",[i("div",[t._v(t._s(e.memory_content.percent)+"%")]),t._v(" "),i("div",{staticClass:"percent-box"},[i("div",{staticClass:"percent-box-bar",class:{warning:e.memory_content.percent>80},style:{width:e.memory_content.percent+"%"}})])]),t._v(" "),i("td",[i("div",[t._v(t._s(e.disk_content.percent)+"%")]),t._v(" "),i("div",{staticClass:"percent-box"},[i("div",{staticClass:"percent-box-bar",class:{warning:e.disk_content.percent>80},style:{width:e.disk_content.percent+"%"}})])]),t._v(" "),i("td",[t._v(t._s(e.net_content.input+"／"+e.net_content.output))]),t._v(" "),t.isDeploy?t._e():i("td",[i("m-btn",{attrs:{href:{name:"MachineDetail",params:{id:e.id}}}},[i("img",{staticClass:"vam",attrs:{src:s(559),alt:""}})])],1)])}))]),t._v(" "),t.isDeploy?i("div",{staticClass:"text-center"},[i("m-btn",{staticClass:"primary_bg grey-dark_txt",nativeOn:{click:function(e){t.deploySelect(e)}}},[t._v("确定")])],1):t._e()],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.9acf36507257f1e175f9.js.map