webpackJsonp([7],{129:function(e,n,t){var s=t(23)(t(170),t(146),null,null);e.exports=s.exports},146:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"main"},[t("m-btn",{nativeOn:{click:function(n){e.sendSocket(n)}}},[e._v("send")])],1)},staticRenderFns:[]}},170:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=new WebSocket("ws://192.168.1.116:8010/api/server/new");n.default={name:"Main",methods:{sendSocket:function(){s.send("hello this is send")}},created:function(){s.onopen=function(e){s.send("I am the client and I'm listening!"),s.onmessage=function(e){console.log("Client received a message",e)},s.onclose=function(e){console.log("Client notified socket has closed",e)}}}}}});
//# sourceMappingURL=7.1e86c80d32d1cb5a6324.js.map