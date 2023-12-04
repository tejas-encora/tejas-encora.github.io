import"./filled-text-field-e3588939.js";import{b as c,d as x,o as f}from"./vue.esm-bundler-fc246aa1.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const d={name:"IOTextArea",props:{modelValue:String,error:{type:String,default:!1},errorText:{type:String,default:"Oops, this thing needs fixed"}},emits:["update:modelValue"],computed:{isError(){return this.error},errText(){return this.errorText}}};function _(e,o,i,y,O,a){const u=c("md-filled-text-field");return f(),x(u,{type:"textarea",rows:"5",error:a.isError,"error-text":a.errText,value:i.modelValue,onInput:o[0]||(o[0]=m=>e.$emit("update:modelValue",m.target.value))},null,8,["error","error-text","value"])}const t=g(d,[["render",_]]);d.__docgenInfo={displayName:"IOTextArea",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"false"}},{name:"errorText",type:{name:"string"},defaultValue:{func:!1,value:"'Oops, this thing needs fixed'"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOTextArea.vue"]};const p='<IOTextArea :error=args.error :error-text=args.errorText :rows=args.rows type="textarea" :label=args.label :value=args.value :disabled=args.disabled />',b={title:"UI/Atoms/Inputs/Textarea/Filled",component:t,render:e=>({components:{IOTextArea:t},setup(){return{args:e}},template:p}),args:{disabled:!1,label:"Label",rows:3,error:!1,errorText:"Oops, this thing needs fixed"},argTypes:{label:{control:{type:"text"},description:"Field label"},rows:{control:{type:"number"},description:"Number of rows"},disabled:{control:"boolean"},error:{control:{type:"boolean"},description:"Error state"},errorText:{control:{type:"text"},description:"Error text"}}},r={render:e=>({components:{IOTextArea:t},setup(){return{args:e}},template:p})};var s,n,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextArea
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const T=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:T,default:b},Symbol.toStringTag,{value:"Module"}));export{A as T};
//# sourceMappingURL=textarea-filled.stories-36ae584b.js.map
