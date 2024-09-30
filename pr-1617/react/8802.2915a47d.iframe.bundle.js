"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[8802],{"./dist/libs/core/src/chunks/chunk.C3ECHGX7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JD:()=>dateConverter,_h:()=>dateArrayConverter,xj:()=>stringArrayConverter});var dateConverter={fromAttribute:function fromAttribute(value){return new Date(value)},toAttribute:function toAttribute(value){return value.toISOString()}},dateArrayConverter={fromAttribute:function fromAttribute(value){return value.split(",").map((function(d){return new Date(d.trim())}))},toAttribute:function toAttribute(value){return JSON.stringify(value.map((function(d){return d.toISOString()})))}},stringArrayConverter={fromAttribute:function fromAttribute(value){return value.split(",")},toAttribute:function toAttribute(value){return Array.isArray(value)?value.join(","):value}}},"./libs/react/src/lib/datepicker/datepicker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>datepicker});var _t,_t2,_t3,_t4,_t5,_t6,_t7,_t8,_t9,_t10,objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),_lit_react=__webpack_require__("./node_modules/@lit/react/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),chunk_C3ECHGX7=__webpack_require__("./dist/libs/core/src/chunks/chunk.C3ECHGX7.js"),chunk_YUFO2JLT=__webpack_require__("./dist/libs/core/src/chunks/chunk.YUFO2JLT.js"),chunk_3XCSDEVC=__webpack_require__("./dist/libs/core/src/chunks/chunk.3XCSDEVC.js"),chunk_2WO4NHJ2=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),chunk_7E55NP7L=__webpack_require__("./dist/libs/core/src/chunks/chunk.7E55NP7L.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),join=__webpack_require__("./node_modules/lit-html/directives/join.js"),when=__webpack_require__("./node_modules/lit-html/directives/when.js"),until=__webpack_require__("./node_modules/lit/directives/until.js"),map=__webpack_require__("./node_modules/lit-html/directives/map.js"),repeat=__webpack_require__("./node_modules/lit/directives/repeat.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),isSameDay=__webpack_require__("./node_modules/date-fns/esm/isSameDay/index.js"),_2=function _2(t){return t};function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var _valueOnOpen,_renderBackToValidRangeButton,renderBackToValidRangeButton_fn,_focusDate,focusDate_fn,_getSpinnerLabel,getSpinnerLabel_fn,_getMinSpinnerValue,getMinSpinnerValue_fn,_getMaxSpinnerValue,getMaxSpinnerValue_fn,_dispatchChangeEvent,dispatchChangeEvent_fn,_dispatchInputEvent,dispatchInputEvent_fn,_handleFieldFocusOut,_handleSpinnerFocus,_handleClipboardCopy,_handleClipboardPaste,_handleFieldClick,_handleCalendarChange,_handleMonthChange,_handleYearChange,_handleIncrementFocusedMonth,_handleDecrementFocusedMonth,_handleCalendarFocusChange,_handlePopoverStateChange,_handleSpinnerKeydown,_parseDateFormat,parseDateFormat_fn,_handleSpinnerChange,_spinnerState,_years,years_get,_isValueOutsideRange,isValueOutsideRange_get,styles=(0,lit.AH)(_t||(_t=_2`
  @layer base, reset;

  @layer base {
    :host {
      font-family: inherit;
      display: flex;
      flex-direction: column;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-inline: var(--gds-space-s);
      padding-block-start: var(--gds-space-m);
      gap: var(--gds-space-xs);
      box-sizing: border-box;
    }

    .header gds-dropdown.month {
      min-width: 140px;
      flex: 1;
    }

    .header gds-dropdown.year {
      width: 110px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      padding-inline: var(--gds-space-s);
      padding-block-end: var(--gds-space-s);
    }

    label {
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-book);
      font-family: inherit;
    }

    .form-info {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
      font-weight: var(--gds-text-weight-regular);
    }

    .field {
      display: flex;
      justify-content: space-between;
      gap: var(--gds-space-2xs);
      padding: var(--gds-space-2xs);
      border-radius: var(--gds-space-xs);
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-regular);
      font-family: inherit;
      overflow: hidden;
      margin-block: var(--gds-space-xs);
      max-width: 100%;
      cursor: pointer;
      color: currentColor;
      height: var(--gds-space-3xl);
      box-sizing: border-box;
      border-width: var(--gds-space-4xs);
      border-style: solid;

      // TODO: Update colors with tokens
      border-color: #6f6f6f;
      color: #1b1b1b;
      background-color: #e2e2e2;

      &:hover {
        background-color: #cecece;
      }

      .input {
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: max-content;
        text-transform: uppercase;
        flex: 1;
        font-variant-numeric: tabular-nums;

        &:focus-within span {
          opacity: 0;
        }

        .spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          outline-color: currentcolor;
          outline-offset: -4px;
          outline-width: var(--gds-space-3xs);
          box-sizing: border-box;
          border-radius: var(--gds-space-xs);
          padding-inline: 1ch;

          &:focus-visible {
            outline-style: solid;
          }
        }
      }

      button {
        appearance: none;
        background: transparent;
        border: 0;
        box-sizing: border-box;
        color: currentColor;
        cursor: pointer;
        aspect-ratio: 1;
        margin: 0;
        padding: 0;
        outline-color: inherit;
        outline-offset: -4px;
        border-radius: var(--gds-space-xs);
        padding-top: var(--gds-space-3xs);
        font-family: inherit;

        &:focus-visible,
        &:hover {
          outline: var(--gds-space-3xs) solid currentcolor;
        }
      }

      &.small {
        height: var(--gds-space-xl);
        font-size: var(--gds-text-size-detail-s);
        padding: 0;

        button {
          outline-offset: -4px;
          border-radius: var(--gds-space-xs);
          padding-top: 3px;
        }
      }
    }
  }
`)),GdsDatepicker=function(_GdsFormControlElemen){function GdsDatepicker(){var _this;return(0,classCallCheck.A)(this,GdsDatepicker),_this=_callSuper(this,GdsDatepicker,arguments),(0,chunk_5VURDMKE.VK)(_this,_renderBackToValidRangeButton),(0,chunk_5VURDMKE.VK)(_this,_focusDate),(0,chunk_5VURDMKE.VK)(_this,_getSpinnerLabel),(0,chunk_5VURDMKE.VK)(_this,_getMinSpinnerValue),(0,chunk_5VURDMKE.VK)(_this,_getMaxSpinnerValue),(0,chunk_5VURDMKE.VK)(_this,_dispatchChangeEvent),(0,chunk_5VURDMKE.VK)(_this,_dispatchInputEvent),(0,chunk_5VURDMKE.VK)(_this,_parseDateFormat),(0,chunk_5VURDMKE.VK)(_this,_years),(0,chunk_5VURDMKE.VK)(_this,_isValueOutsideRange),_this.min=new Date((new Date).getFullYear()-10,0,1),_this.max=new Date((new Date).getFullYear()+10,0,1),_this.open=!1,_this.label="",_this.showWeekNumbers=!1,_this.size="medium",_this.hideLabel=!1,_this.disabledWeekends=!1,_this._focusedMonth=(new Date).getMonth(),_this._focusedYear=(new Date).getFullYear(),_this._dateFormatLayout=(0,chunk_5VURDMKE.jq)(_this,_parseDateFormat,parseDateFormat_fn).call(_this,"y-m-d"),(0,chunk_5VURDMKE.VK)(_this,_valueOnOpen,void 0),(0,chunk_5VURDMKE.VK)(_this,_handleFieldFocusOut,(function(e){_this._elTrigger.then((function(_){var _a,_b;(null==(_a=e.relatedTarget)?void 0:_a.parentElement)!==e.target&&(null==(_b=document.getSelection())||_b.removeAllRanges())}))})),(0,chunk_5VURDMKE.VK)(_this,_handleSpinnerFocus,(function(e){_this._elTrigger.then((function(field){var _a,_b;null==(_a=document.getSelection())||_a.removeAllRanges();var range=new Range;range.setStart(field.firstChild,0),range.setEnd(field.lastChild,4),null==(_b=document.getSelection())||_b.addRange(range)}))})),(0,chunk_5VURDMKE.VK)(_this,_handleClipboardCopy,(function(e){_this._elField.then((function(field){var _a;e.currentTarget===field&&(e.preventDefault(),null==(_a=e.clipboardData)||_a.setData("text/plain",_this.displayValue))}))})),(0,chunk_5VURDMKE.VK)(_this,_handleClipboardPaste,(function(e){_this._elField.then((function(field){var _a;if(e.currentTarget===field){e.preventDefault();var pasted=null==(_a=e.clipboardData)?void 0:_a.getData("text/plain");if(pasted){var pastedDate=new Date("-"),parts=pasted.split(_this._dateFormatLayout.delimiter);if(3===parts.length){var layout=_this._dateFormatLayout.layout,year=parseInt(parts[layout.findIndex((function(f){return"y"===f.token}))]),month=parseInt(parts[layout.findIndex((function(f){return"m"===f.token}))])-1,day=parseInt(parts[layout.findIndex((function(f){return"d"===f.token}))]);isNaN(year)||isNaN(month)||isNaN(day)||(pastedDate=new Date("".concat(year,"-").concat(month+1,"-").concat(day)))}"Invalid Date"===pastedDate.toString()&&"Invalid Date"===(pastedDate=new Date(pasted)).toString()||(_this.value=pastedDate,(0,chunk_5VURDMKE.jq)(_this,_dispatchChangeEvent,dispatchChangeEvent_fn).call(_this))}}}))})),(0,chunk_5VURDMKE.VK)(_this,_handleFieldClick,(function(e){var _a;null==(_a=_this._elSpinners[0])||_a.focus()})),(0,chunk_5VURDMKE.VK)(_this,_handleCalendarChange,(function(e){e.stopPropagation(),_this.value=e.detail,_this.open=!1,(0,chunk_5VURDMKE.jq)(_this,_dispatchChangeEvent,dispatchChangeEvent_fn).call(_this)})),(0,chunk_5VURDMKE.VK)(_this,_handleMonthChange,(function(e){var _a;e.stopPropagation(),_this._focusedMonth=null==(_a=e.target)?void 0:_a.value})),(0,chunk_5VURDMKE.VK)(_this,_handleYearChange,(function(e){var _a;e.stopPropagation(),_this._focusedYear=null==(_a=e.target)?void 0:_a.value})),(0,chunk_5VURDMKE.VK)(_this,_handleIncrementFocusedMonth,(function(_e){_this._focusedMonth++,_this._focusedMonth>11&&(_this._focusedMonth=0,_this._focusedYear++)})),(0,chunk_5VURDMKE.VK)(_this,_handleDecrementFocusedMonth,(function(_e){_this._focusedMonth--,_this._focusedMonth<0&&(_this._focusedMonth=11,_this._focusedYear--)})),(0,chunk_5VURDMKE.VK)(_this,_handleCalendarFocusChange,(0,asyncToGenerator.A)(regenerator_default().mark((function _callee(){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_this._elCalendar;case 2:return _this._focusedMonth=_context.sent.focusedMonth,_context.next=5,_this._elCalendar;case 5:return _this._focusedYear=_context.sent.focusedYear,_context.next=8,_this._elCalendar;case 8:_this.value=_context.sent.focusedDate,_this.requestUpdate(),(0,chunk_5VURDMKE.jq)(_this,_dispatchInputEvent,dispatchInputEvent_fn).call(_this);case 11:case"end":return _context.stop()}}),_callee)})))),(0,chunk_5VURDMKE.VK)(_this,_handlePopoverStateChange,function(){var _ref2=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee2(e){var calValue;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(e.target===e.currentTarget){_context2.next=2;break}return _context2.abrupt("return");case 2:if(_this.open=e.detail.open,"close"!==e.detail.reason){_context2.next=10;break}return _context2.next=6,_this._elCalendar;case 6:calValue=_context2.sent.value,!(0,isSameDay.A)(calValue||new Date(0),(0,chunk_5VURDMKE.S7)(_this,_valueOnOpen)||new Date(0))&&(_this.value=calValue,(0,chunk_5VURDMKE.jq)(_this,_dispatchChangeEvent,dispatchChangeEvent_fn).call(_this)),_this.value&&(_this._focusedMonth=_this.value.getMonth(),_this._focusedYear=_this.value.getFullYear());case 10:"cancel"===e.detail.reason&&(_this.value=(0,chunk_5VURDMKE.S7)(_this,_valueOnOpen));case 11:case"end":return _context2.stop()}}),_callee2)})));return function(_x){return _ref2.apply(this,arguments)}}()),(0,chunk_5VURDMKE.VK)(_this,_handleSpinnerKeydown,(function(e){var index=Array.from(_this._elSpinners).findIndex((function(spinner){return spinner===e.target}));if("ArrowRight"===e.key){var next=_this._elSpinners[index+1];next&&next.focus()}if("ArrowLeft"===e.key){var prev=_this._elSpinners[index-1];prev&&prev.focus()}})),(0,chunk_5VURDMKE.VK)(_this,_handleSpinnerChange,(function(val,name){(0,chunk_5VURDMKE.S7)(_this,_spinnerState)[name]=val;var newDate=new Date;newDate.setFullYear(parseInt((0,chunk_5VURDMKE.S7)(_this,_spinnerState).year)),newDate.setMonth(parseInt((0,chunk_5VURDMKE.S7)(_this,_spinnerState).month)-1),newDate.setDate(parseInt((0,chunk_5VURDMKE.S7)(_this,_spinnerState).day)),"Invalid Date"!==newDate.toString()&&(_this.value=newDate,(0,chunk_5VURDMKE.jq)(_this,_dispatchChangeEvent,dispatchChangeEvent_fn).call(_this))})),(0,chunk_5VURDMKE.VK)(_this,_spinnerState,{year:"yyyy",month:"mm",day:"dd"}),_this}return(0,inherits.A)(GdsDatepicker,_GdsFormControlElemen),(0,createClass.A)(GdsDatepicker,[{key:"type",get:function get(){return"gds-datepicker"}},{key:"dateformat",get:function get(){return this._dateFormatLayout.layout.map((function(f){return f.token})).join(this._dateFormatLayout.delimiter)},set:function set(dateformat){this._dateFormatLayout=(0,chunk_5VURDMKE.jq)(this,_parseDateFormat,parseDateFormat_fn).call(this,dateformat)}},{key:"getFocusedDate",value:(_getFocusedDate=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee3(){return regenerator_default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(!this.open){_context3.next=4;break}return _context3.abrupt("return",this._elCalendar.then((function(el){return el.focusedDate})));case 4:return _context3.abrupt("return",void 0);case 5:case"end":return _context3.stop()}}),_callee3,this)}))),function getFocusedDate(){return _getFocusedDate.apply(this,arguments)})},{key:"displayValue",get:function get(){return this._elInput.innerText.replace(/\s+/g,"")}},{key:"test_getDateCell",value:(_test_getDateCell=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee4(dayNumber){return regenerator_default().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return _context4.abrupt("return",this._elCalendar.then((function(el){return el.getDateCell(dayNumber)})));case 1:case"end":return _context4.stop()}}),_callee4,this)}))),function test_getDateCell(_x2){return _test_getDateCell.apply(this,arguments)})},{key:"connectedCallback",value:function connectedCallback(){!function _superPropGet(t,e,o,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),e,o);return 2&r&&"function"==typeof p?function(t){return p.apply(o,t)}:p}(GdsDatepicker,"connectedCallback",this,3)([]),chunk_3XCSDEVC.nD.instance.apply(this,"gds-datepicker")}},{key:"render",value:function render(){var _this2=this;return(0,chunk_VOYMQ322.qy)(_t2||(_t2=_2`${0}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${0}
        id="field"
        @click=${0}
        @copy=${0}
        @paste=${0}
      >
        <div
          class=${0}
          @focusout=${0}
        >
          ${0}
        </div>
        <button
          id="calendar-button"
          aria-label="${0}"
          aria-haspopup="menu"
          aria-expanded=${0}
          aria-controls="calendar-popover"
          aria-describedby="label"
          size=${0}
        >
          <gds-icon-calendar></gds-icon-calendar>
        </button>
      </div>

      <div class="form-info">
        <slot name="message">${0}</slot>
      </div>

      <gds-popover
        .triggerRef=${0}
        .anchorRef=${0}
        .open=${0}
        @gds-ui-state=${0}
        label=${0}
        id="calendar-popover"
        .placement=${0}
        .calcMinWidth=${0}
        .useModalInMobileView=${0}
        @focusin=${0}
      >
        <div class="header">
          <gds-button
            @click=${0}
            aria-label=${0}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${0}
            @change=${0}
            .maxHeight=${0}
            label="${0}"
            size="small"
            class="month"
            hide-label
          >
            <gds-option value="0">${0}</gds-option>
            <gds-option value="1">${0}</gds-option>
            <gds-option value="2">${0}</gds-option>
            <gds-option value="3">${0}</gds-option>
            <gds-option value="4">${0}</gds-option>
            <gds-option value="5">${0}</gds-option>
            <gds-option value="6">${0}</gds-option>
            <gds-option value="7">${0}</gds-option>
            <gds-option value="8">${0}</gds-option>
            <gds-option value="9">${0}</gds-option>
            <gds-option value="10">${0}</gds-option>
            <gds-option value="11">${0}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${0}
            @change=${0}
            .maxHeight=${0}
            label="${0}"
            size="small"
            class="year"
            hide-label
          >
            ${0}
          </gds-dropdown>
          <gds-button
            @click=${0}
            aria-label=${0}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${0}
          @gds-date-focused=${0}
          .focusedMonth=${0}
          .focusedYear=${0}
          .value=${0}
          .min=${0}
          .max=${0}
          .showWeekNumbers=${0}
          .disabledWeekends=${0}
          .disabledDates=${0}
        ></gds-calendar>

        <div class="footer">
          <gds-button
            rank="tertiary"
            size="small"
            @click=${0}
          >
            ${0}
          </gds-button>
          ${0}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${0}
          >
            ${0}
          </gds-button>
        </div>
      </gds-popover> `),(0,when.z)(this.label&&!this.hideLabel,(function(){return(0,chunk_VOYMQ322.qy)(_t3||(_t3=_2`<label for="spinner-0" id="label">${0}</label>`),_this2.label)})),(0,class_map.H)({field:!0,small:"small"===this.size}),(0,chunk_5VURDMKE.S7)(this,_handleFieldClick),(0,chunk_5VURDMKE.S7)(this,_handleClipboardCopy),(0,chunk_5VURDMKE.S7)(this,_handleClipboardPaste),(0,class_map.H)({input:!0,"is-placeholder":!this.value}),(0,chunk_5VURDMKE.S7)(this,_handleFieldFocusOut),(0,join.f)((0,map.T)(this._dateFormatLayout.layout,(function(f,i){return(0,chunk_VOYMQ322.qy)(_t4||(_t4=_2`<gds-date-part-spinner
                  id="spinner-${0}"
                  class="spinner"
                  .length=${0}
                  .value=${0}
                  aria-valuemin=${0}
                  aria-valuemax=${0}
                  aria-label=${0}
                  aria-describedby="label"
                  @keydown=${0}
                  @change=${0}
                  @focus=${0}
                  @touchend=${0}
                ></gds-date-part-spinner>`),i,"y"===f.token?4:2,(0,chunk_5VURDMKE.S7)(_this2,_spinnerState)[f.name],(0,chunk_5VURDMKE.jq)(_this2,_getMinSpinnerValue,getMinSpinnerValue_fn).call(_this2,f.name),(0,chunk_5VURDMKE.jq)(_this2,_getMaxSpinnerValue,getMaxSpinnerValue_fn).call(_this2,f.name),(0,chunk_5VURDMKE.jq)(_this2,_getSpinnerLabel,getSpinnerLabel_fn).call(_this2,f.name),(0,chunk_5VURDMKE.S7)(_this2,_handleSpinnerKeydown),(function(e){return(0,chunk_5VURDMKE.S7)(_this2,_handleSpinnerChange).call(_this2,e.detail.value,f.name)}),(0,chunk_5VURDMKE.S7)(_this2,_handleSpinnerFocus),(function(e){_this2.open=!0,e.preventDefault()}))})),(0,chunk_VOYMQ322.qy)(_t5||(_t5=_2`<span>${0}</span>`),this._dateFormatLayout.delimiter)),(0,lit_localize.ab)("Open calendar modal"),this.open,this.size,this.validationMessage,this._elTrigger,this._elField,this.open,(0,chunk_5VURDMKE.S7)(this,_handlePopoverStateChange),this.label,"bottom-end",(function(){return _this2.showWeekNumbers?"350px":"305px"}),!0,function(){var _ref3=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee5(e){var _a;return regenerator_default().wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:if("calendar-popover"===(null==(_a=e.target)?void 0:_a.id)){_context5.next=3;break}return _context5.abrupt("return");case 3:_this2._elCalendar.then((function(cal){return cal.focus()}));case 4:case"end":return _context5.stop()}}),_callee5)})));return function(_x3){return _ref3.apply(this,arguments)}}(),(0,chunk_5VURDMKE.S7)(this,_handleDecrementFocusedMonth),(0,lit_localize.ab)("Previous month"),this._focusedMonth.toString(),(0,chunk_5VURDMKE.S7)(this,_handleMonthChange),300,(0,lit_localize.ab)("Month"),(0,lit_localize.ab)("January"),(0,lit_localize.ab)("February"),(0,lit_localize.ab)("March"),(0,lit_localize.ab)("April"),(0,lit_localize.ab)("May"),(0,lit_localize.ab)("June"),(0,lit_localize.ab)("July"),(0,lit_localize.ab)("August"),(0,lit_localize.ab)("September"),(0,lit_localize.ab)("October"),(0,lit_localize.ab)("November"),(0,lit_localize.ab)("December"),this._focusedYear.toString(),(0,chunk_5VURDMKE.S7)(this,_handleYearChange),300,(0,lit_localize.ab)("Year"),(0,repeat.u)((0,chunk_5VURDMKE.S7)(this,_years,years_get),(function(year){return year}),(function(year){return(0,chunk_VOYMQ322.qy)(_t6||(_t6=_2`<gds-option value=${0}>${0}</gds-option>`),year,year)})),(0,chunk_5VURDMKE.S7)(this,_handleIncrementFocusedMonth),(0,lit_localize.ab)("Next month"),(0,chunk_5VURDMKE.S7)(this,_handleCalendarChange),(0,chunk_5VURDMKE.S7)(this,_handleCalendarFocusChange),this._focusedMonth,this._focusedYear,this.value,this.min,this.max,this.showWeekNumbers,this.disabledWeekends,this.disabledDates,(function(e){e.stopPropagation(),_this2.value=void 0,_this2.open=!1,(0,chunk_5VURDMKE.jq)(_this2,_dispatchChangeEvent,dispatchChangeEvent_fn).call(_this2)}),(0,lit_localize.ab)("Clear"),(0,until.T)((0,chunk_5VURDMKE.jq)(this,_renderBackToValidRangeButton,renderBackToValidRangeButton_fn).call(this),lit.s6),(function(e){e.stopPropagation(),(0,chunk_5VURDMKE.jq)(_this2,_focusDate,focusDate_fn).call(_this2,new Date)}),(0,lit_localize.ab)("Today"))}},{key:"_getValidityAnchor",value:function _getValidityAnchor(){return this._elSpinners[0]}},{key:"_handleValueChange",value:function _handleValueChange(){if(this.value){var date=this.value;this._focusedMonth=date.getMonth(),this._focusedYear=date.getFullYear();var year=date.getFullYear().toString(),month=(date.getMonth()+1).toString().padStart(2,"0"),day=date.getDate().toString().padStart(2,"0");(0,chunk_5VURDMKE.OV)(this,_spinnerState,{year,month,day})}else(0,chunk_5VURDMKE.OV)(this,_spinnerState,{year:"yyyy",month:"mm",day:"dd"})}},{key:"_handleOpenChange",value:function _handleOpenChange(){this.open&&((0,chunk_5VURDMKE.OV)(this,_valueOnOpen,this.value),this._elCalendar.then((function(el){return el.focus()})))}}]);var _test_getDateCell,_getFocusedDate}(chunk_YUFO2JLT.S);_valueOnOpen=new WeakMap,_renderBackToValidRangeButton=new WeakSet,renderBackToValidRangeButton_fn=function(){var _ref4=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee6(){var focusedDate,buttonTxt,buttonAction,_this3=this;return regenerator_default().wrap((function _callee6$(_context6){for(;;)switch(_context6.prev=_context6.next){case 0:return _context6.next=2,this.getFocusedDate();case 2:return focusedDate=_context6.sent,buttonTxt="",focusedDate&&focusedDate>this.max?(buttonTxt=(0,lit_localize.ab)("Last available date"),buttonAction=function buttonAction(e){e.stopPropagation(),(0,chunk_5VURDMKE.jq)(_this3,_focusDate,focusDate_fn).call(_this3,_this3.max)}):focusedDate&&focusedDate<this.min&&(buttonTxt=(0,lit_localize.ab)("First available date"),buttonAction=function buttonAction(e){e.stopPropagation(),(0,chunk_5VURDMKE.jq)(_this3,_focusDate,focusDate_fn).call(_this3,_this3.min)}),_context6.abrupt("return",(0,chunk_VOYMQ322.qy)(_t7||(_t7=_t9||(_t9=_2`${0}`)),(0,when.z)(buttonTxt.length>0,(function(){return(0,chunk_VOYMQ322.qy)(_t8||(_t8=_t10||(_t10=_2`<gds-button rank="tertiary" size="small" @click=${0}>
          ${0}
        </gds-button>`)),buttonAction,buttonTxt)}),(function(){return lit.s6}))));case 6:case"end":return _context6.stop()}}),_callee6,this)})));return function renderBackToValidRangeButton_fn(){return _ref4.apply(this,arguments)}}(),_focusDate=new WeakSet,focusDate_fn=function focusDate_fn(d){var focusDate=new Date(d);this._elCalendar.then((function(el){return el.focusedDate=focusDate})).then((0,chunk_5VURDMKE.S7)(this,_handleCalendarFocusChange))},_getSpinnerLabel=new WeakSet,getSpinnerLabel_fn=function getSpinnerLabel_fn(name){return{year:(0,lit_localize.ab)("Year"),month:(0,lit_localize.ab)("Month"),day:(0,lit_localize.ab)("Day")}[name]},_getMinSpinnerValue=new WeakSet,getMinSpinnerValue_fn=function getMinSpinnerValue_fn(name){return{year:1900,month:1,day:1}[name]},_getMaxSpinnerValue=new WeakSet,getMaxSpinnerValue_fn=function getMaxSpinnerValue_fn(name){return{year:9999,month:12,day:31}[name]},_dispatchChangeEvent=new WeakSet,dispatchChangeEvent_fn=function dispatchChangeEvent_fn(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))},_dispatchInputEvent=new WeakSet,dispatchInputEvent_fn=function dispatchInputEvent_fn(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))},_handleFieldFocusOut=new WeakMap,_handleSpinnerFocus=new WeakMap,_handleClipboardCopy=new WeakMap,_handleClipboardPaste=new WeakMap,_handleFieldClick=new WeakMap,_handleCalendarChange=new WeakMap,_handleMonthChange=new WeakMap,_handleYearChange=new WeakMap,_handleIncrementFocusedMonth=new WeakMap,_handleDecrementFocusedMonth=new WeakMap,_handleCalendarFocusChange=new WeakMap,_handlePopoverStateChange=new WeakMap,_handleSpinnerKeydown=new WeakMap,_parseDateFormat=new WeakSet,parseDateFormat_fn=function parseDateFormat_fn(dateformat){var delimiter=dateformat.replace(/[a-z0-9]/gi,"")[0],format=dateformat.split(delimiter),year=format.findIndex((function(f){return"y"===f})),month=format.findIndex((function(f){return"m"===f})),day=format.findIndex((function(f){return"d"===f}));if(-1===year||-1===month||-1===day)throw new Error("Invalid date format for <gds-datepicker>");return{delimiter,layout:[year,month,day].sort((function(a,b){return a-b})).map((function(i){return format[i]})).map((function(f){return{token:f,name:"y"===f?"year":"m"===f?"month":"day"}}))}},_handleSpinnerChange=new WeakMap,_spinnerState=new WeakMap,_years=new WeakSet,years_get=function years_get(){var _a,minYear=this.min.getFullYear(),maxYear=this.max.getFullYear(),isOutsideRange=(0,chunk_5VURDMKE.S7)(this,_isValueOutsideRange,isValueOutsideRange_get),valueYear=null==(_a=this.value)?void 0:_a.getFullYear();return(0,defineProperty.A)({},Symbol.iterator,regenerator_default().mark((function _callee7(){var i;return regenerator_default().wrap((function _callee7$(_context7){for(;;)switch(_context7.prev=_context7.next){case 0:if(!isOutsideRange){_context7.next=3;break}return _context7.next=3,valueYear;case 3:i=minYear;case 4:if(!(i<=maxYear)){_context7.next=10;break}return _context7.next=7,i;case 7:i++,_context7.next=4;break;case 10:case"end":return _context7.stop()}}),_callee7)})))},_isValueOutsideRange=new WeakSet,isValueOutsideRange_get=function isValueOutsideRange_get(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},GdsDatepicker.styles=[chunk_7E55NP7L.LU,styles],GdsDatepicker.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7.JD})],GdsDatepicker.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7.JD})],GdsDatepicker.prototype,"min",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7.JD})],GdsDatepicker.prototype,"max",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean})],GdsDatepicker.prototype,"open",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsDatepicker.prototype,"label",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"show-week-numbers"})],GdsDatepicker.prototype,"showWeekNumbers",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsDatepicker.prototype,"size",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"hide-label"})],GdsDatepicker.prototype,"hideLabel",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsDatepicker.prototype,"dateformat",1),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"disabled-weekends"})],GdsDatepicker.prototype,"disabledWeekends",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7._h,attribute:"disabled-dates"})],GdsDatepicker.prototype,"disabledDates",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.nJ)("#calendar-button")],GdsDatepicker.prototype,"test_calendarButton",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsDatepicker.prototype,"_focusedMonth",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsDatepicker.prototype,"_focusedYear",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsDatepicker.prototype,"_dateFormatLayout",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.nJ)("#calendar")],GdsDatepicker.prototype,"_elCalendar",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.nJ)("#calendar-button")],GdsDatepicker.prototype,"_elTrigger",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.nJ)("#field")],GdsDatepicker.prototype,"_elField",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.YG)("[role=spinbutton]")],GdsDatepicker.prototype,"_elSpinners",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)(".input")],GdsDatepicker.prototype,"_elInput",2),(0,chunk_5VURDMKE.Cc)([(0,chunk_2WO4NHJ2.w)("value")],GdsDatepicker.prototype,"_handleValueChange",1),(0,chunk_5VURDMKE.Cc)([(0,chunk_2WO4NHJ2.w)("open")],GdsDatepicker.prototype,"_handleOpenChange",1),GdsDatepicker=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-datepicker")],GdsDatepicker);__webpack_require__("./dist/libs/core/src/chunks/chunk.PZ3JKDIQ.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.Q6BGQYZP.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.JIENYBLI.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.CDAMKODM.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.Q54LZGGX.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.474WQ4PS.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.O27XCCY5.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.NPTXYRT4.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.IA5PLMWU.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2X23R32H.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.27E4EAEK.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.RPYPYJW6.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.IZ4S7TBG.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.FQDJDWFN.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.IGJXZGV4.js");var chunk_WJDR7FTS_t,_inputBuffer,_increment,_decrement,_handleClick,_handleFocus,_handleBlur,_handleWheel,_handleKeyDown,_focusNextSpinner,focusNextSpinner_fn,chunk_WJDR7FTS_dispatchChangeEvent,chunk_WJDR7FTS_dispatchChangeEvent_fn,_formatNumber,formatNumber_fn,_clamp,clamp_fn,_clearInputBuffer,clearInputBuffer_fn,_=function _(t){return t};function chunk_WJDR7FTS_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,chunk_WJDR7FTS_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}function chunk_WJDR7FTS_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(chunk_WJDR7FTS_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function chunk_WJDR7FTS_superPropGet(t,e,o,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),e,o);return 2&r&&"function"==typeof p?function(t){return p.apply(o,t)}:p}var GdsDatePartSpinner=function(_LitElement){function GdsDatePartSpinner(){var _this;return(0,classCallCheck.A)(this,GdsDatePartSpinner),_this=chunk_WJDR7FTS_callSuper(this,GdsDatePartSpinner,arguments),(0,chunk_5VURDMKE.VK)(_this,_focusNextSpinner),(0,chunk_5VURDMKE.VK)(_this,chunk_WJDR7FTS_dispatchChangeEvent),(0,chunk_5VURDMKE.VK)(_this,_formatNumber),(0,chunk_5VURDMKE.VK)(_this,_clamp),(0,chunk_5VURDMKE.VK)(_this,_clearInputBuffer),_this.value=0,_this.length=2,_this.min=0,_this.max=Number.MAX_SAFE_INTEGER,_this.displayValue=(0,chunk_5VURDMKE.jq)(_this,_formatNumber,formatNumber_fn).call(_this,_this.value,_this.length),(0,chunk_5VURDMKE.VK)(_this,_inputBuffer,""),(0,chunk_5VURDMKE.VK)(_this,_increment,(function(){var current=parseInt(_this.value.toString());Number.isNaN(current)&&(current=2===_this.length?_this.min:(new Date).getFullYear()-1),_this.value=(0,chunk_5VURDMKE.jq)(_this,_clamp,clamp_fn).call(_this,current+1),(0,chunk_5VURDMKE.jq)(_this,chunk_WJDR7FTS_dispatchChangeEvent,chunk_WJDR7FTS_dispatchChangeEvent_fn).call(_this)})),(0,chunk_5VURDMKE.VK)(_this,_decrement,(function(){var current=parseInt(_this.value.toString());Number.isNaN(current)&&(current=2===_this.length?_this.max:(new Date).getFullYear()+1),_this.value=(0,chunk_5VURDMKE.jq)(_this,_clamp,clamp_fn).call(_this,current-1),(0,chunk_5VURDMKE.jq)(_this,chunk_WJDR7FTS_dispatchChangeEvent,chunk_WJDR7FTS_dispatchChangeEvent_fn).call(_this)})),(0,chunk_5VURDMKE.VK)(_this,_handleClick,(function(e){e.stopPropagation(),e.preventDefault(),_this.focus()})),(0,chunk_5VURDMKE.VK)(_this,_handleFocus,(function(){(0,chunk_5VURDMKE.jq)(_this,_clearInputBuffer,clearInputBuffer_fn).call(_this)})),(0,chunk_5VURDMKE.VK)(_this,_handleBlur,(function(){""!==(0,chunk_5VURDMKE.S7)(_this,_inputBuffer)&&((0,chunk_5VURDMKE.jq)(_this,_clearInputBuffer,clearInputBuffer_fn).call(_this),_this.value=(0,chunk_5VURDMKE.jq)(_this,_clamp,clamp_fn).call(_this,parseInt(_this.value.toString())),(0,chunk_5VURDMKE.jq)(_this,chunk_WJDR7FTS_dispatchChangeEvent,chunk_WJDR7FTS_dispatchChangeEvent_fn).call(_this))})),(0,chunk_5VURDMKE.VK)(_this,_handleWheel,(function(e){e.stopPropagation(),e.preventDefault(),e.deltaY>0?(0,chunk_5VURDMKE.S7)(_this,_decrement).call(_this):(0,chunk_5VURDMKE.S7)(_this,_increment).call(_this)})),(0,chunk_5VURDMKE.VK)(_this,_handleKeyDown,(function(e){var handled=!1;if("ArrowUp"===e.key)(0,chunk_5VURDMKE.S7)(_this,_increment).call(_this),handled=!0;else if("ArrowDown"===e.key)(0,chunk_5VURDMKE.S7)(_this,_decrement).call(_this),handled=!0;else{var key=parseInt(e.key);isNaN(key)||((0,chunk_5VURDMKE.S7)(_this,_inputBuffer).length<_this.length&&((0,chunk_5VURDMKE.OV)(_this,_inputBuffer,(0,chunk_5VURDMKE.S7)(_this,_inputBuffer)+key.toString()),_this.value=parseInt((0,chunk_5VURDMKE.S7)(_this,_inputBuffer))),(0,chunk_5VURDMKE.S7)(_this,_inputBuffer).length===_this.length&&(_this.value=(0,chunk_5VURDMKE.jq)(_this,_clamp,clamp_fn).call(_this,_this.value),(0,chunk_5VURDMKE.jq)(_this,_clearInputBuffer,clearInputBuffer_fn).call(_this),(0,chunk_5VURDMKE.jq)(_this,_focusNextSpinner,focusNextSpinner_fn).call(_this),(0,chunk_5VURDMKE.jq)(_this,chunk_WJDR7FTS_dispatchChangeEvent,chunk_WJDR7FTS_dispatchChangeEvent_fn).call(_this)),handled=!0)}handled&&(e.preventDefault(),e.stopPropagation())})),_this}return(0,inherits.A)(GdsDatePartSpinner,_LitElement),(0,createClass.A)(GdsDatePartSpinner,[{key:"createRenderRoot",value:function createRenderRoot(){return this}},{key:"connectedCallback",value:function connectedCallback(){chunk_WJDR7FTS_superPropGet(GdsDatePartSpinner,"connectedCallback",this,3)([]),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",(0,chunk_5VURDMKE.S7)(this,_handleWheel)),this.addEventListener("keydown",(0,chunk_5VURDMKE.S7)(this,_handleKeyDown)),this.addEventListener("blur",(0,chunk_5VURDMKE.S7)(this,_handleBlur)),this.addEventListener("focus",(0,chunk_5VURDMKE.S7)(this,_handleFocus)),this.addEventListener("click",(0,chunk_5VURDMKE.S7)(this,_handleClick)),this.addEventListener("mousedown",(0,chunk_5VURDMKE.S7)(this,_handleClick))}},{key:"focus",value:function focus(options){chunk_WJDR7FTS_superPropGet(GdsDatePartSpinner,"focus",this,3)([options]),(0,chunk_5VURDMKE.S7)(this,_handleFocus).call(this)}},{key:"render",value:function render(){return(0,chunk_VOYMQ322.qy)(chunk_WJDR7FTS_t||(chunk_WJDR7FTS_t=_`${0}`),this.displayValue)}},{key:"_refreshDisplayValue",value:function _refreshDisplayValue(){this.displayValue=(0,chunk_5VURDMKE.jq)(this,_formatNumber,formatNumber_fn).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}}])}(lit.WF);_inputBuffer=new WeakMap,_increment=new WeakMap,_decrement=new WeakMap,_handleClick=new WeakMap,_handleFocus=new WeakMap,_handleBlur=new WeakMap,_handleWheel=new WeakMap,_handleKeyDown=new WeakMap,_focusNextSpinner=new WeakSet,focusNextSpinner_fn=function focusNextSpinner_fn(){for(var nextSpinner=this.nextElementSibling;nextSpinner;){if(nextSpinner instanceof GdsDatePartSpinner){nextSpinner.focus();break}nextSpinner=nextSpinner.nextElementSibling}},chunk_WJDR7FTS_dispatchChangeEvent=new WeakSet,chunk_WJDR7FTS_dispatchChangeEvent_fn=function dispatchChangeEvent_fn(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))},_formatNumber=new WeakSet,formatNumber_fn=function formatNumber_fn(num,padZeros){return String(num).padStart(padZeros,"0")},_clamp=new WeakSet,clamp_fn=function clamp_fn(value){return Math.max(this.min,Math.min(this.max,value))},_clearInputBuffer=new WeakSet,clearInputBuffer_fn=function clearInputBuffer_fn(){(0,chunk_5VURDMKE.OV)(this,_inputBuffer,"")},GdsDatePartSpinner.formAssociated=!0,(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Number})],GdsDatePartSpinner.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Number})],GdsDatePartSpinner.prototype,"length",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Number,attribute:"aria-valuemin"})],GdsDatePartSpinner.prototype,"min",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Number,attribute:"aria-valuemax"})],GdsDatePartSpinner.prototype,"max",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsDatePartSpinner.prototype,"displayValue",2),(0,chunk_5VURDMKE.Cc)([(0,chunk_2WO4NHJ2.w)("value")],GdsDatePartSpinner.prototype,"_refreshDisplayValue",1),GdsDatePartSpinner=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-date-part-spinner")],GdsDatePartSpinner);var chunk_CTY24X3K_t,startOfMonth=__webpack_require__("./node_modules/date-fns/esm/startOfMonth/index.js"),endOfMonth=__webpack_require__("./node_modules/date-fns/esm/endOfMonth/index.js"),eachWeekOfInterval=__webpack_require__("./node_modules/date-fns/esm/eachWeekOfInterval/index.js"),addDays=__webpack_require__("./node_modules/date-fns/esm/addDays/index.js"),eachDayOfInterval=__webpack_require__("./node_modules/date-fns/esm/eachDayOfInterval/index.js"),chunk_CTY24X3K_=function _(t){return t};var chunk_AMUFPN7U_t,chunk_AMUFPN7U_t2,chunk_AMUFPN7U_t3,chunk_AMUFPN7U_t4,chunk_AMUFPN7U_t5,chunk_AMUFPN7U_t6,chunk_AMUFPN7U_t7,chunk_AMUFPN7U_t8,chunk_AMUFPN7U_t9,chunk_AMUFPN7U_t10,chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),lastDayOfMonth=__webpack_require__("./node_modules/date-fns/esm/lastDayOfMonth/index.js"),getWeek=__webpack_require__("./node_modules/date-fns/esm/getWeek/index.js"),isSameMonth=__webpack_require__("./node_modules/date-fns/esm/isSameMonth/index.js"),setHours=__webpack_require__("./node_modules/date-fns/esm/setHours/index.js"),subMonths=__webpack_require__("./node_modules/date-fns/esm/subMonths/index.js"),addMonths=__webpack_require__("./node_modules/date-fns/esm/addMonths/index.js"),chunk_AMUFPN7U_=function _(t){return t};function chunk_AMUFPN7U_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,chunk_AMUFPN7U_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}function chunk_AMUFPN7U_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(chunk_AMUFPN7U_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function chunk_AMUFPN7U_superPropGet(t,e,o,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),e,o);return 2&r&&"function"==typeof p?function(t){return p.apply(o,t)}:p}var _setSelectedDate,setSelectedDate_fn,chunk_AMUFPN7U_handleKeyDown,handleKeyDown_fn,calendar_styles_default=(0,lit.AH)(chunk_AMUFPN7U_t||(chunk_AMUFPN7U_t=chunk_AMUFPN7U_`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-space-2xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 var(--gds-space-4xs) 0 0 var(--gds-color-l2-border-primary);
      th {
        height: var(--gds-space-2xl);
        width: var(--gds-space-2xl);
        background: var(--gds-sys-color-container-container-bright);
        box-sizing: border-box;
        text-align: center;
        font-weight: normal;
      }
    }

    tbody {
      td {
        position: relative;
        height: var(--gds-space-3xl);
        width: var(--gds-space-3xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-space-2xs);
        transition: all 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-space-3xs);

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: var(--gds-sys-color-base800);
          cursor: pointer;
          color: var(--gds-sys-color-base-white);
        }

        &.today {
          border-color: var(--gds-sys-color-base800);
        }

        &.disabled {
          background-color: var(--gds-sys-color-base100);
          color: var(--gds-sys-color-base500);
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: color-mix(in srgb, currentColor, transparent 50%);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-space-2xs);
        height: var(--gds-space-2xs);
        border-radius: var(--gds-space-max);
        background-color: var(--_color, currentColor);
        inset: var(--gds-space-2xs) var(--gds-space-2xs) auto auto;
      }
    }
  }
`)),GdsCalendar=function(_GdsElement){function GdsCalendar(){var _this;return(0,classCallCheck.A)(this,GdsCalendar),_this=chunk_AMUFPN7U_callSuper(this,GdsCalendar,arguments),(0,chunk_5VURDMKE.VK)(_this,_setSelectedDate),(0,chunk_5VURDMKE.VK)(_this,chunk_AMUFPN7U_handleKeyDown),_this.min=new Date((new Date).getFullYear()-10,0,1),_this.max=new Date((new Date).getFullYear()+10,0,1),_this.focusedDate=new Date,_this.disabledWeekends=!1,_this.showWeekNumbers=!1,_this.hideExtraneousDays=!1,_this.hideDayNames=!1,_this.dateLabelTemplate=function(date){return date.toDateString()},_this}return(0,inherits.A)(GdsCalendar,_GdsElement),(0,createClass.A)(GdsCalendar,[{key:"focusedMonth",get:function get(){return this.focusedDate.getMonth()},set:function set(month){var lastOfSelectedMonth=(0,lastDayOfMonth.A)(new Date(this.focusedYear,month,1)),newFocusedDate=new Date(this.focusedDate);newFocusedDate.setDate(Math.min(this.focusedDate.getDate(),lastOfSelectedMonth.getDate())),newFocusedDate.setMonth(month),newFocusedDate.setHours(12,0,0,0),this.focusedDate=newFocusedDate}},{key:"focusedYear",get:function get(){return this.focusedDate.getFullYear()},set:function set(year){this.focusedDate=new Date(this.focusedDate.setFullYear(year))}},{key:"getDateCell",value:function getDateCell(dayNumber){var _a;return null==(_a=this.shadowRoot)?void 0:_a.querySelector("#dateCell-".concat(dayNumber))}},{key:"connectedCallback",value:function connectedCallback(){chunk_AMUFPN7U_superPropGet(GdsCalendar,"connectedCallback",this,3)([]),chunk_3XCSDEVC.nD.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",(0,chunk_5VURDMKE.jq)(this,chunk_AMUFPN7U_handleKeyDown,handleKeyDown_fn))}},{key:"focus",value:function focus(){var _a;chunk_AMUFPN7U_superPropGet(GdsCalendar,"focus",this,3)([]),null==(_a=this._elFocusedCell)||_a.focus()}},{key:"render",value:function render(){var _this2=this,currentDate=new Date;return(0,lit.qy)(chunk_AMUFPN7U_t2||(chunk_AMUFPN7U_t2=chunk_AMUFPN7U_`<table role="grid" aria-label="${0}">
      ${0}
      <tbody role="rowgroup">
        ${0}
      </tbody>
    </table>`),(0,if_defined.J)(this.label),(0,when.z)(!this.hideDayNames,(function(){return(0,lit.qy)(chunk_AMUFPN7U_t3||(chunk_AMUFPN7U_t3=chunk_AMUFPN7U_`<thead role="rowgroup">
            <tr role="row">
              ${0}
              <th>${0}</th>
              <th>${0}</th>
              <th>${0}</th>
              <th>${0}</th>
              <th>${0}</th>
              <th>${0}</th>
              <th>${0}</th>
            </tr>
          </thead>`),(0,when.z)(_this2.showWeekNumbers,(function(){return(0,lit.qy)(chunk_AMUFPN7U_t4||(chunk_AMUFPN7U_t4=chunk_AMUFPN7U_`<th></th>`))})),(0,lit_localize.ab)("Mon"),(0,lit_localize.ab)("Tue"),(0,lit_localize.ab)("Wed"),(0,lit_localize.ab)("Thu"),(0,lit_localize.ab)("Fri"),(0,lit_localize.ab)("Sat"),(0,lit_localize.ab)("Sun"))})),function renderMonthGridView(date,template){for(var monthStart=(0,startOfMonth.A)(date),monthEnd=(0,endOfMonth.A)(date),weeks=(0,eachWeekOfInterval.A)({start:monthStart,end:monthEnd},{weekStartsOn:1});weeks.length<6;)weeks.push((0,addDays.A)(weeks[weeks.length-1],7));return(0,lit.qy)(chunk_CTY24X3K_t||(chunk_CTY24X3K_t=chunk_CTY24X3K_`${0}`),template(weeks.map((function(weekStartDay){return{days:(0,eachDayOfInterval.A)({start:weekStartDay,end:(0,addDays.A)(weekStartDay,6)})}}))))}(this.focusedDate,(function(weeks){return(0,lit.qy)(chunk_AMUFPN7U_t5||(chunk_AMUFPN7U_t5=chunk_AMUFPN7U_`
            ${0}
          `),weeks.map((function(week){return(0,lit.qy)(chunk_AMUFPN7U_t6||(chunk_AMUFPN7U_t6=chunk_AMUFPN7U_`
                <tr role="row">
                  ${0}
                  ${0}
                </tr>
              `),(0,when.z)(_this2.showWeekNumbers,(function(){return(0,lit.qy)(chunk_AMUFPN7U_t7||(chunk_AMUFPN7U_t7=chunk_AMUFPN7U_`<td class="week-number" scope="row">
                        ${0}
                      </td>`),(0,getWeek.A)(week.days[0]))})),week.days.map((function(day){var customization=_this2.customizedDates&&_this2.customizedDates.find((function(d){return(0,isSameDay.A)(d.date,day)})),displayOptions=(0,chunk_5VURDMKE.IA)({color:"currentColor",disabled:Boolean(_this2.disabledDates&&_this2.disabledDates.some((function(d){return(0,isSameDay.A)(d,day)})))},customization),isOutsideCurrentMonth=!(0,isSameMonth.A)(_this2.focusedDate,day)||day<_this2.min||day>_this2.max,isWeekend=0===day.getDay()||6===day.getDay(),isDisabled=displayOptions.disabled||isOutsideCurrentMonth||_this2.disabledWeekends&&isWeekend;return _this2.hideExtraneousDays&&isOutsideCurrentMonth?(0,lit.qy)(chunk_AMUFPN7U_t8||(chunk_AMUFPN7U_t8=chunk_AMUFPN7U_`<td inert></td>`)):(0,lit.qy)(chunk_AMUFPN7U_t9||(chunk_AMUFPN7U_t9=chunk_AMUFPN7U_`
                          <td
                            role="${0}"
                            class="${0}"
                            ?disabled=${0}
                            tabindex="${0}"
                            aria-selected="${0}"
                            aria-label="${0}"
                            @click=${0}
                            id="dateCell-${0}"
                          >
                            <span
                              class="number"
                              style="--_color: ${0}"
                              >${0}</span
                            >

                            ${0}
                          </td>
                        `),(0,if_defined.J)(isDisabled?void 0:"gridcell"),(0,class_map.H)({"custom-date":Boolean(customization),disabled:Boolean(isDisabled),today:(0,isSameDay.A)(currentDate,day)}),isDisabled,(0,isSameDay.A)(_this2.focusedDate,day)?0:-1,_this2.value&&(0,isSameDay.A)(_this2.value,day)?"true":"false",_this2.dateLabelTemplate(day),(function(){return isDisabled?null:(0,chunk_5VURDMKE.jq)(_this2,_setSelectedDate,setSelectedDate_fn).call(_this2,day)}),day.getDate(),displayOptions?null==displayOptions?void 0:displayOptions.color:"",day.getDate(),(0,when.z)(displayOptions.indicator,(function(){return(0,lit.qy)(chunk_AMUFPN7U_t10||(chunk_AMUFPN7U_t10=chunk_AMUFPN7U_`<span
                                  class="indicator-${0}"
                                  style="--_color: ${0}"
                                ></span>`),null==displayOptions?void 0:displayOptions.indicator,null==displayOptions?void 0:displayOptions.color)})))})))})))})))}},{key:"_valueChanged",value:function _valueChanged(){this.value&&(this.focusedDate=this.value)}}])}(chunk_ZQ4D5K7J.j);_setSelectedDate=new WeakSet,setSelectedDate_fn=function setSelectedDate_fn(date){var dateOnMidDay=(0,setHours.A)(date,12);this.value=dateOnMidDay,this.dispatchEvent(new CustomEvent("change",{detail:dateOnMidDay,bubbles:!1,composed:!1}))},chunk_AMUFPN7U_handleKeyDown=new WeakSet,handleKeyDown_fn=function handleKeyDown_fn(e){var _a,_this3=this,handled=!1,newFocusedDate=new Date(this.focusedDate);("ArrowLeft"===e.key?(newFocusedDate=(0,addDays.A)(this.focusedDate,-1),handled=!0):"ArrowRight"===e.key?(newFocusedDate=(0,addDays.A)(this.focusedDate,1),handled=!0):"ArrowUp"===e.key?(newFocusedDate=(0,addDays.A)(this.focusedDate,-7),handled=!0):"ArrowDown"===e.key?(newFocusedDate=(0,addDays.A)(this.focusedDate,7),handled=!0):"Enter"===e.key||" "===e.key?((null==(_a=this._elFocusedCell)?void 0:_a.hasAttribute("disabled"))||(0,chunk_5VURDMKE.jq)(this,_setSelectedDate,setSelectedDate_fn).call(this,this.focusedDate),handled=!0):"Home"===e.key?(newFocusedDate=new Date(this.focusedYear,this.focusedMonth,1),handled=!0):"End"===e.key?(newFocusedDate=new Date(this.focusedYear,this.focusedMonth+1,0),handled=!0):"PageUp"===e.key?(newFocusedDate=(0,subMonths.A)(this.focusedDate,1),handled=!0):"PageDown"===e.key&&(newFocusedDate=(0,addMonths.A)(this.focusedDate,1),handled=!0),newFocusedDate.getFullYear()>=this.min.getFullYear()&&newFocusedDate.getFullYear()<=this.max.getFullYear())&&(this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:newFocusedDate,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=newFocusedDate));handled&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then((function(){var _a2;null==(_a2=_this3._elFocusedCell)||_a2.focus()})))},GdsCalendar.styles=[chunk_7E55NP7L.LU,calendar_styles_default],GdsCalendar.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsCalendar.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Date})],GdsCalendar.prototype,"min",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Date})],GdsCalendar.prototype,"max",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsCalendar.prototype,"focusedDate",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"disabled-weekends"})],GdsCalendar.prototype,"disabledWeekends",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Array,attribute:"disabled-dates"})],GdsCalendar.prototype,"disabledDates",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Number})],GdsCalendar.prototype,"focusedMonth",1),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Number})],GdsCalendar.prototype,"focusedYear",1),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean})],GdsCalendar.prototype,"showWeekNumbers",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean})],GdsCalendar.prototype,"hideExtraneousDays",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean})],GdsCalendar.prototype,"hideDayNames",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({attribute:!1})],GdsCalendar.prototype,"customizedDates",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsCalendar.prototype,"label",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({attribute:!1})],GdsCalendar.prototype,"dateLabelTemplate",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)('td[tabindex="0"]')],GdsCalendar.prototype,"_elFocusedCell",2),(0,chunk_5VURDMKE.Cc)([(0,chunk_2WO4NHJ2.w)("value")],GdsCalendar.prototype,"_valueChanged",1),GdsCalendar=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-calendar")],GdsCalendar);__webpack_require__("./dist/libs/core/src/chunks/chunk.S67YFOUL.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.VUZSRERB.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js");var scoping=__webpack_require__("./dist/libs/core/src/scoping.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/transitional-styles.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","onChange","minDate","maxDate","value","showWeeks","testId","validator","selectedDate","currentDate"];(0,transitional_styles.Y)();var CoreDatepicker=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-datepicker"),elementClass:GdsDatepicker,events:{onchange:"change"},react}),Datepicker=(0,react.forwardRef)((function(_ref2,ref){var _ref2$label=_ref2.label,label=void 0===_ref2$label?"Date":_ref2$label,onChange=_ref2.onChange,minDate=_ref2.minDate,maxDate=_ref2.maxDate,value=_ref2.value,showWeeks=_ref2.showWeeks,testId=_ref2.testId,validator=_ref2.validator,selectedDate=_ref2.selectedDate,currentDate=_ref2.currentDate,props=(0,objectWithoutProperties.A)(_ref2,_excluded);currentDate&&!value&&(value=currentDate),selectedDate&&!value&&(value=selectedDate);var min=minDate||new Date((new Date).getFullYear()-10,0,1),max=maxDate||new Date((new Date).getFullYear()+10,0,1),_ref=(0,react.useRef)(null);return(0,react.useImperativeHandle)(ref,(function(){return _ref.current}),[_ref]),(0,react.useEffect)((function(){null!=_ref&&_ref.current&&(_ref.current.validator=validator)}),[validator]),(0,jsx_runtime.jsx)("div",{className:"form-group",children:(0,jsx_runtime.jsx)(CoreDatepicker,Object.assign({"data-testid":testId,label,min,max,showWeekNumbers:showWeeks,onchange:function onChangeHandler(e){onChange&&onChange(e.detail.value)},value,ref:_ref},props))})}));const datepicker=Datepicker;Datepicker.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"An array of dates that should be disabled in the calendar."},disabledWeekends:{required:!1,tsType:{name:"boolean"},description:"Whether to disable weekends in the calendar."},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the label above the input field."},invalid:{required:!1,tsType:{name:"boolean"},description:"Validation state of the form control. Setting this to true triggers the invalid state of the control."},validator:{required:!1,tsType:{name:"GdsValidator"},description:"Validate the form control element. Should return the validity state and an optional validation message."},label:{required:!1,tsType:{name:"string"},description:"The label text displayed above the datepicker. This should always be set to a descriptive label.",defaultValue:{value:"'Date'",computed:!1}},maxDate:{required:!1,tsType:{name:"Date"},description:"The maximum date that can be selected."},minDate:{required:!1,tsType:{name:"Date"},description:"The minimum date that can be selected."},open:{required:!1,tsType:{name:"boolean"},description:"Controls whether the datepicker popover is open."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"Callback function that is called when the value of the Datepicker changes."},required:{required:!1,tsType:{name:"boolean"},description:"Sets the datepicker as a required field for forms."},showWeeks:{required:!1,tsType:{name:"boolean"},description:"Whether to show a column of week numbers in the calendar."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"Whether to use the small variant of the datepicker field."},testId:{required:!1,tsType:{name:"string"},description:"The test ID used for testing."},value:{required:!1,tsType:{name:"Date"},description:"The Date value of the datepicker. This can be set to undefined to clear the datepicker.\nThis can be a string if set via the value attribute in markup, or via the setAttribute DOM API."},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<GdsDatepicker>",elements:[{name:"GdsDatepicker"}]},description:"The ref to the datepicker element."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children of the datepicker."},selectedDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."},currentDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."}}}}}]);
//# sourceMappingURL=8802.2915a47d.iframe.bundle.js.map