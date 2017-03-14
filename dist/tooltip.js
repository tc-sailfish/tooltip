(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Tooltip=e():t.Tooltip=e()})(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=7)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n.n(o);window.Vue&&window.Vue.component(r.a.name,r.a),e.default=r.a},function(t,e,n){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=n.n(r),s=n(2);e.default={name:"tooltip",prefix:"",props:{placement:{type:String,default:"bottom"},delay:{type:Number,default:200},content:{type:String,default:""},manual:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},value:{type:Boolean,default:!1}},data:function(){return{isShow:!1,timeoutId:""}},render:function(t){return t("span",{class:[].concat(o(this.cn())),on:{mouseenter:this.manual?this.fn:this.show,mouseleave:this.manual?this.fn:this.hide}},[this.$slots.default,t("transition",{attrs:{name:"fade"}},[t("div",{class:[].concat(o(this.cn("content"))),ref:"content",directives:[{name:"show",value:!this.disabled&&(this.manual?this.value:this.isShow)}]},[this.$slots.content||this.content,t("span",{class:[].concat(o(this.cn("arrow"))),ref:"arrow"},[])])])])},mounted:function(){this.popper=new i.a(this.$el,this.$refs.content,{placement:this.placement,modifiers:{arrow:{element:this.$refs.arrow}}})},methods:{cn:function(t,e){return n.i(s.a)({prefix:this.$options.prefix,block:this.$options.name,module:t,state:e})},fn:function(){},show:function(){this.isShow=!0,this.popper.update(),clearTimeout(this.timeoutId)},hide:function(){var t=this;this.timeoutId=setTimeout(function(){t.isShow=!1},this.delay)}}}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=function(t){var e=t.block,n=t.module,o=t.state,r="";return r+=e,n&&(r+="__"+n),o&&(r+="--"+o),r},r=function(t){var e=t.prefix,n=t.block,r=t.module,i=t.state;return e?[o({block:n,module:r,state:i}),e+"-"+o({block:n,module:r,state:i})]:[o({block:n,module:r,state:i})]}},function(t,e,n){(function(e,n){t.exports=n()})(0,function(){"use strict";function t(t){var e=t.offsetParent,n=e&&e.nodeName;return n&&"BODY"!==n&&"HTML"!==n?e:window.document.documentElement}function e(t,e){if(1!==t.nodeType)return[];var n=window.getComputedStyle(t,null);return e?n[e]:n}function n(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function o(t){if(!t||["HTML","BODY","#document"].indexOf(t.nodeName)!==-1)return window.document.body;var r=e(t),i=r.overflow,s=r.overflowX,f=r.overflowY;return/(auto|scroll)/.test(i+f+s)?t:o(n(t))}function r(t){var o=t.nodeName;return"BODY"!==o&&"HTML"!==o&&("fixed"===e(t,"position")||r(n(t)))}function i(e){return r(t(e))?"fixed":"absolute"}function s(t,e){var n="x"===e?"Left":"Top",o="Left"===n?"Right":"Bottom";return Number(t["border"+n+"Width"].split("px")[0])+Number(t["border"+o+"Width"].split("px")[0])}function f(t){var n=navigator.appVersion.indexOf("MSIE 10")!==-1,o=void 0;if(n)try{o=t.getBoundingClientRect()}catch(t){o={}}else o=t.getBoundingClientRect();var r={left:o.left,top:o.top,right:o.right,bottom:o.bottom,width:o.right-o.left,height:o.bottom-o.top};if("HTML"===t.nodeName&&n){var i=window.document.documentElement,f=i.scrollTop,a=i.scrollLeft;r.top-=f,r.bottom-=f,r.left-=a,r.right-=a}var p=o.width-(t.clientWidth||o.right-o.left),u=o.height-(t.clientHeight||o.bottom-o.top);if(p||u){var l=e(t);p-=s(l,"x"),u-=s(l,"y")}return r.right-=p,r.width-=p,r.bottom-=u,r.height-=u,r}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",o=t.nodeName;if("BODY"===o||"HTML"===o){var r=window.document.documentElement;return(window.document.scrollingElement||r)[n]}return t[n]}function p(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=a(e,"top"),r=a(e,"left"),i=n?-1:1;return t.top+=o*i,t.bottom+=o*i,t.left+=r*i,t.right+=r*i,t}function u(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=o(r),u=f(n),l=f(r),d={top:u.top-l.top,left:u.left-l.left,bottom:u.top-l.top+u.height,right:u.left-l.left+u.width,width:u.width,height:u.height};i&&!s?d=p(d,a,!0):t(n).contains(a)&&"BODY"!==a.nodeName&&(d=p(d,r));var c=e(r),h=Number(c.borderTopWidth.split("px")[0]),m=Number(c.borderLeftWidth.split("px")[0]);return d.top-=h,d.bottom-=h,d.left-=m,d.right-=m,d}function l(){var t=window.document.body,e=window.document.documentElement;return{height:Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight),width:Math.max(t.scrollWidth,t.offsetWidth,e.clientWidth,e.scrollWidth,e.offsetWidth)}}function d(t){var e=void 0;if("HTML"===t.nodeName){var n=l();e={width:n.width,height:n.height,left:0,top:0}}else e={width:t.offsetWidth,height:t.offsetHeight,left:t.offsetLeft,top:t.offsetTop};return e.right=e.left+e.width,e.bottom=e.top+e.height,e}function c(e){var n=d(e);if("HTML"!==e.nodeName){var o=t(e),r=c(o);return{width:n.offsetWidth,height:n.offsetHeight,left:n.left+r.left,top:n.top+r.top,right:n.right-r.right,bottom:n.bottom-r.bottom}}return n}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",r=o(t),i=a(r,e);return["BODY","HTML"].indexOf(r.nodeName)===-1?i+h(n(r),e):i}function m(e,s,f){var a={top:0,left:0},p=t(e);if("viewport"===f){var d=c(p),m=d.left,v=d.top,b=window.document.documentElement,g=b.clientWidth,w=b.clientHeight;if("fixed"===i(e))a.right=g,a.bottom=w;else{a={top:0-v,right:g-m+h(e,"left"),bottom:w-v+h(e,"top"),left:0-m}}}else{var y=void 0;if(y="scrollParent"===f?o(n(e)):"window"===f?window.document.body:f,"BODY"===y.nodeName){var x=l(),O=x.height,E=x.width;a.right=E,a.bottom=O}else a=u(y,p,r(e))}return a.left+=s,a.top+=s,a.right-=s,a.bottom-=s,a}function v(t,e,n){if(t.indexOf("auto")===-1)return t;var o=m(n,0,"scrollParent"),r={top:e.top-o.top,right:o.right-e.right,bottom:o.bottom-e.bottom,left:e.left-o.left},i=Object.keys(r).sort(function(t,e){return r[e]-r[t]})[0],s=t.split("-")[1];return i+(s?"-"+s:"")}function b(t){var e=!1,n=0,o=document.createElement("span");return new MutationObserver(function(){t(),e=!1}).observe(o,{attributes:!0}),function(){e||(e=!0,o.setAttribute("x-index",n),n+=1)}}function g(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Z))}}function w(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function y(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var o=w(t,function(t){return t[e]===n});return t.indexOf(o)}function x(t){return st({},t,{right:t.left+t.width,bottom:t.top+t.height})}function O(t){var e=window.getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),o=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+o,height:t.offsetHeight+n}}function E(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function N(t,e,n,o){o=o.split("-")[0];var r=O(e),i={position:t,width:r.width,height:r.height},s=["right","left"].indexOf(o)!==-1,f=s?"top":"left",a=s?"left":"top",p=s?"height":"width",u=s?"width":"height";return i[f]=n[f]+n[p]/2-r[p]/2,i[a]=o===a?n[a]-r[u]:n[E(a)],i}function M(e,n,o){var r="fixed"===e.position,i=e.isParentTransformed;return u(o,t(r&&i?o:n),r,i)}function T(t){for(var e=[!1,"ms","webkit","moz","o"],n=t.charAt(0).toUpperCase()+t.slice(1),o=0;o<e.length-1;o++){var r=e[o],i=r?""+r+n:t;if(void 0!==window.document.body.style[i])return i}return null}function L(t){var e={};return t&&"[object Function]"===e.toString.call(t)}function P(t,e){return t.some(function(t){var n=t.name;return t.enabled&&n===e})}function k(t,e,n){var o=w(t,function(t){return t.name===e});return!!o&&t.some(function(t){return t.name===n&&t.enabled&&t.order<o.order})}function B(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function S(t){return"BODY"!==t.nodeName&&("none"!==e(t,"transform")||(n(t)?S(n(t)):t))}function j(t,e){return window.removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}function A(t,e,n){return(void 0===n?t:t.slice(0,y(t,"name",n))).forEach(function(t){t.enabled&&L(t.function)&&(e=t.function(e,t))}),e}function W(t,e){Object.keys(e).forEach(function(n){e[n]!==!1?t.setAttribute(n,e[n]):t.removeAttribute(n)})}function H(t,e){Object.keys(e).forEach(function(n){var o="";["width","height","top","right","bottom","left"].indexOf(n)!==-1&&B(e[n])&&(o="px"),t.style[n]=e[n]+o})}function C(t,e,n,r){var i="BODY"===t.nodeName,s=i?window:t;s.addEventListener(e,n,{passive:!0}),i||C(o(s.parentNode),e,n,r),r.push(s)}function D(t,e,n,r){n.updateBound=r,window.addEventListener("resize",n.updateBound,{passive:!0});var i=o(t);return C(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}function R(t,e){var n={position:t.offsets.popper.position},o={"x-placement":t.placement},r=Math.round(t.offsets.popper.left),i=Math.round(t.offsets.popper.top),s=T("transform");return e.gpuAcceleration&&s?(n[s]="translate3d("+r+"px, "+i+"px, 0)",n.top=0,n.left=0,n.willChange="transform"):(n.left=r,n.top=i,n.willChange="top, left"),H(t.instance.popper,st({},n,t.styles)),W(t.instance.popper,st({},o,t.attributes)),t.offsets.arrow&&H(t.arrowElement,t.offsets.arrow),t}function F(t,e,n,o,r){var i=M(r,e,t);return n.placement=v(n.placement,i,e),e.setAttribute("x-placement",n.placement),n}function I(t,e){if(!k(t.instance.modifiers,"arrow","keepTogether"))return console.warn("WARNING: `keepTogether` modifier is required by arrow modifier in order to work, be sure to include it before `arrow`!"),t;var n=e.element;if("string"==typeof n){if(!(n=t.instance.popper.querySelector(n)))return t}else if(!t.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],r=x(t.offsets.popper),i=t.offsets.reference,s=["left","right"].indexOf(o)!==-1,f=s?"height":"width",a=s?"top":"left",p=s?"left":"top",u=s?"bottom":"right",l=O(n)[f];i[u]-l<r[a]&&(t.offsets.popper[a]-=r[a]-(i[u]-l)),i[a]+l>r[u]&&(t.offsets.popper[a]+=i[a]+l-r[u]);var d=i[a]+i[f]/2-l/2,c=d-x(t.offsets.popper)[a];return c=Math.max(Math.min(r[f]-l,c),0),t.arrowElement=n,t.offsets.arrow={},t.offsets.arrow[a]=c,t.offsets.arrow[p]="",t}function Y(t){return"end"===t?"start":"start"===t?"end":t}function _(t,e){if(P(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=m(t.instance.popper,e.padding,e.boundariesElement),o=t.placement.split("-")[0],r=E(o),i=t.placement.split("-")[1]||"",s=[];return s="flip"===e.behavior?[o,r]:e.behavior,s.forEach(function(f,a){if(o!==f||s.length===a+1)return t;o=t.placement.split("-")[0],r=E(o);var p=x(t.offsets.popper),u=t.offsets.reference,l=Math.floor,d="left"===o&&l(p.right)>l(u.left)||"right"===o&&l(p.left)<l(u.right)||"top"===o&&l(p.bottom)>l(u.top)||"bottom"===o&&l(p.top)<l(u.bottom),c=l(p.left)<l(n.left),h=l(p.right)>l(n.right),m=l(p.top)<l(n.top),v=l(p.bottom)>l(n.bottom),b="left"===o&&c||"right"===o&&h||"top"===o&&m||"bottom"===o&&v,g=["top","bottom"].indexOf(o)!==-1,w=!!e.flipVariations&&(g&&"start"===i&&c||g&&"end"===i&&h||!g&&"start"===i&&m||!g&&"end"===i&&v);(d||b||w)&&(t.flipped=!0,(d||b)&&(o=s[a+1]),w&&(i=Y(i)),t.placement=o+(i?"-"+i:""),t.offsets.popper=N(t.instance.state.position,t.instance.popper,t.offsets.reference,t.placement),t=A(t.instance.modifiers,t,"flip"))}),t}function $(t){var e=x(t.offsets.popper),n=t.offsets.reference,o=t.placement.split("-")[0],r=Math.floor,i=["top","bottom"].indexOf(o)!==-1,s=i?"right":"bottom",f=i?"left":"top",a=i?"width":"height";return e[s]<r(n[f])&&(t.offsets.popper[f]=r(n[f])-e[a]),e[f]>r(n[s])&&(t.offsets.popper[f]=r(n[s])),t}function q(t,e){var n=t.placement,o=t.offsets.popper,r=void 0;return B(e.offset)?r=[e.offset,0]:(r=e.offset.split(" "),r=r.map(function(e,o){var r=e.match(/(\d*\.?\d*)(.*)/),i=+r[1],s=r[2],f=n.indexOf("right")!==-1||n.indexOf("left")!==-1;1===o&&(f=!f);var a=f?"height":"width";if(0===s.indexOf("%")){var p=void 0;switch(s){case"%p":p=t.offsets.popper;break;case"%":case"$r":default:p=t.offsets.reference}return x(p)[a]/100*i}if("vh"===s||"vw"===s){return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i}return"px"===s?+i:+e})),t.placement.indexOf("left")!==-1?(o.top+=r[0],o.left-=r[1]||0):t.placement.indexOf("right")!==-1?(o.top+=r[0],o.left+=r[1]||0):t.placement.indexOf("top")!==-1?(o.left+=r[0],o.top-=r[1]||0):t.placement.indexOf("bottom")!==-1&&(o.left+=r[0],o.top+=r[1]||0),t}function U(e,n){var o=n.boundariesElement||t(e.instance.popper),r=m(e.instance.popper,n.padding,o);n.boundaries=r;var i=n.priority,s=x(e.offsets.popper),f={primary:function(t){var e=s[t];return s[t]<r[t]&&!n.escapeWithReference&&(e=Math.max(s[t],r[t])),it({},t,e)},secondary:function(t){var e="right"===t?"left":"top",o=s[e];return s[t]>r[t]&&!n.escapeWithReference&&(o=Math.min(s[e],r[t]-("right"===t?s.width:s.height))),it({},e,o)}};return i.forEach(function(t){s=st({},s,f[["left","top"].indexOf(t)!==-1?"primary":"secondary"](t))}),e.offsets.popper=s,e}function z(t){var e=t.placement,n=e.split("-")[0],o=e.split("-")[1];if(o){var r=t.offsets.reference,i=x(t.offsets.popper),s=["bottom","top"].indexOf(n)!==-1,f=s?"left":"top",a=s?"width":"height",p={start:it({},f,r[f]),end:it({},f,r[f]+r[a]-i[a])};t.offsets.popper=st({},i,p[o])}return t}function V(t){if(!k(t.instance.modifiers,"hide","preventOverflow"))return console.warn("WARNING: preventOverflow modifier is required by hide modifier in order to work, be sure to include it before hide!"),t;var e=t.offsets.reference,n=w(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(t.hide===!0)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(t.hide===!1)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}function G(t){var e=t.placement,n=e.split("-")[0],o=x(t.offsets.popper),r=x(t.offsets.reference),i=["left","right"].indexOf(n)!==-1,s=["top","left"].indexOf(n)===-1;return o[i?"left":"top"]=r[e]-(s?o[i?"width":"height"]:0),t.placement=E(e),t.offsets.popper=x(o),t}for(var X=["native code","[object MutationObserverConstructor]"],J=function(t){return X.some(function(e){return(t||"").toString().indexOf(e)>-1})},K="undefined"!=typeof window,Q=["Edge","Trident","Firefox"],Z=0,tt=0;tt<Q.length;tt+=1)if(K&&navigator.userAgent.indexOf(Q[tt])>=0){Z=1;break}var et=K&&J(window.MutationObserver),nt=et?b:g,ot=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},rt=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),it=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},st=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ft={computeAutoPlacement:v,debounce:nt,findIndex:y,getBordersSize:s,getBoundaries:m,getBoundingClientRect:f,getClientRect:x,getOffsetParent:t,getOffsetRect:d,getOffsetRectRelativeToCustomParent:u,getOuterSizes:O,getParentNode:n,getPopperOffsets:N,getPosition:i,getReferenceOffsets:M,getScroll:a,getScrollParent:o,getStyleComputedProperty:e,getSupportedPropertyName:T,getTotalScroll:h,getWindowSizes:l,includeScroll:p,isFixed:r,isFunction:L,isModifierEnabled:P,isModifierRequired:k,isNative:J,isNumeric:B,isTransformed:S,removeEventListeners:j,runModifiers:A,setAttributes:W,setStyles:H,setupEventListeners:D},at={shift:{order:100,enabled:!0,function:z},offset:{order:200,enabled:!0,function:q,offset:0},preventOverflow:{order:300,enabled:!0,function:U,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,function:$},arrow:{order:500,enabled:!0,function:I,element:"[x-arrow]"},flip:{order:600,enabled:!0,function:_,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,function:G},hide:{order:800,enabled:!0,function:V},applyStyle:{order:900,enabled:!0,gpuAcceleration:!0,function:R,onLoad:F}},pt={placement:"bottom",eventsEnabled:!0,onCreate:function(){},onUpdate:function(){},modifiers:at},ut=function(){function t(e,n){var o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ot(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=nt(this.update.bind(this)),this.options=st({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e.jquery?e[0]:e,this.popper=n.jquery?n[0]:n,this.modifiers=Object.keys(t.Defaults.modifiers).map(function(e){return st({name:e},t.Defaults.modifiers[e])}),this.modifiers=this.modifiers.map(function(t){return st({},t,r.modifiers&&r.modifiers[t.name]||{})}),r.modifiers&&(this.options.modifiers=st({},t.Defaults.modifiers,r.modifiers),Object.keys(r.modifiers).forEach(function(e){if(void 0===t.Defaults.modifiers[e]){var n=r.modifiers[e];n.name=e,o.modifiers.push(n)}})),this.state.position=i(this.reference),this.modifiers=this.modifiers.sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&L(t.onLoad)&&t.onLoad(o.reference,o.popper,o.options,t,o.state)}),this.state.isParentTransformed=S(this.popper.parentNode),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return rt(t,[{key:"update",value:function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};this.state.position=i(this.reference),H(this.popper,{position:this.state.position}),t.offsets.reference=M(this.state,this.popper,this.reference),t.placement=v(this.options.placement,t.offsets.reference,this.popper),t.originalPlacement=this.options.placement,t.offsets.popper=N(this.state,this.popper,t.offsets.reference,t.placement),t=A(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}},{key:"destroy",value:function(){return this.state.isDestroyed=!0,P(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[T("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}},{key:"enableEventListeners",value:function(){this.state.eventsEnabled||(this.state=D(this.reference,this.options,this.state,this.scheduleUpdate))}},{key:"disableEventListeners",value:function(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=j(this.reference,this.state))}}]),t}();return ut.Utils=ft,ut.placements=["auto","auto-start","auto-end","top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],ut.Defaults=pt,ut})},function(t,e){},function(t,e,n){n(4);var o=n(6)(n(1),null,null,null);t.exports=o.exports},function(t,e){t.exports=function(t,e,n,o){var r,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,i=t.default);var f="function"==typeof i?i.options:i;if(e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns),n&&(f._scopeId=n),o){var a=f.computed||(f.computed={});Object.keys(o).forEach(function(t){var e=o[t];a[t]=function(){return e}})}return{esModule:r,exports:i,options:f}}},function(t,e,n){t.exports=n(0)}])});
//# sourceMappingURL=tooltip.js.map