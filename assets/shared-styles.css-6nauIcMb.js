import{_ as i,r as g,n,c as y,s as I,x as u,d as E,T as c,j as q,E as N,i as D,a as M,b as P,t as v,w as $}from"./animation-_TEqrmD1.js";import{o as L}from"./query-assigned-elements-BJFWMYs6.js";import{o as z}from"./style-map-9Yerw4BC.js";import{n as U}from"./static-VcHqXR5s.js";import{r as W}from"./delegate-G9HsjGKO.js";import{r as Y}from"./events-SXK1JT6v.js";import{V as H,m as j,a as G,g as X,c as K,d as J}from"./validator-bsz2Xc5j.js";import{m as Q}from"./element-internals-MRZXgA-l.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class p extends I{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){return this.count<0||this.max<0?"":`${this.count} / ${this.max}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(t){t.has("disabled")&&t.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(t.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:t.get("focused"),wasPopulated:t.get("populated")}),super.update(t)}render(){var o,d,h;const t=this.renderLabel(!0),e=this.renderLabel(!1),r=(o=this.renderOutline)==null?void 0:o.call(this,t),l={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return u`
      <div class="field ${E(l)}">
        <div class="container-overflow">
          ${(d=this.renderBackground)==null?void 0:d.call(this)} ${(h=this.renderIndicator)==null?void 0:h.call(this)} ${r}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${e} ${r?c:t}
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
    `}updated(t){(t.has("supportingText")||t.has("errorText")||t.has("count")||t.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){const{supportingOrErrorText:t,counterText:e}=this;if(!t&&!e)return c;const r=u`<span>${t}</span>`,l=e?u`<span class="counter">${e}</span>`:c,d=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":c;return u`
      <div class="supporting-text" role=${d}>${r}${l}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const t of this.slottedAriaDescribedBy)q(u`${this.supportingOrErrorText} ${this.counterText}`,t),t.setAttribute("hidden","")}renderLabel(t){if(!this.label)return c;let e;t?e=this.focused||this.populated||this.isAnimating:e=!this.focused&&!this.populated&&!this.isAnimating;const r={hidden:!e,floating:t,resting:!t},l=`${this.label}${this.required?"*":""}`;return u`
      <span class="label ${E(r)}" aria-hidden=${!e}
        >${l}</span
      >
    `}animateLabelIfNeeded({wasFocused:t,wasPopulated:e}){var o,d,h;if(!this.label)return;t??(t=this.focused),e??(e=this.populated);const r=t||e,l=this.focused||this.populated;r!==l&&(this.isAnimating=!0,(o=this.labelAnimation)==null||o.cancel(),this.labelAnimation=(d=this.floatingLabelEl)==null?void 0:d.animate(this.getLabelKeyframes(),{duration:150,easing:N.STANDARD}),(h=this.labelAnimation)==null||h.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){const{floatingLabelEl:t,restingLabelEl:e}=this;if(!t||!e)return[];const{x:r,y:l,height:o}=t.getBoundingClientRect(),{x:d,y:h,height:m}=e.getBoundingClientRect(),V=t.scrollWidth,O=e.scrollWidth,A=O/V,F=d-r,k=h-l+Math.round((m-o*A)/2),C=`translateX(${F}px) translateY(${k}px) scale(${A})`,R="translateX(0) translateY(0) scale(1)",S=e.clientWidth,T=O>S?`${S/A}px`:"";return this.focused||this.populated?[{transform:C,width:T},{transform:R,width:T}]:[{transform:R,width:T},{transform:C,width:T}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}i([n({type:Boolean})],p.prototype,"disabled",void 0);i([n({type:Boolean})],p.prototype,"error",void 0);i([n({type:Boolean})],p.prototype,"focused",void 0);i([n()],p.prototype,"label",void 0);i([n({type:Boolean})],p.prototype,"populated",void 0);i([n({type:Boolean})],p.prototype,"required",void 0);i([n({type:Boolean})],p.prototype,"resizable",void 0);i([n({attribute:"supporting-text"})],p.prototype,"supportingText",void 0);i([n({attribute:"error-text"})],p.prototype,"errorText",void 0);i([n({type:Number})],p.prototype,"count",void 0);i([n({type:Number})],p.prototype,"max",void 0);i([n({type:Boolean,attribute:"has-start"})],p.prototype,"hasStart",void 0);i([n({type:Boolean,attribute:"has-end"})],p.prototype,"hasEnd",void 0);i([L({slot:"aria-describedby"})],p.prototype,"slottedAriaDescribedBy",void 0);i([g()],p.prototype,"isAnimating",void 0);i([g()],p.prototype,"refreshErrorAlert",void 0);i([g()],p.prototype,"disableTransitions",void 0);i([y(".label.floating")],p.prototype,"floatingLabelEl",void 0);i([y(".label.resting")],p.prototype,"restingLabelEl",void 0);i([y(".container")],p.prototype,"containerEl",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const vt=D`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=s=>s.strings===void 0,tt={},et=(s,t=tt)=>s._$AH=t;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=M(class extends P{constructor(s){if(super(s),s.type!==v.PROPERTY&&s.type!==v.ATTRIBUTE&&s.type!==v.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Z(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===$||t===c)return t;const e=s.element,r=s.name;if(s.type===v.PROPERTY){if(t===e[r])return $}else if(s.type===v.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(r))return $}else if(s.type===v.ATTRIBUTE&&e.getAttribute(r)===t+"")return $;return et(s),t}});/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const rt={fromAttribute(s){return s??""},toAttribute(s){return s||null}};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const f=Symbol("onReportValidity"),x=Symbol("privateCleanupFormListeners"),_=Symbol("privateDoNotReportInvalid");function it(s){var t,e;class r extends s{constructor(...o){super(...o),this[t]=new AbortController,this[e]=!1,this.addEventListener("invalid",d=>{this[_]||!d.isTrusted||this.addEventListener("invalid",()=>{d.defaultPrevented||this[f](d)},{once:!0})},{capture:!0})}checkValidity(){this[_]=!0;const o=super.checkValidity();return this[_]=!1,o}reportValidity(){const o=super.reportValidity();return o&&this[f](null),o}[(t=x,e=_,f)](o){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(o){if(super.formAssociatedCallback&&super.formAssociatedCallback(o),this[x].abort(),!o)return;this[x]=new AbortController,o.addEventListener("submit",()=>{this[f](null)},{signal:this[x].signal});let d=!1,h=new AbortController;ot({form:o,cleanup:this[x].signal,beforeReportValidity:()=>{d=!1,this.addEventListener("invalid",m=>{d=!0,m.defaultPrevented||this[f](m)},{signal:h.signal})},afterReportValidity:()=>{if(h.abort(),h=new AbortController,d){d=!1;return}this[f](null)}})}}return r}const w=new WeakMap;function ot({form:s,beforeReportValidity:t,afterReportValidity:e,cleanup:r}){if(!w.has(s)){const o=new EventTarget,d=s.reportValidity;s.reportValidity=function(){o.dispatchEvent(new Event("before"));const h=d.call(this);return o.dispatchEvent(new Event("after")),h},w.set(s,o)}const l=w.get(s);l.addEventListener("before",t,{signal:r}),l.addEventListener("after",e,{signal:r})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class nt extends H{computeValidity({state:t,renderedControl:e}){let r=e;b(t)&&!r?(r=this.inputControl||document.createElement("input"),this.inputControl=r):r||(r=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=r);const l=b(t)?r:null;if(l&&(l.type=t.type),r.value!==t.value&&(r.value=t.value),r.required=t.required,l){const o=t;o.pattern?l.pattern=o.pattern:l.removeAttribute("pattern"),o.min?l.min=o.min:l.removeAttribute("min"),o.max?l.max=o.max:l.removeAttribute("max"),o.step?l.step=o.step:l.removeAttribute("step")}return t.minLength>-1?r.minLength=t.minLength:r.removeAttribute("minlength"),t.maxLength>-1?r.maxLength=t.maxLength:r.removeAttribute("maxlength"),{validity:r.validity,validationMessage:r.validationMessage}}equals({state:t},{state:e}){const r=t.type===e.type&&t.value===e.value&&t.required===e.required&&t.minLength===e.minLength&&t.maxLength===e.maxLength;return!b(t)||!b(e)?r:r&&t.pattern===e.pattern&&t.min===e.min&&t.max===e.max&&t.step===e.step}copy({state:t}){return{state:b(t)?this.copyInput(t):this.copyTextArea(t),renderedControl:null}}copyInput(t){const{type:e,pattern:r,min:l,max:o,step:d}=t;return{...this.copySharedState(t),type:e,pattern:r,min:l,max:o,step:d}}copyTextArea(t){return{...this.copySharedState(t),type:t.type}}copySharedState({value:t,required:e,minLength:r,maxLength:l}){return{value:t,required:e,minLength:r,maxLength:l}}}function b(s){return s.type!=="textarea"}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const st=it(j(G(Q(I))));class a extends st{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get valueAsNumber(){const t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){const e=this.getInput();e&&(e.valueAsNumber=t,this.value=e.value)}get valueAsDate(){const t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){const e=this.getInput();e&&(e.valueAsDate=t,this.value=e.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,e,r){this.getInputOrTextarea().setSelectionRange(t,e,r)}stepDown(t){const e=this.getInput();e&&(e.stepDown(t),this.value=e.value)}stepUp(t){const e=this.getInput();e&&(e.stepUp(t),this.value=e.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,e,r){t==="value"&&this.dirty||super.attributeChangedCallback(t,e,r)}render(){const t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea"};return u`
      <span class="text-field ${E(t)}">
        ${this.renderField()}
      </span>
    `}updated(t){const e=this.getInputOrTextarea().value;this.value!==e&&(this.value=e)}renderField(){return U`<${this.fieldTag}
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
    </${this.fieldTag}>`}renderLeadingIcon(){return u`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return u`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const t={direction:this.textDirection},e=this.ariaLabel||this.label||c,r=this.autocomplete;if(this.type==="textarea")return u`
        <textarea
          class="input"
          style=${z(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${r||c}
          ?disabled=${this.disabled}
          maxlength=${this.maxLength>-1?this.maxLength:c}
          minlength=${this.minLength>-1?this.minLength:c}
          placeholder=${this.placeholder||c}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${B(this.value)}
          @change=${this.redispatchEvent}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const l=this.renderPrefix(),o=this.renderSuffix(),d=this.inputMode;return u`
      <div class="input-wrapper">
        ${l}
        <input
          class="input"
          style=${z(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${r||c}
          ?disabled=${this.disabled}
          inputmode=${d||c}
          max=${this.max||c}
          maxlength=${this.maxLength>-1?this.maxLength:c}
          min=${this.min||c}
          minlength=${this.minLength>-1?this.minLength:c}
          pattern=${this.pattern||c}
          placeholder=${this.placeholder||c}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||c}
          type=${this.type}
          .value=${B(this.value)}
          @change=${this.redispatchEvent}
          @focusin=${this.handleFocusin}
          @focusout=${this.handleFocusout}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${o}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,e){return t?u`<span class="${E({suffix:e,prefix:!e})}">${t}</span>`:c}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusin(){this.focused=!0}handleFocusout(){this.focused=!1}handleInput(t){this.dirty=!0,this.value=t.target.value}redispatchEvent(t){Y(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[X](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}focus(){this.getInputOrTextarea().focus()}[K](){return new nt(()=>({state:this,renderedControl:this.inputOrTextarea}))}[J](){return this.inputOrTextarea}[f](t){var r;if(t!=null&&t.defaultPrevented)return;t&&(t.preventDefault(),this.focus());const e=this.getErrorText();this.nativeError=!!t,this.nativeErrorText=this.validationMessage,e===this.getErrorText()&&((r=this.field)==null||r.reannounceError())}}W(a);a.shadowRootOptions={...I.shadowRootOptions,delegatesFocus:!0};i([n({type:Boolean,reflect:!0})],a.prototype,"error",void 0);i([n({attribute:"error-text"})],a.prototype,"errorText",void 0);i([n()],a.prototype,"label",void 0);i([n({type:Boolean,reflect:!0})],a.prototype,"required",void 0);i([n()],a.prototype,"value",void 0);i([n({attribute:"prefix-text"})],a.prototype,"prefixText",void 0);i([n({attribute:"suffix-text"})],a.prototype,"suffixText",void 0);i([n({type:Boolean,attribute:"has-leading-icon"})],a.prototype,"hasLeadingIcon",void 0);i([n({type:Boolean,attribute:"has-trailing-icon"})],a.prototype,"hasTrailingIcon",void 0);i([n({attribute:"supporting-text"})],a.prototype,"supportingText",void 0);i([n({attribute:"text-direction"})],a.prototype,"textDirection",void 0);i([n({type:Number})],a.prototype,"rows",void 0);i([n({type:Number})],a.prototype,"cols",void 0);i([n({reflect:!0})],a.prototype,"inputMode",void 0);i([n()],a.prototype,"max",void 0);i([n({type:Number})],a.prototype,"maxLength",void 0);i([n()],a.prototype,"min",void 0);i([n({type:Number})],a.prototype,"minLength",void 0);i([n()],a.prototype,"pattern",void 0);i([n({reflect:!0,converter:rt})],a.prototype,"placeholder",void 0);i([n({type:Boolean,reflect:!0})],a.prototype,"readOnly",void 0);i([n({type:Boolean,reflect:!0})],a.prototype,"multiple",void 0);i([n()],a.prototype,"step",void 0);i([n({reflect:!0})],a.prototype,"type",void 0);i([n({reflect:!0})],a.prototype,"autocomplete",void 0);i([g()],a.prototype,"dirty",void 0);i([g()],a.prototype,"focused",void 0);i([g()],a.prototype,"nativeError",void 0);i([g()],a.prototype,"nativeErrorText",void 0);i([y(".input")],a.prototype,"inputOrTextarea",void 0);i([y(".field")],a.prototype,"field",void 0);i([L({slot:"leading-icon"})],a.prototype,"leadingIcons",void 0);i([L({slot:"trailing-icon"})],a.prototype,"trailingIcons",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const xt=D`:host{display:inline-flex;outline:none;resize:both;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background-color:Field}}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}/*# sourceMappingURL=shared-styles.css.map */
`;export{p as F,a as T,xt as a,vt as s};
