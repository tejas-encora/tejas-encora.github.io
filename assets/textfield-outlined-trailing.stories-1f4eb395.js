import"./outlined-text-field-740d3e8f.js";/* empty css              */import{r as p,c,w as d,o as u,a as g,n as m}from"./vue.esm-bundler-92f74987.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./events-897ffe23.js";import"./shared-styles.css-3dee3ba2.js";const a={name:"IOTextFieldOutlineTrailing",props:{icon:String,default:"circle-x"},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function f(e,T,O,_,b,l){const o=p("md-outlined-text-field");return u(),c(o,{label:"Label"},{default:d(()=>[g("i",{class:m(l.iconClass),slot:"trailing-icon"},null,2)]),_:1})}const s=x(a,[["render",f]]);a.__docgenInfo={displayName:"IOTextFieldOutlineTrailing",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"}},{name:"default",type:{name:'"circle-x"',func:!0}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Inputs/IOTextFieldOutlineTrailing.vue"]};const S={title:"UI/Atoms/Inputs/Textfield/Outlined/With Icons/Trailing",component:s,tags:["autodocs"],render:e=>({components:{IOTextField},setup(){return{args:e}},template:'<IOTextFieldOutlineTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'}),args:{disabled:!1,label:"Label",icon:"magnifying-glass","supporting-text":"Supporting text"},argTypes:{label:{control:{type:"text"}},icon:{control:{type:"text"}},disabled:"boolean"}},t={render:e=>({components:{IOTextFieldOutlineTrailing:s},setup(){return{args:e}},template:'<IOTextFieldOutlineTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'})};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextFieldOutlineTrailing
    },
    setup() {
      return {
        args
      };
    },
    template: \`<IOTextFieldOutlineTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>\`
  })
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,S as default};
//# sourceMappingURL=textfield-outlined-trailing.stories-1f4eb395.js.map
