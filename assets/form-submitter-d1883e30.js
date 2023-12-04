import"./aria-25216b4f.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const o=Symbol("internals");/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function c(s){s.addInitializer(u=>{const e=u;e.addEventListener("click",async a=>{const{type:n,[o]:i}=e,{form:t}=i;if(!(!t||n==="button")&&(await new Promise(r=>{r()}),!a.defaultPrevented)){if(n==="reset"){t.reset();return}t.addEventListener("submit",r=>{Object.defineProperty(r,"submitter",{configurable:!0,enumerable:!0,get:()=>e})},{capture:!0,once:!0}),i.setFormValue(e.value),t.requestSubmit()}})})}export{o as i,c as s};
//# sourceMappingURL=form-submitter-d1883e30.js.map
