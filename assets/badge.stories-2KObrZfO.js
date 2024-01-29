import{b as m,d as g,e as u,w as _,o as f,l as b}from"./vue.esm-bundler-GE7kM0dE.js";import{_ as B}from"./_plugin-vue_export-helper-x3n3nnut.js";const n={__name:"IoBadge",props:{size:{type:String,default:"s-large"}},setup(e){const d=e,p=m(()=>d.size);return(c,I)=>{const i=g("md-badge");return f(),u(i,{size:p.value,class:"md-badge"},{default:_(()=>[b(c.$slots,"default",{},void 0,!0)]),_:3},8,["size"])}}},t=B(n,[["__scopeId","data-v-cb41aece"]]);n.__docgenInfo={exportName:"default",displayName:"IoBadge",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'s-large'"}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Badge/IoBadge.vue"]};const l="<IoBadge :size=args.size>{{args.label}}</IoBadge>",y={title:"Components/Badges",component:t,render:e=>({components:{IoBadge:t},setup(){return{args:e}},template:l}),args:{label:"3",size:"s-large"},argTypes:{label:{control:{type:"text"}},size:{control:{type:"select"},description:"s-large is for single digit display, m-large is for multiple digit display. small should have no label",options:["small","s-large","m-large"]}}},s={render:e=>({components:{IoBadge:t},setup(){return{args:e}},template:l})};var a,o,r;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(o=s.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const z=["Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:z,default:y},Symbol.toStringTag,{value:"Module"}));export{S as B};
