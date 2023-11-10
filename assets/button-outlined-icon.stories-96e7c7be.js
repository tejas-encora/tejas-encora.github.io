import"./outlined-button-acf78c50.js";import{r as u,c as p,w as m,o as d,e as f,a as I,n as O}from"./vue.esm-bundler-2440c5c9.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-61c7dcec.js";import"./ripple-82f18c17.js";import"./static-93b7ff82.js";import"./form-submitter-22a5b223.js";import"./events-00ef5ad2.js";const r={name:"IOIconButtonOutline",props:{icon:{type:String,default:"circle-plus"}},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function g(e,B,b,x,y,c){const i=u("md-outlined-button");return d(),p(i,null,{default:m(()=>[f(e.$slots,"default"),I("i",{class:O(c.iconClass),slot:"icon"},null,2)]),_:3})}const n=_(r,[["render",g]]);r.__docgenInfo={displayName:"IOIconButtonOutline",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"circle-plus"'}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Buttons/IOIconButtonOutline.vue"]};const l="<IOIconButtonOutline :icon=args.icon :class=args.class :disabled=args.disabled>{{args.label}}</IOIconButtonOutline>",A={title:"UI/Atoms/Buttons/Outlined/With Icon",component:n,tags:["autodocs"],render:e=>({components:{IOIconButtonOutline:n},setup(){return{args:e}},template:l}),args:{disabled:!1,label:"Label",class:"medium",icon:"circle-plus"},argTypes:{label:{control:{type:"text"},description:"Button label"},class:{control:{type:"select"},description:"Button size",options:["small","medium","large"]},icon:{control:{type:"text"},description:"FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"}}},t={render:e=>({components:{IOIconButtonOutline:n},setup(){return{args:e}},template:l})};var o,s,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOIconButtonOutline
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,A as default};
//# sourceMappingURL=button-outlined-icon.stories-96e7c7be.js.map
