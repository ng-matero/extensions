(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[116],{12116:(p,e,a)=>{"use strict";a.r(e),a.d(e,{ProgressApiComponent:()=>v,ProgressOverviewComponent:()=>C,routes:()=>U});var c=a(60177),s=a(54438),f=a(18498),y=a(4840),F=a(91526),h=a(89417),x=a(82765),d=a(53719),M=a(99631),u=a(5951),j=a(43881),T=a(70567);let k=(()=>{class t{static{this.\u0275fac=function(l){return new(l||t)}}static{this.\u0275mod=s.$C({type:t})}static{this.\u0275inj=s.G2t({imports:[c.MD]})}}return t})();var P=a(64890),E=a(49791),A=a(72947);const q=["*"];let b=(()=>{class t{constructor(){this.type="default",this.value=0,this.striped=!1,this.animate=!1}static{this.\u0275fac=function(l){return new(l||t)}}static{this.\u0275cmp=s.VBU({type:t,selectors:[["mtx-progress"]],hostAttrs:[1,"mtx-progress"],hostVars:4,hostBindings:function(l,n){2&l&&s.xc7("height",n.height)("background-color",n.background)},inputs:{type:"type",value:"value",height:"height",color:"color",foreground:"foreground",background:"background",striped:[2,"striped","striped",s.L39],animate:[2,"animate","animate",s.L39]},exportAs:["mtxProgress"],features:[s.GFd],ngContentSelectors:q,decls:2,vars:12,consts:[["role","progress-fill",1,"mtx-progress-fill"]],template:function(l,n){1&l&&(s.NAR(),s.j41(0,"div",0),s.SdG(1),s.k0s()),2&l&&(s.HbH("mtx-progress-fill-"+n.type),s.xc7("width",n.value,"%")("background-color",n.foreground)("color",n.color),s.AVh("mtx-progress-fill-striped",n.striped)("mtx-progress-fill-animated",n.animate))},styles:[".mtx-progress{display:flex;height:16px;margin:8px 0;overflow:hidden;font-size:var(--mtx-progress-text-size, var(--mat-sys-label-medium-size));border-radius:var(--mtx-progress-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mtx-progress-track-color, var(--mat-sys-surface-container))}.mtx-progress-fill{display:flex;flex-direction:column;justify-content:center;text-align:center;transition:width .6s ease;background-color:var(--mtx-progress-indicator-color, var(--mat-sys-outline-variant));color:var(--mtx-progress-text-color, var(--mat-sys-on-surface))}.mtx-progress-fill-info{background-color:var(--mtx-progress-info-indicator-color, #5a64ff);color:var(--mtx-progress-info-text-color, white)}.mtx-progress-fill-success{background-color:var(--mtx-progress-success-indicator-color, #038b00);color:var(--mtx-progress-success-text-color, white)}.mtx-progress-fill-warning{background-color:var(--mtx-progress-warning-indicator-color, #bc5d00);color:var(--mtx-progress-warning-text-color, white)}.mtx-progress-fill-danger{background-color:var(--mtx-progress-danger-indicator-color, #ef0000);color:var(--mtx-progress-danger-text-color, white)}.mtx-progress-fill-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:16px 16px}.mtx-progress-fill-animated{animation:mtx-progress-fill-stripes 1s linear infinite}@media (prefers-reduced-motion: reduce){.mtx-progress-fill-animated{animation:none}}@keyframes mtx-progress-fill-stripes{0%{background-position:16px 0}to{background-position:0 0}}\n"],encapsulation:2,changeDetection:0})}}return t})();function R(t,m){if(1&t){const i=s.RV6();s.j41(0,"mat-checkbox",3),s.mxI("ngModelChange",function(n){s.eBV(i);const r=s.XpG();return s.DH7(r.animate,n)||(r.animate=n),s.Njj(n)}),s.EFF(1,"Animate"),s.k0s()}if(2&t){const i=s.XpG();s.R50("ngModel",i.animate)}}const D={title:"Configurable progress",component:(()=>{class t{constructor(){this.type="info",this.value=50,this.striped=!1,this.animate=!1,this.height=16,this.foreground="",this.background=""}static{this.\u0275fac=function(l){return new(l||t)}}static{this.\u0275cmp=s.VBU({type:t,selectors:[["progress-example"]],decls:47,vars:19,consts:[["cp1",""],["cp2",""],["for",""],[3,"ngModelChange","ngModel"],["value","info"],["value","success"],["value","warning"],["value","danger"],["min","0","max","100","discrete",""],["matSliderThumb","",3,"ngModelChange","ngModel"],[3,"ngModel"],["min","1","max","16","discrete",""],["matInput","",3,"ngModelChange","ngModel","mtxColorpicker"],["matSuffix","",3,"for"],[3,"type","value","striped","animate","height","foreground","background"]],template:function(l,n){if(1&l){const r=s.RV6();s.j41(0,"h2"),s.EFF(1,"Progress configuration"),s.k0s(),s.j41(2,"section")(3,"label",2),s.EFF(4,"Type:"),s.k0s(),s.j41(5,"mat-radio-group",3),s.mxI("ngModelChange",function(o){return s.eBV(r),s.DH7(n.type,o)||(n.type=o),s.Njj(o)}),s.j41(6,"mat-radio-button",4),s.EFF(7,"Info"),s.k0s(),s.j41(8,"mat-radio-button",5),s.EFF(9,"Success"),s.k0s(),s.j41(10,"mat-radio-button",6),s.EFF(11,"Warning"),s.k0s(),s.j41(12,"mat-radio-button",7),s.EFF(13,"Danger"),s.k0s()()(),s.j41(14,"section")(15,"label",2),s.EFF(16,"Progress:"),s.k0s(),s.j41(17,"mat-slider",8)(18,"input",9),s.mxI("ngModelChange",function(o){return s.eBV(r),s.DH7(n.value,o)||(n.value=o),s.Njj(o)}),s.k0s()()(),s.j41(19,"section")(20,"mat-checkbox",3),s.mxI("ngModelChange",function(o){return s.eBV(r),s.DH7(n.striped,o)||(n.striped=o),s.Njj(o)}),s.EFF(21,"Striped"),s.k0s(),s.DNE(22,R,2,1,"mat-checkbox",10),s.k0s(),s.j41(23,"section")(24,"label",2),s.EFF(25,"Height:"),s.k0s(),s.j41(26,"mat-slider",11)(27,"input",9),s.mxI("ngModelChange",function(o){return s.eBV(r),s.DH7(n.height,o)||(n.height=o),s.Njj(o)}),s.k0s()()(),s.j41(28,"section")(29,"mat-form-field")(30,"mat-label"),s.EFF(31,"Foreground color"),s.k0s(),s.j41(32,"input",12),s.mxI("ngModelChange",function(o){return s.eBV(r),s.DH7(n.foreground,o)||(n.foreground=o),s.Njj(o)}),s.k0s(),s.nrm(33,"mtx-colorpicker-toggle",13)(34,"mtx-colorpicker",null,0),s.k0s(),s.j41(36,"mat-form-field")(37,"mat-label"),s.EFF(38,"Background color"),s.k0s(),s.j41(39,"input",12),s.mxI("ngModelChange",function(o){return s.eBV(r),s.DH7(n.background,o)||(n.background=o),s.Njj(o)}),s.k0s(),s.nrm(40,"mtx-colorpicker-toggle",13)(41,"mtx-colorpicker",null,1),s.k0s()(),s.j41(43,"h2"),s.EFF(44,"Result"),s.k0s(),s.j41(45,"mtx-progress",14),s.EFF(46),s.k0s()}if(2&l){const r=s.sdS(35),g=s.sdS(42);s.R7$(5),s.R50("ngModel",n.type),s.R7$(13),s.R50("ngModel",n.value),s.R7$(2),s.R50("ngModel",n.striped),s.R7$(2),s.vxM(n.striped?22:-1),s.R7$(5),s.R50("ngModel",n.height),s.R7$(5),s.R50("ngModel",n.foreground),s.Y8G("mtxColorpicker",r),s.R7$(),s.Y8G("for",r),s.R7$(6),s.R50("ngModel",n.background),s.Y8G("mtxColorpicker",g),s.R7$(),s.Y8G("for",g),s.R7$(5),s.Y8G("type",n.type)("value",n.value)("striped",n.striped)("animate",n.animate)("height",n.height+"px")("foreground",n.foreground)("background",n.background),s.R7$(),s.SpI(" ",n.height>=14?n.value+"%":"","\n")}},dependencies:[h.YN,h.me,h.BC,h.vS,u.Wk,u.VT,u._g,j.Ez,j.IV,j.OU,x.g7,x.So,d.RG,d.rl,d.nJ,d.yw,M.fS,M.fg,T.p,P.Tn,E.Hk,A.f,k,b],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{margin-right:1rem}label[_ngcontent-%COMP%]{padding:0 8px}"]})}}return t})(),files:[{file:"app.component.html",content:a(26088),filecontent:a(5131)},{file:"app.component.ts",content:a(3998),filecontent:a(34355)},{file:"app.component.scss",content:a(95046),filecontent:a(56648)}]},S={title:"Custom Color",component:(()=>{class t{static{this.\u0275fac=function(l){return new(l||t)}}static{this.\u0275cmp=s.VBU({type:t,selectors:[["progress-example"]],decls:6,vars:5,consts:[["foreground","#3949AB",3,"value"],["foreground","#6D4C41",3,"value","striped"],["foreground","#880E4F","background","#FCE4EC",3,"value","striped"]],template:function(l,n){1&l&&(s.j41(0,"mtx-progress",0),s.EFF(1,"40%"),s.k0s(),s.j41(2,"mtx-progress",1),s.EFF(3,"70%"),s.k0s(),s.j41(4,"mtx-progress",2),s.EFF(5," 60%\n"),s.k0s()),2&l&&(s.Y8G("value",40),s.R7$(2),s.Y8G("value",70)("striped",!0),s.R7$(2),s.Y8G("value",60)("striped",!0))},dependencies:[k,b],encapsulation:2})}}return t})(),files:[{file:"app.component.html",content:a(61920),filecontent:a(64815)},{file:"app.component.ts",content:a(40518),filecontent:a(64631)},{file:"app.component.scss",content:a(20634),filecontent:a(44084)}]};function I(t,m){1&t&&s.nrm(0,"example-viewer",0),2&t&&s.Y8G("exampleData",m.$implicit)}function w(t,m){1&t&&s.Z7z(0,I,1,1,"example-viewer",0,s.fX1),2&t&&s.Dyx(m.examples)}function B(t,m){1&t&&s.nrm(0,"doc-viewer",0),2&t&&s.Y8G("textContent",m.content.default)}let C=(()=>{class t{constructor(){this.route=(0,s.WQX)(f.nX)}static{this.\u0275fac=function(l){return new(l||t)}}static{this.\u0275cmp=s.VBU({type:t,selectors:[["app-progress-overview"]],decls:2,vars:3,consts:[[3,"exampleData"]],template:function(l,n){if(1&l&&(s.DNE(0,w,2,0),s.nI1(1,"async")),2&l){let r;s.vxM((r=s.bMT(1,1,n.route.data))?0:-1,r)}},dependencies:[F.v,c.Jj],encapsulation:2})}}return t})(),v=(()=>{class t{constructor(){this.route=(0,s.WQX)(f.nX)}static{this.\u0275fac=function(l){return new(l||t)}}static{this.\u0275cmp=s.VBU({type:t,selectors:[["app-progress-api"]],decls:2,vars:3,consts:[[3,"textContent"]],template:function(l,n){if(1&l&&(s.DNE(0,B,1,1,"doc-viewer",0),s.nI1(1,"async")),2&l){let r;s.vxM((r=s.bMT(1,1,n.route.data))?0:-1,r)}},dependencies:[y.T,c.Jj],encapsulation:2})}}return t})();const U=[{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:C,pathMatch:"full",data:{examples:[D,S]}},{path:"api",component:v,pathMatch:"full",data:{content:a(83020)}},{path:"**",redirectTo:"overview"}]},26088:p=>{p.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Progress configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;&quot;</span>&gt;</span>Type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;type&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;&quot;</span>&gt;</span>Progress:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">discrete</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matSliderThumb</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;striped&quot;</span>&gt;</span>Striped<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n  @if (striped) {\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;animate&quot;</span>&gt;</span>Animate<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n  }\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;&quot;</span>&gt;</span>Height:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;16&quot;</span> <span class="hljs-attr">discrete</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matSliderThumb</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;height&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Foreground color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;foreground&quot;</span> [<span class="hljs-attr">mtxColorpicker</span>]=<span class="hljs-string">&quot;cp1&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-colorpicker-toggle</span> <span class="hljs-attr">matSuffix</span> [<span class="hljs-attr">for</span>]=<span class="hljs-string">&quot;cp1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-colorpicker-toggle</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-colorpicker</span> #<span class="hljs-attr">cp1</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-colorpicker</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-label</span>&gt;</span>Background color<span class="hljs-tag">&lt;/<span class="hljs-name">mat-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;background&quot;</span> [<span class="hljs-attr">mtxColorpicker</span>]=<span class="hljs-string">&quot;cp2&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-colorpicker-toggle</span> <span class="hljs-attr">matSuffix</span> [<span class="hljs-attr">for</span>]=<span class="hljs-string">&quot;cp2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-colorpicker-toggle</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mtx-colorpicker</span> #<span class="hljs-attr">cp2</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-colorpicker</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span>\n  [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;type&quot;</span>\n  [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;value&quot;</span>\n  [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;striped&quot;</span>\n  [<span class="hljs-attr">animate</span>]=<span class="hljs-string">&quot;animate&quot;</span>\n  [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;height + &#x27;px&#x27;&quot;</span>\n  [<span class="hljs-attr">foreground</span>]=<span class="hljs-string">&quot;foreground&quot;</span>\n  [<span class="hljs-attr">background</span>]=<span class="hljs-string">&quot;background&quot;</span>\n&gt;</span>\n  {{ height &gt;= 14 ? value + &#x27;%&#x27; : &#x27;&#x27; }}\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n'},61920:p=>{p.exports='<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;40&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#3949AB&quot;</span>&gt;</span>40%<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;70&quot;</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#6D4C41&quot;</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-progress</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;60&quot;</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">foreground</span>=<span class="hljs-string">&quot;#880E4F&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#FCE4EC&quot;</span>&gt;</span>\n  60%\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-progress</span>&gt;</span>\n'},95046:p=>{p.exports='<span class="hljs-selector-class">.mat-mdc-form-field</span> {\n  <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">1rem</span>;\n}\n\n<span class="hljs-selector-tag">label</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">8px</span>;\n}\n'},20634:p=>{p.exports='<span class="hljs-comment">/** No CSS for this example */</span>\n'},3998:p=>{p.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormsModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MatCheckboxModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/checkbox&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MatFormFieldModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/form-field&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MatInputModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/input&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MatRadioModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/radio&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MatSliderModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/material/slider&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MtxColorpickerModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions/colorpicker&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MtxProgressModule</span>, <span class="hljs-title class_">MtxProgressType</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions/progress&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;progress-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrl</span>: <span class="hljs-string">&#x27;./app.component.scss&#x27;</span>,\n  <span class="hljs-attr">imports</span>: [\n    <span class="hljs-title class_">FormsModule</span>,\n    <span class="hljs-title class_">MatRadioModule</span>,\n    <span class="hljs-title class_">MatSliderModule</span>,\n    <span class="hljs-title class_">MatCheckboxModule</span>,\n    <span class="hljs-title class_">MatFormFieldModule</span>,\n    <span class="hljs-title class_">MatInputModule</span>,\n    <span class="hljs-title class_">MtxColorpickerModule</span>,\n    <span class="hljs-title class_">MtxProgressModule</span>,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  <span class="hljs-attr">type</span>: <span class="hljs-title class_">MtxProgressType</span> = <span class="hljs-string">&#x27;info&#x27;</span>;\n  value = <span class="hljs-number">50</span>;\n  striped = <span class="hljs-literal">false</span>;\n  animate = <span class="hljs-literal">false</span>;\n  height = <span class="hljs-number">16</span>;\n  foreground = <span class="hljs-string">&#x27;&#x27;</span>;\n  background = <span class="hljs-string">&#x27;&#x27;</span>;\n}\n'},40518:p=>{p.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MtxProgressModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions/progress&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;progress-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrl</span>: <span class="hljs-string">&#x27;./app.component.scss&#x27;</span>,\n  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">MtxProgressModule</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {}\n'},83020:(p,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});const c='<h1 id="progress">Progress</h1>\n<h2 id="api-reference-for-material-extensions-progress">API reference for Material Extensions Progress</h2>\n<p><code>import { MtxProgressModule } from &apos;@ng-matero/extensions/progress&apos;;</code></p>\n<h3 id="directives">Directives</h3>\n<h4 id="mtxprogress"><code>MtxProgress</code></h4>\n<p>Selector: <code>[mtx-progress]</code></p>\n<p>Exported as: <code>mtxProgress</code></p>\n<h5 id="properties">Properties</h5>\n<table>\n<thead>\n<tr>\n<th align="left"><strong>Name</strong></th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left"><code>@Input()</code><br><code>type: MtxProgressType | undefined</code></td>\n<td align="left">The progress&apos;s type. Default is <strong><code>undefined</code></strong>.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>value: number</code></td>\n<td align="left">The value of the progress. Default is <strong><code>0</code></strong>.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>height: number</code></td>\n<td align="left">The height of the progress.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>color: string</code></td>\n<td align="left">The text color of the progress.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>foreground: string</code></td>\n<td align="left">The bar color of the progress.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>background: string</code></td>\n<td align="left">The track color of the progress.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>striped: boolean</code></td>\n<td align="left">Whether to apply the striped class.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>animate: boolean</code></td>\n<td align="left">Whether to apply the animated class.</td>\n</tr>\n</tbody></table>\n<h3 id="type-aliases">Type aliases</h3>\n<h4 id="mtxprogresstype"><code>MtxProgressType</code></h4>\n<pre class="hljs"><span class="hljs-keyword">type</span> <span class="hljs-title class_">MtxProgressType</span> = <span class="hljs-string">&apos;info&apos;</span> | <span class="hljs-string">&apos;success&apos;</span> | <span class="hljs-string">&apos;warning&apos;</span> | <span class="hljs-string">&apos;danger&apos;</span>;\n</pre>\n'},5131:(p,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});const c='<h2>Progress configuration</h2>\n\n<section>\n  <label for="">Type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="info">Info</mat-radio-button>\n    <mat-radio-button value="success">Success</mat-radio-button>\n    <mat-radio-button value="warning">Warning</mat-radio-button>\n    <mat-radio-button value="danger">Danger</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <label for="">Progress:</label>\n  <mat-slider min="0" max="100" discrete>\n    <input matSliderThumb [(ngModel)]="value" />\n  </mat-slider>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="striped">Striped</mat-checkbox>\n  @if (striped) {\n    <mat-checkbox [(ngModel)]="animate">Animate</mat-checkbox>\n  }\n</section>\n\n<section>\n  <label for="">Height:</label>\n  <mat-slider min="1" max="16" discrete>\n    <input matSliderThumb [(ngModel)]="height" />\n  </mat-slider>\n</section>\n\n<section>\n  <mat-form-field>\n    <mat-label>Foreground color</mat-label>\n    <input matInput [(ngModel)]="foreground" [mtxColorpicker]="cp1" />\n    <mtx-colorpicker-toggle matSuffix [for]="cp1"></mtx-colorpicker-toggle>\n    <mtx-colorpicker #cp1></mtx-colorpicker>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Background color</mat-label>\n    <input matInput [(ngModel)]="background" [mtxColorpicker]="cp2" />\n    <mtx-colorpicker-toggle matSuffix [for]="cp2"></mtx-colorpicker-toggle>\n    <mtx-colorpicker #cp2></mtx-colorpicker>\n  </mat-form-field>\n</section>\n\n<h2>Result</h2>\n\n<mtx-progress\n  [type]="type"\n  [value]="value"\n  [striped]="striped"\n  [animate]="animate"\n  [height]="height + \'px\'"\n  [foreground]="foreground"\n  [background]="background"\n>\n  {{ height >= 14 ? value + \'%\' : \'\' }}\n</mtx-progress>\n'},56648:(p,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});const c=".mat-mdc-form-field {\n  margin-right: 1rem;\n}\n\nlabel {\n  padding: 0 8px;\n}\n"},34355:(p,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});const c="import { Component } from '@angular/core';\nimport { FormsModule } from '@angular/forms';\nimport { MatCheckboxModule } from '@angular/material/checkbox';\nimport { MatFormFieldModule } from '@angular/material/form-field';\nimport { MatInputModule } from '@angular/material/input';\nimport { MatRadioModule } from '@angular/material/radio';\nimport { MatSliderModule } from '@angular/material/slider';\nimport { MtxColorpickerModule } from '@ng-matero/extensions/colorpicker';\nimport { MtxProgressModule, MtxProgressType } from '@ng-matero/extensions/progress';\n\n@Component({\n  selector: 'progress-example',\n  templateUrl: './app.component.html',\n  styleUrl: './app.component.scss',\n  imports: [\n    FormsModule,\n    MatRadioModule,\n    MatSliderModule,\n    MatCheckboxModule,\n    MatFormFieldModule,\n    MatInputModule,\n    MtxColorpickerModule,\n    MtxProgressModule,\n  ],\n})\nexport class AppComponent {\n  type: MtxProgressType = 'info';\n  value = 50;\n  striped = false;\n  animate = false;\n  height = 16;\n  foreground = '';\n  background = '';\n}\n"},64815:(p,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});const c='<mtx-progress [value]="40" foreground="#3949AB">40%</mtx-progress>\n<mtx-progress [value]="70" [striped]="true" foreground="#6D4C41">70%</mtx-progress>\n<mtx-progress [value]="60" [striped]="true" foreground="#880E4F" background="#FCE4EC">\n  60%\n</mtx-progress>\n'},44084:(p,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});const c="/** No CSS for this example */\n"},64631:(p,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});const c="import { Component } from '@angular/core';\nimport { MtxProgressModule } from '@ng-matero/extensions/progress';\n\n@Component({\n  selector: 'progress-example',\n  templateUrl: './app.component.html',\n  styleUrl: './app.component.scss',\n  imports: [MtxProgressModule],\n})\nexport class AppComponent {}\n"}}]);