var Ad=Object.defineProperty;var Td=(e,n,t)=>n in e?Ad(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Q=(e,n,t)=>Td(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function Id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ja={exports:{}},Bl={},qa={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jr=Symbol.for("react.element"),Rd=Symbol.for("react.portal"),Ld=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),Md=Symbol.for("react.profiler"),Od=Symbol.for("react.provider"),Bd=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),Wd=Symbol.for("react.memo"),Hd=Symbol.for("react.lazy"),To=Symbol.iterator;function Qd(e){return e===null||typeof e!="object"?null:(e=To&&e[To]||e["@@iterator"],typeof e=="function"?e:null)}var eu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nu=Object.assign,tu={};function Rt(e,n,t){this.props=e,this.context=n,this.refs=tu,this.updater=t||eu}Rt.prototype.isReactComponent={};Rt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Rt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ru(){}ru.prototype=Rt.prototype;function Cs(e,n,t){this.props=e,this.context=n,this.refs=tu,this.updater=t||eu}var js=Cs.prototype=new ru;js.constructor=Cs;nu(js,Rt.prototype);js.isPureReactComponent=!0;var Io=Array.isArray,lu=Object.prototype.hasOwnProperty,Fs={current:null},iu={key:!0,ref:!0,__self:!0,__source:!0};function su(e,n,t){var r,l={},i=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(i=""+n.key),n)lu.call(n,r)&&!iu.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var o=Array(a),u=0;u<a;u++)o[u]=arguments[u+2];l.children=o}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:jr,type:e,key:i,ref:s,props:l,_owner:Fs.current}}function Vd(e,n){return{$$typeof:jr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function zs(e){return typeof e=="object"&&e!==null&&e.$$typeof===jr}function Xd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ro=/\/+/g;function ri(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Xd(""+e.key):n.toString(36)}function qr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case jr:case Rd:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+ri(s,0):r,Io(l)?(t="",e!=null&&(t=e.replace(Ro,"$&/")+"/"),qr(l,n,t,"",function(u){return u})):l!=null&&(zs(l)&&(l=Vd(l,t+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(Ro,"$&/")+"/")+e)),n.push(l)),1;if(s=0,r=r===""?".":r+":",Io(e))for(var a=0;a<e.length;a++){i=e[a];var o=r+ri(i,a);s+=qr(i,n,t,o,l)}else if(o=Qd(e),typeof o=="function")for(e=o.call(e),a=0;!(i=e.next()).done;)i=i.value,o=r+ri(i,a++),s+=qr(i,n,t,o,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Ir(e,n,t){if(e==null)return e;var r=[],l=0;return qr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function bd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},el={transition:null},Kd={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:el,ReactCurrentOwner:Fs};function ou(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Ir,forEach:function(e,n,t){Ir(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ir(e,function(){n++}),n},toArray:function(e){return Ir(e,function(n){return n})||[]},only:function(e){if(!zs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Rt;M.Fragment=Ld;M.Profiler=Md;M.PureComponent=Cs;M.StrictMode=Dd;M.Suspense=Ud;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kd;M.act=ou;M.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nu({},e.props),l=e.key,i=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,s=Fs.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(o in n)lu.call(n,o)&&!iu.hasOwnProperty(o)&&(r[o]=n[o]===void 0&&a!==void 0?a[o]:n[o])}var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){a=Array(o);for(var u=0;u<o;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:jr,type:e.type,key:l,ref:i,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:Bd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Od,_context:e},e.Consumer=e};M.createElement=su;M.createFactory=function(e){var n=su.bind(null,e);return n.type=e,n};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:$d,render:e}};M.isValidElement=zs;M.lazy=function(e){return{$$typeof:Hd,_payload:{_status:-1,_result:e},_init:bd}};M.memo=function(e,n){return{$$typeof:Wd,type:e,compare:n===void 0?null:n}};M.startTransition=function(e){var n=el.transition;el.transition={};try{e()}finally{el.transition=n}};M.unstable_act=ou;M.useCallback=function(e,n){return ve.current.useCallback(e,n)};M.useContext=function(e){return ve.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};M.useEffect=function(e,n){return ve.current.useEffect(e,n)};M.useId=function(){return ve.current.useId()};M.useImperativeHandle=function(e,n,t){return ve.current.useImperativeHandle(e,n,t)};M.useInsertionEffect=function(e,n){return ve.current.useInsertionEffect(e,n)};M.useLayoutEffect=function(e,n){return ve.current.useLayoutEffect(e,n)};M.useMemo=function(e,n){return ve.current.useMemo(e,n)};M.useReducer=function(e,n,t){return ve.current.useReducer(e,n,t)};M.useRef=function(e){return ve.current.useRef(e)};M.useState=function(e){return ve.current.useState(e)};M.useSyncExternalStore=function(e,n,t){return ve.current.useSyncExternalStore(e,n,t)};M.useTransition=function(){return ve.current.useTransition()};M.version="18.3.1";qa.exports=M;var P=qa.exports;const Zd=Id(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd=P,Yd=Symbol.for("react.element"),Jd=Symbol.for("react.fragment"),qd=Object.prototype.hasOwnProperty,ef=Gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nf={key:!0,ref:!0,__self:!0,__source:!0};function au(e,n,t){var r,l={},i=null,s=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)qd.call(n,r)&&!nf.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Yd,type:e,key:i,ref:s,props:l,_owner:ef.current}}Bl.Fragment=Jd;Bl.jsx=au;Bl.jsxs=au;Ja.exports=Bl;var c=Ja.exports,_i={},uu={exports:{}},Pe={},cu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(j,I){var R=j.length;j.push(I);e:for(;0<R;){var V=R-1>>>1,B=j[V];if(0<l(B,I))j[V]=I,j[R]=B,R=V;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var I=j[0],R=j.pop();if(R!==I){j[0]=R;e:for(var V=0,B=j.length,tt=B>>>1;V<tt;){var Ze=2*(V+1)-1,Bt=j[Ze],Te=Ze+1,rt=j[Te];if(0>l(Bt,R))Te<B&&0>l(rt,Bt)?(j[V]=rt,j[Te]=R,V=Te):(j[V]=Bt,j[Ze]=R,V=Ze);else if(Te<B&&0>l(rt,R))j[V]=rt,j[Te]=R,V=Te;else break e}}return I}function l(j,I){var R=j.sortIndex-I.sortIndex;return R!==0?R:j.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var o=[],u=[],d=1,h=null,f=3,y=!1,v=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(j){for(var I=t(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=j)r(u),I.sortIndex=I.expirationTime,n(o,I);else break;I=t(u)}}function x(j){if(k=!1,g(j),!v)if(t(o)!==null)v=!0,Ke(E);else{var I=t(u);I!==null&&On(x,I.startTime-j)}}function E(j,I){v=!1,k&&(k=!1,m(z),z=-1),y=!0;var R=f;try{for(g(I),h=t(o);h!==null&&(!(h.expirationTime>I)||j&&!ne());){var V=h.callback;if(typeof V=="function"){h.callback=null,f=h.priorityLevel;var B=V(h.expirationTime<=I);I=e.unstable_now(),typeof B=="function"?h.callback=B:h===t(o)&&r(o),g(I)}else r(o);h=t(o)}if(h!==null)var tt=!0;else{var Ze=t(u);Ze!==null&&On(x,Ze.startTime-I),tt=!1}return tt}finally{h=null,f=R,y=!1}}var N=!1,_=null,z=-1,W=5,T=-1;function ne(){return!(e.unstable_now()-T<W)}function Ce(){if(_!==null){var j=e.unstable_now();T=j;var I=!0;try{I=_(!0,j)}finally{I?mn():(N=!1,_=null)}}else N=!1}var mn;if(typeof p=="function")mn=function(){p(Ce)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,tn=Ot.port2;Ot.port1.onmessage=Ce,mn=function(){tn.postMessage(null)}}else mn=function(){A(Ce,0)};function Ke(j){_=j,N||(N=!0,mn())}function On(j,I){z=A(function(){j(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Ke(E))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(j){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var R=f;f=I;try{return j()}finally{f=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,I){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var R=f;f=j;try{return I()}finally{f=R}},e.unstable_scheduleCallback=function(j,I,R){var V=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?V+R:V):R=V,j){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=R+B,j={id:d++,callback:I,priorityLevel:j,startTime:R,expirationTime:B,sortIndex:-1},R>V?(j.sortIndex=R,n(u,j),t(o)===null&&j===t(u)&&(k?(m(z),z=-1):k=!0,On(x,R-V))):(j.sortIndex=B,n(o,j),v||y||(v=!0,Ke(E))),j},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(j){var I=f;return function(){var R=f;f=I;try{return j.apply(this,arguments)}finally{f=R}}}})(du);cu.exports=du;var tf=cu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf=P,_e=tf;function S(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fu=new Set,ur={};function qn(e,n){Ct(e,n),Ct(e+"Capture",n)}function Ct(e,n){for(ur[e]=n,e=0;e<n.length;e++)fu.add(n[e])}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pi=Object.prototype.hasOwnProperty,lf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lo={},Do={};function sf(e){return Pi.call(Do,e)?!0:Pi.call(Lo,e)?!1:lf.test(e)?Do[e]=!0:(Lo[e]=!0,!1)}function of(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function af(e,n,t,r){if(n===null||typeof n>"u"||of(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ye(e,n,t,r,l,i,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=s}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ue[n]=new ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var _s=/[\-:]([a-z])/g;function Ps(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(_s,Ps);ue[n]=new ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(_s,Ps);ue[n]=new ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(_s,Ps);ue[n]=new ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function As(e,n,t,r){var l=ue.hasOwnProperty(n)?ue[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(af(n,t,l,r)&&(t=null),r||l===null?sf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var pn=rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rr=Symbol.for("react.element"),ot=Symbol.for("react.portal"),at=Symbol.for("react.fragment"),Ts=Symbol.for("react.strict_mode"),Ai=Symbol.for("react.profiler"),pu=Symbol.for("react.provider"),hu=Symbol.for("react.context"),Is=Symbol.for("react.forward_ref"),Ti=Symbol.for("react.suspense"),Ii=Symbol.for("react.suspense_list"),Rs=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),mu=Symbol.for("react.offscreen"),Mo=Symbol.iterator;function $t(e){return e===null||typeof e!="object"?null:(e=Mo&&e[Mo]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,li;function Zt(e){if(li===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);li=n&&n[1]||""}return`
`+li+e}var ii=!1;function si(e,n){if(!e||ii)return"";ii=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),i=r.stack.split(`
`),s=l.length-1,a=i.length-1;1<=s&&0<=a&&l[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(l[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||l[s]!==i[a]){var o=`
`+l[s].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=s&&0<=a);break}}}finally{ii=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Zt(e):""}function uf(e){switch(e.tag){case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 2:case 15:return e=si(e.type,!1),e;case 11:return e=si(e.type.render,!1),e;case 1:return e=si(e.type,!0),e;default:return""}}function Ri(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case at:return"Fragment";case ot:return"Portal";case Ai:return"Profiler";case Ts:return"StrictMode";case Ti:return"Suspense";case Ii:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hu:return(e.displayName||"Context")+".Consumer";case pu:return(e._context.displayName||"Context")+".Provider";case Is:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rs:return n=e.displayName||null,n!==null?n:Ri(e.type)||"Memo";case kn:n=e._payload,e=e._init;try{return Ri(e(n))}catch{}}return null}function cf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ri(n);case 8:return n===Ts?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function In(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function df(e){var n=gu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Lr(e){e._valueTracker||(e._valueTracker=df(e))}function vu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=gu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function dl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Li(e,n){var t=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Oo(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=In(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function yu(e,n){n=n.checked,n!=null&&As(e,"checked",n,!1)}function Di(e,n){yu(e,n);var t=In(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Mi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Mi(e,n.type,In(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Bo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Mi(e,n,t){(n!=="number"||dl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Gt=Array.isArray;function kt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+In(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Oi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(S(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $o(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(S(92));if(Gt(t)){if(1<t.length)throw Error(S(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:In(t)}}function ku(e,n){var t=In(n.value),r=In(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Uo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function xu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?xu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dr,wu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function cr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ff=["Webkit","ms","Moz","O"];Object.keys(er).forEach(function(e){ff.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),er[n]=er[e]})});function Su(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||er.hasOwnProperty(e)&&er[e]?(""+n).trim():n+"px"}function Eu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Su(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var pf=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $i(e,n){if(n){if(pf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(S(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(S(61))}if(n.style!=null&&typeof n.style!="object")throw Error(S(62))}}function Ui(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=null;function Ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,xt=null,wt=null;function Wo(e){if(e=_r(e)){if(typeof Hi!="function")throw Error(S(280));var n=e.stateNode;n&&(n=Ql(n),Hi(e.stateNode,e.type,n))}}function Nu(e){xt?wt?wt.push(e):wt=[e]:xt=e}function Cu(){if(xt){var e=xt,n=wt;if(wt=xt=null,Wo(e),n)for(e=0;e<n.length;e++)Wo(n[e])}}function ju(e,n){return e(n)}function Fu(){}var oi=!1;function zu(e,n,t){if(oi)return e(n,t);oi=!0;try{return ju(e,n,t)}finally{oi=!1,(xt!==null||wt!==null)&&(Fu(),Cu())}}function dr(e,n){var t=e.stateNode;if(t===null)return null;var r=Ql(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(S(231,n,typeof t));return t}var Qi=!1;if(un)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){Qi=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch{Qi=!1}function hf(e,n,t,r,l,i,s,a,o){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var nr=!1,fl=null,pl=!1,Vi=null,mf={onError:function(e){nr=!0,fl=e}};function gf(e,n,t,r,l,i,s,a,o){nr=!1,fl=null,hf.apply(mf,arguments)}function vf(e,n,t,r,l,i,s,a,o){if(gf.apply(this,arguments),nr){if(nr){var u=fl;nr=!1,fl=null}else throw Error(S(198));pl||(pl=!0,Vi=u)}}function et(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function _u(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ho(e){if(et(e)!==e)throw Error(S(188))}function yf(e){var n=e.alternate;if(!n){if(n=et(e),n===null)throw Error(S(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Ho(l),e;if(i===r)return Ho(l),n;i=i.sibling}throw Error(S(188))}if(t.return!==r.return)t=l,r=i;else{for(var s=!1,a=l.child;a;){if(a===t){s=!0,t=l,r=i;break}if(a===r){s=!0,r=l,t=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===t){s=!0,t=i,r=l;break}if(a===r){s=!0,r=i,t=l;break}a=a.sibling}if(!s)throw Error(S(189))}}if(t.alternate!==r)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?e:n}function Pu(e){return e=yf(e),e!==null?Au(e):null}function Au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Au(e);if(n!==null)return n;e=e.sibling}return null}var Tu=_e.unstable_scheduleCallback,Qo=_e.unstable_cancelCallback,kf=_e.unstable_shouldYield,xf=_e.unstable_requestPaint,ee=_e.unstable_now,wf=_e.unstable_getCurrentPriorityLevel,Ds=_e.unstable_ImmediatePriority,Iu=_e.unstable_UserBlockingPriority,hl=_e.unstable_NormalPriority,Sf=_e.unstable_LowPriority,Ru=_e.unstable_IdlePriority,$l=null,en=null;function Ef(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot($l,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:jf,Nf=Math.log,Cf=Math.LN2;function jf(e){return e>>>=0,e===0?32:31-(Nf(e)/Cf|0)|0}var Mr=64,Or=4194304;function Yt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ml(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,s=t&268435455;if(s!==0){var a=s&~l;a!==0?r=Yt(a):(i&=s,i!==0&&(r=Yt(i)))}else s=t&~l,s!==0?r=Yt(s):i!==0&&(r=Yt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ve(n),l=1<<t,r|=e[t],n&=~l;return r}function Ff(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Ve(i),a=1<<s,o=l[s];o===-1?(!(a&t)||a&r)&&(l[s]=Ff(a,n)):o<=n&&(e.expiredLanes|=a),i&=~a}}function Xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lu(){var e=Mr;return Mr<<=1,!(Mr&4194240)&&(Mr=64),e}function ai(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Fr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ve(n),e[n]=t}function _f(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Ve(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Ms(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ve(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var U=0;function Du(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mu,Os,Ou,Bu,$u,bi=!1,Br=[],Cn=null,jn=null,Fn=null,fr=new Map,pr=new Map,wn=[],Pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vo(e,n){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":fr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(n.pointerId)}}function Wt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=_r(n),n!==null&&Os(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Af(e,n,t,r,l){switch(n){case"focusin":return Cn=Wt(Cn,e,n,t,r,l),!0;case"dragenter":return jn=Wt(jn,e,n,t,r,l),!0;case"mouseover":return Fn=Wt(Fn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return fr.set(i,Wt(fr.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,pr.set(i,Wt(pr.get(i)||null,e,n,t,r,l)),!0}return!1}function Uu(e){var n=Wn(e.target);if(n!==null){var t=et(n);if(t!==null){if(n=t.tag,n===13){if(n=_u(t),n!==null){e.blockedOn=n,$u(e.priority,function(){Ou(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ki(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Wi=r,t.target.dispatchEvent(r),Wi=null}else return n=_r(t),n!==null&&Os(n),e.blockedOn=t,!1;n.shift()}return!0}function Xo(e,n,t){nl(e)&&t.delete(n)}function Tf(){bi=!1,Cn!==null&&nl(Cn)&&(Cn=null),jn!==null&&nl(jn)&&(jn=null),Fn!==null&&nl(Fn)&&(Fn=null),fr.forEach(Xo),pr.forEach(Xo)}function Ht(e,n){e.blockedOn===n&&(e.blockedOn=null,bi||(bi=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Tf)))}function hr(e){function n(l){return Ht(l,e)}if(0<Br.length){Ht(Br[0],e);for(var t=1;t<Br.length;t++){var r=Br[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Cn!==null&&Ht(Cn,e),jn!==null&&Ht(jn,e),Fn!==null&&Ht(Fn,e),fr.forEach(n),pr.forEach(n),t=0;t<wn.length;t++)r=wn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<wn.length&&(t=wn[0],t.blockedOn===null);)Uu(t),t.blockedOn===null&&wn.shift()}var St=pn.ReactCurrentBatchConfig,gl=!0;function If(e,n,t,r){var l=U,i=St.transition;St.transition=null;try{U=1,Bs(e,n,t,r)}finally{U=l,St.transition=i}}function Rf(e,n,t,r){var l=U,i=St.transition;St.transition=null;try{U=4,Bs(e,n,t,r)}finally{U=l,St.transition=i}}function Bs(e,n,t,r){if(gl){var l=Ki(e,n,t,r);if(l===null)yi(e,n,r,vl,t),Vo(e,r);else if(Af(l,e,n,t,r))r.stopPropagation();else if(Vo(e,r),n&4&&-1<Pf.indexOf(e)){for(;l!==null;){var i=_r(l);if(i!==null&&Mu(i),i=Ki(e,n,t,r),i===null&&yi(e,n,r,vl,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else yi(e,n,r,null,t)}}var vl=null;function Ki(e,n,t,r){if(vl=null,e=Ls(r),e=Wn(e),e!==null)if(n=et(e),n===null)e=null;else if(t=n.tag,t===13){if(e=_u(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return vl=e,null}function Wu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wf()){case Ds:return 1;case Iu:return 4;case hl:case Sf:return 16;case Ru:return 536870912;default:return 16}default:return 16}}var En=null,$s=null,tl=null;function Hu(){if(tl)return tl;var e,n=$s,t=n.length,r,l="value"in En?En.value:En.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===l[i-r];r++);return tl=l.slice(e,1<r?1-r:void 0)}function rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $r(){return!0}function bo(){return!1}function Ae(e){function n(t,r,l,i,s){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$r:bo,this.isPropagationStopped=bo,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),n}var Lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Us=Ae(Lt),zr=J({},Lt,{view:0,detail:0}),Lf=Ae(zr),ui,ci,Qt,Ul=J({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qt&&(Qt&&e.type==="mousemove"?(ui=e.screenX-Qt.screenX,ci=e.screenY-Qt.screenY):ci=ui=0,Qt=e),ui)},movementY:function(e){return"movementY"in e?e.movementY:ci}}),Ko=Ae(Ul),Df=J({},Ul,{dataTransfer:0}),Mf=Ae(Df),Of=J({},zr,{relatedTarget:0}),di=Ae(Of),Bf=J({},Lt,{animationName:0,elapsedTime:0,pseudoElement:0}),$f=Ae(Bf),Uf=J({},Lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wf=Ae(Uf),Hf=J({},Lt,{data:0}),Zo=Ae(Hf),Qf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Xf[e])?!!n[e]:!1}function Ws(){return bf}var Kf=J({},zr,{key:function(e){if(e.key){var n=Qf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zf=Ae(Kf),Gf=J({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Go=Ae(Gf),Yf=J({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),Jf=Ae(Yf),qf=J({},Lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),ep=Ae(qf),np=J({},Ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tp=Ae(np),rp=[9,13,27,32],Hs=un&&"CompositionEvent"in window,tr=null;un&&"documentMode"in document&&(tr=document.documentMode);var lp=un&&"TextEvent"in window&&!tr,Qu=un&&(!Hs||tr&&8<tr&&11>=tr),Yo=" ",Jo=!1;function Vu(e,n){switch(e){case"keyup":return rp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ut=!1;function ip(e,n){switch(e){case"compositionend":return Xu(n);case"keypress":return n.which!==32?null:(Jo=!0,Yo);case"textInput":return e=n.data,e===Yo&&Jo?null:e;default:return null}}function sp(e,n){if(ut)return e==="compositionend"||!Hs&&Vu(e,n)?(e=Hu(),tl=$s=En=null,ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qu&&n.locale!=="ko"?null:n.data;default:return null}}var op={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!op[e.type]:n==="textarea"}function bu(e,n,t,r){Nu(r),n=yl(n,"onChange"),0<n.length&&(t=new Us("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var rr=null,mr=null;function ap(e){lc(e,0)}function Wl(e){var n=ft(e);if(vu(n))return e}function up(e,n){if(e==="change")return n}var Ku=!1;if(un){var fi;if(un){var pi="oninput"in document;if(!pi){var ea=document.createElement("div");ea.setAttribute("oninput","return;"),pi=typeof ea.oninput=="function"}fi=pi}else fi=!1;Ku=fi&&(!document.documentMode||9<document.documentMode)}function na(){rr&&(rr.detachEvent("onpropertychange",Zu),mr=rr=null)}function Zu(e){if(e.propertyName==="value"&&Wl(mr)){var n=[];bu(n,mr,e,Ls(e)),zu(ap,n)}}function cp(e,n,t){e==="focusin"?(na(),rr=n,mr=t,rr.attachEvent("onpropertychange",Zu)):e==="focusout"&&na()}function dp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wl(mr)}function fp(e,n){if(e==="click")return Wl(n)}function pp(e,n){if(e==="input"||e==="change")return Wl(n)}function hp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var be=typeof Object.is=="function"?Object.is:hp;function gr(e,n){if(be(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Pi.call(n,l)||!be(e[l],n[l]))return!1}return!0}function ta(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ra(e,n){var t=ta(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ta(t)}}function Gu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yu(){for(var e=window,n=dl();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=dl(e.document)}return n}function Qs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function mp(e){var n=Yu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Gu(t.ownerDocument.documentElement,t)){if(r!==null&&Qs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ra(t,i);var s=ra(t,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gp=un&&"documentMode"in document&&11>=document.documentMode,ct=null,Zi=null,lr=null,Gi=!1;function la(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Gi||ct==null||ct!==dl(r)||(r=ct,"selectionStart"in r&&Qs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&gr(lr,r)||(lr=r,r=yl(Zi,"onSelect"),0<r.length&&(n=new Us("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ct)))}function Ur(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var dt={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},hi={},Ju={};un&&(Ju=document.createElement("div").style,"AnimationEvent"in window||(delete dt.animationend.animation,delete dt.animationiteration.animation,delete dt.animationstart.animation),"TransitionEvent"in window||delete dt.transitionend.transition);function Hl(e){if(hi[e])return hi[e];if(!dt[e])return e;var n=dt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ju)return hi[e]=n[t];return e}var qu=Hl("animationend"),ec=Hl("animationiteration"),nc=Hl("animationstart"),tc=Hl("transitionend"),rc=new Map,ia="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,n){rc.set(e,n),qn(n,[e])}for(var mi=0;mi<ia.length;mi++){var gi=ia[mi],vp=gi.toLowerCase(),yp=gi[0].toUpperCase()+gi.slice(1);Ln(vp,"on"+yp)}Ln(qu,"onAnimationEnd");Ln(ec,"onAnimationIteration");Ln(nc,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(tc,"onTransitionEnd");Ct("onMouseEnter",["mouseout","mouseover"]);Ct("onMouseLeave",["mouseout","mouseover"]);Ct("onPointerEnter",["pointerout","pointerover"]);Ct("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jt));function sa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,vf(r,n,void 0,e),e.currentTarget=null}function lc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var s=r.length-1;0<=s;s--){var a=r[s],o=a.instance,u=a.currentTarget;if(a=a.listener,o!==i&&l.isPropagationStopped())break e;sa(l,a,u),i=o}else for(s=0;s<r.length;s++){if(a=r[s],o=a.instance,u=a.currentTarget,a=a.listener,o!==i&&l.isPropagationStopped())break e;sa(l,a,u),i=o}}}if(pl)throw e=Vi,pl=!1,Vi=null,e}function b(e,n){var t=n[ns];t===void 0&&(t=n[ns]=new Set);var r=e+"__bubble";t.has(r)||(ic(n,e,2,!1),t.add(r))}function vi(e,n,t){var r=0;n&&(r|=4),ic(t,e,r,n)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function vr(e){if(!e[Wr]){e[Wr]=!0,fu.forEach(function(t){t!=="selectionchange"&&(kp.has(t)||vi(t,!1,e),vi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wr]||(n[Wr]=!0,vi("selectionchange",!1,n))}}function ic(e,n,t,r){switch(Wu(n)){case 1:var l=If;break;case 4:l=Rf;break;default:l=Bs}t=l.bind(null,n,t,e),l=void 0,!Qi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function yi(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var o=s.tag;if((o===3||o===4)&&(o=s.stateNode.containerInfo,o===l||o.nodeType===8&&o.parentNode===l))return;s=s.return}for(;a!==null;){if(s=Wn(a),s===null)return;if(o=s.tag,o===5||o===6){r=i=s;continue e}a=a.parentNode}}r=r.return}zu(function(){var u=i,d=Ls(t),h=[];e:{var f=rc.get(e);if(f!==void 0){var y=Us,v=e;switch(e){case"keypress":if(rl(t)===0)break e;case"keydown":case"keyup":y=Zf;break;case"focusin":v="focus",y=di;break;case"focusout":v="blur",y=di;break;case"beforeblur":case"afterblur":y=di;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Jf;break;case qu:case ec:case nc:y=$f;break;case tc:y=ep;break;case"scroll":y=Lf;break;case"wheel":y=tp;break;case"copy":case"cut":case"paste":y=Wf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Go}var k=(n&4)!==0,A=!k&&e==="scroll",m=k?f!==null?f+"Capture":null:f;k=[];for(var p=u,g;p!==null;){g=p;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,m!==null&&(x=dr(p,m),x!=null&&k.push(yr(p,x,g)))),A)break;p=p.return}0<k.length&&(f=new y(f,v,null,t,d),h.push({event:f,listeners:k}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&t!==Wi&&(v=t.relatedTarget||t.fromElement)&&(Wn(v)||v[cn]))break e;if((y||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=t.relatedTarget||t.toElement,y=u,v=v?Wn(v):null,v!==null&&(A=et(v),v!==A||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(k=Ko,x="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(k=Go,x="onPointerLeave",m="onPointerEnter",p="pointer"),A=y==null?f:ft(y),g=v==null?f:ft(v),f=new k(x,p+"leave",y,t,d),f.target=A,f.relatedTarget=g,x=null,Wn(d)===u&&(k=new k(m,p+"enter",v,t,d),k.target=g,k.relatedTarget=A,x=k),A=x,y&&v)n:{for(k=y,m=v,p=0,g=k;g;g=lt(g))p++;for(g=0,x=m;x;x=lt(x))g++;for(;0<p-g;)k=lt(k),p--;for(;0<g-p;)m=lt(m),g--;for(;p--;){if(k===m||m!==null&&k===m.alternate)break n;k=lt(k),m=lt(m)}k=null}else k=null;y!==null&&oa(h,f,y,k,!1),v!==null&&A!==null&&oa(h,A,v,k,!0)}}e:{if(f=u?ft(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var E=up;else if(qo(f))if(Ku)E=pp;else{E=dp;var N=cp}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=fp);if(E&&(E=E(e,u))){bu(h,E,t,d);break e}N&&N(e,f,u),e==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&Mi(f,"number",f.value)}switch(N=u?ft(u):window,e){case"focusin":(qo(N)||N.contentEditable==="true")&&(ct=N,Zi=u,lr=null);break;case"focusout":lr=Zi=ct=null;break;case"mousedown":Gi=!0;break;case"contextmenu":case"mouseup":case"dragend":Gi=!1,la(h,t,d);break;case"selectionchange":if(gp)break;case"keydown":case"keyup":la(h,t,d)}var _;if(Hs)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else ut?Vu(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(Qu&&t.locale!=="ko"&&(ut||z!=="onCompositionStart"?z==="onCompositionEnd"&&ut&&(_=Hu()):(En=d,$s="value"in En?En.value:En.textContent,ut=!0)),N=yl(u,z),0<N.length&&(z=new Zo(z,e,null,t,d),h.push({event:z,listeners:N}),_?z.data=_:(_=Xu(t),_!==null&&(z.data=_)))),(_=lp?ip(e,t):sp(e,t))&&(u=yl(u,"onBeforeInput"),0<u.length&&(d=new Zo("onBeforeInput","beforeinput",null,t,d),h.push({event:d,listeners:u}),d.data=_))}lc(h,n)})}function yr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function yl(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=dr(e,t),i!=null&&r.unshift(yr(e,i,l)),i=dr(e,n),i!=null&&r.push(yr(e,i,l))),e=e.return}return r}function lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oa(e,n,t,r,l){for(var i=n._reactName,s=[];t!==null&&t!==r;){var a=t,o=a.alternate,u=a.stateNode;if(o!==null&&o===r)break;a.tag===5&&u!==null&&(a=u,l?(o=dr(t,i),o!=null&&s.unshift(yr(t,o,a))):l||(o=dr(t,i),o!=null&&s.push(yr(t,o,a)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var xp=/\r\n?/g,wp=/\u0000|\uFFFD/g;function aa(e){return(typeof e=="string"?e:""+e).replace(xp,`
`).replace(wp,"")}function Hr(e,n,t){if(n=aa(n),aa(e)!==n&&t)throw Error(S(425))}function kl(){}var Yi=null,Ji=null;function qi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var es=typeof setTimeout=="function"?setTimeout:void 0,Sp=typeof clearTimeout=="function"?clearTimeout:void 0,ua=typeof Promise=="function"?Promise:void 0,Ep=typeof queueMicrotask=="function"?queueMicrotask:typeof ua<"u"?function(e){return ua.resolve(null).then(e).catch(Np)}:es;function Np(e){setTimeout(function(){throw e})}function ki(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),hr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);hr(n)}function zn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ca(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Dt=Math.random().toString(36).slice(2),qe="__reactFiber$"+Dt,kr="__reactProps$"+Dt,cn="__reactContainer$"+Dt,ns="__reactEvents$"+Dt,Cp="__reactListeners$"+Dt,jp="__reactHandles$"+Dt;function Wn(e){var n=e[qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[cn]||t[qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ca(e);e!==null;){if(t=e[qe])return t;e=ca(e)}return n}e=t,t=e.parentNode}return null}function _r(e){return e=e[qe]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ql(e){return e[kr]||null}var ts=[],pt=-1;function Dn(e){return{current:e}}function K(e){0>pt||(e.current=ts[pt],ts[pt]=null,pt--)}function X(e,n){pt++,ts[pt]=e.current,e.current=n}var Rn={},he=Dn(Rn),Se=Dn(!1),bn=Rn;function jt(e,n){var t=e.type.contextTypes;if(!t)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ee(e){return e=e.childContextTypes,e!=null}function xl(){K(Se),K(he)}function da(e,n,t){if(he.current!==Rn)throw Error(S(168));X(he,n),X(Se,t)}function sc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(S(108,cf(e)||"Unknown",l));return J({},t,r)}function wl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,bn=he.current,X(he,e),X(Se,Se.current),!0}function fa(e,n,t){var r=e.stateNode;if(!r)throw Error(S(169));t?(e=sc(e,n,bn),r.__reactInternalMemoizedMergedChildContext=e,K(Se),K(he),X(he,e)):K(Se),X(Se,t)}var ln=null,Vl=!1,xi=!1;function oc(e){ln===null?ln=[e]:ln.push(e)}function Fp(e){Vl=!0,oc(e)}function Mn(){if(!xi&&ln!==null){xi=!0;var e=0,n=U;try{var t=ln;for(U=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}ln=null,Vl=!1}catch(l){throw ln!==null&&(ln=ln.slice(e+1)),Tu(Ds,Mn),l}finally{U=n,xi=!1}}return null}var ht=[],mt=0,Sl=null,El=0,Ie=[],Re=0,Kn=null,sn=1,on="";function Bn(e,n){ht[mt++]=El,ht[mt++]=Sl,Sl=e,El=n}function ac(e,n,t){Ie[Re++]=sn,Ie[Re++]=on,Ie[Re++]=Kn,Kn=e;var r=sn;e=on;var l=32-Ve(r)-1;r&=~(1<<l),t+=1;var i=32-Ve(n)+l;if(30<i){var s=l-l%5;i=(r&(1<<s)-1).toString(32),r>>=s,l-=s,sn=1<<32-Ve(n)+l|t<<l|r,on=i+e}else sn=1<<i|t<<l|r,on=e}function Vs(e){e.return!==null&&(Bn(e,1),ac(e,1,0))}function Xs(e){for(;e===Sl;)Sl=ht[--mt],ht[mt]=null,El=ht[--mt],ht[mt]=null;for(;e===Kn;)Kn=Ie[--Re],Ie[Re]=null,on=Ie[--Re],Ie[Re]=null,sn=Ie[--Re],Ie[Re]=null}var ze=null,Fe=null,Z=!1,We=null;function uc(e,n){var t=Le(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function pa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ze=e,Fe=zn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ze=e,Fe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Kn!==null?{id:sn,overflow:on}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Le(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ze=e,Fe=null,!0):!1;default:return!1}}function rs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ls(e){if(Z){var n=Fe;if(n){var t=n;if(!pa(e,n)){if(rs(e))throw Error(S(418));n=zn(t.nextSibling);var r=ze;n&&pa(e,n)?uc(r,t):(e.flags=e.flags&-4097|2,Z=!1,ze=e)}}else{if(rs(e))throw Error(S(418));e.flags=e.flags&-4097|2,Z=!1,ze=e}}}function ha(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Qr(e){if(e!==ze)return!1;if(!Z)return ha(e),Z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!qi(e.type,e.memoizedProps)),n&&(n=Fe)){if(rs(e))throw cc(),Error(S(418));for(;n;)uc(e,n),n=zn(n.nextSibling)}if(ha(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Fe=zn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Fe=null}}else Fe=ze?zn(e.stateNode.nextSibling):null;return!0}function cc(){for(var e=Fe;e;)e=zn(e.nextSibling)}function Ft(){Fe=ze=null,Z=!1}function bs(e){We===null?We=[e]:We.push(e)}var zp=pn.ReactCurrentBatchConfig;function Vt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(S(309));var r=t.stateNode}if(!r)throw Error(S(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(s){var a=l.refs;s===null?delete a[i]:a[i]=s},n._stringRef=i,n)}if(typeof e!="string")throw Error(S(284));if(!t._owner)throw Error(S(290,e))}return e}function Vr(e,n){throw e=Object.prototype.toString.call(n),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ma(e){var n=e._init;return n(e._payload)}function dc(e){function n(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function t(m,p){if(!e)return null;for(;p!==null;)n(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function l(m,p){return m=Tn(m,p),m.index=0,m.sibling=null,m}function i(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,x){return p===null||p.tag!==6?(p=Fi(g,m.mode,x),p.return=m,p):(p=l(p,g),p.return=m,p)}function o(m,p,g,x){var E=g.type;return E===at?d(m,p,g.props.children,x,g.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===kn&&ma(E)===p.type)?(x=l(p,g.props),x.ref=Vt(m,p,g),x.return=m,x):(x=cl(g.type,g.key,g.props,null,m.mode,x),x.ref=Vt(m,p,g),x.return=m,x)}function u(m,p,g,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=zi(g,m.mode,x),p.return=m,p):(p=l(p,g.children||[]),p.return=m,p)}function d(m,p,g,x,E){return p===null||p.tag!==7?(p=Xn(g,m.mode,x,E),p.return=m,p):(p=l(p,g),p.return=m,p)}function h(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Fi(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Rr:return g=cl(p.type,p.key,p.props,null,m.mode,g),g.ref=Vt(m,null,p),g.return=m,g;case ot:return p=zi(p,m.mode,g),p.return=m,p;case kn:var x=p._init;return h(m,x(p._payload),g)}if(Gt(p)||$t(p))return p=Xn(p,m.mode,g,null),p.return=m,p;Vr(m,p)}return null}function f(m,p,g,x){var E=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(m,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Rr:return g.key===E?o(m,p,g,x):null;case ot:return g.key===E?u(m,p,g,x):null;case kn:return E=g._init,f(m,p,E(g._payload),x)}if(Gt(g)||$t(g))return E!==null?null:d(m,p,g,x,null);Vr(m,g)}return null}function y(m,p,g,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(g)||null,a(p,m,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Rr:return m=m.get(x.key===null?g:x.key)||null,o(p,m,x,E);case ot:return m=m.get(x.key===null?g:x.key)||null,u(p,m,x,E);case kn:var N=x._init;return y(m,p,g,N(x._payload),E)}if(Gt(x)||$t(x))return m=m.get(g)||null,d(p,m,x,E,null);Vr(p,x)}return null}function v(m,p,g,x){for(var E=null,N=null,_=p,z=p=0,W=null;_!==null&&z<g.length;z++){_.index>z?(W=_,_=null):W=_.sibling;var T=f(m,_,g[z],x);if(T===null){_===null&&(_=W);break}e&&_&&T.alternate===null&&n(m,_),p=i(T,p,z),N===null?E=T:N.sibling=T,N=T,_=W}if(z===g.length)return t(m,_),Z&&Bn(m,z),E;if(_===null){for(;z<g.length;z++)_=h(m,g[z],x),_!==null&&(p=i(_,p,z),N===null?E=_:N.sibling=_,N=_);return Z&&Bn(m,z),E}for(_=r(m,_);z<g.length;z++)W=y(_,m,z,g[z],x),W!==null&&(e&&W.alternate!==null&&_.delete(W.key===null?z:W.key),p=i(W,p,z),N===null?E=W:N.sibling=W,N=W);return e&&_.forEach(function(ne){return n(m,ne)}),Z&&Bn(m,z),E}function k(m,p,g,x){var E=$t(g);if(typeof E!="function")throw Error(S(150));if(g=E.call(g),g==null)throw Error(S(151));for(var N=E=null,_=p,z=p=0,W=null,T=g.next();_!==null&&!T.done;z++,T=g.next()){_.index>z?(W=_,_=null):W=_.sibling;var ne=f(m,_,T.value,x);if(ne===null){_===null&&(_=W);break}e&&_&&ne.alternate===null&&n(m,_),p=i(ne,p,z),N===null?E=ne:N.sibling=ne,N=ne,_=W}if(T.done)return t(m,_),Z&&Bn(m,z),E;if(_===null){for(;!T.done;z++,T=g.next())T=h(m,T.value,x),T!==null&&(p=i(T,p,z),N===null?E=T:N.sibling=T,N=T);return Z&&Bn(m,z),E}for(_=r(m,_);!T.done;z++,T=g.next())T=y(_,m,z,T.value,x),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?z:T.key),p=i(T,p,z),N===null?E=T:N.sibling=T,N=T);return e&&_.forEach(function(Ce){return n(m,Ce)}),Z&&Bn(m,z),E}function A(m,p,g,x){if(typeof g=="object"&&g!==null&&g.type===at&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Rr:e:{for(var E=g.key,N=p;N!==null;){if(N.key===E){if(E=g.type,E===at){if(N.tag===7){t(m,N.sibling),p=l(N,g.props.children),p.return=m,m=p;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===kn&&ma(E)===N.type){t(m,N.sibling),p=l(N,g.props),p.ref=Vt(m,N,g),p.return=m,m=p;break e}t(m,N);break}else n(m,N);N=N.sibling}g.type===at?(p=Xn(g.props.children,m.mode,x,g.key),p.return=m,m=p):(x=cl(g.type,g.key,g.props,null,m.mode,x),x.ref=Vt(m,p,g),x.return=m,m=x)}return s(m);case ot:e:{for(N=g.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){t(m,p.sibling),p=l(p,g.children||[]),p.return=m,m=p;break e}else{t(m,p);break}else n(m,p);p=p.sibling}p=zi(g,m.mode,x),p.return=m,m=p}return s(m);case kn:return N=g._init,A(m,p,N(g._payload),x)}if(Gt(g))return v(m,p,g,x);if($t(g))return k(m,p,g,x);Vr(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(t(m,p.sibling),p=l(p,g),p.return=m,m=p):(t(m,p),p=Fi(g,m.mode,x),p.return=m,m=p),s(m)):t(m,p)}return A}var zt=dc(!0),fc=dc(!1),Nl=Dn(null),Cl=null,gt=null,Ks=null;function Zs(){Ks=gt=Cl=null}function Gs(e){var n=Nl.current;K(Nl),e._currentValue=n}function is(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Et(e,n){Cl=e,Ks=gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(we=!0),e.firstContext=null)}function Me(e){var n=e._currentValue;if(Ks!==e)if(e={context:e,memoizedValue:n,next:null},gt===null){if(Cl===null)throw Error(S(308));gt=e,Cl.dependencies={lanes:0,firstContext:e}}else gt=gt.next=e;return n}var Hn=null;function Ys(e){Hn===null?Hn=[e]:Hn.push(e)}function pc(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Ys(n)):(t.next=l.next,l.next=t),n.interleaved=t,dn(e,r)}function dn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var xn=!1;function Js(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function _n(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,dn(e,t)}return l=r.interleaved,l===null?(n.next=n,Ys(r)):(n.next=l.next,l.next=n),r.interleaved=n,dn(e,t)}function ll(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ms(e,t)}}function ga(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function jl(e,n,t,r){var l=e.updateQueue;xn=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var o=a,u=o.next;o.next=null,s===null?i=u:s.next=u,s=o;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=o))}if(i!==null){var h=l.baseState;s=0,d=u=o=null,a=i;do{var f=a.lane,y=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,k=a;switch(f=n,y=t,k.tag){case 1:if(v=k.payload,typeof v=="function"){h=v.call(y,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,f=typeof v=="function"?v.call(y,h,f):v,f==null)break e;h=J({},h,f);break e;case 2:xn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=l.effects,f===null?l.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,o=h):d=d.next=y,s|=f;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;f=a,a=f.next,f.next=null,l.lastBaseUpdate=f,l.shared.pending=null}}while(!0);if(d===null&&(o=h),l.baseState=o,l.firstBaseUpdate=u,l.lastBaseUpdate=d,n=l.shared.interleaved,n!==null){l=n;do s|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);Gn|=s,e.lanes=s,e.memoizedState=h}}function va(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var Pr={},nn=Dn(Pr),xr=Dn(Pr),wr=Dn(Pr);function Qn(e){if(e===Pr)throw Error(S(174));return e}function qs(e,n){switch(X(wr,n),X(xr,e),X(nn,Pr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Bi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Bi(n,e)}K(nn),X(nn,n)}function _t(){K(nn),K(xr),K(wr)}function mc(e){Qn(wr.current);var n=Qn(nn.current),t=Bi(n,e.type);n!==t&&(X(xr,e),X(nn,t))}function eo(e){xr.current===e&&(K(nn),K(xr))}var G=Dn(0);function Fl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var wi=[];function no(){for(var e=0;e<wi.length;e++)wi[e]._workInProgressVersionPrimary=null;wi.length=0}var il=pn.ReactCurrentDispatcher,Si=pn.ReactCurrentBatchConfig,Zn=0,Y=null,re=null,ie=null,zl=!1,ir=!1,Sr=0,_p=0;function ce(){throw Error(S(321))}function to(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!be(e[t],n[t]))return!1;return!0}function ro(e,n,t,r,l,i){if(Zn=i,Y=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,il.current=e===null||e.memoizedState===null?Ip:Rp,e=t(r,l),ir){i=0;do{if(ir=!1,Sr=0,25<=i)throw Error(S(301));i+=1,ie=re=null,n.updateQueue=null,il.current=Lp,e=t(r,l)}while(ir)}if(il.current=_l,n=re!==null&&re.next!==null,Zn=0,ie=re=Y=null,zl=!1,n)throw Error(S(300));return e}function lo(){var e=Sr!==0;return Sr=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Y.memoizedState=ie=e:ie=ie.next=e,ie}function Oe(){if(re===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var n=ie===null?Y.memoizedState:ie.next;if(n!==null)ie=n,re=e;else{if(e===null)throw Error(S(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ie===null?Y.memoizedState=ie=e:ie=ie.next=e}return ie}function Er(e,n){return typeof n=="function"?n(e):n}function Ei(e){var n=Oe(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=re,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=s=null,o=null,u=i;do{var d=u.lane;if((Zn&d)===d)o!==null&&(o=o.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};o===null?(a=o=h,s=r):o=o.next=h,Y.lanes|=d,Gn|=d}u=u.next}while(u!==null&&u!==i);o===null?s=r:o.next=a,be(r,n.memoizedState)||(we=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=o,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,Y.lanes|=i,Gn|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ni(e){var n=Oe(),t=n.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);be(i,n.memoizedState)||(we=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function gc(){}function vc(e,n){var t=Y,r=Oe(),l=n(),i=!be(r.memoizedState,l);if(i&&(r.memoizedState=l,we=!0),r=r.queue,io(xc.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ie!==null&&ie.memoizedState.tag&1){if(t.flags|=2048,Nr(9,kc.bind(null,t,r,l,n),void 0,null),se===null)throw Error(S(349));Zn&30||yc(t,n,l)}return l}function yc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function kc(e,n,t,r){n.value=t,n.getSnapshot=r,wc(n)&&Sc(e)}function xc(e,n,t){return t(function(){wc(n)&&Sc(e)})}function wc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!be(e,t)}catch{return!0}}function Sc(e){var n=dn(e,1);n!==null&&Xe(n,e,1,-1)}function ya(e){var n=Je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Er,lastRenderedState:e},n.queue=e,e=e.dispatch=Tp.bind(null,Y,e),[n.memoizedState,e]}function Nr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ec(){return Oe().memoizedState}function sl(e,n,t,r){var l=Je();Y.flags|=e,l.memoizedState=Nr(1|n,t,void 0,r===void 0?null:r)}function Xl(e,n,t,r){var l=Oe();r=r===void 0?null:r;var i=void 0;if(re!==null){var s=re.memoizedState;if(i=s.destroy,r!==null&&to(r,s.deps)){l.memoizedState=Nr(n,t,i,r);return}}Y.flags|=e,l.memoizedState=Nr(1|n,t,i,r)}function ka(e,n){return sl(8390656,8,e,n)}function io(e,n){return Xl(2048,8,e,n)}function Nc(e,n){return Xl(4,2,e,n)}function Cc(e,n){return Xl(4,4,e,n)}function jc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fc(e,n,t){return t=t!=null?t.concat([e]):null,Xl(4,4,jc.bind(null,n,e),t)}function so(){}function zc(e,n){var t=Oe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&to(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function _c(e,n){var t=Oe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&to(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Pc(e,n,t){return Zn&21?(be(t,n)||(t=Lu(),Y.lanes|=t,Gn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=t)}function Pp(e,n){var t=U;U=t!==0&&4>t?t:4,e(!0);var r=Si.transition;Si.transition={};try{e(!1),n()}finally{U=t,Si.transition=r}}function Ac(){return Oe().memoizedState}function Ap(e,n,t){var r=An(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Tc(e))Ic(n,t);else if(t=pc(e,n,t,r),t!==null){var l=ge();Xe(t,e,r,l),Rc(t,n,r)}}function Tp(e,n,t){var r=An(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Tc(e))Ic(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var s=n.lastRenderedState,a=i(s,t);if(l.hasEagerState=!0,l.eagerState=a,be(a,s)){var o=n.interleaved;o===null?(l.next=l,Ys(n)):(l.next=o.next,o.next=l),n.interleaved=l;return}}catch{}finally{}t=pc(e,n,l,r),t!==null&&(l=ge(),Xe(t,e,r,l),Rc(t,n,r))}}function Tc(e){var n=e.alternate;return e===Y||n!==null&&n===Y}function Ic(e,n){ir=zl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Rc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ms(e,t)}}var _l={readContext:Me,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Ip={readContext:Me,useCallback:function(e,n){return Je().memoizedState=[e,n===void 0?null:n],e},useContext:Me,useEffect:ka,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,sl(4194308,4,jc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return sl(4194308,4,e,n)},useInsertionEffect:function(e,n){return sl(4,2,e,n)},useMemo:function(e,n){var t=Je();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Je();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Ap.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var n=Je();return e={current:e},n.memoizedState=e},useState:ya,useDebugValue:so,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=ya(!1),n=e[0];return e=Pp.bind(null,e[1]),Je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Y,l=Je();if(Z){if(t===void 0)throw Error(S(407));t=t()}else{if(t=n(),se===null)throw Error(S(349));Zn&30||yc(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,ka(xc.bind(null,r,i,e),[e]),r.flags|=2048,Nr(9,kc.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Je(),n=se.identifierPrefix;if(Z){var t=on,r=sn;t=(r&~(1<<32-Ve(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Sr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=_p++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Rp={readContext:Me,useCallback:zc,useContext:Me,useEffect:io,useImperativeHandle:Fc,useInsertionEffect:Nc,useLayoutEffect:Cc,useMemo:_c,useReducer:Ei,useRef:Ec,useState:function(){return Ei(Er)},useDebugValue:so,useDeferredValue:function(e){var n=Oe();return Pc(n,re.memoizedState,e)},useTransition:function(){var e=Ei(Er)[0],n=Oe().memoizedState;return[e,n]},useMutableSource:gc,useSyncExternalStore:vc,useId:Ac,unstable_isNewReconciler:!1},Lp={readContext:Me,useCallback:zc,useContext:Me,useEffect:io,useImperativeHandle:Fc,useInsertionEffect:Nc,useLayoutEffect:Cc,useMemo:_c,useReducer:Ni,useRef:Ec,useState:function(){return Ni(Er)},useDebugValue:so,useDeferredValue:function(e){var n=Oe();return re===null?n.memoizedState=e:Pc(n,re.memoizedState,e)},useTransition:function(){var e=Ni(Er)[0],n=Oe().memoizedState;return[e,n]},useMutableSource:gc,useSyncExternalStore:vc,useId:Ac,unstable_isNewReconciler:!1};function $e(e,n){if(e&&e.defaultProps){n=J({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ss(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:J({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var bl={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),l=An(e),i=an(r,l);i.payload=n,t!=null&&(i.callback=t),n=_n(e,i,l),n!==null&&(Xe(n,e,l,r),ll(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),l=An(e),i=an(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=_n(e,i,l),n!==null&&(Xe(n,e,l,r),ll(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=An(e),l=an(t,r);l.tag=2,n!=null&&(l.callback=n),n=_n(e,l,r),n!==null&&(Xe(n,e,r,t),ll(n,e,r))}};function xa(e,n,t,r,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):n.prototype&&n.prototype.isPureReactComponent?!gr(t,r)||!gr(l,i):!0}function Lc(e,n,t){var r=!1,l=Rn,i=n.contextType;return typeof i=="object"&&i!==null?i=Me(i):(l=Ee(n)?bn:he.current,r=n.contextTypes,i=(r=r!=null)?jt(e,l):Rn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=bl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function wa(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&bl.enqueueReplaceState(n,n.state,null)}function os(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Js(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=Me(i):(i=Ee(n)?bn:he.current,l.context=jt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(ss(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&bl.enqueueReplaceState(l,l.state,null),jl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Pt(e,n){try{var t="",r=n;do t+=uf(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function Ci(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function as(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Dp=typeof WeakMap=="function"?WeakMap:Map;function Dc(e,n,t){t=an(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Al||(Al=!0,ys=r),as(e,n)},t}function Mc(e,n,t){t=an(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){as(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){as(e,n),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function Sa(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Dp;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Gp.bind(null,e,n,t),n.then(e,e))}function Ea(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Na(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=an(-1,1),n.tag=2,_n(t,n,1))),t.lanes|=1),e)}var Mp=pn.ReactCurrentOwner,we=!1;function me(e,n,t,r){n.child=e===null?fc(n,null,t,r):zt(n,e.child,t,r)}function Ca(e,n,t,r,l){t=t.render;var i=n.ref;return Et(n,l),r=ro(e,n,t,r,i,l),t=lo(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,fn(e,n,l)):(Z&&t&&Vs(n),n.flags|=1,me(e,n,r,l),n.child)}function ja(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!mo(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Oc(e,n,i,r,l)):(e=cl(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:gr,t(s,r)&&e.ref===n.ref)return fn(e,n,l)}return n.flags|=1,e=Tn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Oc(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(gr(i,r)&&e.ref===n.ref)if(we=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(we=!0);else return n.lanes=e.lanes,fn(e,n,l)}return us(e,n,t,r,l)}function Bc(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(yt,je),je|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,X(yt,je),je|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,X(yt,je),je|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,X(yt,je),je|=r;return me(e,n,l,t),n.child}function $c(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function us(e,n,t,r,l){var i=Ee(t)?bn:he.current;return i=jt(n,i),Et(n,l),t=ro(e,n,t,r,i,l),r=lo(),e!==null&&!we?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,fn(e,n,l)):(Z&&r&&Vs(n),n.flags|=1,me(e,n,t,l),n.child)}function Fa(e,n,t,r,l){if(Ee(t)){var i=!0;wl(n)}else i=!1;if(Et(n,l),n.stateNode===null)ol(e,n),Lc(n,t,r),os(n,t,r,l),r=!0;else if(e===null){var s=n.stateNode,a=n.memoizedProps;s.props=a;var o=s.context,u=t.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=Ee(t)?bn:he.current,u=jt(n,u));var d=t.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||o!==u)&&wa(n,s,r,u),xn=!1;var f=n.memoizedState;s.state=f,jl(n,r,s,l),o=n.memoizedState,a!==r||f!==o||Se.current||xn?(typeof d=="function"&&(ss(n,t,d,r),o=n.memoizedState),(a=xn||xa(n,t,a,r,f,o,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=o),s.props=r,s.state=o,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,hc(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:$e(n.type,a),s.props=u,h=n.pendingProps,f=s.context,o=t.contextType,typeof o=="object"&&o!==null?o=Me(o):(o=Ee(t)?bn:he.current,o=jt(n,o));var y=t.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||f!==o)&&wa(n,s,r,o),xn=!1,f=n.memoizedState,s.state=f,jl(n,r,s,l);var v=n.memoizedState;a!==h||f!==v||Se.current||xn?(typeof y=="function"&&(ss(n,t,y,r),v=n.memoizedState),(u=xn||xa(n,t,u,r,f,v,o)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,o)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),s.props=r,s.state=v,s.context=o,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return cs(e,n,t,r,i,l)}function cs(e,n,t,r,l,i){$c(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return l&&fa(n,t,!1),fn(e,n,i);r=n.stateNode,Mp.current=n;var a=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=zt(n,e.child,null,i),n.child=zt(n,null,a,i)):me(e,n,a,i),n.memoizedState=r.state,l&&fa(n,t,!0),n.child}function Uc(e){var n=e.stateNode;n.pendingContext?da(e,n.pendingContext,n.pendingContext!==n.context):n.context&&da(e,n.context,!1),qs(e,n.containerInfo)}function za(e,n,t,r,l){return Ft(),bs(l),n.flags|=256,me(e,n,t,r),n.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wc(e,n,t){var r=n.pendingProps,l=G.current,i=!1,s=(n.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),X(G,l&1),e===null)return ls(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,i?(r=n.mode,i=n.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Gl(s,r,0,null),e=Xn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=fs(t),n.memoizedState=ds,e):oo(n,s));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Op(e,n,s,r,a,l,t);if(i){i=r.fallback,s=n.mode,l=e.child,a=l.sibling;var o={mode:"hidden",children:r.children};return!(s&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=o,n.deletions=null):(r=Tn(l,o),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=Tn(a,i):(i=Xn(i,s,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,s=e.child.memoizedState,s=s===null?fs(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~t,n.memoizedState=ds,r}return i=e.child,e=i.sibling,r=Tn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function oo(e,n){return n=Gl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Xr(e,n,t,r){return r!==null&&bs(r),zt(n,e.child,null,t),e=oo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Op(e,n,t,r,l,i,s){if(t)return n.flags&256?(n.flags&=-257,r=Ci(Error(S(422))),Xr(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=Gl({mode:"visible",children:r.children},l,0,null),i=Xn(i,l,s,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&zt(n,e.child,null,s),n.child.memoizedState=fs(s),n.memoizedState=ds,i);if(!(n.mode&1))return Xr(e,n,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(S(419)),r=Ci(i,r,void 0),Xr(e,n,s,r)}if(a=(s&e.childLanes)!==0,we||a){if(r=se,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,dn(e,l),Xe(r,e,l,-1))}return ho(),r=Ci(Error(S(421))),Xr(e,n,s,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Yp.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,Fe=zn(l.nextSibling),ze=n,Z=!0,We=null,e!==null&&(Ie[Re++]=sn,Ie[Re++]=on,Ie[Re++]=Kn,sn=e.id,on=e.overflow,Kn=n),n=oo(n,r.children),n.flags|=4096,n)}function _a(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),is(e.return,n,t)}function ji(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Hc(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(me(e,n,r.children,t),r=G.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_a(e,t,n);else if(e.tag===19)_a(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(G,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Fl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),ji(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Fl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}ji(n,!0,t,null,i);break;case"together":ji(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ol(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function fn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Gn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(S(153));if(n.child!==null){for(e=n.child,t=Tn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Tn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Bp(e,n,t){switch(n.tag){case 3:Uc(n),Ft();break;case 5:mc(n);break;case 1:Ee(n.type)&&wl(n);break;case 4:qs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;X(Nl,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(X(G,G.current&1),n.flags|=128,null):t&n.child.childLanes?Wc(e,n,t):(X(G,G.current&1),e=fn(e,n,t),e!==null?e.sibling:null);X(G,G.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Hc(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),X(G,G.current),r)break;return null;case 22:case 23:return n.lanes=0,Bc(e,n,t)}return fn(e,n,t)}var Qc,ps,Vc,Xc;Qc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ps=function(){};Vc=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Qn(nn.current);var i=null;switch(t){case"input":l=Li(e,l),r=Li(e,r),i=[];break;case"select":l=J({},l,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":l=Oi(e,l),r=Oi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=kl)}$i(t,r);var s;t=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var a=l[u];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ur.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var o=r[u];if(a=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&o!==a&&(o!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||o&&o.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in o)o.hasOwnProperty(s)&&a[s]!==o[s]&&(t||(t={}),t[s]=o[s])}else t||(i||(i=[]),i.push(u,t)),t=o;else u==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,a=a?a.__html:void 0,o!=null&&a!==o&&(i=i||[]).push(u,o)):u==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(u,""+o):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ur.hasOwnProperty(u)?(o!=null&&u==="onScroll"&&b("scroll",e),i||a===o||(i=[])):(i=i||[]).push(u,o))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};Xc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Xt(e,n){if(!Z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function $p(e,n,t){var r=n.pendingProps;switch(Xs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return Ee(n.type)&&xl(),de(n),null;case 3:return r=n.stateNode,_t(),K(Se),K(he),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,We!==null&&(ws(We),We=null))),ps(e,n),de(n),null;case 5:eo(n);var l=Qn(wr.current);if(t=n.type,e!==null&&n.stateNode!=null)Vc(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(S(166));return de(n),null}if(e=Qn(nn.current),Qr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[qe]=n,r[kr]=i,e=(n.mode&1)!==0,t){case"dialog":b("cancel",r),b("close",r);break;case"iframe":case"object":case"embed":b("load",r);break;case"video":case"audio":for(l=0;l<Jt.length;l++)b(Jt[l],r);break;case"source":b("error",r);break;case"img":case"image":case"link":b("error",r),b("load",r);break;case"details":b("toggle",r);break;case"input":Oo(r,i),b("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},b("invalid",r);break;case"textarea":$o(r,i),b("invalid",r)}$i(t,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),l=["children",""+a]):ur.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&b("scroll",r)}switch(t){case"input":Lr(r),Bo(r,i,!0);break;case"textarea":Lr(r),Uo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=kl)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[qe]=n,e[kr]=r,Qc(e,n,!1,!1),n.stateNode=e;e:{switch(s=Ui(t,r),t){case"dialog":b("cancel",e),b("close",e),l=r;break;case"iframe":case"object":case"embed":b("load",e),l=r;break;case"video":case"audio":for(l=0;l<Jt.length;l++)b(Jt[l],e);l=r;break;case"source":b("error",e),l=r;break;case"img":case"image":case"link":b("error",e),b("load",e),l=r;break;case"details":b("toggle",e),l=r;break;case"input":Oo(e,r),l=Li(e,r),b("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=J({},r,{value:void 0}),b("invalid",e);break;case"textarea":$o(e,r),l=Oi(e,r),b("invalid",e);break;default:l=r}$i(t,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];i==="style"?Eu(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&wu(e,o)):i==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&cr(e,o):typeof o=="number"&&cr(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ur.hasOwnProperty(i)?o!=null&&i==="onScroll"&&b("scroll",e):o!=null&&As(e,i,o,s))}switch(t){case"input":Lr(e),Bo(e,r,!1);break;case"textarea":Lr(e),Uo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+In(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?kt(e,!!r.multiple,i,!1):r.defaultValue!=null&&kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=kl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return de(n),null;case 6:if(e&&n.stateNode!=null)Xc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(S(166));if(t=Qn(wr.current),Qn(nn.current),Qr(n)){if(r=n.stateNode,t=n.memoizedProps,r[qe]=n,(i=r.nodeValue!==t)&&(e=ze,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[qe]=n,n.stateNode=r}return de(n),null;case 13:if(K(G),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Fe!==null&&n.mode&1&&!(n.flags&128))cc(),Ft(),n.flags|=98560,i=!1;else if(i=Qr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[qe]=n}else Ft(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;de(n),i=!1}else We!==null&&(ws(We),We=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||G.current&1?le===0&&(le=3):ho())),n.updateQueue!==null&&(n.flags|=4),de(n),null);case 4:return _t(),ps(e,n),e===null&&vr(n.stateNode.containerInfo),de(n),null;case 10:return Gs(n.type._context),de(n),null;case 17:return Ee(n.type)&&xl(),de(n),null;case 19:if(K(G),i=n.memoizedState,i===null)return de(n),null;if(r=(n.flags&128)!==0,s=i.rendering,s===null)if(r)Xt(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=Fl(e),s!==null){for(n.flags|=128,Xt(i,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return X(G,G.current&1|2),n.child}e=e.sibling}i.tail!==null&&ee()>At&&(n.flags|=128,r=!0,Xt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Fl(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Xt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Z)return de(n),null}else 2*ee()-i.renderingStartTime>At&&t!==1073741824&&(n.flags|=128,r=!0,Xt(i,!1),n.lanes=4194304);i.isBackwards?(s.sibling=n.child,n.child=s):(t=i.last,t!==null?t.sibling=s:n.child=s,i.last=s)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ee(),n.sibling=null,t=G.current,X(G,r?t&1|2:t&1),n):(de(n),null);case 22:case 23:return po(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?je&1073741824&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),null;case 24:return null;case 25:return null}throw Error(S(156,n.tag))}function Up(e,n){switch(Xs(n),n.tag){case 1:return Ee(n.type)&&xl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _t(),K(Se),K(he),no(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return eo(n),null;case 13:if(K(G),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(S(340));Ft()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return K(G),null;case 4:return _t(),null;case 10:return Gs(n.type._context),null;case 22:case 23:return po(),null;case 24:return null;default:return null}}var br=!1,fe=!1,Wp=typeof WeakSet=="function"?WeakSet:Set,F=null;function vt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){q(e,n,r)}else t.current=null}function hs(e,n,t){try{t()}catch(r){q(e,n,r)}}var Pa=!1;function Hp(e,n){if(Yi=gl,e=Yu(),Qs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var s=0,a=-1,o=-1,u=0,d=0,h=e,f=null;n:for(;;){for(var y;h!==t||l!==0&&h.nodeType!==3||(a=s+l),h!==i||r!==0&&h.nodeType!==3||(o=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===e)break n;if(f===t&&++u===l&&(a=s),f===i&&++d===r&&(o=s),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}t=a===-1||o===-1?null:{start:a,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ji={focusedElem:e,selectionRange:t},gl=!1,F=n;F!==null;)if(n=F,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,F=e;else for(;F!==null;){n=F;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,A=v.memoizedState,m=n.stateNode,p=m.getSnapshotBeforeUpdate(n.elementType===n.type?k:$e(n.type,k),A);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){q(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,F=e;break}F=n.return}return v=Pa,Pa=!1,v}function sr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&hs(n,t,i)}l=l.next}while(l!==r)}}function Kl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ms(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function bc(e){var n=e.alternate;n!==null&&(e.alternate=null,bc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[qe],delete n[kr],delete n[ns],delete n[Cp],delete n[jp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kc(e){return e.tag===5||e.tag===3||e.tag===4}function Aa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=kl));else if(r!==4&&(e=e.child,e!==null))for(gs(e,n,t),e=e.sibling;e!==null;)gs(e,n,t),e=e.sibling}function vs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vs(e,n,t),e=e.sibling;e!==null;)vs(e,n,t),e=e.sibling}var oe=null,Ue=!1;function vn(e,n,t){for(t=t.child;t!==null;)Zc(e,n,t),t=t.sibling}function Zc(e,n,t){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount($l,t)}catch{}switch(t.tag){case 5:fe||vt(t,n);case 6:var r=oe,l=Ue;oe=null,vn(e,n,t),oe=r,Ue=l,oe!==null&&(Ue?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&(Ue?(e=oe,t=t.stateNode,e.nodeType===8?ki(e.parentNode,t):e.nodeType===1&&ki(e,t),hr(e)):ki(oe,t.stateNode));break;case 4:r=oe,l=Ue,oe=t.stateNode.containerInfo,Ue=!0,vn(e,n,t),oe=r,Ue=l;break;case 0:case 11:case 14:case 15:if(!fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&hs(t,n,s),l=l.next}while(l!==r)}vn(e,n,t);break;case 1:if(!fe&&(vt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){q(t,n,a)}vn(e,n,t);break;case 21:vn(e,n,t);break;case 22:t.mode&1?(fe=(r=fe)||t.memoizedState!==null,vn(e,n,t),fe=r):vn(e,n,t);break;default:vn(e,n,t)}}function Ta(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Wp),n.forEach(function(r){var l=Jp.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Be(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,s=n,a=s;e:for(;a!==null;){switch(a.tag){case 5:oe=a.stateNode,Ue=!1;break e;case 3:oe=a.stateNode.containerInfo,Ue=!0;break e;case 4:oe=a.stateNode.containerInfo,Ue=!0;break e}a=a.return}if(oe===null)throw Error(S(160));Zc(i,s,l),oe=null,Ue=!1;var o=l.alternate;o!==null&&(o.return=null),l.return=null}catch(u){q(l,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Gc(n,e),n=n.sibling}function Gc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(n,e),Ge(e),r&4){try{sr(3,e,e.return),Kl(3,e)}catch(k){q(e,e.return,k)}try{sr(5,e,e.return)}catch(k){q(e,e.return,k)}}break;case 1:Be(n,e),Ge(e),r&512&&t!==null&&vt(t,t.return);break;case 5:if(Be(n,e),Ge(e),r&512&&t!==null&&vt(t,t.return),e.flags&32){var l=e.stateNode;try{cr(l,"")}catch(k){q(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=t!==null?t.memoizedProps:i,a=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&yu(l,i),Ui(a,s);var u=Ui(a,i);for(s=0;s<o.length;s+=2){var d=o[s],h=o[s+1];d==="style"?Eu(l,h):d==="dangerouslySetInnerHTML"?wu(l,h):d==="children"?cr(l,h):As(l,d,h,u)}switch(a){case"input":Di(l,i);break;case"textarea":ku(l,i);break;case"select":var f=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?kt(l,!!i.multiple,y,!1):f!==!!i.multiple&&(i.defaultValue!=null?kt(l,!!i.multiple,i.defaultValue,!0):kt(l,!!i.multiple,i.multiple?[]:"",!1))}l[kr]=i}catch(k){q(e,e.return,k)}}break;case 6:if(Be(n,e),Ge(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){q(e,e.return,k)}}break;case 3:if(Be(n,e),Ge(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{hr(n.containerInfo)}catch(k){q(e,e.return,k)}break;case 4:Be(n,e),Ge(e);break;case 13:Be(n,e),Ge(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(co=ee())),r&4&&Ta(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(u=fe)||d,Be(n,e),fe=u):Be(n,e),Ge(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(F=e,d=e.child;d!==null;){for(h=F=d;F!==null;){switch(f=F,y=f.child,f.tag){case 0:case 11:case 14:case 15:sr(4,f,f.return);break;case 1:vt(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(k){q(r,t,k)}}break;case 5:vt(f,f.return);break;case 22:if(f.memoizedState!==null){Ra(h);continue}}y!==null?(y.return=f,F=y):Ra(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{l=h.stateNode,u?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,o=h.memoizedProps.style,s=o!=null&&o.hasOwnProperty("display")?o.display:null,a.style.display=Su("display",s))}catch(k){q(e,e.return,k)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(k){q(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Be(n,e),Ge(e),r&4&&Ta(e);break;case 21:break;default:Be(n,e),Ge(e)}}function Ge(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Kc(t)){var r=t;break e}t=t.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(cr(l,""),r.flags&=-33);var i=Aa(e);vs(e,i,l);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Aa(e);gs(e,a,s);break;default:throw Error(S(161))}}catch(o){q(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Qp(e,n,t){F=e,Yc(e)}function Yc(e,n,t){for(var r=(e.mode&1)!==0;F!==null;){var l=F,i=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||br;if(!s){var a=l.alternate,o=a!==null&&a.memoizedState!==null||fe;a=br;var u=fe;if(br=s,(fe=o)&&!u)for(F=l;F!==null;)s=F,o=s.child,s.tag===22&&s.memoizedState!==null?La(l):o!==null?(o.return=s,F=o):La(l);for(;i!==null;)F=i,Yc(i),i=i.sibling;F=l,br=a,fe=u}Ia(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,F=i):Ia(e)}}function Ia(e){for(;F!==null;){var n=F;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fe||Kl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!fe)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:$e(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&va(n,i,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}va(n,s,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&hr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}fe||n.flags&512&&ms(n)}catch(f){q(n,n.return,f)}}if(n===e){F=null;break}if(t=n.sibling,t!==null){t.return=n.return,F=t;break}F=n.return}}function Ra(e){for(;F!==null;){var n=F;if(n===e){F=null;break}var t=n.sibling;if(t!==null){t.return=n.return,F=t;break}F=n.return}}function La(e){for(;F!==null;){var n=F;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Kl(4,n)}catch(o){q(n,t,o)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(o){q(n,l,o)}}var i=n.return;try{ms(n)}catch(o){q(n,i,o)}break;case 5:var s=n.return;try{ms(n)}catch(o){q(n,s,o)}}}catch(o){q(n,n.return,o)}if(n===e){F=null;break}var a=n.sibling;if(a!==null){a.return=n.return,F=a;break}F=n.return}}var Vp=Math.ceil,Pl=pn.ReactCurrentDispatcher,ao=pn.ReactCurrentOwner,De=pn.ReactCurrentBatchConfig,O=0,se=null,te=null,ae=0,je=0,yt=Dn(0),le=0,Cr=null,Gn=0,Zl=0,uo=0,or=null,xe=null,co=0,At=1/0,rn=null,Al=!1,ys=null,Pn=null,Kr=!1,Nn=null,Tl=0,ar=0,ks=null,al=-1,ul=0;function ge(){return O&6?ee():al!==-1?al:al=ee()}function An(e){return e.mode&1?O&2&&ae!==0?ae&-ae:zp.transition!==null?(ul===0&&(ul=Lu()),ul):(e=U,e!==0||(e=window.event,e=e===void 0?16:Wu(e.type)),e):1}function Xe(e,n,t,r){if(50<ar)throw ar=0,ks=null,Error(S(185));Fr(e,t,r),(!(O&2)||e!==se)&&(e===se&&(!(O&2)&&(Zl|=t),le===4&&Sn(e,ae)),Ne(e,r),t===1&&O===0&&!(n.mode&1)&&(At=ee()+500,Vl&&Mn()))}function Ne(e,n){var t=e.callbackNode;zf(e,n);var r=ml(e,e===se?ae:0);if(r===0)t!==null&&Qo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Qo(t),n===1)e.tag===0?Fp(Da.bind(null,e)):oc(Da.bind(null,e)),Ep(function(){!(O&6)&&Mn()}),t=null;else{switch(Du(r)){case 1:t=Ds;break;case 4:t=Iu;break;case 16:t=hl;break;case 536870912:t=Ru;break;default:t=hl}t=id(t,Jc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Jc(e,n){if(al=-1,ul=0,O&6)throw Error(S(327));var t=e.callbackNode;if(Nt()&&e.callbackNode!==t)return null;var r=ml(e,e===se?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Il(e,r);else{n=r;var l=O;O|=2;var i=ed();(se!==e||ae!==n)&&(rn=null,At=ee()+500,Vn(e,n));do try{Kp();break}catch(a){qc(e,a)}while(!0);Zs(),Pl.current=i,O=l,te!==null?n=0:(se=null,ae=0,n=le)}if(n!==0){if(n===2&&(l=Xi(e),l!==0&&(r=l,n=xs(e,l))),n===1)throw t=Cr,Vn(e,0),Sn(e,r),Ne(e,ee()),t;if(n===6)Sn(e,r);else{if(l=e.current.alternate,!(r&30)&&!Xp(l)&&(n=Il(e,r),n===2&&(i=Xi(e),i!==0&&(r=i,n=xs(e,i))),n===1))throw t=Cr,Vn(e,0),Sn(e,r),Ne(e,ee()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(S(345));case 2:$n(e,xe,rn);break;case 3:if(Sn(e,r),(r&130023424)===r&&(n=co+500-ee(),10<n)){if(ml(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=es($n.bind(null,e,xe,rn),n);break}$n(e,xe,rn);break;case 4:if(Sn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var s=31-Ve(r);i=1<<s,s=n[s],s>l&&(l=s),r&=~i}if(r=l,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vp(r/1960))-r,10<r){e.timeoutHandle=es($n.bind(null,e,xe,rn),r);break}$n(e,xe,rn);break;case 5:$n(e,xe,rn);break;default:throw Error(S(329))}}}return Ne(e,ee()),e.callbackNode===t?Jc.bind(null,e):null}function xs(e,n){var t=or;return e.current.memoizedState.isDehydrated&&(Vn(e,n).flags|=256),e=Il(e,n),e!==2&&(n=xe,xe=t,n!==null&&ws(n)),e}function ws(e){xe===null?xe=e:xe.push.apply(xe,e)}function Xp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!be(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Sn(e,n){for(n&=~uo,n&=~Zl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ve(n),r=1<<t;e[t]=-1,n&=~r}}function Da(e){if(O&6)throw Error(S(327));Nt();var n=ml(e,0);if(!(n&1))return Ne(e,ee()),null;var t=Il(e,n);if(e.tag!==0&&t===2){var r=Xi(e);r!==0&&(n=r,t=xs(e,r))}if(t===1)throw t=Cr,Vn(e,0),Sn(e,n),Ne(e,ee()),t;if(t===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,$n(e,xe,rn),Ne(e,ee()),null}function fo(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(At=ee()+500,Vl&&Mn())}}function Yn(e){Nn!==null&&Nn.tag===0&&!(O&6)&&Nt();var n=O;O|=1;var t=De.transition,r=U;try{if(De.transition=null,U=1,e)return e()}finally{U=r,De.transition=t,O=n,!(O&6)&&Mn()}}function po(){je=yt.current,K(yt)}function Vn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Sp(t)),te!==null)for(t=te.return;t!==null;){var r=t;switch(Xs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xl();break;case 3:_t(),K(Se),K(he),no();break;case 5:eo(r);break;case 4:_t();break;case 13:K(G);break;case 19:K(G);break;case 10:Gs(r.type._context);break;case 22:case 23:po()}t=t.return}if(se=e,te=e=Tn(e.current,null),ae=je=n,le=0,Cr=null,uo=Zl=Gn=0,xe=or=null,Hn!==null){for(n=0;n<Hn.length;n++)if(t=Hn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var s=i.next;i.next=l,r.next=s}t.pending=r}Hn=null}return e}function qc(e,n){do{var t=te;try{if(Zs(),il.current=_l,zl){for(var r=Y.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}zl=!1}if(Zn=0,ie=re=Y=null,ir=!1,Sr=0,ao.current=null,t===null||t.return===null){le=1,Cr=n,te=null;break}e:{var i=e,s=t.return,a=t,o=n;if(n=ae,a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var u=o,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Ea(s);if(y!==null){y.flags&=-257,Na(y,s,a,i,n),y.mode&1&&Sa(i,u,n),n=y,o=u;var v=n.updateQueue;if(v===null){var k=new Set;k.add(o),n.updateQueue=k}else v.add(o);break e}else{if(!(n&1)){Sa(i,u,n),ho();break e}o=Error(S(426))}}else if(Z&&a.mode&1){var A=Ea(s);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Na(A,s,a,i,n),bs(Pt(o,a));break e}}i=o=Pt(o,a),le!==4&&(le=2),or===null?or=[i]:or.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var m=Dc(i,o,n);ga(i,m);break e;case 1:a=o;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Pn===null||!Pn.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var x=Mc(i,a,n);ga(i,x);break e}}i=i.return}while(i!==null)}td(t)}catch(E){n=E,te===t&&t!==null&&(te=t=t.return);continue}break}while(!0)}function ed(){var e=Pl.current;return Pl.current=_l,e===null?_l:e}function ho(){(le===0||le===3||le===2)&&(le=4),se===null||!(Gn&268435455)&&!(Zl&268435455)||Sn(se,ae)}function Il(e,n){var t=O;O|=2;var r=ed();(se!==e||ae!==n)&&(rn=null,Vn(e,n));do try{bp();break}catch(l){qc(e,l)}while(!0);if(Zs(),O=t,Pl.current=r,te!==null)throw Error(S(261));return se=null,ae=0,le}function bp(){for(;te!==null;)nd(te)}function Kp(){for(;te!==null&&!kf();)nd(te)}function nd(e){var n=ld(e.alternate,e,je);e.memoizedProps=e.pendingProps,n===null?td(e):te=n,ao.current=null}function td(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Up(t,n),t!==null){t.flags&=32767,te=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,te=null;return}}else if(t=$p(t,n,je),t!==null){te=t;return}if(n=n.sibling,n!==null){te=n;return}te=n=e}while(n!==null);le===0&&(le=5)}function $n(e,n,t){var r=U,l=De.transition;try{De.transition=null,U=1,Zp(e,n,t,r)}finally{De.transition=l,U=r}return null}function Zp(e,n,t,r){do Nt();while(Nn!==null);if(O&6)throw Error(S(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(_f(e,i),e===se&&(te=se=null,ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Kr||(Kr=!0,id(hl,function(){return Nt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=De.transition,De.transition=null;var s=U;U=1;var a=O;O|=4,ao.current=null,Hp(e,t),Gc(t,e),mp(Ji),gl=!!Yi,Ji=Yi=null,e.current=t,Qp(t),xf(),O=a,U=s,De.transition=i}else e.current=t;if(Kr&&(Kr=!1,Nn=e,Tl=l),i=e.pendingLanes,i===0&&(Pn=null),Ef(t.stateNode),Ne(e,ee()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Al)throw Al=!1,e=ys,ys=null,e;return Tl&1&&e.tag!==0&&Nt(),i=e.pendingLanes,i&1?e===ks?ar++:(ar=0,ks=e):ar=0,Mn(),null}function Nt(){if(Nn!==null){var e=Du(Tl),n=De.transition,t=U;try{if(De.transition=null,U=16>e?16:e,Nn===null)var r=!1;else{if(e=Nn,Nn=null,Tl=0,O&6)throw Error(S(331));var l=O;for(O|=4,F=e.current;F!==null;){var i=F,s=i.child;if(F.flags&16){var a=i.deletions;if(a!==null){for(var o=0;o<a.length;o++){var u=a[o];for(F=u;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:sr(8,d,i)}var h=d.child;if(h!==null)h.return=d,F=h;else for(;F!==null;){d=F;var f=d.sibling,y=d.return;if(bc(d),d===u){F=null;break}if(f!==null){f.return=y,F=f;break}F=y}}}var v=i.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}F=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,F=s;else e:for(;F!==null;){if(i=F,i.flags&2048)switch(i.tag){case 0:case 11:case 15:sr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,F=m;break e}F=i.return}}var p=e.current;for(F=p;F!==null;){s=F;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,F=g;else e:for(s=p;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kl(9,a)}}catch(E){q(a,a.return,E)}if(a===s){F=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,F=x;break e}F=a.return}}if(O=l,Mn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot($l,e)}catch{}r=!0}return r}finally{U=t,De.transition=n}}return!1}function Ma(e,n,t){n=Pt(t,n),n=Dc(e,n,1),e=_n(e,n,1),n=ge(),e!==null&&(Fr(e,1,n),Ne(e,n))}function q(e,n,t){if(e.tag===3)Ma(e,e,t);else for(;n!==null;){if(n.tag===3){Ma(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){e=Pt(t,e),e=Mc(n,e,1),n=_n(n,e,1),e=ge(),n!==null&&(Fr(n,1,e),Ne(n,e));break}}n=n.return}}function Gp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,se===e&&(ae&t)===t&&(le===4||le===3&&(ae&130023424)===ae&&500>ee()-co?Vn(e,0):uo|=t),Ne(e,n)}function rd(e,n){n===0&&(e.mode&1?(n=Or,Or<<=1,!(Or&130023424)&&(Or=4194304)):n=1);var t=ge();e=dn(e,n),e!==null&&(Fr(e,n,t),Ne(e,t))}function Yp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),rd(e,t)}function Jp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(n),rd(e,t)}var ld;ld=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Se.current)we=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return we=!1,Bp(e,n,t);we=!!(e.flags&131072)}else we=!1,Z&&n.flags&1048576&&ac(n,El,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ol(e,n),e=n.pendingProps;var l=jt(n,he.current);Et(n,t),l=ro(null,n,r,e,l,t);var i=lo();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ee(r)?(i=!0,wl(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Js(n),l.updater=bl,n.stateNode=l,l._reactInternals=n,os(n,r,e,t),n=cs(null,n,r,!0,i,t)):(n.tag=0,Z&&i&&Vs(n),me(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ol(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=eh(r),e=$e(r,e),l){case 0:n=us(null,n,r,e,t);break e;case 1:n=Fa(null,n,r,e,t);break e;case 11:n=Ca(null,n,r,e,t);break e;case 14:n=ja(null,n,r,$e(r.type,e),t);break e}throw Error(S(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:$e(r,l),us(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:$e(r,l),Fa(e,n,r,l,t);case 3:e:{if(Uc(n),e===null)throw Error(S(387));r=n.pendingProps,i=n.memoizedState,l=i.element,hc(e,n),jl(n,r,null,t);var s=n.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=Pt(Error(S(423)),n),n=za(e,n,r,t,l);break e}else if(r!==l){l=Pt(Error(S(424)),n),n=za(e,n,r,t,l);break e}else for(Fe=zn(n.stateNode.containerInfo.firstChild),ze=n,Z=!0,We=null,t=fc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ft(),r===l){n=fn(e,n,t);break e}me(e,n,r,t)}n=n.child}return n;case 5:return mc(n),e===null&&ls(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,qi(r,l)?s=null:i!==null&&qi(r,i)&&(n.flags|=32),$c(e,n),me(e,n,s,t),n.child;case 6:return e===null&&ls(n),null;case 13:return Wc(e,n,t);case 4:return qs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=zt(n,null,r,t):me(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:$e(r,l),Ca(e,n,r,l,t);case 7:return me(e,n,n.pendingProps,t),n.child;case 8:return me(e,n,n.pendingProps.children,t),n.child;case 12:return me(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,s=l.value,X(Nl,r._currentValue),r._currentValue=s,i!==null)if(be(i.value,s)){if(i.children===l.children&&!Se.current){n=fn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var o=a.firstContext;o!==null;){if(o.context===r){if(i.tag===1){o=an(-1,t&-t),o.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?o.next=o:(o.next=d.next,d.next=o),u.pending=o}}i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),is(i.return,t,n),a.lanes|=t;break}o=o.next}}else if(i.tag===10)s=i.type===n.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(S(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),is(s,t,n),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}me(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Et(n,t),l=Me(l),r=r(l),n.flags|=1,me(e,n,r,t),n.child;case 14:return r=n.type,l=$e(r,n.pendingProps),l=$e(r.type,l),ja(e,n,r,l,t);case 15:return Oc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:$e(r,l),ol(e,n),n.tag=1,Ee(r)?(e=!0,wl(n)):e=!1,Et(n,t),Lc(n,r,l),os(n,r,l,t),cs(null,n,r,!0,e,t);case 19:return Hc(e,n,t);case 22:return Bc(e,n,t)}throw Error(S(156,n.tag))};function id(e,n){return Tu(e,n)}function qp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,n,t,r){return new qp(e,n,t,r)}function mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function eh(e){if(typeof e=="function")return mo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Is)return 11;if(e===Rs)return 14}return 2}function Tn(e,n){var t=e.alternate;return t===null?(t=Le(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function cl(e,n,t,r,l,i){var s=2;if(r=e,typeof e=="function")mo(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case at:return Xn(t.children,l,i,n);case Ts:s=8,l|=8;break;case Ai:return e=Le(12,t,n,l|2),e.elementType=Ai,e.lanes=i,e;case Ti:return e=Le(13,t,n,l),e.elementType=Ti,e.lanes=i,e;case Ii:return e=Le(19,t,n,l),e.elementType=Ii,e.lanes=i,e;case mu:return Gl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pu:s=10;break e;case hu:s=9;break e;case Is:s=11;break e;case Rs:s=14;break e;case kn:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return n=Le(s,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Xn(e,n,t,r){return e=Le(7,e,r,n),e.lanes=t,e}function Gl(e,n,t,r){return e=Le(22,e,r,n),e.elementType=mu,e.lanes=t,e.stateNode={isHidden:!1},e}function Fi(e,n,t){return e=Le(6,e,null,n),e.lanes=t,e}function zi(e,n,t){return n=Le(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function nh(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ai(0),this.expirationTimes=ai(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ai(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function go(e,n,t,r,l,i,s,a,o){return e=new nh(e,n,t,a,o),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Le(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Js(i),e}function th(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ot,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function sd(e){if(!e)return Rn;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(S(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ee(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(S(171))}if(e.tag===1){var t=e.type;if(Ee(t))return sc(e,t,n)}return n}function od(e,n,t,r,l,i,s,a,o){return e=go(t,r,!0,e,l,i,s,a,o),e.context=sd(null),t=e.current,r=ge(),l=An(t),i=an(r,l),i.callback=n??null,_n(t,i,l),e.current.lanes=l,Fr(e,l,r),Ne(e,r),e}function Yl(e,n,t,r){var l=n.current,i=ge(),s=An(l);return t=sd(t),n.context===null?n.context=t:n.pendingContext=t,n=an(i,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=_n(l,n,s),e!==null&&(Xe(e,l,s,i),ll(e,l,s)),s}function Rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Oa(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function vo(e,n){Oa(e,n),(e=e.alternate)&&Oa(e,n)}function rh(){return null}var ad=typeof reportError=="function"?reportError:function(e){console.error(e)};function yo(e){this._internalRoot=e}Jl.prototype.render=yo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(S(409));Yl(e,n,null,null)};Jl.prototype.unmount=yo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yn(function(){Yl(null,e,null,null)}),n[cn]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Bu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<wn.length&&n!==0&&n<wn[t].priority;t++);wn.splice(t,0,e),t===0&&Uu(e)}};function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ba(){}function lh(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var u=Rl(s);i.call(u)}}var s=od(n,r,e,0,null,!1,!1,"",Ba);return e._reactRootContainer=s,e[cn]=s.current,vr(e.nodeType===8?e.parentNode:e),Yn(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var u=Rl(o);a.call(u)}}var o=go(e,0,!1,null,null,!1,!1,"",Ba);return e._reactRootContainer=o,e[cn]=o.current,vr(e.nodeType===8?e.parentNode:e),Yn(function(){Yl(n,o,t,r)}),o}function ei(e,n,t,r,l){var i=t._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var a=l;l=function(){var o=Rl(s);a.call(o)}}Yl(n,s,e,l)}else s=lh(t,n,e,l,r);return Rl(s)}Mu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Yt(n.pendingLanes);t!==0&&(Ms(n,t|1),Ne(n,ee()),!(O&6)&&(At=ee()+500,Mn()))}break;case 13:Yn(function(){var r=dn(e,1);if(r!==null){var l=ge();Xe(r,e,1,l)}}),vo(e,1)}};Os=function(e){if(e.tag===13){var n=dn(e,134217728);if(n!==null){var t=ge();Xe(n,e,134217728,t)}vo(e,134217728)}};Ou=function(e){if(e.tag===13){var n=An(e),t=dn(e,n);if(t!==null){var r=ge();Xe(t,e,n,r)}vo(e,n)}};Bu=function(){return U};$u=function(e,n){var t=U;try{return U=e,n()}finally{U=t}};Hi=function(e,n,t){switch(n){case"input":if(Di(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Ql(r);if(!l)throw Error(S(90));vu(r),Di(r,l)}}}break;case"textarea":ku(e,t);break;case"select":n=t.value,n!=null&&kt(e,!!t.multiple,n,!1)}};ju=fo;Fu=Yn;var ih={usingClientEntryPoint:!1,Events:[_r,ft,Ql,Nu,Cu,fo]},bt={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sh={bundleType:bt.bundleType,version:bt.version,rendererPackageName:bt.rendererPackageName,rendererConfig:bt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pu(e),e===null?null:e.stateNode},findFiberByHostInstance:bt.findFiberByHostInstance||rh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zr.isDisabled&&Zr.supportsFiber)try{$l=Zr.inject(sh),en=Zr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ih;Pe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ko(n))throw Error(S(200));return th(e,n,null,t)};Pe.createRoot=function(e,n){if(!ko(e))throw Error(S(299));var t=!1,r="",l=ad;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=go(e,1,!1,null,null,t,!1,r,l),e[cn]=n.current,vr(e.nodeType===8?e.parentNode:e),new yo(n)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Pu(n),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Yn(e)};Pe.hydrate=function(e,n,t){if(!ql(n))throw Error(S(200));return ei(null,e,n,!0,t)};Pe.hydrateRoot=function(e,n,t){if(!ko(e))throw Error(S(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",s=ad;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=od(n,null,e,1,t??null,l,!1,i,s),e[cn]=n.current,vr(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Jl(n)};Pe.render=function(e,n,t){if(!ql(n))throw Error(S(200));return ei(null,e,n,!1,t)};Pe.unmountComponentAtNode=function(e){if(!ql(e))throw Error(S(40));return e._reactRootContainer?(Yn(function(){ei(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};Pe.unstable_batchedUpdates=fo;Pe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ql(t))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ei(e,n,t,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function ud(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ud)}catch(e){console.error(e)}}ud(),uu.exports=Pe;var cd=uu.exports,$a=cd;_i.createRoot=$a.createRoot,_i.hydrateRoot=$a.hydrateRoot;const Ua=[{id:"home",label:"首页"},{id:"insights",label:"洞察",hash:"#/insights"},{id:"works",label:"作品",hash:"#/works"},{id:"about",label:"关于",hash:"#/about"}],Wa=[{code:"zh",label:"中文"},{code:"en",label:"EN"},{code:"es",label:"ES"}];function oh({activeId:e,onNavigate:n}){const[t,r]=P.useState(!1),[l,i]=P.useState(!1),[s,a]=P.useState(()=>{try{return localStorage.getItem("lang")||"zh"}catch{return"zh"}});P.useEffect(()=>{try{localStorage.setItem("lang",s)}catch{}},[s]),P.useEffect(()=>{const u=()=>r(window.scrollY>50);return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]),P.useEffect(()=>{l?document.body.style.overflow="hidden":document.body.style.overflow=""},[l]);const o=u=>{i(!1),u.hash?window.location.hash=u.hash:n(u.id)};return c.jsxs(c.Fragment,{children:[c.jsxs("nav",{className:`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 h-[72px] flex items-center justify-between transition-colors duration-300 backdrop-blur-md border-b ${t?"bg-[#0b0a09]/90 border-[#262421]":"bg-[#0b0a09]/70 border-[#1c1a18]"}`,children:[c.jsx("button",{onClick:()=>n("home","top"),className:"font-medium text-[0.82rem] tracking-[0.28em] uppercase text-[#ece8e2] transition-colors duration-300 hover:text-[#c9a063]",children:"YANGZHI"}),c.jsx("div",{className:"hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2",children:Ua.map(u=>u.hash?c.jsx("a",{href:u.hash,className:`nav-item ${e===u.id?"active":""}`,children:u.label},u.id):c.jsx("button",{onClick:()=>n(u.id),className:`nav-item ${e===u.id?"active":""}`,children:u.label},u.id))}),c.jsx("div",{className:"hidden md:flex items-center rounded-full border border-[#2a2724] overflow-hidden",children:Wa.map(u=>c.jsx("button",{onClick:()=>a(u.code),className:`h-7 px-3 text-[0.72rem] leading-none transition-colors duration-200 ${s===u.code?"bg-[#ece8e2] text-[#0b0a09]":"text-[#9c9890] hover:text-[#ece8e2]"}`,children:u.label},u.code))}),c.jsxs("button",{className:"md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]",onClick:()=>i(!l),"aria-label":"菜单",children:[c.jsx("span",{className:`block w-6 h-[2px] bg-[#ece8e2] transition-all duration-300 ${l?"rotate-45 translate-y-[7px]":""}`}),c.jsx("span",{className:`block w-6 h-[2px] bg-[#ece8e2] transition-all duration-300 ${l?"opacity-0":""}`}),c.jsx("span",{className:`block w-6 h-[2px] bg-[#ece8e2] transition-all duration-300 ${l?"-rotate-45 -translate-y-[7px]":""}`})]})]}),c.jsx("div",{className:`fixed inset-0 z-[99] bg-[#0b0a09] transition-transform duration-300 md:hidden ${l?"translate-x-0":"translate-x-full"}`,style:{top:"72px"},children:c.jsxs("div",{className:"flex flex-col items-center justify-center h-full gap-8 pb-20",children:[Ua.map(u=>c.jsx("button",{onClick:()=>o(u),className:`text-2xl font-medium tracking-[0.1em] ${e===u.id?"text-[#c9a063]":"text-[#ece8e2]"}`,children:u.label},u.id)),c.jsx("div",{className:"flex items-center rounded-full border border-[#2a2724] overflow-hidden",children:Wa.map(u=>c.jsx("button",{onClick:()=>a(u.code),className:`h-9 px-4 text-sm leading-none transition-colors duration-200 ${s===u.code?"bg-[#ece8e2] text-[#0b0a09]":"text-[#9c9890]"}`,children:u.label},u.code))})]})})]})}const ah=[{value:"6+",label:"年经验"},{value:"12+",label:"上线产品"},{value:"3K+",label:"用户"}];function uh(){return c.jsxs("section",{id:"home",className:"hero-section",children:[c.jsxs("div",{className:"hero-inner",children:[c.jsxs("div",{className:"hero-main",children:[c.jsx("p",{className:"hero-label",children:"产品设计师 · 独立开发者"}),c.jsxs("h1",{className:"hero-title",children:[c.jsx("span",{children:"做让人"}),c.jsx("span",{className:"hero-title-accent",children:"真正喜欢"}),c.jsx("span",{children:"用的东西"})]})]}),c.jsxs("div",{className:"hero-side",children:[c.jsx("p",{className:"hero-lede",children:"我是创造试验室的主理人，一名跨领域的设计师与开发者。过去六年里， 我专注于打造简洁而有深度的数字产品——从概念到代码，从界面到体验。"}),c.jsx("p",{className:"hero-lede",children:"我相信好的产品是克制的：它只做一件事，但把这件事做到极致。 我的工作横跨设计工具、开发者基础设施与内容创作领域。"}),c.jsx("div",{className:"hero-stats",children:ah.map(e=>c.jsxs("div",{className:"hero-stat",children:[c.jsx("div",{className:"hero-stat-value",children:e.value}),c.jsx("div",{className:"hero-stat-label",children:e.label})]},e.label))})]})]}),c.jsxs("div",{className:"hero-foot",children:[c.jsx("span",{children:"向下滚动探索"}),c.jsx("span",{className:"hero-foot-arrow",children:"↓"})]})]})}const ch=`---
title: "不会那么痛，但也不会好得那么干脆"
date: "2026-08"
tag: "社会观察"
---

# 医保是一个身份奢侈品

医保不是天然的全民福利。在漫长的古代社会，医疗资源始终带着强烈的身份属性：宫廷太医院服务于皇权与官僚体系，民间虽有惠民药局、游方郎中，也有官府主导的瘟疫赈济与隔离制度，但对普通百姓而言，稳定、可及的医疗始终是稀缺品，一场重病就能拖垮一个家庭。只有当疫病、灾荒冲击到社会稳定时，全域性的医疗救济才会作为治理手段启动，本质上仍是防流民、保税基的配套措施。

医疗的平民化、普惠化，是现代社会才有的产物。



# 平民付出了什么？得到了什么？

1949 年之后，中国的医疗保障体系，从一开始就印刻着城乡二元结构的烙印。

1951-1960，与计划经济相匹配的三大医疗保障制度相继落地。城市职工和机关单位获得了来自企业和财政提供的“全包”高水平福利，但与之相反，受制于“农业支持工业、农村供养城市”的发展策略，农村只获得了集体互助的小额福利。为了城市的工业化，医疗福利的大蛋糕还是留给了“城里人”，而数量庞大的农民只获得了一小块蛋糕。

随着集体经济解体，农村合作医疗失去的靠山，绝大多数农民重新回到看病全自费的状态，农民背后一无所有。

而随着90年代国企深化的改革，下岗潮成了压垮城镇医疗体系的最后一个稻草。1998 年，城镇职工基本医疗保险制度正式推出，标志着城市医疗保障从「企业福利」转向「社会保险」，责任由企业、个人、社会共同分担。私企承担了所有，而此时的农村，依然是医疗保障的真空地带。

2003 年，新型农村合作医疗制度（新农合）启动。农民确实因此第一次拥有了普惠性的公立医疗保障，这块迟来的蛋糕吃上了，但也被强制性地与这个体系的风险捆绑在了一起。

中国13亿人，每人给我一块钱，我就有13亿——这个梦想以某种方式实现了。

至此，覆盖十几亿人的全民医保框架才算真正搭建完成。而真正平等吃上这块蛋糕，实现城镇和乡村的医保报销一样的“六统一”在2019年才实现。

十几亿人共同缴费、共同共济的医保池，极大地提升了整个体系的抗风险能力。但随之而来的问题是：本质是当代工作人群缴费，供养当前的退休人群。人口老龄化加深、新生人口减少，意味着缴费的人变少、花钱的人变多，基金收支压力会持续增大。年轻人对这个体系的未来期待并不乐观。

为了基金池的可持续性，新一轮的改革陆续落地——新的医共体打包支付、DRG/DIP付费政策，其目的是解决医疗基金的高效使用问题。

通俗来说，医共体打包支付的意思就是，县域所有的医疗机构作为一个共同体，医保机构给医保共同体划定一笔费用，在这个资金范围内进行报销，没用完的算奖励，超支部分医保和医共体按比例分担。同时也倒逼医院把重心从「治病」转向「防病」，减少不必要的住院和开支。

DRG/DIP付费则是针对同一个病种只支付一个套餐价，在此价格内把病看好。这貌似解决了过度医疗的问题，但同时降低成本成为了重要的导向，在此之下，价格信号被放大，渐有劣币驱逐良币之势。



目前集采的政策的体感则是：割钱包没那么痛了，但药越来越不管用了；不会痛死，但也不会好得那么干脆。

# 当医生，还是吃蛋糕的好选择吗？

作为接盘侠的我们能不能也吃上这块蛋糕？如果说相较于封建社会，蛋糕是吃上了。能吃多少，就看投胎的时机了。

如果没有身份的支持，出生在农民的我们吃上这块蛋糕的方式就是，加入到这个蛋糕体制内——成为一名医生。

在计划经济时期，医生的收入完全来自于“大锅饭”，医生拿等级工资，收入和职称、工龄、技术级别，整体差距不大，稳是稳，没有暴富的空间。

进入「财政拨款 + 医疗服务 + 药品差价」的时代后，医生的收入和业务量、处方量深度绑定。80s，90s学医从业的人，刚好赶上医疗需求爆发、供给相对不足的红利期：只要肯干，哪怕是乡镇医院的医生，也能靠业务量过上不错的小康生活。这也是「医生是铁饭碗、高收入」印象的来源。



我们80s，90s的填志愿正处于这个阶段。

但红利期正在过去。

一方面，人口向大城市集中，县域、乡镇的病源持续萎缩，基层医院的创收空间越来越小；另一方面，医保控费成为主线，医院从「多做多得」变成「结余多得」，医生的工作量、绩效考核压力不降反升，收入却未必同步增长。医患矛盾、职称内卷、体制内的层级壁垒，都让这份职业的性价比不如从前。

饿肯定饿不死，但想靠当医生轻松吃上「厚蛋糕」，已经越来越难了。这不是某个人的问题，是整个行业的分配逻辑变了。我的许多朋友就正处于这个状况之中也略作一些佐证。

# 这块蛋糕还能怎么吃？

放眼全球，主流的医疗模式大致可以归为四类：英国的国家公费医疗模式、德国的法定社会保险模式、美国的市场化商业医疗模式、新加坡的强制个人账户模式。没有一种是完美的：英国公平性强但等待周期长、效率受诟病；美国技术顶尖但公平性极差、成本高企；新加坡效率高但弱势群体保障弱。

当前中国参考了日本的精细化分层报销策略，吸收不同模式的长处，共同构成了「低成本、广覆盖、保基本」的特点——这是我们的优势，或许能让中国在国际医疗旅游的版图上争一争。

从其他发达国家的主流医疗模式上康养看到，我们给这些**追求“性价比”的海外中低收入群体；寻求“高品质+独特技术”的全球患者提供中国的医疗方案——快，好，省。而在全球范围内，已经布局了医疗旅游的国家有泰国（性价比）、新加坡（高品质）、韩国（专精化）。他们已经走在路上。相比之下，中国的入境医疗仍处于起步阶段。2025年，国内重点涉外医院接诊国际患者达128万人次，其中专程赴华就医的境外患者约41.3万人次——这个数字不及马来西亚（年接待超130万）或韩国（201万）的零头。但从趋势来看，增长势头明显：2025年境外患者赴华就医总量同比增长63%，上海公立医院接诊外籍患者达7.32万人次，云南边境某县级医院接诊外籍患者同比增长89%。从一线城市的三甲到边境县城的地方医院，越来越多的外国患者正在把中国纳入他们的就医选项。

**

如果说泰国的优势是“沙滩+手术”，韩国的优势是“医美+K-pop”，那么中国的独特切入点或许是 **“旅游+医疗+康养”** ——将中医药文化、生态疗养资源与高效诊疗服务深度结合。中医理疗、牙科、眼科甚至被一些外媒称为来华旅游的“新三件套”。从海南的热带气候疗养到云南的傣医药跨境服务，从针灸推拿到中西医结合的慢病康复，这些带有东方文化底色的健康服务，是其他国家难以复制的差异化资源。

但这条路要走通，背后支撑的体系还远未完善。**签证层面**，目前的免签或短期签证政策尚难覆盖复杂的诊疗周期；**服务层面**，多数医院缺乏系统的多语种导诊、国际保险直付结算、宗教及饮食适配等配套能力；**品牌层面**，中国医疗在国际上几乎没有品牌认知——印尼每年约150万至200万人赴海外就医，绝大多数选择了马来西亚，“不是因为马来西亚医疗水平全球领先，而是长期的市场推广的结果”，绝大多数印尼人“根本不知道中国医疗是什么水平”；**制度层面**，外商独资医院试点已在九省市启动，国际医疗服务规范也在逐步建立，但从政策落地到形成成熟的产业生态，仍需时日。



历史不会停在原地，蛋糕也不会永远一样。重要的是，我们还在牌桌上，还看得见未来的形状。

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/bce70e3e-d5b3-4191-bd37-8e4cc18740cf/eb01758b-6652-4e7c-8305-8d28a045e9b8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPRAXHTD%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T051445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIhadJ2gc9SA3cb0SfnJMLYveoWdwX89cr8Q19mPU8DwIhAIxCOO587lSB2jq%2Bt%2F56RZUF4sD3N9t9vJvUDB8%2BahCPKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyD5A19CK4QKzy0njoq3AOna2GUuB5HwTJb%2BP9yr5TrY%2BLXoUwQAAMLZ1sveFu47fdd5CjTub62dNv8fTasUgwzKg7%2FY3IABew0tO3sP6cebJIphvPV8mPiBtM1B%2Bm0PUXFfc2Ol6NYtzaWAi1aYRRkp9UomsWG6SoYrtkGSlkxkIvHspGN5gsZB3WC9hwbefetA%2FjG3lRt%2BtlJflPn0RoDRg60s4PSY6iioR4iSWjcDiZML0kJooRQR%2Fa1K0jr5YPO74Klw7aoPEzAffIBJe8DbyvgRtOTpI4JSZ4RLT2T1NjZC3%2BVLmvFEwzIDQQz1lweOa73H0K%2FIAKHHZoFAhnfTMWvGUZQ8xrfvHpTB7L6dJZPCOn9nJ2kesayiKj4Ka6c4h3MVnVydQ20kS6KbmK1qHHhtcURpCTZCLrzMOvIkeOSk4uWnu8aVKf1%2BUtua7rggKYe9jp3CgOQDAY5bBLWQxMVzkYfBrbrXaFprnHfd11ksAqiOLpZzuNn5RAQTTl2VIA8Wtfro9D4fMxPQv%2BavteuoBFBVq1ty44mg8k0zAu3wgfEf%2FrTQO2pejhE24tOuFd7Bq2tW1T9hBEetO8Zmi9z6rEqHCsCtRdr%2FcbbJPUpaz9SHBXA9MqUODtIsfQHtaCiOM%2BzTklM3TDHqZ%2FUBjqkAdsj2LzLRW8q3uWBL2aPJq223f7tj%2B7iJxRJ8Ui%2Fsdki8uZCYItiYLNCCQuL67nOy2Ptxk%2BIS0PkxZ7mGyw%2B6mHx8E2xi%2Fw5zDbjFD6hxKdDUolSmWa6sM16ABCFL9tMVUqAXUyCy6WjmwzzQPAwALbrhfmTMzMpyKMuKfGiB5WO8acTXgjyfOFJ2uSO%2B91JUVdLF6DVbHmDDnGKVTWotDqI13UL&X-Amz-Signature=95908e0ba944e2b39afcc34e65aceb27e81a4d84ba97f7b4b21be2afb5d66236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/bce70e3e-d5b3-4191-bd37-8e4cc18740cf/008518dd-537a-4c54-818c-0b6b2bfc4aa7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPRAXHTD%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T051445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIhadJ2gc9SA3cb0SfnJMLYveoWdwX89cr8Q19mPU8DwIhAIxCOO587lSB2jq%2Bt%2F56RZUF4sD3N9t9vJvUDB8%2BahCPKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyD5A19CK4QKzy0njoq3AOna2GUuB5HwTJb%2BP9yr5TrY%2BLXoUwQAAMLZ1sveFu47fdd5CjTub62dNv8fTasUgwzKg7%2FY3IABew0tO3sP6cebJIphvPV8mPiBtM1B%2Bm0PUXFfc2Ol6NYtzaWAi1aYRRkp9UomsWG6SoYrtkGSlkxkIvHspGN5gsZB3WC9hwbefetA%2FjG3lRt%2BtlJflPn0RoDRg60s4PSY6iioR4iSWjcDiZML0kJooRQR%2Fa1K0jr5YPO74Klw7aoPEzAffIBJe8DbyvgRtOTpI4JSZ4RLT2T1NjZC3%2BVLmvFEwzIDQQz1lweOa73H0K%2FIAKHHZoFAhnfTMWvGUZQ8xrfvHpTB7L6dJZPCOn9nJ2kesayiKj4Ka6c4h3MVnVydQ20kS6KbmK1qHHhtcURpCTZCLrzMOvIkeOSk4uWnu8aVKf1%2BUtua7rggKYe9jp3CgOQDAY5bBLWQxMVzkYfBrbrXaFprnHfd11ksAqiOLpZzuNn5RAQTTl2VIA8Wtfro9D4fMxPQv%2BavteuoBFBVq1ty44mg8k0zAu3wgfEf%2FrTQO2pejhE24tOuFd7Bq2tW1T9hBEetO8Zmi9z6rEqHCsCtRdr%2FcbbJPUpaz9SHBXA9MqUODtIsfQHtaCiOM%2BzTklM3TDHqZ%2FUBjqkAdsj2LzLRW8q3uWBL2aPJq223f7tj%2B7iJxRJ8Ui%2Fsdki8uZCYItiYLNCCQuL67nOy2Ptxk%2BIS0PkxZ7mGyw%2B6mHx8E2xi%2Fw5zDbjFD6hxKdDUolSmWa6sM16ABCFL9tMVUqAXUyCy6WjmwzzQPAwALbrhfmTMzMpyKMuKfGiB5WO8acTXgjyfOFJ2uSO%2B91JUVdLF6DVbHmDDnGKVTWotDqI13UL&X-Amz-Signature=8c6c30391ebfbd93abbdea35c63a4252c6ad4fb71115f74150b657f3b4dfb47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
`,dh=`---
title: "中国接如何接住泼天富贵的四十年"
date: "2026-09"
tag: "中国往事"
---

# 天时：画圈的时机刚刚好

二战后在马歇尔计划的推动下，西方制造业迅速崛起。。随着产品走向成熟与标准化生产，资本开始遵循利润最大化的逻辑，逐渐向低成本地区转移。

这一转移浪潮在东亚呈现出经典的“雁行模式”：日本作为“领头雁”率先承接了西方的产业转移；随后在20世纪60至70年代，产业又向“亚洲四小龙”（韩国、新加坡、中国香港、中国台湾）转移。到了80至90年代，随着四小龙劳动力成本上升，制造业再次面临转移窗口。恰逢此时，中国推行改革开放，精准接住了这波产业转移的“泼天富贵”。

# 人“和”：人矿的燃烧与汲取

中国承接这一波产业转移的底气，源于人口成本带来的相对优势。

改革开放前，中国长期实行“剪刀差”制度：一方面通过统购统销压低农产品价格，另一方面抬高了工业品价格，通过汲取农业剩余来支撑重工业化。因此，农民的工资起点很低。同时，户籍制度严格限制农业人口向城市自由流动，使他们无法享受城市医疗、教育福利，进一步压低了劳动力的价格预期。

改革开放带来了海量订单，珠三角地区急需大量劳动力。反观农村，土地有限，即使增加更多的人力投入也无法大幅度提高农作物产量。这部分过剩劳动力的边际产出接近于零。务农机会成本极低，即使外企给出的工资在国际看来微不足道，对农民而言仍是巨大的收入跃升。于是，大量的剩余劳动力背上行囊远走他乡，乘坐绿皮火车、大巴车涌入经济特区，为承接产业转移提供了近乎无限的劳动力供给。

当时的产业转移多为劳动密集型产业，技术门槛不高。尽管中国当时的技术水平及配套条件尚不完善，但极低的劳动力成本赋予了产品极强的比较优势，使得在中国生产的机会成本远低于其他国家。

# 地“利”：靠土地拉动的投资与消费

改革开放设立的经济特区，为外资进入提供了最初的制度基础。而2001年加入WTO，则通过倒逼国内规则与国际接轨，加速了“世界工厂”的形成。

随着产能爆发，中国出口制造了巨额贸易顺差。大量的美元流入中国。强制结汇的制度下，企业赚取的美元必须兑换成人民币，央行被动投放基础货币。对外贸易越好，获得的美元越多，需要新印的人民币数量也越大，因而国内货币流动性增强，为了防止资产的贬值和通货膨胀，央行不得不进行冲销干预。

1996年分税制改革之后，地方财政的财权与事权严重不匹配，土地财政逐渐成为地方政府的重要收入。土地被资产化，通过银行信贷杠杆进一步推高了房地产价格。房地产的扩张客观上成为了资金的“蓄水池”，虽然推高了房价，但也让居民账面资产增加，在特定时期刺激了消费欲望。

再加上官员晋升与地方GDP挂钩，引发了激烈的“县域竞争”。地方政府纷纷以税收优惠、廉价土地和完善基建为筹码招商引资。 这种竞争极大地提高了对外资的开放程度，拉动了投资这驾马车。

在这种繁荣的景象下，外资认为中国不仅是生产极低，更是一个很有潜力、正在增长的消费市场。为了降低物流成本并贴近用户，大量市场导向型产业选择在中国落地生根。与此同时，中国大力建设港口、电力、高速公路和高铁等基础设施，让庞大的物流网络成为可能，进一步巩固了世界工厂的地位。

# 变局：拐点已来

2004年，沿海城市已出现“民工荒”，普通劳动者工资持续上涨，发出了刘易斯拐点信号。然而受限于户籍制度，大量劳动力因户籍、土地、年龄、技能等原因被困在农村无法自由流动。这导致拐点的到来具有滞后性和摩擦性。直到2010年前后，随着农名工工资连续多年两位数上涨、增速却持续下滑，农村剩余劳动力的“无限供给”状态才真正走向终结。

至此，我们达到了人口红利的拐折点。底层游戏规则已经发生改变，曾经的世界工厂模式面临重构，中国经济必须寻找新的运转逻辑。
`,fh=`---
title: "以家之名行暴：亲密关系中的暴力为什么被豁免？"
date: "2026-09"
tag: "社会议题"
---

如果我们只是陌生人时，法律会保护我们免于其他人的暴力伤害；而当暴力转移到家庭内部，发生在夫妻之间时，施暴者一方却可以以“这是家事”“家庭纠纷”来脱逃制裁。暴力行为增加“家庭”的定语就被归类为家内事，警察往往无法或不愿介入。

当一方非自愿而强行发生关系时，可被视作为强奸。但当两者确立了结婚关系之后，若一方不愿发生性关系时，却很少被视为强奸事件。是因为我们默认婚内就具有双方强制或无条件为另一方提供性服务的义务吗？

# 1.家庭关系如何成为“免死金牌”？

为何婚姻关系一旦确立，就给施暴者和违法者提供了一个特权或庇护？

在西方自由主义传统中，社会会被分成两个部分：公共领域和私人领域。涉及市场、政治的事务归属于公共领域，家庭事务属于私人领域，人们认为国家不应该干预私人领域的事务，家庭是豁免的总根源。而在中国的家国同构中，国家就是家庭的放大版，君君臣臣的关系被映射到父父子子中，忠君即为孝道，这种国家政治秩序的底层化使得家庭/家族就是一个治理单元，家庭纠纷自有宗法/家法处置，诉诸官府被视为"家丑外扬"，是对家族秩序的破坏。

两者路径不同，却同样地实现造成一种后果——家庭内部的权力不平等都被自然化、合法化了。

在历史上婚姻被视为一次性、不可撤销的概括同意。也就是说，只要结婚，就等于永远同意这种性行为。在英美普通法的夫妻一体原则下已婚妇女的所有权力——签字权、财产权、起诉等都进行让渡。而在中国传统社会的“夫为妻纲”体系下，这种权利让渡更加彻底：妻子的意愿不被纳入法律考量，婚内默许不存在强奸行为。

婚内强奸发的豁免曾具历史合理性，但这种制度本质上是父权制的产物，服务于父权利益，不代表其合乎义理。现代法律已彻底废除该条例，核心理由是你不能因为签了这份合同，就永远把自己卖作奴隶，因为人身权是不能让渡的。所以，婚姻也不能构成对性行为永久性的让渡。

法律虽改，但文化惯性还在，大清已亡，还有人想当皇帝。

这种文化的惯性也造成了制度的沉默，给家庭暴力外加一层保护伞。长期以来，家庭暴力是不受警察保护，即使受害者报警了，警方或基层组织也常以"家庭纠纷"“清官难断家务事”为由不予介入，要求家庭内部自己解决。表面上采取的是中立立场，但实际上默许了私域内这种支配关系的延续。因此，它的不干涉本身就是一种立场，它既维持了既有权利的不平等，让施暴者免于追责，这是一种结构性暴力。

历史条件和文化基础赋予了家庭治理单位长时间的豁免自治权，所以现代社会在介入时就会出现一个问题：当施暴者以家事为豁免盾牌时，外界如何辨别？

双方缔造婚姻关系过程中常因双方的观念、习惯而产生冲突，需要进行大量的关系磨合。而这种冲突往往发生在隐秘门后，没有目击者，甚至伤害无痕，外界无法可见，甚至连受害者自己难以分清这是否是一种伤害——冲突与犯罪之间的纠纷界限划定清楚？什么样的冲突可以归纳为常规亲密关系的范畴，而什么样的冲突可以上升为社会法律的管理范畴？

# 2.社会何时可以介入？

面对“清官难断家务事”的豁免惯性，社会的介入必须有一套清晰的标准：

无论在家庭或者是社会，人首先是人，无论他处于何种关系之下，法律都应该保障他作为一个社会人应有的自然权利——自由权、生命权、隐私权、财产权、人身安全权等。

当冲突是平等主体之间的争执，仍可通过沟通、调解等方式化解，则豁免有效。当冲突处于不平等的结构之下，社会就应该强制介入：比如一方对另一方形成系统性的支配；被剥夺行动、社交、经济、性自主权力，制造不可逆的身心创伤和持续恐惧，此时已非家事，而是赤裸裸的犯罪。

虽然如此，即便法律明确了介入标准，实际执行中仍面临重重障碍。一些身体伤害、隔离、经济控制等实质性的行为有迹可循，但隐性侵害却很难找到证据——煤气灯效应中，施害者通过持续否定受害者的感知与记忆、扭曲其眼中的真实，使其怀疑自己的判断力乃至理智。这种伤害往往造成强烈的心理不适，但伤害的程度难以评估，伤害因果关系难以证实，证据难以收集，导致法律难以落实。

同时司法实践也极为谨慎，比如中国司法实践中对婚内强奸认定门槛极高，通常仅在婚姻关系非正常存续期间（如分居、离婚诉讼）才予以认定。法律既没有完全否定义务一说，也没有完全承认婚内性义务。2021年河北磁县赵某案中赵某在妻子提起离婚诉讼期间酒后强行与妻子发生性关系未遂，被判处有期徒刑八个月，其量刑远轻于普通的强奸罪。2025年内蒙古婚内强奸案，被告在离婚冷静期内殴打妻子致轻伤一级并强行发生性关系，证据确凿，但案件审理超过一年仍未宣判，足见司法谨慎程度。法律在进步，但文化惯性和司法谨慎仍在拖后腿。

虽然立法与执法都在撬开那扇施暴的门，受害者能否主动开门又是一道难关。外加“家丑不可外扬”的传统文化陋习，在家庭荣誉高于一切的道德追求下，牺牲个体权利成全家族荣誉，这是司空见惯的事情。社会即使想要介入，如果被害者被文化陋习困住不主动走出家门，维权也就无从谈起。

# 3.过度介入会不会导致家庭关系本身的"法律化"？

有人担心法律"过度介入"会破坏家庭的私密性，夫妻床头打架床尾和，没必要把事情闹大，把亲密关系变成冷冰冰的法律条文。但这种过度介入的恐慌本质上是传统的豁免思维在作怪，仍然想把施暴行为包装成家庭的温暖。

当一段关系的冲突触发法律介入，则说明一方的基本权利——生命权、安全权、财产权、人格尊严等已经受到侵害或面临紧迫威胁。此时国家保护的义务被触发，受害者有权寻求法律的保护。

同时，"过度介入"的前提是执法已经达到高强度状态，而我们目前的现实还远未达到。在执法都还没有到位的时候讨论过度执法的问题，就如同病人还没得到救治时候就担心用药过量，是一种提前透支焦虑行为。

自2016年《反家庭暴力法》实施至2026年，全国法院累计签发人身安全保护令3.3万份，签发率从2016年的52.0%提升至2022年的77.6%。然而，妇联2016至2022年受理的家暴投诉达25.2万余件次，同期法院签发的保护令仅1.5万余份——比值约6%，意味着绝大多数投诉未能转化为法律保护。第四期中国妇女社会地位调查显示，婚姻生活中女性遭受配偶身体和精神暴力的比例为8.6%，对应数千万量级的受害人口，与年均三千余份的保护令之间存在巨大鸿沟，说明绝大多数侵害根本没有进入法律程序。官方报告也指出，受害人"不懂申请、不敢申请"的情况普遍存在，未举起法律武器的受害者数量远不止于此。

其次，在法律执行的程序是阶梯式的：一般是先通过劝说、教育、警告等手段制止伤害，其次根据冲突的严重程度才逐步上升到行政处罚、刑事制裁。如果是一段健康的亲密关系，内部可以通过道歉、共情、沟通等方式自行化解，只有当内部修复机制失效才会对外寻求帮助。因此，当冲突发生时已经需要上升到“法律化”，则说明这段关系本身就处于不尊重或不平等的结构之中。

无论身处何种关系中，时刻谨记：我们先是人，其次才是身份。进入一段关系不代表要交出作为社会人的基本权利，以爱之名的伤害依然是伤害。
`,ph=`---
title: "你的设计不是不够创意，是想法太多"
date: "2026-08"
tag: "随笔"
---

摘要：在资源有限的中小型制造企业中,设计师常陷入"创新功能不足"的焦虑,进而走向功能堆砌。本文通过实践复盘指出,真正的问题往往不是创新点太少,而是创新方向与公司战略定位、资源能力及市场需求三者错配。文章系统梳理了"成本导向型微创新"企业的特征与设计应对策略,为处于类似情境的设计师提供务实的思考框架。

年底摸鱼,顺手复盘今年做的设计,又翻了翻自己的知识库。要不怎么说做设计最忌纸上谈兵呢,想得很美好,真动手才发现问题多多。

入行工业设计已经两年有余,我长期被一个焦虑困扰:提案时总觉得产品创新点不够"新",缺乏一击即胜的"卖点"。没有那种一拿出来,全场 wow~ 惊叹的感觉。

这应该是一种病,名叫"天才设计师幻想症"。这种病可能是当驴又当马累的——我既是设计师又兼任产品经理。

别夸,无才,只是公司小命苦罢了。

最近我对这个焦虑有了新的理解——有时候不是创新点不够,而是太多了。

细细盘点,我的病症是这样一步步发展来的。

# 误区1:没看清公司的"江湖定位"

刚进入公司时我挺迷茫:公司究竟该走成本杀手路线还是差异化路线?

别笑,对刚毕业毫无实战经验的我来说,这是作战总方针。

细细分析,如果走纯成本路线,我们没优势——量不大,供应链议价能力弱,BOM 成本压不下去。

想通过差异化路线提升产品价值,但公司技术有限,颠覆性的功能差异难以实现。

于是,在这种不清不楚的情况下,我本能地选择了最"安全"的路:功能堆砌——好像堆得越多,产品就越"高级"。

理论上,公司应该有机制拉住我这种放飞自我的行为。可惜,没有。我的权力实在"太大了"——前期跟老板汇报产品方向,比如目标人群、核心功能、价格区间,给两个选项让他选,他往往只回一句:"没问题,继续干吧。"

典型的 A OR B,选择 OR。我称之为职场上的"or 困境"。

表面是信任,实则是战略缺位。

直到今年某次风扇提案后,老板突然灵魂发问:你的产品卖点在哪里?消费者凭什么买你的产品而不是别人的?

那一刻,我第一反应是:是不是痛点挖得不够深?是不是创新还不够猛?

但它就一个风扇啊!能有啥创新功能?

这几天摸鱼闲下来终于想通了:我的"创新焦虑"和随后的"功能堆砌",根源在于对公司战略角色理解不清。

我们公司其实属于典型的"成本导向型微创新者"——也叫"高性价比功能优化者"。这是当前中国制造业里常见的一种企业角色。

具体表现为:

**低成本**。控制 BOM 成本、制造成本、供应链成本,能省一分是一分;尽管我们在此方面优势并不突出。

**高感知微创新**。比如人机交互的优化、更贴合细分使用场景、局部性能略微提升,做那些用户能明显感觉到"哎,有点不一样"的小优化。

它与纯粹的低成本化方向有差别。用我们老家话说,这类产品追求的是"又平又灵"——平价但不廉价,实用还带点小惊喜。

那这类产品的目标群体是哪些人?

不是只看价格的"纯性价比党",而是价格敏感但不愿完全牺牲体验的大众群体。他们偶尔会跟风走个平替,但更多是理智实用派。尤其在经济下行期,这类人越来越多——他们愿意为"一点小确幸"多花几块钱,但绝不会为华而不实的功能买单。

因此像风道设计、电机设计、轻薄电池……这种需要高投入和专业技术人才的事情就不要想了。你手里的零件就是那些,预算就是那么紧,你只能在有限的设计约束下去设计。

# 误区2:没对齐公司的"生存逻辑"

这类公司通常扎堆在红海市场,生存法则就八个字:细节体验+合理价格。

真正的竞争力 = 低成本 × 高感知的功能差异

我也曾做过不少"创新功能",但要么方案被毙,要么上市后用户毫无感知。问题出在哪?不是功能不好,而是没让用户"看见、摸着、感受到"它的价值。

举个例子:市面上风扇长得都差不多,价格也差不了多少。真正拉开差距的,往往是些小细节——比如加个挂钩(方便挂床头)、加个氛围灯(晚上不刺眼,放床头刷手机)、支持单手折叠(通勤党狂喜,直接塞通勤包)……

这些功能背后是对使用场景的精准狙击。

那问题又来了:怎么判断哪些功能值得作为核心卖点去倾注资源?

# 误区3:不会筛选"真差异化"功能

判断一个功能值不值得做,很简单,从用户、竞争对手、公司三个方面看:

**1. 用户维度:用户愿不愿意为它掏钱?**

功能的增加势必造成成本上涨,用户是否觉得"这钱花得值"?如果改善的是"不存在的痛点",用户不会为这些功能额外付费。我们要解决的是高频、真实、未被很好满足的痛点。

别陷入"别人做过了我就不能做"的误区——在红海市场,与其耗尽心力寻找蓝海新痛点,不如把已知痛点解决得更优雅、更彻底。解决方案可以是"从无到有",也可以是"从有到优"。(很可惜,我去年也陷入过这种误区)

首要前提是:**先定好价格带**!超出目标价位的功能,再酷也得砍。

**2. 竞争维度:在对手面前,功能能否被看见和比较?**

差异化必须写在产品脸上,或握在用户手里。

把我们的产品与竞品放在一起,用户能否感知两者的差异,能否通过外观或交互反馈直接比较且值得比较:如体积更小?重量更轻?操作更顺?灯光更柔?这些才是有效的差异化。但如果要比较的功能隐藏在内部、无交互反馈(如电机参数等),或者需要专业知识才能理解,那这种在后期难以营销,就得做好扑街的心理预期。

**3. 公司维度:是否用最低成本撬动了最大感知?**

回到一个问题:评估在已经限定的成本下选择进行哪方面功能的改动。比如一圈 RGB 灯带的成本,是否带来了与之匹配的体验增值?

以及在有限成本下选择合适的功能展现方式。同样是加灯效,绕一圈 LED 和只在底座上加一个发光模块,成本差好几倍。

在预算有限的情况下,选那个成本低、感知强、易传播的方案。

# 误区4:没建立适配的设计方法论

在这种策略下,如何用设计强化性价比的感知?

从视、听、触三个方面优化,记住三个字:看得见、摸得着、感受得到。

**1. 可看见:把功能"外显化"**

把跟竞品差异化的功能变成可感知的形态,通过造型比例放大、对比进行功能强调

用颜色、灯光、标识等方式对优化的技术、部件进行强调

**2. 可触摸:用 CMF 传递情绪价值**

强调情绪价值提升用户感知,比如高级感、科技感、氛围感等

通过 CMF 的设计方式及细节处理,提升用户的感官体验,优化用户的使用体验。

比如同样的产品和功能,你可以针对某种群体进行风格化表达。

比如针对户外党,线条硬朗,材质耐造;针对女性用户,质感柔雾,色彩温润;针对儿童,圆润可爱,安全亲肤。

通过材质和纹理,让用户使用时更加舒服。比如在接触部分增加防滑纹理、亲肤涂层、阻尼旋钮……让用户一上手就觉得"值"

**3. 可感受:交互功能的强调**

提高交互的实时性,将操作反馈立刻变得可感知。例如挡位切换时增加灯光反馈、香氛开启时的流动状态……

增加交互的声音让用户感觉到反馈。比如旋钮的哒哒声、按键回弹有力、开盖顺滑——这些"小爽点"累积起来就是口碑

然而,所有这些放大感知的设计手段,都必须建立在一条不可动摇的底线之上:**成本控制**

怎么控成本?我们设计师能做的就是:

**造型做减法**。优先选择易于脱模、结构简单的形态,减少模具复杂度和件数。

**优先用标准件**!积极采用市场通用件,避免定制化带来的成本与时间飙升。如果你跟我一样是"一人团队",必须前期上 1688 查询关键部件成本和参数,防止后期成本和时间暴雷。

**合理使用工艺**:用巧妙的 CMF(颜色、材料、工艺)设计提升质感,而非依赖昂贵工艺。

最后还需要思考:这些我需要每个都做吗?

不需要。我们只需在低成本框架下,重点聚焦 1~2 个高感知功能点(不要多)。筛选后合格的功能点可能仍有数个,此时必须根据公司资源(成本、技术、时间)进行优先级排序,强制收敛到 1~2 个最优项,而非平均用力。

然后用我们工业设计师的"春秋笔法"突出这些优势:如凹槽引导、颜色对比、材质变化区分功能模块、声音反馈等

总结一句话:

在红海市场里,真正的创新不是"做更多",而是"做对那一件小事,并让它被看见"。

ok,思路理清,内耗停止。洗洗睡吧。
`,hh=`---
title: "先听好消息还是坏消息？"
date: "2026-09"
tag: "生活方式"
---

> 如果失去无法避免，请选择好时机去承受；如果痛苦大于快乐，请重新配置顺序让体验更优；这不是回避，而是科学的智慧

为什么失去100块钱的痛苦会常常大于得到100块钱的快乐？

前景理论提出了一种观点：人对风险的厌恶往往大于他对收益的渴望。比如，你要投入1000块钱，一年后有两种方案：

- 方案一：投入1000块钱，风险为0，一年后能得到100块钱。

- 方案二：风险为5%，你可能会损失50块钱，也有可能一年后收益200块钱。

从理性计算上看，虽然选择5%的收益能拿到更多的钱，但也面临损失50块的风险。在这种情况下，人们会更加愿意选择已经确定的收益，选择风险更小的那一部分，因为他们不需要承担任何损失就能得到100块钱。

# 1.为什么存在对“失去”的风险厌恶？

从进化论角度上看，可能源于我们失去和得到之间的收益不对等，从而大脑对这种不对等的情感赋予不同的行为依据权重。

在人类远古时代，失去的代价与得到的代价相差太多。因为失去一种东西，有可能对生命构成威胁。比如，在远古时期，你失去了一个苹果就有可能会饿死；你失去了庇护的场所，就有可能将自己暴露在野兽捕食的风险之中。

而得到的好处只能改善当前状况，不会产生到性命攸关的后果。比如你多一个苹果可能只会吃得好一点，给住所盖上防水层只会让你住得更好、更舒服。它俩产生的代价是不一样的，所以“得到”行为不会被大脑标记为高权重，而“失去”则会被认定为高危行为，附以重点警告的标签，对此类行为时刻保持警惕。

所以在人类的进化过程中，这种厌恶情绪被保留下来，我们对风险会更加敏感，也会更加厌恶风险。过度反应虽然浪费能量，但反应不足可能会导致死亡，在自然的优胜略汰中，对损失过度反应的人活了下来。因此，“宁可错杀不可放过”本质是对被伤害这一损失极端恐惧——宁可主动伤害他人，也不愿承受被他人伤害的风险。

除了进化论，禀赋效应也可以解释为什么我们失去100块钱会更加痛苦。**当一个人拥有某件物品之后，对它的估值会显著高于自己尚未拥有时的估值。我失去的钱是我曾经拥有过的钱，虽然可能我会得到100块，但是我也可能会失去我曾经拥有的50块，拥有就代表与我产生关系，关系则会带来隐形的交易成本，所以失去的50块的估值是远大于50块的。**

比如，在二手市场上就有很多例证：很多人在对自己的闲置物品进行标价时，有时候会给出高于二手市场的平均价格，大家也戏称这些人把二手产品当传家宝来卖。因为他们在拥有了这个物品之后，在日常的使用过程中与机器磨合，投入了自己的情感，在使用过程中物品已经慢慢成为“我的”一部分，失去它就像是失去了自我的一小块，这种情感的体验让他们会高估二手产品的价值。并且卖掉二手产品需要付出搜寻卖家、谈判、交割等成本，这些隐形成本会被加入到价格中。所以，只要曾经拥有过，失去的时候就会痛苦得多。或者即使你用合适的价格把车转卖出去，但实际上你还是对它恋恋不舍。这种恋恋不舍，也就是你投入的情感价值，你们的情感还未完全切割完毕。

# 2.得失顺序如何改变整体体验？

但在生活中，我们不一定只存在一种体验，得到和失去可能同时存在、好事和坏事可能同时发生，那么对这两种完全相反的体验，实际情况又如何？

我们事物的记忆和评价，只由两个关键节点决定，体验中的峰值感受和体验结束时候的感受，跟体验过程中的平均感受、总时长几乎完全没有关系。那么先得到后失去和先失去后得到带来的评价如何呢？

损失带来的痛苦强度大约同等与收益带来快乐强度的两倍。（这在前景理论中被称为”损失厌恶系数”）

我们在损失100块钱和得到100块钱时是两个情绪体验的峰值，这两个峰值决定了我们对这一事件的整体体验评价。还是以100块举例，如果我们先得到100块，然后再失去100块，虽然账面余额不变，但是却让我感到很痛苦。当以失去为结尾，评价偏向负面。如果我们先失去100块，但是然后又得到100块，失而复得的感觉却能让我们不那么痛苦。以得到为结尾，评价会偏正面。

同时我们还存在参考点的适应，先得到的时候会使得参考点上移，后续损失时候放大损失；先失去时候参照点下移，得到收益后收益被放大。

比如账户余额为0情况下，得到100块钱，参考点上移到100；当失去这100块钱的时候，账户还是为0，但整体还是痛苦的，其强度约等于两次得到100的快乐之和。

如果我先失去，再得到，开始时余额为零。我失去之后，痛苦的参考点往下是-200，但我在得到之后变成了0，相当于我得到200单位的快乐。加上以得到为结尾，记忆就会偏正面。最后这种从痛苦到快乐的强烈反应会放大快乐的情绪，整体会感觉没那么糟糕。

所以，先得后失的痛苦 ≈ 先失后得快乐的 2 倍

当赌徒先赢后输时候，他在心理上感觉自己输了两倍，加上整体是以失去为终点，所以他们更加不顾一切要追损。但对赌徒来说，无论是先得后失还是先失后得，都会继续赌，因为极度痛苦下他们会追损；赢了的情况下会减弱对失去的痛苦感受，从而继续赌。这种间歇性的强化让赌博更不容易停下来。

基于此，虽然生活失去和得到的事实存在，但我们可以试试对好坏消息进行合理的组合配置，让我们拥有更多的快乐。行为经济学家塞勒提出了心理账户的”快乐原则”，具体如下：

- n个好消息，分开说，多次获得快乐，避免边际效用递减；

- n个坏消息一起说，一次性承受，让损失不那么令人悲痛。

- 大好事和小坏事一起做，让好事覆盖坏事；

- 小好事和大坏事分开说，避免好事被坏事淹没。

下次有好消息和坏消息时候，建议先听坏消息，再听好消息。
`,mh=`---
title: "复盘那个“还没出生就规划好人生”的产品：我们输在哪？"
date: "2026-08"
tag: "设计随笔"
---

今天是春节长假期结束后的第一天工作~

（不要太羡慕，请假请出来的长假期~）



回到出租屋，坐在桌前，放下手机，打开笔记本电脑，我终于下定决心，要把那份拖了很久的年度设计项目复盘给补上。

因为家里没有公司内部资料，我想找去年那款新品的宣传图做参考。我只能上 1688 找找公司产品的宣传图素材，顺便 “悄悄观摩” 一下友商的店铺。

嘿，有一个大发现：

搜索风扇，页面靠前的好几家店铺里，赫然发现了年前我们公司和外部合作的那款产品。不仅店铺链接上了，主图、详情、价格、规格，一应俱全，就等夏天旺季一来，直接收割。

要知道，这款产品是去年10月份才启动合作的。

当时的合作方案是：对方出外观，我们公司做结构拆解，开模费五五开。

在年前最后一次项目推进会，还在模型的t1阶段，友商就已经拿着接近量产的样品去找各大风扇品牌、渠道推广了，还没量产就已经拿到订单。

再看我们公司这边，年前这个项目安安静静，年后工作群一样安静，没有任何关于这款产品的推进消息：店铺没上、价格未定、上市时间还无定期。

目前唯一一个订单，还是年会前邀请友商来公司交流，无意中看到这款新品，一眼相中，才预定作为主推。



想到这，我百感交集。它让我想起那个困扰已久的痛点：为什么同一款产品，交给别的品牌卖就风生水起，我们自己的店铺却总是销量惨淡、毫无起色？

以前总觉得是运气不好，或者是我们销售团队不给力。

现在才明白：

我们公司的运营能力不行啊！

透过此，我好像一下子看清了两种截然不同的做事逻辑：

- 我们的逻辑：线性串行外观定稿 →→ 结构拆解 →→ 开模 →→ T1试模 →→ 修模 →→ 量产样 →→ 拍照/做详情页 →→ 找销路上架。

- 友商的逻辑：多线并行外观定稿 →→（ 结构拆解 + 同步启动营销筹备） →→ 开模 →→ 量产 →→ 直接发货。

形象一点比喻：

**别人：孩子还没出生，往后的人生道路已经规划好了**

**我们：别管，先生下来，走一步算一步，车到山前必有路。**

这不仅仅是速度的差异，更是认知的鸿沟。

# *01*

**完美主义 vs 边想边干**

我们总觉得：必须等到完美的量产品，才能展示、才敢找渠道，不然不够专业。

友商认为：目前样品已经足以展示核心卖点。用户买的是功能和颜值，可以现阶段就验证市场需求，一旦量产直接开干。

说穿了，我们有点设计师式的完美主义倔强：一定要把方案做到面面俱到、万无一失，才敢启动下一步。结果就是：越追求完美，越拖越久，悄悄错过最佳时机。

在商业里，速度就是生命，完成比完美更重要。这句话，放在生活里也一样适用。

（所以设计师偶尔要放过自己）

# *02*

**线性作战 vs 多线作战**

友商的设计跟销售并不是线性的，在模具还在加工的阶段，其已经开始铺开销售的渠道了。

而我们公司是线性的流程，先把东西设计完之后再给工程，工程做完给生产，生产差不多完成之后再考虑销售。

如此这般，产品完成的时候市场窗口早就关了。

不过也怪不得别人，公司内部的生产制造不可控因素太多了：资源无法调动，往往设计都是延期，甚至因为结构问题还走不到量产环节。

一年拖一年，机会就这样流失了。

由此看，未来的竞争，真的不是单点能力的竞争，而是协同效率的竞争。谁能跑得快，谁先赢。

# *03*

**“稳妥”vs“高风险”**

我们的逻辑在于，以为等量产出来再卖，风险最小。

实则不然，一旦滞销，库存压力巨大，那是真金白银的损失。

友商则是在“低成本试错”。如果拿着样品去推，发现没人买，他们可能直接取消量产，及时止损，再继续推下一款产品。

而我们等量产出来再卖，一旦滞销，库存压力巨大。

商业的本质是降低交易成本。通过前置验证，将不确定性消灭在萌芽状态，才是最高级的风控。

真正的稳妥，不是不做，而是小步快跑地试。

**🌱 写给刚入行或正感到迷茫的你**

如果你也是刚毕业，或者正在设计中感到困惑，觉得自己的价值被低估，希望我的这点观察能给你一些小小的启发：

**🧠别做“闭门造车”的设计师：**

销售/运营可能比你更懂市场和用户。在公司里，看到他们在忙，不妨主动凑过去聊聊：“最近什么好卖？用户都在吐槽什么？”这些一线情报，可能就是你设计突破的关键点。

学会mvp思维：不需要100%完美，先拿出80%的东西去验证市场。

**🕜️理解“时间成本”：**

设计不仅要考虑造型美，还要考虑“上市时间（Time to Market）”。一个晚上市两个月的爆款，可能就变成了滞销品。市场不等人，季节不等人，特别是季节性产品。

**🎓职业建议：**

以后找工作，不要只看薪资，尽可能选择“产销协同”的好平台。

面试时候，试着问一下面试官：“我们公司新品开发流程是什么样的？产品定义是由谁负责的？从设计定稿到产品上架周期一般是多久？是否有自己完整的销售体系？”

多观察公司的流程：是并行还是串行，销售是否参与前期研发？

如果不对，赶紧逃



去“产销协同”的好平台，成长为具备“推动项目并行”能力的设计师，未来才拥有不可替代的核心竞争力。

因为你不仅仅是在画图，你是在帮公司省钱、帮公司赚钱。

我们公司做了多年没起色，或许就是因为这种“慢半拍”的基因。

作为设计师，我们不能只做画图的工具人，更不能只做产业链上被动的一环。

**我们要做的，是那个能看清整条链的人。**

- END -
`,gh=`---
title: "平陆运河与东盟，连起来看才懂这场世纪对赌"
date: "2026-09"
tag: "社会观察"
---

# 1.中国和东盟在交易什么

要看东盟博览会给中国带来什么，先看中国跟东盟都在买卖什么东西吧。

## 1.1机电产品是核心

从东盟跟中国的贸易结构来看，中国卖给东盟以是机电产品为主，其次是集成电路和“新三样”（锂电池、光伏、新能源汽车），他们增速最快。最后才是面料、钢铁和机械设备。

中国从东盟买进去的主要是机电产品和中间品，占比50%，其中越南和马来西亚（64%）贡献最大。所谓中间品，就是用来生产其他商品要用到的零部件和半成品。比如要做手机，要用到摄像头模块、电池模块、芯片模块等，这些就是中间品。

中国主要买的是

- 马来西亚：半导体封装测试、集成电路

- 越南：电子组装件、摄像头模组、连接器

- 新加坡：高端元器件、晶圆制造相关产品

- 泰国：汽车零部件、硬盘驱动器

从买卖双方来看，大家主要交易的是中间品，本质上都是同一条产业链内的贸易。

那有些人就说了，为什么中国不能做这些产品？

真相是：这些产能是外资在东盟深耕多年的成果，具有很强的产业生态和协同基础，不是靠价格低就能替代的。

比如被卡脖子的芯片中，除了中国台湾、韩国，东盟是中国芯片进口的重要来源。

除机电产品外，中国自东盟进口还有三类：

- 能源与矿产：原油、煤炭、LNG、铜矿砂

- 农产品与油脂：天然橡胶、棕榈油、热带水果

## 1.2为什么要从东盟买农产品？

有人又说了：中国农产品这么发达，为什么还要去东盟购买呢？

东盟最大的优势在是热带气候。中国有些战略物资在本土根本无法规模化种植，就算能种，成本也极高。比如：

天然橡胶（最主要）：主要从泰国、越南、马来西亚、印度尼西亚进口。这是战略性资源——它能制造轮胎，尤其是飞机轮胎。目前中国天然橡胶产量不足。除交通领域外，医疗乳胶、传送带、工业密封件全靠它，一旦断供，会直接对制造业、交通、民生、医疗造成严重问题。
棕榈油：产量最大、成本最低的工业植物油，食品工业中几乎不可替代。
镍矿：全球镍矿主要用于生产不锈钢和新能源电池。印尼储量最大，但2020年起印尼全面禁止镍原矿出口，强制外资必须在本地建冶炼厂，倒逼中国企业不得不出海建厂。
榴莲：纯粹是消费升级需求。

## 1.3中国还输出什么？

其次，中国输出的还有基建能力，包括基建承包能力、服务贸易、资本输出和装备出口。

海外基建承包有一个关键优势：标准锁定。以铁路为例，采用中国标准建设的铁路，后续的机车采购、信号系统、配件更换以及运维服务，都必须按照中国标准执行，或直接使用中国产品。这意味着，一旦铁路建成，未来几十年的相关需求就被间接锁定——只要这条铁路在运行，就需要持续使用中国的技术、设备和服务。

铁路建成还会带动沿线产业园区、电力配套、通信网络的建设，而这些配套工程往往也会沿用中国标准，为中国企业进入当地市场降低门槛。

因此，真正的机会并不在施工环节——施工是一次性付清的——而在于建成后的运维、市场和服务，包括通关物流、供应链管理、金融服务、标准认证以及法律争议解决等。

## 1.4规则和制度

更深一层，是规则制度的输出。

正如刚才所说，中国与东盟贸易的主要是中间品。这相当于一个跨国大工厂：中国使用来自东盟各国的零部件组装最终产品。在这个"工厂"内部，需要解决几个问题：

- 原产地规则：如何证明这个工厂生产的产品确实是在这里生产的？这涉及原产地认定。

- 接口规则：零部件跨境流动涉及通关程序、技术标准、质量检疫等一系列规则。如果标准不统一，就会产生大量协商成本。

- 争议解决机制：出了问题找谁协商？中国—东盟合作机制为各方提供了一个谈判磋商的场所，也成为规则发布和宣誓的平台。

在这个场所中，中国拥有主场优势——作为规则制定机制的重要参与方，中国可以在议程设置、规则起草上发挥更大影响力，推动电动车标准、数字贸易、跨境电商等领域的规则朝着更有利于中国的方向发展。

这意味着，中国输出的不仅是钢筋水泥，更是规则制定的话语权。

# 2.永久会址给广西带来了什么？

可以先参考海南。博鳌亚洲论坛2001年成立落地，为海南带来了政策试验的合法性——中央愿意把一些先行先试的政策放在这个优先开放的地区落地。比如2013年设立的博鳌乐城国际医疗旅游先行区，可以同步使用国际新药，是中国唯一的医疗特区。论坛每年汇聚的政商学界精英，也营造了开放的氛围，提升了当地知名度。

东博会放在广西，带来的是硬件（会展中心以及交通配套）和一定的开放氛围。但需要说明的是，西部陆海新通道2019年上升为国家战略，平陆运河2019年纳入国家规划、2022年开工——这些与东博会不是因果关系，而是同期并行的国家战略，都是国家面向东盟开放的整体布局。

# 3.平陆运河能带来什么？

平陆运河堪称世纪工程。但它能给广西带来的究竟有多少呢？

## 3.1内陆运河带动经济的底层逻辑

从经济规律来看，内河航运拉动经济的方式有：

1. 降成本：它能够大幅度降低货物或大宗商品出海的成本。

1. 产业聚集：通过海运和内陆运河带来的产业聚集，会把产品吸引到这里建厂，或者进行港口建设，从而促进产业发展。

1. 带动城市繁荣：通过产业发展，带动整个城市的兴旺繁荣。

## 3.2"带飞广西"的期望能实现吗

很多人期待平陆运河一通航，就能瞬间带飞广西的经济，广西人再也不用背井离乡去广东打工了。但这个期望真的能实现吗？

内河航运能产生多大的效益，可以从这里来考虑：

内河航运对经济的带动 = 腹地既有产业规模 × 成本节省幅度 × 货类的水运适配度

从货流方向看，平陆运河主要面对的是西南地区。如果要实现经济的飞黄腾达，那就只有当一批货的目的地或起点在川渝云贵时，经北部湾港才划算。如果目的地是长三角或珠三角，直接海运到上海/深圳更便宜。

从出口角度看，得同时三个条件：产地在西南 + 只能走水运 + 走别的路明显更贵。

根据2025年各省（区、市）货物贸易进出口总值，我们看看西南腹地各省外贸基本盘与航运走向：

- 四川：10318.1亿元。属长江流域，可以走长江到上海顺流而下。

- 重庆：8006.8亿元。坐拥长江黄金水道、中欧班列和陆海新通道铁海联运，路径选择极多。长江水运向东顺流而下，走平陆运河则需要先通过铁路或公路将货物拉到百色或南宁再转装下水，综合换装成本并不低。 

- 云南：2737.4亿元。离中南半岛更近，有中老铁路和众多陆路口岸直通东南亚，天然走陆路通道，没必要绕道广西出海.

- 贵州：约900亿元。不沿边、不沿海、不沿江，唯一真正被地理困住的省。

- 广西：8192.6亿元。西江沿线货，以前要顺西江向东绕珠三角（广州港）出海。

再看货类匹配度：内河航运适合运送的是低货值、大体积、不赶时间的笨重物资（矿石、煤炭、建材、散粮、初级化工原料），而对时效要求高的高货值产品（电子元器件、精密机械、服装、生鲜）基本都会选择公路、铁路或航空。 

西南腹地能往运河里装的，基本就是这几样： 

百色可以运铝：2025年，百色的铝产品交易额达到1110亿元。氧化铝1250万吨，电解铝232.7万吨。每年还有超过2000万的铝产品、煤矿、建材等要外运。配套的黄桶百色铁路在建，未来四川粮食、贵州煤炭、云南磷矿可以在百色集聚下水。更加有利于广西。这解释了平陆运河通航首日装的是什么：汽车配件、板材、化纤、高钙石、钢材——都是中等价值、对运价敏感的货，不是高价值电子品。

磷（贵州、云南）：云贵川鄂四省合计占全国磷矿储量九成以上，贵州是主要产区之一。磷可以做磷肥，关系粮食安全；也可以做磷酸铁锂正极材料，关系新能源发展。

进口大宗反哺内陆：北部湾近年来进口增速最快的不是消费品，而是电煤（已逼近3000万吨）、金属矿石（超8700万吨）以及原油，它们负责喂饱西南内陆的钢厂、电厂与石化基地。

所以总体来看，平陆运河总体还是在于撬动西南地区的经济，最主要的是广西。

同时也意味着：在物理通道层面，平陆运河的确打通了一条西南出海的捷径；但单纯的航运通道本身，并不能自发转化成巨额的经济收益。 

从深层战略来看，运河的战略备份价值大于经济价值。它的使命是为中国西南建立一条摆脱对东南沿海单一出海通道依赖、直接连通北部湾走向南海的战略备用安全走廊，同时为西部陆海新通道增加运力冗余与议价筹码。这是国家全力支持立项的核心原因。

# 4.成年礼不再是一张车票，还要多久？

必须要泼冷水的是，从“通航”到“改变普通广西人的命运”，中间还有很长的路要走。

从上文看，依赖运河的多为大宗原料与矿产，这些行业普遍被大型央企、地方国企或重化巨头主导。重资本、低用工的属性决定了它天然带有“飞地经济”的缺陷：

- 就业吸纳比较少——航运相关主要是资本密集型企业，创造的长期岗位非常有限。

- 利润并不会留在本地——央企或大型国企的利润收归总部或中央，地方财政不受影响，居民财产性收入也不受带动。

-  采购不在本地——特种装备、核心技术研发由集团统一招标，本土中小民企很难插足。

- 不在本地深加工——如果原料只是在广西过境、或者完成初级粗加工就运走，最赚钱、吸纳就业最多的终端精细制造依然留不在广西。

- 降本增效的收益流向利润，不流向工资——运费下降带来的是货主企业的成本优化，省下来的钱不是工资，工人的工资不会因此提高；而且提效在重工业里往往表现为减员，而不是增收。

> 当代网新闻报道说的：工程投资可直接带动GDP增长约1800亿元，建设期创造就业岗位42万多个，运营期可提供26万至41万个就业岗位，直接惠及63个革命老区县（市、区）。运河在供水、灌溉、防洪、水生态改善等方面的综合功能，将为沿线群众的生产生活提供更有力的支撑。

官方预测平陆运河在工程期能带来千亿级投资拉动与数十万阶段性岗位，并具备防洪、排涝、供水的综合民生红利。但必须清醒看到其红利的结构性分层：

企业和地方政府是主要受益者。建设期间的GDP是脉冲式的，不是持续的；其次航运服务业的GDP主要流向企业为央企、地方企业、城投公司。
普通居民更多获得的是务工收入、副业增收和物价下降，而非高价值就业
高价值服务业岗位在于金融、法律、咨询、数字经济等，目前广西几乎没有产业基础。大量新增岗位可能集中在中低端服务领域，比如餐饮、民宿、农家乐、土特产销售，这也是大多数人能承接的。

如果仅仅扮演一条“过路走廊”，广西能拿到的无非是微薄的过闸费和土地增值收益。如果本地民营经济无法快速补齐包装、仓储分拨、零部件加工、维保等下游配套，这条运河就无异于为他人做嫁衣，彻底掉进‘赚了货流、亏了产业’的通道陷阱。

# 5.广西财政的世纪对赌

为什么财政并不宽裕的广西，一定要倾力押注这条运河？

看一下广西的财政账本，就能明白背后的焦虑：

2025年广西GDP达到2.97万亿元，体量并不算小，但全区一般公共预算收入仅1922亿元左右，财政收入占GDP的比重不足7%。也就是说，属于班里下游的差生。经济体量与财政汲取能力严重倒挂，根源在于本土产业结构的畸形：

第一产业与农业占比高，这一板块基本不产生现代工商业税收。   在现行分税制下，广西重要的重化工业（如钦州中石油千万吨炼化）产生的消费税100%全额上缴中央，地方一分留存拿不到；增值税地方留五成，企业所得税大型央企地方仅按比例分得一部分，加上本土民营制造业孱弱，导致GDP数字看着很大，留给自治区的真金白银却很少。

这直接导致广西财政自给率长期在30%以下徘徊（约27%）——相当于地方每花10块钱，只有不到3块是本土产业挣出来的，其余7成以上严重依赖中央转移支付与专项支持。   

另一端则是沉重的债务包袱：全区政府法定债务已超1.4万亿元，叠加沉重的隐性城投债务压力。随着传统土地出让收入持续下行，地方亟需找到能够造血的新增长极来对冲债务压力。 

平陆运河，就是广西在巨大财政与转型压力下推上牌桌的筹码。 

有人天真地以为，只要运河一通，靠收过闸费就能填补财政。但事实很残酷：负责运河投融资与还债的广西平陆运河集团，如果单靠几块钱一吨的过闸费，连运河每年巨额的折旧与维护成本都难以覆盖，还清债务需要上百年。 
按照专项债与项目资金方案，其真正的偿债主力，押注的是运河沿线产业园区的落地，以及由此带动的新一轮园区土地开发与工商业税收。也就是说，运河对广西财政预设的造血路径是：沿线产业落地 → 增值税 / 所得税 / 土地出让。

说到底，这条路骨子里依然是土地财政的旧叙事，甚至比过去更凶险——过去卖住宅地能迅速变现，而如今靠产业园区卖工业地、赌税收沉淀，周期更长、风险更高。一旦产业没有如期进驻，这套高杠杆的循环就会彻底失灵。

在这场中央做庄，广西入局的棋局中，中央与自治区的诉求完全不同：

中央：出资337.91亿元，打通西南出海的大通道。只要运河如期通航，国家战略备份和供应链安全的目的就已经完全达成。

广西：自己硬生生掏出了百亿级财政资本金，撬动并承担了后续产业配套专项债与巨额商业贷款。通航之日，对国家来说是任务圆满收官，而对广西的财政赌局才刚刚拉开序幕。

如果运河通航后，产业无法有效在沿线沉淀，广西面临的将不仅是百亿级资本金的沉没成本，更是沉重的园区基建债务与折旧包袱，这笔账最终仍需要广西人/企业未来几十年的财政去消化。反之，如果沿线能借机打破飞地魔咒，真正孵化出本土配套产业链，广西才能真正完成向海洋经济的蜕变。但土地财政的买单者仍然是广西人三十年的青春。所以这很难说是广西人的夙愿。

更加严重的问题是政府自给率不足三成、地方债务压力高企的硬约束下，广西调动资源为运河做产业配套的能力其实非常紧绷。能否补齐本土配套链、能否留住制造业人才、能否把过境货物留下来深加工，将决定这场对赌的最终成败。

在财政自给率不足三成、地方债务压力高企的硬约束下，广西调动资源为运河做产业配套的能力其实非常紧绷。能否补齐本土配套链、能否留住制造业人才、能否把过境货物留下来深加工，将决定这场对赌的最终成败。

既然要赌，就请认真赌
`,vh=`---
title: "当世界只允许出现阳光，会变得更好吗？"
date: "2026-08"
tag: "社会观察"
---

村子里有一个习惯。

每天早晨，村口的大喇叭都会准时响起，播报当天的消息。

"今年粮食丰收了。"

"村东头那条泥巴路修好了。"

"老张家的闺女考上了省城的大学。"

老人们搬着小板凳坐在槐树下听，一边听一边点头。他们说，这样很好。一个充满好消息的村庄，看起来总是充满希望。

后来有一天，村长在村委会上提了一个想法。

"既然大家都喜欢听好消息，"他端着搪瓷杯说，"那我们以后就只播好消息。"

"坏事影响大家的信心。"

"矛盾破坏村子的形象。"

"外面的人听了，会觉得咱们村不行。"

没有人反对。或者说，没有人敢反对。

于是，广播里的声音一天比一天明亮。每天早晨准时飘出来的，都是：

"今年庄稼长势很好。"

"邻里关系和谐融洽。"

"村民生活越来越幸福。"

"咱们村，是远近闻名的模范村。"

村口的大喇叭，慢慢成了一个只播放阳光的地方。

---

可是有一天，住在村西头的王大爷发现了一件事。

他家门口那口老井，打上来的水开始发浑了。以前清亮亮的，现在得静置半天才能用。他去找村长反映。

村长拍拍他肩膀："老王啊，水浑这事儿，不是啥大问题，过几天就好了。咱们村的广播刚表扬了'基础设施完善'，你这会儿说水有问题，不是给村里抹黑吗？"

王大爷张了张嘴，没再说下去。

又过了一阵子，村东头的李婶发现自家房顶漏雨了。她男人前年去城里打工就没回来，她一个人带着两个孩子，想找人修，但手里钱不够。她想去村委会申请点补助。

村主任叹了口气："李嫂，不是我不帮你。但咱们村今年刚报了'脱贫攻坚先进单位'，你这会儿来说困难，上面来检查的时候，我们怎么交代？"

李婶低着头走了。

再后来，村里越来越多的年轻人开始悄悄离开。他们坐上县城来的大巴，头也不回地走了。有人说去深圳，有人说去浙江，去那些能听到"坏消息"也不怕的地方。

但这些事情，从来没有出现在大喇叭里。

因为它们"不够积极"。

---

村民们开始疑惑。

"为什么广播里说一切都很好，但我的生活却不是这样？"

"水浑了没人管，房子漏了没人问，孩子走了没人留——这叫'幸福'？"

"到底是我不对，还是广播不对？"

他们没说出口，但每个人心里都在想同一个问题：

**那个天天喊"一切都好"的大喇叭，到底是在安慰我们，还是在骗我们？**

有一天，一个刚从城里回来的年轻人，站在槐树下听完了整段广播。

他转头问村长：

"叔，如果我们不说黑暗，黑暗是不是就不存在了？"

村长端着搪瓷杯的手顿了一下。

他没有回答。

因为他知道——隐藏问题，从来不会消除问题。

它只是让问题失去了被看见、被解决的机会。

而那些看不见的问题，就像井里浑浊的水一样，不会因为没人说就自己变清。它会一直浑下去，直到某一天，整口井都不能用了。

---

其实新闻也是一样的。

很多人觉得，负面新闻只会制造焦虑、传播恐惧、打击信心。所以最好的办法，就是不让它出现。

这个想法听起来很有道理。

但你仔细想一想——

一个社会为什么需要看到问题？

不是因为人们天生喜欢黑暗。

**而是因为黑暗本身就是一种提醒。**

一条关于食品安全的调查报道，可以推动整个行业整改。

一次关于弱势群体处境的深度采访，可以让更多人看到那些被遗忘在角落里的面孔。

一篇关于基层权力失范的深度稿，可能成为制度修正的第一块多米诺骨牌。

负面信息从来不是社会的敌人。

**它更像是你身体里的疼痛。**

疼痛不好受，没有人喜欢疼痛。但疼痛存在的意义，是提醒你——这里可能出了问题。腿疼了，你才知道膝盖需要休息；胃疼了，你才知道最近的饮食不规律。

如果有一天，你的身体失去了痛觉，那才是最可怕的事情。你不会再知道哪里受伤了，哪里在发炎，哪里正在悄悄恶化。等到你终于"感觉"到的时候，可能已经晚了。

---

一个成熟的社会，从来不是没有坏消息的社会。

**一个成熟的社会，是拥有面对坏消息能力的社会。**

它知道自己不完美，所以允许别人指出不完美。它知道自己有问题，所以愿意倾听问题的声音。

真正危险的，从来不是有人站出来指出问题。

**真正危险的，是所有人都习惯了说——**

"这里没有问题。"

"一切都很好。"

"你看，太阳这么亮。"

---

当然，我也知道，任何社会都需要秩序。一个国家需要稳定，需要共同的目标，也需要积极的价值引导。

这些都没有错。

但如果一个系统只有赞美，没有批评；只有成绩，没有反思；只有光明，没有阴影。

那么它最后失去的，可能不是负面信息本身。

**而是人们判断现实的能力。**

当一个人长期只听一种声音，他会慢慢失去分辨真伪的能力。当所有人都在说"天是绿的"，那个说"天是蓝的"的人反而成了异类。你甚至开始怀疑自己的眼睛——我看到的，到底是不是真的？

当一个社会失去了这种能力，它也就失去了自我纠偏的机制。没有人发现问题，就没有人解决问题。然后问题像井底的淤泥一样越积越厚，直到整口井都废掉。

---

因为信任这个东西，从来不是来自于一句话：

**"这个世界永远美好。"**

**真正的信任，来自于另一句话：**

**"即使出现了问题，也有人愿意看见它，并动手解决它。"**

阳光让我们知道方向。

但阴影告诉我们，脚下还有哪些坑。

一个真正强大的社会，不是一个没有阴影的世界。

**而是一个敢于打开灯，看清那些阴影的世界。**

---

大喇叭每天早上还在响。

依然是好消息。

庄稼丰收，道路修好，生活幸福。

只是村口那棵大槐树底下，坐着的老人越来越少了。

他们有的去了城里，跟着儿女。

有的还留在村里，但已经不抬头听广播了。

他们低着头，想着自家那口浑浊的井。

和一个说不出哪里不对的明天。

---

*如果你读到了这里，我想问你一个问题：*

*你上一次听到一条消息，后来再也找不到它了，是什么时候？*

*那一刻，你在想什么？*
`,yh=`---
title: "爆款属于系统，不属于个体"
date: "2026-08"
tag: "设计随笔"
---

我们常听说“某某设计了一个爆款”，但爆款的诞生，真的只归因于设计师个人吗？答案往往是：未必。

在成熟的消费品类中，独特的外观或许能成为引爆点。但更多时候，爆款是**时代情绪、技术条件、供应链能力与传播杠杆**共同作用的结果。设计师可能点燃了火柴，但燎原之风，来自系统。

这种系统性作用，也映射出设计师角色的深刻变迁。回望设计师的黄金时代，，**“生产”领域相对聚焦于实体工业产品**。设计师的核心任务是为工业化大生产赋予形式、功能和美学。此时，设计师的专长（形式、功能、人体工学）与制造业的核心需求（造出好卖的实体产品）高度重合。设计师作为连接艺术、技术与用户的唯一桥梁，自然成为主导者，享有极高的话语权。

然而，随着技术发展和消费升级，**“生产”的范畴发生了爆炸性扩张**：从硬件到软件生态，从产品到体验与流量运营，从单一的制造环节演进为整合与传播的完整链条。“生产”变成一个庞大复杂的系统。而传统工业设计师的训练和认知，仍主要聚焦于这个系统中“实体产品定义”这一个环节。设计师话语权的稀释背后，是整个产业逻辑的深刻迁移。

那么，在产品创造的过程中，设计师的价值究竟体现在哪些层面？是外观、用户体验、产品定义，还是完整的价值主张？

这个课题的源头来自于前段时间看到的小红书帖子：一位原创设计师亲自拜访了抄袭其产品的工厂，并进行了深度对话。其中几个问题直击现实，也极具代表性：


1. 为什么同一产品，原创设计师只能卖出几百万，而工厂却能轻松做到十几个亿？

2.在商业体量上，设计师个体与工厂体系的本质区别是什么？

3.抄袭与借鉴的界限究竟何在？



第一个问题，直指核心：**设计师究竟能撬动多大的价值？**

视频中设计师也提出过担忧：“我跟你提一个idea，你做出来了哗哗哗，你卖几个亿，最后我自己卖了几百万。”

揭示了一个残酷现实：原创团队在有限资源和时间内，或许只能验证一两个创意；而拥有成熟供应链的工厂，却能依靠其强大的工程化和快速响应能力，在几天内完成多次打样与细节迭代，迅速抢占市场先机。

**idea 的落地能力，往往比 idea 本身更重要。**

你能想到的，别人也可能想到，最终比拼的是将想法转化为商品的速度与执行力。

这也引出一个关键趋势：**产品定义权正在去中心化，所谓的独特idea已经变得不那么重要。**在用户反馈无处不在的今天，独特的“点子”本身已不再那么稀缺。海量的用户声音提供了无数“需求引子”，看似谁都能从中提炼出受欢迎的产品。那么，设计师还能做什么？

如果仅限于翻译需求、追求造型之美、扮演“美工”角色——这固然是本分，却也使得设计师在团队中易于被替代，人人都可指点一二。另一种路径是提升个体技能与效率，实现个人产值最大化。然而，在当下商业环境中，纯粹的“点子型”设计师价值正在稀释。若想真正撬动更大价值，设计师必须主动进化，**让自己定义的“原点”尽可能覆盖价值链的更多关键环节**。

这意味着，设计师需要向上游或下游延伸：向上，深度参与用户研究、品牌建构与商业系统设计；向下，理解甚至定义材料、工艺与供应链的关键标准。亦可以**直接建立用户连接与品牌（DTC模式）**，从而突破仅为“创意提供方”的局限。

当然，如果选择只做纯粹的“定义者”，那就需坦然接受其价值如“版权费”般被一次性买断或按低比例分成，而非享受伴随产品成长的“股份红利”。

这便自然过渡到第二个问题：**设计师个体与工厂体系的区别是什么？**

这本质上是两种不同价值创造逻辑的对比：

设计师——**“0到1”的发现者与定义者。**核心价值在于**洞察、创意与翻译**，将模糊需求转化为具体可行的产品原型，其能力聚焦于创造独特性。
工厂——是一个体系集合，**“1到100万”的放大者与实现者**。核心价值在于**工程化、规模化、供应链管理与成本控制**，其能力聚焦于高效率的精准复制。
这两种角色定位，直接决定了其所能撬动的价值量级。于是，那个根本性的商业追问浮现出来：**“从0到1的定义权”与“从1到100万的执行权”，谁最终掌握了市场主导与大部分利润？**
现实是，在绝大多数情况下，**“执行权”因其承担的规模化风险、构建的实体壁垒及对渠道的掌控，占据了主导地位**。只有在极少数颠覆性案例中，“定义权”能成为最大赢家，而其前提往往是——它已深度绑定或掌控了部分核心的“执行权”（如自建生态、定义核心标准）。


最后，关于第三个问题：**抄袭与借鉴的界限何在？**

这已是老生常谈却始终现实的话题。笔记中提到，那位工厂老板在见到一款产品时，脑中已瞬间浮现多套规避专利的方案。这冷静地揭示了一个事实：在法律框架与商业实践中，**规避侵权风险而保留产品精髓，是完全可能的操作**。原创保护之路依然漫长，与其幻想杜绝抄袭，或许更务实的姿态是调整心态：**专注于设计本身，持续深化设计师作为“需求翻译者”的独特洞察与系统能力**，构筑真正难以被快速复制的专业壁垒。

设计，是这个复杂商业系统中必要但不充分的一环。设计师的价值，不仅在于创造那个“1”，更在于理解与连接从“0”到“100万”的全链条。爆款从来不属于个人，而属于一个洞察、创造、制造与传播精密协作的系统。在其中找到自己不可替代的节点，或许是当代设计师最坚实的立足点。
`,kh=`---
title: "盛名之下：百年夙愿的叙事解剖"
date: "2026-09"
tag: "社会观察"
---

> 1994年分税制改革之后，地方财政面临事权和财权严重不匹配的问题：钱大部分被收上去了，但活儿全留给了地方。修路建桥要搞，办学、养老这些公共开支全靠地方扛，缺口只能靠卖地、搞平台、借债来填。

> 这就催生出一个问题：当地方硬要搞一个账根本算不过来的大工程时，它最缺的不是钱，而是一个足够大的“名分”。只要拿到“百年夙愿”这块牌子，财务账就被换成了情怀账；该负责的决策者悄悄隐身，债务兜底的责任却甩给了那些被代表的普通人。



“广西人民百年夙愿”“圆梦”“家国梦”“孙中山夙愿”，最近听到这些宏大的叙事，难免让人心生荒谬。

首先在主体上，何谓广西人民的百年夙愿？广西人民就是有钱，有吃，有时间，而非一条河。“夙愿”常带有未竟之志与悲情色彩，但这种历史的遗憾感是属于千千万万的广西普通人吗？如果把一条河当成夙愿，那得看这条河给我们广西人民带来的是什么，再看看我们是否买单。

孙中山在《实业计划》里写的内容是针对国家经济的大政策，这个政策是国家层面的，不是只针对广西的，对象别搞错。在媒体宣传上——这是广西人百年的愿望，听起来就像是广西人求着要建的，这是否意味着可以在后续对账时候当成是广西人应该负有的责任？这种用文字包装出来的情感渲染不难看出有谄媚的嫌疑。

过了百年了，还是原来的夙愿吗？

# 1.历史合法性的移花接木

孙中山的通运计划提出的“粤桂铁路”、“西江航道整理”、“钦廉防港口建设”，并未明确提出“平陆运河”这条具体走向；而叙事方把“西江整治+钦州港”偷换概念为“孙中山百年夙愿=平陆运河”，以此获得正统合法性。然而，这纯属空间与战略逻辑上的偷梁换柱。

孙中山当年的通运设想，重点在于“粤桂铁路、西江航道整理与钦廉防港口建设”，其水运核心是打造以广州为重心的南方大港，整治西江是为了让两广腹地的资源高效汇流至珠江口，走的是向心集聚的路线。而今天的平陆运河，底层逻辑恰恰是“绕开粤港澳、背离珠三角”，让西江货物在广西境内截流直接下北部湾，走向完全相反。

此外孙中山当年希望以实业救国来救穷，把外资引进来把经济搞起来。因此，他设想用港口加陆地，通过这些基础设施把分裂的国家缝合起来，用实业实现统一。从这个政治维稳目标和经济目标来看，现在有重合之处。但原计划用的是国际资本，而非国家自己的钱。现在的平陆运河是用财政资金、政策性金融工具和专项债进行的置换。这笔钱用的是纳税人的钱，最后还是要算账的。

由此可见，计划已经与之前相比相差很大了。

借用“夙愿”二字，把责任主体转到广西、孙中山，拿笔的人可真狠。

# 2.地方账与社会账的错配掩护

把经济愿景、政治决策包装成宏大叙事后，有些不方便摆在台面上的账目就可以体面地公开可表达了。

中央投钱，出于一定的维护边疆的考虑，但不能写进可研报告；成为马六甲海峡的替代方案，成功率太小不可说；经济数据是可以的。广西财政厅的《中国财政》文章，第一句就是"通江达海，千帆竞发；百年夙愿，今朝梦圆"，塑造这条河的合法性来源，紧接着第二段就是 727.19 亿的账，开始进入投资计算。这种叙事在为高成本转移可追责的标准，企图用用“情感账”冲淡财务账。

如果它是一个出于经济的大工程，那他则需要经济核算。这条河如果收过闸费，按单一通航费测算，业内估算回本超百年。官方拿出手的是含社会效益的 14.8 年静态回收期，宣称这条运河替社会省下了52亿元综合物流成本。但是这笔钱不会进到广西平陆运河集团账户里面，也不会到千家万户的货主和私营制造业手里不会里面，也无法直接用来偿付专项债的本息。

无论是哪个周期，考核期内都难以问责。

# 3.土地信用再扩张的老一套

航运赚钱只是表面说说，实际上还是熟悉的土地增值和信用扩张老配方。

沿岸划定园区，园区规划配套建设，沿线土地性质变更，土地估值提升，再然后又回到土地财政和房地产开发里面。运作得好，产业聚集起来带来增值税和就业；运作差一点，把具备未来预期现金流的港口、物流配套项目进行资产化重组，评估增值后再抵押、再借贷，继续维系信用扩张。

一旦工程被赋予“满足民生夙愿”的高帽，就不能仅仅以经济可行性去核算了，考虑社会民生、边疆维稳、食品安全、农业灌溉……这些有些可以计算，有些不可计算。

这一套叙事存在的风险就是它太好用了。

平陆运河19年定规划，22年上升国家战略 ，23年动工，26年竣工。这种再次令人惊叹的“中国速度”。其效率之快可能还有其他原因：它长度仅134公里，全境都在广西区域内、无跨省协调阻力、没有繁杂的利益分割和博弈，是‘国家战略+地方承接’最顺手的一块实验田。
然而，一旦“百年夙愿话语包装+专项债置换+土地评估增值+战略刚性免责”的闭环跑通，复制的边际成本极低。

既然平陆能以百年夙愿之名强力推进，那几百年的京杭运河全线复航和扩容是不是理所当然；长江航道那么拥堵，支流航道是不是也可以升级？内陆的无水港建设项目是不是也可以做起来了？湘桂运河、赣粤运河、渝万高铁……每个渴望靠基建维持增长幻觉，急于在任期内做出一番“丰功伟绩”的官员，都能在历史中翻出一段未竟的“先贤幻想”，炮制出各种“五百年夙愿”“千年梦想”。

于是，新一轮以情怀为掩护的债务扩张与劳民伤财，便在这套闭环中肆意蔓延。

这种透支不会在当下让你感觉到剧痛。工地上昼夜不息的轰鸣声、宏大叙事激发的群体亢奋、短期投入脉冲式的GDP，甚至给人营造出一种欣欣向荣的繁荣假象。真正的痛苦被放到了几十年之后，天量的财政债务要由毫不知情的下一代甚至几代人，在漫长的紧缩与收缩中默默消化。

这条河必须搞吗？必须现在搞吗？百年的执念一定要倾其所有去实现吗？

当严肃的财政账与经济账被情感和历史的宏大叙事层层掩盖，潮水退去之后最后留在广西的就剩下盛名之下的大型水利景观，和一张沉重和无人认领的债务账单。
`,xh=`---
title: "离婚冷静期：针对弱者的成本转嫁"
date: "2026-09"
tag: "随笔"
---

离婚是一项个人决定，还是一项需要社会减速的决定？

# 为什么结婚不需要冷静期？

“为什么结婚不需要冷静期？”

这句话说出来，估计其他人听到都会觉得你疯了吧。但如果换一个相似的问题：“为什么当父母不需要考试？”后者你却不会觉得这个问题很荒谬。这两个问题其实都指向一个疑问：承担长期的责任需不需要设置前置审查门槛。

二者差别在于：为人父母的责任一旦产生，几乎无法撤回；婚姻关系至少存在退出通道。

那么针对同一份长期责任，为什么准入阶段几乎不需要减速，退出阶段却需要减速？

结婚不要求证明双方是否有承担后果的能力，不需要冷静期，也不用考试。法定婚龄是年龄门槛，不是能力门槛。被催结婚的，被家里逼着结婚的，年纪到了该结的，稀里糊涂随大流的这些人，法律一概放行。法律对入口的态度很明确：这类亲密关系的决策风险由当事人自负。

但是在出口处却处处卡关：时间性减速（三十日冷静期）；程序性门槛（必须双方到场、任一方可单方撤回），实质是赋予一方否决权；实体性标准（1980年《婚姻法》起将“感情确已破裂”作为判决离婚的条件）；还有调解前置。法律对出口的态度变成了：国家要为这段关系的决策质量把关。

# 社会对离婚设置减速的合法性来源

1980年《婚姻法》对离婚的法定理由做了实体性的规定，将“感情确已破裂”作为离婚的条件。这看起来是把婚姻定义为一种情感关系，但同一部法律规定了夫妻抚养义务、共同财产、子女抚养、赡养老人这些条款，由此看，法律同时把婚姻是一个经济共同体与照护单位。

从情感关系角度看，个人有权做出离婚的选择。从另一个角度看，婚姻又是一个经济共同体，一套生育和抚养制度、养老和照护安排。从结婚协议生效的那一刻开始，只要还在婚姻关系续存期，就会享有相应的法律权益，对子女、配偶产生法定的责任，履行法定的义务。个人的决定似乎无法生效。所以当两个功能发生冲突时候，我们优先保护哪一个？

从离婚后果上看：一个人如果离婚了，最直接的就是经济压力，本由两个人抚养的孩子变成一个人抚养，经济支出和照护压力增加；父母养老问题严峻，独生子政策后导致一人需要赡养2个老人；个人身心层面，变成孤身一人会面临孤独终老境地。

孤独、事业牺牲、个人收入下降——这些是私人损失，不计入社会成本。 它们真实且沉重，但属于当事人自己承受的部分。

但从社会层面上看情况就不同了：

1.如果两个人在离婚上产生纠纷，就会大量调用司法、法援等公共资源。2.离婚后若一方无力抚养孩子，涉及到需要履行抚养义务、拖欠抚养费或者是陷入绝对贫困需要救助，从而调用司法、民政、社工等公共资源。

结婚不设关卡是因为立法者默认结婚的立法者已经判定这类亲密关系的决策风险应由当事人自负；而离婚过程中，后果波及到社会层面造成社会成本的增加，所以社会有权对离婚设置关卡，这似乎很合理。

具体的减速行为包括有：时间性减速（30天冷静期），目的是防止冲动离婚；程序性门槛（必须双方到场、任一方可单方撤回），赋予对方否决权；实体性标准（感情确已破裂才可判离），提供审核标准。

但出于社会成本的考虑设置减速条件，那么逻辑上存在漏洞：

防止双方出于冲动离婚，社会为何要替个人冲动买单？个人冲动离婚的比例是否能大到需要设置统一的法律标准去执行？双方和平协议离婚几乎不消耗公共资源，只用到民政局基础登记服务，但却要求30天的离婚冷静期。而真正需要大量调用司法、法援、社工等公共资源的诉讼离婚的却并不需要冷静期；所以制度的摩擦加在了成本最低的一端，成本最高的反而没有这道关卡。

协议离婚的双方已经就财产分割、子女抚养达成一致，说明冲突已经解决；诉讼离婚的双方无法达成一致，说明冲突仍在。冷静期对前者是重复审查，对后者却完全缺席——这相当于在急诊室门口给已经康复的人做体检，而真正需要抢救的人却被直接放行。


其次风险并未消失只是发生了转移。如果是离婚导致的贫困，那根源在于低收入，并不是离婚行为造成的，离婚只是改变了责任的分摊结构。低收入、缺乏社会保障这些结构性问题是结婚前就已存在，婚姻只是暂时将其风险内部化，离婚并未创造新的风险，只是让原本掩盖在家庭内部的风险外溢为公共风险。

如果社会对离婚行为采取减速是出于降低社会成本，而减速的成效与目标相差甚远。

自冷静期实施以来，协议离婚占比明显降低、诉讼离婚占比相应上升——冷静期内的暴力升级与反复纠缠事件频发；冷静期给财产转移制造了时间窗口；施压方利用单方撤回权进行要价；被迫从协议离婚转向诉讼离婚的程序消耗……它的成本落在了关系更弱的一方——经济依赖者、遭受暴力者、缺乏信息与法律援助能力的人。

还有更加难以令人忽视的事实——婚姻稳定不等于社会福利。对孩子伤害最大的往往不是父母离异，而是长期处于高冲突的家庭环境。高冲突是离婚的原因，而非离婚导致的高冲突；相反，被强行维持住的婚姻，往往才是高冲突的温床。

减速并没有消除本应该降低的成本，只是把它转嫁了出去。

综上所述，社会减速并非降低社会成本，而是为了降低制度的管理成本，强行通过一刀切的减速方式维持家庭作为社会保障的替代单位，把兜底的责任留在私人领域。这种“降本”是以牺牲个体权利和增加隐性社会成本为代价的。

# 既然减速无效，什么才是对的方向？

既然社会成本主要来自冲突，合理的政策指向就应当是针对冲突，而不是针对出口。

反过来想：如果每个人都有坚实的经济基础，老人有充足的养老金、完善的医保、完善服务的养老机构，离婚还会造成严重的社会问题吗？如果个人有充足的时间照料孩子，有普惠的托育服务、完善的社区支持帮衬育儿，孩子还会成为一个社会问题吗？如果个人闲暇时间足以丰富精神空间，公共服务能填补生活与精神的空缺，为何孤独会成为社会化的问题？

很多所谓的 “离婚后遗症”，本质上是养老、托育、社会保障等制度失灵的问题。社会需要管，但是需要管对方向：

一是精准减速。韩国根据有无未成年子女区分离婚期限长短，如果存在高危情况——家暴风险、重大信息与财产不对称的情形下则可以要求缩短甚至豁免条款；把减速成本放在了社会成本最高的地方，把制度摩擦放在了社会成本最低的场景，并给风险方向的场景开了绿灯。

二是强化执行而非限制退出。把管的重心放在保证婚姻解体后的法定责任切实履行到位，把配套的责任机制、支持资源做好，消解婚姻带来的外部风险和公共成本，而非限制离婚自由为代价。

三是补足兜底。把跟家庭单元过度绑定的基本的生存风险——养老、育儿、照护等交由社会承担，从制度上完善养老、医疗、托育、社区照护等兜底体系。个人不必靠婚姻也能抵御生活风险，离婚就不会演变成社会危机，制度也就无需靠限制离婚自由来维稳。

社会风俗在加速催紧我们进入婚姻，而法律却在减速，“可以退出”不再是婚姻的退路，结婚成了高风险的行为。我们试图用减速去解决的那个社会成本，其实并不来自离婚，而来自兜底的缺位和冲突的失控。对前者，减速无效；对后者，减速用错了地方。
`,wh=`---
title: "设计师的“春天”来了，但比冬天还难熬"
date: "2026-08"
tag: "设计随笔"
---

全民养“AI龙虾”的热潮一浪接一浪，但我还没动手。

为什么不追热点？

对于我这种不认识代码，又没时间折腾的人来说，追上去实在是有点吃力。先等等，让跑在前面的人帮忙把技术门槛降低一下先。

其次是目前我还没找到合适的应用场景，工作中能自动化的流程也有限。

不过，看各路大佬养出来的“大虾”，感觉这东西确实大有可为。前提是你作为个人，得有点东西，能驾驭得了它。剑就是那把，在你手里和在绝世高手手里，结果完全不同。

# 01.AI到底在替代什么？

让我真正开始认真思考这件事的，不是技术新闻，而是身边的变化：

- 朋友的朋友被裁；

- 各大公司用自动化工作流替代人工的消息越来越多；

- 小红书上关于“AI抢饭碗”的讨论铺天盖地。

- 还有罗永浩与Tim的对话。

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/bce70e3e-d5b3-4191-bd37-8e4cc18740cf/3b0df224-9688-460c-9ebf-f7d9d55d2b01/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XBEGDH%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T051332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk6gwCnmdbCWS%2FBlF5jXr3acukUKrHNdMYH0VaodTtsQIgdXO9XP4xK1vaJW%2F5gSTFteGRlVjSu3glJJvxV%2B7fLUgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNvOBCvS7Q47%2BLfOyrcAzNG3sfODKuKP61WQoHYdyjG2VoHSYxozwDJVJgNr74kUssZel4h9293sN5tszDhRJDZzs1eZhbYdNP0EbQocgPggIGbn1pJHGuuCxFBEFWIcbguo01ut5sJTmfovD98eeLb5IioqQRLAmOsdJn4Tzn51guPeVm%2BBiuYY5BvPvjns78azhG7avHbL1vuss7wRt%2FHKXWJZaCeaFi%2BFotmVEpG7pUNJC1ef0qTfFHyyDQ7vmluuycVQBEjnoi3u7NKb9fVCgub%2FYhQqS0fNv%2Fee39M%2BjZcdWdCI3Rks%2BOXAUxz0W0fyZX7fsyUBcyAgdbzWhpvbKCQO8%2F6FIXhxVdzuA0NWudtIHWNL7Cavt6qwSnsZPyGjSYkbX9oEdc0MWlsdcS9Ktk%2FMwg7mH5I%2BY6NDzZTUvo3vbILSC4KZa7Ex6Jdpv%2BJ4Fc6UApLRCykWxMgHTMa%2FiPywqVpccxc34DujKPvwuCLGaAU2eVoIxtTlTxikKCtGNejmBE2d2zCvpno837Mu9lfOt8FPJuWo5zEAPn6gq06T3MjFvsF8mdeX%2BWuvrxGPKm0FaqZ6k8jPviFk7YAFn0oSZH1L%2FMVpS8C6lQTF45vC%2FB3Byl1VxuQluTi4I%2BElb2V00DceX7iMOCqn9QGOqUB0Fp5SwERI1ZlFDjSL9kCAcY5FJCQ3fRT3pNkBkcRryJCWdZ5Ip8d%2Fpx7gUt%2Fgh3sCaqx83ns9CgethUGLBnZzUjnsbhY5YAME6YKrPmsw8RVBGc2bJv7ecPVHTHq72u1Chn%2FKW8qSHkkcOqGKfuOwxNjt1MV3fcM3bXnnsGgYYKYzAxWGHfFWj5sU9W4s2qS89ZvlvAckE7Av%2BXWDXYHK5sgQEyB&X-Amz-Signature=a20c0f9394c01403ad4e2aebf8182e6ec4a2d9d6f017399bc3d4f1886984c12d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

于是我开始想一个问题：**AI到底在替代什么？哪些东西是它替不了的？**

在职场上，我们进行价值的交换——用我们的**专业知识、判断力、时间与执行力**，去换取相应的回报。而AI正在替代的，正是其中那些可以被形式化、可以被数据信息替代的部分。

要理清这个问题，需要先理解知识是什么？

在现代教育理论中，知识维度分为：

1. **事实性知识 (Factual Knowledge)**：基本的要素，术语、具体细节。（属陈述性）

1. **概念性知识 (Conceptual Knowledge)**：分类、原理、理论、模型。（属陈述性）

1. **程序性知识 (Procedural Knowledge)**：技能、算法、技术、方法。

1. **元认知知识 (Metacognitive Knowledge)**：对自身认知的了解与调控——包括策略知识（何时用什么方法）、任务知识（难点在哪）、自我知识（自己的强弱项）。

当前的AI擅长模式识别、数据检索、逻辑推理和生产标准化内容，因而：

- **事实性知识、概念性知识**：**极易被取代**。这些信息极易被转化为数据，并且ai比你记得更熟。你记不住的材料密度、注塑工艺参数、CMF色号，AI能一秒调出来。

- **程序性知识分化严重**。容易被取代的部分是标准化的建模操作、按模板出渲染图、基础的产品排版说明——这些流水线式的重复劳动，AI已经能做得又快又好。
**难以被替代的部分则是**在复杂多变的环境中灵活应变的能力。比如，当供应链突然缺料时，如何在现有条件下快速调整设计方案；面对一个模糊的用户需求，如何通过多次打样和实地观察，找到真正契合使用场景的解决方案。这些复杂的信息尚未被ai数据收集，因而难以被取代。

- **元认知知识**：**被取代风险极低**。这类知识背后有复杂的背景文本、人文价值取向、判断力等做支撑。比如你知道在什么阶段改用什么方案，怎么判断这个项目的难度在哪里——是结构可行性卡壳，还是用户认知门槛太高，抑或是老板的审美偏好模糊。

**未来人和人的差距，可能不在于谁掌握的信息多，而在于谁能提出更好的问题、做出更准的判断。**

# 02.岗位被替代的风险有多高？

前阵子，刷到AI大神Karpathy火爆朋友圈的职业AI暴露度地图，被戏称职场判决书。虽然他自己后来澄清这不是严谨学术研究，但其结论与Anthropic公司发布的研究报告相似，都指向一个趋势：**AI对劳动力市场的影响是不可逆的，对传统白领岗位冲击最大。**

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/bce70e3e-d5b3-4191-bd37-8e4cc18740cf/a4517678-9cc6-4c8b-af30-955590bc3284/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XBEGDH%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T051332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk6gwCnmdbCWS%2FBlF5jXr3acukUKrHNdMYH0VaodTtsQIgdXO9XP4xK1vaJW%2F5gSTFteGRlVjSu3glJJvxV%2B7fLUgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNvOBCvS7Q47%2BLfOyrcAzNG3sfODKuKP61WQoHYdyjG2VoHSYxozwDJVJgNr74kUssZel4h9293sN5tszDhRJDZzs1eZhbYdNP0EbQocgPggIGbn1pJHGuuCxFBEFWIcbguo01ut5sJTmfovD98eeLb5IioqQRLAmOsdJn4Tzn51guPeVm%2BBiuYY5BvPvjns78azhG7avHbL1vuss7wRt%2FHKXWJZaCeaFi%2BFotmVEpG7pUNJC1ef0qTfFHyyDQ7vmluuycVQBEjnoi3u7NKb9fVCgub%2FYhQqS0fNv%2Fee39M%2BjZcdWdCI3Rks%2BOXAUxz0W0fyZX7fsyUBcyAgdbzWhpvbKCQO8%2F6FIXhxVdzuA0NWudtIHWNL7Cavt6qwSnsZPyGjSYkbX9oEdc0MWlsdcS9Ktk%2FMwg7mH5I%2BY6NDzZTUvo3vbILSC4KZa7Ex6Jdpv%2BJ4Fc6UApLRCykWxMgHTMa%2FiPywqVpccxc34DujKPvwuCLGaAU2eVoIxtTlTxikKCtGNejmBE2d2zCvpno837Mu9lfOt8FPJuWo5zEAPn6gq06T3MjFvsF8mdeX%2BWuvrxGPKm0FaqZ6k8jPviFk7YAFn0oSZH1L%2FMVpS8C6lQTF45vC%2FB3Byl1VxuQluTi4I%2BElb2V00DceX7iMOCqn9QGOqUB0Fp5SwERI1ZlFDjSL9kCAcY5FJCQ3fRT3pNkBkcRryJCWdZ5Ip8d%2Fpx7gUt%2Fgh3sCaqx83ns9CgethUGLBnZzUjnsbhY5YAME6YKrPmsw8RVBGc2bJv7ecPVHTHq72u1Chn%2FKW8qSHkkcOqGKfuOwxNjt1MV3fcM3bXnnsGgYYKYzAxWGHfFWj5sU9W4s2qS89ZvlvAckE7Av%2BXWDXYHK5sgQEyB&X-Amz-Signature=6432ad80922e09c3e6c79b323270f90679db7c484923df388d41e00980b5541f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

数字人工智能曝光度（右下角最角落部分就是设计领域）

大神的具体操作是从美国劳工统计局提取了324种职业，并给每个职位的AI暴露程度打0-10分，分越高代表越容易被AI替代。

打分的标准是：

0–1：暴露极小。工作完全是人工操作，或者需要需要有人在在不可预测环境中时刻在场。人工智能对这类日常工作几乎没有影响。举例：屋顶工人、园林设计师、商业潜水员。

- 2–3：低曝光。主要是体力或人际交往工作。AI可能帮忙处理一些次要的外围任务（比如排班、文书工作），但不会涉及核心工作。例如：电工、水管工、消防员、牙科卫生员。

- 4–5：中等暴露。是体力/人际交往工作和知识工作的混合。人工智能可以有效协助信息处理部分，但工作中很大一部分仍需要人类参与。例如：注册护士、警察、兽医。

- 6–7：高曝光。知识工作主要是需要人类判断、关系或身体存在感。人工智能工具已经非常有用，使用人工智能的员工可能大幅提高生产力。举例：教师、经理、会计师、记者。

- 8–9：非常高曝光。这项工作几乎完全在电脑上完成。所有核心任务——写作、编码、分析、设计、沟通——都在人工智能快速进步的领域。占领面临重大重组。示例：软件开发者、平面设计师、翻译、数据分析师、律师助理、文案撰写。

- 10：最大曝光。常规信息处理，完全数字化，没有物理成分。人工智能今天已经能完成大部分工作了。举例：数据录入员、电话推销员。

从那张图来看，与计算机紧密相关的岗位暴露分数最高。乍一看，设计师、程序员、分析师这些职业似乎“危险了”。

但仔细想，**高暴露不等于高替代**。

为什么？因为暴露程度高，恰恰说明这些岗位的工作内容和AI的“能力圈”高度重合——都围绕数字信息的处理、分析和生成。但**重合不代表取代**，更可能带来的是**工具升级**。

就像当年Photoshop出现后，平面设计没有被淘汰，反而因为有了新工具，创造出更多新颖的视觉作品。AI也一样：它会把“纯执行”的环节效率拉满，也能在知识网络之间创造新的连接，然后把“做判断”的价值进一步放大。

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/bce70e3e-d5b3-4191-bd37-8e4cc18740cf/b9e4ee86-e3d5-4bcf-a299-541465d046a5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XBEGDH%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T051332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk6gwCnmdbCWS%2FBlF5jXr3acukUKrHNdMYH0VaodTtsQIgdXO9XP4xK1vaJW%2F5gSTFteGRlVjSu3glJJvxV%2B7fLUgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNvOBCvS7Q47%2BLfOyrcAzNG3sfODKuKP61WQoHYdyjG2VoHSYxozwDJVJgNr74kUssZel4h9293sN5tszDhRJDZzs1eZhbYdNP0EbQocgPggIGbn1pJHGuuCxFBEFWIcbguo01ut5sJTmfovD98eeLb5IioqQRLAmOsdJn4Tzn51guPeVm%2BBiuYY5BvPvjns78azhG7avHbL1vuss7wRt%2FHKXWJZaCeaFi%2BFotmVEpG7pUNJC1ef0qTfFHyyDQ7vmluuycVQBEjnoi3u7NKb9fVCgub%2FYhQqS0fNv%2Fee39M%2BjZcdWdCI3Rks%2BOXAUxz0W0fyZX7fsyUBcyAgdbzWhpvbKCQO8%2F6FIXhxVdzuA0NWudtIHWNL7Cavt6qwSnsZPyGjSYkbX9oEdc0MWlsdcS9Ktk%2FMwg7mH5I%2BY6NDzZTUvo3vbILSC4KZa7Ex6Jdpv%2BJ4Fc6UApLRCykWxMgHTMa%2FiPywqVpccxc34DujKPvwuCLGaAU2eVoIxtTlTxikKCtGNejmBE2d2zCvpno837Mu9lfOt8FPJuWo5zEAPn6gq06T3MjFvsF8mdeX%2BWuvrxGPKm0FaqZ6k8jPviFk7YAFn0oSZH1L%2FMVpS8C6lQTF45vC%2FB3Byl1VxuQluTi4I%2BElb2V00DceX7iMOCqn9QGOqUB0Fp5SwERI1ZlFDjSL9kCAcY5FJCQ3fRT3pNkBkcRryJCWdZ5Ip8d%2Fpx7gUt%2Fgh3sCaqx83ns9CgethUGLBnZzUjnsbhY5YAME6YKrPmsw8RVBGc2bJv7ecPVHTHq72u1Chn%2FKW8qSHkkcOqGKfuOwxNjt1MV3fcM3bXnnsGgYYKYzAxWGHfFWj5sU9W4s2qS89ZvlvAckE7Av%2BXWDXYHK5sgQEyB&X-Amz-Signature=3aa589aff8f283b3ced57c71c5c96576e4f160af39edb7650354015bdee28eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

图上是对职业的整体的展望，整体看还是可以，就是发展速度的快慢问题

那哪些岗位是安全的呢？

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/bce70e3e-d5b3-4191-bd37-8e4cc18740cf/457b315e-4ab2-45c8-847a-c1abbb860591/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2ZS3FA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T051333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoqsJcvo7t931DpBZBsryJYEhAVVoH9wL6uqrbscCXWAiEAhZxP3Lnan3JVCxql0BzGEOF%2BqhpctpAhEz60pA4xA3MqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbilxJplikskxCepCrcAy2xOMbQROZmto9Szhh05lRDWjsMwcZdru5nr2kfSL2i81ezvLgSTyZYalP26nRvDSSyisEUoBqcwowddUaXiYquCCqGQ03M0KrjnHY9qyvaum4IWiW10Zk3drfuj51VaTRSChLhma9dC5yYqI3E%2BO1eA9vdD%2BQd3up1NsvUFXs1yVIxjzfPtCSaUMxMyo%2FoDZXd%2Fgfcvo3IWd7w4z3WVUGxhkZ5AMgyJZ%2BXY17EzzEhSY7uhuV7b4x23RWCusaKW8JiXAQs4BDiQ7FpUfcAyzkGYOD64OdCQHEQET1tPO2XGfnLsPP0ZWU2P34wuQN41bZbM%2FzAEtHZy5H9iflVW2kKWfFMl%2FBBVHKsxNDfNSzGcP1L6AC09DYVCyutJ8eE9j4M1ncahQJIUqGvQgFaZep1a%2Bk3PUp5AAH%2BcwWgPpD6qT52poV41jBWvGm5z704fdBwrqEF5CbpgDlV8MpaMu%2BI5nh%2FQ%2Fg2x8pTq1sjRzzSjLWlf%2Bdz%2FpTk2JOnzcZ5gfCFOf%2FmfEKpE5YcPFpcfX1b4dIKAyXUfVJldq7%2B8%2FSPar7rdi9oVl61iGMNXkBFnjdqWItgfyS9rvkDC06IDpXEd84j7JBTWhFk5WOujGYoDBYCcLwVIf1%2FM6rjMLutn9QGOqUBiaM%2FImjHp0lL4vhzHnkt1ggQc0UH%2FClUXEEneb14UHoS7cFJamvP10cLJId2RfoPxnBS2GWOB9lcCPoE2EK23vGeVbftYmnvbNh5jyzQ6YOE1HGmBEu104UJXoJs35VHhLOj5tSc0ZOJOiEOp09rWCJG8gPFC%2BtY%2FCzO4qXVjgkUGu8gn%2FWn8jG5%2BvlC1pJmrE46WkP9DdZm1xR6KYOWyTfgyKiB&X-Amz-Signature=19a3d32df62e9528b85827f66cc4bfd9dff11b57557de0e171bc16e6fc1abfea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/bce70e3e-d5b3-4191-bd37-8e4cc18740cf/9b7cf3be-79f0-4627-beee-ac9d28d1a6b6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRSQBNA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T051334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj0OkkeEja12ltEcTnJeiXc6Wpj6k9KzscmdweWKBvbQIhALmuZ0oDAEl9bn1Iw8CblTOC%2BuAXO6gX9JGMC65S9o%2BRKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FGArYOHxf3E57xLIq3AN9k6I6RtxE%2FMQaDyCqzJ0nEjxpM7yHdoSXt5Rx%2BgRimgw0LhixKIobrEPJ8i8IgmRMWeqnkMlFeMHvgg6mQ6qlCxH05pLQB56b4aAxfX%2BGRhV0GCP46iO7LN4si%2Bv0oJQ3%2FNihd42azdQNp5PsUIgwcqFzPygi%2F7eWZqavlSpmg%2B%2F057xU%2BTDr%2BYZ6EO7OgnMInbgNM5bVmY7f%2Fo6rCeldSVeP%2Btors3U1zV0Z8GcAjLViMLBbvRSAwYRhRRtfKzM6y1QV9CDEyiyxKsgsWtW4WaOSOdVDwCCQKuN3m4X%2BSJyjgVk%2BCgEPFnkNHh1fZIHeun6Fj5f0TiQVRhwbGbVhftKp4B76Odg4s%2Ba53nOZPkVPkTBjPtaubdM6ME6dTkBDlVQ6VbCs2TsmyrTDMUNTwhxrg4d76jcQy9nZnJHtB7wjS4dAOETB1FuKKxKQtCEk9JfYpzCESMmGtOHSIzHbMWP32ki8D4HzXP%2BIkRcypuEdtCol1C3YK1ylI07tvSNMRxM7bnkTMr7vOFS3FZEghJ%2FyFb0ZHAqRzdNS52Jc%2FpzXl99c9mxXdJW6UjJ88fpwMeVaQpS7gYGFrOvCZ8jry43qEy7jfejJ1LMxXdiLW29qpW7o8z65pDX7cDCjqZ%2FUBjqkAfQRa1%2B%2F97tsKKqQByjCJ3HdKm5vcQn9v2ypDg9PcKq6uFUTzybwLcIz4jDx7bxowUWWk6bo6EFupi%2B2SkSGRUi1bm50mGVgcXua1Ze%2FczjdHeZxBCbVRP2gTUcPihTVzDK69P5hPEgNuWQJGxvoSbgnD1qrSJU1bvJoP7oYMshOutQO%2B2haufwGA5KYUaHkparrdzW2FmQWoyI1TUpB%2FziHQ8aV&X-Amz-Signature=e645cd6c84ad4db35cfcc9bf7902f8e70c32b1554292a03a74b96a7c20accaee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

有意思的是，暴露度地图中得分最低的、被认为最安全的岗位，是**清洁工、水管工、屋顶工**这类涉及复杂体力劳动的职业。
根据年薪＞10万美元和年薪＜3.5万美元的职位AI暴露度打分对比，得出"赚得越多，越容易被AI替代"的结论，于是网上出现了一种论调："打工的尽头是蓝领"“赚得越多越容易被替代”。

这些话真是唬人+危言耸听了。
**高薪白领暴露度高，不是因为“钱多就该被替代”，而是这些高薪群体过去二三十年恰好站在了数字化和信息化的浪潮之巅**——程序员、金融分析师、数据分析师……他们的工作本质就是处理、分析和生成数字信息，而这恰恰是AI最擅长的领域。
而那些看似安全的蓝领岗位，真正的护城河不是“学历低”“薪资低”，而是：

- **物理世界的灵活性**：AI和机器人目前还做不到在复杂、非标准化的物理环境里灵活操作；

- **投入产出比的限制**：这些岗位的商业价值密度不够高，资本大规模投入自动化改造的动力有限；

- **人际信任与现场判断**：很多服务类岗位需要的是人与人之间的信任和临场应变，这是AI无法替代的。

所以，**安全不等于光鲜，高薪不等于高替代风险**——关键在于你的工作内容中，有多少是“可形式化的重复劳动”，有多少是“需要判断、信任和体感的复杂任务”。

**同时高曝光也意味着机会。**对某些技术密集岗位，AI提升个人生产力可能反而扩大对该类技能的需求或创造新岗位，能与AI协同作战的人未来会更加赚钱。

## 03.设计师的春天会来吗？

回到设计这个领域上。

从大神的图上来看，设计属于高曝光率，这很正常，因为涉及本身就有很大一部分工作师要在电脑完成的，但乐观的是行业发展前景跟之前相比会前进3%，不多也不少。

我也听到很多朋友说：“AI能出图了，我们设计师是不是要完蛋了？”

因为暴露程度高，所以危机感很强，情绪渲染也最热烈。

坦白说，AI确实已经能生成大量“看着不错”的渲染图、交互界面、产品造型。如果设计师的工作只是“出图”，那确实危险了。

设计从来不只是“画个图”就完事了。

**造型的背后是审美经验，视觉只是美的其中一个维度。**

AI能大量生成符合大众审美的渲染图，但这恰恰意味着：**平庸的美正在贬值**。当人人都能一键生成“好看”的图时，真正的溢价反而会流向那些**极具体感的审美**——人性化材料的质感、手工感的温度、物理世界中的线条美……

AI可以替代视觉，但产品设计是三维的。做产品设计有一个好处：我们的最终产品都要回归到物质层面。而物质的美，需要用身体去感受。我们需要用手指触摸材料的细腻，从反复使用中感受恰到好处的重量，从抓握中体验手掌与曲面贴合的程度，从产品与环境的交互中感受光影的质感……这些细节，身体比眼睛更诚实。

视觉训练只是一部分，设计师更需要回归身体的感受，去获得设计的灵感。

深泽直人的MUJI CD播放器就是这样，那个“拉一下，音乐开始”的动作，本身就是一种身体经验的唤醒。这种设计直觉无法通过数据训练获得，只能来自设计师真实的生活体验。

一件好的产品，需要的不仅是“看着好看”，更是：重量感、温度感、交互反馈——这些需要用身体去感知，用经验去判断，不是数据能喂出来的。这就是所谓的无法用言语传达的“隐性知识”。

真正的设计，是在模糊的需求中理清方向，是在成本、审美、功能、供应链之间做博弈，是在用户非正常操作时给出合理的容错方案。这些**需要判断、权衡、共情、以及对物理世界的体感认知**的事，AI做不了。例如，一个资深设计师能够在客户含糊的描述中捕捉到真实需求，这种能力来自多年的人际互动经验，而非数据训练。

具体案例可以看上一篇果盘设计的中译中工作

从这个角度说，**设计师的“春天”不是更轻松了，而是更难了**——因为纯执行的价值被压缩，而判断力、决策力、沟通力、以及对真实世界的感知力的权重被无限放大。我们对设计师的要求更高了，职场晋升的中间地带可能会消失。





# **04.我们该往哪里走？**

面对AI浪潮，与其焦虑，不如想清楚几件事：

**终身学习是既定无法改变的事实。我们除了学会操作技能，更需要把重心放在构建认知框架上。**

**从“信息处理者”变成“意义构建者”**——未来的价值不在于“我知道什么”，而在于“我能做出什么判断”。**把AI当副驾驶，方向盘握在自己手里**，用它放大产出，但别被它定义。

**刻意训练AI替代不了的能力**：提出好问题的元认知、将抽象概念转化为视觉语言的创造力、对人类情感与文化细微差别的敏感度。

**别过于信任AI**。它能给我们一个安全的答案，但也更危险。如果我们过于依赖AI的判断，无法意识到它的局限性，无法保持批判和反思，最后反而会把事情推向错误的方向。

最后，**回到真实世界**——多和人打交道，多接触真实的材料、真实的场景。这些“无法轻易形式化”的东西，才是长期的安全区。

你需要刻意训练的，不是更多工具，而是：

- **元认知能力**：提出好问题

- **判断力**：在多方约束中做决策

- **沟通力**：协调需求、推动项目

- **体感经验**：材料、结构、重量、手感

- **文化敏感度**：理解人类情感与文化差异

工具在变，但判断力、审美、共情、以及对真实世界的理解——这些“人”的东西，不会贬值。

未来属于那些能够驾驭AI工具、同时保持人性温度的设计师。
`,Sh=`---
title: "谁可以决定让机器停下来？"
date: "2026-09"
tag: "随笔"
---

收割机出现了，让农民不必再寒耕热耘；纺纱机让纺织工不必中耗费十几个小时枯坐；客户管理系统的出现让我们不必再在堆积如山的纸质档案中来回翻找；计算机出现，我们不必再一颗颗拨动算盘珠子……

这就使得我们产生一个错觉：技术进步既然提高了效率，那理应我们的工作会变得更轻松。但现实的体感恰恰相反，我们没有感受到轻松，反而更疲倦了。为什么？效率提升之所以没有转化为个体的轻松，原因不在于技术本身，而在于背后的权力分配。

1.技术优化了什么？

把工作分为三个层次的协作，我们可以清晰的看到技术是如何优化效率的。

当技术效率赋能“人-机”领域，最直观的就是降低技术门槛，大幅度提升产出。以前需要一人控制一台机器，现在一个人可以控制10台机器，人力成本大幅度下降；之前一个机器1小时产1000台设备，现在可以1小时生产2000个，生产效率直接翻倍。

技术赋能“人-物”领域，信息的流动和传递更加透明高效，资源配置变得更加灵活。比如系统可以快速识别短缺物料，提醒管理者及时补充进货，根据使用习惯合理配置物料比例，既能保持正常生产，又能降低仓储成本。

技术赋能“人-人”的领域，改变就更明显了。对内，以前需要在各部门来回跑腿传话的事情，现在全部都在线上搞定，跨部门沟通顺畅多了，信息传递不再变形，做决定的速度更快，手里拿到的数据依据也更准。对外，客户管理系统可以自动管理用户信息，根据用户喜好、消费习惯、等级、需求自动推荐最合适的服务，培养客户忠诚度，促成更多的消费。

这三个维度的效率提升，只保证了企业在单位时间内如何产出更多、耗损更少，但并不承诺我们的工作会变得轻松。

2.我们的工作为什么不会轻松？

有人觉得一天啥事都不用干天天躺平就是轻松；有人觉得一天放牛就是轻松；有人觉得虽然一天都要呆在办公室但是工作很轻松……轻松是一种体感：他是个人资源消耗绝对值的下降，以及个体对劳动自主权的上升。

借用roi的思路来理解这个体感，把公式定义到劳动者身上的话，我们可以这样理解：

分母：总认知精力、工作时间与心理能量的综合支出；

分子：是工资、身心心理余量，对工作与时间的自主支配权。

ROI = (收益 − 投入) ÷ 投入 × 100%

从ROI角度来看，就是我们投入一份心力资源，能拿回多少真正属于自己的收益。当我们认为一件事情变轻松了，无非两种情况：

就是在投入不变的情况下，收益增多了：比如干同样的活，收入显著增加、闲暇时间变多、对工作的自主权更强、自己能掌控的自由时间大幅增加；

在收益不变的情况下，投入资源减少了：比如拿同样的报酬，但实际工作时间缩短了、劳动强度下降了、心理压力变小了、背负的责任减少了。

那么，当技术大幅度进步之后，我们作为劳动者，工作带来的ROI增加了吗？

心理学家贝恩布里奇提出了一个“自动化悖论”：系统越是自动化，人类所承担的剩余任务就越困难、越关键。

从投入来说，技术的进步可能降低了搜索成本，收集资料变得更高效，我们可以网罗到更多的信息；人与人的沟通成本降低了，视频会议避免跨地域的交流困难；我们可以借助技术降低重复劳动的时间成本……

但我们在其他地方投入的却是成倍的增加：比如信息过曝导致我们需要处理更多的噪音才能挖掘到真实的需求；大量不真实信息的生产增加我们信息信息筛选的时间成本；你无法预料获得的数据是真实的还是ai生产的，你需要花费更多的时间和精力去判断。

我们的工作可能从直接工作者变成了监督者。以前我们只需要按部就班地动手做，但现在我们需要全天候地进行监工和质检：我们需要去与ai协调对话、判断ai生成的真实性、验证成果可靠性、执行方案、监督ai工作。这其中每一步都考验着技术的成熟度，如果技术不成熟，我们需要在每个环节耗费更多的心血进行纠正和优化。

从产出来讲，单个任务时间缩短不等于总劳动时间缩短。

技术进步确实让单位任务工作时间减少了，以前需要3个月做的调研报告，现在AI1个月就能写完。但并不是意味着接下来两个月你就可以闲下来。你需要继续找项目，来填满那两个月的工作时间。可能工作量变多了，但年终下来收入并不一定增加。

以史看或许能看到一些参考答案：工业革命机械化生产大幅度降低了单位劳动时间，人的生产力提升了，资本投入获得的收入就大了。但东西做完了，机器还闲着，企业主会觉得这是一种浪费，从而让工人无休止地工作，榨干他最后一丝精力，工作强度远比之前的农业时期，以前刮风下雨可以不用下田干活，但现在有了工厂，打雷下雨也可以继续生产。

更多的产出暗示着更多的收入，但工人依然贫困潦倒。机械化确实大幅度提高单位劳动产出，但工人实际的工资和劳动条件并没有同步得到改善，剩余的产出转化为工人的自由时间，而实转化为了资本积累。资本再利用这些积累购买更多的机器，进一步提高对劳动的替代能力。

于是，劳动能不能停下来，往往不是工人自己说了算。劳动的节奏和目的不再由劳动者自己掌握，而是由机器体系、绩效系统和资本增值逻辑决定。这是马克思所说的劳动异化的当代体现之一。

在杰文斯悖论里面，当效率提高，不等于总消耗减少，有时候反而会让总消耗更大。简单来说就是，当技术进步把单项任务的时间成本大幅度降低，那么这个任务所需要的时间、人力、成本就会大幅度降低。组织并不会选择让员工闲下来，而是会以要求产出更大规模的成果。比如即时通讯让沟通成本趋近于0，那沟通量不是减少了，而是沟通量爆炸。当做ppt越来越方便，结果不是ppt做的更少了，而是每个会议、每次汇报、每次展示都需要ppt，越改越繁琐。既然出方案这么快的话，那再多几个方案进行对比。

同时极限的效率可能会被固化为基准线。当一个骑手摸索出一条更快避开红绿灯的线路，平台算法就会将其列为该线路配送的“及格线”，结果就是在单位时间内你需要配送更多的订单。当你用新工具将原本3天的活压缩到半天，这个周期就会成为新的绩效标准。劳动者的额外奴隶没有变成奖励，反而成了下一轮剥削的起点。

3.技术进步，谁的工作可以更轻松？

技术进步让谁更轻松，这取决于你在结构中的位置。对于掌握资本和资源分配的人，技术进步给了他更多的自主权和剩余；对于掌握协调和管理权的人，技术放大了他们的能力；而直接从事可标准化劳动的人，往往需要面对更高的绩效预期、更碎的任务和更大的认知负担；还有一部分人则可能直接被替代。

所以，技术提高效率是真的，但效率提高必然会带来个体工作的轻松是假的。效率提升带来的生产盈余并不自动归劳动者所有，它首先会被绩效系统、组织目标和资本增值逻辑重新分配。谁拥有分配权，谁才更可能真正轻松。
`,Eh=`---
title: "谁在替城市买单？"
date: "2026-09"
tag: "随笔"
---

我们歌颂七十年的中国巨变，我们称赞城市化建设的伟大成就，我们歌颂腾飞的科技和繁华的工业制造业。在这宏大的叙事背后谢幕的赞扬名单里面，始终农名的名字。

1. 工厂的烟囱烧的是农民的庄稼

新中国成立初期，一穷二白，又值外国封锁和国家安全的压力，国家必须要快速建立工业体系。但私人资本不愿也无能力承担，而当时最大的经济剩余来源只有农业。于是问题变成：如何把分散在几亿农民手中的农业剩余抽调出来，用来建设工业体系。国家给出的答案是一套严密的提取机制：

集体化和统购统销。取消家庭私有经营，推行人民公社。生产什么，种什么，卖给谁由国家统一安排。所有人一起耕作，生产出来的粮食一起分，种出来的粮食由国家统购统销，土地、人力与粮食统一由国家调配。 

这种集中力量办大事的体制缺失是把重工业体系从0-1建起来了。但农民作出来的牺牲却这长期未被算清。


**工农业“剪刀差”**：一方面国家人为压低农产品收购价格，另一方面提高工业制成品价格，用这个差价支撑城市工人的工资，维持城市低物价，把廉价的农产品和手工制品出口国外换取宝贵的外汇与机械设备。城市的重工业底座是这样奠定的。

为了防止剪刀差导致农村人口流向城市造成大量“贫民窟”，也防止大量农村人口进城后城市无粮可供。1958年《户口登记条例》确立了农业与非农业户口的二元结构，农民被禁止自由流动；加之人民公社时期户籍绑定粮票与生存物资，农民被牢牢固定在土地上。

2.懂事的娃

户籍高墙把农民挡在城外，但墙内的城市同样装不下自己的人口。城市的重工业无法吸纳庞大的城市就业人口，积压大量无法安置的知识青年。于是通过动员城镇青年迁入农村，转为农业户口，把城市人口就业、养活压力转移到农村。上山下乡跟二元户籍形成配合：限制农村人口往城市走，同时把城市富余人口送到乡村，共同维持城乡分割的计划体系。

公社解体之后，提取机制也发生了切换：从价格剪刀差，转为面向农户的直接税费。

1994年分税制改革进一步加剧了这一负担——财权层层上收，中央财政收入占全国财政收入的比重从1993年的22%跃升至1994年的55.7%；而事权层层下压，县乡两级只拿到全国财政收入的小头，却承担着全国约七成的财政供养人口。农业税和三提五统由此成为县乡财政的支柱，农民税费负担总额从1990年的469亿元增至2000年的1359亿元。

90年代分税制改革后，农村成为那个提前懂事但没奶吃的娃。从生产盈余、劳动力，农村自己承担了国家应该出的那份工作。期承担了财政供养包。农业税、特产税、三提五统（公积金、公益金、乡村教育、修路等提留）乃至义务工制度，农村不仅得不到足够的公共财政反哺，反而长期作为基层行政运转的“自费承担者”。

从1958年到2006年，压在农民头上的税目经过重重演变：

1958-1983年，农民要给上交国家农业四税：农业税正税、农业税地方附加、农业特产税、牧业税；其他基层公共开支由集体内部提留分担。

1983年后人民公社解体，有了三提无统筹。村里要拿的：修路、水利、集体基础设施的公积金，用来做村内救助的公益金，还有村镇公务员的工资；还有乡镇 统筹资金：农村办学用的乡村教育附加、计划生育经费、民兵训练费、优抚经费、乡村道路修建维护费。除此之外，还需要出力做义务工/积累工，如果不出工可以以资代劳；外加一些杂项的收费。

国家财政只覆盖全国性事务，县以下农村大量基层公共事业国家很少拨款，农民集体承担了大量基层公共品供给，客观上分担了国家财政压力。农村就像一个提前懂事的孩子：国家该出的那份，它自己扛了，却没等到相应的反哺。

于是，在很长一段时间内，资金、土地、劳动力等要素持续从农村流向城市，城乡收入差距不断扩大；户籍的二元体制，进一步放大了这个代价，城乡差距远比其他国家工业化过程重得多。

3.双脚可以进城却落不下脚

改革开放带来大量的外贸订单：缝纫机要转起来，车间的机器需要开起来，沿海城市高楼要一栋栋建起来，城市地铁要铺起来……这些生产和建设需要数以万计的劳动力。农民终于被允许进城了。他们背井离乡在荒地上用钢筋水泥筑造起一座座高楼大厦，他们一步步推动城市的边缘向外扩张，他们建造了城市的繁华，却不允许留下来——户籍制度制造的高墙并未倒塌，他们只是从禁止流动变成了福利隔离：他们没有城市户口，无法获得平等的劳动权益，妻子儿女无法随迁落户，子女无法享受平等的公办教育，自己无法享受城市发展带来的城市医疗、社会兜底福利。

农民没有失业的说法。家庭联产承包责任制后，农民拥有了土地的经营权。土地集体所有，承包权归户，人可以不在，地还是你的。土地从生产资料变成了一种隐性的保障，进城干不了活之后再回老家种田，土地给了他们生命最后那每日2000卡的保障。他们奉献了青春跟体力给城市，等经济下行或年老体衰时候，再被退回农村。

农业税虽然取消，但城市对农村的抽血方式转变为更加隐秘、规模更大的资本化方式——土地财政和住房商品化。

地方政府以低价征收农民集体土地，转手高溢价卖给开发商，再由开发商卖给居民，数以万计的土地出让金堆砌出了干净整洁的新城，代价却是以掏空“新居民”的六个钱包。

到了2010年这套击鼓传花的游戏开始难以为继：

人口红利衰退，人口结构发生变化，结婚率、出生率下降，土地财政难以为继，城市急需寻找寻找新的税基与需求来源填补土地财政留下的30年亏空。为什么户籍2014年户籍改革突然加速，这非出于福利自觉，而是2014年后这套模式开始熄火：

外贸的底层逻辑在变化，传统代加工外贸红利建立，加工贸易增速下滑；

投资上实体投资持续降速、传统地产进入下行周期；

消费上正式超过投资，但是2 亿多农民工 “有钱但不敢消费”，农民因户籍壁垒只进城打工，不做长期的消费，需要充分释放他们的消费潜力。

十年前户籍改革的机会成本太大，十年后扩大内需的现实压力让这笔帐有了新的算法：让农民工成为真正的市民，释放被户籍制度压抑的消费潜力。

于是，2014年《国务院关于进一步推进户籍制度改革的意见》出台，取消农业与非农业户口区分，差别化落户全面推开。
`;function xo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var nt=xo();function dd(e){nt=e}var Un={exec:()=>null};function it(e){let n=[];return t=>{let r=Math.max(0,Math.min(3,t-1)),l=n[r];return l||(l=e(r),n[r]=l),l}}function D(e,n=""){let t=typeof e=="string"?e:e.source,r={replace:(l,i)=>{let s=typeof i=="string"?i:i.source;return s=s.replace(pe.caret,"$1"),t=t.replace(l,s),r},getRegex:()=>new RegExp(t,n)};return r}var Nh=((e="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+e)}catch{return!1}})(),pe={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:it(e=>new RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:it(e=>new RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:it(e=>new RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:it(e=>new RegExp(`^ {0,${e}}#`)),htmlBeginRegex:it(e=>new RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:it(e=>new RegExp(`^ {0,${e}}>`))},Ch=/^(?:[ \t]*(?:\n|$))+/,jh=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Fh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ar=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,zh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,wo=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,fd=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,pd=D(fd).replace(/bull/g,wo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),_h=D(fd).replace(/bull/g,wo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),So=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Ph=/^[^\n]+/,Eo=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Ah=D(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Eo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Th=D(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,wo).getRegex(),ni="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",No=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ih=D("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",No).replace("tag",ni).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),hd=e=>D(So).replace("hr",Ar).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",e).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ni).getRegex(),Rh=hd(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Lh=hd(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),Dh=D(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Lh).getRegex(),Co={blockquote:Dh,code:jh,def:Ah,fences:Fh,heading:zh,hr:Ar,html:Ih,lheading:pd,list:Th,newline:Ch,paragraph:Rh,table:Un,text:Ph},Ha=D("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ar).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ni).getRegex(),Mh={...Co,lheading:_h,table:Ha,paragraph:D(So).replace("hr",Ar).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ha).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ni).getRegex()},Oh={...Co,html:D(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",No).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Un,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:D(So).replace("hr",Ar).replace("heading",` *#{1,6} *[^
]`).replace("lheading",pd).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Bh=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,$h=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,md=/^( {2,}|\\)\n(?!\s*$)/,Uh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,hn=/[\p{P}\p{S}]/u,Mt=/[\s\p{P}\p{S}]/u,Tr=/[^\s\p{P}\p{S}]/u,Wh=D(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Mt).getRegex(),Hh=/[\p{Pi}\p{Ps}"']/u,gd=/(?!~)[\p{P}\p{S}]/u,Qh=/(?!~)[\s\p{P}\p{S}]/u,Vh=/(?:[^\s\p{P}\p{S}]|~)/u,Xh=D(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Nh?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),vd=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,bh=D(vd,"u").replace(/punct/g,hn).getRegex(),Kh=D(vd,"u").replace(/punct/g,gd).getRegex(),Zh=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,Gh=D(Zh,"u").replace(/openQuote/g,Hh).replace(/punct/g,hn).getRegex(),yd="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Yh=D(yd,"gu").replace(/notPunctSpace/g,Tr).replace(/punctSpace/g,Mt).replace(/punct/g,hn).getRegex(),Jh=D(yd,"gu").replace(/notPunctSpace/g,Vh).replace(/punctSpace/g,Qh).replace(/punct/g,gd).getRegex(),qh="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",em=D(qh,"gu").replace(/notPunctSpace/g,Tr).replace(/punctSpace/g,Mt).replace(/punct/g,hn).getRegex(),nm=D("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Tr).replace(/punctSpace/g,Mt).replace(/punct/g,hn).getRegex(),tm="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",rm=D(tm,"gu").replace(/notPunctSpace/g,Tr).replace(/punctSpace/g,Mt).replace(/punct/g,hn).getRegex(),lm=D(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,hn).getRegex(),im="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",sm=D(im,"gu").replace(/notPunctSpace/g,Tr).replace(/punctSpace/g,Mt).replace(/punct/g,hn).getRegex(),om=D(/\\(punct)/,"gu").replace(/punct/g,hn).getRegex(),am=D(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),um=D(No).replace("(?:-->|$)","-->").getRegex(),cm=D("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",um).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ll=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,dm=D(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Ll).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),kd=D(/^!?\[(label)\]\[(ref)\]/).replace("label",Ll).replace("ref",Eo).getRegex(),xd=D(/^!?\[(ref)\](?:\[\])?/).replace("ref",Eo).getRegex(),fm=D("reflink|nolink(?!\\()","g").replace("reflink",kd).replace("nolink",xd).getRegex(),Qa=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,jo={_backpedal:Un,anyPunctuation:om,autolink:am,blockSkip:Xh,br:md,code:$h,del:Un,delLDelim:Un,delRDelim:Un,emStrongLDelim:bh,emStrongRDelimAst:Yh,emStrongRDelimUnd:nm,escape:Bh,link:dm,nolink:xd,punctuation:Wh,reflink:kd,reflinkSearch:fm,tag:cm,text:Uh,url:Un},pm={...jo,emStrongLDelim:Gh,emStrongRDelimAst:em,emStrongRDelimUnd:rm,link:D(/^!?\[(label)\]\((.*?)\)/).replace("label",Ll).getRegex(),reflink:D(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ll).getRegex()},Ss={...jo,emStrongRDelimAst:Jh,emStrongLDelim:Kh,delLDelim:lm,delRDelim:sm,url:D(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Qa).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:D(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Qa).getRegex()},hm={...Ss,br:D(md).replace("{2,}","*").getRegex(),text:D(Ss.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Gr={normal:Co,gfm:Mh,pedantic:Oh},Kt={normal:jo,gfm:Ss,breaks:hm,pedantic:pm},mm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Va=e=>mm[e];function Ye(e,n){if(n){if(pe.escapeTest.test(e))return e.replace(pe.escapeReplace,Va)}else if(pe.escapeTestNoEncode.test(e))return e.replace(pe.escapeReplaceNoEncode,Va);return e}function Xa(e){try{e=encodeURI(e).replace(pe.percentDecode,"%")}catch{return null}return e}function ba(e,n){var i;let t=e.replace(pe.findPipe,(s,a,o)=>{let u=!1,d=a;for(;--d>=0&&o[d]==="\\";)u=!u;return u?"|":" |"}),r=t.split(pe.splitPipe),l=0;if(r[0].trim()||r.shift(),r.length>0&&!((i=r.at(-1))!=null&&i.trim())&&r.pop(),n)if(r.length>n)r.splice(n);else for(;r.length<n;)r.push("");for(;l<r.length;l++)r[l]=r[l].trim().replace(pe.slashPipe,"|");return r}function yn(e,n,t){let r=e.length;if(r===0)return"";let l=0;for(;l<r&&e.charAt(r-l-1)===n;)l++;return e.slice(0,r-l)}function Ka(e){let n=e.split(`
`),t=n.length-1;for(;t>=0&&pe.blankLine.test(n[t]);)t--;return n.length-t<=2?e:n.slice(0,t+1).join(`
`)}function gm(e,n){if(e.indexOf(n[1])===-1)return-1;let t=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===n[0])t++;else if(e[r]===n[1]&&(t--,t<0))return r;return t>0?-2:-1}function vm(e,n=0){let t=n,r="";for(let l of e)if(l==="	"){let i=4-t%4;r+=" ".repeat(i),t+=i}else r+=l,t++;return r}function Za(e,n,t,r,l){let i=n.href,s=n.title||null,a=e[1].replace(l.other.outputLinkReplace,"$1");r.state.inLink=!0;let o={type:e[0].charAt(0)==="!"?"image":"link",raw:t,href:i,title:s,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,o}function ym(e,n,t){let r=e.match(t.other.indentCodeCompensation);if(r===null)return n;let l=r[1];return n.split(`
`).map(i=>{let s=i.match(t.other.beginningSpace);if(s===null)return i;let[a]=s;return a.length>=l.length?i.slice(l.length):i}).join(`
`)}var Dl=class{constructor(e){Q(this,"options");Q(this,"rules");Q(this,"lexer");this.options=e||nt}space(e){let n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){let n=this.rules.block.code.exec(e);if(n){let t=this.options.pedantic?n[0]:Ka(n[0]),r=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:r}}}fences(e){let n=this.rules.block.fences.exec(e);if(n){let t=n[0],r=ym(t,n[3]||"",this.rules);return{type:"code",raw:t,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:r}}}heading(e){let n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(this.rules.other.endingHash.test(t)){let r=yn(t,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(t=r.trim())}return{type:"heading",raw:yn(n[0],`
`),depth:n[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(e){let n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:yn(n[0],`
`)}}blockquote(e){let n=this.rules.block.blockquote.exec(e);if(n){let t=yn(n[0],`
`).split(`
`),r="",l="",i=[];for(;t.length>0;){let s=!1,a=[],o;for(o=0;o<t.length;o++)if(this.rules.other.blockquoteStart.test(t[o]))a.push(t[o]),s=!0;else if(!s)a.push(t[o]);else break;t=t.slice(o);let u=a.join(`
`),d=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,l=l?`${l}
${d}`:d;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,i,!0),this.lexer.state.top=h,t.length===0)break;let f=i.at(-1);if((f==null?void 0:f.type)==="code")break;if((f==null?void 0:f.type)==="blockquote"){let y=f,v=t.join(`
`),k=y.raw+`
`+v.replace(this.rules.other.blockquoteSetextReplace2,""),A=this.blockquote(k);i[i.length-1]=A,r=`${r}
${v}`,l=l.substring(0,l.length-y.text.length)+A.text;break}else if((f==null?void 0:f.type)==="list"){let y=f,v=y.raw+`
`+t.join(`
`),k=this.list(v);i[i.length-1]=k,r=r.substring(0,r.length-f.raw.length)+k.raw,l=l.substring(0,l.length-y.raw.length)+k.raw,t=v.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:l}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t=n[1].trim(),r=t.length>1,l={type:"list",raw:"",ordered:r,start:r?+t.slice(0,-1):"",loose:!1,items:[]};t=r?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=r?t:"[*+-]");let i=this.rules.other.listItemRegex(t),s=!1;for(;e;){let o=!1,u="",d="";if(!(n=i.exec(e))||this.rules.block.hr.test(e))break;u=n[0],e=e.substring(u.length);let h=vm(n[2].split(`
`,1)[0],n[1].length),f=e.split(`
`,1)[0],y=!h.trim(),v=0;if(this.options.pedantic?(v=2,d=h.trimStart()):y?v=n[1].length+1:(v=h.search(this.rules.other.nonSpaceChar),v=v>4?1:v,d=h.slice(v),v+=n[1].length),y&&this.rules.other.blankLine.test(f)&&(u+=f+`
`,e=e.substring(f.length+1),o=!0),!o){let k=this.rules.other.nextBulletRegex(v),A=this.rules.other.hrRegex(v),m=this.rules.other.fencesBeginRegex(v),p=this.rules.other.headingBeginRegex(v),g=this.rules.other.htmlBeginRegex(v),x=this.rules.other.blockquoteBeginRegex(v);for(;e;){let E=e.split(`
`,1)[0],N;if(f=E,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),N=f):N=f.replace(this.rules.other.tabCharGlobal,"    "),m.test(f)||p.test(f)||g.test(f)||x.test(f)||k.test(f)||A.test(f))break;if(N.search(this.rules.other.nonSpaceChar)>=v||!f.trim())d+=`
`+N.slice(v);else{if(y||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||m.test(h)||p.test(h)||A.test(h))break;d+=`
`+f}y=!f.trim(),u+=E+`
`,e=e.substring(E.length+1),h=N.slice(v)}}l.loose||(s?l.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(s=!0)),l.items.push({type:"list_item",raw:u,task:!!this.options.gfm&&this.rules.other.listIsTask.test(d),loose:!1,text:d,tokens:[]}),l.raw+=u}let a=l.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;l.raw=l.raw.trimEnd();for(let o of l.items)if(this.lexer.state.top=!1,o.tokens=this.lexer.blockTokens(o.text,[]),!l.loose){let u=o.tokens.filter(h=>h.type==="space"),d=u.length>0&&u.some(h=>this.rules.other.anyLine.test(h.raw));l.loose=d}for(let o of l.items){let u=o.tokens[0];if(o.task&&((u==null?void 0:u.type)==="text"||(u==null?void 0:u.type)==="paragraph")){o.text=o.text.replace(this.rules.other.listReplaceTask,""),u.raw=u.raw.replace(this.rules.other.listReplaceTask,""),u.text=u.text.replace(this.rules.other.listReplaceTask,"");for(let h=this.lexer.inlineQueue.length-1;h>=0;h--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)){this.lexer.inlineQueue[h].src=this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask,"");break}let d=this.rules.other.listTaskCheckbox.exec(o.raw);if(d){let h={type:"checkbox",raw:d[0]+" ",checked:d[0]!=="[ ]"};o.checked=h.checked,l.loose?o.tokens[0]&&["paragraph","text"].includes(o.tokens[0].type)&&"tokens"in o.tokens[0]&&o.tokens[0].tokens?(o.tokens[0].raw=h.raw+o.tokens[0].raw,o.tokens[0].text=h.raw+o.tokens[0].text,o.tokens[0].tokens.unshift(h)):o.tokens.unshift({type:"paragraph",raw:h.raw,text:h.raw,tokens:[h]}):o.tokens.unshift(h)}}else o.task&&(o.task=!1)}if(l.loose)for(let o of l.items){o.loose=!0;for(let u of o.tokens)u.type==="text"&&(u.type="paragraph")}return l}}html(e){let n=this.rules.block.html.exec(e);if(n){let t=Ka(n[0]);return{type:"html",block:!0,raw:t,pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:t}}}def(e){let n=this.rules.block.def.exec(e);if(n){let t=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",l=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:t,raw:yn(n[0],`
`),href:r,title:l}}}table(e){var s;let n=this.rules.block.table.exec(e);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;let t=ba(n[1]),r=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),l=(s=n[3])!=null&&s.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:yn(n[0],`
`),header:[],align:[],rows:[]};if(t.length===r.length){for(let a of r)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<t.length;a++)i.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:i.align[a]});for(let a of l)i.rows.push(ba(a,i.header.length).map((o,u)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:i.align[u]})));return i}}lheading(e){let n=this.rules.block.lheading.exec(e);if(n){let t=n[1].trim();return{type:"heading",raw:yn(n[0],`
`),depth:n[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(e){let n=this.rules.block.paragraph.exec(e);if(n){let t=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:t,tokens:this.lexer.inline(t)}}}text(e){let n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){let n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(e){let n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){let n=this.rules.inline.link.exec(e);if(n){let t=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let i=yn(t.slice(0,-1),"\\");if((t.length-i.length)%2===0)return}else{let i=gm(n[2],"()");if(i===-2)return;if(i>-1){let s=(n[0].indexOf("!")===0?5:4)+n[1].length+i;n[2]=n[2].substring(0,i),n[0]=n[0].substring(0,s).trim(),n[3]=""}}let r=n[2],l="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],l=i[3])}else l=n[3]?n[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?r=r.slice(1):r=r.slice(1,-1)),Za(n,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:l&&l.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let r=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),l=n[r.toLowerCase()];if(!l){let i=t[0].charAt(0);return{type:"text",raw:i,text:i}}return Za(t,l,t[0],this.lexer,this.rules)}}emStrong(e,n,t=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!t||this.rules.inline.punctuation.exec(t))){let l=[...r[0]].length-1,i,s,a=l,o=0,u=r[0][0],d=t===u,h=u==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+l);(r=h.exec(n))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(s=[...i].length,r[3]||r[4]){a+=s;continue}else if(r[5]||r[6]){if(l%3&&!((l+s)%3)){o+=s;continue}if(d)break}if(a-=s,a>0)continue;s=Math.min(s,s+a+o);let f=[...r[0]][0].length,y=e.slice(0,l+r.index+f+s);if(Math.min(l,s)%2){let k=y.slice(1,-1);return{type:"em",raw:y,text:k,tokens:this.lexer.inlineTokens(k)}}let v=y.slice(2,-2);return{type:"strong",raw:y,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(e){let n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(t),l=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return r&&l&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:n[0],text:t}}}br(e){let n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e,n,t=""){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!t||this.rules.inline.punctuation.exec(t))){let l=[...r[0]].length-1,i,s,a=l,o=this.rules.inline.delRDelim;for(o.lastIndex=0,n=n.slice(-1*e.length+l);(r=o.exec(n))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(s=[...i].length,s!==l))continue;if(r[3]||r[4]){a+=s;continue}if(a-=s,a>0)continue;s=Math.min(s,s+a);let u=[...r[0]][0].length,d=e.slice(0,l+r.index+u+s),h=d.slice(l,-l);return{type:"del",raw:d,text:h,tokens:this.lexer.inlineTokens(h)}}}}autolink(e){let n=this.rules.inline.autolink.exec(e);if(n){let t,r;return n[2]==="@"?(t=n[1],r="mailto:"+t):(t=n[1],r=t),{type:"link",raw:n[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(e){var t;let n;if(n=this.rules.inline.url.exec(e)){let r,l;if(n[2]==="@")r=n[0],l="mailto:"+r;else{let i;do i=n[0],n[0]=((t=this.rules.inline._backpedal.exec(n[0]))==null?void 0:t[0])??"";while(i!==n[0]);r=n[0],n[1]==="www."?l="http://"+n[0]:l=n[0]}return{type:"link",raw:n[0],text:r,href:l,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){let n=this.rules.inline.text.exec(e);if(n){let t=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:t}}}},He=class Es{constructor(n){Q(this,"tokens");Q(this,"options");Q(this,"state");Q(this,"inlineQueue");Q(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||nt,this.options.tokenizer=this.options.tokenizer||new Dl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:pe,block:Gr.normal,inline:Kt.normal};this.options.pedantic?(t.block=Gr.pedantic,t.inline=Kt.pedantic):this.options.gfm&&(t.block=Gr.gfm,this.options.breaks?t.inline=Kt.breaks:t.inline=Kt.gfm),this.tokenizer.rules=t}static get rules(){return{block:Gr,inline:Kt}}static lex(n,t){return new Es(t).lex(n)}static lexInline(n,t){return new Es(t).inlineTokens(n)}lex(n){n=n.replace(pe.carriageReturn,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],r=!1){var i,s,a;this.tokenizer.lexer=this,this.options.pedantic&&(n=n.replace(pe.tabCharGlobal,"    ").replace(pe.spaceLine,""));let l=1/0;for(;n;){if(n.length<l)l=n.length;else{this.infiniteLoopError(n.charCodeAt(0));break}let o;if((s=(i=this.options.extensions)==null?void 0:i.block)!=null&&s.some(d=>(o=d.call({lexer:this},n,t))?(n=n.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.space(n)){n=n.substring(o.raw.length);let d=t.at(-1);o.raw.length===1&&d!==void 0?d.raw+=`
`:t.push(o);continue}if(o=this.tokenizer.code(n)){n=n.substring(o.raw.length);let d=t.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+o.raw,d.text+=`
`+o.text,this.inlineQueue.at(-1).src=d.text):t.push(o);continue}if(o=this.tokenizer.fences(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.heading(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.hr(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.blockquote(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.list(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.html(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.def(n)){n=n.substring(o.raw.length);let d=t.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+o.raw,d.text+=`
`+o.raw,this.inlineQueue.at(-1).src=d.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title},t.push(o));continue}if(o=this.tokenizer.table(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.lheading(n)){n=n.substring(o.raw.length),t.push(o);continue}let u=n;if((a=this.options.extensions)!=null&&a.startBlock){let d=1/0,h=n.slice(1),f;this.options.extensions.startBlock.forEach(y=>{f=y.call({lexer:this},h),typeof f=="number"&&f>=0&&(d=Math.min(d,f))}),d<1/0&&d>=0&&(u=n.substring(0,d+1))}if(this.state.top&&(o=this.tokenizer.paragraph(u))){let d=t.at(-1);r&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+o.raw,d.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):t.push(o),r=u.length!==n.length,n=n.substring(o.raw.length);continue}if(o=this.tokenizer.text(n)){n=n.substring(o.raw.length);let d=t.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+o.raw,d.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):t.push(o);continue}if(n){this.infiniteLoopError(n.charCodeAt(0));break}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){var a,o,u,d,h;this.tokenizer.lexer=this;let r=n;if(this.tokens.links){let f=Object.keys(this.tokens.links);f.length>0&&(r=r.replace(this.tokenizer.rules.inline.reflinkSearch,y=>f.includes(y.slice(y.lastIndexOf("[")+1,-1))?"["+"a".repeat(y.length-2)+"]":y))}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,f=>"+".repeat(f.length)),r=r.replace(this.tokenizer.rules.inline.blockSkip,(f,y,v)=>{let k=v?v.length:0;return f.slice(0,k)+"["+"a".repeat(f.length-k-2)+"]"}),r=((o=(a=this.options.hooks)==null?void 0:a.emStrongMask)==null?void 0:o.call({lexer:this},r))??r;let l=!1,i="",s=1/0;for(;n;){if(n.length<s)s=n.length;else{this.infiniteLoopError(n.charCodeAt(0));break}l||(i=""),l=!1;let f;if((d=(u=this.options.extensions)==null?void 0:u.inline)!=null&&d.some(v=>(f=v.call({lexer:this},n,t))?(n=n.substring(f.raw.length),t.push(f),!0):!1))continue;if(f=this.tokenizer.escape(n)){n=n.substring(f.raw.length),t.push(f);continue}if(f=this.tokenizer.tag(n)){n=n.substring(f.raw.length),t.push(f);continue}if(f=this.tokenizer.link(n)){n=n.substring(f.raw.length),t.push(f);continue}if(f=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(f.raw.length);let v=t.at(-1);f.type==="text"&&(v==null?void 0:v.type)==="text"?(v.raw+=f.raw,v.text+=f.text):t.push(f);continue}if(f=this.tokenizer.emStrong(n,r,i)){n=n.substring(f.raw.length),t.push(f);continue}if(f=this.tokenizer.codespan(n)){n=n.substring(f.raw.length),t.push(f);continue}if(f=this.tokenizer.br(n)){n=n.substring(f.raw.length),t.push(f);continue}if(f=this.tokenizer.del(n,r,i)){n=n.substring(f.raw.length),t.push(f);continue}if(f=this.tokenizer.autolink(n)){n=n.substring(f.raw.length),t.push(f);continue}if(!this.state.inLink&&(f=this.tokenizer.url(n))){n=n.substring(f.raw.length),t.push(f);continue}let y=n;if((h=this.options.extensions)!=null&&h.startInline){let v=1/0,k=n.slice(1),A;this.options.extensions.startInline.forEach(m=>{A=m.call({lexer:this},k),typeof A=="number"&&A>=0&&(v=Math.min(v,A))}),v<1/0&&v>=0&&(y=n.substring(0,v+1))}if(f=this.tokenizer.inlineText(y)){n=n.substring(f.raw.length),f.raw.slice(-1)!=="_"&&(i=f.raw.slice(-1)),l=!0;let v=t.at(-1);(v==null?void 0:v.type)==="text"?(v.raw+=f.raw,v.text+=f.text):t.push(f);continue}if(n){this.infiniteLoopError(n.charCodeAt(0));break}}return t}infiniteLoopError(n){let t="Infinite loop on byte: "+n;if(this.options.silent)console.error(t);else throw new Error(t)}},Ml=class{constructor(e){Q(this,"options");Q(this,"parser");this.options=e||nt}space(e){return""}code({text:e,lang:n,escaped:t}){var i;let r=(i=(n||"").match(pe.notSpaceStart))==null?void 0:i[0],l=e.replace(pe.endingNewline,"")+`
`;return r?'<pre><code class="language-'+Ye(r)+'">'+(t?l:Ye(l,!0))+`</code></pre>
`:"<pre><code>"+(t?l:Ye(l,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:n}){return`<h${n}>${this.parser.parseInline(e)}</h${n}>
`}hr(e){return`<hr>
`}list(e){let n=e.ordered,t=e.start,r="";for(let s=0;s<e.items.length;s++){let a=e.items[s];r+=this.listitem(a)}let l=n?"ol":"ul",i=n&&t!==1?' start="'+t+'"':"";return"<"+l+i+`>
`+r+"</"+l+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let n="",t="";for(let l=0;l<e.header.length;l++)t+=this.tablecell(e.header[l]);n+=this.tablerow({text:t});let r="";for(let l=0;l<e.rows.length;l++){let i=e.rows[l];t="";for(let s=0;s<i.length;s++)t+=this.tablecell(i[s]);r+=this.tablerow({text:t})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let n=this.parser.parseInline(e.tokens),t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ye(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:n,tokens:t}){let r=this.parser.parseInline(t),l=Xa(e);if(l===null)return r;e=l;let i='<a href="'+e+'"';return n&&(i+=' title="'+Ye(n)+'"'),i+=">"+r+"</a>",i}image({href:e,title:n,text:t,tokens:r}){r&&(t=this.parser.parseInline(r,this.parser.textRenderer));let l=Xa(e);if(l===null)return Ye(t);e=l;let i=`<img src="${e}" alt="${Ye(t)}"`;return n&&(i+=` title="${Ye(n)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Ye(e.text)}},Fo=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},Qe=class Ns{constructor(n){Q(this,"options");Q(this,"renderer");Q(this,"textRenderer");this.options=n||nt,this.options.renderer=this.options.renderer||new Ml,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Fo}static parse(n,t){return new Ns(t).parse(n)}static parseInline(n,t){return new Ns(t).parseInline(n)}parse(n){var r,l;this.renderer.parser=this;let t="";for(let i=0;i<n.length;i++){let s=n[i];if((l=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&l[s.type]){let o=s,u=this.options.extensions.renderers[o.type].call({parser:this},o);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(o.type)){t+=u||"";continue}}let a=s;switch(a.type){case"space":{t+=this.renderer.space(a);break}case"hr":{t+=this.renderer.hr(a);break}case"heading":{t+=this.renderer.heading(a);break}case"code":{t+=this.renderer.code(a);break}case"table":{t+=this.renderer.table(a);break}case"blockquote":{t+=this.renderer.blockquote(a);break}case"list":{t+=this.renderer.list(a);break}case"checkbox":{t+=this.renderer.checkbox(a);break}case"html":{t+=this.renderer.html(a);break}case"def":{t+=this.renderer.def(a);break}case"paragraph":{t+=this.renderer.paragraph(a);break}case"text":{t+=this.renderer.text(a);break}default:{let o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return t}parseInline(n,t=this.renderer){var l,i;this.renderer.parser=this;let r="";for(let s=0;s<n.length;s++){let a=n[s];if((i=(l=this.options.extensions)==null?void 0:l.renderers)!=null&&i[a.type]){let u=this.options.extensions.renderers[a.type].call({parser:this},a);if(u!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(a.type)){r+=u||"";continue}}let o=a;switch(o.type){case"escape":{r+=t.text(o);break}case"html":{r+=t.html(o);break}case"link":{r+=t.link(o);break}case"image":{r+=t.image(o);break}case"checkbox":{r+=t.checkbox(o);break}case"strong":{r+=t.strong(o);break}case"em":{r+=t.em(o);break}case"codespan":{r+=t.codespan(o);break}case"br":{r+=t.br(o);break}case"del":{r+=t.del(o);break}case"text":{r+=t.text(o);break}default:{let u='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},Jr,qt=(Jr=class{constructor(e){Q(this,"options");Q(this,"block");this.options=e||nt}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?He.lex:He.lexInline}provideParser(e=this.block){return e?Qe.parse:Qe.parseInline}},Q(Jr,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),Q(Jr,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Jr),km=class{constructor(...e){Q(this,"defaults",xo());Q(this,"options",this.setOptions);Q(this,"parse",this.parseMarkdown(!0));Q(this,"parseInline",this.parseMarkdown(!1));Q(this,"Parser",Qe);Q(this,"Renderer",Ml);Q(this,"TextRenderer",Fo);Q(this,"Lexer",He);Q(this,"Tokenizer",Dl);Q(this,"Hooks",qt);this.use(...e)}walkTokens(e,n){var r,l;let t=[];for(let i of e)switch(t=t.concat(n.call(this,i)),i.type){case"table":{let s=i;for(let a of s.header)t=t.concat(this.walkTokens(a.tokens,n));for(let a of s.rows)for(let o of a)t=t.concat(this.walkTokens(o.tokens,n));break}case"list":{let s=i;t=t.concat(this.walkTokens(s.items,n));break}default:{let s=i;(l=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&l[s.type]?this.defaults.extensions.childTokens[s.type].forEach(a=>{let o=s[a].flat(1/0);t=t.concat(this.walkTokens(o,n))}):s.tokens&&(t=t.concat(this.walkTokens(s.tokens,n)))}}return t}use(...e){let n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(t=>{let r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(l=>{if(!l.name)throw new Error("extension name required");if("renderer"in l){let i=n.renderers[l.name];i?n.renderers[l.name]=function(...s){let a=l.renderer.apply(this,s);return a===!1&&(a=i.apply(this,s)),a}:n.renderers[l.name]=l.renderer}if("tokenizer"in l){if(!l.level||l.level!=="block"&&l.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=n[l.level];i?i.unshift(l.tokenizer):n[l.level]=[l.tokenizer],l.start&&(l.level==="block"?n.startBlock?n.startBlock.push(l.start):n.startBlock=[l.start]:l.level==="inline"&&(n.startInline?n.startInline.push(l.start):n.startInline=[l.start]))}"childTokens"in l&&l.childTokens&&(n.childTokens[l.name]=l.childTokens)}),r.extensions=n),t.renderer){let l=this.defaults.renderer||new Ml(this.defaults);for(let i in t.renderer){if(!(i in l))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let s=i,a=t.renderer[s],o=l[s];l[s]=(...u)=>{let d=a.apply(l,u);return d===!1&&(d=o.apply(l,u)),d||""}}r.renderer=l}if(t.tokenizer){let l=this.defaults.tokenizer||new Dl(this.defaults);for(let i in t.tokenizer){if(!(i in l))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let s=i,a=t.tokenizer[s],o=l[s];l[s]=(...u)=>{let d=a.apply(l,u);return d===!1&&(d=o.apply(l,u)),d}}r.tokenizer=l}if(t.hooks){let l=this.defaults.hooks||new qt;for(let i in t.hooks){if(!(i in l))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let s=i,a=t.hooks[s],o=l[s];qt.passThroughHooks.has(i)?l[s]=u=>{if(this.defaults.async&&qt.passThroughHooksRespectAsync.has(i))return(async()=>{let h=await a.call(l,u);return o.call(l,h)})();let d=a.call(l,u);return o.call(l,d)}:l[s]=(...u)=>{if(this.defaults.async)return(async()=>{let h=await a.apply(l,u);return h===!1&&(h=await o.apply(l,u)),h})();let d=a.apply(l,u);return d===!1&&(d=o.apply(l,u)),d}}r.hooks=l}if(t.walkTokens){let l=this.defaults.walkTokens,i=t.walkTokens;r.walkTokens=function(s){let a=[];return a.push(i.call(this,s)),l&&(a=a.concat(l.call(this,s))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return He.lex(e,n??this.defaults)}parser(e,n){return Qe.parse(e,n??this.defaults)}parseMarkdown(e){return(n,t)=>{let r={...t},l={...this.defaults,...r},i=this.onError(!!l.silent,!!l.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(l.hooks&&(l.hooks.options=l,l.hooks.block=e),l.async)return(async()=>{let s=l.hooks?await l.hooks.preprocess(n):n,a=await(l.hooks?await l.hooks.provideLexer(e):e?He.lex:He.lexInline)(s,l),o=l.hooks?await l.hooks.processAllTokens(a):a;l.walkTokens&&await Promise.all(this.walkTokens(o,l.walkTokens));let u=await(l.hooks?await l.hooks.provideParser(e):e?Qe.parse:Qe.parseInline)(o,l);return l.hooks?await l.hooks.postprocess(u):u})().catch(i);try{l.hooks&&(n=l.hooks.preprocess(n));let s=(l.hooks?l.hooks.provideLexer(e):e?He.lex:He.lexInline)(n,l);l.hooks&&(s=l.hooks.processAllTokens(s)),l.walkTokens&&this.walkTokens(s,l.walkTokens);let a=(l.hooks?l.hooks.provideParser(e):e?Qe.parse:Qe.parseInline)(s,l);return l.hooks&&(a=l.hooks.postprocess(a)),a}catch(s){return i(s)}}}onError(e,n){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let r="<p>An error occurred:</p><pre>"+Ye(t.message+"",!0)+"</pre>";return n?Promise.resolve(r):r}if(n)return Promise.reject(t);throw t}}},Jn=new km;function $(e,n){return Jn.parse(e,n)}$.options=$.setOptions=function(e){return Jn.setOptions(e),$.defaults=Jn.defaults,dd($.defaults),$};$.getDefaults=xo;$.defaults=nt;function xm(...e){return Jn.use(...e),$.defaults=Jn.defaults,dd($.defaults),$}$.use=xm;$.walkTokens=function(e,n){return Jn.walkTokens(e,n)};$.parseInline=Jn.parseInline;$.Parser=Qe;$.parser=Qe.parse;$.Renderer=Ml;$.TextRenderer=Fo;$.Lexer=He;$.lexer=He.lex;$.Tokenizer=Dl;$.Hooks=qt;$.parse=$;$.options;$.setOptions;$.walkTokens;$.parseInline;Qe.parse;He.lex;const wm=Object.assign({"/src/content/不会那么痛-但也不会好得那么干脆.md":ch,"/src/content/中国接住-泼天富贵-的四十年.md":dh,"/src/content/以家之名行暴-亲密关系中的暴力为什么被豁免.md":fh,"/src/content/你的设计不是不够创意-是想法太多.md":ph,"/src/content/先听好消息还是坏消息.md":hh,"/src/content/复盘那个-还没出生就规划好人生-的产品-我们输在哪.md":mh,"/src/content/平陆运河与东盟-连起来看才懂这场世纪对赌.md":gh,"/src/content/当世界只允许出现阳光-会变得更好吗.md":vh,"/src/content/爆款属于系统-不属于个体.md":yh,"/src/content/盛名之下-百年夙愿的叙事解剖.md":kh,"/src/content/离婚冷静期-针对弱者的成本转嫁.md":xh,"/src/content/设计师的-春天-来了-但比冬天还难熬.md":wh,"/src/content/谁可以决定让机器停下来.md":Sh,"/src/content/谁在替城市买单.md":Eh});function Sm(e){const n=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!n)return{meta:{},content:e.trim()};const t={};for(const r of n[1].split(/\r?\n/)){const l=r.match(/^([\w-]+):\s*(.*)$/);l&&(t[l[1]]=l[2].replace(/^['"]|['"]$/g,"").trim())}return{meta:t,content:n[2].trim()}}function Tt(){return Object.entries(wm).map(([e,n])=>{const{meta:t,content:r}=Sm(n),l=e.split("/").pop().replace(/\.md$/,""),i=r.replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/[#>*`~\-|]/g,"").split(/\n{2,}/).map(s=>s.replace(/\s+/g," ").trim()).filter(Boolean).join(`
`).trim();return{slug:l,raw:n,content:r,title:t.title||l,date:t.date||"",tag:t.tag||"",excerpt:t.excerpt||i.slice(0,200)}}).sort((e,n)=>(n.date||"").localeCompare(e.date||""))}function Em(e){return Tt().find(n=>n.slug===e)}const Ol=new $.Renderer,Nm=Ol.image.bind(Ol);Ol.image=({href:e,title:n,text:t})=>{let r=e;return e&&!/^(https?:|data:|\/|#)/i.test(e)&&(r=`/images/${e.replace(/^\.?\//,"")}`),Nm({href:r,title:n,text:t})};$.setOptions({renderer:Ol,gfm:!0,breaks:!0});function wd(e){return $.parse(e||"")}const Cm=6,st=Tt().slice(0,Cm);function jm(){const[e,n]=P.useState(0),[t,r]=P.useState("down"),l=P.useRef(null),i=st[e];P.useEffect(()=>{const o=l.current;if(!o)return;let u=0;const d=h=>{if(window.innerWidth<=900)return;const f=Date.now();if(f-u<180)return;u=f;const y=h.deltaY>0?1:-1,v=e===0,k=e===st.length-1;if(y===-1&&v||y===1&&k)return;h.preventDefault();const A=e+y;A>=0&&A<st.length&&(r(y>0?"down":"up"),n(A))};return o.addEventListener("wheel",d,{passive:!1}),()=>o.removeEventListener("wheel",d)},[e]);const s=o=>{o!==e&&(r(o>e?"down":"up"),n(o))},a=o=>{window.location.hash=`#/post/${encodeURIComponent(o)}`};return c.jsxs("div",{className:"home-insights",id:"home-insights",children:[c.jsx("div",{className:"section-header",children:c.jsxs("div",{className:"section-header-row",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"洞察画廊"}),c.jsx("p",{children:"对文化、技术与设计的持续观察与思考。点击左侧目录，或在右侧区域滚动鼠标切换，点击文章可进入全文阅读。"})]}),c.jsx("a",{className:"section-more",href:"#/insights",children:"更多 →"})]})}),c.jsxs("div",{className:"works-reader",children:[c.jsx("div",{className:"works-toc",children:st.map((o,u)=>c.jsxs("div",{className:`toc-item ${e===u?"active":""}`,onClick:()=>s(u),children:[c.jsx("div",{className:"toc-title",children:o.title}),c.jsxs("div",{className:"toc-meta",children:[c.jsx("span",{children:o.tag}),c.jsx("span",{children:o.date})]})]},o.slug))}),c.jsx("div",{className:"works-articles",ref:l,children:c.jsxs("article",{className:`work-article slide-${t}`,children:[c.jsxs("div",{className:"article-header",children:[c.jsx("h3",{className:"article-title",children:i.title}),c.jsxs("div",{className:"article-meta",children:[c.jsx("span",{children:i.tag}),c.jsx("span",{children:"·"}),c.jsx("span",{children:i.date})]})]}),c.jsx("div",{className:"article-body",children:c.jsx("p",{children:i.excerpt})}),c.jsxs("div",{className:"article-tags",children:[c.jsx("span",{className:"article-tag",children:i.tag}),c.jsx("button",{className:"article-read-more",onClick:()=>a(i.slug),children:"阅读全文 →"})]}),c.jsx("div",{className:"scroll-hint",children:e<st.length-1?c.jsxs("span",{children:["↓ 滚动查看下一篇：",st[e+1].title]}):c.jsx("span",{children:"↑ 已是最后一篇，向上滚动返回"})})]},i.slug)})]})]})}function It(e){var n;return e&&(e.image||((n=e.images)==null?void 0:n[0]))||""}function zo(){return fetch(`/works/works.json?t=${Date.now()}`,{cache:"no-store"}).then(e=>{if(!e.ok)throw new Error(`读取作品集失败（HTTP ${e.status}）`);return e.json()}).then(e=>Array.isArray(e)?e:[])}function Yr(){try{localStorage.setItem("worksUpdatedAt",String(Date.now()))}catch{}window.dispatchEvent(new Event("works-updated"))}function Sd(e){const n=()=>e(),t=l=>{l.key==="worksUpdatedAt"&&e()},r=()=>{document.visibilityState==="visible"&&e()};return window.addEventListener("works-updated",n),window.addEventListener("storage",t),document.addEventListener("visibilitychange",r),()=>{window.removeEventListener("works-updated",n),window.removeEventListener("storage",t),document.removeEventListener("visibilitychange",r)}}function Ed({work:e,onClose:n}){var t;return P.useEffect(()=>{const r=l=>{l.key==="Escape"&&n()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[n]),cd.createPortal(c.jsx("div",{className:"work-modal",onClick:r=>{r.target===r.currentTarget&&n()},children:c.jsxs("div",{className:"work-modal-content work-modal-long",children:[c.jsx("button",{className:"work-modal-close",onClick:n,"aria-label":"关闭",children:"×"}),c.jsxs("div",{className:"work-modal-body",children:[c.jsx("h3",{children:e.title}),c.jsxs("div",{className:"work-modal-meta",children:[(t=e.meta)==null?void 0:t.map((r,l)=>c.jsx("span",{children:r},l)),e.status&&c.jsx("span",{className:"work-modal-status",children:e.status})]}),e.url&&c.jsx("a",{className:"work-modal-link",href:e.url,target:"_blank",rel:"noreferrer",onClick:r=>r.stopPropagation(),children:"访问项目 →"}),e.image&&c.jsx("div",{className:"work-modal-hero",children:c.jsx("img",{src:e.image,alt:e.title})}),e.images&&e.images.length>0&&c.jsx("div",{className:"work-modal-long-gallery",children:e.images.map((r,l)=>c.jsx("img",{src:r,alt:`${e.title} ${l+1}`},l))})]})]})}),document.body)}function Fm(){const[e,n]=P.useState([]),[t,r]=P.useState(null),[l,i]=P.useState(""),s=P.useRef(null),a=P.useRef(null),o=P.useRef({current:0,target:0,isDragging:!1,startX:0,startY:0,lastX:0,velocity:0,lastTime:0,moved:!1,downTarget:null,rafId:null});P.useEffect(()=>{let d=!0;const h=async()=>{try{const f=await zo();d&&n(f)}catch{n([])}};return h(),Sd(h)},[]);const u=P.useCallback(()=>{var N,_;const d=o.current,h=a.current;if(!h||e.length===0)return;const f=.16,y=.62,v=d.target-d.current;d.velocity+=v*f,d.velocity*=y,d.current+=d.velocity;const k=h.children,m=h.parentElement.clientWidth/2,p=e.length,g=(d.current%p+p)%p;let x=Math.round(g);x=(x%p+p)%p;const E=((N=e[x])==null?void 0:N.title)||"";E!==l&&i(E);for(let z=0;z<k.length;z++){const W=k[z];let T=z-g;T>p/2&&(T-=p),T<-p/2&&(T+=p);const ne=Math.abs(T),Ce=(((_=k[0])==null?void 0:_.offsetWidth)||440)/2,mn=Ce*2.6,Ot=T*mn;let tn=1.3-ne*.3;tn=Math.max(.5,tn);let Ke=1-ne*.16;Ke=Math.max(.35,Ke);const On=100-Math.round(ne*10);W.style.transform=`translateX(${m+Ot-Ce}px) translateY(-50%) scale(${tn})`,W.style.opacity=Ke,W.style.zIndex=On}d.rafId=requestAnimationFrame(u)},[e.length]);return P.useEffect(()=>{if(e.length===0)return;const d=o.current;return d.rafId=requestAnimationFrame(u),()=>{d.rafId&&cancelAnimationFrame(d.rafId)}},[e.length,u]),P.useEffect(()=>{const d=s.current;if(!d||e.length===0)return;const h=f=>{if(window.innerWidth<=900)return;f.preventDefault();const y=o.current;y.target+=f.deltaY*.008};return d.addEventListener("wheel",h,{passive:!1}),()=>d.removeEventListener("wheel",h)},[e.length]),P.useEffect(()=>{const d=s.current;if(!d||e.length===0)return;const h=o.current,f=k=>{h.isDragging=!0,h.startX=k.clientX,h.startY=k.clientY,h.lastX=k.clientX,h.lastTime=Date.now(),h.velocity=0,h.moved=!1,h.downTarget=k.target,d.setPointerCapture(k.pointerId),d.style.cursor="grabbing"},y=k=>{if(!h.isDragging)return;const A=k.clientX-h.lastX,m=Date.now()-h.lastTime;h.lastX=k.clientX,h.lastTime=Date.now(),(Math.abs(k.clientX-h.startX)>6||Math.abs(k.clientY-h.startY)>6)&&(h.moved=!0),h.target-=A*.006,m>0&&(h.velocity=-A/m*.015)},v=()=>{var A,m;if(!h.isDragging)return;if(h.isDragging=!1,d.style.cursor="grab",!h.moved){const p=(m=(A=h.downTarget)==null?void 0:A.closest)==null?void 0:m.call(A,".work-carousel-card"),g=p?Number(p.dataset.index):NaN;!Number.isNaN(g)&&e[g]&&r(e[g])}const k=()=>{h.isDragging||(h.velocity*=.55,!(Math.abs(h.velocity)<.001)&&(h.target+=h.velocity,requestAnimationFrame(k)))};k()};return d.addEventListener("pointerdown",f),d.addEventListener("pointermove",y),d.addEventListener("pointerup",v),d.addEventListener("pointerleave",v),()=>{d.removeEventListener("pointerdown",f),d.removeEventListener("pointermove",y),d.removeEventListener("pointerup",v),d.removeEventListener("pointerleave",v)}},[e]),c.jsxs("div",{className:"home-works",id:"home-works",children:[c.jsx("div",{className:"section-header",children:c.jsxs("div",{className:"section-header-row",children:[c.jsxs("div",{children:[c.jsx("h2",{children:"精选作品"}),c.jsx("p",{children:"从概念到落地的完整设计实践。在此区域滚动鼠标横向浏览。"})]}),c.jsx("a",{className:"section-more",href:"#/works",children:"更多 →"})]})}),c.jsx("div",{className:"works-active-title",children:l}),c.jsx("div",{className:"works-carousel",ref:s,children:c.jsx("div",{className:"works-carousel-track",ref:a,children:e.map((d,h)=>{var f,y;return c.jsxs("div",{className:"work-carousel-card","data-index":h,role:"button",tabIndex:0,onKeyDown:v=>{v.key==="Enter"&&r(d)},children:[c.jsx("div",{className:"work-carousel-img-wrap",children:It(d)?c.jsx("img",{src:It(d),alt:d.title}):c.jsx("div",{className:"work-carousel-placeholder",children:d.title[0]})}),c.jsxs("div",{className:"work-carousel-info",children:[c.jsx("h3",{children:d.title}),c.jsxs("div",{className:"work-carousel-meta",children:[((f=d.meta)==null?void 0:f[0])&&c.jsx("span",{children:d.meta[0]}),((y=d.meta)==null?void 0:y[1])&&c.jsx("span",{children:d.meta[1]})]})]})]},d.id)})})}),t&&c.jsx(Ed,{work:t,onClose:()=>r(null)})]})}function zm(){const[e,n]=P.useState([]),[t,r]=P.useState(null);return P.useEffect(()=>{let l=!0;const i=async()=>{try{const s=await zo();l&&n(s)}catch{n([])}};return i(),Sd(i)},[]),c.jsxs("div",{className:"works-gallery-page",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("h2",{children:"全部作品"}),c.jsx("p",{children:"从概念到落地的完整设计实践。"})]}),c.jsx("div",{className:"gallery-grid",children:e.map(l=>{var i;return c.jsxs("div",{className:"gallery-card",onClick:()=>r(l),role:"button",tabIndex:0,onKeyDown:s=>{s.key==="Enter"&&r(l)},children:[c.jsx("div",{className:"gallery-card-img-wrap",children:It(l)?c.jsx("img",{src:It(l),alt:l.title}):c.jsx("div",{className:"gallery-card-placeholder",children:l.title[0]})}),c.jsxs("div",{className:"gallery-card-overlay",children:[c.jsx("h3",{children:l.title}),c.jsxs("div",{className:"gallery-card-meta",children:[(i=l.meta)==null?void 0:i.map((s,a)=>c.jsx("span",{children:s},a)),l.status&&c.jsx("span",{className:"gallery-card-status",children:l.status})]})]})]},l.id)})}),t&&c.jsx(Ed,{work:t,onClose:()=>r(null)})]})}const _m=Tt();function Pm(){const e=n=>{window.location.hash=`#/post/${encodeURIComponent(n)}`};return c.jsxs("div",{className:"insights-list-page",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("h2",{children:"洞察画廊"}),c.jsx("p",{children:"对文化、技术与设计的持续观察与思考。"})]}),c.jsx("div",{className:"insights-long-list",children:_m.map(n=>c.jsxs("div",{className:"insights-long-item",onClick:()=>e(n.slug),role:"button",tabIndex:0,onKeyDown:t=>{t.key==="Enter"&&e(n.slug)},children:[c.jsxs("div",{className:"insights-long-main",children:[c.jsx("span",{className:"insights-long-title",children:n.title}),c.jsx("p",{className:"insights-long-excerpt",children:n.excerpt})]}),c.jsxs("span",{className:"insights-long-sub",children:[n.tag," · ",n.date]})]},n.slug))})]})}const Am=[{title:"文化是土壤",desc:"任何脱离文化语境的产品都是无根之木。理解文化，才能理解真正的需求。"},{title:"技术是工具",desc:"技术本身不是目的，而是实现人文关怀与美学追求的媒介。"},{title:"生活是实验场",desc:"最好的研究对象是自己真实的日常生活，最好的验证是把想法付诸实践。"},{title:"产品是回答",desc:"每个产品都是对某个问题的回答，而我始终在寻找更好的问题。"}],Tm="https://formspree.io/f/YOUR_FORM_ID";function Im(){const[e,n]=P.useState({name:"",email:"",message:""}),[t,r]=P.useState(!1),[l,i]=P.useState(null),s=o=>{const{name:u,value:d}=o.target;n(h=>({...h,[u]:d}))},a=async o=>{if(o.preventDefault(),!t){r(!0),i(null);try{(await fetch(Tm,{method:"POST",headers:{Accept:"application/json"},body:new FormData(o.target)})).ok?(i("success"),n({name:"",email:"",message:""})):i("error")}catch{i("error")}finally{r(!1)}}};return c.jsxs("div",{id:"about",className:"about-page",children:[c.jsxs("div",{className:"about-layout",children:[c.jsxs("div",{className:"profile-section",children:[c.jsx("div",{className:"profile-pic",children:c.jsx("img",{src:"/profile.png",alt:"Profile"})}),c.jsx("div",{className:"profile-label",children:"主理人"}),c.jsx("div",{className:"profile-name",children:"创造试验室"})]}),c.jsxs("div",{className:"bio-text",children:[c.jsx("h2",{children:"关于我"}),c.jsx("p",{children:"我是一名跨领域研究者与产品创造者，关注文化、技术与生活方式的交叉地带。 在这里，我尝试用设计、写作与代码来回应一个问题： 我们如何在快速变化的时代中，创造既有意义又有美感的产品与体验？"}),c.jsx("p",{children:"我的实践横跨研究、设计与开发：观察文化现象，提炼可复用的方法论， 并将其转化为具体的作品。比起追逐热点，我更愿意做深、做透， 在实验中寻找属于自己的创造节奏。"}),c.jsx("div",{className:"philosophy-grid",children:Am.map((o,u)=>c.jsxs("div",{className:"philosophy-item",children:[c.jsx("h4",{children:o.title}),c.jsx("p",{children:o.desc})]},u))}),c.jsxs("div",{className:"contact-links",children:[c.jsx("a",{href:"mailto:your@email.com",className:"contact-link",children:"发送邮件 →"}),c.jsx("a",{href:"#",className:"contact-link",children:"查看简历 →"})]})]})]}),c.jsx("div",{className:"contact-form-section",children:c.jsxs("div",{className:"contact-form-layout",children:[c.jsxs("div",{className:"contact-form-left",children:[c.jsx("div",{className:"contact-form-email",children:"hello@creativelab.co"}),c.jsxs("p",{className:"contact-form-desc",children:["扎根于珀斯与悉尼。",c.jsx("br",{}),"为全世界而建立。"]})]}),c.jsxs("form",{className:"contact-form",onSubmit:a,children:[c.jsx("div",{className:"contact-form-label",children:"发起咨询"}),c.jsx("input",{type:"text",name:"name",placeholder:"全名",className:"contact-form-input",value:e.name,onChange:s,required:!0}),c.jsx("input",{type:"email",name:"email",placeholder:"你的电子邮件",className:"contact-form-input",value:e.email,onChange:s,required:!0}),c.jsx("textarea",{name:"message",placeholder:"你的信息",rows:"4",className:"contact-form-textarea",value:e.message,onChange:s,required:!0}),c.jsx("button",{type:"submit",className:"contact-form-submit",disabled:t,children:t?"提交中...":"提交"}),l==="success"&&c.jsx("div",{className:"form-status success",children:"消息已发送，我会尽快回复你！"}),l==="error"&&c.jsx("div",{className:"form-status error",children:"发送失败，请稍后重试或直接发邮件。"})]})]})}),c.jsxs("footer",{className:"about-footer",children:[c.jsxs("div",{className:"about-footer-inner",children:[c.jsxs("div",{className:"footer-col",children:[c.jsx("div",{className:"footer-col-title",children:"关注"}),c.jsxs("div",{className:"footer-links",children:[c.jsx("a",{href:"#",className:"footer-link",children:"小红书"}),c.jsx("a",{href:"#",className:"footer-link",children:"抖音"}),c.jsx("a",{href:"#",className:"footer-link",children:"WeChat"}),c.jsx("a",{href:"#",className:"footer-link",children:"Bilibili"}),c.jsx("a",{href:"#",className:"footer-link",children:"Instagram"}),c.jsx("a",{href:"#",className:"footer-link",children:"X"})]})]}),c.jsxs("div",{className:"footer-col",children:[c.jsx("div",{className:"footer-col-title",children:"联系方式"}),c.jsx("div",{className:"footer-links",children:c.jsx("a",{href:"mailto:hello@creativelab.co",className:"footer-link",children:"hello@creativelab.co"})})]}),c.jsxs("div",{className:"footer-col",children:[c.jsx("div",{className:"footer-col-title",children:"法律"}),c.jsxs("div",{className:"footer-links",children:[c.jsx("a",{href:"#",className:"footer-link",children:"隐私政策"}),c.jsx("a",{href:"#",className:"footer-link",children:"条款与条件"})]})]})]}),c.jsx("div",{className:"footer-copyright",children:"©2026 创造试验室"})]})]})}function Rm(){return c.jsxs("footer",{className:"footer",children:[c.jsxs("div",{className:"footer-left",children:["© ",new Date().getFullYear()," 创造试验室 Creative Laboratory. All rights reserved."]}),c.jsxs("div",{className:"footer-right",children:[c.jsx("a",{href:"#",className:"footer-link",children:"GitHub"}),c.jsx("a",{href:"#",className:"footer-link",children:"Twitter"}),c.jsx("a",{href:"#",className:"footer-link",children:"LinkedIn"})]})]})}function Lm({slug:e,onBack:n}){const t=Em(e);if(!t)return c.jsx("div",{className:"post-page",children:c.jsxs("div",{className:"post-empty",children:[c.jsx("p",{children:"文章不存在或已被删除。"}),c.jsx("button",{className:"post-back",onClick:n,children:"← 返回洞察画廊"})]})});const r=wd(t.content),l=Tt(),i=l.findIndex(o=>o.slug===t.slug),s=i>0?l[i-1]:null,a=i>=0&&i<l.length-1?l[i+1]:null;return c.jsxs("div",{className:"post-page",children:[c.jsxs("div",{className:"post-toolbar",children:[c.jsx("button",{className:"post-back",onClick:n,children:"← 返回洞察画廊"}),c.jsxs("span",{className:"post-toolbar-hint",children:["创作于 · ",t.date]})]}),c.jsxs("article",{className:"post-article",children:[c.jsxs("header",{className:"post-header",children:[c.jsxs("div",{className:"post-meta",children:[c.jsx("span",{className:"post-tag",children:t.tag}),c.jsx("span",{children:t.date})]}),c.jsx("h1",{className:"post-title",children:t.title})]}),c.jsx("div",{className:"article-content",dangerouslySetInnerHTML:{__html:r}})]}),c.jsxs("nav",{className:"post-nav",children:[s&&c.jsxs("a",{className:"post-nav-item",href:`#/post/${encodeURIComponent(s.slug)}`,children:[c.jsx("span",{className:"post-nav-label",children:"← 上一篇"}),c.jsx("span",{className:"post-nav-title",children:s.title})]}),a&&c.jsxs("a",{className:"post-nav-item next",href:`#/post/${encodeURIComponent(a.slug)}`,children:[c.jsx("span",{className:"post-nav-label",children:"下一篇 →"}),c.jsx("span",{className:"post-nav-title",children:a.title})]})]})]})}function Dm(e){try{const n=new URL(e);return/(^|\.)notion\.so$|(^|\.)notion\.site$|(^|\.)notion\.new$|(^|\.)notion\.com$/.test(n.hostname)}catch{return!1}}function Mm(e){const n=e.match(/[0-9a-f]{32}/i);return n?n[0]:null}function Om({onOpenPost:e}){var Ao;const[n,t]=P.useState(""),[r,l]=P.useState(!1),[i,s]=P.useState(""),[a,o]=P.useState(null),[u,d]=P.useState(null),[h,f]=P.useState(!1),[y,v]=P.useState(null),[k,A]=P.useState(Tt()),[m,p]=P.useState(null),[g,x]=P.useState(""),[E,N]=P.useState(!1),[_,z]=P.useState(""),[W,T]=P.useState(""),[ne,Ce]=P.useState([]),[mn,Ot]=P.useState(!1),[tn,Ke]=P.useState(null),[On,j]=P.useState(!1),[I,R]=P.useState(null),V=P.useRef(null),B=ne.find(w=>w.id===tn)||null,tt=()=>A(Tt()),Ze=async()=>{try{let w=await zo();const C=w.filter(L=>{var H;return!L.image&&((H=L.images)==null?void 0:H.length)});for(const L of C)try{const H=await fetch("/api/works/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:L.id,image:L.images[0],images:L.images.slice(1)})}),ke=await H.json();H.ok&&ke.work&&(w=w.map(gn=>gn.id===ke.work.id?ke.work:gn))}catch{}C.length>0&&(T(`已自动把 ${C.length} 个作品的图库第一张设为首页图`),Yr()),Ce(w)}catch{Ce([])}},Bt=async w=>{if(window.confirm(`确定删除作品「${w.title}」吗？`))try{const C=await fetch("/api/works/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:w.id})}),L=await C.json();if(!C.ok)throw new Error(L.error||"删除失败");Ce(H=>H.filter(ke=>ke.id!==w.id)),Yr()}catch(C){z(C.message||String(C))}},Te=async w=>{j(!0),z("");try{const C=await fetch("/api/works/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)}),L=await C.json();if(!C.ok)throw new Error(L.error||"保存失败");Ce(H=>H.map(ke=>ke.id===L.work.id?L.work:ke)),Yr()}catch(C){z(C.message||String(C))}finally{j(!1)}},rt=w=>{var gn;const C=B;if(!C)return;const L=(gn=C.images)==null?void 0:gn[w];if(!L||!window.confirm("确定删除这张图片？图片文件会一并删除，不可恢复。"))return;const H=(C.images||[]).filter((ti,Pd)=>Pd!==w),ke=C.image===L?H[0]||"":C.image;Te({id:C.id,image:ke,images:H})},Nd=()=>{const w=B;if(!w||!w.image)return;const C=[...w.images||[]],L=C.shift()||"",H=L?"确定删除封面图？删除后，后面的第一张会自动顶上来成为新封面。":"确定删除封面图？图片文件会一并删除，不可恢复。";window.confirm(H)&&Te({id:w.id,image:L,images:C})},Cd=w=>{const C=B;C&&Te({id:C.id,image:w})},jd=w=>{const C=V.current;V.current=null,R(null);const L=B;if(!L||C==null||C===w)return;const H=[...L.images||[]],[ke]=H.splice(C,1);H.splice(w,0,ke),Te({id:L.id,images:H})},_o=async()=>{const w=n.trim();if(w){s(""),l(!0),v(null),d(null),p(null);try{if(Dm(w)){const C=Mm(w);if(!C)throw new Error("无法从链接中识别 Notion 页面 ID，请复制完整的页面链接");const L=await fetch("/api/import/notion",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:w,pageId:C})}),H=await L.json();if(!L.ok)throw new Error(H.error||"Notion 导入失败");o("notion"),d({title:H.title||"未命名文章",tag:"",date:new Date().toISOString().slice(0,7),content:H.content||""})}else{const C=await fetch("/api/import/url",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:w})}),L=await C.json();if(!C.ok)throw new Error(L.error||"链接导入失败");o("url"),d({title:L.title||new URL(w).hostname,tag:"",date:new Date().toISOString().slice(0,7),content:L.content||""})}}catch(C){s(C.message||String(C))}finally{l(!1)}}},Fd=async()=>{if(!(!u||!u.title.trim())){f(!0),s("");try{const w=await fetch("/api/import/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:u.title.trim(),tag:u.tag.trim(),date:u.date.trim(),content:u.content,slug:m||void 0})}),C=await w.json();if(!w.ok)throw new Error(C.error||"保存失败");v(C.slug),window.location.hash=`#/post/${encodeURIComponent(C.slug)}`,window.location.reload()}catch(w){s(w.message||String(w))}finally{f(!1)}}},zd=w=>{t(""),s(""),v(null),d({title:w.title,tag:w.tag,date:w.date,content:w.content}),p(w.slug)},_d=async w=>{if(window.confirm(`确定删除「${w.title}」吗？此操作不可恢复。`)){s("");try{const C=await fetch("/api/import/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:w.slug})}),L=await C.json();if(!C.ok)throw new Error(L.error||"删除失败");window.location.reload()}catch(C){s(C.message||String(C))}}},Po=async()=>{const w=g.trim();if(w){z(""),T(""),N(!0);try{const C=w.match(/[0-9a-f]{32}/i),L=C?C[0]:"";if(!L)throw new Error("无法从链接中识别 Notion Database ID");const H=new AbortController,ke=setTimeout(()=>H.abort(),3e4),gn=await fetch("/api/import/works",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({databaseId:L}),signal:H.signal});clearTimeout(ke);const ti=await gn.json();if(!gn.ok)throw new Error(ti.error||"导入失败");T(`已导入 ${ti.count} 个作品，首页会同步更新`),x(""),await Ze(),Yr()}catch(C){C.name==="AbortError"?z("请求超时，请检查网络或稍后重试"):z(C.message||String(C))}finally{N(!1)}}};return P.useEffect(()=>{tt(),Ze()},[]),c.jsxs("div",{className:"studio-page",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("h2",{children:"写作台"}),c.jsx("p",{children:"粘贴 Notion / 任意网页链接，自动导入并转为 Markdown，预览确认后发布到本站。Obsidian 里写的文章放到 src/content/ 目录即可直接出现。"})]}),c.jsxs("div",{className:"studio-import",children:[c.jsxs("div",{className:"studio-input-row",children:[c.jsx("input",{className:"studio-input",type:"text",placeholder:"粘贴链接：Notion 页面链接，或任意网页地址（https://…）",value:n,onChange:w=>t(w.target.value),onKeyDown:w=>w.key==="Enter"&&_o(),disabled:r}),c.jsx("button",{className:"studio-btn primary",onClick:_o,disabled:r,children:r?"导入中…":"导入并预览"})]}),c.jsx("p",{className:"studio-tip",children:"提示：Notion 链接需在页面右上角 ··· → Connections 中添加你的 Integration 授权，并配置 NOTION_TOKEN（见 README）。"}),i&&c.jsx("p",{className:"studio-error",children:i})]}),u&&c.jsxs("div",{className:"studio-editor",children:[c.jsxs("div",{className:"studio-fields",children:[c.jsxs("label",{children:["标题",c.jsx("input",{className:"studio-input",value:u.title,onChange:w=>d({...u,title:w.target.value})})]}),c.jsxs("label",{children:["标签",c.jsx("input",{className:"studio-input",value:u.tag,placeholder:"如：技术 / 文化 / 生活方式",onChange:w=>d({...u,tag:w.target.value})})]}),c.jsxs("label",{children:["日期",c.jsx("input",{className:"studio-input",value:u.date,placeholder:"YYYY.MM",onChange:w=>d({...u,date:w.target.value})})]})]}),c.jsxs("label",{children:["Markdown 正文（可直接编辑）",c.jsx("textarea",{className:"studio-textarea",rows:14,value:u.content,onChange:w=>d({...u,content:w.target.value})})]}),c.jsxs("div",{className:"studio-actions",children:[c.jsx("button",{className:"studio-btn primary",onClick:Fd,disabled:h,children:h?"保存中…":m?"更新文章":"发布到网站"}),c.jsx("button",{className:"studio-btn",onClick:()=>{d(null),p(null),v(null)},children:"取消"})]}),c.jsxs("div",{className:"studio-preview",children:[c.jsx("h3",{children:"预览"}),c.jsx("div",{className:"article-content preview",dangerouslySetInnerHTML:{__html:wd(u.content)}})]})]}),y&&c.jsxs("div",{className:"studio-success",children:[c.jsx("p",{children:"已发布 ✦"}),c.jsx("a",{href:`#/post/${encodeURIComponent(y)}`,children:"查看新文章 →"})]}),c.jsxs("div",{className:"studio-import",style:{borderTop:"1px solid var(--dirt-line)",paddingTop:40},children:[c.jsx("h3",{style:{fontSize:"0.8rem",fontWeight:800,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--dirt-muted)",marginBottom:20},children:"从 Notion 导入作品集"}),c.jsxs("div",{className:"studio-input-row",children:[c.jsx("input",{className:"studio-input",type:"text",placeholder:"粘贴 Notion Database 链接（数据库视图链接）",value:g,onChange:w=>x(w.target.value),onKeyDown:w=>w.key==="Enter"&&Po(),disabled:E}),c.jsx("button",{className:"studio-btn primary",onClick:Po,disabled:E,children:E?"导入中…":"导入作品集"})]}),c.jsx("p",{className:"studio-tip",children:"提示：在 Notion 里建一个数据库，列名为「标题、类型、年份、状态、封面」。复制数据库链接粘贴上方即可导入。"}),_&&c.jsx("p",{className:"studio-error",children:_}),W&&c.jsx("p",{className:"studio-success",style:{display:"block",marginTop:12},children:W})]}),c.jsxs("div",{className:"studio-list",children:[c.jsxs("h3",{children:["已发布文章（",k.length,"）"]}),k.length===0&&c.jsx("p",{className:"studio-tip",children:"还没有文章。把 Markdown 文件放进 src/content/，或使用上方导入。"}),c.jsx("ul",{children:k.map(w=>c.jsxs("li",{children:[c.jsxs("div",{className:"studio-list-meta",children:[c.jsx("span",{className:"studio-list-tag",children:w.tag}),c.jsx("span",{children:w.date})]}),c.jsx("a",{className:"studio-list-title",href:`#/post/${encodeURIComponent(w.slug)}`,children:w.title}),c.jsxs("div",{style:{display:"flex",gap:8},children:[c.jsx("button",{className:"studio-btn small",onClick:()=>zd(w),children:"编辑"}),c.jsx("button",{className:"studio-btn small danger",onClick:()=>_d(w),children:"删除"})]})]},w.slug))})]}),c.jsxs("div",{className:"studio-list",style:{borderTop:"1px solid var(--dirt-line)",marginTop:48,paddingTop:32},children:[c.jsxs("h3",{children:["作品集管理（",ne.length,"）"]}),ne.length===0&&c.jsx("p",{className:"studio-tip",children:"还没有作品。使用上方「从 Notion 导入作品集」功能添加。"}),c.jsx("ul",{children:ne.map(w=>{var C,L,H;return c.jsxs("li",{children:[c.jsxs("div",{className:"studio-list-meta",children:[c.jsx("span",{className:"studio-list-tag",children:((C=w.meta)==null?void 0:C[0])||"作品"}),c.jsx("span",{children:((L=w.meta)==null?void 0:L[1])||""})]}),c.jsx("a",{className:"studio-list-title",href:w.url||"#",target:w.url?"_blank":void 0,rel:w.url?"noreferrer":void 0,children:w.title}),c.jsxs("div",{style:{display:"flex",gap:8},children:[It(w)&&c.jsx("img",{src:It(w),alt:"",style:{width:40,height:40,objectFit:"cover",borderRadius:4,border:"1px solid var(--dirt-line)"}}),c.jsx("button",{className:"studio-btn small",onClick:()=>Ke(tn===w.id?null:w.id),children:tn===w.id?"收起":`管理图片${(H=w.images)!=null&&H.length?`（${w.images.length}）`:""}`}),c.jsx("button",{className:"studio-btn small danger",onClick:()=>Bt(w),children:"删除"})]})]},w.id)})}),B&&c.jsxs("div",{className:"studio-work-editor",children:[c.jsxs("div",{className:"studio-work-editor-head",children:[c.jsxs("h4",{children:[B.title," · 图片管理"]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[On&&c.jsx("span",{className:"studio-tip",style:{margin:0},children:"保存中…"}),c.jsx("button",{className:"studio-btn small",onClick:()=>Ke(null),children:"收起"})]})]}),c.jsx("p",{className:"studio-tip",children:"按住图片拖拽即可调整顺序，右上角 × 删除图片，左下角可将该图设为封面。所有改动自动保存到 works.json。"}),c.jsxs("div",{className:"studio-img-grid",children:[B.image&&c.jsxs("div",{className:"studio-img-item cover",children:[c.jsx("img",{src:B.image,alt:"封面"}),c.jsx("span",{className:"studio-img-badge",children:"封面"}),c.jsx("button",{className:"studio-img-remove",onClick:Nd,"aria-label":"删除封面",children:"×"})]}),(B.images||[]).map((w,C)=>c.jsxs("div",{className:`studio-img-item ${I===C?"drag-over":""}`,draggable:!0,onDragStart:L=>{V.current=C,L.dataTransfer.effectAllowed="move"},onDragEnd:()=>{V.current=null,R(null)},onDragOver:L=>{L.preventDefault(),R(C)},onDragLeave:()=>R(null),onDrop:L=>{L.preventDefault(),jd(C)},children:[c.jsx("img",{src:w,alt:""}),c.jsx("span",{className:"studio-img-order",children:C+1}),c.jsx("button",{className:"studio-img-set-cover",onClick:()=>Cd(w),title:"设为封面",children:"设为封面"}),c.jsx("button",{className:"studio-img-remove",onClick:()=>rt(C),"aria-label":"删除图片",children:"×"})]},`${w}-${C}`)),!B.image&&!((Ao=B.images)!=null&&Ao.length)&&c.jsx("p",{className:"studio-tip",style:{gridColumn:"1 / -1"},children:"该作品还没有图片。"})]})]})]})]})}function Ga(){const e=window.location.hash.replace(/^#\/?/,"");return e.startsWith("post/")?{page:"post",slug:decodeURIComponent(e.slice(5))}:e==="studio"?{page:"studio"}:e==="works"?{page:"works"}:e==="insights"?{page:"insights"}:e==="about"?{page:"about"}:{page:"home"}}function Bm(){const[e,n]=P.useState("home"),[t,r]=P.useState(Ga),l=P.useRef(null),i=o=>{const u=document.getElementById(o);if(!u)return;const d=u.getBoundingClientRect();d&&window.scrollTo({top:d.top+window.pageYOffset-72,behavior:"smooth"})};P.useEffect(()=>{const o=()=>r(Ga());return window.addEventListener("hashchange",o),()=>window.removeEventListener("hashchange",o)},[]),P.useEffect(()=>{if(t.page==="home"){if(l.current){const o=l.current;l.current=null,requestAnimationFrame(()=>i(o))}n(o=>o==="home-insights"?o:"home")}else n(t.page)},[t]);const s=o=>{if(o==="studio"){window.location.hash="#/studio";return}if(t.page!=="home"){l.current=o,window.location.hash="";return}n(o),i(o)},a=()=>{const o=window.scrollY,u=document.getElementById("home-insights"),d=document.getElementById("home-works"),h=document.getElementById("about");!u||!d||!h||(o<u.offsetTop-100?n("home"):o<d.offsetTop-100?n("home-insights"):o<h.offsetTop-100?n("works"):n("about"))};return P.useEffect(()=>{if(t.page==="home")return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[t.page]),c.jsxs("div",{className:"site",children:[c.jsx(oh,{activeId:e,onNavigate:s}),t.page==="post"?c.jsx(Lm,{slug:t.slug,onBack:()=>s("home-insights")}):t.page==="studio"?c.jsx(Om,{}):t.page==="works"?c.jsx("main",{children:c.jsx(zm,{})}):t.page==="insights"?c.jsx("main",{children:c.jsx(Pm,{})}):t.page==="about"?c.jsx("main",{children:c.jsx(Im,{})}):c.jsxs("main",{children:[c.jsxs("section",{id:"home",children:[c.jsx(uh,{}),c.jsx(Ya,{}),c.jsx(jm,{}),c.jsx(Fm,{})]}),c.jsx(Ya,{})]}),c.jsx(Rm,{})]})}function Ya(){const e=["创造试验室","Creative Laboratory","文化 · 技术 · 生活方式","It Starts in the Lab"],n=[...e,...e,...e,...e];return c.jsx("div",{className:"marquee-band","aria-hidden":"true",children:c.jsx("div",{className:"marquee-track",children:n.map((t,r)=>c.jsxs("span",{children:[t,c.jsx("span",{className:"dot",children:" ● "})]},r))})})}_i.createRoot(document.getElementById("root")).render(c.jsx(Zd.StrictMode,{children:c.jsx(Bm,{})}));
