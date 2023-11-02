import"./filled-text-field-4decf4cb.js";/* empty css              */import{r as p,c as d,w as c,o as g,a as m,n as u}from"./vue.esm-bundler-92f74987.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./events-897ffe23.js";import"./shared-styles.css-3dee3ba2.js";const l={name:"IOTextFieldTrailing",props:{icon:String,default:"circle-x"},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function f(e,T,b,_,I,o){const i=p("md-filled-text-field");return g(),d(i,{label:"Label"},{default:c(()=>[m("i",{class:u(o.iconClass),slot:"trailing-icon"},null,2)]),_:1})}const s=x(l,[["render",f]]);l.__docgenInfo={displayName:"IOTextFieldTrailing",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"}},{name:"default",type:{name:'"circle-x"',func:!0}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Inputs/IOTextFieldTrailing.vue"]};const C={title:"UI/Atoms/Inputs/Textfield/Filled/With Icons/Trailing",component:s,tags:["autodocs"],render:e=>({components:{IOTextField},setup(){return{args:e}},props:Object.keys(argTypes),template:'<IOTextFieldTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'}),args:{disabled:!1,label:"Label",icon:"magnifying-glass","supporting-text":"Supporting text"},argTypes:{label:{control:{type:"text"}},icon:{control:{type:"text"}},disabled:"boolean",error:"boolean",handleToggle:{action:"toggled"}}},t={render:e=>({components:{IOTextFieldTrailing:s},setup(){return{args:e}},template:'<IOTextFieldTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args" @toggled="handleToggle" v-bind="$props"/>'})};var n,r,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextFieldTrailing
    },
    setup() {
      return {
        args
      };
    },
    template: \`<IOTextFieldTrailing label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args" @toggled="handleToggle" v-bind="$props"/>\`
  })
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,C as default};
//# sourceMappingURL=textfield-filled-trailing.stories-48ab06ba.js.map
