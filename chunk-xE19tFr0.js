import{n as s,t as r}from"./chunk-Ch7qlBDL.js";import{An as aZ,Ar as nE,C as DN,Ct as Lr,Di as wh,E as Dh,Fi as ye,Gt as Sh,Hi as zc,Ht as Qe,J as IN,Jn as el,Lr as oZ,Nn as bN,Un as dt$1,V as H,Wr as p,Wt as Sc,Zr as q5,a as $t,ai as rN,bi as un,di as ss,dn as XD,gr as ig,i as $n,mi as t_,mn as YN,mr as iT,nr as gn,o as A,pi as tN,ti as qc,v as Ch,vi as ue,vn as Yr,vr as j,x as D,yn as ZD,z as Gc}from"./chunk-_FgkqbxZ.js";import{h as et}from"./main-X2AELSID.js";import{n as x,t as u}from"./chunk-B26X4vza.js";var O=new D(`MAT_DATE_LOCALE`,{providedIn:`root`,factory:()=>p($n)});var d=`Method not implemented`;var h=class{locale;_localeChanges=new j;localeChanges=this._localeChanges;setTime(n,t,e,i){throw new Error(d)}getHours(n){throw new Error(d)}getMinutes(n){throw new Error(d)}getSeconds(n){throw new Error(d)}parseTime(n,t){throw new Error(d)}addSeconds(n,t){throw new Error(d)}getValidDateOrNull(n){return this.isDateInstance(n)&&this.isValid(n)?n:null}deserialize(n){return n==null||this.isDateInstance(n)&&this.isValid(n)?n:this.invalid()}setLocale(n){this.locale=n,this._localeChanges.next()}compareDate(n,t){return this.getYear(n)-this.getYear(t)||this.getMonth(n)-this.getMonth(t)||this.getDate(n)-this.getDate(t)}compareTime(n,t){return this.getHours(n)-this.getHours(t)||this.getMinutes(n)-this.getMinutes(t)||this.getSeconds(n)-this.getSeconds(t)}sameDate(n,t){if(n&&t){let e=this.isValid(n),i=this.isValid(t);return e&&i?!this.compareDate(n,t):e==i}return n==t}sameTime(n,t){if(n&&t){let e=this.isValid(n),i=this.isValid(t);return e&&i?!this.compareTime(n,t):e==i}return n==t}clampDate(n,t,e){return t&&this.compareDate(n,t)<0?t:e&&this.compareDate(n,e)>0?e:n}};var gt=new D(`MAT_OPTION_PARENT_COMPONENT`);var ft=new D(`MatOptgroup`);var T=class{source;isUserInput;constructor(n,t=!1){this.source=n,this.isUserInput=t}};var dt=(()=>{class o{_element=p(ye);_changeDetectorRef=p(Lr);_parent=p(gt,{optional:!0});group=p(ft,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=p(ig).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=H(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new ue;_text;_stateChanges=new j;constructor(){let t=p(Yr);t.load(aZ),t.load(el),this._signalDisableRipple=!!this._parent&&un(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,e){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(e)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!t_(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new T(this,t))}static ɵfac=function(e){return new(e||o)};static ɵcmp=(function(){let t=[`text`],e=[[[`mat-icon`]],`*`],i=[`mat-icon`,`*`];function r(m,c){if(m&1&&zc(0,`mat-pseudo-checkbox`,1),m&2){let a=DN();ZD(`disabled`,a.disabled)(`state`,a.selected?`checked`:`unchecked`)}}function s(m,c){if(m&1&&zc(0,`mat-pseudo-checkbox`,3),m&2){let a=DN();ZD(`disabled`,a.disabled)}}function g(m,c){if(m&1&&(Sc(0,`span`,4),YN(1),Dh()),m&2){let a=DN();iT(),Sh(`(`,a.group.label,`)`)}}return gn({type:o,selectors:[[`mat-option`]],viewQuery:function(c,a){if(c&1&&nE(t,7),c&2){let f;wh(f=Ch())&&(a._text=f.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(c,a){c&1&&Gc(`click`,function(){return a._selectViaInteraction()})(`keydown`,function(pt){return a._handleKeydown(pt)}),c&2&&(XD(`id`,a.id),ss(`aria-selected`,a.selected)(`aria-disabled`,a.disabled.toString()),qc(`mdc-list-item--selected`,a.selected)(`mat-mdc-option-multiple`,a.multiple)(`mat-mdc-option-active`,a.active)(`mdc-list-item--disabled`,a.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,$t]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:i,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(c,a){c&1&&(IN(e),tN(0,r,1,2,`mat-pseudo-checkbox`,1),bN(1),Sc(2,`span`,2,0),bN(4,1),Dh(),tN(5,s,1,1,`mat-pseudo-checkbox`,3),tN(6,g,2,1,`span`,4),zc(7,`div`,5)),c&2&&(rN(a.multiple?0:-1),iT(5),rN(!a.multiple&&a.selected&&!a.hideSingleSelectionIndicator?5:-1),iT(),rN(a.group&&a.group._inert?6:-1),iT(),ZD(`matRippleTrigger`,a._getHostElement())(`matRippleDisabled`,a.disabled||a.disableRipple))},dependencies:[u,oZ],styles:[`.mat-mdc-option {
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
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
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
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
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
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return o})();function jt(o,n,t){if(t.length){let e=n.toArray(),i=t.toArray(),r=0;for(let s=0;s<o+1;s++)e[s].group&&e[s].group===i[r]&&r++;return r}return 0}function zt(o,n,t,e){return o<t?o:o+n>t+e?Math.max(0,o-e+n):t}var Gt=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=dt$1({type:o});static ɵinj=Qe({imports:[et,x,dt,q5]})}return o})();var bt=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;var vt=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function C(o,n){let t=Array(o);for(let e=0;e<o;e++)t[e]=n(e);return t}var yt=(()=>{class o extends h{_matDateLocale=p(O,{optional:!0});constructor(){super();let t=p(O,{optional:!0});t!==void 0&&(this._matDateLocale=t),super.setLocale(this._matDateLocale)}getYear(t){return t.getFullYear()}getMonth(t){return t.getMonth()}getDate(t){return t.getDate()}getDayOfWeek(t){return t.getDay()}getMonthNames(t){let e=new Intl.DateTimeFormat(this.locale,{month:t,timeZone:`utc`});return C(12,i=>this._format(e,new Date(2017,i,1)))}getDateNames(){let t=new Intl.DateTimeFormat(this.locale,{day:`numeric`,timeZone:`utc`});return C(31,e=>this._format(t,new Date(2017,0,e+1)))}getDayOfWeekNames(t){let e=new Intl.DateTimeFormat(this.locale,{weekday:t,timeZone:`utc`});return C(7,i=>this._format(e,new Date(2017,0,i+1)))}getYearName(t){let e=new Intl.DateTimeFormat(this.locale,{year:`numeric`,timeZone:`utc`});return this._format(e,t)}getFirstDayOfWeek(){if(typeof Intl<`u`&&Intl.Locale){let t=new Intl.Locale(this.locale),e=(t.getWeekInfo?.()||t.weekInfo)?.firstDay??0;return e===7?0:e}return 0}getNumDaysInMonth(t){return this.getDate(this._createDateWithOverflow(this.getYear(t),this.getMonth(t)+1,0))}clone(t){return new Date(t.getTime())}createDate(t,e,i){let r=this._createDateWithOverflow(t,e,i);return r.getMonth(),r}today(){return new Date}parse(t,e){return typeof t==`number`?new Date(t):t?new Date(Date.parse(t)):null}format(t,e){if(!this.isValid(t))throw Error(`NativeDateAdapter: Cannot format invalid date.`);let i=new Intl.DateTimeFormat(this.locale,s(r({},e),{timeZone:`utc`}));return this._format(i,t)}addCalendarYears(t,e){return this.addCalendarMonths(t,e*12)}addCalendarMonths(t,e){let i=this._createDateWithOverflow(this.getYear(t),this.getMonth(t)+e,this.getDate(t));return this.getMonth(i)!=((this.getMonth(t)+e)%12+12)%12&&(i=this._createDateWithOverflow(this.getYear(i),this.getMonth(i),0)),i}addCalendarDays(t,e){return this._createDateWithOverflow(this.getYear(t),this.getMonth(t),this.getDate(t)+e)}toIso8601(t){return[t.getUTCFullYear(),this._2digit(t.getUTCMonth()+1),this._2digit(t.getUTCDate())].join(`-`)}deserialize(t){if(typeof t==`string`){if(!t)return null;if(bt.test(t)){let e=new Date(t);if(this.isValid(e))return e}}return super.deserialize(t)}isDateInstance(t){return t instanceof Date}isValid(t){return!isNaN(t.getTime())}invalid(){return new Date(NaN)}setTime(t,e,i,r){let s=this.clone(t);return s.setHours(e,i,r,0),s}getHours(t){return t.getHours()}getMinutes(t){return t.getMinutes()}getSeconds(t){return t.getSeconds()}parseTime(t,e){if(typeof t!=`string`)return t instanceof Date?new Date(t.getTime()):null;let i=t.trim();if(i.length===0)return null;let r=this._parseTimeString(i);if(r===null){let s=i.replace(/[^0-9:(AM|PM)]/gi,``).trim();s.length>0&&(r=this._parseTimeString(s))}return r||this.invalid()}addSeconds(t,e){return new Date(t.getTime()+e*1e3)}_createDateWithOverflow(t,e,i){let r=new Date;return r.setFullYear(t,e,i),r.setHours(0,0,0,0),r}_2digit(t){return(`00`+t).slice(-2)}_format(t,e){let i=new Date;return i.setUTCFullYear(e.getFullYear(),e.getMonth(),e.getDate()),i.setUTCHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),t.format(i)}_parseTimeString(t){let e=t.toUpperCase().match(vt);if(e){let i=parseInt(e[1]),r=parseInt(e[2]),s=e[3]==null?void 0:parseInt(e[3]),g=e[4];if(i===12?i=g===`AM`?0:i:g===`PM`&&(i+=12),I(i,0,23)&&I(r,0,59)&&(s==null||I(s,0,59)))return this.setTime(this.today(),i,r,s||0)}return null}static ɵfac=function(e){return new(e||o)};static ɵprov=A({token:o,factory:o.ɵfac,autoProvided:!1})}return o})();function I(o,n,t){return!isNaN(o)&&o>=n&&o<=t}var se=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=dt$1({type:o});static ɵinj=Qe({providers:[{provide:h,useClass:yt}]})}return o})();export{gt as a,se as c,ft as i,yt as l,O as n,h as o,dt as r,jt as s,Gt as t,zt as u};