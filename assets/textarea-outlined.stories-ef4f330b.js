import"./outlined-text-field-d5df80db.js";/* empty css              */import{r as m,c as d,o as c}from"./vue.esm-bundler-28abc28d.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const l={name:"IOTextAreaOutline"};function x(e,o,O,f,_,g){const u=m("md-outlined-text-field");return c(),d(u,{type:"textarea",label:"Label",rows:"5",value:e.modelValue,onInput:o[0]||(o[0]=i=>e.$emit("update:modelValue",i.target.value))},null,8,["value"])}const r=b(l,[["render",x]]);l.__docgenInfo={displayName:"IOTextAreaOutline",exportName:"default",description:"",tags:{},events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOTextAreaOutline.vue"]};const p='<IOTextAreaOutline :rows=args.rows type="textarea" :label=args.label :value=args.value :disabled=args.disabled />',N={title:"UI/Atoms/Inputs/Textarea/Outlined",component:r,tags:["autodocs"],render:e=>({components:{IOTextAreaOutline:r},setup(){return{args:e}},template:p}),args:{disabled:!1,label:"Label",rows:3},argTypes:{label:{control:{type:"text"},description:"Field label"},rows:{control:{type:"number"},description:"Number of rows"},disabled:{control:"boolean"}}},t={render:e=>({components:{IOTextAreaOutline:r},setup(){return{args:e}},template:p})};var a,n,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextAreaOutline
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const V=["Default"];export{t as Default,V as __namedExportsOrder,N as default};
//# sourceMappingURL=textarea-outlined.stories-ef4f330b.js.map
