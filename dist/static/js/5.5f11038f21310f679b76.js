webpackJsonp([5],{147:function(t,e,i){i(221);var n=i(7)(i(203),i(240),null,null);t.exports=n.exports},158:function(t,e,i){"use strict";function n(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=new FormData;return i&&a.append("key",i),a.append("token",e),a.append("file",t),(0,r.default)({method:"POST",url:"http://up-z2.qiniu.com",data:a,progress:n})}function a(t){var e=t.file,i=t.url,n=t.method,a=t.ing,s=void 0===a?null:a,o=e;return(0,r.default)({method:n,url:i,data:o,progress:s,overrideMimeType:"application/octet-stream"})}Object.defineProperty(e,"__esModule",{value:!0}),e.upload=n,e.upStream=a;var s=i(159),r=function(t){return t&&t.__esModule?t:{default:t}}(s)},159:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(56),a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){var e=t.method,i=t.url,n=t.data,s=t.progress,r=void 0===s?null:s;t.overrideMimeType;return new a.default(function(t,a){var s=new XMLHttpRequest;s.open(e,i),s.upload.addEventListener("progress",function(t){t.lengthComputable&&r&&r(t)},!1),s.onreadystatechange=function(e){if(4===s.readyState&&200===s.status&&""!==s.responseText){var i=JSON.parse(s.responseText);t(i)}else 200!==s.status&&s.responseText&&a()},s.withCredentials=!0,s.send(n)})}},163:function(t,e,i){t.exports={default:i(167),__esModule:!0}},167:function(t,e,i){var n=i(3),a=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},203:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(163),a=function(t){return t&&t.__esModule?t:{default:t}}(n),s=i(158),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(s);e.default={data:function(){return{infos:{id:1,name:"",mobile:"",email:"",image_url:""},isEditor:!1,updateing:!1,thumbFile:""}},watch:{isEditor:function(t,e){this.changeInpState(t)}},methods:{getApiData:function(){var t=this;this.$Global.async("user_info",!0).getData(null).then(function(e){t.infos=e.data})},changeInpState:function(t){this.$el.querySelectorAll(".inp-editor").forEach(function(e,i){t?e.removeAttribute("disabled"):e.setAttribute("disabled",!0)})},cancelHandle:function(){this.isEditor=!1,this.infos=JSON.parse(this.temp_data)},editorHandle:function(){this.isEditor=!0,this.temp_data=(0,a.default)(this.infos)},checkChangeData:function(){var t=JSON.parse(this.temp_data),e=null;for(var i in this.infos){var n=t[i],a=this.infos[i];a!==n&&(null===e&&(e={}),e[i]=a)}return e},sureHandle:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=e||this.checkChangeData();null===i||this.updateing||(this.updateing=!0,this.$Global.async("user_update",!0).getData(i).then(function(e){t.$toast(e.message,"cc"),t.isEditor=!1,t.updateing=!1,t.getApiData(),t.confirm&&(t.confirm.actionPopper(!1),t.confirm=null)}))},headHeigth:function(){var t=this.$el.querySelector(".info-head");t.style.height=t.clientWidth+"px"},getThumbToken:function(){var t=this;this.$Global.async("user_thumb_token",!0).getData(null).then(function(e){r.upload(t.thumbFile,e.data.token).then(function(e){t.sureHandle({image_url:e.key})})})},fileChange:function(t){if(""!==t.target.value){var e=this.$createElement;this.confirm=this.$confirm({content:e("div",null,[e("span",{attrs:{class:"vam"}},"上传中"),e("div",{attrs:{class:"vam spinner"}},[e("div",{attrs:{class:"bounce1"}}),e("div",{attrs:{class:"bounce2"}}),e("div",{attrs:{class:"bounce3"}})])]),themeClass:"msg-upload",hasClose:!1,maskClose:!1,buttons:[]}),this.thumbFile=t.target.files[0],this.getThumbToken()}}},mounted:function(){this.changeInpState(!1),this.headHeigth()},created:function(){var t=this;this.getApiData(),this.resizeFunc=function(){t.headHeigth()},window.addEventListener("resize",this.resizeFunc)},destroyed:function(){window.removeEventListener("resize",this.resizeFunc)}}},213:function(t,e,i){e=t.exports=i(135)(),e.push([t.i,".info-head{width:50%;margin:0 auto;border-radius:50%;background-color:#1d212a;overflow:hidden}.info-head img{width:100%}","",{version:3,sources:["D:/FrontEnd/src/components/UserInfo.vue"],names:[],mappings:"AACA,WACE,UAAW,AACX,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,eAAiB,CAClB,AACD,eACI,UAAY,CACf",file:"UserInfo.vue",sourcesContent:["\n.info-head {\n  width: 50%;\n  margin: 0 auto;\n  border-radius: 50%;\n  background-color: #1d212a;\n  overflow: hidden;\n}\n.info-head img {\n    width: 100%;\n}\n"],sourceRoot:""}])},221:function(t,e,i){var n=i(213);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(136)("5c563cb8",n,!0)},240:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-pad page-userinfo"},[i("panel",{staticClass:"m-b16"},[i("div",{staticClass:"panel-title",slot:"title"},[t._v("\n      账号安全\n      "),t.isEditor?t._e():i("m-btn",{staticClass:"right primary_bg grey-dark_txt m-t04",nativeOn:{click:function(e){t.editorHandle(e)}}},[t._v("修改")]),t._v(" "),t.isEditor?i("m-btn",{staticClass:"right primary_bg grey-dark_txt m-t04",nativeOn:{click:function(e){t.cancelHandle(e)}}},[t._v("取消")]):t._e(),t._v(" "),t.isEditor?i("m-btn",{staticClass:"right primary_bg grey-dark_txt m-t04 m-r8",nativeOn:{click:function(e){t.sureHandle(e)}}},[t._v("保存")]):t._e()],1),t._v(" "),i("div",{staticClass:"p-16"},[i("div",{staticClass:"lay-left-right"},[i("div",{staticClass:"lay-left"},[t._v("手机号码")]),t._v(" "),i("div",{staticClass:"lay-right lay-border-bottom"},[t._v("\n          "+t._s(t.infos.mobile)+"\n        ")])]),t._v(" "),i("div",{staticClass:"lay-left-right"},[i("div",{staticClass:"lay-left"},[t._v("邮箱")]),t._v(" "),i("div",{staticClass:"lay-right lay-border-bottom"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.infos.email,expression:"infos.email"}],staticClass:"inp-editor",class:{editor:t.isEditor},attrs:{type:"email"},domProps:{value:t.infos.email},on:{input:function(e){e.target.composing||(t.infos.email=e.target.value)}}})])])])]),t._v(" "),i("panel",{attrs:{title:"基本信息"}},[i("m-row",{staticClass:"p-16",attrs:{gutter:16}},[i("m-col",{staticClass:"xs-12 md-4 text-center m-b16"},[i("div",{staticClass:"info-head m-b16"},[t.infos.image_url?i("img",{attrs:{src:t.infos.image_url,alt:""}}):t._e()]),t._v(" "),i("div",{staticClass:"text-center m-b16"},[i("div",{staticClass:"formbylabel file theme-dft",staticStyle:{height:"32px","line-height":"32px"}},[i("input",{attrs:{type:"file",id:"a5wpj6gl9z",name:"file"},on:{change:t.fileChange}}),t._v(" "),i("label",{staticClass:"file-label",attrs:{for:"a5wpj6gl9z"}},[t._v("修改头像")])])]),t._v(" "),i("p",[i("i",{staticClass:"icon icon-xinxi-yin m-r8"}),t._v("仅支持JPG、PNG格式，文件小于1M（方形图）")])]),t._v(" "),i("m-col",{staticClass:"xs-12 md-8"},[i("div",{staticClass:"lay-left-right"},[i("div",{staticClass:"lay-left"},[t._v("姓名")]),t._v(" "),i("div",{staticClass:"lay-right lay-bg"},[t._v(t._s(t.infos.name))])])])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.5f11038f21310f679b76.js.map