import{r as i,c as u,o as m}from"./vue.esm-bundler-2440c5c9.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./input-chip-037a2bc4.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-57df1afd.js";import"./ripple-82f18c17.js";const l={name:"IOChipInput",props:{variant:{type:Boolean,default:!1},close:{type:Boolean,default:!1},elevation:{type:Boolean,default:!1}},computed:{variantBool(){return`${this.variant}`},closeBool(){return`${this.close}`},setElevation(){return`${this.elevation}`}}};function d(e,v,h,_,I,a){const c=i("md-input-chip");return m(),u(c,{variant:a.variantBool,close:a.closeBool,elevated:a.setElevation},null,8,["variant","close","elevated"])}const o=f(l,[["render",d]]);l.__docgenInfo={displayName:"IOChipInput",exportName:"default",description:"",tags:{},props:[{name:"variant",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"close",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"elevation",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipInput.vue"]};const p="<IOChipInput :label=args.label :variant=args.variant :close=args.close />",x={title:"UI/Atoms/Chips/Input",component:o,tags:["autodocs"],render:e=>({components:{IOChipInput:o},setup(){return{args:e}},template:p}),args:{label:"Input Chip",variant:!1,close:!1},argTypes:{label:{control:{type:"text"}},variant:{control:{type:"boolean"}},close:{control:{type:"boolean"},description:"Show close icon"}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},t={render:e=>({components:{IOChipInput:o},setup(){return{args:e}},template:p})};var n,r,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipInput
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,x as default};
//# sourceMappingURL=input-chip.stories-d2b87f86.js.map
