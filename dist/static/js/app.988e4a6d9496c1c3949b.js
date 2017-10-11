webpackJsonp([18],Array(32).concat([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(34),o=a(i),s=n(7),r=a(s),u=n(14),l=a(u),c=n(30),p=a(c),d=n(16),f=a(d),h=n(51),m=a(h),_=window.isLoacal=/.+localhost.+/.test(window.location.href);_&&(p.default.defaults.withCredentials=!0);var v={baseURL:"https://c.10.com",wsURL:_?"wss://10.0.1.9:8010":"wss://c.10.com",clusters:{u:"/api/clusters",m:"get"},cluster_add:{u:"/api/cluster/new",m:"post"},cluster_del:{u:"/api/cluster/del",m:"post"},cluster_detail:{u:"/api/cluster/",m:"get"},cluster_update:{u:"/api/cluster/update",m:"post"},server_add:{u:"/api/server/new",m:"post"},server_del:{u:"/api/server/del",m:"post"},server_detail:{u:"/api/server/",m:"get"},server_containers:{u:"/api/server/containers/",m:"get"},server_update:{u:"/api/server/update",m:"post"},server_migration:{u:"/api/server/migration",m:"post"},server_performance:{u:"/api/server/performance",m:"post"},server_start:{u:"/api/server/start/",m:"get"},server_reboot:{u:"/api/server/reboot/",m:"get"},server_stop:{u:"/api/server/stop/",m:"get"},server_operation:{u:"/api/server/",m:"get"},app_performance:{u:"/api/server/container/performance",m:"post"},server_status:{u:"/api/server/",m:"get"},container_start:{u:"/api/server/container/start",m:"post"},container_stop:{u:"/api/server/container/stop",m:"post"},container_del:{u:"/api/server/container/del",m:"post"},container_detail:{u:"/api/server/",m:"get"},projects:{u:"/api/projects",m:"get"},project_del:{u:"/api/project/del",m:"post"},project_add:{u:"/api/project/new",m:"post"},project_update:{u:"/api/project/update",m:"post"},project_repos:{u:"/api/repos",m:"post"},project_detail:{u:"/api/project/",m:"get"},project_vers:{u:"/api/project/",m:"get"},project_image:{u:"/api/project/",m:"get"},project_up_image:{u:"/api/project/image/upload",m:"post"},project_down_image:{u:"/api/project/image/cloud/download",m:"post"},project_branch:{u:"/api/repos/branches",m:"post"},project_vlog:{u:"/api/project/",m:"get"},project_create:{u:"/api/project/image/creation",m:"post"},project_container_list:{u:"/api/project/containers/list",m:"post"},project_deployment:{u:"/api/project/deployment",m:"post"},user_update:{u:"/api/user/update",m:"post"},user_login:{u:"/api/user/login",m:"post"},user_verify:{u:"/api/user/sms/",m:"post"},user_logout:{u:"/api/user/logout",m:"post"},user_info:{u:"/api/user",m:"get"},user_thumb_token:{u:"/api/user/token",m:"get"},file_list:{u:"/api/file/list",m:"post"},file_pages:{u:"/api/file/",m:"get"},file_create_dir:{u:"/api/file/dir/create",m:"post"},file_upload:{u:"/api/file/upload",m:"post"},file_update:{u:"/api/file/update",m:"post"},file_download:{u:"/api/file/download",m:"post"},file_del:{u:"/api/file/delete",m:"post"}},g=function(){function e(t){(0,r.default)(this,e),this._data=null,this._api=v.baseURL+v[t].u,this._method=v[t].m}return(0,l.default)(e,[{key:"getData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return new o.default(function(i,o){if(null===t._data)switch(t._method){case"post":if(null===e)throw new Error("post need params");p.default.post(t._api+n,e).then(function(e){200===e.status&&(t._data=e.data,i(e.data))}).catch(function(e){a&&403!==e.response.status&&f.default.prototype.$toast(e.response.data.message,"cc"),403===e.response.status&&(b.isLogin=!1,m.default.replace({name:"Login"})),o(e)});break;case"get":p.default.get(t._api+n,e).then(function(e){200===e.status&&(t._data=e.data,i(e.data))}).catch(function(e){a&&403!==e.response.status&&f.default.prototype.$toast(e.response.data.message,"cc"),403===e.response.status&&(b.isLogin=!1,m.default.replace({name:"Login"})),o(e)})}else i(t._data)})}},{key:"data",set:function(e){this._data=e}}]),e}(),y={},b={apis:v,async:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!v.hasOwnProperty(e))throw new Error("key: "+e+" is no found");return y.hasOwnProperty(e)&&!t||(y[e]=new g(e)),y[e]},login:function(e,t,n){b.async("user_login",!0).getData(e,"",!1).then(function(e){t(e)},function(e){n(e)})},logout:function(){b.isLogin=!1},isLogin:null};t.default=b},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),o=a(i),s=n(14),r=a(s),u=n(201),l=a(u),c=n(61),p=a(c),d=function(){function e(t,n){(0,o.default)(this,e),this._opts=t,this._static=p.default,this._vm=n,this._pvm=null,this.type=null,this.event={},this.uuid=Math.random().toString(16).substr(-4)+"-"+Math.random().toString(16).substr(-4)+"-"+Math.random().toString(16).substr(-4)+"-"+Math.random().toString(16).substr(-4),this.init()}return(0,r.default)(e,[{key:"init",value:function(){}},{key:"initComplete",value:function(){this.popins=new l.default(this.ref,this.popper,this._opts.options),this.initEvent()}},{key:"initEvent",value:function(){var e=this;this._pvm.$on("close",function(t){e._opts.callback?e._opts.callback({type:"close",payload:t,next:e._destroy.bind(e)}):e._destroy()})}},{key:"_destroy",value:function(){this.popins.destroy(),this._pvm.$el.remove()}},{key:"close",value:function(){this._pvm.$emit("close")}},{key:"update",value:function(){this.popins.update()}},{key:"ref",get:function(){return this._opts.reference}},{key:"popper",get:function(){}}]),e}();t.default=d},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(16),o=a(i),s=n(222),r=a(s),u=n(32),l=a(u),c=function(e){return n.e(4).then(function(){return e(n(243))}.bind(null,n)).catch(n.oe)},p=function(e){return n.e(16).then(function(){return e(n(234))}.bind(null,n)).catch(n.oe)},d=function(e){return n.e(7).then(function(){return e(n(233))}.bind(null,n)).catch(n.oe)},f=function(e){return n.e(8).then(function(){return e(n(232))}.bind(null,n)).catch(n.oe)},h=function(e){return n.e(11).then(function(){return e(n(231))}.bind(null,n)).catch(n.oe)},m=function(e){return n.e(12).then(function(){return e(n(227))}.bind(null,n)).catch(n.oe)},_=function(e){return n.e(10).then(function(){return e(n(237))}.bind(null,n)).catch(n.oe)},v=function(e){return n.e(3).then(function(){return e(n(235))}.bind(null,n)).catch(n.oe)},g=function(e){return n.e(15).then(function(){return e(n(236))}.bind(null,n)).catch(n.oe)},y=function(e){return n.e(5).then(function(){return e(n(228))}.bind(null,n)).catch(n.oe)},b=function(e){return n.e(9).then(function(){return e(n(230))}.bind(null,n)).catch(n.oe)},w=function(e){return n.e(13).then(function(){return e(n(240))}.bind(null,n)).catch(n.oe)},j=function(e){return n.e(14).then(function(){return e(n(239))}.bind(null,n)).catch(n.oe)},M=function(e){return n.e(6).then(function(){return e(n(242))}.bind(null,n)).catch(n.oe)},x=function(e){return n.e(1).then(function(){return e(n(238))}.bind(null,n)).catch(n.oe)},k=function(e){return n.e(2).then(function(){return e(n(241))}.bind(null,n)).catch(n.oe)},O=function(e){return n.e(0).then(function(){return e(n(229))}.bind(null,n)).catch(n.oe)};o.default.use(r.default);var C=new r.default({routes:[{path:"/",component:c,children:[{path:"/",name:"Main",redirect:{name:"Machines"},meta:{level:0},component:p},{path:"/machines",name:"Machines",meta:{level:1},component:d},{path:"/machinedetail/:id",name:"MachineDetail",meta:{level:2},component:f},{path:"/machineadd/:id",name:"MachineAdd",meta:{level:2},component:h},{path:"/appdetail/:mid/:name/:cid",name:"AppDetail",meta:{level:2},component:m},{path:"/projects",name:"Projects",meta:{level:1},component:_},{path:"/projectadd",name:"ProjectAdd",meta:{level:2},component:v},{path:"/projecteditor/:id",name:"ProjectEditor",meta:{level:2},component:v},{path:"/projectdetail/:id",name:"ProjectDetail",meta:{level:2},component:g},{path:"/build/:id",name:"Build",meta:{level:2},component:y},{path:"/deploy/:id",name:"Deploy",meta:{level:2},component:b},{path:"/verlist/:id",name:"Verlist",meta:{level:2},component:w},{path:"/vernotes/:v",name:"VerNotes",meta:{level:2},component:j},{path:"/userinfo",name:"UserInfo",meta:{level:2},component:x},{path:"/filehub/:id",name:"FileHubIn",meta:{level:1},component:k},{path:"/:name/charthistory/:id",name:"ChartHistory",meta:{level:2},component:O}]},{path:"/login",name:"Login",meta:{level:0},component:M}]});C.beforeEach(function(e,t,n){"Login"===e.name&&e.query.next&&(window.nextUrl=e.query.next),null===l.default.isLogin?l.default.async("user_info",!0).getData(null).then(function(t){l.default.isLogin=!0,"Login"===e.name?C.replace({name:"Main"}):n(),window.ROOT_DATA.userinfo=t.data}):l.default.isLogin&&"Login"===e.name&&null===t.name?C.replace({name:"Main"}):n()}),t.default=C},,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(78),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={props:{nodes:Number},components:{EChart:i.default}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(34),o=a(i),s=n(30),r=a(s),u=n(128),l=a(u),c={URL:"",http:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",a=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";arguments.length>4&&void 0!==arguments[4]&&arguments[4];return new o.default(function(o,s){switch(l.default[e].m&&(n=l.default[e].m),a.URL=l.default.baseURL+l.default[e].u+i,n){case"get":return r.default.get(a.URL,t).then(function(e){200===e.status?o(e.data):s(e.data)}).catch(function(e){s(e)});case"post":return r.default.post(a.URL,t).then(function(e){200===e.status?o(e.data):s(e.data)}).catch(function(e){s(e)})}})}};t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},,,,,,,,,,,,,,,,,function(e,t,n){n(199);var a=n(4)(n(135),n(218),null,null);e.exports=a.exports},,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(116),o=a(i),s=n(115),r=a(s),u={Panel:o.default,ECharts:r.default};u.install=function(e){for(var t in u){var n=u[t];n&&"install"!==t&&"theme"!==t&&e.use(n)}},t.default=u},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(16),o=a(i),s=n(93),r=a(s),u=n(224),l=(a(u),n(121)),c=a(l),p=n(120),d=a(p),f=n(119),h=a(f),m=n(118),_=a(m),v=n(127),g=a(v),y=n(126),b=a(y),w=n(125),j=a(w),M=n(122),x=a(M),k=n(124),O=a(k),C=n(123),P=a(C);o.default.use(r.default);t.default=new r.default.Store({mutations:h.default,actions:_.default,modules:{user:c.default,sitepath:d.default,scroll:g.default,pubstate:b.default,projectsState:j.default,machines:x.default,projectAdd:O.default,mechineDetail:P.default},strict:!1,plugins:[]})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=void 0;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var a=window.getSelection(),i=document.createRange();i.selectNodeContents(e),a.removeAllRanges(),a.addRange(i),t=a.toString()}return t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),s=a(o),r=n(14),u=a(r),l=function(){function e(t,n,a){var i=this;(0,s.default)(this,e),this._el=t,this._binding=n,this._vnode=a,this.funcs={click:function(){var e=i._el.dataset.text;if(!e)throw new Error("data-text");i._copytxt=e,i.copy()}},this.addEvent()}return(0,u.default)(e,[{key:"copy",value:function(){this._txtarea=this._el.appendChild(document.createElement("textarea")),this._txtarea.style.position="absolute",this._txtarea.style.right="-9999px",this._txtarea.value=this._copytxt,i(this._txtarea);try{document.execCommand("copy")}catch(e){this._binding.value({action:"error",text:e})}finally{this._binding.value({action:"copy",text:this._copytxt})}}},{key:"removeTextArea",value:function(){this._txtarea&&this._el.removeChild(this._txtarea)}},{key:"addEvent",value:function(){this._el.addEventListener("click",this.funcs.click)}},{key:"destroy",value:function(){this._el.removeEventListener("click",this.funcs.click)}}]),e}();t.default={bind:function(e,t,n){e.Clipboard=new l(e,t,n)},unbind:function(e,t,n){e.Clipboard.destroy()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(207),i=function(e){return e&&e.__esModule?e:{default:e}}(a);i.default.install=function(e){e.component(i.default.name,i.default)},t.default=i.default},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(28),o=a(i),s=n(131),r=a(s),u=n(61),l=a(u),c={reference:{getBoundingClientRect:function(){return{left:0,top:0,width:0,height:0}},clientWidth:0,clientHeight:0,isFixed:!0},popper:null,options:{placement:"top"},data:{}},p=null,d=function e(t){if(t=(0,o.default)({},c,t),!t.popper)throw new Error("popper not define");return p||(p=this.$root),t.reference.isFixed&&(t.options.modifiers={applyStyle:{enabled:!1}}),{uid:(0,r.default)(t,this),func:e}};d.close=function(e){p.popx.close(e)},t.default={install:function(e){l.default.Vue=e,e.prototype.$Popx=d}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(28),i=function(e){return e&&e.__esModule?e:{default:e}}(a),o={disable_statistics_report:!1,runtimes:"html5,flash,html4",browse_button:"pickfiles",get_new_uptoken:!1,domain:"https://c.10.com/download",max_file_size:"100mb",flash_swf_url:"https://cdn.bootcss.com/plupload/2.1.1/Moxie.swf",max_retries:3,dragdrop:!0,drop_element:"container",chunk_size:"4mb",auto_start:!0,init:{FilesAdded:function(e,t){window.plupload.each(t,function(e){console.log(e)})},BeforeUpload:function(e,t){},UploadProgress:function(e,t){console.log(e),console.log(t)},FileUploaded:function(e,t,n){},Error:function(e,t,n){},UploadComplete:function(){},Key:function(e,t){return""}}};t.default={install:function(e){e.prototype.$Upload=function(e){return this._opts=(0,i.default)({},o,e),this._qiniu=new window.QiniuJsSDK,this._qiniu.uploader(this._opts)}}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(209),o=a(i),s=n(208),r=a(s);t.default={install:function(e){e.component(o.default.name,o.default),e.component(r.default.name,r.default)}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),o=a(i),s=n(14),r=a(s),u=n(210),l=a(u),c=function(){function e(t){(0,o.default)(this,e),this._vm=t,this.tasks=[]}return(0,r.default)(e,[{key:"addTask",value:function(e){var t=this;Array.isArray(e)?e.forEach(function(e,n){t.addTask(e)}):this._vm.addTask(e)}},{key:"removeTask",value:function(e){var t=this.tasks.indexOf(e);this._vm.tasks.slice(t,1),this.tasks.slice(t,1)}}]),e}();t.default={install:function(e){var t=e.extend(l.default),n=new t;n.$mount(),document.body.appendChild(n.$el),e.prototype.$Task=new c(n)}}},function(e,t){},function(e,t){},,function(e,t,n){var a=n(4)(null,n(219),null,null);e.exports=a.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(28),i=function(e){return e&&e.__esModule?e:{default:e}}(a),o=i.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=o},,function(e,t,n){"use strict";function a(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=new FormData;return n&&i.append("key",n),i.append("token",t),i.append("file",e),(0,s.default)({method:"POST",url:"https://upload-z2.qbox.me",data:i,progress:a})}function i(e){var t=e.file,n=e.url,a=e.method,i=e.ing,o=void 0===i?null:i,r=t;return(0,s.default)({method:a,url:n,data:r,progress:o,overrideMimeType:"application/octet-stream"})}Object.defineProperty(t,"__esModule",{value:!0}),t.upload=a,t.upStream=i;var o=n(114),s=function(e){return e&&e.__esModule?e:{default:e}}(o)},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={filesize:function(e){var t=e,n="B";return t>1e9?(t=t/1024/1024/1024,n="G"):t>1e6?(t=t/1024/102,n="M"):t>1e3&&(t/=1024,n="KB"),Math.ceil(100*t)/100+n},loopObj2Arr:function(e,t,n){var a=e[t];return a.hasOwnProperty(t)&&(a=this.loopObj2Arr(a,t,n)),a.vkey}}},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(34),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){var t=e.method,n=e.url,a=e.data,o=e.progress,s=void 0===o?null:o,r=(e.overrideMimeType,e.withCredentials),u=void 0!==r&&r,l=e.isJson,c=void 0===l||l;return new i.default(function(e,i){var o=new XMLHttpRequest;o.open(t,n),o.upload.addEventListener("progress",function(e){e.lengthComputable&&s&&s(e)},!1),o.onreadystatechange=function(t){if(4===o.readyState&&200===o.status&&""!==o.responseText){var n=c?JSON.parse(o.responseText):o.responseText;e(n)}else 200!==o.status&&o.responseText&&i()},u&&(o.withCredentials=!0),o.send(a)})}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(78),o=a(i),s=n(204),r=a(s),u=n(205),l=a(u);o.default.install=function(e){e.component(o.default.name,o.default),e.component(l.default.name,l.default),e.component(r.default.name,r.default)},t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(206),i=function(e){return e&&e.__esModule?e:{default:e}}(a);i.default.install=function(e){e.component(i.default.name,i.default)},t.default=i.default},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(16),o=a(i),s=n(90),r=a(s),u=n(84),l=a(u),c=n(86),p=a(c),d=n(87),f=a(d),h=n(83),m=a(h),_=n(85),v=a(_),g=n(91),y=a(g),b=n(51),w=a(b),j=n(32),M=a(j),x=n(81),k=a(x),O=n(82),C=a(O),P=n(80),E=a(P);n(88),n(89),o.default.config.productionTip=!1,o.default.prototype.$Global=M.default,o.default.use(l.default),o.default.use(f.default),o.default.use(m.default),o.default.use(v.default),o.default.use(r.default),o.default.use(E.default),o.default.use(p.default),o.default.directive("clipboard",C.default),window.Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},window.ROOT_DATA={userinfo:{}},new o.default({el:"#app",router:w.default,store:k.default,data:window.ROOT_DATA,template:"<App/>",components:{App:y.default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(30),i=function(e){return e&&e.__esModule?e:{default:e}}(a);(window.isLoacal=/.+localhost.+/.test(window.location.href))&&(i.default.defaults.withCredentials=!0),t.default={LOAD_DATA:function(e){return(0,i.default)(e)}}},function(e,t,n){"use strict"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={namespaced:!0,state:{paths:[]},mutations:{SET_PATH:function(e,t){e.paths=t},SPLICE:function(e,t){Array.isArray(t)?e.paths.splice.apply(e.paths,t):e.paths.push(t)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={namespaced:!0,state:{},mutations:{UPDATE:function(){},GET_USER:function(){}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(60),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={namespaced:!0,state:{listts:[]},mutations:{getData:function(e,t){e.num=t},setListts:function(e,t){console.log(t),t.forEach(function(t){e.listts.push(t)})}},getters:{getNum:function(e,t,n,a){return 1===e.num?2:3},listts:function(e){return e.listts}},actions:{getApiData:function(e){if(e.getters.listts.length>0)return!1;var t=this.clusterid=1;i.default.http("cluster_detail","","get",t).then(function(t){e.commit("setListts",t.data.server_list)})},deleteAsyn:function(e,t){return i.default.http("server_del",{id:t})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(60),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={namespaced:!0,state:{applists:[],operations:[]},getters:{applists:function(e){return e.applists},operations:function(e){return e.operations}},mutations:{setApplists:function(e,t){if(null===t.length)return!1;t.forEach(function(t){e.applists.splice(0,e.applists.length),e.applists.push(t)})},setOperations:function(e,t){if(null===t.length)return!1;t.forEach(function(t){e.operations.splice(0,e.operations.length),e.operations.push(t)})}},actions:{getServerDetail:function(e,t){return i.default.http("server_detail","","get",t)},getServerContainers:function(e,t){i.default.http("server_containers","","get",t).then(function(t){0===t.status&&e.commit("setApplists",t.data)})},getServerOperation:function(e,t){i.default.http("server_operation","","get",t).then(function(t){0===t.status&&e.commit("setOperations",t.data)})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={namespaced:!0,state:{formdata:{name:"",image_name:"",description:"",mode:"0"}},mutations:{setFormdata:function(e,t){!1===t.name?e.formdata=t.value:e.formdata[t.name]=t.value}},getters:{formdata:function(e){return e.formdata}},actions:{getActionsNum:function(e){console.log(1)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={namespaced:!0,state:{listts:[]},mutations:{getData:function(e,t){e.num=t},setListts:function(e,t){t.forEach(function(t){e.listts.push(t)})}},getters:{getNum:function(e,t,n,a){return 1===e.num?2:3},listts:function(e){return e.listts}},actions:{getActionsNum:function(e){console.log(1)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={namespaced:!0,state:{listts:[]},mutations:{getData:function(e,t){e.num=t},setListts:function(e,t){t.forEach(function(t){e.listts.push(t)})}},getters:{getNum:function(e,t,n,a){return 1===e.num?2:3},listts:function(e){return e.listts}},actions:{getActionsNum:function(e){console.log(1)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={namespaced:!0,state:{isBottom:!1},mutations:{IS_BOTTOM:function(e,t){e.isBottom=t}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=window.isLoacal=/.+localhost.+/.test(window.location.href),i={baseURL:"https://c.10.com",wsURL:a?"wss://10.0.1.9:8010":"wss://c.10.com",clusters:{u:"/api/clusters",m:"get"},cluster_add:{u:"/api/cluster/new",m:"post"},cluster_del:{u:"/api/cluster/del",m:"post"},cluster_detail:{u:"/api/cluster/",m:"get"},cluster_update:{u:"/api/cluster/update",m:"post"},server_add:{u:"/api/server/new",m:"post"},server_del:{u:"/api/server/del",m:"post"},server_detail:{u:"/api/server/",m:"get"},server_containers:{u:"/api/server/containers/",m:"get"},server_update:{u:"/api/server/update",m:"post"},server_migration:{u:"/api/server/migration",m:"post"},server_performance:{u:"/api/server/performance",m:"post"},server_start:{u:"/api/server/start/",m:"get"},server_reboot:{u:"/api/server/reboot/",m:"get"},server_stop:{u:"/api/server/stop/",m:"get"},server_operation:{u:"/api/server/",m:"get"},app_performance:{u:"/api/server/container/performance",m:"post"},server_status:{u:"/api/server/",m:"get"},container_start:{u:"/api/server/container/start",m:"post"},container_stop:{u:"/api/server/container/stop",m:"post"},container_del:{u:"/api/server/container/del",m:"post"},container_detail:{u:"/api/server/",m:"get"},projects:{u:"/api/projects",m:"get"},project_del:{u:"/api/project/del",m:"post"},project_add:{u:"/api/project/new",m:"post"},project_update:{u:"/api/project/update",m:"post"},project_repos:{u:"/api/repos",m:"post"},project_detail:{u:"/api/project/",m:"get"},project_vers:{u:"/api/project/",m:"get"},project_image:{u:"/api/project/",m:"get"},project_up_image:{u:"/api/project/image/upload",m:"post"},project_down_image:{u:"/api/project/image/cloud/download",m:"post"},project_branch:{u:"/api/repos/branches",m:"post"},project_vlog:{u:"/api/project/",m:"get"},project_create:{u:"/api/project/image/creation",m:"post"},project_container_list:{u:"/api/project/containers/list",m:"post"},project_deployment:{u:"/api/project/deployment",m:"post"},user_update:{u:"/api/user/update",m:"post"},user_login:{u:"/api/user/login",m:"post"},user_verify:{u:"/api/user/sms/",m:"post"},user_logout:{u:"/api/user/logout",m:"post"},user_info:{u:"/api/user",m:"get"},user_thumb_token:{u:"/api/user/token",m:"get"},file_list:{u:"/api/file/list",m:"post"},file_pages:{u:"/api/file/",m:"get"},file_create_dir:{u:"/api/file/dir/create",m:"post"},file_upload:{u:"/api/file/upload",m:"post"},file_update:{u:"/api/file/update",m:"post"},file_download:{u:"/api/file/download",m:"post"},file_del:{u:"/api/file/delete",m:"post"},islocal:a};t.default=i},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(20),o=a(i),s=n(7),r=a(s),u=n(14),l=a(u),c=n(36),p=a(c),d=n(149),f=a(d),h=n(35),m=a(h),_=n(33),v=a(_),g=function(e){function t(){return(0,r.default)(this,t),(0,p.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,l.default)(t,[{key:"init",value:function(){var e=this._static.Vue.extend(this._opts.popper);this._pvm=new e,this._pvm.$mount(),this._pvm.popxdata&&(this._pvm.popxdata=this._opts.data),this._pvm.$el.setAttribute("data-uid",this.uuid),this.initComplete()}},{key:"initComplete",value:function(){this._pvm.$root=this._vm.$root,document.body.appendChild(this._pvm.$el),(0,f.default)(t.prototype.__proto__||(0,o.default)(t.prototype),"initComplete",this).call(this)}},{key:"popper",get:function(){return this._pvm.$el}}]),t}(v.default);t.default=g},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(20),o=a(i),s=n(7),r=a(s),u=n(36),l=a(u),c=n(35),p=a(c),d=n(33),f=a(d),h=function(e){function t(e){(0,r.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return console.log(2),n}return(0,p.default)(t,e),t}(f.default);t.default=h},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),o=a(i),s=n(14),r=a(s);t.default=function(e,t){var n=l.default.checkPopper(e.popper),a=_[n];if(!a)throw new Error("没有匹配的弹窗解析");t.$root.popx_manage||(t.$root.popx=g);var i=new a(e,t);return i.type=n,g.add(i)};var u=n(133),l=a(u),c=n(129),p=a(c),d=n(132),f=a(d),h=n(130),m=a(h),_={component:p.default,string:f.default,html:m.default},v=function(){function e(){(0,o.default)(this,e),this._pops={}}return(0,r.default)(e,[{key:"add",value:function(e){return this._pops[e.uuid]=e,e.uuid}},{key:"popins",value:function(e){return this._pops[e]}},{key:"remove",value:function(e){delete this._pops[e]}},{key:"close",value:function(e){if(e)this.popins(e).close(),this.remove(e);else for(var t in this._pops)this._pops[t].close(),this.remove(t)}}]),e}(),g=new v},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(20),o=a(i),s=n(7),r=a(s),u=n(36),l=a(u),c=n(35),p=a(c),d=n(33),f=a(d),h=function(e){function t(e){(0,r.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return console.log(2),n}return(0,p.default)(t,e),t}(f.default);t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(29),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={checkPopper:function(e){var t="";if(e instanceof HTMLElement)t="html";else switch((void 0===e?"undefined":(0,i.default)(e)).toLowerCase()){case"object":e.hasOwnProperty("render")&&e.hasOwnProperty("staticRenderFns")&&(t="component");break;case"string":t="string"}return t}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(59),o=a(i),s=n(92),r=a(s);t.default={name:"ELine",props:{data:Array,lineColor:String,series:Array,colors:{type:Array,default:function(e){return[["#48bbc0","rgba(73, 97, 106, 1)","rgba(73, 97, 106, 0)"]]}},axis:{type:Object,default:function(){return{axisLine:{lineStyle:{color:"#7f8da4"}},axisLabel:{textStyle:{fontSize:14}}}}}},computed:{opt:function(){return{tooltip:{trigger:"axis",formatter:function(e){return e[0].data[2]},padding:0,backgroundColor:"rgba(0,0,0,0.8)",textStyle:{color:"#7f8da4"}},xAxis:(0,r.default)({type:"time",splitLine:{show:!1}},this.axis),yAxis:(0,r.default)({type:"value",boundaryGap:["0%","30%"],splitLine:{show:!1}},this.axis),series:this.seriesFormat}},seriesFormat:function(){var e=this;return this.series.map(function(t,n){return(0,r.default)({type:"line",smooth:!0,sampling:"average",itemStyle:{normal:{color:e.colors[n][0]}},lineStyle:{normal:{color:e.colors[n][0]}},areaStyle:{normal:{color:new window.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:e.colors[n][1]},{offset:1,color:e.colors[n][2]}])}}},t)})}},mixins:[o.default]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MChart",props:{option:Object,nodes:{type:Number,default:60}},watch:{option:{handler:function(e,t){this.$EChart.setOption(e)},deep:!0}},methods:{update:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this.option.series[a].data;n?e.forEach(function(e,n){i.length>=t.nodes&&i.shift(),i.push(e)}):(i.length>=this.nodes&&i.shift(),i.push(e))},resize:function(){this.$EChart&&this.$EChart.resize()}},mounted:function(){this.$EChart=window.echarts.init(this.$el),this.option&&this.$EChart.setOption(this.option)},beforeDestroy:function(){this.$EChart.dispose()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(59),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"EPie",props:{label:Array,data:Array},computed:{opt:function(){return{tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},legend:{left:"center",data:this.label,textStyle:{color:"#7f8da4"},top:"70%"},series:[{type:"pie",radius:"50%",center:["50%","30%"],data:this.data,label:{normal:{formatter:"{b} {d}%"}}}]}}},mixins:[i.default]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Panel",props:{title:String,bgColor:String,hasClose:Boolean},computed:{panelStyle:function(){var e={};return this.bgColor&&(e.backgroundColor=this.bgColor),e}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"pages",props:{allpage:{type:Number,required:!0},nowpage:{type:Number,required:!0},shownum:{type:Number,default:5},vnum:{type:Number,default:2}},data:function(){return{pagenum:null}},methods:{itemSelect:function(e){"prev"!==e&&"next"!==e||this.prevOrNext(e),isNaN(parseInt(e))||(this.pagenum=e)},prevOrNext:function(e){"prev"===e&&this.pagenum>1&&this.pagenum--,"next"===e&&this.pagenum<this.allpage&&this.pagenum++},activeClass:function(e){return this.pagenum===parseInt(e)?"active":"..."!==e?"waves-effect":"normal"}},watch:{pagenum:function(e,t){null!==t&&e!==t&&this.$emit("change",e)}},computed:{preveClass:function(){return 1===this.pagenum?"disabled":"waves-effect"},nextClass:function(){return this.pagenum===this.allpage?"disabled":"waves-effect"},pagelist:function(){var e=[],t=this.pagenum-this.vnum,n=this.pagenum+this.vnum;for(t<1&&(t=1,n=n-t+1),n>this.allpage&&(n=this.allpage,t-=n-this.allpage),t-1>=1&&(e.push(1),e.push("..."));t<=n;)e.push(t),t++;return this.allpage-n>=1&&(e.push("..."),e.push(this.allpage)),e}},mounted:function(){this.pagenum=this.nowpage}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"swiper-slide"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"swiper",props:{options:{type:Object,required:!0},name:{type:String}},mounted:function(){var e=this;this.swiper=new window.Swiper(this.$el,this.options),this.$nextTick(function(t){e.swiper.update()}),this.name&&(this.$parent.swipers||(this.$parent.swipers={}),this.$parent.swipers[this.name]=this.swiper)},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),this.$parent.swipers&&delete this.$parent.swipers[this.name],delete this.swiper)}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(150),o=a(i),s=n(211),r=a(s);t.default={data:function(){return{isMini:!1,isShow:!1,showInfo:!0,tasks:[],hashs:[]}},methods:{miniAction:function(){this.isMini=!this.isMini},addTask:function(e){var t=this;"upload"===e.type&&(0,o.default)(e.file,function(n,a){e.hash=a,t.tasks.push(e),t.hashs.push(a)})},removeTask:function(e){var t=this.hashs.indexOf(e);this.tasks.splice(t,1)},complete:function(){console.log("complete")}},computed:{miniClass:function(){return this.isMini?"icon-fangda":"icon-jianshao"},infotip:function(){return this.tasks.length>0&&(this.isShow=!0),"您有"+this.tasks.length+"个任务处理中"}},components:{upload:r.default}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(96),i=function(e){return e&&e.__esModule?e:{default:e}}(a),o=n(94);t.default={props:{data:{type:Object},value:{type:Array}},data:function(){return{uping:0,upok:!1}},methods:{upload:function(){var e=this,t={};this.$Global.async("file_upload",!0).getData({file_infos:[{filename:this.data.file.name,hash:this.data.hash,pid:this.data.pid}]}).then(function(n){if(1===n.data[0].file_status)e.upok=!0,e.uping=100,e.data.cb&&e.data.cb(n);else{t.file_id=n.data[0].file_id;var a=new FormData;a.append("file",e.data.file),a.append("token",n.data[0].token);var i=e.data.file.name.split(".");i=i[0]+"-"+e.data.hash.substring(-1,7)+"."+i[1],(0,o.upload)(e.data.file,n.data[0].token,i,function(t){e.uping=Math.ceil(100*t.loaded/t.total)}).then(function(n){e.upok=!0,e.uping=100,t.status=0,t.size=n.size,t.mime=n.type,t.qiniu_id=n.key,e.update(t)},function(n){t.status=1,e.update(t)})}})},update:function(e){var t=this;this.$Global.async("file_update",!0).getData(e).then(function(e){t.data.cb&&t.data.cb(e)})},removeTask:function(){this.$parent.removeTask(this.data.hash)}},computed:{filename:function(){return this.data.file.name},filesize:function(){return i.default.filesize(this.data.file.size)}},mounted:function(){this.upload()}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,function(e,t,n){var a=n(4)(n(134),n(220),null,null);e.exports=a.exports},function(e,t,n){var a=n(4)(n(136),n(215),null,null);e.exports=a.exports},function(e,t,n){var a=n(4)(n(137),n(213),null,null);e.exports=a.exports},function(e,t,n){n(196);var a=n(4)(n(138),n(212),null,null);e.exports=a.exports},function(e,t,n){var a=n(4)(n(139),n(216),null,null);e.exports=a.exports},function(e,t,n){var a=n(4)(n(140),n(221),null,null);e.exports=a.exports},function(e,t,n){n(198);var a=n(4)(n(141),n(217),null,null);e.exports=a.exports},function(e,t,n){n(197);var a=n(4)(n(142),n(214),null,null);e.exports=a.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pages"},[n("div",{staticClass:"page-btn page-prev",class:[e.preveClass],on:{click:function(t){t.preventDefault(),e.itemSelect("prev")}}},[n("span",[e._v("<")])]),e._v(" "),e._l(e.pagelist,function(t){return n("div",{staticClass:"page-btn",class:[e.activeClass(t)],on:{click:function(n){n.preventDefault(),e.itemSelect(t)}}},[e._v(e._s(t))])}),e._v(" "),n("div",{staticClass:"page-btn page-next",class:[e.nextClass],on:{click:function(t){t.preventDefault(),e.itemSelect("next")}}},[n("span",[e._v(">")])])],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel",style:[e.panelStyle]},[e._t("title",[n("div",{staticClass:"panel-title"},[e._v(e._s(e.title))])]),e._v(" "),e._t("default"),e._v(" "),e.hasClose?n("div",{staticClass:"panel-close close"}):e._e()],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"task-item clearfix task-upload"},[n("div",{staticClass:"task-upload-item task-item-a"},[e._v(e._s(e.filename))]),e._v(" "),n("div",{staticClass:"task-upload-item task-item-b"},[e._v(e._s(e.filesize))]),e._v(" "),n("div",{staticClass:"task-upload-item task-item-c"},[n("span",[e._v(e._s(e.uping)+"%")]),e._v(" "),e.upok?n("i",{staticClass:"icon icon-close right",on:{click:e.removeTask}}):e._e()])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"epie"},[n("e-chart",{attrs:{option:e.opt,nodes:e.nodes}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"swiper-slide"},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.tasks.length>0||e.isShow?n("div",{staticClass:"task-panel",class:{mini:e.isMini}},[n("div",{staticClass:"task-panel-title",on:{click:e.miniAction}},[n("span",{staticClass:"vam"},[e._v("任务列表")]),e._v(" "),n("i",{staticClass:"icon icon-close right",on:{click:function(t){e.isShow=!1}}}),e._v(" "),n("i",{staticClass:"icon right mini-btn",class:[e.miniClass]})]),e._v(" "),n("div",{staticClass:"task-panel-body"},[e.tasks.length>0&&e.showInfo?n("div",{staticClass:"task-info"},[n("span",[e._v(e._s(e.infotip))]),e._v(" "),n("i",{staticClass:"icon icon-close right",on:{click:function(t){e.showInfo=!1}}})]):e._e(),e._v(" "),e._l(e.tasks,function(t,a){return n(t.type,{key:a,tag:"component",attrs:{data:t},on:{remove:e.removeTask,complete:e.complete}})})],2)]):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"resize",rawName:"v-resize",value:e.resize,expression:"resize"}],staticClass:"echarts"})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("router-view")},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"eline"},[n("e-chart",{attrs:{option:e.opt,nodes:e.nodes}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},[e._t("default")],2)])},staticRenderFns:[]}}]),[117]);
//# sourceMappingURL=app.988e4a6d9496c1c3949b.js.map