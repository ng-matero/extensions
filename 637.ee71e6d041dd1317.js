(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[637],{70637:(c,o,t)=>{"use strict";t.r(o),t.d(o,{AlertApiComponent:()=>m,AlertModule:()=>g,AlertOverviewComponent:()=>l});var s=t(62510),v=t(277),n=t(94650),u=t(24006),h=t(56709),j=t(71948),b=t(87314),_=t(76394);const y={title:"Configurable alert",component:(()=>{class a{constructor(){this.type="info",this.dismissible=!1,this.elevation=3}onClosed(e){alert("closed event!"),console.log(e)}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["alert-example"]],decls:27,vars:7,consts:[[3,"ngModel","ngModelChange"],["value","info"],["value","success"],["value","warning"],["value","danger"],[3,"ngModel","labelPosition","ngModelChange"],["min","0","max","24","thumbLabel","",3,"ngModel","ngModelChange"],[3,"type","elevation","dismissible","closed"]],template:function(e,r){1&e&&(n.TgZ(0,"h2"),n._uU(1,"Alert configuration"),n.qZA(),n.TgZ(2,"section")(3,"label"),n._uU(4,"Type:"),n.qZA(),n.TgZ(5,"mat-radio-group",0),n.NdJ("ngModelChange",function(x){return r.type=x}),n.TgZ(6,"mat-radio-button",1),n._uU(7,"Info"),n.qZA(),n.TgZ(8,"mat-radio-button",2),n._uU(9,"Success"),n.qZA(),n.TgZ(10,"mat-radio-button",3),n._uU(11,"Warning"),n.qZA(),n.TgZ(12,"mat-radio-button",4),n._uU(13,"Danger"),n.qZA()()(),n.TgZ(14,"section")(15,"mat-checkbox",5),n.NdJ("ngModelChange",function(x){return r.dismissible=x}),n._uU(16,"Dismissible"),n.qZA()(),n.TgZ(17,"section")(18,"label"),n._uU(19,"Elevation:"),n.qZA(),n.TgZ(20,"mat-slider",6),n.NdJ("ngModelChange",function(x){return r.elevation=x}),n.qZA()(),n.TgZ(21,"h2"),n._uU(22,"Result"),n.qZA(),n.TgZ(23,"mtx-alert",7),n.NdJ("closed",function(x){return r.onClosed(x)}),n.TgZ(24,"strong"),n._uU(25,"Heads up!"),n.qZA(),n._uU(26," This alert needs your attention, but it's not super important.\n"),n.qZA()),2&e&&(n.xp6(5),n.Q6J("ngModel",r.type),n.xp6(10),n.Q6J("ngModel",r.dismissible)("labelPosition","before"),n.xp6(5),n.Q6J("ngModel",r.elevation),n.xp6(3),n.Q6J("type",r.type)("elevation",r.elevation)("dismissible",r.dismissible))},dependencies:[u.JJ,u.On,h.oG,j.VQ,j.U0,b.pH,_.S],styles:[".mat-radio-button[_ngcontent-%COMP%]{margin:1em}.mat-checkbox[_ngcontent-%COMP%]{display:inline-block;margin:1rem 1rem 1rem 0}"]}),a})(),files:[{file:"app.component.html",content:t(12349),filecontent:t(63347)},{file:"app.component.ts",content:t(62886),filecontent:t(47604)},{file:"app.component.scss",content:t(75601),filecontent:t(93665)}]};var f=t(36895),C=t(22281),A=t(29241);function T(a,i){if(1&a&&(n.ynx(0),n._UZ(1,"example-viewer",2),n.BQk()),2&a){const e=i.$implicit;n.xp6(1),n.Q6J("exampleData",e)}}function p(a,i){if(1&a&&(n.ynx(0),n.YNc(1,T,2,1,"ng-container",1),n.BQk()),2&a){const e=i.ngIf;n.xp6(1),n.Q6J("ngForOf",e.examples)}}function d(a,i){if(1&a&&(n.ynx(0),n._UZ(1,"doc-viewer",1),n.BQk()),2&a){const e=i.ngIf;n.xp6(1),n.Q6J("textContent",e.content.default)}}let l=(()=>{class a{constructor(e){this.route=e}}return a.\u0275fac=function(e){return new(e||a)(n.Y36(s.gz))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-alert-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(e,r){1&e&&(n.YNc(0,p,2,1,"ng-container",0),n.ALo(1,"async")),2&e&&n.Q6J("ngIf",n.lcZ(1,1,r.route.data))},dependencies:[f.sg,f.O5,C.B,f.Ov],encapsulation:2}),a})(),m=(()=>{class a{constructor(e){this.route=e}}return a.\u0275fac=function(e){return new(e||a)(n.Y36(s.gz))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-alert-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(e,r){1&e&&(n.YNc(0,d,2,1,"ng-container",0),n.ALo(1,"async")),2&e&&n.Q6J("ngIf",n.lcZ(1,1,r.route.data))},dependencies:[f.O5,A.z,f.Ov],encapsulation:2}),a})(),g=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[v.m8,s.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:l,pathMatch:"full",data:{examples:[y]}},{path:"api",component:m,pathMatch:"full",data:{content:t(46114)}},{path:"**",redirectTo:"overview"}])]}),a})()},29241:(c,o,t)=>{"use strict";t.d(o,{z:()=>v});var s=t(94650);let v=(()=>{class n{constructor(){this.textContent=""}ngOnDestroy(){}}return n.\u0275fac=function(h){return new(h||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(h,j){1&h&&s._UZ(0,"div",0),2&h&&s.Q6J("innerHTML",j.textContent,s.oJD)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0}.docs-markdown th{max-width:100px;padding:13px 16px;font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}\n"],encapsulation:2}),n})()},22281:(c,o,t)=>{"use strict";t.d(o,{B:()=>T});var s=t(94650),v=t(17009),n=t(27163),u=t(36895),h=t(4859),j=t(97392),b=t(3848),_=t(10266);const w=["demo"];function y(p,d){if(1&p){const l=s.EpF();s.TgZ(0,"mat-tab",10)(1,"div",11)(2,"div",12)(3,"button",13),s.NdJ("click",function(){s.CHM(l);const g=s.MAs(8),a=s.oxw(2);return s.KtG(a.copySource(g))}),s.TgZ(4,"mat-icon"),s._uU(5,"content_copy"),s.qZA()()(),s.TgZ(6,"div",14),s._UZ(7,"pre",15,16),s.qZA()()()}if(2&p){const l=d.$implicit;s.Q6J("label",l.file),s.xp6(3),s.Q6J("matTooltip","Copy example source"),s.xp6(4),s.Q6J("innerHtml",l.content,s.oJD)}}function f(p,d){if(1&p&&(s.TgZ(0,"div",8)(1,"mat-tab-group"),s.YNc(2,y,9,3,"mat-tab",9),s.qZA()()),2&p){const l=s.oxw();s.xp6(2),s.Q6J("ngForOf",l.exampleData.files)}}function C(p,d){if(1&p&&s._UZ(0,"div",17),2&p){const l=s.oxw();s.Q6J("innerHtml",l.exampleData.description,s.oJD)}}function A(p,d){}let T=(()=>{class p{constructor(l,m,g){this.snackbar=l,this.copier=m,this.componentFactoryResolver=g,this.showSource=!1}ngOnInit(){const l=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(l)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(l){this.copier.copyText(l.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}return p.\u0275fac=function(l){return new(l||p)(s.Y36(v.ux),s.Y36(n.u),s.Y36(s._Vd))},p.\u0275cmp=s.Xpm({type:p,selectors:[["example-viewer"]],viewQuery:function(l,m){if(1&l&&s.Gf(w,7,s.s_b),2&l){let g;s.iGM(g=s.CRH())&&(m.demoRef=g.first)}},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(l,m){1&l&&(s.TgZ(0,"div",0)(1,"div",1)(2,"span"),s._uU(3),s.qZA(),s._UZ(4,"div",2),s.TgZ(5,"button",3),s.NdJ("click",function(){return m.toggleSourceView()}),s.TgZ(6,"mat-icon"),s._uU(7,"code"),s.qZA()()(),s.YNc(8,f,3,1,"div",4),s.TgZ(9,"div",5),s.YNc(10,C,1,1,"div",6),s.YNc(11,A,0,0,"ng-template",null,7,s.W1O),s.qZA()()),2&l&&(s.xp6(3),s.Oqu(m.exampleData.title),s.xp6(2),s.Q6J("matTooltip","View source"),s.xp6(3),s.Q6J("ngIf",m.showSource),s.xp6(2),s.Q6J("ngIf",m.exampleData.description))},dependencies:[u.sg,u.O5,h.lW,j.Hw,b.SP,b.uX,_.gM],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),p})()},12349:c=>{c.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Alert configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;type&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;dismissible&quot;</span> [<span class="hljs-attr">labelPosition</span>]=<span class="hljs-string">&quot;&#x27;before&#x27;&quot;</span>&gt;</span>Dismissible<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Elevation:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;24&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;elevation&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-alert</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;type&quot;</span> [<span class="hljs-attr">elevation</span>]=<span class="hljs-string">&quot;elevation&quot;</span> [<span class="hljs-attr">dismissible</span>]=<span class="hljs-string">&quot;dismissible&quot;</span>\n           (<span class="hljs-attr">closed</span>)=<span class="hljs-string">&quot;onClosed($event)&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Heads up!<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> This alert needs your attention, but it&#x27;s not super important.\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-alert</span>&gt;</span>\n'},75601:c=>{c.exports='<span class="hljs-selector-class">.mat-radio-button</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1em</span>;\n}\n\n<span class="hljs-selector-class">.mat-checkbox</span> {\n  <span class="hljs-attribute">display</span>: inline-block;\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">1rem</span> <span class="hljs-number">0</span>;\n}\n'},62886:c=>{c.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MtxAlertType</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions/alert&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;alert-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  <span class="hljs-attr">type</span>: <span class="hljs-title class_">MtxAlertType</span> = <span class="hljs-string">&#x27;info&#x27;</span>;\n  dismissible = <span class="hljs-literal">false</span>;\n  elevation = <span class="hljs-number">3</span>;\n\n  <span class="hljs-title function_">onClosed</span>(<span class="hljs-params">e: <span class="hljs-built_in">any</span></span>) {\n    <span class="hljs-title function_">alert</span>(<span class="hljs-string">&#x27;closed event!&#x27;</span>);\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(e);\n  }\n}\n'},46114:(c,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>s});const s='<h1 id="alert">Alert</h1>\n<h2 id="api-reference-for-material-extensions-alert">API reference for Material Extensions Alert</h2>\n<p><code>import { MtxAlertModule } from &apos;@ng-matero/extensions/alert&apos;;</code></p>\n<h3 id="directives">Directives</h3>\n<h4 id="mtxalert"><code>MtxAlert</code></h4>\n<p>Selector: <code>[mtx-alert]</code></p>\n<p>Exported as: <code>mtxAlert</code></p>\n<h5 id="properties">Properties</h5>\n<table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">@Input() <code>type: &apos;default&apos; | &apos;info&apos; | &apos;success&apos; | &apos;warning&apos; | &apos;danger&apos;</code></td>\n<td align="left">The alert types. Defaulted to <strong><code>default</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>isOpen: boolean</code></td>\n<td align="left">Whether alert visible. Defaulted to <strong><code>true</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>dismissible: boolean</code></td>\n<td align="left">Whether displays an inline close button.</td>\n</tr>\n<tr>\n<td align="left">@Input() <code>elevation: number</code></td>\n<td align="left">The material elevation for alert. Defaulted to <strong><code>0</code></strong>.</td>\n</tr>\n<tr>\n<td align="left">@Output() <code>closed: EventEmitter&lt;MtxAlertComponent&gt;</code></td>\n<td align="left">This event fires when alert closed.</td>\n</tr>\n</tbody></table>\n'},63347:(c,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>s});const s='<h2>Alert configuration</h2>\n\n<section>\n  <label>Type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="info">Info</mat-radio-button>\n    <mat-radio-button value="success">Success</mat-radio-button>\n    <mat-radio-button value="warning">Warning</mat-radio-button>\n    <mat-radio-button value="danger">Danger</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="dismissible" [labelPosition]="\'before\'">Dismissible</mat-checkbox>\n</section>\n\n<section>\n  <label>Elevation:</label>\n  <mat-slider min="0" max="24" thumbLabel [(ngModel)]="elevation"></mat-slider>\n</section>\n\n<h2>Result</h2>\n\n<mtx-alert [type]="type" [elevation]="elevation" [dismissible]="dismissible"\n           (closed)="onClosed($event)">\n  <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.\n</mtx-alert>\n'},93665:(c,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>s});const s=".mat-radio-button {\n  margin: 1em;\n}\n\n.mat-checkbox {\n  display: inline-block;\n  margin: 1rem 1rem 1rem 0;\n}\n"},47604:(c,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>s});const s="import { Component } from '@angular/core';\nimport { MtxAlertType } from '@ng-matero/extensions/alert';\n\n@Component({\n  selector: 'alert-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  type: MtxAlertType = 'info';\n  dismissible = false;\n  elevation = 3;\n\n  onClosed(e: any) {\n    alert('closed event!');\n    console.log(e);\n  }\n}\n"}}]);