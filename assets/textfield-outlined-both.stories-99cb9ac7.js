import"./outlined-text-field-e5d82e7d.js";/* empty css              */import{r as u,c as d,w as g,o as m,b as a,n as l}from"./vue.esm-bundler-82ad5dd9.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-d56dde3e.js";import"./shared-styles.css-f688dd10.js";import"./events-00ef5ad2.js";const c={name:"IOTextFieldOutlineBoth",props:{icon:{type:String,default:"magnifying-glass"},iconTrailing:{type:String,default:"circle-x"}},computed:{icon(){return`fa-light fa-${this.icon}`},iconTrailing(){return`fa-light fa-${this.iconTrailing}`}}};function x(e,_,b,O,h,i){const p=u("md-outlined-text-field");return m(),d(p,{label:"Label"},{default:g(()=>[a("i",{class:l(i.icon),slot:"leading-icon"},null,2),a("i",{class:l(i.iconTrailing),slot:"trailing-icon"},null,2)]),_:1})}const n=f(c,[["render",x]]);c.__docgenInfo={displayName:"IOTextFieldOutlineBoth",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"magnifying-glass"'}},{name:"iconTrailing",type:{name:"string"},defaultValue:{func:!1,value:'"circle-x"'}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Inputs/IOTextFieldOutlineBoth.vue"]};const $={title:"UI/Atoms/Inputs/Textfield/Outlined/With Icons/Both",component:n,tags:["autodocs"],render:e=>({components:{IOTextFieldOutlineBoth:n},setup(){return{args:e}},template:'<IOTextFieldOutlineBoth label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'}),args:{disabled:!1,label:"Label",icon:"magnifying-glass",iconTrailing:"circle-x","supporting-text":"Supporting text"},argTypes:{label:{control:{type:"text"},description:"Field label"},icon:{control:{type:"text"},iconTrailing:{control:{type:"text"}}},disabled:"boolean"}},t={render:e=>({components:{IOTextFieldOutlineBoth:n},setup(){return{args:e}},template:'<IOTextFieldOutlineBoth label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>'})};var o,r,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextFieldOutlineBoth
    },
    setup() {
      return {
        args
      };
    },
    template: \`<IOTextFieldOutlineBoth label={{args.label}} supporting-text={{args.supportingtext}} v-bind="args"/>\`
  })
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,$ as default};
//# sourceMappingURL=textfield-outlined-both.stories-99cb9ac7.js.map
