import{z as y,A as m,B as oe,g as l,F as ne,C as P,b as le,d as F,w as ie,o as C,f as de}from"./vue.esm-bundler-091b3824.js";import{I as ce}from"./IOTextField-d8ec63ae.js";import{_ as ue}from"./_plugin-vue_export-helper-c27b6911.js";import{m as me,b as pe,c as ge,d as be,e as he,f as fe,g as ve,u as Se,p as ye,h as Pe,i as Te,j as Ie,k as De,l as Ve,n as _e,o as B,q as E,r as G,s as N,V as ke}from"./VDataTable-c03d8838.js";import{p as we,g as Oe,a as xe,u as Fe}from"./index-8a999a19.js";const Ce=we({itemsLength:{type:[Number,String],required:!0},...me(),...pe(),...ge()},"VDataTableServer"),Be=Oe()({name:"VDataTableServer",props:Ce(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,r){let{attrs:n,slots:a}=r;const{groupBy:s}=be(e),{sortBy:t,multiSort:i,mustSort:d}=he(e),{page:c,itemsPerPage:p}=fe(e),v=y(()=>parseInt(e.itemsLength,10)),{columns:h,headers:f}=ve(e,{groupBy:s,showSelect:m(e,"showSelect"),showExpand:m(e,"showExpand")}),{items:u}=Se(e,h),{toggleSort:I}=ye({sortBy:t,multiSort:i,mustSort:d,page:c}),{opened:z,isGroupOpen:A,toggleGroup:K,extractRows:q}=Pe({groupBy:s,sortBy:t}),{pageCount:J,setItemsPerPage:M}=Te({page:c,itemsPerPage:p,itemsLength:v}),{flatItems:D}=Ie(u,s,z),{isSelected:W,select:Y,selectAll:Q,toggleSelect:X,someSelected:Z,allSelected:$}=De(e,{allItems:u,currentPage:u}),{isExpanded:ee,toggleExpand:ae}=Ve(e),V=y(()=>q(u.value));_e({page:c,itemsPerPage:p,sortBy:t,groupBy:s,search:m(e,"search")}),oe("v-data-table",{toggleSort:I,sortBy:t}),xe({VDataTableRows:{hideNoData:m(e,"hideNoData"),noDataText:m(e,"noDataText"),loading:m(e,"loading"),loadingText:m(e,"loadingText")}});const o=y(()=>({page:c.value,itemsPerPage:p.value,sortBy:t.value,pageCount:J.value,toggleSort:I,setItemsPerPage:M,someSelected:Z.value,allSelected:$.value,isSelected:W,select:Y,selectAll:Q,toggleSelect:X,isExpanded:ee,toggleExpand:ae,isGroupOpen:A,toggleGroup:K,items:V.value.map(S=>S.raw),internalItems:V.value,groupedItems:D.value,columns:h.value,headers:f.value}));Fe(()=>{const S=B.filterProps(e),te=E.filterProps(e),re=G.filterProps(e),se=N.filterProps(e);return l(N,P({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},se),{top:()=>{var g;return(g=a.top)==null?void 0:g.call(a,o.value)},default:()=>{var g,_,k,w,O,x;return a.default?a.default(o.value):l(ne,null,[(g=a.colgroup)==null?void 0:g.call(a,o.value),l("thead",{class:"v-data-table__thead",role:"rowgroup"},[l(E,P(te,{sticky:e.fixedHeader}),a)]),(_=a.thead)==null?void 0:_.call(a,o.value),l("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(k=a["body.prepend"])==null?void 0:k.call(a,o.value),a.body?a.body(o.value):l(G,P(n,re,{items:D.value}),a),(w=a["body.append"])==null?void 0:w.call(a,o.value)]),(O=a.tbody)==null?void 0:O.call(a,o.value),(x=a.tfoot)==null?void 0:x.call(a,o.value)])},bottom:()=>a.bottom?a.bottom(o.value):l(B,S,{prepend:a["footer.prepend"]})})})}});const Ee=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22"}],Ge={async fetch({page:e,itemsPerPage:r,sortBy:n}){return new Promise(a=>{setTimeout(()=>{const s=(e-1)*r,t=s+r,i=Ee.slice();if(n.length){const c=n[0].key,p=n[0].order;i.sort((v,h)=>{const f=v[c],u=h[c];return p==="desc"?u-f:f-u})}const d=i.slice(s,t);a({items:d,total:i.length})},500)})}},H={name:"IODataTable",components:{IOTextField:ce},props:{hasSearch:{type:Boolean,default:!1}},computed:{isSearch(){return this.hasSearch}},data:()=>({itemsPerPage:5,headers:[{title:"Dessert (100g serving)",align:"start",sortable:!1,key:"name"},{title:"Calories",key:"calories",align:"end"},{title:"Fat (g)",key:"fat",align:"end"},{title:"Carbs (g)",key:"carbs",align:"end"},{title:"Protein (g)",key:"protein",align:"end"},{title:"Iron (%)",key:"iron",align:"end"}],serverItems:[],loading:!0,totalItems:0}),methods:{loadItems({page:e,itemsPerPage:r,sortBy:n}){this.loading=!0,Ge.fetch({page:e,itemsPerPage:r,sortBy:n}).then(({items:a,total:s})=>{this.serverItems=a,this.totalItems=s,this.loading=!1})}}};function Ne(e,r,n,a,s,t){const i=le("IOTextField");return C(),F(ke,{border:"","max-width":"80%",class:"mx-auto",hasSearch:t.isSearch},{default:ie(()=>[t.isSearch?(C(),F(i,{key:0,modelValue:e.search,"onUpdate:modelValue":r[0]||(r[0]=d=>e.search=d),label:"Search",class:"full-width","leading-icon":"",icon:"magnifying-glass",clear:""},null,8,["modelValue"])):de("",!0),l(Be,{"items-per-page":e.itemsPerPage,"onUpdate:itemsPerPage":r[1]||(r[1]=d=>e.itemsPerPage=d),headers:e.headers,"items-length":e.totalItems,items:e.serverItems,loading:e.loading,"item-value":"name",hasSearch:t.isSearch,"onUpdate:options":t.loadItems},null,8,["items-per-page","headers","items-length","items","loading","hasSearch","onUpdate:options"])]),_:1},8,["hasSearch"])}const T=ue(H,[["render",Ne]]);H.__docgenInfo={displayName:"IODataTable",exportName:"default",description:"",tags:{},props:[{name:"hasSearch",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/labs/DataTable/IODataTableSS.vue"]};const j="<IODataTableSS :hasSearch=args.hasSearch />",Le={title:"UI/Labs/DataTables/Server Side",component:T,render:e=>({components:{IODataTableSS:T},setup(){return{args:e}},template:j}),args:{hasSearch:!1},argTypes:{hasSearch:{controls:{type:"boolean"},description:"Show search"}}},b={render:e=>({components:{IODataTableSS:T},setup(){return{args:e}},template:j})};var L,R,U;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IODataTableSS
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(U=(R=b.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const Re=["Default"],Ke=Object.freeze(Object.defineProperty({__proto__:null,Default:b,__namedExportsOrder:Re,default:Le},Symbol.toStringTag,{value:"Module"}));export{Ke as D};
//# sourceMappingURL=datatabless.stories-b6149c35.js.map
