(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[179],{"./libs/angular-charts/src/lib sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./chart/chart.stories.ts":"./libs/angular-charts/src/lib/chart/chart.stories.ts"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./libs/angular-charts/src/lib sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./libs/angular-charts/src/lib sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./libs/angular-charts/src/lib sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./libs/angular-charts/src/lib/chart/chart.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Donut:()=>Donut,EmptyChart:()=>EmptyChart,Lines:()=>Lines,Mixed:()=>Mixed,ObservableSimpleBar:()=>ObservableSimpleBar,Pie:()=>Pie,SimpleBar:()=>SimpleBar,Splines:()=>Splines,default:()=>chart_stories});var client=__webpack_require__("./node_modules/@storybook/angular/dist/ts3.9/client/index.js"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),platform_browser=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs"),of=__webpack_require__("./node_modules/rxjs/_esm2015/internal/observable/of.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),billboard=(__webpack_require__("./libs/charts/src/scss/index.scss"),__webpack_require__("./node_modules/billboard.js/dist-esm/billboard.js"));const createOptions=({settings,chartElement})=>{const columns=settings.data.map((d=>[d.name,...d.values])),defaultType=settings.type||"bar",options={bindto:chartElement,data:{columns,types:settings.data.reduce(((res,d)=>Object.assign(Object.assign({},res),{[d.name]:d.type||defaultType})),{})},legend:{show:!1},tooltip:{contents:{template:'\n  <dl class="tooltip">\n    <dt>{=TITLE}</dt>\n    {{\n    <dd class="{=CLASS_TOOLTIP_NAME}" style="--color: {=COLOR}">\n      <span>{=NAME} {=VALUE}</span>\n    </dd>\n    }}\n  </dl>\n'}}};let hasNegativeValue=!1;for(const dt of columns){for(const val of dt)if(val<0){hasNegativeValue=!0;break}if(hasNegativeValue)break}return hasNegativeValue&&(options.grid={y:{lines:[{value:0,class:"base-line"}]}}),settings.categories&&(options.axis={x:{type:"category",categories:settings.categories,tick:{text:{show:!1}},height:10}}),options},createInfo=(settings,chart)=>{const info={legend:{items:settings.data.map((d=>({title:d.name,color:chart.color(d.name)}))),placement:settings.legend||"none"}};return info.xAxis={ticks:chart.categories().map((text=>({text})))},info.style={"--chart-width":"768px","--chart-height":"500px","--chart-space-left":"49px","--chart-space-right":0},info},create=({settings,chartElement})=>{const options=createOptions({settings,chartElement}),chart=billboard.ZP.generate(options),wrapper={settings,info:createInfo(settings,chart),focus:targetIds=>chart.focus(targetIds),revert:targetIds=>chart.revert(targetIds),toggle:targetIds=>chart.toggle(targetIds),update:()=>null};return wrapper.update=({settings,chartElement})=>{const newOptions=(({settings,chartElement})=>{const data=createOptions({settings,chartElement}).data||{},update={columns:data.columns||[],types:data.types||{}};return settings.categories&&(update.categories=settings.categories),update})({settings,chartElement,oldSettings:wrapper.settings});chart.load(newOptions);const info=createInfo(settings,chart);return wrapper.info=info,wrapper.settings=settings,wrapper},wrapper};var _b;billboard.jv&&((0,billboard.jv)(),(0,billboard.Kb)(),(0,billboard.cS)(),(0,billboard.SO)(),(0,billboard.$y)(),(0,billboard.ve)());let NggChartComponent=class NggChartComponent{constructor(_cdr){this._cdr=_cdr}get chart(){return this._chart}set chart(value){this._chart=value}get theme(){return this._theme}set theme(value){this._theme=value}get settings(){return this._settings}set settings(value){var _a;this._settings=value,this.settings&&this.settings.data&&this._chartElementRef&&this.setChart({settings:this.settings,chartElement:null===(_a=this._chartElementRef)||void 0===_a?void 0:_a.nativeElement})}ngAfterViewInit(){var _a;this.settings&&this._chartElementRef&&this.setChart({settings:this.settings,chartElement:null===(_a=this._chartElementRef)||void 0===_a?void 0:_a.nativeElement})}setChart(args){var _a;this.chart?null===(_a=this.chart)||void 0===_a||_a.update(args):this.chart=create(args),this._cdr.detectChanges()}};(0,tslib_es6.gn)([(0,core.ViewChild)("chartRef"),(0,tslib_es6.w6)("design:type",Object)],NggChartComponent.prototype,"_chartElementRef",void 0),(0,tslib_es6.gn)([(0,core.Input)(),(0,tslib_es6.w6)("design:type",String),(0,tslib_es6.w6)("design:paramtypes",[String])],NggChartComponent.prototype,"theme",null),(0,tslib_es6.gn)([(0,core.Input)(),(0,tslib_es6.w6)("design:type",Object),(0,tslib_es6.w6)("design:paramtypes",[Object])],NggChartComponent.prototype,"settings",null),NggChartComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ngg-chart",template:'<div class="chart" [style]="chart?.info?.style">\n    <div #chartRef [class]="theme"></div>\n    <div *ngIf="chart?.info?.xAxis as xAxis">\n      <ul class="x-axis">\n        <li *ngFor="let tick of xAxis.ticks">\n          {{ tick.text }}\n        </li>\n      </ul>\n    </div>\n    <ng-container *ngIf="chart?.info?.legend as legend">\n      <div\n        class="legend-container"\n        [class]="legend.placement"\n        *ngIf="legend.placement !== \'none\'"\n      >\n        <ul class="legend">\n          <li\n            *ngFor="let item of legend.items"\n            [style.--color]="item.color"\n            (mouseover)="chart.focus(item.title)"\n            (mouseup)="chart.focus(item.title)"\n            (mouseout)="chart.revert()"\n          >\n            <span>{{ item.title }}</span>\n          </li>\n        </ul>\n      </div>\n    </ng-container>\n  </div>',changeDetection:core.ChangeDetectionStrategy.OnPush}),(0,tslib_es6.w6)("design:paramtypes",["function"==typeof(_b=void 0!==core.ChangeDetectorRef&&core.ChangeDetectorRef)?_b:Object])],NggChartComponent);let NggChartsModule=class NggChartsModule{};NggChartsModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.ez],declarations:[NggChartComponent],exports:[NggChartComponent]})],NggChartsModule);const chart_stories={title:"Chart",decorators:[(0,client.moduleMetadata)({imports:[platform_browser.BrowserModule,common.ez,NggChartsModule]})]},ChartStory=args=>({props:args,template:"<ngg-chart [settings]='settings' [theme]='theme'></ngg-chart>"}),SimpleBar=ChartStory.bind({});SimpleBar.args={theme:"",settings:{data:[{name:"Antal",type:"bar",values:[234,197,97,12]}],categories:["Signerade avtal (SEB)","Påbörjade trials (Oxceed)","Aktiverade prenumerationer","Avslutade prenumerationer (endast efter avslutad ordinarie pren.)"]}};const EmptyChart=ChartStory.bind({});EmptyChart.args={settings:null,theme:""};const ObservableSimpleBar=(args=>({props:args,template:"<ngg-chart [settings]='settings | async' [theme]='theme'></ngg-chart>"})).bind({});ObservableSimpleBar.args={settings:(0,of.of)({data:[{name:"Antal",type:"bar",values:[234,197,97,12]}],categories:["Signerade avtal (SEB)","Påbörjade trials (Oxceed)","Aktiverade prenumerationer","Avslutade prenumerationer (endast efter avslutad ordinarie pren.)"]}),theme:""};const Pie=ChartStory.bind({});Pie.args={settings:{type:"pie",data:[{name:"Ej tilldelade",values:[700]},{name:"Tilldelade",values:[200]},{name:"Utnyttjade",values:[100]}],legend:"right"},theme:""};const Donut=ChartStory.bind({});Donut.args={settings:{type:"donut",data:[{name:"Ej tilldelade",values:[700]},{name:"Tilldelade",values:[200]},{name:"Utnyttjade",values:[100]}]},theme:""};const Lines=ChartStory.bind({});Lines.args={settings:{data:[{name:"Signerade avtal SEB",type:"line",values:[10,14,6,15]},{name:"Påbörjade trials",type:"line",values:[8,9,13,11]},{name:"Aktiverade prenumerationer",type:"line",values:[3,7,9,10]}],categories:["jan","feb","mar","apr"]},theme:""};const Splines=ChartStory.bind({});Splines.args={settings:{type:"spline",data:[{name:"Signerade avtal SEB",values:[10,14,6,15]},{name:"Påbörjade trials",values:[8,9,13,11]},{name:"Aktiverade prenumerationer",values:[3,7,9,10]}],categories:["jan","feb","mar","apr"]},theme:""};const Mixed=ChartStory.bind({});Mixed.args={settings:{data:[{type:"spline",name:"Signerade avtal SEB",values:[10,14,6,15]},{type:"area",name:"Påbörjade trials",values:[8,9,13,11]},{type:"bar",name:"Aktiverade prenumerationer",values:[3,7,9,10]}],categories:["jan","feb","mar","apr"],legend:"right"},theme:""},SimpleBar.parameters=Object.assign({storySource:{source:"(args) => ({\n  props: args,\n  template: `<ngg-chart [settings]='settings' [theme]='theme'></ngg-chart>`,\n})"}},SimpleBar.parameters),EmptyChart.parameters=Object.assign({storySource:{source:"(args) => ({\n  props: args,\n  template: `<ngg-chart [settings]='settings' [theme]='theme'></ngg-chart>`,\n})"}},EmptyChart.parameters),ObservableSimpleBar.parameters=Object.assign({storySource:{source:"(args) => ({\n  props: args,\n  template: `<ngg-chart [settings]='settings | async' [theme]='theme'></ngg-chart>`,\n})"}},ObservableSimpleBar.parameters),Pie.parameters=Object.assign({storySource:{source:"(args) => ({\n  props: args,\n  template: `<ngg-chart [settings]='settings' [theme]='theme'></ngg-chart>`,\n})"}},Pie.parameters),Donut.parameters=Object.assign({storySource:{source:"(args) => ({\n  props: args,\n  template: `<ngg-chart [settings]='settings' [theme]='theme'></ngg-chart>`,\n})"}},Donut.parameters),Lines.parameters=Object.assign({storySource:{source:"(args) => ({\n  props: args,\n  template: `<ngg-chart [settings]='settings' [theme]='theme'></ngg-chart>`,\n})"}},Lines.parameters),Splines.parameters=Object.assign({storySource:{source:"(args) => ({\n  props: args,\n  template: `<ngg-chart [settings]='settings' [theme]='theme'></ngg-chart>`,\n})"}},Splines.parameters),Mixed.parameters=Object.assign({storySource:{source:"(args) => ({\n  props: args,\n  template: `<ngg-chart [settings]='settings' [theme]='theme'></ngg-chart>`,\n})"}},Mixed.parameters)},"./generated-stories-entry.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/angular/dist/ts3.9/client/index.js").configure)([__webpack_require__("./libs/angular-charts/src/lib sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./libs/angular-charts/src/lib sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)},"./libs/angular-charts/.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _storybook_preview_namespaceObject={};__webpack_require__.r(_storybook_preview_namespaceObject),__webpack_require__.d(_storybook_preview_namespaceObject,{parameters:()=>preview_parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),create=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./.storybook/scss-loader.scss"),__webpack_require__("./node_modules/@storybook/theming/dist/esm/create.js")),common={appBorderRadius:3,brandImage:"https://user-images.githubusercontent.com/11420341/121186039-f6eeda00-c866-11eb-9d80-21d01d065f0a.png",brandTitle:"Green",brandUrl:"https://github.com/sebgroup/green",fontBase:'"SEBSansSerif", sans-serif',fontCode:"monospace",gridCellSize:10,inputBorderRadius:7,colorPrimary:"#60CD18",colorSecondary:"#41B0EE"},light=(0,create.U)(Object.assign({},common,{base:"light",appBg:"#eee",appBorderColor:"#CECECE",appContentBg:"#ffffff",barBg:"#E9E9E9",barSelectedColor:"#333",barTextColor:"#333",colorSecondary:"#bbb",inputBg:"#ffffff",inputBorder:"solid black 10px",inputTextColor:"#333",textColor:"#333",textMutedColor:"#333"})),parameters={darkMode:{dark:(0,create.U)(Object.assign({},common,{base:"dark",appBg:"#222222",appBorderColor:"#121212",appContentBg:"#272727",barBg:"#121212",barSelectedColor:"#fff",colorSecondary:"#333",textColor:"#dedede"})),light}},preview_parameters=(__webpack_require__("./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./libs/angular-charts/.storybook/scss-loader.scss"),Object.assign({},parameters));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(_storybook_preview_namespaceObject).forEach((function(key){var value=_storybook_preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/angular/dist/ts3.9/client/index.js")},"./libs/charts/src/scss/index.scss":module=>{"use strict";module.exports='/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/* stylelint-disable max-nesting-depth */\n/* stylelint-enable max-nesting-depth */\n/* For testing purposes only! TODO: remove */\n.elevation-2 {\n  background: var(--elevation-2-bg);\n}\n.tooltip {\n  background: black;\n  color: white;\n  padding: 0.5rem;\n}\n.tooltip dt {\n  font-weight: 800;\n  margin-bottom: 0.25rem;\n}\n.tooltip dd {\n  margin-top: 0.5rem;\n  align-items: center;\n  display: flex;\n}\n.tooltip dd:not(:last-child) {\n  margin-bottom: 0.5rem;\n}\n.tooltip dd::before {\n  background: var(--color);\n  border-radius: 50%;\n  content: "";\n  height: 0.75rem;\n  margin-right: 0.5rem;\n  width: 0.75rem;\n}\n.legend-container {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  position: absolute;\n  top: 0;\n}\n.legend-container.top {\n  align-items: flex-start;\n}\n.legend-container.bottom {\n  align-items: flex-end;\n}\n.legend-container.bottom:not(.right, .left) {\n  justify-content: center;\n  position: relative;\n}\n.legend-container.bottom:not(.right, .left) .legend {\n  display: flex;\n}\n.legend-container.bottom:not(.right, .left) .legend li {\n  margin: 0 0.5rem;\n}\n.legend-container.center {\n  align-items: center;\n}\n.legend-container.bottom {\n  align-items: end;\n}\n.legend-container.right {\n  right: 0;\n}\n.legend-container.left {\n  left: 0;\n}\nul.legend {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nul.legend li {\n  margin-top: 0.5rem;\n  align-items: center;\n  display: flex;\n}\nul.legend li:not(:last-child) {\n  margin-bottom: 0.5rem;\n}\nul.legend li::before {\n  background: var(--color);\n  border-radius: 50%;\n  content: "";\n  height: 0.75rem;\n  margin-right: 0.5rem;\n  width: 0.75rem;\n}\n/* Html x-axis */\nul.x-axis {\n  flex-direction: row;\n  padding-left: var(--chart-space-left);\n  padding-right: var(--chart-space-right);\n  width: 100%;\n}\nul.x-axis li {\n  flex: 1 1;\n  padding: 0 0.5rem;\n  text-align: center;\n  word-break: break-word;\n}\n/*-- Default color pattern --*/\n.bb-color-pattern {\n  background-image: url("#45B400;#0092E1;#FFB400;#D81A1A;#4F2C99;#8AAEC7;#FF7E5A;#898EFE;#FFAC35;#70B0FF;");\n}\n.bb-color-pattern.blue {\n  background-image: url("#0000ff;0000cc;#000099;#EF65A2;#A377FE;#8AAEC7;#FF7E5A;#898EFE;#FFAC35;#70B0FF;");\n}\n.bb-color-pattern.red {\n  background-image: url("#65CFC2;#D0A45F;#64A4F5;#EF65A2;#A377FE;#8AAEC7;#FF7E5A;#898EFE;#FFAC35;#70B0FF;");\n}\n.bb-color-pattern.green {\n  background-image: url("#65CFC2;#D0A45F;#64A4F5;#EF65A2;#A377FE;#8AAEC7;#FF7E5A;#898EFE;#FFAC35;#70B0FF;");\n}\n/*-- Chart --*/\n.chart {\n  position: relative;\n}\n.bb svg {\n  font-family: "SEBSansSerif", Arial, sans-serif;\n  font-size: 12px;\n  line-height: 1;\n}\n.bb path,\n.bb line {\n  fill: none;\n}\n.bb text,\n.bb .bb-button {\n  -webkit-user-select: none;\n          user-select: none;\n  fill: #555;\n  font-size: 16px;\n  letter-spacing: -0.3px;\n}\n.bb-legend-item-title,\n.bb-xgrid-focus,\n.bb-ygrid-focus,\n.bb-ygrid,\n.bb-event-rect,\n.bb-bars path {\n  shape-rendering: crispEdges;\n}\n/*-- Axis --*/\n.bb-axis {\n  shape-rendering: crispEdges;\n}\n.bb-axis-y text,\n.bb-axis-y2 text {\n  fill: black;\n  font-size: 16px;\n  font-weight: 400;\n}\n.bb-axis-y path,\n.bb-axis-y2 path {\n  stroke: transparent;\n  stroke-width: 0;\n}\n.bb-axis-y .tick line,\n.bb-axis-y2 .tick line {\n  stroke: transparent;\n  stroke-width: 0;\n}\n.bb-axis-x text {\n  fill: black;\n  font-size: 16px;\n  font-weight: 400;\n}\n.bb-axis-x path {\n  stroke: #dedede;\n  stroke-width: 1px;\n}\n.bb-axis-x .tick line {\n  stroke: #dedede;\n  stroke-width: 1px;\n}\n/* stylelint-disable */\n.bb-event-rects {\n  fill-opacity: 1 !important;\n}\n.bb-event-rects .bb-event-rect {\n  fill: transparent;\n}\n.bb-event-rects .bb-event-rect._active_ {\n  fill: rgba(39, 201, 3, 0.05);\n}\n.tick._active_ text {\n  fill: #00c83c !important;\n}\n/*-- Grid --*/\n.bb-grid line {\n  stroke: #f1f1f1;\n}\n.bb-grid .base-line line {\n  stroke: #dedede;\n}\n.bb-xgrid-focus line,\n.bb-ygrid-focus line {\n  stroke: #41b0ee;\n  stroke-dasharray: 3px;\n}\n/*-- Text on Chart --*/\n.bb-text.bb-empty {\n  fill: #767676;\n}\n/*-- Line --*/\n.bb-line {\n  stroke-width: 1px;\n}\n/*-- Point --*/\n.bb-circle._expanded_ {\n  stroke-width: 2px;\n}\nrect.bb-circle._expanded_,\nuse.bb-circle._expanded_ {\n  stroke-width: 2px;\n}\n.bb-selected-circle {\n  fill: white;\n  stroke-width: 2px;\n}\n/*-- Bar --*/\n.bb-bar {\n  stroke-width: 0;\n}\n.bb-bar._expanded_ {\n  fill-opacity: 0.75;\n}\n/*-- Candlestick --*/\n.bb-candlestick {\n  stroke-width: 1px;\n}\n.bb-candlestick._expanded_ {\n  fill-opacity: 0.75;\n}\n/*-- Focus --*/\n.bb-target.bb-focused,\n.bb-circles.bb-focused {\n  opacity: 1;\n}\n.bb-target.bb-focused path.bb-line, .bb-target.bb-focused path.bb-step,\n.bb-circles.bb-focused path.bb-line,\n.bb-circles.bb-focused path.bb-step {\n  stroke-width: 2px;\n}\n.bb-target.bb-defocused,\n.bb-circles.bb-defocused {\n  opacity: 0.3 !important;\n}\n.bb-target.bb-defocused .text-overlapping,\n.bb-circles.bb-defocused .text-overlapping {\n  opacity: 0.05 !important;\n}\n/*-- Region --*/\n.bb-region {\n  fill: steelblue;\n  fill-opacity: 0.1;\n}\n.bb-region.selected rect {\n  fill: #27c903;\n}\n/*-- Zoom region --*/\n.bb-zoom-brush {\n  fill-opacity: 0.1;\n}\n/*-- Brush --*/\n.bb-brush .extent {\n  fill-opacity: 0.1;\n}\n/*-- Select - Drag --*/\n/*-- Legend --*/\n.bb-legend-item {\n  -webkit-user-select: none;\n          user-select: none;\n}\n.bb-legend-item-hidden {\n  opacity: 0.15;\n}\n.bb-legend-background {\n  fill: white;\n  opacity: 0.75;\n  stroke: lightgray;\n  stroke-width: 1px;\n}\n.bb-legend-item line {\n  stroke-dasharray: 1px;\n}\n/*-- Title --*/\n.bb-title {\n  font-size: 14px;\n}\n/*-- Tooltip --*/\n.bb-tooltip-container {\n  font-family: "SEBSansSerif", Arial, sans-serif;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 10;\n}\n.bb-tooltip {\n  -webkit-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  border: 1px solid #999;\n  border-collapse: separate;\n  border-radius: 2px;\n  border-spacing: 0;\n  box-shadow: 0.5px 0.5px 1px #999;\n  empty-cells: show;\n  font-size: 12px;\n  text-align: left;\n}\n.bb-tooltip th {\n  background-color: #efefef;\n  border-bottom: dotted 1px #000;\n  color: #000;\n  font-size: 12px;\n  padding: 4px 8px;\n  text-align: center;\n}\n.bb-tooltip tr:last-child td {\n  border-bottom: none;\n}\n.bb-tooltip td {\n  background-color: #fff;\n  border-bottom: solid 1px #eee;\n  padding: 3px 6px;\n}\n.bb-tooltip td:first-child {\n  border-right: solid 1px #eee;\n  padding-left: 5px;\n}\n.bb-tooltip td:last-child {\n  padding-right: 5px;\n}\n.bb-tooltip td > span,\n.bb-tooltip td > svg {\n  display: inline-block;\n  height: 12px;\n  margin-right: 6px;\n  vertical-align: middle;\n  width: 5px;\n}\n.bb-tooltip td.value {\n  border-left: 1px solid transparent;\n  text-align: right;\n}\n.bb-tooltip .bb-tooltip-title {\n  color: #aaa;\n  display: inline-block;\n  line-height: 20px;\n}\n.bb-tooltip .bb-tooltip-detail table {\n  border-collapse: collapse;\n  border-spacing: 1px;\n  font-size: 12px;\n}\n.bb-tooltip .bb-tooltip-detail .bb-tooltip-name,\n.bb-tooltip .bb-tooltip-detail .bb-tooltip-value {\n  color: #444;\n  font-weight: normal;\n  line-height: 13px;\n  padding: 4px 0 3px;\n  text-align: left;\n}\n.bb-tooltip .bb-tooltip-detail .bb-tooltip-value {\n  font-weight: 800;\n  padding-left: 5px;\n}\n/*-- Area --*/\n.bb-area {\n  opacity: 0.2;\n  stroke-width: 0;\n}\n/*-- Arc --*/\n.bb-chart-arcs-title {\n  dominant-baseline: middle;\n  font-size: 1.3em;\n}\n.bb-chart-arcs-gauge-title {\n  dominant-baseline: middle;\n  font-size: 2.7em;\n}\n.bb-chart-arcs .bb-chart-arcs-background {\n  fill: #e0e0e0;\n  stroke: #fff;\n}\n.bb-chart-arcs .bb-chart-arcs-gauge-unit {\n  fill: #000;\n  font-size: 16px;\n}\n.bb-chart-arcs .bb-chart-arcs-gauge-min,\n.bb-chart-arcs .bb-chart-arcs-gauge-max {\n  fill: #777;\n}\n.bb-chart-arcs .bb-chart-arcs-title {\n  fill: #8c8c8c;\n  font-size: 16px !important;\n  font-style: italic;\n}\n.bb-chart-arcs path.empty {\n  fill: #eaeaea;\n  stroke-width: 0;\n}\n.bb-chart-arc .bb-gauge-value {\n  fill: #8c8c8c;\n  font-style: italic;\n}\n.bb-chart-arc path {\n  stroke: #fff;\n}\n.bb-chart-arc rect {\n  stroke: white;\n  stroke-width: 1;\n}\n.bb-chart-arc text {\n  fill: #fff;\n  font-size: 13px;\n  font-weight: bold;\n}\n/*-- Radar --*/\n.bb-chart-radars .bb-levels polygon {\n  fill: none;\n  stroke: #8c8c8c;\n  stroke-width: 0.5px;\n}\n.bb-chart-radars .bb-levels text {\n  fill: #8c8c8c;\n}\n.bb-chart-radars .bb-axis line {\n  stroke: #8c8c8c;\n  stroke-width: 0.5px;\n}\n.bb-chart-radars .bb-axis text {\n  cursor: default;\n  font-size: 1.15em;\n  font-weight: bold;\n}\n.bb-chart-radars .bb-shapes polygon {\n  fill-opacity: 0.2;\n  stroke-width: 1px;\n}\n/*-- Button --*/\n.bb-button {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.bb-button .bb-zoom-reset {\n  background-color: #fff;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n  box-shadow: 1px 1px 2px #ccc;\n  cursor: pointer;\n  opacity: 0.8;\n  padding: 5px;\n}\n/* stylelint-enable */'},"./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./.storybook/scss-loader.scss":module=>{"use strict";module.exports='var api = require("!../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n            var content = require("!!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss-loader.scss");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === \'string\') {\n              content = [[module.id, content, \'\']];\n            }\n\nvar options = {};\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};'},"./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./libs/angular-charts/.storybook/scss-loader.scss":module=>{"use strict";module.exports='var api = require("!../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n            var content = require("!!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./scss-loader.scss");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === \'string\') {\n              content = [[module.id, content, \'\']];\n            }\n\nvar options = {};\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};'},"?a380":()=>{},"?4f7e":()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[5],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/angular/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/angular/dist/ts3.9/client/preview/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./libs/angular-charts/.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js"),__webpack_exec__("./node_modules/core-js/proposals/reflect-metadata.js"))));__webpack_require__.O()}]);