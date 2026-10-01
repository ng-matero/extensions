import{$n as gA,A as Eh,Ai as xa,An as aZ,Ar as nE,At as O$1,B as Ge,Bn as cg,Bt as QO,C as DN,Cr as mA,Ct as Lr$1,D as ES,Di as wh,Dt as Mr$1,E as Dh,Ei as wO,En as _h,Er as m_,Et as Me,F as G,Fi as ye,Fn as bh,Gr as pA,Gt as Sh,H as HD,Hi as zc$1,Ht as Qe,Ii as yi,In as bw,Ir as oN,It as Pm,J as IN,Jn as el$1,Jt as T9,Kn as eR,Ln as cA,Lr as oZ,Mn as bE,Ni as yA,Nn as bN,Nr as o0,Nt as Ol$1,Oi as wr$1,On as aA,Pn as be$1,Pr as oA,Pt as Ot,Q as Ih,Qr as qD,R as GT,S as DE,Si as vE,St as Lo$1,T as Da,U as HO,Un as dt,Ut as Rl$1,V as H,Vn as dA,Vt as Qc$1,W as Hn$1,Wr as p,Wt as Sc$1,Xt as T_,Y as IO,Yr as po,Zn as fi,Zr as q5,_i as uE,_n as Ym,_t as L,a as $t$1,ai as rN,ar as hN,at as JN,b as Cw,bn as Zh,bt as Lm,c as Al$1,ci as sA,cn as Wc$1,ct as Ji,d as BN,di as ss$1,dn as XD,dr as i0,dt as KE,ei as qT,fi as t0,fr as iA,g as CN,gi as uA,gn as Y_,gr as ig,h as CE,hn as YR,ht as Km,in as Ut$1,ir as hA,j as En$1,jr as ne,k as Ee,kn as aN,li as sN,ln as We,lr as hv,mn as YN,mr as iT,mt as Ke,nr as gn,nt as J,o as A,on as Vn$1,or as hn,ot as JR,pi as tN,pn as Xb,pr as iN,pt as K_,q as IE,qr as pW,r as $I,ri as r0,ti as qc$1,tn as U,tr as gi,tt as Iw,u as B,ut as KD,v as Ch,vi as ue,vn as Yr$1,vr as j,wi as vh,wr as mI,wt as M,x as D,xi as vA,xr as jv,yn as ZD,yt as Ll$1,z as Gc$1,zi as zD,zn as c_,zt as QD}from"./chunk-_FgkqbxZ.js";import{a as p$1}from"./chunk-D2xfGzH4.js";import{a as Je,c as Xe$1,i as I,l as et,n as B$1,r as H$1,u}from"./chunk-rXs1VGKJ.js";import{A as ei$1,M as jt,S as Oi$1,a as At,c as R$1,d as Ot$2,g as nt,h as et$1,k as Zo$1,l as ee,m as dt$1,n as wt,o as Nt,p as Vt,s as Ot$1,t as Mt}from"./main-RQT6O5QS.js";import{t as i}from"./chunk-CAlaJWFL.js";import{n as j$1,t as L$1}from"./chunk-DXmmZYq8.js";import{i as te,n as Ue,r as We$1,t as Ke$1}from"./chunk-DDo5PAl_.js";import"./chunk-B26X4vza.js";import{r as dt$2}from"./chunk-B1aekRP4.js";import{a as et$2,l as qn$1,t as Un$1}from"./chunk-DRjT28iy.js";import{n as Nt$1,t as Lt}from"./chunk-CKQWY4j0.js";import{t as g}from"./chunk-DAbSSQN-.js";import{n as ve,t as ce}from"./chunk-CHYB1G4u.js";import"./chunk-BH4-kKjQ.js";import{i as st,n as Wt$1,r as dt$3,t as Vt$1}from"./chunk-98762NDo.js";import{t as r}from"./chunk-B20p9A-R.js";import{l as w,t as $t$2}from"./chunk-DUCjkAZ_.js";import{t as x}from"./chunk-CtXfVEcC.js";import{n as Y,r as ie,t as Ce}from"./chunk-CRY-tAIs.js";import"./chunk-DxgEI1pI.js";import{n as ad$1,t as J_}from"./chunk-DtE6SR7K.js";import{c as W,f as gn$1,g as g$1,h as d,m as yn,p as ie$1,s as Ut$2}from"./chunk-DS3PljT3.js";import"./chunk-BixRy5hS.js";var Ar=new D(`MAT_BADGE_CONFIG`);var uo=`mat-badge-content`;var Fr=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=gn({type:t,selectors:[[`ng-component`]],decls:0,vars:0,template:function(i,a){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--%NS%mat-badge-background-color, var(--%NS%mat-sys-error));
  color: var(--%NS%mat-badge-text-color, var(--%NS%mat-sys-on-error));
  font-family: var(--%NS%mat-badge-text-font, var(--%NS%mat-sys-label-small-font));
  font-weight: var(--%NS%mat-badge-text-weight, var(--%NS%mat-sys-label-small-weight));
  border-radius: var(--%NS%mat-badge-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--%NS%mat-badge-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-error) 38%, transparent));
  color: var(--%NS%mat-badge-disabled-state-text-color, var(--%NS%mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-small-size-container-size, unset);
  height: var(--%NS%mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--%NS%mat-badge-small-size-container-size, 6px);
  min-height: var(--%NS%mat-badge-small-size-container-size, 6px);
  line-height: var(--%NS%mat-badge-small-size-line-height, 6px);
  padding: var(--%NS%mat-badge-small-size-container-padding, 0);
  font-size: var(--%NS%mat-badge-small-size-text-size, 0);
  margin: var(--%NS%mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-container-size, unset);
  height: var(--%NS%mat-badge-legacy-container-size, unset);
  min-width: var(--%NS%mat-badge-container-size, 16px);
  min-height: var(--%NS%mat-badge-container-size, 16px);
  line-height: var(--%NS%mat-badge-line-height, 16px);
  padding: var(--%NS%mat-badge-container-padding, 0 4px);
  font-size: var(--%NS%mat-badge-text-size, var(--%NS%mat-sys-label-small-size));
  margin: var(--%NS%mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-large-size-container-size, unset);
  height: var(--%NS%mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--%NS%mat-badge-large-size-container-size, 16px);
  min-height: var(--%NS%mat-badge-large-size-container-size, 16px);
  line-height: var(--%NS%mat-badge-large-size-line-height, 16px);
  padding: var(--%NS%mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--%NS%mat-badge-large-size-text-size, var(--%NS%mat-sys-label-small-size));
  margin: var(--%NS%mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2})}return t})();var go=(()=>{class t{_ngZone=p(G);_elementRef=p(ye);_ariaDescriber=p(T9);_renderer=p(hn);_animationsDisabled=T_();_idGenerator=p(ig);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color;overlap;disabled=!1;position;get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size;hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=p(m_);_document=p(B);constructor(){let e=p(Ar,{optional:!0}),i=p(Yr$1);i.load(Fr),i.load(el$1),this._color=e?.color||`primary`,this.overlap=e?.overlap??!0,this.position=e?.position||`above after`,this.size=e?.size||`medium`}isAbove(){return this.position.indexOf(`below`)===-1}isAfter(){return this.position.indexOf(`before`)===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement(`span`),i=`mat-badge-active`;return e.setAttribute(`id`,this._idGenerator.getId(`mat-badge-content-`)),e.setAttribute(`aria-hidden`,`true`),e.classList.add(uo),this._animationsDisabled&&e.classList.add(`_mat-animation-noopable`),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame==`function`&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(i)})}):e.classList.add(i),e}_updateRenderedContent(e){let i=`${e??``}`.trim();this._isInitialized&&i&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=i),this._content=i}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement(`span`),this._inlineBadgeDescription.classList.add(`cdk-visually-hidden`)),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let i=this._elementRef.nativeElement.classList;i.remove(`mat-badge-${this._color}`),e&&i.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${uo}`);for(let i of Array.from(e))i!==this._badgeElement&&i.remove()}static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[``,`matBadge`,``]],hostAttrs:[1,`mat-badge`],hostVars:20,hostBindings:function(i,a){i&2&&qc$1(`mat-badge-overlap`,a.overlap)(`mat-badge-above`,a.isAbove())(`mat-badge-below`,!a.isAbove())(`mat-badge-before`,!a.isAfter())(`mat-badge-after`,a.isAfter())(`mat-badge-small`,a.size===`small`)(`mat-badge-medium`,a.size===`medium`)(`mat-badge-large`,a.size===`large`)(`mat-badge-hidden`,a.hidden||!a.content)(`mat-badge-disabled`,a.disabled)},inputs:{color:[0,`matBadgeColor`,`color`],overlap:[2,`matBadgeOverlap`,`overlap`,$t$1],disabled:[2,`matBadgeDisabled`,`disabled`,$t$1],position:[0,`matBadgePosition`,`position`],content:[0,`matBadge`,`content`],description:[0,`matBadgeDescription`,`description`],size:[0,`matBadgeSize`,`size`],hidden:[2,`matBadgeHidden`,`hidden`,$t$1]}})}return t})();var _o=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=dt({type:t});static ɵinj=Qe({imports:[HO,q5]})}return t})();var En=new D(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var fo=new D(`MatChipAvatar`);var yo=new D(`MatChipTrailingIcon`);var vo=new D(`MatChipEdit`);var bo=new D(`MatChipRemove`);var zn=new D(`MatChip`);var xo=(()=>{class t{_elementRef=p(ye);_parentChip=p(zn);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){p(Yr$1).load(aZ),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(i,a){i&2&&(ss$1(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a.disabled),qc$1(`mdc-evolution-chip__action--primary`,a._isPrimary)(`mdc-evolution-chip__action--secondary`,!a._isPrimary)(`mdc-evolution-chip__action--trailing`,!a._isPrimary&&!a._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,$t$1],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?-1:eR(e)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return t})();var Co=(()=>{class t extends xo{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=Me({type:t,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(i,a){i&1&&Gc$1(`click`,function(c){return a._handleClick(c)})(`keydown`,function(c){return a._handleKeydown(c)}),i&2&&(ss$1(`tabindex`,a._getTabindex()),qc$1(`mdc-evolution-chip__action--presentational`,!1))},features:[HD]})}return t})();var ei=(()=>{class t{_changeDetectorRef=p(Lr$1);_elementRef=p(ye);_tagName=p(pW);_ngZone=p(G);_focusMonitor=p(c_);_globalRippleOptions=p(QO,{optional:!0});_document=p(B);_onFocus=new j;_onBlur=new j;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=T_();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=p(ig).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new ue;destroyed=new ue;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=p(nt);_injector=p(ne);constructor(){let e=p(Yr$1);e.load(aZ),e.load(el$1),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Iw(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let a=i._elementRef.nativeElement;return a===e||a.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(i){return new(i||t)};static ɵcmp=(function(){let e=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]],i=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function a(c,l){c&1&&(Sc$1(0,`span`,3),bN(1,1),Dh())}function o(c,l){c&1&&(Sc$1(0,`span`,6),bN(1,2),Dh())}return gn({type:t,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(l,d,x){if(l&1&&Wc$1(x,fo,5)(x,vo,5)(x,yo,5)(x,bo,5)(x,fo,5)(x,yo,5)(x,vo,5)(x,bo,5),l&2){let f;wh(f=Ch())&&(d.leadingIcon=f.first),wh(f=Ch())&&(d.editIcon=f.first),wh(f=Ch())&&(d.trailingIcon=f.first),wh(f=Ch())&&(d.removeIcon=f.first),wh(f=Ch())&&(d._allLeadingIcons=f),wh(f=Ch())&&(d._allTrailingIcons=f),wh(f=Ch())&&(d._allEditIcons=f),wh(f=Ch())&&(d._allRemoveIcons=f)}},viewQuery:function(l,d){if(l&1&&nE(Co,5),l&2){let x;wh(x=Ch())&&(d.primaryAction=x.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(l,d){l&1&&Gc$1(`keydown`,function(f){return d._handleKeydown(f)}),l&2&&(XD(`id`,d.id),ss$1(`role`,d.role)(`aria-label`,d.ariaLabel),BN(`mat-`+(d.color||`primary`)),qc$1(`mdc-evolution-chip`,!d._isBasicChip)(`mdc-evolution-chip--disabled`,d.disabled)(`mdc-evolution-chip--with-trailing-action`,d._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,d.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,d.leadingIcon)(`mdc-evolution-chip--with-avatar`,d.leadingIcon)(`mat-mdc-chip-with-avatar`,d.leadingIcon)(`mat-mdc-chip-highlighted`,d.highlighted)(`mat-mdc-chip-disabled`,d.disabled)(`mat-mdc-basic-chip`,d._isBasicChip)(`mat-mdc-standard-chip`,!d._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,d._hasTrailingIcon())(`_mat-animation-noopable`,d._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,$t$1],highlighted:[2,`highlighted`,`highlighted`,$t$1],disableRipple:[2,`disableRipple`,`disableRipple`,$t$1],disabled:[2,`disabled`,`disabled`,$t$1]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[CE([{provide:zn,useExisting:t}])],ngContentSelectors:i,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(l,d){l&1&&(IN(e),zc$1(0,`span`,0),Sc$1(1,`span`,1)(2,`span`,2),tN(3,a,2,0,`span`,3),Sc$1(4,`span`,4),bN(5),zc$1(6,`span`,5),Dh()()(),tN(7,o,2,0,`span`,6)),l&2&&(iT(3),rN(d.leadingIcon?3:-1),iT(4),rN(d._hasTrailingIcon()?7:-1))},dependencies:[xo],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})})()}return t})();var Pr=(()=>{class t extends ei{_defaultOptions=p(En,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(e){this._selectable=e,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(e){this._setSelectedState(e,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName=`mat-basic-chip-option`;selectionChange=new ue;ngOnInit(){super.ngOnInit(),this.role=`presentation`}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(e=!1){return this._setSelectedState(!this.selected,e,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(e,i,a){e!==this.selected&&(this._selected=e,a&&this.selectionChange.emit({source:this,isUserInput:i,selected:this.selected}),this._changeDetectorRef.markForCheck())}static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵcmp=(function(){let e=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]],i=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function a(c,l){c&1&&(Sc$1(0,`span`,3),bN(1,1),Sc$1(2,`span`,7),Km(),Sc$1(3,`svg`,8),zc$1(4,`path`,9),Dh()()())}function o(c,l){c&1&&(Sc$1(0,`span`,6),bN(1,2),Dh())}return gn({type:t,selectors:[[`mat-basic-chip-option`],[``,`mat-basic-chip-option`,``],[`mat-chip-option`],[``,`mat-chip-option`,``]],hostAttrs:[1,`mat-mdc-chip`,`mat-mdc-chip-option`],hostVars:37,hostBindings:function(l,d){l&2&&(XD(`id`,d.id),ss$1(`tabindex`,null)(`aria-label`,null)(`aria-description`,null)(`role`,d.role),qc$1(`mdc-evolution-chip`,!d._isBasicChip)(`mdc-evolution-chip--filter`,!d._isBasicChip)(`mdc-evolution-chip--selectable`,!d._isBasicChip)(`mat-mdc-chip-selected`,d.selected)(`mat-mdc-chip-multiple`,d._chipListMultiple)(`mat-mdc-chip-disabled`,d.disabled)(`mat-mdc-chip-with-avatar`,d.leadingIcon)(`mdc-evolution-chip--disabled`,d.disabled)(`mdc-evolution-chip--selected`,d.selected)(`mdc-evolution-chip--selecting`,!d._animationsDisabled)(`mdc-evolution-chip--with-trailing-action`,d._hasTrailingIcon())(`mdc-evolution-chip--with-primary-icon`,d.leadingIcon)(`mdc-evolution-chip--with-primary-graphic`,d._hasLeadingGraphic())(`mdc-evolution-chip--with-avatar`,d.leadingIcon)(`mat-mdc-chip-highlighted`,d.highlighted)(`mat-mdc-chip-with-trailing-icon`,d._hasTrailingIcon()))},inputs:{selectable:[2,`selectable`,`selectable`,$t$1],selected:[2,`selected`,`selected`,$t$1]},outputs:{selectionChange:`selectionChange`},features:[CE([{provide:ei,useExisting:t},{provide:zn,useExisting:t}]),HD],ngContentSelectors:i,decls:8,vars:6,consts:[[1,`mat-mdc-chip-focus-overlay`],[`role`,`presentation`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipAction`,``,`role`,`option`,3,`_allowFocusWhenDisabled`],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[`role`,`presentation`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`],[1,`mdc-evolution-chip__checkmark`],[`viewBox`,`-2 -3 30 30`,`focusable`,`false`,`aria-hidden`,`true`,1,`mdc-evolution-chip__checkmark-svg`],[`fill`,`none`,`stroke`,`currentColor`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-evolution-chip__checkmark-path`]],template:function(l,d){l&1&&(IN(e),zc$1(0,`span`,0),Sc$1(1,`span`,1)(2,`button`,2),tN(3,a,5,0,`span`,3),Sc$1(4,`span`,4),bN(5),zc$1(6,`span`,5),Dh()()(),tN(7,o,2,0,`span`,6)),l&2&&(iT(2),ZD(`_allowFocusWhenDisabled`,!0),ss$1(`aria-description`,d.ariaDescription)(`aria-label`,d.ariaLabel)(`aria-selected`,d.ariaSelected),iT(),rN(d._hasLeadingGraphic()?3:-1),iT(4),rN(d._hasTrailingIcon()?7:-1))},dependencies:[Co],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})})()}return t})();var Br=(()=>{class t{_elementRef=p(ye);_changeDetectorRef=p(Lr$1);_dir=p(wO,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new j;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Mr$1;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(po(null),We(()=>Iw(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains(`mat-mdc-chip`))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(po(this._chips)).subscribe(e=>{let i=[];e.forEach(a=>a._getActions().forEach(o=>i.push(o))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new cg(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(Ot(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(Ot(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(po(null),Ot(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Ot(this._destroyed)).subscribe(e=>{let a=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),c=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),l=o||c;this._isValidIndex(a)&&l&&(this._lastDestroyedFocusedChipIndex=a)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(i){return new(i||t)};static ɵcmp=(function(){return gn({type:t,selectors:[[`mat-chip-set`]],contentQueries:function(a,o,c){if(a&1&&Wc$1(c,ei,5),a&2){let l;wh(l=Ch())&&(o._chips=l)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(a,o){a&1&&Gc$1(`keydown`,function(l){return o._handleKeydown(l)}),a&2&&ss$1(`role`,o.role)},inputs:{disabled:[2,`disabled`,`disabled`,$t$1],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,i=>i==null?0:eR(i)]},ngContentSelectors:[`*`],decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(a,o){a&1&&(IN(),Eh(0,`div`,0),bN(1),Ih())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})})()}return t})();var Nn=class{source;value;constructor(n,e){this.source=n,this.value=e}};var Gr={provide:ie$1,useExisting:xa(()=>An),multi:!0};var An=(()=>{class t extends Br{_onTouched=()=>{};_onChange=()=>{};_defaultRole=`listbox`;_defaultOptions=p(En,{optional:!0});get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._syncListboxProperties()}_multiple=!1;get selected(){let e=this._chips.toArray().filter(i=>i.selected);return this.multiple?e:e[0]}ariaOrientation=`horizontal`;get selectable(){return this._selectable}set selectable(e){this._selectable=e,this._syncListboxProperties()}_selectable=!0;compareWith=(e,i)=>e===i;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(e=>e.selectionChange)}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}get value(){return this._value}set value(e){this._chips&&this._chips.length&&this._setSelectionByValue(e,!1),this._value=e}_value;change=new ue;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(po(null),Ot(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(Ot(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(Ot(this._destroyed)).subscribe(e=>{this.multiple||this._chips.forEach(i=>{i!==e.source&&i._setSelectedState(!1,!1,!1)}),e.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let e=this._getFirstSelectedChip();e&&!e.disabled?e.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(e){e!=null?this.value=e:this.value=void 0}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_setSelectionByValue(e,i=!0){this._clearSelection(),Array.isArray(e)?e.forEach(a=>this._selectValue(a,i)):this._selectValue(e,i)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(e){e.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let e=null;Array.isArray(this.selected)?e=this.selected.map(i=>i.value):e=this.selected?this.selected.value:void 0,this._value=e,this.change.emit(new Nn(this,e)),this._onChange(e),this._changeDetectorRef.markForCheck()}_clearSelection(e){this._chips.forEach(i=>{i!==e&&i.deselect()})}_selectValue(e,i){let a=this._chips.find(o=>o.value!=null&&this.compareWith(o.value,e));return a&&(i?a.selectViaInteraction():a.select()),a}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(e=>{e._chipListMultiple=this.multiple,e.chipListSelectable=this._selectable,e._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,e._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(e){return!1}static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵcmp=(function(){return gn({type:t,selectors:[[`mat-chip-listbox`]],contentQueries:function(a,o,c){if(a&1&&Wc$1(c,Pr,5),a&2){let l;wh(l=Ch())&&(o._chips=l)}},hostAttrs:[1,`mdc-evolution-chip-set`,`mat-mdc-chip-listbox`],hostVars:10,hostBindings:function(a,o){a&1&&Gc$1(`focus`,function(){return o.focus()})(`blur`,function(){return o._blur()})(`keydown`,function(l){return o._keydown(l)}),a&2&&(XD(`tabIndex`,o.disabled||o.empty?-1:o.tabIndex),ss$1(`role`,o.role)(`aria-required`,o.role?o.required:null)(`aria-disabled`,o.disabled.toString())(`aria-multiselectable`,o.multiple)(`aria-orientation`,o.ariaOrientation),qc$1(`mat-mdc-chip-list-disabled`,o.disabled)(`mat-mdc-chip-list-required`,o.required))},inputs:{multiple:[2,`multiple`,`multiple`,$t$1],ariaOrientation:[0,`aria-orientation`,`ariaOrientation`],selectable:[2,`selectable`,`selectable`,$t$1],compareWith:`compareWith`,required:[2,`required`,`required`,$t$1],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,$t$1],value:`value`},outputs:{change:`change`},features:[CE([Gr]),HD],ngContentSelectors:[`*`],decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(a,o){a&1&&(IN(),Eh(0,`div`,0),bN(1),Ih())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})})()}return t})();var wo=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=dt({type:t});static ɵinj=Qe({providers:[Un$1,{provide:En,useValue:{separatorKeyCodes:[13]}}],imports:[et$1,q5]})}return t})();var Hr=(()=>{class t{changes=new j;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,i,a)=>{if(a==0||i==0)return`0 of ${a}`;a=Math.max(a,0);let o=e*i,c=o<a?Math.min(o+i,a):o+i;return`${o+1} \u2013 ${c} of ${a}`};static ɵfac=function(i){return new(i||t)};static ɵprov=A({token:t,factory:t.ɵfac})}return t})();var Lr=50;var Vr=new D(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var Si=(()=>{class t{_intl=p(Hr);_changeDetectorRef=p(Lr$1);_formFieldAppearance;_pageSizeLabelId=p(ig).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new fi(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(i=>eR(i,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new ue;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,i=p(Vr,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:a,pageSizeOptions:o,hidePageSize:c,showFirstLastButtons:l}=i;a!=null&&(this._pageSize=a),o!=null&&(this._pageSizeOptions=o),c!=null&&(this.hidePageSize=c),l!=null&&(this.showFirstLastButtons=l)}this._formFieldAppearance=i?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let i=this.pageIndex*this.pageSize,a=this.pageIndex;this.pageIndex=Math.floor(i/e)||0,this.pageSize=e,this._emitPageEvent(a)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Lr),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,i)=>e-i),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let i=this.pageIndex;e!==i&&(this.pageIndex=e,this._emitPageEvent(i))}_buttonClicked(e,i){i||this._navigate(e)}static ɵfac=function(i){return new(i||t)};static ɵcmp=(function(){function e(d,x){if(d&1&&(Sc$1(0,`mat-option`,17),YN(1),Dh()),d&2){let f=x.$implicit;ZD(`value`,f),iT(),Sh(` `,f,` `)}}function i(d,x){if(d&1){let f=hN();Sc$1(0,`mat-form-field`,14)(1,`mat-select`,16,0),Gc$1(`selectionChange`,function(j){Lm(f);let W=DN(2);return Pm(W._changePageSize(j.value))}),sN(3,e,2,2,`mat-option`,17,iN),Dh(),Sc$1(5,`div`,18),Gc$1(`click`,function(){Lm(f);let j=CN(2);return Pm(j.open())}),Dh()()}if(d&2){let f=DN(2);ZD(`appearance`,f._formFieldAppearance)(`color`,f.color),iT(),ZD(`value`,f.pageSize)(`disabled`,f.disabled),qD(`aria-labelledby`,f._pageSizeLabelId),ZD(`panelClass`,f.selectConfig.panelClass||``)(`disableOptionCentering`,f.selectConfig.disableOptionCentering),iT(2),aN(f._displayedPageSizeOptions)}}function a(d,x){if(d&1&&(Sc$1(0,`div`,15),YN(1),Dh()),d&2){let f=DN(2);iT(),vE(f.pageSize)}}function o(d,x){if(d&1&&(Sc$1(0,`div`,3)(1,`div`,13),YN(2),Dh(),tN(3,i,6,7,`mat-form-field`,14),tN(4,a,2,1,`div`,15),Dh()),d&2){let f=DN();iT(),ss$1(`id`,f._pageSizeLabelId),iT(),Sh(` `,f._intl.itemsPerPageLabel,` `),iT(),rN(f._displayedPageSizeOptions.length>1?3:-1),iT(),rN(f._displayedPageSizeOptions.length<=1?4:-1)}}function c(d,x){if(d&1){let f=hN();Sc$1(0,`button`,19),Gc$1(`click`,function(){Lm(f);let j=DN();return Pm(j._buttonClicked(0,j._previousButtonsDisabled()))}),Km(),Sc$1(1,`svg`,8),zc$1(2,`path`,20),Dh()()}if(d&2){let f=DN();ZD(`matTooltip`,f._intl.firstPageLabel)(`matTooltipDisabled`,f._previousButtonsDisabled())(`disabled`,f._previousButtonsDisabled())(`tabindex`,f._previousButtonsDisabled()?-1:null),ss$1(`aria-label`,f._intl.firstPageLabel)}}function l(d,x){if(d&1){let f=hN();Sc$1(0,`button`,21),Gc$1(`click`,function(){Lm(f);let j=DN();return Pm(j._buttonClicked(j.getNumberOfPages()-1,j._nextButtonsDisabled()))}),Km(),Sc$1(1,`svg`,8),zc$1(2,`path`,22),Dh()()}if(d&2){let f=DN();ZD(`matTooltip`,f._intl.lastPageLabel)(`matTooltipDisabled`,f._nextButtonsDisabled())(`disabled`,f._nextButtonsDisabled())(`tabindex`,f._nextButtonsDisabled()?-1:null),ss$1(`aria-label`,f._intl.lastPageLabel)}}return gn({type:t,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,eR],length:[2,`length`,`length`,eR],pageSize:[2,`pageSize`,`pageSize`,eR],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,$t$1],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,$t$1],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,$t$1]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(x,f){x&1&&(Sc$1(0,`div`,1)(1,`div`,2),tN(2,o,5,4,`div`,3),Sc$1(3,`div`,4)(4,`div`,5),YN(5),Dh(),tN(6,c,3,5,`button`,6),Sc$1(7,`button`,7),Gc$1(`click`,function(){return f._buttonClicked(f.pageIndex-1,f._previousButtonsDisabled())}),Km(),Sc$1(8,`svg`,8),zc$1(9,`path`,9),Dh()(),Ym(),Sc$1(10,`button`,10),Gc$1(`click`,function(){return f._buttonClicked(f.pageIndex+1,f._nextButtonsDisabled())}),Km(),Sc$1(11,`svg`,8),zc$1(12,`path`,11),Dh()(),tN(13,l,3,5,`button`,12),Dh()()()),x&2&&(iT(2),rN(f.hidePageSize?-1:2),iT(3),Sh(` `,f._intl.getRangeLabel(f.pageIndex,f.pageSize,f.length),` `),iT(),rN(f.showFirstLastButtons?6:-1),iT(),ZD(`matTooltip`,f._intl.previousPageLabel)(`matTooltipDisabled`,f._previousButtonsDisabled())(`disabled`,f._previousButtonsDisabled())(`tabindex`,f._previousButtonsDisabled()?-1:null),ss$1(`aria-label`,f._intl.previousPageLabel),iT(3),ZD(`matTooltip`,f._intl.nextPageLabel)(`matTooltipDisabled`,f._nextButtonsDisabled())(`disabled`,f._nextButtonsDisabled())(`tabindex`,f._nextButtonsDisabled()?-1:null),ss$1(`aria-label`,f._intl.nextPageLabel),iT(3),rN(f.showFirstLastButtons?13:-1))},dependencies:[et$2,Nt$1,dt$2,dt$1,Oi$1],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})})()}return t})();var So=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=dt({type:t});static ɵinj=Qe({imports:[Vt,Lt,Zo$1,Si]})}return t})();var He=new D(`CDK_TABLE`);var ki=(()=>{class t{template=p(Lo$1);static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[``,`cdkCellDef`,``]]})}return t})();var Di=(()=>{class t{template=p(Lo$1);static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[``,`cdkHeaderCellDef`,``]]})}return t})();var Ti=(()=>{class t{template=p(Lo$1);static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[``,`cdkFooterCellDef`,``]]})}return t})();var Te=(()=>{class t{_table=p(He,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(i,a,o){if(i&1&&Wc$1(o,ki,5)(o,Di,5)(o,Ti,5),i&2){let c;wh(c=Ch())&&(a.cell=c.first),wh(c=Ch())&&(a.headerCell=c.first),wh(c=Ch())&&(a.footerCell=c.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,$t$1],stickyEnd:[2,`stickyEnd`,`stickyEnd`,$t$1]}})}return t})();var ii=class{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}};var To=(()=>{class t extends ii{constructor(){super(p(Te),p(ye))}static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[HD]})}return t})();var Ro=(()=>{class t extends ii{constructor(){let e=p(Te),i=p(ye);super(e,i);let a=e._table?._getCellRole();a&&i.nativeElement.setAttribute(`role`,a)}static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[`cdk-footer-cell`],[`td`,`cdk-footer-cell`,``]],hostAttrs:[1,`cdk-footer-cell`],features:[HD]})}return t})();var No=(()=>{class t extends ii{constructor(){let e=p(Te),i=p(ye);super(e,i);let a=e._table?._getCellRole();a&&i.nativeElement.setAttribute(`role`,a)}static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[HD]})}return t})();var On=(()=>{class t{template=p(Lo$1);_differs=p(KE);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof ni?e.headerCell.template:this instanceof ai?e.footerCell.template:e.cell.template}static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,features:[Ut$1]})}return t})();var ni=(()=>{class t extends On{_table=p(He,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=Me({type:t,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,$t$1]},features:[HD,Ut$1]})}return t})();var ai=(()=>{class t extends On{_table=p(He,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=Me({type:t,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,$t$1]},features:[HD,Ut$1]})}return t})();var Ri=(()=>{class t extends On{_table=p(He,{optional:!0});when;static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=Me({type:t,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[HD]})}return t})();var at=(()=>{class t{_viewContainer=p(Vn$1);cells;context;static mostRecentCellOutlet=null;constructor(){t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[``,`cdkCellOutlet`,``]]})}return t})();var Pn=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=gn({type:t,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(i,a){i&1&&QD(0,0)},dependencies:[at],encapsulation:2,changeDetection:1})}return t})();var Bn=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=gn({type:t,selectors:[[`cdk-footer-row`],[`tr`,`cdk-footer-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-footer-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(i,a){i&1&&QD(0,0)},dependencies:[at],encapsulation:2,changeDetection:1})}return t})();var Gn=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=gn({type:t,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(i,a){i&1&&QD(0,0)},dependencies:[at],encapsulation:2,changeDetection:1})}return t})();var Io=(()=>{class t{templateRef=p(Lo$1);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return t})();var Mo=[`top`,`bottom`,`left`,`right`];var Fn=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(n=>this._updateCachedSizes(n)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(n,e,i=!0,a=!0,o,c,l){this._isNativeHtmlTable=n,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=a,this.direction=o,this._positionListener=c,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(n);let i=[];for(let a of n)a.nodeType===a.ELEMENT_NODE&&i.push(a,...Array.from(a.children));Ji({write:()=>{for(let a of i)this._removeStickyStyle(a,e)}},{injector:this._tableInjector})}updateStickyColumns(n,e,i,a=!0,o=!0){if(!n.length||!this._isBrowser||!(e.some(Se=>Se)||i.some(Se=>Se))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let c=n[0],l=c.children.length,d=this.direction===`rtl`,x=d?`right`:`left`,f=d?`left`:`right`,z=e.lastIndexOf(!0),j=i.indexOf(!0),W,Fe,Xt;o&&this._updateStickyColumnReplayQueue({rows:[...n],stickyStartStates:[...e],stickyEndStates:[...i]}),Ji({earlyRead:()=>{W=this._getCellWidths(c,a),Fe=this._getStickyStartColumnPositions(W,e),Xt=this._getStickyEndColumnPositions(W,i)},write:()=>{for(let Se of n)for(let ue=0;ue<l;ue++){let ia=Se.children[ue];e[ue]&&this._addStickyStyle(ia,x,Fe[ue],ue===z),i[ue]&&this._addStickyStyle(ia,f,Xt[ue],ue===j)}this._positionListener&&W.some(Se=>!!Se)&&(this._positionListener.stickyColumnsUpdated({sizes:z===-1?[]:W.slice(0,z+1).map((Se,ue)=>e[ue]?Se:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:j===-1?[]:W.slice(j).map((Se,ue)=>i[ue+j]?Se:null).reverse()}))}},{injector:this._tableInjector})}stickRows(n,e,i){if(!this._isBrowser)return;let a=i===`bottom`?n.slice().reverse():n,o=i===`bottom`?e.slice().reverse():e,c=[],l=[],d=[];Ji({earlyRead:()=>{for(let x=0,f=0;x<a.length;x++){if(!o[x])continue;c[x]=f;let z=a[x];d[x]=this._isNativeHtmlTable?Array.from(z.children):[z];let j=this._retrieveElementSize(z).height;f+=j,l[x]=j}},write:()=>{let x=o.lastIndexOf(!0);for(let f=0;f<a.length;f++){if(!o[f])continue;let z=c[f],j=f===x;for(let W of d[f])this._addStickyStyle(W,i,z,j)}i===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:c,elements:d}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:c,elements:d})}},{injector:this._tableInjector})}updateStickyFooterContainer(n,e){this._isNativeHtmlTable&&Ji({write:()=>{let i=n.querySelector(`tfoot`);i&&(e.some(a=>!a)?this._removeStickyStyle(i,[`bottom`]):this._addStickyStyle(i,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(n,e){if(!n.classList.contains(this._stickCellCss))return;for(let a of e)n.style[a]=``,n.classList.remove(this._borderCellCss[a]);Mo.some(a=>e.indexOf(a)===-1&&n.style[a])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex=``,this._needsPositionStickyOnElement&&(n.style.position=``),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,i,a){n.classList.add(this._stickCellCss),a&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${i}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(n){let e={top:100,bottom:10,left:1,right:1},i=0;for(let a of Mo)n.style[a]&&(i+=e[a]);return i?`${i}`:``}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],a=n.children;for(let o=0;o<a.length;o++){let c=a[o];i.push(this._retrieveElementSize(c).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(n,e){let i=[],a=0;for(let o=0;o<n.length;o++)e[o]&&(i[o]=a,a+=n[o]);return i}_getStickyEndColumnPositions(n,e){let i=[],a=0;for(let o=n.length;o>0;o--)e[o]&&(i[o]=a,a+=n[o]);return i}_retrieveElementSize(n){let e=this._elemSizeCache.get(n);if(e)return e;let i=n.getBoundingClientRect(),a={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(n,a),this._resizeObserver.observe(n,{box:`border-box`})),a}_updateStickyColumnReplayQueue(n){this._removeFromStickyColumnReplayQueue(n.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(n)}_removeFromStickyColumnReplayQueue(n){let e=new Set(n);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(a=>!e.has(a));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(n){let e=!1;for(let i of n){let a=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};a.width!==this._elemSizeCache.get(i.target)?.width&&jr(i.target)&&(e=!0),this._elemSizeCache.set(i.target,a)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function jr(t){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(n=>t.classList.contains(n))}function ko(t){return Error(`Could not find column with id "${t}".`)}var ti=new D(`STICKY_POSITIONING_LISTENER`);var Hn=(()=>{class t{viewContainer=p(Vn$1);elementRef=p(ye);constructor(){let e=p(He);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[``,`rowOutlet`,``]]})}return t})();var Ln=(()=>{class t{viewContainer=p(Vn$1);elementRef=p(ye);constructor(){let e=p(He);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[``,`headerRowOutlet`,``]]})}return t})();var Vn=(()=>{class t{viewContainer=p(Vn$1);elementRef=p(ye);constructor(){let e=p(He);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[``,`footerRowOutlet`,``]]})}return t})();var jn=(()=>{class t{viewContainer=p(Vn$1);elementRef=p(ye);constructor(){let e=p(He);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(i){return new(i||t)};static ɵdir=Me({type:t,selectors:[[``,`noDataRowOutlet`,``]]})}return t})();var Wt=(()=>{class t{_differs=p(KE);_changeDetectorRef=p(Lr$1);_elementRef=p(ye);_dir=p(wO,{optional:!0});_platform=p(Ke);_viewRepeater;_viewportRuler=p(Xe$1);_injector=p(ne);_virtualScrollViewport=p(Je,{optional:!0,host:!0});_positionListener=p(ti,{optional:!0})||p(ti,{optional:!0,skipSelf:!0});_document=p(B);_data;_renderedRange;_onDestroy=new j;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_rowDefsByView=new WeakMap;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new j;_footerRowStickyUpdates=new j;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new j;_dataStream=new j;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new ue;viewChange=new Ee({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){p(new Qc$1(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((i,a)=>this.trackBy?this.trackBy(a.dataIndex,a.data):a)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Ot(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new I:new g$1,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),H$1(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(a,o,c)=>this._getEmbeddedViewArgs(a.item,c),a=>a.item.data,a=>{if(a.operation===u.INSERTED&&a.context){this._renderCellTemplateForItem(a.record.item.rowDef,a.context);let o=i.get(a.record.currentIndex);this._rowDefsByView.set(o,a.record.item.rowDef)}}),e.forEachIdentityChange(a=>{let o=a.currentIndex,c=i.get(o);if(this._rowDefsByView.get(c)!==a.item.rowDef){i.remove(o);let l=this._renderRow(this._rowOutlet,a.item.rowDef,o,{$implicit:a.item.data});this._rowDefsByView.set(l,a.item.rowDef)}else c.context.$implicit=a.item.data}),this._updateRowIndexContext(),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let a=Do(this._headerRowOutlet,`thead`);a&&(a.style.display=e.length?``:`none`)}let i=this._headerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,i,`top`),this._headerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let a=Do(this._footerRowOutlet,`tfoot`);a&&(a.style.display=e.length?``:`none`)}let i=this._footerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,i,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),a=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...a],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,c)=>{this._addStickyColumnStyles([o],this._headerRowDefs[c])}),this._rowDefs.forEach(o=>{let c=[];for(let l=0;l<i.length;l++)this._renderRows[l].rowDef===o&&c.push(i[l]);this._addStickyColumnStyles(c,o)}),a.forEach((o,c)=>{this._addStickyColumnStyles([o],this._footerRowDefs[c])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),a=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let c=this._data[o],l=this._getRenderRowsForData(c,o,a.get(c));this._cachedRenderRowsMap.has(c)||this._cachedRenderRowsMap.set(c,new WeakMap);for(let d=0;d<l.length;d++){let x=l[d],f=this._cachedRenderRowsMap.get(x.data);f.has(x.rowDef)?f.get(x.rowDef).push(x):f.set(x.rowDef,[x]),e.push(x)}}return e}_getRenderRowsForData(e,i,a){return this._getRowDefs(e,i).map(c=>{let l=a&&a.has(c)?a.get(c):[];if(l.length){let d=l.shift();return d.dataIndex=i,d}else return{data:e,rowDef:c,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Mi(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=Mi(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Mi(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Mi(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(c,l)=>{let d=!!l.getColumnsDiff();return c||d},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let a=this._headerRowDefs.reduce(e,!1);a&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||a||o}_switchDataSource(e){this._data=[],H$1(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;H$1(this.dataSource)?e=this.dataSource.connect(this):Da(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=L(this.dataSource)),this._renderChangeSubscription=gi([e,this.viewChange]).pipe(Ot(this._onDestroy)).subscribe(([i,a])=>{this._data=i||[],this._renderedRange=a,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let a=Array.from(i?.columns||[]).map(l=>{let d=this._columnDefsByName.get(l);if(!d)throw ko(l);return d}),o=a.map(l=>l.sticky),c=a.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,c,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let a=0;a<e.viewContainer.length;a++){let o=e.viewContainer.get(a);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let a=[];if(this.multiTemplateDataRows)a=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(c=>c.when&&c.when(i,e))||this._defaultRowDef;o&&a.push(o)}return a.length,a}_getEmbeddedViewArgs(e,i){let a=e.rowDef,o={$implicit:e.data};return{templateRef:a.template,context:o,index:i}}_renderRow(e,i,a,o={}){let c=e.viewContainer.createEmbeddedView(i.template,o,a);return this._renderCellTemplateForItem(i,o),c}_renderCellTemplateForItem(e,i){for(let a of this._getCellTemplates(e))at.mostRecentCellOutlet&&at.mostRecentCellOutlet._viewContainer.createEmbeddedView(a,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,a=e.length;i<a;i++){let c=e.get(i).context;c.count=a,c.first=i===0,c.last=i===a-1,c.even=i%2===0,c.odd=!c.even,this.multiTemplateDataRows?(c.dataIndex=this._renderRows[i].dataIndex,c.renderIndex=i):c.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let a=this._columnDefsByName.get(i);if(!a)throw ko(i);return e.extractCellTemplate(a)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,a)=>i||a.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,i=this._injector;this._stickyStyler=new Fn(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:L()).pipe(Ot(this._onDestroy)).subscribe(a=>{this._stickyStyler.direction=a,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<`u`?Y_:K_;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(bw(0,i),Ot(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(a,o)=>this._measureRangeSize(a,o)}),gi([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Ot(this._onDestroy)).subscribe(([a,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let c=0;c<o.elements.length;c++){let l=o.elements[c];if(l){let d=o.offsets[c],x=a!==0?Math.max(a-d,d):-d;for(let f of l)f.style.top=`${-x}px`}}}),gi([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Ot(this._onDestroy)).subscribe(([a,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let c=0;c<o.elements.length;c++){let l=o.elements[c];if(l)for(let d of l)d.style.bottom=`${a+o.offsets[c]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let a=this._noDataRowOutlet.viewContainer;if(i){let o=a.createEmbeddedView(e.templateRef),c=o.rootNodes[0];if(o.rootNodes.length===1&&c?.nodeType===this._document.ELEMENT_NODE){c.setAttribute(`role`,`row`),c.classList.add(...e._contentClassNames);let l=c.querySelectorAll(e._cellSelector);for(let d=0;d<l.length;d++)l[d].classList.add(...e._cellClassNames)}}else a.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!==`vertical`)return 0;let a=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<a.start||(e.end,a.end);let c=e.start-a.start,l=e.end-e.start,d,x;for(let j=0;j<l;j++){let W=o.get(j+c);if(W&&W.rootNodes.length){d=x=W.rootNodes[0];break}}for(let j=l-1;j>-1;j--){let W=o.get(j+c);if(W&&W.rootNodes.length){x=W.rootNodes[W.rootNodes.length-1];break}}let f=d?.getBoundingClientRect?.(),z=x?.getBoundingClientRect?.();return f&&z?z.bottom-f.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(i){return new(i||t)};static ɵcmp=(function(){let e=[[[`caption`]],[[`colgroup`],[`col`]],`*`],i=[`caption`,`colgroup, col`,`*`];function a(l,d){l&1&&bN(0,2)}function o(l,d){l&1&&(Sc$1(0,`thead`,0),QD(1,1),Dh(),Sc$1(2,`tbody`,0),QD(3,2)(4,3),Dh(),Sc$1(5,`tfoot`,0),QD(6,4),Dh())}function c(l,d){l&1&&QD(0,1)(1,2)(2,3)(3,4)}return gn({type:t,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(d,x,f){if(d&1&&Wc$1(f,Io,5)(f,Te,5)(f,Ri,5)(f,ni,5)(f,ai,5),d&2){let z;wh(z=Ch())&&(x._noDataRow=z.first),wh(z=Ch())&&(x._contentColumnDefs=z),wh(z=Ch())&&(x._contentRowDefs=z),wh(z=Ch())&&(x._contentHeaderRowDefs=z),wh(z=Ch())&&(x._contentFooterRowDefs=z)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(d,x){d&2&&qc$1(`cdk-table-fixed-layout`,x.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,$t$1],fixedLayout:[2,`fixedLayout`,`fixedLayout`,$t$1],recycleRows:[2,`recycleRows`,`recycleRows`,$t$1]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[CE([{provide:He,useExisting:t},{provide:ti,useValue:null}])],ngContentSelectors:i,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(d,x){d&1&&(IN(e),bN(0),bN(1,1),tN(2,a,1,0),tN(3,o,7,0)(4,c,4,0)),d&2&&(iT(2),rN(x._isServer?2:-1),iT(),rN(x._isNativeHtmlTable?3:4))},dependencies:[Ln,Hn,jn,Vn],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})})()}return t})();function Mi(t,n){return t.concat(Array.from(n))}function Do(t,n){let e=n.toUpperCase(),i=t.viewContainer.element.nativeElement;for(;i;){let a=i.nodeType===1?i.nodeName:null;if(a===e)return i;if(a===`TABLE`)break;i=i.parentNode}return null}var Eo=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=dt({type:t});static ɵinj=Qe({imports:[et]})}return t})();var zo=new D(`MAT_SORT_DEFAULT_OPTIONS`);var Ni=(()=>{class t{_defaultOptions;_initializedStream=new fi(1);sortables=new Map;_stateChanges=new j;active;start=`asc`;get direction(){return this._direction}set direction(e){this._direction=e}_direction=``;disableClear;disabled=!1;sortChange=new ue;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return``;let i=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,a=Wr(e.start||this.start,i),o=a.indexOf(this.direction)+1;return o>=a.length&&(o=0),a[o]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(i){return new(i||t)(J(zo,8))};static ɵdir=Me({type:t,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,$t$1],disabled:[2,`matSortDisabled`,`disabled`,$t$1]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[Ut$1]})}return t})();function Wr(t,n){let e=[`asc`,`desc`];return t==`desc`&&e.reverse(),n||e.push(``),e}var Ao=(()=>{class t{_sort=p(Ni,{optional:!0});_columnDef=p(Te,{optional:!0});_changeDetectorRef=p(Lr$1);_focusMonitor=p(c_);_elementRef=p(ye);_ariaDescriber=p(T9,{optional:!0});_renderChanges;_animationsDisabled=T_();_recentlyCleared=H(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription=`Sort`;disableClear;constructor(){p(Yr$1).load(aZ);let e=p(zo,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=Iw(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),i=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?i:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static ɵfac=function(i){return new(i||t)};static ɵcmp=(function(){let e=[`*`,[[``,`matSortHeaderIcon`,``]]],i=[`*`,`[matSortHeaderIcon]`];function a(c,l){c&1&&(Km(),Eh(0,`svg`,3),KD(1,`path`,4),Ih())}function o(c,l){c&1&&(Eh(0,`div`,2),bN(1,1,null,a,2,0),Ih())}return gn({type:t,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(l,d){l&1&&Gc$1(`click`,function(){return d._toggleOnInteraction()})(`keydown`,function(f){return d._handleKeydown(f)})(`mouseleave`,function(){return d._recentlyCleared.set(null)}),l&2&&(ss$1(`aria-sort`,d._getAriaSortAttribute()),qc$1(`mat-sort-header-disabled`,d._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,$t$1],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,$t$1]},exportAs:[`matSortHeader`],ngContentSelectors:i,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(l,d){l&1&&(IN(e),Eh(0,`div`,0)(1,`div`,1),bN(2),Ih(),tN(3,o,3,0,`div`,2),Ih()),l&2&&(qc$1(`mat-sort-header-sorted`,d._isSorted())(`mat-sort-header-position-before`,d.arrowPosition===`before`)(`mat-sort-header-descending`,d._sort.direction===`desc`)(`mat-sort-header-ascending`,d._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,d._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,d._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,d._animationsDisabled),ss$1(`tabindex`,d._isDisabled()?null:0)(`role`,d._isDisabled()?null:`button`),iT(3),rN(d._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})})()}return t})();var Fo=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=dt({type:t});static ɵinj=Qe({imports:[q5]})}return t})();var Wn=(()=>{class t extends Wt{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵcmp=(function(){let e=[[[`caption`]],[[`colgroup`],[`col`]],`*`],i=[`caption`,`colgroup, col`,`*`];function a(l,d){l&1&&bN(0,2)}function o(l,d){l&1&&(Sc$1(0,`thead`,0),QD(1,1),Dh(),Sc$1(2,`tbody`,2),QD(3,3)(4,4),Dh(),Sc$1(5,`tfoot`,0),QD(6,5),Dh())}function c(l,d){l&1&&QD(0,1)(1,3)(2,4)(3,5)}return gn({type:t,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(d,x){d&2&&qc$1(`mat-table-fixed-layout`,x.fixedLayout)},exportAs:[`matTable`],features:[CE([{provide:Wt,useExisting:t},{provide:He,useExisting:t},{provide:ti,useValue:null}]),HD],ngContentSelectors:i,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(d,x){d&1&&(IN(e),bN(0),bN(1,1),tN(2,a,1,0),tN(3,o,7,0)(4,c,4,0)),d&2&&(iT(2),rN(x._isServer?2:-1),iT(),rN(x._isNativeHtmlTable?3:4))},dependencies:[Ln,Hn,jn,Vn],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})})()}return t})();var Oo=(()=>{class t extends ki{static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=Me({type:t,selectors:[[``,`matCellDef`,``]],features:[CE([{provide:ki,useExisting:t}]),HD]})}return t})();var Po=(()=>{class t extends Di{static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=Me({type:t,selectors:[[``,`matHeaderCellDef`,``]],features:[CE([{provide:Di,useExisting:t}]),HD]})}return t})();var Bo=(()=>{class t extends Ti{static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=Me({type:t,selectors:[[``,`matFooterCellDef`,``]],features:[CE([{provide:Ti,useExisting:t}]),HD]})}return t})();var Go=(()=>{class t extends Te{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=Me({type:t,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[CE([{provide:Te,useExisting:t}]),HD]})}return t})();var Ho=(()=>{class t extends To{static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=Me({type:t,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[HD]})}return t})();var Lo=(()=>{class t extends Ro{static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=Me({type:t,selectors:[[`mat-footer-cell`],[`td`,`mat-footer-cell`,``]],hostAttrs:[1,`mat-mdc-footer-cell`,`mdc-data-table__cell`],features:[HD]})}return t})();var Vo=(()=>{class t extends No{static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=Me({type:t,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[HD]})}return t})();var $n=(()=>{class t extends ni{static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=Me({type:t,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,$t$1]},features:[CE([{provide:ni,useExisting:t}]),HD]})}return t})();var jo=(()=>{class t extends ai{static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=Me({type:t,selectors:[[``,`matFooterRowDef`,``]],inputs:{columns:[0,`matFooterRowDef`,`columns`],sticky:[2,`matFooterRowDefSticky`,`sticky`,$t$1]},features:[CE([{provide:ai,useExisting:t}]),HD]})}return t})();var qn=(()=>{class t extends Ri{static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵdir=Me({type:t,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[CE([{provide:Ri,useExisting:t}]),HD]})}return t})();var Wo=(()=>{class t extends Pn{static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵcmp=gn({type:t,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[CE([{provide:Pn,useExisting:t}]),HD],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(i,a){i&1&&QD(0,0)},dependencies:[at],encapsulation:2,changeDetection:1})}return t})();var Qn=(()=>{class t extends Bn{static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵcmp=gn({type:t,selectors:[[`mat-footer-row`],[`tr`,`mat-footer-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-footer-row`,`mdc-data-table__row`],exportAs:[`matFooterRow`],features:[CE([{provide:Bn,useExisting:t}]),HD],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(i,a){i&1&&QD(0,0)},dependencies:[at],encapsulation:2,changeDetection:1})}return t})();var $o=(()=>{class t extends Gn{static ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})();static ɵcmp=gn({type:t,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[CE([{provide:Gn,useExisting:t}]),HD],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(i,a){i&1&&QD(0,0)},dependencies:[at],encapsulation:2,changeDetection:1})}return t})();var qo=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=dt({type:t});static ɵinj=Qe({imports:[Eo,q5]})}return t})();var $r=9007199254740991;var oi=class extends B$1{_data;_renderData=new Ee([]);_filter=new Ee(``);_internalPageChanges=new j;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(n){n=Array.isArray(n)?n:[],this._data.next(n),this._renderChangesSubscription||this._filterData(n)}get filter(){return this._filter.value}set filter(n){this._filter.next(n),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(n){this._sort=n,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(n){this._paginator=n,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(n,e)=>{let i=n[e];if(Xb(i)){let a=Number(i);return a<$r?a:i}return i};sortData=(n,e)=>{let i=e.active,a=e.direction;return!i||a==``?n:n.sort((o,c)=>{let l=this.sortingDataAccessor(o,i),d=this.sortingDataAccessor(c,i),x=typeof l,f=typeof d;x!==f&&(x===`number`&&(l+=``),f===`number`&&(d+=``));let z=0;return l!=null&&d!=null?l>d?z=1:l<d&&(z=-1):l!=null?z=1:d!=null&&(z=-1),z*(a==`asc`?1:-1)})};filterPredicate=(n,e)=>{let i=e.trim().toLowerCase();return Object.values(n).some(a=>`${a}`.toLowerCase().includes(i))};constructor(n=[]){super(),this._data=new Ee(n),this._updateChangeSubscription()}_updateChangeSubscription(){let n=this._sort?Iw(this._sort.sortChange,this._sort.initialized):L(null),e=this._paginator?Iw(this._paginator.page,this._internalPageChanges,this._paginator.initialized):L(null),i=this._data,a=gi([i,this._filter]).pipe(U(([l])=>this._filterData(l))),o=gi([a,n]).pipe(U(([l])=>this._orderData(l))),c=gi([o,e]).pipe(U(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=c.subscribe(l=>this._renderData.next(l))}_filterData(n){return this.filteredData=this.filter==null||this.filter===``?n:n.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(n){return this.sort?this.sortData(n.slice(),this.sort):n}_pageData(n){if(!this.paginator)return n;let e=this.paginator.pageIndex*this.paginator.pageSize;return n.slice(e,e+this.paginator.pageSize)}_updatePaginator(n){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=n,e.pageIndex>0)){let i=Math.ceil(e.length/e.pageSize)-1||0,a=Math.min(e.pageIndex,i);a!==e.pageIndex&&(e.pageIndex=a,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var Ii=`.cdk-header-cell, .mat-header-cell`;var ri=`.cdk-header-row, .mat-header-row`;var Qo=`.mat-column-resize-overlay-thumb`;function ot(t,n){if(!(t instanceof Node))return null;let e=t;for(;e!=null&&!(e instanceof Element);)e=e.parentNode;return e?.closest(n)??null}var Uo=`cdk-column-resize-hover-or-active`;var qr=`cdk-column-resize-with-resized-column`;var Qr=new D(`CdkColumnResizeOptions`);var be=class t{constructor(){this._renderer=p(hn);this.destroyed=new j;this.selectorId=p(ig).getId(`cdk-column-resize-`);this._flushPending=!1;this.liveResizeUpdates=p(Qr,{optional:!0})?.liveResizeUpdates??!0}ngAfterViewInit(){this.elementRef.nativeElement.classList.add(this.getUniqueCssClass()),this._listenForRowHoverEvents(),this._listenForResizeActivity(),this._listenForHoverActivity()}ngOnDestroy(){this._eventCleanups?.forEach(n=>n()),this.destroyed.next(),this.destroyed.complete()}getUniqueCssClass(){return this.selectorId}getTableId(){return String(this.elementRef.nativeElement.id)}setResized(){this.elementRef.nativeElement.classList.add(qr)}_listenForRowHoverEvents(){this.ngZone.runOutsideAngular(()=>{let n=this.elementRef.nativeElement;this._eventCleanups=[this._renderer.listen(n,`mouseover`,e=>{this.eventDispatcher.headerCellHovered.next(ot(e.target,Ii))}),this._renderer.listen(n,`mouseleave`,e=>{e.relatedTarget&&!e.relatedTarget.matches(Qo)&&this.eventDispatcher.headerCellHovered.next(null)})]})}_listenForResizeActivity(){Iw(this.eventDispatcher.overlayHandleActiveForCell.pipe(Rl$1(void 0)),this.notifier.triggerResize.pipe(Rl$1(void 0)),this.notifier.resizeCompleted.pipe(Rl$1(void 0))).pipe(Ge(1),Ot(this.destroyed)).subscribe(()=>{this.setResized()})}_listenForHoverActivity(){this.eventDispatcher.headerRowHoveredOrActiveDistinct.pipe(po(null),Cw(),Ot(this.destroyed)).subscribe(([n,e])=>{e&&e.classList.add(Uo),n&&n.classList.remove(Uo)})}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵdir=Me({type:t,inputs:{liveResizeUpdates:`liveResizeUpdates`}})}};var Le=class t{constructor(){this.resizeCanceled=new j;this.resizeCompleted=new j;this.triggerResize=new j}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵprov=O$1({token:t,factory:t.ɵfac})}};var $t=class t{constructor(){this._source=p(Le);this.resizeCompleted=this._source.resizeCompleted}resize(n,e){this._source.triggerResize.next({columnId:n,size:e,completeImmediately:!0,isStickyColumn:!0})}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵprov=O$1({token:t,factory:t.ɵfac})}};var Xe=class t{constructor(){this._ngZone=p(G);this.headerCellHovered=new j;this.overlayHandleActiveForCell=new j;this.headerCellHoveredDistinct=this.headerCellHovered.pipe(Ol$1(),Ll$1());this.headerRowHoveredOrActiveDistinct=gi([this.headerCellHoveredDistinct.pipe(U(n=>ot(n,ri)),po(null),Ol$1()),this.overlayHandleActiveForCell.pipe(U(n=>ot(n,ri)),po(null),Ol$1())]).pipe(yi(1),U(([n,e])=>e||n),Ol$1(),Ll$1());this._headerRowHoveredOrActiveDistinctReenterZone=this.headerRowHoveredOrActiveDistinct.pipe(this._enterZone(),Ll$1());this._lastSeenRow=null;this._lastSeenRowHover=null}resizeOverlayVisibleForHeaderRow(n){return n!==this._lastSeenRow&&(this._lastSeenRow=n,this._lastSeenRowHover=this._headerRowHoveredOrActiveDistinctReenterZone.pipe(U(e=>e===n),Ol$1(),Ll$1())),this._lastSeenRowHover}_enterZone(){return n=>new M(e=>n.subscribe({next:i=>this._ngZone.run(()=>e.next(i)),error:i=>e.error(i),complete:()=>e.complete()}))}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵprov=O$1({token:t,factory:t.ɵfac})}};var Ei=class{constructor(){this.tasks=[];this.endTasks=[]}};var rt=new D(`_COALESCED_STYLE_SCHEDULER`);var zi=class t{constructor(){this._currentSchedule=null;this._ngZone=p(G)}schedule(n){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(n)}scheduleEnd(n){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(n)}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new Ei,this._ngZone.runOutsideAngular(()=>queueMicrotask(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){let n=this._currentSchedule;this._currentSchedule=new Ei;for(let e of n.tasks)e();for(let e of n.endTasks)e()}this._currentSchedule=null})))}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵprov=O$1({token:t,factory:t.ɵfac})}};var ct=class t{constructor(){this._pendingResizeDelta=null}updateTableWidthAndStickyColumns(n){if(this._pendingResizeDelta===null){let e=this.columnResize.elementRef.nativeElement,i=this.getElementWidth(e);this.styleScheduler.schedule(()=>{e.style.width=IO(i+this._pendingResizeDelta),this._pendingResizeDelta=null}),this.styleScheduler.scheduleEnd(()=>{this.table.updateStickyColumnStyles()})}this._pendingResizeDelta=(this._pendingResizeDelta??0)+n}getElementWidth(n){return Ur(n.style.width)||n.offsetWidth}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵprov=O$1({token:t,factory:t.ɵfac})}};var Un=class t extends ct{constructor(){super(...arguments);this.columnResize=p(be);this.styleScheduler=p(rt);this.table=p(Wt)}applyColumnSize(e,i,a,o){let c=a-(o??this.getElementWidth(i));c!==0&&(this.styleScheduler.schedule(()=>{i.style.width=IO(a)}),this.updateTableWidthAndStickyColumns(c))}applyMinColumnSize(e,i,a){let o=this.getElementWidth(i),c=Math.max(o,a);this.applyColumnSize(e,i,c,o)}applyMaxColumnSize(e,i,a){let o=this.getElementWidth(i),c=Math.min(o,a);this.applyColumnSize(e,i,c,o)}static{this.ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})()}static{this.ɵprov=O$1({token:t,factory:t.ɵfac})}};var Ai=class t extends ct{constructor(){super(...arguments);this.columnResize=p(be);this.styleScheduler=p(rt);this.table=p(Wt);this._nonce=p(wr$1,{optional:!0});this._document=p(B);this._columnIndexes=new Map;this._columnProperties=new Map;this._indexSequence=0;this.defaultMinSize=0;this.defaultMaxSize=Number.MAX_SAFE_INTEGER}applyColumnSize(e,i,a,o){let c=a-(o??(this._getAppliedWidth(e)||i.offsetWidth));if(c===0)return;let l=IO(a);this._applyProperty(e,`flex`,`0 0.01 ${l}`),this.updateTableWidthAndStickyColumns(c)}applyMinColumnSize(e,i,a){let o=IO(a);this._applyProperty(e,`min-width`,o,a!==this.defaultMinSize),this.updateTableWidthAndStickyColumns(0)}applyMaxColumnSize(e,i,a){let o=IO(a);this._applyProperty(e,`max-width`,o,a!==this.defaultMaxSize),this.updateTableWidthAndStickyColumns(0)}getColumnCssClass(e){return`cdk-column-${e}`}ngOnDestroy(){this._styleElement?.remove(),this._styleElement=void 0}_getPropertyValue(e,i){return this._getColumnPropertiesMap(e).get(i)}_getAppliedWidth(e){return Kr(this._getPropertyValue(e,`flex`))}_applyProperty(e,i,a,o=!0){let c=this._getColumnPropertiesMap(e);this.styleScheduler.schedule(()=>{o?c.set(i,a):c.delete(i),this._applySizeCss(e)})}_getStyleSheet(){return this._styleElement||(this._styleElement=this._document.createElement(`style`),this._nonce&&this._styleElement.setAttribute(`nonce`,this._nonce),this._styleElement.appendChild(this._document.createTextNode(``)),this._document.head.appendChild(this._styleElement)),this._styleElement.sheet}_getColumnPropertiesMap(e){let i=this._columnProperties.get(e);return i===void 0&&(i=new Map,this._columnProperties.set(e,i)),i}_applySizeCss(e){let i=this._getColumnPropertiesMap(e),a=Array.from(i.keys()),o=this._columnIndexes.get(e);if(o===void 0){if(!a.length)return;o=this._indexSequence++,this._columnIndexes.set(e,o)}else this._getStyleSheet().deleteRule(o);let c=this.getColumnCssClass(e),d=`.${this.columnResize.getUniqueCssClass()} .${c}`,x=a.map(f=>`${f}:${i.get(f)}`).join(`;`);this._getStyleSheet().insertRule(`${d} {${x}}`,o)}static{this.ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})()}static{this.ɵprov=O$1({token:t,factory:t.ɵfac})}};function Ur(t){return Number(t.match(/(\d+)px/)?.[1])}function Kr(t){return Number(t?.match(/0 0\.01 (\d+)px/)?.[1])}var Kn={provide:ct,useClass:Un};var kt=class{constructor(n,e,i,a,o=!0){this.origin=n;this.overlayRef=e;this.minWidthPx=i;this.maxWidthPx=a;this.liveUpdates=o}};var Ko=`cdk-resizable-overlay-thumb-active`;var Fi=class t{constructor(){this.isResizable=!0;this.minWidthPxInternal=0;this.maxWidthPxInternal=Number.MAX_SAFE_INTEGER;this.destroyed=new j;this._viewInitialized=!1;this._isDestroyed=!1}get minWidthPx(){return this.minWidthPxInternal}set minWidthPx(n){n&&(this.minWidthPxInternal=n),this.columnResize.setResized(),this.elementRef.nativeElement&&this._viewInitialized&&this._applyMinWidthPx()}get maxWidthPx(){return this.maxWidthPxInternal}set maxWidthPx(n){n&&(this.maxWidthPxInternal=n),this.columnResize.setResized(),this.elementRef.nativeElement&&this._viewInitialized&&this._applyMaxWidthPx()}ngAfterViewInit(){this.isResizable&&(this._listenForRowHoverEvents(),this._listenForResizeEvents(),this._appendInlineHandle(),this.styleScheduler.scheduleEnd(()=>{this._isDestroyed||(this._viewInitialized=!0,this._applyMinWidthPx(),this._applyMaxWidthPx())}))}ngOnDestroy(){this._isDestroyed=!0,this.destroyed.next(),this.destroyed.complete(),this.inlineHandle?.remove(),this.overlayRef?.dispose()}_createOverlayForHandle(){let n=this.directionality.value===`rtl`,e=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withFlexibleDimensions(!1).withGrowAfterOpen(!1).withPush(!1).withDefaultOffsetX(n?1:0).withPositions([{originX:n?`start`:`end`,originY:`top`,overlayX:`center`,overlayY:`top`}]);return this.overlay.create({direction:`ltr`,disposeOnNavigation:!0,positionStrategy:e,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:`16px`})}_listenForRowHoverEvents(){let n=this.elementRef.nativeElement,e=Ot(this.destroyed);this.eventDispatcher.resizeOverlayVisibleForHeaderRow(ot(n,ri)).pipe(e).subscribe(i=>{i?(this.overlayRef||(this.overlayRef=this._createOverlayForHandle()),this._showHandleOverlay()):this.overlayRef&&this.overlayRef.detach()})}_listenForResizeEvents(){let n=Ot(this.destroyed);Iw(this.resizeNotifier.resizeCanceled,this.resizeNotifier.triggerResize).pipe(n,be$1(e=>e.columnId===this.columnDef.name)).subscribe(({size:e,previousSize:i,completeImmediately:a})=>{this.elementRef.nativeElement.classList.add(Ko),this._applySize(e,i),a&&this._completeResizeOperation()}),Iw(this.resizeNotifier.resizeCanceled,this.resizeNotifier.resizeCompleted).pipe(n).subscribe(e=>{this._cleanUpAfterResize(e)})}_completeResizeOperation(){this.ngZone.run(()=>{this.resizeNotifier.resizeCompleted.next({columnId:this.columnDef.name,size:this.elementRef.nativeElement.offsetWidth})})}_cleanUpAfterResize(n){this.elementRef.nativeElement.classList.remove(Ko),this.overlayRef&&this.overlayRef.hasAttached()&&(this._updateOverlayHandleHeight(),this.overlayRef.updatePosition(),n.columnId===this.columnDef.name&&this.inlineHandle.focus())}_createHandlePortal(){let n=ne.create({parent:this.injector,providers:[{provide:kt,useValue:new kt(this.elementRef,this.overlayRef,this.minWidthPx,this.maxWidthPx)}]});return new p$1(this.getOverlayHandleComponentType(),this.viewContainerRef,n)}_showHandleOverlay(){this._updateOverlayHandleHeight(),this.overlayRef.attach(this._createHandlePortal()),this.changeDetectorRef.markForCheck()}_updateOverlayHandleHeight(){this.overlayRef.updateSize({height:this.elementRef.nativeElement.offsetHeight})}_applySize(n,e){let i=Math.min(Math.max(n,this.minWidthPx,0),this.maxWidthPx);this.resizeStrategy.applyColumnSize(this.columnDef.cssClassFriendlyName,this.elementRef.nativeElement,i,e)}_applyMinWidthPx(){this.resizeStrategy.applyMinColumnSize(this.columnDef.cssClassFriendlyName,this.elementRef.nativeElement,this.minWidthPx)}_applyMaxWidthPx(){this.resizeStrategy.applyMaxColumnSize(this.columnDef.cssClassFriendlyName,this.elementRef.nativeElement,this.maxWidthPx)}_appendInlineHandle(){this.styleScheduler.schedule(()=>{this.inlineHandle=this.document.createElement(`div`),this.inlineHandle.tabIndex=0,this.inlineHandle.className=this.getInlineHandleCssClassName(),this.elementRef.nativeElement.appendChild(this.inlineHandle)})}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵdir=Me({type:t})}};var Oi=class t{constructor(){this._renderer=p(hn);this.destroyed=new j;this._cumulativeDeltaX=0}ngAfterViewInit(){this._listenForMouseEvents()}ngOnDestroy(){this.destroyed.next(),this.destroyed.complete()}_listenForMouseEvents(){this.ngZone.runOutsideAngular(()=>{this._observableFromEvent(this.elementRef.nativeElement,`mouseenter`).pipe(Rl$1(this.resizeRef.origin.nativeElement),Ot(this.destroyed)).subscribe(n=>this.eventDispatcher.headerCellHovered.next(n)),this._observableFromEvent(this.elementRef.nativeElement,`mouseleave`).pipe(U(n=>n.relatedTarget&&ot(n.relatedTarget,Ii)),Ot(this.destroyed)).subscribe(n=>this.eventDispatcher.headerCellHovered.next(n)),this._observableFromEvent(this.elementRef.nativeElement,`mousedown`).pipe(Ot(this.destroyed)).subscribe(n=>{this._dragStarted(n)})})}_dragStarted(n){if(n.button!==0)return;let e=this._observableFromEvent(this.document,`mouseup`),i=this._observableFromEvent(this.document,`mousemove`),a=this._observableFromEvent(this.document,`keyup`).pipe(be$1(z=>z.keyCode===27)),o=n.screenX,c=this._getOriginWidth(),l=0,d=this._getOriginOffset(),x=c,f=0;this._cumulativeDeltaX=0,this.updateResizeActive(!0),e.pipe(Ot(Iw(a,this.destroyed))).subscribe(({screenX:z})=>{this.styleScheduler.scheduleEnd(()=>{this._notifyResizeEnded(x,z!==o)})}),a.pipe(Ot(Iw(e,this.destroyed))).subscribe(()=>{this._notifyResizeEnded(c)}),i.pipe(U(({screenX:z})=>z),po(o),Ol$1(),Cw(),Ot(Iw(e,a,this.destroyed))).subscribe(([z,j])=>{let W=j-z;if(!this.resizeRef.liveUpdates){this._cumulativeDeltaX+=W;let Fe=this._computeNewSize(x,this._cumulativeDeltaX)-x;this._updateOverlayOffset(Fe);return}if(f!==0)if(f<0&&W<0||f>0&&W>0){f+=W;return}else{let Fe=f+W;if(f=f>0?Math.max(Fe,0):Math.min(Fe,0),W=Fe-f,W===0)return}this._triggerResize(x,W),this.styleScheduler.scheduleEnd(()=>{let Fe=this._getOriginWidth(),Xt=this._getOriginOffset(),Se=Xt-d,ue=Fe-x;x=Fe,d=Xt,f+=W+(this._isLtr()?-ue:ue),l+=Se+(this._isLtr()?ue:0),this._updateOverlayOffset(l)})})}updateResizeActive(n){this.eventDispatcher.overlayHandleActiveForCell.next(n?this.resizeRef.origin.nativeElement:null)}_triggerResize(n,e){this.resizeNotifier.triggerResize.next({columnId:this.columnDef.name,size:this._computeNewSize(n,e),previousSize:n,isStickyColumn:this.columnDef.sticky||this.columnDef.stickyEnd})}_computeNewSize(n,e){let i=n+(this._isLtr()?e:-e);return i=Math.min(Math.max(i,this.resizeRef.minWidthPx,0),this.resizeRef.maxWidthPx),i}_getOriginWidth(){return this.resizeRef.origin.nativeElement.offsetWidth}_getOriginOffset(){return this.resizeRef.origin.nativeElement.offsetLeft}_updateOverlayOffset(n){this.resizeRef.overlayRef.overlayElement.style.transform=`translateX(${IO(n)})`}_isLtr(){return this.directionality.value===`ltr`}_notifyResizeEnded(n,e=!1){this.updateResizeActive(!1),this.ngZone.run(()=>{let i={columnId:this.columnDef.name,size:this._computeNewSize(n,this._cumulativeDeltaX)};e?(this.resizeRef.liveUpdates||this._triggerResize(n,this._cumulativeDeltaX),this.resizeNotifier.resizeCompleted.next(i)):this.resizeNotifier.resizeCanceled.next(i)})}_observableFromEvent(n,e){return new M(i=>{let a=c=>i.next(c),o=this._renderer.listen(n,e,a);return()=>{o(),i.complete()}})}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵdir=Me({type:t})}};var Xr=[`top`];var Pi=class t extends Oi{constructor(){super(...arguments);this.columnDef=p(Te);this.columnResize=p(be);this.directionality=p(wO);this.elementRef=p(ye);this.eventDispatcher=p(Xe);this.ngZone=p(G);this.resizeNotifier=p(Le);this.resizeRef=p(kt);this.styleScheduler=p(rt);this.document=p(B)}updateResizeActive(e){super.updateResizeActive(e);let i=this.resizeRef.origin.nativeElement.offsetHeight;this.topElement.nativeElement.style.height=`${i}px`,this.resizeRef.overlayRef.updateSize({height:e?this.columnResize.getTableHeight():i})}static{this.ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})()}static{this.ɵcmp=gn({type:t,selectors:[[`ng-component`]],viewQuery:function(i,a){if(i&1&&nE(Xr,7),i&2){let o;wh(o=Ch())&&(a.topElement=o.first)}},hostAttrs:[1,`mat-column-resize-overlay-thumb`],features:[HD],decls:2,vars:0,consts:[[`top`,``],[1,`mat-column-resize-overlay-thumb-top`]],template:function(i,a){i&1&&KD(0,`div`,1,0)},encapsulation:2})}};var Xn=class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵmod=dt({type:t})}static{this.ɵinj=Qe({})}};var Zr=[jt,Xn];var ci=class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵmod=dt({type:t})}static{this.ɵinj=Qe({imports:[Zr]})}};var Ze=class t{constructor(){}getCellValue(n,e){let i=e.field?e.field.split(`.`):[],a=``;return i.forEach((o,c)=>{c===0?a=n[o]:a=a&&a[o]}),a}getColData(n,e){return n.map(i=>this.getCellValue(i,e))}isEmpty(n){return n==null||n.toString()===``}isContainHTML(n){return/<\/?[a-z][\s\S]*>/i.test(n)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵprov=O$1({token:t,factory:t.ɵfac,providedIn:`root`})}};var Bi=class t{transform(n,e,i,a){return typeof n.class==`string`?n.class:typeof n.class==`function`?n.class(e,n):``}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵpipe=Hn$1({name:`colClass`,type:t,pure:!0})}};var Gi=class t{transform(n,e,i,a){let o=e===void 0?i:e,c=o%2===1?[`mat-row-odd`]:[];if(a)for(let l of Object.keys(a))a[l](n,o)&&c.push(l);return c.join(` `)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵpipe=Hn$1({name:`rowClass`,type:t,pure:!0})}};var Hi=class t{transform(n,e,i,a){return typeof n==`function`?n(e):Array.isArray(n)?n:[]}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵpipe=Hn$1({name:`cellActions`,type:t,pure:!0})}};var Li=class t{transform(n){return typeof n.tooltip==`string`||Da(n.tooltip)?{message:n.tooltip}:n.tooltip||{message:``}}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵpipe=Hn$1({name:`cellActionTooltip`,type:t,pure:!0})}};var Vi=class t{transform(n){return typeof n.badge==`number`||typeof n.badge==`string`||Da(n.badge)?{content:n.badge}:n.badge||{content:``}}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵpipe=Hn$1({name:`cellActionBadge`,type:t,pure:!0})}};var qt=class t{transform(n,e,i,a){return typeof n.disabled==`boolean`?n.disabled:typeof n.disabled==`function`?n.disabled(e):!1}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵpipe=Hn$1({name:`cellActionDisable`,type:t,pure:!0})}};var ji=class t{constructor(){this.utils=p(Ze)}transform(n,e){if(typeof e.summary==`string`)return e.summary;if(typeof e.summary==`function`)return e.summary(this.utils.getColData(n,e),e)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵpipe=Hn$1({name:`cellSummary`,type:t,pure:!0})}};var Xo=t=>({$implicit:t});function Yr(t,n){t&1&&zc$1(0,`mat-icon`)}function Jr(t,n){if(t&1){let e=hN();Sc$1(0,`button`,4),dA(1,`cellActionDisable`),Gc$1(`click`,function(){Lm(e);let a=DN(2).$implicit,o=DN();return Pm(a.click?.(o.data))}),zD(2,Yr,1,0,`mat-icon`,5),Sc$1(3,`span`),YN(4),Dh()(),zc$1(5,`mtx-grid-menu`,6,1)}if(t&2){let e=CN(6),i=DN(2).$implicit,a=DN(),o=CN(4);BN(i.class),ZD(`matMenuTriggerFor`,e.menu)(`disabled`,pA(1,9,i,a.data)),iT(2),ZD(`ngTemplateOutlet`,o)(`ngTemplateOutletContext`,iA(12,Xo,i)),iT(2),vE(i.text),iT(),ZD(`items`,i.children)(`data`,a.data)}}function ec(t,n){t&1&&zc$1(0,`mat-icon`)}function tc(t,n){if(t&1){let e=hN();Sc$1(0,`button`,7),dA(1,`cellActionDisable`),Gc$1(`click`,function(){Lm(e);let a=DN(2).$implicit,o=DN();return Pm(a.click?.(o.data))}),zD(2,ec,1,0,`mat-icon`,5),Sc$1(3,`span`),YN(4),Dh()()}if(t&2){let e=DN(2).$implicit,i=DN(),a=CN(4);BN(e.class),ZD(`disabled`,pA(1,6,e,i.data)),iT(2),ZD(`ngTemplateOutlet`,a)(`ngTemplateOutletContext`,iA(9,Xo,e)),iT(2),vE(e.text)}}function ic(t,n){if(t&1&&tN(0,Jr,7,14)(1,tc,5,11,`button`,3),t&2){let e=DN().$implicit;rN(e.children&&e.children.length>0?0:1)}}function nc(t,n){if(t&1&&tN(0,ic,2,1),t&2){let e=n.$implicit,i=DN();rN(!e.iif||e.iif(i.data)?0:-1)}}function ac(t,n){if(t&1&&(Sc$1(0,`mat-icon`,8),YN(1),Dh()),t&2){let e=DN().$implicit;iT(),vE(e.icon)}}function oc(t,n){if(t&1&&zc$1(0,`mat-icon`,9),t&2){let e=DN().$implicit;ZD(`fontIcon`,e.fontIcon)}}function rc(t,n){if(t&1&&zc$1(0,`mat-icon`,10),t&2){let e=DN().$implicit;ZD(`svgIcon`,e.svgIcon)}}function cc(t,n){if(t&1&&tN(0,ac,2,1,`mat-icon`,8)(1,oc,1,1,`mat-icon`,9)(2,rc,1,1,`mat-icon`,10),t&2){let e=n.$implicit;rN(e.icon?0:e.fontIcon?1:e.svgIcon?2:-1)}}var Qt=class t{constructor(){this.items=[];this.data={}}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`mtx-grid-menu`]],viewQuery:function(e,i){if(e&1&&nE(R$1,7),e&2){let a;wh(a=Ch())&&(i.menu=a.first)}},inputs:{items:`items`,data:`data`},exportAs:[`mtxGridMenu`],decls:5,vars:0,consts:[[`iconTpl`,``],[`gridMenu`,``],[1,`mtx-grid-menu`],[`mat-menu-item`,``,3,`disabled`,`class`],[`mat-menu-item`,``,3,`click`,`matMenuTriggerFor`,`disabled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`items`,`data`],[`mat-menu-item`,``,3,`click`,`disabled`],[1,`mtx-grid-icon`],[1,`mtx-grid-icon`,3,`fontIcon`],[1,`mtx-grid-icon`,3,`svgIcon`]],template:function(e,i){e&1&&(Sc$1(0,`mat-menu`,2),sN(1,nc,1,1,null,null,oN),Dh(),zD(3,cc,3,1,`ng-template`,null,0,vA)),e&2&&(iT(),aN(i.items))},dependencies:[t,YR,R$1,ee,Ot$1,wt,qt],encapsulation:2})}};var Wi=t=>({$implicit:t});var Yo=()=>[];var Zo=(t,n,e,i,a)=>[t,n,e,i,a];function lc(t,n){if(t&1&&(zc$1(0,`span`,2),dA(1,`cellSummary`),dA(2,`cellSummary`)),t&2){let e=DN();ZD(`title`,e._getFormatterTooltip(pA(1,2,e.data,e.colDef)))(`innerHTML`,e._getText(pA(2,5,e.data,e.colDef)),ES)}}function sc(t,n){if(t&1&&zc$1(0,`span`,2),t&2){let e=DN(2);ZD(`title`,e._getFormatterTooltip(e.colDef.formatter(e.rowData,e.colDef)))(`innerHTML`,e._getText(e.colDef.formatter(e.rowData,e.colDef)),ES)}}function dc(t,n){t&1&&zc$1(0,`mat-icon`)}function mc(t,n){if(t&1&&(Sc$1(0,`button`,6),dA(1,`cellActionDisable`),dA(2,`cellActionTooltip`),dA(3,`toObservable`),dA(4,`async`),dA(5,`cellActionTooltip`),dA(6,`cellActionTooltip`),dA(7,`cellActionTooltip`),dA(8,`cellActionTooltip`),dA(9,`cellActionTooltip`),dA(10,`cellActionTooltip`),dA(11,`cellActionTooltip`),dA(12,`cellActionBadge`),dA(13,`toObservable`),dA(14,`async`),dA(15,`cellActionBadge`),dA(16,`toObservable`),dA(17,`async`),dA(18,`cellActionBadge`),dA(19,`cellActionBadge`),dA(20,`cellActionBadge`),dA(21,`cellActionBadge`),dA(22,`cellActionBadge`),dA(23,`cellActionBadge`),Gc$1(`click`,function(i){return i.stopPropagation()}),zD(24,dc,1,0,`mat-icon`,7),Dh(),zc$1(25,`mtx-grid-menu`,8,1)),t&2){let e=CN(26),i=DN(3).$implicit,a=DN(4),o=CN(3);BN(i.class),ZD(`color`,i.color||`primary`)(`disabled`,mA(1,25,i,a.rowData,a.rowChangeRecord,a.rowChangeRecord==null?null:a.rowChangeRecord.currentValue))(`matTooltip`,hA(4,34,hA(3,32,hA(2,30,i).message)))(`matTooltipClass`,hA(5,36,i).class)(`matTooltipHideDelay`,hA(6,38,i).hideDelay)(`matTooltipShowDelay`,hA(7,40,i).showDelay)(`matTooltipPosition`,hA(8,42,i).position||`below`)(`matTooltipPositionAtOrigin`,hA(9,44,i).positionAtOrigin)(`matTooltipTouchGestures`,hA(10,46,i).touchGestures||`auto`)(`matTooltipDisabled`,hA(11,48,i).disabled)(`matBadge`,hA(14,54,hA(13,52,hA(12,50,i).content)))(`matBadgeDescription`,hA(17,60,hA(16,58,hA(15,56,i).description)))(`matBadgeColor`,hA(18,62,i).color)(`matBadgePosition`,hA(19,64,i).position||`above after`)(`matBadgeSize`,hA(20,66,i).size||`medium`)(`matBadgeOverlap`,hA(21,68,i).overlap)(`matBadgeDisabled`,hA(22,70,i).disabled)(`matBadgeHidden`,hA(23,72,i).hidden)(`matMenuTriggerFor`,i.children&&i.children.length>0?e.menu:null),iT(24),ZD(`ngTemplateOutlet`,o)(`ngTemplateOutletContext`,iA(74,Wi,i)),iT(),ZD(`items`,i.children||oA(76,Yo))(`data`,a.rowData)}}function pc(t,n){t&1&&zc$1(0,`mat-icon`)}function hc(t,n){if(t&1&&(Sc$1(0,`button`,9),dA(1,`cellActionDisable`),dA(2,`cellActionTooltip`),dA(3,`toObservable`),dA(4,`async`),dA(5,`cellActionTooltip`),dA(6,`cellActionTooltip`),dA(7,`cellActionTooltip`),dA(8,`cellActionTooltip`),dA(9,`cellActionTooltip`),dA(10,`cellActionTooltip`),dA(11,`cellActionTooltip`),dA(12,`cellActionBadge`),dA(13,`toObservable`),dA(14,`async`),dA(15,`cellActionBadge`),dA(16,`toObservable`),dA(17,`async`),dA(18,`cellActionBadge`),dA(19,`cellActionBadge`),dA(20,`cellActionBadge`),dA(21,`cellActionBadge`),dA(22,`cellActionBadge`),dA(23,`cellActionBadge`),Gc$1(`click`,function(i){return i.stopPropagation()}),zD(24,pc,1,0,`mat-icon`,7),Sc$1(25,`span`),YN(26),dA(27,`toObservable`),dA(28,`async`),Dh()(),zc$1(29,`mtx-grid-menu`,8,1)),t&2){let e=CN(30),i=DN(3).$implicit,a=DN(4),o=CN(3);BN(i.class),ZD(`matButton`,i.type||`text`)(`color`,i.color||`primary`)(`disabled`,mA(1,27,i,a.rowData,a.rowChangeRecord,a.rowChangeRecord==null?null:a.rowChangeRecord.currentValue))(`matTooltip`,hA(4,36,hA(3,34,hA(2,32,i).message)))(`matTooltipClass`,hA(5,38,i).class)(`matTooltipHideDelay`,hA(6,40,i).hideDelay)(`matTooltipShowDelay`,hA(7,42,i).showDelay)(`matTooltipPosition`,hA(8,44,i).position||`below`)(`matTooltipPositionAtOrigin`,hA(9,46,i).positionAtOrigin)(`matTooltipTouchGestures`,hA(10,48,i).touchGestures||`auto`)(`matTooltipDisabled`,hA(11,50,i).disabled)(`matBadge`,hA(14,56,hA(13,54,hA(12,52,i).content)))(`matBadgeDescription`,hA(17,62,hA(16,60,hA(15,58,i).description)))(`matBadgeColor`,hA(18,64,i).color)(`matBadgePosition`,hA(19,66,i).position||`above after`)(`matBadgeSize`,hA(20,68,i).size||`medium`)(`matBadgeOverlap`,hA(21,70,i).overlap)(`matBadgeDisabled`,hA(22,72,i).disabled)(`matBadgeHidden`,hA(23,74,i).hidden)(`matMenuTriggerFor`,i.children&&i.children.length>0?e.menu:null),iT(24),ZD(`ngTemplateOutlet`,o)(`ngTemplateOutletContext`,iA(80,Wi,i)),iT(2),vE(hA(28,78,hA(27,76,i.text))),iT(3),ZD(`items`,i.children||oA(82,Yo))(`data`,a.rowData)}}function uc(t,n){if(t&1&&tN(0,mc,27,77)(1,hc,31,83),t&2){let e=DN(2).$implicit;rN(e.type===`icon`?0:1)}}function gc(t,n){t&1&&zc$1(0,`mat-icon`)}function _c(t,n){if(t&1){let e=hN();Sc$1(0,`button`,12),dA(1,`cellActionDisable`),dA(2,`cellActionTooltip`),dA(3,`toObservable`),dA(4,`async`),dA(5,`cellActionTooltip`),dA(6,`cellActionTooltip`),dA(7,`cellActionTooltip`),dA(8,`cellActionTooltip`),dA(9,`cellActionTooltip`),dA(10,`cellActionTooltip`),dA(11,`cellActionTooltip`),dA(12,`cellActionBadge`),dA(13,`toObservable`),dA(14,`async`),dA(15,`cellActionBadge`),dA(16,`toObservable`),dA(17,`async`),dA(18,`cellActionBadge`),dA(19,`cellActionBadge`),dA(20,`cellActionBadge`),dA(21,`cellActionBadge`),dA(22,`cellActionBadge`),dA(23,`cellActionBadge`),Gc$1(`click`,function(a){Lm(e);let o=DN(3).$implicit,c=DN(4);return Pm(c._onActionClick(a,o,c.rowData))}),zD(24,gc,1,0,`mat-icon`,7),Dh()}if(t&2){let e=DN(3).$implicit,i=DN(4),a=CN(3);BN(e.class),ZD(`color`,e.color||`primary`)(`disabled`,mA(1,22,e,i.rowData,i.rowChangeRecord,i.rowChangeRecord==null?null:i.rowChangeRecord.currentValue))(`matTooltip`,hA(4,31,hA(3,29,hA(2,27,e).message)))(`matTooltipClass`,hA(5,33,e).class)(`matTooltipHideDelay`,hA(6,35,e).hideDelay)(`matTooltipShowDelay`,hA(7,37,e).showDelay)(`matTooltipPosition`,hA(8,39,e).position||`below`)(`matTooltipPositionAtOrigin`,hA(9,41,e).positionAtOrigin)(`matTooltipTouchGestures`,hA(10,43,e).touchGestures||`auto`)(`matTooltipDisabled`,hA(11,45,e).disabled)(`matBadge`,hA(14,51,hA(13,49,hA(12,47,e).content)))(`matBadgeDescription`,hA(17,57,hA(16,55,hA(15,53,e).description)))(`matBadgeColor`,hA(18,59,e).color)(`matBadgePosition`,hA(19,61,e).position||`above after`)(`matBadgeSize`,hA(20,63,e).size||`medium`)(`matBadgeOverlap`,hA(21,65,e).overlap)(`matBadgeDisabled`,hA(22,67,e).disabled)(`matBadgeHidden`,hA(23,69,e).hidden),iT(24),ZD(`ngTemplateOutlet`,a)(`ngTemplateOutletContext`,iA(71,Wi,e))}}function fc(t,n){t&1&&zc$1(0,`mat-icon`)}function yc(t,n){if(t&1){let e=hN();Sc$1(0,`button`,13),dA(1,`cellActionDisable`),dA(2,`cellActionTooltip`),dA(3,`toObservable`),dA(4,`async`),dA(5,`cellActionTooltip`),dA(6,`cellActionTooltip`),dA(7,`cellActionTooltip`),dA(8,`cellActionTooltip`),dA(9,`cellActionTooltip`),dA(10,`cellActionTooltip`),dA(11,`cellActionTooltip`),dA(12,`cellActionBadge`),dA(13,`toObservable`),dA(14,`async`),dA(15,`cellActionBadge`),dA(16,`toObservable`),dA(17,`async`),dA(18,`cellActionBadge`),dA(19,`cellActionBadge`),dA(20,`cellActionBadge`),dA(21,`cellActionBadge`),dA(22,`cellActionBadge`),dA(23,`cellActionBadge`),Gc$1(`click`,function(a){Lm(e);let o=DN(3).$implicit,c=DN(4);return Pm(c._onActionClick(a,o,c.rowData))}),zD(24,fc,1,0,`mat-icon`,7),Sc$1(25,`span`),YN(26),dA(27,`toObservable`),dA(28,`async`),Dh()()}if(t&2){let e=DN(3).$implicit,i=DN(4),a=CN(3);BN(e.class),ZD(`matButton`,e.type||`text`)(`color`,e.color||`primary`)(`disabled`,mA(1,24,e,i.rowData,i.rowChangeRecord,i.rowChangeRecord==null?null:i.rowChangeRecord.currentValue))(`matTooltip`,hA(4,33,hA(3,31,hA(2,29,e).message)))(`matTooltipClass`,hA(5,35,e).class)(`matTooltipHideDelay`,hA(6,37,e).hideDelay)(`matTooltipShowDelay`,hA(7,39,e).showDelay)(`matTooltipPosition`,hA(8,41,e).position||`below`)(`matTooltipPositionAtOrigin`,hA(9,43,e).positionAtOrigin)(`matTooltipTouchGestures`,hA(10,45,e).touchGestures||`auto`)(`matTooltipDisabled`,hA(11,47,e).disabled)(`matBadge`,hA(14,53,hA(13,51,hA(12,49,e).content)))(`matBadgeDescription`,hA(17,59,hA(16,57,hA(15,55,e).description)))(`matBadgeColor`,hA(18,61,e).color)(`matBadgePosition`,hA(19,63,e).position||`above after`)(`matBadgeSize`,hA(20,65,e).size||`medium`)(`matBadgeOverlap`,hA(21,67,e).overlap)(`matBadgeDisabled`,hA(22,69,e).disabled)(`matBadgeHidden`,hA(23,71,e).hidden),iT(24),ZD(`ngTemplateOutlet`,a)(`ngTemplateOutletContext`,iA(77,Wi,e)),iT(2),vE(hA(28,75,hA(27,73,e.text)))}}function vc(t,n){if(t&1&&tN(0,_c,25,73,`button`,10)(1,yc,29,79,`button`,11),t&2){let e=DN(2).$implicit;rN(e.type===`icon`?0:1)}}function bc(t,n){if(t&1&&tN(0,uc,2,1)(1,vc,2,1),t&2){let e=DN().$implicit;rN(e.children&&e.children.length>0?0:1)}}function xc(t,n){if(t&1&&tN(0,bc,2,1),t&2){let e=n.$implicit,i=DN(4);rN(!e.iif||e.iif(i.rowData)?0:-1)}}function Cc(t,n){if(t&1&&(sN(0,xc,1,1,null,null,iN),dA(2,`cellActions`)),t&2){let e=DN(3);aN(mA(2,0,e.colDef.buttons,e.rowData,e.rowChangeRecord,e.rowChangeRecord==null?null:e.rowChangeRecord.currentValue))}}function wc(t,n){if(t&1&&(Sc$1(0,`mat-chip-listbox`)(1,`mat-chip`,14),YN(2),Dh()()),t&2){let e=DN(4);iT(),BN(`bg-`+e.colDef.tag[e._value].color),iT(),Sh(` `,e.colDef.tag[e._value].text,` `)}}function Sc(t,n){if(t&1&&YN(0),t&2){let e=DN(4);Sh(` `,e._value,` `)}}function Mc(t,n){if(t&1&&tN(0,wc,3,3,`mat-chip-listbox`)(1,Sc,1,1),t&2){let e=DN(3);rN(e.colDef.tag&&e.colDef.tag[e._value]?0:1)}}function kc(t,n){if(t&1&&(Sc$1(0,`a`,3),YN(1),Dh()),t&2){let e=DN(3);ZD(`href`,e._value,jv),iT(),vE(e._value)}}function Dc(t,n){if(t&1&&zc$1(0,`img`,4),t&2){let e=DN(3);ZD(`src`,e._value,jv)}}function Tc(t,n){if(t&1&&(Sc$1(0,`span`,5),YN(1),Dh()),t&2){let e=DN(3);ZD(`title`,e._getTooltip(e._value)),iT(),vE(e._getText(e._value))}}function Rc(t,n){if(t&1&&(Sc$1(0,`span`,5),dA(1,`number`),YN(2),dA(3,`number`),Dh()),t&2){let e=DN(3);ZD(`title`,e._getTooltip(gA(1,2,e._value,e.colDef.typeParameter==null?null:e.colDef.typeParameter.digitsInfo,e.colDef.typeParameter==null?null:e.colDef.typeParameter.locale))),iT(2),Sh(` `,e._getText(gA(3,6,e._value,e.colDef.typeParameter==null?null:e.colDef.typeParameter.digitsInfo,e.colDef.typeParameter==null?null:e.colDef.typeParameter.locale)),` `)}}function Nc(t,n){if(t&1&&(Sc$1(0,`span`,5),dA(1,`currency`),YN(2),dA(3,`currency`),Dh()),t&2){let e=DN(3);ZD(`title`,e._getTooltip(yA(1,2,uA(14,Zo,e._value,e.colDef.typeParameter==null?null:e.colDef.typeParameter.currencyCode,e.colDef.typeParameter==null?null:e.colDef.typeParameter.display,e.colDef.typeParameter==null?null:e.colDef.typeParameter.digitsInfo,e.colDef.typeParameter==null?null:e.colDef.typeParameter.locale)))),iT(2),Sh(` `,e._getText(yA(3,8,uA(20,Zo,e._value,e.colDef.typeParameter==null?null:e.colDef.typeParameter.currencyCode,e.colDef.typeParameter==null?null:e.colDef.typeParameter.display,e.colDef.typeParameter==null?null:e.colDef.typeParameter.digitsInfo,e.colDef.typeParameter==null?null:e.colDef.typeParameter.locale))),` `)}}function Ic(t,n){if(t&1&&(Sc$1(0,`span`,5),dA(1,`percent`),YN(2),dA(3,`percent`),Dh()),t&2){let e=DN(3);ZD(`title`,e._getTooltip(gA(1,2,e._value,e.colDef.typeParameter==null?null:e.colDef.typeParameter.digitsInfo,e.colDef.typeParameter==null?null:e.colDef.typeParameter.locale))),iT(2),Sh(` `,e._getText(gA(3,6,e._value,e.colDef.typeParameter==null?null:e.colDef.typeParameter.digitsInfo,e.colDef.typeParameter==null?null:e.colDef.typeParameter.locale)),` `)}}function Ec(t,n){if(t&1&&(Sc$1(0,`span`,5),dA(1,`date`),YN(2),dA(3,`date`),Dh()),t&2){let e=DN(3);ZD(`title`,e._getTooltip(mA(1,2,e._value,e.colDef.typeParameter==null?null:e.colDef.typeParameter.format,e.colDef.typeParameter==null?null:e.colDef.typeParameter.timezone,e.colDef.typeParameter==null?null:e.colDef.typeParameter.locale))),iT(2),Sh(` `,e._getText(mA(3,7,e._value,e.colDef.typeParameter==null?null:e.colDef.typeParameter.format,e.colDef.typeParameter==null?null:e.colDef.typeParameter.timezone,e.colDef.typeParameter==null?null:e.colDef.typeParameter.locale)),` `)}}function zc(t,n){if(t&1&&(Sc$1(0,`span`,5),YN(1),Dh()),t&2){let e=DN(3);ZD(`title`,e._getTooltip(e._value)),iT(),vE(e._getText(e._value))}}function Ac(t,n){if(t&1&&tN(0,Cc,3,5)(1,Mc,2,1)(2,kc,2,2,`a`,3)(3,Dc,1,1,`img`,4)(4,Tc,2,2,`span`,5)(5,Rc,4,10,`span`,5)(6,Nc,4,26,`span`,5)(7,Ic,4,10,`span`,5)(8,Ec,4,12,`span`,5)(9,zc,2,2,`span`,5),t&2){let e,i=DN(2);rN((e=i.colDef.type)===`button`?0:e===`tag`?1:e===`link`?2:e===`image`?3:e===`boolean`?4:e===`number`?5:e===`currency`?6:e===`percent`?7:e===`date`?8:9)}}function Fc(t,n){if(t&1&&tN(0,sc,1,2,`span`,2)(1,Ac,10,1),t&2){let e=DN();rN(e.colDef.formatter?0:1)}}function Oc(t,n){if(t&1&&(Sc$1(0,`mat-icon`,15),YN(1),Dh()),t&2){let e=DN().$implicit;iT(),vE(e.icon)}}function Pc(t,n){if(t&1&&zc$1(0,`mat-icon`,16),t&2){let e=DN().$implicit;ZD(`fontIcon`,e.fontIcon)}}function Bc(t,n){if(t&1&&zc$1(0,`mat-icon`,17),t&2){let e=DN().$implicit;ZD(`svgIcon`,e.svgIcon)}}function Gc(t,n){if(t&1&&tN(0,Oc,2,1,`mat-icon`,15)(1,Pc,1,1,`mat-icon`,16)(2,Bc,1,1,`mat-icon`,17),t&2){let e=n.$implicit;rN(e.icon?0:e.fontIcon?1:e.svgIcon?2:-1)}}var Ut=class t{constructor(){this._dialog=p(w);this._utils=p(Ze);this._differs=p(Zh);this._changeDetectorRef=p(Lr$1);this.rowData={};this.data=[];this.summary=!1;this.placeholder=`--`;this.rowDataChange=new ue}get _value(){return this._utils.getCellValue(this.rowData,this.colDef)}ngOnInit(){this.rowDataDiffer=this._differs.find(this.rowData).create()}ngDoCheck(){let n=this.rowDataDiffer?.diff(this.rowData);n&&this._applyChanges(n)}_applyChanges(n){n.forEachChangedItem(e=>{this.rowChangeRecord=e,this.rowDataChange.emit(e),this._changeDetectorRef.markForCheck()})}_getText(n){return n===void 0?``:this._utils.isEmpty(n)?this.placeholder:n}_getTooltip(n){return this._utils.isEmpty(n)?``:n}_getFormatterTooltip(n){return this._utils.isContainHTML(n)||this._utils.isEmpty(n)?``:n}_onActionClick(n,e,i){n.preventDefault(),n.stopPropagation(),typeof e.pop==`string`||Da(e.pop)?this._dialog.open({title:e.pop,buttons:[{color:`primary`,text:`OK`,onClick:()=>e.click?.(i)||{}},{text:`CLOSE`}]}):typeof e.pop==`object`?this._dialog.open({title:e.pop?.title,description:e.pop?.description,buttons:[{color:e.pop?.okColor||`primary`,text:e.pop?.okText||`OK`,onClick:()=>e.click?.(i)||{}},{color:e.pop?.closeColor,text:e.pop?.closeText||`CLOSE`}]}):e.click?.(i)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`mtx-grid-cell`]],inputs:{rowData:`rowData`,colDef:`colDef`,data:`data`,summary:`summary`,placeholder:`placeholder`},outputs:{rowDataChange:`rowDataChange`},exportAs:[`mtxGridCell`],decls:4,vars:1,consts:[[`iconTpl`,``],[`gridMenu`,``],[3,`title`,`innerHTML`],[`target`,`_blank`,3,`href`],[`alt`,``,1,`mtx-grid-img`,3,`src`],[3,`title`],[`matIconButton`,``,`type`,`button`,1,`mtx-grid-action-button`,3,`click`,`color`,`disabled`,`matTooltip`,`matTooltipClass`,`matTooltipHideDelay`,`matTooltipShowDelay`,`matTooltipPosition`,`matTooltipPositionAtOrigin`,`matTooltipTouchGestures`,`matTooltipDisabled`,`matBadge`,`matBadgeDescription`,`matBadgeColor`,`matBadgePosition`,`matBadgeSize`,`matBadgeOverlap`,`matBadgeDisabled`,`matBadgeHidden`,`matMenuTriggerFor`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`items`,`data`],[`type`,`button`,1,`mtx-grid-action-button`,3,`click`,`matButton`,`color`,`disabled`,`matTooltip`,`matTooltipClass`,`matTooltipHideDelay`,`matTooltipShowDelay`,`matTooltipPosition`,`matTooltipPositionAtOrigin`,`matTooltipTouchGestures`,`matTooltipDisabled`,`matBadge`,`matBadgeDescription`,`matBadgeColor`,`matBadgePosition`,`matBadgeSize`,`matBadgeOverlap`,`matBadgeDisabled`,`matBadgeHidden`,`matMenuTriggerFor`],[`matIconButton`,``,`type`,`button`,1,`mtx-grid-action-button`,3,`color`,`class`,`disabled`,`matTooltip`,`matTooltipClass`,`matTooltipHideDelay`,`matTooltipShowDelay`,`matTooltipPosition`,`matTooltipPositionAtOrigin`,`matTooltipTouchGestures`,`matTooltipDisabled`,`matBadge`,`matBadgeDescription`,`matBadgeColor`,`matBadgePosition`,`matBadgeSize`,`matBadgeOverlap`,`matBadgeDisabled`,`matBadgeHidden`],[`type`,`button`,1,`mtx-grid-action-button`,3,`matButton`,`color`,`class`,`disabled`,`matTooltip`,`matTooltipClass`,`matTooltipHideDelay`,`matTooltipShowDelay`,`matTooltipPosition`,`matTooltipPositionAtOrigin`,`matTooltipTouchGestures`,`matTooltipDisabled`,`matBadge`,`matBadgeDescription`,`matBadgeColor`,`matBadgePosition`,`matBadgeSize`,`matBadgeOverlap`,`matBadgeDisabled`,`matBadgeHidden`],[`matIconButton`,``,`type`,`button`,1,`mtx-grid-action-button`,3,`click`,`color`,`disabled`,`matTooltip`,`matTooltipClass`,`matTooltipHideDelay`,`matTooltipShowDelay`,`matTooltipPosition`,`matTooltipPositionAtOrigin`,`matTooltipTouchGestures`,`matTooltipDisabled`,`matBadge`,`matBadgeDescription`,`matBadgeColor`,`matBadgePosition`,`matBadgeSize`,`matBadgeOverlap`,`matBadgeDisabled`,`matBadgeHidden`],[`type`,`button`,1,`mtx-grid-action-button`,3,`click`,`matButton`,`color`,`disabled`,`matTooltip`,`matTooltipClass`,`matTooltipHideDelay`,`matTooltipShowDelay`,`matTooltipPosition`,`matTooltipPositionAtOrigin`,`matTooltipTouchGestures`,`matTooltipDisabled`,`matBadge`,`matBadgeDescription`,`matBadgeColor`,`matBadgePosition`,`matBadgeSize`,`matBadgeOverlap`,`matBadgeDisabled`,`matBadgeHidden`],[`color`,`primary`],[1,`mtx-grid-icon`],[1,`mtx-grid-icon`,3,`fontIcon`],[1,`mtx-grid-icon`,3,`svgIcon`]],template:function(e,i){e&1&&(tN(0,lc,3,8,`span`,2)(1,Fc,2,1),zD(2,Gc,3,1,`ng-template`,null,0,vA)),e&2&&rN(i.summary?0:1)},dependencies:[YR,Ot$2,dt$1,wt,An,ei,Oi$1,go,Ot$1,Qt,JR,i0,t0,r0,o0,dt$3,Hi,ji,qt,Li,Vi],styles:[`.mtx-grid-img{display:inline-block;width:32px;border-radius:4px;vertical-align:middle}
`],encapsulation:2})}};var Jo=t=>({$implicit:t});var er=(t,n)=>n.field;function Hc(t,n){t&1&&zc$1(0,`mat-icon`)}function Lc(t,n){if(t&1&&(Sc$1(0,`button`,13),zD(1,Hc,1,0,`mat-icon`,14),Dh()),t&2){let e=DN(),i=CN(3),a=CN(5);BN(e.buttonClass),ZD(`color`,e.buttonColor)(`matMenuTriggerFor`,a),iT(),ZD(`ngTemplateOutlet`,i)}}function Vc(t,n){t&1&&zc$1(0,`mat-icon`)}function jc(t,n){if(t&1&&(Sc$1(0,`button`,15),zD(1,Vc,1,0,`mat-icon`,14),YN(2),Dh()),t&2){let e=DN(),i=CN(3),a=CN(5);BN(e.buttonClass),ZD(`matButton`,e.buttonType)(`color`,e.buttonColor)(`matMenuTriggerFor`,a),iT(),ZD(`ngTemplateOutlet`,i),iT(),Sh(` `,e.buttonText,` `)}}function Wc(t,n){if(t&1&&(Sc$1(0,`mat-icon`),YN(1),Dh()),t&2){let e=DN(2);iT(),vE(e.buttonIcon)}}function $c(t,n){if(t&1&&zc$1(0,`mat-icon`,16),t&2){let e=DN(2);ZD(`fontIcon`,e.buttonFontIcon)}}function qc(t,n){if(t&1&&zc$1(0,`mat-icon`,17),t&2){let e=DN(2);ZD(`svgIcon`,e.buttonSvgIcon)}}function Qc(t,n){if(t&1&&tN(0,Wc,2,1,`mat-icon`)(1,$c,1,1,`mat-icon`,16)(2,qc,1,1,`mat-icon`,17),t&2){let e=DN();rN(e.buttonIcon?0:e.buttonFontIcon?1:e.buttonSvgIcon?2:-1)}}function Uc(t,n){}function Kc(t,n){if(t&1&&zD(0,Uc,0,0,`ng-template`,18),t&2){let e=DN(2);ZD(`ngTemplateOutlet`,e.headerTemplate)}}function Xc(t,n){if(t&1&&YN(0),t&2){let e=DN(2);Sh(` `,e.headerText,` `)}}function Zc(t,n){if(t&1&&(Sc$1(0,`div`,8),tN(1,Kc,1,1,null,18)(2,Xc,1,1),Dh()),t&2){let e=DN();iT(),rN(e.headerTemplate?1:2)}}function Yc(t,n){}function Jc(t,n){if(t&1&&(Sc$1(0,`div`,20),Km(),Sc$1(1,`svg`,21),zc$1(2,`path`,22),Dh(),zD(3,Yc,0,0,`ng-template`,23),Dh()),t&2){let e=n.$implicit,i=DN(2),a=CN(13);ZD(`cdkDragDisabled`,i.selectableChecked===`show`?!e.show:e.hide),iT(3),ZD(`ngTemplateOutlet`,a)(`ngTemplateOutletContext`,iA(3,Jo,e))}}function el(t,n){if(t&1){let e=hN();Sc$1(0,`div`,19),Gc$1(`cdkDropListDropped`,function(a){Lm(e);let o=DN();return Pm(o._handleDroped(a))}),sN(1,Jc,4,5,`div`,20,er),Dh()}if(t&2){let e=DN();iT(),aN(e.columns)}}function tl(t,n){}function il(t,n){if(t&1&&(Sc$1(0,`div`,24),zD(1,tl,0,0,`ng-template`,23),Dh()),t&2){let e=n.$implicit;DN(2);let i=CN(13);iT(),ZD(`ngTemplateOutlet`,i)(`ngTemplateOutletContext`,iA(2,Jo,e))}}function nl(t,n){if(t&1&&(Sc$1(0,`div`,11),sN(1,il,2,4,`div`,24,er),Dh()),t&2){let e=DN();iT(),aN(e.columns)}}function al(t,n){}function ol(t,n){if(t&1&&zD(0,al,0,0,`ng-template`,18),t&2){let e=DN(2);ZD(`ngTemplateOutlet`,e.footerTemplate)}}function rl(t,n){if(t&1&&YN(0),t&2){let e=DN(2);Sh(` `,e.footerText,` `)}}function cl(t,n){if(t&1&&(Sc$1(0,`div`,12),tN(1,ol,1,1,null,18)(2,rl,1,1),Dh()),t&2){let e=DN();iT(),rN(e.footerTemplate?1:2)}}function ll(t,n){t&1&&(Km(),Sc$1(0,`svg`,28),zc$1(1,`path`,32),Dh())}function sl(t,n){t&1&&(Km(),Sc$1(0,`svg`,29),zc$1(1,`path`,33),Dh())}function dl(t,n){t&1&&(Km(),Sc$1(0,`svg`,36),zc$1(1,`path`,38),Dh())}function ml(t,n){if(t&1){let e=hN();Sc$1(0,`button`,34),Gc$1(`click`,function(){let a=Lm(e).$implicit,o=DN(2).$implicit,c=DN();return Pm(c._handlePinSelect(o,a.value))}),Sc$1(1,`span`,35),tN(2,dl,2,0,`:svg:svg`,36),Dh(),Sc$1(3,`span`,37),YN(4),dA(5,`toObservable`),dA(6,`async`),Dh()()}if(t&2){let e=n.$implicit,i=DN(2).$implicit;iT(2),rN(i.pinned==e.value?2:-1),iT(2),vE(hA(6,4,hA(5,2,e.label)))}}function pl(t,n){if(t&1&&(Sc$1(0,`button`,27),tN(1,ll,2,0,`:svg:svg`,28),tN(2,sl,2,0,`:svg:svg`,29),Dh(),Sc$1(3,`mat-menu`,30,3),sN(5,ml,7,6,`button`,31,iN),Dh()),t&2){let e=CN(4),i=DN().$implicit,a=DN();ZD(`matMenuTriggerFor`,e),iT(),rN(i.pinned?1:-1),iT(),rN(i.pinned?-1:2),iT(3),aN(a.pinOptions)}}function hl(t,n){if(t&1){let e=hN();Sc$1(0,`mat-checkbox`,39),GT(),bE(`ngModelChange`,function(a){Lm(e);let o=DN().$implicit,c=DN();return JN(o[c.selectableChecked],a)||(o[c.selectableChecked]=a),Pm(a)}),Gc$1(`change`,function(){Lm(e);let a=DN().$implicit,o=DN();return Pm(o._handleChecked(a))}),YN(1),dA(2,`toObservable`),dA(3,`async`),Dh()}if(t&2){let e=DN().$implicit,i=DN();IE(`ngModel`,e[i.selectableChecked]),ZD(`disabled`,e.disabled),qT(),iT(),vE(hA(3,5,hA(2,3,e.header)))}}function ul(t,n){if(t&1&&(Sc$1(0,`span`,26),YN(1),dA(2,`toObservable`),dA(3,`async`),Dh()),t&2){let e=DN().$implicit;iT(),vE(hA(3,3,hA(2,1,e.header)))}}function gl(t,n){if(t&1&&(tN(0,pl,7,3),tN(1,hl,4,7,`mat-checkbox`,25)(2,ul,4,5,`span`,26)),t&2){let e=DN();rN(e.pinnable?0:-1),iT(),rN(e.selectable?1:2)}}var Dt=class t{constructor(){this.columns=[];this.selectable=!0;this.selectableChecked=`show`;this.sortable=!0;this.pinnable=!0;this._buttonText=``;this.buttonType=`outlined`;this.buttonClass=``;this.buttonIcon=``;this.buttonFontIcon=``;this.buttonSvgIcon=``;this.showHeader=!1;this.headerText=`Columns Header`;this.showFooter=!1;this.footerText=`Columns Footer`;this.columnChange=new ue;this._pinOptions=[{label:`Pin Left`,value:`left`},{label:`Pin Right`,value:`right`},{label:`No Pin`,value:null}]}get buttonText(){let n=`Columns ${this.selectableChecked===`show`?`Shown`:`Hidden`}`;return this._buttonText?this._buttonText:n}set buttonText(n){this._buttonText=n}get pinOptions(){return this._pinOptions}set pinOptions(n){n.length>0&&(this._pinOptions=n)}_handleDroped(n){te(this.columns,n.previousIndex,n.currentIndex),this.columnChange.emit(this.columns)}_handleChecked(n){this.selectableChecked===`show`?n.hide=!n.show:n.show=!n.hide,this.columnChange.emit(this.columns)}_handlePinSelect(n,e){n.pinned!=e&&(n.pinned=e,this.columnChange.emit(this.columns))}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`mtx-grid-column-menu`]],viewQuery:function(e,i){if(e&1&&nE(R$1,7)(Ot$1,5),e&2){let a;wh(a=Ch())&&(i.menuPanel=a.first),wh(a=Ch())&&(i.menuTrigger=a.first)}},inputs:{columns:`columns`,selectable:`selectable`,selectableChecked:`selectableChecked`,sortable:`sortable`,pinnable:`pinnable`,buttonText:`buttonText`,buttonType:`buttonType`,buttonColor:`buttonColor`,buttonClass:`buttonClass`,buttonIcon:`buttonIcon`,buttonFontIcon:`buttonFontIcon`,buttonSvgIcon:`buttonSvgIcon`,showHeader:`showHeader`,headerText:`headerText`,headerTemplate:`headerTemplate`,showFooter:`showFooter`,footerText:`footerText`,footerTemplate:`footerTemplate`,pinOptions:`pinOptions`},outputs:{columnChange:`columnChange`},exportAs:[`mtxGridColumnMenu`],decls:14,vars:5,consts:[[`iconTpl`,``],[`menu`,`matMenu`],[`checkboxList`,``],[`pinList`,`matMenu`],[`matIconButton`,``,`type`,`button`,3,`class`,`color`,`matMenuTriggerFor`],[`type`,`button`,3,`class`,`matButton`,`color`,`matMenuTriggerFor`],[1,`mtx-grid-column-menu`],[1,`mtx-grid-column-menu-content`,3,`click`,`keydown`],[1,`mtx-grid-column-menu-header`],[1,`mtx-grid-column-menu-body`],[`cdkDropList`,``,1,`mtx-grid-column-menu-list`],[1,`mtx-grid-column-menu-list`],[1,`mtx-grid-column-menu-footer`],[`matIconButton`,``,`type`,`button`,3,`color`,`matMenuTriggerFor`],[4,`ngTemplateOutlet`],[`type`,`button`,3,`matButton`,`color`,`matMenuTriggerFor`],[3,`fontIcon`],[3,`svgIcon`],[3,`ngTemplateOutlet`],[`cdkDropList`,``,1,`mtx-grid-column-menu-list`,3,`cdkDropListDropped`],[`cdkDrag`,``,1,`mtx-grid-column-menu-item`,3,`cdkDragDisabled`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,1,`mtx-grid-icon`,`mtx-grid-column-drag-handle-icon`],[`d`,`M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mtx-grid-column-menu-item`],[1,`mtx-grid-column-menu-item-label`,3,`ngModel`,`disabled`],[1,`mtx-grid-column-menu-item-label`],[`matIconButton`,``,`type`,`button`,1,`mtx-grid-column-pin-button`,3,`matMenuTriggerFor`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,1,`mtx-grid-icon`,`mtx-grid-column-pin-icon`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,1,`mtx-grid-icon`,`mtx-grid-column-pin-off-icon`],[1,`mtx-grid-column-pin-list`],[`type`,`button`,`mat-menu-item`,``,1,`mtx-grid-column-pin-option`],[`d`,`M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z`],[`d`,`M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z`],[`type`,`button`,`mat-menu-item`,``,1,`mtx-grid-column-pin-option`,3,`click`],[1,`mtx-grid-column-pin-option-placeholder`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,1,`mtx-grid-icon`,`mtx-grid-column-pin-check-icon`],[1,`mtx-grid-column-pin-option-text`],[`d`,`M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z`],[1,`mtx-grid-column-menu-item-label`,3,`ngModelChange`,`change`,`ngModel`,`disabled`]],template:function(e,i){e&1&&(tN(0,Lc,2,5,`button`,4)(1,jc,3,7,`button`,5),zD(2,Qc,3,1,`ng-template`,null,0,vA),Sc$1(4,`mat-menu`,6,1)(6,`div`,7),Gc$1(`click`,function(o){return o.stopPropagation()})(`keydown`,function(o){return o.stopPropagation()}),tN(7,Zc,3,1,`div`,8),Sc$1(8,`div`,9),tN(9,el,3,0,`div`,10),tN(10,nl,3,0,`div`,11),Dh(),tN(11,cl,3,1,`div`,12),Dh()(),zD(12,gl,3,2,`ng-template`,null,2,vA)),e&2&&(rN(i.buttonType===`icon`?0:1),iT(7),rN(i.showHeader?7:-1),iT(2),rN(i.sortable?9:-1),iT(),rN(i.sortable?-1:10),iT(),rN(i.showFooter?11:-1))},dependencies:[YR,yn,gn$1,Ut$2,Ot$2,dt$1,wt,R$1,Ot$1,ee,ce,Ue,We$1,JR,dt$3],styles:[`.mtx-grid-column-menu,.mtx-grid-column-pin-list{color:var(--%NS%mtx-grid-column-menu-text-color, var(--%NS%mat-sys-on-surface-variant))}.mtx-grid-column-menu .mat-mdc-menu-content{padding:0}.mtx-grid-column-menu-body{max-height:65vh;padding:8px 16px;overflow:auto}.mtx-grid-column-menu-header,.mtx-grid-column-menu-footer{position:sticky;z-index:1;padding:8px 16px}.mtx-grid-column-menu-header{top:0;border-bottom:1px solid var(--%NS%mtx-grid-column-menu-divider-color, var(--%NS%mat-sys-outline-variant))}.mtx-grid-column-menu-footer{bottom:0;border-top:1px solid var(--%NS%mtx-grid-column-menu-divider-color, var(--%NS%mat-sys-outline-variant))}.mtx-grid-column-menu-list{display:block;max-width:100%}.mtx-grid-column-menu-list.cdk-drop-list-dragging .mtx-grid-column-menu-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.mtx-grid-column-menu-item{display:flex;flex-direction:row;align-items:center}.mtx-grid-column-menu-item.cdk-drag-disabled .cdk-drag-handle{opacity:.35;cursor:no-drop}.mtx-grid-column-menu-item .cdk-drag-handle{cursor:move}.mtx-grid-column-menu-item.cdk-drag-preview{border-radius:4px;box-shadow:0 0 0 1px var(--%NS%mtx-grid-outline-color, var(--%NS%mat-sys-outline-variant))}.mtx-grid-column-menu-item.cdk-drag-placeholder{opacity:0}.mtx-grid-column-menu-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.mtx-grid-column-pin-button.mat-mdc-icon-button .mat-mdc-button-touch-target{width:100%;height:100%}.mtx-grid-column-pin-option.mat-menu-item{display:flex;align-items:center;height:32px}.mtx-grid-column-pin-option-placeholder{display:inline-block;width:20px;height:20px;line-height:20px;vertical-align:middle}.mtx-grid-column-pin-option-text{padding:0 8px;vertical-align:middle}.mtx-grid-column-drag-handle-icon:hover{cursor:move}.mtx-grid-column-menu-item-label.mat-mdc-checkbox .mat-mdc-checkbox-touch-target{width:100%;height:100%}
`],encapsulation:2})}};(class t extends Ai{getColumnCssClass(n){return`mat-column-${n}`}static{this.ɵfac=(()=>{let n;return function(i){return(n||(n=hv(t)))(i||t)}})()}static{this.ɵprov=O$1({token:t,factory:t.ɵfac})}});var ir=[$t,Xe,Le,{provide:rt,useClass:zi}];var nr=[...ir,Kn];[...ir];var $i=class extends be{getTableHeight(){let n=this.elementRef.nativeElement,e=n.parentNode;return e.classList.contains(`mat-table-container`)?e.offsetHeight:n.offsetHeight}};var qi=class t extends $i{constructor(){super(...arguments);this.columnResizeNotifier=p($t);this.elementRef=p(ye);this.eventDispatcher=p(Xe);this.ngZone=p(G);this.notifier=p(Le)}static{this.ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})()}static{this.ɵdir=Me({type:t,selectors:[[`table`,`mat-table`,``,`columnResize`,``]],hostAttrs:[1,`mat-column-resize-table`],features:[CE([...nr,{provide:be,useExisting:t}]),HD]})}};var Qi=class extends Fi{constructor(){super(...arguments);this.minWidthPxInternal=32}getInlineHandleCssClassName(){return`mat-resizable-handle`}getOverlayHandleComponentType(){return Pi}};var ar={class:`mat-resizable`};var Ui=class t extends Qi{constructor(){super(...arguments);this.columnDef=p(Te);this.columnResize=p(be);this.directionality=p(wO);this.elementRef=p(ye);this.eventDispatcher=p(Xe);this.injector=p(ne);this.ngZone=p(G);this.overlay=p(ei$1);this.resizeNotifier=p(Le);this.resizeStrategy=p(ct);this.styleScheduler=p(rt);this.viewContainerRef=p(Vn$1);this.changeDetectorRef=p(Lr$1);this.document=p(B);this.isResizable=!0}get resizableClass(){return this.isResizable?ar.class:``}get resizable(){return this.isResizable}set resizable(e){this.isResizable=e==null||e===``||e}static{this.ɵfac=(()=>{let e;return function(a){return(e||(e=hv(t)))(a||t)}})()}static{this.ɵdir=Me({type:t,selectors:[[`mat-header-cell`,`resizable`,``],[`th`,`mat-header-cell`,``,`resizable`,``]],hostVars:2,hostBindings:function(i,a){i&2&&BN(a.resizableClass)},inputs:{minWidthPx:[0,`matResizableMinWidthPx`,`minWidthPx`],maxWidthPx:[0,`matResizableMaxWidthPx`,`maxWidthPx`],resizable:`resizable`},features:[HD]})}};var Ki=class t{constructor(){this._opened=!1;this.openedChange=new ue;this.toggleChange=new ue}get opened(){return this._opened}set opened(n){this._opened=n,this.openedChange.emit(n)}set expandableRow(n){n!==this._row&&(this._row=n)}set template(n){n!==this._tplRef&&(this._tplRef=n)}onClick(n){n.preventDefault(),n.stopPropagation(),this.toggle()}toggle(){this.opened=!this.opened,this.toggleChange.emit(this)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵdir=Me({type:t,selectors:[[``,`mtx-grid-expansion-toggle`,``]],hostVars:2,hostBindings:function(e,i){e&1&&Gc$1(`click`,function(o){return i.onClick(o)}),e&2&&qc$1(`expanded`,i.opened)},inputs:{opened:`opened`,expandableRow:`expandableRow`,template:[0,`expansionRowTpl`,`template`]},outputs:{openedChange:`openedChange`,toggleChange:`toggleChange`}})}};var Xi=class t{constructor(){this.ctrlKeyPressed=!1;this.shiftKeyPressed=!1;this._selected=!1;this.cellSelectable=!0;this.cellSelectedChange=new ue}get selected(){return this._selected}onClick(n){this.ctrlKeyPressed=n.ctrlKey,this.shiftKeyPressed=n.shiftKey,this.cellSelectable&&this.select()}select(){this._selected=!0,this.cellSelectedChange.emit(this)}deselect(){this._selected=!1,this.cellSelectedChange.emit(this)}toggle(){this._selected=!this._selected,this.cellSelectedChange.emit(this)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵdir=Me({type:t,selectors:[[``,`mtx-grid-selectable-cell`,``]],hostVars:2,hostBindings:function(e,i){e&1&&Gc$1(`click`,function(o){return i.onClick(o)}),e&2&&qc$1(`selected`,i.selected)},inputs:{cellSelectable:`cellSelectable`},outputs:{cellSelectedChange:`cellSelectedChange`}})}};var _l=[`tableContainer`];var xt=(t,n)=>({$implicit:t,colDef:n});var Kt=(t,n,e,i)=>({$implicit:t,rowData:n,index:e,colDef:i});var or=(t,n,e)=>({$implicit:t,colDef:n,data:e});var rr=(t,n,e)=>({$implicit:t,colData:n,colDef:e});var cr=()=>[`MtxGridExpansionColumnDef`];var lr=(t,n,e,i)=>({$implicit:t,rowData:n,index:e,expanded:i});var sr=(t,n)=>n.field;function fl(t,n){t&1&&(Sc$1(0,`div`,2),zc$1(1,`mat-progress-bar`,16),Dh())}function yl(t,n){}function vl(t,n){if(t&1&&zD(0,yl,0,0,`ng-template`,14),t&2){let e=DN(2);ZD(`ngTemplateOutlet`,e.toolbarTemplate)}}function bl(t,n){if(t&1&&(Sc$1(0,`div`,20),YN(1),Dh()),t&2){let e=DN(3);iT(),vE(e.toolbarTitle)}}function xl(t,n){if(t&1&&tN(0,bl,2,1,`div`,20),t&2){let e=DN(2);rN(e.toolbarTitle?0:-1)}}function Cl(t,n){if(t&1){let e=hN();Sc$1(0,`mtx-grid-column-menu`,21),Gc$1(`columnChange`,function(a){Lm(e);let o=DN(2);return Pm(o._onColumnChange(a))}),Dh()}if(t&2){let e=DN(2);ZD(`columns`,e.columns)(`buttonText`,e.columnMenuButtonText)(`buttonType`,e.columnMenuButtonType)(`buttonColor`,e.columnMenuButtonColor)(`buttonClass`,e.columnMenuButtonClass)(`buttonIcon`,e.columnMenuButtonIcon)(`buttonFontIcon`,e.columnMenuButtonFontIcon)(`buttonSvgIcon`,e.columnMenuButtonSvgIcon)(`selectable`,e.columnHideable)(`selectableChecked`,e.columnHideableChecked)(`sortable`,e.columnSortable)(`pinnable`,e.columnPinnable)(`showHeader`,e.showColumnMenuHeader)(`headerText`,e.columnMenuHeaderText)(`headerTemplate`,e.columnMenuHeaderTemplate)(`showFooter`,e.showColumnMenuFooter)(`footerText`,e.columnMenuFooterText)(`footerTemplate`,e.columnMenuFooterTemplate)(`pinOptions`,e.columnPinOptions)}}function wl(t,n){if(t&1&&(Sc$1(0,`div`,3)(1,`div`,17),tN(2,vl,1,1,null,14)(3,xl,1,1),Dh(),Sc$1(4,`div`,18),tN(5,Cl,1,19,`mtx-grid-column-menu`,19),Dh()()),t&2){let e=DN();iT(2),rN(e.toolbarTemplate?2:3),iT(3),rN(e.showColumnMenuButton?5:-1)}}function Sl(t,n){if(t&1){let e=hN();Sc$1(0,`mat-checkbox`,33),Gc$1(`change`,function(a){Lm(e);let o=DN(4);return Pm(a?o._toggleMasterCheckbox():null)}),Dh()}if(t&2){let e=DN(4);ZD(`checked`,e.rowSelection.hasValue()&&e._isAllSelected())(`indeterminate`,e.rowSelection.hasValue()&&!e._isAllSelected())}}function Ml(t,n){if(t&1&&(Sc$1(0,`th`,31),tN(1,Sl,1,2,`mat-checkbox`,32),Dh()),t&2){let e=DN(3);iT(),rN(e.multiSelectable?1:-1)}}function kl(t,n){if(t&1){let e=hN();Sc$1(0,`mat-checkbox`,36),Gc$1(`click`,function(a){return a.stopPropagation()})(`change`,function(a){Lm(e);let o=DN().$implicit,c=DN(3);return Pm(a?c._toggleNormalCheckbox(o):null)}),Dh()}if(t&2){let e=DN(),i=e.$implicit,a=e.index,o=e.dataIndex,c=DN(3);ZD(`disabled`,c.rowSelectionFormatter.disabled&&c.rowSelectionFormatter.disabled(i,c._getIndex(a,o)))(`checked`,c.rowSelection.isSelected(i))}}function Dl(t,n){if(t&1&&(Sc$1(0,`td`,34),tN(1,kl,1,2,`mat-checkbox`,35),Dh()),t&2){let e=n.$implicit,i=n.index,a=n.dataIndex,o=DN(3);iT(),rN(o.rowSelectionFormatter.hideCheckbox&&o.rowSelectionFormatter.hideCheckbox(e,o._getIndex(i,a))?-1:1)}}function Tl(t,n){t&1&&zc$1(0,`td`,37)}function Rl(t,n){t&1&&(bh(0,23),zD(1,Ml,2,1,`th`,28)(2,Dl,2,1,`td`,29)(3,Tl,1,0,`td`,30),_h())}function Nl(t,n){}function Il(t,n){if(t&1&&zD(0,Nl,0,0,`ng-template`,43),t&2){let e=DN(2).$implicit,i=DN(2);ZD(`ngTemplateOutlet`,i.headerTemplate)(`ngTemplateOutletContext`,sA(2,xt,e,e))}}function El(t,n){}function zl(t,n){if(t&1&&zD(0,El,0,0,`ng-template`,43),t&2){let e=DN(3).$implicit,i=DN(2);ZD(`ngTemplateOutlet`,i.headerTemplate[e.field])(`ngTemplateOutletContext`,sA(2,xt,e,e))}}function Al(t,n){t&1&&zc$1(0,`span`,45)}function Fl(t,n){t&1&&(Km(),Sc$1(0,`svg`,46),zc$1(1,`path`,47),Dh())}function Ol(t,n){}function Pl(t,n){if(t&1&&(Sc$1(0,`div`,44),tN(1,Al,1,0,`span`,45),Sc$1(2,`span`),YN(3),dA(4,`toObservable`),dA(5,`async`),Dh(),tN(6,Fl,2,0,`:svg:svg`,46),Dh(),zD(7,Ol,0,0,`ng-template`,43)),t&2){let e=DN(3).$implicit,i=DN(2),a=CN(16);ZD(`mat-sort-header`,e.sortProp?.id||e.field)(`disabled`,!e.sortable)(`disableClear`,e.sortProp?.disableClear??i.sortDisableClear)(`arrowPosition`,e.sortProp==null?null:e.sortProp.arrowPosition)(`start`,e.sortProp==null?null:e.sortProp.start),iT(),rN(e.showExpand?1:-1),iT(2),vE(hA(5,12,hA(4,10,e.header))),iT(3),rN(e.sortable?6:-1),iT(),ZD(`ngTemplateOutlet`,a)(`ngTemplateOutletContext`,sA(14,xt,i.headerExtraTemplate,e))}}function Bl(t,n){if(t&1&&(tN(0,zl,1,5,null,43),dA(1,`isTemplateRef`),vh(2,Pl,8,17)),t&2){let e=DN(2).$implicit,i=DN(2);rN(hA(1,1,i.headerTemplate==null?null:i.headerTemplate[e.field])?0:2)}}function Gl(t,n){if(t&1&&(Sc$1(0,`th`,41),dA(1,`colClass`),Sc$1(2,`div`,42),tN(3,Il,1,5,null,43),dA(4,`isTemplateRef`),vh(5,Bl,3,3),Dh()()),t&2){let e=DN().$implicit,i=DN(2);BN(hA(1,15,e)),uE(`width`,e.width)(`min-width`,e.width)(`left`,e.left)(`right`,e.right),qc$1(`mat-table-sticky-left`,e.pinned===`left`)(`mat-table-sticky-right`,e.pinned===`right`),iT(3),rN(hA(4,17,i.headerTemplate)?3:5)}}function Hl(t,n){}function Ll(t,n){if(t&1&&zD(0,Hl,0,0,`ng-template`,43),t&2){let e=DN(),i=e.$implicit,a=e.index,o=e.dataIndex,c=DN().$implicit,l=DN(2);ZD(`ngTemplateOutlet`,l.cellTemplate)(`ngTemplateOutletContext`,cA(2,Kt,i,i,l._getIndex(a,o),c))}}function Vl(t,n){}function jl(t,n){if(t&1&&zD(0,Vl,0,0,`ng-template`,43),t&2){let e=DN(2),i=e.$implicit,a=e.index,o=e.dataIndex,c=DN().$implicit,l=DN(2);ZD(`ngTemplateOutlet`,l.cellTemplate[c.field])(`ngTemplateOutletContext`,cA(2,Kt,i,i,l._getIndex(a,o),c))}}function Wl(t,n){}function $l(t,n){if(t&1&&zD(0,Wl,0,0,`ng-template`,43),t&2){let e=DN(3),i=e.$implicit,a=e.index,o=e.dataIndex,c=DN().$implicit,l=DN(2);ZD(`ngTemplateOutlet`,c.cellTemplate)(`ngTemplateOutletContext`,cA(2,Kt,i,i,l._getIndex(a,o),c))}}function ql(t,n){if(t&1){let e=hN();Sc$1(0,`button`,51),bE(`openedChange`,function(a){Lm(e);let o=DN(4).dataIndex,c=DN(3);return JN(c.expansionRowStates[o].expanded,a)||(c.expansionRowStates[o].expanded=a),Pm(a)}),Gc$1(`toggleChange`,function(a){Lm(e);let o=DN(4),c=o.$implicit,l=o.dataIndex,d=DN().$implicit,x=DN(2);return Pm(x._onExpansionChange(a,c,d,l))}),Km(),Sc$1(1,`svg`,52),zc$1(2,`path`,53),Dh()()}if(t&2){let e=DN(4).dataIndex,i=DN(3);IE(`opened`,i.expansionRowStates[e].expanded)}}function Ql(t,n){if(t&1){let e=hN();tN(0,ql,3,1,`button`,49),Sc$1(1,`mtx-grid-cell`,50),Gc$1(`rowDataChange`,function(a){Lm(e);let o=DN(6);return Pm(o._onRowDataChange(a))}),Dh()}if(t&2){let e=DN(3).$implicit,i=DN().$implicit,a=DN(2);rN(i.showExpand?0:-1),iT(),ZD(`rowData`,e)(`colDef`,i)(`placeholder`,a.emptyValuePlaceholder)}}function Ul(t,n){if(t&1&&tN(0,$l,1,7,null,43)(1,Ql,2,4),t&2){let e=DN(3).$implicit;rN(e.cellTemplate?0:1)}}function Kl(t,n){if(t&1&&(tN(0,jl,1,7,null,43),dA(1,`isTemplateRef`),vh(2,Ul,2,1)),t&2){let e=DN(2).$implicit,i=DN(2);rN(hA(1,1,i.cellTemplate==null?null:i.cellTemplate[e.field])?0:2)}}function Xl(t,n){if(t&1){let e=hN();Sc$1(0,`td`,48),dA(1,`colClass`),Gc$1(`cellSelectedChange`,function(a){let o=Lm(e).$implicit,c=DN().$implicit,l=DN(2);return Pm(l._selectCell(a,o,c))}),tN(2,Ll,1,7,null,43),dA(3,`isTemplateRef`),vh(4,Kl,3,3),Dh()}if(t&2){let e=n.$implicit,i=DN().$implicit,a=DN(2);BN(mA(1,16,i,e,a.rowChangeRecord,a.rowChangeRecord==null?null:a.rowChangeRecord.currentValue)),uE(`width`,i.width)(`min-width`,i.width)(`left`,i.left)(`right`,i.right),qc$1(`mat-table-sticky-left`,i.pinned===`left`)(`mat-table-sticky-right`,i.pinned===`right`),ZD(`cellSelectable`,a.cellSelectable),iT(2),rN(hA(3,21,a.cellTemplate)?2:4)}}function Zl(t,n){t&1&&zc$1(0,`span`,45)}function Yl(t,n){}function Jl(t,n){if(t&1&&zD(0,Yl,0,0,`ng-template`,43),t&2){let e=DN(2).$implicit,i=DN(2);ZD(`ngTemplateOutlet`,i.summaryTemplate)(`ngTemplateOutletContext`,aA(2,or,e,e,i.data))}}function es(t,n){}function ts(t,n){if(t&1&&zD(0,es,0,0,`ng-template`,43),t&2){let e=DN(3).$implicit,i=DN(2);ZD(`ngTemplateOutlet`,i.summaryTemplate[e.field])(`ngTemplateOutletContext`,aA(2,rr,i._getColData(i.data,e),i._getColData(i.data,e),e))}}function is(t,n){if(t&1&&zc$1(0,`mtx-grid-cell`,55),t&2){let e=DN(3).$implicit,i=DN(2);ZD(`summary`,!0)(`data`,i.data)(`colDef`,e)(`placeholder`,i.emptyValuePlaceholder)}}function ns(t,n){if(t&1&&(tN(0,ts,1,6,null,43),dA(1,`isTemplateRef`),vh(2,is,1,4,`mtx-grid-cell`,55)),t&2){let e=DN(2).$implicit,i=DN(2);rN(hA(1,1,i.summaryTemplate==null?null:i.summaryTemplate[e.field])?0:2)}}function as(t,n){if(t&1&&(Sc$1(0,`td`,54),tN(1,Zl,1,0,`span`,45),tN(2,Jl,1,6,null,43),dA(3,`isTemplateRef`),vh(4,ns,3,3),Dh()),t&2){let e=DN().$implicit,i=DN(2);uE(`width`,e.width)(`min-width`,e.width)(`left`,e.left)(`right`,e.right),qc$1(`mat-table-sticky-left`,e.pinned===`left`)(`mat-table-sticky-right`,e.pinned===`right`),iT(),rN(e.showExpand?1:-1),iT(),rN(hA(3,14,i.summaryTemplate)?2:4)}}function os(t,n){if(t&1&&(bh(0,24),zD(1,Gl,6,19,`th`,38)(2,Xl,5,23,`td`,39)(3,as,5,16,`td`,40),_h()),t&2){let e=n.$implicit;ZD(`matColumnDef`,e.field)(`sticky`,e.pinned===`left`)(`stickyEnd`,e.pinned===`right`)}}function rs(t,n){t&1&&zc$1(0,`tr`,25)}function cs(t,n){if(t&1&&zD(0,rs,1,0,`tr`,56),t&2){let e=DN(2);ZD(`matHeaderRowDef`,e.displayedColumns)(`matHeaderRowDefSticky`,!0)}}function ls(t,n){if(t&1){let e=hN();Sc$1(0,`tr`,58),dA(1,`rowClass`),Gc$1(`click`,function(a){let o=Lm(e),c=o.$implicit,l=o.index,d=o.dataIndex,x=DN(3);return Pm(x._selectRow(a,c,x._getIndex(l,d)))})(`contextmenu`,function(a){let o=Lm(e),c=o.$implicit,l=o.index,d=o.dataIndex,x=DN(3);return Pm(x._contextmenu(a,c,x._getIndex(l,d)))}),Dh()}if(t&2){let e=n.$implicit,i=n.index,a=n.dataIndex,o=DN(3);BN(mA(1,4,e,i,a,o.rowClassFormatter)),qc$1(`selected`,o.rowSelection.isSelected(e))}}function ss(t,n){if(t&1&&zD(0,ls,2,9,`tr`,57),t&2){let e=DN(2);ZD(`matRowDefColumns`,e.displayedColumns)}}function ds(t,n){t&1&&zc$1(0,`tr`,27)}function ms(t,n){if(t&1&&zD(0,ds,1,0,`tr`,59),t&2){let e=DN(2);ZD(`matFooterRowDef`,e.displayedColumns)(`matFooterRowDefSticky`,!0)}}function ps(t,n){}function hs(t,n){if(t&1&&(Sc$1(0,`td`,63)(1,`div`,64)(2,`div`,65),zD(3,ps,0,0,`ng-template`,43),Dh()()()),t&2){let e=n.$implicit,i=n.dataIndex,a=DN(3);ss$1(`colspan`,a.displayedColumns.length),iT(3),ZD(`ngTemplateOutlet`,a.expansionTemplate)(`ngTemplateOutletContext`,cA(3,lr,e,e,i,a.expansionRowStates[i].expanded))}}function us(t,n){if(t&1&&zc$1(0,`tr`,66),t&2){let e=n.dataIndex,i=DN(3);BN(i.expansionRowStates[e].expanded?`expanded`:`collapsed`)}}function gs(t,n){t&1&&(bh(0,60),zD(1,hs,4,8,`td`,61),_h(),zD(2,us,1,2,`tr`,62)),t&2&&(iT(2),ZD(`matRowDefColumns`,oA(1,cr)))}function _s(t,n){if(t&1){let e=hN();Sc$1(0,`table`,22),Gc$1(`matSortChange`,function(a){Lm(e);let o=DN();return Pm(o._onSortChange(a))}),tN(1,Rl,4,0,`ng-container`,23),sN(2,os,4,3,`ng-container`,24,sr),tN(4,cs,1,2,`tr`,25),tN(5,ss,1,1,`tr`,26),tN(6,ms,1,2,`tr`,27),tN(7,gs,3,2),Dh()}if(t&2){let e=DN();qc$1(`mat-table-hover`,e.rowHover)(`mat-table-striped`,e.rowStriped)(`mat-table-expandable`,e.expandable),ZD(`dataSource`,e.dataSource)(`multiTemplateDataRows`,e.expandable)(`matSortActive`,e.sortActive)(`matSortDirection`,e.sortDirection)(`matSortDisableClear`,e.sortDisableClear)(`matSortDisabled`,e.sortDisabled)(`matSortStart`,e.sortStart)(`trackBy`,e.trackBy),iT(),rN(e.rowSelectable&&!e.hideRowSelectionCheckbox?1:-1),iT(),aN(e.columns),iT(2),rN(e.useContentHeaderRowTemplate?-1:4),iT(),rN(e.useContentRowTemplate?-1:5),iT(),rN(e._whetherShowSummary?6:-1),iT(),rN(e.expandable?7:-1)}}function fs(t,n){if(t&1){let e=hN();Sc$1(0,`mat-checkbox`,33),Gc$1(`change`,function(a){Lm(e);let o=DN(4);return Pm(a?o._toggleMasterCheckbox():null)}),Dh()}if(t&2){let e=DN(4);ZD(`checked`,e.rowSelection.hasValue()&&e._isAllSelected())(`indeterminate`,e.rowSelection.hasValue()&&!e._isAllSelected())}}function ys(t,n){if(t&1&&(Sc$1(0,`th`,31),tN(1,fs,1,2,`mat-checkbox`,32),Dh()),t&2){let e=DN(3);iT(),rN(e.multiSelectable?1:-1)}}function vs(t,n){if(t&1){let e=hN();Sc$1(0,`mat-checkbox`,36),Gc$1(`click`,function(a){return a.stopPropagation()})(`change`,function(a){Lm(e);let o=DN().$implicit,c=DN(3);return Pm(a?c._toggleNormalCheckbox(o):null)}),Dh()}if(t&2){let e=DN(),i=e.$implicit,a=e.index,o=e.dataIndex,c=DN(3);ZD(`disabled`,c.rowSelectionFormatter.disabled&&c.rowSelectionFormatter.disabled(i,c._getIndex(a,o)))(`checked`,c.rowSelection.isSelected(i))}}function bs(t,n){if(t&1&&(Sc$1(0,`td`,34),tN(1,vs,1,2,`mat-checkbox`,35),Dh()),t&2){let e=n.$implicit,i=n.index,a=n.dataIndex,o=DN(3);iT(),rN(o.rowSelectionFormatter.hideCheckbox&&o.rowSelectionFormatter.hideCheckbox(e,o._getIndex(i,a))?-1:1)}}function xs(t,n){t&1&&zc$1(0,`td`,37)}function Cs(t,n){t&1&&(bh(0,23),zD(1,ys,2,1,`th`,28)(2,bs,2,1,`td`,29)(3,xs,1,0,`td`,30),_h())}function ws(t,n){}function Ss(t,n){if(t&1&&zD(0,ws,0,0,`ng-template`,43),t&2){let e=DN(2).$implicit,i=DN(2);ZD(`ngTemplateOutlet`,i.headerTemplate)(`ngTemplateOutletContext`,sA(2,xt,e,e))}}function Ms(t,n){}function ks(t,n){if(t&1&&zD(0,Ms,0,0,`ng-template`,43),t&2){let e=DN(3).$implicit,i=DN(2);ZD(`ngTemplateOutlet`,i.headerTemplate[e.field])(`ngTemplateOutletContext`,sA(2,xt,e,e))}}function Ds(t,n){t&1&&zc$1(0,`span`,45)}function Ts(t,n){t&1&&(Km(),Sc$1(0,`svg`,46),zc$1(1,`path`,47),Dh())}function Rs(t,n){}function Ns(t,n){if(t&1&&(Sc$1(0,`div`,44),tN(1,Ds,1,0,`span`,45),Sc$1(2,`span`),YN(3),dA(4,`toObservable`),dA(5,`async`),Dh(),tN(6,Ts,2,0,`:svg:svg`,46),Dh(),zD(7,Rs,0,0,`ng-template`,43)),t&2){let e=DN(3).$implicit,i=DN(2),a=CN(16);ZD(`mat-sort-header`,e.sortProp?.id||e.field)(`disabled`,!e.sortable)(`disableClear`,e.sortProp?.disableClear??i.sortDisableClear)(`arrowPosition`,e.sortProp==null?null:e.sortProp.arrowPosition)(`start`,e.sortProp==null?null:e.sortProp.start),iT(),rN(e.showExpand?1:-1),iT(2),vE(hA(5,12,hA(4,10,e.header))),iT(3),rN(e.sortable?6:-1),iT(),ZD(`ngTemplateOutlet`,a)(`ngTemplateOutletContext`,sA(14,xt,i.headerExtraTemplate,e))}}function Is(t,n){if(t&1&&(tN(0,ks,1,5,null,43),dA(1,`isTemplateRef`),vh(2,Ns,8,17)),t&2){let e=DN(2).$implicit,i=DN(2);rN(hA(1,1,i.headerTemplate==null?null:i.headerTemplate[e.field])?0:2)}}function Es(t,n){if(t&1&&(Sc$1(0,`th`,71),dA(1,`colClass`),Sc$1(2,`div`,42),tN(3,Ss,1,5,null,43),dA(4,`isTemplateRef`),vh(5,Is,3,3),Dh()()),t&2){let e=DN().$implicit,i=DN(2);BN(hA(1,16,e)),uE(`width`,e.width)(`left`,e.left)(`right`,e.right),qc$1(`mat-table-sticky-left`,e.pinned===`left`)(`mat-table-sticky-right`,e.pinned===`right`),ZD(`resizable`,e.resizable)(`matResizableMinWidthPx`,e.minWidth)(`matResizableMaxWidthPx`,e.maxWidth),iT(3),rN(hA(4,18,i.headerTemplate)?3:5)}}function zs(t,n){}function As(t,n){if(t&1&&zD(0,zs,0,0,`ng-template`,43),t&2){let e=DN(),i=e.$implicit,a=e.index,o=e.dataIndex,c=DN().$implicit,l=DN(2);ZD(`ngTemplateOutlet`,l.cellTemplate)(`ngTemplateOutletContext`,cA(2,Kt,i,i,l._getIndex(a,o),c))}}function Fs(t,n){}function Os(t,n){if(t&1&&zD(0,Fs,0,0,`ng-template`,43),t&2){let e=DN(2),i=e.$implicit,a=e.index,o=e.dataIndex,c=DN().$implicit,l=DN(2);ZD(`ngTemplateOutlet`,l.cellTemplate[c.field])(`ngTemplateOutletContext`,cA(2,Kt,i,i,l._getIndex(a,o),c))}}function Ps(t,n){}function Bs(t,n){if(t&1&&zD(0,Ps,0,0,`ng-template`,43),t&2){let e=DN(3),i=e.$implicit,a=e.index,o=e.dataIndex,c=DN().$implicit,l=DN(2);ZD(`ngTemplateOutlet`,c.cellTemplate)(`ngTemplateOutletContext`,cA(2,Kt,i,i,l._getIndex(a,o),c))}}function Gs(t,n){if(t&1){let e=hN();Sc$1(0,`button`,51),bE(`openedChange`,function(a){Lm(e);let o=DN(4).dataIndex,c=DN(3);return JN(c.expansionRowStates[o].expanded,a)||(c.expansionRowStates[o].expanded=a),Pm(a)}),Gc$1(`toggleChange`,function(a){Lm(e);let o=DN(4),c=o.$implicit,l=o.dataIndex,d=DN().$implicit,x=DN(2);return Pm(x._onExpansionChange(a,c,d,l))}),Km(),Sc$1(1,`svg`,52),zc$1(2,`path`,53),Dh()()}if(t&2){let e=DN(4).dataIndex,i=DN(3);IE(`opened`,i.expansionRowStates[e].expanded)}}function Hs(t,n){if(t&1){let e=hN();tN(0,Gs,3,1,`button`,49),Sc$1(1,`mtx-grid-cell`,50),Gc$1(`rowDataChange`,function(a){Lm(e);let o=DN(6);return Pm(o._onRowDataChange(a))}),Dh()}if(t&2){let e=DN(3).$implicit,i=DN().$implicit,a=DN(2);rN(i.showExpand?0:-1),iT(),ZD(`rowData`,e)(`colDef`,i)(`placeholder`,a.emptyValuePlaceholder)}}function Ls(t,n){if(t&1&&tN(0,Bs,1,7,null,43)(1,Hs,2,4),t&2){let e=DN(3).$implicit;rN(e.cellTemplate?0:1)}}function Vs(t,n){if(t&1&&(tN(0,Os,1,7,null,43),dA(1,`isTemplateRef`),vh(2,Ls,2,1)),t&2){let e=DN(2).$implicit,i=DN(2);rN(hA(1,1,i.cellTemplate==null?null:i.cellTemplate[e.field])?0:2)}}function js(t,n){if(t&1){let e=hN();Sc$1(0,`td`,48),dA(1,`colClass`),Gc$1(`cellSelectedChange`,function(a){let o=Lm(e).$implicit,c=DN().$implicit,l=DN(2);return Pm(l._selectCell(a,o,c))}),tN(2,As,1,7,null,43),dA(3,`isTemplateRef`),vh(4,Vs,3,3),Dh()}if(t&2){let e=n.$implicit,i=DN().$implicit,a=DN(2);BN(mA(1,14,i,e,a.rowChangeRecord,a.rowChangeRecord==null?null:a.rowChangeRecord.currentValue)),uE(`width`,i.width)(`left`,i.left)(`right`,i.right),qc$1(`mat-table-sticky-left`,i.pinned===`left`)(`mat-table-sticky-right`,i.pinned===`right`),ZD(`cellSelectable`,a.cellSelectable),iT(2),rN(hA(3,19,a.cellTemplate)?2:4)}}function Ws(t,n){t&1&&zc$1(0,`span`,45)}function $s(t,n){}function qs(t,n){if(t&1&&zD(0,$s,0,0,`ng-template`,43),t&2){let e=DN(2).$implicit,i=DN(2);ZD(`ngTemplateOutlet`,i.summaryTemplate)(`ngTemplateOutletContext`,aA(2,or,e,e,i.data))}}function Qs(t,n){}function Us(t,n){if(t&1&&zD(0,Qs,0,0,`ng-template`,43),t&2){let e=DN(3).$implicit,i=DN(2);ZD(`ngTemplateOutlet`,i.summaryTemplate[e.field])(`ngTemplateOutletContext`,aA(2,rr,i._getColData(i.data,e),i._getColData(i.data,e),e))}}function Ks(t,n){if(t&1&&zc$1(0,`mtx-grid-cell`,55),t&2){let e=DN(3).$implicit,i=DN(2);ZD(`summary`,!0)(`data`,i.data)(`colDef`,e)(`placeholder`,i.emptyValuePlaceholder)}}function Xs(t,n){if(t&1&&(tN(0,Us,1,6,null,43),dA(1,`isTemplateRef`),vh(2,Ks,1,4,`mtx-grid-cell`,55)),t&2){let e=DN(2).$implicit,i=DN(2);rN(hA(1,1,i.summaryTemplate==null?null:i.summaryTemplate[e.field])?0:2)}}function Zs(t,n){if(t&1&&(Sc$1(0,`td`,54),tN(1,Ws,1,0,`span`,45),tN(2,qs,1,6,null,43),dA(3,`isTemplateRef`),vh(4,Xs,3,3),Dh()),t&2){let e=DN().$implicit,i=DN(2);uE(`width`,e.width)(`left`,e.left)(`right`,e.right),qc$1(`mat-table-sticky-left`,e.pinned===`left`)(`mat-table-sticky-right`,e.pinned===`right`),iT(),rN(e.showExpand?1:-1),iT(),rN(hA(3,12,i.summaryTemplate)?2:4)}}function Ys(t,n){if(t&1&&(bh(0,24),zD(1,Es,6,20,`th`,68)(2,js,5,21,`td`,69)(3,Zs,5,14,`td`,70),_h()),t&2){let e=n.$implicit;ZD(`matColumnDef`,e.field)(`sticky`,e.pinned===`left`)(`stickyEnd`,e.pinned===`right`)}}function Js(t,n){t&1&&zc$1(0,`tr`,25)}function ed(t,n){if(t&1&&zD(0,Js,1,0,`tr`,56),t&2){let e=DN(2);ZD(`matHeaderRowDef`,e.displayedColumns)(`matHeaderRowDefSticky`,!0)}}function td(t,n){if(t&1){let e=hN();Sc$1(0,`tr`,58),dA(1,`rowClass`),Gc$1(`click`,function(a){let o=Lm(e),c=o.$implicit,l=o.index,d=o.dataIndex,x=DN(3);return Pm(x._selectRow(a,c,x._getIndex(l,d)))})(`contextmenu`,function(a){let o=Lm(e),c=o.$implicit,l=o.index,d=o.dataIndex,x=DN(3);return Pm(x._contextmenu(a,c,x._getIndex(l,d)))}),Dh()}if(t&2){let e=n.$implicit,i=n.index,a=n.dataIndex,o=DN(3);BN(mA(1,4,e,i,a,o.rowClassFormatter)),qc$1(`selected`,o.rowSelection.isSelected(e))}}function id(t,n){if(t&1&&zD(0,td,2,9,`tr`,57),t&2){let e=DN(2);ZD(`matRowDefColumns`,e.displayedColumns)}}function nd(t,n){t&1&&zc$1(0,`tr`,27)}function ad(t,n){if(t&1&&zD(0,nd,1,0,`tr`,59),t&2){let e=DN(2);ZD(`matFooterRowDef`,e.displayedColumns)(`matFooterRowDefSticky`,!0)}}function od(t,n){}function rd(t,n){if(t&1&&(Sc$1(0,`td`,63)(1,`div`,64)(2,`div`,65),zD(3,od,0,0,`ng-template`,43),Dh()()()),t&2){let e=n.$implicit,i=n.dataIndex,a=DN(3);ss$1(`colspan`,a.displayedColumns.length),iT(3),ZD(`ngTemplateOutlet`,a.expansionTemplate)(`ngTemplateOutletContext`,cA(3,lr,e,e,i,a.expansionRowStates[i].expanded))}}function cd(t,n){if(t&1&&zc$1(0,`tr`,66),t&2){let e=n.dataIndex,i=DN(3);BN(i.expansionRowStates[e].expanded?`expanded`:`collapsed`)}}function ld(t,n){t&1&&(bh(0,60),zD(1,rd,4,8,`td`,61),_h(),zD(2,cd,1,2,`tr`,62)),t&2&&(iT(2),ZD(`matRowDefColumns`,oA(1,cr)))}function sd(t,n){if(t&1){let e=hN();Sc$1(0,`table`,67),Gc$1(`matSortChange`,function(a){Lm(e);let o=DN();return Pm(o._onSortChange(a))}),tN(1,Cs,4,0,`ng-container`,23),sN(2,Ys,4,3,`ng-container`,24,sr),tN(4,ed,1,2,`tr`,25),tN(5,id,1,1,`tr`,26),tN(6,ad,1,2,`tr`,27),tN(7,ld,3,2),Dh()}if(t&2){let e=DN();qc$1(`mat-table-hover`,e.rowHover)(`mat-table-striped`,e.rowStriped)(`mat-table-expandable`,e.expandable),ZD(`dataSource`,e.dataSource)(`multiTemplateDataRows`,e.expandable)(`matSortActive`,e.sortActive)(`matSortDirection`,e.sortDirection)(`matSortDisableClear`,e.sortDisableClear)(`matSortDisabled`,e.sortDisabled)(`matSortStart`,e.sortStart)(`trackBy`,e.trackBy),iT(),rN(e.rowSelectable&&!e.hideRowSelectionCheckbox?1:-1),iT(),aN(e.columns),iT(2),rN(e.useContentHeaderRowTemplate?-1:4),iT(),rN(e.useContentRowTemplate?-1:5),iT(),rN(e._whetherShowSummary?6:-1),iT(),rN(e.expandable?7:-1)}}function dd(t,n){}function md(t,n){if(t&1&&zD(0,dd,0,0,`ng-template`,14),t&2){let e=DN(2);ZD(`ngTemplateOutlet`,e.noResultTemplate)}}function pd(t,n){if(t&1&&YN(0),t&2){let e=DN(2);Sh(` `,e.noResultText,` `)}}function hd(t,n){if(t&1&&(Sc$1(0,`div`,9),tN(1,md,1,1,null,14)(2,pd,1,1),Dh()),t&2){let e=DN();iT(),rN(e.noResultTemplate?1:2)}}function ud(t,n){}function gd(t,n){if(t&1&&zD(0,ud,0,0,`ng-template`,14),t&2){let e=DN(2);ZD(`ngTemplateOutlet`,e.sidebarTemplate)}}function _d(t,n){if(t&1&&(Sc$1(0,`div`,10),tN(1,gd,1,1,null,14),Dh()),t&2){let e=DN();iT(),rN(e.sidebarTemplate?1:-1)}}function fd(t,n){}function yd(t,n){if(t&1&&zD(0,fd,0,0,`ng-template`,14),t&2){let e=DN(2);ZD(`ngTemplateOutlet`,e.statusbarTemplate)}}function vd(t,n){if(t&1&&(Sc$1(0,`div`,12),tN(1,yd,1,1,null,14),Dh()),t&2){let e=DN();iT(),rN(e.statusbarTemplate?1:-1)}}function bd(t,n){}function xd(t,n){if(t&1&&zD(0,bd,0,0,`ng-template`,14),t&2){let e=DN();ZD(`ngTemplateOutlet`,e.paginationTemplate)}}function Cd(t,n){if(t&1){let e=hN();Sc$1(0,`mat-paginator`,72),Gc$1(`page`,function(a){Lm(e);let o=DN();return Pm(o._onPage(a))}),Dh()}if(t&2){let e=DN();qc$1(`mat-paginator-hidden`,!e.showPaginator),ZD(`showFirstLastButtons`,e.showFirstLastButtons)(`length`,e.length)(`pageIndex`,e.pageIndex)(`pageSize`,e.pageSize)(`pageSizeOptions`,e.pageSizeOptions)(`hidePageSize`,e.hidePageSize)(`disabled`,e.pageDisabled)}}function wd(t,n){}function Sd(t,n){if(t&1&&zD(0,wd,0,0,`ng-template`,43),t&2){let e=DN(),i=e.$implicit,a=e.colDef;ZD(`ngTemplateOutlet`,i)(`ngTemplateOutletContext`,sA(2,xt,a,a))}}function Md(t,n){}function kd(t,n){if(t&1&&zD(0,Md,0,0,`ng-template`,43),t&2){let e=DN(2),i=e.$implicit,a=e.colDef;ZD(`ngTemplateOutlet`,i[a.field])(`ngTemplateOutletContext`,sA(2,xt,a,a))}}function Dd(t,n){if(t&1&&(tN(0,kd,1,5,null,43),dA(1,`isTemplateRef`)),t&2){let e=DN(),i=e.$implicit,a=e.colDef;rN(hA(1,1,i==null?null:i[a.field])?0:-1)}}function Td(t,n){if(t&1&&(tN(0,Sd,1,5,null,43),dA(1,`isTemplateRef`),vh(2,Dd,2,3)),t&2){let e=n.$implicit;rN(hA(1,1,e)?0:2)}}var Rd=new D(`mtx-grid-default-options`);var R=class t{constructor(){this._animationsDisabled=T_();this._utils=p(Ze);this._changeDetectorRef=p(Lr$1);this._defaultOptions=p(Rd,{optional:!0});this.dataSource=new oi;this.displayedColumns=[];this.columns=[];this.data=[];this.length=0;this.loading=!1;this.columnResizable=this._defaultOptions?.columnResizable??!1;this.emptyValuePlaceholder=this._defaultOptions?.emptyValuePlaceholder??`--`;this.pageOnFront=this._defaultOptions?.pageOnFront??!0;this.showPaginator=this._defaultOptions?.showPaginator??!0;this.pageDisabled=this._defaultOptions?.pageDisabled??!1;this.showFirstLastButtons=this._defaultOptions?.showFirstLastButtons??!0;this.pageIndex=this._defaultOptions?.pageIndex??0;this.pageSize=this._defaultOptions?.pageSize??10;this.pageSizeOptions=this._defaultOptions?.pageSizeOptions??[10,50,100];this.hidePageSize=this._defaultOptions?.hidePageSize??!1;this.page=new ue;this.sortOnFront=this._defaultOptions?.sortOnFront??!0;this.sortActive=this._defaultOptions?.sortActive??``;this.sortDirection=this._defaultOptions?.sortDirection??``;this.sortDisableClear=this._defaultOptions?.sortDisableClear??!1;this.sortDisabled=this._defaultOptions?.sortDisabled??!1;this.sortStart=this._defaultOptions?.sortStart??`asc`;this.sortChange=new ue;this.rowHover=this._defaultOptions?.rowHover??!1;this.rowStriped=this._defaultOptions?.rowStriped??!1;this.rowClick=new ue;this.rowContextMenu=new ue;this.expansionRowStates=[];this.expandable=!1;this.expansionChange=new ue;this.rowSelection=new d(!0,[]);this.multiSelectable=this._defaultOptions?.multiSelectable??!0;this.multiSelectionWithClick=this._defaultOptions?.multiSelectionWithClick??!1;this.rowSelectable=this._defaultOptions?.rowSelectable??!1;this.hideRowSelectionCheckbox=this._defaultOptions?.hideRowSelectionCheckbox??!1;this.disableRowClickSelection=this._defaultOptions?.disableRowClickSelection??!1;this.rowSelectionFormatter={};this.rowSelected=[];this.rowSelectedChange=new ue;this.cellSelection=[];this.cellSelectable=this._defaultOptions?.cellSelectable??!0;this.cellSelectedChange=new ue;this.showToolbar=this._defaultOptions?.showToolbar??!1;this.toolbarTitle=this._defaultOptions?.toolbarTitle??``;this.columnHideable=this._defaultOptions?.columnHideable??!0;this.columnHideableChecked=this._defaultOptions?.columnHideableChecked??`show`;this.columnSortable=this._defaultOptions?.columnSortable??!0;this.columnPinnable=this._defaultOptions?.columnPinnable??!0;this.columnChange=new ue;this.columnPinOptions=this._defaultOptions?.columnPinOptions??[];this.showColumnMenuButton=this._defaultOptions?.showColumnMenuButton??!0;this.columnMenuButtonText=this._defaultOptions?.columnMenuButtonText??``;this.columnMenuButtonType=this._defaultOptions?.columnMenuButtonType??`outlined`;this.columnMenuButtonColor=this._defaultOptions?.columnMenuButtonColor;this.columnMenuButtonClass=this._defaultOptions?.columnMenuButtonClass??``;this.columnMenuButtonIcon=this._defaultOptions?.columnMenuButtonIcon??``;this.columnMenuButtonFontIcon=this._defaultOptions?.columnMenuButtonFontIcon??``;this.columnMenuButtonSvgIcon=this._defaultOptions?.columnMenuButtonSvgIcon??``;this.showColumnMenuHeader=this._defaultOptions?.showColumnMenuHeader??!1;this.columnMenuHeaderText=this._defaultOptions?.columnMenuHeaderText??`Columns Header`;this.showColumnMenuFooter=this._defaultOptions?.showColumnMenuFooter??!1;this.columnMenuFooterText=this._defaultOptions?.columnMenuFooterText??`Columns Footer`;this.noResultText=this._defaultOptions?.noResultText??`No records found`;this.useContentRowTemplate=!1;this.useContentHeaderRowTemplate=!1;this.useContentFooterRowTemplate=!1;this.showSummary=!1;this.showSidebar=!1;this.showStatusbar=!1}get _hasNoResult(){return(!this.dataSource.data||this.dataSource.data.length===0)&&!this.loading}get _whetherShowSummary(){return this.showSummary}detectChanges(){this._changeDetectorRef.detectChanges()}_getColData(n,e){return this._utils.getColData(n,e)}_isColumnHide(n){return n.hide!==void 0?n.hide:n.show!==void 0?!n.show:!1}ngOnChanges(n){this._countPinnedPosition(),this.displayedColumns=this.columns.filter(e=>!this._isColumnHide(e)).map(e=>e.field),this.showColumnMenuButton&&this.columns.forEach(e=>{e.hide=this._isColumnHide(e),e.show=!e.hide}),this.rowSelectable&&!this.hideRowSelectionCheckbox&&this.displayedColumns.unshift(`MtxGridCheckboxColumnDef`),this.expandable&&(this.expansionRowStates=[],this.data?.forEach(e=>{this.expansionRowStates.push({expanded:!1})})),this.rowSelectable&&(this.rowSelection=new d(this.multiSelectable,this.rowSelected)),this.dataSource=new oi(this.data),this.dataSource.paginator=this.pageOnFront?this.paginator:null,this.dataSource.sort=this.sortOnFront?this.sort:null,n.data&&this.scrollTop(0)}ngAfterViewInit(){this.pageOnFront&&(this.dataSource.paginator=this.paginator),this.sortOnFront&&(this.dataSource.sort=this.sort),this.rowDefs?.length>0&&this.useContentRowTemplate&&this.rowDefs.forEach(n=>this.table.addRowDef(n)),this.headerRowDefs?.length>0&&this.useContentHeaderRowTemplate&&this.headerRowDefs.forEach(n=>this.table.addHeaderRowDef(n)),this.footerRowDefs?.length>0&&this.useContentFooterRowTemplate&&this.footerRowDefs.forEach(n=>this.table.addFooterRowDef(n))}ngOnDestroy(){}_countPinnedPosition(){let n=(a,o)=>a+parseFloat(o.width||`80px`),e=this.columns.filter(a=>a.pinned&&a.pinned===`left`);e.forEach((a,o)=>{a.left=e.slice(0,o).reduce(n,0)+`px`});let i=this.columns.filter(a=>a.pinned&&a.pinned===`right`).reverse();i.forEach((a,o)=>{a.right=i.slice(0,o).reduce(n,0)+`px`})}_getIndex(n,e){return n===void 0?e:n}_onSortChange(n){this.sortChange.emit(n)}_onRowDataChange(n){this.rowChangeRecord=n,this._changeDetectorRef.markForCheck()}_onExpansionChange(n,e,i,a){this.expansionChange.emit({expanded:n.opened,data:e,index:a,column:i})}_selectCell(n,e,i){if(this._selectedCell!==n){let a=this._utils.getCellValue(e,i);this.cellSelection=[],this.cellSelection.push({cellData:a,rowData:e,colDef:i}),this.cellSelectedChange.emit(this.cellSelection),this._selectedCell&&this._selectedCell.deselect()}this._selectedCell=n.selected?n:void 0}_selectRow(n,e,i){this.rowSelectable&&!this.rowSelectionFormatter.disabled?.(e,i)&&!this.rowSelectionFormatter.hideCheckbox?.(e,i)&&!this.disableRowClickSelection&&(!this.multiSelectionWithClick&&!n.ctrlKey&&!n.metaKey&&this.rowSelection.clear(),this._toggleNormalCheckbox(e)),this.rowClick.emit({event:n,rowData:e,index:i})}_isAllSelected(){return this.rowSelection.selected.length===this.dataSource.data.filter((i,a)=>!this.rowSelectionFormatter.disabled?.(i,a)).length}_toggleMasterCheckbox(){this._isAllSelected()?this.rowSelection.clear():this.dataSource.data.forEach((n,e)=>{this.rowSelectionFormatter.disabled?.(n,e)||this.rowSelection.select(n)}),this.rowSelectedChange.emit(this.rowSelection.selected)}_toggleNormalCheckbox(n){this.rowSelection.toggle(n),this.rowSelectedChange.emit(this.rowSelection.selected)}_onColumnChange(n){this.columnChange.emit(n),this.displayedColumns=Object.assign([],this.getDisplayedColumnFields(n)),this.rowSelectable&&!this.hideRowSelectionCheckbox&&this.displayedColumns.unshift(`MtxGridCheckboxColumnDef`)}getDisplayedColumnFields(n){return n.filter(i=>this.columnHideableChecked===`show`?i.show:!i.hide).map(i=>i.field)}toggleExpansion(n){if(!this.expandable)throw new Error("The `expandable` should be set true.");return this.expansionRowStates[n].expanded=!this.expansionRowStates[n].expanded,this.expansionRowStates[n].expanded}_onPage(n){this.pageOnFront&&this.scrollTop(0),this.page.emit(n)}scrollTop(n){if(n==null)return this.tableContainer?.nativeElement.scrollTop;this.tableContainer&&!this.loading&&(this.tableContainer.nativeElement.scrollTop=n)}scrollLeft(n){if(n==null)return this.tableContainer?.nativeElement.scrollLeft;this.tableContainer&&!this.loading&&(this.tableContainer.nativeElement.scrollLeft=n)}_contextmenu(n,e,i){this.rowContextMenu.emit({event:n,rowData:e,index:i})}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`mtx-grid`]],contentQueries:function(e,i,a){if(e&1&&Wc$1(a,qn,4)(a,$n,4)(a,Qn,4),e&2){let o;wh(o=Ch())&&(i.rowDefs=o),wh(o=Ch())&&(i.headerRowDefs=o),wh(o=Ch())&&(i.footerRowDefs=o)}},viewQuery:function(e,i){if(e&1&&nE(Wn,5)(Si,5)(Ni,5)(be,5)(Dt,5)(_l,5),e&2){let a;wh(a=Ch())&&(i.table=a.first),wh(a=Ch())&&(i.paginator=a.first),wh(a=Ch())&&(i.sort=a.first),wh(a=Ch())&&(i.columnResize=a.first),wh(a=Ch())&&(i.columnMenu=a.first),wh(a=Ch())&&(i.tableContainer=a.first)}},hostAttrs:[1,`mtx-grid`],hostVars:2,hostBindings:function(e,i){e&2&&qc$1(`mtx-grid-animations-enabled`,!i._animationsDisabled)},inputs:{displayedColumns:`displayedColumns`,columns:`columns`,data:`data`,length:`length`,loading:[2,`loading`,`loading`,$t$1],trackBy:`trackBy`,columnResizable:[2,`columnResizable`,`columnResizable`,$t$1],emptyValuePlaceholder:`emptyValuePlaceholder`,pageOnFront:[2,`pageOnFront`,`pageOnFront`,$t$1],showPaginator:[2,`showPaginator`,`showPaginator`,$t$1],pageDisabled:[2,`pageDisabled`,`pageDisabled`,$t$1],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,$t$1],pageIndex:`pageIndex`,pageSize:`pageSize`,pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,$t$1],paginationTemplate:`paginationTemplate`,sortOnFront:[2,`sortOnFront`,`sortOnFront`,$t$1],sortActive:`sortActive`,sortDirection:`sortDirection`,sortDisableClear:[2,`sortDisableClear`,`sortDisableClear`,$t$1],sortDisabled:[2,`sortDisabled`,`sortDisabled`,$t$1],sortStart:`sortStart`,rowHover:[2,`rowHover`,`rowHover`,$t$1],rowStriped:[2,`rowStriped`,`rowStriped`,$t$1],expandable:[2,`expandable`,`expandable`,$t$1],expansionTemplate:`expansionTemplate`,multiSelectable:[2,`multiSelectable`,`multiSelectable`,$t$1],multiSelectionWithClick:[2,`multiSelectionWithClick`,`multiSelectionWithClick`,$t$1],rowSelectable:[2,`rowSelectable`,`rowSelectable`,$t$1],hideRowSelectionCheckbox:[2,`hideRowSelectionCheckbox`,`hideRowSelectionCheckbox`,$t$1],disableRowClickSelection:[2,`disableRowClickSelection`,`disableRowClickSelection`,$t$1],rowSelectionFormatter:`rowSelectionFormatter`,rowClassFormatter:`rowClassFormatter`,rowSelected:`rowSelected`,cellSelectable:[2,`cellSelectable`,`cellSelectable`,$t$1],showToolbar:[2,`showToolbar`,`showToolbar`,$t$1],toolbarTitle:`toolbarTitle`,toolbarTemplate:`toolbarTemplate`,columnHideable:[2,`columnHideable`,`columnHideable`,$t$1],columnHideableChecked:`columnHideableChecked`,columnSortable:[2,`columnSortable`,`columnSortable`,$t$1],columnPinnable:[2,`columnPinnable`,`columnPinnable`,$t$1],columnPinOptions:`columnPinOptions`,showColumnMenuButton:[2,`showColumnMenuButton`,`showColumnMenuButton`,$t$1],columnMenuButtonText:`columnMenuButtonText`,columnMenuButtonType:`columnMenuButtonType`,columnMenuButtonColor:`columnMenuButtonColor`,columnMenuButtonClass:`columnMenuButtonClass`,columnMenuButtonIcon:`columnMenuButtonIcon`,columnMenuButtonFontIcon:`columnMenuButtonFontIcon`,columnMenuButtonSvgIcon:`columnMenuButtonSvgIcon`,showColumnMenuHeader:[2,`showColumnMenuHeader`,`showColumnMenuHeader`,$t$1],columnMenuHeaderText:`columnMenuHeaderText`,columnMenuHeaderTemplate:`columnMenuHeaderTemplate`,showColumnMenuFooter:[2,`showColumnMenuFooter`,`showColumnMenuFooter`,$t$1],columnMenuFooterText:`columnMenuFooterText`,columnMenuFooterTemplate:`columnMenuFooterTemplate`,noResultText:`noResultText`,noResultTemplate:`noResultTemplate`,headerTemplate:`headerTemplate`,headerExtraTemplate:`headerExtraTemplate`,cellTemplate:`cellTemplate`,useContentRowTemplate:[2,`useContentRowTemplate`,`useContentRowTemplate`,$t$1],useContentHeaderRowTemplate:[2,`useContentHeaderRowTemplate`,`useContentHeaderRowTemplate`,$t$1],useContentFooterRowTemplate:[2,`useContentFooterRowTemplate`,`useContentFooterRowTemplate`,$t$1],showSummary:[2,`showSummary`,`showSummary`,$t$1],summaryTemplate:`summaryTemplate`,showSidebar:[2,`showSidebar`,`showSidebar`,$t$1],sidebarTemplate:`sidebarTemplate`,showStatusbar:[2,`showStatusbar`,`showStatusbar`,$t$1],statusbarTemplate:`statusbarTemplate`},outputs:{page:`page`,sortChange:`sortChange`,rowClick:`rowClick`,rowContextMenu:`rowContextMenu`,expansionChange:`expansionChange`,rowSelectedChange:`rowSelectedChange`,cellSelectedChange:`cellSelectedChange`,columnChange:`columnChange`},exportAs:[`mtxGrid`],features:[Ut$1],decls:17,vars:9,consts:[[`tableContainer`,``],[`headerExtraTplBase`,``],[1,`mtx-grid-progress`],[1,`mtx-grid-toolbar`],[1,`mtx-grid-main`,`mtx-grid-layout`],[1,`mtx-grid-content`,`mtx-grid-layout`],[1,`mat-table-container`],[`mat-table`,``,`matSort`,``,3,`mat-table-hover`,`mat-table-striped`,`mat-table-expandable`,`dataSource`,`multiTemplateDataRows`,`matSortActive`,`matSortDirection`,`matSortDisableClear`,`matSortDisabled`,`matSortStart`,`trackBy`],[`mat-table`,``,`columnResize`,``,`matSort`,``,3,`mat-table-hover`,`mat-table-striped`,`mat-table-expandable`,`dataSource`,`multiTemplateDataRows`,`matSortActive`,`matSortDirection`,`matSortDisableClear`,`matSortDisabled`,`matSortStart`,`trackBy`],[1,`mtx-grid-no-result`],[1,`mtx-grid-sidebar`],[1,`mtx-grid-footer`],[1,`mtx-grid-statusbar`],[1,`mtx-grid-pagination`],[3,`ngTemplateOutlet`],[3,`mat-paginator-hidden`,`showFirstLastButtons`,`length`,`pageIndex`,`pageSize`,`pageSizeOptions`,`hidePageSize`,`disabled`],[`mode`,`indeterminate`],[1,`mtx-grid-toolbar-content`],[1,`mtx-grid-toolbar-actions`],[3,`columns`,`buttonText`,`buttonType`,`buttonColor`,`buttonClass`,`buttonIcon`,`buttonFontIcon`,`buttonSvgIcon`,`selectable`,`selectableChecked`,`sortable`,`pinnable`,`showHeader`,`headerText`,`headerTemplate`,`showFooter`,`footerText`,`footerTemplate`,`pinOptions`],[1,`mtx-grid-toolbar-title`],[3,`columnChange`,`columns`,`buttonText`,`buttonType`,`buttonColor`,`buttonClass`,`buttonIcon`,`buttonFontIcon`,`buttonSvgIcon`,`selectable`,`selectableChecked`,`sortable`,`pinnable`,`showHeader`,`headerText`,`headerTemplate`,`showFooter`,`footerText`,`footerTemplate`,`pinOptions`],[`mat-table`,``,`matSort`,``,3,`matSortChange`,`dataSource`,`multiTemplateDataRows`,`matSortActive`,`matSortDirection`,`matSortDisableClear`,`matSortDisabled`,`matSortStart`,`trackBy`],[`matColumnDef`,`MtxGridCheckboxColumnDef`],[3,`matColumnDef`,`sticky`,`stickyEnd`],[`mat-header-row`,``],[`mat-row`,``,3,`class`,`selected`],[`mat-footer-row`,``],[`mat-header-cell`,``,`class`,`mtx-grid-checkbox-cell`,4,`matHeaderCellDef`],[`mat-cell`,``,`class`,`mtx-grid-checkbox-cell`,4,`matCellDef`],[`mat-footer-cell`,``,`class`,`mtx-grid-checkbox-cell`,4,`matFooterCellDef`],[`mat-header-cell`,``,1,`mtx-grid-checkbox-cell`],[3,`checked`,`indeterminate`],[3,`change`,`checked`,`indeterminate`],[`mat-cell`,``,1,`mtx-grid-checkbox-cell`],[3,`disabled`,`checked`],[3,`click`,`change`,`disabled`,`checked`],[`mat-footer-cell`,``,1,`mtx-grid-checkbox-cell`],[`mat-header-cell`,``,3,`class`,`mat-table-sticky-left`,`mat-table-sticky-right`,`width`,`min-width`,`left`,`right`,4,`matHeaderCellDef`],[`mat-cell`,``,`mtx-grid-selectable-cell`,``,3,`class`,`mat-table-sticky-left`,`mat-table-sticky-right`,`width`,`min-width`,`left`,`right`,`cellSelectable`,`cellSelectedChange`,4,`matCellDef`],[`mat-footer-cell`,``,3,`mat-table-sticky-left`,`mat-table-sticky-right`,`width`,`min-width`,`left`,`right`,4,`matFooterCellDef`],[`mat-header-cell`,``],[1,`mat-header-cell-inner`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`mat-sort-header`,`disabled`,`disableClear`,`arrowPosition`,`start`],[1,`mtx-grid-expansion-placeholder`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,1,`mtx-grid-icon`,`mat-sort-header-icon`],[`d`,`M3,13H15V11H3M3,6V8H21V6M3,18H9V16H3V18Z`],[`mat-cell`,``,`mtx-grid-selectable-cell`,``,3,`cellSelectedChange`,`cellSelectable`],[`matIconButton`,``,`mtx-grid-expansion-toggle`,``,`type`,`button`,1,`mtx-grid-row-expand-button`,3,`opened`],[3,`rowDataChange`,`rowData`,`colDef`,`placeholder`],[`matIconButton`,``,`mtx-grid-expansion-toggle`,``,`type`,`button`,1,`mtx-grid-row-expand-button`,3,`openedChange`,`toggleChange`,`opened`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`fill`,`currentColor`,`focusable`,`false`,1,`mtx-grid-icon`,`mtx-grid-row-expand-icon`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`mat-footer-cell`,``],[3,`summary`,`data`,`colDef`,`placeholder`],[`mat-header-row`,``,4,`matHeaderRowDef`,`matHeaderRowDefSticky`],[`mat-row`,``,3,`class`,`selected`,`click`,`contextmenu`,4,`matRowDef`,`matRowDefColumns`],[`mat-row`,``,3,`click`,`contextmenu`],[`mat-footer-row`,``,4,`matFooterRowDef`,`matFooterRowDefSticky`],[`matColumnDef`,`MtxGridExpansionColumnDef`],[`mat-cell`,``,4,`matCellDef`],[`mat-row`,``,`class`,`mtx-grid-expansion`,3,`class`,4,`matRowDef`,`matRowDefColumns`],[`mat-cell`,``],[1,`mtx-grid-expansion-detail-wrapper`],[1,`mtx-grid-expansion-detail`],[`mat-row`,``,1,`mtx-grid-expansion`],[`mat-table`,``,`columnResize`,``,`matSort`,``,3,`matSortChange`,`dataSource`,`multiTemplateDataRows`,`matSortActive`,`matSortDirection`,`matSortDisableClear`,`matSortDisabled`,`matSortStart`,`trackBy`],[`mat-header-cell`,``,3,`class`,`mat-table-sticky-left`,`mat-table-sticky-right`,`width`,`left`,`right`,`resizable`,`matResizableMinWidthPx`,`matResizableMaxWidthPx`,4,`matHeaderCellDef`],[`mat-cell`,``,`mtx-grid-selectable-cell`,``,3,`class`,`mat-table-sticky-left`,`mat-table-sticky-right`,`width`,`left`,`right`,`cellSelectable`,`cellSelectedChange`,4,`matCellDef`],[`mat-footer-cell`,``,3,`mat-table-sticky-left`,`mat-table-sticky-right`,`width`,`left`,`right`,4,`matFooterCellDef`],[`mat-header-cell`,``,3,`resizable`,`matResizableMinWidthPx`,`matResizableMaxWidthPx`],[3,`page`,`showFirstLastButtons`,`length`,`pageIndex`,`pageSize`,`pageSizeOptions`,`hidePageSize`,`disabled`]],template:function(e,i){e&1&&(tN(0,fl,2,0,`div`,2),tN(1,wl,6,2,`div`,3),Sc$1(2,`div`,4)(3,`div`,5)(4,`div`,6,0),tN(6,_s,8,19,`table`,7)(7,sd,8,19,`table`,8),Dh(),tN(8,hd,3,1,`div`,9),Dh(),tN(9,_d,2,1,`div`,10),Dh(),Sc$1(10,`div`,11),tN(11,vd,2,1,`div`,12),Sc$1(12,`div`,13),tN(13,xd,1,1,null,14)(14,Cd,1,9,`mat-paginator`,15),Dh()(),zD(15,Td,3,3,`ng-template`,null,1,vA)),e&2&&(rN(i.loading?0:-1),iT(),rN(i.showToolbar?1:-1),iT(3),qc$1(`mat-table-with-data`,!i._hasNoResult),iT(2),rN(i.columnResizable?7:6),iT(2),rN(i._hasNoResult?8:-1),iT(),rN(i.showSidebar?9:-1),iT(2),rN(i.showStatusbar?11:-1),iT(2),rN(i.paginationTemplate?13:14))},dependencies:[YR,L$1,dt$1,ce,Wn,Go,$n,Wo,qn,$o,jo,Qn,Po,Ho,Oo,Vo,Bo,Lo,Ni,Ao,Si,Ui,qi,Ut,Dt,Xi,Ki,JR,i,Bi,Gi,dt$3],styles:[`.mat-column-resize-table.cdk-column-resize-with-resized-column{table-layout:fixed}.mat-column-resize-flex .mat-mdc-header-cell,.mat-column-resize-flex .mat-mdc-cell{box-sizing:border-box;min-width:32px}.mat-mdc-header-cell{position:relative}.mat-resizable{box-sizing:border-box}.mat-mdc-header-cell:not(.mat-resizable):after,.mat-resizable-handle{position:absolute;bottom:0;top:0;right:0;width:1px;background:transparent;transition:background .3s cubic-bezier(.55,0,.55,.2)}.mat-mdc-header-cell:not(.mat-resizable):after{content:""}[dir=rtl] .mat-mdc-header-cell:not(.mat-resizable):after,[dir=rtl] .mat-resizable-handle{left:0;right:auto}[dir=rtl] .mat-mdc-header-row.cdk-column-resize-hover-or-active .mat-header-cell,[dir=rtl] .mat-mdc-header-row.cdk-column-resize-hover-or-active .mat-mdc-header-cell{border-left:none}.mat-mdc-header-row.cdk-column-resize-hover-or-active .mat-mdc-header-cell{border-right:none}.mat-mdc-header-row.cdk-column-resize-hover-or-active .mat-mdc-header-cell:not(.mat-resizable):after{background-color:var(--%NS%mtx-grid-resizable-handle-disabled-background-color, var(--%NS%mat-sys-outline-variant))}.mat-mdc-header-row.cdk-column-resize-hover-or-active .mat-resizable-handle{background-color:var(--%NS%mtx-grid-resizable-handle-hover-background-color, var(--%NS%mat-sys-primary))}.mat-resizable.cdk-resizable-overlay-thumb-active>.mat-resizable-handle{opacity:0;transition:none}.mat-resizable-handle:focus,.mat-mdc-header-row.cdk-column-resize-hover-or-active .mat-resizable-handle:focus{outline:none;background-color:var(--%NS%mtx-grid-resizable-handle-active-background-color, var(--%NS%mat-sys-primary))}.mat-column-resize-overlay-thumb{background:transparent;cursor:col-resize;width:100%;height:100%;transition:background .3s cubic-bezier(.55,0,.55,.2);-webkit-user-select:none;user-select:none}.mat-column-resize-overlay-thumb:active{will-change:transform;background:linear-gradient(90deg,transparent,transparent 7px,var(--%NS%mtx-grid-resizable-handle-active-background-color, var(--%NS%mat-sys-primary)) 7px,var(--%NS%mtx-grid-resizable-handle-active-background-color, var(--%NS%mat-sys-primary)) 9px,transparent 9px,transparent)}.mat-column-resize-overlay-thumb:active .mat-column-resize-overlay-thumb-top{background:linear-gradient(90deg,transparent,transparent 4px,var(--%NS%mtx-grid-resizable-handle-active-background-color, var(--%NS%mat-sys-primary)) 4px,var(--%NS%mtx-grid-resizable-handle-active-background-color, var(--%NS%mat-sys-primary)) 12px,transparent 12px,transparent)}.mat-column-resize-overlay-thumb-top{width:100%}.mtx-grid{position:relative;display:flex;flex-direction:column;width:100%;overflow:hidden;border:1px solid var(--%NS%mtx-grid-outline-color, var(--%NS%mat-sys-outline-variant));border-radius:var(--%NS%mtx-grid-container-shape, var(--%NS%mat-sys-corner-medium))}.mtx-grid .mat-mdc-table{--%NS%mat-table-row-item-outline-color: var(--%NS%mtx-grid-outline-color, var(--%NS%mat-sys-outline-variant))}.mtx-grid .mat-mdc-table.mat-table-striped .mat-row-odd{background-color:var(--%NS%mtx-grid-table-row-striped-background-color, var(--%NS%mat-sys-surface-container))}.mtx-grid .mat-mdc-table.mat-table-hover .mat-mdc-row:hover{background-color:var(--%NS%mtx-grid-table-row-hover-background-color, var(--%NS%mat-sys-secondary-container))}.mtx-grid .mat-mdc-table.mat-table-hover .mat-mdc-row.selected:hover{background-color:var(--%NS%mtx-grid-table-row-selected-hover-background-color, var(--%NS%mat-sys-primary-container))}.mtx-grid .mat-mdc-table .mat-mdc-row.selected{background-color:var(--%NS%mtx-grid-table-row-selected-background-color, var(--%NS%mat-sys-secondary-container))}.mtx-grid .mat-mdc-table .mat-mdc-cell.selected{box-shadow:inset 0 0 0 1px var(--%NS%mtx-grid-table-cell-selected-outline-color, var(--%NS%mat-sys-primary))}.mtx-grid .mat-table-container{overflow:auto}.mtx-grid .mat-table-container.mat-table-with-data{flex:1}.mtx-grid .mat-mdc-table:not(.mat-column-resize-table){min-width:100%;border-collapse:separate}.mtx-grid .mat-mdc-table:not(.mat-column-resize-table) .mat-mdc-header-cell:not(.mtx-grid-checkbox-cell),.mtx-grid .mat-mdc-table:not(.mat-column-resize-table) .mat-mdc-footer-cell:not(.mtx-grid-checkbox-cell),.mtx-grid .mat-mdc-table:not(.mat-column-resize-table) .mat-mdc-cell:not(.mtx-grid-checkbox-cell){min-width:var(--%NS%mtx-grid-table-cell-min-width, 80px)}.mtx-grid .mat-table-sticky-left{border-right:1px solid var(--%NS%mat-table-row-item-outline-color)}[dir=rtl] .mtx-grid .mat-table-sticky-left{border-right-width:0;border-left:1px solid var(--%NS%mat-table-row-item-outline-color)}.mtx-grid .mat-table-sticky-right{border-left:1px solid var(--%NS%mat-table-row-item-outline-color)}[dir=rtl] .mtx-grid .mat-table-sticky-right{border-left-width:0;border-right:1px solid var(--%NS%mat-table-row-item-outline-color)}.mtx-grid .mat-mdc-footer-cell{border-top:1px solid var(--%NS%mat-table-row-item-outline-color);background-color:var(--%NS%mtx-grid-table-footer-background-color, var(--%NS%mat-sys-surface-container))}.mtx-grid .mat-mdc-row.mtx-grid-expansion{height:0;overflow:hidden}.mtx-grid .mat-mdc-row.mtx-grid-expansion .mat-mdc-cell{padding-top:0;padding-bottom:0}.mtx-grid .mat-mdc-row.mtx-grid-expansion.collapsed .mat-mdc-cell{border-bottom-width:0}.mtx-grid .mat-sort-header-icon{margin-left:4px}[dir=rtl] .mtx-grid .mat-sort-header-icon{margin-left:0;margin-right:4px}.mtx-grid .mat-header-cell-inner{display:inline-flex;align-items:center;vertical-align:middle}.mtx-grid .mat-mdc-paginator{border-top:1px solid var(--%NS%mtx-grid-outline-color, var(--%NS%mat-sys-outline-variant));border-bottom-left-radius:var(--%NS%mtx-grid-container-shape, var(--%NS%mat-sys-corner-medium));border-bottom-right-radius:var(--%NS%mtx-grid-container-shape, var(--%NS%mat-sys-corner-medium))}.mtx-grid .mat-paginator-hidden{display:none}.mtx-grid .mtx-grid-checkbox-cell{width:60px;min-width:60px;padding:0 calc((60px - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2)}.mtx-grid-progress{position:absolute;top:0;z-index:120;width:100%}.mtx-grid-toolbar{display:flex;justify-content:space-between;align-items:center;min-height:var(--%NS%mat-table-header-container-height, 56px);padding:8px;box-sizing:border-box;border-bottom:1px solid var(--%NS%mtx-grid-outline-color, var(--%NS%mat-sys-outline-variant))}.mtx-grid-toolbar-content{flex:1;width:0;padding:0 8px}.mtx-grid-layout{display:flex;flex:1 1 auto;overflow:auto}.mtx-grid-content{flex-direction:column;width:0}.mtx-grid-sidebar{max-width:50%;border-left:1px solid var(--%NS%mtx-grid-outline-color, var(--%NS%mat-sys-outline-variant))}[dir=rtl] .mtx-grid-sidebar{border-left-width:0;border-right:1px solid var(--%NS%mtx-grid-outline-color, var(--%NS%mat-sys-outline-variant))}.mtx-grid-footer{position:relative;z-index:1}.mtx-grid-statusbar{display:flex;align-items:center;min-height:var(--%NS%mat-table-header-container-height, 56px);padding:8px;box-sizing:border-box;border-top:1px solid var(--%NS%mtx-grid-outline-color, var(--%NS%mat-sys-outline-variant))}.mtx-grid-no-result{display:flex;justify-content:center;align-items:center;flex:1;min-height:150px}.mtx-grid-expansion-placeholder{display:inline-block;vertical-align:middle;width:var(--%NS%mat-icon-button-state-layer-size, var(--%NS%mtx-grid-row-expand-button-size, 40px));height:var(--%NS%mat-icon-button-state-layer-size, var(--%NS%mtx-grid-row-expand-button-size, 40px))}.mtx-grid-expansion-detail-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%;padding:0;overflow:hidden}.mtx-grid-expansion.expanded .mtx-grid-expansion-detail-wrapper{grid-template-rows:1fr;padding:calc((var(--%NS%mat-table-row-item-container-height, 52px) - 20px) / 2) 0}.mtx-grid-expansion-detail{min-height:0}.mtx-grid-animations-enabled .mtx-grid-expansion-detail-wrapper{transition:all 225ms cubic-bezier(.4,0,.2,1)}.mtx-grid-row-expand-button.expanded .mtx-grid-row-expand-icon{transform:rotate(90deg)}.mtx-grid-row-expand-button.mat-mdc-icon-button,.mtx-grid-row-expand-button+mtx-grid-cell{vertical-align:middle}
`],encapsulation:2})}};var E=class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵmod=dt({type:t})}static{this.ɵinj=Qe({providers:[Ze],imports:[$I,yn,qo,Fo,So,ve,Vt,j$1,wo,Zo$1,_o,Mt,Lt,qn$1,Nt,Ke$1,$t$2,r,ci,R,Ut,Dt,Qt,ci]})}};var O=[{position:1,name:`Boron`,tag:[{color:`red`,value:[1,2]}],weight:10.811,symbol:`B`,gender:`male`,mobile:`13198765432`,tele:`567891234`,city:`Berlin`,address:`Bernauer Str.111,13355`,date:`1423456765768`,website:`www.matero.com`,company:`matero`,email:`Boron@gmail.com`,status:!1,cost:4},{position:2,name:`Helium`,tag:[{color:`blue`,value:[3,4]}],weight:8.0026,symbol:`He`,gender:`female`,mobile:`13034676675`,tele:`80675432`,city:`Shanghai`,address:`88 Songshan Road`,date:`1423456765768`,website:`www.matero.com`,company:`matero`,email:`Helium@gmail.com`,status:!0,cost:5},{position:3,name:`Nitrogen`,tag:[{color:`yellow`,value:[5,6]}],weight:14.0067,symbol:`N`,gender:`male`,mobile:`15811112222`,tele:`345678912`,city:`Sydney`,address:`Circular Quay, Sydney NSW 2000`,date:`1423456765768`,website:`www.matero.com`,company:`matero`,email:`Nitrogen@gmail.com`,status:!0,cost:2}];var dr={title:`Basic`,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`},{header:`Weight`,field:`weight`,type:`number`,typeParameter:{digitsInfo:`1.2-2`}},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`},{header:`City`,field:`city`},{header:`Date`,field:`date`,type:`date`,typeParameter:{format:`yyyy-MM-dd`}}];this.list=O}trackByName(n,e){return e.name}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-basic-example`]],decls:1,vars:3,consts:[[3,`data`,`columns`,`trackBy`]],template:function(e,i){e&1&&zc$1(0,`mtx-grid`,0),e&2&&ZD(`data`,i.list)(`columns`,i.columns)(`trackBy`,i.trackByName)},dependencies:[E,R],encapsulation:2})}},files:[{file:`app.html`,path:`grid/examples/basic/app.html`},{file:`app.ts`,path:`grid/examples/basic/app.ts`},{file:`app.scss`,path:`grid/examples/basic/app.scss`},{file:`data.ts`,path:`grid/data.ts`}]};var Nd=[`grid`];function Id(t,n){if(t&1){let e=hN();Sc$1(0,`button`),YN(1,`Save`),Dh(),Sc$1(2,`button`,7),Gc$1(`click`,function(){Lm(e);let a=DN();return Pm(a.closeMenu())}),YN(3,`Close`),Dh()}}var pr={title:`Column hiding & moving`,description:`
  <p>Click the <kbd>Column Shown</kbd> button, you can select or drag the columns.</p>
  `,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`},{header:`Weight`,field:`weight`},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`},{header:`City`,field:`city`}];this.list=O;this.columnPinnable=!1;this.columnSortable=!0;this.columnHideable=!0;this.columnHideableChecked=`show`}closeMenu(){this.grid.columnMenu.menuTrigger.closeMenu()}log(n){console.log(n)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-column-hiding-moving-example`]],viewQuery:function(e,i){if(e&1&&nE(Nd,5),e&2){let a;wh(a=Ch())&&(i.grid=a.first)}},decls:18,vars:16,consts:[[`grid`,``],[`menuFooter`,``],[3,`ngModelChange`,`ngModel`],[`for`,``],[`value`,`show`],[`value`,`hide`],[3,`columnChange`,`data`,`columns`,`showToolbar`,`toolbarTitle`,`columnHideable`,`columnHideableChecked`,`columnSortable`,`columnPinnable`,`showColumnMenuHeader`,`columnMenuHeaderText`,`showColumnMenuFooter`,`columnMenuFooterTemplate`],[3,`click`]],template:function(e,i){if(e&1){let a=hN();Sc$1(0,`div`)(1,`mat-checkbox`,2),GT(),bE(`ngModelChange`,function(c){return Lm(a),JN(i.columnHideable,c)||(i.columnHideable=c),Pm(c)}),YN(2,`Column Hiding`),Dh(),Sc$1(3,`mat-checkbox`,2),GT(),bE(`ngModelChange`,function(c){return Lm(a),JN(i.columnSortable,c)||(i.columnSortable=c),Pm(c)}),YN(4,`Column Sorting`),Dh(),Sc$1(5,`mat-checkbox`,2),GT(),bE(`ngModelChange`,function(c){return Lm(a),JN(i.columnPinnable,c)||(i.columnPinnable=c),Pm(c)}),YN(6,`Column Pinning`),Dh(),Sc$1(7,`label`,3),YN(8,`ColumnHideableChecked:`),Dh(),Sc$1(9,`mat-radio-group`,2),GT(),bE(`ngModelChange`,function(c){return Lm(a),JN(i.columnHideableChecked,c)||(i.columnHideableChecked=c),Pm(c)}),Sc$1(10,`mat-radio-button`,4),YN(11,`Show`),Dh(),Sc$1(12,`mat-radio-button`,5),YN(13,`Hide`),Dh()()(),Sc$1(14,`mtx-grid`,6,0),Gc$1(`columnChange`,function(c){return i.log(c)}),Dh(),zD(16,Id,4,0,`ng-template`,null,1,vA)}if(e&2){let a=CN(17);iT(),IE(`ngModel`,i.columnHideable),qT(),iT(2),IE(`ngModel`,i.columnSortable),qT(),iT(2),IE(`ngModel`,i.columnPinnable),qT(),iT(4),IE(`ngModel`,i.columnHideableChecked),qT(),iT(5),ZD(`data`,i.list)(`columns`,i.columns)(`showToolbar`,!0)(`toolbarTitle`,`Data Grid`)(`columnHideable`,i.columnHideable)(`columnHideableChecked`,i.columnHideableChecked)(`columnSortable`,i.columnSortable)(`columnPinnable`,i.columnPinnable)(`showColumnMenuHeader`,!0)(`columnMenuHeaderText`,`Title`)(`showColumnMenuFooter`,!0)(`columnMenuFooterTemplate`,a)}},dependencies:[ve,ce,yn,gn$1,Ut$2,Ce,ie,Y,E,R],styles:[`label[_ngcontent-%COMP%]{padding:0 8px}`]})}},files:[{file:`app.html`,path:`grid/examples/column-hiding-moving/app.html`},{file:`app.ts`,path:`grid/examples/column-hiding-moving/app.ts`},{file:`app.scss`,path:`grid/examples/column-hiding-moving/app.scss`}]};var hr={title:`Column pinnable`,component:class t{constructor(){this.columns=[{header:`Position`,field:`position`,width:`200px`},{header:`Name`,field:`name`,width:`200px`,pinned:`left`},{header:`tags`,field:`tag.0.value`,width:`200px`},{header:`Weight`,field:`weight`,width:`200px`,pinned:`left`},{header:`Symbol`,field:`symbol`,width:`200px`},{header:`Gender`,field:`gender`,width:`200px`},{header:`Mobile`,field:`mobile`,width:`200px`},{header:`Tele`,field:`tele`,width:`200px`},{header:`City`,field:`city`,width:`200px`},{header:`Address`,field:`address`,width:`200px`},{header:`Date`,field:`date`,width:`200px`},{header:`Website`,field:`website`,width:`200px`},{header:`Company`,field:`company`,width:`200px`},{header:`Email`,field:`email`,width:`200px`,pinned:`right`},{header:`Status`,field:`status`,type:`boolean`,width:`200px`}];this.list=O}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-column-pinnable-example`]],decls:1,vars:3,consts:[[3,`data`,`columns`,`showToolbar`]],template:function(e,i){e&1&&zc$1(0,`mtx-grid`,0),e&2&&ZD(`data`,i.list)(`columns`,i.columns)(`showToolbar`,!0)},dependencies:[E,R],encapsulation:2})}},description:`
  <p>The <code>name</code> and <code>weight</code> column pinned left, the <code>email</code> column
  pinned right. Scroll the columns to test.</p>
  `,files:[{file:`app.html`,path:`grid/examples/column-pinnable/app.html`},{file:`app.ts`,path:`grid/examples/column-pinnable/app.ts`},{file:`app.scss`,path:`grid/examples/column-pinnable/app.scss`}]};var Ed=()=>[1,2,5,10];var ur={title:`Column resize`,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`,minWidth:200,maxWidth:300},{header:`Weight`,field:`weight`,minWidth:200},{header:`Gender`,field:`gender`,width:`100px`,resizable:!1},{header:`Mobile`,field:`mobile`,maxWidth:200},{header:`City`,field:`city`,minWidth:200}];this.list=[...O,...O,...O]}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-column-resize-example`]],decls:1,vars:5,consts:[[3,`data`,`columns`,`columnResizable`,`pageSizeOptions`]],template:function(e,i){e&1&&zc$1(0,`mtx-grid`,0),e&2&&ZD(`data`,i.list)(`columns`,i.columns)(`columnResizable`,!0)(`pageSizeOptions`,oA(4,Ed))},dependencies:[E,R],styles:[`[_nghost-%COMP%]     .mtx-grid{height:280px}`]})}},files:[{file:`app.html`,path:`grid/examples/column-resize/app.html`},{file:`app.ts`,path:`grid/examples/column-resize/app.ts`},{file:`app.scss`,path:`grid/examples/column-resize/app.scss`}]};function zd(t,n){if(t&1&&(Sc$1(0,`button`,5),YN(1),Dh()),t&2){let e=n.rowData,i=n.index;iT(),DE(``,e.name,`, `,i)}}var gr={title:`Context Menu`,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`,minWidth:200,maxWidth:300},{header:`Weight`,field:`weight`,minWidth:200},{header:`Gender`,field:`gender`,width:`100px`,resizable:!1},{header:`Mobile`,field:`mobile`,maxWidth:200},{header:`City`,field:`city`,minWidth:200}];this.list=O;this.contextMenuPosition={x:`0px`,y:`0px`}}onContextMenu(n){let{event:e,rowData:i,index:a}=n;e.preventDefault(),this.contextMenu.closeMenu();let o=this.contextMenu.menuOpen?150:0;setTimeout(()=>this.contextMenu.openMenu(),o),this.contextMenuPosition.x=e.clientX+`px`,this.contextMenuPosition.y=e.clientY+`px`,this.contextMenu.menuData={rowData:i,index:a},this.contextMenu.menu?.focusFirstItem(`mouse`),this.closingMenuSubscription=Iw(Al$1(document,`click`),Al$1(document,`touchend`)).subscribe(c=>{this.contextMenu.closeMenu(),this.closingMenuSubscription.unsubscribe()})}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-context-menu-example`]],viewQuery:function(e,i){if(e&1&&nE(Ot$1,5),e&2){let a;wh(a=Ch())&&(i.contextMenu=a.first)}},decls:5,vars:8,consts:[[`contextMenu`,`matMenu`],[3,`rowContextMenu`,`data`,`columns`],[2,`position`,`fixed`,`visibility`,`hidden`,3,`matMenuTriggerFor`],[3,`hasBackdrop`],[`matMenuContent`,``],[`mat-menu-item`,``]],template:function(e,i){if(e&1&&(Sc$1(0,`mtx-grid`,1),Gc$1(`rowContextMenu`,function(o){return i.onContextMenu(o)}),Dh(),zc$1(1,`div`,2),Sc$1(2,`mat-menu`,3,0),zD(4,zd,2,2,`ng-template`,4),Dh()),e&2){let a=CN(3);ZD(`data`,i.list)(`columns`,i.columns),iT(),uE(`left`,i.contextMenuPosition.x)(`top`,i.contextMenuPosition.y),ZD(`matMenuTriggerFor`,a),iT(),ZD(`hasBackdrop`,!1)}},dependencies:[E,R,Nt,R$1,ee,At,Ot$1],encapsulation:2})}},files:[{file:`app.html`,path:`grid/examples/context-menu/app.html`},{file:`app.ts`,path:`grid/examples/context-menu/app.ts`},{file:`app.scss`,path:`grid/examples/context-menu/app.scss`}]};var Ad=new D(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var nn=class{source;checked;constructor(n,e){this.source=n,this.checked=e}};var Jn=(()=>{class t{_elementRef=p(ye);_focusMonitor=p(c_);_changeDetectorRef=p(Lr$1);defaults=p(Ad);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new nn(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=T_();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new ue;toggleChange=new ue;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){p(Yr$1).load(aZ);let e=p(new Qc$1(`tabindex`),{optional:!0}),i=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||`accent`,this.id=this._uniqueId=p(ig).getId(`mat-mdc-slide-toggle-`),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new nn(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(i){return new(i||t)};static ɵcmp=(function(){let e=[`switch`],i=[`*`];function a(o,c){o&1&&(Sc$1(0,`span`,11),Km(),Sc$1(1,`svg`,13),zc$1(2,`path`,14),Dh(),Sc$1(3,`svg`,15),zc$1(4,`path`,16),Dh()())}return gn({type:t,selectors:[[`mat-slide-toggle`]],viewQuery:function(c,l){if(c&1&&nE(e,5),c&2){let d;wh(d=Ch())&&(l._switchElement=d.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(c,l){c&2&&(XD(`id`,l.id),ss$1(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),BN(l.color?`mat-`+l.color:``),qc$1(`mat-mdc-slide-toggle-focused`,l._focused)(`mat-mdc-slide-toggle-checked`,l.checked)(`mat-slide-toggle-full-width`,l.fullWidth)(`_mat-animation-noopable`,l._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,$t$1],color:`color`,disabled:[2,`disabled`,`disabled`,$t$1],fullWidth:[2,`fullWidth`,`fullWidth`,$t$1],disableRipple:[2,`disableRipple`,`disableRipple`,$t$1],tabIndex:[2,`tabIndex`,`tabIndex`,o=>o==null?0:eR(o)],checked:[2,`checked`,`checked`,$t$1],hideIcon:[2,`hideIcon`,`hideIcon`,$t$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,$t$1]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[CE([{provide:ie$1,useExisting:xa(()=>t),multi:!0},{provide:W,useExisting:t,multi:!0}]),Ut$1],ngContentSelectors:i,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(c,l){if(c&1&&(IN(),Sc$1(0,`div`,1)(1,`button`,2,0),Gc$1(`click`,function(){return l._handleClick()}),zc$1(3,`div`,3)(4,`span`,4),Sc$1(5,`span`,5)(6,`span`,6)(7,`span`,7),zc$1(8,`span`,8),Dh(),Sc$1(9,`span`,9),zc$1(10,`span`,10),Dh(),tN(11,a,5,0,`span`,11),Dh()()(),Sc$1(12,`label`,12),Gc$1(`click`,function(x){return x.stopPropagation()}),bN(13),Dh()()),c&2){let d=CN(2);ZD(`labelPosition`,l.labelPosition),iT(),qc$1(`mdc-switch--selected`,l.checked)(`mdc-switch--unselected`,!l.checked)(`mdc-switch--checked`,l.checked)(`mdc-switch--disabled`,l.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,l.disabledInteractive),ZD(`tabIndex`,l.disabled&&!l.disabledInteractive?-1:l.tabIndex)(`disabled`,l.disabled&&!l.disabledInteractive),ss$1(`id`,l.buttonId)(`name`,l.name)(`aria-label`,l.ariaLabel)(`aria-labelledby`,l._getAriaLabelledBy())(`aria-describedby`,l.ariaDescribedby)(`aria-required`,l.required||null)(`aria-checked`,l.checked)(`aria-disabled`,l.disabled&&l.disabledInteractive?`true`:null),iT(9),ZD(`matRippleTrigger`,d)(`matRippleDisabled`,l.disableRipple||l.disabled)(`matRippleCentered`,!0),iT(),rN(l.hideIcon?-1:11),iT(),ZD(`for`,l.buttonId),ss$1(`id`,l._labelId)}},dependencies:[oZ,g],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return t})();var _r=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=dt({type:t});static ɵinj=Qe({imports:[Jn,q5]})}return t})();var Od=[`statusTpl`];function Pd(t,n){if(t&1&&(Sc$1(0,`mat-slide-toggle`,2),YN(1,`Slide me!`),Dh()),t&2){let e=n.$implicit;ZD(`checked`,e.status)}}var fr={title:`Custom cell template`,description:`
  <p>The status column are custom cells.</p>
  `,component:class t{constructor(){this.columns=[];this.list=O}ngOnInit(){this.columns=[{header:`Name`,field:`name`},{header:`Weight`,field:`weight`},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`},{header:`City`,field:`city`},{header:`Status`,field:`status`,cellTemplate:this.statusTpl}]}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-custom-cell-template-example`]],viewQuery:function(e,i){if(e&1&&nE(Od,7),e&2){let a;wh(a=Ch())&&(i.statusTpl=a.first)}},decls:3,vars:2,consts:[[`statusTpl`,``],[3,`data`,`columns`],[3,`checked`]],template:function(e,i){e&1&&(zc$1(0,`mtx-grid`,1),zD(1,Pd,2,1,`ng-template`,null,0,vA)),e&2&&ZD(`data`,i.list)(`columns`,i.columns)},dependencies:[E,R,_r,Jn],encapsulation:2})}},files:[{file:`app.html`,path:`grid/examples/custom-cell-template/app.html`},{file:`app.ts`,path:`grid/examples/custom-cell-template/app.ts`},{file:`app.scss`,path:`grid/examples/custom-cell-template/app.scss`}]};var Gd=(t,n)=>({mobile:t,city:n});function Hd(t,n){if(t&1&&(Sc$1(0,`button`,3),YN(1),Dh()),t&2){let e=n.$implicit;iT(),vE(e.mobile)}}function Ld(t,n){if(t&1&&(Sc$1(0,`button`,4),YN(1),Dh()),t&2){let e=n.$implicit;iT(),vE(e.city)}}var yr={title:`Custom cell template 2`,description:`
  <p>There has another easiest way to custom cells. You can use property
  <code>[cellTemplate]="{ mobile: mobileTpl, city: cityTpl }"</code>,
  the key of cellTemplate is the column field.</p>
  `,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`},{header:`Weight`,field:`weight`},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`},{header:`City`,field:`city`}];this.list=O}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-custom-cell-template-2-example`]],decls:5,vars:6,consts:[[`mobileTpl`,``],[`cityTpl`,``],[3,`data`,`columns`,`cellTemplate`],[`matButton`,`elevated`,`color`,`accent`],[`matButton`,`elevated`,`color`,`primary`]],template:function(e,i){if(e&1&&(zc$1(0,`mtx-grid`,2),zD(1,Hd,2,1,`ng-template`,null,0,vA)(3,Ld,2,1,`ng-template`,null,1,vA)),e&2){let a=CN(2),o=CN(4);ZD(`data`,i.list)(`columns`,i.columns)(`cellTemplate`,sA(3,Gd,a,o))}},dependencies:[E,R,Vt,Ot$2],encapsulation:2})}},files:[{file:`app.html`,path:`grid/examples/custom-cell-template-2/app.html`},{file:`app.ts`,path:`grid/examples/custom-cell-template-2/app.ts`},{file:`app.scss`,path:`grid/examples/custom-cell-template-2/app.scss`}]};var Vd=t=>({cost:t});function jd(t,n){if(t&1&&(Sc$1(0,`div`),YN(1),dA(2,`currency`),Dh()),t&2){let e=n.$implicit,i=DN();iT(),vE(hA(2,1,i.getTotalCost(e)))}}var vr={title:`Custom footer template`,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`,summary:`Total`},{header:`Weight`,field:`weight`,summary:n=>Math.max(...n)},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`},{header:`City`,field:`city`},{header:`Cost`,field:`cost`,type:`currency`,typeParameter:{display:`$`}}];this.list=O}getTotalCost(n){return n.reduce((e,i)=>e+i,0)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-custom-footer-template-example`]],decls:3,vars:6,consts:[[`footerTpl`,``],[3,`data`,`columns`,`showSummary`,`summaryTemplate`]],template:function(e,i){if(e&1&&(zc$1(0,`mtx-grid`,1),zD(1,jd,3,3,`ng-template`,null,0,vA)),e&2){let a=CN(2);ZD(`data`,i.list)(`columns`,i.columns)(`showSummary`,!0)(`summaryTemplate`,iA(4,Vd,a))}},dependencies:[E,R,i0],encapsulation:2})}},files:[{file:`app.html`,path:`grid/examples/custom-footer-template/app.html`},{file:`app.ts`,path:`grid/examples/custom-footer-template/app.ts`},{file:`app.scss`,path:`grid/examples/custom-footer-template/app.scss`}]};function Wd(t,n){if(t&1&&(YN(0),Sc$1(1,`mat-icon`,2),YN(2,`info`),Dh()),t&2){let e=n.$implicit;Sh(` `,e.header,` `),iT(),ZD(`matTooltip`,e.description)}}var br={title:`Custom header template`,description:`
  <p>If you just want to append something to header, you can try
  <code>[headerExtraTemplate]</code> instead.</p>
  `,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`,description:`Info about the name`},{header:`Weight`,field:`weight`,description:`Info about the weight`},{header:`Gender`,field:`gender`,description:`Info about the gender`},{header:`Mobile`,field:`mobile`,description:`Info about the mobile`},{header:`City`,field:`city`,description:`Info about the city`}];this.list=O}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-custom-header-template-example`]],decls:3,vars:3,consts:[[`headerTpl`,``],[3,`data`,`columns`,`headerTemplate`],[3,`matTooltip`]],template:function(e,i){if(e&1&&(zc$1(0,`mtx-grid`,1),zD(1,Wd,3,2,`ng-template`,null,0,vA)),e&2){let a=CN(2);ZD(`data`,i.list)(`columns`,i.columns)(`headerTemplate`,a)}},dependencies:[E,R,Mt,wt,Zo$1,Oi$1],encapsulation:2})}},files:[{file:`app.html`,path:`grid/examples/custom-header-template/app.html`},{file:`app.ts`,path:`grid/examples/custom-header-template/app.ts`},{file:`app.scss`,path:`grid/examples/custom-header-template/app.scss`}]};function $d(t,n){t&1&&zc$1(0,`input`,2)}var xr={title:`Custom toolbar template`,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`,summary:`Total`},{header:`Weight`,field:`weight`,summary:n=>Math.max(...n)},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`},{header:`City`,field:`city`},{header:`Cost`,field:`cost`,type:`currency`,typeParameter:{display:`$`}}];this.list=O}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-custom-toolbar-template-example`]],decls:3,vars:5,consts:[[`toolbarTpl`,``],[3,`data`,`columns`,`showToolbar`,`showColumnMenuButton`,`toolbarTemplate`],[`placeholder`,`Search`]],template:function(e,i){if(e&1&&(zc$1(0,`mtx-grid`,1),zD(1,$d,1,0,`ng-template`,null,0,vA)),e&2){let a=CN(2);ZD(`data`,i.list)(`columns`,i.columns)(`showToolbar`,!0)(`showColumnMenuButton`,!1)(`toolbarTemplate`,a)}},dependencies:[E,R],encapsulation:2})}},files:[{file:`app.html`,path:`grid/examples/custom-toolbar-template/app.html`},{file:`app.ts`,path:`grid/examples/custom-toolbar-template/app.ts`},{file:`app.scss`,path:`grid/examples/custom-toolbar-template/app.scss`}]};var Cr={title:`Data formatting`,description:`
  <p>The <code>name</code> field use a formatter.</p>
  `,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`,formatter:n=>`<span class="label">${n.name}</span>`},{header:`Weight`,field:`weight`},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`},{header:`City`,field:`city`}];this.list=O}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-data-formatting-example`]],decls:1,vars:2,consts:[[3,`data`,`columns`]],template:function(e,i){e&1&&zc$1(0,`mtx-grid`,0),e&2&&ZD(`data`,i.list)(`columns`,i.columns)},dependencies:[E,R],styles:[`[_nghost-%COMP%]     .label{padding:5px 10px;border-radius:999px;background-color:#ffb74d}`]})}},files:[{file:`app.html`,path:`grid/examples/data-formatting/app.html`},{file:`app.ts`,path:`grid/examples/data-formatting/app.ts`},{file:`app.scss`,path:`grid/examples/data-formatting/app.scss`}]};function qd(t,n){if(t&1&&YN(0),t&2){let e=n.$implicit;Sh(` `,e.name,`
`)}}var wr={title:`Expandable row`,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`,showExpand:!0},{header:`Weight`,field:`weight`},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`},{header:`City`,field:`city`}];this.list=O}log(n){console.log(n)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-expandable-row-example`]],decls:3,vars:4,consts:[[`expansionTpl`,``],[3,`expansionChange`,`data`,`columns`,`expandable`,`expansionTemplate`]],template:function(e,i){if(e&1&&(Sc$1(0,`mtx-grid`,1),Gc$1(`expansionChange`,function(o){return i.log(o)}),Dh(),zD(1,qd,1,1,`ng-template`,null,0,vA)),e&2){let a=CN(2);ZD(`data`,i.list)(`columns`,i.columns)(`expandable`,!0)(`expansionTemplate`,a)}},dependencies:[E,R],encapsulation:2})}},files:[{file:`app.html`,path:`grid/examples/expandable-row/app.html`},{file:`app.ts`,path:`grid/examples/expandable-row/app.ts`},{file:`app.scss`,path:`grid/examples/expandable-row/app.scss`}]};var Sr={title:`Hide pagination`,description:`
  <p>If you hide the pagination, you should set <code>pageOnFront</code> false to show all the data.
  </p>
  `,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`},{header:`Weight`,field:`weight`},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`},{header:`City`,field:`city`}];this.list=O}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-hide-pagination-example`]],decls:1,vars:4,consts:[[3,`data`,`columns`,`pageOnFront`,`showPaginator`]],template:function(e,i){e&1&&zc$1(0,`mtx-grid`,0),e&2&&ZD(`data`,i.list)(`columns`,i.columns)(`pageOnFront`,!1)(`showPaginator`,!1)},dependencies:[E,R],encapsulation:2})}},files:[{file:`app.html`,path:`grid/examples/hide-pagination/app.html`},{file:`app.ts`,path:`grid/examples/hide-pagination/app.ts`},{file:`app.scss`,path:`grid/examples/hide-pagination/app.scss`}]};var Mr={title:`Hover & striped`,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`},{header:`Weight`,field:`weight`},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`},{header:`City`,field:`city`}];this.list=O;this.rowHover=!0;this.rowStriped=!1}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-hover-striped-example`]],decls:6,vars:7,consts:[[3,`ngModelChange`,`ngModel`],[3,`data`,`columns`,`rowHover`,`rowStriped`,`rowSelectable`]],template:function(e,i){e&1&&(Sc$1(0,`div`)(1,`mat-checkbox`,0),GT(),bE(`ngModelChange`,function(o){return JN(i.rowHover,o)||(i.rowHover=o),o}),YN(2,`Hover`),Dh(),Sc$1(3,`mat-checkbox`,0),GT(),bE(`ngModelChange`,function(o){return JN(i.rowStriped,o)||(i.rowStriped=o),o}),YN(4,`Striped`),Dh()(),zc$1(5,`mtx-grid`,1)),e&2&&(iT(),IE(`ngModel`,i.rowHover),qT(),iT(2),IE(`ngModel`,i.rowStriped),qT(),iT(2),ZD(`data`,i.list)(`columns`,i.columns)(`rowHover`,i.rowHover)(`rowStriped`,i.rowStriped)(`rowSelectable`,!0))},dependencies:[ve,ce,yn,gn$1,Ut$2,E,R],styles:[`.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin-right:1rem;margin-bottom:1rem}`]})}},files:[{file:`app.html`,path:`grid/examples/hover-striped/app.html`},{file:`app.ts`,path:`grid/examples/hover-striped/app.ts`},{file:`app.scss`,path:`grid/examples/hover-striped/app.scss`}]};function Qd(t,n){if(t&1&&(Sc$1(0,`mat-radio-button`,1),YN(1),Dh()),t&2){let e=n.$implicit;ZD(`value`,e.value),iT(),vE(e.label)}}var kr={title:`I18n ngx-translate`,component:class t{constructor(){this.translate=p(st);this.columns=[{header:this.translate.stream(`name`),field:`name`},{header:this.translate.stream(`weight`),field:`weight`},{header:this.translate.stream(`gender`),field:`gender`},{header:this.translate.stream(`mobile`),field:`mobile`},{header:this.translate.stream(`city`),field:`city`},{header:this.translate.stream(`operation`),field:`operation`,width:`120px`,pinned:`right`,right:`0px`,type:`button`,buttons:[{text:this.translate.stream(`delete`),icon:`delete`,tooltip:this.translate.stream(`delete`),color:`warn`,pop:{title:this.translate.stream(`confirm_delete`),closeText:this.translate.stream(`close`),okText:this.translate.stream(`ok`)},click:()=>alert(`delete`)}]}];this.list=O;this.columnPinOptions=[{label:this.translate.stream(`pin_left`),value:`left`},{label:this.translate.stream(`pin_right`),value:`right`},{label:this.translate.stream(`no_pin`),value:null}];this.langs=[{label:`中文简体`,value:`zh-CN`},{label:`English`,value:`en-US`}];this.defaultlang=`zh-CN`;this.translate.addLangs(this.langs.map(n=>n.value)),this.translate.setFallbackLang(this.defaultlang)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-i18n-example`]],decls:4,vars:7,consts:[[3,`ngModelChange`,`change`,`ngModel`],[3,`value`],[3,`data`,`columns`,`showToolbar`,`columnHideable`,`columnSortable`,`columnPinOptions`]],template:function(e,i){e&1&&(Sc$1(0,`mat-radio-group`,0),GT(),bE(`ngModelChange`,function(o){return JN(i.defaultlang,o)||(i.defaultlang=o),o}),Gc$1(`change`,function(o){return i.translate.use(o.value)}),sN(1,Qd,2,2,`mat-radio-button`,1,iN),Dh(),zc$1(3,`mtx-grid`,2)),e&2&&(IE(`ngModel`,i.defaultlang),qT(),iT(),aN(i.langs),iT(2),ZD(`data`,i.list)(`columns`,i.columns)(`showToolbar`,!0)(`columnHideable`,!0)(`columnSortable`,!0)(`columnPinOptions`,i.columnPinOptions))},dependencies:[yn,gn$1,Ut$2,Ce,ie,Y,E,R],styles:[`.mat-radio-button[_ngcontent-%COMP%]{margin:0 1rem 1rem 0}`]})}},files:[{file:`app.html`,path:`grid/examples/i18n/app.html`},{file:`app.ts`,path:`grid/examples/i18n/app.ts`},{file:`app.scss`,path:`grid/examples/i18n/app.scss`},{file:`assets/zh-CN.json`,path:`/projects/docs/src/assets/i18n/data-grid/zh-CN.json`},{file:`assets/en-US.json`,path:`/projects/docs/src/assets/i18n/data-grid/en-US.json`}]};var Dr={title:`Loading status`,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`},{header:`Weight`,field:`weight`},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`},{header:`City`,field:`city`}];this.list=O;this.isLoading=!0}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-loading-status-example`]],decls:3,vars:4,consts:[[3,`ngModelChange`,`ngModel`],[3,`data`,`columns`,`loading`]],template:function(e,i){e&1&&(Sc$1(0,`mat-checkbox`,0),GT(),bE(`ngModelChange`,function(o){return JN(i.isLoading,o)||(i.isLoading=o),o}),YN(1,`Loading`),Dh(),zc$1(2,`mtx-grid`,1)),e&2&&(IE(`ngModel`,i.isLoading),qT(),iT(2),ZD(`data`,i.list)(`columns`,i.columns)(`loading`,i.isLoading))},dependencies:[ve,ce,yn,gn$1,Ut$2,E,R],styles:[`.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin-bottom:1rem}`]})}},files:[{file:`app.html`,path:`grid/examples/loading-status/app.html`},{file:`app.ts`,path:`grid/examples/loading-status/app.ts`},{file:`app.scss`,path:`grid/examples/loading-status/app.scss`}]};var Tr={title:`No result`,description:`
  <p>You can use <code>[noResultTemplate]="noResultTpl"</code> to customize it.</p>
  `,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`},{header:`Weight`,field:`weight`},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`},{header:`City`,field:`city`}];this.list=[]}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-no-result-example`]],decls:1,vars:2,consts:[[3,`data`,`columns`]],template:function(e,i){e&1&&zc$1(0,`mtx-grid`,0),e&2&&ZD(`data`,i.list)(`columns`,i.columns)},dependencies:[E,R],encapsulation:2})}},files:[{file:`app.html`,path:`grid/examples/no-result/app.html`},{file:`app.ts`,path:`grid/examples/no-result/app.ts`},{file:`app.scss`,path:`grid/examples/no-result/app.scss`}]};var Ud=()=>[5,10,20];var Rr={title:`Remote Data`,component:class t{constructor(){this.http=p(mI);this.columns=[{header:`Name`,field:`name`,formatter:n=>`<a href="${n.html_url}" target="_blank">${n.name}</a>`},{header:`Owner`,field:`owner.login`},{header:`Owner Avatar`,field:`owner.avatar_url`,type:`image`},{header:`Description`,field:`description`,width:`300px`},{header:`Stars`,field:`stargazers_count`},{header:`Forks`,field:`forks_count`},{header:`Score`,field:`score`},{header:`Issues`,field:`open_issues`},{header:`Language`,field:`language`},{header:`License`,field:`license.name`},{header:`Home Page`,field:`homepage`,type:`link`},{header:`Is forked`,field:`fork`,type:`boolean`},{header:`Archived`,field:`archived`,type:`tag`,tag:{true:{text:`Yes`,color:`red-100`},false:{text:`No`,color:`green-100`}}},{header:`Created Date`,field:`created_at`},{header:`Updated Date`,field:`updated_at`}];this.list=[];this.total=0;this.isLoading=!0;this.query={q:`user:nzbin`,page:0,per_page:5}}get params(){let n=Object.assign({},this.query);return n.page+=1,n}ngOnInit(){this.getList()}getList(){this.isLoading=!0,this.http.get(`https://api.github.com/search/repositories`,{params:this.params}).subscribe(n=>{this.list=n.items,this.total=n.total_count,this.isLoading=!1},()=>{this.isLoading=!1},()=>{this.isLoading=!1})}getNextPage(n){this.query.page=n.pageIndex,this.query.per_page=n.pageSize,this.getList()}refresh(){this.getList()}reset(){this.query.page=0,this.query.per_page=5,this.getList()}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-remote-data-example`]],decls:5,vars:9,consts:[[`matButton`,`elevated`,`color`,`primary`,3,`click`],[`matButton`,`elevated`,`color`,`warn`,3,`click`],[3,`page`,`data`,`columns`,`length`,`loading`,`pageOnFront`,`pageIndex`,`pageSize`,`pageSizeOptions`]],template:function(e,i){e&1&&(Sc$1(0,`button`,0),Gc$1(`click`,function(){return i.refresh()}),YN(1,`Refresh`),Dh(),Sc$1(2,`button`,1),Gc$1(`click`,function(){return i.reset()}),YN(3,`Reset`),Dh(),Sc$1(4,`mtx-grid`,2),Gc$1(`page`,function(o){return i.getNextPage(o)}),Dh()),e&2&&(iT(4),ZD(`data`,i.list)(`columns`,i.columns)(`length`,i.total)(`loading`,i.isLoading)(`pageOnFront`,!1)(`pageIndex`,i.query.page)(`pageSize`,i.query.per_page)(`pageSizeOptions`,oA(8,Ud)))},dependencies:[Vt,Ot$2,E,R],styles:[`.mat-mdc-raised-button[_ngcontent-%COMP%]{margin-bottom:1rem}`]})}},files:[{file:`app.html`,path:`grid/examples/remote-data/app.html`},{file:`app.ts`,path:`grid/examples/remote-data/app.ts`},{file:`app.scss`,path:`grid/examples/remote-data/app.scss`}]};var Nr={title:`Custom class for row and column`,component:class t{constructor(){this.rowClassFormatter={success:(n,e)=>n.name===`Boron`,danger:(n,e)=>e===1};this.columns=[{header:`Name`,field:`name`},{header:`Weight`,field:`weight`,class:n=>n?.weight>10?`warning`:``},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`,class:`info`},{header:`City`,field:`city`}];this.list=O}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-row-column-class-example`]],decls:1,vars:3,consts:[[3,`data`,`columns`,`rowClassFormatter`]],template:function(e,i){e&1&&zc$1(0,`mtx-grid`,0),e&2&&ZD(`data`,i.list)(`columns`,i.columns)(`rowClassFormatter`,i.rowClassFormatter)},dependencies:[E,R],styles:[`[_nghost-%COMP%]     .mtx-grid .success{background-color:#d1e7dd}[_nghost-%COMP%]     .mtx-grid .danger{background-color:#f8d7da}[_nghost-%COMP%]     .mtx-grid .warning{background-color:#fff3cd}[_nghost-%COMP%]     .mtx-grid .info{background-color:#cff4fc}`]})}},files:[{file:`app.html`,path:`grid/examples/row-column-class/app.html`},{file:`app.ts`,path:`grid/examples/row-column-class/app.ts`},{file:`app.scss`,path:`grid/examples/row-column-class/app.scss`}]};var Ir={title:`Row selectable`,description:`
  <p>If you choose the multiple option, you can press <kbd>ctrl</kbd>/<kbd>command</kbd> +
  click or select checkboxs to choose multiple rows.</p>
  `,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`},{header:`Weight`,field:`weight`},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`},{header:`City`,field:`city`}];this.list=O;this.multiSelectable=!0;this.hideRowSelectionCheckbox=!1;this.rowSelectable=!0;this.rowSelected=O.slice(2,3);this.rowSelectionFormatter={disabled:n=>n.name===`Boron`,hideCheckbox:n=>n.name===`John`}}log(n){console.log(n)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-row-selectable-example`]],decls:11,vars:12,consts:[[3,`ngModelChange`,`ngModel`],[3,`value`],[3,`rowSelectedChange`,`cellSelectedChange`,`data`,`columns`,`multiSelectable`,`hideRowSelectionCheckbox`,`rowSelectable`,`rowSelected`,`rowSelectionFormatter`]],template:function(e,i){e&1&&(Sc$1(0,`div`)(1,`mat-checkbox`,0),GT(),bE(`ngModelChange`,function(o){return JN(i.rowSelectable,o)||(i.rowSelectable=o),o}),YN(2,`Row selectable`),Dh(),Sc$1(3,`mat-checkbox`,0),GT(),bE(`ngModelChange`,function(o){return JN(i.hideRowSelectionCheckbox,o)||(i.hideRowSelectionCheckbox=o),o}),YN(4,`Hide checkbox`),Dh(),Sc$1(5,`mat-radio-group`,0),GT(),bE(`ngModelChange`,function(o){return JN(i.multiSelectable,o)||(i.multiSelectable=o),o}),Sc$1(6,`mat-radio-button`,1),YN(7,`Single`),Dh(),Sc$1(8,`mat-radio-button`,1),YN(9,`Multiple`),Dh()()(),Sc$1(10,`mtx-grid`,2),Gc$1(`rowSelectedChange`,function(o){return i.log(o)})(`cellSelectedChange`,function(o){return i.log(o)}),Dh()),e&2&&(iT(),IE(`ngModel`,i.rowSelectable),qT(),iT(2),IE(`ngModel`,i.hideRowSelectionCheckbox),qT(),iT(2),IE(`ngModel`,i.multiSelectable),qT(),iT(),ZD(`value`,!1),iT(2),ZD(`value`,!0),iT(2),ZD(`data`,i.list)(`columns`,i.columns)(`multiSelectable`,i.multiSelectable)(`hideRowSelectionCheckbox`,i.hideRowSelectionCheckbox)(`rowSelectable`,i.rowSelectable)(`rowSelected`,i.rowSelected)(`rowSelectionFormatter`,i.rowSelectionFormatter))},dependencies:[ve,ce,yn,gn$1,Ut$2,Ce,ie,Y,E,R],styles:[`.mat-checkbox[_ngcontent-%COMP%], .mat-radio-button[_ngcontent-%COMP%]{display:inline-block;margin-right:1rem;margin-bottom:1rem}`]})}},files:[{file:`app.html`,path:`grid/examples/row-selectable/app.html`},{file:`app.ts`,path:`grid/examples/row-selectable/app.ts`},{file:`app.scss`,path:`grid/examples/row-selectable/app.scss`}]};var Er={title:`Row with buttons`,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`},{header:`Weight`,field:`weight`},{header:`Gender`,field:`gender`},{header:`Mobile`,field:`mobile`},{header:`City`,field:`city`},{header:`Operation`,field:`operation`,width:`220px`,pinned:`right`,right:`0px`,type:`button`,buttons:[{type:`icon`,icon:`file_copy`,tooltip:`copy`,disabled:!0,click:()=>alert(`copy`)},{type:`icon`,icon:`edit`,tooltip:`Edit`,click:()=>alert(`edit`)},{type:`icon`,icon:`delete`,tooltip:`Delete`,color:`warn`,pop:`Confirm delete?`,click:()=>alert(`delete`)},{type:`icon`,icon:`more_vert`,tooltip:`More`,children:[{icon:`dialpad`,text:`Redial`,children:[{text:`Vertebrates`},{text:`Invertebrates`}]},{icon:`voicemail`,text:`Check voice mail`,disabled:!0},{icon:`notifications_off`,text:`Disable alerts`,click:()=>alert(`Disable alerts`)}]}]}];this.list=O}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-row-with-buttons-example`]],decls:1,vars:2,consts:[[3,`data`,`columns`]],template:function(e,i){e&1&&zc$1(0,`mtx-grid`,0),e&2&&ZD(`data`,i.list)(`columns`,i.columns)},dependencies:[E,R],encapsulation:2})}},files:[{file:`app.html`,path:`grid/examples/row-with-buttons/app.html`},{file:`app.ts`,path:`grid/examples/row-with-buttons/app.ts`},{file:`app.scss`,path:`grid/examples/row-with-buttons/app.scss`}]};var zr={title:`Sortable`,component:class t{constructor(){this.columns=[{header:`Name`,field:`name`,sortable:!0},{header:`Weight`,field:`weight`,sortable:!0},{header:`Gender`,field:`gender`,sortable:!0},{header:`Mobile`,field:`mobile`,sortable:!1},{header:`City`,field:`city`,sortable:!0,sortProp:{arrowPosition:`before`,disableClear:!0,start:`desc`}}];this.list=O}log(n){console.log(n)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`data-grid-sortable-example`]],decls:1,vars:5,consts:[[`sortActive`,`name`,`sortDirection`,`asc`,`sortStart`,`asc`,3,`sortChange`,`data`,`columns`,`sortOnFront`,`sortDisableClear`,`sortDisabled`]],template:function(e,i){e&1&&(Sc$1(0,`mtx-grid`,0),Gc$1(`sortChange`,function(o){return i.log(o)}),Dh()),e&2&&ZD(`data`,i.list)(`columns`,i.columns)(`sortOnFront`,!0)(`sortDisableClear`,!0)(`sortDisabled`,!1)},dependencies:[E,R],encapsulation:2})}},files:[{file:`app.html`,path:`grid/examples/sortable/app.html`},{file:`app.ts`,path:`grid/examples/sortable/app.ts`},{file:`app.scss`,path:`grid/examples/sortable/app.scss`}]};function Kd(t,n){if(t&1&&zc$1(0,`doc-heading`,0)(1,`example-viewer`,1),t&2){let e=n.$implicit;ZD(`text`,e.title),iT(),ZD(`exampleData`,e)}}function Xd(t,n){t&1&&sN(0,Kd,2,2,null,null,iN),t&2&&aN(n.examples)}function Zd(t,n){t&1&&zc$1(0,`doc-viewer`,0),t&2&&ZD(`path`,n.path)}var ea=class t{constructor(){this.route=p(En$1)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`app-grid-overview`]],decls:7,vars:3,consts:[[3,`text`],[3,`exampleData`]],template:function(e,i){if(e&1&&(Sc$1(0,`p`),YN(1,` The `),Sc$1(2,`code`),YN(3,`mtx-grid`),Dh(),YN(4,` is an powerful material table component. It supports cell selectable, row selectable, multiple row selectable, row expandable, column hiding, column moving and so on.
`),Dh(),tN(5,Xd,2,0),dA(6,`async`)),e&2){let a;iT(5),rN((a=hA(6,1,i.route.data))?5:-1,a)}},dependencies:[x,ad$1,JR],encapsulation:2})}};var ta=class t{constructor(){this.route=p(En$1)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=gn({type:t,selectors:[[`app-grid-api`]],decls:2,vars:3,consts:[[3,`path`]],template:function(e,i){if(e&1&&(tN(0,Zd,1,1,`doc-viewer`,0),dA(1,`async`)),e&2){let a;rN((a=hA(1,1,i.route.data))?0:-1,a)}},dependencies:[J_,JR],encapsulation:2})}};var S0=[{path:``,redirectTo:`overview`,pathMatch:`full`},{path:`overview`,component:ea,pathMatch:`full`,data:{examples:[dr,ur,gr,Dr,Sr,zr,Ir,wr,pr,hr,Mr,Er,fr,yr,Cr,Nr,Tr,br,vr,xr,kr,Rr]},providers:[Vt$1({loader:Wt$1({prefix:`assets/i18n/data-grid/`,suffix:`_json`})})]},{path:`api`,component:ta,pathMatch:`full`,data:{path:`grid/grid.md`}},{path:`**`,redirectTo:`overview`}];export{S0 as routes};