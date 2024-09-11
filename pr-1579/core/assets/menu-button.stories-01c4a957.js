import{h as a}from"./gds-element-24e794df.js";import"./menu-button-62b6d7af.js";import"./popover-a9e88843.js";import"./flex-ee74ccc7.js";import"./card-8f51be34.js";import"./star-803af0b7.js";import"./lit-element-2a5e401f.js";import"./_commonjsHelpers-725317a4.js";import"./class-map-43969d56.js";import"./directive-12249aa5.js";import"./if-defined-39fa3d49.js";import"./static-50b4adfb.js";import"./constrain-slots-08d8606c.js";import"./tokens.style-681e2422.js";import"./query-b9d3c2af.js";import"./lit-localize-87611c26.js";import"./floating-ui.dom-373c8bf6.js";import"./watch-c4961afe.js";import"./transitional-styles-6f793c1a.js";import"./cross-small-d60aea14.js";import"./icon-9eb1b5fc.js";import"./style-expression-property-45d22dc5.js";import"./container-e86e3029.js";const $={title:"Docs/Components/Menu button",component:"gds-menu-button",parameters:{layout:"centered"},tags:["autodocs"]},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:`<gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
    Search`}},r={...o},e={...o,render:()=>a`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>`},t={...o,render:()=>a`<gds-menu-button>Search</gds-menu-button>`},n={...o,render:()=>a`<gds-card
      display="flex"
      height="50px"
      width="700px"
      border="0 0 4xs/base300 0"
    >
      <div style="flex-basis:50%;">
        <gds-menu-button>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <gds-flex style="flex-basis:50%;" justify="flex-end">
        <gds-menu-button>
          <gds-icon-bell slot="trail"></gds-icon-bell>
          Notification
        </gds-menu-button>
        <gds-popover>
          <gds-menu-button slot="trigger">
            <gds-icon-people slot="trail"></gds-icon-people>
            Profile
          </gds-menu-button>
          <div style="padding: 1rem;">Profile stuff</div>
        </gds-popover>
        <gds-menu-button
          href="https://github.com/seb-oss/green"
          target="_blank"
        >
          <gds-icon-square-arrow-top-right
            slot="trail"
          ></gds-icon-square-arrow-top-right>
          External link
        </gds-menu-button>
      </gds-flex>
    </gds-card>`},s={...o,render:()=>a`<gds-card
        display="flex"
        width="700px"
        border="0 0 4xs/base300 0"
        background="base-white"
      >
      <div style="flex-basis:50%;">
        <gds-menu-button compact>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <gds-flex style="flex-basis:50%;" justify="flex-end">
        <gds-menu-button compact>
          <gds-icon-bell slot="trail"></gds-icon-bell>
          Notification
        </gds-menu-button compact>
        <gds-popover>
          <gds-menu-button compact slot="trigger">
            <gds-icon-people slot="trail"></gds-icon-people>
            Profile
          </gds-menu-button>
          <div style="padding: 1rem;">Profile stuff</div>
        </gds-popover>
        <gds-menu-button
        compact
          href="https://github.com/seb-oss/green"
          target="_blank"
        >
          <gds-icon-square-arrow-top-right
            slot="trail"
          ></gds-icon-square-arrow-top-right>
          External link
        </gds-menu-button>
      </gds-flex>
    </gds-card>
    `};var i,d,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,c,u,m,p;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button selected>
      <gds-icon-people solid slot="trail"></gds-icon-people>
      Profile
    </gds-menu-button>\`
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source},description:{story:"Selected state is used to indicate that the button is currently selected, for example to indicate the current page.",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var b,f,h,x,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-menu-button>Search</gds-menu-button>\`
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"The menu button can be used without an icon as well.",...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var v,w,_,P,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-card
      display="flex"
      height="50px"
      width="700px"
      border="0 0 4xs/base300 0"
    >
      <div style="flex-basis:50%;">
        <gds-menu-button>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <gds-flex style="flex-basis:50%;" justify="flex-end">
        <gds-menu-button>
          <gds-icon-bell slot="trail"></gds-icon-bell>
          Notification
        </gds-menu-button>
        <gds-popover>
          <gds-menu-button slot="trigger">
            <gds-icon-people slot="trail"></gds-icon-people>
            Profile
          </gds-menu-button>
          <div style="padding: 1rem;">Profile stuff</div>
        </gds-popover>
        <gds-menu-button
          href="https://github.com/seb-oss/green"
          target="_blank"
        >
          <gds-icon-square-arrow-top-right
            slot="trail"
          ></gds-icon-square-arrow-top-right>
          External link
        </gds-menu-button>
      </gds-flex>
    </gds-card>\`
}`,...(_=(w=n.parameters)==null?void 0:w.docs)==null?void 0:_.source},description:{story:`An example of a menu bar with a search button, a notification button, a profile button, and an external link button.

The profile buitton shows an example of using a popover together with a menu button.

External link is an example of using a menu button as a link to a URL.`,...(S=(P=n.parameters)==null?void 0:P.docs)==null?void 0:S.description}}};var k,q,E,D,j;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`<gds-card
        display="flex"
        width="700px"
        border="0 0 4xs/base300 0"
        background="base-white"
      >
      <div style="flex-basis:50%;">
        <gds-menu-button compact>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          Search
        </gds-menu-button>
      </div>
      <gds-flex style="flex-basis:50%;" justify="flex-end">
        <gds-menu-button compact>
          <gds-icon-bell slot="trail"></gds-icon-bell>
          Notification
        </gds-menu-button compact>
        <gds-popover>
          <gds-menu-button compact slot="trigger">
            <gds-icon-people slot="trail"></gds-icon-people>
            Profile
          </gds-menu-button>
          <div style="padding: 1rem;">Profile stuff</div>
        </gds-popover>
        <gds-menu-button
        compact
          href="https://github.com/seb-oss/green"
          target="_blank"
        >
          <gds-icon-square-arrow-top-right
            slot="trail"
          ></gds-icon-square-arrow-top-right>
          External link
        </gds-menu-button>
      </gds-flex>
    </gds-card>
    \`
}`,...(E=(q=s.parameters)==null?void 0:q.docs)==null?void 0:E.source},description:{story:"Same as above, but using the compact style. This is mainly intended for use in a mobile viewport.",...(j=(D=s.parameters)==null?void 0:D.docs)==null?void 0:j.description}}};const ee=["Basic","Selected_state","Only_text","Example_menu_bar","Compact_menu_bar"];export{r as Basic,s as Compact_menu_bar,n as Example_menu_bar,t as Only_text,e as Selected_state,ee as __namedExportsOrder,$ as default};
