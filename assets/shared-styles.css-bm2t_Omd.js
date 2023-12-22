import{_ as i,n as a,d,x as s,T as o,s as c,i as p}from"./animation-YsUuX9Ai.js";import"./ripple-LNUln75p.js";import{o as h}from"./query-assigned-elements-KDRb_G73.js";import{r as b}from"./delegate-G9HsjGKO.js";import{i as u,d as v}from"./events-SXK1JT6v.js";import{s as g}from"./form-submitter-yrpfPCiW.js";import{i as f,m}from"./element-internals-MRZXgA-l.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const _=m(c);class e extends _{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[f].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.handleActivationClick=t=>{!u(t)||!this.buttonElement||(this.focus(),v(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){var t;(t=this.buttonElement)==null||t.focus()}blur(){var t;(t=this.buttonElement)==null||t.blur()}render(){var l;const t=this.disabled&&!this.href,n=this.href?this.renderLink():this.renderButton(),r=this.href?"link":"button";return s`
      ${(l=this.renderElevationOrOutline)==null?void 0:l.call(this)}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${r}></md-focus-ring>
      <md-ripple for=${r} ?disabled="${t}"></md-ripple>
      ${n}
    `}renderButton(){const{ariaLabel:t,ariaHasPopup:n,ariaExpanded:r}=this;return s`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${t||o}"
      aria-haspopup="${n||o}"
      aria-expanded="${r||o}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:t,ariaHasPopup:n,ariaExpanded:r}=this;return s`<a
      id="link"
      class="button"
      aria-label="${t||o}"
      aria-haspopup="${n||o}"
      aria-expanded="${r||o}"
      href=${this.href}
      target=${this.target||o}
      >${this.renderContent()}
    </a>`}renderContent(){const t=s`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return s`
      <span class="touch"></span>
      ${this.trailingIcon?o:t}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?t:o}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}b(e),g(e);e.formAssociated=!0;e.shadowRootOptions={mode:"open",delegatesFocus:!0};i([a({type:Boolean,reflect:!0})],e.prototype,"disabled",void 0);i([a()],e.prototype,"href",void 0);i([a()],e.prototype,"target",void 0);i([a({type:Boolean,attribute:"trailing-icon",reflect:!0})],e.prototype,"trailingIcon",void 0);i([a({type:Boolean,attribute:"has-icon",reflect:!0})],e.prototype,"hasIcon",void 0);i([a()],e.prototype,"type",void 0);i([a()],e.prototype,"value",void 0);i([d(".button")],e.prototype,"buttonElement",void 0);i([h({slot:"icon",flatten:!0})],e.prototype,"assignedIcons",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const E=p`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;export{e as B,E as s};
