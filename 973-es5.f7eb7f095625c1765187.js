!function(){function s(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}function a(s,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function t(s,t,n){return t&&a(s.prototype,t),n&&a(s,n),s}(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[973],{70973:function(a,n,e){"use strict";e.r(n),e.d(n,{DatetimepickerApiComponent:function(){return Q},DatetimepickerModule:function(){return H},DatetimepickerOverviewComponent:function(){return Y}});var l=e(63423),p=e(2150),o=e(3679),c=e(37716),i=e(82613),r=e(7539),m=e(54436),h=e(98295),u=e(49983),d=e(55897),g=e(39490),j=e(75319),f=e(25917),x=e(66682),b=e(43220),v=e(51095),k=e(76627),w=e(38583);function q(s,a){1&s&&(c.O4$(),c.TgZ(0,"svg",4),c._UZ(1,"path",5),c.qZA())}function Z(s,a){1&s&&(c.O4$(),c.TgZ(0,"svg",4),c._UZ(1,"path",6),c.qZA())}function y(s,a){1&s&&(c.O4$(),c.TgZ(0,"svg",4),c._UZ(1,"path",7),c._UZ(2,"path",8),c.qZA())}var C,_=((C=function(){function a(t,n){s(this,a),this._intl=t,this._changeDetectorRef=n,this._stateChanges=j.w.EMPTY}return t(a,[{key:"disabled",get:function(){return void 0===this._disabled?this.datetimepicker.disabled:!!this._disabled},set:function(s){this._disabled=(0,g.Ig)(s)}},{key:"ngOnChanges",value:function(s){s.datetimepicker&&this._watchStateChanges()}},{key:"ngOnDestroy",value:function(){this._stateChanges.unsubscribe()}},{key:"ngAfterContentInit",value:function(){this._watchStateChanges()}},{key:"_open",value:function(s){this.datetimepicker&&!this.disabled&&(this.datetimepicker.open(),s.stopPropagation())}},{key:"_watchStateChanges",value:function(){var s=this,a=this.datetimepicker?this.datetimepicker._disabledChange:(0,f.of)(),t=this.datetimepicker&&this.datetimepicker._datetimepickerInput?this.datetimepicker._datetimepickerInput._disabledChange:(0,f.of)();this._stateChanges.unsubscribe(),this._stateChanges=(0,x.T)([this._intl.changes,a,t]).subscribe(function(){return s._changeDetectorRef.markForCheck()})}}]),a}()).\u0275fac=function(s){return new(s||C)(c.Y36(b.S8),c.Y36(c.sBO))},C.\u0275cmp=c.Xpm({type:C,selectors:[["mtx-datetimepicker-toggle"]],hostAttrs:[1,"mtx-datetimepicker-toggle"],inputs:{datetimepicker:["for","datetimepicker"],disabled:"disabled"},exportAs:["mtxDatetimepickerToggle"],features:[c.TTD],decls:5,vars:5,consts:[["mat-icon-button","","type","button",3,"disabled","click"],[3,"ngSwitch"],["fill","currentColor","focusable","false","height","100%","style","vertical-align: top;","viewBox","0 0 24 24","width","100%",4,"ngSwitchCase"],["fill","currentColor","focusable","false","height","100%","style","vertical-align: top;","viewBox","0 0 24 24","width","100%",4,"ngSwitchDefault"],["fill","currentColor","focusable","false","height","100%","viewBox","0 0 24 24","width","100%",2,"vertical-align","top"],["d","M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"],["d","M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z"],["d","M0 0h24v24H0z","fill","none"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(s,a){1&s&&(c.TgZ(0,"button",0),c.NdJ("click",function(s){return a._open(s)}),c.TgZ(1,"mat-icon",1),c.YNc(2,q,2,0,"svg",2),c.YNc(3,Z,2,0,"svg",2),c.YNc(4,y,3,0,"svg",3),c.qZA(),c.qZA()),2&s&&(c.Q6J("disabled",a.disabled),c.uIk("aria-label",a._intl.openCalendarLabel),c.xp6(1),c.Q6J("ngSwitch",a.datetimepicker.type),c.xp6(1),c.Q6J("ngSwitchCase","time"),c.xp6(1),c.Q6J("ngSwitchCase","datetime"))},directives:[v.lW,k.Hw,w.RF,w.n9,w.ED],encapsulation:2,changeDetection:0}),C),A=e(53451),M={title:"Configurable datetimepicker",component:function(){var a=function a(){s(this,a),this.type="datetime",this.mode="auto",this.startView="month",this.multiYearSelector=!1,this.touchUi=!1,this.twelvehour=!1,this.timeInterval=1,this.datetime=new o.NI};return a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=c.Xpm({type:a,selectors:[["datetimepicker-example"]],decls:60,vars:17,consts:[[3,"ngModel","ngModelChange"],["value","datetime"],["value","date"],["value","time"],["value","month"],["value","year"],["value","auto"],["value","landscape"],["value","portrait"],["value","multi-year"],["value","clock"],["min","1","max","30","thumbLabel","",3,"ngModel","ngModelChange"],["matInput","","required","",3,"mtxDatetimepicker","formControl"],["matSuffix","",3,"for"],[3,"type","mode","multiYearSelector","startView","twelvehour","timeInterval","touchUi"],["datetimePicker",""]],template:function(s,a){if(1&s&&(c.TgZ(0,"h2"),c._uU(1,"Datetimepicker configuration"),c.qZA(),c.TgZ(2,"section"),c.TgZ(3,"label"),c._uU(4,"type:"),c.qZA(),c.TgZ(5,"mat-radio-group",0),c.NdJ("ngModelChange",function(s){return a.type=s}),c.TgZ(6,"mat-radio-button",1),c._uU(7,"datetime"),c.qZA(),c.TgZ(8,"mat-radio-button",2),c._uU(9,"date"),c.qZA(),c.TgZ(10,"mat-radio-button",3),c._uU(11,"time"),c.qZA(),c.TgZ(12,"mat-radio-button",4),c._uU(13,"month"),c.qZA(),c.TgZ(14,"mat-radio-button",5),c._uU(15,"year"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(16,"section"),c.TgZ(17,"label"),c._uU(18,"mode:"),c.qZA(),c.TgZ(19,"mat-radio-group",0),c.NdJ("ngModelChange",function(s){return a.mode=s}),c.TgZ(20,"mat-radio-button",6),c._uU(21,"auto"),c.qZA(),c.TgZ(22,"mat-radio-button",7),c._uU(23,"landscape"),c.qZA(),c.TgZ(24,"mat-radio-button",8),c._uU(25,"portrait"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(26,"section"),c.TgZ(27,"label"),c._uU(28,"startView:"),c.qZA(),c.TgZ(29,"mat-radio-group",0),c.NdJ("ngModelChange",function(s){return a.startView=s}),c.TgZ(30,"mat-radio-button",4),c._uU(31,"month"),c.qZA(),c.TgZ(32,"mat-radio-button",5),c._uU(33,"year"),c.qZA(),c.TgZ(34,"mat-radio-button",9),c._uU(35,"multi-year"),c.qZA(),c.TgZ(36,"mat-radio-button",10),c._uU(37,"clock"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(38,"section"),c.TgZ(39,"mat-checkbox",0),c.NdJ("ngModelChange",function(s){return a.multiYearSelector=s}),c._uU(40,"multiYearSelector"),c.qZA(),c.qZA(),c.TgZ(41,"section"),c.TgZ(42,"mat-checkbox",0),c.NdJ("ngModelChange",function(s){return a.twelvehour=s}),c._uU(43,"twelvehour"),c.qZA(),c.qZA(),c.TgZ(44,"section"),c.TgZ(45,"label"),c._uU(46,"timeInterval:"),c.qZA(),c.TgZ(47,"mat-slider",11),c.NdJ("ngModelChange",function(s){return a.timeInterval=s}),c.qZA(),c.qZA(),c.TgZ(48,"section"),c.TgZ(49,"mat-checkbox",0),c.NdJ("ngModelChange",function(s){return a.touchUi=s}),c._uU(50,"touchUi"),c.qZA(),c.qZA(),c.TgZ(51,"h2"),c._uU(52,"Result"),c.qZA(),c.TgZ(53,"mat-form-field"),c.TgZ(54,"mat-placeholder"),c._uU(55,"Date"),c.qZA(),c._UZ(56,"input",12),c._UZ(57,"mtx-datetimepicker-toggle",13),c._UZ(58,"mtx-datetimepicker",14,15),c.qZA()),2&s){var t=c.MAs(59);c.xp6(5),c.Q6J("ngModel",a.type),c.xp6(14),c.Q6J("ngModel",a.mode),c.xp6(10),c.Q6J("ngModel",a.startView),c.xp6(10),c.Q6J("ngModel",a.multiYearSelector),c.xp6(3),c.Q6J("ngModel",a.twelvehour),c.xp6(5),c.Q6J("ngModel",a.timeInterval),c.xp6(2),c.Q6J("ngModel",a.touchUi),c.xp6(7),c.Q6J("mtxDatetimepicker",t)("formControl",a.datetime),c.xp6(1),c.Q6J("for",t),c.xp6(1),c.Q6J("type",a.type)("mode",a.mode)("multiYearSelector",a.multiYearSelector)("startView",a.startView)("twelvehour",a.twelvehour)("timeInterval",a.timeInterval)("touchUi",a.touchUi)}},directives:[i.VQ,o.JJ,o.On,i.U0,r.oG,m.pH,h.KE,h.UY,u.Nt,d.WA,o.Fj,o.Q7,o.oH,_,h.R9,A.V],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1rem}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}.mat-form-field[_ngcontent-%COMP%]{margin-right:1rem}.mat-card[_ngcontent-%COMP%]{max-width:300px}.mat-slider[_ngcontent-%COMP%]{margin:0 .5rem}"]}),a}(),files:[{file:"app.component.html",content:e(46674),filecontent:e(47348)},{file:"app.component.ts",content:e(85468),filecontent:e(85700)},{file:"app.component.scss",content:e(31209),filecontent:e(13255)}]},T=e(93738),U=e(725),D={title:"Datetimepicker inline",component:function(){var a=function a(){s(this,a)};return a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=c.Xpm({type:a,selectors:[["datetimepicker-example"]],decls:8,vars:2,consts:[[1,"demo-inline-card"],["type","date","startView","month",3,"selectedChange"],["type","time","startView","clock",3,"selectedChange"]],template:function(s,a){1&s&&(c.TgZ(0,"mat-card",0),c.TgZ(1,"mtx-calendar",1),c.NdJ("selectedChange",function(s){return a.selectedDate=s}),c.qZA(),c.qZA(),c.TgZ(2,"p"),c._uU(3),c.qZA(),c.TgZ(4,"mat-card",0),c.TgZ(5,"mtx-calendar",2),c.NdJ("selectedChange",function(s){return a.selectedTime=s}),c.qZA(),c.qZA(),c.TgZ(6,"p"),c._uU(7),c.qZA()),2&s&&(c.xp6(3),c.hij("Selected date: ",a.selectedDate,""),c.xp6(4),c.hij("Selected time: ",a.selectedTime,""))},directives:[T.a8,U.c],styles:[".demo-inline-card[_ngcontent-%COMP%]{width:300px;margin-bottom:1rem}"]}),a}(),files:[{file:"app.component.html",content:e(98766),filecontent:e(86723)},{file:"app.component.ts",content:e(88796),filecontent:e(32044)},{file:"app.component.scss",content:e(88737),filecontent:e(1926)}]},V=e(22281),J=e(29241);function S(s,a){if(1&s&&(c.ynx(0),c._UZ(1,"example-viewer",2),c.BQk()),2&s){var t=a.$implicit;c.xp6(1),c.Q6J("exampleData",t)}}function I(s,a){if(1&s&&(c.ynx(0),c.YNc(1,S,2,1,"ng-container",1),c.BQk()),2&s){var t=a.ngIf;c.xp6(1),c.Q6J("ngForOf",t.examples)}}function O(s,a){if(1&s&&(c.ynx(0),c._UZ(1,"doc-viewer",1),c.BQk()),2&s){var t=a.ngIf;c.xp6(1),c.Q6J("textContent",t.content.default)}}var Y=function(){var a=function a(t){s(this,a),this.route=t};return a.\u0275fac=function(s){return new(s||a)(c.Y36(l.gz))},a.\u0275cmp=c.Xpm({type:a,selectors:[["app-datetimepicker-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(s,a){1&s&&(c.YNc(0,I,2,1,"ng-container",0),c.ALo(1,"async")),2&s&&c.Q6J("ngIf",c.lcZ(1,1,a.route.data))},directives:[w.O5,w.sg,V.B],pipes:[w.Ov],encapsulation:2}),a}(),Q=function(){var a=function a(t){s(this,a),this.route=t};return a.\u0275fac=function(s){return new(s||a)(c.Y36(l.gz))},a.\u0275cmp=c.Xpm({type:a,selectors:[["app-datetimepicker-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(s,a){1&s&&(c.YNc(0,O,2,1,"ng-container",0),c.ALo(1,"async")),2&s&&c.Q6J("ngIf",c.lcZ(1,1,a.route.data))},directives:[w.O5,J.z],pipes:[w.Ov],encapsulation:2}),a}(),H=function(){var a=function a(){s(this,a)};return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[[p.m8,l.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:Y,pathMatch:"full",data:{examples:[M,D]}},{path:"api",component:Q,pathMatch:"full",data:{content:e(90933)}},{path:"**",redirectTo:"overview"}])]]}),a}()},29241:function(a,n,e){"use strict";e.d(n,{z:function(){return o}});var l,p=e(37716),o=((l=function(){function a(){s(this,a),this.textContent=""}return t(a,[{key:"ngOnDestroy",value:function(){}}]),a}()).\u0275fac=function(s){return new(s||l)},l.\u0275cmp=p.Xpm({type:l,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(s,a){1&s&&p._UZ(0,"div",0),2&s&&p.Q6J("innerHTML",a.textContent,p.oJD)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px;border-bottom:1px solid rgba(0,0,0,.12)}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0;box-shadow:0 2px 2px #0000003d,0 0 2px #0000001f}.docs-markdown th{max-width:100px;padding:13px 16px;background:rgba(0,0,0,.025);font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;border:1px solid rgba(0,0,0,.03);font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;padding:20px;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}\n"],encapsulation:2}),l)},22281:function(a,n,e){"use strict";e.d(n,{B:function(){return b}});var l=e(37716),p=e(77001),o=e(27163),c=e(51095),i=e(11436),r=e(76627),m=e(38583),h=e(65939),u=["demo"];function d(s,a){if(1&s){var t=l.EpF();l.TgZ(0,"mat-tab",10),l.TgZ(1,"div",11),l.TgZ(2,"div",12),l.TgZ(3,"button",13),l.NdJ("click",function(){l.CHM(t);var s=l.MAs(8);return l.oxw(2).copySource(s)}),l.TgZ(4,"mat-icon"),l._uU(5,"content_copy"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(6,"div",14),l._UZ(7,"pre",15,16),l.qZA(),l.qZA(),l.qZA()}if(2&s){var n=a.$implicit;l.Q6J("label",n.file),l.xp6(3),l.Q6J("matTooltip","Copy example source"),l.xp6(4),l.Q6J("innerHtml",n.content,l.oJD)}}function g(s,a){if(1&s&&(l.TgZ(0,"div",8),l.TgZ(1,"mat-tab-group"),l.YNc(2,d,9,3,"mat-tab",9),l.qZA(),l.qZA()),2&s){var t=l.oxw();l.xp6(2),l.Q6J("ngForOf",t.exampleData.files)}}function j(s,a){if(1&s&&l._UZ(0,"div",17),2&s){var t=l.oxw();l.Q6J("innerHtml",t.exampleData.description,l.oJD)}}function f(s,a){}var x,b=((x=function(){function a(t,n,e){s(this,a),this.snackbar=t,this.copier=n,this.componentFactoryResolver=e,this.showSource=!1}return t(a,[{key:"ngOnInit",value:function(){var s=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(s)}},{key:"ngOnDestroy",value:function(){this.demoComponentRef&&this.demoComponentRef.destroy()}},{key:"toggleSourceView",value:function(){this.showSource=!this.showSource}},{key:"copySource",value:function(s){this.copier.copyText(s.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}]),a}()).\u0275fac=function(s){return new(s||x)(l.Y36(p.ux),l.Y36(o.u),l.Y36(l._Vd))},x.\u0275cmp=l.Xpm({type:x,selectors:[["example-viewer"]],viewQuery:function(s,a){var t;1&s&&l.Gf(u,7,l.s_b),2&s&&l.iGM(t=l.CRH())&&(a.demoRef=t.first)},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(s,a){1&s&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"span"),l._uU(3),l.qZA(),l._UZ(4,"div",2),l.TgZ(5,"button",3),l.NdJ("click",function(){return a.toggleSourceView()}),l.TgZ(6,"mat-icon"),l._uU(7,"code"),l.qZA(),l.qZA(),l.qZA(),l.YNc(8,g,3,1,"div",4),l.TgZ(9,"div",5),l.YNc(10,j,1,1,"div",6),l.YNc(11,f,0,0,"ng-template",null,7,l.W1O),l.qZA(),l.qZA()),2&s&&(l.xp6(3),l.Oqu(a.exampleData.title),l.xp6(2),l.Q6J("matTooltip","View source"),l.xp6(3),l.Q6J("ngIf",a.showSource),l.xp6(2),l.Q6J("ngIf",a.exampleData.description))},directives:[c.lW,i.gM,r.Hw,m.O5,h.SP,m.sg,h.uX],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),x)},46674:function(s){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Datetimepicker configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;type&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;datetime&quot;</span>&gt;</span>datetime<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;date&quot;</span>&gt;</span>date<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;time&quot;</span>&gt;</span>time<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;month&quot;</span>&gt;</span>month<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;year&quot;</span>&gt;</span>year<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>mode:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;mode&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;auto&quot;</span>&gt;</span>auto<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;landscape&quot;</span>&gt;</span>landscape<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;portrait&quot;</span>&gt;</span>portrait<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>startView:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;startView&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;month&quot;</span>&gt;</span>month<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;year&quot;</span>&gt;</span>year<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;multi-year&quot;</span>&gt;</span>multi-year<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;clock&quot;</span>&gt;</span>clock<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;multiYearSelector&quot;</span>&gt;</span>multiYearSelector<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;twelvehour&quot;</span>&gt;</span>twelvehour<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>timeInterval:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;timeInterval&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;touchUi&quot;</span>&gt;</span>touchUi<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-placeholder</span>&gt;</span>Date<span class="hljs-tag">&lt;/<span class="hljs-name">mat-placeholder</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> [<span class="hljs-attr">mtxDatetimepicker</span>]=<span class="hljs-string">&quot;datetimePicker&quot;</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;datetime&quot;</span> <span class="hljs-attr">matInput</span> <span class="hljs-attr">required</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mtx-datetimepicker-toggle</span> [<span class="hljs-attr">for</span>]=<span class="hljs-string">&quot;datetimePicker&quot;</span> <span class="hljs-attr">matSuffix</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-datetimepicker-toggle</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mtx-datetimepicker</span> #<span class="hljs-attr">datetimePicker</span>\n                      [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;type&quot;</span>\n                      [<span class="hljs-attr">mode</span>]=<span class="hljs-string">&quot;mode&quot;</span>\n                      [<span class="hljs-attr">multiYearSelector</span>]=<span class="hljs-string">&quot;multiYearSelector&quot;</span>\n                      [<span class="hljs-attr">startView</span>]=<span class="hljs-string">&quot;startView&quot;</span>\n                      [<span class="hljs-attr">twelvehour</span>]=<span class="hljs-string">&quot;twelvehour&quot;</span>\n                      [<span class="hljs-attr">timeInterval</span>]=<span class="hljs-string">&quot;timeInterval&quot;</span>\n                      [<span class="hljs-attr">touchUi</span>]=<span class="hljs-string">&quot;touchUi&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-datetimepicker</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n'},98766:function(s){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mat-card</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-inline-card&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mtx-calendar</span> (<span class="hljs-attr">selectedChange</span>)=<span class="hljs-string">&quot;selectedDate = $event&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">startView</span>=<span class="hljs-string">&quot;month&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-calendar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mat-card</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Selected date: {{selectedDate}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mat-card</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-inline-card&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mtx-calendar</span> (<span class="hljs-attr">selectedChange</span>)=<span class="hljs-string">&quot;selectedTime = $event&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">startView</span>=<span class="hljs-string">&quot;clock&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mtx-calendar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mat-card</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Selected time: {{selectedTime}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n'},85468:function(s){s.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">OnInit</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;\n<span class="hljs-keyword">import</span> {\n  <span class="hljs-title class_">MtxCalendarView</span>,\n  <span class="hljs-title class_">MtxDatetimepickerMode</span>,\n  <span class="hljs-title class_">MtxDatetimepickerType</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;datetimepicker-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  <span class="hljs-attr">type</span>: <span class="hljs-title class_">MtxDatetimepickerType</span> = <span class="hljs-string">&#x27;datetime&#x27;</span>;\n  <span class="hljs-attr">mode</span>: <span class="hljs-title class_">MtxDatetimepickerMode</span> = <span class="hljs-string">&#x27;auto&#x27;</span>;\n  <span class="hljs-attr">startView</span>: <span class="hljs-title class_">MtxCalendarView</span> = <span class="hljs-string">&#x27;month&#x27;</span>;\n  multiYearSelector = <span class="hljs-literal">false</span>;\n  touchUi = <span class="hljs-literal">false</span>;\n  twelvehour = <span class="hljs-literal">false</span>;\n  timeInterval = <span class="hljs-number">1</span>;\n\n  datetime = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>();\n}\n'},88796:function(s){s.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;datetimepicker-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  selectedDate!: <span class="hljs-title class_">Date</span> | <span class="hljs-literal">null</span>;\n  selectedTime!: <span class="hljs-title class_">Date</span> | <span class="hljs-literal">null</span>;\n}\n'},90933:function(s,a,t){"use strict";t.r(a),a.default='<h1 id="datetimepicker">Datetimepicker</h1>\n<h2 id="api-reference-for-material-extensions-datetimepicker">API reference for Material Extensions Datetimepicker</h2>\n<p><code>import { MtxDatetimepickerModule } from &apos;@ng-matero/extensions/datetimepicker&apos;;</code></p>\n<h3 id="apis">APIs</h3>\n<p>coming soon</p>\n'},47348:function(s,a,t){"use strict";t.r(a),a.default='<h2>Datetimepicker configuration</h2>\n\n<section>\n  <label>type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="datetime">datetime</mat-radio-button>\n    <mat-radio-button value="date">date</mat-radio-button>\n    <mat-radio-button value="time">time</mat-radio-button>\n    <mat-radio-button value="month">month</mat-radio-button>\n    <mat-radio-button value="year">year</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label>mode:</label>\n  <mat-radio-group [(ngModel)]="mode">\n    <mat-radio-button value="auto">auto</mat-radio-button>\n    <mat-radio-button value="landscape">landscape</mat-radio-button>\n    <mat-radio-button value="portrait">portrait</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label>startView:</label>\n  <mat-radio-group [(ngModel)]="startView">\n    <mat-radio-button value="month">month</mat-radio-button>\n    <mat-radio-button value="year">year</mat-radio-button>\n    <mat-radio-button value="multi-year">multi-year</mat-radio-button>\n    <mat-radio-button value="clock">clock</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="multiYearSelector">multiYearSelector</mat-checkbox>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="twelvehour">twelvehour</mat-checkbox>\n</section>\n\n<section>\n  <label>timeInterval:</label>\n  <mat-slider min="1" max="30" thumbLabel [(ngModel)]="timeInterval"></mat-slider>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="touchUi">touchUi</mat-checkbox>\n</section>\n\n<h2>Result</h2>\n\n<mat-form-field>\n  <mat-placeholder>Date</mat-placeholder>\n  <input [mtxDatetimepicker]="datetimePicker" [formControl]="datetime" matInput required>\n  <mtx-datetimepicker-toggle [for]="datetimePicker" matSuffix></mtx-datetimepicker-toggle>\n  <mtx-datetimepicker #datetimePicker\n                      [type]="type"\n                      [mode]="mode"\n                      [multiYearSelector]="multiYearSelector"\n                      [startView]="startView"\n                      [twelvehour]="twelvehour"\n                      [timeInterval]="timeInterval"\n                      [touchUi]="touchUi"></mtx-datetimepicker>\n</mat-form-field>\n'},85700:function(s,a,t){"use strict";t.r(a),a.default="import { Component, OnInit } from '@angular/core';\nimport { FormControl } from '@angular/forms';\nimport {\n  MtxCalendarView,\n  MtxDatetimepickerMode,\n  MtxDatetimepickerType,\n} from '@ng-matero/extensions';\n\n@Component({\n  selector: 'datetimepicker-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  type: MtxDatetimepickerType = 'datetime';\n  mode: MtxDatetimepickerMode = 'auto';\n  startView: MtxCalendarView = 'month';\n  multiYearSelector = false;\n  touchUi = false;\n  twelvehour = false;\n  timeInterval = 1;\n\n  datetime = new FormControl();\n}\n"},86723:function(s,a,t){"use strict";t.r(a),a.default='<mat-card class="demo-inline-card">\n  <mtx-calendar (selectedChange)="selectedDate = $event" type="date" startView="month">\n  </mtx-calendar>\n</mat-card>\n<p>Selected date: {{selectedDate}}</p>\n\n<mat-card class="demo-inline-card">\n  <mtx-calendar (selectedChange)="selectedTime = $event" type="time" startView="clock">\n  </mtx-calendar>\n</mat-card>\n<p>Selected time: {{selectedTime}}</p>\n'},32044:function(s,a,t){"use strict";t.r(a),a.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'datetimepicker-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  selectedDate!: Date | null;\n  selectedTime!: Date | null;\n}\n"},31209:function(s){"use strict";s.exports='module.exports = "<span class=\\"hljs-selector-class\\">.mat-radio-button</span> {\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">1rem</span>;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.mat-checkbox</span> {\\n  <span class=\\"hljs-attribute\\">display</span>: inline-block;\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">1rem</span> <span class=\\"hljs-number\\">1rem</span> <span class=\\"hljs-number\\">1rem</span> <span class=\\"hljs-number\\">0</span>;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.mat-form-field</span> {\\n  <span class=\\"hljs-attribute\\">margin-right</span>: <span class=\\"hljs-number\\">1rem</span>;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.mat-card</span> {\\n  <span class=\\"hljs-attribute\\">max-width</span>: <span class=\\"hljs-number\\">300px</span>;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.mat-slider</span> {\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">0</span> .<span class=\\"hljs-number\\">5rem</span>;\\n}\\n"'},88737:function(s){"use strict";s.exports='module.exports = "<span class=\\"hljs-selector-class\\">.demo-inline-card</span> {\\n  <span class=\\"hljs-attribute\\">width</span>: <span class=\\"hljs-number\\">300px</span>;\\n  <span class=\\"hljs-attribute\\">margin-bottom</span>: <span class=\\"hljs-number\\">1rem</span>;\\n}\\n"'},13255:function(s){"use strict";s.exports='export default ".mat-radio-button {\\n  margin: 1rem;\\n}\\n\\n.mat-checkbox {\\n  display: inline-block;\\n  margin: 1rem 1rem 1rem 0;\\n}\\n\\n.mat-form-field {\\n  margin-right: 1rem;\\n}\\n\\n.mat-card {\\n  max-width: 300px;\\n}\\n\\n.mat-slider {\\n  margin: 0 .5rem;\\n}\\n";'},1926:function(s){"use strict";s.exports='export default ".demo-inline-card {\\n  width: 300px;\\n  margin-bottom: 1rem;\\n}\\n";'}}])}();