import{b as i,d as c,w as m,o as g,m as u}from"./vue.esm-bundler-GkJSCLLJ.js";import{_ as f}from"./_plugin-vue_export-helper-x3n3nnut.js";const n={name:"IOBadge",props:{size:{type:String,default:"s-large"}},computed:{sizeClass(){return`${this.size}`}}};function _(e,z,y,I,O,d){const p=i("md-badge");return g(),c(p,{size:d.sizeClass,class:"md-badge"},{default:m(()=>[u(e.$slots,"default",{},void 0,!0)]),_:3},8,["size"])}const t=f(n,[["render",_],["__scopeId","data-v-3fb13ab7"]]);n.__docgenInfo={displayName:"IOBadge",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'s-large'"}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Badge/IOBadge.vue"]};const l="<IOBadge :size=args.size>{{args.label}}</IOBadge>",b={title:"UI/Atoms/Feedback/Badge",component:t,render:e=>({components:{IOBadge:t},setup(){return{args:e}},template:l}),args:{label:"3",size:"s-large"},argTypes:{label:{control:{type:"text"}},size:{control:{type:"select"},description:"s-large is for single digit display, m-large is for multiple digit display. small should have no label",options:["small","s-large","m-large"]}}},s={render:e=>({components:{IOBadge:t},setup(){return{args:e}},template:l})};var a,r,o;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOBadge
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(o=(r=s.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const B=["Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:B,default:b},Symbol.toStringTag,{value:"Module"}));export{x as B};
