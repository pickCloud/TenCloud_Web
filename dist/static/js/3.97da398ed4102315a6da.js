webpackJsonp([3],{231:function(t,e,a){a(443);var i=a(4)(a(400),a(489),null,null);t.exports=i.exports},241:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(91),n=function(t){return t&&t.__esModule?t:{default:t}}(i),o={theme:"comb-msg",hasClose:!1,buttons:[{label:"确定",theme:""},{label:"取消",theme:""}]};e.default={methods:{popperDelete:function(t,e){var a=this.$createElement;this.$confirm((0,n.default)({},o,{content:a("div",[a("img",{attrs:{src:"./static/img/error_icon.png",class:"vam m-r16"}}),a("span",{attrs:{class:"vam"}},t)])}),function(t){0===(arguments.length<=1?void 0:arguments[1])&&e&&e.call(),t.actionPopper(!1)})},popperInfo:function(t,e,a){this.$confirm((0,n.default)({},o,{content:t}),function(t){0===(arguments.length<=1?void 0:arguments[1])?e&&e.call():a&&a.call(),t.actionPopper(!1)})},popperWaiting:function(t){var e=this.$createElement;return this.$confirm({theme:"comb-msg",hasClose:!1,maskClose:!1,content:e("span",null,[e("img",{attrs:{src:"./static/img/spin.gif",class:"vam m-r8"}}),e("span",{attrs:{class:"vam"}},t)]),buttons:[]})}}}},362:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(16),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=new n.default},388:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(29),o=i(n),r=a(241),s=i(r),l=a(459),c=i(l),d=a(460),u=i(d),p=a(458),m=i(p),A=a(457),f=i(A),g=a(362),v=i(g),h=["github","limage","cimage"];e.default={mixins:[s.default],data:function(){return{formdata:{name:"",image_name:"",description:"",mode:"0"},isEditor:!1,imageMode:"github",propData:{},isHaveLocal:!1}},watch:{"formdata.mode":function(t,e){"0"===t&&(this.imageMode="github")}},methods:{addProject:function(){var t=this,e=this.$refs.proSource.getData();if(e){if(""===this.formdata.name)return void this.$toast("名称不能为空","cc");if(""===this.formdata.image_name)return void this.$toast("镜像名称不能为空","cc");if(""===this.formdata.description)return void this.$toast("描述不能为空","cc");var a=(0,o.default)({},this.formdata,e);a.image_source=h.indexOf(this.imageMode),console.log(a),this.$Global.async(this.isEditor?"project_update":"project_add",!0).getData(a).then(function(e){0===e.status&&(t.isEditor?t.$router.push({name:"ProjectDetail",params:{id:t.$route.params.id}}):t.$router.push({name:"Projects"})),t.$toast(t.isEditor?"修改成功":"添加成功","cc")},function(t){})}},bindGitHub:function(){if(0===this.btnIdx){if(-1!==this.git_tip.indexOf("<img"))return;this.getApiData()}this.btnIdx=0},editorMode:function(){var t=this;this.$Global.async("project_detail",!0).getData(null,this.$route.params.id).then(function(e){if(0===e.status){var a=t.propData=e.data[0];t.formdata.name=a.name,t.formdata.description=a.description,t.formdata.mode=a.mode+"",t.formdata.image_name=a.image_name,t.imageMode=h[a.image_source];var i=setTimeout(function(t){v.default.$emit("pullGitHub",!0),clearTimeout(i)},10)}})},getLocalStorage:function(t){return window.localStorage.getItem(t)},setLocalStorage:function(t,e){window.localStorage.setItem(t,e)},getLocaltion:function(t){this.formdata=t}},created:function(){this.isEditor=void 0!==this.$route.params.id,this.isEditor&&this.editorMode(),this.isHaveLocal=this.getLocalStorage("isHaveLocal"),this.isHaveLocal&&this.getLocaltion(this.getLocalStorage("formdata"))},components:{github:c.default,limage:u.default,cimage:m.default,bgroup:f.default}}},400:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(388),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={mixins:[n.default]}},402:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(362),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={props:{mode:{type:String,default:"0"},value:{type:String},btnActive:{type:String,default:"primary_bg grey-dark_txt"}},data:function(){return{gittip:"绑定GitHub代码仓库",hasGit:!1}},computed:{loadClass:function(){return-1!==this.gittip.indexOf("<img")?"loading":""}},watch:{value:function(t,e){this.gittip="github"!==t?"GitHub代码仓库":this.hasGit?"重新绑定GitHub代码仓库":"绑定GitHub代码仓库"}},methods:{change:function(t){var e=this;this.value===t?"github"===t&&(this.gittip='<img class="vam" src="./static/img/spin.gif"></img> <span class="vam">数据加载中</span>',n.default.$emit("pullGitHub",function(t){e.gittip="重新绑定GitHub代码仓库",e.hasGit=!0})):this.$emit("input",t)}}}},403:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{image_url:"",image_ver:"",isDownload:!1}},methods:{download:function(){var t=this;if(""===this.image_url)return this.$toast("请输入镜像地址","cc"),!1;this.isDownload||(this.isDownload=!0,this.$Global.async("project_down_image",!0).getData({image_url:this.image_url}).then(function(e){console.log(e),t.isDownload=!1}))},getData:function(){var t={version:this.image_ver};return""===this.image_url?(this.$toast("请输入镜像地址","cc"),!1):""===this.image_ver?(this.$toast("请输入版本号","cc"),!1):t}}}},404:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(28),o=i(n),r=a(362),s=i(r);e.default={props:{data:{type:Object}},data:function(){return{repos_idx:"0",githubs:[]}},methods:{getGitHub:function(t){var e=this,a=window.location.href,i={url:a};return this.$Global.async("project_repos",!0).getData(i,"",!1).then(function(a){0===a.status?(e.githubs=a.data,e.repos_idx="0",t&&"function"===(void 0===t?"undefined":(0,o.default)(t)).toLowerCase()&&t(),t&&"boolean"===(void 0===t?"undefined":(0,o.default)(t)).toLowerCase()&&e.initReposIdx()):e.$toast(a.message,"cc")}).catch(function(t){t&&t.response.data.data.url&&(window.location.href=t.response.data.data.url)}),{}},initReposIdx:function(){for(var t=-1;++t<this.githubs.length;){var e=this.githubs[t];if(e.repos_name===this.data.repos_name&&e.repos_url===this.data.repos_url){this.repos_idx=t+"";break}}},getData:function(){var t=this.githubs[this.repos_idx];return t||this.$toast("请先拉取来源","cc"),t}},created:function(){s.default.$on("pullGitHub",this.getGitHub)}}},405:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(92);e.default={data:function(){return{upfile:{},uping:"",upok:!1,ver:""}},methods:{fileChange:function(t){this.upfile=t.target},startUpImage:function(){var t=this,e=this.upfile.files[0];if(e.size>1073741824)return void this.$toast("镜像不能大于1G","cc");var a=new FormData;a.append("file",e),(0,i.upStream)({file:a,method:this.$Global.apis.project_up_image.m.toUpperCase(),url:this.$Global.apis.baseURL+this.$Global.apis.project_up_image.u,ing:function(e){var a=parseInt(100*e.loaded/e.total);t.uping=a+"%",t.$el.querySelector(".ing-box-bar").style.left=a-100+"%"}}).then(function(e){t.updata=e.data,t.upok=!0})},getData:function(){return this.upok?""===this.ver?(this.$toast("请输入版本号","cc"),!1):{version:this.ver}:(this.$toast(this.upfile.files?"上传中，请稍等":"请先上传镜像","cc"),!1)}}}},429:function(t,e,a){e=t.exports=a(221)(),e.push([t.i,'.page-project-add .btn-group .btn{border:1px solid hsla(0,0%,100%,.1)}.down-image,.up-image{background-color:#262a35}.lay-lcr>div{float:left;height:50px;line-height:50px}.lay-lcr .file-label{display:block;border:none;padding:0;background-color:#48bbc0!important;color:#282828}.lay-lcr .file-label:hover{color:#fff!important}.lay-l{width:100px}.lay-r{width:200px}.lay-r .btn{height:100%;width:100%;margin-top:-1px}.lay-c{width:calc(100% - 300px);padding:0 16px}.lay-c2{width:calc(100% - 100px);padding-left:16px}.lay-primary-bg{background-color:#48bbc0;color:#282828}.lay-border{border:1px solid hsla(0,0%,100%,.1)}.lay-striped-bg{background-color:#1d212a;height:100%}.ing-box{border:1px solid hsla(0,0%,100%,.1);position:relative;overflow:hidden}.ing-box-bar{width:100%;z-index:0;overflow:hidden}.ing-box-bar,.ing-box-bar:before{position:absolute;height:100%;left:-100%;top:0}.ing-box-bar:before{content:" ";width:200%;background:url('+a(454)+") repeat-x;-webkit-animation:progressLoop 2s infinite linear;animation:progressLoop 2s infinite linear}.ing-box-txt{position:relative;z-index:1}@-webkit-keyframes progressLoop{0%{left:-100%}to{left:0}}@keyframes progressLoop{0%{left:-100%}to{left:0}}","",{version:3,sources:["D:/FrontEnd/src/components/ProjectAdd.vue"],names:[],mappings:"AACA,kCACE,mCAA2C,CAC5C,AACD,sBACE,wBAA0B,CAC3B,AACD,aACE,WAAY,AACZ,YAAa,AACb,gBAAkB,CACnB,AACD,qBACE,cAAe,AACf,YAAa,AACb,UAAW,AACX,mCAAqC,AACrC,aAAe,CAChB,AACD,2BACI,oBAAuB,CAC1B,AACD,OACE,WAAa,CACd,AACD,OACE,WAAa,CACd,AACD,YACI,YAAa,AACb,WAAY,AACZ,eAAiB,CACpB,AACD,OACE,yBAA0B,AAC1B,cAAgB,CACjB,AACD,QACE,yBAA0B,AAC1B,iBAAmB,CACpB,AACD,gBACE,yBAA0B,AAC1B,aAAe,CAChB,AACD,YACE,mCAA2C,CAC5C,AACD,gBACE,yBAA0B,AAC1B,WAAa,CACd,AACD,SACE,oCAA2C,AAC3C,kBAAmB,AACnB,eAAiB,CAClB,AACD,aAEE,WAAY,AAIZ,UAAW,AACX,eAAiB,CAClB,AACD,iCARE,kBAAmB,AAEnB,YAAa,AACb,WAAY,AACZ,KAAO,CAcR,AAVD,oBACI,YAAa,AAIb,WAAY,AAEZ,kDAAmD,AACnD,kDAAmD,AAC3C,yCAA2C,CACtD,AACD,aACE,kBAAmB,AACnB,SAAW,CACZ,AACD,gCACA,GACI,UAAY,CACf,AACD,GACI,MAAQ,CACX,CACA,AACD,wBACA,GACI,UAAY,CACf,AACD,GACI,MAAQ,CACX,CACA",file:"ProjectAdd.vue",sourcesContent:["\n.page-project-add .btn-group .btn {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.up-image, .down-image {\n  background-color: #262a35;\n}\n.lay-lcr > div {\n  float: left;\n  height: 50px;\n  line-height: 50px;\n}\n.lay-lcr .file-label {\n  display: block;\n  border: none;\n  padding: 0;\n  background-color: #48bbc0 !important;\n  color: #282828;\n}\n.lay-lcr .file-label:hover {\n    color: #fff !important;\n}\n.lay-l {\n  width: 100px;\n}\n.lay-r {\n  width: 200px;\n}\n.lay-r .btn {\n    height: 100%;\n    width: 100%;\n    margin-top: -1px;\n}\n.lay-c {\n  width: calc(100% - 300px);\n  padding: 0 16px;\n}\n.lay-c2 {\n  width: calc(100% - 100px);\n  padding-left: 16px;\n}\n.lay-primary-bg {\n  background-color: #48bbc0;\n  color: #282828;\n}\n.lay-border {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.lay-striped-bg {\n  background-color: #1d212a;\n  height: 100%;\n}\n.ing-box {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n.ing-box-bar {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: -100%;\n  top: 0;\n  z-index: 0;\n  overflow: hidden;\n}\n.ing-box-bar:before {\n    content: ' ';\n    position: absolute;\n    left: -100%;\n    top: 0;\n    width: 200%;\n    height: 100%;\n    background: url(\"../assets/progress.png\") repeat-x;\n    -webkit-animation: progressLoop 2s infinite linear;\n            animation: progressLoop 2s infinite linear;\n}\n.ing-box-txt {\n  position: relative;\n  z-index: 1;\n}\n@-webkit-keyframes progressLoop {\nfrom {\n    left: -100%;\n}\nto {\n    left: 0;\n}\n}\n@keyframes progressLoop {\nfrom {\n    left: -100%;\n}\nto {\n    left: 0;\n}\n}\n"],sourceRoot:""}])},443:function(t,e,a){var i=a(429);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(222)("0214b164",i,!0)},454:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAyCAYAAAAgGuf/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA85JREFUeNrcm2tojmEYx59trzknJNaSOSRrkaSllOR8ljmnOcUXIbJvRCLfnIvCbE4xaTZKqZk5Jq2E4YPTfGAUm8ycT/+r51re1rvt+V/f7vuu37f3en/vdT33c7ru+02ad68qiDhSQSFYGPDjKRgPXhExzvliET/cAZwFUw2i+2AieEfEOOmLUswu4AIYZRDd1h/4kYhx1pfcyod7gHKj6LKeakxiTvtaKmZvcB0MM4jOgRngCxHjvK+5Yg4EN8AggygfLAA/iBgvfImKOVSPWB+DaCdYCX4TMd74mhZzJLgKehpEm0Ae+EvEeOWLv5vL7b1YHxOYIV++Ghwg47zzNRZzLjipD67M+AWWglNknJc+Oc1XgNMG0TeQY0jMW58U8xBIIUX1YDK4SMbl+eyT0zyJFH0Ak0AlGbcdbDRc+J3xxciAN/rU/5iIkdm/H6wyJOaUjynmczAOVBMxbUABWGRIzDlf1GI+BBPAW0LUHhSB6YbEnPRFKeYdMAXUEaLO2okZbUjMWV9rXaMynfqMqLt2YiyJOe1rqZjnwTTQQIjStYEw3JCY877milmobw3fCdEAcBNkGhLzwpeomHvAcrITM0SPWIYhMW98TYu5BawnOzEjQAXoZUjMK18srjOyDuwjf5xcvEtAR0MnxjtfTKe7TPvjpCjH2EDw1ifFnA1KSdEycNjQQJAL/nxffckGkZwu+YbEPuvDsbe+ZDJgK9ht6DTV6vWn3Gdf1Hdz+fK9YI3hDlqj771VRIyTvijFlM8cBbkG0UudIS+IGGd9rRWzHTgDZhpEj4KwN1hDxDjta6mYnfTiPcYguhuEbf9aIsZ5X3M3oG7gilFUrlOfScwLX6JipgXhjodsg0iOtOwKqydivPE1LWY/cAtkGUQnwJwgXCKNOrzyxRczS1tMfQ0iWVBaEoSL9lGHd77GYmbr1E8ziLaBtWQnxktfTC/CpXp3YzsxG/SNgRne+qSYl0BbQydGttYVkHHyPFfkqy9mEMkmT/lHQjEZl6s/LsVXH9voaNBHA1Yk77zHDIk55WOKWaevT2WkaHMQdrjZToxzvqhdI9npIJtFH5CdmF1B2B9kh5O+KMWs1iP2jBDJ6XUkCDeKssNZX2vFfKKi14QoVTsxswyJOe1rqZiV2hl5T4hkFa9EGwHscN7X3A2oAowlRV2D/3t32OGFL1ExZeuxLER9IkSyQH8tCBfs2eGNr2kxZTO8LP1+JUQZ2kAYbEjMK198MQ+CxeAnIcpUUX9DYt75Gou5Iwj3gP8hRLKtTjYzpRsS89L3T4ABADIIv+kMvMoJAAAAAElFTkSuQmCC"},457:function(t,e,a){var i=a(4)(a(402),a(476),null,null);t.exports=i.exports},458:function(t,e,a){var i=a(4)(a(403),a(468),null,null);t.exports=i.exports},459:function(t,e,a){var i=a(4)(a(404),a(483),null,null);t.exports=i.exports},460:function(t,e,a){var i=a(4)(a(405),a(484),null,null);t.exports=i.exports},468:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"down-image m-b16 p-16"},[a("div",{staticClass:"lay-lcr clearfix m-b16"},[a("div",{staticClass:"lay-l text-center lay-border"},[t._v("镜像地址")]),t._v(" "),a("div",{staticClass:"lay-c"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.image_url,expression:"image_url"}],attrs:{type:"text"},domProps:{value:t.image_url},on:{input:function(e){e.target.composing||(t.image_url=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"lay-r"},[t.isDownload?a("div",{staticClass:"text-center ing-box primary_bg"},[a("div",{staticClass:"ing-box-bar"}),t._v(" "),a("div",{staticClass:"ing-box-txt grey-dark_txt"},[t._v("下载中")])]):a("m-btn",{staticClass:"primary_bg grey-dark_txt",attrs:{sizeh:-1},nativeOn:{click:function(e){t.download(e)}}},[t._v("开始下载")])],1)]),t._v(" "),a("div",{staticClass:"lay-lcr clearfix"},[a("div",{staticClass:"lay-l text-center lay-border"},[t._v("版本号")]),t._v(" "),a("div",{staticClass:"lay-c2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.image_ver,expression:"image_ver"}],attrs:{type:"text"},domProps:{value:t.image_ver},on:{input:function(e){e.target.composing||(t.image_ver=e.target.value)}}})])])])},staticRenderFns:[]}},476:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-group"},[a("m-btn",{staticClass:"no-radius btn-github",class:[t.loadClass,"github"===t.value?t.btnActive:""],domProps:{innerHTML:t._s(t.gittip)},nativeOn:{click:function(e){t.change("github")}}}),t._v(" "),"0"!=t.mode?a("m-btn",{staticClass:"no-radius btn-github",class:["limage"===t.value?t.btnActive:""],nativeOn:{click:function(e){t.change("limage")}}},[t._v("从本地上传镜像")]):t._e(),t._v(" "),"0"!=t.mode?a("m-btn",{staticClass:"no-radius btn-github",class:["cimage"===t.value?t.btnActive:""],nativeOn:{click:function(e){t.change("cimage")}}},[t._v("从云端下载镜像")]):t._e()],1)},staticRenderFns:[]}},483:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"git-list m-b16"},[a("table",{staticClass:"table hover striped machines-table theme-dft"},[t._m(0),t._v(" "),a("tbody",t._l(t.githubs,function(e,i){return a("tr",[a("td",[a("m-radio",{attrs:{data:{label:e.repos_name,value:i+""}},model:{value:t.repos_idx,callback:function(e){t.repos_idx=e},expression:"repos_idx"}})],1),t._v(" "),a("td",[t._v(t._s(e.repos_url))])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("仓库名称")]),t._v(" "),a("th",[t._v("仓库路径")])])])}]}},484:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"up-image m-b16 p-16"},[a("div",{staticClass:"lay-lcr clearfix m-b16"},[a("div",{staticClass:"lay-l text-center"},[a("div",{staticClass:"formbylabel file theme-dft"},[a("input",{attrs:{type:"file",id:"a5wpj6gl9za",name:"file",accept:".tar"},on:{change:t.fileChange}}),t._v(" "),a("label",{staticClass:"file-label",attrs:{for:"a5wpj6gl9za"}},[t._v("选择文件")])])]),t._v(" "),a("div",{staticClass:"lay-c"},[a("div",{staticClass:"lay-striped-bg p-lr-16"},[t._v(t._s(t.upfile.value)+" ")])]),t._v(" "),a("div",{staticClass:"lay-r"},[t.uping?a("div",{staticClass:"text-center ing-box primary_bg"},[a("div",{staticClass:"ing-box-bar"}),t._v(" "),a("div",{staticClass:"ing-box-txt grey-dark_txt"},[t._v(t._s(t.uping))])]):a("m-btn",{staticClass:"primary_bg grey-dark_txt",attrs:{sizeh:-1},nativeOn:{click:function(e){t.startUpImage(e)}}},[t._v("开始上传")])],1)]),t._v(" "),a("div",{staticClass:"lay-lcr clearfix"},[a("div",{staticClass:"lay-l text-center lay-border"},[t._v("版本号")]),t._v(" "),a("div",{staticClass:"lay-c2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.ver,expression:"ver"}],attrs:{type:"text"},domProps:{value:t.ver},on:{input:function(e){e.target.composing||(t.ver=e.target.value)}}})])])])},staticRenderFns:[]}},489:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-pad page-project-add"},[a("panel",{attrs:{title:t.isEditor?"项目修改":"添加项目"}},[a("table",{staticClass:"add-table"},[a("col",{attrs:{width:"20%"}}),t._v(" "),a("col",{attrs:{width:"80%"}}),t._v(" "),a("tbody",[a("tr",[a("td",{staticClass:"text-center"},[t._v("名称")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.name,expression:"formdata.name"}],attrs:{type:"text"},domProps:{value:t.formdata.name},on:{input:function(e){e.target.composing||(t.formdata.name=e.target.value)}}})])]),t._v(" "),a("tr",[a("td",{staticClass:"text-center"},[t._v("镜像名称")]),t._v(" "),a("td",{staticStyle:{position:"relative"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.image_name,expression:"formdata.image_name"}],attrs:{type:"text",placeholder:"请输入小写字母"},domProps:{value:t.formdata.image_name},on:{input:function(e){e.target.composing||(t.formdata.image_name=e.target.value)}}}),t._v(" "),a("p",{staticClass:"deploy-name_tip"},[t._v("项目部署后以容器的形式运行：容器名称仅允许英文小写字母")])])]),t._v(" "),a("tr",[a("td",{staticClass:"text-center"},[t._v("项目描述")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formdata.description,expression:"formdata.description"}],attrs:{type:"text"},domProps:{value:t.formdata.description},on:{input:function(e){e.target.composing||(t.formdata.description=e.target.value)}}})])]),t._v(" "),a("tr",[a("td",{staticClass:"text-center"},[t._v("选择类别")]),t._v(" "),a("td",{staticClass:"p-lr-16"},[a("m-radio",{staticClass:"m-r8",attrs:{data:{label:"普通项目",value:"0"}},model:{value:t.formdata.mode,callback:function(e){t.formdata.mode=e},expression:"formdata.mode"}}),t._v(" "),a("m-radio",{staticClass:"m-r8",attrs:{data:{label:"基础服务",value:"1"}},model:{value:t.formdata.mode,callback:function(e){t.formdata.mode=e},expression:"formdata.mode"}}),t._v(" "),a("m-radio",{attrs:{data:{label:"应用组件",value:"2"}},model:{value:t.formdata.mode,callback:function(e){t.formdata.mode=e},expression:"formdata.mode"}})],1)]),t._v(" "),a("tr",[a("td",{staticClass:"text-center"},[t._v("项目来源")]),t._v(" "),a("td",{staticClass:"p-lr-16"},[a("bgroup",{attrs:{mode:t.formdata.mode},model:{value:t.imageMode,callback:function(e){t.imageMode=e},expression:"imageMode"}}),t._v(" "),a("keep-alive",[a(t.imageMode,{ref:"proSource",tag:"component",attrs:{data:t.propData}})],1)],1)])])]),t._v(" "),a("div",{staticClass:"p-16 text-center"},[a("m-btn",{staticClass:"primary_bg no-radius grey-dark_txt",nativeOn:{click:function(e){t.addProject(e)}}},[t._v(t._s(t.isEditor?"确定修改":"确定添加"))])],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=3.97da398ed4102315a6da.js.map