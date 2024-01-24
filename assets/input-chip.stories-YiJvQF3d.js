import{l as f,b as g,w as I,o,p as s,q as r,s as h}from"./vue.esm-bundler-opMJLZoG.js";import{_}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./input-chip-o4-4W9sh.js";const d={name:"IoChipInput",props:{leadingIcon:{type:Boolean,default:!1},icon:{type:String,default:"book-sparkles"},src:{type:String},avatar:{type:Boolean,default:!1},selected:{type:Boolean,default:!1}},computed:{imgSrc(){return this.src},hasAvatar(){return this.avatar},iconClass(){return`fa-light fa-${this.icon}`},isIconStart(){return this.leadingIcon},isSelected(){return this.selected}}},v=["src"],y={key:2,class:"fa-solid fa-circle-check",slot:"icon"};function C(n,S,a,x,B,e){const m=f("md-input-chip");return o(),g(m,{avatar:e.hasAvatar,"leading-icon":e.isIconStart,selected:e.isSelected},{default:I(()=>[a.avatar&&!a.leadingIcon&&!a.selected?(o(),s("img",{key:0,slot:"icon",src:e.imgSrc,alt:"avatar","aria-hidden":"true"},null,8,v)):r("",!0),e.isIconStart&&!a.avatar?(o(),s("i",{key:1,class:h(e.iconClass),slot:"icon"},null,2)):r("",!0),a.selected&&a.avatar&&!e.isIconStart?(o(),s("i",y)):r("",!0)]),_:1},8,["avatar","leading-icon","selected"])}const c=_(d,[["render",C],["__scopeId","data-v-96c7419f"]]);d.__docgenInfo={displayName:"IoChipInput",exportName:"default",description:"",tags:{},props:[{name:"leadingIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"book-sparkles"'}},{name:"src",type:{name:"string"}},{name:"avatar",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IoChipInput.vue"]};const u="<IoChipInput :avatar=args.avatar :label=args.label :selected=args.selected :src=args.src :leadingIcon=args.leadingIcon :icon=args.icon />",b={title:"UI/Atoms/Chips/Input",component:c,render:n=>({components:{IoChipInput:c},setup(){return{args:n}},template:u}),args:{label:"Input Chip",selected:!1,src:"avatar.png",avatar:!1,leadingIcon:!1,icon:"book-sparkles"},argTypes:{selected:{control:{type:"boolean"}},avatar:{control:{type:"boolean"}},leadingIcon:{control:{type:"boolean"},description:"Add leading icon"},icon:{control:{type:"text"},description:"Leading icon. FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},src:{control:{type:"text"}}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},t={render:n=>({components:{IoChipInput:c},setup(){return{args:n}},template:u})};var l,i,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IoChipInput
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const k=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:k,default:b},Symbol.toStringTag,{value:"Module"}));export{O as I};
