webpackJsonp([6],Array(58).concat([function(t,e,n){n(116);var i=n(0)(n(177),n(108),null,null);t.exports=i.exports},function(t,e,n){"use strict";var i=n(176),a=n(169),s=n(171),o=n(172),r=n(165),l=n(167),c=n(173),u=n(170),d=n(166),p=n(174),f=n(161),h=(n(164),{Tree:i.a,Modal:a.a,Percentage:s.a,Tabs:o.a,Alert:r.a,Search:f.a,Forms:l.a,Tips:c.a,Pages:u.a,Dropdown:d.a});h.install=function(t){t.prototype.$toast=p.a;for(var e in h){var n=h[e];n&&"install"!==e&&t.use(n)}},e.a=h},function(t,e,n){"use strict";var i=n(157),a=n.n(i),s=n(36),o=n.n(s),r=n(37),l=n.n(r),c=n(23),u=n.n(c),d=/.+localhost.+/.test(window.location.href),p={baseURL:d?"http://192.168.1.101":"http://47.94.18.22",wsURL:d?"ws://192.168.1.101:8010":"ws://47.94.18.22",clusters:{u:"/api/clusters",m:"get"},cluster_add:{u:"/api/cluster/new",m:"post"},cluster_del:{u:"/api/cluster/del",m:"post"},cluster_detail:{u:"/api/cluster/",m:"get"},cluster_update:{u:"/api/cluster/update",m:"post"},server_add:{u:"/api/server/migration",m:"post"},server_del:{u:"/api/server/deletion",m:"post"},server_detail:{u:"/api/server/detail",m:"get"},server_update:{u:"/api/server/modification",m:"post"}},f=function(){function t(e){o()(this,t),this._data=null,this._api=p.baseURL+p[e].u,this._method=p[e].m}return l()(t,[{key:"getData",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new a.a(function(i,a){if(null===t._data)switch(t._method){case"post":if(null===e)throw new Error("post need params");u.a.post(t._api+n,e).then(function(e){200===e.status&&(t._data=e.data,i(e.data))});break;case"get":u.a.get(t._api+n,e).then(function(e){200===e.status&&(t._data=e.data,i(e.data))})}else i(t._data)})}},{key:"data",set:function(t){this._data=t}}]),t}(),h={},v={apis:p,async:function(t){if(!p.hasOwnProperty(t))throw new Error("key: "+t+" is no found");return h.hasOwnProperty(t)||(h[t]=new f(t)),h[t]}};e.a=v},function(t,e,n){"use strict";var i=n(22),a=n(154),s=n(83),o=n.n(s),r=function(t){return n.e(1).then(function(){return t(n(198))}.bind(null,n)).catch(n.oe)},l=function(t){return n.e(1).then(function(){return t(n(208))}.bind(null,n)).catch(n.oe)},c=function(t){return n.e(1).then(function(){return t(n(210))}.bind(null,n)).catch(n.oe)},u=function(t){return n.e(1).then(function(){return t(n(195))}.bind(null,n)).catch(n.oe)},d=function(t){return n.e(0).then(function(){return t(n(207))}.bind(null,n)).catch(n.oe)},p=function(t){return n.e(0).then(function(){return t(n(206))}.bind(null,n)).catch(n.oe)},f=function(t){return n.e(0).then(function(){return t(n(203))}.bind(null,n)).catch(n.oe)},h=function(t){return n.e(0).then(function(){return t(n(205))}.bind(null,n)).catch(n.oe)},v=function(t){return n.e(0).then(function(){return t(n(204))}.bind(null,n)).catch(n.oe)},m=function(t){return n.e(2).then(function(){return t(n(200))}.bind(null,n)).catch(n.oe)},_=function(t){return n.e(2).then(function(){return t(n(202))}.bind(null,n)).catch(n.oe)},b=function(t){return n.e(2).then(function(){return t(n(201))}.bind(null,n)).catch(n.oe)},g=function(t){return n.e(4).then(function(){return t(n(199))}.bind(null,n)).catch(n.oe)},y=function(t){return n.e(4).then(function(){return t(n(209))}.bind(null,n)).catch(n.oe)},w=function(t){return n.e(3).then(function(){return t(n(196))}.bind(null,n)).catch(n.oe)},x=function(t){return n.e(3).then(function(){return t(n(197))}.bind(null,n)).catch(n.oe)};i.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Main",component:o.a},{path:"/cluster",name:"Cluster",component:r},{path:"/cluster-details/:id",name:"Cluster-Details",component:l},{path:"/machine-details/:id",name:"Machine-Details",component:c},{path:"/addhost/:id",name:"AddHost",component:u},{path:"/project",name:"Project",component:d},{path:"/proadd",name:"ProAdd",component:f},{path:"/proinfo/:id",name:"ProInfo",component:p},{path:"/prodeploy/:id",name:"ProDeploy",component:h},{path:"/probuild/:id",name:"ProBuild",component:v},{path:"/apps",name:"Apps",component:w},{path:"/appsinfo/:id",name:"AppsInfo",component:x},{path:"/hub",name:"Hub",component:m},{path:"/hubup",name:"Hubup",component:_},{path:"/hubinfo/:id",name:"HubInfo",component:b},{path:"/filehub",name:"FileHub",component:g},{path:"/file-details/:id",name:"File-Details",component:y}]})},,,,,,,,,,,,,,,,,,,,,,function(t,e,n){n(115);var i=n(0)(n(178),n(103),"data-v-4bcbbdd0",null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(179),n(99),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(180),n(104),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(181),n(105),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(182),n(98),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(183),n(102),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(184),n(106),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(185),n(111),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(186),n(109),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(187),n(101),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(188),n(112),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(189),n(113),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(190),n(110),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(191),n(100),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(192),n(107),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"checkbox"},[n("input",{class:[t.theme],attrs:{type:"checkbox",id:t.rndid,name:t.name}}),t._v(" "),n("label",{attrs:{for:t.rndid}},[t._v(t._s(t.label))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"piece-search"},[n("input",{staticClass:"piece-search_input",attrs:{type:"text",placeholder:"搜索"}}),t._v(" "),n("i",{staticClass:"ten-icon"},[t._v("")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"tree"},t._l(t.data,function(e,i){return n("tree-node",{key:i,attrs:{node:e,nodeidx:i+"",nowidx:t.nowidx,collapse:t.collapse,cacheidx:t.cacheidx},on:{nodeSelect:t.nodeSelect}})}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"percentage"},[n("canvas")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"file-field"},[n("div",{staticClass:"file-field_group"},[t._t("default",[n("i",{staticClass:"ten-icon"},[t._v("")]),t._v(" 文件上传")]),t._v(" "),n("input",{attrs:{type:"file",accept:t.accept},on:{change:function(e){t.change(e)}}})],2),t._v(" "),t.canPreView?n("div",{staticClass:"file-field_view",class:{"file-field_isimg":t.isImage}},[!t.isImage&&t.filename?n("span",{domProps:{innerHTML:t._s(t.filename)}}):t._e(),t._v(" "),t.isImage?n("img",{staticClass:"file-field_img",attrs:{src:t.base64}}):t._e()]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-main"},[n("i",{staticClass:"ten-icon"},[t._v("")]),t._v(" "),n("i",{staticClass:"ten-icon"},[t._v("")]),t._v(" "),n("i",{staticClass:"ten-icon"},[t._v("")]),t._v(" "),n("i",{staticClass:"ten-icon"},[t._v("")]),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:1},on:{change:t.pageChange}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:2}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:3}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:4}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:5}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:6}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:7}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:8}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:9}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:10}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"alert-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"alert",class:[t.typeClass]},[t.showIcon?n("i",{staticClass:"alert_icon ten-icon",class:[t.isBigIcon],domProps:{innerHTML:t._s(t.iconClass)}}):t._e(),t._v(" "),n("div",{staticClass:"alert_content"},[t.title?n("span",{staticClass:"alert_title",class:[t.isBoldTitle]},[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("default",[t.description?n("p",{staticClass:"alert_description"},[t._v(t._s(t.description))]):t._e()]),t._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:t.closable,expression:"closable"}],staticClass:"alert_closebtn",class:{"ten-icon":"&#xe6ac;"==t.closeText},domProps:{innerHTML:t._s(t.closeText)},on:{click:function(e){t.close()}}})],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown",class:[t.type]},[n("div",{staticClass:"dropdown-label"},[t._t("label",[t.icon?n("i",{staticClass:"ten-icon vam",domProps:{innerHTML:t._s(t.icon)}}):t._e(),t._v(" "),t.img?n("img",{staticClass:"circle vam",attrs:{src:t.img,alt:""}}):t._e(),t._v(" "),n("span",{staticClass:"_label"},[t._v(t._s(t.title))]),t._v(" "),n("i",{staticClass:"ten-icon vam"},[t._v("")])])],2),t._v(" "),n("div",{staticClass:"dropdown-items z-depth-2"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select"},[n("div",{staticClass:"select-label",on:{click:t.opationAc}},[n("i",{staticClass:"ten-icon select-label_arrow right"},[t._v("")]),t._v(" "),n("span",{staticClass:"select-label_label"},[t._v(t._s(t.label))])]),t._v(" "),n("dl",{staticClass:"select-opation z-depth-1",style:"max-height:"+t.maxHeight},t._l(t.data,function(e,i){return n("dd",{staticClass:"select-opation_item",class:[{active:e.active,disabled:e.disabled}],attrs:{value:e.value||e.label},on:{click:function(e){t.itemSelect(i,e)}}},[t._v(t._s(e.label))])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"tree-node",class:{empty:t.node.link,active:0===t.nowidx.indexOf(t.nodeidx)||0===t.cacheidx.indexOf(t.nodeidx)},attrs:{idx:t.nodeidx}},[n("div",{staticClass:"tree-node_title",on:{click:function(e){t.nodeSelect(e,t.node.children)}}},[t.node.icon?n("i",{staticClass:"ten-icon tree-node_icon",domProps:{innerHTML:t._s(t.node.icon)}}):t._e(),t._v(" "),n("span",{staticClass:"tree-node_label"},[t._v(t._s(t.node.label))]),t._v(" "),t.node.children?n("i",{staticClass:"ten-icon tree-node_arrow"},[t._v("")]):t._e(),t._v(" "),t.node.link?n("a",{staticClass:"tree-node_link",attrs:{href:t.node.link}}):t._e()]),t._v(" "),t.node.children?n("ul",{staticClass:"tree-node_child"},t._l(t.node.children,function(e,i){return n("tree-node",{key:i,attrs:{node:e,nodeidx:t.nodeidx+"-"+i,cacheidx:t.cacheidx,nowidx:t.nowidx},on:{nodeSelect:t.childSelect}})})):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"top-nav"},[n("div",{staticClass:"top-nav_logo center-align"},[n("router-link",{attrs:{to:{name:"Main"}}},[t._v("COMB")])],1),t._v(" "),n("dropdown",{staticClass:"top-nav_user right",attrs:{title:"标题啊",img:"/static/images/user-head.jpg"}},[n("div",[t._v("列表1")]),t._v(" "),n("div",[t._v("列表2")]),t._v(" "),n("div",[t._v("列表3")]),t._v(" "),n("div",[t._v("列表4")])])],1),t._v(" "),n("nav",{staticClass:"left-nav"},[n("tree",{attrs:{data:t.navdata,collapse:""}})],1),t._v(" "),n("div",{staticClass:"view-box"},[n("router-view")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pages"},[n("div",{staticClass:"page-btn page-prev",class:[t.preveClass],on:{click:function(e){e.preventDefault(),t.itemSelect("prev")}}},[n("i",{staticClass:"ten-icon"},[t._v("")])]),t._v(" "),t._l(t.pagelist,function(e){return n("div",{staticClass:"page-btn",class:[t.activeClass(e)],on:{click:function(n){n.preventDefault(),t.itemSelect(e)}}},[t._v(t._s(e))])}),t._v(" "),n("div",{staticClass:"page-btn page-next",class:[t.nextClass],on:{click:function(e){e.preventDefault(),t.itemSelect("next")}}},[n("i",{staticClass:"ten-icon"},[t._v("")])])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"ten-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"toast",class:[t.styleClass]},[t._v("\n    "+t._s(t.content)+"\n  ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"ten-fade"},on:{"after-enter":t.afterEnter,"before-leave":t.beforeLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"modal-wrapper"},[n("div",{class:[t.theme]},[t.title?n("div",{staticClass:"modal-header"},[t._t("title",[n("span",{staticClass:"modal-header_title"},[t._v(t._s(t.title))])])],2):t._e(),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("default",[t._v("这里是body内容")])],2),t._v(" "),t.buttons?n("div",{staticClass:"modal-footer align-right clearfix"},[t._t("footer",t._l(t.btns,function(e,i){return n("span",{staticClass:"waves-effect waves-green",class:[t.getBtnsClass(i)],on:{click:function(e){t.actions(i)}}},[t._v(t._s(e))])}))],2):t._e()])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-wrap",class:[t.themeClass]},[n("ul",{staticClass:"tab-label-group"},[t._l(t.labels,function(e,i){return n("li",{staticClass:"tab-label",class:{active:t.tabindex==i},on:{click:function(e){t.labelSelect(i,e)}}},[t._v(t._s(e))])}),t._v(" "),t.hasLine?n("li",{staticClass:"tab-line",style:{left:t.lineleft,width:t.linewidth}}):t._e()],2),t._v(" "),n("div",{staticClass:"tab-cont"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tips"},[n("transition",{attrs:{name:"ten-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"tips-tip",class:[t.point]},[t._t("tip",[n("span",{staticClass:"tips-tip_txt"},[t._v(t._s(t.text))])]),t._v(" "),n("div",{staticClass:"tips-tip_arrow",class:[t.point]})],2)]),t._v(" "),n("div",{staticClass:"tip-cont",on:{mouseenter:function(e){e.preventDefault(),t.msenter(e)},mouseleave:function(e){e.preventDefault(),t.msleave(e)}}},[t._t("default")],2)],1)},staticRenderFns:[]}},,function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i=n(84),a=n.n(i);a.a.install=function(t){t.component(a.a.name,a.a)},e.a=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(22),a=n(23),s=n.n(a),o=n(58),r=n.n(o),l=n(61),c=n(59),u=n(60);i.a.prototype.$http=s.a,i.a.prototype.$Global=u.a,i.a.config.productionTip=!1,i.a.use(c.a),new i.a({el:"#app",router:l.a,template:"<App/>",components:{App:r.a}})},function(t,e,n){"use strict";var i=n(36),a=n.n(i),s=n(37),o=n.n(s),r=function(){function t(e,n){a()(this,t),this.vm=e,this.cb=n}return o()(t,[{key:"addDomEvent",value:function(){var t=this,e=function(e){t.domClickAc(e)};this.tempaction=e,document.addEventListener("click",e)}},{key:"delDomEvent",value:function(){document.removeEventListener("click",this.tempaction)}},{key:"domClickAc",value:function(t){this.vm.$el.contains(t.target)||(this.delDomEvent(),this.cb.apply(this.vm))}}]),t}();e.a=function(t,e){return new r(t,e)}},function(t,e,n){"use strict";function i(t){return null!==t&&t===t.window}function a(t){return i(t)?t:9===t.nodeType&&t.defaultView}function s(t){var e={top:0,left:0},n=t&&t.ownerDocument,i=n.documentElement;"undefined"!==u()(t.getBoundingClientRect)&&(e=t.getBoundingClientRect());var s=a(n);return{top:e.top+s.pageYOffset-i.clientTop,left:e.left+s.pageXOffset-i.clientLeft}}function o(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function r(t){if(!1===h.allowEvent(t))return null;for(var e=null,n=t.target||t.srcElement;null!==n.parentElement;){if(!(n instanceof SVGElement||-1===n.className.indexOf("waves-effect"))){e=n;break}if(n.classList.contains("waves-effect")){e=n;break}n=n.parentElement}return e}function l(t){var e=r(t);null!==e&&(f.show(t,e),"ontouchstart"in window&&(e.addEventListener("touchend",f.hide,!1),e.addEventListener("touchcancel",f.hide,!1)),e.addEventListener("mouseup",f.hide,!1),e.addEventListener("mouseleave",f.hide,!1))}var c=n(160),u=n.n(c),d=d||{},p=document.querySelectorAll.bind(document),f={duration:750,show:function(t,e){if(2===t.button)return!1;var n=e||this,i=document.createElement("div");i.className="waves-ripple",n.appendChild(i);var a=s(n),r=t.pageY-a.top,l=t.pageX-a.left,c="scale("+n.clientWidth/100*10+")";"touches"in t&&(r=t.touches[0].pageY-a.top,l=t.touches[0].pageX-a.left),i.setAttribute("data-hold",Date.now()),i.setAttribute("data-scale",c),i.setAttribute("data-x",l),i.setAttribute("data-y",r);var u={top:r+"px",left:l+"px"};i.className=i.className+" waves-notransition",i.setAttribute("style",o(u)),i.className=i.className.replace("waves-notransition",""),u["-webkit-transform"]=c,u["-moz-transform"]=c,u["-ms-transform"]=c,u["-o-transform"]=c,u.transform=c,u.opacity="1",u["-webkit-transition-duration"]=f.duration+"ms",u["-moz-transition-duration"]=f.duration+"ms",u["-o-transition-duration"]=f.duration+"ms",u["transition-duration"]=f.duration+"ms",u["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",u["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",u["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",u["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",i.setAttribute("style",o(u))},hide:function(t){h.touchup(t);var e=this,n=null,i=e.getElementsByClassName("waves-ripple");if(!(i.length>0))return!1;n=i[i.length-1];var a=n.getAttribute("data-x"),s=n.getAttribute("data-y"),r=n.getAttribute("data-scale"),l=Date.now()-Number(n.getAttribute("data-hold")),c=350-l;c<0&&(c=0),setTimeout(function(){var t={top:s+"px",left:a+"px",opacity:"0","-webkit-transition-duration":f.duration+"ms","-moz-transition-duration":f.duration+"ms","-o-transition-duration":f.duration+"ms","transition-duration":f.duration+"ms","-webkit-transform":r,"-moz-transform":r,"-ms-transform":r,"-o-transform":r,transform:r};n.setAttribute("style",o(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},f.duration)},c)},wrapInput:function(t){for(var e=0;e<t.length;e++){var n=t[e];if("input"===n.tagName.toLowerCase()){var i=n.parentNode;if("i"===i.tagName.toLowerCase()&&-1!==i.className.indexOf("waves-effect"))continue;var a=document.createElement("i");a.className=n.className+" waves-input-wrapper";var s=n.getAttribute("style");s||(s=""),a.setAttribute("style",s),n.className="waves-button-input",n.removeAttribute("style"),i.replaceChild(a,n),a.appendChild(n)}}}},h={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?h.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){h.touches>0&&(h.touches-=1)},500):"mousedown"===t.type&&h.touches>0&&(e=!1),e},touchup:function(t){h.allowEvent(t)}};d.displayEffect=function(t){t=t||{},"duration"in t&&(f.duration=t.duration),f.wrapInput(p(".waves-effect")),"ontouchstart"in window&&document.body.addEventListener("touchstart",l,!1),document.body.addEventListener("mousedown",l,!1)},d.attach=function(t){"input"===t.tagName.toLowerCase()&&(f.wrapInput([t]),t=t.parentElement),"ontouchstart"in window&&t.addEventListener("touchstart",l,!1),t.addEventListener("mousedown",l,!1)},document.addEventListener("DOMContentLoaded",function(){d.displayEffect()},!1)},function(t,e,n){"use strict";var i=n(85),a=n.n(i);a.a.install=function(t){t.component(a.a.name,a.a)},e.a=a.a},function(t,e,n){"use strict";var i=n(86),a=n.n(i);a.a.install=function(t){t.component(a.a.name,a.a)},e.a=a.a},function(t,e,n){"use strict";var i=n(87),a=n.n(i),s=n(88),o=n.n(s),r=n(89),l=n.n(r);e.a={Checkbox:a.a,FileInput:o.a,TSelect:l.a,install:function(t){for(var e in this)if("install"!==e){var n=this[e];n&&t.component(n.name,n)}}}},function(t,e,n){"use strict";var i=n(36),a=n.n(i),s=n(37),o=n.n(s),r=function(){function t(e){a()(this,t),this.vm=e,this.setDefault()}return o()(t,[{key:"setDefault",value:function(){for(var t=-1;++t<this.vm.data.length;){if(this.vm.data[t].active){this.setActive(t,this.vm.$el.querySelectorAll(".select-opation_item")[t]);break}}}},{key:"itemSelect",value:function(t,e){-1===e.target.className.split(" ").indexOf("disabled")&&(-1===e.target.className.split(" ").indexOf("active")&&(this.vm.$el.querySelector(".select-opation").style.top=this.vm.$el.querySelector(".select-label").clientHeight+"px",this.setActive(t,e.target)),this.vm.hide())}},{key:"setActive",value:function(t,e){for(var n=this.vm.$el.querySelector(".select-opation").querySelectorAll(".active"),i=-1;++i<n.length;)n[i].className=n[i].className.replace(" active","");e.className+=" active",this.vm.value=e.getAttribute("value"),this.vm.$el.querySelector(".select-label_label").innerHTML=e.innerHTML,this.vm.label=e.innerHTML,this.vm.key=t,this.vm.$emit("change",this.vm.label,this.vm.value,this.vm.key)}}]),t}();e.a=function(t){return new r(t)}},function(t,e,n){"use strict";var i=n(90),a=n.n(i);a.a.install=function(t){t.component(a.a.name,a.a)},e.a=a.a},function(t,e,n){"use strict";var i=n(91),a=n.n(i);a.a.install=function(t){t.component(a.a.name,a.a)},e.a=a.a},function(t,e,n){"use strict";var i=n(92),a=n.n(i);a.a.install=function(t){t.component(a.a.name,a.a)},e.a=a.a},function(t,e,n){"use strict";var i=n(93),a=n.n(i);a.a.install=function(t){t.component(a.a.name,a.a)},e.a=a.a},function(t,e,n){"use strict";var i=n(94),a=n.n(i);a.a.install=function(t){t.component(a.a.name,a.a)},e.a=a.a},function(t,e,n){"use strict";var i=n(175);e.a=i.a},function(t,e,n){"use strict";var i=n(22),a=n(95),s=n.n(a),o=i.a.extend(s.a),r=void 0,l=[],c=1,u=function(t){if(!i.a.prototype.$isServer){t=t||{},"string"==typeof t&&(t={content:t});var e="toast_"+c++;return r=new o({data:t}),r.id=e,r.vm=r.$mount(),document.body.appendChild(r.vm.$el),r.vm.visible=!0,r.dom=r.vm.$el,l.push(r),r.vm}};e.a=u},function(t,e,n){"use strict";var i=n(96),a=n.n(i);a.a.install=function(t){t.component(a.a.name,a.a)},e.a=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{navdata:[{label:"服务器",icon:"&#xe698;",children:[{label:"集群",icon:"&#xe763;",link:"/#/cluster"},{label:"应用",icon:"&#xe6f0;",link:"/#/apps"}]},{label:"项目",link:"/#/project",icon:"&#xe62c;"},{label:"仓库",icon:"&#xe6ea;",children:[{label:"镜像仓库",icon:"&#xe696;",link:"/#/hub"},{label:"文件仓库",icon:"&#xe610;",link:"/#/filehub"}]}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{pageChange:function(t){console.log(t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Search"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={success:{icon:"&#xe690;",class:"green"},info:{icon:"&#xe692;",class:"blue"},warning:{icon:"&#xe691;",class:"amber darken-3"},error:{icon:"&#xe693;",class:"red"}};e.default={name:"Alert",props:{title:{type:String,default:"",required:!0},description:{type:String,default:""},type:{type:String,default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:"&#xe6ac;"},showIcon:{type:Boolean,default:!1}},data:function(){return{visible:!0}},methods:{close:function(){this.visible=!1,this.$emit("close")}},computed:{typeClass:function(){return i[this.type].class},iconClass:function(){return i[this.type].icon||""},isBigIcon:function(){return this.description?"is-big":""},isBoldTitle:function(){return this.description?"is-bold":""}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Dropdown",props:{title:{type:String},icon:{type:String,default:""},img:{type:String,default:""},type:{type:String,default:"hover"}},mounted:function(){for(var t=document.querySelector(".dropdown-items").children,e=-1;++e<t.length;){t[e].className+="dropdown-item"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Checkbox",props:{label:{type:String,default:""},name:{type:String,default:""},theme:{type:String,default:""}},data:function(){return{rndid:"v-"+parseInt(Math.random()*Math.random()*1e4)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Fileinput",props:{accept:{type:String,default:"image/png,image/gif,image/jpg,image/jpeg"},showview:{type:Boolean,default:!0}},data:function(){return{elfile:"",filename:"",base64:""}},methods:{change:function(t){this.elfile=t.target,this.filename=this.elfile.value.match(/\\([^\\]+\.\S+)/)[1],this.readfile(this.elfile.files[0])},readfile:function(t){var e=this,n=new FileReader;n.readAsDataURL(t),n.onload=function(){e.base64=this.result}}},computed:{canReadFile:function(){return"undefined"!=typeof FileReader},isImage:function(){return!/image\/\w+/.test(this.elfile.type)},canPreView:function(){return this.showview&&(this.base64||this.filename)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(163),a=n(168);e.default={name:"Tselect",props:{data:{type:Array,required:!0},maxHeight:{type:String,default:"185px"}},data:function(){return{value:"请选择",label:"请选择",key:-1}},watch:{data:function(t,e){var n=this;setTimeout(function(){n.tselect.setDefault()},100)}},methods:{itemSelect:function(t,e){this.tselect.itemSelect(t,e),this.ndd.delDomEvent()},opationAc:function(){-1!==this.$el.className.split(" ").indexOf("active")?this.hide():this.show()},show:function(){this.$el.className+=" active",this.ndd.addDomEvent()},hide:function(){this.$el.className=this.$el.className.replace(" active","")}},mounted:function(){this.ndd=n.i(i.a)(this,this.hide),this.tselect=n.i(a.a)(this)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Modal",props:{title:{type:String,default:""},theme:{type:String,default:"modal"},buttons:{type:String,default:""},buttonsClass:{type:String,default:""},postdata:{type:String,default:""}},data:function(){return{visible:!1,btnsClass:[]}},methods:{actions:function(t){var e=this.btns.length-t-1;this.$emit("callback",e,this.postdata),this.close()},show:function(){this.visible=!0,document.body.style.overflow="hidden"},close:function(){this.visible=!1,document.body.style.overflow="auto"},afterEnter:function(){this.$modaldom.className+=" active"},beforeLeave:function(){this.$modaldom.className=this.$modaldom.className.replace(" active","")},getBtnsClass:function(t){var e="btn-flat";return 0===this.btnsClass.length&&(this.btnsClass=this.buttonsClass.split(",").reverse()),this.btnsClass.length>0&&(e=this.btnsClass[t]),e||(e="btn-flat"),e}},computed:{btns:function(){return this.buttons.split(",").reverse()}},mounted:function(){this.$modaldom=this.$el.querySelector("."+this.theme)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Pages",props:{allpage:{type:Number,required:!0},nowpage:{type:Number,required:!0},shownum:{type:Number,default:5}},data:function(){return{pagenum:null,vnum:0}},methods:{itemSelect:function(t){"prev"!==t&&"next"!==t||this.prevOrNext(t),isNaN(parseInt(t))||(this.pagenum=t)},prevOrNext:function(t){"prev"===t&&this.pagenum>1&&this.pagenum--,"next"===t&&this.pagenum<this.allpage&&this.pagenum++},activeClass:function(t){return this.pagenum===parseInt(t)?"active":"..."!==t?"waves-effect":"normal"}},watch:{pagenum:function(t,e){null!==e&&t!==e&&this.$emit("change",t)}},computed:{preveClass:function(){return 1===this.pagenum?"disabled":"waves-effect"},nextClass:function(){return this.pagenum===this.allpage?"disabled":"waves-effect"},pagelist:function(){var t=[],e=this.pagenum-this.vnum,n=this.pagenum+this.vnum;for(e<1&&(n=n-e+1,e=1),n>this.allpage&&(e-=n-this.allpage,n=this.allpage),e-1>=1&&(t.push(1),t.push("..."));e<=n;)t.push(e),e++;return this.allpage-n>=1&&(t.push("..."),t.push(this.allpage)),t}},mounted:function(){this.pagenum=this.nowpage,this.vnum=parseInt(this.shownum/2)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Percentage",props:{used:{required:!0,type:Number},free:{required:!0,type:Number},usedColor:{type:String,default:"#45c8dc"},freeColor:{type:String,default:"#988fd8"},lineWidth:{required:!0,type:Number,default:3},height:{required:!0,type:Number,default:300},width:{required:!0,type:Number,default:300}},mounted:function(){function t(t,e,n,i){s.beginPath(),s.arc(t/2,e/2,e/2-n/2,-Math.PI/2,2*Math.PI*i-Math.PI/2,!1),s.stroke()}var e=this.used+this.free,n=this.used/e,i=this.width/10,a=this.$el.childNodes[0],s=a.getContext("2d");a.width=this.width,a.height=this.height,s.clearRect(0,0,this.width,this.height),s.beginPath(),s.moveTo(this.width/2,this.height/2),s.arc(this.width/2,this.height/2,this.height/2,0,2*Math.PI,!1),s.closePath(),s.fillStyle=this.freeColor,s.fill(),s.beginPath(),s.lineCap="round",s.lineWidth=this.lineWidth,s.strokeStyle=this.usedColor,s.closePath(),s.fill(),s.beginPath(),s.moveTo(this.width/2,this.height/2),s.arc(this.width/2,this.height/2,this.height/2-this.lineWidth,0,2*Math.PI,!1),s.closePath(),s.fillStyle="#fff",s.fill(),s.font="bold "+i+"pt Arial",s.fillStyle=this.usedColor,s.textAlign="center",s.textBaseline="middle";var o=null,r=0,l=.01,c=0,u=0,d=parseInt(.01/l);!function(e,n,a,p){o=setInterval(function(){r>p?clearInterval(o):(t(e,n,a,r),c%d==0&&u/100<p&&(s.clearRect(e/2-2*i,n/2-2*i,4*i,4*i),s.moveTo(e/2,n/2),s.fillText(u+"%",e/2,n/2),u+=1),u/100>=p&&(s.clearRect(e/2-2*i,n/2-2*i,4*i,4*i),s.moveTo(e/2,n/2),s.fillText((100*p+"").slice(0,4)+"%",e/2,n/2)),c+=1,r+=l)},15)}(this.width,this.height,this.lineWidth,n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={default:"tab-theme-default",block:"tab-theme-block"};e.default={name:"Tabs",data:function(){return{tabindex:-1,lineleft:0,linewidth:0}},props:{labels:{type:Array,default:[]},tabkey:{type:Number,default:0},theme:{type:String,default:"default"}},methods:{labelSelect:function(t,e){this.tabindex=t,this.linestyle(e.target)},linestyle:function(t){this.lineleft=t.offsetLeft+"px",this.linewidth=t.clientWidth+"px";for(var e=this.$el.querySelector(".tab-cont").children,n=-1;++n<e.length;){var i=e[n];this.tabindex===n?i.className+=" active":i.className=i.className.replace(" active","")}},initTabContItem:function(){for(var t=this.$el.querySelector(".tab-cont").children,e=-1;++e<t.length;){var n=t[e];-1===n.className.indexOf("tab-cont_item")&&(n.className+="tab-cont_item")}}},created:function(){this.tabindex=this.tabkey},mounted:function(){this.initTabContItem(),this.linestyle(this.$el.querySelector(".tab-label-group .active"))},computed:{themeClass:function(){return i[this.theme]},hasLine:function(){return"default"===this.theme}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Tips",props:{point:{type:String,default:"tip-up"},text:{type:String,default:""}},data:function(){return{visible:!1}},methods:{msenter:function(){this.visible=!0},msleave:function(){this.visible=!1}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{visible:!1,content:"",duration:3e3,type:"info",pointClass:"b",customClass:"",closed:!1,timer:null}},watch:{closed:function(t){t&&(this.visible=!1,this.$el.addEventListener("transitionend",this.destroyElement))}},methods:{destroyElement:function(){this.$el.removeEventListener("transitionend",this.destroyElement),this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(){this.closed=!0,"function"==typeof this.onClose&&this.onClose(this)},clearTimer:function(){clearTimeout(this.timer)},startTimer:function(){var t=this;this.duration>0&&(this.timer=setTimeout(function(){t.closed||t.close()},this.duration))}},computed:{styleClass:function(){return this.type+" "+this.pointClass+" "+this.customClass}},mounted:function(){this.startTimer()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(97),a=n.n(i);e.default={name:"Tree",props:{data:{type:Array,required:!0},collapse:{type:Boolean,default:!1}},data:function(){return{nowidx:"",cacheidx:""}},methods:{nodeSelect:function(t,e){this.nowidx===t?this.nowidx="":this.nowidx=t,e||(this.cacheidx=t)}},components:{TreeNode:a.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"TreeNode",props:{node:{type:Object},collapse:{type:Boolean,default:!1},nodeidx:{type:String},nowidx:{type:String},cacheidx:{type:String}},methods:{nodeSelect:function(t,e){var n=t.currentTarget.parentElement.getAttribute("idx"),i=e&&e.length>0;this.$emit("nodeSelect",n,i)},childSelect:function(t,e){this.$emit("nodeSelect",t,e)}}}}]),[162]);
//# sourceMappingURL=app.64094153440f9daf3913.js.map