import"./filled-text-field-298756e5.js";/* empty css              */import{r as p,c as d,w as c,o as g,b as m,n as u}from"./vue.esm-bundler-82ad5dd9.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-d56dde3e.js";import"./shared-styles.css-f688dd10.js";import"./events-00ef5ad2.js";const r={name:"IOTextFieldLeading",props:{icon:{type:String,default:"magnifying-glass"}},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function f(e,_,b,L,I,i){const l=p("md-filled-text-field");return g(),d(l,{label:"Label"},{default:c(()=>[m("i",{class:u(i.iconClass),slot:"leading-icon"},null,2)]),_:1})}const n=x(r,[["render",f]]);r.__docgenInfo={displayName:"IOTextFieldLeading",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"'magnifying-glass'"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Inputs/IOTextFieldLeading.vue"]};const S={title:"UI/Atoms/Inputs/Textfield/Filled/With Icons/Leading",component:n,tags:["autodocs"],render:e=>({components:{IOTextFieldLeading:n},setup(){return{args:e}},template:'<IOTextFieldLeading label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'}),args:{disabled:!1,label:"Label",icon:"magnifying-glass","supporting-text":"Supporting text"},argTypes:{label:{control:{type:"text"}},icon:{control:{type:"text"}},disabled:"boolean"}},t={render:e=>({components:{IOTextFieldLeading:n},setup(){return{args:e}},template:'<IOTextFieldLeading label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'})};var a,s,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const $=["Leading"];export{t as Leading,$ as __namedExportsOrder,S as default};
//# sourceMappingURL=textfield-filled-leading.stories-0b21e2a7.js.map
