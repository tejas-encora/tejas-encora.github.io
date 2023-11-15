import{r as l,c as m,w as u,o as d,a as I,n as f}from"./vue.esm-bundler-2440c5c9.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./input-chip-c1e754e3.js";import"./delegate-169a0fe1.js";import"./trailing-icon-styles.css-afe37d23.js";import"./shared-styles.css-57df1afd.js";import"./ripple-82f18c17.js";const a={name:"IOChipInputIcon",props:{icon:{type:String,default:"book-sparkles"}},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function h(e,g,C,b,v,c){const i=l("md-input-chip");return d(),m(i,null,{default:u(()=>[I("i",{class:f(c.iconClass),slot:"icon"},null,2)]),_:1})}const t=_(a,[["render",h]]);a.__docgenInfo={displayName:"IOChipInputIcon",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"'book-sparkles'"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipInputIconRemove.vue"]};const p="<IOChipInputIconRemove :label=args.label :selected=args.selected :icon=args.icon />",N={title:"UI/Atoms/Chips/Input/Icon Removable",component:t,tags:["autodocs"],render:e=>({components:{IOChipInputIconRemove:t},setup(){return{args:e}},template:p}),args:{label:"Icon Removable",icon:"book-sparkles",selected:!1},argTypes:{label:{control:{type:"text"}},selected:{control:{type:"boolean"}},icon:{control:{type:"text"}}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},o={render:e=>({components:{IOChipInputIconRemove:t},setup(){return{args:e}},template:p})};var n,s,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipInputIconRemove
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const S=["Default"];export{o as Default,S as __namedExportsOrder,N as default};
//# sourceMappingURL=input-chip-icon-remove.stories-873d9851.js.map
