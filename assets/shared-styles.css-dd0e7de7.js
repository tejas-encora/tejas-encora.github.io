import{r as m,_ as s,n as i,t as v,s as y,A as r,o as x,x as a,i as _}from"./delegate-169a0fe1.js";import"./ripple-82f18c17.js";import{i as h,n as $}from"./static-93b7ff82.js";import{s as I,i as n}from"./form-submitter-22a5b223.js";/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function c(o,t=!0){return t&&getComputedStyle(o).getPropertyValue("direction").trim()==="rtl"}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var p;class e extends y{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=c(this,this.flipIconInRtl),this[p]=this.attachInternals()}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[n].form}get labels(){return this[n].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const t=this.href?h`div`:h`button`,{ariaLabel:d,ariaHasPopup:u,ariaExpanded:f}=this,b=d&&this.ariaLabelSelected,g=this.toggle?this.selected:r;let l=r;return this.href||(l=b&&this.selected?this.ariaLabelSelected:d),$`<${t}
        class="icon-button ${x(this.getRenderClasses())}"
        id="button"
        aria-label="${l||r}"
        aria-haspopup="${!this.href&&u||r}"
        aria-expanded="${!this.href&&f||r}"
        aria-pressed="${g}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?r:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():r}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${t}>`}renderLink(){const{ariaLabel:t}=this;return a`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||r}"
        aria-label="${t||r}"
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return a`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return a`<span class="icon icon--selected"><slot name="selected"><slot></slot></slot></span>`}renderTouchTarget(){return a`<span class="touch"></span>`}renderFocusRing(){return a`<md-focus-ring part="focus-ring" for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return a`<md-ripple
      for=${this.href?"link":r}
      ?disabled="${!this.href&&this.disabled}"
    ></md-ripple>`}connectedCallback(){this.flipIcon=c(this,this.flipIconInRtl),super.connectedCallback()}async handleClick(t){await 0,!(!this.toggle||this.disabled||t.defaultPrevented)&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}p=n;m(e),I(e);e.formAssociated=!0;e.shadowRootOptions={mode:"open",delegatesFocus:!0};s([i({type:Boolean,reflect:!0})],e.prototype,"disabled",void 0);s([i({type:Boolean,attribute:"flip-icon-in-rtl"})],e.prototype,"flipIconInRtl",void 0);s([i()],e.prototype,"href",void 0);s([i()],e.prototype,"target",void 0);s([i({attribute:"aria-label-selected"})],e.prototype,"ariaLabelSelected",void 0);s([i({type:Boolean})],e.prototype,"toggle",void 0);s([i({type:Boolean,reflect:!0})],e.prototype,"selected",void 0);s([i()],e.prototype,"type",void 0);s([i()],e.prototype,"value",void 0);s([v()],e.prototype,"flipIcon",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const C=_`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}/*# sourceMappingURL=shared-styles.css.map */
`;export{e as I,C as s};
//# sourceMappingURL=shared-styles.css-dd0e7de7.js.map
