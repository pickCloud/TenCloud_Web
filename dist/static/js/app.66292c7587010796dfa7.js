webpackJsonp([6],Array(49).concat([function(t,e,n){n(104);var a=n(0)(n(156),n(97),null,null);t.exports=a.exports},function(t,e,n){"use strict";var a=n(155),i=n(150),s=n(152),l=n(153),o=n(146),r=n(148),c=n(154),u=n(151),d=n(147),f=n(142);n(145);e.a={Tree:a.a,Modal:i.a,Percentage:s.a,Tabs:l.a,Alert:o.a,Search:f.a,Forms:r.a,Tips:c.a,Pages:u.a,Dropdown:d.a,install:function(t){for(var e in this)if("install"!==e){var n=this[e];n&&t.use(n)}}}},function(t,e,n){"use strict";var a=n(30),i=n(136),s=n(73),l=n.n(s),o=function(t){return n.e(1).then(function(){return t(n(176))}.bind(null,n)).catch(n.oe)},r=function(t){return n.e(1).then(function(){return t(n(186))}.bind(null,n)).catch(n.oe)},c=function(t){return n.e(1).then(function(){return t(n(188))}.bind(null,n)).catch(n.oe)},u=function(t){return n.e(1).then(function(){return t(n(173))}.bind(null,n)).catch(n.oe)},d=function(t){return n.e(0).then(function(){return t(n(185))}.bind(null,n)).catch(n.oe)},f=function(t){return n.e(0).then(function(){return t(n(184))}.bind(null,n)).catch(n.oe)},p=function(t){return n.e(0).then(function(){return t(n(181))}.bind(null,n)).catch(n.oe)},h=function(t){return n.e(0).then(function(){return t(n(183))}.bind(null,n)).catch(n.oe)},v=function(t){return n.e(0).then(function(){return t(n(182))}.bind(null,n)).catch(n.oe)},m=function(t){return n.e(2).then(function(){return t(n(178))}.bind(null,n)).catch(n.oe)},b=function(t){return n.e(2).then(function(){return t(n(180))}.bind(null,n)).catch(n.oe)},_=function(t){return n.e(2).then(function(){return t(n(179))}.bind(null,n)).catch(n.oe)},g=function(t){return n.e(4).then(function(){return t(n(177))}.bind(null,n)).catch(n.oe)},y=function(t){return n.e(4).then(function(){return t(n(187))}.bind(null,n)).catch(n.oe)},w=function(t){return n.e(3).then(function(){return t(n(174))}.bind(null,n)).catch(n.oe)},C=function(t){return n.e(3).then(function(){return t(n(175))}.bind(null,n)).catch(n.oe)};a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Main",component:l.a},{path:"/cluster",name:"Cluster",component:o},{path:"/cluster-details/:id",name:"Cluster-Details",component:r},{path:"/machine-details",name:"Machine-Details",component:c},{path:"/addhost",name:"AddHost",component:u},{path:"/project",name:"Project",component:d},{path:"/proadd",name:"ProAdd",component:p},{path:"/proinfo/:id",name:"ProInfo",component:f},{path:"/prodeploy/:id",name:"ProDeploy",component:h},{path:"/probuild/:id",name:"ProBuild",component:v},{path:"/apps",name:"Apps",component:w},{path:"/appsinfo/:id",name:"AppsInfo",component:C},{path:"/hub",name:"Hub",component:m},{path:"/hubup",name:"Hubup",component:b},{path:"/hubinfo/:id",name:"HubInfo",component:_},{path:"/filehub",name:"FileHub",component:g},{path:"/file-details/:id",name:"File-Details",component:y}]})},,,,,,,,,,,,,,,,,,,,,,function(t,e,n){n(103);var a=n(0)(n(157),n(92),"data-v-4bcbbdd0",null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(158),n(88),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(159),n(93),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(160),n(94),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(161),n(87),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(162),n(91),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(163),n(95),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(164),n(99),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(165),n(98),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(166),n(90),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(167),n(100),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(168),n(101),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(169),n(89),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(170),n(96),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"checkbox"},[n("input",{class:[t.theme],attrs:{type:"checkbox",id:t.rndid,name:t.name}}),t._v(" "),n("label",{attrs:{for:t.rndid}},[t._v(t._s(t.label))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"piece-search"},[n("input",{staticClass:"piece-search_input",attrs:{type:"text",placeholder:"搜索"}}),t._v(" "),n("i",{staticClass:"ten-icon"},[t._v("")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"tree"},t._l(t.data,function(e,a){return n("tree-node",{key:a,attrs:{node:e,"node-idx":a+"",collapse:t.collapse}})}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"percentage"},[n("canvas")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"file-field"},[n("div",{staticClass:"file-field_group"},[t._t("default",[n("i",{staticClass:"ten-icon"},[t._v("")]),t._v(" 文件上传")]),t._v(" "),n("input",{attrs:{type:"file",accept:t.accept},on:{change:function(e){t.change(e)}}})],2),t._v(" "),t.canPreView?n("div",{staticClass:"file-field_view",class:{"file-field_isimg":t.isImage}},[!t.isImage&&t.filename?n("span",{domProps:{innerHTML:t._s(t.filename)}}):t._e(),t._v(" "),t.isImage?n("img",{staticClass:"file-field_img",attrs:{src:t.base64}}):t._e()]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-main"},[n("i",{staticClass:"ten-icon"},[t._v("")]),t._v(" "),n("i",{staticClass:"ten-icon"},[t._v("")]),t._v(" "),n("i",{staticClass:"ten-icon"},[t._v("")]),t._v(" "),n("i",{staticClass:"ten-icon"},[t._v("")]),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:1},on:{change:t.pageChange}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:2}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:3}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:4}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:5}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:6}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:7}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:8}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:9}}),t._v(" "),n("pages",{attrs:{allpage:10,nowpage:10}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"alert-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"alert",class:[t.typeClass]},[t.showIcon?n("i",{staticClass:"alert_icon ten-icon",class:[t.isBigIcon],domProps:{innerHTML:t._s(t.iconClass)}}):t._e(),t._v(" "),n("div",{staticClass:"alert_content"},[t.title?n("span",{staticClass:"alert_title",class:[t.isBoldTitle]},[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("default",[t.description?n("p",{staticClass:"alert_description"},[t._v(t._s(t.description))]):t._e()]),t._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:t.closable,expression:"closable"}],staticClass:"alert_closebtn",class:{"ten-icon":"&#xe6ac;"==t.closeText},domProps:{innerHTML:t._s(t.closeText)},on:{click:function(e){t.close()}}})],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown",class:[t.type]},[n("div",{staticClass:"dropdown-label"},[t._t("label",[t.icon?n("i",{staticClass:"ten-icon vam",domProps:{innerHTML:t._s(t.icon)}}):t._e(),t._v(" "),t.img?n("img",{staticClass:"circle vam",attrs:{src:t.img,alt:""}}):t._e(),t._v(" "),n("span",{staticClass:"_label"},[t._v(t._s(t.title))]),t._v(" "),n("i",{staticClass:"ten-icon vam"},[t._v("")])])],2),t._v(" "),n("div",{staticClass:"dropdown-items z-depth-2"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select"},[n("div",{staticClass:"select-label",on:{click:t.opationAc}},[n("i",{staticClass:"ten-icon select-label_arrow right"},[t._v("")]),t._v(" "),n("span",{staticClass:"select-label_label"},[t._v(t._s(t.label))])]),t._v(" "),n("dl",{staticClass:"select-opation z-depth-1",style:"max-height:"+t.maxHeight},t._l(t.data,function(e,a){return n("dd",{staticClass:"select-opation_item",class:[{active:e.active,disabled:e.disabled}],attrs:{value:e.value||e.label},on:{click:function(e){t.itemSelect(a,e)}}},[t._v(t._s(e.label))])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"tree-node",class:{empty:t.node.link},attrs:{idx:t.nodeIdx}},[n("div",{staticClass:"tree-node_title",on:{click:function(e){t.nodeSelect(e)}}},[t.node.icon?n("i",{staticClass:"ten-icon tree-node_icon",domProps:{innerHTML:t._s(t.node.icon)}}):t._e(),t._v(" "),n("span",{staticClass:"tree-node_label"},[t._v(t._s(t.node.label))]),t._v(" "),t.node.children?n("i",{staticClass:"ten-icon tree-node_arrow"},[t._v("")]):t._e(),t._v(" "),t.node.link?n("a",{staticClass:"tree-node_link",attrs:{href:t.node.link}}):t._e()]),t._v(" "),t.node.children?n("ul",{staticClass:"tree-node_child"},t._l(t.node.children,function(e,a){return n("tree-node",{key:a,attrs:{node:e,"node-idx":t.nodeIdx+"-"+a}})})):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"top-nav"},[n("div",{staticClass:"top-nav_logo center-align"},[n("router-link",{attrs:{to:{name:"Main"}}},[t._v("COMB")])],1),t._v(" "),n("dropdown",{staticClass:"top-nav_user right",attrs:{title:"标题啊",img:"/static/images/user-head.jpg"}},[n("div",[t._v("列表1")]),t._v(" "),n("div",[t._v("列表2")]),t._v(" "),n("div",[t._v("列表3")]),t._v(" "),n("div",[t._v("列表4")])])],1),t._v(" "),n("nav",{staticClass:"left-nav"},[n("tree",{attrs:{data:t.navdata,collapse:""}})],1),t._v(" "),n("div",{staticClass:"view-box"},[n("router-view")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pages"},[n("div",{staticClass:"page-btn page-prev",class:[t.preveClass],on:{click:function(e){e.preventDefault(),t.itemSelect("prev")}}},[n("i",{staticClass:"ten-icon"},[t._v("")])]),t._v(" "),t._l(t.pagelist,function(e){return n("div",{staticClass:"page-btn",class:[t.activeClass(e)],on:{click:function(n){n.preventDefault(),t.itemSelect(e)}}},[t._v(t._s(e))])}),t._v(" "),n("div",{staticClass:"page-btn page-next",class:[t.nextClass],on:{click:function(e){e.preventDefault(),t.itemSelect("next")}}},[n("i",{staticClass:"ten-icon"},[t._v("")])])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"ten-fade"},on:{"after-enter":t.afterEnter,"before-leave":t.beforeLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"modal-wrapper"},[n("div",{class:[t.theme]},[t.title?n("div",{staticClass:"modal-header"},[t._t("title",[n("span",{staticClass:"modal-header_title"},[t._v(t._s(t.title))])])],2):t._e(),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("default",[t._v("这里是body内容")])],2),t._v(" "),t.buttons?n("div",{staticClass:"modal-footer align-right clearfix"},[t._t("footer",t._l(t.btns,function(e,a){return n("span",{staticClass:"waves-effect waves-green",class:[t.getBtnsClass(a)],on:{click:function(e){t.actions(a)}}},[t._v(t._s(e))])}))],2):t._e()])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-wrap",class:[t.themeClass]},[n("ul",{staticClass:"tab-label-group"},[t._l(t.labels,function(e,a){return n("li",{staticClass:"tab-label",class:{active:t.tabindex==a},on:{click:function(e){t.labelSelect(a,e)}}},[t._v(t._s(e))])}),t._v(" "),t.hasLine?n("li",{staticClass:"tab-line",style:{left:t.lineleft,width:t.linewidth}}):t._e()],2),t._v(" "),n("div",{staticClass:"tab-cont"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tips"},[n("transition",{attrs:{name:"ten-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"tips-tip",class:[t.point]},[t._t("tip",[n("span",{staticClass:"tips-tip_txt"},[t._v(t._s(t.text))])]),t._v(" "),n("div",{staticClass:"tips-tip_arrow",class:[t.point]})],2)]),t._v(" "),n("div",{staticClass:"tip-cont",on:{mouseenter:function(e){e.preventDefault(),t.msenter(e)},mouseleave:function(e){e.preventDefault(),t.msleave(e)}}},[t._t("default")],2)],1)},staticRenderFns:[]}},,function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var a=n(74),i=n.n(a);i.a.install=function(t){t.component(i.a.name,i.a)},e.a=i.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(30),i=n(48),s=n.n(i),l=n(49),o=n.n(l),r=n(51),c=n(50);a.a.prototype.$http=s.a,a.a.config.productionTip=!1,a.a.use(c.a),new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:o.a}})},function(t,e,n){"use strict";var a=n(46),i=n.n(a),s=n(47),l=n.n(s),o=function(){function t(e,n){i()(this,t),this.vm=e,this.cb=n}return l()(t,[{key:"addDomEvent",value:function(){var t=this,e=function(e){t.domClickAc(e)};this.tempaction=e,document.addEventListener("click",e)}},{key:"delDomEvent",value:function(){document.removeEventListener("click",this.tempaction)}},{key:"domClickAc",value:function(t){this.vm.$el.contains(t.target)||(this.delDomEvent(),this.cb.apply(this.vm))}}]),t}();e.a=function(t,e){return new o(t,e)}},function(t,e,n){"use strict";function a(t){return null!==t&&t===t.window}function i(t){return a(t)?t:9===t.nodeType&&t.defaultView}function s(t){var e={top:0,left:0},n=t&&t.ownerDocument,a=n.documentElement;"undefined"!==u()(t.getBoundingClientRect)&&(e=t.getBoundingClientRect());var s=i(n);return{top:e.top+s.pageYOffset-a.clientTop,left:e.left+s.pageXOffset-a.clientLeft}}function l(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function o(t){if(!1===h.allowEvent(t))return null;for(var e=null,n=t.target||t.srcElement;null!==n.parentElement;){if(!(n instanceof SVGElement||-1===n.className.indexOf("waves-effect"))){e=n;break}if(n.classList.contains("waves-effect")){e=n;break}n=n.parentElement}return e}function r(t){var e=o(t);null!==e&&(p.show(t,e),"ontouchstart"in window&&(e.addEventListener("touchend",p.hide,!1),e.addEventListener("touchcancel",p.hide,!1)),e.addEventListener("mouseup",p.hide,!1),e.addEventListener("mouseleave",p.hide,!1))}var c=n(141),u=n.n(c),d=d||{},f=document.querySelectorAll.bind(document),p={duration:750,show:function(t,e){if(2===t.button)return!1;var n=e||this,a=document.createElement("div");a.className="waves-ripple",n.appendChild(a);var i=s(n),o=t.pageY-i.top,r=t.pageX-i.left,c="scale("+n.clientWidth/100*10+")";"touches"in t&&(o=t.touches[0].pageY-i.top,r=t.touches[0].pageX-i.left),a.setAttribute("data-hold",Date.now()),a.setAttribute("data-scale",c),a.setAttribute("data-x",r),a.setAttribute("data-y",o);var u={top:o+"px",left:r+"px"};a.className=a.className+" waves-notransition",a.setAttribute("style",l(u)),a.className=a.className.replace("waves-notransition",""),u["-webkit-transform"]=c,u["-moz-transform"]=c,u["-ms-transform"]=c,u["-o-transform"]=c,u.transform=c,u.opacity="1",u["-webkit-transition-duration"]=p.duration+"ms",u["-moz-transition-duration"]=p.duration+"ms",u["-o-transition-duration"]=p.duration+"ms",u["transition-duration"]=p.duration+"ms",u["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",u["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",u["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",u["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",a.setAttribute("style",l(u))},hide:function(t){h.touchup(t);var e=this,n=null,a=e.getElementsByClassName("waves-ripple");if(!(a.length>0))return!1;n=a[a.length-1];var i=n.getAttribute("data-x"),s=n.getAttribute("data-y"),o=n.getAttribute("data-scale"),r=Date.now()-Number(n.getAttribute("data-hold")),c=350-r;c<0&&(c=0),setTimeout(function(){var t={top:s+"px",left:i+"px",opacity:"0","-webkit-transition-duration":p.duration+"ms","-moz-transition-duration":p.duration+"ms","-o-transition-duration":p.duration+"ms","transition-duration":p.duration+"ms","-webkit-transform":o,"-moz-transform":o,"-ms-transform":o,"-o-transform":o,transform:o};n.setAttribute("style",l(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},p.duration)},c)},wrapInput:function(t){for(var e=0;e<t.length;e++){var n=t[e];if("input"===n.tagName.toLowerCase()){var a=n.parentNode;if("i"===a.tagName.toLowerCase()&&-1!==a.className.indexOf("waves-effect"))continue;var i=document.createElement("i");i.className=n.className+" waves-input-wrapper";var s=n.getAttribute("style");s||(s=""),i.setAttribute("style",s),n.className="waves-button-input",n.removeAttribute("style"),a.replaceChild(i,n),i.appendChild(n)}}}},h={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?h.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){h.touches>0&&(h.touches-=1)},500):"mousedown"===t.type&&h.touches>0&&(e=!1),e},touchup:function(t){h.allowEvent(t)}};d.displayEffect=function(t){t=t||{},"duration"in t&&(p.duration=t.duration),p.wrapInput(f(".waves-effect")),"ontouchstart"in window&&document.body.addEventListener("touchstart",r,!1),document.body.addEventListener("mousedown",r,!1)},d.attach=function(t){"input"===t.tagName.toLowerCase()&&(p.wrapInput([t]),t=t.parentElement),"ontouchstart"in window&&t.addEventListener("touchstart",r,!1),t.addEventListener("mousedown",r,!1)},document.addEventListener("DOMContentLoaded",function(){d.displayEffect()},!1)},function(t,e,n){"use strict";var a=n(75),i=n.n(a);i.a.install=function(t){t.component(i.a.name,i.a)},e.a=i.a},function(t,e,n){"use strict";var a=n(76),i=n.n(a);i.a.install=function(t){t.component(i.a.name,i.a)},e.a=i.a},function(t,e,n){"use strict";var a=n(77),i=n.n(a),s=n(78),l=n.n(s),o=n(79),r=n.n(o);e.a={Checkbox:i.a,FileInput:l.a,TSelect:r.a,install:function(t){for(var e in this)if("install"!==e){var n=this[e];n&&t.component(n.name,n)}}}},function(t,e,n){"use strict";var a=n(46),i=n.n(a),s=n(47),l=n.n(s),o=function(){function t(e){i()(this,t),this.vm=e,this.setDefault()}return l()(t,[{key:"setDefault",value:function(){for(var t=-1;++t<this.vm.data.length;){if(this.vm.data[t].active){this.setActive(t,this.vm.$el.querySelectorAll(".select-opation_item")[t]);break}}}},{key:"itemSelect",value:function(t,e){-1===e.target.className.split(" ").indexOf("disabled")&&(-1===e.target.className.split(" ").indexOf("active")&&(this.vm.$el.querySelector(".select-opation").style.top=this.vm.$el.querySelector(".select-label").clientHeight+"px",this.setActive(t,e.target)),this.vm.hide())}},{key:"setActive",value:function(t,e){for(var n=this.vm.$el.querySelector(".select-opation").querySelectorAll(".active"),a=-1;++a<n.length;)n[a].className=n[a].className.replace(" active","");e.className+=" active",this.vm.value=e.getAttribute("value"),this.vm.$el.querySelector(".select-label_label").innerHTML=e.innerHTML,this.vm.label=e.innerHTML,this.vm.key=t,this.vm.$emit("change",this.vm.label,this.vm.value,this.vm.key)}}]),t}();e.a=function(t){return new o(t)}},function(t,e,n){"use strict";var a=n(80),i=n.n(a);i.a.install=function(t){t.component(i.a.name,i.a)},e.a=i.a},function(t,e,n){"use strict";var a=n(81),i=n.n(a);i.a.install=function(t){t.component(i.a.name,i.a)},e.a=i.a},function(t,e,n){"use strict";var a=n(82),i=n.n(a);i.a.install=function(t){t.component(i.a.name,i.a)},e.a=i.a},function(t,e,n){"use strict";var a=n(83),i=n.n(a);i.a.install=function(t){t.component(i.a.name,i.a)},e.a=i.a},function(t,e,n){"use strict";var a=n(84),i=n.n(a);i.a.install=function(t){t.component(i.a.name,i.a)},e.a=i.a},function(t,e,n){"use strict";var a=n(85),i=n.n(a);i.a.install=function(t){t.component(i.a.name,i.a)},e.a=i.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{navdata:[{label:"服务器",icon:"&#xe698;",children:[{label:"集群",icon:"&#xe763;",link:"/#/cluster"},{label:"应用",icon:"&#xe6f0;",link:"/#/apps"}]},{label:"项目",link:"/#/project",icon:"&#xe62c;"},{label:"仓库",icon:"&#xe6ea;",children:[{label:"镜像仓库",icon:"&#xe696;",link:"/#/hub"},{label:"文件仓库",icon:"&#xe610;",link:"/#/filehub"}]}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{pageChange:function(t){console.log(t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Search"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={success:{icon:"&#xe690;",class:"green"},info:{icon:"&#xe692;",class:"blue"},warning:{icon:"&#xe691;",class:"amber darken-3"},error:{icon:"&#xe693;",class:"red"}};e.default={name:"Alert",props:{title:{type:String,default:"",required:!0},description:{type:String,default:""},type:{type:String,default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:"&#xe6ac;"},showIcon:{type:Boolean,default:!1}},data:function(){return{visible:!0}},methods:{close:function(){this.visible=!1,this.$emit("close")}},computed:{typeClass:function(){return a[this.type].class},iconClass:function(){return a[this.type].icon||""},isBigIcon:function(){return this.description?"is-big":""},isBoldTitle:function(){return this.description?"is-bold":""}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Dropdown",props:{title:{type:String},icon:{type:String,default:""},img:{type:String,default:""},type:{type:String,default:"hover"}},mounted:function(){for(var t=document.querySelector(".dropdown-items").children,e=-1;++e<t.length;){t[e].className+="dropdown-item"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Checkbox",props:{label:{type:String,default:""},name:{type:String,default:""},theme:{type:String,default:""}},data:function(){return{rndid:"v-"+parseInt(Math.random()*Math.random()*1e4)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Fileinput",props:{accept:{type:String,default:"image/png,image/gif,image/jpg,image/jpeg"},showview:{type:Boolean,default:!0}},data:function(){return{elfile:"",filename:"",base64:""}},methods:{change:function(t){this.elfile=t.target,this.filename=this.elfile.value.match(/\\([^\\]+\.\S+)/)[1],this.readfile(this.elfile.files[0])},readfile:function(t){var e=this,n=new FileReader;n.readAsDataURL(t),n.onload=function(){e.base64=this.result}}},computed:{canReadFile:function(){return"undefined"!=typeof FileReader},isImage:function(){return!/image\/\w+/.test(this.elfile.type)},canPreView:function(){return this.showview&&(this.base64||this.filename)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(144),i=n(149);e.default={name:"Tselect",props:{data:{type:Array,required:!0},maxHeight:{type:String,default:"185px"}},data:function(){return{value:"请选择",label:"请选择",key:-1}},watch:{data:function(t,e){var n=this;setTimeout(function(){n.tselect.setDefault()},100)}},methods:{itemSelect:function(t,e){this.tselect.itemSelect(t,e),this.ndd.delDomEvent()},opationAc:function(){-1!==this.$el.className.split(" ").indexOf("active")?this.hide():this.show()},show:function(){this.$el.className+=" active",this.ndd.addDomEvent()},hide:function(){this.$el.className=this.$el.className.replace(" active","")}},mounted:function(){this.ndd=n.i(a.a)(this,this.hide),this.tselect=n.i(i.a)(this)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Modal",props:{title:{type:String,default:""},theme:{type:String,default:"modal"},buttons:{type:String,default:""},buttonsClass:{type:String,default:""},postdata:{type:String,default:""}},data:function(){return{visible:!1,btnsClass:[]}},methods:{actions:function(t){var e=this.btns.length-t-1;this.$emit("callback",e,this.postdata),this.close()},show:function(){this.visible=!0,document.body.style.overflow="hidden"},close:function(){this.visible=!1,document.body.style.overflow="auto"},afterEnter:function(){this.$modaldom.className+=" active"},beforeLeave:function(){this.$modaldom.className=this.$modaldom.className.replace(" active","")},getBtnsClass:function(t){var e="btn-flat";return 0===this.btnsClass.length&&(this.btnsClass=this.buttonsClass.split(",").reverse()),this.btnsClass.length>0&&(e=this.btnsClass[t]),e||(e="btn-flat"),e}},computed:{btns:function(){return this.buttons.split(",").reverse()}},mounted:function(){this.$modaldom=this.$el.querySelector("."+this.theme)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Pages",props:{allpage:{type:Number,required:!0},nowpage:{type:Number,required:!0},shownum:{type:Number,default:5}},data:function(){return{pagenum:null,vnum:0}},methods:{itemSelect:function(t){"prev"!==t&&"next"!==t||this.prevOrNext(t),isNaN(parseInt(t))||(this.pagenum=t)},prevOrNext:function(t){"prev"===t&&this.pagenum>1&&this.pagenum--,"next"===t&&this.pagenum<this.allpage&&this.pagenum++},activeClass:function(t){return this.pagenum===parseInt(t)?"active":"..."!==t?"waves-effect":"normal"}},watch:{pagenum:function(t,e){null!==e&&t!==e&&this.$emit("change",t)}},computed:{preveClass:function(){return 1===this.pagenum?"disabled":"waves-effect"},nextClass:function(){return this.pagenum===this.allpage?"disabled":"waves-effect"},pagelist:function(){var t=[],e=this.pagenum-this.vnum,n=this.pagenum+this.vnum;for(e<1&&(n=n-e+1,e=1),n>this.allpage&&(e-=n-this.allpage,n=this.allpage),e-1>=1&&(t.push(1),t.push("..."));e<=n;)t.push(e),e++;return this.allpage-n>=1&&(t.push("..."),t.push(this.allpage)),t}},mounted:function(){this.pagenum=this.nowpage,this.vnum=parseInt(this.shownum/2)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Percentage",props:{used:{required:!0,type:Number},free:{required:!0,type:Number},usedColor:{type:String,default:"#45c8dc"},freeColor:{type:String,default:"#988fd8"},lineWidth:{required:!0,type:Number,default:3},height:{required:!0,type:Number,default:300},width:{required:!0,type:Number,default:300}},mounted:function(){function t(t,e,n,a){s.beginPath(),s.arc(t/2,e/2,e/2-n/2,-Math.PI/2,2*Math.PI*a-Math.PI/2,!1),s.stroke()}var e=this.used+this.free,n=this.used/e,a=this.width/10,i=this.$el.childNodes[0],s=i.getContext("2d");i.width=this.width,i.height=this.height,s.clearRect(0,0,this.width,this.height),s.beginPath(),s.moveTo(this.width/2,this.height/2),s.arc(this.width/2,this.height/2,this.height/2,0,2*Math.PI,!1),s.closePath(),s.fillStyle=this.freeColor,s.fill(),s.beginPath(),s.lineCap="round",s.lineWidth=this.lineWidth,s.strokeStyle=this.usedColor,s.closePath(),s.fill(),s.beginPath(),s.moveTo(this.width/2,this.height/2),s.arc(this.width/2,this.height/2,this.height/2-this.lineWidth,0,2*Math.PI,!1),s.closePath(),s.fillStyle="#fff",s.fill(),s.font="bold "+a+"pt Arial",s.fillStyle=this.usedColor,s.textAlign="center",s.textBaseline="middle";var l=null,o=0,r=.01,c=0,u=0,d=parseInt(.01/r);!function(e,n,i,f){l=setInterval(function(){o>f?clearInterval(l):(t(e,n,i,o),c%d==0&&u/100<f&&(s.clearRect(e/2-2*a,n/2-2*a,4*a,4*a),s.moveTo(e/2,n/2),s.fillText(u+"%",e/2,n/2),u+=1),u/100>=f&&(s.clearRect(e/2-2*a,n/2-2*a,4*a,4*a),s.moveTo(e/2,n/2),s.fillText((100*f+"").slice(0,4)+"%",e/2,n/2)),c+=1,o+=r)},15)}(this.width,this.height,this.lineWidth,n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={default:"tab-theme-default",block:"tab-theme-block"};e.default={name:"Tabs",data:function(){return{tabindex:-1,lineleft:0,linewidth:0}},props:{labels:{type:Array,default:[]},tabkey:{type:Number,default:0},theme:{type:String,default:"default"}},methods:{labelSelect:function(t,e){this.tabindex=t,this.linestyle(e.target)},linestyle:function(t){this.lineleft=t.offsetLeft+"px",this.linewidth=t.clientWidth+"px";for(var e=this.$el.querySelector(".tab-cont").children,n=-1;++n<e.length;){var a=e[n];this.tabindex===n?a.className+=" active":a.className=a.className.replace(" active","")}},initTabContItem:function(){for(var t=this.$el.querySelector(".tab-cont").children,e=-1;++e<t.length;){var n=t[e];-1===n.className.indexOf("tab-cont_item")&&(n.className+="tab-cont_item")}}},created:function(){this.tabindex=this.tabkey},mounted:function(){this.initTabContItem(),this.linestyle(this.$el.querySelector(".tab-label-group .active"))},computed:{themeClass:function(){return a[this.theme]},hasLine:function(){return"default"===this.theme}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Tips",props:{point:{type:String,default:"tip-up"},text:{type:String,default:""}},data:function(){return{visible:!1}},methods:{msenter:function(){this.visible=!0},msleave:function(){this.visible=!1}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(86),i=n.n(a);e.default={name:"Tree",props:{data:{type:Array,required:!0},collapse:{type:Boolean,default:!1}},components:{TreeNode:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"TreeNode",props:{node:{type:Object},collapse:{type:Boolean,default:!1},nodeIdx:{type:String}},methods:{nodeSelect:function(t){}}}}]),[143]);
//# sourceMappingURL=app.66292c7587010796dfa7.js.map