import{b as _,f as a,l as o,n as l,o as n}from"./vue.esm-bundler-IQnt_YWr.js";/* empty css              */import{_ as i}from"./_plugin-vue_export-helper-x3n3nnut.js";const d={__name:"IOBody",props:{class:{type:String,default:"medium"}},setup(e){const s=_(()=>this.class);return(t,r)=>(n(),a("p",{class:l(s.value)},[o(t.$slots,"default")],2))}},v=d;d.__docgenInfo={exportName:"default",displayName:"IOBody",description:"",tags:{},props:[{name:"class",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Type/IOBody.vue"]};const m={name:"IOLink",props:{size:{type:String,default:""},computed:{sizeClass(){return`${this.size}`}}}};function I(e,s,t,r,p,c){return n(),a("a",{href:"#",class:l(e.sizeClass)},[o(e.$slots,"default",{},void 0,!0)],2)}const L=i(m,[["render",I],["__scopeId","data-v-3c95c763"]]);m.__docgenInfo={displayName:"IOLink",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"computed"}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Type/IOLink.vue"]};const u={name:"IOCaption"},y={class:"io-caption"};function $(e,s,t,r,p,c){return n(),a("p",y,[o(e.$slots,"default")])}const b=i(u,[["render",$]]);u.__docgenInfo={displayName:"IOCaption",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Type/IOCaption.vue"]};const f={name:"IOBody",props:{class:String,default:"medium"},computed:{sizeClass(){return`${this.class}`}}};function O(e,s,t,r,p,c){return n(),a("label",{class:l(c.sizeClass)},[o(e.$slots,"default")],2)}const z=i(f,[["render",O]]);f.__docgenInfo={displayName:"IOBody",exportName:"default",description:"",tags:{},props:[{name:"class",type:{name:"string"}},{name:"default",type:{name:"'medium'",func:!0}}],slots:[{name:"default"}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/components/Type/IOLabel.vue"]};export{v as I,L as a,z as b,b as c};