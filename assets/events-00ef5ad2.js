/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function n(t,s){s.bubbles&&(!t.shadowRoot||s.composed)&&s.stopPropagation();const a=Reflect.construct(s.constructor,[s.type,s]),r=t.dispatchEvent(a);return r||s.preventDefault(),r}function e(t){const s=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(s),s}function u(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!i(t)}function i(t){const s=c;return s&&(t.preventDefault(),t.stopImmediatePropagation()),o(),s}let c=!1;async function o(){c=!0,await null,c=!1}export{e as d,u as i,n as r};
//# sourceMappingURL=events-00ef5ad2.js.map
