webpackJsonp([6],{275:function(t,s,e){e(533);var i=e(0)(e(458),e(598),null,null);t.exports=i.exports},300:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(101),a=function(t){return t&&t.__esModule?t:{default:t}}(i),o={theme:"comb-msg",hasClose:!1,buttons:[{label:"确定",theme:""},{label:"取消",theme:""}]};s.default={methods:{popperDelete:function(t,s){var e=this.$createElement;this.$confirm((0,a.default)({},o,{content:e("div",[e("img",{attrs:{src:"./static/img/error_icon.png",class:"vam m-r16"}}),e("span",{attrs:{class:"vam"}},t)])}),function(t){0===(arguments.length<=1?void 0:arguments[1])&&s&&s.call(),t.actionPopper(!1)})},popperInfo:function(t,s,e){this.$confirm((0,a.default)({},o,{content:t}),function(t){0===(arguments.length<=1?void 0:arguments[1])?s&&s.call():e&&e.call(),t.actionPopper(!1)})},popperWaiting:function(t){var s=this.$createElement;return this.$confirm({theme:"comb-msg",hasClose:!1,maskClose:!1,content:s("span",null,[s("img",{attrs:{src:"./static/img/spin.gif",class:"vam m-r8"}}),s("span",{attrs:{class:"vam"}},t)]),buttons:[]})}}}},305:function(t,s,e){t.exports=e.p+"static/img/spin.84f7c1b.gif"},442:function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(53),o=i(a),n=e(584),r=i(n),c=e(300),l=i(c);s.default={mixins:[l.default],data:function(){return{verdata:[],branchs:[],branch:"1",isDoing:!1,isOpen:!1,notes:[],version:{version:""}}},methods:{scroll:function(t){console.log(t)},openIntro:function(){this.isOpen=!this.isOpen},getVerList:function(){var t=this;this.$axios.http("project_vers","","get",this.$route.params.name+"/versions").then(function(s){0===s.status&&(t.verdata=s.data)})},getBranch:function(){var t=this;this.$axios.http("project_branch",{repos_name:this.$route.params.repos_name,url:window.location.href},"post").then(function(s){0===s.status&&(t.branchs=s.data,t.branch=t.branchs[0].branch_name)}).catch(function(t){t&&t.data&&(window.location.href=t.data.url)})},startBuild:function(){if(0!==this.branchs.length){var t={prj_name:this.$route.params.name,image_name:this.$route.params.image_name,version:(this.version.version+"").replace(/(^\s+)|(\s+$)/g,""),branch_name:this.branch,repos_url:this.$route.params.repos_url,project_id:this.$route.params.id};if(""===t.version)return void this.$toast("请输入版本号","cc");this.isDoing=!0,this.initSocket("",t)}},initSocket:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments[1];this.socket=new WebSocket(this.$Global.apis.wsURL+this.$Global.apis.project_create.u);var i=document.getElementById("scroll");this.socket.onopen=function(i){s&&s(),t.socket.send((0,o.default)(e))},this.socket.onmessage=function(s){if("open"===s.data)t.notes.push("start");else if("success"===s.data){var e=t;t.popperInfo("构建成功，你可以进行项目部署了",function(){e.$router.replace({name:"ProjectDetail",params:{id:e.$route.params.id}})}),t.isDoing=!1}else"failure"===s.data?(t.popperInfo("构建失败"),t.isDoing=!1):(t.notes.push(s.data),i.scrollTop=i.scrollHeight)},this.socket.onclose=function(s){t.timeoutajax&&clearTimeout(t.timeoutajax),t.socket=null,t.isDoing=!1,console.log("socket has closed")},this.timeoutajax&&clearTimeout(this.timeoutajax),this.timeoutajax=setTimeout(function(s){t.status="error",t.$toast("异常，请联系客服","cc"),t.socket.close(),clearTimeout(t.timeoutajax)},6e5)}},created:function(){this.$route.params.repos_url?(this.getVerList(),this.getBranch(),this.$store.commit("sitepath/SET_PATH",[{name:"Main",cn:"主页"},{name:"Projects",cn:"项目列表"},{name:"ProjectDetail",cn:this.$route.params.name,params:{id:this.$route.params.id}},{cn:"项目构建"}])):this.$router.replace({name:"ProjectDetail",params:{id:this.$route.params.id}})},destroy:function(){this.socket.onclose()},components:{dlist:r.default}}},458:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(442),a=function(t){return t&&t.__esModule?t:{default:t}}(i);s.default={mixins:[a.default]}},482:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(578);s.default={directives:{focus:i.focus},props:{items:{type:Array,default:function(t){return[]}},okey:{type:String,default:"key"},value:{type:Object}},data:function(){return{dataitems:[],selfmodel:"",isfocus:!1}},methods:{inpChange:function(){var t={};t[this.okey]=this.selfmodel,this.$emit("input",t)},onFocus:function(){this.isfocus=!0,this.search()},onBlur:function(t){var s=this,e=setTimeout(function(t){clearTimeout(e),s.isfocus=!1},150)},search:function(){var t=this;this.dataitems=this.items.filter(function(s,e){if(0===s[t.okey].toString().indexOf(t.selfmodel))return s})},itemSelect:function(t){this.$emit("input",t),this.isfocus=!1}},watch:{value:function(t,s){this.selfmodel=this.value?this.value[this.okey]:"",this.search()}},mounted:function(){this.selfmodel=this.value?this.value[this.okey]:""}}},500:function(t,s,e){s=t.exports=e(272)(),s.push([t.i,".build-note p{margin-bottom:8px}","",{version:3,sources:["/Users/zyb/TenCloud_Web/src/components/Build.vue"],names:[],mappings:"AACA,cACE,iBAAmB,CACpB",file:"Build.vue",sourcesContent:["\n.build-note p {\n  margin-bottom: 8px;\n}\n"],sourceRoot:""}])},521:function(t,s,e){s=t.exports=e(272)(),s.push([t.i,".data-list{position:relative;z-index:999}.data-list-item{padding:16px;border-top:1px solid #262a35;cursor:pointer}.data-list-item:hover{background-color:hsla(0,0%,100%,.1)}.data-list-items{background-color:#1d212a;position:absolute;left:0;width:100%}","",{version:3,sources:["/Users/zyb/TenCloud_Web/src/components/piece/datalist/Main.vue"],names:[],mappings:"AACA,WACE,kBAAmB,AACnB,WAAa,CACd,AACD,gBACE,aAAc,AACd,6BAA8B,AAC9B,cAAgB,CACjB,AACD,sBACE,mCAAwC,CACzC,AACD,iBACE,yBAA0B,AAC1B,kBAAmB,AACnB,OAAQ,AACR,UAAY,CACb",file:"Main.vue",sourcesContent:["\n.data-list {\n  position: relative;\n  z-index: 999;\n}\n.data-list-item {\n  padding: 16px;\n  border-top: 1px solid #262a35;\n  cursor: pointer;\n}\n.data-list-item:hover {\n  background-color: rgba(255,255,255,0.1);\n}\n.data-list-items {\n  background-color: #1d212a;\n  position: absolute;\n  left: 0;\n  width: 100%;\n}\n"],sourceRoot:""}])},533:function(t,s,e){var i=e(500);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(273)("ea600610",i,!0)},554:function(t,s,e){var i=e(521);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(273)("324e1e5e",i,!0)},578:function(t,s,e){"use strict";var i=e(15);i="default"in i?i.default:i;/^2\./.test(i.version)||i.util.warn("VueFocus 2.1.0 only supports Vue 2.x, and does not support Vue "+i.version);var a={inserted:function(t,s){s.value?t.focus():t.blur()},componentUpdated:function(t,s){s.modifiers.lazy&&Boolean(s.value)===Boolean(s.oldValue)||(s.value?t.focus():t.blur())}},o={directives:{focus:a}};s.version="2.1.0",s.focus=a,s.mixin=o},584:function(t,s,e){e(554);var i=e(0)(e(482),e(625),null,null);t.exports=i.exports},598:function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"page-pad page-build"},[i("panel",{staticClass:"m-b16"},[i("div",{staticClass:"panel-title",attrs:{slot:"title"},slot:"title"},[t._v("\n      项目构建\n      "),i("small",[t._v("(代码经过构建，可生成能适合部署上线的版本，版本文件以镜像的形式存在。)")])]),t._v(" "),i("div",{staticClass:"p-16"},[i("ul",{staticClass:"clearfix build-step"},[i("li",[t._v("1.编写Dockerfile文件")]),t._v(" "),i("li",[t._v("2.输入版本号")]),t._v(" "),i("li",[t._v("3.选择代码分支")]),t._v(" "),i("li",[t._v("4.开始构建")])]),t._v(" "),i("ul",{staticClass:"build-intro clearfix",class:{open:t.isOpen}},[i("li",[i("div",{staticClass:"__txt"},[t._v("镜像：由多层文件系统联合组成，除了提供运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数。")]),t._v(" "),i("div",{staticClass:"__icon"})]),t._v(" "),i("li",[i("div",{staticClass:"__txt"},[t._v("镜像的构建就是定制每一层的配置、文件。我们把每一层的修改、安装、构建、操作的命令写入Dockerfile脚本文件，方便重复操作、透明化构建过程。")]),t._v(" "),i("div",{staticClass:"__icon"})]),t._v(" "),i("li",[i("div",{staticClass:"__txt"},[t._v("Dockerfile文件可存于代码仓库的项目文件夹根目录")]),t._v(" "),i("div",{staticClass:"__icon"})]),t._v(" "),i("li",[i("div",{staticClass:"__txt"},[t._v("Dockerfile语法规则参考："),i("a",{staticClass:"primary_txt",attrs:{href:"https://yeasy.gitbooks.io/docker_practice/content/image/dockerfile/",target:"_blank"}},[t._v("https://yeasy.gitbooks.io/docker_practice/content/image/dockerfile/")])]),t._v(" "),i("div",{staticClass:"__icon"})]),t._v(" "),i("li",[i("div",{staticClass:"__txt"},[t._v("我们的私有镜像："),i("a",{staticClass:"primary_txt",attrs:{href:"https://hub.10.com",target:"_blank"}},[t._v("https://hub.10.com")])]),t._v(" "),i("div",{staticClass:"__icon"})]),t._v(" "),i("li",[i("div",{staticClass:"__txt"},[t._v("公有镜像参考地址："),i("a",{staticClass:"primary_txt m-r8",attrs:{href:"https://hub.docker.com",target:"_blank"}},[t._v("https://hub.docker.com")]),t._v(" "),i("a",{staticClass:"primary_txt",attrs:{href:"https://dashboard.daocloud.io/packages/explore",target:"_blank"}},[t._v("https://dashboard.daocloud.io/packages/explore")])]),t._v(" "),i("div",{staticClass:"__icon"})]),t._v(" "),i("li",[i("div",{staticClass:"__txt"},[t._v("以上，仍然不知道Dockerfile如何写的，可以联系我们的工程师，@洪炯腾 @洪国安")]),t._v(" "),i("div",{staticClass:"__icon"})]),t._v(" "),i("li",{staticClass:"build-intro__open-btn",on:{click:t.openIntro}},[i("i",{staticClass:"iconfont icon-xiala"})])]),t._v(" "),i("div",{staticClass:"build-form"},[i("div",{staticClass:"build-form__select-ver clearfix m-b16"},[i("div",{staticClass:"left __ver"},[i("div",{staticClass:"title"},[t._v("版本号")])]),t._v(" "),i("div",{staticClass:"left __inp"},[i("dlist",{attrs:{items:t.verdata,okey:"version"},model:{value:t.version,callback:function(s){t.version=s},expression:"version"}})],1)]),t._v(" "),i("m-row",{staticClass:"branch m-b16"},[i("m-col",{staticClass:"xs-12"},[i("div",{staticClass:"title"},[t._v("选择分支")])]),t._v(" "),i("m-col",{staticClass:"xs-12"},[i("div",{staticClass:"title"},t._l(t.branchs,function(s,e){return i("m-radio",{key:e,attrs:{data:{label:s.branch_name}},model:{value:t.branch,callback:function(s){t.branch=s},expression:"branch"}})}))])],1),t._v(" "),t.isDoing?i("div",{staticClass:"text-center"},[i("img",{staticClass:"vam",attrs:{src:e(305)}}),t._v(" "),i("span",{staticClass:"vam"},[t._v("构建中请耐心等待...")])]):i("div",{staticClass:"save-box text-center"},[i("m-btn",{staticClass:"primary_bg grey-dark_txt",nativeOn:{click:function(s){t.startBuild(s)}}},[t._v("开始构建")])],1)],1)])]),t._v(" "),i("panel",{staticClass:"build-note",attrs:{title:"构建过程"}},[i("div",{staticClass:"p-16",staticStyle:{"overflow-y":"auto","max-height":"300px"},attrs:{id:"scroll"}},t._l(t.notes,function(s){return i("p",[t._v(t._s(s))])}))])],1)},staticRenderFns:[]}},625:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"data-list"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selfmodel,expression:"selfmodel"}],attrs:{type:"text",placeholder:"输入/选择版本号"},domProps:{value:t.selfmodel},on:{input:[function(s){s.target.composing||(t.selfmodel=s.target.value)},t.inpChange],blur:t.onBlur,focus:t.onFocus}}),t._v(" "),t.isfocus&&t.dataitems.length>0?e("div",{staticClass:"data-list-items"},t._l(t.dataitems,function(s){return e("div",{staticClass:"data-list-item",on:{click:function(e){t.itemSelect(s)}}},[t._v(t._s(s[t.okey]))])})):t._e()])},staticRenderFns:[]}}});
//# sourceMappingURL=6.516062e049bd524958f6.js.map