import{r as c,c as u,w as m,o as d,a as f,n as g}from"./vue.esm-bundler-2440c5c9.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import"./input-chip-68c920d0.js";import"./delegate-169a0fe1.js";import"./ripple-82f18c17.js";const i={name:"IOChipInputLeading",props:{icon:{type:String,default:"book-sparkles"},variant:{type:Boolean,default:!1},notrail:{type:Boolean,default:!1}},computed:{variantBool(){return`${this.variant}`},iconClass(){return`fa-light fa-${this.icon}`},trailingBool(){return`${this.notrail}`}}};function _(e,I,v,C,y,a){const p=c("md-input-chip");return d(),u(p,{variant:a.variantBool,notrail:a.trailingBool},{default:m(()=>[f("i",{class:g(a.iconClass),slot:"icon"},null,2)]),_:1},8,["variant","notrail"])}const n=h(i,[["render",_]]);i.__docgenInfo={displayName:"IOChipInputLeading",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"'book-sparkles'"}},{name:"variant",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"notrail",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipInputLeading.vue"]};const l="<IOChipInputLeading :label=args.label :variant=args.variant :icon=args.icon :notrail=args.notrail />",O={title:"UI/Atoms/Chips/Input/Leading Icon",component:n,tags:["autodocs"],render:e=>({components:{IOChipInputLeading:n},setup(){return{args:e}},template:l}),args:{label:"Leading Icon",icon:"book-sparkles",variant:!1,notrail:!1},argTypes:{label:{control:{type:"text"}},variant:{control:{type:"boolean"}},notrail:{control:{type:"boolean"},description:"Show/hide the trailing icon"},icon:{control:{type:"text"}}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},t={render:e=>({components:{IOChipInputLeading:n},setup(){return{args:e}},template:l})};var o,r,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipInputLeading
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,O as default};
//# sourceMappingURL=input-chip-leading.stories-f9f7140f.js.map
