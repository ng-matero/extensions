(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[817],{70817:(i,r,s)=>{"use strict";s.r(r),s.d(r,{Text3dApiComponent:()=>v,Text3dModule:()=>O,Text3dOverviewComponent:()=>x});var n=s(62510),T=s(277),t=s(94650),u=s(24006),f=s(59549),_=s(44144),C=s(87314),g=s(36895);const b=function(a,l){return{"z-index":a,transform:l}};function M(a,l){if(1&a&&(t.TgZ(0,"span",1),t._uU(1),t.GkF(2,2),t.qZA()),2&a){const e=l.$implicit,o=t.oxw();t.Q6J("ngStyle",t.WLB(3,b,-e,"translate3d(0, 0,"+-e+"px)")),t.xp6(1),t.hij(" ",o.text," "),t.xp6(1),t.Q6J("ngTemplateOutlet",o.template)}}let y=(()=>{class a{constructor(){this.text="",this.depth=20,this.rotateX=60,this.rotateY=0,this.rotateZ=0}get transform(){return`rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`}get depthArr(){const e=[];for(let o=1;o<=this.depth;o++)e.push(o);return e}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["mtx-text3d"]],contentQueries:function(e,o,j){if(1&e&&t.Suo(j,t.Rgc,5),2&e){let m;t.iGM(m=t.CRH())&&(o.template=m.first)}},hostAttrs:[1,"mtx-text3d"],hostVars:2,hostBindings:function(e,o){2&e&&t.Udp("transform",o.transform)},inputs:{text:"text",depth:"depth",rotateX:"rotateX",rotateY:"rotateY",rotateZ:"rotateZ"},exportAs:["mtxText3d"],decls:1,vars:1,consts:[["class","mtx-text3d-layer",3,"ngStyle",4,"ngFor","ngForOf"],[1,"mtx-text3d-layer",3,"ngStyle"],[3,"ngTemplateOutlet"]],template:function(e,o){1&e&&t.YNc(0,M,3,6,"span",0),2&e&&t.Q6J("ngForOf",o.depthArr)},dependencies:[g.sg,g.tP,g.PC],styles:[".mtx-text3d{display:block;transform-style:preserve-3d;-webkit-animation:rotate 5s ease infinite;animation:rotate 5s ease infinite;font-weight:700}.mtx-text3d .mtx-text3d-layer{display:block;text-align:center;font-size:10rem}.mtx-text3d .mtx-text3d-layer:not(:first-child){position:absolute;top:0;left:0%;right:0%;margin:auto;transform-style:preserve-3d}\n"],encapsulation:2,changeDetection:0}),a})();const Z={title:"Configurable 3D text",component:(()=>{class a{constructor(){this.text="3D Text",this.depth=20,this.rotateX=60,this.rotateY=0,this.rotateZ=0}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["text-3d-example"]],decls:22,vars:10,consts:[["matInput","","placeholder","Text",3,"ngModel","ngModelChange"],["min","1","max","50","thumbLabel","",3,"ngModel","ngModelChange"],["min","0","max","360","thumbLabel","",3,"ngModel","ngModelChange"],[3,"text","depth","rotateX","rotateY","rotateZ"]],template:function(e,o){1&e&&(t.TgZ(0,"h2"),t._uU(1,"3D Text configuration"),t.qZA(),t.TgZ(2,"section")(3,"mat-form-field")(4,"input",0),t.NdJ("ngModelChange",function(m){return o.text=m}),t.qZA()()(),t.TgZ(5,"section")(6,"label"),t._uU(7,"Depth:"),t.qZA(),t.TgZ(8,"mat-slider",1),t.NdJ("ngModelChange",function(m){return o.depth=m}),t.qZA()(),t.TgZ(9,"section")(10,"label"),t._uU(11,"RotateX:"),t.qZA(),t.TgZ(12,"mat-slider",2),t.NdJ("ngModelChange",function(m){return o.rotateX=m}),t.qZA(),t.TgZ(13,"label"),t._uU(14,"RotateY:"),t.qZA(),t.TgZ(15,"mat-slider",2),t.NdJ("ngModelChange",function(m){return o.rotateY=m}),t.qZA(),t.TgZ(16,"label"),t._uU(17,"RotateZ:"),t.qZA(),t.TgZ(18,"mat-slider",2),t.NdJ("ngModelChange",function(m){return o.rotateZ=m}),t.qZA()(),t.TgZ(19,"h2"),t._uU(20,"Result"),t.qZA(),t._UZ(21,"mtx-text3d",3)),2&e&&(t.xp6(4),t.Q6J("ngModel",o.text),t.xp6(4),t.Q6J("ngModel",o.depth),t.xp6(4),t.Q6J("ngModel",o.rotateX),t.xp6(3),t.Q6J("ngModel",o.rotateY),t.xp6(3),t.Q6J("ngModel",o.rotateZ),t.xp6(3),t.Q6J("text",o.text)("depth",o.depth)("rotateX",o.rotateX)("rotateY",o.rotateY)("rotateZ",o.rotateZ))},dependencies:[u.Fj,u.JJ,u.On,f.KE,_.Nt,C.pH,y]}),a})(),files:[{file:"app.component.html",content:s(97587),filecontent:s(1841)},{file:"app.component.ts",content:s(90321),filecontent:s(78693)},{file:"app.component.scss",content:s(55381),filecontent:s(75018)}]};var w=s(22281),c=s(29241);function h(a,l){if(1&a&&(t.ynx(0),t._UZ(1,"example-viewer",2),t.BQk()),2&a){const e=l.$implicit;t.xp6(1),t.Q6J("exampleData",e)}}function p(a,l){if(1&a&&(t.ynx(0),t.YNc(1,h,2,1,"ng-container",1),t.BQk()),2&a){const e=l.ngIf;t.xp6(1),t.Q6J("ngForOf",e.examples)}}function d(a,l){if(1&a&&(t.ynx(0),t._UZ(1,"doc-viewer",1),t.BQk()),2&a){const e=l.ngIf;t.xp6(1),t.Q6J("textContent",e.content.default)}}let x=(()=>{class a{constructor(e){this.route=e}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(n.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-text3d-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(e,o){1&e&&(t.YNc(0,p,2,1,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,o.route.data))},dependencies:[g.sg,g.O5,w.B,g.Ov],encapsulation:2}),a})(),v=(()=>{class a{constructor(e){this.route=e}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(n.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-text3d-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(e,o){1&e&&(t.YNc(0,d,2,1,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,o.route.data))},dependencies:[g.O5,c.z,g.Ov],encapsulation:2}),a})(),O=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[T.m8,n.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:x,pathMatch:"full",data:{examples:[Z]}},{path:"api",component:v,pathMatch:"full",data:{content:s(11620)}},{path:"**",redirectTo:"overview"}])]}),a})()},29241:(i,r,s)=>{"use strict";s.d(r,{z:()=>T});var n=s(94650);let T=(()=>{class t{constructor(){this.textContent=""}ngOnDestroy(){}}return t.\u0275fac=function(f){return new(f||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(f,_){1&f&&n._UZ(0,"div",0),2&f&&n.Q6J("innerHTML",_.textContent,n.oJD)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px;border-bottom:1px solid rgba(0,0,0,.12)}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0;box-shadow:0 2px 2px #0000003d,0 0 2px #0000001f}.docs-markdown th{max-width:100px;padding:13px 16px;background:rgba(0,0,0,.025);font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;border:1px solid rgba(0,0,0,.03);font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;padding:20px;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}\n"],encapsulation:2}),t})()},22281:(i,r,s)=>{"use strict";s.d(r,{B:()=>w});var n=s(94650),T=s(17009),t=s(27163),u=s(36895),f=s(4859),_=s(97392),C=s(3848),g=s(10266);const b=["demo"];function M(c,h){if(1&c){const p=n.EpF();n.TgZ(0,"mat-tab",10)(1,"div",11)(2,"div",12)(3,"button",13),n.NdJ("click",function(){n.CHM(p);const x=n.MAs(8),v=n.oxw(2);return n.KtG(v.copySource(x))}),n.TgZ(4,"mat-icon"),n._uU(5,"content_copy"),n.qZA()()(),n.TgZ(6,"div",14),n._UZ(7,"pre",15,16),n.qZA()()()}if(2&c){const p=h.$implicit;n.Q6J("label",p.file),n.xp6(3),n.Q6J("matTooltip","Copy example source"),n.xp6(4),n.Q6J("innerHtml",p.content,n.oJD)}}function y(c,h){if(1&c&&(n.TgZ(0,"div",8)(1,"mat-tab-group"),n.YNc(2,M,9,3,"mat-tab",9),n.qZA()()),2&c){const p=n.oxw();n.xp6(2),n.Q6J("ngForOf",p.exampleData.files)}}function A(c,h){if(1&c&&n._UZ(0,"div",17),2&c){const p=n.oxw();n.Q6J("innerHtml",p.exampleData.description,n.oJD)}}function Z(c,h){}let w=(()=>{class c{constructor(p,d,x){this.snackbar=p,this.copier=d,this.componentFactoryResolver=x,this.showSource=!1}ngOnInit(){const p=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(p)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(p){this.copier.copyText(p.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}return c.\u0275fac=function(p){return new(p||c)(n.Y36(T.ux),n.Y36(t.u),n.Y36(n._Vd))},c.\u0275cmp=n.Xpm({type:c,selectors:[["example-viewer"]],viewQuery:function(p,d){if(1&p&&n.Gf(b,7,n.s_b),2&p){let x;n.iGM(x=n.CRH())&&(d.demoRef=x.first)}},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(p,d){1&p&&(n.TgZ(0,"div",0)(1,"div",1)(2,"span"),n._uU(3),n.qZA(),n._UZ(4,"div",2),n.TgZ(5,"button",3),n.NdJ("click",function(){return d.toggleSourceView()}),n.TgZ(6,"mat-icon"),n._uU(7,"code"),n.qZA()()(),n.YNc(8,y,3,1,"div",4),n.TgZ(9,"div",5),n.YNc(10,A,1,1,"div",6),n.YNc(11,Z,0,0,"ng-template",null,7,n.W1O),n.qZA()()),2&p&&(n.xp6(3),n.Oqu(d.exampleData.title),n.xp6(2),n.Q6J("matTooltip","View source"),n.xp6(3),n.Q6J("ngIf",d.showSource),n.xp6(2),n.Q6J("ngIf",d.exampleData.description))},dependencies:[u.sg,u.O5,f.lW,_.Hw,C.SP,C.uX,g.gM],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),c})()},97587:i=>{i.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>3D Text configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Text&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Depth:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;depth&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>RotateX:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;360&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;rotateX&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>RotateY:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;360&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;rotateY&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>RotateZ:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;360&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;rotateZ&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-text3d</span> [<span class="hljs-attr">text</span>]=<span class="hljs-string">&quot;text&quot;</span> [<span class="hljs-attr">depth</span>]=<span class="hljs-string">&quot;depth&quot;</span>\n            [<span class="hljs-attr">rotateX</span>]=<span class="hljs-string">&quot;rotateX&quot;</span> [<span class="hljs-attr">rotateY</span>]=<span class="hljs-string">&quot;rotateY&quot;</span> [<span class="hljs-attr">rotateZ</span>]=<span class="hljs-string">&quot;rotateZ&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-text3d</span>&gt;</span>\n'},55381:i=>{i.exports='<span class="hljs-comment">/** No CSS for this example */</span>\n'},90321:i=>{i.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;text-3d-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  text = <span class="hljs-string">&#x27;3D Text&#x27;</span>;\n  depth = <span class="hljs-number">20</span>;\n  rotateX = <span class="hljs-number">60</span>;\n  rotateY = <span class="hljs-number">0</span>;\n  rotateZ = <span class="hljs-number">0</span>;\n}\n'},11620:(i,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>n});const n='<h1 id="text3d">Text3d</h1>\n<h2 id="api-reference-for-material-extensions-text3d">API reference for Material Extensions Text3d</h2>\n<p><code>import { MtxText3dModule } from &apos;@ng-matero/extensions/text3d&apos;;</code></p>\n'},1841:(i,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>n});const n='<h2>3D Text configuration</h2>\n\n<section>\n  <mat-form-field>\n    <input matInput [(ngModel)]="text" placeholder="Text">\n  </mat-form-field>\n</section>\n\n<section>\n  <label>Depth:</label>\n  <mat-slider min="1" max="50" thumbLabel [(ngModel)]="depth"></mat-slider>\n</section>\n\n<section>\n  <label>RotateX:</label>\n  <mat-slider min="0" max="360" thumbLabel [(ngModel)]="rotateX"></mat-slider>\n\n  <label>RotateY:</label>\n  <mat-slider min="0" max="360" thumbLabel [(ngModel)]="rotateY"></mat-slider>\n\n  <label>RotateZ:</label>\n  <mat-slider min="0" max="360" thumbLabel [(ngModel)]="rotateZ"></mat-slider>\n</section>\n\n<h2>Result</h2>\n\n<mtx-text3d [text]="text" [depth]="depth"\n            [rotateX]="rotateX" [rotateY]="rotateY" [rotateZ]="rotateZ"></mtx-text3d>\n'},75018:(i,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>n});const n="/** No CSS for this example */\n"},78693:(i,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>n});const n="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'text-3d-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  text = '3D Text';\n  depth = 20;\n  rotateX = 60;\n  rotateY = 0;\n  rotateZ = 0;\n}\n"}}]);