import{ao as h,ag as c,ae as e,af as v}from"./index-dZMJGpUu.js";import{u as j}from"./index-BSdh8PIr.js";import"./chunk-HLWAVYOI-BISiPIx2.js";import{G as w}from"./index-Df9so8jS.js";import"./flex-DXhYmIy9.js";import"./card-CxRaptHP.js";import"./badge-Y4fDF5Tm.js";import"./button-B5Ut34y4.js";import"./dropdown-C5adPCfq.js";import"./fab-B7iTz9RT.js";import"./datepicker-C2FLP988.js";import"./input-DaztNnpj.js";import"./mask-DkpSP4lW.js";import"./textarea-Bq7VTykj.js";import"./text-BaDK6UEF.js";import"./rich-text-TVwxOlXd.js";import"./link-Br37P586.js";import"./menu-button-BlwZv8yv.js";import"./popover-BsBF3LbE.js";import"./context-menu-DlYQaljp.js";import"./coachmark-CwrWMOXm.js";import"./segmented-control-n224POCI.js";import"./filter-chips-C_UvTfiW.js";import"./divider-CPS2LPbb.js";import"./pin-CmBg7UZd.js";import"./credit-card-DGDJRfCy.js";import"./rocket-DLwzY6zV.js";import"./magnifying-glass-CKr7Csfw.js";import"./chevron-bottom-BqIBnMM1.js";import"./chevron-right-DOKMgDMh.js";import"./plus-small-DgTtMPkT.js";import"./arrow-right-DHvcJnVy.js";import"./signal-DgypE6c3.js";import"./iframe-D-KzGMPZ.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";import"./tokens.style-CkFfbDVg.js";import"./lit-element-C_s9q329.js";import"./custom-element-scoping-CpYtbs9r.js";import"./style-expression-property-C6V8xdlu.js";import"./container-D1WzfzAG.js";import"./query-p8xgzTDt.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./when-BR7zwNJC.js";import"./static-_ukc2i0J.js";import"./transitional-styles-Cc5JwJ9o.js";import"./observe-light-dom-CmJPHUQ4.js";import"./runtime-CMQcyTl6.js";import"./watch-tFciLXSI.js";import"./query-async-MEroNOeJ.js";import"./icon-C1rUgQqA.js";import"./backdrop-DPrfqKFZ.js";import"./checkmark-D9lROobG.js";import"./ref-D_ho-JAG.js";import"./directive-helpers-C6DiESt7.js";import"./menu-heading-5KjiIomn.js";import"./attribute-converters-CdI0trPX.js";import"./calendar-gSSa3MA5.js";import"./calendar-BoLsT6e1.js";import"./form-control-footer-CyQsRun0.js";import"./triangle-exclamation-D2VDkIvV.js";import"./cross-small-Y_gLfaO0.js";import"./default-typography.styles-BOILWASB.js";import"./floating-ui.dom-DJ1BFLcT.js";import"./resize-observer-B9k8v2TZ.js";const{STORY_CHANGED:k,SELECT_STORY:_}=__STORYBOOK_MODULE_CORE_EVENTS__,{makeDecorator:C,addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,{global:E}=__STORYBOOK_MODULE_GLOBAL__;var D="links",{document:p,HTMLElement:L}=E;function O(s){let i={},n=(s[0]==="?"?s.substring(1):s).split("&").filter(Boolean);for(let t=0;t<n.length;t++){let r=n[t].split("=");i[decodeURIComponent(r[0])]=decodeURIComponent(r[1]||"")}return i}var u=s=>f.getChannel().emit(_,s),T=(s,i)=>new Promise(n=>{let{location:t}=p,r=O(t.search).id,o=s||r.split("--",2)[0],l=`/story/${w(o,i)}`,g=t.pathname.replace(/iframe\.html$/,""),b=`${t.origin+g}?${Object.entries({path:l}).map(x=>`${x[0]}=${x[1]}`).join("&")}`;n(b)}),y=s=>{let{target:i}=s;if(!(i instanceof L))return;let n=i,{sbKind:t,sbStory:r}=n.dataset;(t||r)&&(s.preventDefault(),u({kind:t,story:r}))},a=!1,S=()=>{a||(a=!0,p.addEventListener("click",y))},R=()=>{a&&(a=!1,p.removeEventListener("click",y))};C({name:"withLinks",parameterName:D,wrapper:(s,i)=>(S(),f.getChannel().once(k,R),s(i))});var B=0,I=s=>s.button===B&&!s.altKey&&!s.ctrlKey&&!s.metaKey&&!s.shiftKey,M=(s,i=n=>{})=>{I(s)&&(s.preventDefault(),i(s))},A=class extends h.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:s,title:i=s,story:n,name:t=n}=this.props;if(i&&t){let r=await T(i,t);this.setState({href:r})}},this.handleClick=()=>{let{kind:s,title:i=s,story:n,name:t=n}=this.props;i&&t&&u({title:i,name:t})}}componentDidMount(){this.updateHref()}componentDidUpdate(s){let{kind:i,title:n,story:t,name:r}=this.props;(s.kind!==i||s.story!==t||s.title!==n||s.name!==r)&&this.updateHref()}render(){let{kind:s,title:i=s,story:n,name:t=n,children:r,...o}=this.props,{href:l}=this.state;return c.createElement("a",{href:l,onClick:g=>M(g,this.handleClick),...o},r)}};A.defaultProps={children:void 0};const P=({pack:s})=>{const[i,n]=h.useState("0.0.0");return h.useEffect(()=>{(async()=>{try{const o=await(await fetch(`https://registry.npmjs.org/${s}/latest`)).json();n(o.version)}catch(r){console.error("Error fetching package version:",r)}})()},[s]),i},d=({path:s,children:i})=>c.createElement(c.Fragment,null,c.createElement("style",null,`
        .story-link {
          all: unset;
          cursor: pointer;
          color: currentColor;  
          text-decoration: none; 

          &:hover {
            background-color: #fff;
          }
        }
      `),c.createElement("a",{href:s,className:"story-link"},i));function m(s){const i={p:"p",...j(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Green Design System",id:"welcome"}),`
`,e.jsx("gds-theme",{children:e.jsxs("gds-flex",{"flex-direction":"column",gap:"4xl",children:[e.jsx("gds-flex",{padding:"0 l",children:e.jsxs("gds-flex",{"min-width":"100%","justify-content":"center","align-items":"center","flex-direction":"column",padding:"0 l",gap:"xl",children:[e.jsx("gds-icon-brand-green",{width:"80",height:"80"}),e.jsx("gds-text",{tag:"code","font-size":"display-s",children:e.jsx(P,{pack:"@sebgroup/green-core"})}),e.jsx("gds-text",{tag:"code","font-size":"display-s",children:"@sebgroup/green-core"}),e.jsx("gds-text",{"font-size":"display-xs","text-align":"center","text-wrap":"balance",children:"Green Core is a carefully crafted set of Web Components that lays the foundation for the Green Design System."}),e.jsxs("gds-flex",{gap:"s",children:[e.jsx("a",{target:"_blank",href:"https://github.com/seb-oss/green/blob/main/LICENSE",children:e.jsx("img",{src:"https://img.shields.io/badge/license-Apache2.0-005FAC"})}),e.jsx("a",{target:"_blank",href:"https://semver.org/",children:e.jsx("img",{src:"https://img.shields.io/badge/semantic%20versioning-006D31"})}),e.jsx("a",{target:"_blank",href:"https://nx.dev/",children:e.jsx("img",{src:"https://img.shields.io/badge/maintained%20with-nx-006D31"})}),e.jsx("a",{target:"_blank",href:"https://github.com/seb-oss/green/blob/main/CONTRIBUTING.md",children:e.jsx("img",{src:"https://img.shields.io/badge/PRs-welcome-006D31"})})]}),e.jsxs("gds-flex",{gap:"s",children:[e.jsx("gds-text",{children:"Built by:"}),e.jsx("gds-icon-brand-seb",{width:"40",height:"40"})]})]})}),e.jsx("gds-divider",{opacity:"0.2"}),e.jsxs("gds-flex",{"flex-direction":"column",gap:"s",children:[e.jsx("gds-text",{tag:"h2",children:"Components"}),e.jsxs("gds-grid",{columns:"3",gap:"l",children:[e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsxs("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",gap:"xl",children:[e.jsx("gds-badge",{variant:"notice",children:"Badge"}),e.jsxs("gds-badge",{variant:"positive",notification:!0,children:["999",e.jsx("gds-icon-plus-small",{slot:"trail"})]})]}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-badge--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Badge"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",children:e.jsxs("gds-button",{children:[e.jsx("gds-icon-credit-card",{slot:"lead"}),"Primary"]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-button--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Button"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",children:e.jsxs("gds-fab",{variant:"positive",inset:"0",rank:"secondary",position:"relative",children:["Secondary ",e.jsx("gds-signal",{slot:"trail"})]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-button-fab--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"FAB"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",gap:"s",children:e.jsxs("gds-filter-chips",{value:"chips, filter",label:"Pick news channel",children:[e.jsx("gds-filter-chip",{value:"filter",children:"Filter"}),e.jsx("gds-filter-chip",{value:"chips",children:"Chips"})]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-filter-chips--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Filter Chips"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",gap:"s",children:e.jsx("gds-icon-rocket",{width:"42",height:"42"})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-icon--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Icon"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",gap:"s",children:e.jsxs("gds-menu-button",{children:[e.jsx("gds-icon-magnifying-glass",{slot:"lead"}),"Search"]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-menu-button--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Menu Button"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",gap:"s",children:e.jsxs("gds-link",{children:["Link text ",e.jsx("gds-icon-arrow-right",{slot:"trail"})]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-link--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Link"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",gap:"s",children:e.jsxs("gds-rich-text",{children:[e.jsxs("h4",{children:["Rich ",e.jsx("small",{children:"text"})," ",e.jsx("mark",{children:"Exploration"})]}),e.jsxs("p",{children:["State-of-the-art exploration ",e.jsx("s",{children:"ship"})," vessel designed to ",e.jsx("strong",{children:"traverse"})," the vastness of space. "]}),e.jsx("ul",{children:e.jsx("li",{children:"Item 1"})})]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-rich-text--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Rich text"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",gap:"s",children:e.jsx("gds-flex",{"max-width":"200px",children:e.jsxs("gds-segmented-control",{size:"small",value:"1",children:[e.jsx("gds-segment",{value:"1",children:"Segmented"}),e.jsx("gds-segment",{value:"2",children:"Control"})]})})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-segmented-control--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Segmented Control"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",gap:"s",children:e.jsxs("gds-popover",{children:[e.jsxs("gds-button",{rank:"secondary",slot:"trigger",children:["Popover ",e.jsx("gds-icon-chevron-bottom",{slot:"trail"})]}),e.jsx("gds-flex",{padding:"xl",children:e.jsx("gds-text",{children:"Popover content"})})]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-popover--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Popover"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",gap:"s",children:e.jsxs("gds-dropdown",{children:[e.jsx("gds-option",{value:"1",children:"Dropdown"}),e.jsx("gds-option",{value:"2",children:"Dropdwon Item"})]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-form-dropdown--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Dropdown"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",gap:"s",children:e.jsx("gds-flex",{"max-width":"80%",children:e.jsx("gds-input",{label:"Input",value:" ",clearable:!0,children:e.jsx("gds-icon-credit-card",{slot:"lead"})})})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-form-input--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Input"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",gap:"s",children:e.jsx("gds-flex",{"max-width":"80%",children:e.jsx("gds-textarea",{label:"Textarea"})})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-form-textarea--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Textarea"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",padding:"l s",background:"primary/0.4","min-height":"200px",position:"relative",gap:"s",children:e.jsx("gds-flex",{"max-width":"80%",children:e.jsx("gds-datepicker",{})})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-form-datepicker--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Datepicker"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsxs("gds-flex",{"align-items":"flex-start","justify-content":"center",background:"primary/0",overflow:"hidden",height:"200px",position:"relative",children:[e.jsx("gds-mask",{inset:"0","mask-image":"top","background-color":"secondary/0.96",position:"absolute","z-index":"4","pointer-events":"none"}),e.jsx("gds-calendar",{})]}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-calendar--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Calendar"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsxs("gds-flex",{"align-items":"center","justify-content":"center",background:"primary/0",overflow:"hidden",height:"200px",position:"relative",children:[e.jsxs("gds-flex",{id:"target","align-items":"center",gap:"s",children:[e.jsx("gds-icon-pin",{}),e.jsx("gds-text",{children:"Coachmark"})]}),e.jsx("gds-coachmark",{target:"target",placement:"bottom",children:e.jsx(i.p,{children:"This is the coachmark content."})})]}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-coachmark--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Coachmark"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})}),e.jsx("gds-card",{border:"4xs/primary","border-radius":"s",overflow:"hidden",padding:"0",children:e.jsxs("gds-flex",{"flex-direction":"column",children:[e.jsx("gds-flex",{"align-items":"center","justify-content":"center",background:"primary/0",overflow:"hidden",height:"200px",position:"relative",children:e.jsxs("gds-context-menu",{children:[e.jsx("gds-menu-item",{children:"Action 1"}),e.jsx("gds-menu-item",{children:"Action 2"}),e.jsx("gds-menu-item",{children:"Action 3"})]})}),e.jsx("gds-divider",{padding:"s",opacity:"0.2"}),e.jsx(d,{path:"./?path=/docs/components-context-menu--docs",children:e.jsxs("gds-flex",{padding:"s","justify-content":"space-between","align-items":"center",children:[e.jsx("gds-text",{tag:"h5",children:"Context Menu"}),e.jsx("gds-icon-chevron-right",{width:"16"})]})})]})})]})]})]})})]})}function qe(s={}){const{wrapper:i}={...j(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(m,{...s})}):m(s)}export{qe as default};
