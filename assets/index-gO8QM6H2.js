import{i as F,k as C,I as g,r as k,m as G,S as J,b as Q}from"./index-3WNw8ckj.js";import{y as T,A as Z,k as ee,B as te,z as E,r as ne,C as ie,D as oe,E as se,t as R}from"./vue.esm-bundler-CdyOBFpo.js";function D(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const L=Symbol("rippleStop"),re=80;function b(e,t){e.style.transform=t,e.style.webkitTransform=t}function x(e){return e.constructor.name==="TouchEvent"}function H(e){return e.constructor.name==="KeyboardEvent"}const ae=function(e,t){var u;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=0,i=0;if(!H(e)){const d=t.getBoundingClientRect(),l=x(e)?e.touches[e.touches.length-1]:e;o=l.clientX-d.left,i=l.clientY-d.top}let s=0,r=.3;(u=t._ripple)!=null&&u.circle?(r=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((o-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const a=`${(t.clientWidth-s*2)/2}px`,m=`${(t.clientHeight-s*2)/2}px`,f=n.center?a:`${o-s}px`,c=n.center?m:`${i-s}px`;return{radius:s,scale:r,x:f,y:c,centerX:a,centerY:m}},y={show(e,t){var l;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((l=t==null?void 0:t._ripple)!=null&&l.enabled))return;const o=document.createElement("span"),i=document.createElement("span");o.appendChild(i),o.className="v-ripple__container",n.class&&(o.className+=` ${n.class}`);const{radius:s,scale:r,x:a,y:m,centerX:f,centerY:c}=ae(e,t,n),u=`${s*2}px`;i.className="v-ripple__animation",i.style.width=u,i.style.height=u,t.appendChild(o);const d=window.getComputedStyle(t);d&&d.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),b(i,`translate(${a}, ${m}) scale3d(${r},${r},${r})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),b(i,`translate(${f}, ${c}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const o=performance.now()-Number(n.dataset.activated),i=Math.max(250-o,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===e&&e.removeChild(n.parentNode)},300)},i)}};function W(e){return typeof e>"u"||!!e}function w(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[L])){if(e[L]=!0,x(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||H(e),n._ripple.class&&(t.class=n._ripple.class),x(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{y.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var o;(o=n==null?void 0:n._ripple)!=null&&o.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},re)}else y.show(e,n,t)}}function O(e){e[L]=!0}function p(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{p(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),y.hide(t)}}function P(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let _=!1;function M(e){!_&&(e.keyCode===C.enter||e.keyCode===C.space)&&(_=!0,w(e))}function j(e){_=!1,p(e)}function z(e){_&&(_=!1,p(e))}function U(e,t,n){const{value:o,modifiers:i}=t,s=W(o);if(s||y.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,F(o)&&o.class&&(e._ripple.class=o.class),s&&!n){if(i.stop){e.addEventListener("touchstart",O,{passive:!0}),e.addEventListener("mousedown",O);return}e.addEventListener("touchstart",w,{passive:!0}),e.addEventListener("touchend",p,{passive:!0}),e.addEventListener("touchmove",P,{passive:!0}),e.addEventListener("touchcancel",p),e.addEventListener("mousedown",w),e.addEventListener("mouseup",p),e.addEventListener("mouseleave",p),e.addEventListener("keydown",M),e.addEventListener("keyup",j),e.addEventListener("blur",z),e.addEventListener("dragstart",p,{passive:!0})}else!s&&n&&I(e)}function I(e){e.removeEventListener("mousedown",w),e.removeEventListener("touchstart",w),e.removeEventListener("touchend",p),e.removeEventListener("touchmove",P),e.removeEventListener("touchcancel",p),e.removeEventListener("mouseup",p),e.removeEventListener("mouseleave",p),e.removeEventListener("keydown",M),e.removeEventListener("keyup",j),e.removeEventListener("dragstart",p),e.removeEventListener("blur",z)}function ce(e,t){U(e,t,!1)}function ue(e){delete e._ripple,I(e)}function de(e,t){if(t.value===t.oldValue)return;const n=W(t.oldValue);U(e,t,n)}const we={mounted:ce,unmounted:ue,updated:de};function _e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=T(),o=T();if(g){const i=new ResizeObserver(s=>{e==null||e(s,i),s.length&&(t==="content"?o.value=s[0].contentRect:o.value=s[0].target.getBoundingClientRect())});Z(()=>{i.disconnect()}),ee(n,(s,r)=>{r&&(i.unobserve(k(r)),o.value=void 0),s&&i.observe(k(s))},{flush:"post"})}return{resizeRef:n,contentRect:te(o)}}const le=Symbol.for("vuetify:display"),S={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},pe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:S;return G(S,e)};function $(e){return g&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function N(e){return g&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function A(e){const t=g&&!e?window.navigator.userAgent:"ssr";function n(v){return!!t.match(v)}const o=n(/android/i),i=n(/iphone|ipad|ipod/i),s=n(/cordova/i),r=n(/electron/i),a=n(/chrome/i),m=n(/edge/i),f=n(/firefox/i),c=n(/opera/i),u=n(/win/i),d=n(/mac/i),l=n(/linux/i);return{android:o,ios:i,cordova:s,electron:r,chrome:a,edge:m,firefox:f,opera:c,win:u,mac:d,linux:l,touch:J,ssr:t==="ssr"}}function ge(e,t){const{thresholds:n,mobileBreakpoint:o}=pe(e),i=E(N(t)),s=E(A(t)),r=ne({}),a=E($(t));function m(){i.value=N(),a.value=$()}function f(){m(),s.value=A()}return ie(()=>{const c=a.value<n.sm,u=a.value<n.md&&!c,d=a.value<n.lg&&!(u||c),l=a.value<n.xl&&!(d||u||c),v=a.value<n.xxl&&!(l||d||u||c),h=a.value>=n.xxl,V=c?"xs":u?"sm":d?"md":l?"lg":v?"xl":"xxl",q=typeof o=="number"?o:n[o],K=a.value<q;r.xs=c,r.sm=u,r.md=d,r.lg=l,r.xl=v,r.xxl=h,r.smAndUp=!c,r.mdAndUp=!(c||u),r.lgAndUp=!(c||u||d),r.xlAndUp=!(c||u||d||l),r.smAndDown=!(d||l||v||h),r.mdAndDown=!(l||v||h),r.lgAndDown=!(v||h),r.xlAndDown=!h,r.name=V,r.height=i.value,r.width=a.value,r.mobile=K,r.mobileBreakpoint=o,r.platform=s.value,r.thresholds=n}),g&&window.addEventListener("resize",m,{passive:!0}),{...oe(r),update:f,ssr:!!t}}function ye(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Q();const n=se(le);if(!n)throw new Error("Could not find Vuetify display injection");const o=R(()=>{if(!e.mobileBreakpoint)return n.mobile.value;const s=typeof e.mobileBreakpoint=="number"?e.mobileBreakpoint:n.thresholds.value[e.mobileBreakpoint];return n.width.value<s}),i=R(()=>t?{[`${t}--mobile`]:o.value}:{});return{...n,displayClasses:i,mobile:o}}function me(){return!0}function Y(e,t,n){if(!e||X(e,n)===!1)return!1;const o=D(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const i=(typeof n.value=="object"&&n.value.include||(()=>[]))();return i.push(t),!i.some(s=>s==null?void 0:s.contains(e.target))}function X(e,t){return(typeof t.value=="object"&&t.value.closeConditional||me)(e)}function fe(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Y(e,t,n)&&setTimeout(()=>{X(e,n)&&o&&o(e)},0)}function B(e,t){const n=D(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Ee={mounted(e,t){const n=i=>fe(i,e,t),o=i=>{e._clickOutside.lastMousedownWasOutside=Y(i,e,t)};B(e,i=>{i.addEventListener("click",n,!0),i.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(B(e,n=>{var s;if(!n||!((s=e._clickOutside)!=null&&s[t.instance.$.uid]))return;const{onClick:o,onMousedown:i}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",i,!0)}),delete e._clickOutside[t.instance.$.uid])}};export{Ee as C,le as D,we as R,ye as a,ge as c,_e as u};
