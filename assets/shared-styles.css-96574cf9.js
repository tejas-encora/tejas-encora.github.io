import{_ as r,g,n as i,l as $,d as v,s as T,x as h,o as y,c as a,D as R,E as V,b as O,e as S,i as N,t as f,T as b}from"./animation-c900ecb0.js";import{o as I}from"./style-map-7c20cf8d.js";import{n as k}from"./static-73c25833.js";import{r as q}from"./delegate-e2fd2eae.js";import{r as F}from"./events-00ef5ad2.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class l extends T{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){return this.count<0||this.max<0?"":`${this.count} / ${this.max}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(t){t.has("disabled")&&t.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(t.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:t.get("focused"),wasPopulated:t.get("populated")}),super.update(t)}render(){var c,p,u;const t=this.renderLabel(!0),e=this.renderLabel(!1),n=(c=this.renderOutline)==null?void 0:c.call(this,t),d={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return h`
      <div class="field ${y(d)}">
        <div class="container-overflow">
          ${(p=this.renderBackground)==null?void 0:p.call(this)}
          ${(u=this.renderIndicator)==null?void 0:u.call(this)}
          ${n}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${e}
                ${n?a:t}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `}updated(t){(t.has("supportingText")||t.has("errorText")||t.has("count")||t.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:t,counterText:e}=this;if(!t&&!e)return a;const n=h`<span>${t}</span>`,d=e?h`<span class="counter">${e}</span>`:a,p=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":a;return h`
      <div class="supporting-text" role=${p}>${n}${d}</div>
      <slot name="aria-describedby" @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const t of this.slottedAriaDescribedBy)R(h`${this.supportingOrErrorText} ${this.counterText}`,t),t.setAttribute("hidden","")}renderLabel(t){if(!this.label)return a;let e;t?e=this.focused||this.populated||this.isAnimating:e=!this.focused&&!this.populated&&!this.isAnimating;const n={hidden:!e,floating:t,resting:!t},d=`${this.label}${this.required?"*":""}`;return h`
      <span class="label ${y(n)}"
        aria-hidden=${!e}
      >${d}</span>
    `}animateLabelIfNeeded({wasFocused:t,wasPopulated:e}){var c,p,u;if(!this.label)return;t??(t=this.focused),e??(e=this.populated);const n=t||e,d=this.focused||this.populated;n!==d&&(this.isAnimating=!0,(c=this.labelAnimation)==null||c.cancel(),this.labelAnimation=(p=this.floatingLabelEl)==null?void 0:p.animate(this.getLabelKeyframes(),{duration:150,easing:V.STANDARD}),(u=this.labelAnimation)==null||u.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:t,restingLabelEl:e}=this;if(!t||!e)return[];const{x:n,y:d,height:c}=t.getBoundingClientRect(),{x:p,y:u,height:C}=e.getBoundingClientRect(),z=t.scrollWidth,_=e.scrollWidth,m=_/z,B=p-n,D=u-d+Math.round((C-c*m)/2),E=`translateX(${B}px) translateY(${D}px) scale(${m})`,w="translateX(0) translateY(0) scale(1)",A=e.clientWidth,x=_>A?`${A/m}px`:"";return this.focused||this.populated?[{transform:E,width:x},{transform:w,width:x}]:[{transform:w,width:x},{transform:E,width:x}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}r([i({type:Boolean})],l.prototype,"disabled",void 0);r([i({type:Boolean})],l.prototype,"error",void 0);r([i({type:Boolean})],l.prototype,"focused",void 0);r([i()],l.prototype,"label",void 0);r([i({type:Boolean})],l.prototype,"populated",void 0);r([i({type:Boolean})],l.prototype,"required",void 0);r([i({type:Boolean})],l.prototype,"resizable",void 0);r([i({attribute:"supporting-text"})],l.prototype,"supportingText",void 0);r([i({attribute:"error-text"})],l.prototype,"errorText",void 0);r([i({type:Number})],l.prototype,"count",void 0);r([i({type:Number})],l.prototype,"max",void 0);r([i({type:Boolean,attribute:"has-start"})],l.prototype,"hasStart",void 0);r([i({type:Boolean,attribute:"has-end"})],l.prototype,"hasEnd",void 0);r([$({slot:"aria-describedby"})],l.prototype,"slottedAriaDescribedBy",void 0);r([g()],l.prototype,"isAnimating",void 0);r([g()],l.prototype,"refreshErrorAlert",void 0);r([g()],l.prototype,"disableTransitions",void 0);r([v(".label.floating")],l.prototype,"floatingLabelEl",void 0);r([v(".label.resting")],l.prototype,"restingLabelEl",void 0);r([v(".container")],l.prototype,"containerEl",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const J=O`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;white-space:pre-wrap}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=s=>s.strings===void 0,U={},P=(s,t=U)=>s._$AH=t;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=S(class extends N{constructor(s){if(super(s),s.type!==f.PROPERTY&&s.type!==f.ATTRIBUTE&&s.type!==f.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!M(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===b||t===a)return t;const e=s.element,n=s.name;if(s.type===f.PROPERTY){if(t===e[n])return b}else if(s.type===f.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(n))return b}else if(s.type===f.ATTRIBUTE&&e.getAttribute(n)===t+"")return b;return P(s),t}});/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const W={fromAttribute(s){return s??""},toAttribute(s){return s||null}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class o extends T{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.errorText="",this.label="",this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.pattern="",this.placeholder="",this.readOnly=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText="",this.hasCustomValidityError=!1,this.internals=this.attachInternals()}get form(){return this.internals.form}get labels(){return this.internals.labels}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get validationMessage(){return this.syncValidity(),this.internals.validationMessage}get validity(){return this.syncValidity(),this.internals.validity}get valueAsNumber(){const t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){const e=this.getInput();e&&(e.valueAsNumber=t,this.value=e.value)}get valueAsDate(){const t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){const e=this.getInput();e&&(e.valueAsDate=t,this.value=e.value)}get willValidate(){return this.syncValidity(),this.internals.willValidate}get hasError(){return this.error||this.nativeError}checkValidity(){return this.syncValidity(),this.internals.checkValidity()}reportValidity(){var d;let t;this.addEventListener("invalid",c=>{t=c},{once:!0});const e=this.checkValidity();if(t!=null&&t.defaultPrevented)return e;const n=this.getErrorText();return this.nativeError=!e,this.nativeErrorText=this.validationMessage,n===this.getErrorText()&&((d=this.field)==null||d.reannounceError()),e}select(){this.getInputOrTextarea().select()}setCustomValidity(t){this.hasCustomValidityError=!!t,this.internals.setValidity({customError:!!t},t,this.getInputOrTextarea())}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,e,n){this.getInputOrTextarea().setSelectionRange(t,e,n)}stepDown(t){const e=this.getInput();e&&(e.stepDown(t),this.value=e.value)}stepUp(t){const e=this.getInput();e&&(e.stepUp(t),this.value=e.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,e,n){t==="value"&&this.dirty||super.attributeChangedCallback(t,e,n)}render(){const t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea"};return h`
       <span class="text-field ${y(t)}">
         ${this.renderField()}
       </span>
     `}updated(t){const e=this.getInputOrTextarea().value;this.value!==e&&(this.value=e),this.internals.setFormValue(e),this.syncValidity()}renderField(){return k`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type==="textarea"}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
    </${this.fieldTag}>`}renderLeadingIcon(){return h`
       <span class="icon leading" slot="start">
         <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `}renderTrailingIcon(){return h`
       <span class="icon trailing" slot="end">
         <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
       </span>
     `}renderInputOrTextarea(){const t={direction:this.textDirection},e=this.ariaLabel||this.label||a,n=this.autocomplete;if(this.type==="textarea")return h`
        <textarea
          class="input"
          style=${I(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${n||a}
          ?disabled=${this.disabled}
          maxlength=${this.maxLength>-1?this.maxLength:a}
          minlength=${this.minLength>-1?this.minLength:a}
          placeholder=${this.placeholder||a}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          .value=${L(this.value)}
          @change=${this.handleChange}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        ></textarea>
      `;const d=this.renderPrefix(),c=this.renderSuffix(),p=this.inputMode;return h`
      <div class="input-wrapper">
        ${d}
        <input
          class="input"
          style=${I(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${n||a}
          ?disabled=${this.disabled}
          inputmode=${p||a}
          max=${this.max||a}
          maxlength=${this.maxLength>-1?this.maxLength:a}
          min=${this.min||a}
          minlength=${this.minLength>-1?this.minLength:a}
          pattern=${this.pattern||a}
          placeholder=${this.placeholder||a}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          step=${this.step||a}
          type=${this.type}
          .value=${L(this.value)}
          @change=${this.redispatchEvent}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        >
        ${c}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,e){return t?h`<span class="${y({suffix:e,prefix:!e})}">${t}</span>`:a}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusin(){this.focused=!0}handleFocusout(){this.focused=!1}handleInput(t){this.dirty=!0,this.value=t.target.value,this.syncValidity()}handleChange(t){this.syncValidity(),this.redispatchEvent(t)}redispatchEvent(t){F(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}syncValidity(){const t=this.getInputOrTextarea();this.hasCustomValidityError?t.setCustomValidity(this.internals.validationMessage):t.setCustomValidity(""),this.internals.setValidity(t.validity,t.validationMessage,this.getInputOrTextarea())}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}}q(o);o.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0};o.formAssociated=!0;r([i({type:Boolean,reflect:!0})],o.prototype,"disabled",void 0);r([i({type:Boolean,reflect:!0})],o.prototype,"error",void 0);r([i({attribute:"error-text"})],o.prototype,"errorText",void 0);r([i()],o.prototype,"label",void 0);r([i({type:Boolean,reflect:!0})],o.prototype,"required",void 0);r([i()],o.prototype,"value",void 0);r([i({attribute:"prefix-text"})],o.prototype,"prefixText",void 0);r([i({attribute:"suffix-text"})],o.prototype,"suffixText",void 0);r([i({type:Boolean,attribute:"has-leading-icon"})],o.prototype,"hasLeadingIcon",void 0);r([i({type:Boolean,attribute:"has-trailing-icon"})],o.prototype,"hasTrailingIcon",void 0);r([i({attribute:"supporting-text"})],o.prototype,"supportingText",void 0);r([i({attribute:"text-direction"})],o.prototype,"textDirection",void 0);r([i({type:Number})],o.prototype,"rows",void 0);r([i({reflect:!0})],o.prototype,"inputMode",void 0);r([i()],o.prototype,"max",void 0);r([i({type:Number})],o.prototype,"maxLength",void 0);r([i()],o.prototype,"min",void 0);r([i({type:Number})],o.prototype,"minLength",void 0);r([i()],o.prototype,"pattern",void 0);r([i({reflect:!0,converter:W})],o.prototype,"placeholder",void 0);r([i({type:Boolean,reflect:!0})],o.prototype,"readOnly",void 0);r([i()],o.prototype,"step",void 0);r([i({reflect:!0})],o.prototype,"type",void 0);r([i({reflect:!0})],o.prototype,"autocomplete",void 0);r([g()],o.prototype,"dirty",void 0);r([g()],o.prototype,"focused",void 0);r([g()],o.prototype,"nativeError",void 0);r([g()],o.prototype,"nativeErrorText",void 0);r([v(".input")],o.prototype,"inputOrTextarea",void 0);r([v(".field")],o.prototype,"field",void 0);r([$({slot:"leading-icon"})],o.prototype,"leadingIcons",void 0);r([$({slot:"trailing-icon"})],o.prototype,"trailingIcons",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Q=O`:host{display:inline-flex;outline:none;resize:both;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background-color:Field}}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}/*# sourceMappingURL=shared-styles.css.map */
`;export{l as F,o as T,Q as a,J as s};
//# sourceMappingURL=shared-styles.css-96574cf9.js.map
