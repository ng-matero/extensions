import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, Observable, combineLatest } from 'rxjs';
import { COMPONENTS_MENU } from '../component-nav/component-nav';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-component-category-list',
  templateUrl: './component-category-list.html',
  styleUrls: ['./component-category-list.scss'],
})
export class ComponentCategoryList implements OnInit, OnDestroy {
  params!: Observable<Params>;
  routeParamSubscription!: Subscription;

  list = COMPONENTS_MENU;

  constructor(public _componentPageTitle: ComponentPageTitle, private _route: ActivatedRoute) {}

  ngOnInit() {
    // Combine params from all of the path into a single object.
    this.params = combineLatest(
      this._route.pathFromRoot.map(route => route.params),
      Object.assign
    );

    // TODO: title on topbar navigation
    this.routeParamSubscription = this.params.subscribe(params => {
      this._componentPageTitle.title = 'components';
    });
  }

  ngOnDestroy() {}
}
