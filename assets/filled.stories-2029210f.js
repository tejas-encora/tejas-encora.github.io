import{r as i,c as u,w as d,n as p,o as m,b as g}from"./vue.esm-bundler-92f74987.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./filled-button-022c7403.js";import"./events-897ffe23.js";import"./shared-elevation-styles.css-509bbf9d.js";import"./shared-styles.css-5fd34001.js";const l={name:"IOButtonFilled",props:{class:{type:String,default:""}},computed:{btnStatus(){return`${this.class}`}}};function b(t,B,_,k,F,r){const c=i("md-filled-button");return m(),u(c,{class:p(r.btnStatus)},{default:d(()=>[g(t.$slots,"default")]),_:3},8,["class"])}const s=f(l,[["render",b]]);l.__docgenInfo={displayName:"IOButtonFilled",exportName:"default",description:"",tags:{},props:[{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Buttons/IOButtonFilled.vue"]};const C={title:"UI/Atoms/Buttons/Filled",component:s,tags:["autodocs"],render:t=>({components:{IOButtonFilled:s},setup(){return{args:t}},template:'<IOButtonFilled v-bind="args" status={{args.status}}>{{args.label}}</IOButtonFilled>'}),args:{disabled:!1,label:"click me",class:""},argTypes:{label:{control:{type:"text"}},class:{control:{type:"select"},options:["success","error","warning","info"]},onClick:{action:"Button clicked"}},parameters:{docs:{description:{component:"Buttons help people take actions, such as sending an email, sharing a document, or liking a comment."}}}},e={args:{disabled:!1,label:"click me",class:""},argTypes:{label:{control:{type:"text"},description:"Button label"},class:{control:{type:"select"},options:["success","error","warning","info"]},onClick:{action:"Button clicked"}},render:t=>({components:{IOButtonFilled:s},setup(){return{args:t}},template:'<IOButtonFilled v-bind="args" status={{args.status}}>{{args.label}}</IOButtonFilled>'})};var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'click me',
    class: ''
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
        type: 'select'
      },
      options: ['success', 'error', 'warning', 'info']
    },
    onClick: {
      action: 'Button clicked'
    }
  },
  render: args => ({
    components: {
      IOButtonFilled
    },
    setup() {
      return {
        args
      };
    },
    template: '<IOButtonFilled v-bind="args" status={{args.status}}>{{args.label}}</IOButtonFilled>'
  })
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,C as default};
//# sourceMappingURL=filled.stories-2029210f.js.map
