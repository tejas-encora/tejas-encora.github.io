import"./outlined-text-field-d5df80db.js";/* empty css              */import{r as o,c as b,w as n,o as O,d as x,e as l,f as I,n as P}from"./vue.esm-bundler-28abc28d.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const u={name:"IOPasswordOutline",data(){return{isPassVisible:!1}},computed:{currIconClass(){return this.isPassVisible?"fa-light fa-eye-slash":"fa-light fa-eye"},inputType(){return this.isPassVisible?"text":"password"}},methods:{handleToggle(){this.isPassVisible=!this.isPassVisible}}};function h(e,r,y,V,T,s){const m=o("md-icon"),_=o("md-icon-button"),g=o("md-outlined-text-field");return O(),b(g,{label:"Password",type:s.inputType,value:e.modelValue,onInput:r[0]||(r[0]=f=>e.$emit("update:modelValue",f.target.value))},{default:n(()=>[x("> "),l(_,{slot:"trailing-icon",onClick:s.handleToggle},{default:n(()=>[l(m,null,{default:n(()=>[I("i",{class:P(s.currIconClass)},null,2)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["type","value"])}const a=w(u,[["render",h]]);u.__docgenInfo={displayName:"IOPasswordOutline",exportName:"default",description:"",tags:{},events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOPasswordOutline.vue"]};const c="<IOPasswordOutline :disabled=args.disabled :label=args.label :supporting-text=args.supportingText />",L={title:"UI/Atoms/Inputs/Password/Outlined",component:a,tags:["autodocs"],render:e=>({components:{IOPasswordOutline:a},setup(){return{args:e}},template:c}),args:{disabled:!1,label:"Label",supportingText:"Supporting text"},argTypes:{label:{control:{type:"text"},description:"Field label"},supportingText:{control:{type:"text"}}}},t={render:e=>({components:{IOPasswordOutline:a},setup(){return{args:e}},template:c})};var i,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const U=["Default"];export{t as Default,U as __namedExportsOrder,L as default};
//# sourceMappingURL=password-outlined.stories-abbdbbad.js.map
