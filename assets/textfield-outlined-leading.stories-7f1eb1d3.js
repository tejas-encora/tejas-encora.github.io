import"./outlined-text-field-740d3e8f.js";/* empty css              */import{r as d,c as p,w as c,o as g,a as u,n as m}from"./vue.esm-bundler-92f74987.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./events-897ffe23.js";import"./shared-styles.css-3dee3ba2.js";const i={name:"IOTextFieldOutlineLeading",props:{icon:String,default:"magnifying-glass"},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function f(e,O,_,b,I,r){const l=d("md-outlined-text-field");return g(),p(l,{label:"Label"},{default:c(()=>[u("i",{class:m(r.iconClass),slot:"leading-icon"},null,2)]),_:1})}const o=x(i,[["render",f]]);i.__docgenInfo={displayName:"IOTextFieldOutlineLeading",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"}},{name:"default",type:{name:'"magnifying-glass"',func:!0}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Inputs/IOTextFieldOutlineLeading.vue"]};const C={title:"UI/Atoms/Inputs/Textfield/Outlined/With Icons/Leading",component:o,tags:["autodocs"],render:e=>({components:{IOTextField},setup(){return{args:e}},template:'<IOTextFieldOutlineLeading label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'}),args:{disabled:!1,label:"Label",icon:"magnifying-glass","supporting-text":"Supporting text"},argTypes:{label:{control:{type:"text"}},icon:{control:{type:"text"}},disabled:"boolean"}},t={render:e=>({components:{IOTextFieldOutlineLeading:o},setup(){return{args:e}},template:'<IOTextFieldOutlineLeading label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'})};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextFieldOutlineLeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<IOTextFieldOutlineLeading label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>\`
  })
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const S=["Leading"];export{t as Leading,S as __namedExportsOrder,C as default};
//# sourceMappingURL=textfield-outlined-leading.stories-7f1eb1d3.js.map
