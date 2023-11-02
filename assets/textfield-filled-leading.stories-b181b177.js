import"./filled-text-field-4decf4cb.js";/* empty css              */import{r as d,c as p,w as c,o as g,a as m,n as u}from"./vue.esm-bundler-92f74987.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./events-897ffe23.js";import"./shared-styles.css-3dee3ba2.js";const r={name:"IOTextFieldLeading",props:{icon:{type:String,default:"magnifying-glass"}},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function f(e,_,b,L,I,i){const l=d("md-filled-text-field");return g(),p(l,{label:"Label"},{default:c(()=>[m("i",{class:u(i.iconClass),slot:"leading-icon"},null,2)]),_:1})}const n=x(r,[["render",f]]);r.__docgenInfo={displayName:"IOTextFieldLeading",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"'magnifying-glass'"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Inputs/IOTextFieldLeading.vue"]};const C={title:"UI/Atoms/Inputs/Textfield/Filled/With Icons/Leading",component:n,tags:["autodocs"],render:e=>({components:{IOTextFieldLeading:n},setup(){return{args:e}},template:'<IOTextFieldLeading label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'}),args:{disabled:!1,label:"Label",icon:"magnifying-glass","supporting-text":"Supporting text"},argTypes:{label:{control:{type:"text"}},icon:{control:{type:"text"}},disabled:"boolean"}},t={render:e=>({components:{IOTextFieldLeading:n},setup(){return{args:e}},template:'<IOTextFieldLeading label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'})};var a,s,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextFieldLeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<IOTextFieldLeading label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>\`
  })
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const S=["Leading"];export{t as Leading,S as __namedExportsOrder,C as default};
//# sourceMappingURL=textfield-filled-leading.stories-b181b177.js.map
