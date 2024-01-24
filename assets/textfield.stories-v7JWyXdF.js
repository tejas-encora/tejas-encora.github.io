import{I as r}from"./IoTextField-94B1gCof.js";/* empty css             *//* empty css              */const a={title:"UI/Atoms/Inputs/TextField",component:r,render:n=>({components:{IoTextField:r},setup(){return{args:n}}}),args:{label:"foobar",density:"compact",placeholder:"Enter text",appendIcon:"",appendInnerIcon:"",clearIcon:"fa-light fa-circle-x",color:"#544DC7",clearable:!1,error:!1,errorMessage:"Error Message",hint:"",messages:"",persistentClear:!1,persistentHint:!1,prependIcon:"",prependInnerIcon:"",variant:"outlined"},argTypes:{label:{control:{type:"text"},description:"Sets the text of the label."},density:{control:{type:"select"},options:["comfortable","compact"],description:"Adjusts the vertical height."},placeholder:{control:{type:"text"},description:"Sets the placeholder text."},appendIcon:{control:{type:"text"},description:"Creates icon after default content in the append slot."},appendInnerIcon:{control:{type:"text"},description:"Creates icon in the append-inner slot."},clearable:{control:{type:"boolean"},description:"Allows for the component to be cleared."},clearIcon:{control:{type:"text"},description:"Applied when using clearable and the input is dirty."},error:{control:{type:"boolean"},description:"Puts the input in a manual error state."},errorMessages:{control:{type:"text"},description:"Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the rules prop. This field will not trigger validation."},hint:{control:{type:"text"},description:"Displays hint text below the input when focused."},messages:{control:{type:"text"},description:"Displays a list of messages or a single message if using a string."},persistentClear:{control:{type:"boolean"},description:"Always show the clearable icon when the input is dirty."},persistentHint:{control:{type:"boolean"},description:"Forces hint to always be visible."},prependIcon:{control:{type:"text"},description:"Prepends an icon to the outside the component’s input."},variant:{control:{type:"select"},options:["outlined","filled"],description:"Apply outlined or filled style."}}},i=n=>({components:{IoTextField:r},setup(){return{args:n}},template:`
      <IoTextField
          :color="args.color"
          :label="args.label"
          :density="args.density"
          :placeholder="args.placeholder"
          :append-icon="args.appendIcon"
          :append-inner-icon="args.appendInnerIcon"
          :clearable="args.clearable"
          :clear-icon="args.clearIcon"
          :error="args.error"
          :error-messages="args.errorMessages"
          :hint="args.hint"
          :messages="args.messages"
          :persistent-clear="args.persistentClear"
          :persistent-hint="args.persistentHint"
          :prepend-icon="args.prependIcon"
          :prepend-inner-icon="args.prependInnerIcon"
          :variant="args.variant"
      />`}),e=i.bind({});var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    IoTextField
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <IoTextField
          :color="args.color"
          :label="args.label"
          :density="args.density"
          :placeholder="args.placeholder"
          :append-icon="args.appendIcon"
          :append-inner-icon="args.appendInnerIcon"
          :clearable="args.clearable"
          :clear-icon="args.clearIcon"
          :error="args.error"
          :error-messages="args.errorMessages"
          :hint="args.hint"
          :messages="args.messages"
          :persistent-clear="args.persistentClear"
          :persistent-hint="args.persistentHint"
          :prepend-icon="args.prependIcon"
          :prepend-inner-icon="args.prependInnerIcon"
          :variant="args.variant"
      />\`
})`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const l=["Default"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:l,default:a},Symbol.toStringTag,{value:"Module"}));export{g as T};
