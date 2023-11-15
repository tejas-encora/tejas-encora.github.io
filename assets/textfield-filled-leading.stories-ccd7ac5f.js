import"./filled-text-field-7186165f.js";/* empty css              */import{r as d,c,w as m,o as g,a as u,n as f}from"./vue.esm-bundler-2440c5c9.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const r={name:"IOTextFieldLeading",props:{icon:{type:String,default:"magnifying-glass"}},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function _(e,L,I,b,y,l){const p=d("md-filled-text-field");return g(),c(p,{label:"Label"},{default:m(()=>[u("i",{class:f(l.iconClass),slot:"leading-icon"},null,2)]),_:1})}const n=x(r,[["render",_]]);r.__docgenInfo={displayName:"IOTextFieldLeading",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"'magnifying-glass'"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOTextFieldLeading.vue"]};const i="<IOTextFieldLeading :label=args.label :supporting-text=args.supportingText :disabled=args.disabled />",B={title:"UI/Atoms/Inputs/Textfield/Filled/With Icons/Leading",component:n,tags:["autodocs"],render:e=>({components:{IOTextFieldLeading:n},setup(){return{args:e}},template:i}),args:{disabled:!1,label:"Label",icon:"magnifying-glass",supportingText:"Supporting text"},argTypes:{label:{control:{type:"text"}},icon:{control:{type:"text"}}}},t={render:e=>({components:{IOTextFieldLeading:n},setup(){return{args:e}},template:i})};var a,s,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextFieldLeading
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const N=["Leading"];export{t as Leading,N as __namedExportsOrder,B as default};
//# sourceMappingURL=textfield-filled-leading.stories-ccd7ac5f.js.map
