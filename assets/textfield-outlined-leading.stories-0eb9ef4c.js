import"./outlined-text-field-d5df80db.js";/* empty css              */import{r as d,c,w as m,o as u,b as g,n as f}from"./vue.esm-bundler-82ad5dd9.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const i={name:"IOTextFieldOutlineLeading",props:{icon:String,default:"magnifying-glass"},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function _(e,O,L,b,I,l){const p=d("md-outlined-text-field");return u(),c(p,{label:"Label"},{default:m(()=>[g("i",{class:f(l.iconClass),slot:"leading-icon"},null,2)]),_:1})}const n=x(i,[["render",_]]);i.__docgenInfo={displayName:"IOTextFieldOutlineLeading",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"}},{name:"default",type:{name:'"magnifying-glass"',func:!0}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Inputs/IOTextFieldOutlineLeading.vue"]};const r="<IOTextFieldOutlineLeading :icon=args.icon :label=args.label :supporting-text=args.supportingText :disabled=args.disabled />",B={title:"UI/Atoms/Inputs/Textfield/Outlined/With Icons/Leading",component:n,tags:["autodocs"],render:e=>({components:{IOTextFieldOutlineLeading:n},setup(){return{args:e}},template:r}),args:{disabled:!1,label:"Label",icon:"magnifying-glass",supportingText:"Supporting text"},argTypes:{label:{control:{type:"text"}},icon:{control:{type:"text"}}}},t={render:e=>({components:{IOTextFieldOutlineLeading:n},setup(){return{args:e}},template:r})};var a,s,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextFieldOutlineLeading
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const N=["Leading"];export{t as Leading,N as __namedExportsOrder,B as default};
//# sourceMappingURL=textfield-outlined-leading.stories-0eb9ef4c.js.map
