import{u as g,e as m,p as u,q as h,w as a,s as f,t as y,o as I,l as b,v as x,x as v,m as T}from"./vue.esm-bundler-IQnt_YWr.js";import{V as _}from"./VTextField-y2P-0KXs.js";/* empty css             *//* empty css              */const w=T("i",{class:"fa-solid fa-exclamation-circle"},null,-1),c={__name:"IoTextField",props:{error:Boolean,defaultValue:!1},setup(e){const s=g();return console.log("attrs: ",s),(t,P)=>(I(),m(_,y(t.$attrs,{error:e.error}),u({_:2},[h(s).error?{name:"append-inner",fn:a(()=>[w]),key:"0"}:void 0,f(t.$slots,(A,o)=>({name:o,fn:a(d=>[b(t.$slots,o,x(v(d)))])}))]),1040,["error"]))}},n=c;c.__docgenInfo={exportName:"default",displayName:"IoTextField",description:"",tags:{},props:[{name:"error",type:{name:"boolean"}},{name:"defaultValue",type:{name:"false",func:!0}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IoTextField.vue"]};const F={title:"Components/Text Field",component:n,render:e=>({components:{IoTextField:n},setup(){return{args:e}}}),args:{label:"foobar",density:"compact",placeholder:"Enter text",appendIcon:"",appendInnerIcon:"",clearIcon:"fa-light fa-circle-x",color:"#544DC7",clearable:!1,error:!1,errorMessage:"Error Message",hint:"",messages:"",persistentClear:!1,persistentHint:!1,prependIcon:"",prependInnerIcon:"",variant:"outlined"},argTypes:{label:{control:{type:"text"},description:"Sets the text of the label."},density:{control:{type:"select"},options:["comfortable","compact"],description:"Adjusts the vertical height."},placeholder:{control:{type:"text"},description:"Sets the placeholder text."},appendIcon:{control:{type:"text"},description:"Creates icon after default content in the append slot."},appendInnerIcon:{control:{type:"text"},description:"Creates icon in the append-inner slot."},clearable:{control:{type:"boolean"},description:"Allows for the component to be cleared."},clearIcon:{control:{type:"text"},description:"Applied when using clearable and the input is dirty."},error:{control:{type:"boolean"},description:"Puts the input in a manual error state."},errorMessages:{control:{type:"text"},description:"Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the rules prop. This field will not trigger validation."},hint:{control:{type:"text"},description:"Displays hint text below the input when focused."},messages:{control:{type:"text"},description:"Displays a list of messages or a single message if using a string."},persistentClear:{control:{type:"boolean"},description:"Always show the clearable icon when the input is dirty."},persistentHint:{control:{type:"boolean"},description:"Forces hint to always be visible."},prependIcon:{control:{type:"text"},description:"Prepends an icon to the outside the component’s input."},variant:{control:{type:"select"},options:["outlined","filled"],description:"Apply outlined or filled style."}}},C=e=>({components:{IoTextField:n},setup(){return{args:e}},template:`
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
      />`}),r=C.bind({});var i,l,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
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
})`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const S=["Default"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:S,default:F},Symbol.toStringTag,{value:"Module"}));export{H as T};
