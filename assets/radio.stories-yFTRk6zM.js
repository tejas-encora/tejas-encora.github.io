import{_ as d,n as g,a as B,s as L,x as z,b as D,i as M,t as O}from"./ripple-6UIGBq4O.js";import{i as U}from"./events-SXK1JT6v.js";import{V,m as K,a as N,g as P,b as j,c as H,d as J}from"./validator-cRke8Nq_.js";import{m as Q,i as S}from"./element-internals-MRZXgA-l.js";import{d as W,e as X,o as Y}from"./vue.esm-bundler-GE7kM0dE.js";import{_ as Z}from"./_plugin-vue_export-helper-x3n3nnut.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const h=Symbol("isFocusable"),x=Symbol("privateIsFocusable"),v=Symbol("externalTabIndex"),y=Symbol("isUpdatingTabIndex"),b=Symbol("updateTabIndex"),I=Symbol("hasConstructed");function G(r){var e,t,o,i;class a extends r{get[h](){return this[x]}set[h](s){this[h]!==s&&(this[x]=s,this[b]())}constructor(...s){super(...s),this[e]=!1,this[t]=null,this[o]=!1,this[i]=!1,this[h]=!0,queueMicrotask(()=>{this[I]=!0,this[b]()})}attributeChangedCallback(s,l,m){if(s!=="tabindex"){super.attributeChangedCallback(s,l,m);return}if(this.requestUpdate("tabIndex",Number(l??-1)),!this[y]){if(!this.hasAttribute("tabindex")){this[v]=null,this[b]();return}this[v]=this.tabIndex}}[(e=x,t=v,o=y,i=I,b)](){if(!this[I])return;const s=this[h]?0:-1,l=this[v]??s;this[y]=!0,this.tabIndex=l,this[y]=!1}}return d([g({noAccessor:!0})],a.prototype,"tabIndex",void 0),a}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ee extends V{computeValidity(e){this.radioElement||(this.radioElement=document.createElement("input"),this.radioElement.type="radio",this.radioElement.name="group");let t=!1,o=!1;for(const{checked:i,required:a}of e)a&&(t=!0),i&&(o=!0);return this.radioElement.checked=o,this.radioElement.required=t,{validity:{valueMissing:t&&!o},validationMessage:this.radioElement.validationMessage}}equals(e,t){if(e.length!==t.length)return!1;for(let o=0;o<e.length;o++){const i=e[o],a=t[o];if(i.checked!==a.checked||i.required!==a.required)return!1}return!0}copy(e){return e.map(({checked:t,required:o})=>({checked:t,required:o}))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class te{get controls(){const e=this.host.getAttribute("name");return!e||!this.root||!this.host.isConnected?[this.host]:Array.from(this.root.querySelectorAll(`[name="${e}"]`))}constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=t=>{const o=t.key==="ArrowDown",i=t.key==="ArrowUp",a=t.key==="ArrowLeft",_=t.key==="ArrowRight";if(!a&&!_&&!o&&!i)return;const s=this.controls;if(!s.length)return;t.preventDefault();const m=getComputedStyle(this.host).direction==="rtl"?a||o:_||o,k=s.indexOf(this.host);let c=m?k+1:k-1;for(;c!==k;){c>=s.length?c=0:c<0&&(c=s.length-1);const n=s[c];if(n.hasAttribute("disabled")){m?c++:c--;continue}for(const f of s)f!==n&&(f.checked=!1,f.tabIndex=-1,f.blur());n.checked=!0,n.tabIndex=0,n.focus(),n.dispatchEvent(new Event("change",{bubbles:!0}));break}}}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("focusin",this.handleFocusIn),this.host.addEventListener("focusout",this.handleFocusOut),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()}hostDisconnected(){this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("focusin",this.handleFocusIn),this.host.removeEventListener("focusout",this.handleFocusOut),this.updateTabIndices(),this.root=null}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(const e of this.controls)e!==this.host&&(e.checked=!1)}updateTabIndices(){const e=this.controls,t=e.find(o=>o.checked);if(t||this.focused){const o=t||this.host;o.tabIndex=0;for(const i of e)i!==o&&(i.tabIndex=-1);return}for(const o of e)o.tabIndex=0}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var R;const w=Symbol("checked");let oe=0;const se=K(N(Q(G(L))));let p=class extends se{get checked(){return this[w]}set checked(e){const t=this.checked;t!==e&&(this[w]=e,this.requestUpdate("checked",t),this.selectionController.handleCheckedChange())}constructor(){super(),this.maskId=`cutout${++oe}`,this[R]=!1,this.required=!1,this.value="on",this.selectionController=new te(this),this.addController(this.selectionController),this[S].role="radio",this.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const e={checked:this.checked};return z`
      <div class="container ${D(e)}" aria-hidden="true">
        <md-ripple
          part="ripple"
          .control=${this}
          ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring part="focus-ring" .control=${this}></md-focus-ring>
        <svg class="icon" viewBox="0 0 20 20">
          <mask id="${this.maskId}">
            <rect width="100%" height="100%" fill="white" />
            <circle cx="10" cy="10" r="8" fill="black" />
          </mask>
          <circle
            class="outer circle"
            cx="10"
            cy="10"
            r="10"
            mask="url(#${this.maskId})" />
          <circle class="inner circle" cx="10" cy="10" r="5" />
        </svg>

        <input
          id="input"
          type="radio"
          tabindex="-1"
          .checked=${this.checked}
          .value=${this.value}
          ?disabled=${this.disabled} />
      </div>
    `}updated(){this[S].ariaChecked=String(this.checked)}async handleClick(e){this.disabled||(await 0,!e.defaultPrevented&&(U(e)&&this.focus(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))))}async handleKeydown(e){await 0,!(e.key!==" "||e.defaultPrevented)&&this.click()}[(R=w,P)](){return this.checked?this.value:null}[j](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}[H](){return new ee(()=>this.selectionController?this.selectionController.controls:[this])}[J](){return this.container}};d([g({type:Boolean})],p.prototype,"checked",null);d([g({type:Boolean})],p.prototype,"required",void 0);d([g()],p.prototype,"value",void 0);d([B(".container")],p.prototype,"container",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const ie=M`@layer{:host{--_disabled-selected-icon-color: var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-radio-disabled-selected-icon-opacity, 0.38);--_disabled-unselected-icon-color: var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-unselected-icon-opacity: var(--md-radio-disabled-unselected-icon-opacity, 0.38);--_icon-size: var(--md-radio-icon-size, 20px);--_selected-focus-icon-color: var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-radio-state-layer-size, 40px);--_focus-icon-color: var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);display:inline-flex;height:var(--_icon-size);outline:none;position:relative;vertical-align:top;width:var(--_icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_icon-size))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}input{appearance:none;height:48px;margin:0;position:absolute;width:48px;cursor:inherit}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.icon{fill:var(--_icon-color);inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--_selected-icon-color)}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--_hover-icon-color)}:host(:focus-within) .icon{fill:var(--_focus-icon-color)}:host(:active) .icon{fill:var(--_pressed-icon-color)}:host([disabled]) .icon{fill:var(--_disabled-unselected-icon-color);opacity:var(--_disabled-unselected-icon-opacity)}:host(:hover) .checked .icon{fill:var(--_selected-hover-icon-color)}:host(:focus-within) .checked .icon{fill:var(--_selected-focus-icon-color)}:host(:active) .checked .icon{fill:var(--_selected-pressed-icon-color)}:host([disabled]) .checked .icon{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}}@layer hcm{@media(forced-colors: active){.icon{fill:CanvasText}:host([disabled]) .icon{fill:GrayText;opacity:1}}}/*# sourceMappingURL=radio-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let C=class extends p{};C.styles=[ie];C=d([O("md-radio")],C);const $={};function re(r,e){const t=W("md-radio");return Y(),X(t)}const E=Z($,[["render",re]]);$.__docgenInfo={displayName:"IoRadioButton",description:"",tags:{},sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Radio/IoRadioButton.vue"]};const q="<IoRadioButton :disabled=args.disabled />",ae={title:"Components/Radio Button",component:E,render:r=>({components:{IoRadioButton:E},setup(){return{args:r}},template:q}),args:{disabled:!1},argTypes:{disabled:{control:"boolean"}}},u={render:r=>({components:{IoRadioButton:E},setup(){return{args:r}},template:q})};var T,F,A;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IoRadioButton
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(A=(F=u.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};const ce=["Default"],ve=Object.freeze(Object.defineProperty({__proto__:null,Default:u,__namedExportsOrder:ce,default:ae},Symbol.toStringTag,{value:"Module"}));export{ve as R};
