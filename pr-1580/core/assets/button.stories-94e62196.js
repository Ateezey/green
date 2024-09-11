import{x as r,T as l}from"./lit-element-2a5e401f.js";import"./button-8f6f3c9a.js";import"./grid-2b10b91a.js";import"./text-1b269f17.js";import"./divider-4aecce78.js";import"./flex-f3c1e8c5.js";import"./arrow-up-65a790c4.js";import"./arrow-right-ff012096.js";import"./static-50b4adfb.js";import"./gds-element-90c5f05b.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./when-cf7256a5.js";import"./if-defined-39fa3d49.js";import"./class-map-43969d56.js";import"./directive-12249aa5.js";import"./constrain-slots-08d8606c.js";import"./form-control-341856bb.js";import"./lit-localize-87611c26.js";import"./watch-c4961afe.js";import"./transitional-styles-7b8b97bc.js";import"./tokens.style-681e2422.js";import"./style-expression-property-5a4dd319.js";import"./container-45eca99d.js";import"./icon-f5e30329.js";const Pt={title:"Docs/Components/Button",component:"gds-button",parameters:{layout:"centered",docs:{description:{component:`A button serve as an interactive element that enables users to perform an action or make
a choice with a simple click or tap. To decide which kind of button/buttons and putting
them in the right order is key to make sure users know how to take the right action.
A good rule of thumb is to use only one primary action in each context.`}}},tags:["autodocs"]},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{rank:{options:["primary","secondary","tertiary"],control:{type:"select"}},variant:{options:["neutral","positive","negative"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"select"}},target:{options:["_self","_blank","_parent","_top"],control:{type:"select"}},rel:{control:{type:"text"}},download:{control:{type:"text"}}},args:{innerText:"Button"}},g={...n},e={...n,name:"Ranks and variants",parameters:{...n.parameters,controls:{include:[]}},render:t=>r`
    <gds-flex direction="column" gap="4xl" padding="4xl">
      <gds-flex direction="column" gap="m">
        <gds-text>Neutral</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button>
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>  
            Secondary</gds-button>
          <gds-button rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>  
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex direction="column" gap="m">
        <gds-text>Positive</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="positive">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button variant="positive" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button>
          <gds-button variant="positive" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex direction="column" gap="m">
        <gds-text>Negative</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="negative">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button variant="negative" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button>
          <gds-button variant="negative" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
    </gds-grid>
  `},a={...n,parameters:{...n.parameters,controls:{include:["rank","variant"]}},render:t=>r`
    <gds-flex gap="l" align="center">
      <gds-button .rank=${t.rank} .variant=${t.variant} size="small">
        Small
      </gds-button>
      <gds-button .rank=${t.rank} .variant=${t.variant}>
        Medium
      </gds-button>
      <gds-button .rank=${t.rank} .variant=${t.variant} size="large">
        Large
      </gds-button>
    </gds-flex>
  `},s={...n,name:"Using icons in button",parameters:{...n.parameters,controls:{include:["rank","variant","size"]}},render:t=>r`
    <gds-flex gap="l">
      <gds-button
        .rank=${t.rank}
        .variant=${t.variant}
        .size=${t.size}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        Leading icon
      </gds-button>
      <gds-button
        .rank=${t.rank}
        .variant=${t.variant}
        .size=${t.size}
      >
        Trailing icon
        <gds-icon-credit-card slot="trail"></gds-icon-credit-card>
      </gds-button>
    </gds-flex>
  `},o={...n,name:"Icon button",parameters:{...n.parameters,controls:{include:["rank","variant"]}},render:t=>r`
    <gds-flex gap="l" align="center">
      <gds-button .rank=${t.rank} .variant=${t.variant} size="small">
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button .rank=${t.rank} .variant=${t.variant}>
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button .rank=${t.rank} .variant=${t.variant} size="large">
        <gds-icon-arrow-right />
      </gds-button>
    </gds-flex>
  `},d={...n,parameters:{...n.parameters,controls:{include:[]}},render:()=>r`
    <gds-flex gap="l">
      <gds-button disabled>Primary</gds-button>
      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>
      <gds-button rank="tertiary" disabled> Tertiary </gds-button>
    </gds-flex>
  `},i={...n,parameters:{...n.parameters,controls:{include:["href","target","rel","download"]}},args:{href:"https://github.com/seb-oss/green"},render:t=>r`
    <gds-button
      href=${t.href}
      target=${t.target||l}
      rel=${t.rel||l}
      download=${t!=null&&t.hasOwnProperty("download")?t.download:l}
    >
      Link
    </gds-button>
  `},c={...n,parameters:{...n.parameters,controls:{include:[]}},render:t=>r`
    <gds-button>
      <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      This is a long text that will truncated
    </gds-button>
  `};var u,p,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        format: true,
        type: 'dynamic'
      }
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {
    rank: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'select'
      }
    },
    variant: {
      options: ['neutral', 'positive', 'negative'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select'
      }
    },
    target: {
      options: ['_self', '_blank', '_parent', '_top'],
      control: {
        type: 'select'
      }
    },
    rel: {
      control: {
        type: 'text'
      }
    },
    download: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    innerText: 'Button'
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,v,f;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(f=(v=g.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,h,x,k,$;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Ranks and variants',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-flex direction="column" gap="4xl" padding="4xl">
      <gds-flex direction="column" gap="m">
        <gds-text>Neutral</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button>
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>  
            Secondary</gds-button>
          <gds-button rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>  
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex direction="column" gap="m">
        <gds-text>Positive</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="positive">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button variant="positive" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button>
          <gds-button variant="positive" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
      <gds-flex direction="column" gap="m">
        <gds-text>Negative</gds-text>
        <gds-divider opacity="0.2"></gds-divider>
        <gds-flex gap="xl">
          <gds-button variant="negative">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Primary</gds-button>
          <gds-button variant="negative" rank="secondary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Secondary</gds-button>
          <gds-button variant="negative" rank="tertiary">
            <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
            Tertiary</gds-button>
        </gds-flex>
      </gds-flex>
    </gds-grid>
  \`
}`,...(x=(h=e.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:`Buttons can have different ranks and variants. The rank defines the visual importance of the button,
while the variant defines the intent of the button.`,...($=(k=e.parameters)==null?void 0:k.docs)==null?void 0:$.description}}};var w,P,z,T,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['rank', 'variant']
    }
  },
  render: args => html\`
    <gds-flex gap="l" align="center">
      <gds-button .rank=\${args.rank} .variant=\${args.variant} size="small">
        Small
      </gds-button>
      <gds-button .rank=\${args.rank} .variant=\${args.variant}>
        Medium
      </gds-button>
      <gds-button .rank=\${args.rank} .variant=\${args.variant} size="large">
        Large
      </gds-button>
    </gds-flex>
  \`
}`,...(z=(P=a.parameters)==null?void 0:P.docs)==null?void 0:z.source},description:{story:"Buttons can be small, medium or large. The default size is medium.",...(S=(T=a.parameters)==null?void 0:T.docs)==null?void 0:S.description}}};var D,L,B,_,I;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Using icons in button',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['rank', 'variant', 'size']
    }
  },
  render: args => html\`
    <gds-flex gap="l">
      <gds-button
        .rank=\${args.rank}
        .variant=\${args.variant}
        .size=\${args.size}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        Leading icon
      </gds-button>
      <gds-button
        .rank=\${args.rank}
        .variant=\${args.variant}
        .size=\${args.size}
      >
        Trailing icon
        <gds-icon-credit-card slot="trail"></gds-icon-credit-card>
      </gds-button>
    </gds-flex>
  \`
}`,...(B=(L=s.parameters)==null?void 0:L.docs)==null?void 0:B.source},description:{story:"Buttons can have an icon on the left or right side of the text. These are called leading or trailing icons,\nand are added by placing a `gds-icon` component in either the `lead` or `trail` slot.",...(I=(_=s.parameters)==null?void 0:_.docs)==null?void 0:I.description}}};var A,N,R,O,M;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Icon button',
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['rank', 'variant']
    }
  },
  render: args => html\`
    <gds-flex gap="l" align="center">
      <gds-button .rank=\${args.rank} .variant=\${args.variant} size="small">
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button .rank=\${args.rank} .variant=\${args.variant}>
        <gds-icon-arrow-right />
      </gds-button>
      <gds-button .rank=\${args.rank} .variant=\${args.variant} size="large">
        <gds-icon-arrow-right />
      </gds-button>
    </gds-flex>
  \`
}`,...(R=(N=o.parameters)==null?void 0:N.docs)==null?void 0:R.source},description:{story:"If a single `gds-icon` is the only child of a button, it will render as a circular icon button.",...(M=(O=o.parameters)==null?void 0:O.docs)==null?void 0:M.description}}};var U,V,W,C,E;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: () => html\`
    <gds-flex gap="l">
      <gds-button disabled>Primary</gds-button>
      <gds-button rank="secondary" variant="positive" disabled>
        Secondary
      </gds-button>
      <gds-button rank="tertiary" disabled> Tertiary </gds-button>
    </gds-flex>
  \`
}`,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:`The buttons support a disabled state, but in general, it should not be used. It can be
hard for the user to understand why the button is disabled, so it is often better to
keep the button clickable and then show an error message instead.`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};var j,q,F,G,H;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: ['href', 'target', 'rel', 'download']
    }
  },
  args: {
    href: 'https://github.com/seb-oss/green'
  },
  render: args => html\`
    <gds-button
      href=\${args.href}
      target=\${args.target || nothing}
      rel=\${args.rel || nothing}
      download=\${args?.hasOwnProperty('download') ? args.download : nothing}
    >
      Link
    </gds-button>
  \`
}`,...(F=(q=i.parameters)==null?void 0:q.docs)==null?void 0:F.source},description:{story:"A link styled as a button.",...(H=(G=i.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var J,K,Q,X,Y;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    controls: {
      include: []
    }
  },
  render: args => html\`
    <gds-button>
      <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      This is a long text that will truncated
    </gds-button>
  \`
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Length constraints are set by default at `20ch` to ensure that the text does not wrap or overflow.",...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};const zt=["DefaultParams","Basic","RanksAndVariants","Sizes","WithIcon","IconButton","Disabled","Link","Length"];export{g as Basic,n as DefaultParams,d as Disabled,o as IconButton,c as Length,i as Link,e as RanksAndVariants,a as Sizes,s as WithIcon,zt as __namedExportsOrder,Pt as default};
