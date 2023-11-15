import{r as m,c as l,w as u,o as d,a as _}from"./vue.esm-bundler-2440c5c9.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./input-chip-c1e754e3.js";import"./delegate-169a0fe1.js";import"./trailing-icon-styles.css-afe37d23.js";import"./shared-styles.css-57df1afd.js";import"./ripple-82f18c17.js";const n={name:"IOChipInputAvatar",props:{src:{type:String}},computed:{imgSrc(){return this.src}}},h=["src"];function v(e,f,I,C,b,c){const i=m("md-input-chip");return d(),l(i,{avatar:""},{default:u(()=>[_("img",{slot:"icon",src:c.imgSrc,alt:"avatar","aria-hidden":"true"},null,8,h)]),_:1})}const r=g(n,[["render",v]]);n.__docgenInfo={displayName:"IOChipInputAvatar",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipInputAvatar.vue"]};const p='<IOChipInputAvatar :label=args.label :selected=args.selected :src=args.src  :removable="args.removable" />',N={title:"UI/Atoms/Chips/Input/Avatar",component:r,tags:["autodocs"],render:e=>({components:{IOChipInputAvatar:r},setup(){return{args:e}},template:p}),args:{label:"Avatar Chip",selected:!1,src:"avatar.png",removable:!1},argTypes:{selected:{control:{type:"boolean"}},src:{control:{type:"text"}},removable:{control:{type:"boolean"},description:"Make removable"}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},t={render:e=>({components:{IOChipInputAvatar:r},setup(){return{args:e}},template:p})};var a,o,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,N as default};
//# sourceMappingURL=input-chip-avatar.stories-7812fccd.js.map
