import{r as i,c as m,w as u,o as d,a as f}from"./vue.esm-bundler-2440c5c9.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import"./input-chip-c1e754e3.js";import"./delegate-169a0fe1.js";import"./trailing-icon-styles.css-afe37d23.js";import"./shared-styles.css-57df1afd.js";import"./ripple-82f18c17.js";const c={name:"IOChipInputAvatar",props:{variant:{type:Boolean,default:!1},src:{type:String},close:{type:Boolean,default:!1}},computed:{variantBool(){return`${this.variant}`},imgSrc(){return`${this.src}`},closeBool(){return`${this.close}`}}},h=["src"];function _(e,g,I,C,y,a){const l=i("md-input-chip");return d(),m(l,{variant:a.variantBool,avatar:"",close:a.closeBool},{default:u(()=>[f("img",{slot:"icon",src:a.imgSrc,alt:"avatar"},null,8,h)]),_:1},8,["variant","close"])}const r=v(c,[["render",_]]);c.__docgenInfo={displayName:"IOChipInputAvatar",exportName:"default",description:"",tags:{},props:[{name:"variant",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"src",type:{name:"string"}},{name:"close",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipInputAvatar.vue"]};const p='<IOChipInputAvatar :label=args.label :variant=args.variant :src=args.src  :close="args.close" />',k={title:"UI/Atoms/Chips/Input/Avatar",component:r,tags:["autodocs"],render:e=>({components:{IOChipInputAvatar:r},setup(){return{args:e}},template:p}),args:{label:"Avatar Chip",variant:!1,src:"avatar.png",close:!1},argTypes:{variant:{control:{type:"boolean"}},src:{control:{type:"text"}},close:{control:{type:"boolean"},description:"Show close icon"}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},t={render:e=>({components:{IOChipInputAvatar:r},setup(){return{args:e}},template:p})};var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipInputAvatar
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,k as default};
//# sourceMappingURL=input-chip-avatar.stories-1e2d658f.js.map
