import{g as c,e as l,o as p}from"./vue.esm-bundler-VhMez9An.js";import{V as i}from"./VSelect-Ht9iIyB3.js";const m={style:{},height:"32"},r={__name:"IOSelect",props:{items:{type:Array,default:()=>[]}},setup(t){return(S,f)=>(p(),c("div",m,[l(i,{items:t.items,variant:"outlined",density:"compact",height:"32px"},null,8,["items"])]))}},a=r;r.__docgenInfo={exportName:"default",displayName:"IOSelect",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Select/IOSelect.vue"]};const u='<IOSelect :items="args.items" />',d={title:"UI/atoms/Select/IOSelect",component:a,args:{items:["Option 1","Option 2","Option 3"],density:"compact"},argTypes:{density:{control:{type:"select",options:["compact","normal"]}}}},e={render:t=>({components:{IOSelect:a},setup(){return{args:t}},template:u})};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const _=["Default"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:_,default:d},Symbol.toStringTag,{value:"Module"}));export{g as S};
