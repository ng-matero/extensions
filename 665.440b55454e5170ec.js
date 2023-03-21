"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[665],{75592:(y,c,t)=>{t.r(c),t.d(c,{ComponentsModule:()=>i});var d=t(19132),v=t(85447),r=t(77579),x=t(68675),n=t(94650),g=t(41710),f=t(36895),h=t(3848),C=t(72084);function M(o,e){if(1&o&&(n.TgZ(0,"a",5,6),n._uU(2),n.qZA()),2&o){const l=e.$implicit,a=n.MAs(1),m=n.oxw();n.Q6J("routerLink",m.componentId+"/"+l.toLowerCase())("active",a.isActive),n.xp6(2),n.Oqu(l)}}class s{constructor(e,l,a){this._router=l,this._componentPageTitle=a,this.sections=new Set(["overview","api"]),this._destroyed=new r.x,this.componentId="",e.parent&&[e.params].push(e.parent.params),this._router.events.pipe((0,x.O)(this._router)).subscribe(p=>{p instanceof d.F0&&(this.componentId=p.url.split("/")[2],this._componentPageTitle.title=this.componentId)})}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}s.\u0275fac=function(e){return new(e||s)(n.Y36(d.gz),n.Y36(d.F0),n.Y36(g._))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-component-viewer"]],decls:6,vars:2,consts:[[1,"docs-component-viewer"],["mat-tab-nav-bar","","mat-stretch-tabs","false","aria-label","Documentation Sections","id","component-viewer","focusOnNavigation","",1,"docs-component-viewer-tabbed-content",3,"tabPanel"],["mat-tab-link","","class","docs-component-viewer-section-tab","routerLinkActive","",3,"routerLink","active",4,"ngFor","ngForOf"],[1,"docs-component-viewer-content"],["panel",""],["mat-tab-link","","routerLinkActive","",1,"docs-component-viewer-section-tab",3,"routerLink","active"],["rla","routerLinkActive"]],template:function(e,l){if(1&e&&(n.TgZ(0,"div",0)(1,"nav",1),n.YNc(2,M,3,3,"a",2),n.qZA(),n.TgZ(3,"mat-tab-nav-panel",3,4),n._UZ(5,"router-outlet"),n.qZA()()),2&e){const a=n.MAs(4);n.xp6(1),n.Q6J("tabPanel",a),n.xp6(1),n.Q6J("ngForOf",l.sections)}},dependencies:[f.sg,d.lC,d.rH,d.Od,h.BU,h.sW,h.Nj,C.y],styles:["app-component-viewer{width:calc(100% - 341px);font-weight:400;line-height:1.5;padding:20px 50px}@media (max-width: 959px){app-component-viewer{width:calc(100% - 100px)}}@media (max-width: 599px){app-component-viewer{width:calc(100% - 30px);padding-left:15px;padding-right:15px}}app-component-viewer .docs-component-viewer-section-tab{min-width:160px;text-transform:uppercase}.docs-component-viewer-tabbed-content{margin-bottom:25px}.docs-component-viewer-content{position:relative;min-height:500px}.docs-component-viewer-content component-overview,.docs-component-viewer-content component-api{display:flex;align-items:flex-start;overflow:visible}@media (max-width: 959px){.docs-component-viewer-content component-overview,.docs-component-viewer-content component-api{flex-direction:column}}.docs-component-viewer-content table-of-contents{top:35px;position:sticky}@media (max-width: 959px){.docs-component-viewer-content table-of-contents{order:-1;position:inherit;width:auto;padding-left:0}}.docs-component-view-text-content{flex-grow:1;width:100%}.docs-component-api,.docs-component-overview{width:80%}@media (max-width: 959px){.docs-component-api,.docs-component-overview{width:100%;margin-right:0}}\n"],encapsulation:2});const P=[{path:"",component:s,children:[{path:"alert",loadChildren:()=>Promise.all([t.e(592),t.e(637)]).then(t.bind(t,70637)).then(o=>o.AlertModule)},{path:"button",loadChildren:()=>t.e(500).then(t.bind(t,27500)).then(o=>o.ButtonModule)},{path:"checkbox-group",loadChildren:()=>Promise.all([t.e(166),t.e(112)]).then(t.bind(t,15112)).then(o=>o.CheckboxGroupModule)},{path:"colorpicker",loadChildren:()=>Promise.all([t.e(289),t.e(961)]).then(t.bind(t,19961)).then(o=>o.ColorPickerModule)},{path:"datetimepicker",loadChildren:()=>t.e(10).then(t.bind(t,88010)).then(o=>o.DatetimepickerModule)},{path:"dialog",loadChildren:()=>Promise.all([t.e(166),t.e(931)]).then(t.bind(t,77931)).then(o=>o.DialogModule)},{path:"drawer",loadChildren:()=>t.e(240).then(t.bind(t,17240)).then(o=>o.DrawerModule)},{path:"grid",loadChildren:()=>Promise.all([t.e(166),t.e(967)]).then(t.bind(t,30967)).then(o=>o.GridModule)},{path:"loader",loadChildren:()=>t.e(729).then(t.bind(t,87729)).then(o=>o.LoaderModule)},{path:"popover",loadChildren:()=>t.e(263).then(t.bind(t,81263)).then(o=>o.PopoverModule)},{path:"progress",loadChildren:()=>Promise.all([t.e(289),t.e(486)]).then(t.bind(t,14486)).then(o=>o.ProgressModule)},{path:"select",loadChildren:()=>Promise.all([t.e(592),t.e(871)]).then(t.bind(t,14871)).then(o=>o.SelectModule)},{path:"slider",loadChildren:()=>t.e(917).then(t.bind(t,3917)).then(o=>o.SliderModule)},{path:"split",loadChildren:()=>t.e(872).then(t.bind(t,77872)).then(o=>o.SplitModule)},{path:"tooltip",loadChildren:()=>t.e(785).then(t.bind(t,24785)).then(o=>o.TooltipModule)}]}];class i{}i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[v.m8,d.Bz.forChild(P)]})}}]);