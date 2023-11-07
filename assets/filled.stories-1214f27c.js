import{r as u,c as d,w as p,n as m,o as f,b as _}from"./vue.esm-bundler-92f74987.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./filled-button-7c982f56.js";const r={name:"IOButtonFilled",props:{class:{type:String,default:""}},computed:{btnStatus(){return`${this.class}`},sizeClass(){return`${this.size}`}}};function b(e,z,O,F,I,o){const i=u("md-filled-button");return f(),d(i,{class:m(o.btnStatus),size:o.sizeClass},{default:p(()=>[_(e.$slots,"default")]),_:3},8,["class","size"])}const s=g(r,[["render",b]]);r.__docgenInfo={displayName:"IOButtonFilled",exportName:"default",description:"",tags:{},props:[{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Buttons/IOButtonFilled.vue"]};const c="<IOButtonFilled :size=args.size :class=args.class :disabled=args.disabled>{{args.label}}</IOButtonFilled>",B={title:"UI/Atoms/Buttons/Filled",component:s,tags:["autodocs"],render:e=>({components:{IOButtonFilled:s},setup(){return{args:e}},template:c}),args:{disabled:!1,label:"click me",class:"primary",size:"medium"},argTypes:{label:{control:{type:"text"}},class:{control:{type:"select"},options:["success","error","warning","info","primary"]},size:{control:{type:"select"},options:["small","medium","large"]},onClick:{action:"Button clicked"}}},t={render:e=>({components:{IOButtonFilled:s},setup(){return{args:e}},template:c})};var a,n,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOButtonFilled
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const y=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:y,default:B},Symbol.toStringTag,{value:"Module"}));export{h as B,t as D};
//# sourceMappingURL=filled.stories-1214f27c.js.map
