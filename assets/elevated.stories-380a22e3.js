import{r as c,c as i,w as d,o as m,b as u}from"./vue.esm-bundler-92f74987.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import"./elevated-button-5702029d.js";import"./delegate-d56dde3e.js";import"./shared-elevation-styles.css-cdb10bac.js";import"./shared-styles.css-c2704fcf.js";import"./form-submitter-62a5024b.js";import"./events-00ef5ad2.js";const l={name:"IOButtonElevated"};function g(e,B,v,b,f,_){const r=c("md-elevated-button");return m(),i(r,null,{default:d(()=>[u(e.$slots,"default")]),_:3})}const n=p(l,[["render",g]]);l.__docgenInfo={displayName:"IOButtonElevated",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Buttons/IOButtonElevated.vue"]};const $={title:"UI/Atoms/Buttons/Elevated",component:n,tags:["autodocs"],render:e=>({components:{IOButtonElevated:n},setup(){return{args:e}},template:'<IOButtonElevated v-bind="args">{{args.label}}</IOButtonElevated>'}),args:{disabled:!1,label:"click me",class:"medium"},argTypes:{label:{control:{type:"text"}},class:{control:{type:"select"},options:["small","medium","large"]},onClick:{action:"Button clicked"}},parameters:{docs:{description:{component:"Buttons help people take actions, such as sending an email, sharing a document, or liking a comment."}}}},t={args:{disabled:!1,label:"click me",class:"medium"},argTypes:{label:{control:{type:"text"},description:"Button label"},class:{control:{type:"select",options:["small","medium","large"],defaultValue:"medium"},description:"Button size"},onClick:{action:"Button clicked"}},render:e=>({components:{IOButtonElevated:n},setup(){return{args:e}},template:'<IOButtonElevated v-bind="args">{{args.label}}</IOButtonElevated>'})};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,$ as default};
//# sourceMappingURL=elevated.stories-380a22e3.js.map
