import{j as e}from"./jsx-runtime-CqJPrSF5.js";import{u as m}from"./index-nS26CHL2.js";import"./chunk-HLWAVYOI-BAsY7OlM.js";import{am as g,af as j,ae as v}from"./index-_kPw9u2O.js";import{G as w}from"./index-Df9so8jS.js";import"./flex-Dqu_61Am.js";import"./card-CxeIzv-g.js";import"./badge-g1Dve2t-.js";import"./button-DgmdEmH6.js";import"./dropdown-R8T6MHfy.js";import"./fab-TMsT-gHM.js";import"./datepicker-B_Edh2SR.js";import"./input-CnUDhBEV.js";import"./mask-bMgt5t7j.js";import"./textarea-Cz5U6ugd.js";import"./text-B5qbiuOi.js";import"./menu-button-BkX7jIiw.js";import"./popover-Cb77Ibk0.js";import"./context-menu-Bd-qO41E.js";import"./coachmark-DcgDzQly.js";import"./segmented-control-DofGhTiv.js";import"./filter-chips-Dt4MZoM9.js";import"./divider-HwxBqGCC.js";import"./brand-seb-CuFxSwSg.js";import"./credit-card-B33vY-jb.js";import"./rocket-CDPinzQi.js";import"./magnifying-glass-CtkNcHyg.js";import"./chevron-bottom-B2grFhG4.js";import"./chevron-right-BDfeV3uD.js";import"./plus-small-DQkq2SC_.js";import"./signal-BaOMB4cz.js";import"./iframe-BrRSbErN.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./gds-element-QykLKB9o.js";import"./lit-element-BoQqPHl6.js";import"./tokens.style-DuOE18tp.js";import"./style-expression-property-BArfVZRo.js";import"./container-DU-PERvo.js";import"./static-C_6dgFWo.js";import"./query-p8xgzTDt.js";import"./when-BxLAFfhK.js";import"./if-defined-OiR-h1RO.js";import"./class-map-BBGuaYF3.js";import"./directive-Ctav8iJK.js";import"./constrain-slots-I5VCMCIw.js";import"./transitional-styles-C6IQsa0n.js";import"./runtime-CMQcyTl6.js";import"./watch-tFciLXSI.js";import"./query-async-MEroNOeJ.js";import"./icon-CLnfBo7j.js";import"./checkmark-6gwzaqWb.js";import"./ref-Bq52Xjdl.js";import"./async-directive-DPLqQocF.js";import"./directive-helpers-8zWUTkHM.js";import"./menu-heading-B4CEI14V.js";import"./backdrop-t8AW8dOa.js";import"./until-BfWLtGmt.js";import"./attribute-converters-CdI0trPX.js";import"./calendar-DZnW7CMA.js";import"./calendar-DLsDsN5f.js";import"./choose-Dh3k58u9.js";import"./cross-small-Ri7UBA-D.js";import"./triangle-exclamation-DWSOKNHY.js";import"./floating-ui.dom-DaFISw-x.js";import"./resize-observer-B9k8v2TZ.js";const{STORY_CHANGED:k,SELECT_STORY:_}=__STORYBOOK_MODULE_CORE_EVENTS__,{makeDecorator:C,addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,{global:E}=__STORYBOOK_MODULE_GLOBAL__;var D="links",{document:h,HTMLElement:O}=E;function T(s){let i={},n=(s[0]==="?"?s.substring(1):s).split("&").filter(Boolean);for(let t=0;t<n.length;t++){let r=n[t].split("=");i[decodeURIComponent(r[0])]=decodeURIComponent(r[1]||"")}return i}var u=s=>f.getChannel().emit(_,s),L=(s,i)=>new Promise(n=>{let{location:t}=h,r=T(t.search).id,o=s||r.split("--",2)[0],a=`/story/${w(o,i)}`,l=t.pathname.replace(/iframe\.html$/,""),y=`${t.origin+l}?${Object.entries({path:a}).map(p=>`${p[0]}=${p[1]}`).join("&")}`;n(y)}),b=s=>{let{target:i}=s;if(!(i instanceof O))return;let n=i,{sbKind:t,sbStory:r}=n.dataset;(t||r)&&(s.preventDefault(),u({kind:t,story:r}))},c=!1,S=()=>{c||(c=!0,h.addEventListener("click",b))},R=()=>{c&&(c=!1,h.removeEventListener("click",b))};C({name:"withLinks",parameterName:D,wrapper:(s,i)=>(S(),f.getChannel().once(k,R),s(i))});var B=0,M=s=>s.button===B&&!s.altKey&&!s.ctrlKey&&!s.metaKey&&!s.shiftKey,I=(s,i=n=>{})=>{M(s)&&(s.preventDefault(),i(s))},A=class extends g.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:s,title:i=s,story:n,name:t=n}=this.props;if(i&&t){let r=await L(i,t);this.setState({href:r})}},this.handleClick=()=>{let{kind:s,title:i=s,story:n,name:t=n}=this.props;i&&t&&u({title:i,name:t})}}componentDidMount(){this.updateHref()}componentDidUpdate(s){let{kind:i,title:n,story:t,name:r}=this.props;(s.kind!==i||s.story!==t||s.title!==n||s.name!==r)&&this.updateHref()}render(){let{kind:s,title:i=s,story:n,name:t=n,children:r,...o}=this.props,{href:a}=this.state;return j.createElement("a",{href:a,onClick:l=>I(l,this.handleClick),...o},r)}};A.defaultProps={children:void 0};const P=({pack:s})=>{const[i,n]=g.useState("0.0.0");return g.useEffect(()=>{(async()=>{try{const o=await(await fetch(`https://registry.npmjs.org/${s}/latest`)).json();n(o.version)}catch(r){console.error("Error fetching package version:",r)}})()},[s]),i},d=({path:s,children:i})=>j.createElement("a",{href:s,style:{all:"unset",cursor:"pointer"}},i);function x(s){const i={p:"p",...m(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Green Design System",id:"welcome"}),`
`,e.jsx("gds-theme",{children:e.jsxs("gds-flex",{"flex-direction":"column",gap:"4xl",children:[e.jsx("gds-card",{"border-radius":"m",padding:"0 l",children:e.jsxs("gds-flex",{"min-width":"100%","justify-content":"center","align-items":"center","flex-direction":"column",padding:"0 l",gap:"xl",children:[e.jsx("gds-icon-brand-green",{width:"80",height:"80"}),e.jsx("gds-text",{tag:"code","font-size":"display-s",children:e.jsx(P,{pack:"@sebgroup/green-core"})}),e.jsx("gds-text",{tag:"code","font-size":"display-s",children:"@sebgroup/green-core"}),e.jsx("gds-text",{"font-size":"display-xs","text-align":"center","text-wrap":"balance",children:"Green Core is a carefully crafted set of Web Components that lays the foundation for the Green Design System."}),e.jsxs("gds-flex",{gap:"s",children:[e.jsx("a",{target:"_blank",href:"https://github.com/seb-oss/green/blob/main/LICENSE",children:e.jsx("img",{src:"https://img.shields.io/badge/license-Apache2.0-005FAC"})}),e.jsx("a",{target:"_blank",href:"https://semver.org/",children:e.jsx("img",{src:"https://img.shields.io/badge/semantic%20versioning-006D31"})}),e.jsx("a",{target:"_blank",href:"https://nx.dev/",children:e.jsx("img",{src:"https://img.shields.io/badge/maintained%20with-nx-006D31"})}),e.jsx("a",{target:"_blank",href:"https://github.com/seb-oss/green/blob/main/CONTRIBUTING.md",children:e.jsx("img",{src:"https://img.shields.io/badge/PRs-welcome-006D31"})})]}),e.jsxs("gds-flex",{gap:"s",children:[e.jsx("gds-text",{children:"Built by:"}),e.jsx("gds-icon-brand-seb",{width:"40",height:"40"})]})]})}),e.jsx("gds-divider",{opacity:"0.2"}),e.jsxs("gds-flex",{"flex-direction":"column",gap:"s",children:[e.jsx("gds-text",{tag:"h2",children:"Components"}),e.jsxs("gds-grid",{columns:"3",gap:"l",children:[e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsxs("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",gap:"xl",children:[e.jsx("gds-badge",{variant:"notice",children:"Badge"}),e.jsxs("gds-badge",{variant:"positive",notification:!0,children:["999",e.jsx("gds-icon-plus-small",{slot:"trail"})]})]}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-badge--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Badge"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",children:e.jsxs("gds-button",{children:[e.jsx("gds-icon-credit-card",{slot:"lead"}),"Primary"]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-button--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Button"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",children:e.jsxs("gds-fab",{variant:"positive",inset:"0",rank:"secondary",position:"relative",children:["Secondary ",e.jsx("gds-signal",{slot:"trail"})]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-button-fab--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"FAB"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",gap:"s",children:e.jsxs("gds-filter-chips",{value:"chips, filter",label:"Pick news channel",children:[e.jsx("gds-filter-chip",{value:"filter",children:"Filter"}),e.jsx("gds-filter-chip",{value:"chips",children:"Chips"})]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-filter-chips--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Filter Chips"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",gap:"s",children:e.jsx("gds-icon-rocket",{width:"42",height:"42"})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-icon--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Icon"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",gap:"s",children:e.jsxs("gds-menu-button",{children:[e.jsx("gds-icon-magnifying-glass",{slot:"lead"}),"Search"]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-menu-button--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Menu Button"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",gap:"s",children:e.jsx("gds-flex",{"max-width":"200px",children:e.jsxs("gds-segmented-control",{size:"small",value:"1",children:[e.jsx("gds-segment",{value:"1",children:"Segmented"}),e.jsx("gds-segment",{value:"2",children:"Control"})]})})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-segmented-control--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Segmented Control"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",gap:"s",children:e.jsxs("gds-popover",{children:[e.jsxs("gds-button",{rank:"secondary",slot:"trigger",children:["Popover ",e.jsx("gds-icon-chevron-bottom",{slot:"trail"})]}),e.jsx("gds-flex",{padding:"xl",children:e.jsx("gds-text",{children:"Popover content"})})]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-popover--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Popover"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",gap:"s",children:e.jsxs("gds-dropdown",{children:[e.jsx("gds-option",{value:"1",children:"Dropdown"}),e.jsx("gds-option",{value:"2",children:"Dropdwon Item"})]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-form-dropdown--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Dropdown"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",gap:"s",children:e.jsx("gds-flex",{"max-width":"80%",children:e.jsx("gds-input",{label:"Input",value:" ",clearable:!0,children:e.jsx("gds-icon-credit-card",{slot:"lead"})})})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-form-input--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Input"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",gap:"s",children:e.jsx("gds-flex",{"max-width":"80%",children:e.jsx("gds-textarea",{label:"Textarea"})})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-form-textarea--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Textarea"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",gap:"s",children:e.jsx("gds-flex",{"max-width":"80%",children:e.jsx("gds-datepicker",{})})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-form-datepicker--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Datepicker"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsxs("gds-flex",{"align-items":"flex-start","justify-content":"center",background:"primary/0",overflow:"hidden",height:"200px",position:"relative",children:[e.jsx("gds-mask",{inset:"0","mask-image":"top","background-color":"secondary/0.96",position:"absolute","z-index":"4","pointer-events":"none"}),e.jsx("gds-calendar",{})]}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-calendar--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Calendar"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsxs("gds-flex",{"align-items":"center","justify-content":"center",background:"primary/0",overflow:"hidden",height:"200px",position:"relative",children:[e.jsxs("gds-flex",{id:"target","align-items":"center",gap:"s",children:[e.jsx("gds-icon-pin",{}),e.jsx("gds-text",{children:"Coachmark"})]}),e.jsx("gds-coachmark",{target:"target",placement:"bottom",children:e.jsx(i.p,{children:"This is the coachmark content."})})]}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-coachmark--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Coachmark"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",background:"primary/0",overflow:"hidden",height:"200px",position:"relative",children:e.jsxs("gds-context-menu",{children:[e.jsx("gds-menu-item",{children:"Action 1"}),e.jsx("gds-menu-item",{children:"Action 2"}),e.jsx("gds-menu-item",{children:"Action 3"})]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"../?path=/docs/docs-components-context-menu--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Context Menu"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})})]})]})]})})]})}function Ze(s={}){const{wrapper:i}={...m(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(x,{...s})}):x(s)}export{Ze as default};
