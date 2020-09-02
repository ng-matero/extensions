import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const EXTRA_SMALL_WIDTH_BREAKPOINT = 720;
const SMALL_WIDTH_BREAKPOINT = 959;

@Component({
  selector: 'app-component-sidenav',
  templateUrl: 'component-sidenav.component.html',
  styleUrls: ['component-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentSidenav {
  dark = false;

  isScreenSmall: Observable<boolean>;

  constructor(
    private _element: ElementRef<HTMLElement>,
    private _overlayContainer: OverlayContainer,
    private _router: Router,
    breakpoints: BreakpointObserver
  ) {
    this.isScreenSmall = breakpoints
      .observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map(breakpoint => breakpoint.matches));

    this._router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const urlTree = this._router.parseUrl(this._router.url);
        if (urlTree.fragment) {
          // TODO: Scroll to anchor element
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

  toggleSidenav(sidenav: MatSidenav): Promise<MatDrawerToggleResult> {
    console.log(sidenav);
    return sidenav.toggle();
  }
}
