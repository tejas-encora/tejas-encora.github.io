import"./filled-button-9e584669.js";import{r as i,c as d,w as u,o as p,b as m,a as f,n as I}from"./vue.esm-bundler-92f74987.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./delegate-d56dde3e.js";import"./shared-elevation-styles.css-cdb10bac.js";import"./shared-styles.css-c2704fcf.js";import"./form-submitter-62a5024b.js";import"./events-00ef5ad2.js";const a={name:"IOIconButtonFilled",props:{icon:{type:String,default:"circle-plus"}},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function B(e,_,b,F,O,r){const c=i("md-filled-button");return p(),d(c,null,{default:u(()=>[m(e.$slots,"default"),f("i",{class:I(r.iconClass),slot:"icon"},null,2)]),_:3})}const o=g(a,[["render",B]]);a.__docgenInfo={displayName:"IOIconButtonFilled",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"circle-plus"'}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Buttons/IOIconButtonFilled.vue"]};const w={title:"UI/Atoms/Buttons/Filled/With Icon",component:o,tags:["autodocs"],render:e=>({components:{IOIconButtonFilled:o},setup(){return{args:e}},template:'<IOIconButtonFilled icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonFilled>'}),args:{disabled:!1,label:"Label",class:"medium",icon:"circle-plus"},argTypes:{label:{control:{type:"text"},description:"Button label"},class:{control:{type:"select"},description:"Button size",options:["small","medium","large"]},icon:{control:{type:"text"},description:"FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},disabled:"boolean"}},t={render:e=>({components:{IOIconButtonFilled:o},setup(){return{args:e}},template:'<IOIconButtonFilled icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonFilled>'})};var n,s,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOIconButtonFilled
    },
    setup() {
      return {
        args
      };
    },
    template: '<IOIconButtonFilled icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonFilled>'
  })
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,w as default};
//# sourceMappingURL=button-filled-icon.stories-bf7bf0c0.js.map
