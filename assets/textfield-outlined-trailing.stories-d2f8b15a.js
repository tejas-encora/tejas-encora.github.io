import"./outlined-text-field-d5df80db.js";/* empty css              */import{r as c,c as d,w as m,o as u,a as g,n as x}from"./vue.esm-bundler-2440c5c9.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const o={name:"IOTextFieldOutlineTrailing",props:{icon:String,default:"circle-x"},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function _(e,T,O,I,b,l){const p=c("md-outlined-text-field");return u(),d(p,{label:"Label"},{default:m(()=>[g("i",{class:x(l.iconClass),slot:"trailing-icon"},null,2)]),_:1})}const a=f(o,[["render",_]]);o.__docgenInfo={displayName:"IOTextFieldOutlineTrailing",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"}},{name:"default",type:{name:'"circle-x"',func:!0}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOTextFieldOutlineTrailing.vue"]};const s="<IOTextFieldOutlineTrailing :icon=args.icon :label=args.label :supporting-text=args.supportingText :disabled=args.disabled />",L={title:"UI/Atoms/Inputs/Textfield/Outlined/With Icons/Trailing",component:a,tags:["autodocs"],render:e=>({components:{IOTextField},setup(){return{args:e}},template:s}),args:{disabled:!1,label:"Label",icon:"magnifying-glass",supportingText:"Supporting text"},argTypes:{label:{control:{type:"text"}},icon:{control:{type:"text"}}}},t={render:e=>({components:{IOTextFieldOutlineTrailing:a},setup(){return{args:e}},template:s})};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,L as default};
//# sourceMappingURL=textfield-outlined-trailing.stories-d2f8b15a.js.map
