import{v as c,x as v,p as D,j as w,y as T,t as I,d as O,z as V,w as m,o as B,f as M,n as k,g as A}from"./vue.esm-bundler-488J0-Su.js";import{V as N}from"./VDataTable-mWlZlUfV.js";const f={__name:"IODataTable",props:{selected:Array,hasSearch:{type:Boolean,default:!1},items:{type:Array,required:!0},loading:{type:Boolean,default:!1},headers:{type:Array},density:{type:String,default:"default"},showSelect:{type:Boolean,default:!1},selectedItems:{type:Array}},emits:["selected-update"],setup(e,{emit:a}){const h=e,b=c("");v(()=>h.hasSearch);const n=c([]);function g(){console.log(n)}return(d,o)=>(B(),D("div",null,[w("p",null,"Selected: "+T(JSON.stringify(n.value)),1),I(N,{ref:"myTable",headers:e.headers,items:e.items,search:b.value,loading:e.loading,"items-per-page":-1,"show-select":e.showSelect,density:e.density,modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=t=>n.value=t),"item-key":"id",onInput:o[1]||(o[1]=t=>g())},O({bottom:m(()=>[]),_:2},[V(Object.keys(d.$slots),t=>({name:t,fn:m(S=>[M(d.$slots,t,k(A(S)))])}))]),1032,["headers","items","search","loading","show-select","density","modelValue"])]))}},r=f;f.__docgenInfo={exportName:"default",displayName:"IODataTable",description:"",tags:{},props:[{name:"selected",type:{name:"array"}},{name:"hasSearch",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"items",type:{name:"array"},required:!0},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"headers",type:{name:"array"}},{name:"density",type:{name:"string"},defaultValue:{func:!1,value:'"default"'}},{name:"showSelect",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selectedItems",type:{name:"array"}}],events:[{name:"selected-update"}],slots:[{name:"slot",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/labs/DataTable/IODataTable.vue"]};const y='<IODataTable :hasSearch=args.hasSearch :items="mockData" class="zebra" :density=args.density :show-select=args.showSelect />',l=[];function j(){const e=["Aragorn","Legolas","Gimli","Frodo","Samwise","Gandalf","Bilbo","Gollum","Sauron","Galadriel","Boromir","Merry","Pippin","Eowyn","Faramir","Theoden","Saruman","Elrond","Arwen","Celeborn"],a=Math.floor(Math.random()*e.length);return e[a]}function x(e,a){return Math.floor(Math.random()*(a-e+1))+e}for(let e=0;e<20;e++){const a={name:`${j()}`,race:Math.random()<.5?"Human":"Elf",gender:Math.random()<.5?"Male":"Female",birth:`TA ${x(1e3,3e3)}`};l.push(a)}const E={title:"UI/Labs/DataTables",component:r,render:e=>({components:{IODataTable:r},setup(){return{args:e,mockData:l}},template:y}),args:{hasSearch:!1,density:"compact",showSelect:!1},argTypes:{hasSearch:{control:{type:"boolean"},description:"Show search"},density:{control:{type:"select"},description:"Adjusts the vertical height of the table rows",options:["default","comfortable","compact"]},showSelect:{control:{type:"boolean"},description:"Turns checkboxes on/off"}}},s={render:e=>({components:{IODataTable:r},setup(){return{args:e,mockData:l}},template:y})};var i,u,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      IODataTable
    },
    setup() {
      return {
        args,
        mockData
      };
    },
    template
  })
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const $=["Default"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:$,default:E},Symbol.toStringTag,{value:"Module"}));export{G as D};
