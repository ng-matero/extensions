import { Component, OnDestroy, ViewEncapsulation, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Subject, startWith } from 'rxjs';
import { NavigationFocus } from '../../shared/navigation-focus/navigation-focus';
import { ComponentPageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.html',
  styleUrl: './component-viewer.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [MatTabsModule, NavigationFocus, RouterLinkActive, RouterLink, RouterOutlet],
})
export class ComponentViewer implements OnDestroy {
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);
  private _componentPageTitle = inject(ComponentPageTitle);

  sections = new Set<string>(['overview', 'api']);
  private _destroyed = new Subject<void>();

  componentId = '';

  constructor() {
    const routeAndParentParams = [this._route.params];
    if (this._route.parent) {
      routeAndParentParams.push(this._route.parent.params);
    }

    this._router.events.pipe(startWith(this._router)).subscribe(s => {
      if (s instanceof Router || s instanceof NavigationEnd) {
        const fragments = s.url.split('/');
        this.componentId = fragments[2] ?? fragments[1];
        this._componentPageTitle.title = this.componentId;
      }
    });
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
