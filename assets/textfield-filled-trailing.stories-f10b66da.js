import"./filled-text-field-7186165f.js";/* empty css              */import{r as c,c as d,w as m,o as u,a as g,n as x}from"./vue.esm-bundler-2440c5c9.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const s={name:"IOTextFieldTrailing",props:{icon:String,default:"circle-x"},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function T(e,_,I,b,F,l){const p=c("md-filled-text-field");return u(),d(p,{label:"Label"},{default:m(()=>[g("i",{class:x(l.iconClass),slot:"trailing-icon"},null,2)]),_:1})}const i=f(s,[["render",T]]);s.__docgenInfo={displayName:"IOTextFieldTrailing",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"}},{name:"default",type:{name:'"circle-x"',func:!0}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOTextFieldTrailing.vue"]};const o="<IOTextFieldTrailing :label=args.label :supporting-text=args.supportingText :disabled=args.disabled />",B={title:"UI/Atoms/Inputs/Textfield/Filled/With Icons/Trailing",component:i,tags:["autodocs"],render:e=>({components:{IOTextFieldIOTextFieldTrailingLeading},setup(){return{args:e}},template:o}),args:{disabled:!1,label:"Label",icon:"magnifying-glass",supportingText:"Supporting text"},argTypes:{label:{control:{type:"text"}},icon:{control:{type:"text"}}}},t={render:e=>({components:{IOTextFieldTrailing:i},setup(){return{args:e}},template:o})};var n,r,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextFieldTrailing
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,B as default};
//# sourceMappingURL=textfield-filled-trailing.stories-f10b66da.js.map
