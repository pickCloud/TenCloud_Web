webpackJsonp([13],{295:function(t,e,i){i(551);var n=i(0)(i(492),i(620),null,null);t.exports=n.exports},301:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},302:function(t,e,i){"use strict";(function(t){var e=i(21),n=function(t){return t&&t.__esModule?t:{default:t}}(e);!function(e,i){"object"===(0,n.default)(t)&&"object"===(0,n.default)(t.exports)?t.exports=e.document?i(e,!0):function(t){if(!t.document)throw new Error("Geetest requires a window with a document");return i(t)}:i(e)}("undefined"!=typeof window?window:void 0,function(t,e){function i(t){this._obj=t}function o(t){var e=this;new i(t)._each(function(t,i){e[t]=i})}if(void 0===t)throw new Error("Geetest requires browser environment");var a=t.document,s=t.Math,r=a.getElementsByTagName("head")[0];i.prototype={_each:function(t){var e=this._obj;for(var i in e)e.hasOwnProperty(i)&&t(i,e[i]);return this}},o.prototype={api_server:"api.geetest.com",protocol:"http://",type_path:"/gettype.php",fallback_config:{slide:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"slide",slide:"/static/js/geetest.0.0.0.js"},fullpage:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"fullpage",fullpage:"/static/js/fullpage.0.0.0.js"}},_get_fallback_config:function(){var t=this;return l(t.type)?t.fallback_config[t.type]:t.new_captcha?t.fallback_config.fullpage:t.fallback_config.slide},_extend:function(t){var e=this;new i(t)._each(function(t,i){e[t]=i})}};var c=function(t){return"number"==typeof t},l=function(t){return"string"==typeof t},u=function(t){return"boolean"==typeof t},p=function(t){return"object"===(void 0===t?"undefined":(0,n.default)(t))&&null!==t},d=function(t){return"function"==typeof t},f={},h={},g=function(){return parseInt(1e4*s.random())+(new Date).valueOf()},v=function(t,e){var i=a.createElement("script");i.charset="UTF-8",i.async=!0,i.onerror=function(){e(!0)};var n=!1;i.onload=i.onreadystatechange=function(){n||i.readyState&&"loaded"!==i.readyState&&"complete"!==i.readyState||(n=!0,setTimeout(function(){e(!1)},0))},i.src=t,r.appendChild(i)},_=function(t){return t.replace(/^https?:\/\/|\/$/g,"")},m=function(t){return t=t.replace(/\/+/g,"/"),0!==t.indexOf("/")&&(t="/"+t),t},w=function(t){if(!t)return"";var e="?";return new i(t)._each(function(t,i){(l(i)||c(i)||u(i))&&(e=e+encodeURIComponent(t)+"="+encodeURIComponent(i)+"&")}),"?"===e&&(e=""),e.replace(/&$/,"")},b=function(t,e,i,n){e=_(e);var o=m(i)+w(n);return e&&(o=t+e+o),o},y=function(t,e,i,n,o){!function a(s){var r=b(t,e[s],i,n);v(r,function(t){t?s>=e.length-1?o(!0):a(s+1):o(!1)})}(0)},C=function(e,i,n,o){if(p(n.getLib))return n._extend(n.getLib),void o(n);if(n.offline)return void o(n._get_fallback_config());var a="geetest_"+g();t[a]=function(e){o("success"===e.status?e.data:e.status?n._get_fallback_config():e),t[a]=void 0;try{delete t[a]}catch(t){}},y(n.protocol,e,i,{gt:n.gt,callback:a},function(t){t&&o(n._get_fallback_config())})},D=function(t,e){var i={networkError:"网络错误"};if("function"!=typeof e.onError)throw new Error(i[t]);e.onError(i[t])};(function(){return!!t.Geetest})()&&(h.slide="loaded");var k=function(e,i){var n=new o(e);e.https?n.protocol="https://":e.protocol||(n.protocol=t.location.protocol+"//"),C([n.api_server||n.apiserver],n.type_path,n,function(e){var o=e.type,a=function(){n._extend(e),i(new t.Geetest(n))};f[o]=f[o]||[];var s=h[o]||"init";"init"===s?(h[o]="loading",f[o].push(a),y(n.protocol,e.static_servers||e.domains,e[o]||e.path,null,function(t){if(t)h[o]="fail",D("networkError",n);else{h[o]="loaded";for(var e=f[o],i=0,a=e.length;i<a;i+=1){var s=e[i];d(s)&&s()}f[o]=[]}})):"loaded"===s?a():"fail"===s?D("networkError",n):"loading"===s&&f[o].push(a)})};return t.initGeetest=k,k})}).call(e,i(301)(t))},303:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(6),a=n(o),s=i(302),r=n(s);e.default={data:function(){return{tip:{type:"error",info:""},loginData:{mobile:"",auth_code:"",geetest_challenge:"",geetest_validate:"",geetest_seccode:"",password:"",new_password:"",old_password:""},btntip:"获取验证码",btndis:!1,sure_password:"",sms_count:0,isRegisn:!0}},methods:{getCount:function(){var t=this;a.default.http("user_sms_count","","get",this.loginData.mobile+"/count").then(function(e){t.sms_count=e.sms_count,t.sms_count>2&&t.initGeet()}).catch(function(t){})},resetInfoTip:function(){this.tip.type="",this.tip.info=""},lostPassword:function(){this.$router.push({name:"LostPassword"})},resign:function(){this.$router.push({name:"Resign"})},checkMobile:function(){var t=""===this.loginData.mobile||!/^1[34578]\d{9}$/.test(this.loginData.mobile);return""===this.loginData.mobile?(this.tip.type="error",this.tip.info="手机号不能为空",t):(t&&(this.tip.type="error",this.tip.info="手机格式有误"),t)},checkCode:function(){var t=""===this.loginData.auth_code;return t&&(this.tip.type="error",this.tip.info="验证码不能为空"),t},checkHasPassword:function(){var t=""===this.loginData.password;return console.log(t),t?(this.tip.type="error",this.tip.info="密码不能为空",!0):this.loginData.password.length<6?(this.tip.type="error",this.tip.info="密码不能小于6位",!0):t},checkPasswordAndMobile:function(){return!!this.checkMobile()||(!!this.checkHasPassword()||void 0)},checkCodeAndMobile:function(){return!!this.checkMobile()||(!!this.checkCode()||(this.sms_count>2&&this.sms_count<10&&!(this.loginData.geetest_challenge&&this.loginData.geetest_seccode&&this.loginData.geetest_validate)?(this.tip.type="error",this.tip.info="点击上方按钮进行验证",!0):void 0))},getVerifyCode:function(){if(this.checkMobile())return!1;this.waittip(),this.btndis=!0,this.requestCode()},requestCode:function(){var t=this;a.default.http("user_verify",this.loginData).then(function(t){},function(e){if(t.overwati(),10404===e.status)return t.isRegisn=!1,!1;e.status,t.tip.type="error",t.tip.info=e.message})},waittip:function(){var t=this,e=60;this.btntip="重新获取("+e+"s)",this.sit=setInterval(function(i){t.btntip="重新获取("+e--+"s)",-1===e&&t.overwati()},1e3)},overwati:function(){this.btntip="重新获取",this.btndis=!1,clearInterval(this.sit)},checkPassword:function(){var t=""===this.loginData.password;return t?(this.tip.type="error",this.tip.info="请输入密码",t=!0):this.loginData.password.length<6?(this.tip.type="error",this.tip.info="密码最小长度为6位",t=!0):this.loginData.password!==this.sure_password&&(this.tip.type="error",this.tip.info="两次输入密码不一致",t=!0),t},checkNewPassword:function(){var t=""===this.loginData.new_password;return t?(this.tip.type="error",this.tip.info="请输入新密码",t=!0):this.loginData.new_password.length<6?(this.tip.type="error",this.tip.info="密码最小长度为6位",t=!0):this.loginData.new_password!==this.sure_password&&(this.tip.type="error",this.tip.info="两次输入密码不一致",t=!0),t},checkOldNewPassword:function(){var t=""===this.loginData.old_password;return t?(this.tip.type="error",this.tip.info="请输入原始密码",t=!0):this.loginData.new_password.length<6?(this.tip.type="error",this.tip.info="密码最小长度为6位",t=!0):this.loginData.new_password!==this.sure_password&&(this.tip.type="error",this.tip.info="两次输入密码不一致",t=!0),t},getCallBack:function(t){var e=this;return!!document.getElementById("captcha")&&(t.onSuccess(function(){var i=t.getValidate();e.loginData.geetest_challenge=i.geetest_challenge,e.loginData.geetest_validate=i.geetest_validate,e.loginData.geetest_seccode=i.geetest_seccode,e.requestCode()}),t.onReady(function(){document.getElementById("wait").style.display="none"}),"none"===document.getElementById("wait").style.display?(t.reset(),!1):void t.appendTo("#captcha"))},initGeet:function(){var t=this;a.default.http("user_get_captcha").then(function(e){var i=t;0===e.status&&(0,r.default)({gt:e.data.gt,challenge:e.data.challenge,offline:!e.data.success,new_captcha:e.data.new_captcha,product:"float",width:"100%",bg_color:"#262a35"},i.getCallBack)})}},created:function(){},watch:{"loginData.mobile":function(){11===this.loginData.mobile.length&&this.getCount(this.loginData.mobile)}}}},492:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(303),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={mixins:[o.default],data:function(){return{inviteData:{company_name:"",contact:""}}},created:function(){var t=this,e=window.nextInviteCode;this.$axios.http("company_code","","get","?code="+e).then(function(e){t.inviteData=e.data}).catch(function(t){})}}},518:function(t,e,i){e=t.exports=i(272)(),e.push([t.i,".loginInvite.login-box{left:50%;right:auto;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}","",{version:3,sources:["D:/tenWeb/src/views/layout/LoginInvite.vue"],names:[],mappings:"AACA,uBACE,SAAS,AACT,WAAY,AACZ,QAAQ,AACR,uCAAwC,AAChC,8BAAgC,CACzC",file:"LoginInvite.vue",sourcesContent:["\n.loginInvite.login-box {\n  left:50%;\n  right: auto;\n  top:50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n"],sourceRoot:""}])},551:function(t,e,i){var n=i(518);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(273)("094b2580",n,!0)},620:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-login"},[i("div",{staticClass:"login-box loginInvite"},[t.isRegisn?i("div",{staticClass:"login-form m-b32"},[t.tip.info?i("div",{staticClass:"login-tip m-b16",class:t.tip.type},[i("i",{staticClass:"iconfont icon-xinxi-yin vam"}),t._v(" "),i("span",{staticClass:"vam"},[t._v(t._s(t.tip.info))])]):t._e(),t._v(" "),i("div",{staticClass:"login-select_content m-b32 p-b16"},[t._v("\n        邀请你加入企业\n      ")]),t._v(" "),i("div",{staticClass:"p-b16"},[i("span",{staticClass:"primary_txt"},[t._v(t._s(t.inviteData.contact))]),t._v(" 邀请你加入 "),i("span",{staticClass:"primary_txt"},[t._v(t._s(t.inviteData.company))])]),t._v(" "),i("div",{staticClass:"login-form_inp m-b16"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.mobile,expression:"loginData.mobile"}],attrs:{type:"text",placeholder:"请输入手机号码"},domProps:{value:t.loginData.mobile},on:{input:function(e){e.target.composing||t.$set(t.loginData,"mobile",e.target.value)}}}),t._v(" "),i("i",{staticClass:"iconfont icon-shouji"})]),t._v(" "),0==t.type?i("div",{staticClass:"login-form_inp m-b16"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.password,expression:"loginData.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.loginData.password},on:{input:function(e){e.target.composing||t.$set(t.loginData,"password",e.target.value)}}}),t._v(" "),i("i",{staticClass:"iconfont icon-mima"})]):i("div",[t.sms_count>2&&t.sms_count<10?i("div",{staticClass:"m-b16",attrs:{id:"captcha"}},[i("div",{attrs:{id:"wait"}},[t._v("载入中……")])]):t._e(),t._v(" "),i("div",{staticClass:"login-form_inp m-b16"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.auth_code,expression:"loginData.auth_code"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.loginData.auth_code},on:{input:function(e){e.target.composing||t.$set(t.loginData,"auth_code",e.target.value)}}}),t._v(" "),i("m-btn",{attrs:{sizeh:-1,disabled:t.btndis},nativeOn:{click:function(e){t.getVerifyCode(e)}}},[t._v(t._s(t.btntip))])],1)]),t._v(" "),i("m-btn",{staticClass:"login-form_sure m-b16",attrs:{sizeh:50},nativeOn:{click:function(e){t.login(e)}}},[t._v("登录")]),t._v(" "),i("div",{staticClass:"flex-space-between"},[i("span",{},[t._v("还没有账号？"),i("m-btn",{staticClass:"primary_txt",nativeOn:{click:function(e){t.resign(e)}}},[t._v("免费注册")])],1),t._v(" "),i("span",{},[i("m-btn",{staticClass:"primary_txt",nativeOn:{click:function(e){t.lostPassword(e)}}},[t._v("忘记密码")])],1)])],1):i("div",{staticClass:"login-form m-b32"},[i("div",{staticClass:"login-select_content line-50 m-b16"},[t._v("\n        您的手机号码初次注册，请设置初始密码\n      ")]),t._v(" "),t.tip.info?i("div",{staticClass:"login-tip m-b16",class:t.tip.type},[i("i",{staticClass:"iconfont icon-xinxi-yin vam"}),t._v(" "),i("span",{staticClass:"vam"},[t._v(t._s(t.tip.info))])]):t._e(),t._v(" "),i("div",{staticClass:"login-form_inp m-b16"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.password,expression:"loginData.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.loginData.password},on:{input:function(e){e.target.composing||t.$set(t.loginData,"password",e.target.value)}}}),t._v(" "),i("i",{staticClass:"iconfont icon-mima"})]),t._v(" "),i("div",{staticClass:"login-form_inp m-b16"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sure_password,expression:"sure_password"}],attrs:{type:"password",placeholder:"确认密码"},domProps:{value:t.sure_password},on:{input:function(e){e.target.composing||(t.sure_password=e.target.value)}}}),t._v(" "),i("i",{staticClass:"iconfont icon-zaicimima"})]),t._v(" "),i("m-btn",{staticClass:"login-form_sure m-b16",attrs:{sizeh:50},nativeOn:{click:function(e){t.codeResign(e)}}},[t._v("确定，进入控制台")])],1),t._v(" "),i("div",{staticClass:"text-center"},[t._v("厦门十全十美网络科技有限公司")])])])},staticRenderFns:[]}}});
//# sourceMappingURL=13.29e86a9b7aad51c76608.js.map