import{f as c,y as l,o as p}from"./vue.esm-bundler-QJnZ6R36.js";/* empty css             */import{_ as m}from"./_plugin-vue_export-helper-x3n3nnut.js";import{V as i}from"./VSelect-KzR-RCPo.js";const d={style:{height:"32px"}},r={__name:"IoSelect",props:{items:{type:Array,default:()=>[]},label:{type:String}},setup(t){return(y,S)=>(p(),c("div",d,[l(i,{items:t.items,variant:"outlined",density:"compact",height:"32px",label:t.label},null,8,["items","label"])]))}},a=m(r,[["__scopeId","data-v-5c172374"]]);r.__docgenInfo={exportName:"default",displayName:"IoSelect",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Select/IoSelect.vue"]};const u='<IoSelect :items="args.items" />',_={title:"Components/Select/IoSelect",component:a,args:{items:["Option 1","Option 2","Option 3"],density:"compact"},argTypes:{density:{control:{type:"select",options:["compact","normal"]}}}},e={render:t=>({components:{IoSelect:a},setup(){return{args:t}},template:u})};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IoSelect
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const f=["Default"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:f,default:_},Symbol.toStringTag,{value:"Module"}));export{v as S};
