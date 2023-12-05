import{_ as r,n as i,x as e,c as t}from"./animation-c900ecb0.js";import"./elevation-da643fc7.js";import{C as n}from"./chip-ad500f32.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class a extends n{constructor(){super(...arguments),this.elevated=!1,this.href="",this.target=""}get primaryId(){return this.href?"link":"button"}get rippleDisabled(){return!this.href&&this.disabled}getContainerClasses(){return{...super.getContainerClasses(),disabled:!this.href&&this.disabled,elevated:this.elevated,link:!!this.href}}renderPrimaryAction(s){const{ariaLabel:l}=this;return this.href?e`
        <a class="primary action"
          id="link"
          aria-label=${l||t}
          href=${this.href}
          target=${this.target||t}
        >${s}</a>
      `:e`
      <button class="primary action"
        id="button"
        aria-label=${l||t}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        type="button"
      >${s}</button>
    `}renderOutline(){return this.elevated?e`<md-elevation></md-elevation>`:super.renderOutline()}}r([i({type:Boolean})],a.prototype,"elevated",void 0);r([i()],a.prototype,"href",void 0);r([i()],a.prototype,"target",void 0);export{a as A};
//# sourceMappingURL=assist-chip-6f4b08c8.js.map
