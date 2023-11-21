import"./outlined-text-field-d5df80db.js";/* empty css              */import{r,c as b,w as o,o as x,a as O,b as l,d as P,n as y}from"./vue.esm-bundler-bc827b9f.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const u={name:"IOPasswordOutline",data(){return{isPassVisible:!1}},computed:{currIconClass(){return this.isPassVisible?"fa-light fa-eye-slash":"fa-light fa-eye"},inputType(){return this.isPassVisible?"text":"password"}},methods:{handleToggle(){this.isPassVisible=!this.isPassVisible}}};function h(e,a,V,v,C,s){const m=r("md-icon"),_=r("md-icon-button"),g=r("md-outlined-text-field");return x(),b(g,{label:"Password",type:s.inputType,value:e.modelValue,onInput:a[0]||(a[0]=f=>e.$emit("update:modelValue",f.target.value))},{default:o(()=>[O("> "),l(_,{slot:"trailing-icon",onClick:s.handleToggle},{default:o(()=>[l(m,null,{default:o(()=>[P("i",{class:y(s.currIconClass)},null,2)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["type","value"])}const n=I(u,[["render",h]]);u.__docgenInfo={displayName:"IOPasswordOutline",exportName:"default",description:"",tags:{},events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOPasswordOutline.vue"]};const c="<IOPasswordOutline :error=args.error :error-text=args.errorText :disabled=args.disabled :label=args.label :supporting-text=args.supportingText />",w={title:"UI/Atoms/Inputs/Password/Outlined",component:n,render:e=>({components:{IOPasswordOutline:n},setup(){return{args:e}},template:c}),args:{disabled:!1,label:"Label",supportingText:"Supporting text",error:!1,errorText:"Oops, this thing needs fixed"},argTypes:{label:{control:{type:"text"},description:"Field label"},supportingText:{control:{type:"text"}},error:{control:{type:"boolean"},description:"Error state"},errorText:{control:{type:"text"},description:"Error text"}}},t={render:e=>({components:{IOPasswordOutline:n},setup(){return{args:e}},template:c})};var i,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOPasswordOutline
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const T=["Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:T,default:w},Symbol.toStringTag,{value:"Module"}));export{E as P};
//# sourceMappingURL=password-outlined.stories-c933859f.js.map
