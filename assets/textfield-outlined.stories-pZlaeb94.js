import"./outlined-text-field-HVl5LmqQ.js";import{d as c,o as p}from"./vue.esm-bundler-VhMez9An.js";import{_ as d}from"./_plugin-vue_export-helper-x3n3nnut.js";import{V as u}from"./VTextField-p9iPypf0.js";import{w as m,u as g}from"./index-2Ggjp5Ll.js";const s={name:"IOTextFieldOutline",props:{modelValue:String},emits:["update:modelValue"]};function x(e,r,I,O,T,b){return p(),c(u,{density:"compact",variant:"outlined",clearable:"","prepend-inner-icon":"fa fa-light fa-book-sparkles"})}const n=d(s,[["render",x]]);s.__docgenInfo={displayName:"IOTextFieldOutline",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOTextFieldOutline.vue"]};const l="<IOTextFieldOutline :clear=args.clear :error=args.error :error-text=args.errorText :label=args.label :supporting-text=args.supportingText :value=args.value :disabled=args.disabled :leadingIcon=args.leadingIcon :trailingIcon=args.trailingIcon :iconStart=args.iconStart :iconEnd=args.iconEnd />",f={title:"UI/Atoms/Inputs/Textfield/Outlined",component:n,render:e=>({components:{IOTextFieldOutline:n},setup(){return{args:e}},template:l}),args:{disabled:!1,label:"Label",supportingText:"Supporting text",leadingIcon:!1,trailingIcon:!1,iconStart:"magnifying-glass",iconEnd:"pencil",error:!1,errorText:"Oops, this thing needs fixed",clear:!1},argTypes:{label:{control:{type:"text"}},supportingText:{control:{type:"text"}},leadingIcon:{control:{type:"boolean"},description:"Add leading icon"},trailingIcon:{control:{type:"boolean"},description:"Add trailing icon"},iconStart:{control:{type:"text"},description:"Leading icon. FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},iconEnd:{control:{type:"text"},description:"Trailing icon. FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},error:{control:{type:"boolean"},description:"Apply error state"},errorText:{control:{type:"text"},description:"Custom error text"},clear:{clear:{type:"boolean"},description:"Add delete icon that clears the value"}}},t={play:async({canvasElement:e})=>{const r=m(e);await g.click(r.getElementById("circle-x"))},render:e=>({components:{IOTextFieldOutline:n},setup(){return{args:e}},template:l})};var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getElementById('circle-x'));
  },
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const y=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{h as T};
