import"./elevated-button-92fe8891.js";import{r as i,c as d,w as u,o as p,b as m,a as I,n as f}from"./vue.esm-bundler-92f74987.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import"./events-897ffe23.js";import"./shared-elevation-styles.css-509bbf9d.js";import"./shared-styles.css-5fd34001.js";const l={name:"IOIconButtonElevated",props:{icon:{type:String,default:"circle-plus"}},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function g(e,B,_,b,E,r){const c=i("md-elevated-button");return p(),d(c,null,{default:u(()=>[m(e.$slots,"default"),I("i",{class:f(r.iconClass),slot:"icon"},null,2)]),_:3})}const o=v(l,[["render",g]]);l.__docgenInfo={displayName:"IOIconButtonElevated",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"circle-plus"'}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Buttons/IOIconButtonElevated.vue"]};const N={title:"UI/Atoms/Buttons/Elevated/With Icon",component:o,tags:["autodocs"],render:e=>({components:{IOIconButtonElevated:o},setup(){return{args:e}},template:'<IOIconButtonElevated v-bind="args">{{args.label}}</IOIconButtonElevated>'}),args:{disabled:!1,label:"Label",class:"medium",icon:"circle-plus"},argTypes:{label:{control:{type:"text"},description:"Button label"},class:{control:{type:"select"},description:"Button size",options:["small","medium","large"]},icon:{control:{type:"text"},description:"FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},disabled:"boolean"}},t={render:e=>({components:{IOIconButtonElevated:o},setup(){return{args:e}},template:'<IOIconButtonElevated icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonElevated>'})};var n,s,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOIconButtonElevated
    },
    setup() {
      return {
        args
      };
    },
    template: '<IOIconButtonElevated icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonElevated>'
  })
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,N as default};
//# sourceMappingURL=button-elevated-icon.stories-112dfdb8.js.map
