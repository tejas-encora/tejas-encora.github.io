import{l as i,b as c,w as m,o as g,f as u}from"./vue.esm-bundler-opMJLZoG.js";import{_ as f}from"./_plugin-vue_export-helper-x3n3nnut.js";const n={name:"IoBadge",props:{size:{type:String,default:"s-large"}},computed:{sizeClass(){return`${this.size}`}}};function _(e,z,y,I,v,d){const p=i("md-badge");return g(),c(p,{size:d.sizeClass,class:"md-badge"},{default:m(()=>[u(e.$slots,"default",{},void 0,!0)]),_:3},8,["size"])}const t=f(n,[["render",_],["__scopeId","data-v-fa0814e3"]]);n.__docgenInfo={displayName:"IoBadge",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'s-large'"}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Badge/IoBadge.vue"]};const l="<IoBadge :size=args.size>{{args.label}}</IoBadge>",b={title:"UI/Atoms/Feedback/Badge",component:t,render:e=>({components:{IoBadge:t},setup(){return{args:e}},template:l}),args:{label:"3",size:"s-large"},argTypes:{label:{control:{type:"text"}},size:{control:{type:"select"},description:"s-large is for single digit display, m-large is for multiple digit display. small should have no label",options:["small","s-large","m-large"]}}},s={render:e=>({components:{IoBadge:t},setup(){return{args:e}},template:l})};var a,o,r;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IoBadge
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(r=(o=s.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const B=["Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:B,default:b},Symbol.toStringTag,{value:"Module"}));export{S as B};
