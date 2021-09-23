(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[973],{70973:function(s,a,t){"use strict";t.r(a),t.d(a,{DatetimepickerApiComponent:function(){return I},DatetimepickerModule:function(){return O},DatetimepickerOverviewComponent:function(){return S}});var n=t(63423),e=t(2150),l=t(3679),p=t(37716),o=t(82613),c=t(7539),i=t(54436),r=t(98295),m=t(49983),h=t(55897),d=t(39490),u=t(75319),g=t(25917),j=t(66682),x=t(43220),f=t(51095),b=t(76627),v=t(38583);function k(s,a){1&s&&(p.O4$(),p.TgZ(0,"svg",4),p._UZ(1,"path",5),p.qZA())}function w(s,a){1&s&&(p.O4$(),p.TgZ(0,"svg",4),p._UZ(1,"path",6),p.qZA())}function q(s,a){1&s&&(p.O4$(),p.TgZ(0,"svg",4),p._UZ(1,"path",7),p._UZ(2,"path",8),p.qZA())}let Z=(()=>{class s{constructor(s,a){this._intl=s,this._changeDetectorRef=a,this._stateChanges=u.w.EMPTY}get disabled(){return void 0===this._disabled?this.datetimepicker.disabled:!!this._disabled}set disabled(s){this._disabled=(0,d.Ig)(s)}ngOnChanges(s){s.datetimepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(s){this.datetimepicker&&!this.disabled&&(this.datetimepicker.open(),s.stopPropagation())}_watchStateChanges(){const s=this.datetimepicker?this.datetimepicker._disabledChange:(0,g.of)(),a=this.datetimepicker&&this.datetimepicker._datetimepickerInput?this.datetimepicker._datetimepickerInput._disabledChange:(0,g.of)();this._stateChanges.unsubscribe(),this._stateChanges=(0,j.T)([this._intl.changes,s,a]).subscribe(()=>this._changeDetectorRef.markForCheck())}}return s.\u0275fac=function(a){return new(a||s)(p.Y36(x.S8),p.Y36(p.sBO))},s.\u0275cmp=p.Xpm({type:s,selectors:[["mtx-datetimepicker-toggle"]],hostAttrs:[1,"mtx-datetimepicker-toggle"],inputs:{datetimepicker:["for","datetimepicker"],disabled:"disabled"},exportAs:["mtxDatetimepickerToggle"],features:[p.TTD],decls:5,vars:5,consts:[["mat-icon-button","","type","button",3,"disabled","click"],[3,"ngSwitch"],["fill","currentColor","focusable","false","height","100%","style","vertical-align: top;","viewBox","0 0 24 24","width","100%",4,"ngSwitchCase"],["fill","currentColor","focusable","false","height","100%","style","vertical-align: top;","viewBox","0 0 24 24","width","100%",4,"ngSwitchDefault"],["fill","currentColor","focusable","false","height","100%","viewBox","0 0 24 24","width","100%",2,"vertical-align","top"],["d","M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"],["d","M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z"],["d","M0 0h24v24H0z","fill","none"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(s,a){1&s&&(p.TgZ(0,"button",0),p.NdJ("click",function(s){return a._open(s)}),p.TgZ(1,"mat-icon",1),p.YNc(2,k,2,0,"svg",2),p.YNc(3,w,2,0,"svg",2),p.YNc(4,q,3,0,"svg",3),p.qZA(),p.qZA()),2&s&&(p.Q6J("disabled",a.disabled),p.uIk("aria-label",a._intl.openCalendarLabel),p.xp6(1),p.Q6J("ngSwitch",a.datetimepicker.type),p.xp6(1),p.Q6J("ngSwitchCase","time"),p.xp6(1),p.Q6J("ngSwitchCase","datetime"))},directives:[f.lW,b.Hw,v.RF,v.n9,v.ED],encapsulation:2,changeDetection:0}),s})();var y=t(53451);const C={title:"Configurable datetimepicker",component:(()=>{class s{constructor(){this.type="datetime",this.mode="auto",this.startView="month",this.multiYearSelector=!1,this.touchUi=!1,this.twelvehour=!1,this.timeInterval=1,this.datetime=new l.NI}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=p.Xpm({type:s,selectors:[["datetimepicker-example"]],decls:60,vars:17,consts:[[3,"ngModel","ngModelChange"],["value","datetime"],["value","date"],["value","time"],["value","month"],["value","year"],["value","auto"],["value","landscape"],["value","portrait"],["value","multi-year"],["value","clock"],["min","1","max","30","thumbLabel","",3,"ngModel","ngModelChange"],["matInput","","required","",3,"mtxDatetimepicker","formControl"],["matSuffix","",3,"for"],[3,"type","mode","multiYearSelector","startView","twelvehour","timeInterval","touchUi"],["datetimePicker",""]],template:function(s,a){if(1&s&&(p.TgZ(0,"h2"),p._uU(1,"Datetimepicker configuration"),p.qZA(),p.TgZ(2,"section"),p.TgZ(3,"label"),p._uU(4,"type:"),p.qZA(),p.TgZ(5,"mat-radio-group",0),p.NdJ("ngModelChange",function(s){return a.type=s}),p.TgZ(6,"mat-radio-button",1),p._uU(7,"datetime"),p.qZA(),p.TgZ(8,"mat-radio-button",2),p._uU(9,"date"),p.qZA(),p.TgZ(10,"mat-radio-button",3),p._uU(11,"time"),p.qZA(),p.TgZ(12,"mat-radio-button",4),p._uU(13,"month"),p.qZA(),p.TgZ(14,"mat-radio-button",5),p._uU(15,"year"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(16,"section"),p.TgZ(17,"label"),p._uU(18,"mode:"),p.qZA(),p.TgZ(19,"mat-radio-group",0),p.NdJ("ngModelChange",function(s){return a.mode=s}),p.TgZ(20,"mat-radio-button",6),p._uU(21,"auto"),p.qZA(),p.TgZ(22,"mat-radio-button",7),p._uU(23,"landscape"),p.qZA(),p.TgZ(24,"mat-radio-button",8),p._uU(25,"portrait"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(26,"section"),p.TgZ(27,"label"),p._uU(28,"startView:"),p.qZA(),p.TgZ(29,"mat-radio-group",0),p.NdJ("ngModelChange",function(s){return a.startView=s}),p.TgZ(30,"mat-radio-button",4),p._uU(31,"month"),p.qZA(),p.TgZ(32,"mat-radio-button",5),p._uU(33,"year"),p.qZA(),p.TgZ(34,"mat-radio-button",9),p._uU(35,"multi-year"),p.qZA(),p.TgZ(36,"mat-radio-button",10),p._uU(37,"clock"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(38,"section"),p.TgZ(39,"mat-checkbox",0),p.NdJ("ngModelChange",function(s){return a.multiYearSelector=s}),p._uU(40,"multiYearSelector"),p.qZA(),p.qZA(),p.TgZ(41,"section"),p.TgZ(42,"mat-checkbox",0),p.NdJ("ngModelChange",function(s){return a.twelvehour=s}),p._uU(43,"twelvehour"),p.qZA(),p.qZA(),p.TgZ(44,"section"),p.TgZ(45,"label"),p._uU(46,"timeInterval:"),p.qZA(),p.TgZ(47,"mat-slider",11),p.NdJ("ngModelChange",function(s){return a.timeInterval=s}),p.qZA(),p.qZA(),p.TgZ(48,"section"),p.TgZ(49,"mat-checkbox",0),p.NdJ("ngModelChange",function(s){return a.touchUi=s}),p._uU(50,"touchUi"),p.qZA(),p.qZA(),p.TgZ(51,"h2"),p._uU(52,"Result"),p.qZA(),p.TgZ(53,"mat-form-field"),p.TgZ(54,"mat-placeholder"),p._uU(55,"Date"),p.qZA(),p._UZ(56,"input",12),p._UZ(57,"mtx-datetimepicker-toggle",13),p._UZ(58,"mtx-datetimepicker",14,15),p.qZA()),2&s){const s=p.MAs(59);p.xp6(5),p.Q6J("ngModel",a.type),p.xp6(14),p.Q6J("ngModel",a.mode),p.xp6(10),p.Q6J("ngModel",a.startView),p.xp6(10),p.Q6J("ngModel",a.multiYearSelector),p.xp6(3),p.Q6J("ngModel",a.twelvehour),p.xp6(5),p.Q6J("ngModel",a.timeInterval),p.xp6(2),p.Q6J("ngModel",a.touchUi),p.xp6(7),p.Q6J("mtxDatetimepicker",s)("formControl",a.datetime),p.xp6(1),p.Q6J("for",s),p.xp6(1),p.Q6J("type",a.type)("mode",a.mode)("multiYearSelector",a.multiYearSelector)("startView",a.startView)("twelvehour",a.twelvehour)("timeInterval",a.timeInterval)("touchUi",a.touchUi)}},directives:[o.VQ,l.JJ,l.On,o.U0,c.oG,i.pH,r.KE,r.UY,m.Nt,h.WA,l.Fj,l.Q7,l.oH,Z,r.R9,y.V],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1rem}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}.mat-form-field[_ngcontent-%COMP%]{margin-right:1rem}.mat-card[_ngcontent-%COMP%]{max-width:300px}.mat-slider[_ngcontent-%COMP%]{margin:0 .5rem}"]}),s})(),files:[{file:"app.component.html",content:t(46674),filecontent:t(47348)},{file:"app.component.ts",content:t(85468),filecontent:t(85700)},{file:"app.component.scss",content:t(31209),filecontent:t(13255)}]};var _=t(93738),A=t(725);const M={title:"Datetimepicker inline",component:(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=p.Xpm({type:s,selectors:[["datetimepicker-example"]],decls:8,vars:2,consts:[[1,"demo-inline-card"],["type","date","startView","month",3,"selectedChange"],["type","time","startView","clock",3,"selectedChange"]],template:function(s,a){1&s&&(p.TgZ(0,"mat-card",0),p.TgZ(1,"mtx-calendar",1),p.NdJ("selectedChange",function(s){return a.selectedDate=s}),p.qZA(),p.qZA(),p.TgZ(2,"p"),p._uU(3),p.qZA(),p.TgZ(4,"mat-card",0),p.TgZ(5,"mtx-calendar",2),p.NdJ("selectedChange",function(s){return a.selectedTime=s}),p.qZA(),p.qZA(),p.TgZ(6,"p"),p._uU(7),p.qZA()),2&s&&(p.xp6(3),p.hij("Selected date: ",a.selectedDate,""),p.xp6(4),p.hij("Selected time: ",a.selectedTime,""))},directives:[_.a8,A.c],styles:[".demo-inline-card[_ngcontent-%COMP%]{width:300px;margin-bottom:1rem}"]}),s})(),files:[{file:"app.component.html",content:t(98766),filecontent:t(86723)},{file:"app.component.ts",content:t(88796),filecontent:t(32044)},{file:"app.component.scss",content:t(88737),filecontent:t(1926)}]};var T=t(22281),U=t(29241);function D(s,a){if(1&s&&(p.ynx(0),p._UZ(1,"example-viewer",2),p.BQk()),2&s){const s=a.$implicit;p.xp6(1),p.Q6J("exampleData",s)}}function V(s,a){if(1&s&&(p.ynx(0),p.YNc(1,D,2,1,"ng-container",1),p.BQk()),2&s){const s=a.ngIf;p.xp6(1),p.Q6J("ngForOf",s.examples)}}function J(s,a){if(1&s&&(p.ynx(0),p._UZ(1,"doc-viewer",1),p.BQk()),2&s){const s=a.ngIf;p.xp6(1),p.Q6J("textContent",s.content.default)}}let S=(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(a){return new(a||s)(p.Y36(n.gz))},s.\u0275cmp=p.Xpm({type:s,selectors:[["app-datetimepicker-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(s,a){1&s&&(p.YNc(0,V,2,1,"ng-container",0),p.ALo(1,"async")),2&s&&p.Q6J("ngIf",p.lcZ(1,1,a.route.data))},directives:[v.O5,v.sg,T.B],pipes:[v.Ov],encapsulation:2}),s})(),I=(()=>{class s{constructor(s){this.route=s}}return s.\u0275fac=function(a){return new(a||s)(p.Y36(n.gz))},s.\u0275cmp=p.Xpm({type:s,selectors:[["app-datetimepicker-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(s,a){1&s&&(p.YNc(0,J,2,1,"ng-container",0),p.ALo(1,"async")),2&s&&p.Q6J("ngIf",p.lcZ(1,1,a.route.data))},directives:[v.O5,U.z],pipes:[v.Ov],encapsulation:2}),s})(),O=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=p.oAB({type:s}),s.\u0275inj=p.cJS({imports:[[e.m8,n.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:S,pathMatch:"full",data:{examples:[C,M]}},{path:"api",component:I,pathMatch:"full",data:{content:t(90933)}},{path:"**",redirectTo:"overview"}])]]}),s})()},29241:function(s,a,t){"use strict";t.d(a,{z:function(){return e}});var n=t(37716);let e=(()=>{class s{constructor(){this.textContent=""}ngOnDestroy(){}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(s,a){1&s&&n._UZ(0,"div",0),2&s&&n.Q6J("innerHTML",a.textContent,n.oJD)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px;border-bottom:1px solid rgba(0,0,0,.12)}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0;box-shadow:0 2px 2px #0000003d,0 0 2px #0000001f}.docs-markdown th{max-width:100px;padding:13px 16px;background:rgba(0,0,0,.025);font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;border:1px solid rgba(0,0,0,.03);font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;padding:20px;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}\n"],encapsulation:2}),s})()},22281:function(s,a,t){"use strict";t.d(a,{B:function(){return j}});var n=t(37716),e=t(77001),l=t(27163),p=t(51095),o=t(11436),c=t(76627),i=t(38583),r=t(65939);const m=["demo"];function h(s,a){if(1&s){const s=n.EpF();n.TgZ(0,"mat-tab",10),n.TgZ(1,"div",11),n.TgZ(2,"div",12),n.TgZ(3,"button",13),n.NdJ("click",function(){n.CHM(s);const a=n.MAs(8);return n.oxw(2).copySource(a)}),n.TgZ(4,"mat-icon"),n._uU(5,"content_copy"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(6,"div",14),n._UZ(7,"pre",15,16),n.qZA(),n.qZA(),n.qZA()}if(2&s){const s=a.$implicit;n.Q6J("label",s.file),n.xp6(3),n.Q6J("matTooltip","Copy example source"),n.xp6(4),n.Q6J("innerHtml",s.content,n.oJD)}}function d(s,a){if(1&s&&(n.TgZ(0,"div",8),n.TgZ(1,"mat-tab-group"),n.YNc(2,h,9,3,"mat-tab",9),n.qZA(),n.qZA()),2&s){const s=n.oxw();n.xp6(2),n.Q6J("ngForOf",s.exampleData.files)}}function u(s,a){if(1&s&&n._UZ(0,"div",17),2&s){const s=n.oxw();n.Q6J("innerHtml",s.exampleData.description,n.oJD)}}function g(s,a){}let j=(()=>{class s{constructor(s,a,t){this.snackbar=s,this.copier=a,this.componentFactoryResolver=t,this.showSource=!1}ngOnInit(){const s=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(s)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(s){this.copier.copyText(s.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}return s.\u0275fac=function(a){return new(a||s)(n.Y36(e.ux),n.Y36(l.u),n.Y36(n._Vd))},s.\u0275cmp=n.Xpm({type:s,selectors:[["example-viewer"]],viewQuery:function(s,a){if(1&s&&n.Gf(m,7,n.s_b),2&s){let s;n.iGM(s=n.CRH())&&(a.demoRef=s.first)}},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(s,a){1&s&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"span"),n._uU(3),n.qZA(),n._UZ(4,"div",2),n.TgZ(5,"button",3),n.NdJ("click",function(){return a.toggleSourceView()}),n.TgZ(6,"mat-icon"),n._uU(7,"code"),n.qZA(),n.qZA(),n.qZA(),n.YNc(8,d,3,1,"div",4),n.TgZ(9,"div",5),n.YNc(10,u,1,1,"div",6),n.YNc(11,g,0,0,"ng-template",null,7,n.W1O),n.qZA(),n.qZA()),2&s&&(n.xp6(3),n.Oqu(a.exampleData.title),n.xp6(2),n.Q6J("matTooltip","View source"),n.xp6(3),n.Q6J("ngIf",a.showSource),n.xp6(2),n.Q6J("ngIf",a.exampleData.description))},directives:[p.lW,o.gM,c.Hw,i.O5,r.SP,i.sg,r.uX],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),s})()},46674:function(s){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Datetimepicker configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;type&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;datetime&quot;</span>&gt;</span>datetime<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;date&quot;</span>&gt;</span>date<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;time&quot;</span>&gt;</span>time<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;month&quot;</span>&gt;</span>month<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;year&quot;</span>&gt;</span>year<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>mode:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;mode&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;auto&quot;</span>&gt;</span>auto<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;landscape&quot;</span>&gt;</span>landscape<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;portrait&quot;</span>&gt;</span>portrait<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>startView:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;startView&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;month&quot;</span>&gt;</span>month<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;year&quot;</span>&gt;</span>year<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;multi-year&quot;</span>&gt;</span>multi-year<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;clock&quot;</span>&gt;</span>clock<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;multiYearSelector&quot;</span>&gt;</span>multiYearSelector<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;twelvehour&quot;</span>&gt;</span>twelvehour<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>timeInterval:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;timeInterval&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;touchUi&quot;</span>&gt;</span>touchUi<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-placeholder</span>&gt;</span>Date<span class="hljs-tag">&lt;/<span class="hljs-name">mat-placeholder</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> [<span class="hljs-attr">mtxDatetimepicker</span>]=<span class="hljs-string">&quot;datetimePicker&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;datetime&quot;</span> <span class="hljs-attr">matInput</span> <span class="hljs-attr">required</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mtx-datetimepicker-toggle</span> [<span class="hljs-attr">for</span>]=<span class="hljs-string">&quot;datetimePicker&quot;</span> <span class="hljs-attr">matSuffix</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-datetimepicker-toggle</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mtx-datetimepicker</span> #<span class="hljs-attr">datetimePicker</span>\n                      [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;type&quot;</span>\n                      [<span class="hljs-attr">mode</span>]=<span class="hljs-string">&quot;mode&quot;</span>\n                      [<span class="hljs-attr">multiYearSelector</span>]=<span class="hljs-string">&quot;multiYearSelector&quot;</span>\n                      [<span class="hljs-attr">startView</span>]=<span class="hljs-string">&quot;startView&quot;</span>\n                      [<span class="hljs-attr">twelvehour</span>]=<span class="hljs-string">&quot;twelvehour&quot;</span>\n                      [<span class="hljs-attr">timeInterval</span>]=<span class="hljs-string">&quot;timeInterval&quot;</span>\n                      [<span class="hljs-attr">touchUi</span>]=<span class="hljs-string">&quot;touchUi&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-datetimepicker</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n'},98766:function(s){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mat-card</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-inline-card&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mtx-calendar</span> (<span class="hljs-attr">selectedChange</span>)=<span class="hljs-string">&quot;selectedDate = $event&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">startView</span>=<span class="hljs-string">&quot;month&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-calendar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mat-card</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Selected date: {{selectedDate}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mat-card</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-inline-card&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mtx-calendar</span> (<span class="hljs-attr">selectedChange</span>)=<span class="hljs-string">&quot;selectedTime = $event&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">startView</span>=<span class="hljs-string">&quot;clock&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-calendar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mat-card</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Selected time: {{selectedTime}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n'},85468:function(s){s.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">OnInit</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;\n<span class="hljs-keyword">import</span> {\n  <span class="hljs-title class_">MtxCalendarView</span>,\n  <span class="hljs-title class_">MtxDatetimepickerMode</span>,\n  <span class="hljs-title class_">MtxDatetimepickerType</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;datetimepicker-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  <span class="hljs-attr">type</span>: <span class="hljs-title class_">MtxDatetimepickerType</span> = <span class="hljs-string">&#x27;datetime&#x27;</span>;\n  <span class="hljs-attr">mode</span>: <span class="hljs-title class_">MtxDatetimepickerMode</span> = <span class="hljs-string">&#x27;auto&#x27;</span>;\n  <span class="hljs-attr">startView</span>: <span class="hljs-title class_">MtxCalendarView</span> = <span class="hljs-string">&#x27;month&#x27;</span>;\n  multiYearSelector = <span class="hljs-literal">false</span>;\n  touchUi = <span class="hljs-literal">false</span>;\n  twelvehour = <span class="hljs-literal">false</span>;\n  timeInterval = <span class="hljs-number">1</span>;\n\n  datetime = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>();\n}\n'},88796:function(s){s.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;datetimepicker-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  selectedDate!: <span class="hljs-title class_">Date</span> | <span class="hljs-literal">null</span>;\n  selectedTime!: <span class="hljs-title class_">Date</span> | <span class="hljs-literal">null</span>;\n}\n'},90933:function(s,a,t){"use strict";t.r(a),a.default='<h1 id="datetimepicker">Datetimepicker</h1>\n<h2 id="api-reference-for-material-extensions-datetimepicker">API reference for Material Extensions Datetimepicker</h2>\n<p><code>import { MtxDatetimepickerModule } from &apos;@ng-matero/extensions/datetimepicker&apos;;</code></p>\n<h3 id="apis">APIs</h3>\n<p>coming soon</p>\n'},47348:function(s,a,t){"use strict";t.r(a),a.default='<h2>Datetimepicker configuration</h2>\n\n<section>\n  <label>type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="datetime">datetime</mat-radio-button>\n    <mat-radio-button value="date">date</mat-radio-button>\n    <mat-radio-button value="time">time</mat-radio-button>\n    <mat-radio-button value="month">month</mat-radio-button>\n    <mat-radio-button value="year">year</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label>mode:</label>\n  <mat-radio-group [(ngModel)]="mode">\n    <mat-radio-button value="auto">auto</mat-radio-button>\n    <mat-radio-button value="landscape">landscape</mat-radio-button>\n    <mat-radio-button value="portrait">portrait</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label>startView:</label>\n  <mat-radio-group [(ngModel)]="startView">\n    <mat-radio-button value="month">month</mat-radio-button>\n    <mat-radio-button value="year">year</mat-radio-button>\n    <mat-radio-button value="multi-year">multi-year</mat-radio-button>\n    <mat-radio-button value="clock">clock</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="multiYearSelector">multiYearSelector</mat-checkbox>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="twelvehour">twelvehour</mat-checkbox>\n</section>\n\n<section>\n  <label>timeInterval:</label>\n  <mat-slider min="1" max="30" thumbLabel [(ngModel)]="timeInterval"></mat-slider>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="touchUi">touchUi</mat-checkbox>\n</section>\n\n<h2>Result</h2>\n\n<mat-form-field>\n  <mat-placeholder>Date</mat-placeholder>\n  <input [mtxDatetimepicker]="datetimePicker" [formControl]="datetime" matInput required>\n  <mtx-datetimepicker-toggle [for]="datetimePicker" matSuffix></mtx-datetimepicker-toggle>\n  <mtx-datetimepicker #datetimePicker\n                      [type]="type"\n                      [mode]="mode"\n                      [multiYearSelector]="multiYearSelector"\n                      [startView]="startView"\n                      [twelvehour]="twelvehour"\n                      [timeInterval]="timeInterval"\n                      [touchUi]="touchUi"></mtx-datetimepicker>\n</mat-form-field>\n'},85700:function(s,a,t){"use strict";t.r(a),a.default="import { Component, OnInit } from '@angular/core';\nimport { FormControl } from '@angular/forms';\nimport {\n  MtxCalendarView,\n  MtxDatetimepickerMode,\n  MtxDatetimepickerType,\n} from '@ng-matero/extensions';\n\n@Component({\n  selector: 'datetimepicker-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  type: MtxDatetimepickerType = 'datetime';\n  mode: MtxDatetimepickerMode = 'auto';\n  startView: MtxCalendarView = 'month';\n  multiYearSelector = false;\n  touchUi = false;\n  twelvehour = false;\n  timeInterval = 1;\n\n  datetime = new FormControl();\n}\n"},86723:function(s,a,t){"use strict";t.r(a),a.default='<mat-card class="demo-inline-card">\n  <mtx-calendar (selectedChange)="selectedDate = $event" type="date" startView="month">\n  </mtx-calendar>\n</mat-card>\n<p>Selected date: {{selectedDate}}</p>\n\n<mat-card class="demo-inline-card">\n  <mtx-calendar (selectedChange)="selectedTime = $event" type="time" startView="clock">\n  </mtx-calendar>\n</mat-card>\n<p>Selected time: {{selectedTime}}</p>\n'},32044:function(s,a,t){"use strict";t.r(a),a.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'datetimepicker-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  selectedDate!: Date | null;\n  selectedTime!: Date | null;\n}\n"},31209:function(s){"use strict";s.exports='module.exports = "<span class=\\"hljs-selector-class\\">.mat-radio-button</span> {\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">1rem</span>;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.mat-checkbox</span> {\\n  <span class=\\"hljs-attribute\\">display</span>: inline-block;\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">1rem</span> <span class=\\"hljs-number\\">1rem</span> <span class=\\"hljs-number\\">1rem</span> <span class=\\"hljs-number\\">0</span>;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.mat-form-field</span> {\\n  <span class=\\"hljs-attribute\\">margin-right</span>: <span class=\\"hljs-number\\">1rem</span>;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.mat-card</span> {\\n  <span class=\\"hljs-attribute\\">max-width</span>: <span class=\\"hljs-number\\">300px</span>;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.mat-slider</span> {\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">0</span> .<span class=\\"hljs-number\\">5rem</span>;\\n}\\n"'},88737:function(s){"use strict";s.exports='module.exports = "<span class=\\"hljs-selector-class\\">.demo-inline-card</span> {\\n  <span class=\\"hljs-attribute\\">width</span>: <span class=\\"hljs-number\\">300px</span>;\\n  <span class=\\"hljs-attribute\\">margin-bottom</span>: <span class=\\"hljs-number\\">1rem</span>;\\n}\\n"'},13255:function(s){"use strict";s.exports='export default ".mat-radio-button {\\n  margin: 1rem;\\n}\\n\\n.mat-checkbox {\\n  display: inline-block;\\n  margin: 1rem 1rem 1rem 0;\\n}\\n\\n.mat-form-field {\\n  margin-right: 1rem;\\n}\\n\\n.mat-card {\\n  max-width: 300px;\\n}\\n\\n.mat-slider {\\n  margin: 0 .5rem;\\n}\\n";'},1926:function(s){"use strict";s.exports='export default ".demo-inline-card {\\n  width: 300px;\\n  margin-bottom: 1rem;\\n}\\n";'}}]);