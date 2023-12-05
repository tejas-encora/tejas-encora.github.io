import{e as l,i as h,t as d,T as u}from"./animation-c900ecb0.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o="important",c=" !"+o,p=l(class extends h{constructor(n){var t;if(super(n),n.type!==d.ATTRIBUTE||n.name!=="style"||((t=n.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,s)=>{const e=n[s];return e==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(n,[t]){const{style:s}=n.element;if(this.ht===void 0){this.ht=new Set;for(const e in t)this.ht.add(e);return this.render(t)}this.ht.forEach(e=>{t[e]==null&&(this.ht.delete(e),e.includes("-")?s.removeProperty(e):s[e]="")});for(const e in t){const i=t[e];if(i!=null){this.ht.add(e);const r=typeof i=="string"&&i.endsWith(c);e.includes("-")||r?s.setProperty(e,r?i.slice(0,-11):i,r?o:""):s[e]=i}}return u}});export{p as o};
//# sourceMappingURL=style-map-7c20cf8d.js.map
