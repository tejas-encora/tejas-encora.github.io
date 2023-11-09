import{r as i,b as d,d as p,w as m,n as f,o as _,e as g}from"./vue.esm-bundler-2440c5c9.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import"./filled-button-7c982f56.js";const r={name:"IOButtonFilled",props:{class:{type:String,default:""},size:{type:String,default:""},status:{type:String,default:""}},computed:{btnStatus(){return`${this.status}`},sizeClass(){return`${this.size}`},typeClass(){return`${this.class}`}}},b={class:"test"};function B(e,O,F,I,C,s){const c=i("md-filled-button");return _(),d("main",b,[p(c,{status:s.btnStatus,size:s.sizeClass,class:f(s.typeClass)},{default:m(()=>[g(e.$slots,"default")]),_:3},8,["status","size","class"])])}const a=y(r,[["render",B]]);r.__docgenInfo={displayName:"IOButtonFilled",exportName:"default",description:"",tags:{},props:[{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"status",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Buttons/IOButtonFilled.vue"]};const u="<IOButtonFilled :class=args.class :status=args.status :size=args.size :disabled=args.disabled>{{args.label}}</IOButtonFilled>",z={title:"UI/Atoms/Buttons/Filled",component:a,tags:["autodocs"],render:e=>({components:{IOButtonFilled:a},setup(){return{args:e}},template:u}),args:{disabled:!1,label:"click me",size:"medium",status:"none",class:"none"},argTypes:{label:{control:{type:"text"}},size:{control:{type:"select"},options:["small","medium","large"]},status:{control:{type:"select"},options:["none","success","error","warning","info"]},class:{control:{type:"select"},options:["none","primary","secondary"]},onClick:{action:"Button clicked"}}},t={render:e=>({components:{IOButtonFilled:a},setup(){return{args:e}},template:u})};var n,l,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const S=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:S,default:z},Symbol.toStringTag,{value:"Module"}));export{k as B,t as D};
//# sourceMappingURL=filled.stories-81c99ac0.js.map
