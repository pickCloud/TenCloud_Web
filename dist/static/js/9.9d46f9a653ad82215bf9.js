webpackJsonp([9],{287:function(t,e,i){i(541);var n=i(0)(i(486),i(616),null,null);t.exports=n.exports},294:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},296:function(t,e,i){"use strict";(function(t){var e=i(21),n=function(t){return t&&t.__esModule?t:{default:t}}(e);!function(e,i){"object"===(0,n.default)(t)&&"object"===(0,n.default)(t.exports)?t.exports=e.document?i(e,!0):function(t){if(!t.document)throw new Error("Geetest requires a window with a document");return i(t)}:i(e)}("undefined"!=typeof window?window:void 0,function(t,e){function i(t){this._obj=t}function s(t){var e=this;new i(t)._each(function(t,i){e[t]=i})}if(void 0===t)throw new Error("Geetest requires browser environment");var o=t.document,a=t.Math,r=o.getElementsByTagName("head")[0];i.prototype={_each:function(t){var e=this._obj;for(var i in e)e.hasOwnProperty(i)&&t(i,e[i]);return this}},s.prototype={api_server:"api.geetest.com",protocol:"http://",type_path:"/gettype.php",fallback_config:{slide:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"slide",slide:"/static/js/geetest.0.0.0.js"},fullpage:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"fullpage",fullpage:"/static/js/fullpage.0.0.0.js"}},_get_fallback_config:function(){var t=this;return l(t.type)?t.fallback_config[t.type]:t.new_captcha?t.fallback_config.fullpage:t.fallback_config.slide},_extend:function(t){var e=this;new i(t)._each(function(t,i){e[t]=i})}};var c=function(t){return"number"==typeof t},l=function(t){return"string"==typeof t},d=function(t){return"boolean"==typeof t},p=function(t){return"object"===(void 0===t?"undefined":(0,n.default)(t))&&null!==t},u=function(t){return"function"==typeof t},f={},h={},g=function(){return parseInt(1e4*a.random())+(new Date).valueOf()},v=function(t,e){var i=o.createElement("script");i.charset="UTF-8",i.async=!0,i.onerror=function(){e(!0)};var n=!1;i.onload=i.onreadystatechange=function(){n||i.readyState&&"loaded"!==i.readyState&&"complete"!==i.readyState||(n=!0,setTimeout(function(){e(!1)},0))},i.src=t,r.appendChild(i)},_=function(t){return t.replace(/^https?:\/\/|\/$/g,"")},m=function(t){return t=t.replace(/\/+/g,"/"),0!==t.indexOf("/")&&(t="/"+t),t},w=function(t){if(!t)return"";var e="?";return new i(t)._each(function(t,i){(l(i)||c(i)||d(i))&&(e=e+encodeURIComponent(t)+"="+encodeURIComponent(i)+"&")}),"?"===e&&(e=""),e.replace(/&$/,"")},C=function(t,e,i,n){e=_(e);var s=m(i)+w(n);return e&&(s=t+e+s),s},b=function(t,e,i,n,s){!function o(a){var r=C(t,e[a],i,n);v(r,function(t){t?a>=e.length-1?s(!0):o(a+1):s(!1)})}(0)},y=function(e,i,n,s){if(p(n.getLib))return n._extend(n.getLib),void s(n);if(n.offline)return void s(n._get_fallback_config());var o="geetest_"+g();t[o]=function(e){s("success"===e.status?e.data:e.status?n._get_fallback_config():e),t[o]=void 0;try{delete t[o]}catch(t){}},b(n.protocol,e,i,{gt:n.gt,callback:o},function(t){t&&s(n._get_fallback_config())})},A=function(t,e){var i={networkError:"网络错误"};if("function"!=typeof e.onError)throw new Error(i[t]);e.onError(i[t])};(function(){return!!t.Geetest})()&&(h.slide="loaded");var x=function(e,i){var n=new s(e);e.https?n.protocol="https://":e.protocol||(n.protocol=t.location.protocol+"//"),y([n.api_server||n.apiserver],n.type_path,n,function(e){var s=e.type,o=function(){n._extend(e),i(new t.Geetest(n))};f[s]=f[s]||[];var a=h[s]||"init";"init"===a?(h[s]="loading",f[s].push(o),b(n.protocol,e.static_servers||e.domains,e[s]||e.path,null,function(t){if(t)h[s]="fail",A("networkError",n);else{h[s]="loaded";for(var e=f[s],i=0,o=e.length;i<o;i+=1){var a=e[i];u(a)&&a()}f[s]=[]}})):"loaded"===a?o():"fail"===a?A("networkError",n):"loading"===a&&f[s].push(o)})};return t.initGeetest=x,x})}).call(e,i(294)(t))},297:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(6),o=n(s),a=i(296),r=n(a);e.default={data:function(){return{tip:{type:"error",info:""},loginData:{mobile:"",auth_code:"",geetest_challenge:"",geetest_validate:"",geetest_seccode:"",password:"",new_password:"",old_password:""},btntip:"获取验证码",btndis:!1,sure_password:"",sms_count:0,isRegisn:!0}},methods:{getCount:function(){var t=this;o.default.http("user_sms_count","","get",this.loginData.mobile+"/count",!1).then(function(e){t.sms_count=e.data.sms_count,t.sms_count>2&&(t.btndis=!0,t.initGeet())}).catch(function(t){})},resetInfoTip:function(){this.tip.type="",this.tip.info=""},lostPassword:function(){this.$router.push({name:"LostPassword"})},resign:function(){this.$router.push({name:"Resign"})},checkMobile:function(){var t=""===this.loginData.mobile||!/^1[34578]\d{9}$/.test(this.loginData.mobile);return""===this.loginData.mobile?(this.tip.type="error",this.tip.info="手机号不能为空",t):(t&&(this.tip.type="error",this.tip.info="手机格式有误"),t)},checkCode:function(){var t=""===this.loginData.auth_code;return t&&(this.tip.type="error",this.tip.info="验证码不能为空"),t},checkHasPassword:function(){var t=""===this.loginData.password;return t?(this.tip.type="error",this.tip.info="密码不能为空",!0):this.loginData.password.length<6?(this.tip.type="error",this.tip.info="密码不能小于6位",!0):t},checkPasswordAndMobile:function(){return!!this.checkMobile()||(!!this.checkHasPassword()||void 0)},checkCodeAndMobile:function(){return!!this.checkMobile()||(!!this.checkCode()||(this.sms_count>2&&this.sms_count<10&&!(this.loginData.geetest_challenge&&this.loginData.geetest_seccode&&this.loginData.geetest_validate)?(this.tip.type="error",this.tip.info="点击上方按钮进行验证",!0):void 0))},getVerifyCode:function(){if(this.checkMobile())return!1;this.waittip(),this.btndis=!0,this.requestCode()},requestCode:function(){var t=this;o.default.http("user_verify",this.loginData,"post","",!1).then(function(t){},function(e){if(t.overwati(),10404===e.status)return t.isRegisn=!1,!1;e.status,t.tip.type="error",t.tip.info=e.message})},waittip:function(){var t=this,e=60;this.btntip="重新获取("+e+"s)",this.sit=setInterval(function(i){t.btntip="重新获取("+e--+"s)",-1===e&&t.overwati()},1e3)},overwati:function(){this.btntip="重新获取",this.btndis=!1,clearInterval(this.sit)},checkPassword:function(){var t=""===this.loginData.password;return t?(this.tip.type="error",this.tip.info="请输入密码",t=!0):""===this.loginData.sure_password.length?(this.tip.type="error",this.tip.info="确认密码不能为空",t=!0):this.loginData.password.length<6||this.loginData.sure_password.length<6?(this.tip.type="error",this.tip.info="密码最小长度为6位",t=!0):this.loginData.password!==this.sure_password&&(this.tip.type="error",this.tip.info="两次输入密码不一致",t=!0),t},checkNewPassword:function(){var t=""===this.loginData.new_password;return t?(this.tip.type="error",this.tip.info="请输入新密码",t=!0):""===this.loginData.sure_password.length?(this.tip.type="error",this.tip.info="确认密码不能为空",t=!0):this.loginData.new_password.length<6||this.loginData.sure_password.length<6?(this.tip.type="error",this.tip.info="密码最小长度为6位",t=!0):this.loginData.new_password!==this.sure_password&&(this.tip.type="error",this.tip.info="两次输入密码不一致",t=!0),t},checkOldNewPassword:function(){var t=""===this.loginData.old_password;return t?(this.tip.type="error",this.tip.info="请输入原始密码",t=!0):""===this.loginData.sure_password.length?(this.tip.type="error",this.tip.info="确认密码不能为空",t=!0):this.loginData.new_password.length<6?(this.tip.type="error",this.tip.info="密码最小长度为6位",t=!0):this.loginData.sure_password.length<6?(this.tip.type="error",this.tip.info="确认密码最小长度为6位",t=!0):this.loginData.new_password!==this.sure_password&&(this.tip.type="error",this.tip.info="两次输入密码不一致",t=!0),t},getCallBack:function(t){var e=this;return!!document.getElementById("captcha")&&(t.onSuccess(function(){var i=t.getValidate();e.loginData.geetest_challenge=i.geetest_challenge,e.loginData.geetest_validate=i.geetest_validate,e.loginData.geetest_seccode=i.geetest_seccode,e.btndis=!1}),t.onReady(function(){document.getElementById("wait").style.display="none"}),"none"===document.getElementById("wait").style.display?(t.reset(),!1):void t.appendTo("#captcha"))},initGeet:function(){var t=this;o.default.http("user_get_captcha").then(function(e){var i=t;0===e.status&&(0,r.default)({gt:e.data.gt,challenge:e.data.challenge,offline:!e.data.success,new_captcha:e.data.new_captcha,product:"float",width:"100%",bg_color:"#262a35"},i.getCallBack)})}},created:function(){},watch:{}}},457:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},486:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(6),o=n(s),a=i(297),r=n(a),c=i(583),l=n(c);e.default={mixins:[r.default],data:function(){return{type:0}},methods:{selectType:function(t){this.type=t,this.sms_count=0,this.resetInfoTip()},isOther:function(){window.nextUrl?(this.$router.replace({name:"Main"}),window.location.href=window.location.origin+window.nextUrl,delete window.nextUrl):window.nextInviteCode?(this.$router.push({name:"CompleteData",query:{code:window.nextInviteCode}}),delete window.nextInviteCode):this.$router.replace({name:"Main"})},codeResign:function(){var t=this,e=this.loginData;if(this.checkPassword())return!1;o.default.http("user_setPassword",e,"post","",!1).then(function(e){t.isOther()}).catch(function(e){t.tip.type="error",t.tip.info=e.message})},login:function(){var t=this,e=this.loginData;if(1===this.type){if(this.checkCodeAndMobile())return!1;this.$axios.http("user_login",e,"post","",!1).then(function(e){t.isOther()}).catch(function(e){if(10404===e.status)return t.isRegisn=!1,!1;t.tip.type="error",t.tip.info=e.message})}else{if(this.checkPasswordAndMobile())return!0;o.default.http("user_login_password",e,"post","",!1).then(function(e){t.isOther()}).catch(function(e){t.tip.type="error",t.tip.info=e.message})}}},created:function(){},watch:{"loginData.mobile":function(){11===this.loginData.mobile.length&&1===this.type&&this.getCount()},type:function(){11===this.loginData.mobile.length&&1===this.type&&this.getCount()}},destroyed:function(){clearInterval(this.sit)},components:{LoginWord:l.default}}},504:function(t,e,i){e=t.exports=i(265)(),e.push([t.i,".login-1200{position:relative;width:1200px;margin:0 auto;height:100%;overflow:hidden}@media (max-width:414px){.login-box{width:300px}.login-form{padding:16px 15px}}","",{version:3,sources:["/Users/zyb/TenCloud_Web/src/views/layout/Login.vue"],names:[],mappings:"AACA,YACE,kBAAmB,AACnB,aAAc,AACd,cAAe,AACf,YAAa,AACb,eAAiB,CAClB,AACD,yBACA,WACI,WAAa,CAChB,AACD,YACI,iBAAmB,CACtB,CACA",file:"Login.vue",sourcesContent:["\n.login-1200 {\n  position: relative;\n  width: 1200px;\n  margin: 0 auto;\n  height: 100%;\n  overflow: hidden;\n}\n@media (max-width: 414px) {\n.login-box {\n    width: 300px;\n}\n.login-form {\n    padding: 16px 15px;\n}\n}\n"],sourceRoot:""}])},511:function(t,e,i){e=t.exports=i(265)(),e.push([t.i,".login-word_tietle{font-size:30px;color:#48bbc0}.login-word_detailBox{margin-top:100px}.login-word_detail{margin:20px 0}.detail-head{font-size:20px;color:#6cccd4}.detail-down{padding-left:40px;overflow:hidden}.icon-reset-xiugai{font-size:1rem;margin-right:5px}","",{version:3,sources:["/Users/zyb/TenCloud_Web/src/components/LoginWord.vue"],names:[],mappings:"AACA,mBAEE,eAAgB,AAChB,aAAe,CAChB,AACD,sBACE,gBAAkB,CACnB,AACD,mBACE,aAAe,CAChB,AACD,aACE,eAAgB,AAChB,aAAe,CAChB,AACD,aACE,kBAAmB,AACnB,eAAiB,CAClB,AACD,mBACE,eAAgB,AAChB,gBAAkB,CACnB",file:"LoginWord.vue",sourcesContent:["\n.login-word_tietle{\n\n  font-size: 30px;\n  color: #48bbc0;\n}\n.login-word_detailBox{\n  margin-top: 100px;\n}\n.login-word_detail {\n  margin: 20px 0;\n}\n.detail-head {\n  font-size: 20px;\n  color: #6cccd4;\n}\n.detail-down {\n  padding-left: 40px;\n  overflow: hidden;\n}\n.icon-reset-xiugai {\n  font-size: 1rem;\n  margin-right: 5px;\n}\n"],sourceRoot:""}])},541:function(t,e,i){var n=i(504);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(266)("2bb541aa",n,!0)},548:function(t,e,i){var n=i(511);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(266)("330a65c5",n,!0)},583:function(t,e,i){i(548);var n=i(0)(i(457),i(624),null,null);t.exports=n.exports},616:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-login",attrs:{id:"app"}},[i("div",{staticClass:"login-1200"},[i("LoginWord"),t._v(" "),i("div",{staticClass:"login-box"},[t.isRegisn?i("div",{staticClass:"login-form m-b32"},[i("div",{staticClass:"login-select_content m-b32"},[i("m-btn",{staticClass:"btn theme-dft",class:0==t.type?"select-active":"",nativeOn:{click:function(e){t.selectType(0)}}},[t._v("密码登录")]),t._v(" "),i("m-btn",{staticClass:"btn theme-dft",class:1==t.type?"select-active":"",nativeOn:{click:function(e){t.selectType(1)}}},[t._v("验证码登录")])],1),t._v(" "),t.tip.info?i("div",{staticClass:"login-tip m-b16",class:t.tip.type},[i("i",{staticClass:"iconfont icon-xinxi-yin vam"}),t._v(" "),i("span",{staticClass:"vam"},[t._v(t._s(t.tip.info))])]):t._e(),t._v(" "),i("div",{staticClass:"login-form_inp m-b16"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.mobile,expression:"loginData.mobile"}],attrs:{type:"text",placeholder:"请输入手机号码"},domProps:{value:t.loginData.mobile},on:{input:function(e){e.target.composing||t.$set(t.loginData,"mobile",e.target.value)}}}),t._v(" "),i("i",{staticClass:"iconfont icon-shouji"})]),t._v(" "),0==t.type?i("div",{staticClass:"login-form_inp m-b16"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.password,expression:"loginData.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.loginData.password},on:{input:function(e){e.target.composing||t.$set(t.loginData,"password",e.target.value)}}}),t._v(" "),i("i",{staticClass:"iconfont icon-mima"})]):i("div",[t.sms_count>2&&t.sms_count<10?i("div",{staticClass:"m-b16",attrs:{id:"captcha"}},[i("div",{attrs:{id:"wait"}},[t._v("载入中……")])]):t._e(),t._v(" "),i("div",{staticClass:"login-form_inp m-b16"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.auth_code,expression:"loginData.auth_code"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.loginData.auth_code},on:{input:function(e){e.target.composing||t.$set(t.loginData,"auth_code",e.target.value)}}}),t._v(" "),i("m-btn",{attrs:{sizeh:-1,disabled:t.btndis},nativeOn:{click:function(e){t.getVerifyCode(e)}}},[t._v(t._s(t.btntip))])],1)]),t._v(" "),i("m-btn",{staticClass:"login-form_sure m-b16",attrs:{sizeh:50},nativeOn:{click:function(e){t.login(e)}}},[t._v("登录")]),t._v(" "),i("div",{staticClass:"flex-space-between"},[i("span",{},[t._v("还没有账号？"),i("m-btn",{staticClass:"primary_txt",nativeOn:{click:function(e){t.resign(e)}}},[t._v("免费注册")])],1),t._v(" "),i("span",{},[i("m-btn",{staticClass:"primary_txt",nativeOn:{click:function(e){t.lostPassword(e)}}},[t._v("忘记密码")])],1)])],1):i("div",{staticClass:"login-form m-b32"},[i("div",{staticClass:"login-select_content line-50 m-b16"},[t._v("\n          您的手机号码初次注册，请设置初始密码\n        ")]),t._v(" "),t.tip.info?i("div",{staticClass:"login-tip m-b16",class:t.tip.type},[i("i",{staticClass:"iconfont icon-xinxi-yin vam"}),t._v(" "),i("span",{staticClass:"vam"},[t._v(t._s(t.tip.info))])]):t._e(),t._v(" "),i("div",{staticClass:"login-form_inp m-b16"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.password,expression:"loginData.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.loginData.password},on:{input:function(e){e.target.composing||t.$set(t.loginData,"password",e.target.value)}}}),t._v(" "),i("i",{staticClass:"iconfont icon-mima"})]),t._v(" "),i("div",{staticClass:"login-form_inp m-b16"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sure_password,expression:"sure_password"}],attrs:{type:"password",placeholder:"确认密码"},domProps:{value:t.sure_password},on:{input:function(e){e.target.composing||(t.sure_password=e.target.value)}}}),t._v(" "),i("i",{staticClass:"iconfont icon-zaicimima"})]),t._v(" "),i("m-btn",{staticClass:"login-form_sure m-b16",attrs:{sizeh:50},nativeOn:{click:function(e){t.codeResign(e)}}},[t._v("确定，进入控制台")])],1),t._v(" "),i("div",{staticClass:"text-center"},[t._v("厦门十全十美网络科技有限公司")])])],1),t._v(" "),t._m(0,!1,!1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-bottom"},[i("div",{staticClass:"center flex-space-between"},[i("div",{staticClass:"left btn"},[t._v("© 2017 厦门十全十美科技有限公司 版权所有 ")]),t._v(" "),i("div",{staticClass:"right btn"},[t._v("闽备ICP 000888号")])])])}]}},624:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"450px","margin-top":"50px"}},[i("div",{staticClass:"login-word_tietle"},[i("i",{staticClass:"iconfont icon-shiyun",staticStyle:{"font-size":"inherit","padding-right":"5px"}}),t._v("拾·云")]),t._v(" "),i("div",{staticClass:"login-word_detailBox"},[i("div",{staticClass:"login-word_detail"},[i("div",{staticClass:"detail-head"},[i("i",{staticClass:"iconfont icon-xiugai icon-reset-xiugai"}),t._v("三步轻松上线一款项目，无技术使用门槛。")]),t._v(" "),i("div",{staticClass:"flex-space-between detail-down",staticStyle:{width:"300px"}},[i("div",{staticClass:"common-ground_box"},[i("span",{staticClass:"num"},[t._v("1")]),t._v(" "),i("span",{staticClass:"num-tip"},[t._v("项目构建")])]),t._v(" "),i("div",{staticClass:"common-ground_box"},[i("span",{staticClass:"num"},[t._v("2")]),t._v(" "),i("span",{staticClass:"num-tip"},[t._v("一键构建")])]),t._v(" "),i("div",{staticClass:"common-ground_box"},[i("span",{staticClass:"num"},[t._v("3")]),t._v(" "),i("span",{staticClass:"num-tip"},[t._v("一键部署")])])])]),t._v(" "),i("div",{staticClass:"login-word_detail"},[i("div",{staticClass:"detail-head"},[i("i",{staticClass:"iconfont icon-xiugai icon-reset-xiugai"}),t._v("自动扩缩容、负载均衡，轻松运维。")])]),t._v(" "),i("div",{staticClass:"login-word_detail"},[i("div",{staticClass:"detail-head"},[i("i",{staticClass:"iconfont icon-xiugai icon-reset-xiugai"}),t._v("遇异常可跨云无痕切换，保证系统稳定。")]),t._v(" "),i("div",[i("div",{staticClass:"common-ground_box nobefore"},[i("span",{staticClass:"num-tip detail-down"},[t._v("目前已覆盖：阿里云、腾讯云、AWS、微软AZURE")])])])]),t._v(" "),i("div",{staticClass:"login-word_detail"},[i("div",{staticClass:"detail-head"},[i("i",{staticClass:"iconfont icon-xiugai icon-reset-xiugai"}),t._v("弹性资源、费用提醒，严控成本。")])])])])}]}}});
//# sourceMappingURL=9.9d46f9a653ad82215bf9.js.map