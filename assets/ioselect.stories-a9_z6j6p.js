import{g as c,e as l,o as p}from"./vue.esm-bundler-BfuYmIzB.js";import{_ as m}from"./_plugin-vue_export-helper-x3n3nnut.js";import{V as i}from"./VSelect-w3JaZsFZ.js";const d={style:{},height:"32"},a={__name:"IOSelect",props:{items:{type:Array,default:()=>[]},label:{type:String}},setup(t){return(S,y)=>(p(),c("div",d,[l(i,{items:t.items,variant:"outlined",density:"compact",height:"32px",label:t.label},null,8,["items","label"])]))}},r=m(a,[["__scopeId","data-v-7fedc19f"]]);a.__docgenInfo={exportName:"default",displayName:"IOSelect",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"label",type:{name:"string"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Select/IOSelect.vue"]};const u='<IOSelect :items="args.items" />',_={title:"UI/atoms/Select/IOSelect",component:r,args:{items:["Option 1","Option 2","Option 3"],density:"compact"},argTypes:{density:{control:{type:"select",options:["compact","normal"]}}}},e={render:t=>({components:{IOSelect:r},setup(){return{args:t}},template:u})};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOSelect
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const f=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:f,default:_},Symbol.toStringTag,{value:"Module"}));export{b as S};
