import {b as p$1,h}from'./chunk-DqorVf8F.js';import {D,p,dn as Vn,q as pe,O as Lr,b1 as Yp,m as V,N as ce,G as H,v as Zr,w as j9,cq as Zu,dm as an,aF as FI,d as dn,b0 as P9,W as Zt,n as nA,an as FM,r as rA,_ as _c,u as uh,B as Bc,ap as jM,ag as VT,ah as RD,H as Hc,aZ as PD,h as es,b as $c,U as UD,i as ph,j as gh,a6 as x$1,a7 as w$1,F as T$1,l as lt,Y as Ye,o as ot,c as b5,ax as eA,R as RA,aR as mh}from'./main-CKBO76XE.js';var w=new D("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>p(Vn)}),l="Method not implemented",m=class{locale;_localeChanges=new H;localeChanges=this._localeChanges;setTime(n,t,e,i){throw new Error(l)}getHours(n){throw new Error(l)}getMinutes(n){throw new Error(l)}getSeconds(n){throw new Error(l)}parseTime(n,t){throw new Error(l)}addSeconds(n,t){throw new Error(l)}getValidDateOrNull(n){return this.isDateInstance(n)&&this.isValid(n)?n:null}deserialize(n){return n==null||this.isDateInstance(n)&&this.isValid(n)?n:this.invalid()}setLocale(n){this.locale=n,this._localeChanges.next();}compareDate(n,t){return this.getYear(n)-this.getYear(t)||this.getMonth(n)-this.getMonth(t)||this.getDate(n)-this.getDate(t)}compareTime(n,t){return this.getHours(n)-this.getHours(t)||this.getMinutes(n)-this.getMinutes(t)||this.getSeconds(n)-this.getSeconds(t)}sameDate(n,t){if(n&&t){let e=this.isValid(n),i=this.isValid(t);return e&&i?!this.compareDate(n,t):e==i}return n==t}sameTime(n,t){if(n&&t){let e=this.isValid(n),i=this.isValid(t);return e&&i?!this.compareTime(n,t):e==i}return n==t}clampDate(n,t,e){return t&&this.compareDate(n,t)<0?t:e&&this.compareDate(n,e)>0?e:n}};var dt=["text"],ct=[[["mat-icon"]],"*"],mt=["mat-icon","*"];function pt(o,n){if(o&1&&Bc(0,"mat-pseudo-checkbox",1),o&2){let t=eA();RD("disabled",t.disabled)("state",t.selected?"checked":"unchecked");}}function ut(o,n){if(o&1&&Bc(0,"mat-pseudo-checkbox",3),o&2){let t=eA();RD("disabled",t.disabled);}}function ht(o,n){if(o&1&&(_c(0,"span",4),RA(1),uh()),o&2){let t=eA();VT(),mh("(",t.group.label,")");}}var gt=new D("MAT_OPTION_PARENT_COMPONENT"),ft=new D("MatOptgroup");var x=class{source;isUserInput;constructor(n,t=false){this.source=n,this.isUserInput=t;}},rt=(()=>{class o{_element=p(pe);_changeDetectorRef=p(Lr);_parent=p(gt,{optional:true});group=p(ft,{optional:true});_signalDisableRipple=false;_selected=false;_active=false;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=p(Yp).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t);}_disabled=V(false);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return !!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new ce;_text;_stateChanges=new H;constructor(){let t=p(Zr);t.load(j9),t.load(Zu),this._signalDisableRipple=!!this._parent&&an(this._parent.disableRipple);}get active(){return this._active}get viewValue(){return (this._text?.nativeElement.textContent||"").trim()}select(t=true){this._selected||(this._selected=true,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent());}deselect(t=true){this._selected&&(this._selected=false,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent());}focus(t,e){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(e);}setActiveStyles(){this._active||(this._active=true,this._changeDetectorRef.markForCheck());}setInactiveStyles(){this._active&&(this._active=false,this._changeDetectorRef.markForCheck());}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!FI(t)&&(this._selectViaInteraction(),t.preventDefault());}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:true,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(true));}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t);}}ngOnDestroy(){this._stateChanges.complete();}_emitSelectionChangeEvent(t=false){this.onSelectionChange.emit(new x(this,t));}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=dn({type:o,selectors:[["mat-option"]],viewQuery:function(e,i){if(e&1&&UD(dt,7),e&2){let a;ph(a=gh())&&(i._text=a.first);}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(e,i){e&1&&Hc("click",function(){return i._selectViaInteraction()})("keydown",function(r){return i._handleKeydown(r)}),e&2&&(PD("id",i.id),es("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),$c("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled));},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",Zt]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:mt,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(e,i){e&1&&(nA(ct),FM(0,pt,1,2,"mat-pseudo-checkbox",1),rA(1),_c(2,"span",2,0),rA(4,1),uh(),FM(5,ut,1,1,"mat-pseudo-checkbox",3),FM(6,ht,2,1,"span",4),Bc(7,"div",5)),e&2&&(jM(i.multiple?0:-1),VT(5),jM(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),VT(),jM(i.group&&i.group._inert?6:-1),VT(),RD("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple));},dependencies:[p$1,P9],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
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
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return o})();function jt(o,n,t){if(t.length){let e=n.toArray(),i=t.toArray(),a=0;for(let r=0;r<o+1;r++)e[r].group&&e[r].group===i[a]&&a++;return a}return 0}function Ht(o,n,t,e){return o<t?o:o+n>t+e?Math.max(0,o-e+n):t}var Gt=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=lt({type:o});static \u0275inj=Ye({imports:[ot,h,rt,b5]})}return o})();var _t=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,bt=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function T(o,n){let t=Array(o);for(let e=0;e<o;e++)t[e]=n(e);return t}var vt=(()=>{class o extends m{_matDateLocale=p(w,{optional:true});constructor(){super();let t=p(w,{optional:true});t!==void 0&&(this._matDateLocale=t),super.setLocale(this._matDateLocale);}getYear(t){return t.getFullYear()}getMonth(t){return t.getMonth()}getDate(t){return t.getDate()}getDayOfWeek(t){return t.getDay()}getMonthNames(t){let e=new Intl.DateTimeFormat(this.locale,{month:t,timeZone:"utc"});return T(12,i=>this._format(e,new Date(2017,i,1)))}getDateNames(){let t=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return T(31,e=>this._format(t,new Date(2017,0,e+1)))}getDayOfWeekNames(t){let e=new Intl.DateTimeFormat(this.locale,{weekday:t,timeZone:"utc"});return T(7,i=>this._format(e,new Date(2017,0,i+1)))}getYearName(t){let e=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(e,t)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let t=new Intl.Locale(this.locale),e=(t.getWeekInfo?.()||t.weekInfo)?.firstDay??0;return e===7?0:e}return 0}getNumDaysInMonth(t){return this.getDate(this._createDateWithOverflow(this.getYear(t),this.getMonth(t)+1,0))}clone(t){return new Date(t.getTime())}createDate(t,e,i){let a=this._createDateWithOverflow(t,e,i);return a.getMonth()!=e,a}today(){return new Date}parse(t,e){return typeof t=="number"?new Date(t):t?new Date(Date.parse(t)):null}format(t,e){if(!this.isValid(t))throw Error("NativeDateAdapter: Cannot format invalid date.");let i=new Intl.DateTimeFormat(this.locale,x$1(w$1({},e),{timeZone:"utc"}));return this._format(i,t)}addCalendarYears(t,e){return this.addCalendarMonths(t,e*12)}addCalendarMonths(t,e){let i=this._createDateWithOverflow(this.getYear(t),this.getMonth(t)+e,this.getDate(t));return this.getMonth(i)!=((this.getMonth(t)+e)%12+12)%12&&(i=this._createDateWithOverflow(this.getYear(i),this.getMonth(i),0)),i}addCalendarDays(t,e){return this._createDateWithOverflow(this.getYear(t),this.getMonth(t),this.getDate(t)+e)}toIso8601(t){return [t.getUTCFullYear(),this._2digit(t.getUTCMonth()+1),this._2digit(t.getUTCDate())].join("-")}deserialize(t){if(typeof t=="string"){if(!t)return null;if(_t.test(t)){let e=new Date(t);if(this.isValid(e))return e}}return super.deserialize(t)}isDateInstance(t){return t instanceof Date}isValid(t){return !isNaN(t.getTime())}invalid(){return new Date(NaN)}setTime(t,e,i,a){let r=this.clone(t);return r.setHours(e,i,a,0),r}getHours(t){return t.getHours()}getMinutes(t){return t.getMinutes()}getSeconds(t){return t.getSeconds()}parseTime(t,e){if(typeof t!="string")return t instanceof Date?new Date(t.getTime()):null;let i=t.trim();if(i.length===0)return null;let a=this._parseTimeString(i);if(a===null){let r=i.replace(/[^0-9:(AM|PM)]/gi,"").trim();r.length>0&&(a=this._parseTimeString(r));}return a||this.invalid()}addSeconds(t,e){return new Date(t.getTime()+e*1e3)}_createDateWithOverflow(t,e,i){let a=new Date;return a.setFullYear(t,e,i),a.setHours(0,0,0,0),a}_2digit(t){return ("00"+t).slice(-2)}_format(t,e){let i=new Date;return i.setUTCFullYear(e.getFullYear(),e.getMonth(),e.getDate()),i.setUTCHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),t.format(i)}_parseTimeString(t){let e=t.toUpperCase().match(bt);if(e){let i=parseInt(e[1]),a=parseInt(e[2]),r=e[3]==null?void 0:parseInt(e[3]),I=e[4];if(i===12?i=I==="AM"?0:i:I==="PM"&&(i+=12),C(i,0,23)&&C(a,0,59)&&(r==null||C(r,0,59)))return this.setTime(this.today(),i,a,r||0)}return null}static \u0275fac=function(e){return new(e||o)};static \u0275prov=T$1({token:o,factory:o.\u0275fac,autoProvided:false})}return o})();function C(o,n,t){return !isNaN(o)&&o>=n&&o<=t}var se=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=lt({type:o});static \u0275inj=Ye({providers:[{provide:m,useClass:vt}]})}return o})();export{Gt as G,Ht as H,ft as f,gt as g,jt as j,m,rt as r,se as s,vt as v,w};