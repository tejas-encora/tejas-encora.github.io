import{r as i,c as u,w as d,n as p,o as m,b as g}from"./vue.esm-bundler-92f74987.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./filled-button-9e584669.js";const a={name:"IOButtonFilled",props:{class:{type:String,default:""}},computed:{btnStatus(){return`${this.class}`}}};function b(t,y,O,k,F,r){const c=i("md-filled-button");return m(),u(c,{class:p(r.btnStatus)},{default:d(()=>[g(t.$slots,"default")]),_:3},8,["class"])}const s=f(a,[["render",b]]);a.__docgenInfo={displayName:"IOButtonFilled",exportName:"default",description:"",tags:{},props:[{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/components/Buttons/IOButtonFilled.vue"]};const B={title:"UI/Atoms/Buttons/Filled",component:s,tags:["autodocs"],render:t=>({components:{IOButtonFilled:s},setup(){return{args:t}},template:'<IOButtonFilled v-bind="args" status={{args.status}}>{{args.label}}</IOButtonFilled>'}),args:{disabled:!1,label:"click me",class:""},argTypes:{label:{control:{type:"text"}},class:{control:{type:"select"},options:["success","error","warning","info"]},onClick:{action:"Button clicked"}},parameters:{docs:{description:{component:"Buttons help people take actions, such as sending an email, sharing a document, or liking a comment."}}}},e={args:{disabled:!1,label:"click me",class:""},argTypes:{label:{control:{type:"text"},description:"Button label"},class:{control:{type:"select"},options:["success","error","warning","info"]},onClick:{action:"Button clicked"}},render:t=>({components:{IOButtonFilled:s},setup(){return{args:t}},template:'<IOButtonFilled v-bind="args" status={{args.status}}>{{args.label}}</IOButtonFilled>'})};var n,o,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const _=["Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:_,default:B},Symbol.toStringTag,{value:"Module"}));export{x as B};
//# sourceMappingURL=filled.stories-fc567096.js.map
