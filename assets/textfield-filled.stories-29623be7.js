import"./filled-text-field-e3588939.js";import{I as n}from"./IOTextField-2e6e46c2.js";import{w as l,u as c}from"./index-364de5b2.js";const i="<IOTextField :clear=args.clear :error=args.error :error-text=args.errorText :label=args.label :supporting-text=args.supportingText :value=args.value :disabled=args.disabled :leadingIcon=args.leadingIcon :trailingIcon=args.trailingIcon :iconStart=args.iconStart :iconEnd=args.iconEnd />",d={title:"UI/Atoms/Inputs/Textfield/Filled",component:n,render:e=>({components:{IOTextField:n},setup(){return{args:e}},template:i}),args:{disabled:!1,label:"Label",supportingText:"Supporting text",leadingIcon:!1,trailingIcon:!1,iconStart:"magnifying-glass",iconEnd:"pencil",error:!1,errorText:"Oops, this thing needs fixed",clear:!1},argTypes:{label:{control:{type:"text"}},supportingText:{control:{type:"text"}},leadingIcon:{control:{type:"boolean"},description:"Add leading icon"},trailingIcon:{control:{type:"boolean"},description:"Add trailing icon"},iconStart:{control:{type:"text"},description:"Leading icon. FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},iconEnd:{control:{type:"text"},description:"Trailing icon. FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},error:{control:{type:"boolean"},description:"Apply error state"},errorText:{control:{type:"text"},description:"Custom error text"},clear:{clear:{type:"boolean"},description:"Add delete icon that clears the value"}}},t={play:async({canvasElement:e})=>{const s=l(e);await c.click(s.getElementById("circle-x"))},render:e=>({components:{IOTextField:n},setup(){return{args:e}},template:i})};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getElementById('circle-x'));
  },
  render: args => ({
    components: {
      IOTextField
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const p=["Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{x as T};
//# sourceMappingURL=textfield-filled.stories-29623be7.js.map
