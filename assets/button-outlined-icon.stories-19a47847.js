import"./filled-button-9e584669.js";import{r as i,c as u,w as p,o as d,b as m,a as f,n as I}from"./vue.esm-bundler-92f74987.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-d56dde3e.js";import"./shared-elevation-styles.css-cdb10bac.js";import"./shared-styles.css-c2704fcf.js";import"./form-submitter-62a5024b.js";import"./events-00ef5ad2.js";const r={name:"IOIconButtonOutline",props:{icon:{type:String,default:"circle-plus"}},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function g(t,b,_,B,x,l){const c=i("md-outlined-button");return d(),u(c,null,{default:p(()=>[m(t.$slots,"default"),f("i",{class:I(l.iconClass),slot:"icon"},null,2)]),_:3})}const n=O(r,[["render",g]]);r.__docgenInfo={displayName:"IOIconButtonOutline",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"circle-plus"'}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Buttons/IOIconButtonOutline.vue"]};const k={title:"UI/Atoms/Buttons/Outlined/With Icon",component:n,tags:["autodocs"],render:t=>({components:{IOIconButtonOutline:n},setup(){return{args:t}},template:'<IOIconButtonOutline label={{args.label}} v-bind="args"/>'}),args:{disabled:!1,label:"Label",class:"medium",icon:"circle-plus"},argTypes:{label:{control:{type:"text"},description:"Button label"},class:{control:{type:"select"},description:"Button size",options:["small","medium","large"]},icon:{control:{type:"text"},description:"FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},disabled:"boolean"}},e={render:t=>({components:{IOIconButtonOutline:n},setup(){return{args:t}},template:'<IOIconButtonOutline icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonOutline>'})};var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOIconButtonOutline
    },
    setup() {
      return {
        args
      };
    },
    template: '<IOIconButtonOutline icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonOutline>'
  })
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,k as default};
//# sourceMappingURL=button-outlined-icon.stories-19a47847.js.map
