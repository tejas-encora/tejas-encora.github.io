import{r as m,c as i,w as u,n as d,o as f,e as _}from"./vue.esm-bundler-2440c5c9.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./filled-tonal-button-c7d7054d.js";import"./delegate-169a0fe1.js";import"./elevation-dd730b41.js";import"./shared-styles.css-61c7dcec.js";import"./ripple-82f18c17.js";import"./static-93b7ff82.js";import"./form-submitter-22a5b223.js";import"./events-00ef5ad2.js";import"./shared-elevation-styles.css-238aee8a.js";const r={name:"IOButtonTonal",props:{class:{type:String,default:""}},computed:{sizeClass(){return`${this.class}`}}};function B(t,I,b,O,T,c){const p=m("md-filled-tonal-button");return f(),i(p,{class:d(c.sizeClass)},{default:u(()=>[_(t.$slots,"default")]),_:3},8,["class"])}const s=g(r,[["render",B]]);r.__docgenInfo={displayName:"IOButtonTonal",exportName:"default",description:"",tags:{},props:[{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Buttons/IOButtonTonal.vue"]};const l="<IOButtonTonal :class=args.class :disabled=args.disabled>{{args.label}}</IOButtonTonal>",N={title:"UI/Atoms/Buttons/Tonal",component:s,tags:["autodocs"],render:t=>({components:{IOButtonTonal:s},setup(){return{args:t}},template:l}),args:{disabled:!1,label:"click me",class:"medium"},argTypes:{label:{control:{type:"text"}},class:{control:{type:"select"},options:["small","medium","large"]},onClick:{action:"Button clicked"}}},e={render:t=>({components:{IOButtonTonal:s},setup(){return{args:t}},template:l})};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOButtonTonal
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const U=["Default"];export{e as Default,U as __namedExportsOrder,N as default};
//# sourceMappingURL=tonal.stories-809233d6.js.map
