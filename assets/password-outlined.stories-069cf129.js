import"./outlined-text-field-469fa07a.js";/* empty css              */import{b as r,d as b,w as o,o as x,g as l,j as O,n as P}from"./vue.esm-bundler-091b3824.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const u={name:"IOPasswordOutline",data(){return{isPassVisible:!1}},computed:{currIconClass(){return this.isPassVisible?"fa-light fa-eye-slash":"fa-light fa-eye"},inputType(){return this.isPassVisible?"text":"password"}},methods:{handleToggle(){this.isPassVisible=!this.isPassVisible}}};function I(e,a,T,V,v,s){const m=r("md-icon"),g=r("md-icon-button"),_=r("md-outlined-text-field");return x(),b(_,{label:"Password",type:s.inputType,value:e.modelValue,onInput:a[0]||(a[0]=f=>e.$emit("update:modelValue",f.target.value))},{default:o(()=>[l(g,{slot:"trailing-icon",onClick:s.handleToggle},{default:o(()=>[l(m,null,{default:o(()=>[O("i",{class:P(s.currIconClass)},null,2)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["type","value"])}const n=y(u,[["render",I]]);u.__docgenInfo={displayName:"IOPasswordOutline",exportName:"default",description:"",tags:{},events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOPasswordOutline.vue"]};const c="<IOPasswordOutline :error=args.error :error-text=args.errorText :disabled=args.disabled :label=args.label :supporting-text=args.supportingText />",h={title:"UI/Atoms/Inputs/Password/Outlined",component:n,render:e=>({components:{IOPasswordOutline:n},setup(){return{args:e}},template:c}),args:{disabled:!1,label:"Label",supportingText:"Supporting text",error:!1,errorText:"Oops, this thing needs fixed"},argTypes:{label:{control:{type:"text"},description:"Field label"},supportingText:{control:{type:"text"}},error:{control:{type:"boolean"},description:"Error state"},errorText:{control:{type:"text"},description:"Error text"}}},t={render:e=>({components:{IOPasswordOutline:n},setup(){return{args:e}},template:c})};var i,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const w=["Default"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:w,default:h},Symbol.toStringTag,{value:"Module"}));export{j as P};
//# sourceMappingURL=password-outlined.stories-069cf129.js.map
