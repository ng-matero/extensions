import{n as s,t as r}from"./chunk-Ch7qlBDL.js";import{$t as Tt$1,Ai as xa,An as aZ,Ar as nE,B as Ge$1,Bt as QO,C as DN,Ci as v_,Cn as Zu,Ct as Lr,D as ES,Di as wh,Dt as Mr,E as Dh,Ei as wO,Er as m_,Et as Me$1,F as G$2,Fi as ye,Gt as Sh,H as HD,Hi as zc,Ht as Qe$1,It as Pm,J as IN,Jr as pg,Mi as y,N as F$1,Nn as bN,Or as mn,Pn as be,Pt as Ot$1,Qt as To,Rn as cO,Si as vE,Sr as kr,Un as dt$2,Ut as Rl,V as H$1,Vn as dA,Wr as p$2,Wt as Sc,Xn as f_,Xt as T_,Yr as po,Zr as q5,Zt as Te$1,_i as uE,a as $t$2,ai as rN,ar as hN,bt as Lm,cn as Wc,ct as Ji,di as ss,fr as iA,g as CN,h as CE,hi as te$1,hr as ie$2,in as Ut$1,ir as hA,j as En,jn as ar,jr as ne$2,jt as O6,kn as aN,li as sN,lr as hv,mi as t_,mn as YN,mr as iT,mt as Ke$1,n as $9,nr as gn$1,nt as J,o as A$1,or as hn,ot as JR,pi as tN,pr as iN,qn as eg,si as rm,ti as qc,tn as U$1,tr as gi,tt as Iw,u as B$1,un as Wp,ur as hw,v as Ch,vi as ue$1,vn as Yr,vr as j$1,x as D$1,yn as ZD,yr as jM,z as Gc,zn as c_,zr as og}from"./chunk-_FgkqbxZ.js";import{c as Xe$1,o as Qe$2,t as A$2,u}from"./chunk-rXs1VGKJ.js";import{d as Ot$2,h as et$1,n as wt$2,p as Vt$1,r as l,t as Mt$1}from"./main-X2AELSID.js";import{n as x}from"./chunk-B26X4vza.js";import{n as p$3,t as g$1}from"./chunk-xBuwEChr.js";var d=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new j$1;bulk={select:e=>this._select(e),deselect:e=>this._deselect(e),setSelection:e=>this._setSelection(e)};constructor(e=!1,t,s=!0,n){this._multiple=e,this._emitChanges=s,this.compareWith=n,t&&t.length&&(e?t.forEach(i=>this._markSelected(i)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...e){return this._select(e)}deselect(...e){return this._deselect(e)}setSelection(...e){return this._setSelection(e)}toggle(e){return this.isSelected(e)?this.deselect(e):this.select(e)}clear(e=!0){this._unmarkAll();let t=this._hasQueuedChanges();return e&&this._emitChangeEvent(),t}isSelected(e){return this._selection.has(this._getConcreteValue(e))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_select(e){this._verifyValueAssignment(e),e.forEach(s=>this._markSelected(s));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_deselect(e){this._verifyValueAssignment(e),e.forEach(s=>this._unmarkSelected(s));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}_setSelection(e){this._verifyValueAssignment(e);let t=this.selected,s=new Set(e.map(i=>this._getConcreteValue(i)));e.forEach(i=>this._markSelected(i)),t.filter(i=>!s.has(this._getConcreteValue(i,s))).forEach(i=>this._unmarkSelected(i));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){e=this._getConcreteValue(e),this.isSelected(e)||(this._multiple||this._unmarkAll(),this.isSelected(e)||this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){e=this._getConcreteValue(e),this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){e.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(e,t){if(this.compareWith){t=t??this._selection;for(let s of t)if(this.compareWith(e,s))return s;return e}else return e}};var p$1=(()=>{class r{_listeners=[];notify(t,s){for(let n of this._listeners)n(t,s)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(s=>t!==s)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(s){return new(s||r)};static ɵprov=A$1({token:r,factory:r.ɵfac})}return r})();var g=class{applyChanges(e,t,s,n,i){e.forEachOperation((c,a,_)=>{let l,h;if(c.previousIndex==null){let m=s(c,a,_);l=t.createEmbeddedView(m.templateRef,m.context,m.index),h=u.INSERTED}else _==null?(t.remove(a),h=u.REMOVED):(l=t.get(a),t.move(l,_),h=u.MOVED);i&&i({context:l?.context,operation:h,record:c})})}detach(){}};var Re=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,r){this._renderer=t,this._elementRef=r}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty(`disabled`,t)}static ɵfac=function(r){return new(r||n)(J(hn),J(ye))};static ɵdir=Me$1({type:n})}return n})();var xe$1=(()=>{class n extends Re{static ɵfac=(()=>{let t;return function(i){return(t||(t=hv(n)))(i||n)}})();static ɵdir=Me$1({type:n,features:[HD]})}return n})();var ie$1=new D$1(``);var rt$1={provide:ie$1,useExisting:xa(()=>Te),multi:!0};function it$1(){let n=mn()?mn().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var ot$1=new D$1(``);var Te=(()=>{class n extends Re{_compositionMode;_composing=!1;constructor(t,r,i){super(t,r),this._compositionMode=i,this._compositionMode??=!it$1()}writeValue(t){let r=t??``;this.setProperty(`value`,r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static ɵfac=function(r){return new(r||n)(J(hn),J(ye),J(ot$1,8))};static ɵdir=Me$1({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(r,i){r&1&&Gc(`input`,function(a){return i._handleInput(a.target.value)})(`blur`,function(){return i.onTouched()})(`compositionstart`,function(){return i._compositionStart()})(`compositionend`,function(a){return i._compositionEnd(a.target.value)})},standalone:!1,features:[CE([rt$1]),HD]})}return n})();function oe(n){return n==null||se(n)===0}function se(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var W=new D$1(``);var ae$1=new D$1(``);var st$2=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var ee=class{static min(e){return at$1(e)}static max(e){return lt$2(e)}static required(e){return Pe(e)}static requiredTrue(e){return ut(e)}static email(e){return dt$1(e)}static minLength(e){return ct$2(e)}static maxLength(e){return ht$1(e)}static pattern(e){return pt$1(e)}static nullValidator(e){return j()}static compose(e){return Ue(e)}static composeAsync(e){return He(e)}};function at$1(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function lt$2(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function Pe(n){return oe(n.value)?{required:!0}:null}function ut(n){return n.value===!0?null:{required:!0}}function dt$1(n){return oe(n.value)||st$2.test(n.value)?null:{email:!0}}function ct$2(n){return e=>{let t=e.value?.length??se(e.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function ht$1(n){return e=>{let t=e.value?.length??se(e.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function pt$1(n){if(!n)return j;let e,t;return typeof n==`string`?(t=``,n.charAt(0)!==`^`&&(t+=`^`),t+=n,n.charAt(n.length-1)!==`$`&&(t+=`$`),e=new RegExp(t)):(t=n.toString(),e=n),r=>{if(oe(r.value))return null;let i=r.value;return e.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function j(n){return null}function je(n){return n!=null}function Ge(n){return kr(n)?ie$2(n):n}function ke$1(n){let e={};return n.forEach(t=>{e=t!=null?r(r({},e),t):e}),Object.keys(e).length===0?null:e}function Le(n,e){return e.map(t=>t(n))}function ft$1(n){return!n.validate}function Be(n){return n.map(e=>ft$1(e)?e:t=>e.validate(t))}function Ue(n){if(!n)return null;let e=n.filter(je);return e.length==0?null:function(t){return ke$1(Le(t,e))}}function le(n){return n!=null?Ue(Be(n)):null}function He(n){if(!n)return null;let e=n.filter(je);return e.length==0?null:function(t){let r=Le(t,e).map(Ge);return hw(r).pipe(U$1(ke$1))}}function ue(n){return n!=null?He(Be(n)):null}function Me(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function $e(n){return n._rawValidators}function qe(n){return n._rawAsyncValidators}function te(n){return n?Array.isArray(n)?n:[n]:[]}function G$1(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ee(n,e){let t=te(e);return te(n).forEach(i=>{G$1(t,i)||t.push(i)}),t}function Ne(n,e){return te(e).filter(t=>!G$1(n,t))}var k=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=le(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}};var _=class extends k{name;get formDirective(){return null}get path(){return null}};var N=`VALID`;var P=`INVALID`;var V=`PENDING`;var I$1=`DISABLED`;var p=class{};var L$1=class extends p{value;source;constructor(e,t){super(),this.value=e,this.source=t}};var F=class extends p{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}};var O=class extends p{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}};var D=class extends p{status;source;constructor(e,t){super(),this.status=e,this.source=t}};var B=class extends p{source;constructor(e){super(),this.source=e}};var A=class extends p{source;constructor(e){super(),this.source=e}};function We(n){return(z(n)?n.validators:n)||null}function gt$1(n){return Array.isArray(n)?le(n):n||null}function ze(n,e){return(z(e)?e.asyncValidators:n)||null}function mt$2(n){return Array.isArray(n)?ue(n):n||null}function z(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function yt(n,e,t){let r=n.controls;if(!(e?Object.keys(r):r).length)throw new y(1e3,``);if(!Ye(r,t))throw new y(1001,``)}function vt(n,e,t){n._forEachChild((r,i)=>{if(t[i]===void 0)throw new y(-1002,``)})}var U=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=H$1(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return F$1(this.statusReactive)}set status(e){F$1(()=>this.statusReactive.set(e))}_status=Tt$1(()=>this.statusReactive());statusReactive=H$1(void 0);get valid(){return this.status===N}get invalid(){return this.status===P}get pending(){return this.status===V}get disabled(){return this.status===I$1}get enabled(){return this.status!==I$1}errors;get pristine(){return F$1(this.pristineReactive)}set pristine(e){F$1(()=>this.pristineReactive.set(e))}_pristine=Tt$1(()=>this.pristineReactive());pristineReactive=H$1(!0);get dirty(){return!this.pristine}get touched(){return F$1(this.touchedReactive)}set touched(e){F$1(()=>this.touchedReactive.set(e))}_touched=Tt$1(()=>this.touchedReactive());touchedReactive=H$1(!1);get untouched(){return!this.touched}_events=new j$1;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ee(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ne(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ne(e,this._rawAsyncValidators))}hasValidator(e){return G$1(this._rawValidators,e)}hasAsyncValidator(e){return G$1(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let r$1=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(s(r({},e),{sourceControl:r$1})),t&&e.emitEvent!==!1&&this._events.next(new O(!0,r$1))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=e.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:r})}),e.onlySelf||this._parent?._updateTouched(e,r),t&&e.emitEvent!==!1&&this._events.next(new O(!1,r))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let r$2=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(s(r({},e),{sourceControl:r$2})),t&&e.emitEvent!==!1&&this._events.next(new F(!1,r$2))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=e.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,r),t&&e.emitEvent!==!1&&this._events.next(new F(!0,r))}markAsPending(e={}){this.status=V;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new D(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(s(r({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=I$1,this.errors=null,this._forEachChild(i=>{i.disable(s(r({},e),{onlySelf:!0}))}),this._updateValue();let r$3=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new L$1(this.value,r$3)),this._events.next(new D(this.status,r$3)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(s(r({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=N,this._forEachChild(r$4=>{r$4.enable(s(r({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(s(r({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===N||this.status===V)&&this._runAsyncValidator(r,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new L$1(this.value,t)),this._events.next(new D(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(s(r({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I$1:N}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let r=Ge(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(`.`)),t.length===0)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(e,t){let r=t?this.get(t):this;return r?.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,r){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||r)&&this._events.next(new D(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,r)}_initObservables(){this.valueChanges=new ue$1,this.statusChanges=new ue$1}_calculateStatus(){return this._allControlsDisabled()?I$1:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(P)?P:N}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,e.onlySelf||this._parent?._updatePristine(e,t),i&&this._events.next(new F(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new O(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=gt$1(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=mt$2(this._rawAsyncValidators)}_updateHasRequiredValidator(){F$1(()=>this._hasRequired.set(this.hasValidator(ee.required)))}};function Ye(n,e){return Object.hasOwn(n,e)}function _t(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function Ct(n,e,t,r){switch(t){case`name`:n.setAttribute(e,t,r);break;case`disabled`:case`readonly`:case`required`:r?n.setAttribute(e,t,``):n.removeAttribute(e,t);break;case`max`:case`min`:case`minLength`:case`maxLength`:r!==void 0?n.setAttribute(e,t,r.toString()):n.removeAttribute(e,t)}}var ne$1=class{kind;context;control;message;constructor({kind:e,context:t,control:r}){this.kind=e,this.context=t,this.control=r}};var Vt=(()=>{class n{_validator=j;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):j,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static ɵfac=function(r){return new(r||n)};static ɵdir=Me$1({type:n,features:[Ut$1]})}return n})();var Dt={provide:W,useExisting:xa(()=>Xe),multi:!0};var Xe=(()=>{class n extends Vt{required;inputName=`required`;normalizeInput=$t$2;createValidator=t=>Pe;enabled(t){return t}static ɵfac=(()=>{let t;return function(i){return(t||(t=hv(n)))(i||n)}})();static ɵdir=Me$1({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(r,i){r&2&&ss(`required`,i._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[CE([Dt]),HD]})}return n})();var At=new D$1(``);var Y=new D$1(``,{factory:()=>de});var de=`always`;function bt$1(n,e){return[...e.path,n]}function Ie(n,e,t=de){ce(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t===`always`)&&e.valueAccessor.setDisabledState?.(n.disabled),Et(n,e),It(n,e),Nt(n,e),Mt(n,e)}function Se$1(n,e,t=!0){let r=()=>{};e?.valueAccessor?.registerOnChange(r),e?.valueAccessor?.registerOnTouched(r),$$1(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function H(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Mt(n,e){if(e.valueAccessor.setDisabledState){let t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function ce(n,e){let t=$e(n);e.validator!==null?n.setValidators(Me(t,e.validator)):typeof t==`function`&&n.setValidators([t]);let r=qe(n);e.asyncValidator!==null?n.setAsyncValidators(Me(r,e.asyncValidator)):typeof r==`function`&&n.setAsyncValidators([r]);let i=()=>n.updateValueAndValidity();H(e._rawValidators,i),H(e._rawAsyncValidators,i)}function $$1(n,e){let t=!1;if(n!==null){if(e.validator!==null){let i=$e(n);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==e.validator);o.length!==i.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let i=qe(n);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==e.asyncValidator);o.length!==i.length&&(t=!0,n.setAsyncValidators(o))}}}let r=()=>{};return H(e._rawValidators,r),H(e._rawAsyncValidators,r),t}function Et(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn===`change`&&Ze(n,e)})}function Nt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn===`blur`&&n._pendingChange&&Ze(n,e),n.updateOn!==`submit`&&n.markAsTouched()})}function Ze(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function It(n,e){let t=(r,i)=>{e.valueAccessor.writeValue(r),i&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function Ke(n,e){ce(n,e)}function St(n,e){return $$1(n,e)}function Ft(n,e){if(!Object.hasOwn(n,`model`))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Ot(n){return Object.getPrototypeOf(n.constructor)===xe$1}function Qe(n,e){n._syncPendingControls(),e.forEach(t=>{let r=t.control;r.updateOn===`submit`&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function wt$1(n,e){if(!e)return null;let t,r,i;return e.forEach(o=>{o.constructor===Te?t=o:Ot(o)?r=o:i=o}),i||r||t||null}function Rt(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var xt={provide:At,useFactory:()=>{let n=p$2(b,{self:!0});return{setParseErrors:e=>{n.setParseErrorSource(e)},set onReset(e){n.onReset=e}}}};var b=class extends k{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof A&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=wt$1(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(e,t,r){super(),this.injector=e,this.renderer=t,this.rawValueAccessors=r,this.injector?.get(Te$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let e=this.injector?.get(Lr);if(!this.control||!e)return;let t=e.markForCheck.bind(e);this.subscription=new te$1,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(r=>{r instanceof A&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(e){!e.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=!0,e.listenToCustomControlModel(i=>{this.control?.markAsDirty(),this.control?.setValue(i,{emitModelToViewChange:!1}),this.viewToModelUpdate(i)}),e.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=_t(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof Xe))}ngControlUpdate(e,t){if(!this.isCustomControlBased)return;let r=this.control,i=this.customControlBindings;Object.is(i.value,r.value)||(i.value=r.value,e.setCustomControlModelInput(r.value)),this.bindControlProperty(e,i,`touched`,r.touched),this.bindControlProperty(e,i,`dirty`,r.dirty),this.bindControlProperty(e,i,`valid`,r.valid),this.bindControlProperty(e,i,`invalid`,r.invalid),this.bindControlProperty(e,i,`pending`,r.pending),this.bindControlProperty(e,i,`disabled`,r.disabled),this.shouldBindRequired&&this.bindControlProperty(e,i,`required`,this.isRequired);let o=r.errors;if(i.errors!==o){i.errors=o;let a=this._convertErrors(o);e.setInputOnDirectives(`errors`,a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(e,t,r,i){if(t[r]===i)return;t[r]=i;let o=e.setInputOnDirectives(r,i);this.isNativeFormElement&&!o&&(r===`disabled`||r===`required`)&&this.renderer&&Ct(this.renderer,e.nativeElement,r,i)}_convertErrors(e){if(e===null)return[];let t=this.control;return Object.entries(e).map(([r,i])=>new ne$1({context:i,kind:r,control:t}))}setParseErrorSource(e){if(e===void 0)return;let t=null,r=Tt$1(()=>{let i=e();return i.length===0?null:i.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>t).bind(this),To(()=>{t=r(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:!1}))}};var re=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var gn=(()=>{class n extends re{constructor(t){super(t)}static ɵfac=function(r){return new(r||n)(J(b,2))};static ɵdir=Me$1({type:n,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(r,i){r&2&&qc(`ng-untouched`,i.isUntouched)(`ng-touched`,i.isTouched)(`ng-pristine`,i.isPristine)(`ng-dirty`,i.isDirty)(`ng-valid`,i.isValid)(`ng-invalid`,i.isInvalid)(`ng-pending`,i.isPending)},standalone:!1,features:[HD]})}return n})();var q=class extends U{constructor(e,t,r){super(We(t),ze(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this._find(e)||(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){let r=this._find(e);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){let i=this._find(e);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this._find(e)?.enabled===!0}setValue(e,t={}){F$1(()=>{vt(this,!0,e),Object.keys(e).forEach(r=>{yt(this,!0,r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(r=>{let i=this._find(r);i&&i.patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r$5,i)=>{r$5.reset(e?e[i]:null,s(r({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new A(this))}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>r._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,r]of Object.entries(this.controls))if(this.contains(t)&&e(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,i)=>((r.enabled||this.disabled)&&(t[i]=r.value),t))}_reduceChildren(e,t){let r=e;return this._forEachChild((i,o)=>{r=t(r,i,o)}),r}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return Ye(this.controls,e)?this.controls[e]:null}};var Tt={provide:_,useExisting:xa(()=>Pt)};var S=Promise.resolve();var Pt=(()=>{class n extends _{callSetDisabledState;get submitted(){return F$1(this.submittedReactive)}_submitted=Tt$1(()=>this.submittedReactive());submittedReactive=H$1(!1);_directives=new Set;form;ngSubmit=new ue$1;options;constructor(t,r,i){super(),this.callSetDisabledState=i,this.form=new q({},le(t),ue(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){S.then(()=>{t.control=this._findContainer(t.path).registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){S.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){S.then(()=>{let r=this._findContainer(t.path),i=new q({});Ke(i,t),r.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){S.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){S.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Qe(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new B(this.control)),t?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static ɵfac=function(r){return new(r||n)(J(W,10),J(ae$1,10),J(Y,8))};static ɵdir=Me$1({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(r,i){r&1&&Gc(`submit`,function(a){return i.onSubmit(a)})(`reset`,function(){return i.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[CE([Tt]),HD]})}return n})();function Fe(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Oe(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var Je=class extends U{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,r){super(We(t),ze(r,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Oe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){F$1(()=>{this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new A(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Fe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Fe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Oe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var jt=n=>n instanceof Je;var Gt=(()=>{class n extends _{callSetDisabledState;get submitted(){return F$1(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=Tt$1(()=>this._submittedReactive());_submittedReactive=H$1(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,r,i){super(),this.callSetDisabledState=i,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),Object.hasOwn(t,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&($$1(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let r=this.form.get(t.path);return t._setupWithForm(r,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){Se$1(t.control||null,t,!1),Rt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,r){this.form.get(t.path).setValue(r)}onReset(){this.resetForm()}resetForm(t=void 0,r={}){this.form.reset(t,r),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,Qe(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new B(this.control)),t?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,i=this.form.get(t.path);r!==i&&(Se$1(r||null,t),jt(i)&&t._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);Ke(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let r=this.form?.get(t.path);r&&St(r,t)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ce(this.form,this),this._oldForm&&$$1(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(r){return new(r||n)(J(W,10),J(ae$1,10),J(Y,8))};static ɵdir=Me$1({type:n,features:[HD,Ut$1]})}return n})();var kt={provide:_,useExisting:xa(()=>Lt)};var Lt=(()=>{class n extends Gt{form=null;ngSubmit=new ue$1;get control(){return this.form}static ɵfac=(()=>{let t;return function(i){return(t||(t=hv(n)))(i||n)}})();static ɵdir=Me$1({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(r,i){r&1&&Gc(`submit`,function(a){return i.onSubmit(a)})(`reset`,function(){return i.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[CE([kt]),HD]})}return n})();var Bt={provide:b,useExisting:xa(()=>Ut)};var we=Promise.resolve();var Ut=(()=>{class n extends b{_changeDetectorRef;callSetDisabledState;control=new Je;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name=``;isDisabled;model;options;update=new ue$1;constructor(t,r,i,o,a,et,tt,nt){super(tt,nt,o),this._changeDetectorRef=a,this.callSetDisabledState=et,this._parent=t,this._setValidators(r),this._setAsyncValidators(i)}ngOnChanges(t){if(this._registered,this._checkForErrors(),!this._registered||`name`in t){if(this._registered&&(this._checkName(),this.formDirective)){let r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}`isDisabled`in t&&this._updateDisabled(t),Ft(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(t){super.ngControlCreate(t)}ɵngControlUpdate(t){super.ngControlUpdate(t,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ie(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(t){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Ie(this.control,this,t))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){we.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let r=t.isDisabled.currentValue,i=r!==0&&$t$2(r);we.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?bt$1(t,this._parent):[t]}static ɵfac=function(r){return new(r||n)(J(_,9),J(W,10),J(ae$1,10),J(ie$1,10),J(Lr,8),J(Y,8),J(ne$2,8),J(hn,8))};static ɵdir=Me$1({type:n,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[CE([Bt,xt]),HD,Ut$1,jM(null)]})}return n})();var Ht={provide:ie$1,useExisting:xa(()=>$t$1),multi:!0};var $t$1=(()=>{class n extends xe$1{writeValue(t){let r=t??``;this.setProperty(`value`,r)}registerOnChange(t){this.onChange=r=>{t(r==``?null:parseFloat(r))}}static ɵfac=(()=>{let t;return function(i){return(t||(t=hv(n)))(i||n)}})();static ɵdir=Me$1({type:n,selectors:[[`input`,`type`,`number`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`formControl`,``,3,`ngNoCva`,``],[`input`,`type`,`number`,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(r,i){r&1&&Gc(`input`,function(a){return i.onChange(a.target.value)})(`blur`,function(){return i.onTouched()})},standalone:!1,features:[CE([Ht]),HD]})}return n})();var qt=(()=>{class n{static ɵfac=function(r){return new(r||n)};static ɵmod=dt$2({type:n});static ɵinj=Qe$1({})}return n})();var yn=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Y,useValue:t.callSetDisabledState??de}]}}static ɵfac=function(r){return new(r||n)};static ɵmod=dt$2({type:n});static ɵinj=Qe$1({imports:[qt]})}return n})();var it=(()=>{class t{get vertical(){return this._vertical}set vertical(i){this._vertical=$9(i)}_vertical=!1;get inset(){return this._inset}set inset(i){this._inset=$9(i)}_inset=!1;static ɵfac=function(e){return new(e||t)};static ɵcmp=gn$1({type:t,selectors:[[`mat-divider`]],hostAttrs:[`role`,`separator`,1,`mat-divider`],hostVars:7,hostBindings:function(e,n){e&2&&(ss(`aria-orientation`,n.vertical?`vertical`:`horizontal`),qc(`mat-divider-vertical`,n.vertical)(`mat-divider-horizontal`,!n.vertical)(`mat-divider-inset`,n.inset))},inputs:{vertical:`vertical`,inset:`inset`},decls:0,vars:0,template:function(e,n){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return t})();var Z=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵmod=dt$2({type:t});static ɵinj=Qe$1({imports:[q5]})}return t})();var et=new D$1(`ListOption`);var nt=(()=>{class t{_elementRef=p$2(ye);static ɵfac=function(e){return new(e||t)};static ɵdir=Me$1({type:t,selectors:[[``,`matListItemTitle`,``]],hostAttrs:[1,`mat-mdc-list-item-title`,`mdc-list-item__primary-text`]})}return t})();var at=(()=>{class t{_elementRef=p$2(ye);static ɵfac=function(e){return new(e||t)};static ɵdir=Me$1({type:t,selectors:[[``,`matListItemLine`,``]],hostAttrs:[1,`mat-mdc-list-item-line`,`mdc-list-item__secondary-text`]})}return t})();var mt$1=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵdir=Me$1({type:t,selectors:[[``,`matListItemMeta`,``]],hostAttrs:[1,`mat-mdc-list-item-meta`,`mdc-list-item__end`]})}return t})();var $=(()=>{class t{_listOption=p$2(et,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()===`after`}static ɵfac=function(e){return new(e||t)};static ɵdir=Me$1({type:t,hostVars:4,hostBindings:function(e,n){e&2&&qc(`mdc-list-item__start`,n._isAlignedAtStart())(`mdc-list-item__end`,!n._isAlignedAtStart())}})}return t})();var lt$1=(()=>{class t extends ${static ɵfac=(()=>{let i;return function(n){return(i||(i=hv(t)))(n||t)}})();static ɵdir=Me$1({type:t,selectors:[[``,`matListItemAvatar`,``]],hostAttrs:[1,`mat-mdc-list-item-avatar`],features:[HD]})}return t})();var st$1=(()=>{class t extends ${static ɵfac=(()=>{let i;return function(n){return(i||(i=hv(t)))(n||t)}})();static ɵdir=Me$1({type:t,selectors:[[``,`matListItemIcon`,``]],hostAttrs:[1,`mat-mdc-list-item-icon`],features:[HD]})}return t})();var ct$1=new D$1(`MAT_LIST_CONFIG`);var I=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(i){this._disableRipple=$9(i)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(i){this._disabled.set($9(i))}_disabled=H$1(!1);_defaultOptions=p$2(ct$1,{optional:!0});static ɵfac=function(e){return new(e||t)};static ɵdir=Me$1({type:t,hostVars:1,hostBindings:function(e,n){e&2&&ss(`aria-disabled`,n.disabled)},inputs:{disableRipple:`disableRipple`,disabled:`disabled`}})}return t})();var rt=(()=>{class t{_elementRef=p$2(ye);_ngZone=p$2(G$2);_listBase=p$2(I,{optional:!0});_platform=p$2(Ke$1);_hostElement;_isButtonElement;_noopAnimations=T_();_avatars;_icons;set lines(i){this._explicitLines=og(i,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(i){this._disableRipple=$9(i)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(i){this._disabled.set($9(i))}_disabled=H$1(!1);_subscriptions=new te$1;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){p$2(Yr).load(aZ);let i=p$2(QO,{optional:!0});this.rippleConfig=i||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()===`button`,this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute(`type`)&&this._hostElement.setAttribute(`type`,`button`)}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add(`mat-mdc-list-item-interactive`),this._rippleRenderer=new pg(this,this._ngZone,this._hostElement,this._platform,p$2(ne$2)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Iw(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(i){if(!this._lines||!this._titles||!this._unscopedContent)return;i&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle(`mat-mdc-list-item-single-line`,e<=1),this._hostElement.classList.toggle(`mdc-list-item--with-one-line`,e<=1),this._hostElement.classList.toggle(`mdc-list-item--with-two-lines`,e===2),this._hostElement.classList.toggle(`mdc-list-item--with-three-lines`,e===3),this._hasUnscopedTextContent){let p=this._titles.length===0&&e===1;n.classList.toggle(`mdc-list-item__primary-text`,p),n.classList.toggle(`mdc-list-item__secondary-text`,!p)}else n.classList.remove(`mdc-list-item__primary-text`),n.classList.remove(`mdc-list-item__secondary-text`)}_inferLinesFromContent(){let i=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(i+=1),i}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(i=>i.nodeType!==i.COMMENT_NODE).some(i=>!!(i.textContent&&i.textContent.trim()))}static ɵfac=function(e){return new(e||t)};static ɵdir=Me$1({type:t,contentQueries:function(e,n,p){if(e&1&&Wc(p,lt$1,4)(p,st$1,4),e&2){let o;wh(o=Ch())&&(n._avatars=o),wh(o=Ch())&&(n._icons=o)}},hostVars:4,hostBindings:function(e,n){e&2&&(ss(`aria-disabled`,n.disabled)(`disabled`,n._isButtonElement&&n.disabled||null),qc(`mdc-list-item--disabled`,n.disabled))},inputs:{lines:`lines`,disableRipple:`disableRipple`,disabled:`disabled`}})}return t})();var Zt=(()=>{class t extends rt{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(i){this._activated=$9(i)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName===`A`&&this._activated?`page`:null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static ɵfac=(()=>{let i;return function(n){return(i||(i=hv(t)))(n||t)}})();static ɵcmp=(function(){let i=[`unscopedContent`],e=[`text`],n=[[[``,`matListItemAvatar`,``],[``,`matListItemIcon`,``]],[[``,`matListItemTitle`,``]],[[``,`matListItemLine`,``]],`*`,[[``,`matListItemMeta`,``]],[[`mat-divider`]]];return gn$1({type:t,selectors:[[`mat-list-item`],[`a`,`mat-list-item`,``],[`button`,`mat-list-item`,``]],contentQueries:function(l,a,s){if(l&1&&Wc(s,at,5)(s,nt,5)(s,mt$1,5),l&2){let _;wh(_=Ch())&&(a._lines=_),wh(_=Ch())&&(a._titles=_),wh(_=Ch())&&(a._meta=_)}},viewQuery:function(l,a){if(l&1&&nE(i,5)(e,5),l&2){let s;wh(s=Ch())&&(a._unscopedContent=s.first),wh(s=Ch())&&(a._itemText=s.first)}},hostAttrs:[1,`mat-mdc-list-item`,`mdc-list-item`],hostVars:13,hostBindings:function(l,a){l&2&&(ss(`aria-current`,a._getAriaCurrent()),qc(`mdc-list-item--activated`,a.activated)(`mdc-list-item--with-leading-avatar`,a._avatars.length!==0)(`mdc-list-item--with-leading-icon`,a._icons.length!==0)(`mdc-list-item--with-trailing-meta`,a._meta.length!==0)(`mat-mdc-list-item-both-leading-and-trailing`,a._hasBothLeadingAndTrailing())(`_mat-animation-noopable`,a._noopAnimations))},inputs:{activated:`activated`},exportAs:[`matListItem`],features:[HD],ngContentSelectors:[`[matListItemAvatar],[matListItemIcon]`,`[matListItemTitle]`,`[matListItemLine]`,`*`,`[matListItemMeta]`,`mat-divider`],decls:10,vars:0,consts:[[`unscopedContent`,``],[1,`mdc-list-item__content`],[1,`mat-mdc-list-item-unscoped-content`,3,`cdkObserveContent`],[1,`mat-focus-indicator`]],template:function(l,a){l&1&&(IN(n),bN(0),Sc(1,`span`,1),bN(2,1),bN(3,2),Sc(4,`span`,2,0),Gc(`cdkObserveContent`,function(){return a._updateItemLines(!0)}),bN(6,3),Dh()(),bN(7,4),bN(8,5),zc(9,`div`,3))},dependencies:[O6],encapsulation:2})})()}return t})();var $t=(()=>{class t extends I{_isNonInteractive=!1;static ɵfac=(()=>{let i;return function(n){return(i||(i=hv(t)))(n||t)}})();static ɵcmp=(function(){return gn$1({type:t,selectors:[[`mat-nav-list`]],hostAttrs:[`role`,`navigation`,1,`mat-mdc-nav-list`,`mat-mdc-list-base`,`mdc-list`],exportAs:[`matNavList`],features:[CE([{provide:I,useExisting:t}]),HD],ngContentSelectors:[`*`],decls:1,vars:0,template:function(n,p){n&1&&(IN(),bN(0))},styles:[`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`],encapsulation:2})})()}return t})();var Jt=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵmod=dt$2({type:t});static ɵinj=Qe$1({imports:[f_,et$1,x,q5,Z]})}return t})();var ct=n=>[n];function lt(n,s){if(n&1&&(Sc(0,`a`,3,0),YN(2),Dh()),n&2){let e=s.$implicit,t=CN(1);ZD(`activated`,t.isActive)(`routerLink`,iA(3,ct,`/components/`+e.id)),iT(2),Sh(` `,e.name,` `)}}var xe=[{id:`alert`,name:`Alert`,summary:`Provide contextual feedback messages for typical user actions.`},{id:`button`,name:`Button`,summary:`Provide a button loading directive for Material.`},{id:`checkbox-group`,name:`Checkbox Group`,summary:`Allows the user to create a set of checkbox with select all.`},{id:`colorpicker`,name:`Color Picker`,summary:`An extra input to select color enhanced by the ngx-color.`},{id:`grid`,name:`Data Grid`,summary:`A powerful data grid for Material table.`},{id:`datetimepicker`,name:`Datetimepicker`,summary:`Allows the user to choose both dates and times.`},{id:`dialog`,name:`Dialog`,summary:`A configurable modal to show alert and confirmation.`},{id:`drawer`,name:`Drawer`,summary:`A large interactive panel that displays dynamic content.`},{id:`loader`,name:`Loader`,summary:`An easier loading component wrap with progress bar and spinner.`},{id:`photoviewer`,name:`Photoviewer`,summary:`A feature-rich image viewer.`},{id:`popover`,name:`Popover`,summary:`A floating panel containing html content.`},{id:`progress`,name:`Progress`,summary:`A linear progress indicator with Bootstrap style.`},{id:`select`,name:`Select`,summary:`A ng-select wrapper to be used in the form field.`},{id:`split`,name:`Split Pane`,summary:`A component for creating multi-view layouts.`},{id:`tooltip`,name:`Tooltip`,summary:`The tooltip support rich content.`}];var ne=class n{constructor(){this.menus=xe}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=gn$1({type:n,selectors:[[`app-component-nav`]],inputs:{params:`params`},decls:5,vars:0,consts:[[`link`,`routerLinkActive`],[1,`docs-component-viewer-nav`],[1,`docs-component-viewer-nav-content`],[`mat-list-item`,``,`routerLinkActive`,`docs-component-viewer-sidenav-item-selected`,3,`activated`,`routerLink`]],template:function(e,t){e&1&&(Sc(0,`div`,1)(1,`div`,2)(2,`mat-nav-list`),sN(3,lt,3,5,`a`,3,iN),Dh()()()),e&2&&(iT(3),aN(t.menus))},dependencies:[Jt,$t,Zt,cO,Zu],encapsulation:2})}};var mt=n=>[n];function pt(n,s){if(n&1&&(Sc(0,`a`,3)(1,`div`,4)(2,`div`,5),YN(3),Dh(),Sc(4,`div`,6),YN(5),Dh()()()),n&2){let e=s.$implicit;ZD(`routerLink`,iA(3,mt,`/components/`+e.id)),iT(3),vE(e.name),iT(2),vE(e.summary)}}var ae=class n{constructor(){this._componentPageTitle=p$2(p$3);this._route=p$2(En);this.list=xe}ngOnInit(){this.params=gi(this._route.pathFromRoot.map(s=>s.params),Object.assign),this.routeParamSubscription=this.params.subscribe(s=>{this._componentPageTitle.title=`components`})}ngOnDestroy(){this.routeParamSubscription&&this.routeParamSubscription.unsubscribe()}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=gn$1({type:n,selectors:[[`app-component-category-list`]],decls:5,vars:1,consts:[[`id`,`category-summary`,`focusOnNavigation`,``,1,`docs-component-category-list-summary`],[3,`innerHTML`],[1,`docs-component-category-list`],[1,`docs-component-category-list-item`,3,`routerLink`],[1,`docs-component-category-list-card`],[1,`docs-component-category-list-card-title`],[1,`docs-component-category-list-card-summary`]],template:function(e,t){e&1&&(Sc(0,`div`,0),zc(1,`div`,1),Dh(),Sc(2,`div`,2),sN(3,pt,6,5,`a`,3,iN),Dh()),e&2&&(iT(),ZD(`innerHTML`,t._categoryListSummary,ES),iT(2),aN(t.list))},dependencies:[g$1,Zu],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center}.docs-component-category-list-summary[_ngcontent-%COMP%]{padding:40px 40px 0;font-size:16px;line-height:1.5;display:flex;justify-content:center}@media(width<=1255px){.docs-component-category-list-summary[_ngcontent-%COMP%]{max-width:600px}}@media(width<=694px){.docs-component-category-list-summary[_ngcontent-%COMP%]{max-width:280px}}.docs-component-category-list-summary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary)}.docs-component-category-list-card-title[_ngcontent-%COMP%], .docs-component-category-list-card-summary[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant)}.docs-component-category-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding:20px 20px 100px;justify-content:center}.docs-component-category-list-item[_ngcontent-%COMP%]{display:inline-block;margin:20px;vertical-align:top;width:280px}.docs-component-category-list-item[_ngcontent-%COMP%]   .docs-component-category-list-card-title[_ngcontent-%COMP%]{align-items:center;display:flex;padding:16px;font-size:20px;font-weight:500}.docs-component-category-list-item[_ngcontent-%COMP%], .docs-component-category-list-item[_ngcontent-%COMP%]:active, .docs-component-category-list-item[_ngcontent-%COMP%]:hover, .docs-component-category-list-item[_ngcontent-%COMP%]:focus{text-decoration:none}.docs-component-category-list-card[_ngcontent-%COMP%]{overflow:hidden;transition:background .3s ease;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:12px}.docs-component-category-list-card[_ngcontent-%COMP%]:hover{background:var(--%NS%mat-sys-surface-dim)}.docs-component-category-list-card-image-wrapper[_ngcontent-%COMP%]{height:156px;border-bottom:1px solid var(--%NS%mat-sys-outline-variant)}.docs-component-category-list-card-summary[_ngcontent-%COMP%]{padding:0 16px 16px;min-height:2.4em;font-size:16px}.docs-component-category-list-card-image[_ngcontent-%COMP%]{width:100%}`]})}};var ht=new D$1(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var ke=new D$1(`MAT_DRAWER_CONTAINER`);var L=(()=>{class n extends Qe$2{_platform=p$2(Ke$1);_changeDetectorRef=p$2(Lr);_element=p$2(ye);_ngZone=p$2(G$2);_isInert=!1;_container=p$2(Se);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(rm(50),Ge$1(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute(`inert`,`true`):t.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!==`over`&&e.opened||t!=null&&t.mode!==`over`&&t.opened}static ɵfac=(()=>{let e;return function(r){return(e||(e=hv(n)))(r||n)}})();static ɵcmp=(function(){return gn$1({type:n,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(r,i){r&2&&(uE(`margin-left`,i._container._contentMargins.left,`px`)(`margin-right`,i._container._contentMargins.right,`px`),qc(`mat-drawer-content-hidden`,i._shouldBeHidden()))},features:[CE([{provide:Qe$2,useExisting:n}]),HD],ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,i){r&1&&(IN(),bN(0))},encapsulation:2})})()}return n})();var Ce=(()=>{class n{_elementRef=p$2(ye);_focusTrapFactory=p$2(v_);_focusMonitor=p$2(c_);_platform=p$2(Ke$1);_ngZone=p$2(G$2);_renderer=p$2(hn);_interactivityChecker=p$2(m_);_doc=p$2(B$1);_isAnimating=!1;_container=p$2(ke,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e===`end`?`end`:`start`,e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=$9(e)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(e){(e===`true`||e===`false`||e==null)&&(e=$9(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle($9(e))}_opened=H$1(!1);_openedVia=null;_animationStarted=new j$1;_animationEnd=new j$1;openedChange=new ue$1(!0);_openedStream=this.openedChange.pipe(be(e=>e),U$1(()=>{}));openedStart=this._animationStarted.pipe(be(()=>this.opened),Rl(void 0));_closedStream=this.openedChange.pipe(be(e=>!e),U$1(()=>{}));closedStart=this._animationStarted.pipe(be(()=>!this.opened),Rl(void 0));_destroyed=new j$1;onPositionChanged=new ue$1;_content;_modeChanged=new j$1;_injector=p$2(ne$2);_changeDetectorRef=p$2(Lr);constructor(){this.openedChange.pipe(Ot$1(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,`keydown`,r=>{r.keyCode===27&&!this.disableClose&&!t_(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(t,`transitionend`,this._handleTransitionEvent),e.listen(t,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&(this._interactivityChecker.isFocusable(r)||(r.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),d(),r.removeAttribute(`tabindex`)},o=this._renderer.listen(r,`blur`,i),d=this._renderer.listen(r,`mousedown`,i)})),r.focus(t))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:Ji(()=>{let t=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(t)&&typeof e.focus==`function`&&e.focus(t)},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(e){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||`program`);return e||(this._openedVia=null),r}_setOpen(e,t,r){return e===this.opened?Promise.resolve(e?`open`:`close`):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,e),!e&&t&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(i=>{this.openedChange.pipe(Ge$1(1)).subscribe(o=>i(o?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){e!==this._isAnimating&&(this._isAnimating=e,this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,e))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,r=t.parentNode;e===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),r.insertBefore(this._anchor,t)),r.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`content`];return gn$1({type:n,selectors:[[`mat-drawer`]],viewQuery:function(i,o){if(i&1&&nE(e,5),i&2){let d;wh(d=Ch())&&(o._content=d.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(i,o){i&2&&(ss(`align`,null)(`tabIndex`,o.mode!==`side`?`-1`:null),uE(`visibility`,!o._container&&!o.opened?`hidden`:null),qc(`mat-drawer-end`,o.position===`end`)(`mat-drawer-over`,o.mode===`over`)(`mat-drawer-push`,o.mode===`push`)(`mat-drawer-side`,o.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(i,o){i&1&&(IN(),Sc(0,`div`,1,0),bN(2),Dh())},dependencies:[Qe$2],encapsulation:2})})()}return n})();var Se=(()=>{class n{_dir=p$2(wO,{optional:!0});_element=p$2(ye);_ngZone=p$2(G$2);_changeDetectorRef=p$2(Lr);_animationDisabled=T_();_transitionsEnabled=!1;_allDrawers;_drawers=new Mr;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=$9(e)}_autosize=p$2(ht);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:$9(e)}_backdropOverride=null;backdropClick=new ue$1;_start=null;_end=null;_left=null;_right=null;_destroyed=new j$1;_doCheckSubject=new j$1;_contentMargins={left:null,right:null};_contentMarginChanges=new j$1;get scrollable(){return this._userContent||this._content}_injector=p$2(ne$2);constructor(){let e=p$2(Ke$1),t=p$2(Xe$1);this._dir?.change.pipe(Ot$1(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(Ot$1(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(po(this._allDrawers),Ot$1(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(po(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(ar(10),Ot$1(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)e+=this._left._getWidth();else if(this._left.mode==`push`){let r=this._left._getWidth();e+=r,t-=r}}if(this._right&&this._right.opened){if(this._right.mode==`side`)t+=this._right._getWidth();else if(this._right.mode==`push`){let r=this._right._getWidth();t+=r,e-=r}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Ot$1(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!==`side`&&e.openedChange.pipe(Ot$1(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Ot$1(this._drawers.changes)).subscribe(()=>{Ji({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Ot$1(Iw(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,r=`mat-drawer-container-has-open`;e?t.add(r):t.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position==`end`?(this._end,this._end=e):(this._start,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!==`side`:this._backdropOverride}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],t=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function r(o,d){if(o&1){let c=hN();Sc(0,`div`,1),Gc(`click`,function(){Lm(c);let h=DN();return Pm(h._onBackdropClicked())}),Dh()}if(o&2){let c=DN();qc(`mat-drawer-shown`,c._isShowingBackdrop())}}function i(o,d){o&1&&(Sc(0,`mat-drawer-content`),bN(1,2),Dh())}return gn$1({type:n,selectors:[[`mat-drawer-container`]],contentQueries:function(d,c,g){if(d&1&&Wc(g,L,5)(g,Ce,5),d&2){let h;wh(h=Ch())&&(c._content=h.first),wh(h=Ch())&&(c._allDrawers=h)}},viewQuery:function(d,c){if(d&1&&nE(L,5),d&2){let g;wh(g=Ch())&&(c._userContent=g.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(d,c){d&2&&qc(`mat-drawer-container-explicit-backdrop`,c._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[CE([{provide:ke,useExisting:n}])],ngContentSelectors:t,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(d,c){d&1&&(IN(e),tN(0,r,1,2,`div`,0),bN(1),bN(2,1),tN(3,i,2,0,`mat-drawer-content`)),d&2&&(rN(c.hasBackdrop?0:-1),iT(3),rN(c._content?-1:3))},dependencies:[L],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return n})();var ot=(()=>{class n extends L{static ɵfac=(()=>{let e;return function(r){return(e||(e=hv(n)))(r||n)}})();static ɵcmp=(function(){return gn$1({type:n,selectors:[[`mat-sidenav-content`]],hostAttrs:[1,`mat-drawer-content`,`mat-sidenav-content`],features:[CE([{provide:Qe$2,useExisting:n},{provide:L,useExisting:n}]),HD],ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,i){r&1&&(IN(),bN(0))},encapsulation:2})})()}return n})();var G=(()=>{class n extends Ce{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=$9(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=og(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=og(e)}_fixedBottomGap=0;static ɵfac=(()=>{let e;return function(r){return(e||(e=hv(n)))(r||n)}})();static ɵcmp=(function(){return gn$1({type:n,selectors:[[`mat-sidenav`]],hostAttrs:[1,`mat-drawer`,`mat-sidenav`],hostVars:16,hostBindings:function(r,i){r&2&&(ss(`tabIndex`,i.mode!==`side`?`-1`:null)(`align`,null),uE(`top`,i.fixedInViewport?i.fixedTopGap:null,`px`)(`bottom`,i.fixedInViewport?i.fixedBottomGap:null,`px`),qc(`mat-drawer-end`,i.position===`end`)(`mat-drawer-over`,i.mode===`over`)(`mat-drawer-push`,i.mode===`push`)(`mat-drawer-side`,i.mode===`side`)(`mat-sidenav-fixed`,i.fixedInViewport))},inputs:{fixedInViewport:`fixedInViewport`,fixedTopGap:`fixedTopGap`,fixedBottomGap:`fixedBottomGap`},exportAs:[`matSidenav`],features:[CE([{provide:Ce,useExisting:n}]),HD],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(r,i){r&1&&(IN(),Sc(0,`div`,1,0),bN(2),Dh())},dependencies:[Qe$2],encapsulation:2})})()}return n})();var st=(()=>{class n extends Se{_allDrawers=void 0;_content=void 0;static ɵfac=(()=>{let e;return function(r){return(e||(e=hv(n)))(r||n)}})();static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],t=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function r(o,d){if(o&1){let c=hN();Sc(0,`div`,1),Gc(`click`,function(){Lm(c);let h=DN();return Pm(h._onBackdropClicked())}),Dh()}if(o&2){let c=DN();qc(`mat-drawer-shown`,c._isShowingBackdrop())}}function i(o,d){o&1&&(Sc(0,`mat-sidenav-content`),bN(1,2),Dh())}return gn$1({type:n,selectors:[[`mat-sidenav-container`]],contentQueries:function(d,c,g){if(d&1&&Wc(g,ot,5)(g,G,5),d&2){let h;wh(h=Ch())&&(c._content=h.first),wh(h=Ch())&&(c._allDrawers=h)}},hostAttrs:[1,`mat-drawer-container`,`mat-sidenav-container`],hostVars:2,hostBindings:function(d,c){d&2&&qc(`mat-drawer-container-explicit-backdrop`,c._backdropOverride)},exportAs:[`matSidenavContainer`],features:[CE([{provide:ke,useExisting:n},{provide:Se,useExisting:n}]),HD],ngContentSelectors:t,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(d,c){d&1&&(IN(e),tN(0,r,1,2,`div`,0),bN(1),bN(2,1),tN(3,i,2,0,`mat-sidenav-content`)),d&2&&(rN(c.hasBackdrop?0:-1),iT(3),rN(c._content?-1:3))},dependencies:[ot],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return n})();var dt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=dt$2({type:n});static ɵinj=Qe$1({imports:[A$2,q5,A$2]})}return n})();var ie=class n{constructor(){this._componentPageTitle=p$2(p$3);this.toggleSidenav=new ue$1}getTitle(){return this._componentPageTitle.title}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=gn$1({type:n,selectors:[[`component-page-header`]],outputs:{toggleSidenav:`toggleSidenav`},decls:5,vars:0,consts:[[1,`docs-component-page-header`],[`matButton`,``,3,`click`]],template:function(e,t){e&1&&(Sc(0,`header`,0)(1,`button`,1),Gc(`click`,function(){return t.toggleSidenav.emit()}),Sc(2,`mat-icon`),YN(3,`menu`),Dh(),YN(4,` Menu `),Dh()())},dependencies:[Vt$1,Ot$2,Mt$1,wt$2],styles:[`.docs-component-page-header[_ngcontent-%COMP%]{display:none;justify-content:center;align-items:center;min-height:60px;background:var(--%NS%mat-sys-primary-container)}@media(max-width:959px){.docs-component-page-header[_ngcontent-%COMP%]{display:flex}}`]})}};function gt(n,s){if(n&1&&(Sc(0,`mat-sidenav`,2,0),dA(2,`async`),dA(3,`async`),dA(4,`async`),dA(5,`async`),zc(6,`app-component-nav`,7),Dh()),n&2){let e=DN();ZD(`opened`,hA(2,5,e.isScreenSmall)===!1)(`mode`,hA(3,7,e.isScreenSmall)?`over`:`side`)(`fixedInViewport`,hA(4,9,e.isScreenSmall))(`fixedTopGap`,hA(5,11,e.isExtraScreenSmall)?92:56),iT(6),ZD(`params`,e.params)}}function ft(n,s){if(n&1&&zc(0,`app-component-nav`,7),n&2){let e=DN();ZD(`params`,e.params)}}var wt=720;var bt=959;var In=[{path:``,component:class n{constructor(){this._route=p$2(En);this._navigationFocusService=p$2(l);this._urlFragment=``;this.subscriptions=new te$1;let s=p$2(eg);this.isExtraScreenSmall=s.observe(`(max-width: ${wt}px)`).pipe(U$1(e=>e.matches)),this.isScreenSmall=s.observe(`(max-width: ${bt}px)`).pipe(U$1(e=>e.matches))}ngOnInit(){this.params=gi(this._route.pathFromRoot.map(s=>s.params),Object.assign),this.subscriptions.add(this._navigationFocusService.navigationEndEvents.pipe(U$1(()=>this.isScreenSmall)).subscribe(s=>{s&&this.sidenav&&this.sidenav.close()})),this._route.fragment.subscribe(s=>{s!=null&&(this._urlFragment=s,setTimeout(()=>{let e=document.getElementById(this._urlFragment);e&&e.scrollIntoView()}))})}ngOnDestroy(){this.subscriptions.unsubscribe()}toggleSidenav(s){return s.toggle()}static{this.ɵfac=function(e){return new(e||n)}}static{this.ɵcmp=gn$1({type:n,selectors:[[`app-component-sidenav`]],viewQuery:function(e,t){if(e&1&&nE(G,5),e&2){let r;wh(r=Ch())&&(t.sidenav=r.first)}},decls:10,vars:6,consts:[[`sidenav`,``],[1,`docs-component-viewer-sidenav-container`],[`role`,`navigation`,1,`docs-component-viewer-sidenav`,3,`opened`,`mode`,`fixedInViewport`,`fixedTopGap`],[1,`docs-component-sidenav-content`],[3,`toggleSidenav`],[1,`docs-component-sidenav-inner-content`],[1,`docs-component-sidenav-body-content`],[3,`params`]],template:function(e,t){e&1&&(Sc(0,`mat-sidenav-container`,1),tN(1,gt,7,13,`mat-sidenav`,2),dA(2,`async`),Sc(3,`div`,3)(4,`component-page-header`,4),Gc(`toggleSidenav`,function(){return t.toggleSidenav(t.sidenav)}),Dh(),Sc(5,`div`,5)(6,`main`,6),tN(7,ft,1,1,`app-component-nav`,7),dA(8,`async`),zc(9,`router-outlet`),Dh()()()()),e&2&&(iT(),rN(hA(2,2,t.isScreenSmall)?1:-1),iT(6),rN(hA(8,4,t.isScreenSmall)===!1?7:-1))},dependencies:[dt,G,st,ne,ie,Wp,JR],styles:[`app-component-sidenav{display:flex;flex-direction:column;overflow:auto}.docs-component-viewer-sidenav-container{flex:1;box-sizing:border-box}.docs-component-viewer-sidenav{overflow:auto}.mat-drawer::-webkit-scrollbar{height:4px;width:4px}.docs-component-viewer-nav{position:sticky;top:0}.docs-component-viewer-nav .docs-component-viewer-nav-content{border-right:1px solid var(--%NS%mat-sys-outline-variant);width:240px;padding:16px 8px;height:calc(100vh - 56px);overflow:auto;box-sizing:border-box}.docs-component-viewer-nav .docs-component-viewer-nav-content::-webkit-scrollbar{height:4px;width:4px}.docs-component-viewer-nav .docs-component-viewer-nav-content::-webkit-scrollbar-thumb{background:#00000042}.docs-component-viewer-nav .docs-component-viewer-nav-content ul{list-style-type:none;margin:0 0 5px;padding:0;overflow:hidden}.docs-component-viewer-nav .docs-component-viewer-nav-content li{font-size:13px;line-height:16px;margin:0;padding:5px 15px 5px 20px}.docs-component-sidenav-content{display:flex;flex-direction:column;min-height:100%}.docs-component-sidenav-inner-content{display:flex;flex-direction:column;flex:1}.docs-component-sidenav-body-content{display:flex;flex:1 1 auto}div .mat-mdc-list-base{padding-top:0}div.docs-component-viewer-nav-content .mat-nav-list .mat-mdc-list-item .mat-list-item-content{padding-left:25px}@media(max-width:959px){.docs-component-viewer-sidenav-container .docs-component-viewer-sidenav{z-index:4}.docs-component-viewer-nav{position:relative;top:0}.docs-component-viewer-nav .docs-component-viewer-nav-content{width:100%;border:none;margin:0;max-height:initial}}@media(width<=720px){.docs-component-viewer-sidenav-container{flex:1 0 auto}.docs-component-sidenav-body-content{flex-direction:column}}
`],encapsulation:2})}},children:[{path:``,redirectTo:`categories`,pathMatch:`full`},{path:`categories`,children:[{path:``,component:ae}]},{path:``,loadChildren:()=>import(`./chunk-CRCc3l0a.js`).then(n=>n.routes)},{path:`**`,redirectTo:`categories`}]}];export{p$1 as _,Pt as a,W as c,ee as d,gn as f,g,d as h,Lt as i,Xe as l,yn as m,it as n,Te as o,ie$1 as p,$t$1 as r,In as routes,Ut as s,Z as t,b as u};