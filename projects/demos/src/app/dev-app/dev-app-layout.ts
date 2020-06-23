import { Directionality } from '@angular/cdk/bidi';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ElementRef, Inject, ViewEncapsulation, AfterContentInit } from '@angular/core';
import { DevAppRippleOptions } from './ripple-options';
import { DevAppDirectionality } from './dev-app-directionality';
import { menus } from './menus';
import { Router, NavigationEnd } from '@angular/router';

/** Root component for the dev-app demos. */
@Component({
  selector: 'dev-app-layout',
  templateUrl: 'dev-app-layout.html',
  styleUrls: ['dev-app-layout.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DevAppLayout {
  dark = false;
  navItemsArr = menus;

  constructor(
    private _element: ElementRef<HTMLElement>,
    private _overlayContainer: OverlayContainer,
    private _router: Router,
    public rippleOptions: DevAppRippleOptions,
    @Inject(Directionality) public dir: DevAppDirectionality,
    private _cdr: ChangeDetectorRef
  ) {
    dir.change.subscribe(() => _cdr.markForCheck());

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
}
