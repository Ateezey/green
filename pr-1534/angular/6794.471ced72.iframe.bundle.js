"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[6794],{"./dist/libs/core/src/chunks/chunk.2KV2AUKL.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _slotRef,_handleSelect,_chunk_2X23R32H_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.2X23R32H.js"),_chunk_ZRTOIGOM_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZRTOIGOM.js"),_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/directives/ref.js"),listbox_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }
  }
`,GdsListbox=class extends _chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_3__.j{constructor(){super(),this.multiple=!1,this.compareWith=(a,b)=>a===b,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_slotRef,(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_7__._)()),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleSelect,(e=>{const option=e.target;this.multiple?option.selected=!option.selected:(option.selected=!0,Array.from(this.options).forEach((el=>{el!==option&&(el.selected=!1)}))),this.ariaActiveDescendantElement=option,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))})),new _chunk_2X23R32H_js__WEBPACK_IMPORTED_MODULE_0__.y(this)}get navigableItems(){return this.visibleOptionElements}get options(){return(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_slotRef).value&&(0,_chunk_2X23R32H_js__WEBPACK_IMPORTED_MODULE_0__.o)((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_slotRef).value).assignedElements().filter((o=>!o.hasAttribute("isplaceholder")&&"gds-option"===o.gdsElementName))||[]}get visibleOptionElements(){return this.options.filter((el=>!el.hidden))}get visibleSelectedOptionElements(){return this.options.filter((el=>el.selected&&!el.hidden))}get selection(){return this.options.filter((el=>el.selected))}set selection(values){this.options.forEach((el=>{el.selected=values.some((v=>this.compareWith(v,el.value)))}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),_chunk_ZRTOIGOM_js__WEBPACK_IMPORTED_MODULE_1__.nD.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleSelect))}focus(){var _a;null==(_a=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])||_a.focus()}render(){return _chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__.qy`<slot ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_7__.K)((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_slotRef))}></slot>`}_rerenderOptions(){this.options.forEach((el=>{el.requestUpdate()}))}};_slotRef=new WeakMap,_handleSelect=new WeakMap,GdsListbox.styles=listbox_styles_default,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:value=>value.toString()}})],GdsListbox.prototype,"multiple",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsListbox.prototype,"compareWith",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_2__.w)("multiple")],GdsListbox.prototype,"_rerenderOptions",1),GdsListbox=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__.Y$)("gds-listbox")],GdsListbox)},"./dist/libs/core/src/chunks/chunk.BEI6IB7E.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _hidden,_emitSelect,emitSelect_fn,_chunk_LFJRIUDW_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.LFJRIUDW.js"),_chunk_ZRTOIGOM_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZRTOIGOM.js"),_chunk_YVZEXN77_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.YVZEXN77.js"),_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/lit/directives/class-map.js"),GdsOption=class extends((0,_chunk_LFJRIUDW_js__WEBPACK_IMPORTED_MODULE_0__.z)(_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_4__.j)){constructor(){super(),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.VK)(this,_emitSelect),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.VK)(this,_hidden,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.jq)(this,_emitSelect,emitSelect_fn)),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.jq)(this,_emitSelect,emitSelect_fn).call(this,e))}))}get hidden(){return(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.S7)(this,_hidden)}set hidden(value){this.isPlaceholder||((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.OV)(this,_hidden,"true"===value||!0===value),this.setAttribute("aria-hidden",value.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.OV)(this,_hidden,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then((()=>_chunk_ZRTOIGOM_js__WEBPACK_IMPORTED_MODULE_1__.nD.instance.apply(this,"gds-option")))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.OV)(this,_hidden,!0),this.setAttribute("aria-hidden","true")):((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.OV)(this,_hidden,!1),this.setAttribute("aria-hidden","false"))}render(){var _a;const isMultiple=null==(_a=this.parentElement)?void 0:_a.multiple,checkbox=lit__WEBPACK_IMPORTED_MODULE_7__.qy`
      <span class="checkbox ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__.H)({checked:this.selected})}">
        ${this.selected?lit__WEBPACK_IMPORTED_MODULE_7__.qy`<gds-icon-checkmark stroke></gds-icon-checkmark>`:""}
      </span>
    `;return isMultiple||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),lit__WEBPACK_IMPORTED_MODULE_7__.qy`<div>${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_10__.z)(isMultiple,(()=>checkbox))} <slot></slot></div>`}};_hidden=new WeakMap,_emitSelect=new WeakSet,emitSelect_fn=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))},GdsOption.styles=[_chunk_YVZEXN77_js__WEBPACK_IMPORTED_MODULE_2__.L,_chunk_LFJRIUDW_js__WEBPACK_IMPORTED_MODULE_0__.l],(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],GdsOption.prototype,"value",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({attribute:"aria-hidden",reflect:!0})],GdsOption.prototype,"hidden",1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({attribute:"aria-selected",reflect:!0})],GdsOption.prototype,"selected",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({type:Boolean,reflect:!0})],GdsOption.prototype,"isPlaceholder",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_3__.w)("isplaceholder")],GdsOption.prototype,"_handlePlaceholderStatusChange",1),GdsOption=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_5__.Y$)("gds-option")],GdsOption)},"./dist/libs/core/src/chunks/chunk.EPMJRJZH.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _optionElements,_handleSearchFieldKeyUp,_handleSearchFieldKeyDown,_handleListboxKeyDown,_handleOptionFocusChange,_handleSelectionChange,handleSelectionChange_fn,_registerAutoCloseListener,registerAutoCloseListener_fn,_unregisterAutoCloseListener,unregisterAutoCloseListener_fn,_blurCloseListener,_tabCloseListener,_chunk_2BMJPIND_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.2BMJPIND.js"),_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./dist/libs/core/src/chunks/chunk.WM7HBMMV.js"),_chunk_KBYQYDL3_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./dist/libs/core/src/chunks/chunk.KBYQYDL3.js"),_chunk_ZRTOIGOM_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZRTOIGOM.js"),_chunk_YVZEXN77_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.YVZEXN77.js"),_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/directives/unsafe-html.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js"),lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/directives/if-defined.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/lit/directives/class-map.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),dropdown_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      color: var(--gds-sys-color-base800);
      font-family: inherit;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--gds-space-m);
      height: var(--gds-space-3xl);
      border: var(--gds-space-4xs) solid #6f6f6f;
      border-radius: var(--gds-space-xs);
      padding-inline: var(--gds-space-m);
      cursor: pointer;
      box-sizing: border-box;
      font-size: var(--gds-space-m);

      // TODO: Update colors to use tokens
      border-color: #6f6f6f;
      color: #1b1b1b;
      background-color: #e2e2e2;

      &.small {
        height: var(--gds-space-xl);
        padding: var(--gds-space-s);
        padding-right: var(--gds-space-xs);
        font-size: calc(var(--gds-space-s) + 2px);

        .icon {
          width: var(--gds-space-l);
          height: var(--gds-space-l);
        }
      }

      &:hover {
        background-color: #cecece;
      }

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        height: var(--gds-space-xl);
        width: var(--gds-space-xl);
      }

      &[aria-expanded='true'] ::part(icon) {
        transform: scaleY(-1);
      }
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    label {
      font-weight: var(--gds-text-weight-regular);
      line-height: var(--gds-text-line-height-label-input-large);
      font-size: var(--gds-text-size-label-input-large);
      padding-block: var(--gds-space-2xs);
      font-family: inherit;
    }

    input[type='text'] {
      border-radius: var(--gds-space-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-sys-color-base800);
      border-bottom: 1px solid var(--gds-sys-color-base400);
      width: 100%;
      padding: var(--gds-space-m);
      font-weight: var(--gds-text-weight-regular);
      flex: 1;
      box-sizing: border-box;

      &:focus {
        border-color: var(--gds-sys-color-base800);
      }

      &::placeholder {
        color: currrentColor;
        font-family: inherit;
        font-weight: var(--gds-text-weight-regular);
        color: var(--gds-sys-color-base800);
      }
    }
  }
`,GdsDropdown=class extends _chunk_2BMJPIND_js__WEBPACK_IMPORTED_MODULE_0__.S{constructor(){super(),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleSelectionChange),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_registerAutoCloseListener),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_unregisterAutoCloseListener),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(a,b)=>a===b,this.searchFilter=(q,o)=>o.innerHTML.toLowerCase().includes(q.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_optionElements,void 0),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleSearchFieldKeyUp,(e=>{const input=this._elSearchInput,options=Array.from((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_optionElements));if(options.forEach((o=>o.hidden=!1)),!input.value)return;options.filter((o=>!this.searchFilter(input.value,o))).forEach((o=>o.hidden=!0))})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleSearchFieldKeyDown,(e=>{var _a;null==(_a=this._elListbox)||_a.then((listbox=>{if("ArrowDown"===e.key||"Tab"===e.key)return e.preventDefault(),void listbox.focus()}))})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleListboxKeyDown,(e=>{var _a;if("Tab"===e.key&&this.searchable)return e.preventDefault(),void(null==(_a=this._elSearchInput)||_a.focus())})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleOptionFocusChange,(e=>{const triggerButton=this._elTriggerBtn;triggerButton&&(triggerButton.ariaActiveDescendantElement=e.target)})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_blurCloseListener,(e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_tabCloseListener,(e=>{var _a;"Tab"!==e.key||this.searchable||(e.preventDefault(),this.open=!1,null==(_a=this._elTriggerBtn)||_a.focus())})),(0,_chunk_KBYQYDL3_js__WEBPACK_IMPORTED_MODULE_12__.t)(this),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_10__.fA)(this),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.OV)(this,_optionElements,this.getElementsByTagName((0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__.Eq)("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_optionElements)).filter((o=>!o.hasAttribute("isplaceholder")))}get placeholder(){return Array.from((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_optionElements)).find((o=>o.hasAttribute("isplaceholder")))}get displayValue(){var _a,_b;let displayValue;return displayValue=Array.isArray(this.value)?this.value.length>2?(0,_lit_localize__WEBPACK_IMPORTED_MODULE_10__.ab)(_lit_localize__WEBPACK_IMPORTED_MODULE_10__.gx`${this.value.length} selected`):this.value.reduce(((acc,cur)=>{var _a2;return acc+(null==(_a2=this.options.find((v=>v.value===cur)))?void 0:_a2.innerHTML)+", "}),"").slice(0,-2):null==(_a=this.options.find((v=>v.selected)))?void 0:_a.innerHTML,displayValue||(null==(_b=this.placeholder)?void 0:_b.innerHTML)||""}connectedCallback(){super.connectedCallback(),_chunk_ZRTOIGOM_js__WEBPACK_IMPORTED_MODULE_1__.nD.instance.apply(this,"gds-dropdown"),this.updateComplete.then((()=>{this._handleLightDOMChange(),this._handleValueChange()}))}render(){return _chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__.qy`
      ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_13__.z)(this.label&&!this.hideLabel,(()=>_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__.qy`<label for="trigger">${this.label}</label>`))}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${trigger=>this.syncPopoverWidth?`${trigger.offsetWidth}px`:"auto"}
        .calcMaxHeight=${_trigger=>`${this.maxHeight}px`}
        .disableMobileStyles=${this.disableMobileStyles}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <button
          id="trigger"
          name="trigger"
          aria-haspopup="listbox"
          slot="trigger"
          role="combobox"
          aria-owns="listbox"
          aria-controls="listbox"
          aria-expanded="${this.open}"
          aria-label="${this.label}"
          part="trigger"
          class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__.H)({small:"small"===this.size})}
        >
          <slot name="trigger">
            <span>${(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_7__._)(this.displayValue)}</span>
          </slot>
          <div class="icon">
            <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
          </div>
        </button>
        ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_13__.z)(this.searchable,(()=>_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__.qy`<input
              id="searchinput"
              type="text"
              aria-label="${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_10__.ab)("Filter available options")}"
              placeholder="${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_10__.ab)("Search")}"
              @keydown=${(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleSearchFieldKeyDown)}
              @keyup=${(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleSearchFieldKeyUp)}
            />`))}
        <gds-listbox
          id="listbox"
          .multiple="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_8__.J)(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_handleSelectionChange,handleSelectionChange_fn)}"
          @gds-focus="${(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleOptionFocusChange)}"
          @keydown=${(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleListboxKeyDown)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>

      <span class="form-info"
        ><slot name="message">${this.validationMessage}</slot></span
      >
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var _a,_b;this.requestUpdate(),this.multiple?this._handleValueChange():void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=null==(_a=this.options[0])?void 0:_a.value:this.placeholder||void 0!==this.options.find((o=>this.compareWith(o.value,this.value)))||(this.options[0]&&(this.options[0].selected=!0),this.value=null==(_b=this.options[0])?void 0:_b.value)}_handleValueChange(){this._elListbox.then((listbox=>{listbox&&(Array.isArray(this.value)?listbox.selection=this.value:listbox.selection=[this.value])}))}_onOpenChange(){const open=this.open;Array.from((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_optionElements)).forEach((o=>o.hidden=!open)),open?(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_registerAutoCloseListener,registerAutoCloseListener_fn).call(this):((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_unregisterAutoCloseListener,unregisterAutoCloseListener_fn).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open},bubbles:!0,composed:!0}))}};_optionElements=new WeakMap,_handleSearchFieldKeyUp=new WeakMap,_handleSearchFieldKeyDown=new WeakMap,_handleListboxKeyDown=new WeakMap,_handleOptionFocusChange=new WeakMap,_handleSelectionChange=new WeakSet,handleSelectionChange_fn=function(){this._elListbox.then((listbox=>{var _a;this.multiple?this.value=listbox.selection.map((s=>s.value)):(this.value=null==(_a=listbox.selection[0])?void 0:_a.value,this.open=!1,setTimeout((()=>{var _a2;return null==(_a2=this._elTriggerBtn)?void 0:_a2.focus()}),0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}))},_registerAutoCloseListener=new WeakSet,registerAutoCloseListener_fn=function(){this.addEventListener("blur",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_blurCloseListener)),this.addEventListener("gds-blur",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_blurCloseListener)),this.addEventListener("keydown",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_tabCloseListener))},_unregisterAutoCloseListener=new WeakSet,unregisterAutoCloseListener_fn=function(){this.removeEventListener("blur",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_blurCloseListener)),this.removeEventListener("gds-blur",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_blurCloseListener)),this.removeEventListener("keydown",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_tabCloseListener))},_blurCloseListener=new WeakMap,_tabCloseListener=new WeakMap,GdsDropdown.styles=[_chunk_YVZEXN77_js__WEBPACK_IMPORTED_MODULE_2__.L,dropdown_styles_default],GdsDropdown.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsDropdown.prototype,"label",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"open",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"searchable",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"multiple",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsDropdown.prototype,"compareWith",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsDropdown.prototype,"searchFilter",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,attribute:"sync-popover-width"})],GdsDropdown.prototype,"syncPopoverWidth",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Number,attribute:"max-height"})],GdsDropdown.prototype,"maxHeight",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsDropdown.prototype,"size",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,attribute:"hide-label"})],GdsDropdown.prototype,"hideLabel",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsDropdown.prototype,"disableMobileStyles",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.P)("#trigger")],GdsDropdown.prototype,"_elTriggerBtn",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.nJ)("#listbox")],GdsDropdown.prototype,"_elListbox",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.P)("#searchinput")],GdsDropdown.prototype,"_elSearchInput",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_14__.L)({attributes:!0,childList:!0,subtree:!0,characterData:!0})],GdsDropdown.prototype,"_handleLightDOMChange",1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_3__.w)("value")],GdsDropdown.prototype,"_handleValueChange",1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_3__.w)("open")],GdsDropdown.prototype,"_onOpenChange",1),GdsDropdown=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__.Y$)("gds-dropdown")],GdsDropdown)},"./dist/libs/core/src/chunks/chunk.LNIDRT7V.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_Q6LYQSGS_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.Q6LYQSGS.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),IconChevronBottom=class extends _chunk_Q6LYQSGS_js__WEBPACK_IMPORTED_MODULE_0__.M{};IconChevronBottom._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconChevronBottom._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>',IconChevronBottom._name="chevron bottom",IconChevronBottom=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-icon-chevron-bottom")],IconChevronBottom)}}]);
//# sourceMappingURL=6794.471ced72.iframe.bundle.js.map