import{r as l,c as m,w as d,o as g,a as u}from"./vue.esm-bundler-2440c5c9.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./assist-chip-bf3c40db.js";import"./delegate-169a0fe1.js";import"./elevation-dd730b41.js";import"./shared-styles.css-57df1afd.js";import"./ripple-82f18c17.js";const a={name:"IOChipAssistSvg",props:{src:{type:String}},computed:{imgSrc(){return`${this.src}`}}},h=["src"];function v(e,f,S,C,I,c){const i=l("md-assist-chip");return g(),m(i,null,{default:d(()=>[u("img",{slot:"icon",src:c.imgSrc,alt:""},null,8,h)]),_:1})}const s=_(a,[["render",v]]);a.__docgenInfo={displayName:"IOChipAssistSvg",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Chips/IOChipAssistSvg.vue"]};const p="<IOChipAssistSvg :label=args.label :src=args.src :elevated=args.elevated />",B={title:"UI/Atoms/Chips/Assist/Svg",component:s,tags:["autodocs"],render:e=>({components:{IOChipAssistSvg:s},setup(){return{args:e}},template:p}),args:{label:"Leading Icon",src:"IO.svg",elevated:!1},argTypes:{label:{control:{type:"text"}},elevated:{control:{type:"boolean"}},src:{control:{type:"text"},description:"Add SVG File"}},parameters:{docs:{description:{component:"Chips help people enter information, make selections, filter content, or trigger actions."}}}},t={render:e=>({components:{IOChipAssistSvg:s},setup(){return{args:e}},template:p})};var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IOChipAssistSvg
    },
    setup() {
      return {
        args
      };
    },
    template: template
  })
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,B as default};
//# sourceMappingURL=assist-chip-svg.stories-6559a2c1.js.map
