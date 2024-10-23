"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[817],{"./libs/angular-charts/src/lib/chart/chart.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColours:()=>CustomColours,CustomTickValues:()=>CustomTickValues,Donut:()=>Donut,EmptyChart:()=>EmptyChart,FitToHeight:()=>FitToHeight,HideAxes:()=>HideAxes,Lines:()=>Lines,Mixed:()=>Mixed,MixedGraphWithNegativeValues:()=>MixedGraphWithNegativeValues,MixedSecondY:()=>MixedSecondY,ObservableSimpleBar:()=>ObservableSimpleBar,Pie:()=>Pie,SimpleBar:()=>SimpleBar,Splines:()=>Splines,__namedExportsOrder:()=>__namedExportsOrder,default:()=>chart_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),platform_browser=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),billboard=__webpack_require__("./node_modules/billboard.js/dist-esm/billboard.js");const createOptions=({settings,chartElement})=>{const columns=settings.data.map((d=>[d.name,...d.values])),defaultType=settings.type||"bar",types=settings.data.reduce(((res,d)=>({...res,[d.name]:d.type||defaultType})),{}),axes=settings.data.reduce(((res,d)=>({...res,[d.name]:d.axis||"y"})),{}),color=Object.assign({},settings.style?.color),options={bindto:chartElement,data:{columns,types,axes},legend:{show:!1},tooltip:{format:{value:(value,ratio,id,index)=>{const formatOverride=settings?.style?.tooltipNumberFormat;return"function"==typeof formatOverride?formatOverride(value,ratio,id,index):"number"==typeof ratio?(ratio=>`${Number((100*ratio).toFixed(2))}%`)(ratio):value.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}},contents:{template:'\n  <dl class="bb-tooltip-list">\n    <dt>{=TITLE}</dt>\n    {{\n    <dd class="{=CLASS_TOOLTIP_NAME}" style="--color: {=COLOR}">\n      <span>{=NAME} {=VALUE}</span>\n    </dd>\n    }}\n  </dl>\n'}},color};let hasY2Axis=!1;if(hasY2Axis=-1!==Object.values(axes).indexOf("y2"),hasY2Axis&&(options.axis={...options.axis||{},y2:{show:!0}}),null!=settings?.style?.point){let pointSetting;pointSetting="focus"===settings?.style.point.show?{focus:{only:!0}}:{show:settings?.style.point.show},options.point={...pointSetting}}if(null!=settings?.style?.axis){let axesSetting;axesSetting=!1===settings?.style.axis?{y:{show:!1},y2:{show:!1},x:{show:!1}}:Object.entries(settings?.style.axis).reduce(((axes,[axis,settings])=>({...axes,[axis]:{...axes[axis]||{},...(settings?.ticksCount||settings?.stepSize||settings?.values||settings?.format)&&{tick:{...settings?.ticksCount&&{count:settings?.ticksCount},...settings?.stepSize&&{stepSize:settings?.stepSize},...settings?.values&&{values:settings.values},...settings?.format&&{format:settings.format}}},show:!1!==settings?.show,label:settings?.label,min:settings?.min,max:settings?.max,padding:settings?.padding,height:settings?.height,..."y"===axis||"x"===axis?{clipPath:!1}:{}}})),{...options.axis||{}}),options.axis={...options.axis,...axesSetting}}let hasNegativeValue=!1;for(const dt of columns){for(const val of dt)if("number"==typeof val&&val<0){hasNegativeValue=!0;break}if(hasNegativeValue)break}return hasNegativeValue&&(options.grid={y:{lines:[{value:0,class:"base-line"}]}}),settings.categories&&(options.axis={...options.axis||{},x:{...options?.axis?.x||{},type:"category",categories:settings.categories}}),options},createInfo=(settings,chart)=>{const info={legend:{items:settings.data.map((d=>({title:d.name,color:chart.color(d.name)}))),placement:settings.legend||"none"}};return(!0===settings.style?.axis||!1!==settings.style?.axis&&!1!==settings.style?.axis?.x?.show)&&(info.xAxis={ticks:chart.categories()?.map((text=>({text})))}),info},create=({settings,chartElement})=>{const options=createOptions({settings,chartElement}),chart=billboard.Ay.generate(options),wrapper={settings,info:createInfo(settings,chart),focus:targetIds=>chart.focus(targetIds),revert:targetIds=>chart.revert(targetIds),toggle:targetIds=>chart.toggle(targetIds),update:()=>null};return wrapper.update=({settings,chartElement})=>{const newOptions=(({settings,chartElement})=>{const data=createOptions({settings,chartElement}).data||{},update={columns:data.columns||[],types:data.types||{}};return settings.categories&&(update.categories=settings.categories),update})({settings,chartElement,oldSettings:wrapper.settings});chart.load(newOptions);const info=createInfo(settings,chart);return wrapper.info=info,wrapper.settings=settings,wrapper},wrapper};billboard.n8&&((0,billboard.n8)(),(0,billboard.M0)(),(0,billboard.nq)(),(0,billboard.Wc)(),(0,billboard.Y7)(),(0,billboard.rL)());let NggChartComponent=class NggChartComponent{get chart(){return this._chart}set chart(value){this._chart=value}get theme(){return this._theme}set theme(value){this._theme=value}get settings(){return this._settings}set settings(value){this._settings=value,this.settings&&this.settings.data&&this._chartElementRef&&this.setChart({settings:this.settings,chartElement:this._chartElementRef?.nativeElement})}constructor(_cdr){this._cdr=_cdr}ngAfterViewInit(){this.settings&&this._chartElementRef&&this.setChart({settings:this.settings,chartElement:this._chartElementRef?.nativeElement})}setChart(args){this.chart?this.chart?.update(args):this.chart=create(args),this._cdr.detectChanges()}static{this.ctorParameters=()=>[{type:core.ChangeDetectorRef}]}static{this.propDecorators={_chartElementRef:[{type:core.ViewChild,args:["chartRef"]}],theme:[{type:core.Input}],settings:[{type:core.Input}]}}};NggChartComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngg-chart",template:' <div\n    class="chart"\n    [class.fit-height]="chart?.settings?.style?.fitHeightToParent"\n  >\n    <div #chartRef [class]="theme"></div>\n    <ng-container *ngIf="chart?.info?.legend as legend">\n      <div\n        class="legend-container"\n        [class]="legend.placement"\n        *ngIf="legend.placement !== \'none\'"\n      >\n        <ul class="legend">\n          <li\n            *ngFor="let item of legend.items"\n            [style.--color]="item.color"\n            (mouseover)="chart.focus(item.title)"\n            (mouseup)="chart.focus(item.title)"\n            (mouseout)="chart.revert()"\n          >\n            <span>{{ item.title }}</span>\n          </li>\n        </ul>\n      </div>\n    </ng-container>\n  </div>',changeDetection:core.ChangeDetectionStrategy.OnPush}),(0,tslib_es6.Sn)("design:paramtypes",[core.ChangeDetectorRef])],NggChartComponent);let NggChartsModule=class NggChartsModule{};NggChartsModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[NggChartComponent],exports:[NggChartComponent]})],NggChartsModule);const chart_stories={title:"Chart",parameters:{componentIds:["component-chart"]},decorators:[(0,dist.moduleMetadata)({imports:[platform_browser.BrowserModule,common.CommonModule,NggChartsModule]})]},ChartStory=args=>({props:args,template:'<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>'}),SimpleBar=ChartStory.bind({});SimpleBar.args={theme:"",settings:{data:[{name:"Antal",type:"bar",values:[234,197,97,12]}],categories:["Signerade avtal (SEB)","Påbörjade trials (Oxceed)","Aktiverade prenumerationer","Avslutade prenumerationer (endast efter avslutad ordinarie pren.)"],style:{axis:{y:{label:"Antal",stepSize:50}},tooltipNumberFormat:value=>`${value} st`}}};const EmptyChart=ChartStory.bind({});EmptyChart.args={settings:null,theme:""};const ObservableSimpleBar=(args=>({props:args,template:'<ngg-chart [settings]="settings | async" [theme]="theme"></ngg-chart>'})).bind({});ObservableSimpleBar.args={settings:(0,of.of)({data:[{name:"Antal",type:"bar",values:[234,197,97,12]}],categories:["Signerade avtal (SEB)","Påbörjade trials (Oxceed)","Aktiverade prenumerationer","Avslutade prenumerationer (endast efter avslutad ordinarie pren.)"]}),theme:""};const Pie=ChartStory.bind({});Pie.args={settings:{type:"pie",data:[{name:"Ej tilldelade",values:[700]},{name:"Tilldelade",values:[200]},{name:"Utnyttjade",values:[100]}],legend:"right"},theme:""};const Donut=ChartStory.bind({});Donut.args={settings:{type:"donut",data:[{name:"Ej tilldelade",values:[700]},{name:"Tilldelade",values:[200]},{name:"Utnyttjade",values:[100]}]},theme:""};const Lines=ChartStory.bind({});Lines.args={settings:{data:[{name:"Signerade avtal SEB",type:"line",values:[10,14,6,15]},{name:"Påbörjade trials",type:"line",values:[8,9,13,11]},{name:"Aktiverade prenumerationer",type:"line",values:[3,7,9,10]}],categories:["jan","feb","mar","apr"]},theme:""};const HideAxes=ChartStory.bind({});HideAxes.args={settings:{data:[{name:"Signerade avtal SEB",type:"line",values:[10,14,6,15]},{name:"Påbörjade trials",type:"line",values:[8,9,13,11]},{name:"Aktiverade prenumerationer",type:"line",values:[3,7,9,10]}],categories:["jan","feb","mar","apr"],style:{axis:!1,point:{show:"focus"}}}};const Splines=ChartStory.bind({});Splines.args={settings:{type:"spline",data:[{name:"Signerade avtal SEB",values:[10,14,6,15]},{name:"Påbörjade trials",values:[8,9,13,11]},{name:"Aktiverade prenumerationer",values:[3,7,9,10]}],categories:["jan","feb","mar","apr"]},theme:""};const Mixed=ChartStory.bind({});Mixed.args={settings:{data:[{type:"spline",name:"Signerade avtal SEB",values:[10,14,6,15]},{type:"area",name:"Påbörjade trials",values:[8,9,13,11]},{type:"bar",name:"Aktiverade prenumerationer",values:[3,7,9,10]}],categories:["jan","feb","mar","apr"],legend:"right"},theme:""};const MixedSecondY=ChartStory.bind({});MixedSecondY.args={settings:{data:[{type:"spline",name:"Signerade avtal SEB",values:[100,140,60,150]},{type:"area",name:"Påbörjade trials",values:[80,90,130,110]},{type:"bar",name:"Aktiverade prenumerationer",values:[3,7,9,2],axis:"y2"}],categories:["jan","feb","mar","apr"],legend:"top"},theme:""};const FitToHeight=(args=>({props:args,template:'<div class="card" style="height: 340px">\n                <header><h3>Chart in card with locked height (340px)</h3></header>\n                <div>\n                    <ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>\n                </div>\n             </div>'})).bind({});FitToHeight.storyName="Fit to height of parent",FitToHeight.args={theme:"",settings:{style:{fitHeightToParent:!0},data:[{name:"Antal",type:"bar",values:[234,197,97,12]}],categories:["Signerade avtal (SEB)","Påbörjade trials (Oxceed)","Aktiverade prenumerationer","Avslutade prenumerationer"]}};const CustomTickValues=ChartStory.bind({});CustomTickValues.args={settings:{data:[{type:"spline",name:"Signerade avtal SEB",values:[100,140,250,380]},{type:"bar",name:"Aktiverade prenumerationer",values:[3,7,9,2],axis:"y2"}],categories:["jan","feb","mar","apr"],legend:"top",style:{axis:{y:{values:[100,200,300,400]},y2:{values:()=>[0,4,8,10]}}}},theme:""};const MixedGraphWithNegativeValues=ChartStory.bind({});MixedGraphWithNegativeValues.args={settings:{data:[{type:"spline",name:"Signerade avtal SEB",values:[100,140,250,380,-100,345,100,50,20,230,-20,180]},{type:"line",name:"Aktiverade prenumerationer",values:[-100],axis:"y2"},{type:"bar",name:"Aktiverade prenumerationer",values:[50,230,100,280,100,-30,-200,100,20,230,-20,180],axis:"y2"}],categories:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],legend:"top"},theme:""};const CustomColours=ChartStory.bind({});CustomColours.args={settings:{type:"donut",data:[{name:"Ej tilldelade",values:[600]},{name:"Tilldelade",values:[100]}],style:{color:{pattern:["#dadada","#45B400"]}}},theme:""};const __namedExportsOrder=["SimpleBar","EmptyChart","ObservableSimpleBar","Pie","Donut","Lines","HideAxes","Splines","Mixed","MixedSecondY","FitToHeight","CustomTickValues","MixedGraphWithNegativeValues","CustomColours"];SimpleBar.parameters={...SimpleBar.parameters,docs:{...SimpleBar.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: args,\n  template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`\n})',...SimpleBar.parameters?.docs?.source}}},EmptyChart.parameters={...EmptyChart.parameters,docs:{...EmptyChart.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: args,\n  template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`\n})',...EmptyChart.parameters?.docs?.source}}},ObservableSimpleBar.parameters={...ObservableSimpleBar.parameters,docs:{...ObservableSimpleBar.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: args,\n  template: `<ngg-chart [settings]="settings | async" [theme]="theme"></ngg-chart>`\n})',...ObservableSimpleBar.parameters?.docs?.source}}},Pie.parameters={...Pie.parameters,docs:{...Pie.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: args,\n  template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`\n})',...Pie.parameters?.docs?.source}}},Donut.parameters={...Donut.parameters,docs:{...Donut.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: args,\n  template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`\n})',...Donut.parameters?.docs?.source}}},Lines.parameters={...Lines.parameters,docs:{...Lines.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: args,\n  template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`\n})',...Lines.parameters?.docs?.source}}},HideAxes.parameters={...HideAxes.parameters,docs:{...HideAxes.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: args,\n  template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`\n})',...HideAxes.parameters?.docs?.source}}},Splines.parameters={...Splines.parameters,docs:{...Splines.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: args,\n  template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`\n})',...Splines.parameters?.docs?.source}}},Mixed.parameters={...Mixed.parameters,docs:{...Mixed.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: args,\n  template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`\n})',...Mixed.parameters?.docs?.source}}},MixedSecondY.parameters={...MixedSecondY.parameters,docs:{...MixedSecondY.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: args,\n  template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`\n})',...MixedSecondY.parameters?.docs?.source}}},FitToHeight.parameters={...FitToHeight.parameters,docs:{...FitToHeight.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: args,\n  template: `<div class="card" style="height: 340px">\n                <header><h3>Chart in card with locked height (340px)</h3></header>\n                <div>\n                    <ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>\n                </div>\n             </div>`\n})',...FitToHeight.parameters?.docs?.source}}},CustomTickValues.parameters={...CustomTickValues.parameters,docs:{...CustomTickValues.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: args,\n  template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`\n})',...CustomTickValues.parameters?.docs?.source}}},MixedGraphWithNegativeValues.parameters={...MixedGraphWithNegativeValues.parameters,docs:{...MixedGraphWithNegativeValues.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: args,\n  template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`\n})',...MixedGraphWithNegativeValues.parameters?.docs?.source}}},CustomColours.parameters={...CustomColours.parameters,docs:{...CustomColours.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: args,\n  template: `<ngg-chart [settings]="settings" [theme]="theme"></ngg-chart>`\n})',...CustomColours.parameters?.docs?.source}}}}}]);