import{i as w,d as S,_ as p,n as b,s as E,p as T,x as $,o as A,e as O}from"./aria-6ffa173a.js";import"./ripple-2dc3e573.js";import{i as L}from"./events-00ef5ad2.js";import{b as B,d as z,o as D}from"./vue.esm-bundler-091b3824.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const N=w`@media(forced-colors: active){:host{--md-radio-disabled-selected-icon-color: GrayText;--md-radio-disabled-selected-icon-opacity: 1;--md-radio-disabled-unselected-icon-color: GrayText;--md-radio-disabled-unselected-icon-opacity: 1;--md-radio-selected-icon-color: CanvasText;--md-radio-selected-hover-icon-color: CanvasText;--md-radio-selected-focus-icon-color: CanvasText;--md-radio-selected-pressed-icon-color: CanvasText;--md-radio-icon-color: CanvasText;--md-radio-hover-icon-color: CanvasText;--md-radio-focus-icon-color: CanvasText;--md-radio-pressed-icon-color: CanvasText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class U{constructor(e){this.host=e,this.focused=!1,this.root=null,this.handleFocusIn=()=>{this.focused=!0,this.updateTabIndices()},this.handleFocusOut=()=>{this.focused=!1,this.updateTabIndices()},this.handleKeyDown=o=>{const t=o.key==="ArrowDown",n=o.key==="ArrowUp",u=o.key==="ArrowLeft",l=o.key==="ArrowRight";if(!u&&!l&&!t&&!n)return;const r=this.getNamedSiblings();if(!r.length)return;o.preventDefault();const g=getComputedStyle(this.host).direction==="rtl"?u||t:l||t,m=r.indexOf(this.host);let i=g?m+1:m-1;for(;i!==m;){i>=r.length?i=0:i<0&&(i=r.length-1);const a=r[i];if(a.hasAttribute("disabled")){g?i++:i--;continue}for(const h of r)h!==a&&(h.checked=!1,h.tabIndex=-1,h.blur());a.checked=!0,a.tabIndex=0,a.focus(),a.dispatchEvent(new Event("change",{bubbles:!0}));break}}}hostConnected(){this.root=this.host.getRootNode(),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("focusin",this.handleFocusIn),this.host.addEventListener("focusout",this.handleFocusOut),this.host.checked&&this.uncheckSiblings(),this.updateTabIndices()}hostDisconnected(){this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("focusin",this.handleFocusIn),this.host.removeEventListener("focusout",this.handleFocusOut),this.updateTabIndices(),this.root=null}handleCheckedChange(){this.host.checked&&(this.uncheckSiblings(),this.updateTabIndices())}uncheckSiblings(){for(const e of this.getNamedSiblings())e!==this.host&&(e.checked=!1)}updateTabIndices(){const e=this.getNamedSiblings(),o=e.find(t=>t.checked);if(o||this.focused){const t=o||this.host;t.tabIndex=0;for(const n of e)n!==t&&(n.tabIndex=-1);return}for(const t of e)t.tabIndex=0}getNamedSiblings(){const e=this.host.getAttribute("name");return!e||!this.root?[]:Array.from(this.root.querySelectorAll(`[name="${e}"]`))}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var I;const v=Symbol("checked");let K=0,c=class extends E{get checked(){return this[v]}set checked(e){const o=this.checked;if(o===e)return;this[v]=e;const t=String(e);this.internals.setFormValue(this.checked?this.value:null,t),this.requestUpdate("checked",o),this.selectionController.handleCheckedChange()}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.maskId=`cutout${++K}`,this[I]=!1,this.disabled=!1,this.value="on",this.selectionController=new U(this),this.internals=T(this,this.attachInternals()),this.addController(this.selectionController),this.internals.role="radio",this.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const e={checked:this.checked};return $`
      <div class="container ${A(e)}" aria-hidden="true">
        <md-ripple part="ripple" .control=${this}
            ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring part="focus-ring" .control=${this}></md-focus-ring>
        <svg class="icon" viewBox="0 0 20 20">
          <mask id="${this.maskId}">
            <rect width="100%" height="100%" fill="white" />
            <circle cx="10" cy="10" r="8" fill="black" />
          </mask>
          <circle class="outer circle" cx="10" cy="10" r="10"
              mask="url(#${this.maskId})" />
          <circle class="inner circle" cx="10" cy="10" r="5" />
        </svg>

        <input
          id="input"
          type="radio"
          tabindex="-1"
          .checked=${this.checked}
          .value=${this.value}
          ?disabled=${this.disabled}
        >
      </div>
    `}updated(){this.internals.ariaChecked=String(this.checked)}async handleClick(e){this.disabled||(await 0,!e.defaultPrevented&&(L(e)&&this.focus(),this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))))}async handleKeydown(e){await 0,!(e.key!==" "||e.defaultPrevented)&&this.click()}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}};I=v;S(c);c.formAssociated=!0;p([b({type:Boolean})],c.prototype,"checked",null);p([b({type:Boolean,reflect:!0})],c.prototype,"disabled",void 0);p([b()],c.prototype,"value",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const M=w`:host{--_disabled-selected-icon-color: var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-radio-disabled-selected-icon-opacity, 0.38);--_disabled-unselected-icon-color: var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-unselected-icon-opacity: var(--md-radio-disabled-unselected-icon-opacity, 0.38);--_icon-size: var(--md-radio-icon-size, 20px);--_selected-focus-icon-color: var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-radio-state-layer-size, 40px);--_focus-icon-color: var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);display:inline-flex;height:var(--_icon-size);outline:none;position:relative;vertical-align:top;width:var(--_icon-size);-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_icon-size))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}input{appearance:none;height:48px;margin:0;position:absolute;width:48px}:host([touch-target=none]) input{width:100%;height:100%}md-ripple{border-radius:50%;height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.icon{fill:var(--_icon-color);inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--_selected-icon-color)}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--_hover-icon-color)}:host(:focus-within) .icon{fill:var(--_focus-icon-color)}:host(:active) .icon{fill:var(--_pressed-icon-color)}:host([disabled]) .icon{fill:var(--_disabled-unselected-icon-color);opacity:var(--_disabled-unselected-icon-opacity)}:host(:hover) .checked .icon{fill:var(--_selected-hover-icon-color)}:host(:focus-within) .checked .icon{fill:var(--_selected-focus-icon-color)}:host(:active) .checked .icon{fill:var(--_selected-pressed-icon-color)}:host([disabled]) .checked .icon{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=radio-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let y=class extends c{};y.styles=[M,N];y=p([O("md-radio")],y);const C={name:"IORadioButton",emits:["update:modelValue"]};function V(s,e,o,t,n,u){const l=B("md-radio");return D(),z(l,{"touch-target":"wrapper",value:s.modelValue,onInput:e[0]||(e[0]=r=>s.$emit("update:modelValue",r.target.value))},null,8,["value"])}const f=F(C,[["render",V]]);C.__docgenInfo={displayName:"IORadioButton",exportName:"default",description:"",tags:{},events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Radio/IORadioButton.vue"]};const R="<IORadioButton :disabled=args.disabled />",P={title:"UI/Atoms/Inputs/Radio Button",component:f,render:s=>({components:{IORadioButton:f},setup(){return{args:s}},template:R}),args:{disabled:!1},argTypes:{disabled:{control:"boolean"}}},d={render:s=>({components:{IORadioButton:f},setup(){return{args:s}},template:R})};var _,k,x;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(x=(k=d.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const j=["Default"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:j,default:P},Symbol.toStringTag,{value:"Module"}));export{Z as R};
//# sourceMappingURL=radio.stories-d4154899.js.map
