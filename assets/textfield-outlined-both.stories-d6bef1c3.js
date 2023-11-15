import"./outlined-text-field-d5df80db.js";/* empty css              */import{r as u,c as m,w as g,o as f,a as i,n as a}from"./vue.esm-bundler-2440c5c9.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-169a0fe1.js";import"./shared-styles.css-6f3bc5a2.js";import"./static-93b7ff82.js";import"./events-00ef5ad2.js";const c={name:"IOTextFieldOutlineBoth",props:{icon:{type:String,default:"magnifying-glass"},iconTrailing:{type:String,default:"circle-x"}},computed:{icon(){return`fa-light fa-${this.icon}`},iconTrailing(){return`fa-light fa-${this.iconTrailing}`}}};function _(e,T,h,O,b,o){const d=u("md-outlined-text-field");return f(),m(d,{label:"Label"},{default:g(()=>[i("i",{class:a(o.icon),slot:"leading-icon"},null,2),i("i",{class:a(o.iconTrailing),slot:"trailing-icon"},null,2)]),_:1})}const n=x(c,[["render",_]]);c.__docgenInfo={displayName:"IOTextFieldOutlineBoth",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"magnifying-glass"'}},{name:"iconTrailing",type:{name:"string"},defaultValue:{func:!1,value:'"circle-x"'}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Inputs/IOTextFieldOutlineBoth.vue"]};const p="<IOTextFieldOutlineBoth :label=args.label :supporting-text=args.supportingText :disabled=args.disabled />",L={title:"UI/Atoms/Inputs/Textfield/Outlined/With Icons/Both",component:n,tags:["autodocs"],render:e=>({components:{IOTextFieldOutlineBoth:n},setup(){return{args:e}},template:p}),args:{disabled:!1,label:"Label",icon:"magnifying-glass",iconTrailing:"circle-x",supportingText:"Supporting text"},argTypes:{label:{control:{type:"text"},description:"Field label"},icon:{control:{type:"text"},iconTrailing:{control:{type:"text"}}},disabled:"boolean"}},t={render:e=>({components:{IOTextFieldOutlineBoth:n},setup(){return{args:e}},template:p})};var l,r,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOTextFieldOutlineBoth
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,L as default};
//# sourceMappingURL=textfield-outlined-both.stories-d6bef1c3.js.map
