import{_ as a}from"./iframe-435b5615.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-4b71422f.js"),["./DocsRenderer-PKQXORMH-4b71422f.js","./chunk-HLWAVYOI-d553ca20.js","./iframe-435b5615.js","./index-70d72742.js","./_commonjsHelpers-725317a4.js","./index-65ec3394.js","./index-356e4a49.js"],import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
