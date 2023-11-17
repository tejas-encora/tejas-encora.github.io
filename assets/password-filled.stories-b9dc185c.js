import"./filled-text-field-7186165f.js";/* empty css              */import{r as o,c as b,w as a,o as x,e as l,f as I,n as P}from"./vue.esm-bundler-28abc28d.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const c={name:"IOPassword",data(){return{isPassVisible:!1}},computed:{currIconClass(){return this.isPassVisible?"fa-light fa-eye-slash":"fa-light fa-eye"},inputType(){return this.isPassVisible?"text":"password"}},methods:{handleToggle(){this.isPassVisible=!this.isPassVisible}}};function h(e,n,y,V,C,t){const m=o("md-icon"),f=o("md-icon-button"),_=o("md-filled-text-field");return x(),b(_,{label:"Password",type:t.inputType,value:e.modelValue,onInput:n[0]||(n[0]=g=>e.$emit("update:modelValue",g.target.value))},{default:a(()=>[l(f,{slot:"trailing-icon",onClick:t.handleToggle},{default:a(()=>[l(m,null,{default:a(()=>[I("i",{class:P(t.currIconClass)},null,2)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["type","value"])}const r=w(c,[["render",h]]);c.__docgenInfo={displayName:"IOPassword",exportName:"default",description:"",tags:{},events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOPassword.vue"]};const u="<IOPassword :disabled=args.disabled :label=args.label :supporting-text=args.supportingText />",D={title:"UI/Atoms/Inputs/Password/Filled",component:r,tags:["autodocs"],render:e=>({components:{IOPassword:r},setup(){return{args:e}},template:u}),args:{disabled:!1,label:"Label",supportingText:"Supporting text"},argTypes:{label:{control:{type:"text"},description:"Field label"},supportingText:{control:{type:"text"}}}},s={render:e=>({components:{IOPassword:r},setup(){return{args:e}},template:u})};var i,d,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOPassword
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const L=["Default"];export{s as Default,L as __namedExportsOrder,D as default};
//# sourceMappingURL=password-filled.stories-b9dc185c.js.map
