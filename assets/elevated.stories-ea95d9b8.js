import{r as d,c,w as m,o as u,e as f}from"./vue.esm-bundler-2440c5c9.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./elevated-button-ba490663.js";import"./delegate-169a0fe1.js";import"./elevation-dd730b41.js";import"./shared-styles.css-61c7dcec.js";import"./ripple-82f18c17.js";import"./static-93b7ff82.js";import"./form-submitter-22a5b223.js";import"./events-00ef5ad2.js";import"./shared-elevation-styles.css-238aee8a.js";const a={name:"IOButtonElevated",props:{size:{type:String,default:""}},computed:{sizeClass(){return`${this.size}`}}};function v(e,g,B,z,I,i){const p=d("md-elevated-button");return u(),c(p,{size:i.sizeClass},{default:m(()=>[f(e.$slots,"default")]),_:3},8,["size"])}const s=_(a,[["render",v]]);a.__docgenInfo={displayName:"IOButtonElevated",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Buttons/IOButtonElevated.vue"]};const l="<IOButtonElevated :size=args.size :disabled=args.disabled>{{args.label}}</IOButtonElevated>",D={title:"UI/Atoms/Buttons/Elevated",component:s,tags:["autodocs"],render:e=>({components:{IOButtonElevated:s},setup(){return{args:e}},template:l}),args:{disabled:!1,label:"click me",size:"medium"},argTypes:{label:{control:{type:"text"}},size:{control:{type:"select"},options:["small","medium","large"]},onClick:{action:"Button clicked"}}},t={render:e=>({components:{IOButtonElevated:s},setup(){return{args:e}},template:l})};var o,n,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOButtonElevated
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,D as default};
//# sourceMappingURL=elevated.stories-ea95d9b8.js.map
