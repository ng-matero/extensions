import {r as re}from'./chunk-DqorVf8F.js';import {l as lt,Y as Ye,o as ot,c as b5,p,L,O as Lr,q as pe,aI as dO,x as jO,e as uw,a3 as dt,s as qe,v as Zr,w as j9,da as n3,d as dn,b3 as VN,W as Zt,n as nA,r as rA,_ as _c,B as Bc,u as uh,an as FM,ag as VT,ap as jM,ah as RD,f as cE,D,bi as _A,b as $c,U as UD,i as ph,j as gh,k as Vc,N as ce,m as V,G as H,M as xr,T as Te,H as Hc,h as es,db as gt$1,b0 as P9,ax as eA,a1 as Ta,R as RA,aT as tE,af as HM,ce as UM,ai as VM,at as WD}from'./main-CKBO76XE.js';var vt=["knob"],gt=["valueIndicatorContainer"];function bt(s,c){if(s&1&&(_c(0,"div",2,1)(2,"div",5)(3,"span",6),RA(4),uh()()()),s&2){let t=eA();VT(4),tE(t.valueIndicatorText);}}var Tt=["trackActive"],kt=["*"];function It(s,c){if(s&1&&Bc(0,"div"),s&2){let t=c.$implicit,i=c.$index,e=eA(3);_A(t===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),WD("transform",e._calcTickMarkTransform(i));}}function Rt(s,c){if(s&1&&HM(0,It,1,4,"div",8,UM),s&2){let t=eA(2);VM(t._tickMarks);}}function xt(s,c){if(s&1&&(_c(0,"div",6,1),FM(2,Rt,2,0),uh()),s&2){let t=eA();VT(2),jM(t._cachedWidth?2:-1);}}function yt(s,c){if(s&1&&Bc(0,"mat-slider-visual-thumb",7),s&2){let t=eA();RD("discrete",t.discrete)("thumbPosition",1)("valueIndicatorText",t.startValueIndicatorText);}}var n=(function(s){return s[s.START=1]="START",s[s.END=2]="END",s})(n||{}),f=(function(s){return s[s.ACTIVE=0]="ACTIVE",s[s.INACTIVE=1]="INACTIVE",s})(f||{}),P=new D("_MatSlider"),ct=new D("_MatSliderThumb"),Mt=new D("_MatSliderRangeThumb"),mt=new D("_MatSliderVisualThumb");var St=(()=>{class s{_cdr=p(Lr);_ngZone=p(L);_slider=p(P);_renderer=p(xr);_listenerCleanups;discrete=false;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=false;_isActive=false;_isValueIndicatorVisible=false;_hostElement=p(pe).nativeElement;_platform=p(qe);ngAfterViewInit(){let t=this._slider._getInput(this.thumbPosition);t&&(this._ripple.radius=24,this._sliderInput=t,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let i=this._sliderInputEl,e=this._renderer;this._listenerCleanups=[e.listen(i,"pointermove",this._onPointerMove),e.listen(i,"pointerdown",this._onDragStart),e.listen(i,"pointerup",this._onDragEnd),e.listen(i,"pointerleave",this._onMouseLeave),e.listen(i,"focus",this._onFocus),e.listen(i,"blur",this._onBlur)];}));}ngOnDestroy(){this._listenerCleanups?.forEach(t=>t());}_onPointerMove=t=>{if(this._sliderInput._isFocused)return;let i=this._hostElement.getBoundingClientRect(),e=this._slider._isCursorOnSliderThumb(t,i);this._isHovered=e,e?this._showHoverRipple():this._hideRipple(this._hoverRippleRef);};_onMouseLeave=()=>{this._isHovered=false,this._hideRipple(this._hoverRippleRef);};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused");};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused");};_onDragStart=t=>{t.button===0&&(this._isActive=true,this._showActiveRipple());};_onDragEnd=()=>{this._isActive=false,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple();};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"));}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},true),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"));}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"));}_isShowingRipple(t){return t?.state===gt$1.FADING_IN||t?.state===gt$1.VISIBLE}_showRipple(t,i){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===n.START?n.END:n.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!i)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:t,centered:true,persistent:true})}_hideRipple(t){if(t?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let i=this._getSibling();i._isShowingAnyRipple()||(this._hideValueIndicator(),i._hideValueIndicator());}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator");}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");}_getSibling(){return this._slider._getThumb(this.thumbPosition===n.START?n.END:n.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=dn({type:s,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(i,e){if(i&1&&UD(P9,5)(vt,5)(gt,5),i&2){let a;ph(a=gh())&&(e._ripple=a.first),ph(a=gh())&&(e._knob=a.first),ph(a=gh())&&(e._valueIndicatorContainer=a.first);}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[cE([{provide:mt,useExisting:s}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(i,e){i&1&&(FM(0,bt,5,1,"div",2),Bc(1,"div",3,0)(3,"div",4)),i&2&&(jM(e.discrete?0:-1),VT(3),RD("matRippleDisabled",true));},dependencies:[P9],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2})}return s})(),Kt=(()=>{class s{_ngZone=p(L);_cdr=p(Lr);_elementRef=p(pe);_dir=p(dO,{optional:true});_globalRippleOptions=p(jO,{optional:true});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(t){this._disabled=t;let i=this._getInput(n.END),e=this._getInput(n.START);i&&(i.disabled=this._disabled),e&&(e.disabled=this._disabled);}_disabled=false;get discrete(){return this._discrete}set discrete(t){this._discrete=t,this._updateValueIndicatorUIs();}_discrete=false;get showTickMarks(){return this._showTickMarks}set showTickMarks(t){this._showTickMarks=t,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI());}_showTickMarks=false;get min(){return this._min}set min(t){let i=t==null||isNaN(t)?this._min:t;this._min!==i&&this._updateMin(i);}_min=0;color;disableRipple=false;_updateMin(t){let i=this._min;this._min=t,this._isRange?this._updateMinRange({old:i,new:t}):this._updateMinNonRange(t),this._onMinMaxOrStepChange();}_updateMinRange(t){let i=this._getInput(n.END),e=this._getInput(n.START),a=i.value,l=e.value;e.min=t.new,i.min=Math.max(t.new,e.value),e.max=Math.min(i.max,i.value),e._updateWidthInactive(),i._updateWidthInactive(),t.new<t.old?this._onTranslateXChangeBySideEffect(i,e):this._onTranslateXChangeBySideEffect(e,i),a!==i.value&&this._onValueChange(i),l!==e.value&&this._onValueChange(e);}_updateMinNonRange(t){let i=this._getInput(n.END);if(i){let e=i.value;i.min=t,i._updateThumbUIByValue(),this._updateTrackUI(i),e!==i.value&&this._onValueChange(i);}}get max(){return this._max}set max(t){let i=t==null||isNaN(t)?this._max:t;this._max!==i&&this._updateMax(i);}_max=100;_updateMax(t){let i=this._max;this._max=t,this._isRange?this._updateMaxRange({old:i,new:t}):this._updateMaxNonRange(t),this._onMinMaxOrStepChange();}_updateMaxRange(t){let i=this._getInput(n.END),e=this._getInput(n.START),a=i.value,l=e.value;i.max=t.new,e.max=Math.min(t.new,i.value),i.min=e.value,i._updateWidthInactive(),e._updateWidthInactive(),t.new>t.old?this._onTranslateXChangeBySideEffect(e,i):this._onTranslateXChangeBySideEffect(i,e),a!==i.value&&this._onValueChange(i),l!==e.value&&this._onValueChange(e);}_updateMaxNonRange(t){let i=this._getInput(n.END);if(i){let e=i.value;i.max=t,i._updateThumbUIByValue(),this._updateTrackUI(i),e!==i.value&&this._onValueChange(i);}}get step(){return this._step}set step(t){let i=isNaN(t)?this._step:t;this._step!==i&&this._updateStep(i);}_step=1;_updateStep(t){this._step=t,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange();}_updateStepRange(){let t=this._getInput(n.END),i=this._getInput(n.START),e=t.value,a=i.value,l=i.value;t.min=this._min,i.max=this._max,t.step=this._step,i.step=this._step,this._platform.SAFARI&&(t.value=t.value,i.value=i.value),t.min=Math.max(this._min,i.value),i.max=Math.min(this._max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),t.value<l?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),e!==t.value&&this._onValueChange(t),a!==i.value&&this._onValueChange(i);}_updateStepNonRange(){let t=this._getInput(n.END);if(t){let i=t.value;t.step=this._step,this._platform.SAFARI&&(t.value=t.value),t._updateThumbUIByValue(),i!==t.value&&this._onValueChange(t);}}displayWith=t=>`${t}`;_tickMarks;_noopAnimations=uw();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=false;_isRtl=dt(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=false;_tickMarkTrackWidth=0;_hasAnimation=false;_resizeTimer=null;_platform=p(qe);constructor(){p(Zr).load(j9);let t=this._isRtl();n3(()=>{let i=this._isRtl();i!==t&&(t=i,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI());});}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let t=this._getInput(n.END),i=this._getInput(n.START);this._isRange=!!t&&!!i,this._cdr.detectChanges();let e=this._getThumb(n.END);this._rippleRadius=e._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(t,i):this._initUINonRange(t),this._updateTrackUI(t),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges();}_initUINonRange(t){t.initProps(),t.initUI(),this._updateValueIndicatorUI(t),this._hasViewInitialized=true,t._updateThumbUIByValue();}_initUIRange(t,i){t.initProps(),t.initUI(),i.initProps(),i.initUI(),t._updateMinMax(),i._updateMinMax(),t._updateStaticStyles(),i._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=true,t._updateThumbUIByValue(),i._updateThumbUIByValue();}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null;}_onDirChangeRange(){let t=this._getInput(n.END),i=this._getInput(n.START);t._setIsLeftThumb(),i._setIsLeftThumb(),t.translateX=t._calcTranslateXByValue(),i.translateX=i._calcTranslateXByValue(),t._updateStaticStyles(),i._updateStaticStyles(),t._updateWidthInactive(),i._updateWidthInactive(),t._updateThumbUIByValue(),i._updateThumbUIByValue();}_onDirChangeNonRange(){this._getInput(n.END)._updateThumbUIByValue();}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize());}),this._resizeObserver.observe(this._elementRef.nativeElement);});}_isActive(){return this._getThumb(n.START)._isActive||this._getThumb(n.END)._isActive}_getValue(t=n.END){let i=this._getInput(t);return i?i.value:this.min}_skipUpdate(){return !!(this._getInput(n.START)?._skipUIUpdate||this._getInput(n.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left;}_setTrackActiveStyles(t){let i=this._trackActive.nativeElement.style;i.left=t.left,i.right=t.right,i.transformOrigin=t.transformOrigin,i.transform=t.transform;}_calcTickMarkTransform(t){let i=t*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return `translateX(${this._isRtl()?this._cachedWidth-6-i:i}px)`}_onTranslateXChange(t){this._hasViewInitialized&&(this._updateThumbUI(t),this._updateTrackUI(t),this._updateOverlappingThumbUI(t));}_onTranslateXChangeBySideEffect(t,i){this._hasViewInitialized&&(t._updateThumbUIByValue(),i._updateThumbUIByValue());}_onValueChange(t){this._hasViewInitialized&&(this._updateValueIndicatorUI(t),this._updateTickMarkUI(),this._cdr.detectChanges());}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck());}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let t=this._getInput(n.END),i=this._getInput(n.START);t._updateThumbUIByValue(),i._updateThumbUIByValue(),t._updateStaticStyles(),i._updateStaticStyles(),t._updateMinMax(),i._updateMinMax(),t._updateWidthInactive(),i._updateWidthInactive();}else {let t=this._getInput(n.END);t&&t._updateThumbUIByValue();}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges();}}_thumbsOverlap=false;_areThumbsOverlapping(){let t=this._getInput(n.START),i=this._getInput(n.END);return !t||!i?false:i.translateX-t.translateX<20}_updateOverlappingThumbClassNames(t){let i=t.getSibling(),e=this._getThumb(t.thumbPosition);this._getThumb(i.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),e._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap);}_updateOverlappingThumbUI(t){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(t));}_updateThumbUI(t){if(this._skipUpdate())return;let i=this._getThumb(t.thumbPosition===n.END?n.END:n.START);i._hostElement.style.transform=`translateX(${t.translateX}px)`;}_updateValueIndicatorUI(t){if(this._skipUpdate())return;let i=this.displayWith(t.value);if(this._hasViewInitialized?t._valuetext.set(i):t._hostElement.setAttribute("aria-valuetext",i),this.discrete){t.thumbPosition===n.START?this.startValueIndicatorText=i:this.endValueIndicatorText=i;let e=this._getThumb(t.thumbPosition);i.length<3?e._hostElement.classList.add("mdc-slider__thumb--short-value"):e._hostElement.classList.remove("mdc-slider__thumb--short-value");}}_updateValueIndicatorUIs(){let t=this._getInput(n.END),i=this._getInput(n.START);t&&this._updateValueIndicatorUI(t),i&&this._updateValueIndicatorUI(i);}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let t=this._step&&this._step>0?this._step:1,e=(Math.floor(this.max/t)*t-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*e;}_updateTrackUI(t){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(t):this._updateTrackUINonRange(t));}_updateTrackUIRange(t){let i=t.getSibling();if(!i||!this._cachedWidth)return;let e=Math.abs(i.translateX-t.translateX)/this._cachedWidth;t._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-i.translateX}px`,transformOrigin:"right",transform:`scaleX(${e})`}):this._setTrackActiveStyles({left:`${i.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${e})`});}_updateTrackUINonRange(t){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-t.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${t.fillPercentage})`});}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let t=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(t):this._updateTickMarkUINonRange(t);}_updateTickMarkUINonRange(t){let i=this._getValue(),e=Math.max(Math.round((i-this.min)/t),0)+1,a=Math.max(Math.round((this.max-i)/t),0)-1;this._isRtl()?e++:a++,this._tickMarks=Array(e).fill(f.ACTIVE).concat(Array(a).fill(f.INACTIVE));}_updateTickMarkUIRange(t){let i=this._getValue(),e=this._getValue(n.START),a=Math.max(Math.round((e-this.min)/t),0),l=Math.max(Math.round((i-e)/t)+1,0),v=Math.max(Math.round((this.max-i)/t),0);this._tickMarks=Array(a).fill(f.INACTIVE).concat(Array(l).fill(f.ACTIVE),Array(v).fill(f.INACTIVE));}_getInput(t){if(t===n.END&&this._input)return this._input;if(this._inputs?.length)return t===n.START?this._inputs.first:this._inputs.last}_getThumb(t){return t===n.END?this._thumbs?.last:this._thumbs?.first}_setTransition(t){this._hasAnimation=!this._platform.IOS&&t&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation);}_isCursorOnSliderThumb(t,i){let e=i.width/2,a=i.x+e,l=i.y+e,v=t.clientX-a,O=t.clientY-l;return Math.pow(v,2)+Math.pow(O,2)<Math.pow(e,2)}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=dn({type:s,selectors:[["mat-slider"]],contentQueries:function(i,e,a){if(i&1&&Vc(a,ct,5)(a,Mt,4),i&2){let l;ph(l=gh())&&(e._input=l.first),ph(l=gh())&&(e._inputs=l);}},viewQuery:function(i,e){if(i&1&&UD(Tt,5)(mt,5),i&2){let a;ph(a=gh())&&(e._trackActive=a.first),ph(a=gh())&&(e._thumbs=a);}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(i,e){i&2&&(_A("mat-"+(e.color||"primary")),$c("mdc-slider--range",e._isRange)("mdc-slider--disabled",e.disabled)("mdc-slider--discrete",e.discrete)("mdc-slider--tick-marks",e.showTickMarks)("_mat-animation-noopable",e._noopAnimations));},inputs:{disabled:[2,"disabled","disabled",Zt],discrete:[2,"discrete","discrete",Zt],showTickMarks:[2,"showTickMarks","showTickMarks",Zt],min:[2,"min","min",VN],color:"color",disableRipple:[2,"disableRipple","disableRipple",Zt],max:[2,"max","max",VN],step:[2,"step","step",VN],displayWith:"displayWith"},exportAs:["matSlider"],features:[cE([{provide:P,useExisting:s}])],ngContentSelectors:kt,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(i,e){i&1&&(nA(),rA(0),_c(1,"div",2),Bc(2,"div",3),_c(3,"div",4),Bc(4,"div",5,0),uh(),FM(6,xt,3,1,"div",6),uh(),FM(7,yt,1,3,"mat-slider-visual-thumb",7),Bc(8,"mat-slider-visual-thumb",7)),i&2&&(VT(6),jM(e.showTickMarks?6:-1),VT(),jM(e._isRange?7:-1),VT(),RD("discrete",e.discrete)("thumbPosition",2)("valueIndicatorText",e.endValueIndicatorText));},dependencies:[St],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));
  height: var(--mat-slider-active-track-height, 4px);
  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));
  border-top-width: var(--mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));
  height: var(--mat-slider-inactive-track-height, 4px);
  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--inactive::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__track--inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));
  width: var(--mat-slider-value-indicator-width, 28px);
  height: var(--mat-slider-value-indicator-height, 28px);
  padding: var(--mat-slider-value-indicator-padding, 0);
  opacity: var(--mat-slider-value-indicator-opacity, 1);
  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
}
.mdc-slider__value-indicator::after {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--mat-slider-value-indicator-width, 28px);
  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));
  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));
  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));
  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));
  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--mat-slider-handle-width, 20px);
  height: var(--mat-slider-handle-height, 20px);
  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));
  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));
  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--mat-slider-with-tick-marks-container-size, 2px);
  height: var(--mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return s})();var Et={provide:re,useExisting:Ta(()=>wt),multi:true};var wt=(()=>{class s{_ngZone=p(L);_elementRef=p(pe);_cdr=p(Lr);_slider=p(P);_platform=p(qe);_listenerCleanups;get value(){return VN(this._hostElement.value,0)}set value(t){t===null&&(t=this._getDefaultValue()),t=isNaN(t)?0:t;let i=t+"";if(!this._hasSetInitialValue){this._initialValue=i;return}this._isActive||this._setValue(i);}_setValue(t){this._hostElement.value=t,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck();}valueChange=new ce;dragStart=new ce;dragEnd=new ce;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(t){this._translateX=t;}_translateX;thumbPosition=n.END;get min(){return VN(this._hostElement.min,0)}set min(t){this._hostElement.min=t+"",this._cdr.detectChanges();}get max(){return VN(this._hostElement.max,0)}set max(t){this._hostElement.max=t+"",this._cdr.detectChanges();}get step(){return VN(this._hostElement.step,0)}set step(t){this._hostElement.step=t+"",this._cdr.detectChanges();}get disabled(){return Zt(this._hostElement.disabled)}set disabled(t){this._hostElement.disabled=t,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled);}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=V("");_knobRadius=8;_tickMarkOffset=3;_isActive=false;_isFocused=false;_setIsFocused(t){this._isFocused=t;}_hasSetInitialValue=false;_initialValue;_formControl;_destroyed=new H;_skipUIUpdate=false;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=false;constructor(){let t=p(xr);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[t.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),t.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),t.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))];});}ngOnDestroy(){this._listenerCleanups.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete();}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=true),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue();}initUI(){this._updateThumbUIByValue();}_initValue(){this._hasSetInitialValue=true,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges());}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(false),this._onTouchedFn();}_onFocus(){this._slider._setTransition(false),this._slider._updateTrackUI(this),this._setIsFocused(true);}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:true});}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:true}),this._slider._onValueChange(this);}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled;}_onPointerDown(t){if(!(this.disabled||t.button!==0)){if(this._platform.IOS){let i=this._slider._isCursorOnSliderThumb(t,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=i,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=true,this._setIsFocused(true),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(t,{withAnimation:true}),this.disabled||(this._handleValueCorrection(t),this.dragStart.emit({source:this,parent:this._slider,value:this.value}));}}_handleValueCorrection(t){this._skipUIUpdate=true,setTimeout(()=>{this._skipUIUpdate=false,this._fixValue(t);},0);}_fixValue(t){let i=t.clientX-this._slider._cachedLeft,e=this._slider._cachedWidth,a=this._slider.step===0?1:this._slider.step,l=Math.floor((this._slider.max-this._slider.min)/a),v=this._slider._isRtl()?1-i/e:i/e,pt=Math.round(v*l)/l*(this._slider.max-this._slider.min)+this._slider.min,B=Math.round(pt/a)*a,ft=this.value;if(B===ft){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation});return}this.value=B,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation});}_onPointerMove(t){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(t);}_onPointerUp(){this._isActive&&(this._isActive=false,this._platform.SAFARI&&this._setIsFocused(false),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0));}_clamp(t){let i=this._tickMarkOffset,e=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(t,e),i)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(t){return t.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`;}_updateThumbUIByValue(t){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(t);}_updateThumbUIByPointerEvent(t,i){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(t)),this._updateThumbUI(i);}_updateThumbUI(t){this._slider._setTransition(!!t?.withAnimation),this._slider._onTranslateXChange(this);}writeValue(t){(this._isControlInitialized||t!==null)&&(this.value=t);}registerOnChange(t){this._onChangeFn=t,this._isControlInitialized=true;}registerOnTouched(t){this._onTouchedFn=t;}setDisabledState(t){this.disabled=t;}focus(){this._hostElement.focus();}blur(){this._hostElement.blur();}static \u0275fac=function(i){return new(i||s)};static \u0275dir=Te({type:s,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(i,e){i&1&&Hc("change",function(){return e._onChange()})("input",function(){return e._onInput()})("blur",function(){return e._onBlur()})("focus",function(){return e._onFocus()}),i&2&&es("aria-valuetext",e._valuetext());},inputs:{value:[2,"value","value",VN]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[cE([Et,{provide:ct,useExisting:s}])]})}return s})();var Jt=(()=>{class s{static \u0275fac=function(i){return new(i||s)};static \u0275mod=lt({type:s});static \u0275inj=Ye({imports:[ot,b5]})}return s})();export{Jt as J,Kt as K,wt as w};