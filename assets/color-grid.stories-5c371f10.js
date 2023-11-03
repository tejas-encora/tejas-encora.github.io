import{_ as x}from"./iframe-b850c504.js";import{d as o,a as t,F as _,h,o as r,t as n,i as m,p as S,g as C}from"./vue.esm-bundler-92f74987.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"../sb-preview/runtime.js";const v={name:"TonalPalette",data(){return{colorVariables:{}}},computed:{primaryPalette(){return this.getFilteredPalette("palette-primary")},secondaryPalette(){return this.getFilteredPalette("palette-secondary")},neutralPalette(){return this.getFilteredPalette("palette-neutral")},neutralVariantPalette(){return this.getFilteredPalette("palette-neutral-variant")}},methods:{getFilteredPalette(s){return Object.entries(this.colorVariables).reduce((i,[c,u])=>(c.includes(s)&&(i[c]=u),i),{})}},async created(){const{default:s}=await x(()=>Promise.resolve({}),["./tokens-6c31ae82.css"],import.meta.url),i=/--[\w-]+:[^;]+/g,c=s.match(i);if(c){const u={};c.forEach(y=>{const[d,e]=y.split(":");u[d.trim()]=e.trim()}),this.colorVariables=u}}},a=s=>(S("data-v-f11f9aa6"),s=s(),C(),s),w=a(()=>t("h1",null,"Tonal Palette",-1)),F={class:"color-grid"},G=a(()=>t("h3",null,"Primary",-1)),V={class:"color-grid"},I=a(()=>t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Swatch"),t("th",null,"Hex")])],-1)),T={class:"color-name"},k={class:"color-value"},E=a(()=>t("h3",null,"Secondary Palette",-1)),D={class:"color-grid"},H=a(()=>t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Swatch"),t("th",null,"Hex")])],-1)),B={class:"color-name"},O={class:"color-value"},L=a(()=>t("h3",null,"Neutral Palette",-1)),U={class:"color-grid"},j=a(()=>t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Swatch"),t("th",null,"Hex")])],-1)),z={class:"color-name"},A={class:"color-value"},R=a(()=>t("h3",null,"Neutral Variant Palette",-1)),q={class:"color-grid"},J=a(()=>t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Swatch"),t("th",null,"Hex")])],-1)),K={class:"color-name"},M={class:"color-value"};function Q(s,i,c,u,y,d){return r(),o("div",null,[w,t("div",F,[G,t("div",V,[t("table",null,[I,t("tbody",null,[(r(!0),o(_,null,h(d.primaryPalette,(e,l)=>(r(),o("tr",{key:l},[t("td",T,n(l),1),t("td",{class:"color-sample",style:m({backgroundColor:e})},null,4),t("td",k,n(e),1)]))),128))])])]),E,t("div",D,[t("table",null,[H,t("tbody",null,[(r(!0),o(_,null,h(d.secondaryPalette,(e,l)=>(r(),o("tr",{key:l},[t("td",B,n(l),1),t("td",{class:"color-sample",style:m({backgroundColor:e})},null,4),t("td",O,n(e),1)]))),128))])])]),L,t("div",U,[t("table",null,[j,t("tbody",null,[(r(!0),o(_,null,h(d.neutralPalette,(e,l)=>(r(),o("tr",{key:l},[t("td",z,n(l),1),t("td",{class:"color-sample",style:m({backgroundColor:e})},null,4),t("td",A,n(e),1)]))),128))])])]),R,t("div",q,[t("table",null,[J,t("tbody",null,[(r(!0),o(_,null,h(d.neutralPalette,(e,l)=>(r(),o("tr",{key:l},[t("td",K,n(l),1),t("td",{class:"color-sample",style:m({backgroundColor:e})},null,4),t("td",M,n(e),1)]))),128))])])])])])}const g=N(v,[["render",Q],["__scopeId","data-v-f11f9aa6"]]);v.__docgenInfo={displayName:"TonalPalette",exportName:"default",description:"",tags:{},sourceFiles:["/Users/tmonteverdi/Sites/localhost/material-test/src/stories/ColorGrid.vue"]};const $={title:"Styles/Colors/Tonal Palette",component:g,tags:["autodocs"],render:()=>({components:{ColorGrid:g},template:"<ColorGrid />"}),parameters:{docs:{description:{component:"Use color to create meaningful experiences while also expressing hierarchy, state, and brand identity"}}}},p={render:()=>({components:{ColorGrid:g},template:"<ColorGrid/>"})};var P,f,b;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ColorGrid
    },
    template: '<ColorGrid/>'
  })
}`,...(b=(f=p.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const tt=["Default"];export{p as Default,tt as __namedExportsOrder,$ as default};
//# sourceMappingURL=color-grid.stories-5c371f10.js.map
