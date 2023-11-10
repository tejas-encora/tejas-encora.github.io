import{r as c,c as u,o as m}from"./vue.esm-bundler-2440c5c9.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";import"./input-chip-68c920d0.js";import"./delegate-169a0fe1.js";import"./ripple-82f18c17.js";const s={name:"IOChipInput",props:{variant:{type:Boolean,default:!1},notrail:{type:Boolean,default:!1}},computed:{variantBool(){return`${this.variant}`},trailingBool(){return`${this.notrail}`}}};function f(e,h,_,I,g,a){const l=c("md-input-chip");return m(),u(l,{variant:a.variantBool,notrail:a.trailingBool},null,8,["variant","notrail"])}const n=d(s,[["render",f]]);s.__docgenInfo={displayName:"IOChipInput",exportName:"default",description:"",tags:{},props:[{name:"variant",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"notrail",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipInput.vue"]};const i="<IOChipInput :label=args.label :variant=args.variant :notrail=args.notrail />",O={title:"UI/Atoms/Chips/Input",component:n,tags:["autodocs"],render:e=>({components:{IOChipInput:n},setup(){return{args:e}},template:i}),args:{label:"Input Chip",variant:!1,notrail:!1},argTypes:{label:{control:{type:"text"}},variant:{control:{type:"boolean"}},notrail:{control:{type:"boolean"},description:"Show/hide the trailing icon"}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},t={render:e=>({components:{IOChipInput:n},setup(){return{args:e}},template:i})};var o,r,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(r=t.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,O as default};
//# sourceMappingURL=input-chip.stories-dfc19db2.js.map
