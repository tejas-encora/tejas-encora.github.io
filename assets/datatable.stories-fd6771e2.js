import{m as l,p as S,b as g,d,w as T,o as h,f as D,g as O}from"./vue.esm-bundler-091b3824.js";import{I as y}from"./IOTextField-d8ec63ae.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{V as w,a as x}from"./VDataTable-c03d8838.js";const u={name:"IODataTable",components:{IOTextField:y},props:{hasSearch:{type:Boolean,default:!1}},computed:{isSearch(){return this.hasSearch}},setup(){const e=l(""),r=l([]);return S(async()=>{const c="https://the-one-api.dev/v2/character",a="rwlpOJMKDeangwftjVsA";try{const t=await fetch(c,{headers:{Authorization:`Bearer ${a}`}});if(!t.ok)throw new Error("Failed to fetch");const o=await t.json();r.value=o.docs}catch(t){console.error(t)}}),{search:e,characters:r}}};function v(e,r,c,a,t,o){const b=g("IOTextField");return h(),d(w,{border:"","max-width":"80%",class:"mx-auto",hasSearch:o.isSearch},{default:T(()=>[o.isSearch?(h(),d(b,{key:0,modelValue:a.search,"onUpdate:modelValue":r[0]||(r[0]=_=>a.search=_),label:"Search",class:"full-width","leading-icon":"",icon:"magnifying-glass",clear:""},null,8,["modelValue"])):D("",!0),O(x,{headers:e.headers,items:a.characters,search:a.search,class:"zebra"},null,8,["headers","items","search"])]),_:1},8,["hasSearch"])}const n=I(u,[["render",v]]);u.__docgenInfo={displayName:"IODataTable",exportName:"default",description:"",tags:{},props:[{name:"hasSearch",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/labs/DataTable/IODataTable.vue"]};const f="<IODataTable :hasSearch=args.hasSearch />",V={title:"UI/Labs/DataTables",component:n,render:e=>({components:{IODataTable:n},setup(){return{args:e}},template:f}),args:{hasSearch:!1},argTypes:{hasSearch:{controls:{type:"boolean"},description:"Show search"}}},s={render:e=>({components:{IODataTable:n},setup(){return{args:e}},template:f})};var p,i,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IODataTable
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const k=["Default"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:k,default:V},Symbol.toStringTag,{value:"Module"}));export{N as D};
//# sourceMappingURL=datatable.stories-fd6771e2.js.map
