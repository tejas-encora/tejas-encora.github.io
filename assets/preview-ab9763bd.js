/* empty css              */import{t as lo}from"./chunk-6P7RB4HF-c879cb99.js";/*!
 * Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 * Copyright 2023 Fonticons, Inc.
 */(function(){function t(a,n){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);n&&(o=o.filter(function(f){return Object.getOwnPropertyDescriptor(a,f).enumerable})),r.push.apply(r,o)}return r}function e(a){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?t(Object(r),!0).forEach(function(o){c(a,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(r,o))})}return a}function i(a){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(a)}function s(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function l(a,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,o.key,o)}}function d(a,n,r){return n&&l(a.prototype,n),r&&l(a,r),Object.defineProperty(a,"prototype",{writable:!1}),a}function c(a,n,r){return n in a?Object.defineProperty(a,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[n]=r,a}function v(a,n){return h(a)||O(a,n)||I(a,n)||V()}function b(a){return w(a)||E(a)||I(a)||B()}function w(a){if(Array.isArray(a))return D(a)}function h(a){if(Array.isArray(a))return a}function E(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function O(a,n){var r=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(r!=null){var o=[],f=!0,m=!1,u,g;try{for(r=r.call(a);!(f=(u=r.next()).done)&&(o.push(u.value),!(n&&o.length===n));f=!0);}catch(p){m=!0,g=p}finally{try{!f&&r.return!=null&&r.return()}finally{if(m)throw g}}return o}}function I(a,n){if(a){if(typeof a=="string")return D(a,n);var r=Object.prototype.toString.call(a).slice(8,-1);if(r==="Object"&&a.constructor&&(r=a.constructor.name),r==="Map"||r==="Set")return Array.from(a);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(a,n)}}function D(a,n){(n==null||n>a.length)&&(n=a.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=a[r];return o}function B(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var q=function(){},z={},$={},K=null,W={mark:q,measure:q};try{typeof window<"u"&&(z=window),typeof document<"u"&&($=document),typeof MutationObserver<"u"&&(K=MutationObserver),typeof performance<"u"&&(W=performance)}catch{}var st=z.navigator||{},et=st.userAgent,Lt=et===void 0?"":et,j=z,T=$,Qe=K,va=W,Dr=!!j.document,ft=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",Ze=~Lt.indexOf("MSIE")||~Lt.indexOf("Trident/"),ga,ba,pa,ha,ya,lt="___FONT_AWESOME___",qa=16,Je="fa",tn="svg-inline--fa",Et="data-fa-i2svg",Ka="data-fa-pseudo-element",jr="data-fa-pseudo-element-pending",Qa="data-prefix",Za="data-icon",an="fontawesome-i2svg",Yr="async",$r=["HTML","HEAD","STYLE","SCRIPT"],Ja=function(){try{return!0}catch{return!1}}(),_="classic",R="sharp",te=[_,R];function Xt(a){return new Proxy(a,{get:function(r,o){return o in r?r[o]:r[_]}})}var Gt=Xt((ga={},c(ga,_,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),c(ga,R,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ga)),Bt=Xt((ba={},c(ba,_,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),c(ba,R,{solid:"fass",regular:"fasr",light:"fasl"}),ba)),Vt=Xt((pa={},c(pa,_,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),c(pa,R,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),pa)),Ur=Xt((ha={},c(ha,_,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),c(ha,R,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ha)),Wr=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,en="fa-layers-text",Hr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Xr=Xt((ya={},c(ya,_,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),c(ya,R,{900:"fass",400:"fasr",300:"fasl"}),ya)),nn=[1,2,3,4,5,6,7,8,9,10],Gr=nn.concat([11,12,13,14,15,16,17,18,19,20]),Br=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qt=new Set;Object.keys(Bt[_]).map(qt.add.bind(qt)),Object.keys(Bt[R]).map(qt.add.bind(qt));var Vr=[].concat(te,b(qt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pt.GROUP,Pt.SWAP_OPACITY,Pt.PRIMARY,Pt.SECONDARY]).concat(nn.map(function(a){return"".concat(a,"x")})).concat(Gr.map(function(a){return"w-".concat(a)})),Kt=j.FontAwesomeConfig||{};function qr(a){var n=T.querySelector("script["+a+"]");if(n)return n.getAttribute(a)}function Kr(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(T&&typeof T.querySelector=="function"){var Qr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qr.forEach(function(a){var n=v(a,2),r=n[0],o=n[1],f=Kr(qr(r));f!=null&&(Kt[o]=f)})}var rn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Je,replacementClass:tn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Kt.familyPrefix&&(Kt.cssPrefix=Kt.familyPrefix);var Rt=e(e({},rn),Kt);Rt.autoReplaceSvg||(Rt.observeMutations=!1);var A={};Object.keys(rn).forEach(function(a){Object.defineProperty(A,a,{enumerable:!0,set:function(r){Rt[a]=r,Qt.forEach(function(o){return o(A)})},get:function(){return Rt[a]}})}),Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(n){Rt.cssPrefix=n,Qt.forEach(function(r){return r(A)})},get:function(){return Rt.cssPrefix}}),j.FontAwesomeConfig=A;var Qt=[];function Zr(a){return Qt.push(a),function(){Qt.splice(Qt.indexOf(a),1)}}var bt=qa,nt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Jr(a){try{for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];a.apply(void 0,r)}catch(f){if(!Ja)throw f}}function ti(a){if(!(!a||!ft)){var n=T.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=a;for(var r=T.head.childNodes,o=null,f=r.length-1;f>-1;f--){var m=r[f],u=(m.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(u)>-1&&(o=m)}return T.head.insertBefore(n,o),a}}var ai="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zt(){for(var a=12,n="";a-- >0;)n+=ai[Math.random()*62|0];return n}function Ft(a){for(var n=[],r=(a||[]).length>>>0;r--;)n[r]=a[r];return n}function ae(a){return a.classList?Ft(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(n){return n})}function on(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ei(a){return Object.keys(a||{}).reduce(function(n,r){return n+"".concat(r,'="').concat(on(a[r]),'" ')},"").trim()}function ka(a){return Object.keys(a||{}).reduce(function(n,r){return n+"".concat(r,": ").concat(a[r].trim(),";")},"")}function ee(a){return a.size!==nt.size||a.x!==nt.x||a.y!==nt.y||a.rotate!==nt.rotate||a.flipX||a.flipY}function ni(a){var n=a.transform,r=a.containerWidth,o=a.iconWidth,f={transform:"translate(".concat(r/2," 256)")},m="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),g="rotate(".concat(n.rotate," 0 0)"),p={transform:"".concat(m," ").concat(u," ").concat(g)},x={transform:"translate(".concat(o/2*-1," -256)")};return{outer:f,inner:p,path:x}}function ri(a){var n=a.transform,r=a.width,o=r===void 0?qa:r,f=a.height,m=f===void 0?qa:f,u=a.startCentered,g=u===void 0?!1:u,p="";return g&&Ze?p+="translate(".concat(n.x/bt-o/2,"em, ").concat(n.y/bt-m/2,"em) "):g?p+="translate(calc(-50% + ".concat(n.x/bt,"em), calc(-50% + ").concat(n.y/bt,"em)) "):p+="translate(".concat(n.x/bt,"em, ").concat(n.y/bt,"em) "),p+="scale(".concat(n.size/bt*(n.flipX?-1:1),", ").concat(n.size/bt*(n.flipY?-1:1),") "),p+="rotate(".concat(n.rotate,"deg) "),p}var ii=':host,:root{--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Solid";--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Regular";--fa-font-light:normal 300 1em/1 "Font Awesome 6 Light";--fa-font-thin:normal 100 1em/1 "Font Awesome 6 Thin";--fa-font-duotone:normal 900 1em/1 "Font Awesome 6 Duotone";--fa-font-sharp-solid:normal 900 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-regular:normal 400 1em/1 "Font Awesome 6 Sharp";--fa-font-sharp-light:normal 300 1em/1 "Font Awesome 6 Sharp";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}';function sn(){var a=Je,n=tn,r=A.cssPrefix,o=A.replacementClass,f=ii;if(r!==a||o!==n){var m=new RegExp("\\.".concat(a,"\\-"),"g"),u=new RegExp("\\--".concat(a,"\\-"),"g"),g=new RegExp("\\.".concat(n),"g");f=f.replace(m,".".concat(r,"-")).replace(u,"--".concat(r,"-")).replace(g,".".concat(o))}return f}var fn=!1;function ne(){A.autoAddCss&&!fn&&(ti(sn()),fn=!0)}var oi={mixout:function(){return{dom:{css:sn,insertCss:ne}}},hooks:function(){return{beforeDOMElementCreation:function(){ne()},beforeI2svg:function(){ne()}}}},ct=j||{};ct[lt]||(ct[lt]={}),ct[lt].styles||(ct[lt].styles={}),ct[lt].hooks||(ct[lt].hooks={}),ct[lt].shims||(ct[lt].shims=[]);var U=ct[lt],ln=[],si=function a(){T.removeEventListener("DOMContentLoaded",a),wa=1,ln.map(function(n){return n()})},wa=!1;ft&&(wa=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),wa||T.addEventListener("DOMContentLoaded",si));function cn(a){ft&&(wa?setTimeout(a,0):ln.push(a))}function Jt(a){var n=a.tag,r=a.attributes,o=r===void 0?{}:r,f=a.children,m=f===void 0?[]:f;return typeof a=="string"?on(a):"<".concat(n," ").concat(ei(o),">").concat(m.map(Jt).join(""),"</").concat(n,">")}function un(a,n,r){if(a&&a[n]&&a[n][r])return{prefix:n,iconName:r,icon:a[n][r]}}var fi=function(n,r){return function(o,f,m,u){return n.call(r,o,f,m,u)}},re=function(n,r,o,f){var m=Object.keys(n),u=m.length,g=f!==void 0?fi(r,f):r,p,x,y;for(o===void 0?(p=1,y=n[m[0]]):(p=0,y=o);p<u;p++)x=m[p],y=g(y,n[x],x,n);return y};function li(a){for(var n=[],r=0,o=a.length;r<o;){var f=a.charCodeAt(r++);if(f>=55296&&f<=56319&&r<o){var m=a.charCodeAt(r++);(m&64512)==56320?n.push(((f&1023)<<10)+(m&1023)+65536):(n.push(f),r--)}else n.push(f)}return n}function ie(a){var n=li(a);return n.length===1?n[0].toString(16):null}function ci(a,n){var r=a.length,o=a.charCodeAt(n),f;return o>=55296&&o<=56319&&r>n+1&&(f=a.charCodeAt(n+1),f>=56320&&f<=57343)?(o-55296)*1024+f-56320+65536:o}function mn(a){return Object.keys(a).reduce(function(n,r){var o=a[r],f=!!o.icon;return f?n[o.iconName]=o.icon:n[r]=o,n},{})}function oe(a,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=r.skipHooks,f=o===void 0?!1:o,m=mn(n);typeof U.hooks.addPack=="function"&&!f?U.hooks.addPack(a,mn(n)):U.styles[a]=e(e({},U.styles[a]||{}),m),a==="fas"&&oe("fa",n)}var xa,Aa,Sa,zt=U.styles,ui=U.shims,mi=(xa={},c(xa,_,Object.values(Vt[_])),c(xa,R,Object.values(Vt[R])),xa),se=null,dn={},vn={},gn={},bn={},pn={},di=(Aa={},c(Aa,_,Object.keys(Gt[_])),c(Aa,R,Object.keys(Gt[R])),Aa);function vi(a){return~Vr.indexOf(a)}function gi(a,n){var r=n.split("-"),o=r[0],f=r.slice(1).join("-");return o===a&&f!==""&&!vi(f)?f:null}var ta=function(){var n=function(m){return re(zt,function(u,g,p){return u[p]=re(g,m,{}),u},{})};dn=n(function(f,m,u){if(m[3]&&(f[m[3]]=u),m[2]){var g=m[2].filter(function(p){return typeof p=="number"});g.forEach(function(p){f[p.toString(16)]=u})}return f}),vn=n(function(f,m,u){if(f[u]=u,m[2]){var g=m[2].filter(function(p){return typeof p=="string"});g.forEach(function(p){f[p]=u})}return f}),pn=n(function(f,m,u){var g=m[2];return f[u]=u,g.forEach(function(p){f[p]=u}),f});var r="far"in zt||A.autoFetchSvg,o=re(ui,function(f,m){var u=m[0],g=m[1],p=m[2];return g==="far"&&!r&&(g="fas"),typeof u=="string"&&(f.names[u]={prefix:g,iconName:p}),typeof u=="number"&&(f.unicodes[u.toString(16)]={prefix:g,iconName:p}),f},{names:{},unicodes:{}});gn=o.names,bn=o.unicodes,se=Ea(A.styleDefault,{family:A.familyDefault})};Zr(function(a){se=Ea(a.styleDefault,{family:A.familyDefault})}),ta();function fe(a,n){return(dn[a]||{})[n]}function bi(a,n){return(vn[a]||{})[n]}function Ot(a,n){return(pn[a]||{})[n]}function hn(a){return gn[a]||{prefix:null,iconName:null}}function pi(a){var n=bn[a],r=fe("fas",a);return n||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function pt(){return se}var le=function(){return{prefix:null,iconName:null,rest:[]}};function Ea(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.family,o=r===void 0?_:r,f=Gt[o][a],m=Bt[o][a]||Bt[o][f],u=a in U.styles?a:null;return m||u||null}var yn=(Sa={},c(Sa,_,Object.keys(Vt[_])),c(Sa,R,Object.keys(Vt[R])),Sa);function Pa(a){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.skipLookups,f=o===void 0?!1:o,m=(n={},c(n,_,"".concat(A.cssPrefix,"-").concat(_)),c(n,R,"".concat(A.cssPrefix,"-").concat(R)),n),u=null,g=_;(a.includes(m[_])||a.some(function(x){return yn[_].includes(x)}))&&(g=_),(a.includes(m[R])||a.some(function(x){return yn[R].includes(x)}))&&(g=R);var p=a.reduce(function(x,y){var P=gi(A.cssPrefix,y);if(zt[y]?(y=mi[g].includes(y)?Ur[g][y]:y,u=y,x.prefix=y):di[g].indexOf(y)>-1?(u=y,x.prefix=Ea(y,{family:g})):P?x.iconName=P:y!==A.replacementClass&&y!==m[_]&&y!==m[R]&&x.rest.push(y),!f&&x.prefix&&x.iconName){var C=u==="fa"?hn(x.iconName):{},N=Ot(x.prefix,x.iconName);C.prefix&&(u=null),x.iconName=C.iconName||N||x.iconName,x.prefix=C.prefix||x.prefix,x.prefix==="far"&&!zt.far&&zt.fas&&!A.autoFetchSvg&&(x.prefix="fas")}return x},le());return(a.includes("fa-brands")||a.includes("fab"))&&(p.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(p.prefix="fad"),!p.prefix&&g===R&&(zt.fass||A.autoFetchSvg)&&(p.prefix="fass",p.iconName=Ot(p.prefix,p.iconName)||p.iconName),(p.prefix==="fa"||u==="fa")&&(p.prefix=pt()||"fas"),p}var hi=function(){function a(){s(this,a),this.definitions={}}return d(a,[{key:"add",value:function(){for(var r=this,o=arguments.length,f=new Array(o),m=0;m<o;m++)f[m]=arguments[m];var u=f.reduce(this._pullDefinitions,{});Object.keys(u).forEach(function(g){r.definitions[g]=e(e({},r.definitions[g]||{}),u[g]),oe(g,u[g]);var p=Vt[_][g];p&&oe(p,u[g]),ta()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,o){var f=o.prefix&&o.iconName&&o.icon?{0:o}:o;return Object.keys(f).map(function(m){var u=f[m],g=u.prefix,p=u.iconName,x=u.icon,y=x[2];r[g]||(r[g]={}),y.length>0&&y.forEach(function(P){typeof P=="string"&&(r[g][P]=x)}),r[g][p]=x}),r}}]),a}(),kn=[],Dt={},jt={},yi=Object.keys(jt);function ki(a,n){var r=n.mixoutsTo;return kn=a,Dt={},Object.keys(jt).forEach(function(o){yi.indexOf(o)===-1&&delete jt[o]}),kn.forEach(function(o){var f=o.mixout?o.mixout():{};if(Object.keys(f).forEach(function(u){typeof f[u]=="function"&&(r[u]=f[u]),i(f[u])==="object"&&Object.keys(f[u]).forEach(function(g){r[u]||(r[u]={}),r[u][g]=f[u][g]})}),o.hooks){var m=o.hooks();Object.keys(m).forEach(function(u){Dt[u]||(Dt[u]=[]),Dt[u].push(m[u])})}o.provides&&o.provides(jt)}),r}function ce(a,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),f=2;f<r;f++)o[f-2]=arguments[f];var m=Dt[a]||[];return m.forEach(function(u){n=u.apply(null,[n].concat(o))}),n}function ht(a){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var f=Dt[a]||[];f.forEach(function(m){m.apply(null,r)})}function ut(){var a=arguments[0],n=Array.prototype.slice.call(arguments,1);return jt[a]?jt[a].apply(null,n):void 0}function ue(a){a.prefix==="fa"&&(a.prefix="fas");var n=a.iconName,r=a.prefix||pt();if(n)return n=Ot(r,n)||n,un(wn.definitions,r,n)||un(U.styles,r,n)}var wn=new hi,wi=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,ht("noAuto")},xi={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ft?(ht("beforeI2svg",n),ut("pseudoElements2svg",n),ut("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=n.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,cn(function(){aa({autoReplaceSvgRoot:r}),ht("watch",n)})}},Ai={icon:function(n){if(n===null)return null;if(i(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Ot(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var r=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],o=Ea(n[0]);return{prefix:o,iconName:Ot(o,r)||r}}if(typeof n=="string"&&(n.indexOf("".concat(A.cssPrefix,"-"))>-1||n.match(Wr))){var f=Pa(n.split(" "),{skipLookups:!0});return{prefix:f.prefix||pt(),iconName:Ot(f.prefix,f.iconName)||f.iconName}}if(typeof n=="string"){var m=pt();return{prefix:m,iconName:Ot(m,n)||n}}}},me={noAuto:wi,config:A,dom:xi,parse:Ai,library:wn,findIconDefinition:ue,toHtml:Jt},aa=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=n.autoReplaceSvgRoot,o=r===void 0?T:r;(Object.keys(U.styles).length>0||A.autoFetchSvg)&&ft&&A.autoReplaceSvg&&me.dom.i2svg({node:o})};function Si(a){Dr&&(j.FontAwesome||(j.FontAwesome=me),cn(function(){aa(),ht("bootstrap")})),U.hooks=e(e({},U.hooks),{},{addPack:function(r,o){U.styles[r]=e(e({},U.styles[r]||{}),o),ta(),aa()},addPacks:function(r){r.forEach(function(o){var f=v(o,2),m=f[0],u=f[1];U.styles[m]=e(e({},U.styles[m]||{}),u)}),ta(),aa()},addShims:function(r){var o;(o=U.shims).push.apply(o,b(r)),ta(),aa()}})}function Oa(a,n){return Object.defineProperty(a,"abstract",{get:n}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(o){return Jt(o)})}}),Object.defineProperty(a,"node",{get:function(){if(ft){var o=T.createElement("div");return o.innerHTML=a.html,o.children}}}),a}function Ei(a){var n=a.children,r=a.main,o=a.mask,f=a.attributes,m=a.styles,u=a.transform;if(ee(u)&&r.found&&!o.found){var g=r.width,p=r.height,x={x:g/p/2,y:.5};f.style=ka(e(e({},m),{},{"transform-origin":"".concat(x.x+u.x/16,"em ").concat(x.y+u.y/16,"em")}))}return[{tag:"svg",attributes:f,children:n}]}function Pi(a){var n=a.prefix,r=a.iconName,o=a.children,f=a.attributes,m=a.symbol,u=m===!0?"".concat(n,"-").concat(A.cssPrefix,"-").concat(r):m;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:e(e({},f),{},{id:u}),children:o}]}]}function de(a){var n=a.icons,r=n.main,o=n.mask,f=a.prefix,m=a.iconName,u=a.transform,g=a.symbol,p=a.title,x=a.maskId,y=a.titleId,P=a.extra,C=a.watchable,N=C===void 0?!1:C,X=o.found?o:r,J=X.width,tt=X.height,rt=f==="fak",H=[A.replacementClass,m?"".concat(A.cssPrefix,"-").concat(m):""].filter(function(kt){return P.classes.indexOf(kt)===-1}).filter(function(kt){return kt!==""||!!kt}).concat(P.classes).join(" "),G={children:[],attributes:e(e({},P.attributes),{},{"data-prefix":f,"data-icon":m,class:H,role:P.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(J," ").concat(tt)})},it=rt&&!~P.classes.indexOf("fa-fw")?{width:"".concat(J/tt*16*.0625,"em")}:{};N&&(G.attributes[Et]=""),p&&(G.children.push({tag:"title",attributes:{id:G.attributes["aria-labelledby"]||"title-".concat(y||Zt())},children:[p]}),delete G.attributes.title);var Q=e(e({},G),{},{prefix:f,iconName:m,main:r,mask:o,maskId:x,transform:u,symbol:g,styles:e(e({},it),P.styles)}),Ct=o.found&&r.found?ut("generateAbstractMask",Q)||{children:[],attributes:{}}:ut("generateAbstractIcon",Q)||{children:[],attributes:{}},It=Ct.children,xe=Ct.attributes;return Q.children=It,Q.attributes=xe,g?Pi(Q):Ei(Q)}function xn(a){var n=a.content,r=a.width,o=a.height,f=a.transform,m=a.title,u=a.extra,g=a.watchable,p=g===void 0?!1:g,x=e(e(e({},u.attributes),m?{title:m}:{}),{},{class:u.classes.join(" ")});p&&(x[Et]="");var y=e({},u.styles);ee(f)&&(y.transform=ri({transform:f,startCentered:!0,width:r,height:o}),y["-webkit-transform"]=y.transform);var P=ka(y);P.length>0&&(x.style=P);var C=[];return C.push({tag:"span",attributes:x,children:[n]}),m&&C.push({tag:"span",attributes:{class:"sr-only"},children:[m]}),C}function Oi(a){var n=a.content,r=a.title,o=a.extra,f=e(e(e({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")}),m=ka(o.styles);m.length>0&&(f.style=m);var u=[];return u.push({tag:"span",attributes:f,children:[n]}),r&&u.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),u}var ve=U.styles;function ge(a){var n=a[0],r=a[1],o=a.slice(4),f=v(o,1),m=f[0],u=null;return Array.isArray(m)?u={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(Pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Pt.SECONDARY),fill:"currentColor",d:m[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Pt.PRIMARY),fill:"currentColor",d:m[1]}}]}:u={tag:"path",attributes:{fill:"currentColor",d:m}},{found:!0,width:n,height:r,icon:u}}var Ci={found:!1,width:512,height:512};function Ii(a,n){!Ja&&!A.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(n,'" is missing.'))}function be(a,n){var r=n;return n==="fa"&&A.styleDefault!==null&&(n=pt()),new Promise(function(o,f){if(ut("missingIconAbstract"),r==="fa"){var m=hn(a)||{};a=m.iconName||a,n=m.prefix||n}if(a&&n&&ve[n]&&ve[n][a]){var u=ve[n][a];return o(ge(u))}Ii(a,n),o(e(e({},Ci),{},{icon:A.showMissingIcons&&a?ut("missingIconAbstract")||{}:{}}))})}var An=function(){},pe=A.measurePerformance&&va&&va.mark&&va.measure?va:{mark:An,measure:An},ea='FA "6.4.2"',Ni=function(n){return pe.mark("".concat(ea," ").concat(n," begins")),function(){return Sn(n)}},Sn=function(n){pe.mark("".concat(ea," ").concat(n," ends")),pe.measure("".concat(ea," ").concat(n),"".concat(ea," ").concat(n," begins"),"".concat(ea," ").concat(n," ends"))},he={begin:Ni,end:Sn},Ca=function(){};function En(a){var n=a.getAttribute?a.getAttribute(Et):null;return typeof n=="string"}function Ti(a){var n=a.getAttribute?a.getAttribute(Qa):null,r=a.getAttribute?a.getAttribute(Za):null;return n&&r}function _i(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(A.replacementClass)}function Mi(){if(A.autoReplaceSvg===!0)return Ia.replace;var a=Ia[A.autoReplaceSvg];return a||Ia.replace}function Li(a){return T.createElementNS("http://www.w3.org/2000/svg",a)}function Ri(a){return T.createElement(a)}function Pn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.ceFn,o=r===void 0?a.tag==="svg"?Li:Ri:r;if(typeof a=="string")return T.createTextNode(a);var f=o(a.tag);Object.keys(a.attributes||[]).forEach(function(u){f.setAttribute(u,a.attributes[u])});var m=a.children||[];return m.forEach(function(u){f.appendChild(Pn(u,{ceFn:o}))}),f}function Fi(a){var n=" ".concat(a.outerHTML," ");return n}var Ia={replace:function(n){var r=n[0];if(r.parentNode)if(n[1].forEach(function(f){r.parentNode.insertBefore(Pn(f),r)}),r.getAttribute(Et)===null&&A.keepOriginalSource){var o=T.createComment(Fi(r));r.parentNode.replaceChild(o,r)}else r.remove()},nest:function(n){var r=n[0],o=n[1];if(~ae(r).indexOf(A.replacementClass))return Ia.replace(n);var f=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete o[0].attributes.id,o[0].attributes.class){var m=o[0].attributes.class.split(" ").reduce(function(g,p){return p===A.replacementClass||p.match(f)?g.toSvg.push(p):g.toNode.push(p),g},{toNode:[],toSvg:[]});o[0].attributes.class=m.toSvg.join(" "),m.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",m.toNode.join(" "))}var u=o.map(function(g){return Jt(g)}).join(`
`);r.setAttribute(Et,""),r.innerHTML=u}};function On(a){a()}function Cn(a,n){var r=typeof n=="function"?n:Ca;if(a.length===0)r();else{var o=On;A.mutateApproach===Yr&&(o=j.requestAnimationFrame||On),o(function(){var f=Mi(),m=he.begin("mutate");a.map(f),m(),r()})}}var ye=!1;function In(){ye=!0}function ke(){ye=!1}var Na=null;function Nn(a){if(Qe&&A.observeMutations){var n=a.treeCallback,r=n===void 0?Ca:n,o=a.nodeCallback,f=o===void 0?Ca:o,m=a.pseudoElementsCallback,u=m===void 0?Ca:m,g=a.observeMutationsRoot,p=g===void 0?T:g;Na=new Qe(function(x){if(!ye){var y=pt();Ft(x).forEach(function(P){if(P.type==="childList"&&P.addedNodes.length>0&&!En(P.addedNodes[0])&&(A.searchPseudoElements&&u(P.target),r(P.target)),P.type==="attributes"&&P.target.parentNode&&A.searchPseudoElements&&u(P.target.parentNode),P.type==="attributes"&&En(P.target)&&~Br.indexOf(P.attributeName))if(P.attributeName==="class"&&Ti(P.target)){var C=Pa(ae(P.target)),N=C.prefix,X=C.iconName;P.target.setAttribute(Qa,N||y),X&&P.target.setAttribute(Za,X)}else _i(P.target)&&f(P.target)})}}),ft&&Na.observe(p,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zi(){Na&&Na.disconnect()}function Di(a){var n=a.getAttribute("style"),r=[];return n&&(r=n.split(";").reduce(function(o,f){var m=f.split(":"),u=m[0],g=m.slice(1);return u&&g.length>0&&(o[u]=g.join(":").trim()),o},{})),r}function ji(a){var n=a.getAttribute("data-prefix"),r=a.getAttribute("data-icon"),o=a.innerText!==void 0?a.innerText.trim():"",f=Pa(ae(a));return f.prefix||(f.prefix=pt()),n&&r&&(f.prefix=n,f.iconName=r),f.iconName&&f.prefix||(f.prefix&&o.length>0&&(f.iconName=bi(f.prefix,a.innerText)||fe(f.prefix,ie(a.innerText))),!f.iconName&&A.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(f.iconName=a.firstChild.data)),f}function Yi(a){var n=Ft(a.attributes).reduce(function(f,m){return f.name!=="class"&&f.name!=="style"&&(f[m.name]=m.value),f},{}),r=a.getAttribute("title"),o=a.getAttribute("data-fa-title-id");return A.autoA11y&&(r?n["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(o||Zt()):(n["aria-hidden"]="true",n.focusable="false")),n}function $i(){return{iconName:null,title:null,titleId:null,prefix:null,transform:nt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Tn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=ji(a),o=r.iconName,f=r.prefix,m=r.rest,u=Yi(a),g=ce("parseNodeAttributes",{},a),p=n.styleParser?Di(a):[];return e({iconName:o,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:f,transform:nt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:m,styles:p,attributes:u}},g)}var Ui=U.styles;function _n(a){var n=A.autoReplaceSvg==="nest"?Tn(a,{styleParser:!1}):Tn(a);return~n.extra.classes.indexOf(en)?ut("generateLayersText",a,n):ut("generateSvgReplacementMutation",a,n)}var yt=new Set;te.map(function(a){yt.add("fa-".concat(a))}),Object.keys(Gt[_]).map(yt.add.bind(yt)),Object.keys(Gt[R]).map(yt.add.bind(yt)),yt=b(yt);function Mn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ft)return Promise.resolve();var r=T.documentElement.classList,o=function(P){return r.add("".concat(an,"-").concat(P))},f=function(P){return r.remove("".concat(an,"-").concat(P))},m=A.autoFetchSvg?yt:te.map(function(y){return"fa-".concat(y)}).concat(Object.keys(Ui));m.includes("fa")||m.push("fa");var u=[".".concat(en,":not([").concat(Et,"])")].concat(m.map(function(y){return".".concat(y,":not([").concat(Et,"])")})).join(", ");if(u.length===0)return Promise.resolve();var g=[];try{g=Ft(a.querySelectorAll(u))}catch{}if(g.length>0)o("pending"),f("complete");else return Promise.resolve();var p=he.begin("onTree"),x=g.reduce(function(y,P){try{var C=_n(P);C&&y.push(C)}catch(N){Ja||N.name==="MissingIcon"&&console.error(N)}return y},[]);return new Promise(function(y,P){Promise.all(x).then(function(C){Cn(C,function(){o("active"),o("complete"),f("pending"),typeof n=="function"&&n(),p(),y()})}).catch(function(C){p(),P(C)})})}function Wi(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_n(a).then(function(r){r&&Cn([r],n)})}function Hi(a){return function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=(n||{}).icon?n:ue(n||{}),f=r.mask;return f&&(f=(f||{}).icon?f:ue(f||{})),a(o,e(e({},r),{},{mask:f}))}}var Xi=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.transform,f=o===void 0?nt:o,m=r.symbol,u=m===void 0?!1:m,g=r.mask,p=g===void 0?null:g,x=r.maskId,y=x===void 0?null:x,P=r.title,C=P===void 0?null:P,N=r.titleId,X=N===void 0?null:N,J=r.classes,tt=J===void 0?[]:J,rt=r.attributes,H=rt===void 0?{}:rt,G=r.styles,it=G===void 0?{}:G;if(n){var Q=n.prefix,Ct=n.iconName,It=n.icon;return Oa(e({type:"icon"},n),function(){return ht("beforeDOMElementCreation",{iconDefinition:n,params:r}),A.autoA11y&&(C?H["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(X||Zt()):(H["aria-hidden"]="true",H.focusable="false")),de({icons:{main:ge(It),mask:p?ge(p.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Q,iconName:Ct,transform:e(e({},nt),f),symbol:u,title:C,maskId:y,titleId:X,extra:{attributes:H,styles:it,classes:tt}})})}},Gi={mixout:function(){return{icon:Hi(Xi)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=Mn,r.nodeCallback=Wi,r}}},provides:function(n){n.i2svg=function(r){var o=r.node,f=o===void 0?T:o,m=r.callback,u=m===void 0?function(){}:m;return Mn(f,u)},n.generateSvgReplacementMutation=function(r,o){var f=o.iconName,m=o.title,u=o.titleId,g=o.prefix,p=o.transform,x=o.symbol,y=o.mask,P=o.maskId,C=o.extra;return new Promise(function(N,X){Promise.all([be(f,g),y.iconName?be(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(J){var tt=v(J,2),rt=tt[0],H=tt[1];N([r,de({icons:{main:rt,mask:H},prefix:g,iconName:f,transform:p,symbol:x,maskId:P,title:m,titleId:u,extra:C,watchable:!0})])}).catch(X)})},n.generateAbstractIcon=function(r){var o=r.children,f=r.attributes,m=r.main,u=r.transform,g=r.styles,p=ka(g);p.length>0&&(f.style=p);var x;return ee(u)&&(x=ut("generateAbstractTransformGrouping",{main:m,transform:u,containerWidth:m.width,iconWidth:m.width})),o.push(x||m.icon),{children:o,attributes:f}}}},Bi={mixout:function(){return{layer:function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=o.classes,m=f===void 0?[]:f;return Oa({type:"layer"},function(){ht("beforeDOMElementCreation",{assembler:r,params:o});var u=[];return r(function(g){Array.isArray(g)?g.map(function(p){u=u.concat(p.abstract)}):u=u.concat(g.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(b(m)).join(" ")},children:u}]})}}}},Vi={mixout:function(){return{counter:function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=o.title,m=f===void 0?null:f,u=o.classes,g=u===void 0?[]:u,p=o.attributes,x=p===void 0?{}:p,y=o.styles,P=y===void 0?{}:y;return Oa({type:"counter",content:r},function(){return ht("beforeDOMElementCreation",{content:r,params:o}),Oi({content:r.toString(),title:m,extra:{attributes:x,styles:P,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(b(g))}})})}}}},qi={mixout:function(){return{text:function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=o.transform,m=f===void 0?nt:f,u=o.title,g=u===void 0?null:u,p=o.classes,x=p===void 0?[]:p,y=o.attributes,P=y===void 0?{}:y,C=o.styles,N=C===void 0?{}:C;return Oa({type:"text",content:r},function(){return ht("beforeDOMElementCreation",{content:r,params:o}),xn({content:r,transform:e(e({},nt),m),title:g,extra:{attributes:P,styles:N,classes:["".concat(A.cssPrefix,"-layers-text")].concat(b(x))}})})}}},provides:function(n){n.generateLayersText=function(r,o){var f=o.title,m=o.transform,u=o.extra,g=null,p=null;if(Ze){var x=parseInt(getComputedStyle(r).fontSize,10),y=r.getBoundingClientRect();g=y.width/x,p=y.height/x}return A.autoA11y&&!f&&(u.attributes["aria-hidden"]="true"),Promise.resolve([r,xn({content:r.innerHTML,width:g,height:p,transform:m,title:f,extra:u,watchable:!0})])}}},Ki=new RegExp('"',"ug"),Ln=[1105920,1112319];function Qi(a){var n=a.replace(Ki,""),r=ci(n,0),o=r>=Ln[0]&&r<=Ln[1],f=n.length===2?n[0]===n[1]:!1;return{value:ie(f?n[0]:n),isSecondary:o||f}}function Rn(a,n){var r="".concat(jr).concat(n.replace(":","-"));return new Promise(function(o,f){if(a.getAttribute(r)!==null)return o();var m=Ft(a.children),u=m.filter(function(It){return It.getAttribute(Ka)===n})[0],g=j.getComputedStyle(a,n),p=g.getPropertyValue("font-family").match(Hr),x=g.getPropertyValue("font-weight"),y=g.getPropertyValue("content");if(u&&!p)return a.removeChild(u),o();if(p&&y!=="none"&&y!==""){var P=g.getPropertyValue("content"),C=~["Sharp"].indexOf(p[2])?R:_,N=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(p[2])?Bt[C][p[2].toLowerCase()]:Xr[C][x],X=Qi(P),J=X.value,tt=X.isSecondary,rt=p[0].startsWith("FontAwesome"),H=fe(N,J),G=H;if(rt){var it=pi(J);it.iconName&&it.prefix&&(H=it.iconName,N=it.prefix)}if(H&&!tt&&(!u||u.getAttribute(Qa)!==N||u.getAttribute(Za)!==G)){a.setAttribute(r,G),u&&a.removeChild(u);var Q=$i(),Ct=Q.extra;Ct.attributes[Ka]=n,be(H,N).then(function(It){var xe=de(e(e({},Q),{},{icons:{main:It,mask:le()},prefix:N,iconName:G,extra:Ct,watchable:!0})),kt=T.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?a.insertBefore(kt,a.firstChild):a.appendChild(kt),kt.outerHTML=xe.map(function(fo){return Jt(fo)}).join(`
`),a.removeAttribute(r),o()}).catch(f)}else o()}else o()})}function Zi(a){return Promise.all([Rn(a,"::before"),Rn(a,"::after")])}function Ji(a){return a.parentNode!==document.head&&!~$r.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(Ka)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function Fn(a){if(ft)return new Promise(function(n,r){var o=Ft(a.querySelectorAll("*")).filter(Ji).map(Zi),f=he.begin("searchPseudoElements");In(),Promise.all(o).then(function(){f(),ke(),n()}).catch(function(){f(),ke(),r()})})}var to={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=Fn,r}}},provides:function(n){n.pseudoElements2svg=function(r){var o=r.node,f=o===void 0?T:o;A.searchPseudoElements&&Fn(f)}}},zn=!1,ao={mixout:function(){return{dom:{unwatch:function(){In(),zn=!0}}}},hooks:function(){return{bootstrap:function(){Nn(ce("mutationObserverCallbacks",{}))},noAuto:function(){zi()},watch:function(r){var o=r.observeMutationsRoot;zn?ke():Nn(ce("mutationObserverCallbacks",{observeMutationsRoot:o}))}}}},Dn=function(n){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(o,f){var m=f.toLowerCase().split("-"),u=m[0],g=m.slice(1).join("-");if(u&&g==="h")return o.flipX=!0,o;if(u&&g==="v")return o.flipY=!0,o;if(g=parseFloat(g),isNaN(g))return o;switch(u){case"grow":o.size=o.size+g;break;case"shrink":o.size=o.size-g;break;case"left":o.x=o.x-g;break;case"right":o.x=o.x+g;break;case"up":o.y=o.y-g;break;case"down":o.y=o.y+g;break;case"rotate":o.rotate=o.rotate+g;break}return o},r)},eo={mixout:function(){return{parse:{transform:function(r){return Dn(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,o){var f=o.getAttribute("data-fa-transform");return f&&(r.transform=Dn(f)),r}}},provides:function(n){n.generateAbstractTransformGrouping=function(r){var o=r.main,f=r.transform,m=r.containerWidth,u=r.iconWidth,g={transform:"translate(".concat(m/2," 256)")},p="translate(".concat(f.x*32,", ").concat(f.y*32,") "),x="scale(".concat(f.size/16*(f.flipX?-1:1),", ").concat(f.size/16*(f.flipY?-1:1),") "),y="rotate(".concat(f.rotate," 0 0)"),P={transform:"".concat(p," ").concat(x," ").concat(y)},C={transform:"translate(".concat(u/2*-1," -256)")},N={outer:g,inner:P,path:C};return{tag:"g",attributes:e({},N.outer),children:[{tag:"g",attributes:e({},N.inner),children:[{tag:o.icon.tag,children:o.icon.children,attributes:e(e({},o.icon.attributes),N.path)}]}]}}}},we={x:0,y:0,width:"100%",height:"100%"};function jn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||n)&&(a.attributes.fill="black"),a}function no(a){return a.tag==="g"?a.children:[a]}var ro={hooks:function(){return{parseNodeAttributes:function(r,o){var f=o.getAttribute("data-fa-mask"),m=f?Pa(f.split(" ").map(function(u){return u.trim()})):le();return m.prefix||(m.prefix=pt()),r.mask=m,r.maskId=o.getAttribute("data-fa-mask-id"),r}}},provides:function(n){n.generateAbstractMask=function(r){var o=r.children,f=r.attributes,m=r.main,u=r.mask,g=r.maskId,p=r.transform,x=m.width,y=m.icon,P=u.width,C=u.icon,N=ni({transform:p,containerWidth:P,iconWidth:x}),X={tag:"rect",attributes:e(e({},we),{},{fill:"white"})},J=y.children?{children:y.children.map(jn)}:{},tt={tag:"g",attributes:e({},N.inner),children:[jn(e({tag:y.tag,attributes:e(e({},y.attributes),N.path)},J))]},rt={tag:"g",attributes:e({},N.outer),children:[tt]},H="mask-".concat(g||Zt()),G="clip-".concat(g||Zt()),it={tag:"mask",attributes:e(e({},we),{},{id:H,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[X,rt]},Q={tag:"defs",children:[{tag:"clipPath",attributes:{id:G},children:no(C)},it]};return o.push(Q,{tag:"rect",attributes:e({fill:"currentColor","clip-path":"url(#".concat(G,")"),mask:"url(#".concat(H,")")},we)}),{children:o,attributes:f}}}},io={provides:function(n){var r=!1;j.matchMedia&&(r=j.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var o=[],f={fill:"currentColor"},m={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};o.push({tag:"path",attributes:e(e({},f),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var u=e(e({},m),{},{attributeName:"opacity"}),g={tag:"circle",attributes:e(e({},f),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||g.children.push({tag:"animate",attributes:e(e({},m),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:e(e({},u),{},{values:"1;0;1;1;0;1;"})}),o.push(g),o.push({tag:"path",attributes:e(e({},f),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:e(e({},u),{},{values:"1;0;0;0;0;1;"})}]}),r||o.push({tag:"path",attributes:e(e({},f),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:e(e({},u),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:o}}}},oo={hooks:function(){return{parseNodeAttributes:function(r,o){var f=o.getAttribute("data-fa-symbol"),m=f===null?!1:f===""?!0:f;return r.symbol=m,r}}}},so=[oi,Gi,Bi,Vi,qi,to,ao,eo,ro,io,oo];ki(so,{mixoutsTo:me}),Jr(Si)})();function Yn(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),i.push.apply(i,s)}return i}function k(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Yn(Object(i),!0).forEach(function(s){Y(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Yn(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function Ua(t){"@babel/helpers - typeof";return Ua=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ua(t)}function co(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $n(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function uo(t,e,i){return e&&$n(t.prototype,e),i&&$n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function Y(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function De(t,e){return vo(t)||bo(t,e)||ur(t,e)||ho()}function ua(t){return mo(t)||go(t)||ur(t)||po()}function mo(t){if(Array.isArray(t))return Oe(t)}function vo(t){if(Array.isArray(t))return t}function go(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function bo(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var s=[],l=!0,d=!1,c,v;try{for(i=i.call(t);!(l=(c=i.next()).done)&&(s.push(c.value),!(e&&s.length===e));l=!0);}catch(b){d=!0,v=b}finally{try{!l&&i.return!=null&&i.return()}finally{if(d)throw v}}return s}}function ur(t,e){if(t){if(typeof t=="string")return Oe(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Oe(t,e)}}function Oe(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}function po(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ho(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Un=function(){},je={},mr={},dr=null,vr={mark:Un,measure:Un};try{typeof window<"u"&&(je=window),typeof document<"u"&&(mr=document),typeof MutationObserver<"u"&&(dr=MutationObserver),typeof performance<"u"&&(vr=performance)}catch{}var yo=je.navigator||{},Wn=yo.userAgent,Hn=Wn===void 0?"":Wn,xt=je,L=mr,Xn=dr,Ta=vr;xt.document;var gt=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",gr=~Hn.indexOf("MSIE")||~Hn.indexOf("Trident/"),_a,Ma,La,Ra,Fa,mt="___FONT_AWESOME___",Ce=16,br="fa",pr="svg-inline--fa",_t="data-fa-i2svg",Ie="data-fa-pseudo-element",ko="data-fa-pseudo-element-pending",Ye="data-prefix",$e="data-icon",Gn="fontawesome-i2svg",wo="async",xo=["HTML","HEAD","STYLE","SCRIPT"],hr=function(){try{return!0}catch{return!1}}(),M="classic",F="sharp",Ue=[M,F];function ma(t){return new Proxy(t,{get:function(i,s){return s in i?i[s]:i[M]}})}var oa=ma((_a={},Y(_a,M,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Y(_a,F,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),_a)),sa=ma((Ma={},Y(Ma,M,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Y(Ma,F,{solid:"fass",regular:"fasr",light:"fasl"}),Ma)),fa=ma((La={},Y(La,M,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Y(La,F,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),La)),Ao=ma((Ra={},Y(Ra,M,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Y(Ra,F,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ra)),So=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,yr="fa-layers-text",Eo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Po=ma((Fa={},Y(Fa,M,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Y(Fa,F,{900:"fass",400:"fasr",300:"fasl"}),Fa)),kr=[1,2,3,4,5,6,7,8,9,10],Oo=kr.concat([11,12,13,14,15,16,17,18,19,20]),Co=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Nt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},la=new Set;Object.keys(sa[M]).map(la.add.bind(la));Object.keys(sa[F]).map(la.add.bind(la));var Io=[].concat(Ue,ua(la),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Nt.GROUP,Nt.SWAP_OPACITY,Nt.PRIMARY,Nt.SECONDARY]).concat(kr.map(function(t){return"".concat(t,"x")})).concat(Oo.map(function(t){return"w-".concat(t)})),ra=xt.FontAwesomeConfig||{};function No(t){var e=L.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function To(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(L&&typeof L.querySelector=="function"){var _o=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_o.forEach(function(t){var e=De(t,2),i=e[0],s=e[1],l=To(No(i));l!=null&&(ra[s]=l)})}var wr={styleDefault:"solid",familyDefault:"classic",cssPrefix:br,replacementClass:pr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ra.familyPrefix&&(ra.cssPrefix=ra.familyPrefix);var Wt=k(k({},wr),ra);Wt.autoReplaceSvg||(Wt.observeMutations=!1);var S={};Object.keys(wr).forEach(function(t){Object.defineProperty(S,t,{enumerable:!0,set:function(i){Wt[t]=i,ia.forEach(function(s){return s(S)})},get:function(){return Wt[t]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(e){Wt.cssPrefix=e,ia.forEach(function(i){return i(S)})},get:function(){return Wt.cssPrefix}});xt.FontAwesomeConfig=S;var ia=[];function Mo(t){return ia.push(t),function(){ia.splice(ia.indexOf(t),1)}}var wt=Ce,ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Lo(t){if(!(!t||!gt)){var e=L.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var i=L.head.childNodes,s=null,l=i.length-1;l>-1;l--){var d=i[l],c=(d.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(s=d)}return L.head.insertBefore(e,s),t}}var Ro="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ca(){for(var t=12,e="";t-- >0;)e+=Ro[Math.random()*62|0];return e}function Ht(t){for(var e=[],i=(t||[]).length>>>0;i--;)e[i]=t[i];return e}function We(t){return t.classList?Ht(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function xr(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fo(t){return Object.keys(t||{}).reduce(function(e,i){return e+"".concat(i,'="').concat(xr(t[i]),'" ')},"").trim()}function Xa(t){return Object.keys(t||{}).reduce(function(e,i){return e+"".concat(i,": ").concat(t[i].trim(),";")},"")}function He(t){return t.size!==ot.size||t.x!==ot.x||t.y!==ot.y||t.rotate!==ot.rotate||t.flipX||t.flipY}function zo(t){var e=t.transform,i=t.containerWidth,s=t.iconWidth,l={transform:"translate(".concat(i/2," 256)")},d="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),v="rotate(".concat(e.rotate," 0 0)"),b={transform:"".concat(d," ").concat(c," ").concat(v)},w={transform:"translate(".concat(s/2*-1," -256)")};return{outer:l,inner:b,path:w}}function Do(t){var e=t.transform,i=t.width,s=i===void 0?Ce:i,l=t.height,d=l===void 0?Ce:l,c=t.startCentered,v=c===void 0?!1:c,b="";return v&&gr?b+="translate(".concat(e.x/wt-s/2,"em, ").concat(e.y/wt-d/2,"em) "):v?b+="translate(calc(-50% + ".concat(e.x/wt,"em), calc(-50% + ").concat(e.y/wt,"em)) "):b+="translate(".concat(e.x/wt,"em, ").concat(e.y/wt,"em) "),b+="scale(".concat(e.size/wt*(e.flipX?-1:1),", ").concat(e.size/wt*(e.flipY?-1:1),") "),b+="rotate(".concat(e.rotate,"deg) "),b}var jo=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ar(){var t=br,e=pr,i=S.cssPrefix,s=S.replacementClass,l=jo;if(i!==t||s!==e){var d=new RegExp("\\.".concat(t,"\\-"),"g"),c=new RegExp("\\--".concat(t,"\\-"),"g"),v=new RegExp("\\.".concat(e),"g");l=l.replace(d,".".concat(i,"-")).replace(c,"--".concat(i,"-")).replace(v,".".concat(s))}return l}var Bn=!1;function Ae(){S.autoAddCss&&!Bn&&(Lo(Ar()),Bn=!0)}var Yo={mixout:function(){return{dom:{css:Ar,insertCss:Ae}}},hooks:function(){return{beforeDOMElementCreation:function(){Ae()},beforeI2svg:function(){Ae()}}}},dt=xt||{};dt[mt]||(dt[mt]={});dt[mt].styles||(dt[mt].styles={});dt[mt].hooks||(dt[mt].hooks={});dt[mt].shims||(dt[mt].shims=[]);var at=dt[mt],Sr=[],$o=function t(){L.removeEventListener("DOMContentLoaded",t),Wa=1,Sr.map(function(e){return e()})},Wa=!1;gt&&(Wa=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),Wa||L.addEventListener("DOMContentLoaded",$o));function Uo(t){gt&&(Wa?setTimeout(t,0):Sr.push(t))}function da(t){var e=t.tag,i=t.attributes,s=i===void 0?{}:i,l=t.children,d=l===void 0?[]:l;return typeof t=="string"?xr(t):"<".concat(e," ").concat(Fo(s),">").concat(d.map(da).join(""),"</").concat(e,">")}function Vn(t,e,i){if(t&&t[e]&&t[e][i])return{prefix:e,iconName:i,icon:t[e][i]}}var Wo=function(e,i){return function(s,l,d,c){return e.call(i,s,l,d,c)}},Se=function(e,i,s,l){var d=Object.keys(e),c=d.length,v=l!==void 0?Wo(i,l):i,b,w,h;for(s===void 0?(b=1,h=e[d[0]]):(b=0,h=s);b<c;b++)w=d[b],h=v(h,e[w],w,e);return h};function Ho(t){for(var e=[],i=0,s=t.length;i<s;){var l=t.charCodeAt(i++);if(l>=55296&&l<=56319&&i<s){var d=t.charCodeAt(i++);(d&64512)==56320?e.push(((l&1023)<<10)+(d&1023)+65536):(e.push(l),i--)}else e.push(l)}return e}function Ne(t){var e=Ho(t);return e.length===1?e[0].toString(16):null}function Xo(t,e){var i=t.length,s=t.charCodeAt(e),l;return s>=55296&&s<=56319&&i>e+1&&(l=t.charCodeAt(e+1),l>=56320&&l<=57343)?(s-55296)*1024+l-56320+65536:s}function qn(t){return Object.keys(t).reduce(function(e,i){var s=t[i],l=!!s.icon;return l?e[s.iconName]=s.icon:e[i]=s,e},{})}function Te(t,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=i.skipHooks,l=s===void 0?!1:s,d=qn(e);typeof at.hooks.addPack=="function"&&!l?at.hooks.addPack(t,qn(e)):at.styles[t]=k(k({},at.styles[t]||{}),d),t==="fas"&&Te("fa",e)}var za,Da,ja,Yt=at.styles,Go=at.shims,Bo=(za={},Y(za,M,Object.values(fa[M])),Y(za,F,Object.values(fa[F])),za),Xe=null,Er={},Pr={},Or={},Cr={},Ir={},Vo=(Da={},Y(Da,M,Object.keys(oa[M])),Y(Da,F,Object.keys(oa[F])),Da);function qo(t){return~Io.indexOf(t)}function Ko(t,e){var i=e.split("-"),s=i[0],l=i.slice(1).join("-");return s===t&&l!==""&&!qo(l)?l:null}var Nr=function(){var e=function(d){return Se(Yt,function(c,v,b){return c[b]=Se(v,d,{}),c},{})};Er=e(function(l,d,c){if(d[3]&&(l[d[3]]=c),d[2]){var v=d[2].filter(function(b){return typeof b=="number"});v.forEach(function(b){l[b.toString(16)]=c})}return l}),Pr=e(function(l,d,c){if(l[c]=c,d[2]){var v=d[2].filter(function(b){return typeof b=="string"});v.forEach(function(b){l[b]=c})}return l}),Ir=e(function(l,d,c){var v=d[2];return l[c]=c,v.forEach(function(b){l[b]=c}),l});var i="far"in Yt||S.autoFetchSvg,s=Se(Go,function(l,d){var c=d[0],v=d[1],b=d[2];return v==="far"&&!i&&(v="fas"),typeof c=="string"&&(l.names[c]={prefix:v,iconName:b}),typeof c=="number"&&(l.unicodes[c.toString(16)]={prefix:v,iconName:b}),l},{names:{},unicodes:{}});Or=s.names,Cr=s.unicodes,Xe=Ga(S.styleDefault,{family:S.familyDefault})};Mo(function(t){Xe=Ga(t.styleDefault,{family:S.familyDefault})});Nr();function Ge(t,e){return(Er[t]||{})[e]}function Qo(t,e){return(Pr[t]||{})[e]}function Tt(t,e){return(Ir[t]||{})[e]}function Tr(t){return Or[t]||{prefix:null,iconName:null}}function Zo(t){var e=Cr[t],i=Ge("fas",t);return e||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function At(){return Xe}var Be=function(){return{prefix:null,iconName:null,rest:[]}};function Ga(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.family,s=i===void 0?M:i,l=oa[s][t],d=sa[s][t]||sa[s][l],c=t in at.styles?t:null;return d||c||null}var Kn=(ja={},Y(ja,M,Object.keys(fa[M])),Y(ja,F,Object.keys(fa[F])),ja);function Ba(t){var e,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.skipLookups,l=s===void 0?!1:s,d=(e={},Y(e,M,"".concat(S.cssPrefix,"-").concat(M)),Y(e,F,"".concat(S.cssPrefix,"-").concat(F)),e),c=null,v=M;(t.includes(d[M])||t.some(function(w){return Kn[M].includes(w)}))&&(v=M),(t.includes(d[F])||t.some(function(w){return Kn[F].includes(w)}))&&(v=F);var b=t.reduce(function(w,h){var E=Ko(S.cssPrefix,h);if(Yt[h]?(h=Bo[v].includes(h)?Ao[v][h]:h,c=h,w.prefix=h):Vo[v].indexOf(h)>-1?(c=h,w.prefix=Ga(h,{family:v})):E?w.iconName=E:h!==S.replacementClass&&h!==d[M]&&h!==d[F]&&w.rest.push(h),!l&&w.prefix&&w.iconName){var O=c==="fa"?Tr(w.iconName):{},I=Tt(w.prefix,w.iconName);O.prefix&&(c=null),w.iconName=O.iconName||I||w.iconName,w.prefix=O.prefix||w.prefix,w.prefix==="far"&&!Yt.far&&Yt.fas&&!S.autoFetchSvg&&(w.prefix="fas")}return w},Be());return(t.includes("fa-brands")||t.includes("fab"))&&(b.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(b.prefix="fad"),!b.prefix&&v===F&&(Yt.fass||S.autoFetchSvg)&&(b.prefix="fass",b.iconName=Tt(b.prefix,b.iconName)||b.iconName),(b.prefix==="fa"||c==="fa")&&(b.prefix=At()||"fas"),b}var Jo=function(){function t(){co(this,t),this.definitions={}}return uo(t,[{key:"add",value:function(){for(var i=this,s=arguments.length,l=new Array(s),d=0;d<s;d++)l[d]=arguments[d];var c=l.reduce(this._pullDefinitions,{});Object.keys(c).forEach(function(v){i.definitions[v]=k(k({},i.definitions[v]||{}),c[v]),Te(v,c[v]);var b=fa[M][v];b&&Te(b,c[v]),Nr()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,s){var l=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(l).map(function(d){var c=l[d],v=c.prefix,b=c.iconName,w=c.icon,h=w[2];i[v]||(i[v]={}),h.length>0&&h.forEach(function(E){typeof E=="string"&&(i[v][E]=w)}),i[v][b]=w}),i}}]),t}(),Qn=[],$t={},Ut={},ts=Object.keys(Ut);function as(t,e){var i=e.mixoutsTo;return Qn=t,$t={},Object.keys(Ut).forEach(function(s){ts.indexOf(s)===-1&&delete Ut[s]}),Qn.forEach(function(s){var l=s.mixout?s.mixout():{};if(Object.keys(l).forEach(function(c){typeof l[c]=="function"&&(i[c]=l[c]),Ua(l[c])==="object"&&Object.keys(l[c]).forEach(function(v){i[c]||(i[c]={}),i[c][v]=l[c][v]})}),s.hooks){var d=s.hooks();Object.keys(d).forEach(function(c){$t[c]||($t[c]=[]),$t[c].push(d[c])})}s.provides&&s.provides(Ut)}),i}function _e(t,e){for(var i=arguments.length,s=new Array(i>2?i-2:0),l=2;l<i;l++)s[l-2]=arguments[l];var d=$t[t]||[];return d.forEach(function(c){e=c.apply(null,[e].concat(s))}),e}function Mt(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];var l=$t[t]||[];l.forEach(function(d){d.apply(null,i)})}function vt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ut[t]?Ut[t].apply(null,e):void 0}function Me(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,i=t.prefix||At();if(e)return e=Tt(i,e)||e,Vn(_r.definitions,i,e)||Vn(at.styles,i,e)}var _r=new Jo,es=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,Mt("noAuto")},ns={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return gt?(Mt("beforeI2svg",e),vt("pseudoElements2svg",e),vt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,Uo(function(){is({autoReplaceSvgRoot:i}),Mt("watch",e)})}},rs={icon:function(e){if(e===null)return null;if(Ua(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Tt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var i=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],s=Ga(e[0]);return{prefix:s,iconName:Tt(s,i)||i}}if(typeof e=="string"&&(e.indexOf("".concat(S.cssPrefix,"-"))>-1||e.match(So))){var l=Ba(e.split(" "),{skipLookups:!0});return{prefix:l.prefix||At(),iconName:Tt(l.prefix,l.iconName)||l.iconName}}if(typeof e=="string"){var d=At();return{prefix:d,iconName:Tt(d,e)||e}}}},Z={noAuto:es,config:S,dom:ns,parse:rs,library:_r,findIconDefinition:Me,toHtml:da},is=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot,s=i===void 0?L:i;(Object.keys(at.styles).length>0||S.autoFetchSvg)&&gt&&S.autoReplaceSvg&&Z.dom.i2svg({node:s})};function Va(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(s){return da(s)})}}),Object.defineProperty(t,"node",{get:function(){if(gt){var s=L.createElement("div");return s.innerHTML=t.html,s.children}}}),t}function os(t){var e=t.children,i=t.main,s=t.mask,l=t.attributes,d=t.styles,c=t.transform;if(He(c)&&i.found&&!s.found){var v=i.width,b=i.height,w={x:v/b/2,y:.5};l.style=Xa(k(k({},d),{},{"transform-origin":"".concat(w.x+c.x/16,"em ").concat(w.y+c.y/16,"em")}))}return[{tag:"svg",attributes:l,children:e}]}function ss(t){var e=t.prefix,i=t.iconName,s=t.children,l=t.attributes,d=t.symbol,c=d===!0?"".concat(e,"-").concat(S.cssPrefix,"-").concat(i):d;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},l),{},{id:c}),children:s}]}]}function Ve(t){var e=t.icons,i=e.main,s=e.mask,l=t.prefix,d=t.iconName,c=t.transform,v=t.symbol,b=t.title,w=t.maskId,h=t.titleId,E=t.extra,O=t.watchable,I=O===void 0?!1:O,D=s.found?s:i,B=D.width,V=D.height,q=l==="fak",z=[S.replacementClass,d?"".concat(S.cssPrefix,"-").concat(d):""].filter(function(j){return E.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(E.classes).join(" "),$={children:[],attributes:k(k({},E.attributes),{},{"data-prefix":l,"data-icon":d,class:z,role:E.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(B," ").concat(V)})},K=q&&!~E.classes.indexOf("fa-fw")?{width:"".concat(B/V*16*.0625,"em")}:{};I&&($.attributes[_t]=""),b&&($.children.push({tag:"title",attributes:{id:$.attributes["aria-labelledby"]||"title-".concat(h||ca())},children:[b]}),delete $.attributes.title);var W=k(k({},$),{},{prefix:l,iconName:d,main:i,mask:s,maskId:w,transform:c,symbol:v,styles:k(k({},K),E.styles)}),st=s.found&&i.found?vt("generateAbstractMask",W)||{children:[],attributes:{}}:vt("generateAbstractIcon",W)||{children:[],attributes:{}},et=st.children,Lt=st.attributes;return W.children=et,W.attributes=Lt,v?ss(W):os(W)}function Zn(t){var e=t.content,i=t.width,s=t.height,l=t.transform,d=t.title,c=t.extra,v=t.watchable,b=v===void 0?!1:v,w=k(k(k({},c.attributes),d?{title:d}:{}),{},{class:c.classes.join(" ")});b&&(w[_t]="");var h=k({},c.styles);He(l)&&(h.transform=Do({transform:l,startCentered:!0,width:i,height:s}),h["-webkit-transform"]=h.transform);var E=Xa(h);E.length>0&&(w.style=E);var O=[];return O.push({tag:"span",attributes:w,children:[e]}),d&&O.push({tag:"span",attributes:{class:"sr-only"},children:[d]}),O}function fs(t){var e=t.content,i=t.title,s=t.extra,l=k(k(k({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")}),d=Xa(s.styles);d.length>0&&(l.style=d);var c=[];return c.push({tag:"span",attributes:l,children:[e]}),i&&c.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),c}var Ee=at.styles;function Le(t){var e=t[0],i=t[1],s=t.slice(4),l=De(s,1),d=l[0],c=null;return Array.isArray(d)?c={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(Nt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(Nt.SECONDARY),fill:"currentColor",d:d[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(Nt.PRIMARY),fill:"currentColor",d:d[1]}}]}:c={tag:"path",attributes:{fill:"currentColor",d}},{found:!0,width:e,height:i,icon:c}}var ls={found:!1,width:512,height:512};function cs(t,e){!hr&&!S.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Re(t,e){var i=e;return e==="fa"&&S.styleDefault!==null&&(e=At()),new Promise(function(s,l){if(vt("missingIconAbstract"),i==="fa"){var d=Tr(t)||{};t=d.iconName||t,e=d.prefix||e}if(t&&e&&Ee[e]&&Ee[e][t]){var c=Ee[e][t];return s(Le(c))}cs(t,e),s(k(k({},ls),{},{icon:S.showMissingIcons&&t?vt("missingIconAbstract")||{}:{}}))})}var Jn=function(){},Fe=S.measurePerformance&&Ta&&Ta.mark&&Ta.measure?Ta:{mark:Jn,measure:Jn},na='FA "6.4.2"',us=function(e){return Fe.mark("".concat(na," ").concat(e," begins")),function(){return Mr(e)}},Mr=function(e){Fe.mark("".concat(na," ").concat(e," ends")),Fe.measure("".concat(na," ").concat(e),"".concat(na," ").concat(e," begins"),"".concat(na," ").concat(e," ends"))},qe={begin:us,end:Mr},Ya=function(){};function tr(t){var e=t.getAttribute?t.getAttribute(_t):null;return typeof e=="string"}function ms(t){var e=t.getAttribute?t.getAttribute(Ye):null,i=t.getAttribute?t.getAttribute($e):null;return e&&i}function ds(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(S.replacementClass)}function vs(){if(S.autoReplaceSvg===!0)return $a.replace;var t=$a[S.autoReplaceSvg];return t||$a.replace}function gs(t){return L.createElementNS("http://www.w3.org/2000/svg",t)}function bs(t){return L.createElement(t)}function Lr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.ceFn,s=i===void 0?t.tag==="svg"?gs:bs:i;if(typeof t=="string")return L.createTextNode(t);var l=s(t.tag);Object.keys(t.attributes||[]).forEach(function(c){l.setAttribute(c,t.attributes[c])});var d=t.children||[];return d.forEach(function(c){l.appendChild(Lr(c,{ceFn:s}))}),l}function ps(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var $a={replace:function(e){var i=e[0];if(i.parentNode)if(e[1].forEach(function(l){i.parentNode.insertBefore(Lr(l),i)}),i.getAttribute(_t)===null&&S.keepOriginalSource){var s=L.createComment(ps(i));i.parentNode.replaceChild(s,i)}else i.remove()},nest:function(e){var i=e[0],s=e[1];if(~We(i).indexOf(S.replacementClass))return $a.replace(e);var l=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var d=s[0].attributes.class.split(" ").reduce(function(v,b){return b===S.replacementClass||b.match(l)?v.toSvg.push(b):v.toNode.push(b),v},{toNode:[],toSvg:[]});s[0].attributes.class=d.toSvg.join(" "),d.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",d.toNode.join(" "))}var c=s.map(function(v){return da(v)}).join(`
`);i.setAttribute(_t,""),i.innerHTML=c}};function ar(t){t()}function Rr(t,e){var i=typeof e=="function"?e:Ya;if(t.length===0)i();else{var s=ar;S.mutateApproach===wo&&(s=xt.requestAnimationFrame||ar),s(function(){var l=vs(),d=qe.begin("mutate");t.map(l),d(),i()})}}var Ke=!1;function Fr(){Ke=!0}function ze(){Ke=!1}var Ha=null;function er(t){if(Xn&&S.observeMutations){var e=t.treeCallback,i=e===void 0?Ya:e,s=t.nodeCallback,l=s===void 0?Ya:s,d=t.pseudoElementsCallback,c=d===void 0?Ya:d,v=t.observeMutationsRoot,b=v===void 0?L:v;Ha=new Xn(function(w){if(!Ke){var h=At();Ht(w).forEach(function(E){if(E.type==="childList"&&E.addedNodes.length>0&&!tr(E.addedNodes[0])&&(S.searchPseudoElements&&c(E.target),i(E.target)),E.type==="attributes"&&E.target.parentNode&&S.searchPseudoElements&&c(E.target.parentNode),E.type==="attributes"&&tr(E.target)&&~Co.indexOf(E.attributeName))if(E.attributeName==="class"&&ms(E.target)){var O=Ba(We(E.target)),I=O.prefix,D=O.iconName;E.target.setAttribute(Ye,I||h),D&&E.target.setAttribute($e,D)}else ds(E.target)&&l(E.target)})}}),gt&&Ha.observe(b,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hs(){Ha&&Ha.disconnect()}function ys(t){var e=t.getAttribute("style"),i=[];return e&&(i=e.split(";").reduce(function(s,l){var d=l.split(":"),c=d[0],v=d.slice(1);return c&&v.length>0&&(s[c]=v.join(":").trim()),s},{})),i}function ks(t){var e=t.getAttribute("data-prefix"),i=t.getAttribute("data-icon"),s=t.innerText!==void 0?t.innerText.trim():"",l=Ba(We(t));return l.prefix||(l.prefix=At()),e&&i&&(l.prefix=e,l.iconName=i),l.iconName&&l.prefix||(l.prefix&&s.length>0&&(l.iconName=Qo(l.prefix,t.innerText)||Ge(l.prefix,Ne(t.innerText))),!l.iconName&&S.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(l.iconName=t.firstChild.data)),l}function ws(t){var e=Ht(t.attributes).reduce(function(l,d){return l.name!=="class"&&l.name!=="style"&&(l[d.name]=d.value),l},{}),i=t.getAttribute("title"),s=t.getAttribute("data-fa-title-id");return S.autoA11y&&(i?e["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(s||ca()):(e["aria-hidden"]="true",e.focusable="false")),e}function xs(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function nr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=ks(t),s=i.iconName,l=i.prefix,d=i.rest,c=ws(t),v=_e("parseNodeAttributes",{},t),b=e.styleParser?ys(t):[];return k({iconName:s,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:l,transform:ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:d,styles:b,attributes:c}},v)}var As=at.styles;function zr(t){var e=S.autoReplaceSvg==="nest"?nr(t,{styleParser:!1}):nr(t);return~e.extra.classes.indexOf(yr)?vt("generateLayersText",t,e):vt("generateSvgReplacementMutation",t,e)}var St=new Set;Ue.map(function(t){St.add("fa-".concat(t))});Object.keys(oa[M]).map(St.add.bind(St));Object.keys(oa[F]).map(St.add.bind(St));St=ua(St);function rr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!gt)return Promise.resolve();var i=L.documentElement.classList,s=function(E){return i.add("".concat(Gn,"-").concat(E))},l=function(E){return i.remove("".concat(Gn,"-").concat(E))},d=S.autoFetchSvg?St:Ue.map(function(h){return"fa-".concat(h)}).concat(Object.keys(As));d.includes("fa")||d.push("fa");var c=[".".concat(yr,":not([").concat(_t,"])")].concat(d.map(function(h){return".".concat(h,":not([").concat(_t,"])")})).join(", ");if(c.length===0)return Promise.resolve();var v=[];try{v=Ht(t.querySelectorAll(c))}catch{}if(v.length>0)s("pending"),l("complete");else return Promise.resolve();var b=qe.begin("onTree"),w=v.reduce(function(h,E){try{var O=zr(E);O&&h.push(O)}catch(I){hr||I.name==="MissingIcon"&&console.error(I)}return h},[]);return new Promise(function(h,E){Promise.all(w).then(function(O){Rr(O,function(){s("active"),s("complete"),l("pending"),typeof e=="function"&&e(),b(),h()})}).catch(function(O){b(),E(O)})})}function Ss(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zr(t).then(function(i){i&&Rr([i],e)})}function Es(t){return function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:Me(e||{}),l=i.mask;return l&&(l=(l||{}).icon?l:Me(l||{})),t(s,k(k({},i),{},{mask:l}))}}var Ps=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.transform,l=s===void 0?ot:s,d=i.symbol,c=d===void 0?!1:d,v=i.mask,b=v===void 0?null:v,w=i.maskId,h=w===void 0?null:w,E=i.title,O=E===void 0?null:E,I=i.titleId,D=I===void 0?null:I,B=i.classes,V=B===void 0?[]:B,q=i.attributes,z=q===void 0?{}:q,$=i.styles,K=$===void 0?{}:$;if(e){var W=e.prefix,st=e.iconName,et=e.icon;return Va(k({type:"icon"},e),function(){return Mt("beforeDOMElementCreation",{iconDefinition:e,params:i}),S.autoA11y&&(O?z["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(D||ca()):(z["aria-hidden"]="true",z.focusable="false")),Ve({icons:{main:Le(et),mask:b?Le(b.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:st,transform:k(k({},ot),l),symbol:c,title:O,maskId:h,titleId:D,extra:{attributes:z,styles:K,classes:V}})})}},Os={mixout:function(){return{icon:Es(Ps)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=rr,i.nodeCallback=Ss,i}}},provides:function(e){e.i2svg=function(i){var s=i.node,l=s===void 0?L:s,d=i.callback,c=d===void 0?function(){}:d;return rr(l,c)},e.generateSvgReplacementMutation=function(i,s){var l=s.iconName,d=s.title,c=s.titleId,v=s.prefix,b=s.transform,w=s.symbol,h=s.mask,E=s.maskId,O=s.extra;return new Promise(function(I,D){Promise.all([Re(l,v),h.iconName?Re(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(B){var V=De(B,2),q=V[0],z=V[1];I([i,Ve({icons:{main:q,mask:z},prefix:v,iconName:l,transform:b,symbol:w,maskId:E,title:d,titleId:c,extra:O,watchable:!0})])}).catch(D)})},e.generateAbstractIcon=function(i){var s=i.children,l=i.attributes,d=i.main,c=i.transform,v=i.styles,b=Xa(v);b.length>0&&(l.style=b);var w;return He(c)&&(w=vt("generateAbstractTransformGrouping",{main:d,transform:c,containerWidth:d.width,iconWidth:d.width})),s.push(w||d.icon),{children:s,attributes:l}}}},Cs={mixout:function(){return{layer:function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=s.classes,d=l===void 0?[]:l;return Va({type:"layer"},function(){Mt("beforeDOMElementCreation",{assembler:i,params:s});var c=[];return i(function(v){Array.isArray(v)?v.map(function(b){c=c.concat(b.abstract)}):c=c.concat(v.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(ua(d)).join(" ")},children:c}]})}}}},Is={mixout:function(){return{counter:function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=s.title,d=l===void 0?null:l,c=s.classes,v=c===void 0?[]:c,b=s.attributes,w=b===void 0?{}:b,h=s.styles,E=h===void 0?{}:h;return Va({type:"counter",content:i},function(){return Mt("beforeDOMElementCreation",{content:i,params:s}),fs({content:i.toString(),title:d,extra:{attributes:w,styles:E,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(ua(v))}})})}}}},Ns={mixout:function(){return{text:function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=s.transform,d=l===void 0?ot:l,c=s.title,v=c===void 0?null:c,b=s.classes,w=b===void 0?[]:b,h=s.attributes,E=h===void 0?{}:h,O=s.styles,I=O===void 0?{}:O;return Va({type:"text",content:i},function(){return Mt("beforeDOMElementCreation",{content:i,params:s}),Zn({content:i,transform:k(k({},ot),d),title:v,extra:{attributes:E,styles:I,classes:["".concat(S.cssPrefix,"-layers-text")].concat(ua(w))}})})}}},provides:function(e){e.generateLayersText=function(i,s){var l=s.title,d=s.transform,c=s.extra,v=null,b=null;if(gr){var w=parseInt(getComputedStyle(i).fontSize,10),h=i.getBoundingClientRect();v=h.width/w,b=h.height/w}return S.autoA11y&&!l&&(c.attributes["aria-hidden"]="true"),Promise.resolve([i,Zn({content:i.innerHTML,width:v,height:b,transform:d,title:l,extra:c,watchable:!0})])}}},Ts=new RegExp('"',"ug"),ir=[1105920,1112319];function _s(t){var e=t.replace(Ts,""),i=Xo(e,0),s=i>=ir[0]&&i<=ir[1],l=e.length===2?e[0]===e[1]:!1;return{value:Ne(l?e[0]:e),isSecondary:s||l}}function or(t,e){var i="".concat(ko).concat(e.replace(":","-"));return new Promise(function(s,l){if(t.getAttribute(i)!==null)return s();var d=Ht(t.children),c=d.filter(function(et){return et.getAttribute(Ie)===e})[0],v=xt.getComputedStyle(t,e),b=v.getPropertyValue("font-family").match(Eo),w=v.getPropertyValue("font-weight"),h=v.getPropertyValue("content");if(c&&!b)return t.removeChild(c),s();if(b&&h!=="none"&&h!==""){var E=v.getPropertyValue("content"),O=~["Sharp"].indexOf(b[2])?F:M,I=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(b[2])?sa[O][b[2].toLowerCase()]:Po[O][w],D=_s(E),B=D.value,V=D.isSecondary,q=b[0].startsWith("FontAwesome"),z=Ge(I,B),$=z;if(q){var K=Zo(B);K.iconName&&K.prefix&&(z=K.iconName,I=K.prefix)}if(z&&!V&&(!c||c.getAttribute(Ye)!==I||c.getAttribute($e)!==$)){t.setAttribute(i,$),c&&t.removeChild(c);var W=xs(),st=W.extra;st.attributes[Ie]=e,Re(z,I).then(function(et){var Lt=Ve(k(k({},W),{},{icons:{main:et,mask:Be()},prefix:I,iconName:$,extra:st,watchable:!0})),j=L.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(j,t.firstChild):t.appendChild(j),j.outerHTML=Lt.map(function(T){return da(T)}).join(`
`),t.removeAttribute(i),s()}).catch(l)}else s()}else s()})}function Ms(t){return Promise.all([or(t,"::before"),or(t,"::after")])}function Ls(t){return t.parentNode!==document.head&&!~xo.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ie)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function sr(t){if(gt)return new Promise(function(e,i){var s=Ht(t.querySelectorAll("*")).filter(Ls).map(Ms),l=qe.begin("searchPseudoElements");Fr(),Promise.all(s).then(function(){l(),ze(),e()}).catch(function(){l(),ze(),i()})})}var Rs={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=sr,i}}},provides:function(e){e.pseudoElements2svg=function(i){var s=i.node,l=s===void 0?L:s;S.searchPseudoElements&&sr(l)}}},fr=!1,Fs={mixout:function(){return{dom:{unwatch:function(){Fr(),fr=!0}}}},hooks:function(){return{bootstrap:function(){er(_e("mutationObserverCallbacks",{}))},noAuto:function(){hs()},watch:function(i){var s=i.observeMutationsRoot;fr?ze():er(_e("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},lr=function(e){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(s,l){var d=l.toLowerCase().split("-"),c=d[0],v=d.slice(1).join("-");if(c&&v==="h")return s.flipX=!0,s;if(c&&v==="v")return s.flipY=!0,s;if(v=parseFloat(v),isNaN(v))return s;switch(c){case"grow":s.size=s.size+v;break;case"shrink":s.size=s.size-v;break;case"left":s.x=s.x-v;break;case"right":s.x=s.x+v;break;case"up":s.y=s.y-v;break;case"down":s.y=s.y+v;break;case"rotate":s.rotate=s.rotate+v;break}return s},i)},zs={mixout:function(){return{parse:{transform:function(i){return lr(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,s){var l=s.getAttribute("data-fa-transform");return l&&(i.transform=lr(l)),i}}},provides:function(e){e.generateAbstractTransformGrouping=function(i){var s=i.main,l=i.transform,d=i.containerWidth,c=i.iconWidth,v={transform:"translate(".concat(d/2," 256)")},b="translate(".concat(l.x*32,", ").concat(l.y*32,") "),w="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),h="rotate(".concat(l.rotate," 0 0)"),E={transform:"".concat(b," ").concat(w," ").concat(h)},O={transform:"translate(".concat(c/2*-1," -256)")},I={outer:v,inner:E,path:O};return{tag:"g",attributes:k({},I.outer),children:[{tag:"g",attributes:k({},I.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:k(k({},s.icon.attributes),I.path)}]}]}}}},Pe={x:0,y:0,width:"100%",height:"100%"};function cr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ds(t){return t.tag==="g"?t.children:[t]}var js={hooks:function(){return{parseNodeAttributes:function(i,s){var l=s.getAttribute("data-fa-mask"),d=l?Ba(l.split(" ").map(function(c){return c.trim()})):Be();return d.prefix||(d.prefix=At()),i.mask=d,i.maskId=s.getAttribute("data-fa-mask-id"),i}}},provides:function(e){e.generateAbstractMask=function(i){var s=i.children,l=i.attributes,d=i.main,c=i.mask,v=i.maskId,b=i.transform,w=d.width,h=d.icon,E=c.width,O=c.icon,I=zo({transform:b,containerWidth:E,iconWidth:w}),D={tag:"rect",attributes:k(k({},Pe),{},{fill:"white"})},B=h.children?{children:h.children.map(cr)}:{},V={tag:"g",attributes:k({},I.inner),children:[cr(k({tag:h.tag,attributes:k(k({},h.attributes),I.path)},B))]},q={tag:"g",attributes:k({},I.outer),children:[V]},z="mask-".concat(v||ca()),$="clip-".concat(v||ca()),K={tag:"mask",attributes:k(k({},Pe),{},{id:z,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[D,q]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:$},children:Ds(O)},K]};return s.push(W,{tag:"rect",attributes:k({fill:"currentColor","clip-path":"url(#".concat($,")"),mask:"url(#".concat(z,")")},Pe)}),{children:s,attributes:l}}}},Ys={provides:function(e){var i=!1;xt.matchMedia&&(i=xt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var s=[],l={fill:"currentColor"},d={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:k(k({},l),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var c=k(k({},d),{},{attributeName:"opacity"}),v={tag:"circle",attributes:k(k({},l),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||v.children.push({tag:"animate",attributes:k(k({},d),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:k(k({},c),{},{values:"1;0;1;1;0;1;"})}),s.push(v),s.push({tag:"path",attributes:k(k({},l),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:k(k({},c),{},{values:"1;0;0;0;0;1;"})}]}),i||s.push({tag:"path",attributes:k(k({},l),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:k(k({},c),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},$s={hooks:function(){return{parseNodeAttributes:function(i,s){var l=s.getAttribute("data-fa-symbol"),d=l===null?!1:l===""?!0:l;return i.symbol=d,i}}}},Us=[Yo,Os,Cs,Is,Ns,Rs,Fs,zs,js,Ys,$s];as(Us,{mixoutsTo:Z});Z.noAuto;Z.config;Z.library;Z.dom;Z.parse;Z.findIconDefinition;Z.toHtml;Z.icon;Z.layer;Z.text;Z.counter;const Xs={parameters:{docs:{theme:lo.light,layout:"centered"},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}};export{Xs as default};
//# sourceMappingURL=preview-ab9763bd.js.map
