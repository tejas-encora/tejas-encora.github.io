import{r as i,c as u,o as m}from"./vue.esm-bundler-2440c5c9.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";import"./input-chip-c1e754e3.js";import"./delegate-169a0fe1.js";import"./trailing-icon-styles.css-afe37d23.js";import"./shared-styles.css-57df1afd.js";import"./ripple-82f18c17.js";const p={name:"IOChipInput",props:{variant:{type:Boolean,default:!1},close:{type:Boolean,default:!1}},computed:{isVariant(){return`${this.variant}`},closeBool(){return`${this.close}`}}};function f(e,h,_,I,v,n){const c=i("md-input-chip");return m(),u(c,{variant:n.isVariant,close:n.closeBool},null,8,["variant","close"])}const o=d(p,[["render",f]]);p.__docgenInfo={displayName:"IOChipInput",exportName:"default",description:"",tags:{},props:[{name:"variant",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"close",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipInput.vue"]};const l="<IOChipInput :label=args.label :variant=args.variant :close=args.close />",k={title:"UI/Atoms/Chips/Input",component:o,tags:["autodocs"],render:e=>({components:{IOChipInput:o},setup(){return{args:e}},template:l}),args:{label:"Input Chip",variant:!1,close:!1},argTypes:{label:{control:{type:"text"}},variant:{control:{type:"boolean"}},close:{control:{type:"boolean"},description:"Make removable"}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},t={render:e=>({components:{IOChipInput:o},setup(){return{args:e}},template:l})};var a,r,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipInput
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const V=["Default"];export{t as Default,V as __namedExportsOrder,k as default};
//# sourceMappingURL=input-chip.stories-f3d85671.js.map
