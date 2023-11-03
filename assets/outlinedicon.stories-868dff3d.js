/* empty css              */import{r as d,c as u,w as p,o as v,b as m,n as b}from"./vue.esm-bundler-82ad5dd9.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{c as _,_ as y,e as h}from"./delegate-d56dde3e.js";import{s as g,I as x}from"./shared-styles.css-4d0e8689.js";import"./form-submitter-62a5024b.js";const i={name:"IOButtonIconOutline",props:{icon:{type:String,default:"file-magnifying-glass"}},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function I(e,O,k,w,C,a){const l=d("md-outlined-icon-button");return v(),u(l,null,{default:p(()=>[m("i",{class:b(a.iconClass)},null,2)]),_:1})}const t=f(i,[["render",I]]);i.__docgenInfo={displayName:"IOButtonIconOutline",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"'file-magnifying-glass'"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Buttons/IOButtonIconOutline.vue"]};/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const B=_`:host{--_container-height: var(--md-outlined-icon-button-container-height, 40px);--_container-shape: var(--md-outlined-icon-button-container-shape, 9999px);--_container-width: var(--md-outlined-icon-button-container-width, 40px);--_disabled-icon-color: var(--md-outlined-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-icon-button-disabled-icon-opacity, 0.38);--_disabled-selected-container-color: var(--md-outlined-icon-button-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-outlined-icon-button-disabled-selected-container-opacity, 0.12);--_hover-state-layer-opacity: var(--md-outlined-icon-button-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-outlined-icon-button-icon-size, 24px);--_pressed-state-layer-opacity: var(--md-outlined-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-outlined-icon-button-selected-container-color, var(--md-sys-color-inverse-surface, #322f35));--_selected-focus-icon-color: var(--md-outlined-icon-button-selected-focus-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-icon-color: var(--md-outlined-icon-button-selected-hover-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-state-layer-color: var(--md-outlined-icon-button-selected-hover-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-icon-color: var(--md-outlined-icon-button-selected-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-icon-color: var(--md-outlined-icon-button-selected-pressed-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-state-layer-color: var(--md-outlined-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_disabled-outline-color: var(--md-outlined-icon-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-icon-button-disabled-outline-opacity, 0.12);--_focus-icon-color: var(--md-outlined-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-outlined-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-outlined-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_icon-color: var(--md-outlined-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-outlined-icon-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-icon-button-outline-width, 1px);--_pressed-icon-color: var(--md-outlined-icon-button-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-outlined-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var( --md-outlined-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-icon-button-container-shape-end-start, var(--_container-shape) )}.outlined{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.outlined::before{border-color:var(--_outline-color);border-width:var(--_outline-width)}.outlined:hover{color:var(--_hover-icon-color)}.outlined:focus{color:var(--_focus-icon-color)}.outlined:active{color:var(--_pressed-icon-color)}.outlined:disabled{color:var(--_disabled-icon-color)}.outlined:disabled::before{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}.outlined:disabled .icon{opacity:var(--_disabled-icon-opacity)}.outlined::before{block-size:100%;border-style:solid;border-radius:inherit;box-sizing:border-box;content:"";inline-size:100%;inset:0;pointer-events:none;position:absolute;z-index:-1}.outlined.selected::before{border-width:0}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}.selected:disabled::before{background-color:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}@media(forced-colors: active){:host([disabled]){--_disabled-outline-opacity: 1}.selected::before{border-color:CanvasText;border-width:var(--_outline-width)}.selected:disabled::before{border-color:GrayText;opacity:1}}/*# sourceMappingURL=outlined-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let n=class extends x{getRenderClasses(){return{...super.getRenderClasses(),outlined:!0}}};n.styles=[g,B];n=y([h("md-outlined-icon-button")],n);const R={title:"UI/Atoms/Buttons/Icon Buttons/Outlined",component:t,tags:["autodocs"],render:e=>({components:{IOButtonIconOutline:t},setup(){return{args:e}},template:'<IOButtonIconOutline icon={{args.icon}} v-bind="args"/>'}),args:{disabled:!1,icon:"file-magnifying-glass"},argTypes:{icon:{control:{type:"text"},description:"FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},onClick:{action:"Button clicked"}},parameters:{docs:{description:{component:"Buttons help people take actions, such as sending an email, sharing a document, or liking a comment."}}}},o={args:{disabled:!1,icon:"file-magnifying-glass"},argTypes:{icon:{control:{type:"text"},description:"FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},onClick:{action:"Button clicked"}},render:e=>({components:{IOButtonIconOutline:t},setup(){return{args:e}},template:'<IOButtonIconOutline icon={{args.icon}} v-bind="args"/>'})};var r,c,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    disabled: false,
    icon: 'file-magnifying-glass'
  },
  argTypes: {
    icon: {
      control: {
        type: 'text'
      },
      description: 'FontAwesome icon name, i.e. circle-plus. No \\'fa-\\' suffix is needed'
    },
    onClick: {
      action: 'Button clicked'
    }
  },
  render: args => ({
    components: {
      IOButtonIconOutline
    },
    setup() {
      return {
        args
      };
    },
    template: '<IOButtonIconOutline icon={{args.icon}} v-bind="args"/>'
  })
}`,...(s=(c=o.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const S=["Default"];export{o as Default,S as __namedExportsOrder,R as default};
//# sourceMappingURL=outlinedicon.stories-868dff3d.js.map
