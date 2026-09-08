(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function TM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var j0={exports:{}},Bc={},X0={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=Symbol.for("react.element"),wM=Symbol.for("react.portal"),AM=Symbol.for("react.fragment"),CM=Symbol.for("react.strict_mode"),RM=Symbol.for("react.profiler"),PM=Symbol.for("react.provider"),bM=Symbol.for("react.context"),LM=Symbol.for("react.forward_ref"),DM=Symbol.for("react.suspense"),NM=Symbol.for("react.memo"),IM=Symbol.for("react.lazy"),Gp=Symbol.iterator;function UM(t){return t===null||typeof t!="object"?null:(t=Gp&&t[Gp]||t["@@iterator"],typeof t=="function"?t:null)}var Y0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q0=Object.assign,$0={};function ao(t,e,n){this.props=t,this.context=e,this.refs=$0,this.updater=n||Y0}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function K0(){}K0.prototype=ao.prototype;function nh(t,e,n){this.props=t,this.context=e,this.refs=$0,this.updater=n||Y0}var ih=nh.prototype=new K0;ih.constructor=nh;q0(ih,ao.prototype);ih.isPureReactComponent=!0;var Wp=Array.isArray,Z0=Object.prototype.hasOwnProperty,rh={current:null},Q0={key:!0,ref:!0,__self:!0,__source:!0};function J0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Z0.call(e,i)&&!Q0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ma,type:t,key:s,ref:o,props:r,_owner:rh.current}}function FM(t,e){return{$$typeof:Ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ma}function OM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jp=/\/+/g;function yu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OM(""+t.key):e.toString(36)}function Fl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ma:case wM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+yu(o,0):i,Wp(r)?(n="",t!=null&&(n=t.replace(jp,"$&/")+"/"),Fl(r,e,n,"",function(c){return c})):r!=null&&(sh(r)&&(r=FM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(jp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Wp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+yu(s,a);o+=Fl(s,e,n,l,r)}else if(l=UM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+yu(s,a++),o+=Fl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(t,e,n){if(t==null)return t;var i=[],r=0;return Fl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function kM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Ol={transition:null},BM={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:rh};function e_(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!sh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=ao;Oe.Fragment=AM;Oe.Profiler=RM;Oe.PureComponent=nh;Oe.StrictMode=CM;Oe.Suspense=DM;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BM;Oe.act=e_;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=q0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Z0.call(e,l)&&!Q0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ma,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:bM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:PM,_context:t},t.Consumer=t};Oe.createElement=J0;Oe.createFactory=function(t){var e=J0.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:LM,render:t}};Oe.isValidElement=sh;Oe.lazy=function(t){return{$$typeof:IM,_payload:{_status:-1,_result:t},_init:kM}};Oe.memo=function(t,e){return{$$typeof:NM,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};Oe.unstable_act=e_;Oe.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Oe.useContext=function(t){return Qt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Oe.useId=function(){return Qt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Oe.useRef=function(t){return Qt.current.useRef(t)};Oe.useState=function(t){return Qt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return Qt.current.useTransition()};Oe.version="18.3.1";X0.exports=Oe;var K=X0.exports;const VM=TM(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zM=K,HM=Symbol.for("react.element"),GM=Symbol.for("react.fragment"),WM=Object.prototype.hasOwnProperty,jM=zM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XM={key:!0,ref:!0,__self:!0,__source:!0};function t_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)WM.call(e,i)&&!XM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:HM,type:t,key:s,ref:o,props:r,_owner:jM.current}}Bc.Fragment=GM;Bc.jsx=t_;Bc.jsxs=t_;j0.exports=Bc;var T=j0.exports,kd={},n_={exports:{}},Sn={},i_={exports:{}},r_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,H){var G=D.length;D.push(H);e:for(;0<G;){var ie=G-1>>>1,he=D[ie];if(0<r(he,H))D[ie]=H,D[G]=he,G=ie;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var H=D[0],G=D.pop();if(G!==H){D[0]=G;e:for(var ie=0,he=D.length,Ve=he>>>1;ie<Ve;){var W=2*(ie+1)-1,ee=D[W],ce=W+1,re=D[ce];if(0>r(ee,G))ce<he&&0>r(re,ee)?(D[ie]=re,D[ce]=G,ie=ce):(D[ie]=ee,D[W]=G,ie=W);else if(ce<he&&0>r(re,G))D[ie]=re,D[ce]=G,ie=ce;else break e}}return H}function r(D,H){var G=D.sortIndex-H.sortIndex;return G!==0?G:D.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=D)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function S(D){if(y=!1,g(D),!_)if(n(l)!==null)_=!0,te(C);else{var H=n(c);H!==null&&X(S,H.startTime-D)}}function C(D,H){_=!1,y&&(y=!1,h(b),b=-1),p=!0;var G=f;try{for(g(H),d=n(l);d!==null&&(!(d.expirationTime>H)||D&&!I());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,f=d.priorityLevel;var he=ie(d.expirationTime<=H);H=t.unstable_now(),typeof he=="function"?d.callback=he:d===n(l)&&i(l),g(H)}else i(l);d=n(l)}if(d!==null)var Ve=!0;else{var W=n(c);W!==null&&X(S,W.startTime-H),Ve=!1}return Ve}finally{d=null,f=G,p=!1}}var w=!1,R=null,b=-1,E=5,x=-1;function I(){return!(t.unstable_now()-x<E)}function j(){if(R!==null){var D=t.unstable_now();x=D;var H=!0;try{H=R(!0,D)}finally{H?N():(w=!1,R=null)}}else w=!1}var N;if(typeof v=="function")N=function(){v(j)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,q=Y.port2;Y.port1.onmessage=j,N=function(){q.postMessage(null)}}else N=function(){m(j,0)};function te(D){R=D,w||(w=!0,N())}function X(D,H){b=m(function(){D(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,te(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var G=f;f=H;try{return D()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=f;f=D;try{return H()}finally{f=G}},t.unstable_scheduleCallback=function(D,H,G){var ie=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ie+G:ie):G=ie,D){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=G+he,D={id:u++,callback:H,priorityLevel:D,startTime:G,expirationTime:he,sortIndex:-1},G>ie?(D.sortIndex=G,e(c,D),n(l)===null&&D===n(c)&&(y?(h(b),b=-1):y=!0,X(S,G-ie))):(D.sortIndex=he,e(l,D),_||p||(_=!0,te(C))),D},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(D){var H=f;return function(){var G=f;f=H;try{return D.apply(this,arguments)}finally{f=G}}}})(r_);i_.exports=r_;var YM=i_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qM=K,yn=YM;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s_=new Set,ea={};function $r(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(ea[t]=e,t=0;t<e.length;t++)s_.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bd=Object.prototype.hasOwnProperty,$M=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xp={},Yp={};function KM(t){return Bd.call(Yp,t)?!0:Bd.call(Xp,t)?!1:$M.test(t)?Yp[t]=!0:(Xp[t]=!0,!1)}function ZM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QM(t,e,n,i){if(e===null||typeof e>"u"||ZM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var oh=/[\-:]([a-z])/g;function ah(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(oh,ah);Ot[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(oh,ah);Ot[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(oh,ah);Ot[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function lh(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QM(e,n,r,i)&&(n=null),i||r===null?KM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=qM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ga=Symbol.for("react.element"),vs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),ch=Symbol.for("react.strict_mode"),Vd=Symbol.for("react.profiler"),o_=Symbol.for("react.provider"),a_=Symbol.for("react.context"),uh=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Hd=Symbol.for("react.suspense_list"),dh=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),l_=Symbol.for("react.offscreen"),qp=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=qp&&t[qp]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,xu;function Do(t){if(xu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xu=e&&e[1]||""}return`
`+xu+t}var Su=!1;function Mu(t,e){if(!t||Su)return"";Su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Su=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Do(t):""}function JM(t){switch(t.tag){case 5:return Do(t.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return t=Mu(t.type,!1),t;case 11:return t=Mu(t.type.render,!1),t;case 1:return t=Mu(t.type,!0),t;default:return""}}function Gd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case vs:return"Portal";case Vd:return"Profiler";case ch:return"StrictMode";case zd:return"Suspense";case Hd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case a_:return(t.displayName||"Context")+".Consumer";case o_:return(t._context.displayName||"Context")+".Provider";case uh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dh:return e=t.displayName||null,e!==null?e:Gd(t.type)||"Memo";case zi:e=t._payload,t=t._init;try{return Gd(t(e))}catch{}}return null}function eE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gd(e);case 8:return e===ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tE(t){var e=c_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wa(t){t._valueTracker||(t._valueTracker=tE(t))}function u_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=c_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wd(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $p(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function d_(t,e){e=e.checked,e!=null&&lh(t,"checked",e,!1)}function jd(t,e){d_(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xd(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xd(t,e,n){(e!=="number"||Jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var No=Array.isArray;function Os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(No(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function f_(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function h_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?h_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ja,p_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ja=ja||document.createElement("div"),ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nE=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){nE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function m_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function g_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=m_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var iE=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $d(t,e){if(e){if(iE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function Kd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=null;function fh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qd=null,ks=null,Bs=null;function Jp(t){if(t=wa(t)){if(typeof Qd!="function")throw Error(J(280));var e=t.stateNode;e&&(e=Wc(e),Qd(t.stateNode,t.type,e))}}function v_(t){ks?Bs?Bs.push(t):Bs=[t]:ks=t}function __(){if(ks){var t=ks,e=Bs;if(Bs=ks=null,Jp(t),e)for(t=0;t<e.length;t++)Jp(e[t])}}function y_(t,e){return t(e)}function x_(){}var Eu=!1;function S_(t,e,n){if(Eu)return t(e,n);Eu=!0;try{return y_(t,e,n)}finally{Eu=!1,(ks!==null||Bs!==null)&&(x_(),__())}}function na(t,e){var n=t.stateNode;if(n===null)return null;var i=Wc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var Jd=!1;if(Ti)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Jd=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Jd=!1}function rE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var zo=!1,ec=null,tc=!1,ef=null,sE={onError:function(t){zo=!0,ec=t}};function oE(t,e,n,i,r,s,o,a,l){zo=!1,ec=null,rE.apply(sE,arguments)}function aE(t,e,n,i,r,s,o,a,l){if(oE.apply(this,arguments),zo){if(zo){var c=ec;zo=!1,ec=null}else throw Error(J(198));tc||(tc=!0,ef=c)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function M_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function em(t){if(Kr(t)!==t)throw Error(J(188))}function lE(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return em(r),t;if(s===i)return em(r),e;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function E_(t){return t=lE(t),t!==null?T_(t):null}function T_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=T_(t);if(e!==null)return e;t=t.sibling}return null}var w_=yn.unstable_scheduleCallback,tm=yn.unstable_cancelCallback,cE=yn.unstable_shouldYield,uE=yn.unstable_requestPaint,xt=yn.unstable_now,dE=yn.unstable_getCurrentPriorityLevel,hh=yn.unstable_ImmediatePriority,A_=yn.unstable_UserBlockingPriority,nc=yn.unstable_NormalPriority,fE=yn.unstable_LowPriority,C_=yn.unstable_IdlePriority,Vc=null,ii=null;function hE(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Vc,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:gE,pE=Math.log,mE=Math.LN2;function gE(t){return t>>>=0,t===0?32:31-(pE(t)/mE|0)|0}var Xa=64,Ya=4194304;function Io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ic(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Io(a):(s&=o,s!==0&&(i=Io(s)))}else o=n&~r,o!==0?i=Io(o):s!==0&&(i=Io(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function vE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _E(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=vE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function R_(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function Tu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function yE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ph(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var $e=0;function P_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var b_,mh,L_,D_,N_,nf=!1,qa=[],$i=null,Ki=null,Zi=null,ia=new Map,ra=new Map,Gi=[],xE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nm(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function yo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wa(e),e!==null&&mh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function SE(t,e,n,i,r){switch(e){case"focusin":return $i=yo($i,t,e,n,i,r),!0;case"dragenter":return Ki=yo(Ki,t,e,n,i,r),!0;case"mouseover":return Zi=yo(Zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ia.set(s,yo(ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ra.set(s,yo(ra.get(s)||null,t,e,n,i,r)),!0}return!1}function I_(t){var e=Nr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=M_(n),e!==null){t.blockedOn=e,N_(t.priority,function(){L_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zd=i,n.target.dispatchEvent(i),Zd=null}else return e=wa(n),e!==null&&mh(e),t.blockedOn=n,!1;e.shift()}return!0}function im(t,e,n){kl(t)&&n.delete(e)}function ME(){nf=!1,$i!==null&&kl($i)&&($i=null),Ki!==null&&kl(Ki)&&(Ki=null),Zi!==null&&kl(Zi)&&(Zi=null),ia.forEach(im),ra.forEach(im)}function xo(t,e){t.blockedOn===e&&(t.blockedOn=null,nf||(nf=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,ME)))}function sa(t){function e(r){return xo(r,t)}if(0<qa.length){xo(qa[0],t);for(var n=1;n<qa.length;n++){var i=qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&xo($i,t),Ki!==null&&xo(Ki,t),Zi!==null&&xo(Zi,t),ia.forEach(e),ra.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)I_(n),n.blockedOn===null&&Gi.shift()}var Vs=Li.ReactCurrentBatchConfig,rc=!0;function EE(t,e,n,i){var r=$e,s=Vs.transition;Vs.transition=null;try{$e=1,gh(t,e,n,i)}finally{$e=r,Vs.transition=s}}function TE(t,e,n,i){var r=$e,s=Vs.transition;Vs.transition=null;try{$e=4,gh(t,e,n,i)}finally{$e=r,Vs.transition=s}}function gh(t,e,n,i){if(rc){var r=rf(t,e,n,i);if(r===null)Iu(t,e,i,sc,n),nm(t,i);else if(SE(r,t,e,n,i))i.stopPropagation();else if(nm(t,i),e&4&&-1<xE.indexOf(t)){for(;r!==null;){var s=wa(r);if(s!==null&&b_(s),s=rf(t,e,n,i),s===null&&Iu(t,e,i,sc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Iu(t,e,i,null,n)}}var sc=null;function rf(t,e,n,i){if(sc=null,t=fh(i),t=Nr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=M_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sc=t,null}function U_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dE()){case hh:return 1;case A_:return 4;case nc:case fE:return 16;case C_:return 536870912;default:return 16}default:return 16}}var Xi=null,vh=null,Bl=null;function F_(){if(Bl)return Bl;var t,e=vh,n=e.length,i,r="value"in Xi?Xi.value:Xi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Bl=r.slice(t,1<i?1-i:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $a(){return!0}function rm(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$a:rm,this.isPropagationStopped=rm,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_h=Mn(lo),Ta=pt({},lo,{view:0,detail:0}),wE=Mn(Ta),wu,Au,So,zc=pt({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(wu=t.screenX-So.screenX,Au=t.screenY-So.screenY):Au=wu=0,So=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Au}}),sm=Mn(zc),AE=pt({},zc,{dataTransfer:0}),CE=Mn(AE),RE=pt({},Ta,{relatedTarget:0}),Cu=Mn(RE),PE=pt({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),bE=Mn(PE),LE=pt({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DE=Mn(LE),NE=pt({},lo,{data:0}),om=Mn(NE),IE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FE[t])?!!e[t]:!1}function yh(){return OE}var kE=pt({},Ta,{key:function(t){if(t.key){var e=IE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yh,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BE=Mn(kE),VE=pt({},zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),am=Mn(VE),zE=pt({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yh}),HE=Mn(zE),GE=pt({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),WE=Mn(GE),jE=pt({},zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XE=Mn(jE),YE=[9,13,27,32],xh=Ti&&"CompositionEvent"in window,Ho=null;Ti&&"documentMode"in document&&(Ho=document.documentMode);var qE=Ti&&"TextEvent"in window&&!Ho,O_=Ti&&(!xh||Ho&&8<Ho&&11>=Ho),lm=" ",cm=!1;function k_(t,e){switch(t){case"keyup":return YE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function $E(t,e){switch(t){case"compositionend":return B_(e);case"keypress":return e.which!==32?null:(cm=!0,lm);case"textInput":return t=e.data,t===lm&&cm?null:t;default:return null}}function KE(t,e){if(ys)return t==="compositionend"||!xh&&k_(t,e)?(t=F_(),Bl=vh=Xi=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return O_&&e.locale!=="ko"?null:e.data;default:return null}}var ZE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZE[t.type]:e==="textarea"}function V_(t,e,n,i){v_(i),e=oc(e,"onChange"),0<e.length&&(n=new _h("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Go=null,oa=null;function QE(t){Z_(t,0)}function Hc(t){var e=Ms(t);if(u_(e))return t}function JE(t,e){if(t==="change")return e}var z_=!1;if(Ti){var Ru;if(Ti){var Pu="oninput"in document;if(!Pu){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),Pu=typeof dm.oninput=="function"}Ru=Pu}else Ru=!1;z_=Ru&&(!document.documentMode||9<document.documentMode)}function fm(){Go&&(Go.detachEvent("onpropertychange",H_),oa=Go=null)}function H_(t){if(t.propertyName==="value"&&Hc(oa)){var e=[];V_(e,oa,t,fh(t)),S_(QE,e)}}function eT(t,e,n){t==="focusin"?(fm(),Go=e,oa=n,Go.attachEvent("onpropertychange",H_)):t==="focusout"&&fm()}function tT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hc(oa)}function nT(t,e){if(t==="click")return Hc(e)}function iT(t,e){if(t==="input"||t==="change")return Hc(e)}function rT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:rT;function aa(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bd.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pm(t,e){var n=hm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hm(n)}}function G_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function W_(){for(var t=window,e=Jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jl(t.document)}return e}function Sh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sT(t){var e=W_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G_(n.ownerDocument.documentElement,n)){if(i!==null&&Sh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=pm(n,s);var o=pm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oT=Ti&&"documentMode"in document&&11>=document.documentMode,xs=null,sf=null,Wo=null,of=!1;function mm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;of||xs==null||xs!==Jl(i)||(i=xs,"selectionStart"in i&&Sh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&aa(Wo,i)||(Wo=i,i=oc(sf,"onSelect"),0<i.length&&(e=new _h("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xs)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},bu={},j_={};Ti&&(j_=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Gc(t){if(bu[t])return bu[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in j_)return bu[t]=e[n];return t}var X_=Gc("animationend"),Y_=Gc("animationiteration"),q_=Gc("animationstart"),$_=Gc("transitionend"),K_=new Map,gm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){K_.set(t,e),$r(e,[t])}for(var Lu=0;Lu<gm.length;Lu++){var Du=gm[Lu],aT=Du.toLowerCase(),lT=Du[0].toUpperCase()+Du.slice(1);dr(aT,"on"+lT)}dr(X_,"onAnimationEnd");dr(Y_,"onAnimationIteration");dr(q_,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr($_,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function vm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,aE(i,e,void 0,t),t.currentTarget=null}function Z_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;vm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;vm(r,a,c),s=l}}}if(tc)throw t=ef,tc=!1,ef=null,t}function nt(t,e){var n=e[df];n===void 0&&(n=e[df]=new Set);var i=t+"__bubble";n.has(i)||(Q_(e,t,2,!1),n.add(i))}function Nu(t,e,n){var i=0;e&&(i|=4),Q_(n,t,i,e)}var Za="_reactListening"+Math.random().toString(36).slice(2);function la(t){if(!t[Za]){t[Za]=!0,s_.forEach(function(n){n!=="selectionchange"&&(cT.has(n)||Nu(n,!1,t),Nu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Za]||(e[Za]=!0,Nu("selectionchange",!1,e))}}function Q_(t,e,n,i){switch(U_(e)){case 1:var r=EE;break;case 4:r=TE;break;default:r=gh}n=r.bind(null,e,n,t),r=void 0,!Jd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Iu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Nr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}S_(function(){var c=s,u=fh(n),d=[];e:{var f=K_.get(t);if(f!==void 0){var p=_h,_=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":p=BE;break;case"focusin":_="focus",p=Cu;break;case"focusout":_="blur",p=Cu;break;case"beforeblur":case"afterblur":p=Cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=CE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=HE;break;case X_:case Y_:case q_:p=bE;break;case $_:p=WE;break;case"scroll":p=wE;break;case"wheel":p=XE;break;case"copy":case"cut":case"paste":p=DE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=am}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var v=c,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,h!==null&&(S=na(v,h),S!=null&&y.push(ca(v,S,g)))),m)break;v=v.return}0<y.length&&(f=new p(f,_,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Zd&&(_=n.relatedTarget||n.fromElement)&&(Nr(_)||_[wi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Nr(_):null,_!==null&&(m=Kr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=sm,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=am,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:Ms(p),g=_==null?f:Ms(_),f=new y(S,v+"leave",p,n,u),f.target=m,f.relatedTarget=g,S=null,Nr(u)===c&&(y=new y(h,v+"enter",_,n,u),y.target=g,y.relatedTarget=m,S=y),m=S,p&&_)t:{for(y=p,h=_,v=0,g=y;g;g=Qr(g))v++;for(g=0,S=h;S;S=Qr(S))g++;for(;0<v-g;)y=Qr(y),v--;for(;0<g-v;)h=Qr(h),g--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=Qr(y),h=Qr(h)}y=null}else y=null;p!==null&&_m(d,f,p,y,!1),_!==null&&m!==null&&_m(d,m,_,y,!0)}}e:{if(f=c?Ms(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=JE;else if(um(f))if(z_)C=iT;else{C=tT;var w=eT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=nT);if(C&&(C=C(t,c))){V_(d,C,n,u);break e}w&&w(t,f,c),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Xd(f,"number",f.value)}switch(w=c?Ms(c):window,t){case"focusin":(um(w)||w.contentEditable==="true")&&(xs=w,sf=c,Wo=null);break;case"focusout":Wo=sf=xs=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,mm(d,n,u);break;case"selectionchange":if(oT)break;case"keydown":case"keyup":mm(d,n,u)}var R;if(xh)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ys?k_(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(O_&&n.locale!=="ko"&&(ys||b!=="onCompositionStart"?b==="onCompositionEnd"&&ys&&(R=F_()):(Xi=u,vh="value"in Xi?Xi.value:Xi.textContent,ys=!0)),w=oc(c,b),0<w.length&&(b=new om(b,t,null,n,u),d.push({event:b,listeners:w}),R?b.data=R:(R=B_(n),R!==null&&(b.data=R)))),(R=qE?$E(t,n):KE(t,n))&&(c=oc(c,"onBeforeInput"),0<c.length&&(u=new om("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=R))}Z_(d,e)})}function ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=na(t,n),s!=null&&i.unshift(ca(t,s,r)),s=na(t,e),s!=null&&i.push(ca(t,s,r))),t=t.return}return i}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _m(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=na(n,s),l!=null&&o.unshift(ca(n,l,a))):r||(l=na(n,s),l!=null&&o.push(ca(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uT=/\r\n?/g,dT=/\u0000|\uFFFD/g;function ym(t){return(typeof t=="string"?t:""+t).replace(uT,`
`).replace(dT,"")}function Qa(t,e,n){if(e=ym(e),ym(t)!==e&&n)throw Error(J(425))}function ac(){}var af=null,lf=null;function cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uf=typeof setTimeout=="function"?setTimeout:void 0,fT=typeof clearTimeout=="function"?clearTimeout:void 0,xm=typeof Promise=="function"?Promise:void 0,hT=typeof queueMicrotask=="function"?queueMicrotask:typeof xm<"u"?function(t){return xm.resolve(null).then(t).catch(pT)}:uf;function pT(t){setTimeout(function(){throw t})}function Uu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);sa(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var co=Math.random().toString(36).slice(2),ei="__reactFiber$"+co,ua="__reactProps$"+co,wi="__reactContainer$"+co,df="__reactEvents$"+co,mT="__reactListeners$"+co,gT="__reactHandles$"+co;function Nr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wi]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sm(t);t!==null;){if(n=t[ei])return n;t=Sm(t)}return e}t=n,n=t.parentNode}return null}function wa(t){return t=t[ei]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function Wc(t){return t[ua]||null}var ff=[],Es=-1;function fr(t){return{current:t}}function rt(t){0>Es||(t.current=ff[Es],ff[Es]=null,Es--)}function et(t,e){Es++,ff[Es]=t.current,t.current=e}var ar={},Yt=fr(ar),on=fr(!1),Hr=ar;function Ys(t,e){var n=t.type.contextTypes;if(!n)return ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function lc(){rt(on),rt(Yt)}function Mm(t,e,n){if(Yt.current!==ar)throw Error(J(168));et(Yt,e),et(on,n)}function J_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,eE(t)||"Unknown",r));return pt({},n,i)}function cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Hr=Yt.current,et(Yt,t),et(on,on.current),!0}function Em(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=J_(t,e,Hr),i.__reactInternalMemoizedMergedChildContext=t,rt(on),rt(Yt),et(Yt,t)):rt(on),et(on,n)}var _i=null,jc=!1,Fu=!1;function ey(t){_i===null?_i=[t]:_i.push(t)}function vT(t){jc=!0,ey(t)}function hr(){if(!Fu&&_i!==null){Fu=!0;var t=0,e=$e;try{var n=_i;for($e=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,jc=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),w_(hh,hr),r}finally{$e=e,Fu=!1}}return null}var Ts=[],ws=0,uc=null,dc=0,Cn=[],Rn=0,Gr=null,xi=1,Si="";function wr(t,e){Ts[ws++]=dc,Ts[ws++]=uc,uc=t,dc=e}function ty(t,e,n){Cn[Rn++]=xi,Cn[Rn++]=Si,Cn[Rn++]=Gr,Gr=t;var i=xi;t=Si;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-jn(e)+r|n<<r|i,Si=s+t}else xi=1<<s|n<<r|i,Si=t}function Mh(t){t.return!==null&&(wr(t,1),ty(t,1,0))}function Eh(t){for(;t===uc;)uc=Ts[--ws],Ts[ws]=null,dc=Ts[--ws],Ts[ws]=null;for(;t===Gr;)Gr=Cn[--Rn],Cn[Rn]=null,Si=Cn[--Rn],Cn[Rn]=null,xi=Cn[--Rn],Cn[Rn]=null}var gn=null,pn=null,lt=!1,Gn=null;function ny(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,pn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:xi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,pn=null,!0):!1;default:return!1}}function hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pf(t){if(lt){var e=pn;if(e){var n=e;if(!Tm(t,e)){if(hf(t))throw Error(J(418));e=Qi(n.nextSibling);var i=gn;e&&Tm(t,e)?ny(i,n):(t.flags=t.flags&-4097|2,lt=!1,gn=t)}}else{if(hf(t))throw Error(J(418));t.flags=t.flags&-4097|2,lt=!1,gn=t}}}function wm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function Ja(t){if(t!==gn)return!1;if(!lt)return wm(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cf(t.type,t.memoizedProps)),e&&(e=pn)){if(hf(t))throw iy(),Error(J(418));for(;e;)ny(t,e),e=Qi(e.nextSibling)}if(wm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=gn?Qi(t.stateNode.nextSibling):null;return!0}function iy(){for(var t=pn;t;)t=Qi(t.nextSibling)}function qs(){pn=gn=null,lt=!1}function Th(t){Gn===null?Gn=[t]:Gn.push(t)}var _T=Li.ReactCurrentBatchConfig;function Mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function el(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Am(t){var e=t._init;return e(t._payload)}function ry(t){function e(h,v){if(t){var g=h.deletions;g===null?(h.deletions=[v],h.flags|=16):g.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=nr(h,v),h.index=0,h.sibling=null,h}function s(h,v,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<v?(h.flags|=2,v):g):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,g,S){return v===null||v.tag!==6?(v=Gu(g,h.mode,S),v.return=h,v):(v=r(v,g),v.return=h,v)}function l(h,v,g,S){var C=g.type;return C===_s?u(h,v,g.props.children,S,g.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zi&&Am(C)===v.type)?(S=r(v,g.props),S.ref=Mo(h,v,g),S.return=h,S):(S=Yl(g.type,g.key,g.props,null,h.mode,S),S.ref=Mo(h,v,g),S.return=h,S)}function c(h,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Wu(g,h.mode,S),v.return=h,v):(v=r(v,g.children||[]),v.return=h,v)}function u(h,v,g,S,C){return v===null||v.tag!==7?(v=Vr(g,h.mode,S,C),v.return=h,v):(v=r(v,g),v.return=h,v)}function d(h,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Gu(""+v,h.mode,g),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ga:return g=Yl(v.type,v.key,v.props,null,h.mode,g),g.ref=Mo(h,null,v),g.return=h,g;case vs:return v=Wu(v,h.mode,g),v.return=h,v;case zi:var S=v._init;return d(h,S(v._payload),g)}if(No(v)||vo(v))return v=Vr(v,h.mode,g,null),v.return=h,v;el(h,v)}return null}function f(h,v,g,S){var C=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(h,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ga:return g.key===C?l(h,v,g,S):null;case vs:return g.key===C?c(h,v,g,S):null;case zi:return C=g._init,f(h,v,C(g._payload),S)}if(No(g)||vo(g))return C!==null?null:u(h,v,g,S,null);el(h,g)}return null}function p(h,v,g,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(g)||null,a(v,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ga:return h=h.get(S.key===null?g:S.key)||null,l(v,h,S,C);case vs:return h=h.get(S.key===null?g:S.key)||null,c(v,h,S,C);case zi:var w=S._init;return p(h,v,g,w(S._payload),C)}if(No(S)||vo(S))return h=h.get(g)||null,u(v,h,S,C,null);el(v,S)}return null}function _(h,v,g,S){for(var C=null,w=null,R=v,b=v=0,E=null;R!==null&&b<g.length;b++){R.index>b?(E=R,R=null):E=R.sibling;var x=f(h,R,g[b],S);if(x===null){R===null&&(R=E);break}t&&R&&x.alternate===null&&e(h,R),v=s(x,v,b),w===null?C=x:w.sibling=x,w=x,R=E}if(b===g.length)return n(h,R),lt&&wr(h,b),C;if(R===null){for(;b<g.length;b++)R=d(h,g[b],S),R!==null&&(v=s(R,v,b),w===null?C=R:w.sibling=R,w=R);return lt&&wr(h,b),C}for(R=i(h,R);b<g.length;b++)E=p(R,h,b,g[b],S),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?b:E.key),v=s(E,v,b),w===null?C=E:w.sibling=E,w=E);return t&&R.forEach(function(I){return e(h,I)}),lt&&wr(h,b),C}function y(h,v,g,S){var C=vo(g);if(typeof C!="function")throw Error(J(150));if(g=C.call(g),g==null)throw Error(J(151));for(var w=C=null,R=v,b=v=0,E=null,x=g.next();R!==null&&!x.done;b++,x=g.next()){R.index>b?(E=R,R=null):E=R.sibling;var I=f(h,R,x.value,S);if(I===null){R===null&&(R=E);break}t&&R&&I.alternate===null&&e(h,R),v=s(I,v,b),w===null?C=I:w.sibling=I,w=I,R=E}if(x.done)return n(h,R),lt&&wr(h,b),C;if(R===null){for(;!x.done;b++,x=g.next())x=d(h,x.value,S),x!==null&&(v=s(x,v,b),w===null?C=x:w.sibling=x,w=x);return lt&&wr(h,b),C}for(R=i(h,R);!x.done;b++,x=g.next())x=p(R,h,b,x.value,S),x!==null&&(t&&x.alternate!==null&&R.delete(x.key===null?b:x.key),v=s(x,v,b),w===null?C=x:w.sibling=x,w=x);return t&&R.forEach(function(j){return e(h,j)}),lt&&wr(h,b),C}function m(h,v,g,S){if(typeof g=="object"&&g!==null&&g.type===_s&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ga:e:{for(var C=g.key,w=v;w!==null;){if(w.key===C){if(C=g.type,C===_s){if(w.tag===7){n(h,w.sibling),v=r(w,g.props.children),v.return=h,h=v;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zi&&Am(C)===w.type){n(h,w.sibling),v=r(w,g.props),v.ref=Mo(h,w,g),v.return=h,h=v;break e}n(h,w);break}else e(h,w);w=w.sibling}g.type===_s?(v=Vr(g.props.children,h.mode,S,g.key),v.return=h,h=v):(S=Yl(g.type,g.key,g.props,null,h.mode,S),S.ref=Mo(h,v,g),S.return=h,h=S)}return o(h);case vs:e:{for(w=g.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(h,v.sibling),v=r(v,g.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=Wu(g,h.mode,S),v.return=h,h=v}return o(h);case zi:return w=g._init,m(h,v,w(g._payload),S)}if(No(g))return _(h,v,g,S);if(vo(g))return y(h,v,g,S);el(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,g),v.return=h,h=v):(n(h,v),v=Gu(g,h.mode,S),v.return=h,h=v),o(h)):n(h,v)}return m}var $s=ry(!0),sy=ry(!1),fc=fr(null),hc=null,As=null,wh=null;function Ah(){wh=As=hc=null}function Ch(t){var e=fc.current;rt(fc),t._currentValue=e}function mf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function zs(t,e){hc=t,wh=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(wh!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(hc===null)throw Error(J(308));As=t,hc.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var Ir=null;function Rh(t){Ir===null?Ir=[t]:Ir.push(t)}function oy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ai(t,i)}function Ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function Ph(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ay(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(t,n)}return r=i.interleaved,r===null?(e.next=e,Rh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(t,n)}function zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ph(t,n)}}function Cm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pc(t,e,n,i){var r=t.updateQueue;Hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(f=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=pt({},d,f);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=d}}function Rm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var Aa={},ri=fr(Aa),da=fr(Aa),fa=fr(Aa);function Ur(t){if(t===Aa)throw Error(J(174));return t}function bh(t,e){switch(et(fa,e),et(da,t),et(ri,Aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qd(e,t)}rt(ri),et(ri,e)}function Ks(){rt(ri),rt(da),rt(fa)}function ly(t){Ur(fa.current);var e=Ur(ri.current),n=qd(e,t.type);e!==n&&(et(da,t),et(ri,n))}function Lh(t){da.current===t&&(rt(ri),rt(da))}var ft=fr(0);function mc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ou=[];function Dh(){for(var t=0;t<Ou.length;t++)Ou[t]._workInProgressVersionPrimary=null;Ou.length=0}var Hl=Li.ReactCurrentDispatcher,ku=Li.ReactCurrentBatchConfig,Wr=0,ht=null,wt=null,Dt=null,gc=!1,jo=!1,ha=0,yT=0;function Vt(){throw Error(J(321))}function Nh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Ih(t,e,n,i,r,s){if(Wr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=t===null||t.memoizedState===null?ET:TT,t=n(i,r),jo){s=0;do{if(jo=!1,ha=0,25<=s)throw Error(J(301));s+=1,Dt=wt=null,e.updateQueue=null,Hl.current=wT,t=n(i,r)}while(jo)}if(Hl.current=vc,e=wt!==null&&wt.next!==null,Wr=0,Dt=wt=ht=null,gc=!1,e)throw Error(J(300));return t}function Uh(){var t=ha!==0;return ha=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?ht.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Un(){if(wt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Dt===null?ht.memoizedState:Dt.next;if(e!==null)Dt=e,wt=t;else{if(t===null)throw Error(J(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Dt===null?ht.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function pa(t,e){return typeof e=="function"?e(t):e}function Bu(t){var e=Un(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Wr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ht.lanes|=u,jr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vu(t){var e=Un(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function cy(){}function uy(t,e){var n=ht,i=Un(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,Fh(hy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,ma(9,fy.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(J(349));Wr&30||dy(n,e,r)}return r}function dy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fy(t,e,n,i){e.value=n,e.getSnapshot=i,py(e)&&my(t)}function hy(t,e,n){return n(function(){py(e)&&my(t)})}function py(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function my(t){var e=Ai(t,1);e!==null&&Xn(e,t,1,-1)}function Pm(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},e.queue=t,t=t.dispatch=MT.bind(null,ht,t),[e.memoizedState,t]}function ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function gy(){return Un().memoizedState}function Gl(t,e,n,i){var r=Zn();ht.flags|=t,r.memoizedState=ma(1|e,n,void 0,i===void 0?null:i)}function Xc(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Nh(i,o.deps)){r.memoizedState=ma(e,n,s,i);return}}ht.flags|=t,r.memoizedState=ma(1|e,n,s,i)}function bm(t,e){return Gl(8390656,8,t,e)}function Fh(t,e){return Xc(2048,8,t,e)}function vy(t,e){return Xc(4,2,t,e)}function _y(t,e){return Xc(4,4,t,e)}function yy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xy(t,e,n){return n=n!=null?n.concat([t]):null,Xc(4,4,yy.bind(null,e,t),n)}function Oh(){}function Sy(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function My(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ey(t,e,n){return Wr&21?(Yn(n,e)||(n=R_(),ht.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function xT(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var i=ku.transition;ku.transition={};try{t(!1),e()}finally{$e=n,ku.transition=i}}function Ty(){return Un().memoizedState}function ST(t,e,n){var i=tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},wy(t))Ay(e,n);else if(n=oy(t,e,n,i),n!==null){var r=Kt();Xn(n,t,i,r),Cy(n,e,i)}}function MT(t,e,n){var i=tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(wy(t))Ay(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,Rh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=oy(t,e,r,i),n!==null&&(r=Kt(),Xn(n,t,i,r),Cy(n,e,i))}}function wy(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function Ay(t,e){jo=gc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Cy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ph(t,n)}}var vc={readContext:In,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},ET={readContext:In,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:bm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,yy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ST.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Pm,useDebugValue:Oh,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Pm(!1),e=t[0];return t=xT.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=Zn();if(lt){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),Nt===null)throw Error(J(349));Wr&30||dy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,bm(hy.bind(null,i,s,t),[t]),i.flags|=2048,ma(9,fy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Nt.identifierPrefix;if(lt){var n=Si,i=xi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TT={readContext:In,useCallback:Sy,useContext:In,useEffect:Fh,useImperativeHandle:xy,useInsertionEffect:vy,useLayoutEffect:_y,useMemo:My,useReducer:Bu,useRef:gy,useState:function(){return Bu(pa)},useDebugValue:Oh,useDeferredValue:function(t){var e=Un();return Ey(e,wt.memoizedState,t)},useTransition:function(){var t=Bu(pa)[0],e=Un().memoizedState;return[t,e]},useMutableSource:cy,useSyncExternalStore:uy,useId:Ty,unstable_isNewReconciler:!1},wT={readContext:In,useCallback:Sy,useContext:In,useEffect:Fh,useImperativeHandle:xy,useInsertionEffect:vy,useLayoutEffect:_y,useMemo:My,useReducer:Vu,useRef:gy,useState:function(){return Vu(pa)},useDebugValue:Oh,useDeferredValue:function(t){var e=Un();return wt===null?e.memoizedState=t:Ey(e,wt.memoizedState,t)},useTransition:function(){var t=Vu(pa)[0],e=Un().memoizedState;return[t,e]},useMutableSource:cy,useSyncExternalStore:uy,useId:Ty,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yc={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=tr(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(Xn(e,t,r,i),zl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=tr(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(Xn(e,t,r,i),zl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=tr(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ji(t,r,i),e!==null&&(Xn(e,t,i,n),zl(e,t,i))}};function Lm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!aa(n,i)||!aa(r,s):!0}function Ry(t,e,n){var i=!1,r=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=an(e)?Hr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Ys(t,r):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yc.enqueueReplaceState(e,e.state,null)}function vf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ph(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=an(e)?Hr:Yt.current,r.context=Ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yc.enqueueReplaceState(r,r.state,null),pc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=JM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _f(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AT=typeof WeakMap=="function"?WeakMap:Map;function Py(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){yc||(yc=!0,Rf=i),_f(t,e)},n}function by(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){_f(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_f(t,e),typeof i!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Nm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new AT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=VT.bind(null,t,e,n),e.then(t,t))}function Im(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Um(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,Ji(n,e,1))),n.lanes|=1),t)}var CT=Li.ReactCurrentOwner,sn=!1;function $t(t,e,n,i){e.child=t===null?sy(e,null,n,i):$s(e,t.child,n,i)}function Fm(t,e,n,i,r){n=n.render;var s=e.ref;return zs(e,r),i=Ih(t,e,n,i,s,r),n=Uh(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(lt&&n&&Mh(e),e.flags|=1,$t(t,e,i,r),e.child)}function Om(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!jh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ly(t,e,s,i,r)):(t=Yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ly(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(aa(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return yf(t,e,n,i,r)}function Dy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Rs,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(Rs,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,et(Rs,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,et(Rs,hn),hn|=i;return $t(t,e,r,n),e.child}function Ny(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yf(t,e,n,i,r){var s=an(n)?Hr:Yt.current;return s=Ys(e,s),zs(e,r),n=Ih(t,e,n,i,s,r),i=Uh(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(lt&&i&&Mh(e),e.flags|=1,$t(t,e,n,r),e.child)}function km(t,e,n,i,r){if(an(n)){var s=!0;cc(e)}else s=!1;if(zs(e,r),e.stateNode===null)Wl(t,e),Ry(e,n,i),vf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=an(n)?Hr:Yt.current,c=Ys(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Dm(e,o,i,c),Hi=!1;var f=e.memoizedState;o.state=f,pc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||on.current||Hi?(typeof u=="function"&&(gf(e,n,u,i),l=e.memoizedState),(a=Hi||Lm(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ay(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:zn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=an(n)?Hr:Yt.current,l=Ys(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Dm(e,o,i,l),Hi=!1,f=e.memoizedState,o.state=f,pc(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||on.current||Hi?(typeof p=="function"&&(gf(e,n,p,i),_=e.memoizedState),(c=Hi||Lm(e,n,c,i,f,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return xf(t,e,n,i,s,r)}function xf(t,e,n,i,r,s){Ny(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Em(e,n,!1),Ci(t,e,s);i=e.stateNode,CT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&Em(e,n,!0),e.child}function Iy(t){var e=t.stateNode;e.pendingContext?Mm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mm(t,e.context,!1),bh(t,e.containerInfo)}function Bm(t,e,n,i,r){return qs(),Th(r),e.flags|=256,$t(t,e,n,i),e.child}var Sf={dehydrated:null,treeContext:null,retryLane:0};function Mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uy(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(ft,r&1),t===null)return pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kc(o,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mf(n),e.memoizedState=Sf,t):kh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return RT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=nr(a,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Mf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sf,i}return s=t.child,t=s.sibling,i=nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function kh(t,e){return e=Kc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tl(t,e,n,i){return i!==null&&Th(i),$s(e,t.child,null,n),t=kh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=zu(Error(J(422))),tl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Kc({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$s(e,t.child,null,o),e.child.memoizedState=Mf(o),e.memoizedState=Sf,s);if(!(e.mode&1))return tl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=zu(s,i,void 0),tl(t,e,o,i)}if(a=(o&t.childLanes)!==0,sn||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ai(t,r),Xn(i,t,r,-1))}return Wh(),i=zu(Error(J(421))),tl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Qi(r.nextSibling),gn=e,lt=!0,Gn=null,t!==null&&(Cn[Rn++]=xi,Cn[Rn++]=Si,Cn[Rn++]=Gr,xi=t.id,Si=t.overflow,Gr=e),e=kh(e,i.children),e.flags|=4096,e)}function Vm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),mf(t.return,e,n)}function Hu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Fy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vm(t,n,e);else if(t.tag===19)Vm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&mc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&mc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hu(e,!0,n,null,s);break;case"together":Hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PT(t,e,n){switch(e.tag){case 3:Iy(e),qs();break;case 5:ly(e);break;case 1:an(e.type)&&cc(e);break;case 4:bh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(fc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?Uy(t,e,n):(et(ft,ft.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);et(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Fy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,Dy(t,e,n)}return Ci(t,e,n)}var Oy,Ef,ky,By;Oy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ef=function(){};ky=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(ri.current);var s=null;switch(n){case"input":r=Wd(t,r),i=Wd(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Yd(t,r),i=Yd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ac)}$d(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ea.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ea.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&nt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};By=function(t,e,n,i){n!==i&&(e.flags|=4)};function Eo(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function bT(t,e,n){var i=e.pendingProps;switch(Eh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return an(e.type)&&lc(),zt(e),null;case 3:return i=e.stateNode,Ks(),rt(on),rt(Yt),Dh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Lf(Gn),Gn=null))),Ef(t,e),zt(e),null;case 5:Lh(e);var r=Ur(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)ky(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return zt(e),null}if(t=Ur(ri.current),Ja(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[ua]=s,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<Uo.length;r++)nt(Uo[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":$p(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":Zp(i,s),nt("invalid",i)}$d(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",""+a]):ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&nt("scroll",i)}switch(n){case"input":Wa(i),Kp(i,s,!0);break;case"textarea":Wa(i),Qp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=h_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ei]=e,t[ua]=i,Oy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kd(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Uo.length;r++)nt(Uo[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":$p(t,i),r=Wd(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),nt("invalid",t);break;case"textarea":Zp(t,i),r=Yd(t,i),nt("invalid",t);break;default:r=i}$d(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?g_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&p_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(t,l):typeof l=="number"&&ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nt("scroll",t):l!=null&&lh(t,s,l,o))}switch(n){case"input":Wa(t),Kp(t,i,!1);break;case"textarea":Wa(t),Qp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Os(t,!!i.multiple,s,!1):i.defaultValue!=null&&Os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ac)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)By(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=Ur(fa.current),Ur(ri.current),Ja(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Qa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return zt(e),null;case 13:if(rt(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&pn!==null&&e.mode&1&&!(e.flags&128))iy(),qs(),e.flags|=98560,s=!1;else if(s=Ja(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[ei]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Gn!==null&&(Lf(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?At===0&&(At=3):Wh())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ks(),Ef(t,e),t===null&&la(e.stateNode.containerInfo),zt(e),null;case 10:return Ch(e.type._context),zt(e),null;case 17:return an(e.type)&&lc(),zt(e),null;case 19:if(rt(ft),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Eo(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mc(t),o!==null){for(e.flags|=128,Eo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Qs&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304)}else{if(!i)if(t=mc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return zt(e),null}else 2*xt()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ft.current,et(ft,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Gh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function LT(t,e){switch(Eh(e),e.tag){case 1:return an(e.type)&&lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),rt(on),rt(Yt),Dh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lh(e),null;case 13:if(rt(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(ft),null;case 4:return Ks(),null;case 10:return Ch(e.type._context),null;case 22:case 23:return Gh(),null;case 24:return null;default:return null}}var nl=!1,jt=!1,DT=typeof WeakSet=="function"?WeakSet:Set,de=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Tf(t,e,n){try{n()}catch(i){vt(t,e,i)}}var zm=!1;function NT(t,e){if(af=rc,t=W_(),Sh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:t,selectionRange:n},rc=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:zn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(S){vt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return _=zm,zm=!1,_}function Xo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tf(e,n,s)}r=r.next}while(r!==i)}}function qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vy(t){var e=t.alternate;e!==null&&(t.alternate=null,Vy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[ua],delete e[df],delete e[mT],delete e[gT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zy(t){return t.tag===5||t.tag===3||t.tag===4}function Hm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ac));else if(i!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}var It=null,Hn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)Hy(t,e,n),n=n.sibling}function Hy(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Vc,n)}catch{}switch(n.tag){case 5:jt||Cs(n,e);case 6:var i=It,r=Hn;It=null,Ni(t,e,n),It=i,Hn=r,It!==null&&(Hn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Hn?(t=It,n=n.stateNode,t.nodeType===8?Uu(t.parentNode,n):t.nodeType===1&&Uu(t,n),sa(t)):Uu(It,n.stateNode));break;case 4:i=It,r=Hn,It=n.stateNode.containerInfo,Hn=!0,Ni(t,e,n),It=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tf(n,e,o),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!jt&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Ni(t,e,n),jt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function Gm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DT),e.forEach(function(i){var r=HT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Hn=!1;break e;case 3:It=a.stateNode.containerInfo,Hn=!0;break e;case 4:It=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(It===null)throw Error(J(160));Hy(s,o,r),It=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gy(e,t),e=e.sibling}function Gy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Kn(t),i&4){try{Xo(3,t,t.return),qc(3,t)}catch(y){vt(t,t.return,y)}try{Xo(5,t,t.return)}catch(y){vt(t,t.return,y)}}break;case 1:Fn(e,t),Kn(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(Fn(e,t),Kn(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{ta(r,"")}catch(y){vt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&d_(r,s),Kd(a,o);var c=Kd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?g_(r,d):u==="dangerouslySetInnerHTML"?p_(r,d):u==="children"?ta(r,d):lh(r,u,d,c)}switch(a){case"input":jd(r,s);break;case"textarea":f_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Os(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Os(r,!!s.multiple,s.defaultValue,!0):Os(r,!!s.multiple,s.multiple?[]:"",!1))}r[ua]=s}catch(y){vt(t,t.return,y)}}break;case 6:if(Fn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){vt(t,t.return,y)}}break;case 3:if(Fn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(y){vt(t,t.return,y)}break;case 4:Fn(e,t),Kn(t);break;case 13:Fn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(zh=xt())),i&4&&Gm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(c=jt)||u,Fn(e,t),jt=c):Fn(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(de=t,u=t.child;u!==null;){for(d=de=u;de!==null;){switch(f=de,p=f.child,f.tag){case 0:case 11:case 14:case 15:Xo(4,f,f.return);break;case 1:Cs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){vt(i,n,y)}}break;case 5:Cs(f,f.return);break;case 22:if(f.memoizedState!==null){jm(d);continue}}p!==null?(p.return=f,de=p):jm(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=m_("display",o))}catch(y){vt(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){vt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fn(e,t),Kn(t),i&4&&Gm(t);break;case 21:break;default:Fn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zy(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ta(r,""),i.flags&=-33);var s=Hm(t);Cf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Hm(t);Af(t,a,o);break;default:throw Error(J(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function IT(t,e,n){de=t,Wy(t)}function Wy(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||nl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=nl;var c=jt;if(nl=o,(jt=l)&&!c)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Xm(r):l!==null?(l.return=o,de=l):Xm(r);for(;s!==null;)de=s,Wy(s),s=s.sibling;de=r,nl=a,jt=c}Wm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):Wm(t)}}function Wm(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||qc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&sa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}jt||e.flags&512&&wf(e)}catch(f){vt(e,e.return,f)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function jm(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Xm(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qc(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{wf(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{wf(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var UT=Math.ceil,_c=Li.ReactCurrentDispatcher,Bh=Li.ReactCurrentOwner,Dn=Li.ReactCurrentBatchConfig,We=0,Nt=null,Et=null,Ft=0,hn=0,Rs=fr(0),At=0,ga=null,jr=0,$c=0,Vh=0,Yo=null,tn=null,zh=0,Qs=1/0,vi=null,yc=!1,Rf=null,er=null,il=!1,Yi=null,xc=0,qo=0,Pf=null,jl=-1,Xl=0;function Kt(){return We&6?xt():jl!==-1?jl:jl=xt()}function tr(t){return t.mode&1?We&2&&Ft!==0?Ft&-Ft:_T.transition!==null?(Xl===0&&(Xl=R_()),Xl):(t=$e,t!==0||(t=window.event,t=t===void 0?16:U_(t.type)),t):1}function Xn(t,e,n,i){if(50<qo)throw qo=0,Pf=null,Error(J(185));Ea(t,n,i),(!(We&2)||t!==Nt)&&(t===Nt&&(!(We&2)&&($c|=n),At===4&&Wi(t,Ft)),ln(t,i),n===1&&We===0&&!(e.mode&1)&&(Qs=xt()+500,jc&&hr()))}function ln(t,e){var n=t.callbackNode;_E(t,e);var i=ic(t,t===Nt?Ft:0);if(i===0)n!==null&&tm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&tm(n),e===1)t.tag===0?vT(Ym.bind(null,t)):ey(Ym.bind(null,t)),hT(function(){!(We&6)&&hr()}),n=null;else{switch(P_(i)){case 1:n=hh;break;case 4:n=A_;break;case 16:n=nc;break;case 536870912:n=C_;break;default:n=nc}n=Qy(n,jy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jy(t,e){if(jl=-1,Xl=0,We&6)throw Error(J(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var i=ic(t,t===Nt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Sc(t,i);else{e=i;var r=We;We|=2;var s=Yy();(Nt!==t||Ft!==e)&&(vi=null,Qs=xt()+500,Br(t,e));do try{kT();break}catch(a){Xy(t,a)}while(!0);Ah(),_c.current=s,We=r,Et!==null?e=0:(Nt=null,Ft=0,e=At)}if(e!==0){if(e===2&&(r=tf(t),r!==0&&(i=r,e=bf(t,r))),e===1)throw n=ga,Br(t,0),Wi(t,i),ln(t,xt()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!FT(r)&&(e=Sc(t,i),e===2&&(s=tf(t),s!==0&&(i=s,e=bf(t,s))),e===1))throw n=ga,Br(t,0),Wi(t,i),ln(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:Ar(t,tn,vi);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=zh+500-xt(),10<e)){if(ic(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uf(Ar.bind(null,t,tn,vi),e);break}Ar(t,tn,vi);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*UT(i/1960))-i,10<i){t.timeoutHandle=uf(Ar.bind(null,t,tn,vi),i);break}Ar(t,tn,vi);break;case 5:Ar(t,tn,vi);break;default:throw Error(J(329))}}}return ln(t,xt()),t.callbackNode===n?jy.bind(null,t):null}function bf(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Sc(t,e),t!==2&&(e=tn,tn=n,e!==null&&Lf(e)),t}function Lf(t){tn===null?tn=t:tn.push.apply(tn,t)}function FT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~Vh,e&=~$c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function Ym(t){if(We&6)throw Error(J(327));Hs();var e=ic(t,0);if(!(e&1))return ln(t,xt()),null;var n=Sc(t,e);if(t.tag!==0&&n===2){var i=tf(t);i!==0&&(e=i,n=bf(t,i))}if(n===1)throw n=ga,Br(t,0),Wi(t,e),ln(t,xt()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,tn,vi),ln(t,xt()),null}function Hh(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Qs=xt()+500,jc&&hr())}}function Xr(t){Yi!==null&&Yi.tag===0&&!(We&6)&&Hs();var e=We;We|=1;var n=Dn.transition,i=$e;try{if(Dn.transition=null,$e=1,t)return t()}finally{$e=i,Dn.transition=n,We=e,!(We&6)&&hr()}}function Gh(){hn=Rs.current,rt(Rs)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fT(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(Eh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&lc();break;case 3:Ks(),rt(on),rt(Yt),Dh();break;case 5:Lh(i);break;case 4:Ks();break;case 13:rt(ft);break;case 19:rt(ft);break;case 10:Ch(i.type._context);break;case 22:case 23:Gh()}n=n.return}if(Nt=t,Et=t=nr(t.current,null),Ft=hn=e,At=0,ga=null,Vh=$c=jr=0,tn=Yo=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ir=null}return t}function Xy(t,e){do{var n=Et;try{if(Ah(),Hl.current=vc,gc){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gc=!1}if(Wr=0,Dt=wt=ht=null,jo=!1,ha=0,Bh.current=null,n===null||n.return===null){At=1,ga=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Im(o);if(p!==null){p.flags&=-257,Um(p,o,a,s,e),p.mode&1&&Nm(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Nm(s,c,e),Wh();break e}l=Error(J(426))}}else if(lt&&a.mode&1){var m=Im(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Um(m,o,a,s,e),Th(Zs(l,a));break e}}s=l=Zs(l,a),At!==4&&(At=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Py(s,l,e);Cm(s,h);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(er===null||!er.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=by(s,a,e);Cm(s,S);break e}}s=s.return}while(s!==null)}$y(n)}catch(C){e=C,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function Yy(){var t=_c.current;return _c.current=vc,t===null?vc:t}function Wh(){(At===0||At===3||At===2)&&(At=4),Nt===null||!(jr&268435455)&&!($c&268435455)||Wi(Nt,Ft)}function Sc(t,e){var n=We;We|=2;var i=Yy();(Nt!==t||Ft!==e)&&(vi=null,Br(t,e));do try{OT();break}catch(r){Xy(t,r)}while(!0);if(Ah(),We=n,_c.current=i,Et!==null)throw Error(J(261));return Nt=null,Ft=0,At}function OT(){for(;Et!==null;)qy(Et)}function kT(){for(;Et!==null&&!cE();)qy(Et)}function qy(t){var e=Zy(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?$y(t):Et=e,Bh.current=null}function $y(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LT(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Et=null;return}}else if(n=bT(n,e,hn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);At===0&&(At=5)}function Ar(t,e,n){var i=$e,r=Dn.transition;try{Dn.transition=null,$e=1,BT(t,e,n,i)}finally{Dn.transition=r,$e=i}return null}function BT(t,e,n,i){do Hs();while(Yi!==null);if(We&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yE(t,s),t===Nt&&(Et=Nt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||il||(il=!0,Qy(nc,function(){return Hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=$e;$e=1;var a=We;We|=4,Bh.current=null,NT(t,n),Gy(n,t),sT(lf),rc=!!af,lf=af=null,t.current=n,IT(n),uE(),We=a,$e=o,Dn.transition=s}else t.current=n;if(il&&(il=!1,Yi=t,xc=r),s=t.pendingLanes,s===0&&(er=null),hE(n.stateNode),ln(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(yc)throw yc=!1,t=Rf,Rf=null,t;return xc&1&&t.tag!==0&&Hs(),s=t.pendingLanes,s&1?t===Pf?qo++:(qo=0,Pf=t):qo=0,hr(),null}function Hs(){if(Yi!==null){var t=P_(xc),e=Dn.transition,n=$e;try{if(Dn.transition=null,$e=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,xc=0,We&6)throw Error(J(331));var r=We;for(We|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(de=c;de!==null;){var u=de;switch(u.tag){case 0:case 11:case 15:Xo(8,u,s)}var d=u.child;if(d!==null)d.return=u,de=d;else for(;de!==null;){u=de;var f=u.sibling,p=u.return;if(Vy(u),u===c){de=null;break}if(f!==null){f.return=p,de=f;break}de=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,de=h;break e}de=s.return}}var v=t.current;for(de=v;de!==null;){o=de;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,de=g;else e:for(o=v;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qc(9,a)}}catch(C){vt(a,a.return,C)}if(a===o){de=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,de=S;break e}de=a.return}}if(We=r,hr(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Vc,t)}catch{}i=!0}return i}finally{$e=n,Dn.transition=e}}return!1}function qm(t,e,n){e=Zs(n,e),e=Py(t,e,1),t=Ji(t,e,1),e=Kt(),t!==null&&(Ea(t,1,e),ln(t,e))}function vt(t,e,n){if(t.tag===3)qm(t,t,n);else for(;e!==null;){if(e.tag===3){qm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){t=Zs(n,t),t=by(e,t,1),e=Ji(e,t,1),t=Kt(),e!==null&&(Ea(e,1,t),ln(e,t));break}}e=e.return}}function VT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ft&n)===n&&(At===4||At===3&&(Ft&130023424)===Ft&&500>xt()-zh?Br(t,0):Vh|=n),ln(t,e)}function Ky(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=Kt();t=Ai(t,e),t!==null&&(Ea(t,e,n),ln(t,n))}function zT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ky(t,n)}function HT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),Ky(t,n)}var Zy;Zy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,PT(t,e,n);sn=!!(t.flags&131072)}else sn=!1,lt&&e.flags&1048576&&ty(e,dc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wl(t,e),t=e.pendingProps;var r=Ys(e,Yt.current);zs(e,n),r=Ih(null,e,i,t,r,n);var s=Uh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,cc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ph(e),r.updater=Yc,e.stateNode=r,r._reactInternals=e,vf(e,i,t,n),e=xf(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&Mh(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=WT(i),t=zn(i,t),r){case 0:e=yf(null,e,i,t,n);break e;case 1:e=km(null,e,i,t,n);break e;case 11:e=Fm(null,e,i,t,n);break e;case 14:e=Om(null,e,i,zn(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),yf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),km(t,e,i,r,n);case 3:e:{if(Iy(e),t===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ay(t,e),pc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(J(423)),e),e=Bm(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(J(424)),e),e=Bm(t,e,i,n,r);break e}else for(pn=Qi(e.stateNode.containerInfo.firstChild),gn=e,lt=!0,Gn=null,n=sy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),i===r){e=Ci(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return ly(e),t===null&&pf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,cf(i,r)?o=null:s!==null&&cf(i,s)&&(e.flags|=32),Ny(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&pf(e),null;case 13:return Uy(t,e,n);case 4:return bh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=$s(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Fm(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et(fc,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!on.current){e=Ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,zs(e,n),r=In(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),Om(t,e,i,r,n);case 15:return Ly(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Wl(t,e),e.tag=1,an(i)?(t=!0,cc(e)):t=!1,zs(e,n),Ry(e,i,r),vf(e,i,r,n),xf(null,e,i,!0,t,n);case 19:return Fy(t,e,n);case 22:return Dy(t,e,n)}throw Error(J(156,e.tag))};function Qy(t,e){return w_(t,e)}function GT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new GT(t,e,n,i)}function jh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WT(t){if(typeof t=="function")return jh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uh)return 11;if(t===dh)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")jh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _s:return Vr(n.children,r,s,e);case ch:o=8,r|=8;break;case Vd:return t=bn(12,n,e,r|2),t.elementType=Vd,t.lanes=s,t;case zd:return t=bn(13,n,e,r),t.elementType=zd,t.lanes=s,t;case Hd:return t=bn(19,n,e,r),t.elementType=Hd,t.lanes=s,t;case l_:return Kc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case o_:o=10;break e;case a_:o=9;break e;case uh:o=11;break e;case dh:o=14;break e;case zi:o=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function Kc(t,e,n,i){return t=bn(22,t,i,e),t.elementType=l_,t.lanes=n,t.stateNode={isHidden:!1},t}function Gu(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Wu(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tu(0),this.expirationTimes=Tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xh(t,e,n,i,r,s,o,a,l){return t=new jT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ph(s),t}function XT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Jy(t){if(!t)return ar;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(an(n))return J_(t,n,e)}return e}function ex(t,e,n,i,r,s,o,a,l){return t=Xh(n,i,!0,t,r,s,o,a,l),t.context=Jy(null),n=t.current,i=Kt(),r=tr(n),s=Ei(i,r),s.callback=e??null,Ji(n,s,r),t.current.lanes=r,Ea(t,r,i),ln(t,i),t}function Zc(t,e,n,i){var r=e.current,s=Kt(),o=tr(r);return n=Jy(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ji(r,e,o),t!==null&&(Xn(t,r,o,s),zl(t,r,o)),o}function Mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yh(t,e){$m(t,e),(t=t.alternate)&&$m(t,e)}function YT(){return null}var tx=typeof reportError=="function"?reportError:function(t){console.error(t)};function qh(t){this._internalRoot=t}Qc.prototype.render=qh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));Zc(t,e,null,null)};Qc.prototype.unmount=qh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){Zc(null,t,null,null)}),e[wi]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var e=D_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&I_(t)}};function $h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Km(){}function qT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Mc(o);s.call(c)}}var o=ex(e,i,t,0,null,!1,!1,"",Km);return t._reactRootContainer=o,t[wi]=o.current,la(t.nodeType===8?t.parentNode:t),Xr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Mc(l);a.call(c)}}var l=Xh(t,0,!1,null,null,!1,!1,"",Km);return t._reactRootContainer=l,t[wi]=l.current,la(t.nodeType===8?t.parentNode:t),Xr(function(){Zc(e,l,n,i)}),l}function eu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Mc(o);a.call(l)}}Zc(e,o,t,r)}else o=qT(n,e,t,r,i);return Mc(o)}b_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Io(e.pendingLanes);n!==0&&(ph(e,n|1),ln(e,xt()),!(We&6)&&(Qs=xt()+500,hr()))}break;case 13:Xr(function(){var i=Ai(t,1);if(i!==null){var r=Kt();Xn(i,t,1,r)}}),Yh(t,1)}};mh=function(t){if(t.tag===13){var e=Ai(t,134217728);if(e!==null){var n=Kt();Xn(e,t,134217728,n)}Yh(t,134217728)}};L_=function(t){if(t.tag===13){var e=tr(t),n=Ai(t,e);if(n!==null){var i=Kt();Xn(n,t,e,i)}Yh(t,e)}};D_=function(){return $e};N_=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};Qd=function(t,e,n){switch(e){case"input":if(jd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Wc(i);if(!r)throw Error(J(90));u_(i),jd(i,r)}}}break;case"textarea":f_(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};y_=Hh;x_=Xr;var $T={usingClientEntryPoint:!1,Events:[wa,Ms,Wc,v_,__,Hh]},To={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KT={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=E_(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||YT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Vc=rl.inject(KT),ii=rl}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$T;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$h(e))throw Error(J(200));return XT(t,e,null,n)};Sn.createRoot=function(t,e){if(!$h(t))throw Error(J(299));var n=!1,i="",r=tx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xh(t,1,!1,null,null,n,!1,i,r),t[wi]=e.current,la(t.nodeType===8?t.parentNode:t),new qh(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=E_(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Xr(t)};Sn.hydrate=function(t,e,n){if(!Jc(e))throw Error(J(200));return eu(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!$h(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=tx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ex(e,null,t,1,n??null,r,!1,s,o),t[wi]=e.current,la(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Qc(e)};Sn.render=function(t,e,n){if(!Jc(e))throw Error(J(200));return eu(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Jc(t))throw Error(J(40));return t._reactRootContainer?(Xr(function(){eu(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1};Sn.unstable_batchedUpdates=Hh;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Jc(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return eu(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function nx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nx)}catch(t){console.error(t)}}nx(),n_.exports=Sn;var ZT=n_.exports,Zm=ZT;kd.createRoot=Zm.createRoot,kd.hydrateRoot=Zm.hydrateRoot;const Kh=K.createContext({});function Ca(t){const e=K.useRef(null);return e.current===null&&(e.current=t()),e.current}const tu=K.createContext(null),Ra=K.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class QT extends K.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function JT({children:t,isPresent:e}){const n=K.useId(),i=K.useRef(null),r=K.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=K.useContext(Ra);return K.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),T.jsx(QT,{isPresent:e,childRef:i,sizeRef:r,children:K.cloneElement(t,{ref:i})})}const e1=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=Ca(t1),l=K.useId(),c=K.useCallback(d=>{a.set(d,!0);for(const f of a.values())if(!f)return;i&&i()},[a,i]),u=K.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:d=>(a.set(d,!1),()=>a.delete(d))}),s?[Math.random(),c]:[n,c]);return K.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),K.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=T.jsx(JT,{isPresent:n,children:t})),T.jsx(tu.Provider,{value:u,children:t})};function t1(){return new Map}function ix(t=!0){const e=K.useContext(tu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=K.useId();K.useEffect(()=>{t&&r(s)},[t]);const o=K.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const sl=t=>t.key||"";function Qm(t){const e=[];return K.Children.forEach(t,n=>{K.isValidElement(n)&&e.push(n)}),e}const Zh=typeof window<"u",nu=Zh?K.useLayoutEffect:K.useEffect,Qh=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=ix(o),c=K.useMemo(()=>Qm(t),[t]),u=o&&!a?[]:c.map(sl),d=K.useRef(!0),f=K.useRef(c),p=Ca(()=>new Map),[_,y]=K.useState(c),[m,h]=K.useState(c);nu(()=>{d.current=!1,f.current=c;for(let S=0;S<m.length;S++){const C=sl(m[S]);u.includes(C)?p.delete(C):p.get(C)!==!0&&p.set(C,!1)}},[m,u.length,u.join("-")]);const v=[];if(c!==_){let S=[...c];for(let C=0;C<m.length;C++){const w=m[C],R=sl(w);u.includes(R)||(S.splice(C,0,w),v.push(w))}s==="wait"&&v.length&&(S=v),h(Qm(S)),y(c);return}const{forceRender:g}=K.useContext(Kh);return T.jsx(T.Fragment,{children:m.map(S=>{const C=sl(S),w=o&&!a?!1:c===m||u.includes(C),R=()=>{if(p.has(C))p.set(C,!0);else return;let b=!0;p.forEach(E=>{E||(b=!1)}),b&&(g==null||g(),h(f.current),o&&(l==null||l()),i&&i())};return T.jsx(e1,{isPresent:w,initial:!d.current||n?void 0:!1,custom:w?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:w?void 0:R,children:S},C)})})},vn=t=>t;let rx=vn;function Jh(t){let e;return()=>(e===void 0&&(e=t()),e)}const Yr=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},si=t=>t*1e3,oi=t=>t/1e3,n1={useManualTiming:!1};function i1(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,d=!1)=>{const p=d&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const ol=["read","resolveKeyframes","update","preRender","render","postRender"],r1=40;function sx(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=ol.reduce((h,v)=>(h[v]=i1(s),h),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:f}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,r1),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),f.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},_=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:ol.reduce((h,v)=>{const g=o[v];return h[v]=(S,C=!1,w=!1)=>(n||_(),g.schedule(S,C,w)),h},{}),cancel:h=>{for(let v=0;v<ol.length;v++)o[ol[v]].cancel(h)},state:r,steps:o}}const{schedule:Qe,cancel:Ri,state:Lt,steps:ju}=sx(typeof requestAnimationFrame<"u"?requestAnimationFrame:vn,!0),ox=K.createContext({strict:!1}),Jm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Js={};for(const t in Jm)Js[t]={isEnabled:e=>Jm[t].some(n=>!!e[n])};function s1(t){for(const e in t)Js[e]={...Js[e],...t[e]}}const o1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ec(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||o1.has(t)}let ax=t=>!Ec(t);function a1(t){t&&(ax=e=>e.startsWith("on")?!Ec(e):t(e))}try{a1(require("@emotion/is-prop-valid").default)}catch{}function l1(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(ax(r)||n===!0&&Ec(r)||!e&&!Ec(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function c1(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const iu=K.createContext({});function va(t){return typeof t=="string"||Array.isArray(t)}function ru(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const ep=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],tp=["initial",...ep];function su(t){return ru(t.animate)||tp.some(e=>va(t[e]))}function lx(t){return!!(su(t)||t.variants)}function u1(t,e){if(su(t)){const{initial:n,animate:i}=t;return{initial:n===!1||va(n)?n:void 0,animate:va(i)?i:void 0}}return t.inherit!==!1?e:{}}function d1(t){const{initial:e,animate:n}=u1(t,K.useContext(iu));return K.useMemo(()=>({initial:e,animate:n}),[eg(e),eg(n)])}function eg(t){return Array.isArray(t)?t.join(" "):t}const f1=Symbol.for("motionComponentSymbol");function Ps(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function h1(t,e,n){return K.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Ps(n)&&(n.current=i))},[e])}const np=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),p1="framerAppearId",cx="data-"+np(p1),{schedule:ip}=sx(queueMicrotask,!1),ux=K.createContext({});function m1(t,e,n,i,r){var s,o;const{visualElement:a}=K.useContext(iu),l=K.useContext(ox),c=K.useContext(tu),u=K.useContext(Ra).reducedMotion,d=K.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const f=d.current,p=K.useContext(ux);f&&!f.projection&&r&&(f.type==="html"||f.type==="svg")&&g1(d.current,n,r,p);const _=K.useRef(!1);K.useInsertionEffect(()=>{f&&_.current&&f.update(n,c)});const y=n[cx],m=K.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return nu(()=>{f&&(_.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),ip.render(f.render),m.current&&f.animationState&&f.animationState.animateChanges())}),K.useEffect(()=>{f&&(!m.current&&f.animationState&&f.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,y)}),m.current=!1))}),f}function g1(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:dx(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Ps(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function dx(t){if(t)return t.options.allowProjection!==!1?t.projection:dx(t.parent)}function v1({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&s1(t);function a(c,u){let d;const f={...K.useContext(Ra),...c,layoutId:_1(c)},{isStatic:p}=f,_=d1(c),y=i(c,p);if(!p&&Zh){y1();const m=x1(f);d=m.MeasureLayout,_.visualElement=m1(r,y,f,e,m.ProjectionNode)}return T.jsxs(iu.Provider,{value:_,children:[d&&_.visualElement?T.jsx(d,{visualElement:_.visualElement,...f}):null,n(r,c,h1(y,_.visualElement,u),y,p,_.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=K.forwardRef(a);return l[f1]=r,l}function _1({layoutId:t}){const e=K.useContext(Kh).id;return e&&t!==void 0?e+"-"+t:t}function y1(t,e){K.useContext(ox).strict}function x1(t){const{drag:e,layout:n}=Js;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const S1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function rp(t){return typeof t!="string"||t.includes("-")?!1:!!(S1.indexOf(t)>-1||/[A-Z]/u.test(t))}function tg(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function sp(t,e,n,i){if(typeof e=="function"){const[r,s]=tg(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=tg(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Df=t=>Array.isArray(t),M1=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),E1=t=>Df(t)?t[t.length-1]||0:t,_t=t=>!!(t&&t.getVelocity);function ql(t){const e=_t(t)?t.get():t;return M1(e)?e.toValue():e}function T1({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:w1(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const fx=t=>(e,n)=>{const i=K.useContext(iu),r=K.useContext(tu),s=()=>T1(t,e,i,r);return n?s():Ca(s)};function w1(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=ql(s[f]);let{initial:o,animate:a}=t;const l=su(t),c=lx(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!ru(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const _=sp(t,f[p]);if(_){const{transitionEnd:y,transition:m,...h}=_;for(const v in h){let g=h[v];if(Array.isArray(g)){const S=u?g.length-1:0;g=g[S]}g!==null&&(r[v]=g)}for(const v in y)r[v]=y[v]}}}return r}const uo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Zr=new Set(uo),hx=t=>e=>typeof e=="string"&&e.startsWith(t),px=hx("--"),A1=hx("var(--"),op=t=>A1(t)?C1.test(t.split("/*")[0].trim()):!1,C1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,mx=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Pi=(t,e,n)=>n>e?e:n<t?t:n,fo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},_a={...fo,transform:t=>Pi(0,1,t)},al={...fo,default:1},Pa=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Vi=Pa("deg"),ai=Pa("%"),Se=Pa("px"),R1=Pa("vh"),P1=Pa("vw"),ng={...ai,parse:t=>ai.parse(t)/100,transform:t=>ai.transform(t*100)},b1={borderWidth:Se,borderTopWidth:Se,borderRightWidth:Se,borderBottomWidth:Se,borderLeftWidth:Se,borderRadius:Se,radius:Se,borderTopLeftRadius:Se,borderTopRightRadius:Se,borderBottomRightRadius:Se,borderBottomLeftRadius:Se,width:Se,maxWidth:Se,height:Se,maxHeight:Se,top:Se,right:Se,bottom:Se,left:Se,padding:Se,paddingTop:Se,paddingRight:Se,paddingBottom:Se,paddingLeft:Se,margin:Se,marginTop:Se,marginRight:Se,marginBottom:Se,marginLeft:Se,backgroundPositionX:Se,backgroundPositionY:Se},L1={rotate:Vi,rotateX:Vi,rotateY:Vi,rotateZ:Vi,scale:al,scaleX:al,scaleY:al,scaleZ:al,skew:Vi,skewX:Vi,skewY:Vi,distance:Se,translateX:Se,translateY:Se,translateZ:Se,x:Se,y:Se,z:Se,perspective:Se,transformPerspective:Se,opacity:_a,originX:ng,originY:ng,originZ:Se},ig={...fo,transform:Math.round},ap={...b1,...L1,zIndex:ig,size:Se,fillOpacity:_a,strokeOpacity:_a,numOctaves:ig},D1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},N1=uo.length;function I1(t,e,n){let i="",r=!0;for(let s=0;s<N1;s++){const o=uo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=mx(a,ap[o]);if(!l){r=!1;const u=D1[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function lp(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Zr.has(l)){o=!0;continue}else if(px(l)){r[l]=c;continue}else{const u=mx(c,ap[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=I1(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const U1={offset:"stroke-dashoffset",array:"stroke-dasharray"},F1={offset:"strokeDashoffset",array:"strokeDasharray"};function O1(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?U1:F1;t[s.offset]=Se.transform(-i);const o=Se.transform(e),a=Se.transform(n);t[s.array]=`${o} ${a}`}function rg(t,e,n){return typeof t=="string"?t:Se.transform(e+n*t)}function k1(t,e,n){const i=rg(e,t.x,t.width),r=rg(n,t.y,t.height);return`${i} ${r}`}function cp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d){if(lp(t,c,d),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:p,dimensions:_}=t;f.transform&&(_&&(p.transform=f.transform),delete f.transform),_&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=k1(_,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),o!==void 0&&O1(f,o,a,l,!1)}const up=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),gx=()=>({...up(),attrs:{}}),dp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function vx(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const _x=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function yx(t,e,n,i){vx(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(_x.has(r)?r:np(r),e.attrs[r])}const Tc={};function B1(t){Object.assign(Tc,t)}function xx(t,{layout:e,layoutId:n}){return Zr.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Tc[t]||t==="opacity")}function fp(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(_t(r[o])||e.style&&_t(e.style[o])||xx(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function Sx(t,e,n){const i=fp(t,e,n);for(const r in t)if(_t(t[r])||_t(e[r])){const s=uo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function V1(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const sg=["x","y","width","height","cx","cy","r"],z1={useVisualState:fx({scrapeMotionValuesFromProps:Sx,createRenderState:gx,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(Zr.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<sg.length;a++){const l=sg[a];t[l]!==e[l]&&(o=!0)}o&&Qe.read(()=>{V1(n,i),Qe.render(()=>{cp(i,r,dp(n.tagName),t.transformTemplate),yx(n,i)})})}})},H1={useVisualState:fx({scrapeMotionValuesFromProps:fp,createRenderState:up})};function Mx(t,e,n){for(const i in e)!_t(e[i])&&!xx(i,n)&&(t[i]=e[i])}function G1({transformTemplate:t},e){return K.useMemo(()=>{const n=up();return lp(n,e,t),Object.assign({},n.vars,n.style)},[e])}function W1(t,e){const n=t.style||{},i={};return Mx(i,n,t),Object.assign(i,G1(t,e)),i}function j1(t,e){const n={},i=W1(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function X1(t,e,n,i){const r=K.useMemo(()=>{const s=gx();return cp(s,e,dp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Mx(s,t.style,t),r.style={...s,...r.style}}return r}function Y1(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(rp(n)?X1:j1)(i,s,o,n),c=l1(i,typeof n=="string",t),u=n!==K.Fragment?{...c,...l,ref:r}:{},{children:d}=i,f=K.useMemo(()=>_t(d)?d.get():d,[d]);return K.createElement(n,{...u,children:f})}}function q1(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...rp(i)?z1:H1,preloadedFeatures:t,useRender:Y1(r),createVisualElement:e,Component:i};return v1(o)}}function Ex(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function ou(t,e,n){const i=t.getProps();return sp(i,e,n!==void 0?n:i.custom,t)}const $1=Jh(()=>window.ScrollTimeline!==void 0);class K1{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if($1()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Tx extends K1{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function hp(t,e){return t?t[e]||t.default||t:void 0}const wc=2e4;function pp(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<wc;)e+=n,i=t.next(e);return e>=wc?1/0:e}function Z1(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(pp(i),wc);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:oi(r)}}function au(t){return typeof t=="function"}function og(t,e){t.timeline=e,t.onfinish=null}const mp=t=>Array.isArray(t)&&typeof t[0]=="number",Q1={linearEasing:void 0};function J1(t,e){const n=Jh(t);return()=>{var i;return(i=Q1[e])!==null&&i!==void 0?i:n()}}const Ac=J1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),wx=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(Yr(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function Ax(t){return!!(typeof t=="function"&&Ac()||!t||typeof t=="string"&&(t in Nf||Ac())||mp(t)||Array.isArray(t)&&t.every(Ax))}const Fo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Nf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fo([0,.65,.55,1]),circOut:Fo([.55,0,1,.45]),backIn:Fo([.31,.01,.66,-.59]),backOut:Fo([.33,1.53,.69,.99])};function Cx(t,e){if(t)return typeof t=="function"&&Ac()?wx(t,e):mp(t)?Fo(t):Array.isArray(t)?t.map(n=>Cx(n,e)||Nf.easeOut):Nf[t]}const Vn={x:!1,y:!1};function Rx(){return Vn.x||Vn.y}function gp(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=n==null?void 0:n[t])!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function Px(t,e){const n=gp(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function ag(t){return e=>{e.pointerType==="touch"||Rx()||t(e)}}function ew(t,e,n={}){const[i,r,s]=Px(t,n),o=ag(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=ag(d=>{c(d),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const bx=(t,e)=>e?t===e?!0:bx(t,e.parentElement):!1,vp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,tw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function nw(t){return tw.has(t.tagName)||t.tabIndex!==-1}const Oo=new WeakSet;function lg(t){return e=>{e.key==="Enter"&&t(e)}}function Xu(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const iw=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=lg(()=>{if(Oo.has(n))return;Xu(n,"down");const r=lg(()=>{Xu(n,"up")}),s=()=>Xu(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function cg(t){return vp(t)&&!Rx()}function rw(t,e,n={}){const[i,r,s]=Px(t,n),o=a=>{const l=a.currentTarget;if(!cg(a)||Oo.has(l))return;Oo.add(l);const c=e(a),u=(p,_)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),!(!cg(p)||!Oo.has(l))&&(Oo.delete(l),typeof c=="function"&&c(p,{success:_}))},d=p=>{u(p,n.useGlobalTarget||bx(l,p.target))},f=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{!nw(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>iw(c,r),r)}),s}function sw(t){return t==="x"||t==="y"?Vn[t]?null:(Vn[t]=!0,()=>{Vn[t]=!1}):Vn.x||Vn.y?null:(Vn.x=Vn.y=!0,()=>{Vn.x=Vn.y=!1})}const Lx=new Set(["width","height","top","left","right","bottom",...uo]);let $l;function ow(){$l=void 0}const li={now:()=>($l===void 0&&li.set(Lt.isProcessing||n1.useManualTiming?Lt.timestamp:performance.now()),$l),set:t=>{$l=t,queueMicrotask(ow)}};function _p(t,e){t.indexOf(e)===-1&&t.push(e)}function lu(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class yp{constructor(){this.subscriptions=[]}add(e){return _p(this.subscriptions,e),()=>lu(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Dx(t,e){return e?t*(1e3/e):0}const ug=30,aw=t=>!isNaN(parseFloat(t)),$o={current:void 0};class lw{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=li.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=li.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=aw(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new yp);const i=this.events[e].add(n);return e==="change"?()=>{i(),Qe.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return $o.current&&$o.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=li.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>ug)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ug);return Dx(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function eo(t,e){return new lw(t,e)}function cw(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,eo(n))}function uw(t,e){const n=ou(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=E1(s[o]);cw(t,o,a)}}function dw(t){return!!(_t(t)&&t.add)}function If(t,e){const n=t.getValue("willChange");if(dw(n))return n.add(e)}function Nx(t){return t.props[cx]}const Ix=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,fw=1e-7,hw=12;function pw(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=Ix(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>fw&&++a<hw);return o}function ba(t,e,n,i){if(t===e&&n===i)return vn;const r=s=>pw(s,0,1,t,n);return s=>s===0||s===1?s:Ix(r(s),e,i)}const Ux=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Fx=t=>e=>1-t(1-e),Ox=ba(.33,1.53,.69,.99),xp=Fx(Ox),kx=Ux(xp),Bx=t=>(t*=2)<1?.5*xp(t):.5*(2-Math.pow(2,-10*(t-1))),Sp=t=>1-Math.sin(Math.acos(t)),Vx=Fx(Sp),zx=Ux(Sp),Hx=t=>/^0[^.\s]+$/u.test(t);function mw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Hx(t):!0}const Ko=t=>Math.round(t*1e5)/1e5,Mp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function gw(t){return t==null}const vw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ep=(t,e)=>n=>!!(typeof n=="string"&&vw.test(n)&&n.startsWith(t)||e&&!gw(n)&&Object.prototype.hasOwnProperty.call(n,e)),Gx=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Mp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},_w=t=>Pi(0,255,t),Yu={...fo,transform:t=>Math.round(_w(t))},Fr={test:Ep("rgb","red"),parse:Gx("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Yu.transform(t)+", "+Yu.transform(e)+", "+Yu.transform(n)+", "+Ko(_a.transform(i))+")"};function yw(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Uf={test:Ep("#"),parse:yw,transform:Fr.transform},bs={test:Ep("hsl","hue"),parse:Gx("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+ai.transform(Ko(e))+", "+ai.transform(Ko(n))+", "+Ko(_a.transform(i))+")"},Wt={test:t=>Fr.test(t)||Uf.test(t)||bs.test(t),parse:t=>Fr.test(t)?Fr.parse(t):bs.test(t)?bs.parse(t):Uf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Fr.transform(t):bs.transform(t)},xw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Sw(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Mp))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(xw))===null||n===void 0?void 0:n.length)||0)>0}const Wx="number",jx="color",Mw="var",Ew="var(",dg="${}",Tw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ya(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(Tw,l=>(Wt.test(l)?(i.color.push(s),r.push(jx),n.push(Wt.parse(l))):l.startsWith(Ew)?(i.var.push(s),r.push(Mw),n.push(l)):(i.number.push(s),r.push(Wx),n.push(parseFloat(l))),++s,dg)).split(dg);return{values:n,split:a,indexes:i,types:r}}function Xx(t){return ya(t).values}function Yx(t){const{split:e,types:n}=ya(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===Wx?s+=Ko(r[o]):a===jx?s+=Wt.transform(r[o]):s+=r[o]}return s}}const ww=t=>typeof t=="number"?0:t;function Aw(t){const e=Xx(t);return Yx(t)(e.map(ww))}const lr={test:Sw,parse:Xx,createTransformer:Yx,getAnimatableNone:Aw},Cw=new Set(["brightness","contrast","saturate","opacity"]);function Rw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Mp)||[];if(!i)return t;const r=n.replace(i,"");let s=Cw.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Pw=/\b([a-z-]*)\(.*?\)/gu,Ff={...lr,getAnimatableNone:t=>{const e=t.match(Pw);return e?e.map(Rw).join(" "):t}},bw={...ap,color:Wt,backgroundColor:Wt,outlineColor:Wt,fill:Wt,stroke:Wt,borderColor:Wt,borderTopColor:Wt,borderRightColor:Wt,borderBottomColor:Wt,borderLeftColor:Wt,filter:Ff,WebkitFilter:Ff},Tp=t=>bw[t];function qx(t,e){let n=Tp(t);return n!==Ff&&(n=lr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Lw=new Set(["auto","none","0"]);function Dw(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!Lw.has(s)&&ya(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=qx(n,r)}const fg=t=>t===fo||t===Se,hg=(t,e)=>parseFloat(t.split(", ")[e]),pg=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return hg(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?hg(s[1],t):0}},Nw=new Set(["x","y","z"]),Iw=uo.filter(t=>!Nw.has(t));function Uw(t){const e=[];return Iw.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const to={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:pg(4,13),y:pg(5,14)};to.translateX=to.x;to.translateY=to.y;const zr=new Set;let Of=!1,kf=!1;function $x(){if(kf){const t=Array.from(zr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=Uw(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}kf=!1,Of=!1,zr.forEach(t=>t.complete()),zr.clear()}function Kx(){zr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(kf=!0)})}function Fw(){Kx(),$x()}class wp{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(zr.add(this),Of||(Of=!0,Qe.read(Kx),Qe.resolveKeyframes($x))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),zr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,zr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Zx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Ow=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function kw(t){const e=Ow.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function Qx(t,e,n=1){const[i,r]=kw(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return Zx(o)?parseFloat(o):o}return op(r)?Qx(r,e,n+1):r}const Jx=t=>e=>e.test(t),Bw={test:t=>t==="auto",parse:t=>t},eS=[fo,Se,ai,Vi,P1,R1,Bw],mg=t=>eS.find(Jx(t));class tS extends wp{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),op(c))){const u=Qx(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Lx.has(i)||e.length!==2)return;const[r,s]=e,o=mg(r),a=mg(s);if(o!==a)if(fg(o)&&fg(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)mw(e[r])&&i.push(r);i.length&&Dw(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=to[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=to[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const gg=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(lr.test(t)||t==="0")&&!t.startsWith("url("));function Vw(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function zw(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=gg(r,e),a=gg(s,e);return!o||!a?!1:Vw(t)||(n==="spring"||au(n))&&i}const Hw=t=>t!==null;function cu(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(Hw),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const Gw=40;class nS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=li.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Gw?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Fw(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=li.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!zw(e,i,r,s))if(o)this.options.duration=0;else{l&&l(cu(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const ct=(t,e,n)=>t+(e-t)*n;function qu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Ww({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=qu(l,a,t+1/3),s=qu(l,a,t),o=qu(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Cc(t,e){return n=>n>0?e:t}const $u=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},jw=[Uf,Fr,bs],Xw=t=>jw.find(e=>e.test(t));function vg(t){const e=Xw(t);if(!e)return!1;let n=e.parse(t);return e===bs&&(n=Ww(n)),n}const _g=(t,e)=>{const n=vg(t),i=vg(e);if(!n||!i)return Cc(t,e);const r={...n};return s=>(r.red=$u(n.red,i.red,s),r.green=$u(n.green,i.green,s),r.blue=$u(n.blue,i.blue,s),r.alpha=ct(n.alpha,i.alpha,s),Fr.transform(r))},Yw=(t,e)=>n=>e(t(n)),La=(...t)=>t.reduce(Yw),Bf=new Set(["none","hidden"]);function qw(t,e){return Bf.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function $w(t,e){return n=>ct(t,e,n)}function Ap(t){return typeof t=="number"?$w:typeof t=="string"?op(t)?Cc:Wt.test(t)?_g:Qw:Array.isArray(t)?iS:typeof t=="object"?Wt.test(t)?_g:Kw:Cc}function iS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Ap(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function Kw(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Ap(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function Zw(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const Qw=(t,e)=>{const n=lr.createTransformer(e),i=ya(t),r=ya(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Bf.has(t)&&!r.values.length||Bf.has(e)&&!i.values.length?qw(t,e):La(iS(Zw(i,r),r.values),n):Cc(t,e)};function rS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ct(t,e,n):Ap(t)(t,e)}const Jw=5;function sS(t,e,n){const i=Math.max(e-Jw,0);return Dx(n-t(i),e-i)}const gt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ku=.001;function eA({duration:t=gt.duration,bounce:e=gt.bounce,velocity:n=gt.velocity,mass:i=gt.mass}){let r,s,o=1-e;o=Pi(gt.minDamping,gt.maxDamping,o),t=Pi(gt.minDuration,gt.maxDuration,oi(t)),o<1?(r=c=>{const u=c*o,d=u*t,f=u-n,p=Vf(c,o),_=Math.exp(-d);return Ku-f/p*_},s=c=>{const d=c*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,_=Math.exp(-d),y=Vf(Math.pow(c,2),o);return(-r(c)+Ku>0?-1:1)*((f-p)*_)/y}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-Ku+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=nA(r,s,a);if(t=si(t),isNaN(l))return{stiffness:gt.stiffness,damping:gt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const tA=12;function nA(t,e,n){let i=n;for(let r=1;r<tA;r++)i=i-t(i)/e(i);return i}function Vf(t,e){return t*Math.sqrt(1-e*e)}const iA=["duration","bounce"],rA=["stiffness","damping","mass"];function yg(t,e){return e.some(n=>t[n]!==void 0)}function sA(t){let e={velocity:gt.velocity,stiffness:gt.stiffness,damping:gt.damping,mass:gt.mass,isResolvedFromDuration:!1,...t};if(!yg(t,rA)&&yg(t,iA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Pi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:gt.mass,stiffness:r,damping:s}}else{const n=eA(t);e={...e,...n,mass:gt.mass},e.isResolvedFromDuration=!0}return e}function Cp(t=gt.visualDuration,e=gt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=sA({...n,velocity:-oi(n.velocity||0)}),_=f||0,y=c/(2*Math.sqrt(l*u)),m=o-s,h=oi(Math.sqrt(l/u)),v=Math.abs(m)<5;i||(i=v?gt.restSpeed.granular:gt.restSpeed.default),r||(r=v?gt.restDelta.granular:gt.restDelta.default);let g;if(y<1){const C=Vf(h,y);g=w=>{const R=Math.exp(-y*h*w);return o-R*((_+y*h*m)/C*Math.sin(C*w)+m*Math.cos(C*w))}}else if(y===1)g=C=>o-Math.exp(-h*C)*(m+(_+h*m)*C);else{const C=h*Math.sqrt(y*y-1);g=w=>{const R=Math.exp(-y*h*w),b=Math.min(C*w,300);return o-R*((_+y*h*m)*Math.sinh(b)+C*m*Math.cosh(b))/C}}const S={calculatedDuration:p&&d||null,next:C=>{const w=g(C);if(p)a.done=C>=d;else{let R=0;y<1&&(R=C===0?si(_):sS(g,C,w));const b=Math.abs(R)<=i,E=Math.abs(o-w)<=r;a.done=b&&E}return a.value=a.done?o:w,a},toString:()=>{const C=Math.min(pp(S),wc),w=wx(R=>S.next(C*R).value,C,30);return C+"ms "+w}};return S}function xg({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=b=>a!==void 0&&b<a||l!==void 0&&b>l,_=b=>a===void 0?l:l===void 0||Math.abs(a-b)<Math.abs(l-b)?a:l;let y=n*e;const m=d+y,h=o===void 0?m:o(m);h!==m&&(y=h-d);const v=b=>-y*Math.exp(-b/i),g=b=>h+v(b),S=b=>{const E=v(b),x=g(b);f.done=Math.abs(E)<=c,f.value=f.done?h:x};let C,w;const R=b=>{p(f.value)&&(C=b,w=Cp({keyframes:[f.value,_(f.value)],velocity:sS(g,b,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return R(0),{calculatedDuration:null,next:b=>{let E=!1;return!w&&C===void 0&&(E=!0,S(b),R(b)),C!==void 0&&b>=C?w.next(b-C):(!E&&S(b),f)}}}const oA=ba(.42,0,1,1),aA=ba(0,0,.58,1),oS=ba(.42,0,.58,1),aS=t=>Array.isArray(t)&&typeof t[0]!="number",lA={linear:vn,easeIn:oA,easeInOut:oS,easeOut:aA,circIn:Sp,circInOut:zx,circOut:Vx,backIn:xp,backInOut:kx,backOut:Ox,anticipate:Bx},Sg=t=>{if(mp(t)){rx(t.length===4);const[e,n,i,r]=t;return ba(e,n,i,r)}else if(typeof t=="string")return lA[t];return t};function cA(t,e,n){const i=[],r=n||rS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||vn:e;a=La(l,a)}i.push(a)}return i}function lS(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(rx(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=cA(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=Yr(t[d],t[d+1],u);return a[d](f)};return n?u=>c(Pi(t[0],t[s-1],u)):c}function cS(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Yr(0,e,i);t.push(ct(n,1,r))}}function uS(t){const e=[0];return cS(e,t.length-1),e}function uA(t,e){return t.map(n=>n*e)}function dA(t,e){return t.map(()=>e||oS).splice(0,t.length-1)}function Rc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=aS(i)?i.map(Sg):Sg(i),s={done:!1,value:e[0]},o=uA(n&&n.length===e.length?n:uS(e),t),a=lS(o,e,{ease:Array.isArray(r)?r:dA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const fA=t=>{const e=({timestamp:n})=>t(n);return{start:()=>Qe.update(e,!0),stop:()=>Ri(e),now:()=>Lt.isProcessing?Lt.timestamp:li.now()}},hA={decay:xg,inertia:xg,tween:Rc,keyframes:Rc,spring:Cp},pA=t=>t/100;class uu extends nS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||wp,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=au(n)?n:hA[n]||Rc;let l,c;a!==Rc&&typeof e[0]!="number"&&(l=La(pA,rS(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=pp(u));const{calculatedDuration:d}=u,f=d+r,p=f*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:b}=this.options;return{done:!0,value:b[b.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:f,repeat:p,repeatType:_,repeatDelay:y,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-f*(this.speed>=0?1:-1),v=this.speed>=0?h<0:h>u;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let g=this.currentTime,S=s;if(p){const b=Math.min(this.currentTime,u)/d;let E=Math.floor(b),x=b%1;!x&&b>=1&&(x=1),x===1&&E--,E=Math.min(E,p+1),!!(E%2)&&(_==="reverse"?(x=1-x,y&&(x-=y/d)):_==="mirror"&&(S=o)),g=Pi(0,1,x)*d}const C=v?{done:!1,value:l[0]}:S.next(g);a&&(C.value=a(C.value));let{done:w}=C;!v&&c!==null&&(w=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const R=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return R&&r!==void 0&&(C.value=cu(l,this.options,r)),m&&m(C.value),R&&this.finish(),C}get duration(){const{resolved:e}=this;return e?oi(e.calculatedDuration):0}get time(){return oi(this.currentTime)}set time(e){e=si(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=oi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=fA,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}function mA(t){return new uu(t)}const gA=new Set(["opacity","clipPath","filter","transform"]);function vA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=Cx(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const _A=Jh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Pc=10,yA=2e4;function xA(t){return au(t.type)||t.type==="spring"||!Ax(t.ease)}function SA(t,e){const n=new uu({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<yA;)i=n.sample(s),r.push(i.value),s+=Pc;return{times:void 0,keyframes:r,duration:s-Pc,ease:"linear"}}const dS={anticipate:Bx,backInOut:kx,circInOut:zx};function MA(t){return t in dS}class Mg extends nS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new tS(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Ac()&&MA(s)&&(s=dS[s]),xA(this.options)){const{onComplete:d,onUpdate:f,motionValue:p,element:_,...y}=this.options,m=SA(e,y);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const u=vA(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(og(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;a.set(cu(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return oi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return oi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=si(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return vn;const{animation:i}=n;og(i,e)}return vn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:d,element:f,...p}=this.options,_=new uu({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),y=si(this.time);c.setWithVelocity(_.sample(y-Pc).value,_.sample(y).value,Pc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return _A()&&i&&gA.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const EA={type:"spring",stiffness:500,damping:25,restSpeed:10},TA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),wA={type:"keyframes",duration:.8},AA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},CA=(t,{keyframes:e})=>e.length>2?wA:Zr.has(t)?t.startsWith("scale")?TA(e[1]):EA:AA;function RA({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Rp=(t,e,n,i={},r,s)=>o=>{const a=hp(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-si(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};RA(a)||(u={...u,...CA(t,u)}),u.duration&&(u.duration=si(u.duration)),u.repeatDelay&&(u.repeatDelay=si(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const f=cu(u.keyframes,a);if(f!==void 0)return Qe.update(()=>{u.onUpdate(f),u.onComplete()}),new Tx([])}return!s&&Mg.supports(u)?new Mg(u):new uu(u)};function PA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function Pp(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const f=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||u&&PA(u,d))continue;const _={delay:n,...hp(o||{},d)};let y=!1;if(window.MotionHandoffAnimation){const h=Nx(t);if(h){const v=window.MotionHandoffAnimation(h,d,Qe);v!==null&&(_.startTime=v,y=!0)}}If(t,d),f.start(Rp(d,f,p,t.shouldReduceMotion&&Lx.has(d)?{type:!1}:_,t,y));const m=f.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{Qe.update(()=>{a&&uw(t,a)})}),c}function zf(t,e,n={}){var i;const r=ou(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(Pp(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=s;return bA(t,e,u+c,d,f,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function bA(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(LA).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(zf(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function LA(t,e){return t.sortNodePosition(e)}function DA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>zf(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=zf(t,e,n);else{const r=typeof e=="function"?ou(t,e,n.custom):e;i=Promise.all(Pp(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const NA=tp.length;function fS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?fS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<NA;n++){const i=tp[n],r=t.props[i];(va(r)||r===!1)&&(e[i]=r)}return e}const IA=[...ep].reverse(),UA=ep.length;function FA(t){return e=>Promise.all(e.map(({animation:n,options:i})=>DA(t,n,i)))}function OA(t){let e=FA(t),n=Eg(),i=!0;const r=l=>(c,u)=>{var d;const f=ou(t,u,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:p,transitionEnd:_,...y}=f;c={...c,...y,..._}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=fS(t.parent)||{},d=[],f=new Set;let p={},_=1/0;for(let m=0;m<UA;m++){const h=IA[m],v=n[h],g=c[h]!==void 0?c[h]:u[h],S=va(g),C=h===l?v.isActive:null;C===!1&&(_=m);let w=g===u[h]&&g!==c[h]&&S;if(w&&i&&t.manuallyAnimateOnMount&&(w=!1),v.protectedKeys={...p},!v.isActive&&C===null||!g&&!v.prevProp||ru(g)||typeof g=="boolean")continue;const R=kA(v.prevProp,g);let b=R||h===l&&v.isActive&&!w&&S||m>_&&S,E=!1;const x=Array.isArray(g)?g:[g];let I=x.reduce(r(h),{});C===!1&&(I={});const{prevResolvedValues:j={}}=v,N={...j,...I},Y=X=>{b=!0,f.has(X)&&(E=!0,f.delete(X)),v.needsAnimating[X]=!0;const D=t.getValue(X);D&&(D.liveStyle=!1)};for(const X in N){const D=I[X],H=j[X];if(p.hasOwnProperty(X))continue;let G=!1;Df(D)&&Df(H)?G=!Ex(D,H):G=D!==H,G?D!=null?Y(X):f.add(X):D!==void 0&&f.has(X)?Y(X):v.protectedKeys[X]=!0}v.prevProp=g,v.prevResolvedValues=I,v.isActive&&(p={...p,...I}),i&&t.blockInitialAnimation&&(b=!1),b&&(!(w&&R)||E)&&d.push(...x.map(X=>({animation:X,options:{type:h}})))}if(f.size){const m={};f.forEach(h=>{const v=t.getBaseTarget(h),g=t.getValue(h);g&&(g.liveStyle=!0),m[h]=v??null}),d.push({animation:m})}let y=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(d):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(f=>{var p;return(p=f.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const d=o(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Eg(),i=!0}}}function kA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Ex(e,t):!1}function _r(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Eg(){return{animate:_r(!0),whileInView:_r(),whileHover:_r(),whileTap:_r(),whileDrag:_r(),whileFocus:_r(),exit:_r()}}class pr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class BA extends pr{constructor(e){super(e),e.animationState||(e.animationState=OA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();ru(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let VA=0;class zA extends pr{constructor(){super(...arguments),this.id=VA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const HA={animation:{Feature:BA},exit:{Feature:zA}};function xa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Da(t){return{point:{x:t.pageX,y:t.pageY}}}const GA=t=>e=>vp(e)&&t(e,Da(e));function Zo(t,e,n,i){return xa(t,e,GA(n),i)}const Tg=(t,e)=>Math.abs(t-e);function WA(t,e){const n=Tg(t.x,e.x),i=Tg(t.y,e.y);return Math.sqrt(n**2+i**2)}class hS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Qu(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=WA(d.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:_}=d,{timestamp:y}=Lt;this.history.push({..._,timestamp:y});const{onStart:m,onMove:h}=this.handlers;f||(m&&m(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Zu(f,this.transformPagePoint),Qe.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:p,onSessionEnd:_,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Qu(d.type==="pointercancel"?this.lastMoveEventInfo:Zu(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,m),_&&_(d,m)},!vp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Da(e),a=Zu(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Lt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Qu(a,this.history)),this.removeListeners=La(Zo(this.contextWindow,"pointermove",this.handlePointerMove),Zo(this.contextWindow,"pointerup",this.handlePointerUp),Zo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ri(this.updatePoint)}}function Zu(t,e){return e?{point:e(t.point)}:t}function wg(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Qu({point:t},e){return{point:t,delta:wg(t,pS(e)),offset:wg(t,jA(e)),velocity:XA(e,.1)}}function jA(t){return t[0]}function pS(t){return t[t.length-1]}function XA(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=pS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>si(e)));)n--;if(!i)return{x:0,y:0};const s=oi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const mS=1e-4,YA=1-mS,qA=1+mS,gS=.01,$A=0-gS,KA=0+gS;function xn(t){return t.max-t.min}function ZA(t,e,n){return Math.abs(t-e)<=n}function Ag(t,e,n,i=.5){t.origin=i,t.originPoint=ct(e.min,e.max,t.origin),t.scale=xn(n)/xn(e),t.translate=ct(n.min,n.max,t.origin)-t.originPoint,(t.scale>=YA&&t.scale<=qA||isNaN(t.scale))&&(t.scale=1),(t.translate>=$A&&t.translate<=KA||isNaN(t.translate))&&(t.translate=0)}function Qo(t,e,n,i){Ag(t.x,e.x,n.x,i?i.originX:void 0),Ag(t.y,e.y,n.y,i?i.originY:void 0)}function Cg(t,e,n){t.min=n.min+e.min,t.max=t.min+xn(e)}function QA(t,e,n){Cg(t.x,e.x,n.x),Cg(t.y,e.y,n.y)}function Rg(t,e,n){t.min=e.min-n.min,t.max=t.min+xn(e)}function Jo(t,e,n){Rg(t.x,e.x,n.x),Rg(t.y,e.y,n.y)}function JA(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ct(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ct(n,t,i.max):Math.min(t,n)),t}function Pg(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function eC(t,{top:e,left:n,bottom:i,right:r}){return{x:Pg(t.x,n,r),y:Pg(t.y,e,i)}}function bg(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function tC(t,e){return{x:bg(t.x,e.x),y:bg(t.y,e.y)}}function nC(t,e){let n=.5;const i=xn(t),r=xn(e);return r>i?n=Yr(e.min,e.max-i,t.min):i>r&&(n=Yr(t.min,t.max-r,e.min)),Pi(0,1,n)}function iC(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Hf=.35;function rC(t=Hf){return t===!1?t=0:t===!0&&(t=Hf),{x:Lg(t,"left","right"),y:Lg(t,"top","bottom")}}function Lg(t,e,n){return{min:Dg(t,e),max:Dg(t,n)}}function Dg(t,e){return typeof t=="number"?t:t[e]||0}const Ng=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ls=()=>({x:Ng(),y:Ng()}),Ig=()=>({min:0,max:0}),mt=()=>({x:Ig(),y:Ig()});function An(t){return[t("x"),t("y")]}function vS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function sC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function oC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Ju(t){return t===void 0||t===1}function Gf({scale:t,scaleX:e,scaleY:n}){return!Ju(t)||!Ju(e)||!Ju(n)}function Cr(t){return Gf(t)||_S(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function _S(t){return Ug(t.x)||Ug(t.y)}function Ug(t){return t&&t!=="0%"}function bc(t,e,n){const i=t-n,r=e*i;return n+r}function Fg(t,e,n,i,r){return r!==void 0&&(t=bc(t,r,i)),bc(t,n,i)+e}function Wf(t,e=0,n=1,i,r){t.min=Fg(t.min,e,n,i,r),t.max=Fg(t.max,e,n,i,r)}function yS(t,{x:e,y:n}){Wf(t.x,e.translate,e.scale,e.originPoint),Wf(t.y,n.translate,n.scale,n.originPoint)}const Og=.999999999999,kg=1.0000000000001;function aC(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ns(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,yS(t,o)),i&&Cr(s.latestValues)&&Ns(t,s.latestValues))}e.x<kg&&e.x>Og&&(e.x=1),e.y<kg&&e.y>Og&&(e.y=1)}function Ds(t,e){t.min=t.min+e,t.max=t.max+e}function Bg(t,e,n,i,r=.5){const s=ct(t.min,t.max,r);Wf(t,e,n,s,i)}function Ns(t,e){Bg(t.x,e.x,e.scaleX,e.scale,e.originX),Bg(t.y,e.y,e.scaleY,e.scale,e.originY)}function xS(t,e){return vS(oC(t.getBoundingClientRect(),e))}function lC(t,e,n){const i=xS(t,n),{scroll:r}=e;return r&&(Ds(i.x,r.offset.x),Ds(i.y,r.offset.y)),i}const SS=({current:t})=>t?t.ownerDocument.defaultView:null,cC=new WeakMap;class uC{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=mt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Da(u).point)},s=(u,d)=>{const{drag:f,dragPropagation:p,onDragStart:_}=this.getProps();if(f&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=sw(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),An(m=>{let h=this.getAxisMotionValue(m).get()||0;if(ai.test(h)){const{projection:v}=this.visualElement;if(v&&v.layout){const g=v.layout.layoutBox[m];g&&(h=xn(g)*(parseFloat(h)/100))}}this.originPoint[m]=h}),_&&Qe.postRender(()=>_(u,d)),If(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:_,onDrag:y}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:m}=d;if(p&&this.currentDirection===null){this.currentDirection=dC(m),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",d.point,m),this.updateAxis("y",d.point,m),this.visualElement.render(),y&&y(u,d)},a=(u,d)=>this.stop(u,d),l=()=>An(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new hS(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:SS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&Qe.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!ll(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=JA(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ps(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=eC(r.layoutBox,n):this.constraints=!1,this.elastic=rC(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&An(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=iC(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ps(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=lC(i,r.root,this.visualElement.getTransformPagePoint());let o=tC(r.layout.layoutBox,s);if(n){const a=n(sC(o));this.hasMutatedConstraints=!!a,a&&(o=vS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=An(u=>{if(!ll(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,_={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,_)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return If(this.visualElement,e),i.start(Rp(e,i,0,n,this.visualElement,!1))}stopAnimation(){An(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){An(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){An(n=>{const{drag:i}=this.getProps();if(!ll(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-ct(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ps(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};An(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=nC({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),An(o=>{if(!ll(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(ct(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;cC.set(this.visualElement,this);const e=this.visualElement.current,n=Zo(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Ps(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),Qe.read(i);const o=xa(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(An(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Hf,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function ll(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function dC(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class fC extends pr{constructor(e){super(e),this.removeGroupControls=vn,this.removeListeners=vn,this.controls=new uC(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||vn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Vg=t=>(e,n)=>{t&&Qe.postRender(()=>t(e,n))};class hC extends pr{constructor(){super(...arguments),this.removePointerDownListener=vn}onPointerDown(e){this.session=new hS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:SS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Vg(e),onStart:Vg(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&Qe.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Zo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Kl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function zg(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const wo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Se.test(t))t=parseFloat(t);else return t;const n=zg(t,e.target.x),i=zg(t,e.target.y);return`${n}% ${i}%`}},pC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=lr.parse(t);if(r.length>5)return i;const s=lr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=ct(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class mC extends K.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;B1(gC),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Kl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||Qe.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),ip.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function MS(t){const[e,n]=ix(),i=K.useContext(Kh);return T.jsx(mC,{...t,layoutGroup:i,switchLayoutGroup:K.useContext(ux),isPresent:e,safeToRemove:n})}const gC={borderRadius:{...wo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wo,borderTopRightRadius:wo,borderBottomLeftRadius:wo,borderBottomRightRadius:wo,boxShadow:pC};function ES(t,e,n){const i=_t(t)?t:eo(t);return i.start(Rp("",i,e,n)),i.animation}function TS(t){return t instanceof SVGElement&&t.tagName!=="svg"}const vC=(t,e)=>t.depth-e.depth;class _C{constructor(){this.children=[],this.isDirty=!1}add(e){_p(this.children,e),this.isDirty=!0}remove(e){lu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(vC),this.isDirty=!1,this.children.forEach(e)}}function yC(t,e){const n=li.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ri(i),t(s-e))};return Qe.read(i,!0),()=>Ri(i)}const wS=["TopLeft","TopRight","BottomLeft","BottomRight"],xC=wS.length,Hg=t=>typeof t=="string"?parseFloat(t):t,Gg=t=>typeof t=="number"||Se.test(t);function SC(t,e,n,i,r,s){r?(t.opacity=ct(0,n.opacity!==void 0?n.opacity:1,MC(i)),t.opacityExit=ct(e.opacity!==void 0?e.opacity:1,0,EC(i))):s&&(t.opacity=ct(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<xC;o++){const a=`border${wS[o]}Radius`;let l=Wg(e,a),c=Wg(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Gg(l)===Gg(c)?(t[a]=Math.max(ct(Hg(l),Hg(c),i),0),(ai.test(c)||ai.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=ct(e.rotate||0,n.rotate||0,i))}function Wg(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const MC=AS(0,.5,Vx),EC=AS(.5,.95,vn);function AS(t,e,n){return i=>i<t?0:i>e?1:n(Yr(t,e,i))}function jg(t,e){t.min=e.min,t.max=e.max}function Tn(t,e){jg(t.x,e.x),jg(t.y,e.y)}function Xg(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Yg(t,e,n,i,r){return t-=e,t=bc(t,1/n,i),r!==void 0&&(t=bc(t,1/r,i)),t}function TC(t,e=0,n=1,i=.5,r,s=t,o=t){if(ai.test(e)&&(e=parseFloat(e),e=ct(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ct(s.min,s.max,i);t===s&&(a-=e),t.min=Yg(t.min,e,n,a,r),t.max=Yg(t.max,e,n,a,r)}function qg(t,e,[n,i,r],s,o){TC(t,e[n],e[i],e[r],e.scale,s,o)}const wC=["x","scaleX","originX"],AC=["y","scaleY","originY"];function $g(t,e,n,i){qg(t.x,e,wC,n?n.x:void 0,i?i.x:void 0),qg(t.y,e,AC,n?n.y:void 0,i?i.y:void 0)}function Kg(t){return t.translate===0&&t.scale===1}function CS(t){return Kg(t.x)&&Kg(t.y)}function Zg(t,e){return t.min===e.min&&t.max===e.max}function CC(t,e){return Zg(t.x,e.x)&&Zg(t.y,e.y)}function Qg(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function RS(t,e){return Qg(t.x,e.x)&&Qg(t.y,e.y)}function Jg(t){return xn(t.x)/xn(t.y)}function ev(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class RC{constructor(){this.members=[]}add(e){_p(this.members,e),e.scheduleRender()}remove(e){if(lu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function PC(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:p,skewY:_}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),_&&(i+=`skewY(${_}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Rr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ko=typeof window<"u"&&window.MotionDebug!==void 0,ed=["","X","Y","Z"],bC={visibility:"hidden"},tv=1e3;let LC=0;function td(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function PS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Nx(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",Qe,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&PS(i)}function bS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=LC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ko&&(Rr.totalNodes=Rr.resolvedTargetDeltas=Rr.recalculatedProjection=0),this.nodes.forEach(IC),this.nodes.forEach(BC),this.nodes.forEach(VC),this.nodes.forEach(UC),ko&&window.MotionDebug.record(Rr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new _C)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new yp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=TS(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const f=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=yC(f,250),Kl.hasAnimatedSinceResize&&(Kl.hasAnimatedSinceResize=!1,this.nodes.forEach(iv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||jC,{onLayoutAnimationStart:m,onLayoutAnimationComplete:h}=u.getProps(),v=!this.targetLayout||!RS(this.targetLayout,_)||p,g=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||f&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,g);const S={...hp(y,"layout"),onPlay:m,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else f||iv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ri(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(zC),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&PS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(nv);return}this.isUpdating||this.nodes.forEach(OC),this.isUpdating=!1,this.nodes.forEach(kC),this.nodes.forEach(DC),this.nodes.forEach(NC),this.clearAllSnapshots();const a=li.now();Lt.delta=Pi(0,1e3/60,a-Lt.timestamp),Lt.timestamp=a,Lt.isProcessing=!0,ju.update.process(Lt),ju.preRender.process(Lt),ju.render.process(Lt),Lt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ip.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(FC),this.sharedNodes.forEach(HC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=mt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!CS(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Cr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),XC(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return mt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(YC))){const{scroll:u}=this.root;u&&(Ds(l.x,u.offset.x),Ds(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=mt();if(Tn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Tn(l,o),Ds(l.x,d.offset.x),Ds(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=mt();Tn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Ns(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Cr(u.latestValues)&&Ns(l,u.latestValues)}return Cr(this.latestValues)&&Ns(l,this.latestValues),l}removeTransform(o){const a=mt();Tn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Cr(c.latestValues))continue;Gf(c.latestValues)&&c.updateSnapshot();const u=mt(),d=c.measurePageBox();Tn(u,d),$g(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Cr(this.latestValues)&&$g(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Lt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=Lt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=mt(),this.relativeTargetOrigin=mt(),Jo(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=mt(),this.targetWithTransforms=mt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),QA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Tn(this.target,this.layout.layoutBox),yS(this.target,this.targetDelta)):Tn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=mt(),this.relativeTargetOrigin=mt(),Jo(this.relativeTargetOrigin,this.target,p.target),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ko&&Rr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Gf(this.parent.latestValues)||_S(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Lt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Tn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;aC(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=mt());const{target:_}=a;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Xg(this.prevProjectionDelta.x,this.projectionDelta.x),Xg(this.prevProjectionDelta.y,this.projectionDelta.y)),Qo(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!ev(this.projectionDelta.x,this.prevProjectionDelta.x)||!ev(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_)),ko&&Rr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ls(),this.projectionDelta=Ls(),this.projectionDeltaWithTransform=Ls()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Ls();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=mt(),p=l?l.source:void 0,_=this.layout?this.layout.source:void 0,y=p!==_,m=this.getStack(),h=!m||m.members.length<=1,v=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(WC));this.animationProgress=0;let g;this.mixTargetDelta=S=>{const C=S/1e3;rv(d.x,o.x,C),rv(d.y,o.y,C),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Jo(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),GC(this.relativeTarget,this.relativeTargetOrigin,f,C),g&&CC(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=mt()),Tn(g,this.relativeTarget)),y&&(this.animationValues=u,SC(u,c,this.latestValues,C,v,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ri(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Qe.update(()=>{Kl.hasAnimatedSinceResize=!0,this.currentAnimation=ES(0,tv,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(tv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&LS(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||mt();const d=xn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=xn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Tn(a,l),Ns(a,u),Qo(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new RC),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&td("z",o,c,this.animationValues);for(let u=0;u<ed.length;u++)td(`rotate${ed[u]}`,o,c,this.animationValues),td(`skew${ed[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return bC;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=ql(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=ql(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Cr(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=PC(this.projectionDeltaWithTransform,this.treeScale,f),u&&(c.transform=u(f,c.transform));const{x:p,y:_}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${_.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const y in Tc){if(f[y]===void 0)continue;const{correct:m,applyTo:h}=Tc[y],v=c.transform==="none"?f[y]:m(f[y],d);if(h){const g=h.length;for(let S=0;S<g;S++)c[h[S]]=v}else c[y]=v}return this.options.layoutId&&(c.pointerEvents=d===this?ql(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(nv),this.root.sharedNodes.clear()}}}function DC(t){t.updateLayout()}function NC(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?An(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=xn(f);f.min=i[d].min,f.max=f.min+p}):LS(s,n.layoutBox,i)&&An(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=xn(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Ls();Qo(a,i,n.layoutBox);const l=Ls();o?Qo(l,t.applyTransform(r,!0),n.measuredBox):Qo(l,i,n.layoutBox);const c=!CS(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const _=mt();Jo(_,n.layoutBox,f.layoutBox);const y=mt();Jo(y,i,p.layoutBox),RS(_,y)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=_,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function IC(t){ko&&Rr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function UC(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function FC(t){t.clearSnapshot()}function nv(t){t.clearMeasurements()}function OC(t){t.isLayoutDirty=!1}function kC(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function iv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function BC(t){t.resolveTargetDelta()}function VC(t){t.calcProjection()}function zC(t){t.resetSkewAndRotation()}function HC(t){t.removeLeadSnapshot()}function rv(t,e,n){t.translate=ct(e.translate,0,n),t.scale=ct(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function sv(t,e,n,i){t.min=ct(e.min,n.min,i),t.max=ct(e.max,n.max,i)}function GC(t,e,n,i){sv(t.x,e.x,n.x,i),sv(t.y,e.y,n.y,i)}function WC(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const jC={duration:.45,ease:[.4,0,.1,1]},ov=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),av=ov("applewebkit/")&&!ov("chrome/")?Math.round:vn;function lv(t){t.min=av(t.min),t.max=av(t.max)}function XC(t){lv(t.x),lv(t.y)}function LS(t,e,n){return t==="position"||t==="preserve-aspect"&&!ZA(Jg(e),Jg(n),.2)}function YC(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const qC=bS({attachResizeListener:(t,e)=>xa(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),nd={current:void 0},DS=bS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!nd.current){const t=new qC({});t.mount(window),t.setOptions({layoutScroll:!0}),nd.current=t}return nd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),$C={pan:{Feature:hC},drag:{Feature:fC,ProjectionNode:DS,MeasureLayout:MS}};function cv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&Qe.postRender(()=>s(e,Da(e)))}class KC extends pr{mount(){const{current:e}=this.node;e&&(this.unmount=ew(e,n=>(cv(this.node,n,"Start"),i=>cv(this.node,i,"End"))))}unmount(){}}class ZC extends pr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=La(xa(this.node.current,"focus",()=>this.onFocus()),xa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function uv(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&Qe.postRender(()=>s(e,Da(e)))}class QC extends pr{mount(){const{current:e}=this.node;e&&(this.unmount=rw(e,n=>(uv(this.node,n,"Start"),(i,{success:r})=>uv(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const jf=new WeakMap,id=new WeakMap,JC=t=>{const e=jf.get(t.target);e&&e(t)},eR=t=>{t.forEach(JC)};function tR({root:t,...e}){const n=t||document;id.has(n)||id.set(n,{});const i=id.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(eR,{root:t,...e})),i[r]}function nR(t,e,n){const i=tR(e);return jf.set(t,n),i.observe(t),()=>{jf.delete(t),i.unobserve(t)}}const iR={some:0,all:1};class rR extends pr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:iR[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return nR(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(sR(e,n))&&this.startObserver()}unmount(){}}function sR({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const oR={inView:{Feature:rR},tap:{Feature:QC},focus:{Feature:ZC},hover:{Feature:KC}},aR={layout:{ProjectionNode:DS,MeasureLayout:MS}},Xf={current:null},NS={current:!1};function lR(){if(NS.current=!0,!!Zh)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Xf.current=t.matches;t.addListener(e),e()}else Xf.current=!1}const cR=[...eS,Wt,lr],uR=t=>cR.find(Jx(t)),no=new WeakMap;function dR(t,e,n){for(const i in e){const r=e[i],s=n[i];if(_t(r))t.addValue(i,r);else if(_t(s))t.addValue(i,eo(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,eo(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const dv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class IS{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=wp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=li.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Qe.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=su(n),this.isVariantNode=lx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const _=f[p];l[p]!==void 0&&_t(_)&&_.set(l[p],!1)}}mount(e){this.current=e,no.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),NS.current||lR(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Xf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){no.delete(this.current),this.projection&&this.projection.unmount(),Ri(this.notifyUpdate),Ri(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Zr.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&Qe.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Js){const n=Js[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):mt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<dv.length;i++){const r=dv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=dR(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=eo(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(Zx(r)||Hx(r))?r=parseFloat(r):!uR(r)&&lr.test(n)&&(r=qx(e,n)),this.setBaseTarget(e,_t(r)?r.get():r)),_t(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=sp(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!_t(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new yp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class US extends IS{constructor(){super(...arguments),this.KeyframeResolver=tS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;_t(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function fR(t){return window.getComputedStyle(t)}class FS extends US{constructor(){super(...arguments),this.type="html",this.renderInstance=vx}readValueFromInstance(e,n){if(Zr.has(n)){const i=Tp(n);return i&&i.default||0}else{const i=fR(e),r=(px(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return xS(e,n)}build(e,n,i){lp(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return fp(e,n,i)}}class OS extends US{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=mt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Zr.has(n)){const i=Tp(n);return i&&i.default||0}return n=_x.has(n)?n:np(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return Sx(e,n,i)}build(e,n,i){cp(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){yx(e,n,i,r)}mount(e){this.isSVGTag=dp(e.tagName),super.mount(e)}}const hR=(t,e)=>rp(t)?new OS(e):new FS(e,{allowProjection:t!==K.Fragment}),pR=q1({...HA,...oR,...$C,...aR},hR),Be=c1(pR);function Lc(t){const e=Ca(()=>eo(t)),{isStatic:n}=K.useContext(Ra);if(n){const[,i]=K.useState(t);K.useEffect(()=>e.on("change",i),[])}return e}function bp(t,e){const n=Lc(e()),i=()=>n.set(e());return i(),nu(()=>{const r=()=>Qe.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),Ri(i)}}),n}function fv(t,...e){const n=t.length;function i(){let r="";for(let s=0;s<n;s++){r+=t[s];const o=e[s];o&&(r+=_t(o)?o.get():o)}return r}return bp(e.filter(_t),i)}function hv(t){return typeof t=="number"?t:parseFloat(t)}function pv(t,e={}){const{isStatic:n}=K.useContext(Ra),i=K.useRef(null),r=Lc(_t(t)?hv(t.get()):t),s=K.useRef(r.get()),o=K.useRef(()=>{}),a=()=>{const c=i.current;c&&c.time===0&&c.sample(Lt.delta),l(),i.current=mA({keyframes:[r.get(),s.current],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:o.current})},l=()=>{i.current&&i.current.stop()};return K.useInsertionEffect(()=>r.attach((c,u)=>n?u(c):(s.current=c,o.current=u,Qe.update(a),r.get()),l),[JSON.stringify(e)]),nu(()=>{if(_t(t))return t.on("change",c=>r.set(hv(c)))},[r]),r}const mR=t=>t&&typeof t=="object"&&t.mix,gR=t=>mR(t)?t.mix:void 0;function vR(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=lS(r,s,{mixer:gR(s[0]),...o});return e?a(i):a}function _R(t){$o.current=[],t();const e=bp($o.current,t);return $o.current=void 0,e}function Jr(t,e,n,i){if(typeof t=="function")return _R(t);const r=typeof e=="function"?e:vR(e,n,i);return Array.isArray(t)?mv(t,r):mv([t],([s])=>r(s))}function mv(t,e){const n=Ca(()=>[]);return bp(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}const yR=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function kS(t,e){return aS(t)?t[yR(0,t.length,e)]:t}function Lp(t){return typeof t=="object"&&!Array.isArray(t)}function BS(t,e,n,i){return typeof t=="string"&&Lp(e)?gp(t,n,i):t instanceof NodeList?Array.from(t):Array.isArray(t)?t:[t]}function xR(t,e,n){return t*(e+1)}function gv(t,e,n,i){var r;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:(r=i.get(e))!==null&&r!==void 0?r:t}function SR(t,e,n){for(let i=0;i<t.length;i++){const r=t[i];r.at>e&&r.at<n&&(lu(t,r),i--)}}function MR(t,e,n,i,r,s){SR(t,r,s);for(let o=0;o<e.length;o++)t.push({value:e[o],at:ct(r,s,i[o]),easing:kS(n,o)})}function ER(t,e){for(let n=0;n<t.length;n++)t[n]=t[n]/(e+1)}function TR(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const wR="easeInOut";function AR(t,{defaultTransition:e={},...n}={},i,r){const s=e.duration||.3,o=new Map,a=new Map,l={},c=new Map;let u=0,d=0,f=0;for(let p=0;p<t.length;p++){const _=t[p];if(typeof _=="string"){c.set(_,d);continue}else if(!Array.isArray(_)){c.set(_.name,gv(d,_.at,u,c));continue}let[y,m,h={}]=_;h.at!==void 0&&(d=gv(d,h.at,u,c));let v=0;const g=(S,C,w,R=0,b=0)=>{const E=CR(S),{delay:x=0,times:I=uS(E),type:j="keyframes",repeat:N,repeatType:Y,repeatDelay:q=0,...te}=C;let{ease:X=e.ease||"easeOut",duration:D}=C;const H=typeof x=="function"?x(R,b):x,G=E.length,ie=au(j)?j:r==null?void 0:r[j];if(G<=2&&ie){let ee=100;if(G===2&&bR(E)){const Te=E[1]-E[0];ee=Math.abs(Te)}const ce={...te};D!==void 0&&(ce.duration=si(D));const re=Z1(ce,ee,ie);X=re.ease,D=re.duration}D??(D=s);const he=d+H;I.length===1&&I[0]===0&&(I[1]=1);const Ve=I.length-E.length;if(Ve>0&&cS(I,Ve),E.length===1&&E.unshift(null),N){D=xR(D,N);const ee=[...E],ce=[...I];X=Array.isArray(X)?[...X]:[X];const re=[...X];for(let Te=0;Te<N;Te++){E.push(...ee);for(let Re=0;Re<ee.length;Re++)I.push(ce[Re]+(Te+1)),X.push(Re===0?"linear":kS(re,Re-1))}ER(I,N)}const W=he+D;MR(w,E,X,I,he,W),v=Math.max(H+D,v),f=Math.max(W,f)};if(_t(y)){const S=vv(y,a);g(m,h,_v("default",S))}else{const S=BS(y,m,i,l),C=S.length;for(let w=0;w<C;w++){m=m,h=h;const R=S[w],b=vv(R,a);for(const E in m)g(m[E],RR(h,E),_v(E,b),w,C)}}u=d,d+=v}return a.forEach((p,_)=>{for(const y in p){const m=p[y];m.sort(TR);const h=[],v=[],g=[];for(let C=0;C<m.length;C++){const{at:w,value:R,easing:b}=m[C];h.push(R),v.push(Yr(0,f,w)),g.push(b||"easeOut")}v[0]!==0&&(v.unshift(0),h.unshift(h[0]),g.unshift(wR)),v[v.length-1]!==1&&(v.push(1),h.push(null)),o.has(_)||o.set(_,{keyframes:{},transition:{}});const S=o.get(_);S.keyframes[y]=h,S.transition[y]={...e,duration:f,ease:g,times:v,...n}}}),o}function vv(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function _v(t,e){return e[t]||(e[t]=[]),e[t]}function CR(t){return Array.isArray(t)?t:[t]}function RR(t,e){return t&&t[e]?{...t,...t[e]}:{...t}}const PR=t=>typeof t=="number",bR=t=>t.every(PR);function LR(t,e){return t in e}class DR extends IS{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,n){if(LR(n,e)){const i=e[n];if(typeof i=="string"||typeof i=="number")return i}}getBaseTargetFromProps(){}removeValueFromRenderState(e,n){delete n.output[e]}measureInstanceViewportBox(){return mt()}build(e,n){Object.assign(e.output,n)}renderInstance(e,{output:n}){Object.assign(e,n)}sortInstanceNodePosition(){return 0}}function NR(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=TS(t)?new OS(e):new FS(e);n.mount(t),no.set(t,n)}function IR(t){const e={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},n=new DR(e);n.mount(t),no.set(t,n)}function UR(t,e){return _t(t)||typeof t=="number"||typeof t=="string"&&!Lp(e)}function VS(t,e,n,i){const r=[];if(UR(t,e))r.push(ES(t,Lp(e)&&e.default||e,n&&(n.default||n)));else{const s=BS(t,e,i),o=s.length;for(let a=0;a<o;a++){const l=s[a],c=l instanceof Element?NR:IR;no.has(l)||c(l);const u=no.get(l),d={...n};"delay"in d&&typeof d.delay=="function"&&(d.delay=d.delay(a,o)),r.push(...Pp(u,{...e,transition:d},{}))}}return r}function FR(t,e,n){const i=[];return AR(t,e,n,{spring:Cp}).forEach(({keyframes:s,transition:o},a)=>{i.push(...VS(a,s,o))}),i}function OR(t){return Array.isArray(t)&&t.some(Array.isArray)}function kR(t){function e(n,i,r){let s=[];return OR(n)?s=FR(n,i,t):s=VS(n,i,r,t),new Tx(s)}return e}const BR=kR(),VR={some:0,all:1};function zR(t,e,{root:n,margin:i,amount:r="some"}={}){const s=gp(t),o=new WeakMap,a=c=>{c.forEach(u=>{const d=o.get(u.target);if(u.isIntersecting!==!!d)if(u.isIntersecting){const f=e(u);typeof f=="function"?o.set(u.target,f):l.unobserve(u.target)}else typeof d=="function"&&(d(u),o.delete(u.target))})},l=new IntersectionObserver(a,{root:n,rootMargin:i,threshold:typeof r=="number"?r:VR[r]});return s.forEach(c=>l.observe(c)),()=>l.disconnect()}function HR(t,{root:e,margin:n,amount:i,once:r=!1}={}){const[s,o]=K.useState(!1);return K.useEffect(()=>{if(!t.current||r&&s)return;const a=()=>(o(!0),r?void 0:()=>o(!1)),l={root:e&&e.current||void 0,margin:n,amount:i};return zR(t.current,a,l)},[e,t,n,r,i]),s}const Ao=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches;function GR({committee:t,index:e,onClick:n}){var g;const i=K.useRef(null),r=Lc(0),s=Lc(0),o=pv(r,{stiffness:260,damping:26,mass:.55}),a=pv(s,{stiffness:260,damping:26,mass:.55}),l=Jr(a,[-.5,.5],[14,-14]),c=Jr(o,[-.5,.5],[-14,14]),u=Jr(o,[-.5,.5],["8%","92%"]),d=Jr(a,[-.5,.5],["8%","92%"]),f=fv`radial-gradient(circle at ${u} ${d}, rgba(74,143,226,0.42) 0%, transparent 60%)`,p=Jr(o,[-.5,.5],["88%","12%"]),_=Jr(a,[-.5,.5],["88%","12%"]),y=fv`radial-gradient(circle at ${p} ${_}, rgba(255,255,255,0.08) 0%, transparent 44%)`,m=K.useCallback(S=>{if(Ao)return;const C=i.current.getBoundingClientRect();r.set((S.clientX-C.left)/C.width-.5),s.set((S.clientY-C.top)/C.height-.5)},[r,s]),h=K.useCallback(()=>{r.set(0),s.set(0)},[r,s]),v=Ao?{cursor:"pointer"}:{rotateX:l,rotateY:c,transformPerspective:1100,cursor:"pointer"};return T.jsxs(Be.article,{ref:i,className:"c-card",onClick:n,role:"button",tabIndex:0,onKeyDown:S=>{(S.key==="Enter"||S.key===" ")&&(n==null||n())},variants:{hidden:{opacity:0,y:50,scale:.88,filter:"blur(8px)"},visible:{opacity:1,y:0,scale:1,filter:"blur(0px)",transition:{duration:.7,ease:[.22,1,.36,1]}}},style:v,whileHover:Ao?{}:{scale:1.03,transition:{type:"spring",stiffness:360,damping:20}},onMouseMove:m,onMouseLeave:h,children:[!Ao&&T.jsxs(T.Fragment,{children:[T.jsx(Be.div,{className:"c-glow",style:{background:f}}),T.jsx(Be.div,{style:{position:"absolute",inset:0,zIndex:1,borderRadius:20,pointerEvents:"none",background:y}})]}),T.jsx("div",{className:"c-watermark",children:String(e+1).padStart(2,"0")}),T.jsxs("div",{className:"c-body",style:Ao?{}:{transform:"translateZ(22px)",transformStyle:"preserve-3d"},children:[T.jsx("div",{className:"c-abbr",children:t.abbr}),T.jsx("div",{className:"c-full",children:t.fullName}),T.jsx("div",{className:"c-divider"}),((g=t.board)==null?void 0:g.length)>0&&T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"c-section-lbl",children:"Executive Board"}),T.jsx("div",{className:"c-chips",children:t.board.map(S=>T.jsx("span",{className:"c-chip",children:S.name},S.name))})]}),t.agenda&&T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"c-section-lbl",style:{marginTop:12},children:"Agenda"}),T.jsx("p",{className:"c-agenda-txt",children:t.agenda})]}),T.jsx("div",{className:"c-learn-more",children:"Learn More →"})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dp="163",WR=0,yv=1,jR=2,zS=1,XR=2,gi=3,cr=0,Xt=1,yi=2,ir=0,Gs=1,xv=2,Sv=3,Mv=4,YR=5,Lr=100,qR=101,$R=102,KR=103,ZR=104,QR=200,JR=201,e2=202,t2=203,Yf=204,qf=205,n2=206,i2=207,r2=208,s2=209,o2=210,a2=211,l2=212,c2=213,u2=214,d2=0,f2=1,h2=2,Dc=3,p2=4,m2=5,g2=6,v2=7,HS=0,_2=1,y2=2,rr=0,x2=1,S2=2,M2=3,E2=4,T2=5,w2=6,A2=7,GS=300,io=301,ro=302,$f=303,Kf=304,du=306,Zf=1e3,Or=1001,Qf=1002,Ln=1003,C2=1004,cl=1005,Wn=1006,rd=1007,kr=1008,sr=1009,R2=1010,P2=1011,WS=1012,jS=1013,so=1014,qi=1015,Nc=1016,XS=1017,YS=1018,Na=1020,b2=35902,L2=1021,D2=1022,ni=1023,N2=1024,I2=1025,Ws=1026,Sa=1027,U2=1028,qS=1029,F2=1030,$S=1031,KS=1033,sd=33776,od=33777,ad=33778,ld=33779,Ev=35840,Tv=35841,wv=35842,Av=35843,ZS=36196,Cv=37492,Rv=37496,Pv=37808,bv=37809,Lv=37810,Dv=37811,Nv=37812,Iv=37813,Uv=37814,Fv=37815,Ov=37816,kv=37817,Bv=37818,Vv=37819,zv=37820,Hv=37821,cd=36492,Gv=36494,Wv=36495,O2=36283,jv=36284,Xv=36285,Yv=36286,k2=3200,B2=3201,V2=0,z2=1,ji="",Qn="srgb",mr="srgb-linear",Np="display-p3",fu="display-p3-linear",Ic="linear",it="srgb",Uc="rec709",Fc="p3",es=7680,qv=519,H2=512,G2=513,W2=514,QS=515,j2=516,X2=517,Y2=518,q2=519,$v=35044,Kv="300 es",Mi=2e3,Oc=2001;class ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ud=Math.PI/180,Jf=180/Math.PI;function Ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function $2(t,e){return(t%e+e)%e}function dd(t,e,n){return(1-n)*t+n*e}function Co(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],y=r[0],m=r[3],h=r[6],v=r[1],g=r[4],S=r[7],C=r[2],w=r[5],R=r[8];return s[0]=o*y+a*v+l*C,s[3]=o*m+a*g+l*w,s[6]=o*h+a*S+l*R,s[1]=c*y+u*v+d*C,s[4]=c*m+u*g+d*w,s[7]=c*h+u*S+d*R,s[2]=f*y+p*v+_*C,s[5]=f*m+p*g+_*w,s[8]=f*h+p*S+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,_=n*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(fd.makeScale(e,n)),this}rotate(e){return this.premultiply(fd.makeRotation(-e)),this}translate(e,n){return this.premultiply(fd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fd=new Fe;function JS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function K2(){const t=kc("canvas");return t.style.display="block",t}const Zv={};function Z2(t){t in Zv||(Zv[t]=!0,console.warn(t))}const Qv=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jv=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ul={[mr]:{transfer:Ic,primaries:Uc,toReference:t=>t,fromReference:t=>t},[Qn]:{transfer:it,primaries:Uc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[fu]:{transfer:Ic,primaries:Fc,toReference:t=>t.applyMatrix3(Jv),fromReference:t=>t.applyMatrix3(Qv)},[Np]:{transfer:it,primaries:Fc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Jv),fromReference:t=>t.applyMatrix3(Qv).convertLinearToSRGB()}},Q2=new Set([mr,fu]),Ke={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Q2.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ul[e].toReference,r=ul[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ul[t].primaries},getTransfer:function(t){return t===ji?Ic:ul[t].transfer}};function js(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function hd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ts;class J2{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=kc("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=js(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(js(n[i]/255)*255):n[i]=js(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eP=0;class eM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eP++}),this.uuid=Ia(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pd(r[o].image)):s.push(pd(r[o]))}else s=pd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function pd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?J2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tP=0;class cn extends ho{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Or,r=Or,s=Wn,o=kr,a=ni,l=sr,c=cn.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tP++}),this.uuid=Ia(),this.name="",this.source=new eM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==GS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zf:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case Qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zf:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case Qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=GS;cn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(p+1)/2,C=(h+1)/2,w=(u+f)/4,R=(d+y)/4,b=(_+m)/4;return g>S&&g>C?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=w/i,s=R/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=b/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-y)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nP extends ho{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new eM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends nP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class tM extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iP extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ua{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(d!==y||l!==f||c!==p||u!==_){let m=1-a;const h=l*f+c*p+u*_+d*y,v=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const C=Math.sqrt(g),w=Math.atan2(C,h*v);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const S=a*v;if(l=l*m+f*S,c=c*m+p*S,u=u*m+_*S,d=d*m+y*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*d+l*p-c*f,e[n+1]=l*_+u*f+c*d-a*p,e[n+2]=c*_+u*p+a*f-l*d,e[n+3]=u*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(e0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(e0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return md.copy(this).projectOnVector(e),this.sub(md)}reflect(e){return this.sub(md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const md=new F,e0=new Ua;class Fa{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dl.copy(i.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),fl.subVectors(this.max,Ro),ns.subVectors(e.a,Ro),is.subVectors(e.b,Ro),rs.subVectors(e.c,Ro),Ii.subVectors(is,ns),Ui.subVectors(rs,is),yr.subVectors(ns,rs);let n=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-yr.z,yr.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,yr.z,0,-yr.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-yr.y,yr.x,0];return!gd(n,ns,is,rs,fl)||(n=[1,0,0,0,1,0,0,0,1],!gd(n,ns,is,rs,fl))?!1:(hl.crossVectors(Ii,Ui),n=[hl.x,hl.y,hl.z],gd(n,ns,is,rs,fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new F,new F,new F,new F,new F,new F,new F,new F],On=new F,dl=new Fa,ns=new F,is=new F,rs=new F,Ii=new F,Ui=new F,yr=new F,Ro=new F,fl=new F,hl=new F,xr=new F;function gd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){xr.fromArray(t,s);const a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=e.dot(xr),c=n.dot(xr),u=i.dot(xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rP=new Fa,Po=new F,vd=new F;class Oa{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):rP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(vd)),this.expandByPoint(Po.copy(e.center).sub(vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new F,_d=new F,pl=new F,Fi=new F,yd=new F,ml=new F,xd=new F;class Ip{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){_d.copy(e).add(n).multiplyScalar(.5),pl.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(_d);const s=e.distanceTo(n)*.5,o=-this.direction.dot(pl),a=Fi.dot(this.direction),l=-Fi.dot(pl),c=Fi.lengthSq(),u=Math.abs(1-o*o);let d,f,p,_;if(u>0)if(d=o*l-a,f=o*a-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_d).addScaledVector(pl,f),p}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){yd.subVectors(n,e),ml.subVectors(i,e),xd.crossVectors(yd,ml);let o=this.direction.dot(xd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(ml.crossVectors(Fi,ml));if(l<0)return null;const c=a*this.direction.dot(yd.cross(Fi));if(c<0||l+c>o)return null;const u=-a*Fi.dot(xd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,_,y,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,_,y,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,_,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,_=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,y=c*d;n[0]=f+y*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,_=a*u,y=a*d;n[0]=l*u,n[4]=_*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=_*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+_,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sP,e,oP)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Oi.crossVectors(i,dn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Oi.crossVectors(i,dn)),Oi.normalize(),gl.crossVectors(dn,Oi),r[0]=Oi.x,r[4]=gl.x,r[8]=dn.x,r[1]=Oi.y,r[5]=gl.y,r[9]=dn.y,r[2]=Oi.z,r[6]=gl.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],y=i[6],m=i[10],h=i[14],v=i[3],g=i[7],S=i[11],C=i[15],w=r[0],R=r[4],b=r[8],E=r[12],x=r[1],I=r[5],j=r[9],N=r[13],Y=r[2],q=r[6],te=r[10],X=r[14],D=r[3],H=r[7],G=r[11],ie=r[15];return s[0]=o*w+a*x+l*Y+c*D,s[4]=o*R+a*I+l*q+c*H,s[8]=o*b+a*j+l*te+c*G,s[12]=o*E+a*N+l*X+c*ie,s[1]=u*w+d*x+f*Y+p*D,s[5]=u*R+d*I+f*q+p*H,s[9]=u*b+d*j+f*te+p*G,s[13]=u*E+d*N+f*X+p*ie,s[2]=_*w+y*x+m*Y+h*D,s[6]=_*R+y*I+m*q+h*H,s[10]=_*b+y*j+m*te+h*G,s[14]=_*E+y*N+m*X+h*ie,s[3]=v*w+g*x+S*Y+C*D,s[7]=v*R+g*I+S*q+C*H,s[11]=v*b+g*j+S*te+C*G,s[15]=v*E+g*N+S*X+C*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],y=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],y=e[13],m=e[14],h=e[15],v=d*m*c-y*f*c+y*l*p-a*m*p-d*l*h+a*f*h,g=_*f*c-u*m*c-_*l*p+o*m*p+u*l*h-o*f*h,S=u*y*c-_*d*c+_*a*p-o*y*p-u*a*h+o*d*h,C=_*d*l-u*y*l-_*a*f+o*y*f+u*a*m-o*d*m,w=n*v+i*g+r*S+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=v*R,e[1]=(y*f*s-d*m*s-y*r*p+i*m*p+d*r*h-i*f*h)*R,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*h+i*l*h)*R,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*R,e[4]=g*R,e[5]=(u*m*s-_*f*s+_*r*p-n*m*p-u*r*h+n*f*h)*R,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*h-n*l*h)*R,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*R,e[8]=S*R,e[9]=(_*d*s-u*y*s-_*i*p+n*y*p+u*i*h-n*d*h)*R,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*h+n*a*h)*R,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*R,e[12]=C*R,e[13]=(u*y*r-_*d*r+_*i*f-n*y*f-u*i*m+n*d*m)*R,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*R,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,_=s*d,y=o*u,m=o*d,h=a*d,v=l*c,g=l*u,S=l*d,C=i.x,w=i.y,R=i.z;return r[0]=(1-(y+h))*C,r[1]=(p+S)*C,r[2]=(_-g)*C,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(f+h))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(_+g)*R,r[9]=(m-v)*R,r[10]=(1-(f+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/s,u=1/o,d=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,n.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Mi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(a===Mi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Oc)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Mi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let _,y;if(a===Mi)_=(o+s)*d,y=-2*d;else if(a===Oc)_=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ss=new F,kn=new St,sP=new F(0,0,0),oP=new F(1,1,1),Oi=new F,gl=new F,dn=new F,t0=new St,n0=new Ua;class bi{constructor(e=0,n=0,i=0,r=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return t0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(t0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return n0.setFromEuler(this),this.setFromQuaternion(n0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class nM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aP=0;const i0=new F,os=new Ua,hi=new St,vl=new F,bo=new F,lP=new F,cP=new Ua,r0=new F(1,0,0),s0=new F(0,1,0),o0=new F(0,0,1),a0={type:"added"},uP={type:"removed"},as={type:"childadded",child:null},Sd={type:"childremoved",child:null};class Zt extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aP++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new F,n=new bi,i=new Ua,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Fe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(r0,e)}rotateY(e){return this.rotateOnAxis(s0,e)}rotateZ(e){return this.rotateOnAxis(o0,e)}translateOnAxis(e,n){return i0.copy(e).applyQuaternion(this.quaternion),this.position.add(i0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(r0,e)}translateY(e){return this.translateOnAxis(s0,e)}translateZ(e){return this.translateOnAxis(o0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vl.copy(e):vl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(bo,vl,this.up):hi.lookAt(vl,bo,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(hi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(a0),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uP),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(a0),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,lP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,cP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new F(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new F,pi=new F,Md=new F,mi=new F,ls=new F,cs=new F,l0=new F,Ed=new F,Td=new F,wd=new F;class ti{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),pi.subVectors(i,n),Md.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(pi),l=Bn.dot(Md),c=pi.dot(pi),u=pi.dot(Md),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),pi.subVectors(e,n),Bn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Bn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ls.subVectors(r,i),cs.subVectors(s,i),Ed.subVectors(e,i);const l=ls.dot(Ed),c=cs.dot(Ed);if(l<=0&&c<=0)return n.copy(i);Td.subVectors(e,r);const u=ls.dot(Td),d=cs.dot(Td);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ls,o);wd.subVectors(e,s);const p=ls.dot(wd),_=cs.dot(wd);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(cs,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return l0.subVectors(s,r),a=(d-u)/(d-u+(p-_)),n.copy(r).addScaledVector(l0,a);const h=1/(m+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const iM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},_l={h:0,s:0,l:0};function Ad(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=$2(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ad(o,s,e+1/3),this.g=Ad(o,s,e),this.b=Ad(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=Qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const i=iM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=hd(e.r),this.g=hd(e.g),this.b=hd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Ke.fromWorkingColorSpace(Gt.copy(this),e),Math.round(nn(Gt.r*255,0,255))*65536+Math.round(nn(Gt.g*255,0,255))*256+Math.round(nn(Gt.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Qn){Ke.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(_l);const i=dd(ki.h,_l.h,n),r=dd(ki.s,_l.s,n),s=dd(ki.l,_l.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ye;Ye.NAMES=iM;let dP=0;class po extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dP++}),this.uuid=Ia(),this.name="",this.type="Material",this.blending=Gs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yf,this.blendDst=qf,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yf&&(i.blendSrc=this.blendSrc),this.blendDst!==qf&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Is extends po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=HS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new F,yl=new je;class ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$v,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Z2("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Co(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Co(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Co(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Co(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Co(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$v&&(e.usage=this.usage),e}}class rM extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class sM extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Nn extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let fP=0;const wn=new St,Cd=new Zt,us=new F,fn=new Fa,Lo=new Fa,bt=new F;class _n extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fP++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(JS(e)?sM:rM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return Cd.lookAt(e),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(fn.min,Lo.min),fn.expandByPoint(bt),bt.addVectors(fn.max,Lo.max),fn.expandByPoint(bt)):(fn.expandByPoint(Lo.min),fn.expandByPoint(Lo.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),bt.add(us)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new F,l[b]=new F;const c=new F,u=new F,d=new F,f=new je,p=new je,_=new je,y=new F,m=new F;function h(b,E,x){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,x),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(I),a[b].add(y),a[E].add(y),a[x].add(y),l[b].add(m),l[E].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,E=v.length;b<E;++b){const x=v[b],I=x.start,j=x.count;for(let N=I,Y=I+j;N<Y;N+=3)h(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const g=new F,S=new F,C=new F,w=new F;function R(b){C.fromBufferAttribute(r,b),w.copy(C);const E=a[b];g.copy(E),g.sub(C.multiplyScalar(C.dot(E))).normalize(),S.crossVectors(w,E);const I=S.dot(l[b])<0?-1:1;o.setXYZW(b,g.x,g.y,g.z,I)}for(let b=0,E=v.length;b<E;++b){const x=v[b],I=x.start,j=x.count;for(let N=I,Y=I+j;N<Y;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,d=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new ci(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c0=new St,Sr=new Ip,xl=new Oa,u0=new F,ds=new F,fs=new F,hs=new F,Rd=new F,Sl=new F,Ml=new je,El=new je,Tl=new je,d0=new F,f0=new F,h0=new F,wl=new F,Al=new F;class mn extends Zt{constructor(e=new _n,n=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Sl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Rd.fromBufferAttribute(d,e),o?Sl.addScaledVector(Rd,u):Sl.addScaledVector(Rd.sub(n),u))}n.add(Sl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(s),Sr.copy(e.ray).recast(e.near),!(xl.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(xl,u0)===null||Sr.origin.distanceToSquared(u0)>(e.far-e.near)**2))&&(c0.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(c0),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=g;S<C;S+=3){const w=a.getX(S),R=a.getX(S+1),b=a.getX(S+2);r=Cl(this,h,e,i,c,u,d,w,R,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const v=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=Cl(this,o,e,i,c,u,d,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=g;S<C;S+=3){const w=S,R=S+1,b=S+2;r=Cl(this,h,e,i,c,u,d,w,R,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const v=m,g=m+1,S=m+2;r=Cl(this,o,e,i,c,u,d,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function hP(t,e,n,i,r,s,o,a){let l;if(e.side===Xt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cr,a),l===null)return null;Al.copy(a),Al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Al);return c<n.near||c>n.far?null:{distance:c,point:Al.clone(),object:t}}function Cl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ds),t.getVertexPosition(l,fs),t.getVertexPosition(c,hs);const u=hP(t,e,n,i,ds,fs,hs,wl);if(u){r&&(Ml.fromBufferAttribute(r,a),El.fromBufferAttribute(r,l),Tl.fromBufferAttribute(r,c),u.uv=ti.getInterpolation(wl,ds,fs,hs,Ml,El,Tl,new je)),s&&(Ml.fromBufferAttribute(s,a),El.fromBufferAttribute(s,l),Tl.fromBufferAttribute(s,c),u.uv1=ti.getInterpolation(wl,ds,fs,hs,Ml,El,Tl,new je)),o&&(d0.fromBufferAttribute(o,a),f0.fromBufferAttribute(o,l),h0.fromBufferAttribute(o,c),u.normal=ti.getInterpolation(wl,ds,fs,hs,d0,f0,h0,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new F,materialIndex:0};ti.getNormal(ds,fs,hs,d.normal),u.face=d}return u}class ka extends _n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(d,2));function _(y,m,h,v,g,S,C,w,R,b,E){const x=S/R,I=C/b,j=S/2,N=C/2,Y=w/2,q=R+1,te=b+1;let X=0,D=0;const H=new F;for(let G=0;G<te;G++){const ie=G*I-N;for(let he=0;he<q;he++){const Ve=he*x-j;H[y]=Ve*v,H[m]=ie*g,H[h]=Y,c.push(H.x,H.y,H.z),H[y]=0,H[m]=0,H[h]=w>0?1:-1,u.push(H.x,H.y,H.z),d.push(he/R),d.push(1-G/b),X+=1}}for(let G=0;G<b;G++)for(let ie=0;ie<R;ie++){const he=f+ie+q*G,Ve=f+ie+q*(G+1),W=f+(ie+1)+q*(G+1),ee=f+(ie+1)+q*G;l.push(he,Ve,ee),l.push(Ve,W,ee),D+=6}a.addGroup(p,D,E),p+=D,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=oo(t[n]);for(const r in i)e[r]=i[r]}return e}function pP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function oM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const mP={clone:oo,merge:qt};var gP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gP,this.fragmentShader=vP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=pP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class aM extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new F,p0=new je,m0=new je;class Pn extends aM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jf*2*Math.atan(Math.tan(ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,p0,m0),n.subVectors(m0,p0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ud*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ps=-90,ms=1;class _P extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(ps,ms,e,n);r.layers=this.layers,this.add(r);const s=new Pn(ps,ms,e,n);s.layers=this.layers,this.add(s);const o=new Pn(ps,ms,e,n);o.layers=this.layers,this.add(o);const a=new Pn(ps,ms,e,n);a.layers=this.layers,this.add(a);const l=new Pn(ps,ms,e,n);l.layers=this.layers,this.add(l);const c=new Pn(ps,ms,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class lM extends cn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:io,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yP extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lM(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ka(5,5,5),s=new ur({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:ir});s.uniforms.tEquirect.value=n;const o=new mn(r,s),a=n.minFilter;return n.minFilter===kr&&(n.minFilter=Wn),new _P(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Pd=new F,xP=new F,SP=new Fe;class Pr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pd.subVectors(i,n).cross(xP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Pd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||SP.getNormalMatrix(e),r=this.coplanarPoint(Pd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Oa,Rl=new F;class cM{constructor(e=new Pr,n=new Pr,i=new Pr,r=new Pr,s=new Pr,o=new Pr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],y=r[10],m=r[11],h=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-h).normalize(),i[1].setComponents(l+s,f+c,m+p,S+h).normalize(),i[2].setComponents(l+o,f+u,m+_,S+v).normalize(),i[3].setComponents(l-o,f-u,m-_,S-v).normalize(),i[4].setComponents(l-a,f-d,m-y,S-g).normalize(),n===Mi)i[5].setComponents(l+a,f+d,m+y,S+g).normalize();else if(n===Oc)i[5].setComponents(a,d,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Rl.x=r.normal.x>0?e.max.x:e.min.x,Rl.y=r.normal.y>0?e.max.y:e.min.y,Rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function MP(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let p=0,_=f.length;p<_;p++){const y=f[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class hu extends _n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],_=[],y=[],m=[];for(let h=0;h<u;h++){const v=h*f-o;for(let g=0;g<c;g++){const S=g*d-s;_.push(S,-v,0),y.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const g=v+c*h,S=v+c*(h+1),C=v+1+c*(h+1),w=v+1+c*h;p.push(g,S,w),p.push(S,C,w)}this.setIndex(p),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(y,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}var EP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LP=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,NP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,XP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$P=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JP="gl_FragColor = linearToOutputTexel( gl_FragColor );",eb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ib=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ob=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ub=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,db=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_b=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ab=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ub=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ob=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,oL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_L=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ML=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,LL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,NL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$L=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:EP,alphahash_pars_fragment:TP,alphamap_fragment:wP,alphamap_pars_fragment:AP,alphatest_fragment:CP,alphatest_pars_fragment:RP,aomap_fragment:PP,aomap_pars_fragment:bP,batching_pars_vertex:LP,batching_vertex:DP,begin_vertex:NP,beginnormal_vertex:IP,bsdfs:UP,iridescence_fragment:FP,bumpmap_pars_fragment:OP,clipping_planes_fragment:kP,clipping_planes_pars_fragment:BP,clipping_planes_pars_vertex:VP,clipping_planes_vertex:zP,color_fragment:HP,color_pars_fragment:GP,color_pars_vertex:WP,color_vertex:jP,common:XP,cube_uv_reflection_fragment:YP,defaultnormal_vertex:qP,displacementmap_pars_vertex:$P,displacementmap_vertex:KP,emissivemap_fragment:ZP,emissivemap_pars_fragment:QP,colorspace_fragment:JP,colorspace_pars_fragment:eb,envmap_fragment:tb,envmap_common_pars_fragment:nb,envmap_pars_fragment:ib,envmap_pars_vertex:rb,envmap_physical_pars_fragment:gb,envmap_vertex:sb,fog_vertex:ob,fog_pars_vertex:ab,fog_fragment:lb,fog_pars_fragment:cb,gradientmap_pars_fragment:ub,lightmap_fragment:db,lightmap_pars_fragment:fb,lights_lambert_fragment:hb,lights_lambert_pars_fragment:pb,lights_pars_begin:mb,lights_toon_fragment:vb,lights_toon_pars_fragment:_b,lights_phong_fragment:yb,lights_phong_pars_fragment:xb,lights_physical_fragment:Sb,lights_physical_pars_fragment:Mb,lights_fragment_begin:Eb,lights_fragment_maps:Tb,lights_fragment_end:wb,logdepthbuf_fragment:Ab,logdepthbuf_pars_fragment:Cb,logdepthbuf_pars_vertex:Rb,logdepthbuf_vertex:Pb,map_fragment:bb,map_pars_fragment:Lb,map_particle_fragment:Db,map_particle_pars_fragment:Nb,metalnessmap_fragment:Ib,metalnessmap_pars_fragment:Ub,morphinstance_vertex:Fb,morphcolor_vertex:Ob,morphnormal_vertex:kb,morphtarget_pars_vertex:Bb,morphtarget_vertex:Vb,normal_fragment_begin:zb,normal_fragment_maps:Hb,normal_pars_fragment:Gb,normal_pars_vertex:Wb,normal_vertex:jb,normalmap_pars_fragment:Xb,clearcoat_normal_fragment_begin:Yb,clearcoat_normal_fragment_maps:qb,clearcoat_pars_fragment:$b,iridescence_pars_fragment:Kb,opaque_fragment:Zb,packing:Qb,premultiplied_alpha_fragment:Jb,project_vertex:eL,dithering_fragment:tL,dithering_pars_fragment:nL,roughnessmap_fragment:iL,roughnessmap_pars_fragment:rL,shadowmap_pars_fragment:sL,shadowmap_pars_vertex:oL,shadowmap_vertex:aL,shadowmask_pars_fragment:lL,skinbase_vertex:cL,skinning_pars_vertex:uL,skinning_vertex:dL,skinnormal_vertex:fL,specularmap_fragment:hL,specularmap_pars_fragment:pL,tonemapping_fragment:mL,tonemapping_pars_fragment:gL,transmission_fragment:vL,transmission_pars_fragment:_L,uv_pars_fragment:yL,uv_pars_vertex:xL,uv_vertex:SL,worldpos_vertex:ML,background_vert:EL,background_frag:TL,backgroundCube_vert:wL,backgroundCube_frag:AL,cube_vert:CL,cube_frag:RL,depth_vert:PL,depth_frag:bL,distanceRGBA_vert:LL,distanceRGBA_frag:DL,equirect_vert:NL,equirect_frag:IL,linedashed_vert:UL,linedashed_frag:FL,meshbasic_vert:OL,meshbasic_frag:kL,meshlambert_vert:BL,meshlambert_frag:VL,meshmatcap_vert:zL,meshmatcap_frag:HL,meshnormal_vert:GL,meshnormal_frag:WL,meshphong_vert:jL,meshphong_frag:XL,meshphysical_vert:YL,meshphysical_frag:qL,meshtoon_vert:$L,meshtoon_frag:KL,points_vert:ZL,points_frag:QL,shadow_vert:JL,shadow_frag:eD,sprite_vert:tD,sprite_frag:nD},le={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Jn={basic:{uniforms:qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:qt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:qt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:qt([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:qt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:qt([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:qt([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:qt([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:qt([le.lights,le.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Jn.physical={uniforms:qt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Pl={r:0,b:0,g:0},Er=new bi,iD=new St;function rD(t,e,n,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function _(m,h){let v=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?n:e).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===du)?(u===void 0&&(u=new mn(new ka(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:oo(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Er.copy(h.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iD.makeRotationFromEuler(Er)),u.material.toneMapped=Ke.getTransfer(g.colorSpace)!==it,(d!==g||f!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,f=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new mn(new hu(2,2),new ur({name:"BackgroundMaterial",uniforms:oo(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(g.colorSpace)!==it,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,f=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,h){m.getRGB(Pl,oM(t)),i.buffers.color.setClear(Pl.r,Pl.g,Pl.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:_}}function sD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(x,I,j,N,Y){let q=!1;const te=d(N,j,I);s!==te&&(s=te,c(s.object)),q=p(x,N,j,Y),q&&_(x,N,j,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(x,I,j,N),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function d(x,I,j){const N=j.wireframe===!0;let Y=i[x.id];Y===void 0&&(Y={},i[x.id]=Y);let q=Y[I.id];q===void 0&&(q={},Y[I.id]=q);let te=q[N];return te===void 0&&(te=f(l()),q[N]=te),te}function f(x){const I=[],j=[],N=[];for(let Y=0;Y<n;Y++)I[Y]=0,j[Y]=0,N[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:j,attributeDivisors:N,object:x,attributes:{},index:null}}function p(x,I,j,N){const Y=s.attributes,q=I.attributes;let te=0;const X=j.getAttributes();for(const D in X)if(X[D].location>=0){const G=Y[D];let ie=q[D];if(ie===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor)),G===void 0||G.attribute!==ie||ie&&G.data!==ie.data)return!0;te++}return s.attributesNum!==te||s.index!==N}function _(x,I,j,N){const Y={},q=I.attributes;let te=0;const X=j.getAttributes();for(const D in X)if(X[D].location>=0){let G=q[D];G===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(G=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(G=x.instanceColor));const ie={};ie.attribute=G,G&&G.data&&(ie.data=G.data),Y[D]=ie,te++}s.attributes=Y,s.attributesNum=te,s.index=N}function y(){const x=s.newAttributes;for(let I=0,j=x.length;I<j;I++)x[I]=0}function m(x){h(x,0)}function h(x,I){const j=s.newAttributes,N=s.enabledAttributes,Y=s.attributeDivisors;j[x]=1,N[x]===0&&(t.enableVertexAttribArray(x),N[x]=1),Y[x]!==I&&(t.vertexAttribDivisor(x,I),Y[x]=I)}function v(){const x=s.newAttributes,I=s.enabledAttributes;for(let j=0,N=I.length;j<N;j++)I[j]!==x[j]&&(t.disableVertexAttribArray(j),I[j]=0)}function g(x,I,j,N,Y,q,te){te===!0?t.vertexAttribIPointer(x,I,j,Y,q):t.vertexAttribPointer(x,I,j,N,Y,q)}function S(x,I,j,N){y();const Y=N.attributes,q=j.getAttributes(),te=I.defaultAttributeValues;for(const X in q){const D=q[X];if(D.location>=0){let H=Y[X];if(H===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(H=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(H=x.instanceColor)),H!==void 0){const G=H.normalized,ie=H.itemSize,he=e.get(H);if(he===void 0)continue;const Ve=he.buffer,W=he.type,ee=he.bytesPerElement,ce=W===t.INT||W===t.UNSIGNED_INT||H.gpuType===jS;if(H.isInterleavedBufferAttribute){const re=H.data,Te=re.stride,Re=H.offset;if(re.isInstancedInterleavedBuffer){for(let He=0;He<D.locationSize;He++)h(D.location+He,re.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let He=0;He<D.locationSize;He++)m(D.location+He);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let He=0;He<D.locationSize;He++)g(D.location+He,ie/D.locationSize,W,G,Te*ee,(Re+ie/D.locationSize*He)*ee,ce)}else{if(H.isInstancedBufferAttribute){for(let re=0;re<D.locationSize;re++)h(D.location+re,H.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let re=0;re<D.locationSize;re++)m(D.location+re);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let re=0;re<D.locationSize;re++)g(D.location+re,ie/D.locationSize,W,G,ie*ee,ie/D.locationSize*re*ee,ce)}}else if(te!==void 0){const G=te[X];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(D.location,G);break;case 3:t.vertexAttrib3fv(D.location,G);break;case 4:t.vertexAttrib4fv(D.location,G);break;default:t.vertexAttrib1fv(D.location,G)}}}}v()}function C(){b();for(const x in i){const I=i[x];for(const j in I){const N=I[j];for(const Y in N)u(N[Y].object),delete N[Y];delete I[j]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const I=i[x.id];for(const j in I){const N=I[j];for(const Y in N)u(N[Y].object),delete N[Y];delete I[j]}delete i[x.id]}function R(x){for(const I in i){const j=i[I];if(j[x.id]===void 0)continue;const N=j[x.id];for(const Y in N)u(N[Y].object),delete N[Y];delete j[x.id]}}function b(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function oD(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{d.multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];n.update(f,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function aD(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(g){if(g==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=n.precision!==void 0?n.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=n.logarithmicDepthBuffer===!0,c=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),u=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),f=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),h=u>0,v=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:m,vertexTextures:h,maxSamples:v}}function lD(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Pr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,g=v*4;let S=h.clippingState||null;l.value=S,S=u(_,f,g,p);for(let C=0;C!==g;++C)S[C]=n[C];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,_){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const h=p+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,S=p;g!==y;++g,S+=4)o.copy(d[g]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function cD(t){let e=new WeakMap;function n(o,a){return a===$f?o.mapping=io:a===Kf&&(o.mapping=ro),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$f||a===Kf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yP(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class uD extends aM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Us=4,g0=[.125,.215,.35,.446,.526,.582],Dr=20,bd=new uD,v0=new Ye;let Ld=null,Dd=0,Nd=0,Id=!1;const br=(1+Math.sqrt(5))/2,gs=1/br,_0=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,br,gs),new F(0,br,-gs),new F(gs,0,br),new F(-gs,0,br),new F(br,gs,0),new F(-br,gs,0)];class y0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ld=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ld,Dd,Nd),this._renderer.xr.enabled=Id,e.scissorTest=!1,bl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ld=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Nc,format:ni,colorSpace:mr,depthBuffer:!1},r=x0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dD(s)),this._blurMaterial=fD(s,e,n)}return r}_compileMaterial(e){const n=new mn(this._lodPlanes[0],e);this._renderer.compile(n,bd)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(v0),u.toneMapping=rr,u.autoClear=!1;const p=new Is({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),_=new mn(new ka,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(v0),y=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const g=this._cubeSize;bl(r,v*g,h>2?g:0,g,g),u.setRenderTarget(r),y&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===io||e.mapping===ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=M0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;bl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,bd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_0[(r-1)%_0.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new mn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Dr-1),y=s/_,m=isFinite(s)?1+Math.floor(u*y):Dr;m>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Dr}`);const h=[];let v=0;for(let R=0;R<Dr;++R){const b=R/y,E=Math.exp(-b*b/2);h.push(E),R===0?v+=E:R<m&&(v+=2*E)}for(let R=0;R<h.length;R++)h[R]=h[R]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const S=this._sizeLods[r],C=3*S*(r>g-Us?r-g+Us:0),w=4*(this._cubeSize-S);bl(n,C,w,3*S,2*S),l.setRenderTarget(n),l.render(d,bd)}}function dD(t){const e=[],n=[],i=[];let r=t;const s=t-Us+1+g0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Us?l=g0[o-t+Us-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,y=3,m=2,h=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,b=w>2?0:-1,E=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];v.set(E,y*_*w),g.set(f,m*_*w);const x=[w,w,w,w,w,w];S.set(x,h*_*w)}const C=new _n;C.setAttribute("position",new ci(v,y)),C.setAttribute("uv",new ci(g,m)),C.setAttribute("faceIndex",new ci(S,h)),e.push(C),r>Us&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function x0(t,e,n){const i=new qr(t,e,n);return i.texture.mapping=du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function fD(t,e,n){const i=new Float32Array(Dr),r=new F(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function S0(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function M0(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Up(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hD(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$f||l===Kf,u=l===io||l===ro;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new y0(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new y0(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function pD(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mD(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,_=d.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,S=v.length;g<S;g+=3){const C=v[g+0],w=v[g+1],R=v[g+2];f.push(C,w,w,R,R,C)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const C=g+0,w=g+1,R=g+2;f.push(C,w,w,R,R,C)}}else return;const m=new(JS(f)?sM:rM)(f,1);m.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function gD(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*o),n.update(f,i,1)}function c(d,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,d*o,p),n.update(f,i,p))}function u(d,f,p){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<p;y++)this.render(d[y]/o,f[y]);else{_.multiDrawElementsWEBGL(i,f,0,s,d,0,p);let y=0;for(let m=0;m<p;m++)y+=f[m];n.update(y,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function vD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _D(t,e,n){const i=new WeakMap,r=new Ut;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let x=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*w*4*d),b=new tM(R,C,w,d);b.type=qi,b.needsUpdate=!0;const E=S*4;for(let I=0;I<d;I++){const j=h[I],N=v[I],Y=g[I],q=C*w*4*I;for(let te=0;te<j.count;te++){const X=te*E;_===!0&&(r.fromBufferAttribute(j,te),R[q+X+0]=r.x,R[q+X+1]=r.y,R[q+X+2]=r.z,R[q+X+3]=0),y===!0&&(r.fromBufferAttribute(N,te),R[q+X+4]=r.x,R[q+X+5]=r.y,R[q+X+6]=r.z,R[q+X+7]=0),m===!0&&(r.fromBufferAttribute(Y,te),R[q+X+8]=r.x,R[q+X+9]=r.y,R[q+X+10]=r.z,R[q+X+11]=Y.itemSize===4?r.w:1)}}f={count:d,texture:b,size:new je(C,w)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function yD(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class dM extends cn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ws,u!==Ws&&u!==Sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ws&&(i=so),i===void 0&&u===Sa&&(i=Na),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const fM=new cn,hM=new dM(1,1);hM.compareFunction=QS;const pM=new tM,mM=new iP,gM=new lM,E0=[],T0=[],w0=new Float32Array(16),A0=new Float32Array(9),C0=new Float32Array(4);function mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=E0[r];if(s===void 0&&(s=new Float32Array(r),E0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pu(t,e){let n=T0[e];n===void 0&&(n=new Int32Array(e),T0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function SD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function MD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function ED(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function TD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;C0.set(i),t.uniformMatrix2fv(this.addr,!1,C0),Rt(n,i)}}function wD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;A0.set(i),t.uniformMatrix3fv(this.addr,!1,A0),Rt(n,i)}}function AD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;w0.set(i),t.uniformMatrix4fv(this.addr,!1,w0),Rt(n,i)}}function CD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function PD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function bD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function LD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function DD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function ND(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function ID(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function UD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?hM:fM;n.setTexture2D(e||s,r)}function FD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||mM,r)}function OD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||gM,r)}function kD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||pM,r)}function BD(t){switch(t){case 5126:return xD;case 35664:return SD;case 35665:return MD;case 35666:return ED;case 35674:return TD;case 35675:return wD;case 35676:return AD;case 5124:case 35670:return CD;case 35667:case 35671:return RD;case 35668:case 35672:return PD;case 35669:case 35673:return bD;case 5125:return LD;case 36294:return DD;case 36295:return ND;case 36296:return ID;case 35678:case 36198:case 36298:case 36306:case 35682:return UD;case 35679:case 36299:case 36307:return FD;case 35680:case 36300:case 36308:case 36293:return OD;case 36289:case 36303:case 36311:case 36292:return kD}}function VD(t,e){t.uniform1fv(this.addr,e)}function zD(t,e){const n=mo(e,this.size,2);t.uniform2fv(this.addr,n)}function HD(t,e){const n=mo(e,this.size,3);t.uniform3fv(this.addr,n)}function GD(t,e){const n=mo(e,this.size,4);t.uniform4fv(this.addr,n)}function WD(t,e){const n=mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jD(t,e){const n=mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function XD(t,e){const n=mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function YD(t,e){t.uniform1iv(this.addr,e)}function qD(t,e){t.uniform2iv(this.addr,e)}function $D(t,e){t.uniform3iv(this.addr,e)}function KD(t,e){t.uniform4iv(this.addr,e)}function ZD(t,e){t.uniform1uiv(this.addr,e)}function QD(t,e){t.uniform2uiv(this.addr,e)}function JD(t,e){t.uniform3uiv(this.addr,e)}function e3(t,e){t.uniform4uiv(this.addr,e)}function t3(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||fM,s[o])}function n3(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||mM,s[o])}function i3(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||gM,s[o])}function r3(t,e,n){const i=this.cache,r=e.length,s=pu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||pM,s[o])}function s3(t){switch(t){case 5126:return VD;case 35664:return zD;case 35665:return HD;case 35666:return GD;case 35674:return WD;case 35675:return jD;case 35676:return XD;case 5124:case 35670:return YD;case 35667:case 35671:return qD;case 35668:case 35672:return $D;case 35669:case 35673:return KD;case 5125:return ZD;case 36294:return QD;case 36295:return JD;case 36296:return e3;case 35678:case 36198:case 36298:case 36306:case 35682:return t3;case 35679:case 36299:case 36307:return n3;case 35680:case 36300:case 36308:case 36293:return i3;case 36289:case 36303:case 36311:case 36292:return r3}}class o3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BD(n.type)}}class a3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=s3(n.type)}}class l3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function R0(t,e){t.seq.push(e),t.map[e.id]=e}function c3(t,e,n){const i=t.name,r=i.length;for(Ud.lastIndex=0;;){const s=Ud.exec(i),o=Ud.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){R0(n,c===void 0?new o3(a,t,e):new a3(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new l3(a),R0(n,d)),n=d}}}class Zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);c3(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function P0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const u3=37297;let d3=0;function f3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function h3(t){const e=Ke.getPrimaries(Ke.workingColorSpace),n=Ke.getPrimaries(t);let i;switch(e===n?i="":e===Fc&&n===Uc?i="LinearDisplayP3ToLinearSRGB":e===Uc&&n===Fc&&(i="LinearSRGBToLinearDisplayP3"),t){case mr:case fu:return[i,"LinearTransferOETF"];case Qn:case Np:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function b0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+f3(t.getShaderSource(e),o)}else return r}function p3(t,e){const n=h3(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function m3(t,e){let n;switch(e){case x2:n="Linear";break;case S2:n="Reinhard";break;case M2:n="OptimizedCineon";break;case E2:n="ACESFilmic";break;case w2:n="AgX";break;case A2:n="Neutral";break;case T2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function g3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function v3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Bo(t){return t!==""}function L0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y3=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(t){return t.replace(y3,S3)}const x3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function S3(t,e){let n=Ue[e];if(n===void 0){const i=x3.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return eh(n)}const M3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N0(t){return t.replace(M3,E3)}function E3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function I0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function T3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===zS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===XR?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function w3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function C3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case HS:e="ENVMAP_BLENDING_MULTIPLY";break;case _2:e="ENVMAP_BLENDING_MIX";break;case y2:e="ENVMAP_BLENDING_ADD";break}return e}function R3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function P3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=T3(n),c=w3(n),u=A3(n),d=C3(n),f=R3(n),p=g3(n),_=v3(s),y=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Bo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Bo).join(`
`),h.length>0&&(h+=`
`)):(m=[I0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),h=[I0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rr?"#define TONE_MAPPING":"",n.toneMapping!==rr?Ue.tonemapping_pars_fragment:"",n.toneMapping!==rr?m3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,p3("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bo).join(`
`)),o=eh(o),o=L0(o,n),o=D0(o,n),a=eh(a),a=L0(a,n),a=D0(a,n),o=N0(o),a=N0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=v+m+o,S=v+h+a,C=P0(r,r.VERTEX_SHADER,g),w=P0(r,r.FRAGMENT_SHADER,S);r.attachShader(y,C),r.attachShader(y,w),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(I){if(t.debug.checkShaderErrors){const j=r.getProgramInfoLog(y).trim(),N=r.getShaderInfoLog(C).trim(),Y=r.getShaderInfoLog(w).trim();let q=!0,te=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,w);else{const X=b0(r,C,"vertex"),D=b0(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+X+`
`+D)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(N===""||Y==="")&&(te=!1);te&&(I.diagnostics={runnable:q,programLog:j,vertexShader:{log:N,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(C),r.deleteShader(w),b=new Zl(r,y),E=_3(r,y)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,u3)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=d3++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=w,this}let b3=0;class L3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new D3(e),n.set(e,i)),i}}class D3{constructor(e){this.id=b3++,this.code=e,this.usedTimes=0}}function N3(t,e,n,i,r,s,o){const a=new nM,l=new L3,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,x,I,j,N){const Y=j.fog,q=N.geometry,te=E.isMeshStandardMaterial?j.environment:null,X=(E.isMeshStandardMaterial?n:e).get(E.envMap||te),D=X&&X.mapping===du?X.image.height:null,H=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const G=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ie=G!==void 0?G.length:0;let he=0;q.morphAttributes.position!==void 0&&(he=1),q.morphAttributes.normal!==void 0&&(he=2),q.morphAttributes.color!==void 0&&(he=3);let Ve,W,ee,ce;if(H){const kt=Jn[H];Ve=kt.vertexShader,W=kt.fragmentShader}else Ve=E.vertexShader,W=E.fragmentShader,l.update(E),ee=l.getVertexShaderID(E),ce=l.getFragmentShaderID(E);const re=t.getRenderTarget(),Te=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,He=!!E.map,O=!!E.matcap,ke=!!X,Ae=!!E.aoMap,Tt=!!E.lightMap,Pe=!!E.bumpMap,Ze=!!E.normalMap,P=!!E.displacementMap,M=!!E.emissiveMap,z=!!E.metalnessMap,$=!!E.roughnessMap,Z=E.anisotropy>0,Q=E.clearcoat>0,Ee=E.iridescence>0,ne=E.sheen>0,ye=E.transmission>0,we=Z&&!!E.anisotropyMap,ae=Q&&!!E.clearcoatMap,fe=Q&&!!E.clearcoatNormalMap,be=Q&&!!E.clearcoatRoughnessMap,pe=Ee&&!!E.iridescenceMap,me=Ee&&!!E.iridescenceThicknessMap,ze=ne&&!!E.sheenColorMap,Ge=ne&&!!E.sheenRoughnessMap,qe=!!E.specularMap,Xe=!!E.specularColorMap,st=!!E.specularIntensityMap,ve=ye&&!!E.transmissionMap,L=ye&&!!E.thicknessMap,oe=!!E.gradientMap,se=!!E.alphaMap,_e=E.alphaTest>0,xe=!!E.alphaHash,Je=!!E.extensions;let ot=rr;E.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ot=t.toneMapping);const ut={shaderID:H,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:W,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Re,instancing:Te,instancingColor:Te&&N.instanceColor!==null,instancingMorph:Te&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:mr,alphaToCoverage:!!E.alphaToCoverage,map:He,matcap:O,envMap:ke,envMapMode:ke&&X.mapping,envMapCubeUVHeight:D,aoMap:Ae,lightMap:Tt,bumpMap:Pe,normalMap:Ze,displacementMap:f&&P,emissiveMap:M,normalMapObjectSpace:Ze&&E.normalMapType===z2,normalMapTangentSpace:Ze&&E.normalMapType===V2,metalnessMap:z,roughnessMap:$,anisotropy:Z,anisotropyMap:we,clearcoat:Q,clearcoatMap:ae,clearcoatNormalMap:fe,clearcoatRoughnessMap:be,iridescence:Ee,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:ne,sheenColorMap:ze,sheenRoughnessMap:Ge,specularMap:qe,specularColorMap:Xe,specularIntensityMap:st,transmission:ye,transmissionMap:ve,thicknessMap:L,gradientMap:oe,opaque:E.transparent===!1&&E.blending===Gs&&E.alphaToCoverage===!1,alphaMap:se,alphaTest:_e,alphaHash:xe,combine:E.combine,mapUv:He&&y(E.map.channel),aoMapUv:Ae&&y(E.aoMap.channel),lightMapUv:Tt&&y(E.lightMap.channel),bumpMapUv:Pe&&y(E.bumpMap.channel),normalMapUv:Ze&&y(E.normalMap.channel),displacementMapUv:P&&y(E.displacementMap.channel),emissiveMapUv:M&&y(E.emissiveMap.channel),metalnessMapUv:z&&y(E.metalnessMap.channel),roughnessMapUv:$&&y(E.roughnessMap.channel),anisotropyMapUv:we&&y(E.anisotropyMap.channel),clearcoatMapUv:ae&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:fe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:me&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&y(E.sheenRoughnessMap.channel),specularMapUv:qe&&y(E.specularMap.channel),specularColorMapUv:Xe&&y(E.specularColorMap.channel),specularIntensityMapUv:st&&y(E.specularIntensityMap.channel),transmissionMapUv:ve&&y(E.transmissionMap.channel),thicknessMapUv:L&&y(E.thicknessMap.channel),alphaMapUv:se&&y(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ze||Z),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(He||se),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:he,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,useLegacyLights:t._useLegacyLights,decodeVideoTexture:He&&E.map.isVideoTexture===!0&&Ke.getTransfer(E.map.colorSpace)===it,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yi,flipSided:E.side===Xt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Je&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function h(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)x.push(I),x.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(v(x,E),g(x,E),x.push(t.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function v(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function g(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),E.push(a.mask)}function S(E){const x=_[E.type];let I;if(x){const j=Jn[x];I=mP.clone(j.uniforms)}else I=E.uniforms;return I}function C(E,x){let I;for(let j=0,N=u.length;j<N;j++){const Y=u[j];if(Y.cacheKey===x){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new P3(t,x,E,s),u.push(I)),I}function w(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:b}}function I3(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function U3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function U0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function F0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,_,y,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:y,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=y,h.group=m),e++,h}function a(d,f,p,_,y,m){const h=o(d,f,p,_,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,_,y,m){const h=o(d,f,p,_,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||U3),i.length>1&&i.sort(f||U0),r.length>1&&r.sort(f||U0)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function F3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new F0,t.set(i,[o])):r>=s.length?(o=new F0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function O3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ye};break;case"SpotLight":n={position:new F,direction:new F,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function k3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let B3=0;function V3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function z3(t){const e=new O3,n=k3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new St,o=new St;function a(c,u){let d=0,f=0,p=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let _=0,y=0,m=0,h=0,v=0,g=0,S=0,C=0,w=0,R=0,b=0;c.sort(V3);const E=u===!0?Math.PI:1;for(let I=0,j=c.length;I<j;I++){const N=c[I],Y=N.color,q=N.intensity,te=N.distance,X=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=Y.r*q*E,f+=Y.g*q*E,p+=Y.b*q*E;else if(N.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(N.sh.coefficients[D],q);b++}else if(N.isDirectionalLight){const D=e.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity*E),N.castShadow){const H=N.shadow,G=n.get(N);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,i.directionalShadow[_]=G,i.directionalShadowMap[_]=X,i.directionalShadowMatrix[_]=N.shadow.matrix,g++}i.directional[_]=D,_++}else if(N.isSpotLight){const D=e.get(N);D.position.setFromMatrixPosition(N.matrixWorld),D.color.copy(Y).multiplyScalar(q*E),D.distance=te,D.coneCos=Math.cos(N.angle),D.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),D.decay=N.decay,i.spot[m]=D;const H=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,H.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[m]=H.matrix,N.castShadow){const G=n.get(N);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,i.spotShadow[m]=G,i.spotShadowMap[m]=X,C++}m++}else if(N.isRectAreaLight){const D=e.get(N);D.color.copy(Y).multiplyScalar(q),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),i.rectArea[h]=D,h++}else if(N.isPointLight){const D=e.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity*E),D.distance=N.distance,D.decay=N.decay,N.castShadow){const H=N.shadow,G=n.get(N);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,i.pointShadow[y]=G,i.pointShadowMap[y]=X,i.pointShadowMatrix[y]=N.shadow.matrix,S++}i.point[y]=D,y++}else if(N.isHemisphereLight){const D=e.get(N);D.skyColor.copy(N.color).multiplyScalar(q*E),D.groundColor.copy(N.groundColor).multiplyScalar(q*E),i.hemi[v]=D,v++}}h>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const x=i.hash;(x.directionalLength!==_||x.pointLength!==y||x.spotLength!==m||x.rectAreaLength!==h||x.hemiLength!==v||x.numDirectionalShadows!==g||x.numPointShadows!==S||x.numSpotShadows!==C||x.numSpotMaps!==w||x.numLightProbes!==b)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=h,i.point.length=y,i.hemi.length=v,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=b,x.directionalLength=_,x.pointLength=y,x.spotLength=m,x.rectAreaLength=h,x.hemiLength=v,x.numDirectionalShadows=g,x.numPointShadows=S,x.numSpotShadows=C,x.numSpotMaps=w,x.numLightProbes=b,i.version=B3++)}function l(c,u){let d=0,f=0,p=0,_=0,y=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const g=c[h];if(g.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(g.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(g.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function O0(t){const e=new z3(t),n=[],i=[];function r(){n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function H3(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new O0(t),e.set(r,[a])):s>=o.length?(a=new O0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class G3 extends po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W3 extends po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const j3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Y3(t,e,n){let i=new cM;const r=new je,s=new je,o=new Ut,a=new G3({depthPacking:B2}),l=new W3,c={},u=n.maxTextureSize,d={[cr]:Xt,[Xt]:cr,[yi]:yi},f=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:j3,fragmentShader:X3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new mn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zS;let h=this.type;this.render=function(w,R,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=t.getRenderTarget(),x=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),j=t.state;j.setBlending(ir),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const N=h!==gi&&this.type===gi,Y=h===gi&&this.type!==gi;for(let q=0,te=w.length;q<te;q++){const X=w[q],D=X.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const H=D.getFrameExtents();if(r.multiply(H),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,D.mapSize.y=s.y)),D.map===null||N===!0||Y===!0){const ie=this.type!==gi?{minFilter:Ln,magFilter:Ln}:{};D.map!==null&&D.map.dispose(),D.map=new qr(r.x,r.y,ie),D.map.texture.name=X.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const G=D.getViewportCount();for(let ie=0;ie<G;ie++){const he=D.getViewport(ie);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),j.viewport(o),D.updateMatrices(X,ie),i=D.getFrustum(),S(R,b,D.camera,X,this.type)}D.isPointLightShadow!==!0&&this.type===gi&&v(D,b),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(E,x,I)};function v(w,R){const b=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qr(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,b,f,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,b,p,y,null)}function g(w,R,b,E){let x=null;const I=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)x=I;else if(x=b.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const j=x.uuid,N=R.uuid;let Y=c[j];Y===void 0&&(Y={},c[j]=Y);let q=Y[N];q===void 0&&(q=x.clone(),Y[N]=q,R.addEventListener("dispose",C)),x=q}if(x.visible=R.visible,x.wireframe=R.wireframe,E===gi?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:d[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,b.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const j=t.properties.get(x);j.light=b}return x}function S(w,R,b,E,x){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===gi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const N=e.update(w),Y=w.material;if(Array.isArray(Y)){const q=N.groups;for(let te=0,X=q.length;te<X;te++){const D=q[te],H=Y[D.materialIndex];if(H&&H.visible){const G=g(w,H,E,x);w.onBeforeShadow(t,w,R,b,N,G,D),t.renderBufferDirect(b,null,N,G,w,D),w.onAfterShadow(t,w,R,b,N,G,D)}}}else if(Y.visible){const q=g(w,Y,E,x);w.onBeforeShadow(t,w,R,b,N,q,null),t.renderBufferDirect(b,null,N,q,w,null),w.onAfterShadow(t,w,R,b,N,q,null)}}const j=w.children;for(let N=0,Y=j.length;N<Y;N++)S(j[N],R,b,E,x)}function C(w){w.target.removeEventListener("dispose",C);for(const b in c){const E=c[b],x=w.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function q3(t){function e(){let L=!1;const oe=new Ut;let se=null;const _e=new Ut(0,0,0,0);return{setMask:function(xe){se!==xe&&!L&&(t.colorMask(xe,xe,xe,xe),se=xe)},setLocked:function(xe){L=xe},setClear:function(xe,Je,ot,ut,kt){kt===!0&&(xe*=ut,Je*=ut,ot*=ut),oe.set(xe,Je,ot,ut),_e.equals(oe)===!1&&(t.clearColor(xe,Je,ot,ut),_e.copy(oe))},reset:function(){L=!1,se=null,_e.set(-1,0,0,0)}}}function n(){let L=!1,oe=null,se=null,_e=null;return{setTest:function(xe){xe?ce(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(xe){oe!==xe&&!L&&(t.depthMask(xe),oe=xe)},setFunc:function(xe){if(se!==xe){switch(xe){case d2:t.depthFunc(t.NEVER);break;case f2:t.depthFunc(t.ALWAYS);break;case h2:t.depthFunc(t.LESS);break;case Dc:t.depthFunc(t.LEQUAL);break;case p2:t.depthFunc(t.EQUAL);break;case m2:t.depthFunc(t.GEQUAL);break;case g2:t.depthFunc(t.GREATER);break;case v2:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=xe}},setLocked:function(xe){L=xe},setClear:function(xe){_e!==xe&&(t.clearDepth(xe),_e=xe)},reset:function(){L=!1,oe=null,se=null,_e=null}}}function i(){let L=!1,oe=null,se=null,_e=null,xe=null,Je=null,ot=null,ut=null,kt=null;return{setTest:function(tt){L||(tt?ce(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(tt){oe!==tt&&!L&&(t.stencilMask(tt),oe=tt)},setFunc:function(tt,qn,$n){(se!==tt||_e!==qn||xe!==$n)&&(t.stencilFunc(tt,qn,$n),se=tt,_e=qn,xe=$n)},setOp:function(tt,qn,$n){(Je!==tt||ot!==qn||ut!==$n)&&(t.stencilOp(tt,qn,$n),Je=tt,ot=qn,ut=$n)},setLocked:function(tt){L=tt},setClear:function(tt){kt!==tt&&(t.clearStencil(tt),kt=tt)},reset:function(){L=!1,oe=null,se=null,_e=null,xe=null,Je=null,ot=null,ut=null,kt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,_=!1,y=null,m=null,h=null,v=null,g=null,S=null,C=null,w=new Ye(0,0,0),R=0,b=!1,E=null,x=null,I=null,j=null,N=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=te>=2);let D=null,H={};const G=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),he=new Ut().fromArray(G),Ve=new Ut().fromArray(ie);function W(L,oe,se,_e){const xe=new Uint8Array(4),Je=t.createTexture();t.bindTexture(L,Je),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ot=0;ot<se;ot++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(oe+ot,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return Je}const ee={};ee[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),s.setFunc(Dc),Pe(!1),Ze(yv),ce(t.CULL_FACE),Ae(ir);function ce(L){c[L]!==!0&&(t.enable(L),c[L]=!0)}function re(L){c[L]!==!1&&(t.disable(L),c[L]=!1)}function Te(L,oe){return u[L]!==oe?(t.bindFramebuffer(L,oe),u[L]=oe,L===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=oe),L===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function Re(L,oe){let se=f,_e=!1;if(L){se=d.get(oe),se===void 0&&(se=[],d.set(oe,se));const xe=L.textures;if(se.length!==xe.length||se[0]!==t.COLOR_ATTACHMENT0){for(let Je=0,ot=xe.length;Je<ot;Je++)se[Je]=t.COLOR_ATTACHMENT0+Je;se.length=xe.length,_e=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,_e=!0);_e&&t.drawBuffers(se)}function He(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const O={[Lr]:t.FUNC_ADD,[qR]:t.FUNC_SUBTRACT,[$R]:t.FUNC_REVERSE_SUBTRACT};O[KR]=t.MIN,O[ZR]=t.MAX;const ke={[QR]:t.ZERO,[JR]:t.ONE,[e2]:t.SRC_COLOR,[Yf]:t.SRC_ALPHA,[o2]:t.SRC_ALPHA_SATURATE,[r2]:t.DST_COLOR,[n2]:t.DST_ALPHA,[t2]:t.ONE_MINUS_SRC_COLOR,[qf]:t.ONE_MINUS_SRC_ALPHA,[s2]:t.ONE_MINUS_DST_COLOR,[i2]:t.ONE_MINUS_DST_ALPHA,[a2]:t.CONSTANT_COLOR,[l2]:t.ONE_MINUS_CONSTANT_COLOR,[c2]:t.CONSTANT_ALPHA,[u2]:t.ONE_MINUS_CONSTANT_ALPHA};function Ae(L,oe,se,_e,xe,Je,ot,ut,kt,tt){if(L===ir){_===!0&&(re(t.BLEND),_=!1);return}if(_===!1&&(ce(t.BLEND),_=!0),L!==YR){if(L!==y||tt!==b){if((m!==Lr||g!==Lr)&&(t.blendEquation(t.FUNC_ADD),m=Lr,g=Lr),tt)switch(L){case Gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xv:t.blendFunc(t.ONE,t.ONE);break;case Sv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Sv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}h=null,v=null,S=null,C=null,w.set(0,0,0),R=0,y=L,b=tt}return}xe=xe||oe,Je=Je||se,ot=ot||_e,(oe!==m||xe!==g)&&(t.blendEquationSeparate(O[oe],O[xe]),m=oe,g=xe),(se!==h||_e!==v||Je!==S||ot!==C)&&(t.blendFuncSeparate(ke[se],ke[_e],ke[Je],ke[ot]),h=se,v=_e,S=Je,C=ot),(ut.equals(w)===!1||kt!==R)&&(t.blendColor(ut.r,ut.g,ut.b,kt),w.copy(ut),R=kt),y=L,b=!1}function Tt(L,oe){L.side===yi?re(t.CULL_FACE):ce(t.CULL_FACE);let se=L.side===Xt;oe&&(se=!se),Pe(se),L.blending===Gs&&L.transparent===!1?Ae(ir):Ae(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const _e=L.stencilWrite;o.setTest(_e),_e&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),M(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(L){E!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),E=L)}function Ze(L){L!==WR?(ce(t.CULL_FACE),L!==x&&(L===yv?t.cullFace(t.BACK):L===jR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),x=L}function P(L){L!==I&&(q&&t.lineWidth(L),I=L)}function M(L,oe,se){L?(ce(t.POLYGON_OFFSET_FILL),(j!==oe||N!==se)&&(t.polygonOffset(oe,se),j=oe,N=se)):re(t.POLYGON_OFFSET_FILL)}function z(L){L?ce(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function $(L){L===void 0&&(L=t.TEXTURE0+Y-1),D!==L&&(t.activeTexture(L),D=L)}function Z(L,oe,se){se===void 0&&(D===null?se=t.TEXTURE0+Y-1:se=D);let _e=H[se];_e===void 0&&(_e={type:void 0,texture:void 0},H[se]=_e),(_e.type!==L||_e.texture!==oe)&&(D!==se&&(t.activeTexture(se),D=se),t.bindTexture(L,oe||ee[L]),_e.type=L,_e.texture=oe)}function Q(){const L=H[D];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(L){he.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),he.copy(L))}function qe(L){Ve.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ve.copy(L))}function Xe(L,oe){let se=l.get(oe);se===void 0&&(se=new WeakMap,l.set(oe,se));let _e=se.get(L);_e===void 0&&(_e=t.getUniformBlockIndex(oe,L.name),se.set(L,_e))}function st(L,oe){const _e=l.get(oe).get(L);a.get(oe)!==_e&&(t.uniformBlockBinding(oe,_e,L.__bindingPointIndex),a.set(oe,_e))}function ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,H={},u={},d=new WeakMap,f=[],p=null,_=!1,y=null,m=null,h=null,v=null,g=null,S=null,C=null,w=new Ye(0,0,0),R=0,b=!1,E=null,x=null,I=null,j=null,N=null,he.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:re,bindFramebuffer:Te,drawBuffers:Re,useProgram:He,setBlending:Ae,setMaterial:Tt,setFlipSided:Pe,setCullFace:Ze,setLineWidth:P,setPolygonOffset:M,setScissorTest:z,activeTexture:$,bindTexture:Z,unbindTexture:Q,compressedTexImage2D:Ee,compressedTexImage3D:ne,texImage2D:me,texImage3D:ze,updateUBOMapping:Xe,uniformBlockBinding:st,texStorage2D:be,texStorage3D:pe,texSubImage2D:ye,texSubImage3D:we,compressedTexSubImage2D:ae,compressedTexSubImage3D:fe,scissor:Ge,viewport:qe,reset:ve}}function $3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return p?new OffscreenCanvas(P,M):kc("canvas")}function y(P,M,z){let $=1;const Z=Ze(P);if((Z.width>z||Z.height>z)&&($=z/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor($*Z.width),Ee=Math.floor($*Z.height);d===void 0&&(d=_(Q,Ee));const ne=M?_(Q,Ee):d;return ne.width=Q,ne.height=Ee,ne.getContext("2d").drawImage(P,0,0,Q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Q+"x"+Ee+")."),ne}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Ln&&P.minFilter!==Wn}function h(P){t.generateMipmap(P)}function v(P,M,z,$,Z=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=M;if(M===t.RED&&(z===t.FLOAT&&(Q=t.R32F),z===t.HALF_FLOAT&&(Q=t.R16F),z===t.UNSIGNED_BYTE&&(Q=t.R8)),M===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.R8UI),z===t.UNSIGNED_SHORT&&(Q=t.R16UI),z===t.UNSIGNED_INT&&(Q=t.R32UI),z===t.BYTE&&(Q=t.R8I),z===t.SHORT&&(Q=t.R16I),z===t.INT&&(Q=t.R32I)),M===t.RG&&(z===t.FLOAT&&(Q=t.RG32F),z===t.HALF_FLOAT&&(Q=t.RG16F),z===t.UNSIGNED_BYTE&&(Q=t.RG8)),M===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RG8UI),z===t.UNSIGNED_SHORT&&(Q=t.RG16UI),z===t.UNSIGNED_INT&&(Q=t.RG32UI),z===t.BYTE&&(Q=t.RG8I),z===t.SHORT&&(Q=t.RG16I),z===t.INT&&(Q=t.RG32I)),M===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),M===t.RGBA){const Ee=Z?Ic:Ke.getTransfer($);z===t.FLOAT&&(Q=t.RGBA32F),z===t.HALF_FLOAT&&(Q=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Q=Ee===it?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ln&&P.minFilter!==Wn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function S(P){const M=P.target;M.removeEventListener("dispose",S),w(M),M.isVideoTexture&&u.delete(M)}function C(P){const M=P.target;M.removeEventListener("dispose",C),b(M)}function w(P){const M=i.get(P);if(M.__webglInit===void 0)return;const z=P.source,$=f.get(z);if($){const Z=$[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(P),Object.keys($).length===0&&f.delete(z)}i.remove(P)}function R(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const z=P.source,$=f.get(z);delete $[M.__cacheKey],o.memory.textures--}function b(P){const M=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let Z=0;Z<M.__webglFramebuffer[$].length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[$][Z]);else t.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)t.deleteFramebuffer(M.__webglFramebuffer[$]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=P.textures;for(let $=0,Z=z.length;$<Z;$++){const Q=i.get(z[$]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(z[$])}i.remove(P)}let E=0;function x(){E=0}function I(){const P=E;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),E+=1,P}function j(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function N(P,M){const z=i.get(P);if(P.isVideoTexture&&Tt(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(z,P,M);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+M)}function Y(P,M){const z=i.get(P);if(P.version>0&&z.__version!==P.version){he(z,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+M)}function q(P,M){const z=i.get(P);if(P.version>0&&z.__version!==P.version){he(z,P,M);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+M)}function te(P,M){const z=i.get(P);if(P.version>0&&z.__version!==P.version){Ve(z,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+M)}const X={[Zf]:t.REPEAT,[Or]:t.CLAMP_TO_EDGE,[Qf]:t.MIRRORED_REPEAT},D={[Ln]:t.NEAREST,[C2]:t.NEAREST_MIPMAP_NEAREST,[cl]:t.NEAREST_MIPMAP_LINEAR,[Wn]:t.LINEAR,[rd]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},H={[H2]:t.NEVER,[q2]:t.ALWAYS,[G2]:t.LESS,[QS]:t.LEQUAL,[W2]:t.EQUAL,[Y2]:t.GEQUAL,[j2]:t.GREATER,[X2]:t.NOTEQUAL};function G(P,M){if(M.type===qi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Wn||M.magFilter===rd||M.magFilter===cl||M.magFilter===kr||M.minFilter===Wn||M.minFilter===rd||M.minFilter===cl||M.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,X[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,X[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,X[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,D[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,D[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,H[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ln||M.minFilter!==cl&&M.minFilter!==kr||M.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ie(P,M){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",S));const $=M.source;let Z=f.get($);Z===void 0&&(Z={},f.set($,Z));const Q=j(M);if(Q!==P.__cacheKey){Z[Q]===void 0&&(Z[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[Q].usedTimes++;const Ee=Z[P.__cacheKey];Ee!==void 0&&(Z[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&R(M)),P.__cacheKey=Q,P.__webglTexture=Z[Q].texture}return z}function he(P,M,z){let $=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=t.TEXTURE_3D);const Z=ie(P,M),Q=M.source;n.bindTexture($,P.__webglTexture,t.TEXTURE0+z);const Ee=i.get(Q);if(Q.version!==Ee.__version||Z===!0){n.activeTexture(t.TEXTURE0+z);const ne=Ke.getPrimaries(Ke.workingColorSpace),ye=M.colorSpace===ji?null:Ke.getPrimaries(M.colorSpace),we=M.colorSpace===ji||ne===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ae=y(M.image,!1,r.maxTextureSize);ae=Pe(M,ae);const fe=s.convert(M.format,M.colorSpace),be=s.convert(M.type);let pe=v(M.internalFormat,fe,be,M.colorSpace,M.isVideoTexture);G($,M);let me;const ze=M.mipmaps,Ge=M.isVideoTexture!==!0&&pe!==ZS,qe=Ee.__version===void 0||Z===!0,Xe=Q.dataReady,st=g(M,ae);if(M.isDepthTexture)pe=t.DEPTH_COMPONENT16,M.type===qi?pe=t.DEPTH_COMPONENT32F:M.type===so?pe=t.DEPTH_COMPONENT24:M.type===Na&&(pe=t.DEPTH24_STENCIL8),qe&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,pe,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,pe,ae.width,ae.height,0,fe,be,null));else if(M.isDataTexture)if(ze.length>0){Ge&&qe&&n.texStorage2D(t.TEXTURE_2D,st,pe,ze[0].width,ze[0].height);for(let ve=0,L=ze.length;ve<L;ve++)me=ze[ve],Ge?Xe&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,me.width,me.height,fe,be,me.data):n.texImage2D(t.TEXTURE_2D,ve,pe,me.width,me.height,0,fe,be,me.data);M.generateMipmaps=!1}else Ge?(qe&&n.texStorage2D(t.TEXTURE_2D,st,pe,ae.width,ae.height),Xe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,fe,be,ae.data)):n.texImage2D(t.TEXTURE_2D,0,pe,ae.width,ae.height,0,fe,be,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ge&&qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,st,pe,ze[0].width,ze[0].height,ae.depth);for(let ve=0,L=ze.length;ve<L;ve++)me=ze[ve],M.format!==ni?fe!==null?Ge?Xe&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,me.width,me.height,ae.depth,fe,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ve,pe,me.width,me.height,ae.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?Xe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,me.width,me.height,ae.depth,fe,be,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ve,pe,me.width,me.height,ae.depth,0,fe,be,me.data)}else{Ge&&qe&&n.texStorage2D(t.TEXTURE_2D,st,pe,ze[0].width,ze[0].height);for(let ve=0,L=ze.length;ve<L;ve++)me=ze[ve],M.format!==ni?fe!==null?Ge?Xe&&n.compressedTexSubImage2D(t.TEXTURE_2D,ve,0,0,me.width,me.height,fe,me.data):n.compressedTexImage2D(t.TEXTURE_2D,ve,pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?Xe&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,me.width,me.height,fe,be,me.data):n.texImage2D(t.TEXTURE_2D,ve,pe,me.width,me.height,0,fe,be,me.data)}else if(M.isDataArrayTexture)Ge?(qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,st,pe,ae.width,ae.height,ae.depth),Xe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,fe,be,ae.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,ae.width,ae.height,ae.depth,0,fe,be,ae.data);else if(M.isData3DTexture)Ge?(qe&&n.texStorage3D(t.TEXTURE_3D,st,pe,ae.width,ae.height,ae.depth),Xe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,fe,be,ae.data)):n.texImage3D(t.TEXTURE_3D,0,pe,ae.width,ae.height,ae.depth,0,fe,be,ae.data);else if(M.isFramebufferTexture){if(qe)if(Ge)n.texStorage2D(t.TEXTURE_2D,st,pe,ae.width,ae.height);else{let ve=ae.width,L=ae.height;for(let oe=0;oe<st;oe++)n.texImage2D(t.TEXTURE_2D,oe,pe,ve,L,0,fe,be,null),ve>>=1,L>>=1}}else if(ze.length>0){if(Ge&&qe){const ve=Ze(ze[0]);n.texStorage2D(t.TEXTURE_2D,st,pe,ve.width,ve.height)}for(let ve=0,L=ze.length;ve<L;ve++)me=ze[ve],Ge?Xe&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,fe,be,me):n.texImage2D(t.TEXTURE_2D,ve,pe,fe,be,me);M.generateMipmaps=!1}else if(Ge){if(qe){const ve=Ze(ae);n.texStorage2D(t.TEXTURE_2D,st,pe,ve.width,ve.height)}Xe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,be,ae)}else n.texImage2D(t.TEXTURE_2D,0,pe,fe,be,ae);m(M)&&h($),Ee.__version=Q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ve(P,M,z){if(M.image.length!==6)return;const $=ie(P,M),Z=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+z);const Q=i.get(Z);if(Z.version!==Q.__version||$===!0){n.activeTexture(t.TEXTURE0+z);const Ee=Ke.getPrimaries(Ke.workingColorSpace),ne=M.colorSpace===ji?null:Ke.getPrimaries(M.colorSpace),ye=M.colorSpace===ji||Ee===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let L=0;L<6;L++)!we&&!ae?fe[L]=y(M.image[L],!0,r.maxCubemapSize):fe[L]=ae?M.image[L].image:M.image[L],fe[L]=Pe(M,fe[L]);const be=fe[0],pe=s.convert(M.format,M.colorSpace),me=s.convert(M.type),ze=v(M.internalFormat,pe,me,M.colorSpace),Ge=M.isVideoTexture!==!0,qe=Q.__version===void 0||$===!0,Xe=Z.dataReady;let st=g(M,be);G(t.TEXTURE_CUBE_MAP,M);let ve;if(we){Ge&&qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,st,ze,be.width,be.height);for(let L=0;L<6;L++){ve=fe[L].mipmaps;for(let oe=0;oe<ve.length;oe++){const se=ve[oe];M.format!==ni?pe!==null?Ge?Xe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,oe,0,0,se.width,se.height,pe,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,oe,ze,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?Xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,oe,0,0,se.width,se.height,pe,me,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,oe,ze,se.width,se.height,0,pe,me,se.data)}}}else{if(ve=M.mipmaps,Ge&&qe){ve.length>0&&st++;const L=Ze(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,st,ze,L.width,L.height)}for(let L=0;L<6;L++)if(ae){Ge?Xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,fe[L].width,fe[L].height,pe,me,fe[L].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,ze,fe[L].width,fe[L].height,0,pe,me,fe[L].data);for(let oe=0;oe<ve.length;oe++){const _e=ve[oe].image[L].image;Ge?Xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,oe+1,0,0,_e.width,_e.height,pe,me,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,oe+1,ze,_e.width,_e.height,0,pe,me,_e.data)}}else{Ge?Xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,pe,me,fe[L]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,ze,pe,me,fe[L]);for(let oe=0;oe<ve.length;oe++){const se=ve[oe];Ge?Xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,oe+1,0,0,pe,me,se.image[L]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,oe+1,ze,pe,me,se.image[L])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),Q.__version=Z.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function W(P,M,z,$,Z,Q){const Ee=s.convert(z.format,z.colorSpace),ne=s.convert(z.type),ye=v(z.internalFormat,Ee,ne,z.colorSpace);if(!i.get(M).__hasExternalTextures){const ae=Math.max(1,M.width>>Q),fe=Math.max(1,M.height>>Q);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,Q,ye,ae,fe,M.depth,0,Ee,ne,null):n.texImage2D(Z,Q,ye,ae,fe,0,Ee,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Ae(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,Z,i.get(z).__webglTexture,0,ke(M)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,Z,i.get(z).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ee(P,M,z){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer&&!M.stencilBuffer){let $=t.DEPTH_COMPONENT24;if(z||Ae(M)){const Z=M.depthTexture;Z&&Z.isDepthTexture&&(Z.type===qi?$=t.DEPTH_COMPONENT32F:Z.type===so&&($=t.DEPTH_COMPONENT24));const Q=ke(M);Ae(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,$,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,$,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,$,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,P)}else if(M.depthBuffer&&M.stencilBuffer){const $=ke(M);z&&Ae(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$,t.DEPTH24_STENCIL8,M.width,M.height):Ae(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,P)}else{const $=M.textures;for(let Z=0;Z<$.length;Z++){const Q=$[Z],Ee=s.convert(Q.format,Q.colorSpace),ne=s.convert(Q.type),ye=v(Q.internalFormat,Ee,ne,Q.colorSpace),we=ke(M);z&&Ae(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,ye,M.width,M.height):Ae(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,ye,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ye,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N(M.depthTexture,0);const $=i.get(M.depthTexture).__webglTexture,Z=ke(M);if(M.depthTexture.format===Ws)Ae(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(M.depthTexture.format===Sa)Ae(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function re(P){const M=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,P)}else if(z){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]=t.createRenderbuffer(),ee(M.__webglDepthbuffer[$],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ee(M.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(P,M,z){const $=i.get(P);M!==void 0&&W($.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&re(P)}function Re(P){const M=P.texture,z=i.get(P),$=i.get(M);P.addEventListener("dispose",C);const Z=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Ee=Z.length>1;if(Ee||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=M.version,o.memory.textures++),Q){z.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ne]=[];for(let ye=0;ye<M.mipmaps.length;ye++)z.__webglFramebuffer[ne][ye]=t.createFramebuffer()}else z.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)z.__webglFramebuffer[ne]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ne=0,ye=Z.length;ne<ye;ne++){const we=i.get(Z[ne]);we.__webglTexture===void 0&&(we.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&Ae(P)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ne=0;ne<Z.length;ne++){const ye=Z[ne];z.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ne]);const we=s.convert(ye.format,ye.colorSpace),ae=s.convert(ye.type),fe=v(ye.internalFormat,we,ae,ye.colorSpace,P.isXRRenderTarget===!0),be=ke(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,fe,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,z.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),ee(z.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),G(t.TEXTURE_CUBE_MAP,M);for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)W(z.__webglFramebuffer[ne][ye],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye);else W(z.__webglFramebuffer[ne],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ne=0,ye=Z.length;ne<ye;ne++){const we=Z[ne],ae=i.get(we);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),G(t.TEXTURE_2D,we),W(z.__webglFramebuffer,P,we,t.COLOR_ATTACHMENT0+ne,t.TEXTURE_2D,0),m(we)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ne=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,$.__webglTexture),G(ne,M),M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)W(z.__webglFramebuffer[ye],P,M,t.COLOR_ATTACHMENT0,ne,ye);else W(z.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,ne,0);m(M)&&h(ne),n.unbindTexture()}P.depthBuffer&&re(P)}function He(P){const M=P.textures;for(let z=0,$=M.length;z<$;z++){const Z=M[z];if(m(Z)){const Q=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(Z).__webglTexture;n.bindTexture(Q,Ee),h(Q),n.unbindTexture()}}}function O(P){if(P.samples>0&&Ae(P)===!1){const M=P.textures,z=P.width,$=P.height;let Z=t.COLOR_BUFFER_BIT;const Q=[],Ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=i.get(P),ye=M.length>1;if(ye)for(let we=0;we<M.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let we=0;we<M.length;we++){Q.push(t.COLOR_ATTACHMENT0+we),P.depthBuffer&&Q.push(Ee);const ae=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(ae===!1&&(P.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&ne.__isTransmissionRenderTarget!==!0&&(Z|=t.STENCIL_BUFFER_BIT)),ye&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ne.__webglColorRenderbuffer[we]),ae===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ee]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ee])),ye){const fe=i.get(M[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,z,$,0,0,z,$,Z,t.NEAREST),l&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Q)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let we=0;we<M.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ne.__webglColorRenderbuffer[we]);const ae=i.get(M[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function ke(P){return Math.min(r.maxSamples,P.samples)}function Ae(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(P){const M=o.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function Pe(P,M){const z=P.colorSpace,$=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==mr&&z!==ji&&(Ke.getTransfer(z)===it?($!==ni||Z!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Ze(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=x,this.setTexture2D=N,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=te,this.rebindTextures=Te,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Ae}function K3(t,e){function n(i,r=ji){let s;const o=Ke.getTransfer(r);if(i===sr)return t.UNSIGNED_BYTE;if(i===XS)return t.UNSIGNED_SHORT_4_4_4_4;if(i===YS)return t.UNSIGNED_SHORT_5_5_5_1;if(i===b2)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===R2)return t.BYTE;if(i===P2)return t.SHORT;if(i===WS)return t.UNSIGNED_SHORT;if(i===jS)return t.INT;if(i===so)return t.UNSIGNED_INT;if(i===qi)return t.FLOAT;if(i===Nc)return t.HALF_FLOAT;if(i===L2)return t.ALPHA;if(i===D2)return t.RGB;if(i===ni)return t.RGBA;if(i===N2)return t.LUMINANCE;if(i===I2)return t.LUMINANCE_ALPHA;if(i===Ws)return t.DEPTH_COMPONENT;if(i===Sa)return t.DEPTH_STENCIL;if(i===U2)return t.RED;if(i===qS)return t.RED_INTEGER;if(i===F2)return t.RG;if(i===$S)return t.RG_INTEGER;if(i===KS)return t.RGBA_INTEGER;if(i===sd||i===od||i===ad||i===ld)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sd)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===od)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ad)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ld)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sd)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===od)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ad)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ld)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ev||i===Tv||i===wv||i===Av)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ev)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tv)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wv)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Av)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ZS)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Cv||i===Rv)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Cv)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pv||i===bv||i===Lv||i===Dv||i===Nv||i===Iv||i===Uv||i===Fv||i===Ov||i===kv||i===Bv||i===Vv||i===zv||i===Hv)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Iv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ov)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cd||i===Gv||i===Wv)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cd)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gv)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wv)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===O2||i===jv||i===Xv||i===Yv)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===cd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===jv)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xv)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yv)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Na?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Z3 extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ll extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q3={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ll;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const J3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new cn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new ur({vertexShader:J3,fragmentShader:eN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mn(new hu(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class nN extends ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const y=new tN,m=n.getContextAttributes();let h=null,v=null;const g=[],S=[],C=new je;let w=null;const R=new Pn;R.layers.enable(1),R.viewport=new Ut;const b=new Pn;b.layers.enable(2),b.viewport=new Ut;const E=[R,b],x=new Z3;x.layers.enable(1),x.layers.enable(2);let I=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=g[W];return ee===void 0&&(ee=new Fd,g[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=g[W];return ee===void 0&&(ee=new Fd,g[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=g[W];return ee===void 0&&(ee=new Fd,g[W]=ee),ee.getHandSpace()};function N(W){const ee=S.indexOf(W.inputSource);if(ee===-1)return;const ce=g[ee];ce!==void 0&&(ce.update(W.inputSource,W.frame,c||o),ce.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",q);for(let W=0;W<g.length;W++){const ee=S[W];ee!==null&&(S[W]=null,g[W].disconnect(ee))}I=null,j=null,y.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new qr(p.framebufferWidth,p.framebufferHeight,{format:ni,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ce=null,re=null;m.depth&&(re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=m.stencil?Sa:Ws,ce=m.stencil?Na:so);const Te={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Te),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new qr(f.textureWidth,f.textureHeight,{format:ni,type:sr,depthTexture:new dM(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Re=e.properties.get(v);Re.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(W){for(let ee=0;ee<W.removed.length;ee++){const ce=W.removed[ee],re=S.indexOf(ce);re>=0&&(S[re]=null,g[re].disconnect(ce))}for(let ee=0;ee<W.added.length;ee++){const ce=W.added[ee];let re=S.indexOf(ce);if(re===-1){for(let Re=0;Re<g.length;Re++)if(Re>=S.length){S.push(ce),re=Re;break}else if(S[Re]===null){S[Re]=ce,re=Re;break}if(re===-1)break}const Te=g[re];Te&&Te.connect(ce)}}const te=new F,X=new F;function D(W,ee,ce){te.setFromMatrixPosition(ee.matrixWorld),X.setFromMatrixPosition(ce.matrixWorld);const re=te.distanceTo(X),Te=ee.projectionMatrix.elements,Re=ce.projectionMatrix.elements,He=Te[14]/(Te[10]-1),O=Te[14]/(Te[10]+1),ke=(Te[9]+1)/Te[5],Ae=(Te[9]-1)/Te[5],Tt=(Te[8]-1)/Te[0],Pe=(Re[8]+1)/Re[0],Ze=He*Tt,P=He*Pe,M=re/(-Tt+Pe),z=M*-Tt;ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(z),W.translateZ(M),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const $=He+M,Z=O+M,Q=Ze-z,Ee=P+(re-z),ne=ke*O/Z*$,ye=Ae*O/Z*$;W.projectionMatrix.makePerspective(Q,Ee,ne,ye,$,Z),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function H(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;y.texture!==null&&(W.near=y.depthNear,W.far=y.depthFar),x.near=b.near=R.near=W.near,x.far=b.far=R.far=W.far,(I!==x.near||j!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,j=x.far,R.near=I,R.far=j,b.near=I,b.far=j,R.updateProjectionMatrix(),b.updateProjectionMatrix(),W.updateProjectionMatrix());const ee=W.parent,ce=x.cameras;H(x,ee);for(let re=0;re<ce.length;re++)H(ce[re],ee);ce.length===2?D(x,R,b):x.projectionMatrix.copy(R.projectionMatrix),G(W,x,ee)};function G(W,ee,ce){ce===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Jf*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null};let ie=null;function he(W,ee){if(u=ee.getViewerPose(c||o),_=ee,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let re=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,re=!0);for(let Re=0;Re<ce.length;Re++){const He=ce[Re];let O=null;if(p!==null)O=p.getViewport(He);else{const Ae=d.getViewSubImage(f,He);O=Ae.viewport,Re===0&&(e.setRenderTargetTextures(v,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(v))}let ke=E[Re];ke===void 0&&(ke=new Pn,ke.layers.enable(Re),ke.viewport=new Ut,E[Re]=ke),ke.matrix.fromArray(He.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(He.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(O.x,O.y,O.width,O.height),Re===0&&(x.matrix.copy(ke.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),re===!0&&x.cameras.push(ke)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Re=d.getDepthInformation(ce[0]);Re&&Re.isValid&&Re.texture&&y.init(e,Re,r.renderState)}}for(let ce=0;ce<g.length;ce++){const re=S[ce],Te=g[ce];re!==null&&Te!==void 0&&Te.update(re,ee,c||o)}y.render(e,x),ie&&ie(W,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const Ve=new uM;Ve.setAnimationLoop(he),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}}const Tr=new bi,iN=new St;function rN(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,oM(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,g,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Xt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Xt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),g=v.envMap,S=v.envMapRotation;if(g&&(m.envMap.value=g,Tr.copy(S),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),m.envMapRotation.value.setFromMatrix4(iN.makeRotationFromEuler(Tr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const C=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*C,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=g*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Xt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sN(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function c(v,g){let S=r[v.id];S===void 0&&(_(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const C=g.program;i.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function u(v){const g=d();v.__bindingPointIndex=g;const S=t.createBuffer(),C=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=r[v.id],S=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let w=0,R=S.length;w<R;w++){const b=Array.isArray(S[w])?S[w]:[S[w]];for(let E=0,x=b.length;E<x;E++){const I=b[E];if(p(I,w,E,C)===!0){const j=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let q=0;q<N.length;q++){const te=N[q],X=y(te);typeof te=="number"||typeof te=="boolean"?(I.__data[0]=te,t.bufferSubData(t.UNIFORM_BUFFER,j+Y,I.__data)):te.isMatrix3?(I.__data[0]=te.elements[0],I.__data[1]=te.elements[1],I.__data[2]=te.elements[2],I.__data[3]=0,I.__data[4]=te.elements[3],I.__data[5]=te.elements[4],I.__data[6]=te.elements[5],I.__data[7]=0,I.__data[8]=te.elements[6],I.__data[9]=te.elements[7],I.__data[10]=te.elements[8],I.__data[11]=0):(te.toArray(I.__data,Y),Y+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,S,C){const w=v.value,R=g+"_"+S;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{const b=C[R];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return C[R]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function _(v){const g=v.uniforms;let S=0;const C=16;for(let R=0,b=g.length;R<b;R++){const E=Array.isArray(g[R])?g[R]:[g[R]];for(let x=0,I=E.length;x<I;x++){const j=E[x],N=Array.isArray(j.value)?j.value:[j.value];for(let Y=0,q=N.length;Y<q;Y++){const te=N[Y],X=y(te),D=S%C;D!==0&&C-D<X.boundary&&(S+=C-D),j.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=S,S+=X.storage}}}const w=S%C;return w>0&&(S+=C-w),v.__size=S,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class oN{constructor(e={}){const{canvas:n=K2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this._useLegacyLights=!1,this.toneMapping=rr,this.toneMappingExposure=1;const g=this;let S=!1,C=0,w=0,R=null,b=-1,E=null;const x=new Ut,I=new Ut;let j=null;const N=new Ye(0);let Y=0,q=n.width,te=n.height,X=1,D=null,H=null;const G=new Ut(0,0,q,te),ie=new Ut(0,0,q,te);let he=!1;const Ve=new cM;let W=!1,ee=!1;const ce=new St,re=new je,Te=new F,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return R===null?X:1}let O=i;function ke(A,U){const B=n.getContext(A,U);return B!==null?B:null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dp}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",se,!1),n.addEventListener("webglcontextcreationerror",_e,!1),O===null){const U="webgl2";if(O=ke(U,A),O===null)throw ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ae,Tt,Pe,Ze,P,M,z,$,Z,Q,Ee,ne,ye,we,ae,fe,be,pe,me,ze,Ge,qe,Xe,st;function ve(){Ae=new pD(O),Ae.init(),Tt=new aD(O,Ae,e),qe=new K3(O,Ae),Pe=new q3(O),Ze=new vD(O),P=new I3,M=new $3(O,Ae,Pe,P,Tt,qe,Ze),z=new cD(g),$=new hD(g),Z=new MP(O),Xe=new sD(O,Z),Q=new mD(O,Z,Ze,Xe),Ee=new yD(O,Q,Z,Ze),me=new _D(O,Tt,M),fe=new lD(P),ne=new N3(g,z,$,Ae,Tt,Xe,fe),ye=new rN(g,P),we=new F3,ae=new H3(Ae),pe=new rD(g,z,$,Pe,Ee,f,l),be=new Y3(g,Ee,Tt),st=new sN(O,Ze,Tt,Pe),ze=new oD(O,Ae,Ze),Ge=new gD(O,Ae,Ze),Ze.programs=ne.programs,g.capabilities=Tt,g.extensions=Ae,g.properties=P,g.renderLists=we,g.shadowMap=be,g.state=Pe,g.info=Ze}ve();const L=new nN(g,O);this.xr=L,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(q,te,!1))},this.getSize=function(A){return A.set(q,te)},this.setSize=function(A,U,B=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,te=U,n.width=Math.floor(A*X),n.height=Math.floor(U*X),B===!0&&(n.style.width=A+"px",n.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(q*X,te*X).floor()},this.setDrawingBufferSize=function(A,U,B){q=A,te=U,X=B,n.width=Math.floor(A*B),n.height=Math.floor(U*B),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(G)},this.setViewport=function(A,U,B,V){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,U,B,V),Pe.viewport(x.copy(G).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,U,B,V){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,U,B,V),Pe.scissor(I.copy(ie).multiplyScalar(X).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(A){Pe.setScissorTest(he=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){H=A},this.getClearColor=function(A){return A.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(A=!0,U=!0,B=!0){let V=0;if(A){let k=!1;if(R!==null){const ue=R.texture.format;k=ue===KS||ue===$S||ue===qS}if(k){const ue=R.texture.type,ge=ue===sr||ue===so||ue===WS||ue===Na||ue===XS||ue===YS,Me=pe.getClearColor(),Ce=pe.getClearAlpha(),De=Me.r,Le=Me.g,Ne=Me.b;ge?(p[0]=De,p[1]=Le,p[2]=Ne,p[3]=Ce,O.clearBufferuiv(O.COLOR,0,p)):(_[0]=De,_[1]=Le,_[2]=Ne,_[3]=Ce,O.clearBufferiv(O.COLOR,0,_))}else V|=O.COLOR_BUFFER_BIT}U&&(V|=O.DEPTH_BUFFER_BIT),B&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",se,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),we.dispose(),ae.dispose(),P.dispose(),z.dispose(),$.dispose(),Ee.dispose(),Xe.dispose(),st.dispose(),ne.dispose(),L.dispose(),L.removeEventListener("sessionstart",qn),L.removeEventListener("sessionend",$n),gr.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Ze.autoReset,U=be.enabled,B=be.autoUpdate,V=be.needsUpdate,k=be.type;ve(),Ze.autoReset=A,be.enabled=U,be.autoUpdate=B,be.needsUpdate=V,be.type=k}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xe(A){const U=A.target;U.removeEventListener("dispose",xe),Je(U)}function Je(A){ot(A),P.remove(A)}function ot(A){const U=P.get(A).programs;U!==void 0&&(U.forEach(function(B){ne.releaseProgram(B)}),A.isShaderMaterial&&ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,B,V,k,ue){U===null&&(U=Re);const ge=k.isMesh&&k.matrixWorld.determinant()<0,Me=xM(A,U,B,V,k);Pe.setMaterial(V,ge);let Ce=B.index,De=1;if(V.wireframe===!0){if(Ce=Q.getWireframeAttribute(B),Ce===void 0)return;De=2}const Le=B.drawRange,Ne=B.attributes.position;let yt=Le.start*De,un=(Le.start+Le.count)*De;ue!==null&&(yt=Math.max(yt,ue.start*De),un=Math.min(un,(ue.start+ue.count)*De)),Ce!==null?(yt=Math.max(yt,0),un=Math.min(un,Ce.count)):Ne!=null&&(yt=Math.max(yt,0),un=Math.min(un,Ne.count));const Pt=un-yt;if(Pt<0||Pt===1/0)return;Xe.setup(k,V,Me,B,Ce);let ui,dt=ze;if(Ce!==null&&(ui=Z.get(Ce),dt=Ge,dt.setIndex(ui)),k.isMesh)V.wireframe===!0?(Pe.setLineWidth(V.wireframeLinewidth*He()),dt.setMode(O.LINES)):dt.setMode(O.TRIANGLES);else if(k.isLine){let Ie=V.linewidth;Ie===void 0&&(Ie=1),Pe.setLineWidth(Ie*He()),k.isLineSegments?dt.setMode(O.LINES):k.isLineLoop?dt.setMode(O.LINE_LOOP):dt.setMode(O.LINE_STRIP)}else k.isPoints?dt.setMode(O.POINTS):k.isSprite&&dt.setMode(O.TRIANGLES);if(k.isBatchedMesh)dt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)dt.renderInstances(yt,Pt,k.count);else if(B.isInstancedBufferGeometry){const Ie=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,mu=Math.min(B.instanceCount,Ie);dt.renderInstances(yt,Pt,mu)}else dt.render(yt,Pt)};function ut(A,U,B){A.transparent===!0&&A.side===yi&&A.forceSinglePass===!1?(A.side=Xt,A.needsUpdate=!0,za(A,U,B),A.side=cr,A.needsUpdate=!0,za(A,U,B),A.side=yi):za(A,U,B)}this.compile=function(A,U,B=null){B===null&&(B=A),m=ae.get(B),m.init(),v.push(m),B.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),A!==B&&A.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(g._useLegacyLights);const V=new Set;return A.traverse(function(k){const ue=k.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const Me=ue[ge];ut(Me,B,k),V.add(Me)}else ut(ue,B,k),V.add(ue)}),v.pop(),m=null,V},this.compileAsync=function(A,U,B=null){const V=this.compile(A,U,B);return new Promise(k=>{function ue(){if(V.forEach(function(ge){P.get(ge).currentProgram.isReady()&&V.delete(ge)}),V.size===0){k(A);return}setTimeout(ue,10)}Ae.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let kt=null;function tt(A){kt&&kt(A)}function qn(){gr.stop()}function $n(){gr.start()}const gr=new uM;gr.setAnimationLoop(tt),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(A){kt=A,L.setAnimationLoop(A),A===null?gr.stop():gr.start()},L.addEventListener("sessionstart",qn),L.addEventListener("sessionend",$n),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(U),U=L.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,U,R),m=ae.get(A,v.length),m.init(),v.push(m),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ve.setFromProjectionMatrix(ce),ee=this.localClippingEnabled,W=fe.init(this.clippingPlanes,ee),y=we.get(A,h.length),y.init(),h.push(y),Fp(A,U,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(D,H),this.info.render.frame++,W===!0&&fe.beginShadows();const B=m.state.shadowsArray;if(be.render(B,A,U),W===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1)&&pe.render(y,A),m.setupLights(g._useLegacyLights),U.isArrayCamera){const V=U.cameras;for(let k=0,ue=V.length;k<ue;k++){const ge=V[k];Op(y,A,ge,ge.viewport)}}else Op(y,A,U);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(g,A,U),Xe.resetDefaultState(),b=-1,E=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function Fp(A,U,B,V){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)B=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ve.intersectsSprite(A)){V&&Te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);const ge=Ee.update(A),Me=A.material;Me.visible&&y.push(A,ge,Me,B,Te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ve.intersectsObject(A))){const ge=Ee.update(A),Me=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Te.copy(A.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Te.copy(ge.boundingSphere.center)),Te.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(Me)){const Ce=ge.groups;for(let De=0,Le=Ce.length;De<Le;De++){const Ne=Ce[De],yt=Me[Ne.materialIndex];yt&&yt.visible&&y.push(A,ge,yt,B,Te.z,Ne)}}else Me.visible&&y.push(A,ge,Me,B,Te.z,null)}}const ue=A.children;for(let ge=0,Me=ue.length;ge<Me;ge++)Fp(ue[ge],U,B,V)}function Op(A,U,B,V){const k=A.opaque,ue=A.transmissive,ge=A.transparent;m.setupLightsView(B),W===!0&&fe.setGlobalState(g.clippingPlanes,B),ue.length>0&&yM(k,ue,U,B),V&&Pe.viewport(x.copy(V)),k.length>0&&Va(k,U,B),ue.length>0&&Va(ue,U,B),ge.length>0&&Va(ge,U,B),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function yM(A,U,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new qr(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Nc:sr,minFilter:kr,samples:4,stencilBuffer:s});const De=P.get(m.state.transmissionRenderTarget);De.__isTransmissionRenderTarget=!0}const ue=m.state.transmissionRenderTarget;g.getDrawingBufferSize(re),ue.setSize(re.x,re.y);const ge=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(N),Y=g.getClearAlpha(),Y<1&&g.setClearColor(16777215,.5),g.clear();const Me=g.toneMapping;g.toneMapping=rr,Va(A,B,V),M.updateMultisampleRenderTarget(ue),M.updateRenderTargetMipmap(ue);let Ce=!1;for(let De=0,Le=U.length;De<Le;De++){const Ne=U[De],yt=Ne.object,un=Ne.geometry,Pt=Ne.material,ui=Ne.group;if(Pt.side===yi&&yt.layers.test(V.layers)){const dt=Pt.side;Pt.side=Xt,Pt.needsUpdate=!0,kp(yt,B,V,un,Pt,ui),Pt.side=dt,Pt.needsUpdate=!0,Ce=!0}}Ce===!0&&(M.updateMultisampleRenderTarget(ue),M.updateRenderTargetMipmap(ue)),g.setRenderTarget(ge),g.setClearColor(N,Y),g.toneMapping=Me}function Va(A,U,B){const V=U.isScene===!0?U.overrideMaterial:null;for(let k=0,ue=A.length;k<ue;k++){const ge=A[k],Me=ge.object,Ce=ge.geometry,De=V===null?ge.material:V,Le=ge.group;Me.layers.test(B.layers)&&kp(Me,U,B,Ce,De,Le)}}function kp(A,U,B,V,k,ue){A.onBeforeRender(g,U,B,V,k,ue),A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(g,U,B,V,A,ue),k.transparent===!0&&k.side===yi&&k.forceSinglePass===!1?(k.side=Xt,k.needsUpdate=!0,g.renderBufferDirect(B,U,V,k,A,ue),k.side=cr,k.needsUpdate=!0,g.renderBufferDirect(B,U,V,k,A,ue),k.side=yi):g.renderBufferDirect(B,U,V,k,A,ue),A.onAfterRender(g,U,B,V,k,ue)}function za(A,U,B){U.isScene!==!0&&(U=Re);const V=P.get(A),k=m.state.lights,ue=m.state.shadowsArray,ge=k.state.version,Me=ne.getParameters(A,k.state,ue,U,B),Ce=ne.getProgramCacheKey(Me);let De=V.programs;V.environment=A.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(A.isMeshStandardMaterial?$:z).get(A.envMap||V.environment),V.envMapRotation=V.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,De===void 0&&(A.addEventListener("dispose",xe),De=new Map,V.programs=De);let Le=De.get(Ce);if(Le!==void 0){if(V.currentProgram===Le&&V.lightsStateVersion===ge)return Vp(A,Me),Le}else Me.uniforms=ne.getUniforms(A),A.onBuild(B,Me,g),A.onBeforeCompile(Me,g),Le=ne.acquireProgram(Me,Ce),De.set(Ce,Le),V.uniforms=Me.uniforms;const Ne=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=fe.uniform),Vp(A,Me),V.needsLights=MM(A),V.lightsStateVersion=ge,V.needsLights&&(Ne.ambientLightColor.value=k.state.ambient,Ne.lightProbe.value=k.state.probe,Ne.directionalLights.value=k.state.directional,Ne.directionalLightShadows.value=k.state.directionalShadow,Ne.spotLights.value=k.state.spot,Ne.spotLightShadows.value=k.state.spotShadow,Ne.rectAreaLights.value=k.state.rectArea,Ne.ltc_1.value=k.state.rectAreaLTC1,Ne.ltc_2.value=k.state.rectAreaLTC2,Ne.pointLights.value=k.state.point,Ne.pointLightShadows.value=k.state.pointShadow,Ne.hemisphereLights.value=k.state.hemi,Ne.directionalShadowMap.value=k.state.directionalShadowMap,Ne.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ne.spotShadowMap.value=k.state.spotShadowMap,Ne.spotLightMatrix.value=k.state.spotLightMatrix,Ne.spotLightMap.value=k.state.spotLightMap,Ne.pointShadowMap.value=k.state.pointShadowMap,Ne.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Le,V.uniformsList=null,Le}function Bp(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=Zl.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Vp(A,U){const B=P.get(A);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function xM(A,U,B,V,k){U.isScene!==!0&&(U=Re),M.resetTextureUnits();const ue=U.fog,ge=V.isMeshStandardMaterial?U.environment:null,Me=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:mr,Ce=(V.isMeshStandardMaterial?$:z).get(V.envMap||ge),De=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!B.morphAttributes.position,yt=!!B.morphAttributes.normal,un=!!B.morphAttributes.color;let Pt=rr;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pt=g.toneMapping);const ui=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,dt=ui!==void 0?ui.length:0,Ie=P.get(V),mu=m.state.lights;if(W===!0&&(ee===!0||A!==E)){const En=A===E&&V.id===b;fe.setState(V,A,En)}let at=!1;V.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==mu.state.version||Ie.outputColorSpace!==Me||k.isBatchedMesh&&Ie.batching===!1||!k.isBatchedMesh&&Ie.batching===!0||k.isInstancedMesh&&Ie.instancing===!1||!k.isInstancedMesh&&Ie.instancing===!0||k.isSkinnedMesh&&Ie.skinning===!1||!k.isSkinnedMesh&&Ie.skinning===!0||k.isInstancedMesh&&Ie.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ie.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ie.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ie.instancingMorph===!1&&k.morphTexture!==null||Ie.envMap!==Ce||V.fog===!0&&Ie.fog!==ue||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==fe.numPlanes||Ie.numIntersection!==fe.numIntersection)||Ie.vertexAlphas!==De||Ie.vertexTangents!==Le||Ie.morphTargets!==Ne||Ie.morphNormals!==yt||Ie.morphColors!==un||Ie.toneMapping!==Pt||Ie.morphTargetsCount!==dt)&&(at=!0):(at=!0,Ie.__version=V.version);let vr=Ie.currentProgram;at===!0&&(vr=za(V,U,k));let zp=!1,go=!1,gu=!1;const Bt=vr.getUniforms(),Di=Ie.uniforms;if(Pe.useProgram(vr.program)&&(zp=!0,go=!0,gu=!0),V.id!==b&&(b=V.id,go=!0),zp||E!==A){Bt.setValue(O,"projectionMatrix",A.projectionMatrix),Bt.setValue(O,"viewMatrix",A.matrixWorldInverse);const En=Bt.map.cameraPosition;En!==void 0&&En.setValue(O,Te.setFromMatrixPosition(A.matrixWorld)),Tt.logarithmicDepthBuffer&&Bt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Bt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,go=!0,gu=!0)}if(k.isSkinnedMesh){Bt.setOptional(O,k,"bindMatrix"),Bt.setOptional(O,k,"bindMatrixInverse");const En=k.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Bt.setValue(O,"boneTexture",En.boneTexture,M))}k.isBatchedMesh&&(Bt.setOptional(O,k,"batchingTexture"),Bt.setValue(O,"batchingTexture",k._matricesTexture,M));const vu=B.morphAttributes;if((vu.position!==void 0||vu.normal!==void 0||vu.color!==void 0)&&me.update(k,B,vr),(go||Ie.receiveShadow!==k.receiveShadow)&&(Ie.receiveShadow=k.receiveShadow,Bt.setValue(O,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Di.envMap.value=Ce,Di.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Di.envMapIntensity.value=U.environmentIntensity),go&&(Bt.setValue(O,"toneMappingExposure",g.toneMappingExposure),Ie.needsLights&&SM(Di,gu),ue&&V.fog===!0&&ye.refreshFogUniforms(Di,ue),ye.refreshMaterialUniforms(Di,V,X,te,m.state.transmissionRenderTarget),Zl.upload(O,Bp(Ie),Di,M)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Zl.upload(O,Bp(Ie),Di,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Bt.setValue(O,"center",k.center),Bt.setValue(O,"modelViewMatrix",k.modelViewMatrix),Bt.setValue(O,"normalMatrix",k.normalMatrix),Bt.setValue(O,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const En=V.uniformsGroups;for(let _u=0,EM=En.length;_u<EM;_u++){const Hp=En[_u];st.update(Hp,vr),st.bind(Hp,vr)}}return vr}function SM(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function MM(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,U,B){P.get(A.texture).__webglTexture=U,P.get(A.depthTexture).__webglTexture=B;const V=P.get(A);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const B=P.get(A);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,B=0){R=A,C=U,w=B;let V=!0,k=null,ue=!1,ge=!1;if(A){const Ce=P.get(A);Ce.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(O.FRAMEBUFFER,null),V=!1):Ce.__webglFramebuffer===void 0?M.setupRenderTarget(A):Ce.__hasExternalTextures&&M.rebindTextures(A,P.get(A.texture).__webglTexture,P.get(A.depthTexture).__webglTexture);const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ge=!0);const Le=P.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?k=Le[U][B]:k=Le[U],ue=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?k=P.get(A).__webglMultisampledFramebuffer:Array.isArray(Le)?k=Le[B]:k=Le,x.copy(A.viewport),I.copy(A.scissor),j=A.scissorTest}else x.copy(G).multiplyScalar(X).floor(),I.copy(ie).multiplyScalar(X).floor(),j=he;if(Pe.bindFramebuffer(O.FRAMEBUFFER,k)&&V&&Pe.drawBuffers(A,k),Pe.viewport(x),Pe.scissor(I),Pe.setScissorTest(j),ue){const Ce=P.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ce.__webglTexture,B)}else if(ge){const Ce=P.get(A.texture),De=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.__webglTexture,B||0,De)}b=-1},this.readRenderTargetPixels=function(A,U,B,V,k,ue,ge){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){Pe.bindFramebuffer(O.FRAMEBUFFER,Me);try{const Ce=A.texture,De=Ce.format,Le=Ce.type;if(De!==ni&&qe.convert(De)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Le===Nc&&(Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float"));if(Le!==sr&&qe.convert(Le)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&Le!==qi&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-V&&B>=0&&B<=A.height-k&&O.readPixels(U,B,V,k,qe.convert(De),qe.convert(Le),ue)}finally{const Ce=R!==null?P.get(R).__webglFramebuffer:null;Pe.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(A,U,B=0){const V=Math.pow(2,-B),k=Math.floor(U.image.width*V),ue=Math.floor(U.image.height*V);M.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,B,0,0,A.x,A.y,k,ue),Pe.unbindTexture()},this.copyTextureToTexture=function(A,U,B,V=0){const k=U.image.width,ue=U.image.height,ge=qe.convert(B.format),Me=qe.convert(B.type);M.setTexture2D(B,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,V,A.x,A.y,k,ue,ge,Me,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,V,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,ge,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,V,A.x,A.y,ge,Me,U.image),V===0&&B.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(A,U,B,V,k=0){const ue=Math.round(A.max.x-A.min.x),ge=Math.round(A.max.y-A.min.y),Me=A.max.z-A.min.z+1,Ce=qe.convert(V.format),De=qe.convert(V.type);let Le;if(V.isData3DTexture)M.setTexture3D(V,0),Le=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)M.setTexture2DArray(V,0),Le=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const Ne=O.getParameter(O.UNPACK_ROW_LENGTH),yt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),un=O.getParameter(O.UNPACK_SKIP_PIXELS),Pt=O.getParameter(O.UNPACK_SKIP_ROWS),ui=O.getParameter(O.UNPACK_SKIP_IMAGES),dt=B.isCompressedTexture?B.mipmaps[k]:B.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,dt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),B.isDataTexture||B.isData3DTexture?O.texSubImage3D(Le,k,U.x,U.y,U.z,ue,ge,Me,Ce,De,dt.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(Le,k,U.x,U.y,U.z,ue,ge,Me,Ce,dt.data):O.texSubImage3D(Le,k,U.x,U.y,U.z,ue,ge,Me,Ce,De,dt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ne),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,un),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ui),k===0&&V.generateMipmaps&&O.generateMipmap(Le),Pe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),Pe.unbindTexture()},this.resetState=function(){C=0,w=0,R=null,Pe.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Np?"display-p3":"srgb",n.unpackColorSpace=Ke.workingColorSpace===fu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class aN extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ql extends po{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const k0=new F,B0=new F,V0=new St,Od=new Ip,Dl=new Oa;class z0 extends Zt{constructor(e=new _n,n=new Ql){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)k0.fromBufferAttribute(n,r-1),B0.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=k0.distanceTo(B0);e.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=s,e.ray.intersectsSphere(Dl)===!1)return;V0.copy(r).invert(),Od.copy(e.ray).applyMatrix4(V0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,d=new F,f=new F,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const h=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let g=h,S=v-1;g<S;g+=p){const C=_.getX(g),w=_.getX(g+1);if(c.fromBufferAttribute(m,C),u.fromBufferAttribute(m,w),Od.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||n.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let g=h,S=v-1;g<S;g+=p){if(c.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),Od.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||n.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class vM extends po{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const H0=new St,th=new Ip,Nl=new Oa,Il=new F;class lN extends Zt{constructor(e=new _n,n=new vM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;H0.copy(r).invert(),th.copy(e.ray).applyMatrix4(H0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,y=p;_<y;_++){const m=c.getX(_);Il.fromBufferAttribute(d,m),G0(Il,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,y=p;_<y;_++)Il.fromBufferAttribute(d,_),G0(Il,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function G0(t,e,n,i,r,s,o){const a=th.distanceSqToPoint(t);if(a<n){const l=new F;th.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Fs extends _n{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new F,f=new F,p=[],_=[],y=[],m=[];for(let h=0;h<=i;h++){const v=[],g=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const w=C/n;d.x=-e*Math.cos(r+w*s)*Math.sin(o+g*a),d.y=e*Math.cos(o+g*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+g*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(w+S,1-g),v.push(c++)}u.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){const g=u[h][v+1],S=u[h][v],C=u[h+1][v],w=u[h+1][v+1];(h!==0||o>0)&&p.push(g,S,w),(h!==i-1||l<Math.PI)&&p.push(S,C,w)}this.setIndex(p),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(y,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dp);function cN({overlay:t=!1}){const e=K.useRef(null);return K.useEffect(()=>{const n=e.current,i=new aN,r=new Pn(52,1,.1,100);r.position.z=13;const s=new oN({canvas:n,alpha:!0,antialias:!0});s.setSize(600,600),s.setPixelRatio(Math.min(devicePixelRatio,2)),t||i.add(new mn(new Fs(4.82,64,64),new Is({color:396571,transparent:!0,opacity:.96})));const o=new mn(new Fs(5,40,40),new Is({color:4886498,wireframe:!0,transparent:!0,opacity:t?.18:.1}));i.add(o);const a=new Ql({color:4886498,transparent:!0,opacity:t?.6:.38}),l=new Ql({color:4886498,transparent:!0,opacity:t?.28:.16}),c=new Ql({color:16777215,transparent:!0,opacity:t?.14:.07});function u(g,S){const C=g*Math.PI/180,w=5*Math.cos(C),R=5*Math.sin(C),b=[];for(let E=0;E<=96;E++){const x=E/96*Math.PI*2;b.push(new F(w*Math.cos(x),R,w*Math.sin(x)))}return new z0(new _n().setFromPoints(b),S)}function d(g,S){const C=g*Math.PI/180,w=[];for(let R=0;R<=96;R++){const b=(R/96*180-90)*Math.PI/180;w.push(new F(5*Math.cos(b)*Math.cos(C),5*Math.sin(b),5*Math.cos(b)*Math.sin(C)))}return new z0(new _n().setFromPoints(w),S)}[-60,-30,30,60].forEach(g=>i.add(u(g,l))),i.add(u(0,a));for(let g=0;g<360;g+=30)i.add(d(g,g%90===0?a:g%45===0?l:c));const f=[];for(let g=0;g<500;g++){const S=Math.acos(2*Math.random()-1),C=2*Math.PI*Math.random();f.push(5.04*Math.sin(S)*Math.cos(C),5.04*Math.sin(S)*Math.sin(C),5.04*Math.cos(S))}const p=new _n;p.setAttribute("position",new Nn(f,3)),i.add(new lN(p,new vM({color:4886498,size:.065,transparent:!0,opacity:t?.8:.6}))),i.add(new mn(new Fs(5.35,32,32),new Is({color:4886498,transparent:!0,opacity:.042,side:Xt}))),i.add(new mn(new Fs(5.9,32,32),new Is({color:4886498,transparent:!0,opacity:.016,side:Xt})));let _=0,y=0;const m=g=>{_=(g.clientX/innerWidth-.5)*.8,y=(g.clientY/innerHeight-.5)*.5};window.addEventListener("mousemove",m);let h;const v=()=>{h=requestAnimationFrame(v),o.rotation.y+=.0018,o.rotation.x+=4e-4,i.rotation.y+=(_*.35-i.rotation.y)*.045,i.rotation.x+=(-y*.22-i.rotation.x)*.045,s.render(i,r)};return v(),()=>{cancelAnimationFrame(h),window.removeEventListener("mousemove",m),s.dispose()}},[t]),T.jsx("canvas",{ref:e,style:{width:"100%",height:"100%"}})}const uN="2026-06-26T09:00:00",_M=[{abbr:"UNSC",fullName:"United Nations Security Council",board:[{role:"Co-Chairperson",name:"Krishna Iyer"},{role:"Co-Chairperson",name:"Alby Mathew"},{role:"Moderator",name:"Aarnav Tejaswi"}],agenda:"The Situation in the Middle East",matrixUrl:"https://docs.google.com/spreadsheets/d/1BBbh_c_bz5fdg4kCLbSQpqclGvehHk48mSb3-tn6FZo/edit?usp=sharing",backgroundGuideUrl:"https://drive.google.com/file/d/1V8554sl96Uti6qhF0U9Wd0i_a8QxwG1y/view?usp=sharing",description:"The United Nations Security Council is the principal organ of the UN system charged with the maintenance of international peace and security. At FISMUN'26, delegates will deliberate on one of the world's most volatile geopolitical flashpoints: the situation in the Middle East. Navigating competing alliances, ongoing humanitarian catastrophes, and the ever present weight of the veto, delegates must balance national interests against the collective responsibility to protect civilians and restore lasting stability to a region in crisis."},{abbr:"UNHRC",fullName:"United Nations Human Rights Council",board:[{role:"Co-Chairperson",name:"Kaushiik Nair"},{role:"Co-Chairperson",name:"Avaneesh Reddy"},{role:"Vice Chairperson",name:"Puneet"}],agenda:'Rights of the "Invisible": Addressing Statelessness and Nationality Deprivation in the Levant and Gulf Regions',matrixUrl:"https://docs.google.com/spreadsheets/d/1uAIaSWtmOxjqNI4ewR86uWtnKJkIXSyH/edit?usp=sharing&ouid=113444922102722481608&rtpof=true&sd=true",backgroundGuideUrl:"https://drive.google.com/file/d/1L2D_B-et7eDx3yAjGSyKNYNrPyC8kxwd/view?usp=sharing",description:"The United Nations Human Rights Council is the foremost intergovernmental forum dedicated to the protection and promotion of human rights across the globe. At FISMUN'26, delegates will confront the deeply entrenched crisis of statelessness and nationality deprivation affecting millions across the Levant and Gulf regions. By examining the lives of those rendered legally invisible, delegates will craft binding frameworks to restore legal identity, dignity, and belonging to the world's most overlooked populations."},{abbr:"AIPPM",fullName:"All India Political Parties Meet",board:[{role:"Co-Chairperson",name:"Aarav Motreja"},{role:"Co-Chairperson",name:"Anirudh R"},{role:"Vice Chairperson",name:"Parth Bakshi"}],agenda:"Deliberating upon the standard of bail as set in the Unlawful Activities (Prevention) Act with special reference to cases of national importance",matrixUrl:"https://docs.google.com/spreadsheets/d/12EO76ejp0NbkWgUugQB4aiqwLMj01DcI5wJuMj6mPDI/edit?usp=sharing",backgroundGuideUrl:"https://drive.google.com/file/d/1nZznoINkS4C8FZAiprIkNEdZ7XxEmWFV/view?usp=sharing",description:"The All India Political Parties Meet brings together representatives of India's diverse political spectrum to debate matters of pressing national concern. At FISMUN'26, delegates will grapple with one of the most contested provisions in Indian law: the standard of bail under the Unlawful Activities (Prevention) Act in cases of national importance. With fundamental rights on one side and national security imperatives on the other, delegates must find a principled resolution to one of India's most consequential legal debates."},{abbr:"CCC",fullName:"Continuous Crisis Committee",board:[{role:"Co-Chairperson",name:"Kaustubh Krishna"},{role:"Co-Chairperson",name:"Shreyas DB"},{role:"Vice Chairperson",name:"Nathan Daniel"}],agenda:`The Soviet-Afghan War, 1979
Freeze date - 12th December, 1979`,matrixUrl:"https://docs.google.com/spreadsheets/d/1kPKRQUJ_CLttQ5ALfqRzKIwdyR85k5dsro39ncvDz5A/edit?usp=sharing",backgroundGuideUrl:"https://drive.google.com/file/d/1cqYzNZZ3gH1Zg0-p42moKHGaoda9cA2l/view?usp=sharing",description:"The Continuous Crisis Committee places delegates at the centre of a rapidly unfolding geopolitical emergency where the situation evolves in real time. Frozen on 12th December 1979, delegates will navigate the opening days of the Soviet intervention in Afghanistan, a crisis that would reshape global power dynamics for an entire generation. With incomplete intelligence, shifting loyalties, and mounting pressure from every direction, every decision made in committee carries consequences that reverberate through history."},{abbr:"DISEC",fullName:"Disarmament and Security Council",board:[{role:"Co-Chairperson",name:"Aabid Maldar"},{role:"Co-Chairperson",name:"Ritobrata Sarkar"},{role:"Vice Chairperson",name:"Dhruv Kulkarni"}],agenda:"Addressing Gaps in the Regulation of Bio-Digital Weapons Systems",matrixUrl:"https://docs.google.com/spreadsheets/d/1i_z2d5TuV_3NI_bocjcrARrrtOR0MZK6OK8vsPDusFg/edit?usp=sharing",backgroundGuideUrl:"https://drive.google.com/file/d/1CYBKjX0wh9mgdRdRhyUKsPuC5-NYw2PU/view?usp=sharing",description:"The Disarmament and International Security Committee confronts one of the most alarming frontiers in modern warfare: the unregulated development of biodigital weapons systems. Delegates will examine critical gaps in existing international law that leave the world exposed to weapons capable of targeting individuals, populations, and critical infrastructure through the convergence of biological and digital vectors. By drafting comprehensive regulatory frameworks, delegates will work to close these loopholes before such weapons shift from theoretical possibility to catastrophic reality."},{abbr:"UNICEF",fullName:"United Nations Children's Fund (Junior)",board:[{role:"Co-Chairperson",name:"Aara Shivani"},{role:"Co-Chairperson",name:"Srishti Singh"},{role:"Moderator",name:"Rohan"}],agenda:"Assessing the Impact of Escalating Tensions between the United States and Iran on the safety, well being, and rights of children",matrixUrl:"https://docs.google.com/spreadsheets/d/1sRJ9qFnx_4l2e2kK3sY_s0gEqcvIf7PEkhzfMMiFkQc/edit?usp=sharing",backgroundGuideUrl:"https://drive.google.com/file/d/1ZUF9BIQ9geKRyQQSFT1WjbBkdu2exKMH/view?usp=sharing",description:"The United Nations Children's Fund stands as the world's foremost advocate for the rights and well being of children across every nation and territory. At FISMUN'26, delegates will assess the profound humanitarian impact of escalating geopolitical tensions between the United States and Iran on children caught in the crossfire. From access to education and healthcare to physical safety and psychological welfare, delegates will craft urgent policy responses to protect the most vulnerable in an increasingly volatile region."},{abbr:"WHO",fullName:"World Health Organization (Junior)",board:[{role:"Co-Chairperson",name:"Jerome Noble"},{role:"Co-Chairperson",name:"Aaryan Patil"},{role:"Moderator",name:"Arjun"}],agenda:"Guaranteeing fair access to vaccines and essential health services in low-income nations and areas affected by conflict.",matrixUrl:"https://docs.google.com/spreadsheets/d/1BeTTxCSP9vc8Vhae48kxBu_pXiS_pYiJJmvUButUtyo/edit?usp=sharing",backgroundGuideUrl:"https://drive.google.com/file/d/1lSI_as5mzpCRlNBhz8cawgg3aex7dz0J/view?usp=sharing",description:"The World Health Organization coordinates the global response to health emergencies and sets the international standards that shape healthcare for populations everywhere. At FISMUN'26, delegates will confront the stark inequities preventing billions of people in lower income nations and conflict affected regions from accessing vaccines and essential health services. Delegates will design binding international commitments and sustainable funding mechanisms to transform the promise of universal health coverage into a lived reality for every person on the planet."},{abbr:"UNCSW",fullName:"United Nations Commission on the Status of Women",board:[{role:"Head Chairperson",name:"Atul Tharian"},{role:"Vice Chairperson",name:"Muskaan Malik"},{role:"Moderator",name:"Kenrick Roy"}],agenda:"Deliberating the Legitimacy of Abortion Restrictions in Light of International Human Rights Standards on Women’s Rights and Bodily Autonomy",matrixUrl:"https://docs.google.com/spreadsheets/d/1R1dOh4NuP18N3pdgXMGq7klj52nu6eVD9KruGg5Dw5Q/edit?usp=sharing",backgroundGuideUrl:"https://drive.google.com/file/d/1u7LfhtmP2BWeCwzb_GUAD4MHnO5x3YDc/view?usp=sharing",description:"The United Nations Commission on the Status of Women is the leading global body dedicated to advancing gender equality and the empowerment of women. Delegates at FISMUN’26 will engage with one of the most contested questions at the intersection of law, ethics, and human rights: whether restrictions on abortion can be legitimised under international human rights standards governing women’s rights and bodily autonomy. Through rigorous debate and careful deliberation, delegates will interrogate the obligations that states owe to women and examine the limits of legislative authority over the human body."},{abbr:"HCC",fullName:"Historical Crisis Committee",board:[{role:"Chairperson",name:"Shubh Bansal"},{role:"Vice Chairperson",name:"Sai Juhith"},{role:"Moderator",name:"Teesha"}],agenda:"Indonesian Mass Killings, 30th September 1965",matrixUrl:"https://docs.google.com/spreadsheets/d/1bpvYL1560qp4yZFANgrfMPa4HZmC4Qtp2jjtloHOmDc/edit?usp=sharing",backgroundGuideUrl:"https://drive.google.com/file/d/1CYBKjX0wh9mgdRdRhyUKsPuC5-NYw2PU/view?usp=sharing",description:"The Historical Crisis Committee immerses delegates in a pivotal and deeply troubling chapter of the twentieth century. Frozen at 30th September 1965, delegates will assume the roles of decision makers operating under extreme pressure, incomplete information, and conflicting loyalties as the Indonesian mass killings begin to unfold. The committee challenges participants to navigate Cold War geopolitics, military authority, and the politics of anticommunism as they confront a crisis that claimed hundreds of thousands of lives and reshaped an entire nation."}],dN=[{target:4,suffix:"th",label:"Edition"},{target:9,suffix:"",label:"Committees"},{target:350,suffix:"+",label:"Expected Delegates"},{target:3,suffix:"",label:"Days of Debate"}];function Ba({dim:t=!1,size:e="min(560px, 84vw)"}){return T.jsxs("div",{className:`logo-wm${t?" logo-wm-dim":""}`,style:{"--lw":e},children:[T.jsx("img",{src:"/logo.png",alt:"",className:"logo-wm-img"}),T.jsx("div",{className:"logo-wm-scanlines"}),T.jsx("div",{className:"logo-wm-glow"})]})}function rn({children:t,delay:e=0,className:n=""}){return T.jsx(Be.div,{className:n,initial:{opacity:0,y:40,filter:"blur(8px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-70px"},transition:{duration:.78,delay:e,ease:[.22,1,.36,1]},children:t})}function fN(){const t=K.useRef(null),e=K.useRef(null),n=K.useRef({x:0,y:0}),i=K.useRef({x:0,y:0});return K.useEffect(()=>{const r=l=>{n.current={x:l.clientX,y:l.clientY},t.current&&(t.current.style.left=l.clientX+"px",t.current.style.top=l.clientY+"px")};window.addEventListener("mousemove",r);let s;const o=()=>{i.current.x+=(n.current.x-i.current.x)*.14,i.current.y+=(n.current.y-i.current.y)*.14,e.current&&(e.current.style.left=i.current.x+"px",e.current.style.top=i.current.y+"px"),s=requestAnimationFrame(o)};o();const a=setTimeout(()=>{document.querySelectorAll("a, button, .c-card").forEach(l=>{l.addEventListener("mouseenter",()=>{var c,u;(c=t.current)==null||c.classList.add("hovered"),(u=e.current)==null||u.classList.add("hovered")}),l.addEventListener("mouseleave",()=>{var c,u;(c=t.current)==null||c.classList.remove("hovered"),(u=e.current)==null||u.classList.remove("hovered")})})},800);return()=>{cancelAnimationFrame(s),window.removeEventListener("mousemove",r),clearTimeout(a)}},[]),T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"cursor-dot",ref:t}),T.jsx("div",{className:"cursor-ring",ref:e})]})}function hN(){const[t,e]=K.useState(0);return K.useEffect(()=>{const n=()=>{const i=document.body.scrollHeight-innerHeight;e(i>0?scrollY/i*100:0)};return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),T.jsx("div",{className:"scroll-prog",children:T.jsx("div",{className:"scroll-prog-fill",style:{width:`${t}%`}})})}function pN({onDone:t}){return T.jsxs(Be.div,{className:"loader",exit:{opacity:0,transition:{duration:.5}},children:[T.jsx(Be.div,{className:"loader-title",initial:{opacity:0,y:22,filter:"blur(10px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{duration:.65,ease:[.22,1,.36,1]},children:"FISMUN'26"}),T.jsx("div",{className:"loader-bar",children:T.jsx(Be.div,{className:"loader-bar-fill",initial:{scaleX:0},animate:{scaleX:1},transition:{duration:1.5,ease:[.22,1,.36,1],delay:.3},onAnimationComplete:t})}),T.jsx(Be.p,{className:"loader-sub",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:"26 June 2026 · Bigger · Better · Bolder"})]})}function mN(){const t=K.useRef(null);return K.useEffect(()=>{const e=t.current,n=e.getContext("2d");let i,r,s=[],o;const a=()=>{i=e.width=innerWidth,r=e.height=innerHeight};a(),window.addEventListener("resize",a);for(let c=0;c<90;c++)s.push({x:Math.random()*i,y:Math.random()*r,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.2+.3,a:Math.random()*.25+.06});const l=()=>{n.clearRect(0,0,i,r),s.forEach(c=>{c.x+=c.vx,c.y+=c.vy,(c.x<0||c.x>i)&&(c.vx*=-1),(c.y<0||c.y>r)&&(c.vy*=-1),n.beginPath(),n.arc(c.x,c.y,c.r,0,Math.PI*2),n.fillStyle=`rgba(237,232,220,${c.a})`,n.fill()});for(let c=0;c<s.length;c++)for(let u=c+1;u<s.length;u++){const d=s[c].x-s[u].x,f=s[c].y-s[u].y,p=Math.sqrt(d*d+f*f);p<110&&(n.beginPath(),n.moveTo(s[c].x,s[c].y),n.lineTo(s[u].x,s[u].y),n.strokeStyle=`rgba(237,232,220,${(1-p/110)*.07})`,n.lineWidth=.5,n.stroke())}o=requestAnimationFrame(l)};return l(),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",a)}},[]),T.jsx("canvas",{ref:t,className:"particle-canvas"})}const W0=[{id:"hero",label:"Home"},{id:"secretariat",label:"About"},{id:"committees",label:"Committees"},{id:"coc",label:"Resources"},{id:"register",label:"Register"},{id:"contact",label:"Contact"}];function gN(){const[t,e]=K.useState(!1),[n,i]=K.useState("hero"),r=K.useRef(!1);K.useEffect(()=>{const o=()=>{if(e(scrollY>60),r.current)return;const a=W0.map(l=>l.id==="contact"?"register":l.id).filter((l,c,u)=>u.indexOf(l)===c).reverse();for(const l of a){const c=document.getElementById(l);if(c&&scrollY>=c.offsetTop-140){if(l==="register"){const u=document.getElementById("contact");if(u&&scrollY>=u.offsetTop-200){i("contact");break}}i(l);break}}};return window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]);const s=K.useCallback((o,a)=>{var l;o.preventDefault(),i(a),r.current=!0,setTimeout(()=>{r.current=!1},900),(l=document.getElementById(a))==null||l.scrollIntoView({behavior:"smooth"})},[]);return T.jsxs(Be.nav,{className:`nav${t?" stuck":""}`,initial:{opacity:0,y:-16},animate:{opacity:1,y:0},transition:{delay:2.2,duration:.6,ease:[.22,1,.36,1]},children:[T.jsx(Be.div,{className:"nav-logo-left",initial:{opacity:0,x:-12},animate:{opacity:1,x:0},transition:{delay:2.4,duration:.6,ease:[.22,1,.36,1]},children:T.jsx("img",{src:"/logo.png",alt:"FISMUN",className:"nav-logo-img"})}),W0.map(({id:o,label:a})=>T.jsx("a",{href:`#${o}`,className:`nav-link${n===o?" active":""}`,onClick:l=>s(l,o),children:a},o)),T.jsx(Be.div,{className:"nav-logo-right",initial:{opacity:0,x:12},animate:{opacity:1,x:0},transition:{delay:2.4,duration:.6,ease:[.22,1,.36,1]},children:T.jsx("img",{src:"/fis_Logo.png",alt:"Freedom International School",className:"nav-logo-img nav-logo-school"})})]})}function vN(){const t="FISMUN'26".split("");return T.jsxs("section",{id:"hero",className:"hero section page-section",children:[T.jsxs("div",{className:"logo-holo-wrap",children:[T.jsx(Ba,{}),T.jsx("div",{className:"globe-overlay",children:T.jsx(cN,{overlay:!0})}),T.jsx("div",{className:"holo-rings",children:[0,1,2].map(e=>T.jsx("div",{className:"holo-ring"},e))}),T.jsx("div",{className:"hero-sweep"})]}),T.jsxs("div",{className:"hero-content",children:[T.jsx(Be.h1,{className:"hero-title glitch",initial:"hidden",animate:"visible",variants:{visible:{transition:{staggerChildren:.055,delayChildren:1.8}}},children:t.map((e,n)=>T.jsx(Be.span,{style:{display:"inline-block",transformOrigin:"bottom center"},variants:{hidden:{opacity:0,y:90,rotateX:-85,filter:"blur(6px)"},visible:{opacity:1,y:0,rotateX:0,filter:"blur(0px)",transition:{duration:.65,ease:[.22,1,.36,1]}}},children:e},n))}),T.jsx(Be.p,{className:"hero-tagline",initial:{opacity:0,y:18,filter:"blur(8px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{delay:2.8,duration:.8,ease:[.22,1,.36,1]},children:"BIGGER. BETTER. BOLDER."}),T.jsx(Be.div,{className:"hero-date",initial:{opacity:0},animate:{opacity:1},transition:{delay:3.3,duration:.6},children:"26 June – 28 June 2026"})]}),T.jsxs(Be.div,{className:"scroll-hint",initial:{opacity:0},animate:{opacity:1},transition:{delay:3.6,duration:.8},children:[T.jsx("span",{children:"Scroll"}),T.jsx("div",{className:"scroll-hint-line"})]})]})}function _N(){return T.jsxs("section",{id:"secretariat",className:"section page-section secretariat-pg",children:[T.jsx(Ba,{dim:!0,size:"min(480px, 76vw)"}),T.jsxs("div",{className:"secretariat-inner",children:[T.jsx(rn,{children:T.jsx("h2",{className:"section-title",children:"LETTER FROM THE SECRETARIAT"})}),T.jsx("div",{className:"sec-layout",children:T.jsxs(rn,{delay:.1,className:"letter-card",children:[T.jsx("div",{className:"letter-quote",children:'"'}),T.jsxs("p",{className:"letter-body",children:["Dear Delegates,",T.jsx("br",{}),"It is with great warmth and pride that we welcome each one of you to this conference.",T.jsx("br",{}),"Model United Nations is not just about debate and diplomacy, it is about discovering your voice, learning to listen, and understanding perspectives beyond your own. For some of you, this may be your first conference, and feeling nervous is completely natural. What matters is not perfection, but the willingness to participate and grow.",T.jsx("br",{}),"For others, this may be another step in your MUN journey, yet each conference brings something new such as fresh challenges, new ideas, and moments that stay with you longer than expected. As the Secretariat, we have worked to create an environment where every voice is valued. Often, the most meaningful experiences come not from awards, but from conversations, collaboration, and the small moments in between.",T.jsx("br",{}),"As you step into committee, be curious, be respectful, and be bold in your own way. Speak when you can, listen when it matters, and most importantly, allow yourself to fully experience this conference.",T.jsx("br",{}),"We are truly glad to have you here and look forward to the energy and ideas you bring.",T.jsx("br",{}),"Warm regards,",T.jsx("br",{}),"The Secretariat"]}),T.jsxs("div",{className:"letter-sigs",children:[T.jsxs("div",{className:"letter-sig-item",children:[T.jsx("span",{className:"letter-sig-name",children:"Ishaan Gowda"}),T.jsx("span",{className:"letter-sig-role",children:"Secretary General"})]}),T.jsxs("div",{className:"letter-sig-item",children:[T.jsx("span",{className:"letter-sig-name",children:"Sarah Susan"}),T.jsx("span",{className:"letter-sig-role",children:"Deputy Secretary General"})]}),T.jsxs("div",{className:"letter-sig-item",children:[T.jsx("span",{className:"letter-sig-name",children:"Gaurav Shetty"}),T.jsx("span",{className:"letter-sig-role",children:"Director General"})]})]})]})})]})]})}function yN(t){const[e,n]=K.useState({days:0,hours:0,minutes:0,seconds:0});return K.useEffect(()=>{const i=()=>{const s=new Date(t)-new Date;s<=0||n({days:Math.floor(s/864e5),hours:Math.floor(s%864e5/36e5),minutes:Math.floor(s%36e5/6e4),seconds:Math.floor(s%6e4/1e3)})};i();const r=setInterval(i,1e3);return()=>clearInterval(r)},[t]),e}function Ul({value:t,len:e=2}){const n=String(t).padStart(e,"0");return T.jsx("div",{className:"cd-digit",children:T.jsx(Be.span,{initial:{y:-18,opacity:0},animate:{y:0,opacity:1},transition:{duration:.26,ease:[.22,1,.36,1]},style:{display:"inline-block"},children:n},n)})}function xN(){const{days:t,hours:e,minutes:n,seconds:i}=yN(uN);return T.jsxs("section",{id:"countdown",className:"countdown section page-section",children:[T.jsx(Ba,{dim:!0,size:"min(420px, 68vw)"}),T.jsxs("div",{className:"countdown-content",children:[T.jsx(rn,{children:T.jsx("h2",{className:"section-title",children:"LET THE COUNTDOWN BEGIN"})}),T.jsx(rn,{delay:.08,children:T.jsxs("div",{className:"cd-row",children:[T.jsxs("div",{className:"cd-unit",children:[T.jsx(Ul,{value:t,len:3}),T.jsx("div",{className:"cd-label",children:"Days"})]}),T.jsx("span",{className:"cd-sep",children:":"}),T.jsxs("div",{className:"cd-unit",children:[T.jsx(Ul,{value:e}),T.jsx("div",{className:"cd-label",children:"Hours"})]}),T.jsx("span",{className:"cd-sep",children:":"}),T.jsxs("div",{className:"cd-unit",children:[T.jsx(Ul,{value:n}),T.jsx("div",{className:"cd-label",children:"Minutes"})]}),T.jsx("span",{className:"cd-sep",children:":"}),T.jsxs("div",{className:"cd-unit",children:[T.jsx(Ul,{value:i}),T.jsx("div",{className:"cd-label",children:"Seconds"})]})]})}),T.jsx(rn,{delay:.16,children:T.jsxs("p",{className:"cd-desc",children:["FISMUN 2026, IN ITS FOURTH EDITION, CONTINUES ITS JOURNEY OF BRINGING STUDENTS TOGETHER TO LEARN, DEBATE, AND GROW. IT'S A SPACE WHERE IDEAS ARE SHARED, PERSPECTIVES ARE CHALLENGED, AND DELEGATES GET A CHANCE TO STEP INTO THE WORLD OF DIPLOMACY.",T.jsx("br",{}),T.jsx("br",{}),"MORE THAN JUST A CONFERENCE, FISMUN IS ABOUT BUILDING CONFIDENCE, MAKING CONNECTIONS, AND UNDERSTANDING GLOBAL ISSUES IN A MEANINGFUL WAY."]})})]})]})}function SN({target:t,suffix:e,label:n}){const i=K.useRef(null),r=HR(i,{once:!0,margin:"-100px"}),[s,o]=K.useState(0);return K.useEffect(()=>r?BR(0,t,{duration:1.55,ease:[.22,1,.36,1],onUpdate:l=>o(Math.floor(l))}).stop:void 0,[r,t]),T.jsxs(Be.div,{ref:i,className:"stat-item",initial:{opacity:0,y:28},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:[.22,1,.36,1]},children:[T.jsxs("div",{className:"stat-num",children:[s,e]}),T.jsx("div",{className:"stat-lbl",children:n})]})}function MN(){return T.jsx("div",{className:"stats-bar section",children:dN.map(t=>T.jsx(SN,{...t},t.label))})}function EN({committee:t,onClose:e}){var n;return K.useEffect(()=>{document.body.style.overflow="hidden";const i=r=>{r.key==="Escape"&&e()};return window.addEventListener("keydown",i),()=>{document.body.style.overflow="",window.removeEventListener("keydown",i)}},[e]),T.jsx(Be.div,{className:"cd-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},onClick:e,children:T.jsxs(Be.div,{className:"cd-panel",initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"spring",stiffness:320,damping:38,mass:.9},onClick:i=>i.stopPropagation(),children:[T.jsx("button",{className:"cd-close",onClick:e,"aria-label":"Close",children:T.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:T.jsx("path",{d:"M2 2l14 14M16 2L2 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),T.jsxs("div",{className:"cd-header",children:[T.jsx("div",{className:"cd-abbr",children:t.abbr}),T.jsx("div",{className:"cd-fullname",children:t.fullName}),T.jsx("div",{className:"cd-divider"})]}),t.agenda&&T.jsxs("div",{className:"cd-section",children:[T.jsx("div",{className:"cd-section-lbl",children:"Agenda"}),T.jsx("p",{className:"cd-agenda",children:t.agenda})]}),T.jsx("p",{className:"cd-description",children:t.description}),((n=t.board)==null?void 0:n.length)>0&&T.jsxs("div",{className:"cd-section",children:[T.jsx("div",{className:"cd-section-lbl",children:"Executive Board"}),T.jsx("div",{className:"cd-board",children:t.board.map(i=>T.jsxs("div",{className:"cd-board-row",children:[T.jsx("span",{className:"cd-board-role",children:i.role}),T.jsx("span",{className:"cd-board-name",children:i.name})]},i.name))})]}),T.jsxs("div",{className:"cd-actions",children:[t.matrixUrl?T.jsxs("a",{href:t.matrixUrl,target:"_blank",rel:"noopener noreferrer",className:"cd-btn",children:[T.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),T.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),T.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),T.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),"View Matrix"]}):T.jsxs("button",{className:"cd-btn",children:[T.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),T.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),T.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),T.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]}),"View Matrix"]}),t.backgroundGuideUrl?T.jsxs("a",{href:t.backgroundGuideUrl,target:"_blank",rel:"noopener noreferrer",className:"cd-btn",children:[T.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),T.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),"View Background Guide"]}):T.jsxs("button",{className:"cd-btn",children:[T.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),T.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),"View Background Guide"]})]})]})})}function TN(){const[t,e]=K.useState(null);return T.jsxs(T.Fragment,{children:[T.jsxs("section",{id:"committees",className:"committees section",children:[T.jsx(Ba,{dim:!0,size:"min(380px, 58vw)"}),T.jsxs("div",{className:"committee-orbs","aria-hidden":"true",children:[T.jsx("div",{className:"orb orb-1"}),T.jsx("div",{className:"orb orb-2"}),T.jsx("div",{className:"orb orb-3"}),T.jsx("div",{className:"orb orb-4"}),T.jsx("div",{className:"orb orb-5"}),T.jsx("div",{className:"orb orb-6"})]}),T.jsxs("div",{className:"committees-content",children:[T.jsx(rn,{children:T.jsx("h2",{className:"section-title",children:"INTRODUCING THE COMMITTEES"})}),T.jsx(Be.div,{className:"committees-grid",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},variants:{visible:{transition:{staggerChildren:.07,delayChildren:.05}}},children:_M.map((n,i)=>T.jsx(GR,{committee:n,index:i,onClick:()=>e(n)},n.abbr))})]})]}),T.jsx(Qh,{children:t&&T.jsx(EN,{committee:t,onClose:()=>e(null)})})]})}const wN="https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE?usp=sharing",AN=[{emoji:"🌍",label:"Portfolio Matrices",key:"matrix",href:"https://docs.google.com/document/d/1l3MEPxJgwCKz4zAydHOJZyxQZ3FiAydwl8bXpZkMaB8/edit?usp=sharing"},{emoji:"📋",label:"Code of Conduct",key:"coc",href:"https://drive.google.com/file/d/1FpiyI4yJp4gzh9Hiad9RYzR53XThT5jo/view?usp=sharing"},{icon:"gallery",label:"Photos",key:"gallery",href:wN}];function CN(){return T.jsx(T.Fragment,{children:T.jsxs("section",{id:"coc",className:"resources section page-section",children:[T.jsx(Ba,{dim:!0,size:"min(460px, 72vw)"}),T.jsxs("div",{className:"resources-inner",children:[T.jsx(rn,{children:T.jsx("h2",{className:"section-title",children:"DELEGATE RESOURCES"})}),T.jsx(rn,{delay:.08,children:T.jsx("div",{className:"res-top-row",children:AN.map(t=>T.jsxs(Be.a,{className:"res-card",href:t.href||"#",target:t.href?"_blank":void 0,rel:t.href?"noopener noreferrer":void 0,whileHover:{scale:1.03,y:-4},whileTap:{scale:.97},transition:{type:"spring",stiffness:360,damping:22},children:[t.icon==="gallery"?T.jsxs("svg",{className:"res-card-icon",width:"34",height:"34",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),T.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),T.jsx("path",{d:"M21 15l-5-5L5 21"})]}):T.jsx("span",{className:"res-card-emoji",children:t.emoji}),T.jsx("span",{className:"res-card-label",children:t.label})]},t.key))})}),T.jsx(rn,{delay:.14,children:T.jsx("h3",{className:"res-sub-title",children:"Background Guides"})}),T.jsx(Be.div,{className:"res-bg-grid",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},variants:{visible:{transition:{staggerChildren:.06,delayChildren:.05}}},children:_M.map(t=>t.backgroundGuideUrl?T.jsxs(Be.a,{className:"res-bg-card",href:t.backgroundGuideUrl,target:"_blank",rel:"noopener noreferrer",variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.22,1,.36,1]}}},whileHover:{scale:1.03,y:-4},whileTap:{scale:.97},transition:{type:"spring",stiffness:360,damping:22},children:[T.jsxs("div",{className:"res-bg-card-inner",children:[T.jsx("span",{className:"res-bg-abbr",children:t.abbr}),T.jsx("span",{className:"res-bg-full",children:t.fullName})]}),T.jsx("span",{className:"res-bg-arrow",children:"→"})]},t.abbr):T.jsxs(Be.button,{className:"res-bg-card",variants:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.22,1,.36,1]}}},whileHover:{scale:1.03,y:-4},whileTap:{scale:.97},transition:{type:"spring",stiffness:360,damping:22},children:[T.jsxs("div",{className:"res-bg-card-inner",children:[T.jsx("span",{className:"res-bg-abbr",children:t.abbr}),T.jsx("span",{className:"res-bg-full",children:t.fullName})]}),T.jsx("span",{className:"res-bg-arrow",children:"→"})]},t.abbr))})]})]})})}function RN(){const[t,e]=K.useState(!1),n=i=>{var a,l;const r=encodeURIComponent(window.location.href),s=encodeURIComponent("Join me at FISMUN'26 — Bigger. Better. Bolder. 26 June 2026."),o={whatsapp:`https://api.whatsapp.com/send?text=${s}%20${r}`,facebook:`https://www.facebook.com/sharer/sharer.php?u=${r}`,linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${r}`,twitter:`https://twitter.com/intent/tweet?text=${s}&url=${r}`};if(i==="copy"){(a=navigator.clipboard)==null||a.writeText(window.location.href).then(()=>{e(!0),setTimeout(()=>e(!1),2200)});return}if(i==="instagram"){navigator.share?navigator.share({title:"FISMUN'26",text:decodeURIComponent(s),url:window.location.href}):(l=navigator.clipboard)==null||l.writeText(window.location.href).then(()=>{e(!0),setTimeout(()=>e(!1),2200)});return}window.open(o[i],"_blank","noopener,width=620,height=500")};return T.jsxs("div",{className:"share-row",children:[T.jsx("p",{className:"share-label",children:"Share FISMUN'26"}),T.jsxs("div",{className:"share-btns",children:[T.jsx(Be.button,{className:"share-btn share-wa",onClick:()=>n("whatsapp"),title:"Share on WhatsApp",whileHover:{scale:1.12,y:-3},whileTap:{scale:.93},transition:{type:"spring",stiffness:400,damping:18},children:T.jsxs("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:[T.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"}),T.jsx("path",{d:"M11.999 2C6.477 2 2 6.477 2 12c0 1.885.52 3.648 1.428 5.158L2 22l4.946-1.403A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 11.999 2zm.001 18a7.97 7.97 0 01-4.074-1.118l-.292-.174-3.033.86.838-3.07-.19-.306A7.997 7.997 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"})]})}),T.jsx(Be.button,{className:"share-btn share-fb",onClick:()=>n("facebook"),title:"Share on Facebook",whileHover:{scale:1.12,y:-3},whileTap:{scale:.93},transition:{type:"spring",stiffness:400,damping:18},children:T.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:T.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),T.jsx(Be.button,{className:"share-btn share-ig",onClick:()=>n("instagram"),title:"Share on Instagram",whileHover:{scale:1.12,y:-3},whileTap:{scale:.93},transition:{type:"spring",stiffness:400,damping:18},children:T.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:T.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})})}),T.jsx(Be.button,{className:"share-btn share-li",onClick:()=>n("linkedin"),title:"Share on LinkedIn",whileHover:{scale:1.12,y:-3},whileTap:{scale:.93},transition:{type:"spring",stiffness:400,damping:18},children:T.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:T.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),T.jsx(Be.button,{className:"share-btn share-x",onClick:()=>n("twitter"),title:"Share on X (Twitter)",whileHover:{scale:1.12,y:-3},whileTap:{scale:.93},transition:{type:"spring",stiffness:400,damping:18},children:T.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:T.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),T.jsx(Be.button,{className:`share-btn share-copy${t?" copied":""}`,onClick:()=>n("copy"),title:"Copy link",whileHover:{scale:1.12,y:-3},whileTap:{scale:.93},transition:{type:"spring",stiffness:400,damping:18},children:t?T.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:T.jsx("path",{d:"M20 6L9 17l-5-5"})}):T.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[T.jsx("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),T.jsx("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})})]})]})}function PN(){const[t,e]=K.useState(!1);return T.jsx("section",{id:"register",className:"register section page-section",children:T.jsxs("div",{className:"register-inner",children:[T.jsx(rn,{delay:.08,children:T.jsxs("h2",{className:"register-title",children:["STEP INTO",T.jsx("br",{}),"DIPLOMACY"]})}),T.jsx(rn,{delay:.16,children:T.jsx("p",{className:"register-sub",children:"Join delegates from across the country for three days of world-class debate and diplomacy"})}),T.jsx(rn,{delay:.24,children:T.jsx("div",{className:"register-btn-group",children:T.jsx(Qh,{mode:"wait",children:t?T.jsxs(Be.div,{className:"register-btn-expanded",initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.85},transition:{type:"spring",stiffness:380,damping:22},children:[T.jsxs(Be.a,{href:"https://forms.gle/s5nLLwbKFcjwgEby8",target:"_blank",rel:"noopener noreferrer",className:"btn-register",whileHover:{scale:1.04,y:-4},whileTap:{scale:.97},transition:{type:"spring",stiffness:400,damping:18},initial:{opacity:0,x:-20},animate:{opacity:1,x:0},children:["Individual",T.jsx("br",{}),"Registration"]}),T.jsxs(Be.a,{href:"https://forms.gle/AEThzbiQbr1WpDCF9",target:"_blank",rel:"noopener noreferrer",className:"btn-register btn-register-outline",whileHover:{scale:1.04,y:-4},whileTap:{scale:.97},transition:{type:"spring",stiffness:400,damping:18},initial:{opacity:0,x:20},animate:{opacity:1,x:0},children:["Delegation",T.jsx("br",{}),"Registration"]})]},"register-expanded"):T.jsx(Be.button,{className:"btn-register",onClick:()=>e(!0),whileHover:{scale:1.04,y:-4},whileTap:{scale:.97},transition:{type:"spring",stiffness:400,damping:18},initial:{opacity:1,scale:1},exit:{opacity:0,scale:.85},children:"Register Now"},"register-now")})})}),T.jsx(rn,{delay:.34,children:T.jsx(RN,{})}),T.jsx(rn,{delay:.44,children:T.jsxs("div",{className:"contact-section",id:"contact",children:[T.jsx("h3",{className:"contact-title",children:"CONTACT US"}),T.jsxs("div",{className:"contact-items",children:[T.jsxs("a",{href:"mailto:freedominternationalschoolmun@gmail.com",className:"contact-item",children:[T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),T.jsx("polyline",{points:"22,6 12,13 2,6"})]}),"freedominternationalschoolmun@gmail.com"]}),T.jsxs("a",{href:"https://www.instagram.com/fis.mun?igsh=Z2g5Y29jNDZzeXZ3",target:"_blank",rel:"noopener noreferrer",className:"contact-item",children:[T.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),T.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),T.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),"@fis.mun"]})]}),T.jsxs("a",{href:"https://www.google.com/maps/dir//Freedom+International+School,+C+A+%23+33,+Sector+IV,+HSR+Layout,+Bengaluru,+Karnataka+560102/@12.9007616,77.643776,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae148f631fa5df:0xc30c45871af94d8b!2m2!1d77.6419898!2d12.9165463?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D",target:"_blank",rel:"noopener noreferrer",className:"contact-map-wrap",title:"Open in Google Maps",children:[T.jsx("iframe",{className:"contact-map-iframe",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.6419898!3d12.9165463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae148f631fa5df%3A0xc30c45871af94d8b!2sFreedom%20International%20School!5e0!3m2!1sen!2sin!4v1",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Freedom International School"}),T.jsx("div",{className:"contact-map-overlay",children:T.jsxs("span",{className:"contact-map-cta",children:[T.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[T.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),T.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Open in Google Maps"]})})]})]})})]})})}function bN(){return T.jsxs("footer",{className:"footer",id:"footer-contact",children:[T.jsxs("div",{className:"footer-brand",children:[T.jsx("img",{src:"/logo.png",alt:"FISMUN",className:"footer-logo-img"}),T.jsx("div",{className:"footer-logo",children:"FISMUN'26"}),T.jsx("div",{className:"footer-tag",children:"Bigger · Better · Bolder"})]}),T.jsxs("div",{className:"footer-center",children:[T.jsx("div",{className:"footer-links",children:[["Home","hero"],["About","secretariat"],["Committees","committees"],["Resources","coc"],["Register","register"],["Contact","contact"]].map(([t,e])=>T.jsx("a",{href:`#${e}`,className:"footer-link",children:t},t))}),T.jsx("div",{className:"footer-copy",children:"© 2026 FISMUN. All rights reserved."})]}),T.jsx("div",{className:"footer-school",children:T.jsx("img",{src:"/fis_Logo.png",alt:"Freedom International School",className:"footer-logo-school-img"})})]})}function LN(){const[t,e]=K.useState(!1);return T.jsxs(T.Fragment,{children:[T.jsx(Qh,{children:!t&&T.jsx(pN,{onDone:()=>e(!0)})}),T.jsxs("div",{className:"bg-blobs","aria-hidden":"true",children:[T.jsx("div",{className:"blob blob-1"}),T.jsx("div",{className:"blob blob-2"}),T.jsx("div",{className:"blob blob-3"}),T.jsx("div",{className:"blob blob-4"}),T.jsx("div",{className:"blob blob-5"})]}),T.jsx(mN,{}),T.jsx(hN,{}),T.jsx(fN,{}),T.jsx(gN,{}),T.jsxs("main",{children:[T.jsx(vN,{}),"          ",T.jsx(_N,{}),"   ",T.jsx(xN,{}),"     ",T.jsx(MN,{}),T.jsx(TN,{}),"    ",T.jsx(CN,{}),T.jsx(PN,{})]}),T.jsx(bN,{})]})}kd.createRoot(document.getElementById("root")).render(T.jsx(VM.StrictMode,{children:T.jsx(LN,{})}));
