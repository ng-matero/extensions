import { ChangeDetectorRef, Component, ElementRef, Inject, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Directionality } from '@angular/cdk/bidi';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DevAppRippleOptions } from './ripple-options';
import { DevAppDirectionality } from './dev-app-directionality';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT = 959;

@Component({
  selector: 'dev-app-layout',
  host: {
    '[attr.dir]': 'dir.value'
  },
  templateUrl: 'dev-app-layout.html',
  styleUrls: ['dev-app-layout.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DevAppLayout {
  dark = false;

  isScreenSmall: Observable<boolean>;

  constructor(
    private _element: ElementRef<HTMLElement>,
    private _overlayContainer: OverlayContainer,
    private _router: Router,
    public rippleOptions: DevAppRippleOptions,
    @Inject(Directionality) public dir: DevAppDirectionality,
    breakpoints: BreakpointObserver,
    cdr: ChangeDetectorRef
  ) {
    dir.change.subscribe(() => cdr.markForCheck());

    this.isScreenSmall = breakpoints.observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map(breakpoint => breakpoint.matches));

    this._router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const urlTree = this._router.parseUrl(this._router.url);
        if (urlTree.fragment) {
          // TODO:
          setTimeout(() => {
            const element = document.querySelector('#' + urlTree.fragment);
            if (element) { element.scrollIntoView(true); }
          });
        }
      }
    });
  }

  toggleFullscreen() {
    // Cast to `any`, because the typings don't include the browser-prefixed methods.
    const elem = this._element.nativeElement.querySelector('.docs-content') as any;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
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
