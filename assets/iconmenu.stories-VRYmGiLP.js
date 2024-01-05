import{_ as m,r as ut,c as ot,n as b,s as pt,g as ft,x as q,d as mt,T as vt,E as U,i as gt,f as yt}from"./animation-_TEqrmD1.js";import"./elevation-8D4iMx2P.js";import"./ripple-7WbymdBP.js";import{o as It}from"./query-assigned-elements-BJFWMYs6.js";import{o as Et}from"./style-map-9Yerw4BC.js";import{I as bt}from"./filled-icon-button-4C-YvFRj.js";import{b as Y,g as wt,e as N,w as $,o as At,f as X}from"./vue.esm-bundler-mXbcqxd8.js";import{_ as Ct}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./index-2Ggjp5Ll.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function at(i,t=L){const e=V(i,t);return e&&(e.tabIndex=0,e.focus()),e}function rt(i,t=L){const e=ct(i,t);return e&&(e.tabIndex=0,e.focus()),e}function H(i,t=L){for(let e=0;e<i.length;e++){const n=i[e];if(n.tabIndex===0&&t(n))return{item:n,index:e}}return null}function V(i,t=L){for(const e of i)if(t(e))return e;return null}function ct(i,t=L){for(let e=i.length-1;e>=0;e--){const n=i[e];if(t(n))return n}return null}function Ot(i,t,e=L){for(let n=1;n<i.length;n++){const o=(n+t)%i.length,s=i[o];if(e(s))return s}return i[t]?i[t]:null}function Tt(i,t,e=L){for(let n=1;n<i.length;n++){const o=(t-n+i.length)%i.length,s=i[o];if(e(s))return s}return i[t]?i[t]:null}function Z(i,t,e=L){if(t){const n=Ot(i,t.index,e);return n&&(n.tabIndex=0,n.focus()),n}else return at(i,e)}function Q(i,t,e=L){if(t){const n=Tt(i,t.index,e);return n&&(n.tabIndex=0,n.focus()),n}else return rt(i,e)}function L(i){return!i.disabled}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const E={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class Rt{constructor(t){this.handleKeydown=c=>{const l=c.key;if(c.defaultPrevented||!this.isNavigableKey(l))return;const h=this.items;if(!h.length)return;const d=H(h,this.isActivatable);d&&(d.item.tabIndex=-1),c.preventDefault();const p=this.isRtl(),w=p?E.ArrowRight:E.ArrowLeft,g=p?E.ArrowLeft:E.ArrowRight;switch(l){case E.ArrowDown:case g:Z(h,d,this.isActivatable);break;case E.ArrowUp:case w:Q(h,d,this.isActivatable);break;case E.Home:at(h,this.isActivatable);break;case E.End:rt(h,this.isActivatable);break}},this.onDeactivateItems=()=>{const c=this.items;for(const l of c)this.deactivateItem(l)},this.onRequestActivation=c=>{this.onDeactivateItems();const l=c.target;this.activateItem(l),l.focus()},this.onSlotchange=()=>{const c=this.items;let l=!1;for(const d of c){if(!d.disabled&&d.tabIndex>-1&&!l){l=!0,d.tabIndex=0;continue}d.tabIndex=-1}if(l)return;const h=V(c,this.isActivatable);h&&(h.tabIndex=0)};const{isItem:e,getPossibleItems:n,isRtl:o,deactivateItem:s,activateItem:f,isNavigableKey:a,isActivatable:r}=t;this.isItem=e,this.getPossibleItems=n,this.isRtl=o,this.deactivateItem=s,this.activateItem=f,this.isNavigableKey=a,this.isActivatable=r}get items(){const t=this.getPossibleItems(),e=[];for(const n of t){if(this.isItem(n)){e.push(n);continue}const s=n.item;s&&this.isItem(s)&&e.push(s)}return e}activateNextItem(){const t=this.items,e=H(t,this.isActivatable);return e&&(e.item.tabIndex=-1),Z(t,e,this.isActivatable)}activatePreviousItem(){const t=this.items,e=H(t,this.isActivatable);return e&&(e.item.tabIndex=-1),Q(t,e,this.isActivatable)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const J={SPACE:"Space",ENTER:"Enter"},kt={ESCAPE:"Escape",SPACE:J.SPACE,ENTER:J.ENTER};function St(i){return Object.values(kt).some(t=>t===i)}function tt(i,t){const e=new Event("md-contains",{bubbles:!0,composed:!0});let n=[];const o=f=>{n=f.composedPath()};return t.addEventListener("md-contains",o),i.dispatchEvent(e),t.removeEventListener("md-contains",o),n.length>0}const B={NONE:"none",LIST_ROOT:"list-root",FIRST_ITEM:"first-item",LAST_ITEM:"last-item"};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const et={END_START:"end-start",END_END:"end-end",START_START:"start-start",START_END:"start-end"};class xt{constructor(t,e){this.host=t,this.getProperties=e,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){const{surfaceEl:t,anchorEl:e,anchorCorner:n,surfaceCorner:o,positioning:s,xOffset:f,yOffset:a,repositionStrategy:r}=this.getProperties(),c=n.toLowerCase().trim(),l=o.toLowerCase().trim();if(!t||!e)return;const h=window.innerWidth,d=window.innerHeight,p=document.createElement("div");p.style.opacity="0",p.style.position="fixed",p.style.display="block",p.style.inset="0",document.body.appendChild(p);const w=p.getBoundingClientRect();p.remove();const g=window.innerHeight-w.bottom,y=window.innerWidth-w.right;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete,t.popover&&t.isConnected&&t.showPopover();const A=t.getSurfacePositionClientRect?t.getSurfacePositionClientRect():t.getBoundingClientRect(),u=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),[T,C]=l.split("-"),[O,I]=c.split("-"),S=getComputedStyle(t).direction==="ltr";let{blockInset:x,blockOutOfBoundsCorrection:R,surfaceBlockProperty:F}=this.calculateBlock({surfaceRect:A,anchorRect:u,anchorBlock:O,surfaceBlock:T,yOffset:a,positioning:s,windowInnerHeight:d,blockScrollbarHeight:g});if(R){const W=T==="start"?"end":"start",K=O==="start"?"end":"start",P=this.calculateBlock({surfaceRect:A,anchorRect:u,anchorBlock:K,surfaceBlock:W,yOffset:a,positioning:s,windowInnerHeight:d,blockScrollbarHeight:g});R>P.blockOutOfBoundsCorrection&&(x=P.blockInset,R=P.blockOutOfBoundsCorrection,F=P.surfaceBlockProperty)}let{inlineInset:_,inlineOutOfBoundsCorrection:D,surfaceInlineProperty:j}=this.calculateInline({surfaceRect:A,anchorRect:u,anchorInline:I,surfaceInline:C,xOffset:f,positioning:s,isLTR:S,windowInnerWidth:h,inlineScrollbarWidth:y});if(D){const W=C==="start"?"end":"start",K=I==="start"?"end":"start",P=this.calculateInline({surfaceRect:A,anchorRect:u,anchorInline:K,surfaceInline:W,xOffset:f,positioning:s,isLTR:S,windowInnerWidth:h,inlineScrollbarWidth:y});Math.abs(D)>Math.abs(P.inlineOutOfBoundsCorrection)&&(_=P.inlineInset,D=P.inlineOutOfBoundsCorrection,j=P.surfaceInlineProperty)}r==="move"&&(x=x-R,_=_-D),this.surfaceStylesInternal={display:"block",opacity:"1",[F]:`${x}px`,[j]:`${_}px`},r==="resize"&&(R&&(this.surfaceStylesInternal.height=`${A.height-R}px`),D&&(this.surfaceStylesInternal.width=`${A.width-D}px`)),this.host.requestUpdate()}calculateBlock(t){const{surfaceRect:e,anchorRect:n,anchorBlock:o,surfaceBlock:s,yOffset:f,positioning:a,windowInnerHeight:r,blockScrollbarHeight:c}=t,l=a==="fixed"||a==="document"?1:0,h=a==="document"?1:0,d=s==="start"?1:0,p=s==="end"?1:0,g=(o!==s?1:0)*n.height+f,y=d*n.top+p*(r-n.bottom-c),A=d*window.scrollY-p*window.scrollY,u=Math.abs(Math.min(0,r-y-g-e.height));return{blockInset:l*y+h*A+g,blockOutOfBoundsCorrection:u,surfaceBlockProperty:s==="start"?"inset-block-start":"inset-block-end"}}calculateInline(t){const{isLTR:e,surfaceInline:n,anchorInline:o,anchorRect:s,surfaceRect:f,xOffset:a,positioning:r,windowInnerWidth:c,inlineScrollbarWidth:l}=t,h=r==="fixed"||r==="document"?1:0,d=r==="document"?1:0,p=e?1:0,w=e?0:1,g=n==="start"?1:0,y=n==="end"?1:0,u=(o!==n?1:0)*s.width+a,T=g*s.left+y*(c-s.right-l),C=g*(c-s.right-l)+y*s.left,O=p*T+w*C,I=g*window.scrollX-y*window.scrollX,S=y*window.scrollX-g*window.scrollX,x=p*I+w*S,R=Math.abs(Math.min(0,c-O-u-f.width)),F=h*O+u+d*x;let _=n==="start"?"inset-inline-start":"inset-inline-end";return(r==="document"||r==="fixed")&&(n==="start"&&e||n==="end"&&!e?_="left":_="right"),{inlineInset:F,inlineOutOfBoundsCorrection:R,surfaceInlineProperty:_}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){const t=this.getProperties();let e=!1;for(const[f,a]of Object.entries(t))if(e=e||a!==this.lastValues[f],e)break;const n=this.lastValues.isOpen!==t.isOpen,o=!!t.anchorEl,s=!!t.surfaceEl;e&&o&&s&&(this.lastValues.isOpen=t.isOpen,t.isOpen?(this.lastValues=t,await this.position(),t.onOpen()):n&&(await t.beforeClose(),this.close(),t.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate();const t=this.getProperties().surfaceEl;t!=null&&t.popover&&(t!=null&&t.isConnected)&&t.hidePopover()}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const k={INDEX:0,ITEM:1,TEXT:2};class Pt{constructor(t){this.getProperties=t,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=e=>{this.isTypingAhead?this.typeahead(e):this.beginTypeahead(e)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(t){this.active&&(t.code==="Space"||t.code==="Enter"||t.code.startsWith("Arrow")||t.code==="Escape"||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map((e,n)=>[n,e,e.typeaheadText.trim().toLowerCase()]),this.lastActiveRecord=this.typeaheadRecords.find(e=>e[k.ITEM].tabIndex===0)??null,this.lastActiveRecord&&(this.lastActiveRecord[k.ITEM].tabIndex=-1),this.typeahead(t)))}typeahead(t){if(t.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),t.code==="Enter"||t.code.startsWith("Arrow")||t.code==="Escape"){this.endTypeahead(),this.lastActiveRecord&&(this.lastActiveRecord[k.ITEM].tabIndex=-1);return}t.code==="Space"&&t.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=t.key.toLowerCase();const e=this.lastActiveRecord?this.lastActiveRecord[k.INDEX]:-1,n=this.typeaheadRecords.length,o=r=>(r[k.INDEX]+n-e)%n,s=this.typeaheadRecords.filter(r=>!r[k.ITEM].disabled&&r[k.TEXT].startsWith(this.typaheadBuffer)).sort((r,c)=>o(r)-o(c));if(s.length===0){clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[k.ITEM].tabIndex=-1),this.endTypeahead();return}const f=this.typaheadBuffer.length===1;let a;this.lastActiveRecord===s[0]&&f?a=s[1]??s[0]:a=s[0],this.lastActiveRecord&&(this.lastActiveRecord[k.ITEM].tabIndex=-1),this.lastActiveRecord=a,a[k.ITEM].tabIndex=0,a[k.ITEM].focus()}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Lt=200,lt=new Set([E.ArrowDown,E.ArrowUp,E.Home,E.End]),_t=new Set([E.ArrowLeft,E.ArrowRight,...lt]);function Dt(i=document){var e;let t=i.activeElement;for(;t&&((e=t==null?void 0:t.shadowRoot)!=null&&e.activeElement);)t=t.shadowRoot.activeElement;return t}class v extends pt{get openDirection(){return this.menuCorner.split("-")[0]==="start"?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(t){this.currentAnchorElement=t,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.typeaheadDelay=Lt,this.anchorCorner=et.END_START,this.menuCorner=et.START_START,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=B.FIRST_ITEM,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isRepositioning=!1,this.openCloseAnimationSignal=ft(),this.listController=new Rt({isItem:t=>t.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:t=>{t.selected=!1,t.tabIndex=-1},activateItem:t=>{t.selected=!0,t.tabIndex=0},isNavigableKey:t=>{if(!this.isSubmenu)return _t.has(t);const n=getComputedStyle(this).direction==="rtl"?E.ArrowLeft:E.ArrowRight;return t===n?!0:lt.has(t)}}),this.lastFocusedElement=null,this.typeaheadController=new Pt(()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive})),this.currentAnchorElement=null,this.internals=this.attachInternals(),this.menuPositionController=new xt(this,()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:this.positioning==="popover"?"document":this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow&&this.positioning!=="popover"?"move":"resize"})),this.onWindowResize=()=>{this.isRepositioning||this.positioning!=="document"&&this.positioning!=="fixed"&&this.positioning!=="popover"||(this.isRepositioning=!0,this.reposition(),this.isRepositioning=!1)},this.handleFocusout=async t=>{const e=this.anchorElement;if(this.stayOpenOnFocusout||!this.open||this.pointerPath.includes(e))return;if(t.relatedTarget){if(tt(t.relatedTarget,this)||this.pointerPath.length!==0&&tt(t.relatedTarget,e))return}else if(this.pointerPath.includes(this))return;const n=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=n},this.onOpened=async()=>{this.lastFocusedElement=Dt();const t=this.items,e=H(t);e&&this.defaultFocus!==B.NONE&&(e.item.tabIndex=-1);let n=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):n=!!await this.animateOpen(),this.defaultFocus){case B.FIRST_ITEM:const o=V(t);o&&(o.tabIndex=0,o.focus(),await o.updateComplete);break;case B.LAST_ITEM:const s=ct(t);s&&(s.tabIndex=0,s.focus(),await s.updateComplete);break;case B.LIST_ROOT:this.focus();break;default:case B.NONE:break}n||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{var t,e;this.open=!1,this.skipRestoreFocus||(e=(t=this.lastFocusedElement)==null?void 0:t.focus)==null||e.call(t),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=t=>{this.pointerPath=t.composedPath()},this.onDocumentClick=t=>{if(!this.open)return;const e=t.composedPath();!this.stayOpenOnOutsideClick&&!e.includes(this)&&!e.includes(this.anchorElement)&&(this.open=!1)},this.internals.role="menu",this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout)}get items(){return this.listController.items}willUpdate(t){if(t.has("open")){if(this.open){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}update(t){t.has("open")&&(this.open?this.setUpGlobalEventListeners():this.cleanUpGlobalEventListeners()),t.has("positioning")&&this.positioning==="popover"&&!this.showPopover&&(this.positioning="fixed"),super.update(t)}connectedCallback(){super.connectedCallback(),this.open&&this.setUpGlobalEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.cleanUpGlobalEventListeners()}render(){return this.renderSurface()}renderSurface(){return q`
      <div
        class="menu ${mt(this.getSurfaceClasses())}"
        style=${Et(this.menuPositionController.surfaceStyles)}
        popover=${this.positioning==="popover"?"manual":vt}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `}renderMenuItems(){return q`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return q`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:this.positioning==="fixed","has-overflow":this.hasOverflow}}captureKeydown(t){t.target===this&&!t.defaultPrevented&&St(t.code)&&(t.preventDefault(),this.close()),this.typeaheadController.onKeydown(t)}async animateOpen(){const t=this.surfaceEl,e=this.slotEl;if(!t||!e)return!0;const n=this.openDirection;this.dispatchEvent(new Event("opening")),t.classList.toggle("animating",!0);const o=this.openCloseAnimationSignal.start(),s=t.offsetHeight,f=n==="UP",a=this.items,r=500,c=50,l=250,h=(r-l)/a.length,d=t.animate([{height:"0px"},{height:`${s}px`}],{duration:r,easing:U.EMPHASIZED}),p=e.animate([{transform:f?`translateY(-${s}px)`:""},{transform:""}],{duration:r,easing:U.EMPHASIZED}),w=t.animate([{opacity:0},{opacity:1}],c),g=[];for(let u=0;u<a.length;u++){const T=f?a.length-1-u:u,C=a[T],O=C.animate([{opacity:0},{opacity:1}],{duration:l,delay:h*u});C.classList.toggle("md-menu-hidden",!0),O.addEventListener("finish",()=>{C.classList.toggle("md-menu-hidden",!1)}),g.push([C,O])}let y=u=>{};const A=new Promise(u=>{y=u});return o.addEventListener("abort",()=>{d.cancel(),p.cancel(),w.cancel(),g.forEach(([u,T])=>{u.classList.toggle("md-menu-hidden",!1),T.cancel()}),y(!0)}),d.addEventListener("finish",()=>{t.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),y(!1)}),await A}animateClose(){let t,e;const n=new Promise((I,S)=>{t=I,e=S}),o=this.surfaceEl,s=this.slotEl;if(!o||!s)return e(),n;const a=this.openDirection==="UP";this.dispatchEvent(new Event("closing")),o.classList.toggle("animating",!0);const r=this.openCloseAnimationSignal.start(),c=o.offsetHeight,l=this.items,h=150,d=50,p=h-d,w=50,g=50,y=.35,A=(h-g-w)/l.length,u=o.animate([{height:`${c}px`},{height:`${c*y}px`}],{duration:h,easing:U.EMPHASIZED_ACCELERATE}),T=s.animate([{transform:""},{transform:a?`translateY(-${c*(1-y)}px)`:""}],{duration:h,easing:U.EMPHASIZED_ACCELERATE}),C=o.animate([{opacity:1},{opacity:0}],{duration:d,delay:p}),O=[];for(let I=0;I<l.length;I++){const S=a?I:l.length-1-I,x=l[S],R=x.animate([{opacity:1},{opacity:0}],{duration:w,delay:g+A*I});R.addEventListener("finish",()=>{x.classList.toggle("md-menu-hidden",!0)}),O.push([x,R])}return r.addEventListener("abort",()=>{u.cancel(),T.cancel(),C.cancel(),O.forEach(([I,S])=>{S.cancel(),I.classList.toggle("md-menu-hidden",!1)}),e()}),u.addEventListener("finish",()=>{o.classList.toggle("animating",!1),O.forEach(([I])=>{I.classList.toggle("md-menu-hidden",!1)}),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),t(!0)}),n}handleKeydown(t){this.pointerPath=[],this.listController.handleKeydown(t)}setUpGlobalEventListeners(){document.addEventListener("click",this.onDocumentClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),document.addEventListener("resize",this.onWindowResize,{passive:!0}),window.addEventListener("resize",this.onWindowResize,{passive:!0})}cleanUpGlobalEventListeners(){document.removeEventListener("click",this.onDocumentClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),document.removeEventListener("resize",this.onWindowResize),window.removeEventListener("resize",this.onWindowResize)}onCloseMenu(){this.close()}onDeactivateItems(t){t.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(t){t.stopPropagation(),this.listController.onRequestActivation(t)}handleDeactivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(t){t.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(t){t.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1,this.slotItems.forEach(e=>{var n;(n=e.close)==null||n.call(e)})}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}reposition(){this.open&&this.menuPositionController.position()}}m([ot(".menu")],v.prototype,"surfaceEl",void 0);m([ot("slot")],v.prototype,"slotEl",void 0);m([b()],v.prototype,"anchor",void 0);m([b()],v.prototype,"positioning",void 0);m([b({type:Boolean})],v.prototype,"quick",void 0);m([b({type:Boolean,attribute:"has-overflow"})],v.prototype,"hasOverflow",void 0);m([b({type:Boolean,reflect:!0})],v.prototype,"open",void 0);m([b({type:Number,attribute:"x-offset"})],v.prototype,"xOffset",void 0);m([b({type:Number,attribute:"y-offset"})],v.prototype,"yOffset",void 0);m([b({type:Number,attribute:"typeahead-delay"})],v.prototype,"typeaheadDelay",void 0);m([b({attribute:"anchor-corner"})],v.prototype,"anchorCorner",void 0);m([b({attribute:"menu-corner"})],v.prototype,"menuCorner",void 0);m([b({type:Boolean,attribute:"stay-open-on-outside-click"})],v.prototype,"stayOpenOnOutsideClick",void 0);m([b({type:Boolean,attribute:"stay-open-on-focusout"})],v.prototype,"stayOpenOnFocusout",void 0);m([b({type:Boolean,attribute:"skip-restore-focus"})],v.prototype,"skipRestoreFocus",void 0);m([b({attribute:"default-focus"})],v.prototype,"defaultFocus",void 0);m([It({flatten:!0})],v.prototype,"slotItems",void 0);m([ut()],v.prototype,"typeaheadActive",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Bt=gt`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, 4px)}.menu{border-radius:var(--md-menu-container-shape, 4px);display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit}.item-padding{padding-block:8px}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}/*# sourceMappingURL=menu-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let z=class extends v{};z.styles=[Bt];z=m([yt("md-menu")],z);const ht={name:"IOIconMenu",components:{IOIconButtonFilled:bt}};document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("anchor"),t=document.getElementById("option-menu");i&&t&&(t.anchorElement=i,i.addEventListener("click",()=>{t.open=!t.open}))});const Nt={style:{position:"relative"}},Mt=X("div",{slot:"headline"},"Apple",-1),Ft=X("div",{slot:"headline"},"Banana",-1),Ut=X("div",{slot:"headline"},"Cucumber",-1);function $t(i,t,e,n,o,s){const f=Y("IOIconButtonFilled"),a=Y("md-menu-item"),r=Y("md-menu");return At(),wt("span",Nt,[N(f,{id:"anchor"}),N(r,{id:"option-menu"},{default:$(()=>[N(a,null,{default:$(()=>[Mt]),_:1}),N(a,null,{default:$(()=>[Ft]),_:1}),N(a,null,{default:$(()=>[Ut]),_:1})]),_:1})])}const G=Ct(ht,[["render",$t]]);ht.__docgenInfo={displayName:"IOIconMenu",exportName:"default",description:"",tags:{},sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/labs/Menu/IOIconMenu.vue"]};const dt='<IOIconMenu @click="handleClick" />',Ht={title:"UI/Labs/Menu/Icon Menu",component:G,render:i=>({components:{IOIconMenu:G},setup(){return{args:i}},template:dt}),args:{},argTypes:{handleClick:{action:"clicked"}}},M={render:i=>({components:{IOIconMenu:G},setup(){return{args:i}},template:dt,methods:{}})};var nt,it,st;M.parameters={...M.parameters,docs:{...(nt=M.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOIconMenu
    },
    setup() {
      return {
        args
      };
    },
    template,
    methods: {}
  })
}`,...(st=(it=M.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};const Wt=["Default"],Jt=Object.freeze(Object.defineProperty({__proto__:null,Default:M,__namedExportsOrder:Wt,default:Ht},Symbol.toStringTag,{value:"Module"}));export{Jt as I};