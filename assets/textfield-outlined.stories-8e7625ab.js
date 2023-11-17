import"./outlined-text-field-d5df80db.js";import{r as x,c as y,w as S,o as r,a as i,n as s,b as c}from"./vue.esm-bundler-28abc28d.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const g={name:"IOTextFielOutline",props:{modelValue:String,leadingIcon:{type:Boolean,default:!1},trailingIcon:{type:Boolean,default:!1},iconStart:{type:String,default:"magnifying-glass"},iconEnd:{type:String,default:"circle-x"},error:{type:String,default:!1}},emits:["update:modelValue"],computed:{setIconStart(){return`fa-light fa-${this.iconStart}`},setIconEnd(){return`fa-light fa-${this.iconEnd}`},isIconStart(){return this.leadingIcon},isIconEnd(){return this.trailingIcon},isError(){return this.error}}};function E(e,l,a,O,b,n){const f=x("md-outlined-text-field");return r(),y(f,{error:n.isError,leadingIcon:n.isIconStart,trailingIcon:n.isIconEnd,value:a.modelValue,onInput:l[0]||(l[0]=I=>e.$emit("update:modelValue",I.target.value))},{default:S(()=>[a.leadingIcon?(r(),i("i",{key:0,class:s(n.setIconStart),slot:"leading-icon"},null,2)):c("",!0),a.trailingIcon?(r(),i("i",{key:1,class:s(n.setIconEnd),slot:"trailing-icon"},null,2)):c("",!0)]),_:1},8,["error","leadingIcon","trailingIcon","value"])}const o=_(g,[["render",E]]);g.__docgenInfo={displayName:"IOTextFielOutline",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"leadingIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"trailingIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconStart",type:{name:"string"},defaultValue:{func:!1,value:'"magnifying-glass"'}},{name:"iconEnd",type:{name:"string"},defaultValue:{func:!1,value:'"circle-x"'}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOTextFieldOutline.vue"]};const m="<IOTextFieldOutline :error=args.error :label=args.label :supporting-text=args.supportingText :value=args.value :disabled=args.disabled :leadingIcon=args.leadingIcon :trailingIcon=args.trailingIcon :iconStart=args.iconStart :iconEnd=args.iconEnd />",B={title:"UI/Atoms/Inputs/Textfield/Outlined",component:o,tags:["autodocs"],render:e=>({components:{IOTextFieldOutline:o},setup(){return{args:e}},template:m}),args:{disabled:!1,label:"Label",supportingText:"Supporting text",leadingIcon:!1,trailingIcon:!1,iconStart:"magnifying-glass",iconEnd:"circle-x",error:!1},argTypes:{label:{control:{type:"text"}},supportingText:{control:{type:"text"}},leadingIcon:{control:{type:"boolean"},description:"Add leading icon"},trailingIcon:{control:{type:"boolean"},description:"Add trailing icon"},iconStart:{control:{type:"text"},description:"Leading icon. FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},iconEnd:{control:{type:"text"},description:"Trailing icon. FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},error:{control:{type:"boolean"},description:"Error state"}}},t={render:e=>({components:{IOTextFieldOutline:o},setup(){return{args:e}},template:m})};var d,u,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextFieldOutline
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,B as default};
//# sourceMappingURL=textfield-outlined.stories-8e7625ab.js.map
