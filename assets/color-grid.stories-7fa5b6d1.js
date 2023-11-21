import{_ as C}from"./iframe-de8ee811.js";import{e as o,d as t,F as _,h as p,o as s,t as n,i as h,p as x,f as S}from"./vue.esm-bundler-d2b9ece6.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import"../sb-preview/runtime.js";const v={data(){return{colorVariables:{}}},computed:{primaryPalette(){return this.getFilteredPalette("palette-primary")},secondaryPalette(){return this.getFilteredPalette("palette-secondary")},neutralPalette(){return this.getFilteredPalette("palette-neutral")},neutralVariantPalette(){return this.getFilteredPalette("palette-neutral-variant")}},methods:{getFilteredPalette(e){return Object.entries(this.colorVariables).reduce((i,[c,u])=>(c.includes(e)&&(i[c]=u),i),{})}},async created(){const{default:e}=await C(()=>Promise.resolve({}),["./tokens-ea02bbb2.css"],import.meta.url),i=/--[\w-]+:[^;]+/g,c=e.match(i);if(c){const u={};c.forEach(y=>{const[d,l]=y.split(":");u[d.trim()]=l.trim()}),this.colorVariables=u}}},a=e=>(x("data-v-2f5390ff"),e=e(),S(),e),N=a(()=>t("h1",null,"Tonal Palette",-1)),w={class:"color-grid"},F=a(()=>t("h3",null,"Primary",-1)),I={class:"color-grid"},V=a(()=>t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Swatch"),t("th",null,"Hex")])],-1)),k={class:"color-name"},E={class:"color-value"},T=a(()=>t("h3",null,"Secondary Palette",-1)),D={class:"color-grid"},H=a(()=>t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Swatch"),t("th",null,"Hex")])],-1)),O={class:"color-name"},B={class:"color-value"},L=a(()=>t("h3",null,"Neutral Palette",-1)),U={class:"color-grid"},j=a(()=>t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Swatch"),t("th",null,"Hex")])],-1)),z={class:"color-name"},A={class:"color-value"},R=a(()=>t("h3",null,"Neutral Variant Palette",-1)),q={class:"color-grid"},J=a(()=>t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Swatch"),t("th",null,"Hex")])],-1)),K={class:"color-name"},M={class:"color-value"};function Q(e,i,c,u,y,d){return s(),o("div",null,[N,t("div",w,[F,t("div",I,[t("table",null,[V,t("tbody",null,[(s(!0),o(_,null,p(d.primaryPalette,(l,r)=>(s(),o("tr",{key:r},[t("td",k,n(r),1),t("td",{class:"color-sample",style:h({backgroundColor:l})},null,4),t("td",E,n(l),1)]))),128))])])]),T,t("div",D,[t("table",null,[H,t("tbody",null,[(s(!0),o(_,null,p(d.secondaryPalette,(l,r)=>(s(),o("tr",{key:r},[t("td",O,n(r),1),t("td",{class:"color-sample",style:h({backgroundColor:l})},null,4),t("td",B,n(l),1)]))),128))])])]),L,t("div",U,[t("table",null,[j,t("tbody",null,[(s(!0),o(_,null,p(d.neutralPalette,(l,r)=>(s(),o("tr",{key:r},[t("td",z,n(r),1),t("td",{class:"color-sample",style:h({backgroundColor:l})},null,4),t("td",A,n(l),1)]))),128))])])]),R,t("div",q,[t("table",null,[J,t("tbody",null,[(s(!0),o(_,null,p(d.neutralPalette,(l,r)=>(s(),o("tr",{key:r},[t("td",K,n(r),1),t("td",{class:"color-sample",style:h({backgroundColor:l})},null,4),t("td",M,n(l),1)]))),128))])])])])])}const g=G(v,[["render",Q],["__scopeId","data-v-2f5390ff"]]);v.__docgenInfo={exportName:"default",displayName:"ColorGrid",description:"",tags:{},sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/stories/ColorGrid.vue"]};const $={title:"Styles/Colors/Tonal Palette",component:g,tags:["autodocs"],render:e=>({components:{ColorGrid:g},setup(){return{args:e}},template:'<ColorGrid tone={{arg.tone}} v-bind="args"/>'}),args:{},argTypes:{tone:{control:{type:"select"},options:["primary","secondary"]},render:e=>({components:g,setup(){return{args:e}},template:"<ColorGrid tone={{arg.tone}}/>"})},parameters:{docs:{description:{component:"Use color to create meaningful experiences while also expressing hierarchy, state, and brand identity"}}}},m={render:e=>({components:{ColorGrid:g},setup(){return{args:e}},template:"<ColorGrid/>"})};var f,P,b;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ColorGrid
    },
    setup() {
      return {
        args
      };
    },
    template: '<ColorGrid/>'
  })
}`,...(b=(P=m.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};const tt=["Default"];export{m as Default,tt as __namedExportsOrder,$ as default};
//# sourceMappingURL=color-grid.stories-7fa5b6d1.js.map
