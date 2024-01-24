import{l,b as d,o as u}from"./vue.esm-bundler-opMJLZoG.js";import{_ as m}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./suggestion-chip-dW_dvgZ9.js";const i={name:"IoChipIndicator",components:"md-suggestion-chip",props:{status:{type:String,validator:t=>["primary","secondary","info","warning","success","error","neutral"].includes(t)},variant:{type:Boolean}},computed:{setStatus(){return this.status},setVariant(){return this.variant}}};function g(t,I,y,h,v,a){const p=l("md-suggestion-chip");return u(),d(p,{class:"indicator",status:a.setStatus,variant:a.setVariant},null,8,["status","variant"])}const r=m(i,[["render",g],["__scopeId","data-v-f032fce8"]]);i.__docgenInfo={displayName:"IoChipIndicator",exportName:"default",description:"",tags:{},props:[{name:"status",type:{name:"string"},values:["primary","secondary","info","warning","success","error","neutral"]},{name:"variant",type:{name:"boolean"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IoChipIndicator.vue"]};const c="<IoChipIndicator :label=args.label :status=args.status :disabled=args.disabled :variant=args.variant />",_={title:"UI/Atoms/Chips/Indicator",component:r,render:t=>({components:{IoChipIndicator:r},setup(){return{args:t}},template:c}),args:{label:"Indicator Chip",disabled:!1,status:"primary",variant:!1},argTypes:{status:{control:{type:"select"},options:["primary","secondary","success","warning","error","info","neutral"]},variant:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},e={render:t=>({components:{IoChipIndicator:r},setup(){return{args:t}},template:c})};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IoChipIndicator
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const f=["Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:f,default:_},Symbol.toStringTag,{value:"Module"}));export{x as I};
