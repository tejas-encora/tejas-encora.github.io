import"./filled-text-field-7186165f.js";/* empty css              */import{r as m,c as u,w as g,o as f,a,n as i}from"./vue.esm-bundler-7b6842b6.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const c={name:"IOTextFieldBoth",props:{icon:{type:String,default:"magnifying-glass"},iconTrailing:{type:String,default:"circle-x"}},computed:{icon(){return`fa-light fa-${this.icon}`},iconTrailing(){return`fa-light fa-${this.iconTrailing}`}}};function _(e,T,h,y,b,o){const d=m("md-filled-text-field");return f(),u(d,{label:"Label"},{default:g(()=>[a("i",{class:i(o.icon),slot:"leading-icon"},null,2),a("i",{class:i(o.iconTrailing),slot:"trailing-icon"},null,2)]),_:1})}const n=x(c,[["render",_]]);c.__docgenInfo={displayName:"IOTextFieldBoth",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"magnifying-glass"'}},{name:"iconTrailing",type:{name:"string"},defaultValue:{func:!1,value:'"circle-x"'}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOTextFieldBoth.vue"]};const p="<IOTextFieldBoth :label=args.label :supporting-text=args.supportingText :disabled=args.disabled />",L={title:"UI/Atoms/Inputs/Textfield/Filled/With Icons/Both",component:n,tags:["autodocs"],render:e=>({components:{IOTextFieldBoth:n},setup(){return{args:e}},template:p}),args:{disabled:!1,label:"Label",icon:"magnifying-glass",iconTrailing:"circle-x",supportingText:"Supporting text"},argTypes:{label:{control:{type:"text"},description:"Field label"},icon:{control:{type:"text"},iconTrailing:{control:{type:"text"}}}}},t={render:e=>({components:{IOTextFieldBoth:n},setup(){return{args:e}},template:p})};var l,r,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextFieldBoth
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,L as default};
//# sourceMappingURL=textfield-filled-both.stories-0d91bf8e.js.map
