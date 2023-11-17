import{r as d,c as m,w as u,n as o,o as g,f}from"./vue.esm-bundler-28abc28d.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import"./assist-chip-8fb16d82.js";import"./delegate-169a0fe1.js";import"./elevation-dd730b41.js";import"./shared-styles.css-57df1afd.js";import"./ripple-82f18c17.js";import"./elevated-styles.css-7cf113a2.js";const c={name:"IOChipAssistLeading",props:{icon:{type:String,default:"book-sparkles"}},computed:{setIcon(){return`fa-light fa-${this.icon}`},isElevated(){return this.elevated}}};function _(e,v,C,I,b,a){const l=d("md-assist-chip");return g(),m(l,{class:o({elevated:a.isElevated})},{default:u(()=>[f("i",{class:o(a.setIcon),slot:"icon"},null,2)]),_:1},8,["class"])}const t=h(c,[["render",_]]);c.__docgenInfo={displayName:"IOChipAssistLeading",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"'book-sparkles'"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipAssistLeading.vue"]};const p="<IOChipAssistLeading :label=args.label :variant=args.variant :icon=args.icon :close=args.close :elevated=args.elevated :disabled=args.disabled />",N={title:"UI/Atoms/Chips/Assist/Leading Icon",component:t,tags:["autodocs"],render:e=>({components:{IOChipAssistLeading:t},setup(){return{args:e}},template:p}),args:{label:"Leading Icon",icon:"book-sparkles",elevated:!1,disabled:!1},argTypes:{label:{control:{type:"text"}},icon:{control:{type:"text"}},elevated:{control:{type:"boolean"},description:"Add elevation"}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},s={render:e=>({components:{IOChipAssistLeading:t},setup(){return{args:e}},template:p})};var n,r,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipAssistLeading
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(i=(r=s.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const S=["Default"];export{s as Default,S as __namedExportsOrder,N as default};
//# sourceMappingURL=assist-chip-leading.stories-b061692f.js.map
