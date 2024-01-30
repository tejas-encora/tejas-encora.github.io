import{d as p,e as l,o as d}from"./vue.esm-bundler-QJnZ6R36.js";import{_ as u}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./suggestion-chip-6FWc_EJr.js";const s={__name:"IoChipIndicator",props:{status:{type:String,validator:e=>["primary","secondary","info","warning","success","error","neutral"].includes(e)},variant:{type:Boolean}},setup(e){return(_,y)=>{const c=p("md-suggestion-chip");return d(),l(c,{class:"indicator",status:e.status,variant:e.variant},null,8,["status","variant"])}}},a=u(s,[["__scopeId","data-v-04c8ac0e"]]);s.__docgenInfo={exportName:"default",displayName:"IoChipIndicator",description:"",tags:{},props:[{name:"status",type:{name:"string"},values:["primary","secondary","info","warning","success","error","neutral"]},{name:"variant",type:{name:"boolean"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IoChipIndicator.vue"]};const i="<IoChipIndicator :label=args.label :status=args.status :disabled=args.disabled :variant=args.variant />",m={title:"Components/Chips/Indicator",component:a,render:e=>({components:{IoChipIndicator:a},setup(){return{args:e}},template:i}),args:{label:"Indicator Chip",disabled:!1,status:"primary",variant:!1},argTypes:{status:{control:{type:"select"},options:["primary","secondary","success","warning","error","info","neutral"]},variant:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},t={render:e=>({components:{IoChipIndicator:a},setup(){return{args:e}},template:i})};var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const g=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:g,default:m},Symbol.toStringTag,{value:"Module"}));export{h as I};
