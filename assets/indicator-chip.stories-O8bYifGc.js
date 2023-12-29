import{b as d,d as l,o as u}from"./vue.esm-bundler-BfuYmIzB.js";import{_ as m}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./suggestion-chip-dW_dvgZ9.js";const i={name:"IOChipIndicator",components:"md-suggestion-chip",props:{status:{type:String},variant:{type:Boolean}},computed:{setStatus(){return this.status},setVariant(){return this.variant}}};function _(e,h,f,b,y,s){const p=d("md-suggestion-chip");return u(),l(p,{class:"indicator",status:s.setStatus,variant:s.setVariant},null,8,["status","variant"])}const a=m(i,[["render",_],["__scopeId","data-v-494c7f99"]]);i.__docgenInfo={displayName:"IOChipIndicator",exportName:"default",description:"",tags:{},props:[{name:"status",type:{name:"string"}},{name:"variant",type:{name:"boolean"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipIndicator.vue"]};const c="<IOChipIndicator :label=args.label :status=args.status :disabled=args.disabled :variant=args.variant />",g={title:"UI/Atoms/Chips/Indicator",component:a,render:e=>({components:{IOChipIndicator:a},setup(){return{args:e}},template:c}),args:{label:"Indicator Chip",disabled:!1,status:"primary",variant:!1},argTypes:{status:{control:{type:"select"},options:["primary","secondary","success","warning","error","info","neutral"]},variant:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},t={render:e=>({components:{IOChipIndicator:a},setup(){return{args:e}},template:c})};var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipIndicator
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const I=["Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:I,default:g},Symbol.toStringTag,{value:"Module"}));export{S as I};
