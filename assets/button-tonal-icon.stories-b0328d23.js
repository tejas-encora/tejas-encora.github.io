import"./filled-tonal-button-db3ccdff.js";import{r as i,c as u,w as p,o as d,b as m,a as f,n as I}from"./vue.esm-bundler-92f74987.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./events-897ffe23.js";import"./shared-elevation-styles.css-509bbf9d.js";import"./shared-styles.css-5fd34001.js";const l={name:"IOIconButtonTonal",props:{icon:{type:String,default:"circle-plus"}},computed:{iconClass(){return`fa-light fa-${this.icon}`}}};function _(t,B,b,O,T,r){const c=i("md-filled-tonal-button");return d(),u(c,null,{default:p(()=>[m(t.$slots,"default"),f("i",{class:I(r.iconClass),slot:"icon"},null,2)]),_:3})}const o=g(l,[["render",_]]);l.__docgenInfo={displayName:"IOIconButtonTonal",exportName:"default",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"circle-plus"'}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Buttons/IOIconButtonTonal.vue"]};const E={title:"UI/Atoms/Buttons/Tonal/With Icon",component:o,tags:["autodocs"],render:t=>({components:{IOIconButtonTonal:o},setup(){return{args:t}},template:'<IOIconButtonTonal v-bind="args">{{args.label}}</IOIconButtonElevated>'}),args:{disabled:!1,label:"Label",class:"medium",icon:"circle-plus"},argTypes:{label:{control:{type:"text"},description:"Button label"},class:{control:{type:"select"},description:"Button size",options:["small","medium","large"]},icon:{control:{type:"text"},description:"FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},disabled:"boolean"}},e={render:t=>({components:{IOIconButtonTonal:o},setup(){return{args:t}},template:'<IOIconButtonTonal icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonElevated>'})};var n,s,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOIconButtonTonal
    },
    setup() {
      return {
        args
      };
    },
    template: '<IOIconButtonTonal icon={{args.icon}} v-bind="args">{{args.label}}</IOIconButtonElevated>'
  })
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const N=["Default"];export{e as Default,N as __namedExportsOrder,E as default};
//# sourceMappingURL=button-tonal-icon.stories-b0328d23.js.map
