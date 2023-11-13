import{r as c,c as u,w as m,o as d,a as f,n as g}from"./vue.esm-bundler-2440c5c9.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import"./input-chip-037a2bc4.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-57df1afd.js";import"./ripple-82f18c17.js";const l={name:"IOChipInputLeading",props:{icon:{type:String,default:"book-sparkles"},variant:{type:Boolean,default:!1},close:{type:Boolean,default:!1}},computed:{variantBool(){return`${this.variant}`},iconClass(){return`fa-light fa-${this.icon}`},closeBool(){return`${this.close}`}}};function _(e,I,v,C,y,a){const p=c("md-input-chip");return d(),u(p,{variant:a.variantBool,close:a.closeBool},{default:m(()=>[f("i",{class:g(a.iconClass),slot:"icon"},null,2)]),_:1},8,["variant","close"])}const n=h(l,[["render",_]]);l.__docgenInfo={displayName:"IOChipInputLeading",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"'book-sparkles'"}},{name:"variant",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"close",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipInputLeading.vue"]};const i="<IOChipInputLeading :label=args.label :variant=args.variant :icon=args.icon :close=args.close />",S={title:"UI/Atoms/Chips/Input/Leading Icon",component:n,tags:["autodocs"],render:e=>({components:{IOChipInputLeading:n},setup(){return{args:e}},template:i}),args:{label:"Leading Icon",icon:"book-sparkles",variant:!1,close:!1},argTypes:{label:{control:{type:"text"}},variant:{control:{type:"boolean"}},close:{control:{type:"boolean"},description:"Show close icon"},icon:{control:{type:"text"}}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},t={render:e=>({components:{IOChipInputLeading:n},setup(){return{args:e}},template:i})};var o,s,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipInputLeading
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const V=["Default"];export{t as Default,V as __namedExportsOrder,S as default};
//# sourceMappingURL=input-chip-leading.stories-83a5f30e.js.map
