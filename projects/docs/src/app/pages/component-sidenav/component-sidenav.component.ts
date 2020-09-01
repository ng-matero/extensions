import { ChangeDetectorRef, Component, ElementRef, Inject, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Directionality } from '@angular/cdk/bidi';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppDirectionality } from '@shared/directionality';

const SMALL_WIDTH_BREAKPOINT = 959;

@Component({
  selector: 'app-component-sidenav',
  host: {
    '[attr.dir]': 'dir.value',
  },
  templateUrl: 'component-sidenav.component.html',
  styleUrls: ['component-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentSidenavComponent {
  dark = false;

  isScreenSmall: Observable<boolean>;

  constructor(
    private _element: ElementRef<HTMLElement>,
    private _overlayContainer: OverlayContainer,
    private _router: Router,
    @Inject(Directionality) public dir: AppDirectionality,
    breakpoints: BreakpointObserver,
    cdr: ChangeDetectorRef
  ) {
    dir.change.subscribe(() => cdr.markForCheck());

    this.isScreenSmall = breakpoints
      .observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map(breakpoint => breakpoint.matches));

    this._router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const urlTree = this._router.parseUrl(this._router.url);
        if (urlTree.fragment) {
          // TODO:
          setTimeout(() => {
            const element = document.querySelector('#' + urlTree.fragment);
            if (element) {
              element.scrollIntoView(true);
            }
          });
        }
      }
    });
  }

  toggleTheme() {
    const darkThemeClass = 'docs-dark-theme';

    this.dark = !this.dark;

    if (this.dark) {
      this._element.nativeElement.classList.add(darkThemeClass);
      this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
    } else {
      this._element.nativeElement.classList.remove(darkThemeClass);
      this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
    }
  }

  changeNav(sidenav: MatSidenav) {
    if (sidenav.mode === 'over') {
      sidenav.close();
    }
  }
}
