import"./outlined-text-field-469fa07a.js";import{b as c,d as x,o as f}from"./vue.esm-bundler-abcb067d.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const u={name:"IOTextAreaOutline",props:{modelValue:String,error:{type:String,default:!1},errorText:{type:String,default:"Oops, this thing needs fixed"}},emits:["update:modelValue"],computed:{isError(){return this.error},errText(){return this.errorText}}};function O(e,o,d,T,y,n){const p=c("md-outlined-text-field");return f(),x(p,{type:"textarea",rows:"5",error:n.isError,"error-text":n.errText,value:d.modelValue,onInput:o[0]||(o[0]=m=>e.$emit("update:modelValue",m.target.value))},null,8,["error","error-text","value"])}const t=g(u,[["render",O]]);u.__docgenInfo={displayName:"IOTextAreaOutline",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"false"}},{name:"errorText",type:{name:"string"},defaultValue:{func:!1,value:"'Oops, this thing needs fixed'"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOTextAreaOutline.vue"]};const i='<IOTextAreaOutline :error=args.error :error-text=args.errorText :rows=args.rows type="textarea" :label=args.label :value=args.value :disabled=args.disabled />',_={title:"UI/Atoms/Inputs/Textarea/Outlined",component:t,render:e=>({components:{IOTextAreaOutline:t},setup(){return{args:e}},template:i}),args:{disabled:!1,label:"Label",rows:3,error:!1,errorText:"Oops, this thing needs fixed"},argTypes:{label:{control:{type:"text"},description:"Field label"},rows:{control:{type:"number"},description:"Number of rows"},disabled:{control:"boolean"},error:{control:{type:"boolean"},description:"Error state"},errorText:{control:{type:"text"},description:"Error text"}}},r={render:e=>({components:{IOTextAreaOutline:t},setup(){return{args:e}},template:i})};var a,s,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextAreaOutline
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const b=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:b,default:_},Symbol.toStringTag,{value:"Module"}));export{A as T};
//# sourceMappingURL=textarea-outlined.stories-896c15e7.js.map
