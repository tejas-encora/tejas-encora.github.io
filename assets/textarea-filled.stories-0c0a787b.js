import"./filled-text-field-7186165f.js";/* empty css              */import{r as i,c,o as u}from"./vue.esm-bundler-28abc28d.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const l={name:"IOTextArea"};function b(e,o,x,_,g,I){const m=i("md-filled-text-field");return u(),c(m,{type:"textarea",label:"Label",rows:"5",value:e.modelValue,onInput:o[0]||(o[0]=d=>e.$emit("update:modelValue",d.target.value))},null,8,["value"])}const r=f(l,[["render",b]]);l.__docgenInfo={displayName:"IOTextArea",exportName:"default",description:"",tags:{},events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOTextArea.vue"]};const p='<IOTextArea :rows=args.rows type="textarea" :label=args.label :value=args.value :disabled=args.disabled />',L={title:"UI/Atoms/Inputs/Textarea/Filled",component:r,tags:["autodocs"],render:e=>({components:{IOTextArea:r},setup(){return{args:e}},template:p}),args:{disabled:!1,label:"Label",rows:3},argTypes:{label:{control:{type:"text"},description:"Field label"},rows:{control:{type:"number"},description:"Number of rows"},disabled:{control:"boolean"}}},t={render:e=>({components:{IOTextArea:r},setup(){return{args:e}},template:p})};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextArea
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,L as default};
//# sourceMappingURL=textarea-filled.stories-0c0a787b.js.map
