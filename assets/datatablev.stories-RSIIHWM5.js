import"./IoTextField-dueXtMui.js";import{B as l,v as T,E as _,t,D as h,u as pe,l as he,b as fe,w as be,o as ge}from"./vue.esm-bundler-ofI8F5YT.js";import{_ as ve}from"./_plugin-vue_export-helper-x3n3nnut.js";import{V as ye}from"./VCard-6ePCnl9L.js";import{a as Te,s as Ve,t as Se,c as De,d as Ie,f as xe,u as we,v as _e,p as Oe,g as Be,w as Pe,i as ke,j as Re,k as Fe,l as Ee,o as O,q as B,r as P,x as Ge}from"./VDataTable-gDUBpWO5.js";import{m as Ce,u as Ne,a as Ue}from"./VSelect-_h41vmP2.js";import{p as He,g as je,a as ze,u as Ae,c as V}from"./index-P98cK3iQ.js";const Le=He({...Te(),...Ve(),...Ce(),...Se()},"VDataTableVirtual"),qe=je()({name:"VDataTableVirtual",props:Le(),emits:{"update:modelValue":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,c){let{attrs:f,slots:a}=c;const{groupBy:u}=De(e),{sortBy:o,multiSort:b,mustSort:g}=Ie(e),{columns:i,headers:C,sortFunctions:N,filterFunctions:U}=xe(e,{groupBy:u,showSelect:l(e,"showSelect"),showExpand:l(e,"showExpand")}),{items:H}=we(e,i),D=l(e,"search"),{filteredItems:j}=_e(e,H,D,{transform:r=>r.columns,customKeyFilter:U}),{toggleSort:z}=Oe({sortBy:o,multiSort:b,mustSort:g}),{sortByWithGroups:A,opened:L,extractRows:q,isGroupOpen:K,toggleGroup:M}=Be({groupBy:u,sortBy:o}),{sortedItems:W}=Pe(e,j,A,N),{flatItems:v}=ke(W,u,L),m=T(()=>q(v.value)),{isSelected:J,select:Q,selectAll:X,toggleSelect:Y,someSelected:Z,allSelected:$}=Re(e,{allItems:m,currentPage:m}),{isExpanded:ee,toggleExpand:ae}=Fe(e),{containerRef:te,markerRef:se,paddingTop:re,paddingBottom:le,computedItems:oe,handleItemResize:ne,handleScroll:ue,handleScrollend:de}=Ne(e,v),ce=T(()=>oe.value.map(r=>r.raw));Ee({sortBy:o,page:_(1),itemsPerPage:_(-1),groupBy:u,search:D}),ze({VDataTableRows:{hideNoData:l(e,"hideNoData"),noDataText:l(e,"noDataText"),loading:l(e,"loading"),loadingText:l(e,"loadingText")}});const p=T(()=>({sortBy:o.value,toggleSort:z,someSelected:Z.value,allSelected:$.value,isSelected:J,select:Q,selectAll:X,toggleSelect:Y,isExpanded:ee,toggleExpand:ae,isGroupOpen:K,toggleGroup:M,items:m.value.map(r=>r.raw),internalItems:m.value,groupedItems:v.value,columns:i.value,headers:C.value}));Ae(()=>{const r=O.filterProps(e),ie=B.filterProps(e),me=P.filterProps(e);return t(P,h({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},me),{top:()=>{var s;return(s=a.top)==null?void 0:s.call(a,p.value)},wrapper:()=>{var s,I;return t("div",{ref:te,onScrollPassive:ue,onScrollend:de,class:"v-table__wrapper",style:{height:V(e.height)}},[t("table",null,[t("thead",null,[t(O,h(r,{sticky:e.fixedHeader}),a)]),t("tbody",null,[t("tr",{ref:se,style:{height:V(re.value),border:0}},[t("td",{colspan:i.value.length,style:{height:0,border:0}},null)]),(s=a["body.prepend"])==null?void 0:s.call(a,p.value),t(B,h(f,ie,{items:ce.value}),{...a,item:n=>t(Ue,{key:n.internalItem.index,renderless:!0,"onUpdate:height":y=>ne(n.internalItem.index,y)},{default:y=>{var w;let{itemRef:x}=y;return((w=a.item)==null?void 0:w.call(a,{...n,itemRef:x}))??t(Ge,h(n.props,{ref:x,key:n.internalItem.index,index:n.internalItem.index}),a)}})}),(I=a["body.append"])==null?void 0:I.call(a,p.value),t("tr",{style:{height:V(le.value),border:0}},[t("td",{colspan:i.value.length,style:{height:0,border:0}},null)])])])])},bottom:()=>{var s;return(s=a.bottom)==null?void 0:s.call(a,p.value)}})})}}),E={name:"IODataTableV",components:["IOTextField"],props:{items:{type:Array,default:()=>[]},hasSearch:{type:Boolean,default:!1}},computed:{isSearch(){return this.hasSearch}},setup(){return{search:pe("")}}};function Ke(e,c,f,a,u,o){const b=he("IOTextField");return ge(),fe(ye,{border:"","max-width":"80%",class:"mx-auto",hasSearch:o.isSearch},{default:be(()=>[t(b,{modelValue:a.search,"onUpdate:modelValue":c[0]||(c[0]=g=>a.search=g),label:"Search",class:"full-width","leading-icon":"",icon:"magnifying-glass",clear:""},null,8,["modelValue"]),t(qe,{headers:e.headers,items:f.items,height:"400",class:"zebra","item-value":"name"},null,8,["headers","items"])]),_:1},8,["hasSearch"])}const S=ve(E,[["render",Ke]]);E.__docgenInfo={displayName:"IODataTableV",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"hasSearch",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/labs/DataTable/IODataTableV.vue"]};const G="<IODataTableV :hasSearch=args.hasSearch />",Me={title:"UI/Labs/DataTables/Virtual",component:S,render:e=>({components:{IODataTableV:S},setup(){return{args:e}},template:G}),args:{hasSearch:!1},argTypes:{hasSearch:{controls:{type:"boolean"},description:"Show search"}}},d={render:e=>({components:{IODataTableV:S},setup(){return{args:e}},template:G})};var k,R,F;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IODataTableV
    },
    setup() {
      return {
        args
      };
    },
    template
  })
}`,...(F=(R=d.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};const We=["Default"],aa=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:We,default:Me},Symbol.toStringTag,{value:"Module"}));export{aa as D};
