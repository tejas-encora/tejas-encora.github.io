import{_ as l}from"./iframe-243d916b.js";import{e as p,R as o,r as a,f as E,A as R,H as x,D}from"./index-05a43181.js";var c={},u=p;c.createRoot=u.createRoot,c.hydrateRoot=u.hydrateRoot;var n=new Map,y=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},_=async(e,t)=>{let r=await v(t);return new Promise(s=>{r.render(o.createElement(y,{callback:()=>s(null)},e))})},f=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},v=async e=>{let t=n.get(e);return t||(t=c.createRoot(e),n.set(e,t)),t},w={code:E,a:R,...x},g=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:t}},A=class{constructor(){this.render=async(e,t,r)=>{let s={...w,...t==null?void 0:t.components},i=D;return new Promise((m,d)=>{l(()=>import("./index-ba955b3c.js"),["./index-ba955b3c.js","./index-805807ed.js","./index-05a43181.js","./iframe-243d916b.js","./chunk-6P7RB4HF-c879cb99.js","./_commonjsHelpers-725317a4.js","./index-d37d4223.js","./index-f073aaf1.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:h})=>_(o.createElement(g,{showException:d,key:Math.random()},o.createElement(h,{components:s},o.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>m())})},this.unmount=e=>{f(e)}}};export{A as D,w as d};
//# sourceMappingURL=chunk-S4VUQJ4A-1f738f07.js.map
