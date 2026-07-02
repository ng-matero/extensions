import {p as p$3,g as g$1}from'./chunk-BNTy-WbA.js';import {l as lt$3,Y as Ye$1,c as b5,e as uw,d as dn,b as $c,Z as ZI,o as ot$3,Q as Qv,C as CD,n as nA,r as rA,f as cE,E as E9,g as l6,_ as _c,H as Hc,u as uh,B as Bc,h as es,U as UD,i as ph,j as gh,k as Vc,m as V$1,p as p$2,D as D$1,T as Te$1,q as pe,L as L$1,s as qe$1,t as Zp,X as X$1,v as Zr,w as j9,x as jO,y as og,z as oe$1,A as nb,F as T$1,G as H$1,I as u,J as ee$2,M as xr,N as ce$1,O as Lr,P as Gt$1,S as EM,W as Zt,a0 as fn$1,a1 as Ta,a2 as Re$1,a3 as dt$1,a4 as xi,a5 as j$2,a6 as x,a7 as w$1,a8 as Zw,a9 as F$1,aa as Pr,ab as se$1,ac as v,ad as vn,ae as hi,V as Vu,af as HM,ag as VT,ah as RD,ai as VM,aj as l,ak as zp,al as Lp,am as $R,an as FM,ao as WA,ap as jM,aq as ZA,ar as P$1,as as Qe$1,at as WD,au as Yx,K as Kt,$ as $t$1,av as yt$1,aw as wt$2,R as RA,ax as eA,ay as ew,az as zI,aA as XI,aB as B$1,aC as Ee$1,aD as bl,aE as Pt$1,aF as FI,aG as Zi,aH as He$1,aI as dO,aJ as Mr,aK as Ke$1,aL as lo,aM as ur,aN as ZM,aO as BM,aP as sA,aQ as BA,aR as mh,aS as Zg,aT as tE,aU as bm,aV as Cm,aW as JC}from'./main-CKBO76XE.js';var p$1=(()=>{class e{_animationsDisabled=uw();state="unchecked";disabled=false;appearance="full";static \u0275fac=function(n){return new(n||e)};static \u0275cmp=dn({type:e,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(n,o){n&2&&$c("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled);},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(n,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return e})();var h=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=lt$3({type:e});static \u0275inj=Ye$1({imports:[b5]})}return e})();var Z=(()=>{class t{get vertical(){return this._vertical}set vertical(i){this._vertical=E9(i);}_vertical=false;get inset(){return this._inset}set inset(i){this._inset=E9(i);}_inset=false;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=dn({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,n){e&2&&(es("aria-orientation",n.vertical?"vertical":"horizontal"),$c("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset));},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,n){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return t})(),K=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=lt$3({type:t});static \u0275inj=Ye$1({imports:[b5]})}return t})();var Y=["*"],J$1=`.mdc-list {
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
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
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
  height: var(--mat-list-list-item-two-line-container-height, 64px);
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
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
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
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
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
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
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
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
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
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
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
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
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
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,$$1=["unscopedContent"],tt=["text"],it$2=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],et=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var nt=new D$1("ListOption"),at$2=(()=>{class t{_elementRef=p$2(pe);static \u0275fac=function(e){return new(e||t)};static \u0275dir=Te$1({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),ct$2=(()=>{class t{_elementRef=p$2(pe);static \u0275fac=function(e){return new(e||t)};static \u0275dir=Te$1({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),st$2=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275dir=Te$1({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),X=(()=>{class t{_listOption=p$2(nt,{optional:true});_isAlignedAtStart(){return !this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||t)};static \u0275dir=Te$1({type:t,hostVars:4,hostBindings:function(e,n){e&2&&$c("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart());}})}return t})(),ot$2=(()=>{class t extends X{static \u0275fac=(()=>{let i;return function(n){return (i||(i=Qv(t)))(n||t)}})();static \u0275dir=Te$1({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[CD]})}return t})(),mt$2=(()=>{class t extends X{static \u0275fac=(()=>{let i;return function(n){return (i||(i=Qv(t)))(n||t)}})();static \u0275dir=Te$1({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[CD]})}return t})(),lt$2=new D$1("MAT_LIST_CONFIG"),M=(()=>{class t{_isNonInteractive=true;get disableRipple(){return this._disableRipple}set disableRipple(i){this._disableRipple=E9(i);}_disableRipple=false;get disabled(){return this._disabled()}set disabled(i){this._disabled.set(E9(i));}_disabled=V$1(false);_defaultOptions=p$2(lt$2,{optional:true});static \u0275fac=function(e){return new(e||t)};static \u0275dir=Te$1({type:t,hostVars:1,hostBindings:function(e,n){e&2&&es("aria-disabled",n.disabled);},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),rt$2=(()=>{class t{_elementRef=p$2(pe);_ngZone=p$2(L$1);_listBase=p$2(M,{optional:true});_platform=p$2(qe$1);_hostElement;_isButtonElement;_noopAnimations=uw();_avatars;_icons;set lines(i){this._explicitLines=Zp(i,null),this._updateItemLines(false);}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(i){this._disableRipple=E9(i);}_disableRipple=false;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(i){this._disabled.set(E9(i));}_disabled=V$1(false);_subscriptions=new X$1;_rippleRenderer=null;_hasUnscopedTextContent=false;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){p$2(Zr).load(j9);let i=p$2(jO,{optional:true});this.rippleConfig=i||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button");}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(true);}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents();}_hasIconOrAvatar(){return !!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new og(this,this._ngZone,this._hostElement,this._platform,p$2(oe$1)),this._rippleRenderer.setupTriggerEvents(this._hostElement);}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(nb(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(false)));});}_updateItemLines(i){if(!this._lines||!this._titles||!this._unscopedContent)return;i&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",a),n.classList.toggle("mdc-list-item__secondary-text",!a);}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text");}_inferLinesFromContent(){let i=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(i+=1),i}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(i=>i.nodeType!==i.COMMENT_NODE).some(i=>!!(i.textContent&&i.textContent.trim()));}static \u0275fac=function(e){return new(e||t)};static \u0275dir=Te$1({type:t,contentQueries:function(e,n,a){if(e&1&&Vc(a,ot$2,4)(a,mt$2,4),e&2){let s;ph(s=gh())&&(n._avatars=s),ph(s=gh())&&(n._icons=s);}},hostVars:4,hostBindings:function(e,n){e&2&&(es("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),$c("mdc-list-item--disabled",n.disabled));},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var Jt=(()=>{class t extends rt$2{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(i){this._activated=E9(i);}_activated=false;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let i;return function(n){return (i||(i=Qv(t)))(n||t)}})();static \u0275cmp=dn({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,a){if(e&1&&Vc(a,ct$2,5)(a,at$2,5)(a,st$2,5),e&2){let s;ph(s=gh())&&(n._lines=s),ph(s=gh())&&(n._titles=s),ph(s=gh())&&(n._meta=s);}},viewQuery:function(e,n){if(e&1&&UD($$1,5)(tt,5),e&2){let a;ph(a=gh())&&(n._unscopedContent=a.first),ph(a=gh())&&(n._itemText=a.first);}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(es("aria-current",n._getAriaCurrent()),$c("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations));},inputs:{activated:"activated"},exportAs:["matListItem"],features:[CD],ngContentSelectors:et,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&(nA(it$2),rA(0),_c(1,"span",1),rA(2,1),rA(3,2),_c(4,"span",2,0),Hc("cdkObserveContent",function(){return n._updateItemLines(true)}),rA(6,3),uh()(),rA(7,4),rA(8,5),Bc(9,"div",3));},dependencies:[l6],encapsulation:2})}return t})();var $t=(()=>{class t extends M{_isNonInteractive=false;static \u0275fac=(()=>{let i;return function(n){return (i||(i=Qv(t)))(n||t)}})();static \u0275cmp=dn({type:t,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[cE([{provide:M,useExisting:t}]),CD],ngContentSelectors:Y,decls:1,vars:0,template:function(e,n){e&1&&(nA(),rA(0));},styles:[J$1],encapsulation:2})}return t})();var ti=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=lt$3({type:t});static \u0275inj=Ye$1({imports:[ZI,ot$3,h,b5,K]})}return t})();var d=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new H$1;constructor(e=false,t,i=true,n){this._multiple=e,this._emitChanges=i,this.compareWith=n,t&&t.length&&(e?t.forEach(s=>this._markSelected(s)):this._markSelected(t[0]),this._selectedToEmit.length=0);}select(...e){this._verifyValueAssignment(e),e.forEach(i=>this._markSelected(i));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...e){this._verifyValueAssignment(e),e.forEach(i=>this._unmarkSelected(i));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...e){this._verifyValueAssignment(e);let t=this.selected,i=new Set(e.map(s=>this._getConcreteValue(s)));e.forEach(s=>this._markSelected(s)),t.filter(s=>!i.has(this._getConcreteValue(s,i))).forEach(s=>this._unmarkSelected(s));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(e){return this.isSelected(e)?this.deselect(e):this.select(e)}clear(e=true){this._unmarkAll();let t=this._hasQueuedChanges();return e&&this._emitChangeEvent(),t}isSelected(e){return this._selection.has(this._getConcreteValue(e))}isEmpty(){return this._selection.size===0}hasValue(){return !this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e);}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[]);}_markSelected(e){e=this._getConcreteValue(e),this.isSelected(e)||(this._multiple||this._unmarkAll(),this.isSelected(e)||this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e));}_unmarkSelected(e){e=this._getConcreteValue(e),this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e));}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e));}_verifyValueAssignment(e){e.length>1&&this._multiple;}_hasQueuedChanges(){return !!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(e,t){if(this.compareWith){t=t??this._selection;for(let i of t)if(this.compareWith(e,i))return i;return e}else return e}};var p=(()=>{class r{_listeners=[];notify(t,i){for(let n of this._listeners)n(t,i);}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(i=>t!==i);}}ngOnDestroy(){this._listeners=[];}static \u0275fac=function(i){return new(i||r)};static \u0275prov=T$1({token:r,factory:r.\u0275fac})}return r})();var g=class{applyChanges(e,t,i,n,s){e.forEachOperation((c,a,_)=>{let h,l;if(c.previousIndex==null){let m=i(c,a,_);h=t.createEmbeddedView(m.templateRef,m.context,m.index),l=u.INSERTED;}else _==null?(t.remove(a),l=u.REMOVED):(h=t.get(a),t.move(h,_),l=u.MOVED);s&&s({context:h?.context,operation:l,record:c});});}detach(){}};var xe=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i;}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i);}registerOnTouched(t){this.onTouched=t;}registerOnChange(t){this.onChange=t;}setDisabledState(t){this.setProperty("disabled",t);}static \u0275fac=function(i){return new(i||n)(ee$2(xr),ee$2(pe))};static \u0275dir=Te$1({type:n})}return n})(),Re=(()=>{class n extends xe{static \u0275fac=(()=>{let t;return function(r){return (t||(t=Qv(n)))(r||n)}})();static \u0275dir=Te$1({type:n,features:[CD]})}return n})(),re$1=new D$1("");var it$1={provide:re$1,useExisting:Ta(()=>Pe),multi:true};function rt$1(){let n=fn$1()?fn$1().getUserAgent():"";return /android (\d+)/.test(n.toLowerCase())}var st$1=new D$1(""),Pe=(()=>{class n extends xe{_compositionMode;_composing=false;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!rt$1());}writeValue(t){let i=t??"";this.setProperty("value",i);}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t);}_compositionStart(){this._composing=true;}_compositionEnd(t){this._composing=false,this._compositionMode&&this.onChange(t);}static \u0275fac=function(i){return new(i||n)(ee$2(xr),ee$2(pe),ee$2(st$1,8))};static \u0275dir=Te$1({type:n,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&Hc("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)});},standalone:false,features:[cE([it$1]),CD]})}return n})();function se(n){return n==null||oe(n)===0}function oe(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var q=new D$1(""),ae=new D$1(""),ot$1=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ee$1=class ee{static min(e){return at$1(e)}static max(e){return lt$1(e)}static required(e){return ke(e)}static requiredTrue(e){return ut(e)}static email(e){return dt(e)}static minLength(e){return ct$1(e)}static maxLength(e){return ht$1(e)}static pattern(e){return ft$1(e)}static nullValidator(e){return k()}static compose(e){return He(e)}static composeAsync(e){return Le(e)}};function at$1(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return !isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function lt$1(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return !isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function ke(n){return se(n.value)?{required:true}:null}function ut(n){return n.value===true?null:{required:true}}function dt(n){return se(n.value)||ot$1.test(n.value)?null:{email:true}}function ct$1(n){return e=>{let t=e.value?.length??oe(e.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function ht$1(n){return e=>{let t=e.value?.length??oe(e.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function ft$1(n){if(!n)return k;let e,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(se(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function k(n){return null}function Te(n){return n!=null}function je(n){return Pr(n)?se$1(n):n}function Be(n){let e={};return n.forEach(t=>{e=t!=null?w$1(w$1({},e),t):e;}),Object.keys(e).length===0?null:e}function Ge(n,e){return e.map(t=>t(n))}function gt$1(n){return !n.validate}function Ue(n){return n.map(e=>gt$1(e)?e:t=>e.validate(t))}function He(n){if(!n)return null;let e=n.filter(Te);return e.length==0?null:function(t){return Be(Ge(t,e))}}function le(n){return n!=null?He(Ue(n)):null}function Le(n){if(!n)return null;let e=n.filter(Te);return e.length==0?null:function(t){let i=Ge(t,e).map(je);return Zw(i).pipe(F$1(Be))}}function ue(n){return n!=null?Le(Ue(n)):null}function Me(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function We(n){return n._rawValidators}function qe(n){return n._rawAsyncValidators}function te$1(n){return n?Array.isArray(n)?n:[n]:[]}function T(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ee(n,e){let t=te$1(e);return te$1(n).forEach(r=>{T(t,r)||t.push(r);}),t}function Fe(n,e){return te$1(e).filter(t=>!T(n,t))}var j$1=class j{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=le(this._rawValidators);}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ue(this._rawAsyncValidators);}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e);}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[];}reset(e=void 0){this.control?.reset(e);}hasError(e,t){return this.control?this.control.hasError(e,t):false}getError(e,t){return this.control?this.control.getError(e,t):null}},y=class extends j$1{name;get formDirective(){return null}get path(){return null}};var F="VALID",P="INVALID",V="PENDING",w="DISABLED",f=class{},B=class extends f{value;source;constructor(e,t){super(),this.value=e,this.source=t;}},S=class extends f{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t;}},I=class extends f{touched;source;constructor(e,t){super(),this.touched=e,this.source=t;}},D=class extends f{status;source;constructor(e,t){super(),this.status=e,this.source=t;}},G=class extends f{source;constructor(e){super(),this.source=e;}},b=class extends f{source;constructor(e){super(),this.source=e;}};function $e(n){return ($(n)?n.validators:n)||null}function pt$1(n){return Array.isArray(n)?le(n):n||null}function ze(n,e){return ($(e)?e.asyncValidators:n)||null}function mt$1(n){return Array.isArray(n)?ue(n):n||null}function $(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function vt$1(n,e,t){let i=n.controls;if(!(Object.keys(i)).length)throw new v(1e3,"");if(!Ze(i,t))throw new v(1001,"")}function _t$1(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new v(-1002,"")});}var U=class{_pendingDirty=false;_hasOwnPendingAsyncValidator=null;_pendingTouched=false;_onCollectionChange=()=>{};_updateOn;_hasRequired=V$1(false);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t);}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator();}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e;}get parent(){return this._parent}get status(){return j$2(this.statusReactive)}set status(e){j$2(()=>this.statusReactive.set(e));}_status=dt$1(()=>this.statusReactive());statusReactive=V$1(void 0);get valid(){return this.status===F}get invalid(){return this.status===P}get pending(){return this.status===V}get disabled(){return this.status===w}get enabled(){return this.status!==w}errors;get pristine(){return j$2(this.pristineReactive)}set pristine(e){j$2(()=>this.pristineReactive.set(e));}_pristine=dt$1(()=>this.pristineReactive());pristineReactive=V$1(true);get dirty(){return !this.pristine}get touched(){return j$2(this.touchedReactive)}set touched(e){j$2(()=>this.touchedReactive.set(e));}_touched=dt$1(()=>this.touchedReactive());touchedReactive=V$1(false);get untouched(){return !this.touched}_events=new H$1;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e);}setAsyncValidators(e){this._assignAsyncValidators(e);}addValidators(e){this.setValidators(Ee(e,this._rawValidators));}addAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators));}removeValidators(e){this.setValidators(Fe(e,this._rawValidators));}removeAsyncValidators(e){this.setAsyncValidators(Fe(e,this._rawAsyncValidators));}hasValidator(e){return T(this._rawValidators,e)}hasAsyncValidator(e){return T(this._rawAsyncValidators,e)}clearValidators(){this.validator=null;}clearAsyncValidators(){this.asyncValidator=null;}markAsTouched(e={}){let t=this.touched===false;this.touched=true;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(x(w$1({},e),{sourceControl:i})),t&&e.emitEvent!==false&&this._events.next(new I(true,i));}markAllAsDirty(e={}){this.markAsDirty({onlySelf:true,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e));}markAllAsTouched(e={}){this.markAsTouched({onlySelf:true,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e));}markAsUntouched(e={}){let t=this.touched===true;this.touched=false,this._pendingTouched=false;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:true,emitEvent:e.emitEvent,sourceControl:i});}),e.onlySelf||this._parent?._updateTouched(e,i),t&&e.emitEvent!==false&&this._events.next(new I(false,i));}markAsDirty(e={}){let t=this.pristine===true;this.pristine=false;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(x(w$1({},e),{sourceControl:i})),t&&e.emitEvent!==false&&this._events.next(new S(false,i));}markAsPristine(e={}){let t=this.pristine===false;this.pristine=true,this._pendingDirty=false;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:true,emitEvent:e.emitEvent});}),e.onlySelf||this._parent?._updatePristine(e,i),t&&e.emitEvent!==false&&this._events.next(new S(true,i));}markAsPending(e={}){this.status=V;let t=e.sourceControl??this;e.emitEvent!==false&&(this._events.next(new D(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(x(w$1({},e),{sourceControl:t}));}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(r=>{r.disable(x(w$1({},e),{onlySelf:true}));}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==false&&(this._events.next(new B(this.value,i)),this._events.next(new D(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(x(w$1({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(true));}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(i=>{i.enable(x(w$1({},e),{onlySelf:true}));}),this.updateValueAndValidity({onlySelf:true,emitEvent:e.emitEvent}),this._updateAncestors(x(w$1({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(false));}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t));}setParent(e){this._parent=e;}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===V)&&this._runAsyncValidator(i,e.emitEvent);}let t=e.sourceControl??this;e.emitEvent!==false&&(this._events.next(new B(this.value,t)),this._events.next(new D(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(x(w$1({},e),{sourceControl:t}));}_updateTreeValidity(e={emitEvent:true}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:true,emitEvent:e.emitEvent});}_setInitialStatus(){this.status=this._allControlsDisabled()?w:F;}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator={emitEvent:t!==false,shouldHaveEmitted:e!==false};let i=je(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e});});}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??false;return this._hasOwnPendingAsyncValidator=null,e}return  false}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==false,this,t.shouldHaveEmitted);}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i?.errors?i.errors[e]:null}hasError(e,t){return !!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new D(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i);}_initObservables(){this.valueChanges=new ce$1,this.statusChanges=new ce$1;}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(P)?P:F}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,e.onlySelf||this._parent?._updatePristine(e,t),r&&this._events.next(new S(this.pristine,t));}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new I(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t);}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e;}_setUpdateStrategy(e){$(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn);}_parentMarkedDirty(e){return !e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=pt$1(this._rawValidators),this._updateHasRequiredValidator();}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=mt$1(this._rawAsyncValidators);}_updateHasRequiredValidator(){j$2(()=>this._hasRequired.set(this.hasValidator(ee$1.required)));}};function Ze(n,e){return Object.hasOwn(n,e)}function yt(n){return n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"}function Ct$1(n,e,t,i){switch(t){case "name":n.setAttribute(e,t,i);break;case "disabled":case "readonly":case "required":i?n.setAttribute(e,t,""):n.removeAttribute(e,t);break;case "max":case "min":case "minLength":case "maxLength":i!==void 0?n.setAttribute(e,t,i.toString()):n.removeAttribute(e,t);break}}var ne$1=class ne{kind;context;control;message;constructor({kind:e,context:t,control:i}){this.kind=e,this.context=t,this.control=i;}};var Vt=(()=>{class n{_validator=k;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):k,this._onChange?.();}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t;}enabled(t){return t!=null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=Te$1({type:n,features:[Gt$1]})}return n})();var Dt={provide:q,useExisting:Ta(()=>Xe),multi:true};var Xe=(()=>{class n extends Vt{required;inputName="required";normalizeInput=Zt;createValidator=t=>ke;enabled(t){return t}static \u0275fac=(()=>{let t;return function(r){return (t||(t=Qv(n)))(r||n)}})();static \u0275dir=Te$1({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&es("required",r._enabled?"":null);},inputs:{required:"required"},standalone:false,features:[cE([Dt]),CD]})}return n})();var bt$1=new D$1(""),z$1=new D$1("",{factory:()=>de}),de="always";function At(n,e){return [...e.path,n]}function we$1(n,e,t=de){ce(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),Et(n,e),wt$1(n,e),Ft(n,e),Mt$1(n,e);}function Ne(n,e,t=true){let i=()=>{};e?.valueAccessor?.registerOnChange(i),e?.valueAccessor?.registerOnTouched(i),L(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}));}function H(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e);});}function Mt$1(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i);};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t);});}}function ce(n,e){let t=We(n);e.validator!==null?n.setValidators(Me(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=qe(n);e.asyncValidator!==null?n.setAsyncValidators(Me(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();H(e._rawValidators,r),H(e._rawAsyncValidators,r);}function L(n,e){let t=false;if(n!==null){if(e.validator!==null){let r=We(n);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(t=true,n.setValidators(s));}}if(e.asyncValidator!==null){let r=qe(n);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(t=true,n.setAsyncValidators(s));}}}let i=()=>{};return H(e._rawValidators,i),H(e._rawAsyncValidators,i),t}function Et(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=true,n._pendingDirty=true,n.updateOn==="change"&&Ye(n,e);});}function Ft(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=true,n.updateOn==="blur"&&n._pendingChange&&Ye(n,e),n.updateOn!=="submit"&&n.markAsTouched();});}function Ye(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:false}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=false;}function wt$1(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i);};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t);});}function Ke(n,e){ce(n,e);}function Nt(n,e){return L(n,e)}function St(n,e){if(!n.hasOwnProperty("model"))return  false;let t=n.model;return t.isFirstChange()?true:!Object.is(e,t.currentValue)}function It(n){return Object.getPrototypeOf(n.constructor)===Re}function Je(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=false);});}function Ot(n,e){if(!e)return null;let t,i,r;return e.forEach(s=>{s.constructor===Pe?t=s:It(s)?i=s:r=s;}),r||i||t||null}function xt$1(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1);}var Rt={provide:bt$1,useFactory:()=>{let n=p$2(A,{self:true});return {setParseErrors:e=>{n.setParseErrorSource(e);},set onReset(e){n.onReset=e;}}}},A=class extends j$1{_parent=null;name=null;valueAccessor=null;isCustomControlBased=false;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof b&&this.control&&this.userOnReset?.(this.control.value);}),this.subscription?.add(this.resetSubscription));}isNativeFormElement=false;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Ot(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(e,t,i){super(),this.injector=e,this.renderer=t,this.rawValueAccessors=i,this.injector?.get(Re$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe();});}setupCustomControl(){this.subscription?.unsubscribe();let e=this.injector?.get(Lr);if(!this.control||!e)return;let t=e.markForCheck.bind(e);this.subscription=new X$1,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof b&&this.control&&this.userOnReset?.(this.control.value);}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator);}ngControlCreate(e){!e.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=true,e.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:false}),this.control?.markAsDirty(),this.viewToModelUpdate(r);}),e.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched();}),this.customControlBindings={},this.isNativeFormElement=yt(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof Xe));}ngControlUpdate(e,t){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,e.setCustomControlModelInput(i.value)),this.bindControlProperty(e,r,"touched",i.touched),this.bindControlProperty(e,r,"dirty",i.dirty),this.bindControlProperty(e,r,"valid",i.valid),this.bindControlProperty(e,r,"invalid",i.invalid),this.bindControlProperty(e,r,"pending",i.pending),this.bindControlProperty(e,r,"disabled",i.disabled),this.shouldBindRequired&&this.bindControlProperty(e,r,"required",this.isRequired);let s=i.errors;if(r.errors!==s){r.errors=s;let a=this._convertErrors(s);e.setInputOnDirectives("errors",a);}}get isRequired(){return (this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??false}get shouldBindRequired(){return  true}bindControlProperty(e,t,i,r){if(t[i]===r)return;t[i]=r;let s=e.setInputOnDirectives(i,r);this.isNativeFormElement&&!s&&(i==="disabled"||i==="required")&&this.renderer&&Ct$1(this.renderer,e.nativeElement,i,r);}_convertErrors(e){if(e===null)return [];let t=this.control;return Object.entries(e).map(([i,r])=>new ne$1({context:r,kind:i,control:t}))}setParseErrorSource(e){if(e===void 0)return;let t=null,i=dt$1(()=>{let r=e();return r.length===0?null:r.reduce((s,a)=>(s[a.kind]=a,s),{})});this.parseErrorsValidator=(()=>t).bind(this),xi(()=>{t=i(),this.control?.updateValueAndValidity({emitEvent:false});},{injector:this.injector});}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:false}));}},ie=class{_cd;constructor(e){this._cd=e;}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return !!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return !!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return !!this._cd?.control?.invalid}get isPending(){return !!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var fn=(()=>{class n extends ie{constructor(t){super(t);}static \u0275fac=function(i){return new(i||n)(ee$2(A,2))};static \u0275dir=Te$1({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&$c("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending);},standalone:false,features:[CD]})}return n})();var W=class extends U{constructor(e,t,i){super($e(t),ze(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:true,emitEvent:!!this.asyncValidator});}controls;registerControl(e,t){let i=this._find(e);return i||(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange();}removeControl(e,t={}){let i=this._find(e);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange();}setControl(e,t,i={}){let r=this._find(e);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange();}contains(e){return this._find(e)?.enabled===true}setValue(e,t={}){j$2(()=>{_t$1(this,true,e),Object.keys(e).forEach(i=>{vt$1(this,true,i),this.controls[i].setValue(e[i],{onlySelf:true,emitEvent:t.emitEvent});}),this.updateValueAndValidity(t);});}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this._find(i);r&&r.patchValue(e[i],{onlySelf:true,emitEvent:t.emitEvent});}),this.updateValueAndValidity(t));}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,x(w$1({},t),{onlySelf:true}));}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==false&&this._events.next(new b(this));}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(false,(t,i)=>i._syncPendingControls()?true:t);return e&&this.updateValueAndValidity({onlySelf:true}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t);});}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange);});}_updateValue(){this.value=this._reduceValue();}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return  true;return  false}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,s)=>{i=t(i,r,s);}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return  false;return Object.keys(this.controls).length>0||this.disabled}_find(e){return Ze(this.controls,e)?this.controls[e]:null}};var Pt={provide:y,useExisting:Ta(()=>kt$1)},N=Promise.resolve(),kt$1=(()=>{class n extends y{callSetDisabledState;get submitted(){return j$2(this.submittedReactive)}_submitted=dt$1(()=>this.submittedReactive());submittedReactive=V$1(false);_directives=new Set;form;ngSubmit=new ce$1;options;constructor(t,i,r){super(),this.callSetDisabledState=r,this.form=new W({},le(t),ue(i));}ngAfterViewInit(){this._setUpdateStrategy();}get formDirective(){return this}get control(){return this.form}get path(){return []}get controls(){return this.form.controls}addControl(t){N.then(()=>{let i=this._findContainer(t.path);t.control=i.registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:false}),this._directives.add(t);});}getControl(t){return this.form.get(t.path)}removeControl(t){N.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t);});}addFormGroup(t){N.then(()=>{let i=this._findContainer(t.path),r=new W({});Ke(r,t),i.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:false});});}removeFormGroup(t){N.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name);});}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){N.then(()=>{this.form.get(t.path).setValue(i);});}setValue(t){this.control.setValue(t);}onSubmit(t){return this.submittedReactive.set(true),Je(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new G(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm();}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(false);}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn);}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(i){return new(i||n)(ee$2(q,10),ee$2(ae,10),ee$2(z$1,8))};static \u0275dir=Te$1({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&Hc("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()});},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:false,features:[cE([Pt]),CD]})}return n})();function Se(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1);}function Ie(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Qe=class extends U{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=false;constructor(e=null,t,i){super($e(t),ze(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:true,emitEvent:!!this.asyncValidator}),$(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ie(e)?this.defaultValue=e.value:this.defaultValue=e);}setValue(e,t={}){j$2(()=>{this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==false&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==false)),this.updateValueAndValidity(t);});}patchValue(e,t={}){this.setValue(e,t);}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=false,t?.emitEvent!==false&&this._events.next(new b(this));}_updateValue(){}_anyControls(e){return  false}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e);}_unregisterOnChange(e){Se(this._onChange,e);}registerOnDisabledChange(e){this._onDisabledChange.push(e);}_unregisterOnDisabledChange(e){Se(this._onDisabledChange,e);}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:true,emitModelToViewChange:false}),true):false}_applyFormState(e){Ie(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:true,emitEvent:false}):this.enable({onlySelf:true,emitEvent:false})):this.value=this._pendingValue=e;}};var Tt=n=>n instanceof Qe;var jt={provide:A,useExisting:Ta(()=>Bt)},Oe=Promise.resolve(),Bt=(()=>{class n extends A{_changeDetectorRef;callSetDisabledState;control=new Qe;static ngAcceptInputType_isDisabled;_registered=false;viewModel;name="";isDisabled;model;options;update=new ce$1;constructor(t,i,r,s,a,et,tt,nt){super(tt,nt,s),this._changeDetectorRef=a,this.callSetDisabledState=et,this._parent=t,this._setValidators(i),this._setAsyncValidators(r);}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)});}this._setUpControl();}"isDisabled"in t&&this._updateDisabled(t),St(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model);}ngOnDestroy(){this.formDirective?.removeControl(this);}\u0275ngControlCreate(t){super.ngControlCreate(t);}\u0275ngControlUpdate(t){super.ngControlUpdate(t,false);}get shouldBindRequired(){return  false}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t);}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=true;}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn);}_isStandalone(){return !this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,we$1(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:false});}_setupWithForm(t){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,we$1(this.control,this,t));}_checkForErrors(){this._checkName();}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name;}_updateValue(t){Oe.then(()=>{this.control.setValue(t,{emitViewToModelChange:false}),this._changeDetectorRef?.markForCheck();});}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&Zt(i);Oe.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck();});}_getPath(t){return this._parent?At(t,this._parent):[t]}static \u0275fac=function(i){return new(i||n)(ee$2(y,9),ee$2(q,10),ee$2(ae,10),ee$2(re$1,10),ee$2(Lr,8),ee$2(z$1,8),ee$2(oe$1,8),ee$2(xr,8))};static \u0275dir=Te$1({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:false,features:[cE([jt,Rt]),CD,Gt$1,EM(null)]})}return n})();var Gt={provide:re$1,useExisting:Ta(()=>Ut),multi:true},Ut=(()=>{class n extends Re{writeValue(t){let i=t??"";this.setProperty("value",i);}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i));};}static \u0275fac=(()=>{let t;return function(r){return (t||(t=Qv(n)))(r||n)}})();static \u0275dir=Te$1({type:n,selectors:[["input","type","number","formControlName","",3,"ngNoCva",""],["input","type","number","formControl","",3,"ngNoCva",""],["input","type","number","ngModel","",3,"ngNoCva",""]],hostBindings:function(i,r){i&1&&Hc("input",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()});},standalone:false,features:[cE([Gt]),CD]})}return n})();var Ht=(()=>{class n extends y{callSetDisabledState;get submitted(){return j$2(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t);}_submitted=dt$1(()=>this._submittedReactive());_submittedReactive=V$1(false);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i);}ngOnChanges(t){this.onChanges(t);}ngOnDestroy(){this.onDestroy();}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form);}onDestroy(){this.form&&(L(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}));}get formDirective(){return this}get path(){return []}addControl(t){let i=this.form.get(t.path);return t._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:false}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){Ne(t.control||null,t,false),xt$1(this.directives,t);}addFormGroup(t){this._setUpFormContainer(t);}removeFormGroup(t){this._cleanUpFormContainer(t);}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t);}removeFormArray(t){this._cleanUpFormContainer(t);}updateModel(t,i){this.form.get(t.path).setValue(i);}onReset(){this.resetForm();}resetForm(t=void 0,i={}){this.form.reset(t,i),this._submittedReactive.set(false);}onSubmit(t){return this.submitted=true,Je(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new G(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(Ne(i||null,t),Tt(r)&&t._setupWithForm(r,this.callSetDisabledState));}),this.form._updateTreeValidity({emitEvent:false});}_setUpFormContainer(t){let i=this.form.get(t.path);Ke(i,t),i.updateValueAndValidity({emitEvent:false});}_cleanUpFormContainer(t){let i=this.form?.get(t.path);i&&Nt(i,t)&&i.updateValueAndValidity({emitEvent:false});}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{});}_updateValidators(){ce(this.form,this),this._oldForm&&L(this._oldForm,this);}_checkFormPresent(){this.form;}static \u0275fac=function(i){return new(i||n)(ee$2(q,10),ee$2(ae,10),ee$2(z$1,8))};static \u0275dir=Te$1({type:n,features:[CD,Gt$1]})}return n})();var Lt={provide:y,useExisting:Ta(()=>Wt)},Wt=(()=>{class n extends Ht{form=null;ngSubmit=new ce$1;get control(){return this.form}static \u0275fac=(()=>{let t;return function(r){return (t||(t=Qv(n)))(r||n)}})();static \u0275dir=Te$1({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&Hc("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()});},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:false,features:[cE([Lt]),CD]})}return n})();var qt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=lt$3({type:n});static \u0275inj=Ye$1({})}return n})();var pn=(()=>{class n{static withConfig(t){return {ngModule:n,providers:[{provide:z$1,useValue:t.callSetDisabledState??de}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=lt$3({type:n});static \u0275inj=Ye$1({imports:[qt]})}return n})();var ct=r=>[r];function lt(r,o){if(r&1&&(_c(0,"a",3,0),RA(2),uh()),r&2){let e=o.$implicit,t=sA(1);RD("activated",t.isActive)("routerLink",BA(3,ct,"/components/"+e.id)),VT(2),mh(" ",e.name," ");}}var we=[{id:"alert",name:"Alert",summary:"Provide contextual feedback messages for typical user actions."},{id:"button",name:"Button",summary:"Provide a button loading directive for Material."},{id:"checkbox-group",name:"Checkbox Group",summary:"Allows the user to create a set of checkbox with select all."},{id:"colorpicker",name:"Color Picker",summary:"An extra input to select color enhanced by the ngx-color."},{id:"grid",name:"Data Grid",summary:"A powerful data grid for Material table."},{id:"datetimepicker",name:"Datetimepicker",summary:"Allows the user to choose both dates and times."},{id:"dialog",name:"Dialog",summary:"A configurable modal to show alert and confirmation."},{id:"drawer",name:"Drawer",summary:"A large interactive panel that displays dynamic content."},{id:"loader",name:"Loader",summary:"An easier loading component wrap with progress bar and spinner."},{id:"photoviewer",name:"Photoviewer",summary:"A feature-rich image viewer."},{id:"popover",name:"Popover",summary:"A floating panel containing html content."},{id:"progress",name:"Progress",summary:"A linear progress indicator with Bootstrap style."},{id:"select",name:"Select",summary:"A ng-select wrapper to be used in the form field."},{id:"split",name:"Split Pane",summary:"A component for creating multi-view layouts."},{id:"tooltip",name:"Tooltip",summary:"The tooltip support rich content."}],J=class r{constructor(){this.menus=we;}static{this.\u0275fac=function(e){return new(e||r)};}static{this.\u0275cmp=dn({type:r,selectors:[["app-component-nav"]],inputs:{params:"params"},decls:5,vars:0,consts:[["link","routerLinkActive"],[1,"docs-component-viewer-nav"],[1,"docs-component-viewer-nav-content"],["mat-list-item","","routerLinkActive","docs-component-viewer-sidenav-item-selected",3,"activated","routerLink"]],template:function(e,t){e&1&&(_c(0,"div",1)(1,"div",2)(2,"mat-nav-list"),HM(3,lt,3,5,"a",3,BM),uh()()()),e&2&&(VT(3),VM(t.menus));},dependencies:[ti,$t,Jt,Yx,Vu],encapsulation:2});}};var mt=r=>[r];function pt(r,o){if(r&1&&(_c(0,"a",3)(1,"div",4)(2,"div",5),RA(3),uh(),_c(4,"div",6),RA(5),uh()()()),r&2){let e=o.$implicit;RD("routerLink",BA(3,mt,"/components/"+e.id)),VT(3),tE(e.name),VT(2),tE(e.summary);}}var ee=class r{constructor(){this._componentPageTitle=p$2(p$3);this._route=p$2(vn);this.list=we;}ngOnInit(){this.params=hi(this._route.pathFromRoot.map(o=>o.params),Object.assign),this.routeParamSubscription=this.params.subscribe(o=>{this._componentPageTitle.title="components";});}ngOnDestroy(){this.routeParamSubscription&&this.routeParamSubscription.unsubscribe();}static{this.\u0275fac=function(e){return new(e||r)};}static{this.\u0275cmp=dn({type:r,selectors:[["app-component-category-list"]],decls:5,vars:1,consts:[["id","category-summary","focusOnNavigation","",1,"docs-component-category-list-summary"],[3,"innerHTML"],[1,"docs-component-category-list"],[1,"docs-component-category-list-item",3,"routerLink"],[1,"docs-component-category-list-card"],[1,"docs-component-category-list-card-title"],[1,"docs-component-category-list-card-summary"]],template:function(e,t){e&1&&(_c(0,"div",0),Bc(1,"div",1),uh(),_c(2,"div",2),HM(3,pt,6,5,"a",3,BM),uh()),e&2&&(VT(),RD("innerHTML",t._categoryListSummary,JC),VT(2),VM(t.list));},dependencies:[g$1,Vu],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center}.docs-component-category-list-summary[_ngcontent-%COMP%]{padding:40px 40px 0;font-size:16px;line-height:1.5;display:flex;justify-content:center}@media(width<=1255px){.docs-component-category-list-summary[_ngcontent-%COMP%]{max-width:600px}}@media(width<=694px){.docs-component-category-list-summary[_ngcontent-%COMP%]{max-width:280px}}.docs-component-category-list-summary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--mat-sys-primary)}.docs-component-category-list-card-title[_ngcontent-%COMP%], .docs-component-category-list-card-summary[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface-variant)}.docs-component-category-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding:20px 20px 100px;justify-content:center}.docs-component-category-list-item[_ngcontent-%COMP%]{display:inline-block;margin:20px;vertical-align:top;width:280px}.docs-component-category-list-item[_ngcontent-%COMP%]   .docs-component-category-list-card-title[_ngcontent-%COMP%]{align-items:center;display:flex;padding:16px;font-size:20px;font-weight:500}.docs-component-category-list-item[_ngcontent-%COMP%], .docs-component-category-list-item[_ngcontent-%COMP%]:active, .docs-component-category-list-item[_ngcontent-%COMP%]:hover, .docs-component-category-list-item[_ngcontent-%COMP%]:focus{text-decoration:none}.docs-component-category-list-card[_ngcontent-%COMP%]{overflow:hidden;transition:background .3s ease;border:1px solid var(--mat-sys-outline-variant);border-radius:12px}.docs-component-category-list-card[_ngcontent-%COMP%]:hover{background:var(--mat-sys-surface-dim)}.docs-component-category-list-card-image-wrapper[_ngcontent-%COMP%]{height:156px;border-bottom:1px solid var(--mat-sys-outline-variant)}.docs-component-category-list-card-summary[_ngcontent-%COMP%]{padding:0 16px 16px;min-height:2.4em;font-size:16px}.docs-component-category-list-card-image[_ngcontent-%COMP%]{width:100%}"]});}};var te=["*"],ht=["content"],it=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],ot=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function ft(r,o){if(r&1){let e=ZM();_c(0,"div",1),Hc("click",function(){bm(e);let n=eA();return Cm(n._onBackdropClicked())}),uh();}if(r&2){let e=eA();$c("mat-drawer-shown",e._isShowingBackdrop());}}function gt(r,o){r&1&&(_c(0,"mat-drawer-content"),rA(1,2),uh());}function _t(r,o){if(r&1){let e=ZM();_c(0,"div",1),Hc("click",function(){bm(e);let n=eA();return Cm(n._onBackdropClicked())}),uh();}if(r&2){let e=eA();$c("mat-drawer-shown",e._isShowingBackdrop());}}function vt(r,o){r&1&&(_c(0,"mat-sidenav-content"),rA(1,2),uh());}var wt=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
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
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
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
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
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
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
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
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
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
`;var bt=new D$1("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>false}),Ce=new D$1("MAT_DRAWER_CONTAINER"),j=(()=>{class r extends Qe$1{_platform=p$2(qe$1);_changeDetectorRef=p$2(Lr);_element=p$2(pe);_ngZone=p$2(L$1);_isInert=false;_container=p$2(ye);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck());}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(Zg(50),He$1(1)).subscribe(()=>this._updateInert());}):this._updateInert();}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute("inert","true"):t.removeAttribute("inert");}}_shouldBeHidden(){if(this._platform.isBrowser)return  false;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=(()=>{let e;return function(n){return (e||(e=Qv(r)))(n||r)}})();static \u0275cmp=dn({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(WD("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),$c("mat-drawer-content-hidden",n._shouldBeHidden()));},features:[cE([{provide:Qe$1,useExisting:r}]),CD],ngContentSelectors:te,decls:1,vars:0,template:function(t,n){t&1&&(nA(),rA(0));},encapsulation:2})}return r})(),be=(()=>{class r{_elementRef=p$2(pe);_focusTrapFactory=p$2(ew);_focusMonitor=p$2(zI);_platform=p$2(qe$1);_ngZone=p$2(L$1);_renderer=p$2(xr);_interactivityChecker=p$2(XI);_doc=p$2(B$1);_container=p$2(Ce,{optional:true});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=false;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit());}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next();}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=E9(e);}_disableClose=false;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=E9(e)),this._autoFocus=e;}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(E9(e));}_opened=V$1(false);_openedVia=null;_animationStarted=new H$1;_animationEnd=new H$1;openedChange=new ce$1(true);_openedStream=this.openedChange.pipe(Ee$1(e=>e),F$1(()=>{}));openedStart=this._animationStarted.pipe(Ee$1(()=>this.opened),bl(void 0));_closedStream=this.openedChange.pipe(Ee$1(e=>!e),F$1(()=>{}));closedStart=this._animationStarted.pipe(Ee$1(()=>!this.opened),bl(void 0));_destroyed=new H$1;onPositionChanged=new ce$1;_content;_modeChanged=new H$1;_injector=p$2(oe$1);_changeDetectorRef=p$2(Lr);constructor(){this.openedChange.pipe(Pt$1(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program");}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return [e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!FI(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault();});}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened);});}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&(this._interactivityChecker.isFocusable(n)||(n.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let d=()=>{m(),dt(),n.removeAttribute("tabindex");},m=this._renderer.listen(n,"blur",d),dt=this._renderer.listen(n,"mousedown",d);})),n.focus(t));}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case  false:case "dialog":return;case  true:case "first-tabbable":Zi(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus();},{injector:this._injector});break;case "first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null);}_isFocusWithinDrawer(){let e=this._doc.activeElement;return !!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=true,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState());}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete();}open(e){return this.toggle(true,e)}close(){return this.toggle(false)}_closeViaBackdropClick(){return this._setOpen(false,true,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),(this._container?._content||this._container?._userContent)?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(true),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next();}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(d=>{this.openedChange.pipe(He$1(1)).subscribe(m=>d(m?"open":"close"));}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e);}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop());}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor);}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(false),this._animationEnd.next(e);});};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=dn({type:r,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&UD(ht,5),t&2){let d;ph(d=gh())&&(n._content=d.first);}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(es("align",null)("tabIndex",n.mode!=="side"?"-1":null),WD("visibility",!n._container&&!n.opened?"hidden":null),$c("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"));},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:te,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(nA(),_c(0,"div",1,0),rA(2),uh());},dependencies:[Qe$1],encapsulation:2})}return r})(),ye=(()=>{class r{_dir=p$2(dO,{optional:true});_element=p$2(pe);_ngZone=p$2(L$1);_changeDetectorRef=p$2(Lr);_animationDisabled=uw();_transitionsEnabled=false;_allDrawers;_drawers=new Mr;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=E9(e);}_autosize=p$2(bt);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:E9(e);}_backdropOverride=null;backdropClick=new ce$1;_start=null;_end=null;_left=null;_right=null;_destroyed=new H$1;_doCheckSubject=new H$1;_contentMargins={left:null,right:null};_contentMarginChanges=new H$1;get scrollable(){return this._userContent||this._content}_injector=p$2(oe$1);constructor(){let e=p$2(qe$1),t=p$2(Ke$1);this._dir?.change.pipe(Pt$1(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins();}),t.change().pipe(Pt$1(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=true;},200);});}ngAfterContentInit(){this._allDrawers.changes.pipe(lo(this._allDrawers),Pt$1(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges();}),this._drawers.changes.pipe(lo(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e);}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(ur(10),Pt$1(this._destroyed)).subscribe(()=>this.updateContentMargins());});}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete();}open(){this._drawers.forEach(e=>e.open());}close(){this._drawers.forEach(e=>e.close());}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n;}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n;}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)));}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next());}_watchDrawerToggle(e){e._animationStarted.pipe(Pt$1(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();}),e.mode!=="side"&&e.openedChange.pipe(Pt$1(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened));}_watchDrawerPosition(e){e.onPositionChanged.pipe(Pt$1(this._drawers.changes)).subscribe(()=>{Zi({read:()=>this._validateDrawers()},{injector:this._injector});});}_watchDrawerMode(e){e._modeChanged.pipe(Pt$1(nb(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck();});}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n);}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e);}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end);}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop();}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick());}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=dn({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,d){if(t&1&&Vc(d,j,5)(d,be,5),t&2){let m;ph(m=gh())&&(n._content=m.first),ph(m=gh())&&(n._allDrawers=m);}},viewQuery:function(t,n){if(t&1&&UD(j,5),t&2){let d;ph(d=gh())&&(n._userContent=d.first);}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&$c("mat-drawer-container-explicit-backdrop",n._backdropOverride);},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[cE([{provide:Ce,useExisting:r}])],ngContentSelectors:ot,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(nA(it),FM(0,ft,1,2,"div",0),rA(1),rA(2,1),FM(3,gt,2,0,"mat-drawer-content")),t&2&&(jM(n.hasBackdrop?0:-1),VT(3),jM(n._content?-1:3));},dependencies:[j],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
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
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
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
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
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
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
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
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
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
`],encapsulation:2})}return r})(),rt=(()=>{class r extends j{static \u0275fac=(()=>{let e;return function(n){return (e||(e=Qv(r)))(n||r)}})();static \u0275cmp=dn({type:r,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[cE([{provide:Qe$1,useExisting:r},{provide:j,useExisting:r}]),CD],ngContentSelectors:te,decls:1,vars:0,template:function(t,n){t&1&&(nA(),rA(0));},encapsulation:2})}return r})(),z=(()=>{class r extends be{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=E9(e);}_fixedInViewport=false;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Zp(e);}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Zp(e);}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return (e||(e=Qv(r)))(n||r)}})();static \u0275cmp=dn({type:r,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(es("tabIndex",n.mode!=="side"?"-1":null)("align",null),WD("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),$c("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport));},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[cE([{provide:be,useExisting:r}]),CD],ngContentSelectors:te,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(nA(),_c(0,"div",1,0),rA(2),uh());},dependencies:[Qe$1],encapsulation:2})}return r})(),at=(()=>{class r extends ye{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return (e||(e=Qv(r)))(n||r)}})();static \u0275cmp=dn({type:r,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,d){if(t&1&&Vc(d,rt,5)(d,z,5),t&2){let m;ph(m=gh())&&(n._content=m.first),ph(m=gh())&&(n._allDrawers=m);}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&$c("mat-drawer-container-explicit-backdrop",n._backdropOverride);},exportAs:["matSidenavContainer"],features:[cE([{provide:Ce,useExisting:r},{provide:ye,useExisting:r}]),CD],ngContentSelectors:ot,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(nA(it),FM(0,_t,1,2,"div",0),rA(1),rA(2,1),FM(3,vt,2,0,"mat-sidenav-content")),t&2&&(jM(n.hasBackdrop?0:-1),VT(3),jM(n._content?-1:3));},dependencies:[rt],styles:[wt],encapsulation:2})}return r})(),st=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=lt$3({type:r});static \u0275inj=Ye$1({imports:[P$1,b5,P$1]})}return r})();var ne=class r{constructor(){this._componentPageTitle=p$2(p$3);this.toggleSidenav=new ce$1;}getTitle(){return this._componentPageTitle.title}static{this.\u0275fac=function(e){return new(e||r)};}static{this.\u0275cmp=dn({type:r,selectors:[["component-page-header"]],outputs:{toggleSidenav:"toggleSidenav"},decls:5,vars:0,consts:[[1,"docs-component-page-header"],["matButton","",3,"click"]],template:function(e,t){e&1&&(_c(0,"header",0)(1,"button",1),Hc("click",function(){return t.toggleSidenav.emit()}),_c(2,"mat-icon"),RA(3,"menu"),uh(),RA(4," Menu "),uh()());},dependencies:[Kt,$t$1,yt$1,wt$2],styles:[".docs-component-page-header[_ngcontent-%COMP%]{display:none;justify-content:center;align-items:center;min-height:60px;background:var(--mat-sys-primary-container)}@media(max-width:959px){.docs-component-page-header[_ngcontent-%COMP%]{display:flex}}"]});}};function Ct(r,o){if(r&1&&(_c(0,"mat-sidenav",2,0),WA(2,"async"),WA(3,"async"),WA(4,"async"),WA(5,"async"),Bc(6,"app-component-nav",7),uh()),r&2){let e=eA();RD("opened",ZA(2,5,e.isScreenSmall)===false)("mode",ZA(3,7,e.isScreenSmall)?"over":"side")("fixedInViewport",ZA(4,9,e.isScreenSmall))("fixedTopGap",ZA(5,11,e.isExtraScreenSmall)?92:56),VT(6),RD("params",e.params);}}function xt(r,o){if(r&1&&Bc(0,"app-component-nav",7),r&2){let e=eA();RD("params",e.params);}}var kt=720,Mt=959,re=class r{constructor(){this._route=p$2(vn);this._navigationFocusService=p$2(l);this._urlFragment="";this.subscriptions=new X$1;let o=p$2(zp);this.isExtraScreenSmall=o.observe(`(max-width: ${kt}px)`).pipe(F$1(e=>e.matches)),this.isScreenSmall=o.observe(`(max-width: ${Mt}px)`).pipe(F$1(e=>e.matches));}ngOnInit(){this.params=hi(this._route.pathFromRoot.map(o=>o.params),Object.assign),this.subscriptions.add(this._navigationFocusService.navigationEndEvents.pipe(F$1(()=>this.isScreenSmall)).subscribe(o=>{o&&this.sidenav&&this.sidenav.close();})),this._route.fragment.subscribe(o=>{o!=null&&(this._urlFragment=o,setTimeout(()=>{let e=document.getElementById(this._urlFragment);e&&e.scrollIntoView();}));});}ngOnDestroy(){this.subscriptions.unsubscribe();}toggleSidenav(o){return o.toggle()}static{this.\u0275fac=function(e){return new(e||r)};}static{this.\u0275cmp=dn({type:r,selectors:[["app-component-sidenav"]],viewQuery:function(e,t){if(e&1&&UD(z,5),e&2){let n;ph(n=gh())&&(t.sidenav=n.first);}},decls:10,vars:6,consts:[["sidenav",""],[1,"docs-component-viewer-sidenav-container"],["role","navigation",1,"docs-component-viewer-sidenav",3,"opened","mode","fixedInViewport","fixedTopGap"],[1,"docs-component-sidenav-content"],[3,"toggleSidenav"],[1,"docs-component-sidenav-inner-content"],[1,"docs-component-sidenav-body-content"],[3,"params"]],template:function(e,t){e&1&&(_c(0,"mat-sidenav-container",1),FM(1,Ct,7,13,"mat-sidenav",2),WA(2,"async"),_c(3,"div",3)(4,"component-page-header",4),Hc("toggleSidenav",function(){return t.toggleSidenav(t.sidenav)}),uh(),_c(5,"div",5)(6,"main",6),FM(7,xt,1,1,"app-component-nav",7),WA(8,"async"),Bc(9,"router-outlet"),uh()()()()),e&2&&(VT(),jM(ZA(2,2,t.isScreenSmall)?1:-1),VT(6),jM(ZA(8,4,t.isScreenSmall)===false?7:-1));},dependencies:[st,z,at,J,ne,Lp,$R],styles:[`app-component-sidenav{display:flex;flex-direction:column;overflow:auto}.docs-component-viewer-sidenav-container{flex:1;box-sizing:border-box}.docs-component-viewer-sidenav{overflow:auto}.mat-drawer::-webkit-scrollbar{height:4px;width:4px}.docs-component-viewer-nav{position:sticky;top:0}.docs-component-viewer-nav .docs-component-viewer-nav-content{border-right:1px solid var(--mat-sys-outline-variant);width:240px;padding:16px 8px;height:calc(100vh - 56px);overflow:auto;box-sizing:border-box}.docs-component-viewer-nav .docs-component-viewer-nav-content::-webkit-scrollbar{height:4px;width:4px}.docs-component-viewer-nav .docs-component-viewer-nav-content::-webkit-scrollbar-thumb{background:#00000042}.docs-component-viewer-nav .docs-component-viewer-nav-content ul{list-style-type:none;margin:0 0 5px;padding:0;overflow:hidden}.docs-component-viewer-nav .docs-component-viewer-nav-content li{font-size:13px;line-height:16px;margin:0;padding:5px 15px 5px 20px}.docs-component-sidenav-content{display:flex;flex-direction:column;min-height:100%}.docs-component-sidenav-inner-content{display:flex;flex-direction:column;flex:1}.docs-component-sidenav-body-content{display:flex;flex:1 1 auto}div .mat-mdc-list-base{padding-top:0}div.docs-component-viewer-nav-content .mat-nav-list .mat-mdc-list-item .mat-list-item-content{padding-left:25px}@media(max-width:959px){.docs-component-viewer-sidenav-container .docs-component-viewer-sidenav{z-index:4}.docs-component-viewer-nav{position:relative;top:0}.docs-component-viewer-nav .docs-component-viewer-nav-content{width:100%;border:none;margin:0;max-height:initial}}@media(width<=720px){.docs-component-viewer-sidenav-container{flex:1 0 auto}.docs-component-sidenav-body-content{flex-direction:column}}
`],encapsulation:2});}};var Vn=[{path:"",component:re,children:[{path:"",redirectTo:"categories",pathMatch:"full"},{path:"categories",children:[{path:"",component:ee}]},{path:"",loadChildren:()=>import('./chunk-BjDoltMa.js').then(function(n){return n.c}).then(r=>r.routes)},{path:"**",redirectTo:"categories"}]}];var chunkUCN6JRGM=/*#__PURE__*/Object.freeze({__proto__:null,routes:Vn});export{A,Bt as B,K,Pe as P,Ut as U,Wt as W,Xe as X,Z,p as a,p$1 as b,chunkUCN6JRGM as c,d,ee$1 as e,fn as f,g,h,kt$1 as k,pn as p,q,re$1 as r};