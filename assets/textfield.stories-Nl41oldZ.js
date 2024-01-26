import{p as u,e as h,q as y,w as s,s as f,t as I,o as b,m as c,n as x,l as v,u as w,v as T}from"./vue.esm-bundler-dLKXECA0.js";import{V as C}from"./VTextField-j4M-ktbn.js";/* empty css             *//* empty css              */const F=c("i",{class:"fa-solid fa-exclamation-circle"},null,-1),d={__name:"IoTextField",props:{error:Boolean,type:String},setup(e){const r=u(!1),g=()=>{r.value=!r.value};return(t,M)=>(b(),h(C,I(t.$attrs,{error:e.error,type:r.value?"text":"password"}),y({_:2},[e.error?{name:"append-inner",fn:s(()=>[F]),key:"0"}:void 0,e.type==="password"&&!e.error?{name:"append-inner",fn:s(()=>[c("i",{class:x(r.value?"fa-light fa-eye-slash":"fa-light fa-eye"),onClick:g},null,2)]),key:"1"}:void 0,f(t.$slots,(k,a)=>({name:a,fn:s(m=>[v(t.$slots,a,w(T(m)))])}))]),1040,["error","type"]))}},o=d;d.__docgenInfo={exportName:"default",displayName:"IoTextField",description:"",tags:{},props:[{name:"error",type:{name:"boolean"}},{name:"type",type:{name:"string"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IoTextField.vue"]};const S={title:"Components/Text Field",component:o,render:e=>({components:{IoTextField:o},setup(){return{args:e}}}),args:{label:"foobar",density:"compact",placeholder:"Enter text",appendIcon:"",appendInnerIcon:"",clearIcon:"fa-light fa-circle-x",color:"#544DC7",clearable:!1,error:!1,errorMessage:"Error Message",hint:"",messages:"",persistentClear:!1,persistentHint:!1,prependIcon:"",prependInnerIcon:"",variant:"outlined"},argTypes:{label:{control:{type:"text"},description:"Sets the text of the label."},density:{control:{type:"select"},options:["comfortable","compact"],description:"Adjusts the vertical height."},placeholder:{control:{type:"text"},description:"Sets the placeholder text."},appendIcon:{control:{type:"text"},description:"Creates icon after default content in the append slot."},appendInnerIcon:{control:{type:"text"},description:"Creates icon in the append-inner slot."},clearable:{control:{type:"boolean"},description:"Allows for the component to be cleared."},clearIcon:{control:{type:"text"},description:"Applied when using clearable and the input is dirty."},error:{control:{type:"boolean"},description:"Puts the input in a manual error state."},errorMessages:{control:{type:"text"},description:"Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the rules prop. This field will not trigger validation."},hint:{control:{type:"text"},description:"Displays hint text below the input when focused."},messages:{control:{type:"text"},description:"Displays a list of messages or a single message if using a string."},persistentClear:{control:{type:"boolean"},description:"Always show the clearable icon when the input is dirty."},persistentHint:{control:{type:"boolean"},description:"Forces hint to always be visible."},prependIcon:{control:{type:"text"},description:"Prepends an icon to the outside the component’s input."},variant:{control:{type:"select"},options:["outlined","filled"],description:"Apply outlined or filled style."}}},P=e=>({components:{IoTextField:o},setup(){return{args:e}},template:`
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
      />`}),n=P.bind({});var i,l,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
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
})`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const _=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:_,default:S},Symbol.toStringTag,{value:"Module"}));export{O as T};
