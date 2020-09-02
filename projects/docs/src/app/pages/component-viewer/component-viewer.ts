import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { combineLatest, ReplaySubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.html',
  styleUrls: ['./component-viewer.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentViewer implements OnDestroy {
  sections: Set<string> = new Set(['overview', 'api']);
  private _destroyed = new Subject();

  componentId = '';

  constructor(
    _route: ActivatedRoute,
    private router: Router,
    public _componentPageTitle: ComponentPageTitle
  ) {
    const routeAndParentParams = [_route.params];
    if (_route.parent) {
      routeAndParentParams.push(_route.parent.params);
    }

    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        this.componentId = s.url.split('/')[2];
        this._componentPageTitle.title =
          this.componentId &&
          this.componentId
            .split('-')
            .join(' ')
            .replace(/\b\w+\b/g, word => word.substring(0, 1).toUpperCase() + word.substring(1));
      }
    });
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
