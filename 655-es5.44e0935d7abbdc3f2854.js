!function(){function n(n,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function t(t,s,a){return s&&n(t.prototype,s),a&&n(t,a),t}function s(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[655],{86655:function(n,t,a){"use strict";a.r(t),a.d(t,{TooltipApiComponent:function(){return Z},TooltipModule:function(){return C},TooltipOverviewComponent:function(){return y}});var o=a(63423),e=a(2150),p=a(3679),l=a(37716),i=a(98295),r=a(67441),c=a(38583),m=a(51095),u=a(43539),h=a(72458);function g(n,t){if(1&n&&(l.TgZ(0,"mat-option",5),l._uU(1),l.qZA()),2&n){var s=t.$implicit;l.Q6J("value",s),l.xp6(1),l.hij(" ",s," ")}}function d(n,t){1&n&&(l.TgZ(0,"div"),l._uU(1,"This is a template!"),l.qZA(),l.TgZ(2,"div"),l._uU(3,"Ceci est un mod\xe8le!"),l.qZA(),l.TgZ(4,"div"),l._uU(5,"\u8fd9\u662f\u4e00\u4e2a\u6a21\u677f!"),l.qZA(),l.TgZ(6,"div"),l._uU(7,"\u3053\u308c\u306f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067\u3059!"),l.qZA(),l.TgZ(8,"div",6),l._uU(9,"\u0647\u0630\u0627 \u0642\u0627\u0644\u0628!"),l.qZA())}var f,x={title:"Tooltip with template",component:(f=function n(){s(this,n),this.positionOptions=["after","before","above","below","left","right"],this.position=new p.NI(this.positionOptions[0])},f.\u0275fac=function(n){return new(n||f)},f.\u0275cmp=l.Xpm({type:f,selectors:[["tooltip-example"]],decls:11,vars:4,consts:[[1,"example-user-input"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","aria-label","Button that displays a tooltip in various positions",3,"mtxTooltip","mtxTooltipPosition"],["tooltipTpl",""],[3,"value"],[1,"text-right"]],template:function(n,t){if(1&n&&(l.TgZ(0,"h2"),l._uU(1,"Tooltip with template"),l.qZA(),l.TgZ(2,"mat-form-field",0),l.TgZ(3,"mat-label"),l._uU(4,"Tooltip position"),l.qZA(),l.TgZ(5,"mat-select",1),l.YNc(6,g,2,2,"mat-option",2),l.qZA(),l.qZA(),l.TgZ(7,"button",3),l._uU(8," Action\n"),l.qZA(),l.YNc(9,d,10,0,"ng-template",null,4,l.W1O)),2&n){var s=l.MAs(10);l.xp6(5),l.Q6J("formControl",t.position),l.xp6(1),l.Q6J("ngForOf",t.positionOptions),l.xp6(1),l.Q6J("mtxTooltip",s)("mtxTooltipPosition",t.position.value)}},directives:[i.KE,i.hX,r.gD,p.JJ,p.oH,c.sg,m.lW,u.Yv,h.ey],styles:[".mat-button-base[_ngcontent-%COMP%]{margin:0 .5rem}.text-right[_ngcontent-%COMP%]{text-align:right}"]}),f),files:[{file:"app.component.html",content:a(19410),filecontent:a(47440)},{file:"app.component.ts",content:a(27847),filecontent:a(23494)},{file:"app.component.scss",content:a(8959),filecontent:a(49503)}]},v=a(22281),j=a(29241);function b(n,t){if(1&n&&(l.ynx(0),l._UZ(1,"example-viewer",2),l.BQk()),2&n){var s=t.$implicit;l.xp6(1),l.Q6J("exampleData",s)}}function w(n,t){if(1&n&&(l.ynx(0),l.YNc(1,b,2,1,"ng-container",1),l.BQk()),2&n){var s=t.ngIf;l.xp6(1),l.Q6J("ngForOf",s.examples)}}function T(n,t){if(1&n&&(l.ynx(0),l._UZ(1,"doc-viewer",1),l.BQk()),2&n){var s=t.ngIf;l.xp6(1),l.Q6J("textContent",s.content.default)}}var y=function(){var n=function n(t){s(this,n),this.route=t};return n.\u0275fac=function(t){return new(t||n)(l.Y36(o.gz))},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-tooltip-overview"]],decls:10,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(n,t){1&n&&(l.TgZ(0,"p"),l._uU(1," The extensions tooltip supports rich content, its APIs are exactly the same as material tooltip. You should use prefix "),l.TgZ(2,"code"),l._uU(3,"mtx"),l.qZA(),l._uU(4," instead of "),l.TgZ(5,"code"),l._uU(6,"mat"),l.qZA(),l._uU(7,".\n"),l.qZA(),l.YNc(8,w,2,1,"ng-container",0),l.ALo(9,"async")),2&n&&(l.xp6(8),l.Q6J("ngIf",l.lcZ(9,1,t.route.data)))},directives:[c.O5,c.sg,v.B],pipes:[c.Ov],encapsulation:2}),n}(),Z=function(){var n=function n(t){s(this,n),this.route=t};return n.\u0275fac=function(t){return new(t||n)(l.Y36(o.gz))},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-tooltip-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(n,t){1&n&&(l.YNc(0,T,2,1,"ng-container",0),l.ALo(1,"async")),2&n&&l.Q6J("ngIf",l.lcZ(1,1,t.route.data))},directives:[c.O5,j.z],pipes:[c.Ov],encapsulation:2}),n}(),C=function(){var n=function n(){s(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[e.m8,o.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:y,pathMatch:"full",data:{examples:[x]}},{path:"api",component:Z,pathMatch:"full",data:{content:a(14338)}},{path:"**",redirectTo:"overview"}])]]}),n}()},29241:function(n,a,o){"use strict";o.d(a,{z:function(){return l}});var e,p=o(37716),l=((e=function(){function n(){s(this,n),this.textContent=""}return t(n,[{key:"ngOnDestroy",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(n,t){1&n&&p._UZ(0,"div",0),2&n&&p.Q6J("innerHTML",t.textContent,p.oJD)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px;border-bottom:1px solid rgba(0,0,0,.12)}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0;box-shadow:0 2px 2px #0000003d,0 0 2px #0000001f}.docs-markdown th{max-width:100px;padding:13px 16px;background:rgba(0,0,0,.025);font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;border:1px solid rgba(0,0,0,.03);font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;padding:20px;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}\n"],encapsulation:2}),e)},22281:function(n,a,o){"use strict";o.d(a,{B:function(){return j}});var e=o(37716),p=o(77001),l=o(27163),i=o(51095),r=o(11436),c=o(76627),m=o(38583),u=o(65939),h=["demo"];function g(n,t){if(1&n){var s=e.EpF();e.TgZ(0,"mat-tab",10),e.TgZ(1,"div",11),e.TgZ(2,"div",12),e.TgZ(3,"button",13),e.NdJ("click",function(){e.CHM(s);var n=e.MAs(8);return e.oxw(2).copySource(n)}),e.TgZ(4,"mat-icon"),e._uU(5,"content_copy"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",14),e._UZ(7,"pre",15,16),e.qZA(),e.qZA(),e.qZA()}if(2&n){var a=t.$implicit;e.Q6J("label",a.file),e.xp6(3),e.Q6J("matTooltip","Copy example source"),e.xp6(4),e.Q6J("innerHtml",a.content,e.oJD)}}function d(n,t){if(1&n&&(e.TgZ(0,"div",8),e.TgZ(1,"mat-tab-group"),e.YNc(2,g,9,3,"mat-tab",9),e.qZA(),e.qZA()),2&n){var s=e.oxw();e.xp6(2),e.Q6J("ngForOf",s.exampleData.files)}}function f(n,t){if(1&n&&e._UZ(0,"div",17),2&n){var s=e.oxw();e.Q6J("innerHtml",s.exampleData.description,e.oJD)}}function x(n,t){}var v,j=((v=function(){function n(t,a,o){s(this,n),this.snackbar=t,this.copier=a,this.componentFactoryResolver=o,this.showSource=!1}return t(n,[{key:"ngOnInit",value:function(){var n=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(n)}},{key:"ngOnDestroy",value:function(){this.demoComponentRef&&this.demoComponentRef.destroy()}},{key:"toggleSourceView",value:function(){this.showSource=!this.showSource}},{key:"copySource",value:function(n){this.copier.copyText(n.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}]),n}()).\u0275fac=function(n){return new(n||v)(e.Y36(p.ux),e.Y36(l.u),e.Y36(e._Vd))},v.\u0275cmp=e.Xpm({type:v,selectors:[["example-viewer"]],viewQuery:function(n,t){var s;1&n&&e.Gf(h,7,e.s_b),2&n&&e.iGM(s=e.CRH())&&(t.demoRef=s.first)},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"span"),e._uU(3),e.qZA(),e._UZ(4,"div",2),e.TgZ(5,"button",3),e.NdJ("click",function(){return t.toggleSourceView()}),e.TgZ(6,"mat-icon"),e._uU(7,"code"),e.qZA(),e.qZA(),e.qZA(),e.YNc(8,d,3,1,"div",4),e.TgZ(9,"div",5),e.YNc(10,f,1,1,"div",6),e.YNc(11,x,0,0,"ng-template",null,7,e.W1O),e.qZA(),e.qZA()),2&n&&(e.xp6(3),e.Oqu(t.exampleData.title),e.xp6(2),e.Q6J("matTooltip","View source"),e.xp6(3),e.Q6J("ngIf",t.showSource),e.xp6(2),e.Q6J("ngIf",t.exampleData.description))},directives:[i.lW,r.gM,c.Hw,m.O5,u.SP,m.sg,u.uX],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),v)},19410:function(n){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Tooltip with template<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;example-user-input&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Tooltip position<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-select</span> [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;position&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">&quot;let positionOption of positionOptions&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;positionOption&quot;</span>&gt;</span>\n      {{positionOption}}\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mat-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-select</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span>\n        [<span class="hljs-attr">mtxTooltip</span>]=<span class="hljs-string">&quot;tooltipTpl&quot;</span>\n        [<span class="hljs-attr">mtxTooltipPosition</span>]=<span class="hljs-string">&quot;position.value&quot;</span>\n        <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Button that displays a tooltip in various positions&quot;</span>&gt;</span>\n  Action\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">tooltipTpl</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>This is a template!<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Ceci est un mod\xe8le!<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u8fd9\u662f\u4e00\u4e2a\u6a21\u677f!<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u3053\u308c\u306f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067\u3059!<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-right&quot;</span>&gt;</span>\u0647\u0630\u0627 \u0642\u0627\u0644\u0628!<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n'},27847:function(n){n.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">TooltipPosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;tooltip-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  <span class="hljs-attr">positionOptions</span>: <span class="hljs-title class_">TooltipPosition</span>[] = [<span class="hljs-string">&#x27;after&#x27;</span>, <span class="hljs-string">&#x27;before&#x27;</span>, <span class="hljs-string">&#x27;above&#x27;</span>, <span class="hljs-string">&#x27;below&#x27;</span>, <span class="hljs-string">&#x27;left&#x27;</span>, <span class="hljs-string">&#x27;right&#x27;</span>];\n  position = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">positionOptions</span>[<span class="hljs-number">0</span>]);\n}\n'},14338:function(n,t,s){"use strict";s.r(t),t.default='<h1 id="tooltip">Tooltip</h1>\n<h2 id="api-reference-for-material-extensions-tooltip">API reference for Material Extensions Tooltip</h2>\n<p><code>import { MtxTooltipModule } from &apos;@ng-matero/extensions/tooltip&apos;;</code></p>\n<h3 id="apis">APIs</h3>\n<p>The APIs are similar with <a href="https://material.angular.io/components/tooltip/api">Material Tooltip</a>, just replace the prefix <code>mat</code> with <code>mtx</code>.</p>\n'},47440:function(n,t,s){"use strict";s.r(t),t.default='<h2>Tooltip with template</h2>\n\n<mat-form-field class="example-user-input">\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]="position">\n    <mat-option *ngFor="let positionOption of positionOptions" [value]="positionOption">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-raised-button\n        [mtxTooltip]="tooltipTpl"\n        [mtxTooltipPosition]="position.value"\n        aria-label="Button that displays a tooltip in various positions">\n  Action\n</button>\n\n<ng-template #tooltipTpl>\n  <div>This is a template!</div>\n  <div>Ceci est un mod\xe8le!</div>\n  <div>\u8fd9\u662f\u4e00\u4e2a\u6a21\u677f!</div>\n  <div>\u3053\u308c\u306f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067\u3059!</div>\n  <div class="text-right">\u0647\u0630\u0627 \u0642\u0627\u0644\u0628!</div>\n</ng-template>\n'},23494:function(n,t,s){"use strict";s.r(t),t.default="import { Component } from '@angular/core';\nimport { FormControl } from '@angular/forms';\nimport { TooltipPosition } from '@ng-matero/extensions';\n\n@Component({\n  selector: 'tooltip-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];\n  position = new FormControl(this.positionOptions[0]);\n}\n"},8959:function(n){"use strict";n.exports='module.exports = "<span class=\\"hljs-selector-class\\">.mat-button-base</span> {\\n  <span class=\\"hljs-attribute\\">margin</span>: <span class=\\"hljs-number\\">0</span> .<span class=\\"hljs-number\\">5rem</span>;\\n}\\n\\n<span class=\\"hljs-selector-class\\">.text-right</span> {\\n  <span class=\\"hljs-attribute\\">text-align</span>: right;\\n}\\n"'},49503:function(n){"use strict";n.exports='export default ".mat-button-base {\\n  margin: 0 .5rem;\\n}\\n\\n.text-right {\\n  text-align: right;\\n}\\n";'}}])}();