import{b as d,d as u,o as l}from"./vue.esm-bundler-VhMez9An.js";import{_ as m}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./suggestion-chip-dW_dvgZ9.js";const a={name:"IOChipIndicator",components:"md-suggestion-chip",props:{status:{type:String}},computed:{setStatus(){return this.status}}};function _(e,h,f,b,C,p){const i=d("md-suggestion-chip");return l(),u(i,{class:"indicator",status:p.setStatus},null,8,["status"])}const s=m(a,[["render",_],["__scopeId","data-v-afd24e8d"]]);a.__docgenInfo={displayName:"IOChipIndicator",exportName:"default",description:"",tags:{},props:[{name:"status",type:{name:"string"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipIndicator.vue"]};const c="<IOChipIndicator :label=args.label :status=args.status :disabled=args.disabled />",g={title:"UI/Atoms/Chips/Indicator",component:s,render:e=>({components:{IOChipIndicator:s},setup(){return{args:e}},template:c}),args:{label:"Indicator Chip",disabled:!1,status:"primary"},argTypes:{status:{control:{type:"select"},options:["primary","secondary","success","warning","error","info","neutral"]},disabled:{control:{type:"boolean"}}}},t={render:e=>({components:{IOChipIndicator:s},setup(){return{args:e}},template:c})};var o,r,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const I=["Default"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:I,default:g},Symbol.toStringTag,{value:"Module"}));export{v as I};
