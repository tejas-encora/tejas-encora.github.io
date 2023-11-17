import{r as l,c as d,w as m,o as g,a as u,n as _}from"./vue.esm-bundler-7b6842b6.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import"./assist-chip-8fb16d82.js";import"./delegate-169a0fe1.js";import"./elevation-dd730b41.js";import"./shared-styles.css-57df1afd.js";import"./ripple-82f18c17.js";import"./elevated-styles.css-7cf113a2.js";const i={name:"IOChipAssistSvg",props:{src:{type:String}},computed:{imgSrc(){return`${this.src}`},isElevated(){return this.elevated}}},h=["src"];function f(e,C,S,I,b,r){const p=l("md-assist-chip");return g(),d(p,null,{default:m(()=>[u("img",{slot:"icon",src:r.imgSrc,alt:"",class:_({elevated:r.isElevated})},null,10,h)]),_:1})}const t=v(i,[["render",f]]);i.__docgenInfo={displayName:"IOChipAssistSvg",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipAssistSvg.vue"]};const c="<IOChipAssistSvg :label=args.label :src=args.src :elevated=args.elevated :disabled=args.disabled />",$={title:"UI/Atoms/Chips/Assist/Svg",component:t,tags:["autodocs"],render:e=>({components:{IOChipAssistSvg:t},setup(){return{args:e}},template:c}),args:{label:"Leading Icon",src:"IO.svg",elevated:!1,disabled:!1},argTypes:{label:{control:{type:"text"}},elevated:{control:{type:"boolean"}},src:{control:{type:"text"},description:"Add SVG File"}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},s={render:e=>({components:{IOChipAssistSvg:t},setup(){return{args:e}},template:c})};var o,a,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipAssistSvg
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const w=["Default"];export{s as Default,w as __namedExportsOrder,$ as default};
//# sourceMappingURL=assist-chip-svg.stories-dd2c8b03.js.map
