import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { NavigationFocus } from '../../shared/navigation-focus/navigation-focus';
import { COMPONENTS_MENU } from '../component-nav/component-nav';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-component-category-list',
  templateUrl: './component-category-list.html',
  styleUrl: './component-category-list.scss',
  imports: [NavigationFocus, RouterLink],
})
export class ComponentCategoryList implements OnInit, OnDestroy {
  params!: Observable<Params>;
  routeParamSubscription!: Subscription;
  _categoryListSummary: string | undefined;

  list = COMPONENTS_MENU;

  constructor(
    public _componentPageTitle: ComponentPageTitle,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Combine params from all of the path into a single object.
    this.params = combineLatest(
      this._route.pathFromRoot.map(route => route.params),
      Object.assign
    );

    this.routeParamSubscription = this.params.subscribe(params => {
      this._componentPageTitle.title = 'components';
    });
  }

  ngOnDestroy() {
    if (this.routeParamSubscription) {
      this.routeParamSubscription.unsubscribe();
    }
  }
}
