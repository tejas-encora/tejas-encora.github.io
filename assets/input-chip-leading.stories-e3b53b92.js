import{r as p,c as u,w as m,o as d,a as f,n as g}from"./vue.esm-bundler-2440c5c9.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import"./input-chip-c1e754e3.js";import"./delegate-169a0fe1.js";import"./trailing-icon-styles.css-afe37d23.js";import"./shared-styles.css-57df1afd.js";import"./ripple-82f18c17.js";const l={name:"IOChipInputLeading",props:{icon:{type:String,default:"book-sparkles"},variant:{type:Boolean,default:!1},close:{type:Boolean,default:!1}},computed:{variantBool(){return`${this.variant}`},iconClass(){return`fa-light fa-${this.icon}`},closeBool(){return`${this.close}`}}};function _(e,I,v,C,y,n){const c=p("md-input-chip");return d(),u(c,{variant:n.variantBool,close:n.closeBool},{default:m(()=>[f("i",{class:g(n.iconClass),slot:"icon"},null,2)]),_:1},8,["variant","close"])}const a=h(l,[["render",_]]);l.__docgenInfo={displayName:"IOChipInputLeading",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"'book-sparkles'"}},{name:"variant",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"close",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipInputLeading.vue"]};const i="<IOChipInputLeading :label=args.label :variant=args.variant :icon=args.icon :close=args.close />",V={title:"UI/Atoms/Chips/Input/Leading Icon",component:a,tags:["autodocs"],render:e=>({components:{IOChipInputLeading:a},setup(){return{args:e}},template:i}),args:{label:"Leading Icon",icon:"book-sparkles",variant:!1,close:!1},argTypes:{label:{control:{type:"text"}},variant:{control:{type:"boolean"}},close:{control:{type:"boolean"},description:"Show close icon"},icon:{control:{type:"text"}}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},o={render:e=>({components:{IOChipInputLeading:a},setup(){return{args:e}},template:i})};var t,s,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipInputLeading
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const $=["Default"];export{o as Default,$ as __namedExportsOrder,V as default};
//# sourceMappingURL=input-chip-leading.stories-e3b53b92.js.map
