webpackJsonp([7],{139:function(t,a,e){var s=e(7)(e(182),e(206),null,null);t.exports=s.exports},151:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={business:{0:["运行中","primary_bg alpha-black_txt"],1:["已停止","pink_bg alpha-black_txt"],2:["启动中","primary_bg alpha-black_txt"],3:["停止中","pink_bg alpha-black_txt"],4:["满负载","pink_bg alpha-black_txt"]},machine:{Pending:["准备中","primary_bg alpha-black_txt","run"],Stopped:["已停止","pink_bg alpha-black_txt","stop"],Starting:["启动中","primary_bg alpha-black_txt","run","server_start"],Running:["运行中","primary_bg alpha-black_txt","run"],Stopping:["停止中","pink_bg alpha-black_txt","stop","server_stop"],Deleted:["已释放","pink_bg alpha-black_txt","stop"]},server:{server_start:[3,"Starting","Running","机器启动中，请耐心等待","开机"],server_stop:[30,"Stopping","Stopped","机器关机中，请耐心等待","关机"],server_reboot:[30,"Stopping","Running","机器重启中，请耐心等待","重启机器"]}}},172:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(151),n=function(t){return t&&t.__esModule?t:{default:t}}(s);a.default={filters:{mstatus:function(t){return n.default.machine[t][0]},mclass:function(t){return n.default.machine[t][1]}},data:function(){return{verdata:[],version:{}}},methods:{getVerList:function(){var t=this;this.$Global.async("project_image",!0).getData(null,this.$route.params.name+"/versions").then(function(a){0===a.status&&(t.verdata=a.data.map(function(t,a){return{label:t.version,value:t.version}}),t.version=t.verdata[0])})},gomlist:function(){this.$router.replace({name:"Machines",params:this.$route.params})},startDeploy:function(){var t={image_name:this.version.value,public_ip:this.$route.params.machineids.join(",")};if(!t.public_ip)return void this.$toast("请选择机器","cc");this.$Global.async("project_deployment",!0).getData(t).then(function(t){console.log(t)})}},computed:{machines:function(){return this.$route.params.machines||[]}},created:function(){this.$route.params.name?this.getVerList():this.$router.push({name:"ProjectDetail",params:{id:this.$route.params.id}})}}},182:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(172),n=function(t){return t&&t.__esModule?t:{default:t}}(s);a.default={mixins:[n.default]}},206:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-pad page-deploy"},[e("panel",{attrs:{title:"部署"}},[e("table",{staticClass:"add-table"},[e("col",{attrs:{width:"20%"}}),t._v(" "),e("col",{attrs:{width:"80%"}}),t._v(" "),e("tbody",[e("tr",[e("td",{staticClass:"text-center"},[t._v("选择版本")]),t._v(" "),e("td",[e("m-select",{attrs:{datas:t.verdata,sizeh:50},model:{value:t.version,callback:function(a){t.version=a},expression:"version"}})],1)]),t._v(" "),e("tr",[e("td",{staticClass:"text-center"},[t._v("选择服务器")]),t._v(" "),e("td",{staticClass:"p-lr-16 p-b16"},[e("div",{staticStyle:{padding:"16px 0"}},[e("m-btn",{nativeOn:{click:function(a){t.gomlist(a)}}},[t._v("进入机器列表")])],1),t._v(" "),t.machines.length>0?e("div",{staticClass:"git-list"},[e("table",{staticClass:"table hover striped machines-table theme-dft"},[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("服务商")]),t._v(" "),e("th",[t._v("地址")]),t._v(" "),e("th",[t._v("IP")]),t._v(" "),e("th",[t._v("状态")])])]),t._v(" "),e("tbody",t._l(t.machines,function(a,s){return e("tr",[e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v("阿里云")]),t._v(" "),e("td",[t._v(t._s(a.address))]),t._v(" "),e("td",[t._v(t._s(a.public_ip))]),t._v(" "),e("td",[e("span",{staticClass:"plate",class:t._f("mclass")(a.machine_status)},[t._v(t._s(t._f("mstatus")(a.machine_status)))])])])}))])]):t._e()])])])]),t._v(" "),e("div",{staticClass:"p-16 text-center"},[e("m-btn",{staticClass:"primary_bg no-radius grey-dark_txt",nativeOn:{click:function(a){t.startDeploy(a)}}},[t._v("开始部署")])],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=7.a54f1b2dd1b04ec1d7b4.js.map