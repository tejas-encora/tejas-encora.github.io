import"./filled-text-field-298756e5.js";/* empty css              */import{r as d,c as g,w as u,o as m,a as o,n as i}from"./vue.esm-bundler-92f74987.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-d56dde3e.js";import"./shared-styles.css-f688dd10.js";import"./events-00ef5ad2.js";const c={name:"IOTextFieldBoth",props:{icon:{type:String,default:"magnifying-glass"},iconTrailing:{type:String,default:"circle-x"}},computed:{icon(){return`fa-light fa-${this.icon}`},iconTrailing(){return`fa-light fa-${this.iconTrailing}`}}};function x(e,_,b,h,T,a){const p=d("md-filled-text-field");return m(),g(p,{label:"Label"},{default:u(()=>[o("i",{class:i(a.icon),slot:"leading-icon"},null,2),o("i",{class:i(a.iconTrailing),slot:"trailing-icon"},null,2)]),_:1})}const n=f(c,[["render",x]]);c.__docgenInfo={displayName:"IOTextFieldBoth",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"magnifying-glass"'}},{name:"iconTrailing",type:{name:"string"},defaultValue:{func:!1,value:'"circle-x"'}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Inputs/IOTextFieldBoth.vue"]};const $={title:"UI/Atoms/Inputs/Textfield/Filled/With Icons/Both",component:n,tags:["autodocs"],render:e=>({components:{IOTextFieldBoth:n},setup(){return{args:e}},template:'<IOTextFieldBoth label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'}),args:{disabled:!1,label:"Label",icon:"magnifying-glass",iconTrailing:"circle-x","supporting-text":"Supporting text"},argTypes:{label:{control:{type:"text"},description:"Field label"},icon:{control:{type:"text"},iconTrailing:{control:{type:"text"}}},disabled:"boolean"}},t={render:e=>({components:{IOTextFieldBoth:n},setup(){return{args:e}},template:'<IOTextFieldBoth label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'})};var l,r,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextFieldBoth
    },
    setup() {
      return {
        args
      };
    },
    template: \`<IOTextFieldBoth label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>\`
  })
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,$ as default};
//# sourceMappingURL=textfield-filled-both.stories-fcafe692.js.map
