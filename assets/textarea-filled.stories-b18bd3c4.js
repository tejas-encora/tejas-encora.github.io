import"./filled-text-field-7186165f.js";import{r as c,c as x,o as f}from"./vue.esm-bundler-bc827b9f.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const p={name:"IOTextArea",props:{modelValue:String,error:{type:String,default:!1},errorText:{type:String,default:"Oops, this thing needs fixed"}},emits:["update:modelValue"],computed:{isError(){return this.error},errText(){return this.errorText}}};function T(e,o,d,_,b,a){const m=c("md-filled-text-field");return f(),x(m,{type:"textarea",rows:"5",error:a.isError,"error-text":a.errText,value:d.modelValue,onInput:o[0]||(o[0]=u=>e.$emit("update:modelValue",u.target.value))},null,8,["error","error-text","value"])}const t=g(p,[["render",T]]);p.__docgenInfo={displayName:"IOTextArea",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"false"}},{name:"errorText",type:{name:"string"},defaultValue:{func:!1,value:"'Oops, this thing needs fixed'"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOTextArea.vue"]};const i='<IOTextArea :error=args.error :error-text=args.errorText :rows=args.rows type="textarea" :label=args.label :value=args.value :disabled=args.disabled />',w={title:"UI/Atoms/Inputs/Textarea/Filled",component:t,render:e=>({components:{IOTextArea:t},setup(){return{args:e}},template:i}),args:{disabled:!1,label:"Label",rows:3,error:!1,errorText:"Oops, this thing needs fixed"},argTypes:{label:{control:{type:"text"},description:"Field label"},rows:{control:{type:"number"},description:"Number of rows"},disabled:{control:"boolean"},error:{control:{type:"boolean"},description:"Error state"},errorText:{control:{type:"text"},description:"Error text"}}},r={render:e=>({components:{IOTextArea:t},setup(){return{args:e}},template:i})};var s,n,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const E=["Default"];export{r as Default,E as __namedExportsOrder,w as default};
//# sourceMappingURL=textarea-filled.stories-b18bd3c4.js.map
