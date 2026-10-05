import{n as s,t as r}from"./chunk-Ch7qlBDL.js";import{At as O,B as Ge,C as DN,Dr as mi,E as Dh,Et as Me,Fi as ye,Gt as Sh,H as HD,Ht as Qe,It as Pm,Pn as be,Si as vE,Un as dt,Vn as dA,Wr as p$1,Wt as Sc,Xt as T_,Yr as po,Zn as fi,Zr as q5,ai as rN,ar as hN,bt as Lm,d as BN,di as ss,dn as XD,gr as ig,in as Ut$1,ir as hA,jr as ne,kn as aN,li as sN,lr as hv,mi as t_,mn as YN,mr as iT,nn as UM,nr as gn,o as A,ot as JR,pi as tN,pr as iN,r as $I,ti as qc,tt as Iw,vi as ue,vr as j,x as D$1,yn as ZD,z as Gc,zi as zD,zr as og}from"./chunk-_FgkqbxZ.js";import{r as T,t as H}from"./chunk-D2xfGzH4.js";import{o as Qe$1}from"./chunk-rXs1VGKJ.js";import{C as Qe$2,M as jt$1,b as Ge$1,d as Ot,m as dt$1,n as wt,p as Vt$1,t as Mt}from"./main-X2AELSID.js";import{a as u,i as se,n as f,r as he,t as Le}from"./chunk-MQC_ZAkG.js";import{r as dt$2}from"./chunk-CISxWjdF.js";import{t as r$1}from"./chunk-B20p9A-R.js";var B=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var Z=`mdc-dialog--open`;var Ft=`mdc-dialog--opening`;var Bt=`mdc-dialog--closing`;var Kt=150;var Ut=75;var Yt=(()=>{class n extends se{_animationStateChanged=new ue;_animationsEnabled=!T_();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?zt(this._config.enterAnimationDuration)??Kt:0;_exitAnimationDuration=this._animationsEnabled?zt(this._config.exitAnimationDuration)??Ut:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Pt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ft,Z)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Z),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Z),this._animationsEnabled?(this._hostElement.style.setProperty(Pt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Bt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Ft,Bt)}_waitForAnimationToComplete(t,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let i=super.attachComponentPortal(t);return i.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),i}static ɵfac=(()=>{let t;return function(a){return(t||(t=hv(n)))(a||n)}})();static ɵcmp=(function(){function t(i,a){}return gn({type:n,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(a,l){a&2&&(XD(`id`,l._config.id),ss(`aria-modal`,l._config.ariaModal)(`role`,l._config.role)(`aria-labelledby`,l._config.ariaLabel?null:l._ariaLabelledByQueue[0])(`aria-label`,l._config.ariaLabel)(`aria-describedby`,l._config.ariaDescribedBy||null),qc(`_mat-animation-noopable`,!l._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,l._actionSectionCount>0))},features:[HD],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(a,l){a&1&&(Sc(0,`div`,0)(1,`div`,1),zD(2,t,0,0,`ng-template`,2),Dh()())},dependencies:[H],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var Pt=`--mat-dialog-transition-duration`;function zt(n){return n==null?null:typeof n==`number`?n:n.endsWith(`ms`)?og(n.substring(0,n.length-2)):n.endsWith(`s`)?og(n.substring(0,n.length-1))*1e3:n===`0`?0:null}var F=(function(n){return n[n.OPEN=0]=`OPEN`,n[n.CLOSING=1]=`CLOSING`,n[n.CLOSED=2]=`CLOSED`,n})(F||{});var p=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new fi(1);_beforeClosed=new fi(1);_result;_closeFallbackTimeout;_state=F.OPEN;_closeInteractionType;constructor(e,t,i){this._ref=e,this._config=t,this._containerInstance=i,this.disableClose=t.disableClose,this.id=e.id,e.addPanelClass(`mat-mdc-dialog-panel`),i._animationStateChanged.pipe(be(a=>a.state===`opened`),Ge(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(be(a=>a.state===`closed`),Ge(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),e.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Iw(this.backdropClick(),this.keydownEvents().pipe(be(a=>a.keyCode===27&&!this.disableClose&&!t_(a)))).subscribe(a=>{this.disableClose||(a.preventDefault(),jt(this,a.type===`keydown`?`keyboard`:`mouse`))})}close(e){let t=this._config.closePredicate;t&&!t(e,this._config,this.componentInstance)||(this._result=e,this._containerInstance._animationStateChanged.pipe(be(i=>i.state===`closing`),Ge(1)).subscribe(i=>{this._beforeClosed.next(e),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=F.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(e){let t=this._ref.config.positionStrategy;return e&&(e.left||e.right)?e.left?t.left(e.left):t.right(e.right):t.centerHorizontally(),e&&(e.top||e.bottom)?e.top?t.top(e.top):t.bottom(e.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(e=``,t=``){return this._ref.updateSize(e,t),this}addPanelClass(e){return this._ref.addPanelClass(e),this}removePanelClass(e){return this._ref.removePanelClass(e),this}getState(){return this._state}_finishDialogClose(){this._state=F.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function jt(n,e,t){return n._closeInteractionType=e,n.close(t)}var tt=new D$1(`MatMdcDialogData`);var Qt=new D$1(`mat-mdc-dialog-default-options`);var Xt=new D$1(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=p$1(ne);return()=>Ge$1(n)}});var D=(()=>{class n{_defaultOptions=p$1(Qt,{optional:!0});_scrollStrategy=p$1(Xt);_parentDialog=p$1(n,{optional:!0,skipSelf:!0});_idGenerator=p$1(ig);_injector=p$1(ne);_dialog=p$1(he);_animationsDisabled=T_();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new j;_afterOpenedAtThisLevel=new j;dialogConfigClass=B;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=mi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(po(void 0)));constructor(){this._dialogRefConstructor=p,this._dialogContainerType=Yt,this._dialogDataToken=tt}open(t,i){let a;i=r(r({},this._defaultOptions||new B),i),i.id=i.id||this._idGenerator.getId(`mat-mdc-dialog-`),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let l=this._dialog.open(t,s(r({},i),{positionStrategy:Qe$2(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()===`0`||i.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:u,useValue:i}]},templateContext:()=>({dialogRef:a}),providers:(u,qt,nt)=>(a=new this._dialogRefConstructor(u,i,nt),a.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:nt},{provide:this._dialogDataToken,useValue:qt.data},{provide:this._dialogRefConstructor,useValue:a},{provide:f,useValue:null}])}));return a.componentRef=l.componentRef,a.componentInstance=l.componentInstance,this.openDialogs.push(a),this.afterOpened.next(a),a.afterClosed().subscribe(()=>{let u=this.openDialogs.indexOf(a);u>-1&&(this.openDialogs.splice(u,1),this.openDialogs.length||this._getAfterAllClosed().next())}),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(i=>i.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let i=t.length;for(;i--;)t[i].close()}static ɵfac=function(i){return new(i||n)};static ɵprov=A({token:n,factory:n.ɵfac})}return n})();var Mn=(()=>{class n{dialogRef=p$1(p,{optional:!0});_elementRef=p$1(ye);_dialog=p$1(D);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=Gt(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let i=t._matDialogClose;i&&(this.dialogResult=i.currentValue)}_onButtonClick(t){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&jt(this.dialogRef,t.screenX===0&&t.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(i){return new(i||n)};static ɵdir=Me({type:n,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(i,a){i&1&&Gc(`click`,function(u){return a._onButtonClick(u)}),i&2&&ss(`aria-label`,a.ariaLabel||null)(`type`,a.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[Ut$1]})}return n})();var Vt=(()=>{class n{_dialogRef=p$1(p,{optional:!0});_elementRef=p$1(ye);_dialog=p$1(D);ngOnInit(){this._dialogRef||(this._dialogRef=Gt(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(i){return new(i||n)};static ɵdir=Me({type:n})}return n})();var Sn=(()=>{class n extends Vt{id=p$1(ig).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let t;return function(a){return(t||(t=hv(n)))(a||n)}})();static ɵdir=Me({type:n,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(i,a){i&2&&XD(`id`,a.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[HD]})}return n})();var kn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Me({type:n,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[UM([Qe$1])]})}return n})();var Tn=(()=>{class n extends Vt{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let t;return function(a){return(t||(t=hv(n)))(a||n)}})();static ɵdir=Me({type:n,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(i,a){i&2&&qc(`mat-mdc-dialog-actions-align-start`,a.align===`start`)(`mat-mdc-dialog-actions-align-center`,a.align===`center`)(`mat-mdc-dialog-actions-align-end`,a.align===`end`)},inputs:{align:`align`},features:[HD]})}return n})();function Gt(n,e){let t=n.nativeElement.parentElement;for(;t&&!t.classList.contains(`mat-mdc-dialog-container`);)t=t.parentElement;return t?e.find(i=>i.id===t.id):null}var Ht=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=dt({type:n});static ɵinj=Qe({providers:[D],imports:[Le,jt$1,T,q5]})}return n})();function Zt(n,e){if(n&1){let t=hN();Sc(0,`button`,4),Gc(`click`,function(){Lm(t);let a=DN(2);return Pm(a._onClose())}),Sc(1,`mat-icon`),YN(2,`close`),Dh()()}}function Jt(n,e){if(n&1&&(Sc(0,`h1`,0)(1,`span`),YN(2),dA(3,`toObservable`),dA(4,`async`),Dh(),tN(5,Zt,3,0,`button`,3),Dh()),n&2){let t=DN();iT(2),vE(hA(4,4,hA(3,2,t.data.title))),iT(3),rN(t.data.showCloseIcon?5:-1)}}function tn(n,e){if(n&1&&(Sc(0,`div`,1)(1,`p`),YN(2),dA(3,`toObservable`),dA(4,`async`),Dh()()),n&2){let t=DN();iT(2),vE(hA(4,3,hA(3,1,t.data.description)))}}function nn(n,e){if(n&1){let t=hN();Sc(0,`button`,7),Gc(`click`,function(){Lm(t);let a=DN().$implicit,l=DN();return Pm(l._onClick(a.onClick))}),YN(1),dA(2,`toObservable`),dA(3,`async`),Dh()}if(n&2){let t=DN().$implicit;BN(t.class),ZD(`matButton`,t.type||`text`)(`color`,t.color),iT(),Sh(` `,hA(3,7,hA(2,5,t.text)),` `)}}function en(n,e){if(n&1){let t=hN();Sc(0,`button`,8),Gc(`click`,function(){Lm(t);let a=DN().$implicit,l=DN();return Pm(l._onClick(a.onClick))}),YN(1),dA(2,`toObservable`),dA(3,`async`),Dh()}if(n&2){let t=DN().$implicit;BN(t.class),ZD(`matButton`,t.type||`text`)(`color`,t.color),iT(),Sh(` `,hA(3,7,hA(2,5,t.text)),` `)}}function an(n,e){if(n&1&&tN(0,nn,4,9,`button`,5)(1,en,4,9,`button`,6),n&2){let t=e.$implicit;rN(t.focusInitial?0:1)}}var h=class n{constructor(){this.dialogRef=p$1(p);this.data=p$1(tt)}_onClick(e){e&&e.call(this),this._onClose()}_onClose(){this.dialogRef.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=gn({type:n,selectors:[[`mtx-dialog-container`]],hostAttrs:[1,`mtx-dialog-container`],exportAs:[`mtxDialogContainer`],decls:5,vars:2,consts:[[1,`mtx-dialog-title`],[1,`mtx-dialog-content`],[1,`mtx-dialog-actions`],[`matIconButton`,``],[`matIconButton`,``,3,`click`],[`cdkFocusInitial`,``,3,`matButton`,`color`,`class`],[3,`matButton`,`color`,`class`],[`cdkFocusInitial`,``,3,`click`,`matButton`,`color`],[3,`click`,`matButton`,`color`]],template:function(t,i){t&1&&(tN(0,Jt,6,6,`h1`,0),tN(1,tn,5,5,`div`,1),Sc(2,`div`,2),sN(3,an,2,1,null,null,iN),Dh()),t&2&&(rN(i.data.title?0:-1),iT(),rN(i.data.description?1:-1),iT(2),aN(i.data.buttons))},dependencies:[Ot,dt$1,wt,JR,dt$2],styles:[`.mtx-dialog-title{display:flex;justify-content:space-between;align-items:center;padding:8px 24px;margin:0;line-height:48px;font-weight:500;font-size:20px}.mtx-dialog-title .mat-mdc-button-base{margin-right:-16px}[dir=rtl] .mtx-dialog-title .mat-mdc-button-base{margin-right:0;margin-left:-16px}.mtx-dialog-content{display:block;max-height:65vh;padding:0 24px;overflow:auto;-webkit-overflow-scrolling:touch}.mtx-dialog-content p{margin-top:0}.mtx-dialog-actions{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:8px}.mtx-dialog-actions .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mtx-dialog-actions .mat-mdc-button-base{margin-left:0;margin-right:8px}
`],encapsulation:2})}};var on={title:``,description:``,buttons:[{text:`Cancel`,onClick:()=>{}},{color:`warn`,text:`OK`,focusInitial:!0,onClick:()=>{}}],showCloseIcon:!1,disableClose:!0,width:`300px`};var w=class n{constructor(){this.dialog=p$1(D)}originalOpen(e=h,t){return this.dialog.open(e,t)}open(e,t=h){let i=Object.assign({},on,e);return this.dialog.open(t,s(r({},i),{data:i}))}alert(e,t=``,i=()=>{}){this.open({title:e,description:t,buttons:[{color:`warn`,text:`OK`,onClick:()=>i()}]})}confirm(e,t=``,i=()=>{},a=()=>{}){this.open({title:e,description:t,buttons:[{text:`Cancel`,onClick:()=>a()},{color:`warn`,text:`OK`,focusInitial:!0,onClick:()=>i()}]})}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=O({token:n,factory:n.ɵfac,providedIn:`root`})}};var $t=class n{static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵmod=dt({type:n})}static{this.ɵinj=Qe({providers:[w],imports:[$I,Ht,Vt$1,Mt,r$1,h]})}};export{Tn as a,tt as c,Sn as i,w as l,Ht as n,kn as o,Mn as r,p as s,$t as t};