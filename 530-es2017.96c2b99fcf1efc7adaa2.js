"use strict";(self.webpackChunkextensions_srcs=self.webpackChunkextensions_srcs||[]).push([[530],{64530:function(e,n,t){t.r(n),t.d(n,{ComponentSidenavModule:function(){return P}});var o=t(63423),i=t(2150),c=t(88002),a=t(37716),r=t(65072),s=t(94935),p=t(77746),d=t(38583);const m=function(e){return[e]};function l(e,n){if(1&e){const e=a.EpF();a.TgZ(0,"a",5,6),a.NdJ("click",function(){return a.CHM(e),a.oxw(2).navChange.emit()}),a._uU(2),a.qZA()}if(2&e){const e=n.$implicit,t=a.MAs(1);a.Q6J("routerLink",a.VKq(3,m,"/components/"+e.id)),a.uIk("tabindex",t.isActive?0:-1),a.xp6(2),a.hij(" ",e.name," ")}}function g(e,n){if(1&e&&(a.ynx(0),a.TgZ(1,"div",3),a._uU(2),a.qZA(),a.YNc(3,l,3,5,"a",4),a.BQk()),2&e){const e=n.$implicit;a.xp6(2),a.Oqu(e.title),a.xp6(1),a.Q6J("ngForOf",e.children)}}const u=[{title:"Basic",children:[{id:"alert",name:"Alert",summary:"Provide contextual feedback messages for typical user actions."},{id:"button",name:"Button",summary:"Provide a material button loading directive."},{id:"checkbox-group",name:"Checkbox Group",summary:"Allows the user to create a set of checkbox with select all."},{id:"color-picker",name:"Colorpicker",summary:"An extra input to select color enhanced by the ngx-color."},{id:"grid",name:"Data Grid",summary:"A powerful data grid for Material table."},{id:"datetimepicker",name:"Datetimepicker",summary:"Allows the user to choose both dates and times."},{id:"dialog",name:"Dialog",summary:"A configurable modal to show alert and confirmation."},{id:"loader",name:"Loader",summary:"An easier loading component wrap with progress bar and spinner."},{id:"popover",name:"Popover",summary:"A floating panel containing html content."},{id:"progress",name:"Progress",summary:"A linear progress indicator with Bootstrap style."},{id:"select",name:"Select",summary:"A ng-select wrapper to be used in the form field."},{id:"split",name:"Split Pane",summary:"A component for creating multi-view layouts."},{id:"tooltip",name:"Tooltip",summary:"The tooltip support rich content."}]},{title:"Experimental",children:[{id:"form-group",name:"Form Group",summary:"Material form field with Fluent UI style."},{id:"text3d",name:"Text 3D",summary:"Experimental component for 3d text."}]}];let v=(()=>{class e{constructor(){this.navChange=new a.vpe,this.menus=u}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-component-nav"]],outputs:{navChange:"navChange"},decls:4,vars:1,consts:[[1,"docs-component-viewer-nav"],[1,"docs-component-viewer-nav-content"],[4,"ngFor","ngForOf"],[1,"nav-item-title"],["mat-list-item","","routerLinkActive","docs-component-viewer-sidenav-item-selected",3,"routerLink","click",4,"ngFor","ngForOf"],["mat-list-item","","routerLinkActive","docs-component-viewer-sidenav-item-selected",3,"routerLink","click"],["routerLinkActiveInstance","routerLinkActive"]],template:function(e,n){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"mat-nav-list"),a.YNc(3,g,4,2,"ng-container",2),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(3),a.Q6J("ngForOf",n.menus))},directives:[p.Hk,d.sg,p.Tg,o.yS,o.Od],styles:[".docs-component-viewer-nav[_ngcontent-%COMP%]{position:sticky;top:0}.docs-component-viewer-nav-content[_ngcontent-%COMP%]{width:240px;height:calc(100vh - 56px);overflow:auto}.docs-component-viewer-nav-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;margin:0 0 5px;padding:0;overflow:hidden}.docs-component-viewer-nav-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;line-height:16px;margin:0;padding:5px 15px 5px 20px}.docs-component-viewer-nav-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-decoration:none}.nav-item-title[_ngcontent-%COMP%]{padding:0 16px;margin:16px 0 8px;font-size:80%}"]}),e})();var f=t(41710),h=t(51095),x=t(88030),y=t(76627);let w=(()=>{class e{constructor(e){this._componentPageTitle=e,this.toggleSidenav=new a.vpe}getTitle(){return this._componentPageTitle.title}}return e.\u0275fac=function(n){return new(n||e)(a.Y36(f._))},e.\u0275cmp=a.Xpm({type:e,selectors:[["component-page-header"]],outputs:{toggleSidenav:"toggleSidenav"},decls:6,vars:1,consts:[[1,"component-page-header"],["mat-button","","fxHide.gt-sm","",1,"sidenav-toggle",3,"click"]],template:function(e,n){1&e&&(a.TgZ(0,"header",0),a.TgZ(1,"button",1),a.NdJ("click",function(){return n.toggleSidenav.emit()}),a.TgZ(2,"mat-icon"),a._uU(3,"menu"),a.qZA(),a.qZA(),a.TgZ(4,"h1"),a._uU(5),a.qZA(),a.qZA()),2&e&&(a.xp6(5),a.hij("",n.getTitle()," "))},directives:[h.lW,x.b8,y.Hw],styles:[".component-page-header[_ngcontent-%COMP%]{display:flex;align-items:center;padding-left:24px}@media (max-width: 959px){.component-page-header[_ngcontent-%COMP%]{padding-left:0}}.component-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:300;padding:28px 8px;margin:0;font-size:20px;color:#fff;outline:none}@media (max-width: 959px){.component-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:24px 8px;font-size:20px}}.sidenav-toggle[_ngcontent-%COMP%]{padding:0;margin:8px;min-width:64px}.sidenav-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:30px;height:64px;width:64px;line-height:64px;color:#fff}"]}),e})();function _(e,n){1&e&&a._UZ(0,"app-component-nav")}let Z=(()=>{class e{constructor(e,n){this._router=e,this.isExtraScreenSmall=n.observe("(max-width: 720px)").pipe((0,c.U)(e=>e.matches)),this.isScreenSmall=n.observe("(max-width: 959px)").pipe((0,c.U)(e=>e.matches)),this._router.events.subscribe(e=>{if(e instanceof o.m2){const e=this._router.parseUrl(this._router.url);e.fragment&&setTimeout(()=>{const n=document.querySelector("#"+e.fragment);n&&n.scrollIntoView(!0)})}})}toggleSidenav(e){return e.toggle()}}return e.\u0275fac=function(n){return new(n||e)(a.Y36(o.F0),a.Y36(r.Yg))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-component-sidenav"]],decls:13,vars:11,consts:[[1,"docs-component-viewer-sidenav-container"],["role","navigation",1,"docs-component-viewer-sidenav",3,"opened","mode","fixedInViewport","fixedTopGap"],["sidenav",""],[1,"docs-component-sidenav-content"],[3,"toggleSidenav"],[1,"docs-component-sidenav-inner-content"],[1,"docs-component-sidenav-body-content"],[4,"ngIf"]],template:function(e,n){if(1&e){const e=a.EpF();a.TgZ(0,"mat-sidenav-container",0),a.TgZ(1,"mat-sidenav",1,2),a.ALo(3,"async"),a.ALo(4,"async"),a._UZ(5,"app-component-nav"),a.qZA(),a.TgZ(6,"div",3),a.TgZ(7,"component-page-header",4),a.NdJ("toggleSidenav",function(){a.CHM(e);const t=a.MAs(2);return n.toggleSidenav(t)}),a.qZA(),a.TgZ(8,"div",5),a.TgZ(9,"main",6),a.YNc(10,_,1,0,"app-component-nav",7),a.ALo(11,"async"),a._UZ(12,"router-outlet"),a.qZA(),a.qZA(),a.qZA(),a.qZA()}2&e&&(a.xp6(1),a.Q6J("opened",!1)("mode",a.lcZ(3,5,n.isScreenSmall)?"over":"side")("fixedInViewport",a.lcZ(4,7,n.isScreenSmall))("fixedTopGap",56),a.xp6(9),a.Q6J("ngIf",!1===a.lcZ(11,9,n.isScreenSmall)))},directives:[s.TM,s.JX,v,w,d.O5,o.lC],pipes:[d.Ov],styles:["app-component-sidenav{display:flex;flex-direction:column;flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.docs-component-viewer-sidenav-container{flex:1;box-sizing:border-box}.docs-component-viewer-sidenav{overflow:auto}.mat-drawer::-webkit-scrollbar{height:4px;width:4px}.docs-component-sidenav-content{display:flex;flex-direction:column;min-height:100%}.docs-component-sidenav-inner-content{display:flex;flex-direction:column;flex:1}.docs-component-sidenav-inner-content router-outlet+*{flex-grow:1;overflow:auto}.docs-component-sidenav-body-content{display:flex;flex:1 1 auto}.mat-list-base{padding-top:0}.docs-component-viewer-nav-content .mat-nav-list .mat-list-item .mat-list-item-content{padding-left:25px}@media (max-width: 959px){.docs-component-viewer-sidenav-container .docs-component-viewer-sidenav{z-index:4}.docs-component-viewer-nav{position:relative;top:0}.docs-component-viewer-nav .docs-component-viewer-nav-content{box-sizing:border-box;margin:0;max-height:none;max-height:initial}}@media (max-width: 720px){.docs-component-viewer-sidenav-container{flex:1 0 auto}.docs-component-sidenav-body-content{flex-direction:column}}\n"],encapsulation:2}),e})();var O=t(90739),A=t(72084);const C=function(e){return[e]};function b(e,n){if(1&e&&(a.TgZ(0,"a",7),a.TgZ(1,"div",8),a.TgZ(2,"div",9),a._uU(3),a.qZA(),a.TgZ(4,"div",10),a._uU(5),a.qZA(),a.qZA(),a.qZA()),2&e){const e=n.$implicit;a.Q6J("routerLink",a.VKq(3,C,"/components/"+e.id)),a.xp6(3),a.Oqu(e.name),a.xp6(2),a.Oqu(e.summary)}}function T(e,n){if(1&e&&(a.TgZ(0,"div",3),a.TgZ(1,"h2",4),a._uU(2),a.qZA(),a.TgZ(3,"div",5),a.YNc(4,b,6,5,"a",6),a.qZA(),a.qZA()),2&e){const e=n.$implicit;a.xp6(2),a.Oqu(e.title),a.xp6(2),a.Q6J("ngForOf",e.children)}}const M=[{path:"",component:Z,children:[{path:"",redirectTo:"categories",pathMatch:"full"},{path:"categories",children:[{path:"",component:(()=>{class e{constructor(e,n){this._componentPageTitle=e,this._route=n,this.list=u}ngOnInit(){this.params=(0,O.aj)(this._route.pathFromRoot.map(e=>e.params),Object.assign),this.routeParamSubscription=this.params.subscribe(e=>{this._componentPageTitle.title="components"})}ngOnDestroy(){}}return e.\u0275fac=function(n){return new(n||e)(a.Y36(f._),a.Y36(o.gz))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-component-category-list"]],decls:3,vars:2,consts:[["id","category-summary","focusOnNavigation","",1,"docs-component-category-list-summary"],[3,"innerHTML"],["class","docs-component-category-section",4,"ngFor","ngForOf"],[1,"docs-component-category-section"],[1,"docs-component-category-section-title"],[1,"docs-component-category-list"],["class","docs-component-category-list-item",3,"routerLink",4,"ngFor","ngForOf"],[1,"docs-component-category-list-item",3,"routerLink"],[1,"docs-component-category-list-card"],[1,"docs-component-category-list-card-title"],[1,"docs-component-category-list-card-summary"]],template:function(e,n){1&e&&(a.TgZ(0,"div",0),a._UZ(1,"div",1),a.qZA(),a.YNc(2,T,5,2,"div",2)),2&e&&(a.xp6(1),a.Q6J("innerHTML",n._categoryListSummary,a.oJD),a.xp6(1),a.Q6J("ngForOf",n.list))},directives:[A.y,d.sg,o.yS],styles:[".docs-component-category-section-title[_ngcontent-%COMP%]{margin-bottom:0;font-size:24px;font-weight:500;text-align:center}.docs-component-category-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding:20px;justify-content:center}.docs-component-category-list-item[_ngcontent-%COMP%]{display:inline-flex;margin:20px;vertical-align:top;width:280px}.docs-component-category-list-item[_ngcontent-%COMP%], .docs-component-category-list-item[_ngcontent-%COMP%]:active, .docs-component-category-list-item[_ngcontent-%COMP%]:hover, .docs-component-category-list-item[_ngcontent-%COMP%]:focus{text-decoration:none}.docs-component-category-list-card[_ngcontent-%COMP%]{width:100%}.docs-component-category-list-card-title[_ngcontent-%COMP%]{align-items:center;display:flex;padding:15px;font-size:20px;font-weight:500}.docs-component-category-list-card-summary[_ngcontent-%COMP%]{padding:0 15px 15px;font-size:15px}"]}),e})()}]},{path:"",loadChildren:()=>t.e(528).then(t.bind(t,32528)).then(e=>e.ComponentsModule)},{path:"**",redirectTo:"categories"}]}];let P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.m8,o.Bz.forChild(M)]]}),e})()}}]);