import"./outlined-text-field-d5df80db.js";import{r as c,c as x,o as f}from"./vue.esm-bundler-bc827b9f.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const i={name:"IOTextAreaOutline",props:{modelValue:String,error:{type:String,default:!1},errorText:{type:String,default:"Oops, this thing needs fixed"}},emits:["update:modelValue"],computed:{isError(){return this.error},errText(){return this.errorText}}};function O(e,o,u,T,_,a){const d=c("md-outlined-text-field");return f(),x(d,{type:"textarea",rows:"5",error:a.isError,"error-text":a.errText,value:u.modelValue,onInput:o[0]||(o[0]=m=>e.$emit("update:modelValue",m.target.value))},null,8,["error","error-text","value"])}const t=g(i,[["render",O]]);i.__docgenInfo={displayName:"IOTextAreaOutline",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"false"}},{name:"errorText",type:{name:"string"},defaultValue:{func:!1,value:"'Oops, this thing needs fixed'"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOTextAreaOutline.vue"]};const p='<IOTextAreaOutline :error=args.error :error-text=args.errorText :rows=args.rows type="textarea" :label=args.label :value=args.value :disabled=args.disabled />',w={title:"UI/Atoms/Inputs/Textarea/Outlined",component:t,render:e=>({components:{IOTextAreaOutline:t},setup(){return{args:e}},template:p}),args:{disabled:!1,label:"Label",rows:3,error:!1,errorText:"Oops, this thing needs fixed"},argTypes:{label:{control:{type:"text"},description:"Field label"},rows:{control:{type:"number"},description:"Number of rows"},disabled:{control:"boolean"},error:{control:{type:"boolean"},description:"Error state"},errorText:{control:{type:"text"},description:"Error text"}}},r={render:e=>({components:{IOTextAreaOutline:t},setup(){return{args:e}},template:p})};var n,s,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const E=["Default"];export{r as Default,E as __namedExportsOrder,w as default};
//# sourceMappingURL=textarea-outlined.stories-30d4ab4b.js.map
