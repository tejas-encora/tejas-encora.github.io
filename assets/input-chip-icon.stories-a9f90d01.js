import{r as l,c as m,w as u,o as d,f as I,n as f}from"./vue.esm-bundler-28abc28d.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import"./input-chip-c1e754e3.js";import"./delegate-169a0fe1.js";import"./trailing-icon-styles.css-afe37d23.js";import"./shared-styles.css-57df1afd.js";import"./ripple-82f18c17.js";const a={name:"IOChipInputIcon",props:{icon:{type:String,default:"book-sparkles"}},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function _(e,g,C,b,k,c){const i=l("md-input-chip");return d(),m(i,null,{default:u(()=>[I("i",{class:f(c.iconClass),slot:"icon"},null,2)]),_:1})}const o=h(a,[["render",_]]);a.__docgenInfo={displayName:"IOChipInputIcon",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"'book-sparkles'"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipInputIcon.vue"]};const p="<IOChipInputIcon :label=args.label :selected=args.selected :icon=args.icon />",S={title:"UI/Atoms/Chips/Input/Icon",component:o,tags:["autodocs"],render:e=>({components:{IOChipInputIcon:o},setup(){return{args:e}},template:p}),args:{label:"With Icon",icon:"book-sparkles",selected:!1},argTypes:{label:{control:{type:"text"}},selected:{control:{type:"boolean"}},icon:{control:{type:"text"}}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},t={render:e=>({components:{IOChipInputIcon:o},setup(){return{args:e}},template:p})};var n,s,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipInputIcon
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,S as default};
//# sourceMappingURL=input-chip-icon.stories-a9f90d01.js.map
