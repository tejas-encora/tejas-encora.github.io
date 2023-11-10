import"./filled-button-7c982f56.js";import{r as p,c as d,w as u,o as m,e as f,a as I,n as _}from"./vue.esm-bundler-2440c5c9.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./elevation-dd730b41.js";import"./shared-styles.css-61c7dcec.js";import"./ripple-82f18c17.js";import"./static-93b7ff82.js";import"./form-submitter-22a5b223.js";import"./events-00ef5ad2.js";import"./shared-elevation-styles.css-238aee8a.js";const a={name:"IOIconButtonFilled",props:{icon:{type:String,default:"circle-plus"}},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function b(e,B,F,O,x,c){const i=p("md-filled-button");return m(),d(i,null,{default:u(()=>[f(e.$slots,"default"),I("i",{class:_(c.iconClass),slot:"icon"},null,2)]),_:3})}const o=g(a,[["render",b]]);a.__docgenInfo={displayName:"IOIconButtonFilled",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"circle-plus"'}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Buttons/IOIconButtonFilled.vue"]};const r="<IOIconButtonFilled :class=args.class :disabled=args.disabled :icon=args.icon>{{args.label}}</IOIconButtonFilled>",D={title:"UI/Atoms/Buttons/Filled/With Icon",component:o,tags:["autodocs"],render:e=>({components:{IOIconButtonFilled:o},setup(){return{args:e}},template:r}),args:{disabled:!1,label:"Label",class:"medium",icon:"circle-plus"},argTypes:{label:{control:{type:"text"},description:"Button label"},class:{control:{type:"select"},description:"Button size",options:["small","medium","large"]},icon:{control:{type:"text"},description:"FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},disabled:"boolean"}},t={render:e=>({components:{IOIconButtonFilled:o},setup(){return{args:e}},template:r})};var n,s,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOIconButtonFilled
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,D as default};
//# sourceMappingURL=button-filled-icon.stories-73036517.js.map
