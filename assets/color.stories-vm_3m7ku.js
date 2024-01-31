import{p as C,f as r,m as l,z as c,F as D,t as p,o as s,A as g,g as b,b as S}from"./vue.esm-bundler-ogOaoeLG.js";import{_ as x}from"./_plugin-vue_export-helper-x3n3nnut.js";const h={class:"color-grid-container"},k={class:"copy-success-message"},G={class:"color-row"},N=["onMouseover","onClick"],O={class:"color-shade"},I={key:0,class:"color-hex-tooltip"},m={__name:"ColorGrid",props:{palettes:Object},setup(i){const E=C(null),f=C(""),v=n=>S(()=>{let F=Object.keys(n).map(o=>parseInt(o,10)).filter(o=>!isNaN(o));F.sort((o,e)=>o-e);const t=F.indexOf(0);return[...F.slice(t).reverse(),...F.slice(1,t+1)].map(String)}).value,y=async n=>{try{await navigator.clipboard.writeText(n),f.value="Color Copied!",setTimeout(()=>{f.value=""},2e3)}catch(F){console.error("Could not copy text: ",F)}};return(n,F)=>(s(),r("div",h,[l("div",k,c(f.value),1),(s(!0),r(D,null,p(i.palettes,(t,o)=>(s(),r("div",{key:o,class:"palette"},[l("h2",null,c(o),1),l("div",G,[(s(!0),r(D,null,p(v(t),e=>(s(),r("div",{key:e,class:"color-swatch",style:g({backgroundColor:t[e]}),onMouseover:d=>E.value=e,onMouseleave:F[0]||(F[0]=d=>E.value=null),onClick:d=>y(t[e])},[l("div",O,c(e),1),E.value===e?(s(),r("div",I,c(t[e]),1)):b("",!0)],44,N))),128))])]))),128))]))}},_=x(m,[["__scopeId","data-v-9e7db17f"]]);m.__docgenInfo={exportName:"default",displayName:"ColorGrid",description:"",tags:{},props:[{name:"palettes",type:{name:"object"}}],sourceFiles:["/Users/tmonteverdi/Sites/localhost/IO-Component-Library/src/stories/styles/ColorGrid.vue"]};const T={title:"Styles/Tonal Palettes",component:_},j=i=>({components:{ColorGrid:_},setup(){return{...i}},template:'<ColorGrid :palettes="palettes" />'}),a=j.bind({});a.args={palettes:{Primary:{100:"#ffffff",99:"#fffbff",95:"#f2eeff",90:"#e3dfff",80:"#c4c0ff",70:"#a5a1ff",60:"#8781fe",50:"#6d67e1",40:"#544dc7",30:"#3c32ae",20:"#231098",10:"#110068",0:"#000000",4:"#070042",5:"#09004a",6:"#0b0051",12:"#140074",17:"#1c0091",22:"#28189c",24:"#2d1fa0",25:"#2f23a2",35:"#483fba",87:"#d9d6ff",92:"#e9e5ff",94:"#efebff",96:"#f6f2ff",98:"#fcf8ff"},Secondary:{100:"#FFFFFF",99:"#F7FDFF",95:"#D3F7FF",90:"#A0EFFF",80:"#51D7EE",70:"#26BBD2",60:"#009FB3",50:"#008394",40:"#006876",30:"#004E59",20:"#00363E",10:"#001F25",0:"#000000",4:"#001114",5:"#001418",6:"#00161B",12:"#002429",17:"#002F36",22:"#003B43",24:"#004049",25:"#00424B",35:"#005B67",87:"#79EAFF",92:"#B6F2FF",94:"#CAF5FF",96:"#DDF9FF",98:"#EEFCFF"},Error:{100:"#FFFFFF",99:"#FFFBFC",95:"#FFEDEA",90:"#FFDAD6",80:"#FFB4AB",70:"#FFB4AB",60:"#FF5449",50:"#DE3730",40:"#BA1A1A",30:"#93000A",20:"#690005",10:"#410002",0:"#000000",4:"#280001",5:"#2D0001",6:"#310001",12:"#490002",17:"#5C0004",22:"#710005",24:"#790006",25:"#7E0007",35:"#A80710",87:"#FFCFC9",92:"#FFE2DE",94:"#FFE9E6",96:"#FFF0EE"},Warning:{100:"#FFFFFF",99:"#FFFBED",95:"#FFF1C6",90:"#FFE699",80:"#FFDA65",70:"#FFCA28",60:"#FFB300",50:"#F3A108",40:"#E08E00",30:"#B57200",20:"#845200",10:"#4D3103",0:"#000000",4:"#211500",5:"#2E1C00",6:"#3B2400",12:"#613D00",17:"#734800",22:"#9C6200",24:"#AB6B00",25:"#B27000",35:"#D68800",87:"#FFE187",92:"#FFE9A8",94:"#FFEDB8",96:"#FFF4D4",98:"#FFF9E5"},Success:{100:"#FFFFFF",99:"#F5FFF8",95:"#C1FFD3",90:"#91EEB7",80:"#68DB9B",70:"#34C27A",60:"#00A662",50:"#008950",40:"#006D3F",30:"#00522E",20:"#00391E",10:"#00210F",0:"#000000",4:"#001209",5:"#00170B",6:"#001A0C",12:"#002611",17:"#00301A",22:"#003D20",24:"#004526",25:"#004A29",35:"#005C33",87:"#78EBA7",92:"#9EF7C3",94:"#B5FFCB",96:"#D9FFE4",98:"#EBFFF1"},Informational:{100:"#FFFFFF",99:"#FCFCFF",95:"#EAF1FF",90:"#D1E4FF",80:"#9FCAFF",70:"#64AFFF",60:"#2B95EF",50:"#007ACD",40:"#0061A4",30:"#00497D",20:"#003258",10:"#001D36",0:"#000000",4:"#00101F",5:"#001426",6:"#00172B",12:"#002240",17:"#002B4D",22:"#003761",24:"#003D69",25:"#004270",35:"#00538F",87:"#C2DDFF",92:"#DBEAFF",94:"#E4EFFF",96:"#F0F5FF",98:"#F8F9FF"},Neutral:{100:"#FFFFFF",99:"#FAFCFC",95:"#EFF1F1",90:"#E1E3E3",80:"#C4C7C7",70:"#A9ACAC",60:"#8E9192",50:"#747878",40:"#5C5F5F",30:"#3D4345",20:"#202324",10:"#111414",0:"#ffffff",4:"#060808",5:"#0B0D0D",6:"#0D0F0F",12:"#16181A",17:"#1B1E1F",22:"#242829",24:"#2D3233",25:"#343A3B",35:"#494E4F",87:"#D7D9D9",92:"#E6E8E8",94:"#EBEDED",96:"#F5F7F7",98:"#F8FAFA"},"Neutral Variant":{100:"#FFFFFF",99:"#F9FBFC",95:"#F0F6FA",90:"#DCE4E9",80:"#C0C8CD",70:"#A4ACB1",60:"#8A9297",50:"#70787D",40:"#586064",30:"#40484C",20:"#11171A",10:"#000000",0:"#11171A",4:"#050708",5:"#090B0D",6:"#0C1012",12:"#141B1F",17:"#1E2426",22:"#272D30",24:"#30373B",25:"#363C40",35:"#4D575C",87:"#D2DBE0",92:"#E4EBF0",94:"#E9F0F5",96:"#F2F7FA",98:"#F8FAFA"}}};var u,B,A;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    ColorGrid
  },
  setup() {
    return {
      ...args
    };
  },
  template: '<ColorGrid :palettes="palettes" />'
})`,...(A=(B=a.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const M=["Default"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:M,default:T},Symbol.toStringTag,{value:"Module"}));export{P as C};
