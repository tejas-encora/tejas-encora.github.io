import{_ as r,n as i,x as e,A as t}from"./delegate-169a0fe1.js";import"./elevation-dd730b41.js";import{C as n}from"./chip-5cd5e483.js";/**
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
//# sourceMappingURL=assist-chip-df04854d.js.map
