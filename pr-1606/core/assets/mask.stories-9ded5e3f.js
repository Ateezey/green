import{k as n}from"./lit-element-1d72f0ce.js";import"./mask-1eadf49f.js";import"./card-dcd6ce07.js";import"./flex-bcd919b1.js";import"./container-89e950a3.js";import"./theme-5481321e.js";import"./img-3d791932.js";import"./video-b4b5de72.js";import"./text-283a1198.js";import"./divider-175a5512.js";import"./arrow-right-53f3213e.js";import"./circles-three-8108223d.js";import"./static-c0094392.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./style-expression-property-26695edd.js";import"./watch-c4961afe.js";import"./tokens.style-01187a75.js";import"./transitional-styles-8ea9588a.js";import"./query-b9d3c2af.js";import"./icon-a640baec.js";import"./directive-dd518ee3.js";const D={title:"Docs/Layout/Mask",component:"gds-mask",tags:["autodocs"]},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},t={...d,render:r=>n`
    <gds-grid columns="xs{1} m{2} l{2}" gap="l">
      <gds-card overflow="hidden">
        <gds-flex display="flex" gap="0" flex-direction="column" align-items="stretch">
          <gds-container position="relative" border-radius="s" overflow="hidden">
            <gds-img
              src="https://github.com/user-attachments/assets/fdbfca17-c5b7-43cc-b846-6e1ab68e5d69"
              aspect-ratio="1/1"
              object-fit="cover"
            ></gds-img>
            <gds-mask
              mask-image="top"
              background-color="tertiary/0.9"
              z-index="2"
              position="absolute"
              inset="50% 0 0 0"
            >
              <gds-container position="absolute" inset="auto 20px 20px auto">
                <gds-button rank="secondary">
                  <gds-icon-arrow-down></gds-icon-arrow-down>
                </gds-button>
              </gds-container>
            </gds-mask>
          </gds-container>
          <gds-flex flex-direction="column" padding="s{xs} m{l} l{l}" align-items="flex-start" gap="l">
            <gds-flex gap="s" flex-direction="column">
              <gds-text font-size="body-l"> Sector by sector. Industry by industry. </gds-text>
              <gds-text tag="p"> Together with our clients, we're accelerating the sustainable transition. </gds-text>
            </gds-flex>
            <gds-divider opacity="0.2"></gds-divider>
            <gds-button>Client stories</gds-button>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card border-radius="s" overflow="hidden">
        <gds-flex position="relative" height="100%">
          <gds-video
            src="https://github.com/user-attachments/assets/f556d859-466a-416c-95fb-ee908ffccfdd"
            object-fit="cover"
            aspect-ratio="1/1"
            pointer-events="none"
            autoplay
            muted
            loop
          ></gds-video>
          <gds-mask mask-image="top" background-color="tertiary/0.6" position="absolute">
            <gds-flex
              flex-direction="column"
              justify-content="flex-end"
              padding="4xl 2xl 2xl 2xl"
              gap="l"
              height="100%"
              width="100%"
              color="tertiary"
            >
              <gds-container>
                <gds-text tag="h3"> Sustainable Practices </gds-text>
                <gds-text font-size="body-m"> Promoting Eco-Friendly Solutions </gds-text>
              </gds-container>
              <gds-flex gap="s">
                <gds-button rank="secondary">Get Involved</gds-button>
                <gds-theme color-scheme="dark">
                  <gds-button rank="tertiary">Learn more</gds-button>
                </gds-theme>
              </gds-flex>
            </gds-flex>
          </gds-mask>
        </gds-flex>
      </gds-card>
    </gds-grid>
  `};var e,s,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-grid columns="xs{1} m{2} l{2}" gap="l">
      <gds-card overflow="hidden">
        <gds-flex display="flex" gap="0" flex-direction="column" align-items="stretch">
          <gds-container position="relative" border-radius="s" overflow="hidden">
            <gds-img
              src="https://github.com/user-attachments/assets/fdbfca17-c5b7-43cc-b846-6e1ab68e5d69"
              aspect-ratio="1/1"
              object-fit="cover"
            ></gds-img>
            <gds-mask
              mask-image="top"
              background-color="tertiary/0.9"
              z-index="2"
              position="absolute"
              inset="50% 0 0 0"
            >
              <gds-container position="absolute" inset="auto 20px 20px auto">
                <gds-button rank="secondary">
                  <gds-icon-arrow-down></gds-icon-arrow-down>
                </gds-button>
              </gds-container>
            </gds-mask>
          </gds-container>
          <gds-flex flex-direction="column" padding="s{xs} m{l} l{l}" align-items="flex-start" gap="l">
            <gds-flex gap="s" flex-direction="column">
              <gds-text font-size="body-l"> Sector by sector. Industry by industry. </gds-text>
              <gds-text tag="p"> Together with our clients, we're accelerating the sustainable transition. </gds-text>
            </gds-flex>
            <gds-divider opacity="0.2"></gds-divider>
            <gds-button>Client stories</gds-button>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card border-radius="s" overflow="hidden">
        <gds-flex position="relative" height="100%">
          <gds-video
            src="https://github.com/user-attachments/assets/f556d859-466a-416c-95fb-ee908ffccfdd"
            object-fit="cover"
            aspect-ratio="1/1"
            pointer-events="none"
            autoplay
            muted
            loop
          ></gds-video>
          <gds-mask mask-image="top" background-color="tertiary/0.6" position="absolute">
            <gds-flex
              flex-direction="column"
              justify-content="flex-end"
              padding="4xl 2xl 2xl 2xl"
              gap="l"
              height="100%"
              width="100%"
              color="tertiary"
            >
              <gds-container>
                <gds-text tag="h3"> Sustainable Practices </gds-text>
                <gds-text font-size="body-m"> Promoting Eco-Friendly Solutions </gds-text>
              </gds-container>
              <gds-flex gap="s">
                <gds-button rank="secondary">Get Involved</gds-button>
                <gds-theme color-scheme="dark">
                  <gds-button rank="tertiary">Learn more</gds-button>
                </gds-theme>
              </gds-flex>
            </gds-flex>
          </gds-mask>
        </gds-flex>
      </gds-card>
    </gds-grid>
  \`
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const E=["Card"];export{t as Card,E as __namedExportsOrder,D as default};
