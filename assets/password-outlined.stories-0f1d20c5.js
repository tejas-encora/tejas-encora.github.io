import"./outlined-text-field-d5df80db.js";/* empty css              */import{r,c as x,w as o,o as b,a as O,b as l,d as I,n as h}from"./vue.esm-bundler-bc827b9f.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const u={name:"IOPasswordOutline",data(){return{isPassVisible:!1}},computed:{currIconClass(){return this.isPassVisible?"fa-light fa-eye-slash":"fa-light fa-eye"},inputType(){return this.isPassVisible?"text":"password"}},methods:{handleToggle(){this.isPassVisible=!this.isPassVisible}}};function P(e,a,w,T,V,s){const m=r("md-icon"),g=r("md-icon-button"),_=r("md-outlined-text-field");return b(),x(_,{label:"Password",type:s.inputType,value:e.modelValue,onInput:a[0]||(a[0]=f=>e.$emit("update:modelValue",f.target.value))},{default:o(()=>[O("> "),l(g,{slot:"trailing-icon",onClick:s.handleToggle},{default:o(()=>[l(m,null,{default:o(()=>[I("i",{class:h(s.currIconClass)},null,2)]),_:1})]),_:1},8,["onClick"])]),_:1},8,["type","value"])}const n=y(u,[["render",P]]);u.__docgenInfo={displayName:"IOPasswordOutline",exportName:"default",description:"",tags:{},events:[{name:"update:modelValue"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOPasswordOutline.vue"]};const c="<IOPasswordOutline :error=args.error :error-text=args.errorText :disabled=args.disabled :label=args.label :supporting-text=args.supportingText />",F={title:"UI/Atoms/Inputs/Password/Outlined",component:n,render:e=>({components:{IOPasswordOutline:n},setup(){return{args:e}},template:c}),args:{disabled:!1,label:"Label",supportingText:"Supporting text",error:!1,errorText:"Oops, this thing needs fixed"},argTypes:{label:{control:{type:"text"},description:"Field label"},supportingText:{control:{type:"text"}},error:{control:{type:"boolean"},description:"Error state"},errorText:{control:{type:"text"},description:"Error text"}}},t={render:e=>({components:{IOPasswordOutline:n},setup(){return{args:e}},template:c})};var i,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,F as default};
//# sourceMappingURL=password-outlined.stories-0f1d20c5.js.map
