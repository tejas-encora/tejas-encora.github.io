import{m as p,b as u,w as g,o,p as m,s as f,q as _}from"./vue.esm-bundler-488J0-Su.js";import{_ as h}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./suggestion-chip-dW_dvgZ9.js";const i={name:"IOChipsuggestion",props:{leadingIcon:{type:Boolean,default:!1},icon:{type:String,default:"book-sparkles"},elevated:{type:Boolean,default:!1}},computed:{iconClass(){return`fa-light fa-${this.icon}`},isIconStart(){return this.leadingIcon},isElevated(){return this.elevated}}};function v(n,C,S,y,k,t){const d=p("md-suggestion-chip");return o(),u(d,{elevated:t.isElevated,"leading-icon":t.isIconStart},{default:g(()=>[t.isIconStart?(o(),m("i",{key:0,class:f(t.iconClass),slot:"icon","aria-hidden":"true"},null,2)):_("",!0)]),_:1},8,["elevated","leading-icon"])}const a=h(i,[["render",v],["__scopeId","data-v-0fdda9fe"]]);i.__docgenInfo={displayName:"IOChipsuggestion",exportName:"default",description:"",tags:{},props:[{name:"leadingIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:'"book-sparkles"'}},{name:"elevated",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipSuggest.vue"]};const c="<IOChipSuggest :label=args.label :leadingIcon=args.leadingIcon :icon=args.icon :elevated=args.elevated :disabled=args.disabled />",I={title:"UI/Atoms/Chips/Suggestion",component:a,render:n=>({components:{IOChipSuggest:a},setup(){return{args:n}},template:c}),args:{label:"Suggestion Chip",leadingIcon:!1,icon:"book-sparkles",elevated:!1,disabled:!1},argTypes:{leadingIcon:{control:{type:"boolean"},description:"Add leading icon"},icon:{control:{type:"text"},description:"Leading icon. FontAwesome icon name, i.e. circle-plus. No 'fa-' suffix is needed"},elevated:{control:{type:"boolean"},description:"Add elevation"}}},e={render:n=>({components:{IOChipSuggest:a},setup(){return{args:n}},template:c})};var s,l,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipSuggest
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const b=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:b,default:I},Symbol.toStringTag,{value:"Module"}));export{A as S};
