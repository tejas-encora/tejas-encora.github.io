import{c as E,i as H,C as T}from"./menu-0bziLCmx.js";import{e as R,_ as n,n as m,s as _,x as u,i as S,t as N,a as A,T as d,b as Z}from"./ripple-6UIGBq4O.js";import{o as D}from"./query-assigned-elements-xCUt85kR.js";import{s as f,n as F}from"./static-qWfJACUS.js";import{r as K}from"./delegate-G9HsjGKO.js";import{p as I,q as P,d as k,f as v,m as a,g as $,y as p,w as c,o as x}from"./vue.esm-bundler-GE7kM0dE.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let q;function W(s){return(o,t)=>R(o,t,{get(){return(this.renderRoot??q??(q=document.createDocumentFragment())).querySelectorAll(s)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(s){return(o,t)=>{const{slot:e}=s??{},r="slot"+(e?`[name=${e}]`:":not([name])");return R(o,t,{get(){var y;const l=(y=this.renderRoot)==null?void 0:y.querySelector(r);return(l==null?void 0:l.assignedNodes(s))??[]}})}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class w extends _{constructor(){super(...arguments),this.multiline=!1}render(){return u`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `}handleTextSlotChange(){let o=!1,t=0;for(const e of this.textSlots)if(V(e)&&(t+=1),t>1){o=!0;break}this.multiline=o}}n([m({type:Boolean,reflect:!0})],w.prototype,"multiline",void 0);n([W(".text slot")],w.prototype,"textSlots",void 0);function V(s){var o;for(const t of s.assignedNodes({flatten:!0})){const e=t.nodeType===Node.ELEMENT_NODE,r=t.nodeType===Node.TEXT_NODE&&((o=t.textContent)==null?void 0:o.match(/\S/));if(e||r)return!0}return!1}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Y=S`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}/*# sourceMappingURL=item-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let b=class extends w{};b.styles=[Y];b=n([N("md-item")],b);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class G{constructor(o,t){this.host=o,this.internalTypeaheadText=null,this.onClick=()=>{this.host.keepOpen||this.host.dispatchEvent(E(this.host,{kind:T.CLICK_SELECTION}))},this.onKeydown=e=>{if(this.host.href&&e.code==="Enter"){const l=this.getInteractiveElement();l instanceof HTMLAnchorElement&&l.click()}if(e.defaultPrevented)return;const r=e.code;this.host.keepOpen&&r!=="Escape"||H(r)&&(e.preventDefault(),this.host.dispatchEvent(E(this.host,{kind:T.KEYDOWN,key:r})))},this.getHeadlineElements=t.getHeadlineElements,this.getSupportingTextElements=t.getSupportingTextElements,this.getDefaultElements=t.getDefaultElements,this.getInteractiveElement=t.getInteractiveElement,this.host.addController(this)}get typeaheadText(){if(this.internalTypeaheadText!==null)return this.internalTypeaheadText;const o=this.getHeadlineElements(),t=[];return o.forEach(e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())}),t.length===0&&this.getDefaultElements().forEach(e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())}),t.length===0&&this.getSupportingTextElements().forEach(e=>{e.textContent&&e.textContent.trim()&&t.push(e.textContent.trim())}),t.join(" ")}get tagName(){switch(this.host.type){case"link":return"a";case"button":return"button";default:case"menuitem":case"option":return"li"}}get role(){return this.host.type==="option"?"option":"menuitem"}hostConnected(){this.host.toggleAttribute("md-menu-item",!0)}hostUpdate(){this.host.href&&(this.host.type="link")}setTypeaheadText(o){this.internalTypeaheadText=o}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class i extends _{constructor(){super(...arguments),this.disabled=!1,this.type="menuitem",this.href="",this.target="",this.keepOpen=!1,this.selected=!1,this.menuItemController=new G(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.menuItemController.typeaheadText}set typeaheadText(o){this.menuItemController.setTypeaheadText(o)}render(){return this.renderListItem(u`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(o){const t=this.type==="link";let e;switch(this.menuItemController.tagName){case"a":e=f`a`;break;case"button":e=f`button`;break;default:case"li":e=f`li`;break}const r=t&&this.target?this.target:d;return F`
      <${e}
        id="item"
        tabindex=${this.disabled&&!t?-1:0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel||d}
        aria-selected=${this.ariaSelected||d}
        aria-checked=${this.ariaChecked||d}
        aria-expanded=${this.ariaExpanded||d}
        aria-haspopup=${this.ariaHasPopup||d}
        class="list-item ${Z(this.getRenderClasses())}"
        href=${this.href||d}
        target=${r}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${o}</${e}>
    `}renderRipple(){return u` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return u` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return u`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){var o;(o=this.listItemRoot)==null||o.focus()}}K(i);i.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0};n([m({type:Boolean,reflect:!0})],i.prototype,"disabled",void 0);n([m()],i.prototype,"type",void 0);n([m()],i.prototype,"href",void 0);n([m()],i.prototype,"target",void 0);n([m({type:Boolean,attribute:"keep-open"})],i.prototype,"keepOpen",void 0);n([m({type:Boolean})],i.prototype,"selected",void 0);n([A(".list-item")],i.prototype,"listItemRoot",void 0);n([D({slot:"headline"})],i.prototype,"headlineElements",void 0);n([D({slot:"supporting-text"})],i.prototype,"supportingTextElements",void 0);n([j({slot:""})],i.prototype,"defaultElements",void 0);n([m({attribute:"typeahead-text"})],i.prototype,"typeaheadText",null);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const X=S`:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}/*# sourceMappingURL=menu-item-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let C=class extends i{};C.styles=[X];C=n([N("md-menu-item")],C);const J={style:{position:"relative"}},Q={key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},ee=a("path",{d:"M7.89776 10.8719C8.57751 10.8719 9.12853 11.4232 9.12853 12.1026C9.12853 12.7821 8.57751 13.3334 7.89776 13.3334C7.21802 13.3334 6.66699 12.7821 6.66699 12.1026C6.66699 11.4232 7.21802 10.8719 7.89776 10.8719ZM7.89776 6.76931C8.57751 6.76931 9.12853 7.32059 9.12853 8.00008C9.12853 8.67957 8.57751 9.23085 7.89776 9.23085C7.21802 9.23085 6.66699 8.67957 6.66699 8.00008C6.66699 7.32059 7.21802 6.76931 7.89776 6.76931ZM7.89776 5.12829C7.21802 5.12829 6.66699 4.577 6.66699 3.89752C6.66699 3.21777 7.21802 2.66675 7.89776 2.66675C8.57751 2.66675 9.12853 3.21777 9.12853 3.89752C9.12853 4.577 8.57751 5.12829 7.89776 5.12829Z",fill:"#40484C"},null,-1),te=[ee],oe={key:1,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",style:{"padding-top":"7px"}},se=a("path",{d:"M19.026 13.8205C19.026 12.6314 19.9907 11.6667 21.1798 11.6667C22.3689 11.6667 23.3337 12.6314 23.3337 13.8205C23.3337 15.0096 22.3689 15.9744 21.1798 15.9744C19.9907 15.9744 19.026 15.0096 19.026 13.8205ZM11.8465 13.8205C11.8465 12.6314 12.8112 11.6667 14.0003 11.6667C15.1894 11.6667 16.1542 12.6314 16.1542 13.8205C16.1542 15.0096 15.1894 15.9744 14.0003 15.9744C12.8112 15.9744 11.8465 15.0096 11.8465 13.8205ZM8.97468 13.8205C8.97468 15.0096 8.01039 15.9744 6.82084 15.9744C5.63129 15.9744 4.66699 15.0096 4.66699 13.8205C4.66699 12.6314 5.63129 11.6667 6.82084 11.6667C8.01039 11.6667 8.97468 12.6314 8.97468 13.8205Z",fill:"#40484C"},null,-1),ne=[se],ie=a("div",{slot:"headline",class:"menu-item"},"Y - Yes",-1),re=a("div",{slot:"headline",class:"menu-item"},"N - No",-1),ae=a("div",{slot:"headline",class:"menu-item"},"U - Unknown",-1),le=a("div",{slot:"headline",class:"menu-item"},"W - Clinically undetermined",-1),me=a("div",{slot:"headline",class:"menu-item"},"I - 'Unreported/Not Used(Exempt from POA reporting)'",-1),B={__name:"IoOptions",props:{orient:{type:String}},emits:["update:menuState"],setup(s,{emit:o}){const t=I(null),e=I(null),r=s;return P(()=>{t.value&&e.value&&(e.value.anchorElement=t.value,t.value.addEventListener("click",l=>{e.value.open=!e.value.open}))}),(l,y)=>{const h=k("md-menu-item"),U=k("md-menu");return x(),v("span",J,[a("div",{ref_key:"anchorEl",ref:t},[a("div",null,[r.orient==="vertical"?(x(),v("svg",Q,te)):$("",!0),r.orient==="horizontal"?(x(),v("svg",oe,ne)):$("",!0)])],512),p(U,{ref_key:"menuEl",ref:e,positioning:"popover","anchor-corner":"end-end","menu-corner":"start-end"},{default:c(()=>[p(h,null,{default:c(()=>[ie]),_:1}),p(h,null,{default:c(()=>[re]),_:1}),p(h,null,{default:c(()=>[ae]),_:1}),p(h,null,{default:c(()=>[le]),_:1}),p(h,null,{default:c(()=>[me]),_:1})]),_:1},512)])}}},L=B;B.__docgenInfo={exportName:"default",displayName:"IoOptions",description:"",tags:{},props:[{name:"orient",type:{name:"string"}}],events:[{name:"update:menuState"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Menus/IoOptions.vue"]};const de={title:"Components/Menu/Options",component:L,args:{orient:"horizontal"},argTypes:{orient:{control:{type:"select"},options:["vertical","horizontal"]}}},pe=s=>({components:{IoOptions:L},setup(){return{args:s}},template:'<IoOptions :orient="args.orient" />'}),g=pe.bind({});var O,M,z;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    IoOptions
  },
  setup() {
    return {
      args
    };
  },
  template: '<IoOptions :orient="args.orient" />'
})`,...(z=(M=g.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};const ce=["Default"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Default:g,__namedExportsOrder:ce,default:de},Symbol.toStringTag,{value:"Module"}));export{Ce as O};
