import{_ as r,n as i,x as e,b as t}from"./aria-6ffa173a.js";import"./elevation-87506c6d.js";import{C as n}from"./chip-1704faed.js";/**
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
//# sourceMappingURL=assist-chip-f8b71f2e.js.map
