import"./filled-text-field-298756e5.js";/* empty css              */import{r as p,c,w as d,o as g,a as m,n as u}from"./vue.esm-bundler-92f74987.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-d56dde3e.js";import"./shared-styles.css-f688dd10.js";import"./events-00ef5ad2.js";const i={name:"IOTextFieldTrailing",props:{icon:String,default:"circle-x"},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function f(e,T,_,b,I,l){const o=p("md-filled-text-field");return g(),c(o,{label:"Label"},{default:d(()=>[m("i",{class:u(l.iconClass),slot:"trailing-icon"},null,2)]),_:1})}const s=x(i,[["render",f]]);i.__docgenInfo={displayName:"IOTextFieldTrailing",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"}},{name:"default",type:{name:'"circle-x"',func:!0}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Inputs/IOTextFieldTrailing.vue"]};const $={title:"UI/Atoms/Inputs/Textfield/Filled/With Icons/Trailing",component:s,tags:["autodocs"],render:e=>({components:{IOTextFieldIOTextFieldTrailingLeading},setup(){return{args:e}},template:'<IOTextFieldTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'}),args:{disabled:!1,label:"Label",icon:"magnifying-glass","supporting-text":"Supporting text"},argTypes:{label:{control:{type:"text"}},icon:{control:{type:"text"}},disabled:"boolean"}},t={render:e=>({components:{IOTextFieldTrailing:s},setup(){return{args:e}},template:'<IOTextFieldTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'})};var n,r,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextFieldTrailing
    },
    setup() {
      return {
        args
      };
    },
    template: \`<IOTextFieldTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>\`
  })
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const B=["Default"];export{t as Default,B as __namedExportsOrder,$ as default};
//# sourceMappingURL=textfield-filled-trailing.stories-ce91168a.js.map
