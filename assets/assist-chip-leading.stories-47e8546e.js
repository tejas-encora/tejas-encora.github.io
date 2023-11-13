import{r as l,c as m,w as d,o as u,a as g,n as f}from"./vue.esm-bundler-2440c5c9.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./input-chip-037a2bc4.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-57df1afd.js";import"./ripple-82f18c17.js";const r={name:"IOChipAssistLeading",props:{icon:{type:String,default:"book-sparkles"}},computed:{setIcon(){return`fa-light fa-${this.icon}`}}};function h(e,C,I,L,k,p){const c=l("md-assist-chip");return u(),m(c,null,{default:d(()=>[g("i",{class:f(p.setIcon),slot:"icon"},null,2)]),_:1})}const t=_(r,[["render",h]]);r.__docgenInfo={displayName:"IOChipAssistLeading",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"'book-sparkles'"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipAssistLeading.vue"]};const i="<IOChipAssistLeading :label=args.label :variant=args.variant :icon=args.icon :close=args.close />",$={title:"UI/Atoms/Chips/Assist/Leading Icon",component:t,tags:["autodocs"],render:e=>({components:{IOChipAssistLeading:t},setup(){return{args:e}},template:i}),args:{label:"Leading Icon",icon:"book-sparkles"},argTypes:{label:{control:{type:"text"}},icon:{control:{type:"text"}}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},s={render:e=>({components:{IOChipAssistLeading:t},setup(){return{args:e}},template:i})};var o,n,a;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipAssistLeading
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(a=(n=s.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const B=["Default"];export{s as Default,B as __namedExportsOrder,$ as default};
//# sourceMappingURL=assist-chip-leading.stories-47e8546e.js.map
