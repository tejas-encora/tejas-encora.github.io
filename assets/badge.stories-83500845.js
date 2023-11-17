import{r as i,c,w as g,o as m,i as u}from"./vue.esm-bundler-7b6842b6.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const n={name:"IOBadge",props:{size:{type:String,default:"s-large"}},computed:{sizeClass(){return`${this.size}`}}};function f(e,b,B,I,y,d){const p=i("md-badge");return m(),c(p,{size:d.sizeClass},{default:g(()=>[u(e.$slots,"default",{},void 0,!0)]),_:3},8,["size"])}const t=_(n,[["render",f],["__scopeId","data-v-086e34bb"]]);n.__docgenInfo={displayName:"IOBadge",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'s-large'"}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Badge/IOBadge.vue"]};const l="<IOBadge :size=args.size>{{args.label}}</IOBadge>",v={title:"UI/Atoms/Feedback/Badge",component:t,tags:["autodocs"],render:e=>({components:{IOBadge:t},setup(){return{args:e}},template:l}),args:{label:"3",size:"s-large"},argTypes:{label:{control:{type:"text"}},size:{control:{type:"select"},description:"s-large is for single digit display, m-large is for multiple digit display. small should have no label",options:["small","s-large","m-large"]}}},s={render:e=>({components:{IOBadge:t},setup(){return{args:e}},template:l})};var a,r,o;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(r=s.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const x=["Default"];export{s as Default,x as __namedExportsOrder,v as default};
//# sourceMappingURL=badge.stories-83500845.js.map
