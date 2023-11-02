import{r as c,c as d,w as i,o as m,b as u}from"./vue.esm-bundler-92f74987.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import"./elevated-button-92fe8891.js";import"./events-897ffe23.js";import"./shared-elevation-styles.css-509bbf9d.js";import"./shared-styles.css-5fd34001.js";const l={name:"IOButtonElevated"};function g(e,B,v,b,f,_){const r=c("md-elevated-button");return m(),d(r,null,{default:i(()=>[u(e.$slots,"default")]),_:3})}const n=p(l,[["render",g]]);l.__docgenInfo={displayName:"IOButtonElevated",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Buttons/IOButtonElevated.vue"]};const h={title:"UI/Atoms/Buttons/Elevated",component:n,tags:["autodocs"],render:e=>({components:{IOButtonElevated:n},setup(){return{args:e}},template:'<IOButtonElevated v-bind="args">{{args.label}}</IOButtonElevated>'}),args:{disabled:!1,label:"click me",class:"medium"},argTypes:{label:{control:{type:"text"}},class:{control:{type:"select"},options:["small","medium","large"]},onClick:{action:"Button clicked"}},parameters:{docs:{description:{component:"Buttons help people take actions, such as sending an email, sharing a document, or liking a comment."}}}},t={args:{disabled:!1,label:"click me",class:"medium"},argTypes:{label:{control:{type:"text"},description:"Button label"},class:{control:{type:"select",options:["small","medium","large"],defaultValue:"medium"},description:"Button size"},onClick:{action:"Button clicked"}},render:e=>({components:{IOButtonElevated:n},setup(){return{args:e}},template:'<IOButtonElevated v-bind="args">{{args.label}}</IOButtonElevated>'})};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'click me',
    class: 'medium'
  },
  argTypes: {
    label: {
      control: {
        type: 'text'
      },
      description: 'Button label'
    },
    class: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
        defaultValue: 'medium'
      },
      description: 'Button size'
    },
    onClick: {
      action: 'Button clicked'
    }
  },
  render: args => ({
    components: {
      IOButtonElevated
    },
    setup() {
      return {
        args
      };
    },
    template: '<IOButtonElevated v-bind="args">{{args.label}}</IOButtonElevated>'
  })
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,h as default};
//# sourceMappingURL=elevated.stories-dee0e98a.js.map
