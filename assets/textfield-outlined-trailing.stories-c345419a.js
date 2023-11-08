import"./outlined-text-field-d5df80db.js";/* empty css              */import{r as p,c as d,w as m,o as u,b as g,n as x}from"./vue.esm-bundler-82ad5dd9.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const a={name:"IOTextFieldOutlineTrailing",props:{icon:String,default:"circle-x"},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function _(e,T,O,I,b,l){const c=p("md-outlined-text-field");return u(),d(c,{label:"Label"},{default:m(()=>[g("i",{class:x(l.iconClass),slot:"trailing-icon"},null,2)]),_:1})}const s=f(a,[["render",_]]);a.__docgenInfo={displayName:"IOTextFieldOutlineTrailing",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"}},{name:"default",type:{name:'"circle-x"',func:!0}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Inputs/IOTextFieldOutlineTrailing.vue"]};const o="<IOTextFieldOutlineTrailing :icon=args.icon :label=args.label :supporting-text=args.supportingText :disabled=args.disabled />",N={title:"UI/Atoms/Inputs/Textfield/Outlined/With Icons/Trailing",component:s,tags:["autodocs"],render:e=>({components:{IOTextField},setup(){return{args:e}},template:o}),args:{disabled:!1,label:"Label",icon:"magnifying-glass",supportingText:"Supporting text"},argTypes:{label:{control:{type:"text"}},icon:{control:{type:"text"}}}},t={render:e=>({components:{IOTextFieldOutlineTrailing:s},setup(){return{args:e}},template:o})};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextFieldOutlineTrailing
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,N as default};
//# sourceMappingURL=textfield-outlined-trailing.stories-c345419a.js.map
