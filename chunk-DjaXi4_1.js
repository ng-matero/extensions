import {p as pe,h as h$1,M as Me$1,l as le}from'./chunk-DSviMNnb.js';import {d as dt}from'./chunk-uirE-uSG.js';import {r}from'./chunk-DTljEyFt.js';import {p as p$1,a6 as x,a7 as w,aY as R,D,b1 as Yp,z as oe,e as uw,G as H,bX as pi,aL as lo,cK as Ke,F as T,d as dn,$ as $t,bv as pt,aw as wt,am as $R,an as FM,_ as _c,af as HM,aO as BM,u as uh,ap as jM,ag as VT,ai as VM,ci as li,aC as Ee,aH as He,A as nb,aF as FI,l as lt,Y as Ye,bH as Yt$1,bJ as H$1,c as b5,q as pe$1,T as Te$1,P as Gt$1,H as Hc,h as es,Q as Qv,C as CD,aZ as PD,b as $c,cL as _M,as as Qe,bs as C_,K as Kt$1,av as yt,cM as We,N as ce,bg as k,bj as SD,R as RA,ao as WA,ax as eA,aT as tE,aq as ZA,t as Zp,aN as ZM,bi as _A,ah as RD,aR as mh,aU as bm,aV as Cm}from'./main-CKBO76XE.js';function Wt(e,a){}var P=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=true;backdropClass="";disableClose=false;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=false;autoFocus="first-tabbable";restoreFocus=true;delayFocusTrap=true;scrollStrategy;closeOnNavigation=true;enterAnimationDuration;exitAnimationDuration;bindings},Z="mdc-dialog--open",Lt="mdc-dialog--opening",Bt="mdc-dialog--closing",Kt=150,Ut=75,Yt=(()=>{class e extends le{_animationStateChanged=new ce;_animationsEnabled=!uw();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Nt(this._config.enterAnimationDuration)??Kt:0;_exitAnimationDuration=this._animationsEnabled?Nt(this._config.exitAnimationDuration)??Ut:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation();}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Pt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Lt,Z)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Z),Promise.resolve().then(()=>this._finishDialogOpen()));}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Z),this._animationsEnabled?(this._hostElement.style.setProperty(Pt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Bt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose());}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck();}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration);};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration});};_clearAnimationClasses(){this._hostElement.classList.remove(Lt,Bt);}_waitForAnimationToComplete(t,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,t);}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t();});}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus();}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t});}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer);}attachComponentPortal(t){let i=super.attachComponentPortal(t);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let t;return function(n){return (t||(t=Qv(e)))(n||e)}})();static \u0275cmp=dn({type:e,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,n){i&2&&(PD("id",n._config.id),es("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),$c("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0));},features:[CD],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,n){i&1&&(_c(0,"div",0)(1,"div",1),SD(2,Wt,0,0,"ng-template",2),uh()());},dependencies:[k],styles:[`.mat-mdc-dialog-container {
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
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
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
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
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
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
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
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
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
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
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
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
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
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
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
`],encapsulation:2,changeDetection:1})}return e})(),Pt="--mat-dialog-transition-duration";function Nt(e){return e==null?null:typeof e=="number"?e:e.endsWith("ms")?Zp(e.substring(0,e.length-2)):e.endsWith("s")?Zp(e.substring(0,e.length-1))*1e3:e==="0"?0:null}var B=(function(e){return e[e.OPEN=0]="OPEN",e[e.CLOSING=1]="CLOSING",e[e.CLOSED=2]="CLOSED",e})(B||{}),p=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new li(1);_beforeClosed=new li(1);_result;_closeFallbackTimeout;_state=B.OPEN;_closeInteractionType;constructor(a,t,i){this._ref=a,this._config=t,this._containerInstance=i,this.disableClose=t.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(Ee(n=>n.state==="opened"),He(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete();}),i._animationStateChanged.pipe(Ee(n=>n.state==="closed"),He(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose();}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose();}),nb(this.backdropClick(),this.keydownEvents().pipe(Ee(n=>n.keyCode===27&&!this.disableClose&&!FI(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),jt(this,n.type==="keydown"?"keyboard":"mouse"));});}close(a){let t=this._config.closePredicate;t&&!t(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(Ee(i=>i.state==="closing"),He(1)).subscribe(i=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100);}),this._state=B.CLOSING,this._containerInstance._startExitAnimation());}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=B.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null;}};function jt(e,a,t){return e._closeInteractionType=a,e.close(t)}var tt=new D("MatMdcDialogData"),Qt=new D("mat-mdc-dialog-default-options"),Xt=new D("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let e=p$1(oe);return ()=>We(e)}}),v=(()=>{class e{_defaultOptions=p$1(Qt,{optional:true});_scrollStrategy=p$1(Xt);_parentDialog=p$1(e,{optional:true,skipSelf:true});_idGenerator=p$1(Yp);_injector=p$1(oe);_dialog=p$1(pe);_animationsDisabled=uw();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new H;_afterOpenedAtThisLevel=new H;dialogConfigClass=P;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=pi(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(lo(void 0)));constructor(){this._dialogRefConstructor=p,this._dialogContainerType=Yt,this._dialogDataToken=tt;}open(t,i){let n;i=w(w({},this._defaultOptions||new P),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let g=this._dialog.open(t,x(w({},i),{positionStrategy:Ke(this._injector).centerHorizontally().centerVertically(),disableClose:true,closePredicate:void 0,closeOnDestroy:false,closeOnOverlayDetachments:false,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:h$1,useValue:i}]},templateContext:()=>({dialogRef:n}),providers:(u,$t,et)=>(n=new this._dialogRefConstructor(u,i,et),n.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:et},{provide:this._dialogDataToken,useValue:$t.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=g.componentRef,n.componentInstance=g.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let u=this.openDialogs.indexOf(n);u>-1&&(this.openDialogs.splice(u,1),this.openDialogs.length||this._getAfterAllClosed().next());}),n}closeAll(){this._closeDialogs(this.openDialogs);}getDialogById(t){return this.openDialogs.find(i=>i.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete();}_closeDialogs(t){let i=t.length;for(;i--;)t[i].close();}static \u0275fac=function(i){return new(i||e)};static \u0275prov=T({token:e,factory:e.\u0275fac})}return e})(),Ae=(()=>{class e{dialogRef=p$1(p,{optional:true});_elementRef=p$1(pe$1);_dialog=p$1(v);ariaLabel;type="button";dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=zt(this._elementRef,this._dialog.openDialogs));}ngOnChanges(t){let i=t._matDialogClose;i&&(this.dialogResult=i.currentValue);}_onButtonClick(t){this._elementRef.nativeElement.getAttribute("aria-disabled")!=="true"&&jt(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult);}static \u0275fac=function(i){return new(i||e)};static \u0275dir=Te$1({type:e,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(i,n){i&1&&Hc("click",function(u){return n._onButtonClick(u)}),i&2&&es("aria-label",n.ariaLabel||null)("type",n.type);},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Gt$1]})}return e})(),Vt=(()=>{class e{_dialogRef=p$1(p,{optional:true});_elementRef=p$1(pe$1);_dialog=p$1(v);ngOnInit(){this._dialogRef||(this._dialogRef=zt(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd();});}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove();});}static \u0275fac=function(i){return new(i||e)};static \u0275dir=Te$1({type:e})}return e})(),we=(()=>{class e extends Vt{id=p$1(Yp).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);}static \u0275fac=(()=>{let t;return function(n){return (t||(t=Qv(e)))(n||e)}})();static \u0275dir=Te$1({type:e,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(i,n){i&2&&PD("id",n.id);},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[CD]})}return e})(),Te=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=Te$1({type:e,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[_M([Qe])]})}return e})(),Me=(()=>{class e extends Vt{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1);}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);}static \u0275fac=(()=>{let t;return function(n){return (t||(t=Qv(e)))(n||e)}})();static \u0275dir=Te$1({type:e,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(i,n){i&2&&$c("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end");},inputs:{align:"align"},features:[CD]})}return e})();function zt(e,a){let t=e.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?a.find(i=>i.id===t.id):null}var Gt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=lt({type:e});static \u0275inj=Ye({providers:[v],imports:[Me$1,Yt$1,H$1,b5]})}return e})();function Zt(e,a){if(e&1){let t=ZM();_c(0,"button",4),Hc("click",function(){bm(t);let n=eA(2);return Cm(n._onClose())}),_c(1,"mat-icon"),RA(2,"close"),uh()();}}function Jt(e,a){if(e&1&&(_c(0,"h1",0)(1,"span"),RA(2),WA(3,"toObservable"),WA(4,"async"),uh(),FM(5,Zt,3,0,"button",3),uh()),e&2){let t=eA();VT(2),tE(ZA(4,4,ZA(3,2,t.data.title))),VT(3),jM(t.data.showCloseIcon?5:-1);}}function te(e,a){if(e&1&&(_c(0,"div",1)(1,"p"),RA(2),WA(3,"toObservable"),WA(4,"async"),uh()()),e&2){let t=eA();VT(2),tE(ZA(4,3,ZA(3,1,t.data.description)));}}function ee(e,a){if(e&1){let t=ZM();_c(0,"button",7),Hc("click",function(){bm(t);let n=eA().$implicit,g=eA();return Cm(g._onClick(n.onClick))}),RA(1),WA(2,"toObservable"),WA(3,"async"),uh();}if(e&2){let t=eA().$implicit;_A(t.class),RD("matButton",t.type||"text")("color",t.color),VT(),mh(" ",ZA(3,7,ZA(2,5,t.text))," ");}}function ie(e,a){if(e&1){let t=ZM();_c(0,"button",8),Hc("click",function(){bm(t);let n=eA().$implicit,g=eA();return Cm(g._onClick(n.onClick))}),RA(1),WA(2,"toObservable"),WA(3,"async"),uh();}if(e&2){let t=eA().$implicit;_A(t.class),RD("matButton",t.type||"text")("color",t.color),VT(),mh(" ",ZA(3,7,ZA(2,5,t.text))," ");}}function ne(e,a){if(e&1&&FM(0,ee,4,9,"button",5)(1,ie,4,9,"button",6),e&2){let t=a.$implicit;jM(t.focusInitial?0:1);}}var h=class e{constructor(){this.dialogRef=p$1(p);this.data=p$1(tt);}_onClick(a){a&&a.call(this),this._onClose();}_onClose(){this.dialogRef.close();}static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275cmp=dn({type:e,selectors:[["mtx-dialog-container"]],hostAttrs:[1,"mtx-dialog-container"],exportAs:["mtxDialogContainer"],decls:5,vars:2,consts:[[1,"mtx-dialog-title"],[1,"mtx-dialog-content"],[1,"mtx-dialog-actions"],["matIconButton",""],["matIconButton","",3,"click"],["cdkFocusInitial","",3,"matButton","color","class"],[3,"matButton","color","class"],["cdkFocusInitial","",3,"click","matButton","color"],[3,"click","matButton","color"]],template:function(t,i){t&1&&(FM(0,Jt,6,6,"h1",0),FM(1,te,5,5,"div",1),_c(2,"div",2),HM(3,ne,2,1,null,null,BM),uh()),t&2&&(jM(i.data.title?0:-1),VT(),jM(i.data.description?1:-1),VT(2),VM(i.data.buttons));},dependencies:[$t,pt,wt,$R,dt],styles:[`.mtx-dialog-title{display:flex;justify-content:space-between;align-items:center;padding:8px 24px;margin:0;line-height:48px;font-weight:500;font-size:20px}.mtx-dialog-title .mat-mdc-button-base{margin-right:-16px}[dir=rtl] .mtx-dialog-title .mat-mdc-button-base{margin-right:0;margin-left:-16px}.mtx-dialog-content{display:block;max-height:65vh;padding:0 24px;overflow:auto;-webkit-overflow-scrolling:touch}.mtx-dialog-content p{margin-top:0}.mtx-dialog-actions{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:8px}.mtx-dialog-actions .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mtx-dialog-actions .mat-mdc-button-base{margin-left:0;margin-right:8px}
`],encapsulation:2});}};var ae={title:"",description:"",buttons:[{text:"Cancel",onClick:()=>{}},{color:"warn",text:"OK",focusInitial:true,onClick:()=>{}}],showCloseIcon:false,disableClose:true,width:"300px"},A=class e{constructor(){this.dialog=p$1(v);}originalOpen(a=h,t){return this.dialog.open(a,t)}open(a,t=h){let i=Object.assign({},ae,a);return this.dialog.open(t,x(w({},i),{data:i}))}alert(a,t="",i=()=>{}){this.open({title:a,description:t,buttons:[{color:"warn",text:"OK",onClick:()=>i()}]});}confirm(a,t="",i=()=>{},n=()=>{}){this.open({title:a,description:t,buttons:[{text:"Cancel",onClick:()=>n()},{color:"warn",text:"OK",focusInitial:true,onClick:()=>i()}]});}static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"});}};var Ht=class e{static{this.\u0275fac=function(t){return new(t||e)};}static{this.\u0275mod=lt({type:e});}static{this.\u0275inj=Ye({providers:[A],imports:[C_,Gt,Kt$1,yt,r,h]});}};export{A,Gt as G,Ht as H,Me as M,Te as T,Ae as a,p,tt as t,we as w};