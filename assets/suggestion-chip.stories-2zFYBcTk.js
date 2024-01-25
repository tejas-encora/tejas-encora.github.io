import{b as a,d as f,e as v,w as _,o as l,f as b,n as h,g as C}from"./vue.esm-bundler-IQnt_YWr.js";import"./suggestion-chip-dW_dvgZ9.js";const d={__name:"IoChipSuggest",props:{leadingIcon:{type:Boolean,default:!1},icon:{type:String,default:"book-sparkles"},elevated:{type:Boolean,default:!1}},setup(e){const n=e,u=a(()=>`fa-light fa-${n.icon}`),s=a(()=>n.leadingIcon),g=a(()=>n.elevated);return(y,k)=>{const m=f("md-suggestion-chip");return l(),v(m,{elevated:g.value,"leading-icon":s.value},{default:_(()=>[s.value?(l(),b("i",{key:0,class:h(u.value),slot:"icon","aria-hidden":"true"},null,2)):C("",!0)]),_:1},8,["elevated","leading-icon"])}}},t=d;d.__docgenInfo={exportName:"default",displayName:"IoChipSuggest",description:"",tags:{},props:[{name:"leadingIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"book-sparkles"'}},{name:"elevated",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IoChipSuggest.vue"]};const p="<IoChipSuggest :label=args.label :leadingIcon=args.leadingIcon :icon=args.icon :elevated=args.elevated :disabled=args.disabled />",I={title:"Components/Chips/Suggestion",component:t,render:e=>({components:{IoChipSuggest:t},setup(){return{args:e}},template:p}),args:{label:"Suggestion Chip",leadingIcon:!1,icon:"book-sparkles",elevated:!1,disabled:!1},argTypes:{leadingIcon:{control:{type:"boolean"},description:"Add leading icon"},icon:{control:{type:"text"},description:"Leading icon. FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},elevated:{control:{type:"boolean"},description:"Add elevation"}}},o={render:e=>({components:{IoChipSuggest:t},setup(){return{args:e}},template:p})};var i,r,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IoChipSuggest
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const S=["Default"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:S,default:I},Symbol.toStringTag,{value:"Module"}));export{N as S};
