import"./filled-text-field-7186165f.js";import{r as u,c,o as x}from"./vue.esm-bundler-7b6842b6.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const l={name:"IOTextField",props:["modelValue"],emits:["update:modelValue"]};function g(e,r,d,_,I,T){const i=u("md-filled-text-field");return x(),c(i,{value:d.modelValue,onInput:r[0]||(r[0]=m=>e.$emit("update:modelValue",m.target.value))},null,8,["value"])}const o=f(l,[["render",g]]);l.__docgenInfo={displayName:"IOTextField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"undefined"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOTextField.vue"]};const p="<IOTextField :label=args.label :rows=args.rows :supporting-text=args.supportingText :value=args.value :disabled=args.disabled />",S={title:"UI/Atoms/Inputs/Textfield/Filled",component:o,tags:["autodocs"],render:e=>({components:{IOTextField:o},setup(){return{args:e}},template:p}),args:{disabled:!1,label:"Label",supportingText:"Supporting text"},argTypes:{label:{control:{type:"text"}},supportingText:{control:{type:"text"}}}},t={render:e=>({components:{IOTextField:o},setup(){return{args:e}},template:p})};var s,n,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextField
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,S as default};
//# sourceMappingURL=textfield-filled.stories-600cd0a4.js.map
