webpackJsonp([6],{144:function(t,a,e){e(223);var i=e(7)(e(200),e(244),null,null);t.exports=i.exports},152:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(53),n=function(t){return t&&t.__esModule?t:{default:t}}(i),r={theme:"comb-msg",hasClose:!1,buttons:[{label:"确定",theme:""},{label:"取消",theme:""}]};a.default={methods:{popperDelete:function(t,a){var e=this.$createElement;this.$confirm((0,n.default)({},r,{content:e("div",[e("img",{attrs:{src:"./static/img/error_icon.png",class:"vam m-r16"}}),e("span",{attrs:{class:"vam"}},t)])}),function(t){0===(arguments.length<=1?void 0:arguments[1])&&a&&a.call(),t.actionPopper(!1)})},popperInfo:function(t,a,e){this.$confirm((0,n.default)({},r,{content:t}),function(t){0===(arguments.length<=1?void 0:arguments[1])?a&&a.call():e&&e.call(),t.actionPopper(!1)})},popperWaiting:function(t){var a=this.$createElement;return this.$confirm({theme:"comb-msg",hasClose:!1,maskClose:!1,content:a("span",null,[a("img",{attrs:{src:"./static/img/spin.gif",class:"vam m-r8"}}),a("span",{attrs:{class:"vam"}},t)]),buttons:[]})}}}},158:function(t,a,e){"use strict";function i(t,a,e){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=new FormData;return e&&n.append("key",e),n.append("token",a),n.append("file",t),(0,s.default)({method:"POST",url:"http://up-z2.qiniu.com",data:n,progress:i})}function n(t){var a=t.file,e=t.url,i=t.method,n=t.ing,r=void 0===n?null:n,o=a;return(0,s.default)({method:i,url:e,data:o,progress:r,overrideMimeType:"application/octet-stream"})}Object.defineProperty(a,"__esModule",{value:!0}),a.upload=i,a.upStream=n;var r=e(159),s=function(t){return t&&t.__esModule?t:{default:t}}(r)},159:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(56),n=function(t){return t&&t.__esModule?t:{default:t}}(i);a.default=function(t){var a=t.method,e=t.url,i=t.data,r=t.progress,s=void 0===r?null:r;t.overrideMimeType;return new n.default(function(t,n){var r=new XMLHttpRequest;r.open(a,e),r.upload.addEventListener("progress",function(t){t.lengthComputable&&s&&s(t)},!1),r.onreadystatechange=function(a){if(4===r.readyState&&200===r.status&&""!==r.responseText){var e=JSON.parse(r.responseText);t(e)}else 200!==r.status&&r.responseText&&n()},r.withCredentials=!0,r.send(i)})}},190:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(152),n=function(t){return t&&t.__esModule?t:{default:t}}(i),r=e(158);a.default={mixins:[n.default],data:function(){return{formdata:{name:"",image_name:"",description:"",mode:"0"},repos_idx:"0",git_tip:"绑定GitHub代码仓库",githubs:[],isEditor:!1,editorData:{},btnActive:"primary_bg grey-dark_txt",btnIdx:0,upfile:"",uping:"",upok:!1}},watch:{btnIdx:function(t,a){this.git_tip=0!==t?"GitHub代码仓库":this.githubs.length>0?"重新绑定GitHub代码仓库":"绑定GitHub代码仓库"},"formdata.mode":function(t,a){"0"===t&&(this.btnIdx=0)}},methods:{addProject:function(){var t=this;if(0===this.btnIdx){var a=this.githubs[this.repos_idx];if(!a)return void this.$toast("请先拉取来源","cc");if(""===this.formdata.name)return void this.$toast("名称不能为空","cc");if(""===this.formdata.image_name)return void this.$toast("镜像名称不能为空","cc");if(""===this.formdata.description)return void this.$toast("描述不能为空","cc");this.formdata.repos_name=a.repos_name,this.formdata.repos_url=a.repos_url,this.formdata.http_url=a.http_url,this.isEditor&&(this.formdata.id=this.$route.params.id)}if(1===this.btnIdx&&!this.upok)return void this.$toast("镜像还在上传中","cc");this.$Global.async(this.isEditor?"project_update":"project_add",!0).getData(this.formdata).then(function(a){0===a.status&&(t.isEditor?t.$router.push({name:"ProjectDetail",params:{id:t.$route.params.id}}):t.$router.push({name:"Projects"})),t.$toast(t.isEditor?"修改成功":"添加成功","cc")},function(t){})},bindGitHub:function(){if(0===this.btnIdx){if(-1!==this.git_tip.indexOf("<img"))return;this.getApiData()}this.btnIdx=0},fileChange:function(t){this.upfile=t.target},getApiData:function(t){var a=this;this.git_tip='<img class="vam" src="./static/img/spin.gif"></img> <span class="vam">数据加载中</span>',this.$Global.async("project_repos",!0).getData().then(function(e){0===e.status?(a.githubs=e.data,a.repos_idx="0",a.git_tip="重新绑定GitHub代码仓库",t&&t()):a.$toast(e.message,"cc")})},upImage:function(){this.btnIdx=1},startUpImage:function(){var t=this,a=this.upfile.files[0];if(a.size>1073741824)return void this.$toast("镜像不能大于1G","cc");var e=new FormData;e.append("file",a),(0,r.upStream)({file:e,method:this.$Global.apis.project_up_image.m.toUpperCase(),url:this.$Global.apis.baseURL+this.$Global.apis.project_up_image.u,ing:function(a){var e=parseInt(100*a.loaded/a.total);t.uping=e+"%",t.$el.querySelector(".ing-box-bar").style.width=e+"%"}}).then(function(a){console.log(a),t.upok=!0})},downImage:function(){this.btnIdx=2},initReposIdx:function(){for(var t=-1;++t<this.githubs.length;){var a=this.githubs[t];if(a.repos_name===this.editorData.repos_name&&a.repos_url===this.editorData.repos_url){this.repos_idx=t+"";break}}},editorMode:function(){var t=this;this.$Global.async("project_detail",!0).getData(null,this.$route.params.id).then(function(a){if(0===a.status){var e=t.editorData=a.data[0];t.formdata.name=e.name,t.formdata.description=e.description,t.formdata.mode=e.mode+"",t.formdata.image_name=e.image_name,t.getApiData(t.initReposIdx)}})}},computed:{gitLoadStyle:function(){return-1!==this.git_tip.indexOf("<img")?"loading":""}},created:function(){this.isEditor=void 0!==this.$route.params.id,this.isEditor&&this.editorMode()}}},200:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(190),n=function(t){return t&&t.__esModule?t:{default:t}}(i);a.default={mixins:[n.default]}},215:function(t,a,e){a=t.exports=e(135)(),a.push([t.i,".page-project-add .btn-group .btn{border:1px solid hsla(0,0%,100%,.1)}.down-image,.up-image{background-color:#262a35}.lay-lcr>div{float:left;height:50px;line-height:50px}.lay-lcr .file-label{display:block;border:none;padding:0;background-color:#48bbc0!important;color:#282828}.lay-lcr .file-label:hover{color:#fff!important}.lay-left{width:100px}.lay-right{width:200px}.lay-right .btn{height:100%;width:100%;margin-top:-1px}.lay-center{width:calc(100% - 300px);padding:0 16px}.lay-center2{width:calc(100% - 100px);padding-left:16px}.lay-primary-bg{background-color:#48bbc0;color:#282828}.lay-border{border:1px solid hsla(0,0%,100%,.1)}.lay-striped-bg{background-color:#1d212a;height:100%}.ing-box{border:1px solid hsla(0,0%,100%,.1);position:relative}.ing-box-bar{position:absolute;width:0;height:100%;left:0;top:0;background-color:hsla(0,0%,100%,.5);z-index:0}.ing-box-txt{position:relative;z-index:1}","",{version:3,sources:["D:/FrontEnd/src/components/ProjectAdd.vue"],names:[],mappings:"AACA,kCACE,mCAA2C,CAC5C,AACD,sBACE,wBAA0B,CAC3B,AACD,aACE,WAAY,AACZ,YAAa,AACb,gBAAkB,CACnB,AACD,qBACE,cAAe,AACf,YAAa,AACb,UAAW,AACX,mCAAqC,AACrC,aAAe,CAChB,AACD,2BACI,oBAAuB,CAC1B,AACD,UACE,WAAa,CACd,AACD,WACE,WAAa,CACd,AACD,gBACI,YAAa,AACb,WAAY,AACZ,eAAiB,CACpB,AACD,YACE,yBAA0B,AAC1B,cAAgB,CACjB,AACD,aACE,yBAA0B,AAC1B,iBAAmB,CACpB,AACD,gBACE,yBAA0B,AAC1B,aAAe,CAChB,AACD,YACE,mCAA2C,CAC5C,AACD,gBACE,yBAA0B,AAC1B,WAAa,CACd,AACD,SACE,oCAA2C,AAC3C,iBAAmB,CACpB,AACD,aACE,kBAAmB,AACnB,QAAS,AACT,YAAa,AACb,OAAQ,AACR,MAAO,AACP,oCAA2C,AAC3C,SAAW,CACZ,AACD,aACE,kBAAmB,AACnB,SAAW,CACZ",file:"ProjectAdd.vue",sourcesContent:["\n.page-project-add .btn-group .btn {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.up-image, .down-image {\n  background-color: #262a35;\n}\n.lay-lcr > div {\n  float: left;\n  height: 50px;\n  line-height: 50px;\n}\n.lay-lcr .file-label {\n  display: block;\n  border: none;\n  padding: 0;\n  background-color: #48bbc0 !important;\n  color: #282828;\n}\n.lay-lcr .file-label:hover {\n    color: #fff !important;\n}\n.lay-left {\n  width: 100px;\n}\n.lay-right {\n  width: 200px;\n}\n.lay-right .btn {\n    height: 100%;\n    width: 100%;\n    margin-top: -1px;\n}\n.lay-center {\n  width: calc(100% - 300px);\n  padding: 0 16px;\n}\n.lay-center2 {\n  width: calc(100% - 100px);\n  padding-left: 16px;\n}\n.lay-primary-bg {\n  background-color: #48bbc0;\n  color: #282828;\n}\n.lay-border {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.lay-striped-bg {\n  background-color: #1d212a;\n  height: 100%;\n}\n.ing-box {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  position: relative;\n}\n.ing-box-bar {\n  position: absolute;\n  width: 0;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 0;\n}\n.ing-box-txt {\n  position: relative;\n  z-index: 1;\n}\n"],sourceRoot:""}])},223:function(t,a,e){var i=e(215);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(136)("246a8187",i,!0)},244:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-pad page-project-add"},[e("panel",{attrs:{title:t.isEditor?"项目修改":"添加项目"}},[e("table",{staticClass:"add-table"},[e("col",{attrs:{width:"20%"}}),t._v(" "),e("col",{attrs:{width:"80%"}}),t._v(" "),e("tbody",[e("tr",[e("td",{staticClass:"text-center"},[t._v("名称")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.name,expression:"formdata.name"}],attrs:{type:"text"},domProps:{value:t.formdata.name},on:{input:function(a){a.target.composing||(t.formdata.name=a.target.value)}}})])]),t._v(" "),e("tr",[e("td",{staticClass:"text-center"},[t._v("镜像名称")]),t._v(" "),e("td",{staticStyle:{position:"relative"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.image_name,expression:"formdata.image_name"}],attrs:{type:"text",placeholder:"请输入小写字母"},domProps:{value:t.formdata.image_name},on:{input:function(a){a.target.composing||(t.formdata.image_name=a.target.value)}}}),t._v(" "),e("p",{staticClass:"deploy-name_tip"},[t._v("项目部署后以容器的形式运行：容器名称仅允许英文小写字母")])])]),t._v(" "),e("tr",[e("td",{staticClass:"text-center"},[t._v("项目描述")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.description,expression:"formdata.description"}],attrs:{type:"text"},domProps:{value:t.formdata.description},on:{input:function(a){a.target.composing||(t.formdata.description=a.target.value)}}})])]),t._v(" "),e("tr",[e("td",{staticClass:"text-center"},[t._v("选择类别")]),t._v(" "),e("td",{staticClass:"p-lr-16"},[e("m-radio",{staticClass:"m-r8",attrs:{data:{label:"普通项目",value:"0"}},model:{value:t.formdata.mode,callback:function(a){t.formdata.mode=a},expression:"formdata.mode"}}),t._v(" "),e("m-radio",{staticClass:"m-r8",attrs:{data:{label:"基础服务",value:"1"}},model:{value:t.formdata.mode,callback:function(a){t.formdata.mode=a},expression:"formdata.mode"}}),t._v(" "),e("m-radio",{attrs:{data:{label:"应用组件",value:"2"}},model:{value:t.formdata.mode,callback:function(a){t.formdata.mode=a},expression:"formdata.mode"}})],1)]),t._v(" "),e("tr",[e("td",{staticClass:"text-center"},[t._v("项目来源")]),t._v(" "),e("td",{staticClass:"p-lr-16"},[e("div",{staticClass:"btn-group"},[e("m-btn",{staticClass:"no-radius btn-github",class:[t.gitLoadStyle,0===t.btnIdx?t.btnActive:""],domProps:{innerHTML:t._s(t.git_tip)},nativeOn:{click:function(a){t.bindGitHub(a)}}}),t._v(" "),0!=t.formdata.mode?e("m-btn",{staticClass:"no-radius btn-github",class:[1===t.btnIdx?t.btnActive:""],nativeOn:{click:function(a){t.upImage(a)}}},[t._v("从本地上传镜像")]):t._e(),t._v(" "),0!=t.formdata.mode?e("m-btn",{staticClass:"no-radius btn-github",class:[2===t.btnIdx?t.btnActive:""],nativeOn:{click:function(a){t.downImage(a)}}},[t._v("从云端下载镜像")]):t._e()],1),t._v(" "),t.githubs.length>0&&0===t.btnIdx?e("div",{staticClass:"git-list"},[e("table",{staticClass:"table hover striped machines-table theme-dft"},[e("thead",[e("tr",[e("th",[t._v("仓库名称")]),t._v(" "),e("th",[t._v("仓库路径")])])]),t._v(" "),e("tbody",t._l(t.githubs,function(a,i){return e("tr",[e("td",[e("m-radio",{attrs:{data:{label:a.repos_name,value:i+""}},model:{value:t.repos_idx,callback:function(a){t.repos_idx=a},expression:"repos_idx"}})],1),t._v(" "),e("td",[t._v(t._s(a.repos_url))])])}))])]):t._e(),t._v(" "),1===t.btnIdx?e("div",{staticClass:"up-image m-b16 p-16"},[e("div",{staticClass:"lay-lcr clearfix m-b16"},[e("div",{staticClass:"lay-left text-center"},[e("div",{staticClass:"formbylabel file theme-dft"},[e("input",{attrs:{type:"file",id:"a5wpj6gl9za",name:"file",accept:".tar"},on:{change:t.fileChange}}),t._v(" "),e("label",{staticClass:"file-label",attrs:{for:"a5wpj6gl9za"}},[t._v("选择文件")])])]),t._v(" "),e("div",{staticClass:"lay-center"},[e("div",{staticClass:"lay-striped-bg p-lr-16"},[t._v(t._s(t.upfile.value)+" ")])]),t._v(" "),e("div",{staticClass:"lay-right"},[t.uping?t._e():e("m-btn",{staticClass:"primary_bg grey-dark_txt",attrs:{sizeh:-1},nativeOn:{click:function(a){t.startUpImage(a)}}},[t._v("开始上传")]),t._v(" "),e("div",{staticClass:"text-center ing-box primary_bg",attrs:{sizeh:-1}},[e("div",{staticClass:"ing-box-bar"}),t._v(" "),e("div",{staticClass:"ing-box-txt grey-dark_txt"},[t._v(t._s(t.uping))])])],1)]),t._v(" "),e("div",{staticClass:"lay-lcr clearfix"},[e("div",{staticClass:"lay-left text-center lay-border"},[t._v("版本号")]),t._v(" "),e("div",{staticClass:"lay-center2"},[e("input",{attrs:{type:"text"}})])])]):t._e(),t._v(" "),2===t.btnIdx?e("div",{staticClass:"down-image m-b16 p-16"},[e("div",{staticClass:"lay-lcr clearfix m-b16"},[e("div",{staticClass:"lay-left text-center lay-border"},[t._v("镜像地址")]),t._v(" "),e("div",{staticClass:"lay-center"},[e("input",{attrs:{type:"text"}})]),t._v(" "),e("div",{staticClass:"lay-right"},[e("m-btn",{staticClass:"primary_bg grey-dark_txt",attrs:{sizeh:-1}},[t._v("开始下载")])],1)]),t._v(" "),e("div",{staticClass:"lay-lcr clearfix"},[e("div",{staticClass:"lay-left text-center lay-border"},[t._v("版本号")]),t._v(" "),e("div",{staticClass:"lay-center2"},[e("input",{attrs:{type:"text"}})])])]):t._e()])])])]),t._v(" "),e("div",{staticClass:"p-16 text-center"},[e("m-btn",{staticClass:"primary_bg no-radius grey-dark_txt",nativeOn:{click:function(a){t.addProject(a)}}},[t._v(t._s(t.isEditor?"确定修改":"确定添加"))])],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=6.21aba9b1e1262460bdfe.js.map