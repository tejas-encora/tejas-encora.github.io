import{s as l,x as t,c as a,_ as n,e as r}from"./delegate-d56dde3e.js";/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class s extends l{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return t`<span class="shadow"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const i=a`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let e=class extends s{};e.styles=[i];e=n([r("md-elevation")],e);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const d=a`md-elevation{transition-duration:280ms}.button:disabled md-elevation{transition:none}.button{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}.button:focus{--md-elevation-level: var(--_focus-container-elevation)}.button:hover{--md-elevation-level: var(--_hover-container-elevation)}.button:active{--md-elevation-level: var(--_pressed-container-elevation)}.button:disabled{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;export{d as s};
//# sourceMappingURL=shared-elevation-styles.css-cdb10bac.js.map
