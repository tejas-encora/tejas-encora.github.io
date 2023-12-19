import{b as u,d as g,w as f,o,g as l,n as y,j as c}from"./vue.esm-bundler-CdyOBFpo.js";import{_ as b}from"./_plugin-vue_export-helper-x3n3nnut.js";import{i as _,_ as x,f as I}from"./animation-_TEqrmD1.js";import{A as C}from"./assist-chip-BymHVU2v.js";import{s as A}from"./elevated-styles.css-c-7XK4zv.js";import{s as w}from"./shared-styles.css-VzWOaktw.js";const v={name:"IOChipAssist",props:{leadingIcon:{type:Boolean,default:!1},icon:{type:String,default:"book-sparkles"},elevated:{type:Boolean,default:!1},svg:{type:Boolean,default:!1},src:{type:String,default:"IO.svg"}},computed:{iconClass(){return`fa-light fa-${this.icon}`},isIconStart(){return this.leadingIcon},isElevated(){return this.elevated},imgSrc(){return this.src},isSvg(){return this.svg}}},S=["src"];function O(a,B,t,N,E,e){const h=u("md-assist-chip");return o(),g(h,{elevated:e.isElevated,"leading-icon":e.isIconStart,svg:e.isSvg},{default:f(()=>[e.isIconStart&&!t.svg?(o(),l("i",{key:0,class:y(e.iconClass),slot:"icon","aria-hidden":"true"},null,2)):c("",!0),t.svg&&!t.leadingIcon?(o(),l("img",{key:1,slot:"icon",src:e.imgSrc,alt:"","aria-hidden":"true"},null,8,S)):c("",!0)]),_:1},8,["elevated","leading-icon","svg"])}const i=b(v,[["render",O],["__scopeId","data-v-917d9e79"]]);v.__docgenInfo={displayName:"IOChipAssist",exportName:"default",description:"",tags:{},props:[{name:"leadingIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"book-sparkles"'}},{name:"elevated",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"svg",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"src",type:{name:"string"},defaultValue:{func:!1,value:"'IO.svg'"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipAssist.vue"]};/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const k=_`:host{--_container-height: var(--md-assist-chip-container-height, 32px);--_container-shape: var(--md-assist-chip-container-shape, 8px);--_disabled-label-text-color: var(--md-assist-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-assist-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-assist-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-assist-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-assist-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-assist-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-assist-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-assist-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-assist-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-assist-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-assist-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-assist-chip-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-assist-chip-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-assist-chip-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-assist-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-assist-chip-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-assist-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-assist-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-assist-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-assist-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-assist-chip-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-assist-chip-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-assist-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-assist-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-assist-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-assist-chip-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_outline-color: var(--md-assist-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-assist-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-assist-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-assist-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-assist-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-assist-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-assist-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-assist-chip-icon-size, 18px);--_pressed-leading-icon-color: var(--md-assist-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-assist-chip-leading-space, 16px);--_trailing-space: var(--md-assist-chip-trailing-space, 16px);--_icon-label-space: var(--md-assist-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-assist-chip-with-leading-icon-leading-space, 8px);--_container-shape-start-start: var( --md-assist-chip-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-assist-chip-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-assist-chip-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-assist-chip-container-shape-end-start, var(--_container-shape) )}@media(forced-colors: active){.link .outline{border-color:ActiveText}}/*# sourceMappingURL=assist-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let r=class extends C{};r.styles=[w,A,k];r=x([I("md-assist-chip")],r);const m="<IOChipAssist :svg=args.svg :src=args.src :label=args.label :leadingIcon=args.leadingIcon :icon=args.icon :elevated=args.elevated :disabled=args.disabled />",V={title:"UI/Atoms/Chips/Assist",component:i,render:a=>({components:{IOChipAssist:i},setup(){return{args:a}},template:m}),args:{label:"Assist Chip",leadingIcon:!1,icon:"book-sparkles",elevated:!1,svg:!1,src:"IO.svg",disabled:!1},argTypes:{leadingIcon:{control:{type:"boolean"},description:"Add leading icon"},icon:{control:{type:"text"},description:"Leading icon. FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},elevated:{control:{type:"boolean"},description:"Add elevation"},svg:{control:{type:"boolean"},description:"Use SVG image"},src:{control:{type:"text"},description:"SVG source. Needs to be a file in your public directory"}}},s={render:a=>({components:{IOChipAssist:i},setup(){return{args:a}},template:m})};var n,d,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipAssist
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const z=["Default"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:z,default:V},Symbol.toStringTag,{value:"Module"}));export{G as A};
