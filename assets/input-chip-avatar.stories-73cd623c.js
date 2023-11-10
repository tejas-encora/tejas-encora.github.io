import{r as l,c as m,w as u,o as d,a as v}from"./vue.esm-bundler-2440c5c9.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./input-chip-68c920d0.js";import"./delegate-169a0fe1.js";import"./ripple-82f18c17.js";const p={name:"IOChipInputAvatar",props:{variant:{type:Boolean,default:!1},src:{type:String}},computed:{variantBool(){return`${this.variant}`},imgSrc(){return`${this.src}`}}},_=["src"];function h(t,g,I,C,A,r){const i=l("md-input-chip");return d(),m(i,{variant:r.variantBool,avatar:""},{default:u(()=>[v("img",{slot:"icon",src:r.imgSrc,alt:"avatar"},null,8,_)]),_:1},8,["variant"])}const a=f(p,[["render",h]]);p.__docgenInfo={displayName:"IOChipInputAvatar",exportName:"default",description:"",tags:{},props:[{name:"variant",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"src",type:{name:"string"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipInputAvatar.vue"]};const c="<IOChipInputAvatar :label=args.label :variant=args.variant :src=args.src />",S={title:"UI/Atoms/Chips/Input/Avatar",component:a,tags:["autodocs"],render:t=>({components:{IOChipInputAvatar:a},setup(){return{args:t}},template:c}),args:{label:"Avatar Chip",variant:!1,src:"avatar.png"},argTypes:{variant:{control:{type:"boolean"}},src:{control:{type:"text"}}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},e={render:t=>({components:{IOChipInputAvatar:a},setup(){return{args:t}},template:c})};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipInputAvatar
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,S as default};
//# sourceMappingURL=input-chip-avatar.stories-73cd623c.js.map
