/* empty css              */import{r as d,c as p,w as f,o as m,b as g,n as u}from"./vue.esm-bundler-82ad5dd9.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{c as y,_ as b,e as _}from"./delegate-d56dde3e.js";import{s as h,I}from"./shared-styles.css-4d0e8689.js";import"./form-submitter-62a5024b.js";const a={name:"IOButtonIconFilled",props:{icon:{type:String,default:"file-magnifying-glass"}},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function B(o,F,k,C,O,i){const s=d("md-filled-icon-button");return m(),p(s,null,{default:f(()=>[g("i",{class:u(i.iconClass)},null,2)]),_:1})}const r=v(a,[["render",B]]);a.__docgenInfo={displayName:"IOButtonIconFilled",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"'file-magnifying-glass'"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Buttons/IOButtonIconFilled.vue"]};/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const x=y`:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-height: var(--md-filled-icon-button-container-height, 40px);--_container-shape: var(--md-filled-icon-button-container-shape, 9999px);--_container-width: var(--md-filled-icon-button-container-width, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-icon-button-toggle-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-icon-color: var(--md-filled-icon-button-toggle-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-state-layer-color: var(--md-filled-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-icon-color: var(--md-filled-icon-button-toggle-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-icon-color: var(--md-filled-icon-button-toggle-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-state-layer-color: var(--md-filled-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var( --md-filled-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-icon-button-container-shape-end-start, var(--_container-shape) )}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled:not(:disabled){color:var(--_toggle-icon-color)}.toggle-filled:not(:disabled):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled:not(:disabled):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled:not(:disabled):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}/*# sourceMappingURL=filled-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let t=class extends I{getRenderClasses(){return{...super.getRenderClasses(),filled:!0,"toggle-filled":this.toggle}}};t.styles=[h,x];t=b([_("md-filled-icon-button")],t);const S={title:"UI/Atoms/Buttons/Icon Buttons/Filled",component:r,tags:["autodocs"],render:o=>({components:{IOButtonIconFilled:r},setup(){return{args:o}},template:'<IOButtonIconFilled icon={{args.icon}} v-bind="args"/>'}),args:{disabled:!1,icon:"file-magnifying-glass"},argTypes:{icon:{control:{type:"text"},description:"FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},onClick:{action:"Button clicked"}},parameters:{docs:{description:{component:"Buttons help people take actions, such as sending an email, sharing a document, or liking a comment."}}}},e={args:{disabled:!1,icon:"file-magnifying-glass"},argTypes:{icon:{control:{type:"text"},description:"FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},onClick:{action:"Button clicked"}},render:o=>({components:{IOButtonIconFilled:r},setup(){return{args:o}},template:'<IOButtonIconFilled icon={{args.icon}} v-bind="args"/>'})};var l,n,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      IOButtonIconFilled
    },
    setup() {
      return {
        args
      };
    },
    template: '<IOButtonIconFilled icon={{args.icon}} v-bind="args"/>'
  })
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,S as default};
//# sourceMappingURL=filledicon.stories-fa89d68e.js.map
