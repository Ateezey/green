"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[5447],{"./libs/chlorophyll/scss/components/form/radio/radio.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Radiobutton:()=>Radiobutton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Radio button",tags:["autodocs"],parameters:{componentIds:["component-radiobutton"]},argTypes:{validation:{control:"select",options:["","is-valid","is-invalid"]},disabled:{control:"boolean"},legend:{control:"text"},firstLabel:{control:"text"},secondLabel:{control:"text"}}},Radiobutton={render:args=>`\n  <form>\n    <div class="form-group">\n      <fieldset>\n        <legend>${args.legend}</legend>\n        <div>\n          <label class="form-control">\n            <input type="radio" name="default" class="${args.validation}" ${args.disabled} />\n            <span>${args.firstLabel}</span><i></i>\n          </label>\n          <label class="form-control">\n            <input type="radio" name="default" checked class="${args.validation}" ${args.disabled} />\n            <span>${args.secondLabel}</span><i></i>\n          </label>\n        </div>\n      </fieldset>\n    </div>\n  </form>`,args:{firstLabel:"First label",secondLabel:"Second label",enabled:!0}},__namedExportsOrder=["Radiobutton"];Radiobutton.parameters={...Radiobutton.parameters,docs:{...Radiobutton.parameters?.docs,source:{originalSource:'{\n  render: args => `\n  <form>\n    <div class="form-group">\n      <fieldset>\n        <legend>${args.legend}</legend>\n        <div>\n          <label class="form-control">\n            <input type="radio" name="default" class="${args.validation}" ${args.disabled} />\n            <span>${args.firstLabel}</span><i></i>\n          </label>\n          <label class="form-control">\n            <input type="radio" name="default" checked class="${args.validation}" ${args.disabled} />\n            <span>${args.secondLabel}</span><i></i>\n          </label>\n        </div>\n      </fieldset>\n    </div>\n  </form>`,\n  args: {\n    firstLabel: \'First label\',\n    secondLabel: \'Second label\',\n    enabled: true\n  }\n}',...Radiobutton.parameters?.docs?.source}}}}}]);