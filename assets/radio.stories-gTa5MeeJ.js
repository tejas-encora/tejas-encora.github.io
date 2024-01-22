import{_ as d,n as _,c as B,s as q,x as L,d as z,i as D,f as U}from"./animation-_TEqrmD1.js";import"./ripple-7WbymdBP.js";import{i as M}from"./events-SXK1JT6v.js";import{V,m as K,a as N,g as P,b as j,c as H,d as J}from"./validator-bsz2Xc5j.js";import{m as Q,i as R}from"./element-internals-MRZXgA-l.js";import{m as W,b as X,o as Y}from"./vue.esm-bundler-488J0-Su.js";import{_ as Z}from"./_plugin-vue_export-helper-x3n3nnut.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const u=Symbol("isFocusable"),x=Symbol("privateIsFocusable"),y=Symbol("externalTabIndex"),b=Symbol("isUpdatingTabIndex"),g=Symbol("updateTabIndex"),I=Symbol("hasConstructed");function G(a){var e,s,t,i;class r extends a{get[u](){return this[x]}set[u](o){this[u]!==o&&(this[x]=o,this[g]())}constructor(...o){super(...o),this[e]=!1,this[s]=null,this[t]=!1,this[i]=!1,this[u]=!0,queueMicrotask(()=>{this[I]=!0,this[g]()})}attributeChangedCallback(o,h,f){if(o!=="tabindex"){super.attributeChangedCallback(o,h,f);return}if(this.requestUpdate("tabIndex",Number(h??-1)),!this[b]){if(!this.hasAttribute("tabindex")){this[y]=null,this[g]();return}this[y]=this.tabIndex}}[(e=x,s=y,t=b,i=I,g)](){if(!this[I])return;const o=this[u]?0:-1,h=this[y]??o;this[b]=!0,this.tabIndex=h,this[b]=!1}}return d([_({noAccessor:!0})],r.prototype,"tabIndex",void 0),r}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ee extends V{computeValidity(e){this.radioElement||(this.radioElement=document.createElement("input"),this.radioElement.type="radio",this.radioElement.name="group");let s=!1,t=!1;for(const{checked:i,required:r}of e)r&&(s=!0),i&&(t=!0);return this.radioElement.checked=t,this.radioElement.required=s,{validity:{valueMissing:s&&!t},validationMessage:this.radioElement.validationMessage}}equals(e,s){if(e.length!==s.length)return!1;for(let t=0;t<e.length;t++){const i=e[t],r=s[t];if(i.checked!==r.checked||i.required!==r.required)return!1}return!0}copy(e){return e.map(({checked:s,required:t})=>({checked:s,required:t}))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class te{get controls(){const e=this.host.getAttribute("name");return!e||!this.root||!this.host.isConnected?[this.host]:Array.from(this.root.querySelectorAll(`[name="${e}"]`))}constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=s=>{const t=s.key==="ArrowDown",i=s.key==="ArrowUp",r=s.key==="ArrowLeft",l=s.key==="ArrowRight";if(!r&&!l&&!t&&!i)return;const o=this.controls;if(!o.length)return;s.preventDefault();const f=getComputedStyle(this.host).direction==="rtl"?r||t:l||t,k=o.indexOf(this.host);let c=f?k+1:k-1;for(;c!==k;){c>=o.length?c=0:c<0&&(c=o.length-1);const n=o[c];if(n.hasAttribute("disabled")){f?c++:c--;continue}for(const v of o)v!==n&&(v.checked=!1,v.tabIndex=-1,v.blur());n.checked=!0,n.tabIndex=0,n.focus(),n.dispatchEvent(new Event("change",{bubbles:!0}));break}}}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("focusin",this.handleFocusIn),this.host.addEventListener("focusout",this.handleFocusOut),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()}hostDisconnected(){this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("focusin",this.handleFocusIn),this.host.removeEventListener("focusout",this.handleFocusOut),this.updateTabIndices(),this.root=null}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(const e of this.controls)e!==this.host&&(e.checked=!1)}updateTabIndices(){const e=this.controls,s=e.find(t=>t.checked);if(s||this.focused){const t=s||this.host;t.tabIndex=0;for(const i of e)i!==t&&(i.tabIndex=-1);return}for(const t of e)t.tabIndex=0}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var S;const w=Symbol("checked");let se=0;const oe=K(N(Q(G(q))));let m=class extends oe{get checked(){return this[w]}set checked(e){const s=this.checked;s!==e&&(this[w]=e,this.requestUpdate("checked",s),this.selectionController.handleCheckedChange())}constructor(){super(),this.maskId=`cutout${++se}`,this[S]=!1,this.required=!1,this.value="on",this.selectionController=new te(this),this.addController(this.selectionController),this[R].role="radio",this.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const e={checked:this.checked};return L`
      <div class="container ${z(e)}" aria-hidden="true">
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
    `}updated(){this[R].ariaChecked=String(this.checked)}async handleClick(e){this.disabled||(await 0,!e.defaultPrevented&&(M(e)&&this.focus(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))))}async handleKeydown(e){await 0,!(e.key!==" "||e.defaultPrevented)&&this.click()}[(S=w,P)](){return this.checked?this.value:null}[j](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}[H](){return new ee(()=>this.selectionController?this.selectionController.controls:[this])}[J](){return this.container}};d([_({type:Boolean})],m.prototype,"checked",null);d([_({type:Boolean})],m.prototype,"required",void 0);d([_()],m.prototype,"value",void 0);d([B(".container")],m.prototype,"container",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const ie=D`@layer{:host{--_disabled-selected-icon-color: var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-radio-disabled-selected-icon-opacity, 0.38);--_disabled-unselected-icon-color: var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-unselected-icon-opacity: var(--md-radio-disabled-unselected-icon-opacity, 0.38);--_icon-size: var(--md-radio-icon-size, 20px);--_selected-focus-icon-color: var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-radio-state-layer-size, 40px);--_focus-icon-color: var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);display:inline-flex;height:var(--_icon-size);outline:none;position:relative;vertical-align:top;width:var(--_icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_icon-size))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}input{appearance:none;height:48px;margin:0;position:absolute;width:48px;cursor:inherit}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.icon{fill:var(--_icon-color);inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--_selected-icon-color)}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--_hover-icon-color)}:host(:focus-within) .icon{fill:var(--_focus-icon-color)}:host(:active) .icon{fill:var(--_pressed-icon-color)}:host([disabled]) .icon{fill:var(--_disabled-unselected-icon-color);opacity:var(--_disabled-unselected-icon-opacity)}:host(:hover) .checked .icon{fill:var(--_selected-hover-icon-color)}:host(:focus-within) .checked .icon{fill:var(--_selected-focus-icon-color)}:host(:active) .checked .icon{fill:var(--_selected-pressed-icon-color)}:host([disabled]) .checked .icon{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}}@layer hcm{@media(forced-colors: active){.icon{fill:CanvasText}:host([disabled]) .icon{fill:GrayText;opacity:1}}}/*# sourceMappingURL=radio-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let C=class extends m{};C.styles=[ie];C=d([U("md-radio")],C);const A={name:"IORadioButton"};function re(a,e,s,t,i,r){const l=W("md-radio");return Y(),X(l)}const E=Z(A,[["render",re]]);A.__docgenInfo={displayName:"IORadioButton",exportName:"default",description:"",tags:{},sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Radio/IORadioButton.vue"]};const O="<IORadioButton :disabled=args.disabled />",ae={title:"UI/Atoms/Inputs/Radio Button",component:E,render:a=>({components:{IORadioButton:E},setup(){return{args:a}},template:O}),args:{disabled:!1},argTypes:{disabled:{control:"boolean"}}},p={render:a=>({components:{IORadioButton:E},setup(){return{args:a}},template:O})};var T,$,F;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IORadioButton
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(F=($=p.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};const ce=["Default"],ye=Object.freeze(Object.defineProperty({__proto__:null,Default:p,__namedExportsOrder:ce,default:ae},Symbol.toStringTag,{value:"Module"}));export{ye as R};
