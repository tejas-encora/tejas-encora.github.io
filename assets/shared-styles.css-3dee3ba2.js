import{_ as i,t as f,n as o,l as $,b as x,s as T,x as h,o as y,A as l,D as k,E as N,i as O,c as C,d as z,f as g,T as v,r as q,g as F,h as M}from"./events-897ffe23.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class d extends T{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){return this.count<0||this.max<0?"":`${this.count} / ${this.max}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(t){t.has("disabled")&&t.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(t.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:t.get("focused"),wasPopulated:t.get("populated")}),super.update(t)}render(){var c,p,u;const t=this.renderLabel(!0),e=this.renderLabel(!1),r=(c=this.renderOutline)==null?void 0:c.call(this,t),a={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return h`
      <div class="field ${y(a)}">
        <div class="container-overflow">
          ${(p=this.renderBackground)==null?void 0:p.call(this)}
          ${(u=this.renderIndicator)==null?void 0:u.call(this)}
          ${r}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${e}
                ${r?l:t}
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
    `}updated(t){(t.has("supportingText")||t.has("errorText")||t.has("count")||t.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:t,counterText:e}=this;if(!t&&!e)return l;const r=h`<span>${t}</span>`,a=e?h`<span class="counter">${e}</span>`:l,p=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":l;return h`
      <div class="supporting-text" role=${p}>${r}${a}</div>
      <slot name="aria-describedby" @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const t of this.slottedAriaDescribedBy)k(h`${this.supportingOrErrorText} ${this.counterText}`,t),t.setAttribute("hidden","")}renderLabel(t){if(!this.label)return l;let e;t?e=this.focused||this.populated||this.isAnimating:e=!this.focused&&!this.populated&&!this.isAnimating;const r={hidden:!e,floating:t,resting:!t},a=`${this.label}${this.required?"*":""}`;return h`
      <span class="label ${y(r)}"
        aria-hidden=${!e}
      >${a}</span>
    `}animateLabelIfNeeded({wasFocused:t,wasPopulated:e}){var c,p,u;if(!this.label)return;t??(t=this.focused),e??(e=this.populated);const r=t||e,a=this.focused||this.populated;r!==a&&(this.isAnimating=!0,(c=this.labelAnimation)==null||c.cancel(),this.labelAnimation=(p=this.floatingLabelEl)==null?void 0:p.animate(this.getLabelKeyframes(),{duration:150,easing:N.STANDARD}),(u=this.labelAnimation)==null||u.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:t,restingLabelEl:e}=this;if(!t||!e)return[];const{x:r,y:a,height:c}=t.getBoundingClientRect(),{x:p,y:u,height:R}=e.getBoundingClientRect(),D=t.scrollWidth,_=e.scrollWidth,m=_/D,V=p-r,S=u-a+Math.round((R-c*m)/2),E=`translateX(${V}px) translateY(${S}px) scale(${m})`,w="translateX(0) translateY(0) scale(1)",A=e.clientWidth,b=_>A?`${A/m}px`:"";return this.focused||this.populated?[{transform:E,width:b},{transform:w,width:b}]:[{transform:w,width:b},{transform:E,width:b}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}i([o({type:Boolean})],d.prototype,"disabled",void 0);i([o({type:Boolean})],d.prototype,"error",void 0);i([o({type:Boolean})],d.prototype,"focused",void 0);i([o()],d.prototype,"label",void 0);i([o({type:Boolean})],d.prototype,"populated",void 0);i([o({type:Boolean})],d.prototype,"required",void 0);i([o({type:Boolean})],d.prototype,"resizable",void 0);i([o({attribute:"supporting-text"})],d.prototype,"supportingText",void 0);i([o({attribute:"error-text"})],d.prototype,"errorText",void 0);i([o({type:Number})],d.prototype,"count",void 0);i([o({type:Number})],d.prototype,"max",void 0);i([o({type:Boolean,attribute:"has-start"})],d.prototype,"hasStart",void 0);i([o({type:Boolean,attribute:"has-end"})],d.prototype,"hasEnd",void 0);i([$({slot:"aria-describedby"})],d.prototype,"slottedAriaDescribedBy",void 0);i([f()],d.prototype,"isAnimating",void 0);i([f()],d.prototype,"refreshErrorAlert",void 0);i([f()],d.prototype,"disableTransitions",void 0);i([x(".label.floating")],d.prototype,"floatingLabelEl",void 0);i([x(".label.resting")],d.prototype,"restingLabelEl",void 0);i([x(".container")],d.prototype,"containerEl",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const K=O`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;white-space:pre-wrap}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=n=>n.strings===void 0,P={},W=(n,t=P)=>n._$AH=t;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=C(class extends z{constructor(n){if(super(n),n.type!==g.PROPERTY&&n.type!==g.ATTRIBUTE&&n.type!==g.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!U(n))throw Error("`live` bindings can only contain a single expression")}render(n){return n}update(n,[t]){if(t===v||t===l)return t;const e=n.element,r=n.name;if(n.type===g.PROPERTY){if(t===e[r])return v}else if(n.type===g.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(r))return v}else if(n.type===g.ATTRIBUTE&&e.getAttribute(r)===t+"")return v;return W(n),t}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B="important",Y=" !"+B,L=C(class extends z{constructor(n){var t;if(super(n),n.type!==g.ATTRIBUTE||n.name!=="style"||((t=n.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,e)=>{const r=n[e];return r==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(n,[t]){const{style:e}=n.element;if(this.ht===void 0){this.ht=new Set;for(const r in t)this.ht.add(r);return this.render(t)}this.ht.forEach(r=>{t[r]==null&&(this.ht.delete(r),r.includes("-")?e.removeProperty(r):e[r]="")});for(const r in t){const a=t[r];if(a!=null){this.ht.add(r);const c=typeof a=="string"&&a.endsWith(Y);r.includes("-")||c?e.setProperty(r,c?a.slice(0,-11):a,c?B:""):e[r]=a}}return v}});/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const X={fromAttribute(n){return n??""},toAttribute(n){return n||null}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class s extends T{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.errorText="",this.label="",this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.pattern="",this.placeholder="",this.readOnly=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText="",this.hasCustomValidityError=!1,this.internals=this.attachInternals()}get form(){return this.internals.form}get labels(){return this.internals.labels}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get validationMessage(){return this.syncValidity(),this.internals.validationMessage}get validity(){return this.syncValidity(),this.internals.validity}get valueAsNumber(){const t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){const e=this.getInput();e&&(e.valueAsNumber=t,this.value=e.value)}get valueAsDate(){const t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){const e=this.getInput();e&&(e.valueAsDate=t,this.value=e.value)}get willValidate(){return this.syncValidity(),this.internals.willValidate}get hasError(){return this.error||this.nativeError}checkValidity(){return this.syncValidity(),this.internals.checkValidity()}reportValidity(){var a;let t;this.addEventListener("invalid",c=>{t=c},{once:!0});const e=this.checkValidity();if(t!=null&&t.defaultPrevented)return e;const r=this.getErrorText();return this.nativeError=!e,this.nativeErrorText=this.validationMessage,r===this.getErrorText()&&((a=this.field)==null||a.reannounceError()),e}select(){this.getInputOrTextarea().select()}setCustomValidity(t){this.hasCustomValidityError=!!t,this.internals.setValidity({customError:!!t},t,this.getInputOrTextarea())}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,e,r){this.getInputOrTextarea().setSelectionRange(t,e,r)}stepDown(t){const e=this.getInput();e&&(e.stepDown(t),this.value=e.value)}stepUp(t){const e=this.getInput();e&&(e.stepUp(t),this.value=e.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,e,r){t==="value"&&this.dirty||super.attributeChangedCallback(t,e,r)}render(){const t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea"};return h`
       <span class="text-field ${y(t)}">
         ${this.renderField()}
       </span>
     `}updated(t){const e=this.getInputOrTextarea().value;this.value!==e&&(this.value=e),this.internals.setFormValue(e),this.syncValidity()}renderField(){return F`<${this.fieldTag}
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
     `}renderInputOrTextarea(){const t={direction:this.textDirection},e=this.ariaLabel||this.label||l,r=this.autocomplete;if(this.type==="textarea")return h`
        <textarea
          class="input"
          style=${L(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${r||l}
          ?disabled=${this.disabled}
          maxlength=${this.maxLength>-1?this.maxLength:l}
          minlength=${this.minLength>-1?this.minLength:l}
          placeholder=${this.placeholder||l}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          .value=${I(this.value)}
          @change=${this.handleChange}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        ></textarea>
      `;const a=this.renderPrefix(),c=this.renderSuffix(),p=this.inputMode;return h`
      <div class="input-wrapper">
        ${a}
        <input
          class="input"
          style=${L(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${r||l}
          ?disabled=${this.disabled}
          inputmode=${p||l}
          max=${this.max||l}
          maxlength=${this.maxLength>-1?this.maxLength:l}
          min=${this.min||l}
          minlength=${this.minLength>-1?this.minLength:l}
          pattern=${this.pattern||l}
          placeholder=${this.placeholder||l}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          step=${this.step||l}
          type=${this.type}
          .value=${I(this.value)}
          @change=${this.redispatchEvent}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}
        >
        ${c}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,e){return t?h`<span class="${y({suffix:e,prefix:!e})}">${t}</span>`:l}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusin(){this.focused=!0}handleFocusout(){this.focused=!1}handleInput(t){this.dirty=!0,this.value=t.target.value,this.syncValidity()}handleChange(t){this.syncValidity(),this.redispatchEvent(t)}redispatchEvent(t){M(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}syncValidity(){const t=this.getInputOrTextarea();this.hasCustomValidityError?t.setCustomValidity(this.internals.validationMessage):t.setCustomValidity(""),this.internals.setValidity(t.validity,t.validationMessage,this.getInputOrTextarea())}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}}q(s);s.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0};s.formAssociated=!0;i([o({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0);i([o({type:Boolean,reflect:!0})],s.prototype,"error",void 0);i([o({attribute:"error-text"})],s.prototype,"errorText",void 0);i([o()],s.prototype,"label",void 0);i([o({type:Boolean,reflect:!0})],s.prototype,"required",void 0);i([o()],s.prototype,"value",void 0);i([o({attribute:"prefix-text"})],s.prototype,"prefixText",void 0);i([o({attribute:"suffix-text"})],s.prototype,"suffixText",void 0);i([o({type:Boolean,attribute:"has-leading-icon"})],s.prototype,"hasLeadingIcon",void 0);i([o({type:Boolean,attribute:"has-trailing-icon"})],s.prototype,"hasTrailingIcon",void 0);i([o({attribute:"supporting-text"})],s.prototype,"supportingText",void 0);i([o({attribute:"text-direction"})],s.prototype,"textDirection",void 0);i([o({type:Number})],s.prototype,"rows",void 0);i([o({reflect:!0})],s.prototype,"inputMode",void 0);i([o()],s.prototype,"max",void 0);i([o({type:Number})],s.prototype,"maxLength",void 0);i([o()],s.prototype,"min",void 0);i([o({type:Number})],s.prototype,"minLength",void 0);i([o()],s.prototype,"pattern",void 0);i([o({reflect:!0,converter:X})],s.prototype,"placeholder",void 0);i([o({type:Boolean,reflect:!0})],s.prototype,"readOnly",void 0);i([o()],s.prototype,"step",void 0);i([o({reflect:!0})],s.prototype,"type",void 0);i([o({reflect:!0})],s.prototype,"autocomplete",void 0);i([f()],s.prototype,"dirty",void 0);i([f()],s.prototype,"focused",void 0);i([f()],s.prototype,"nativeError",void 0);i([f()],s.prototype,"nativeErrorText",void 0);i([x(".input")],s.prototype,"inputOrTextarea",void 0);i([x(".field")],s.prototype,"field",void 0);i([$({slot:"leading-icon"})],s.prototype,"leadingIcons",void 0);i([$({slot:"trailing-icon"})],s.prototype,"trailingIcons",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const G=O`:host{display:inline-flex;outline:none;resize:both;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background-color:Field}}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}/*# sourceMappingURL=shared-styles.css.map */
`;export{d as F,s as T,G as a,K as s};
//# sourceMappingURL=shared-styles.css-3dee3ba2.js.map
