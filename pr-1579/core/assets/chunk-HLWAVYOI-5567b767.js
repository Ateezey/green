import{_ as d}from"./iframe-d34f9325.js";import{g as p,R as o,r as a,h as E,A as R,H as x,i as y}from"./index-684e5915.js";var c={},u=p;c.createRoot=u.createRoot,c.hydrateRoot=u.hydrateRoot;var n=new Map,D=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},_=async(e,t)=>{let r=await v(t);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},e))})},g=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},v=async e=>{let t=n.get(e);return t||(t=c.createRoot(e),n.set(e,t)),t},w={code:E,a:R,...x},f=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},A=class{constructor(){this.render=async(e,t,r)=>{let s={...w,...t==null?void 0:t.components},i=y;return new Promise((m,l)=>{d(()=>import("./index-2b110598.js"),["./index-2b110598.js","./index-52e0c835.js","./index-684e5915.js","./iframe-d34f9325.js","./_commonjsHelpers-725317a4.js","./index-d38538b0.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:h})=>_(o.createElement(f,{showException:l,key:Math.random()},o.createElement(h,{components:s},o.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>m())})},this.unmount=e=>{g(e)}}};export{A as D,w as d};
