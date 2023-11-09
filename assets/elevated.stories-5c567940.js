import{r as m,c as d,w as c,o as u,e as f}from"./vue.esm-bundler-2440c5c9.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./elevated-button-ba490663.js";import"./delegate-169a0fe1.js";import"./elevation-dd730b41.js";import"./shared-styles.css-61c7dcec.js";import"./ripple-82f18c17.js";import"./static-93b7ff82.js";import"./form-submitter-22a5b223.js";import"./events-00ef5ad2.js";import"./shared-elevation-styles.css-238aee8a.js";const r={name:"IOButtonElevated",props:{size:{type:String,default:""}},computed:{sizeClass(){return`${this.size}`}}};function v(e,g,B,z,E,p){const i=m("md-elevated-button");return u(),d(i,{size:p.sizeClass},{default:c(()=>[f(e.$slots,"default")]),_:3},8,["size"])}const s=_(r,[["render",v]]);r.__docgenInfo={displayName:"IOButtonElevated",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Buttons/IOButtonElevated.vue"]};const l="<IOButtonElevated :size=args.size :disabled=args.disabled>{{args.label}}</IOButtonElevated>",D={title:"UI/Atoms/Buttons/Elevated",component:s,tags:["autodocs"],render:e=>({components:{IOButtonElevated:s},setup(){return{args:e}},template:l}),args:{disabled:!1,label:"click me",size:"medium"},argTypes:{label:{control:{type:"text"}},size:{control:{type:"select"},options:["small","medium","large"]},onClick:{action:"Button clicked"}}},t={render:e=>({components:{IOButtonElevated:s},setup(){return{args:e}},template:l})};var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOButtonElevated
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,D as default};
//# sourceMappingURL=elevated.stories-5c567940.js.map
