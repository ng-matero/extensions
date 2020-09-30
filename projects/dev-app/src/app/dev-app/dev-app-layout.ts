/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, Component, ElementRef, Inject, ViewEncapsulation } from '@angular/core';
import { DevAppRippleOptions } from './ripple-options';
import { DevAppDirectionality } from './dev-app-directionality';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

const isDarkThemeKey = 'ANGULAR_COMPONENTS_DEV_APP_DARK_THEME';

/** Root component for the dev-app demos. */
@Component({
  selector: 'dev-app-layout',
  templateUrl: 'dev-app-layout.html',
  styleUrls: ['dev-app-layout.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DevAppLayout {
  readonly darkThemeClass = 'demo-unicorn-dark-theme';
  _isDark = false;
  strongFocus = false;
  navItems = [
    { name: 'Alert', route: '/alert' },
    { name: 'Button', route: '/button' },
    { name: 'Color Picker', route: '/color-picker' },
    { name: 'Checkbox Group', route: '/checkbox-group' },
    { name: 'Data Grid', route: '/data-grid' },
    { name: 'Dialog', route: '/dialog' },
    { name: 'Loader', route: '/loader' },
    { name: 'Progress', route: '/progress' },
    { name: 'Select', route: '/select' },
    { name: 'Split Pane', route: '/split-pane' },
    { name: 'Text 3D', route: '/text3d' },
  ];

  /** Currently selected density scale based on the index. */
  currentDensityIndex = 0;

  /** List of possible global density scale values. */
  densityScales = [0, -1, -2, 'minimum', 'maximum'];

  langs = [
    { label: 'English', value: 'en-US' },
    { label: '中文简体', value: 'zh-CN' },
  ];
  defaultlang = 'en-US';

  constructor(
    private _element: ElementRef<HTMLElement>,
    public rippleOptions: DevAppRippleOptions,
    @Inject(Directionality) public dir: DevAppDirectionality,
    cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private _document: Document,
    public translate: TranslateService
  ) {
    dir.change.subscribe(() => cdr.markForCheck());
    this.updateDensityClasses();
    try {
      const isDark = localStorage.getItem(isDarkThemeKey);
      if (isDark != null) {
        // We avoid calling the setter and apply the themes directly here.
        // This avoids writing the same value, that we just read, back to localStorage.
        this._isDark = isDark === 'true';
        this.updateThemeClass(this._isDark);
      }
    } catch (error) {
      console.error(`Failed to read ${isDarkThemeKey} from localStorage: `, error);
    }

    translate.addLangs(this.langs.map(item => item.value));
    translate.setDefaultLang(this.defaultlang);
  }

  get isDark(): boolean {
    return this._isDark;
  }

  set isDark(value: boolean) {
    // Noop if the value is the same as is already set.
    if (value !== this._isDark) {
      this._isDark = value;
      this.updateThemeClass(this._isDark);

      try {
        localStorage.setItem(isDarkThemeKey, String(value));
      } catch (error) {
        console.error(`Failed to write ${isDarkThemeKey} to localStorage: `, error);
      }
    }
  }

  toggleFullscreen() {
    // Cast to `any`, because the typings don't include the browser-prefixed methods.
    const elem = this._element.nativeElement.querySelector('.demo-content') as any;
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

  updateThemeClass(isDark?: boolean) {
    if (isDark) {
      this._document.body.classList.add(this.darkThemeClass);
    } else {
      this._document.body.classList.remove(this.darkThemeClass);
    }
  }

  toggleStrongFocus() {
    const strongFocusClass = 'demo-strong-focus';

    this.strongFocus = !this.strongFocus;

    if (this.strongFocus) {
      this._document.body.classList.add(strongFocusClass);
    } else {
      this._document.body.classList.remove(strongFocusClass);
    }
  }

  /** Gets the index of the next density scale that can be selected. */
  getNextDensityIndex() {
    return (this.currentDensityIndex + 1) % this.densityScales.length;
  }

  /** Selects the next possible density scale. */
  selectNextDensity() {
    this.currentDensityIndex = this.getNextDensityIndex();
    this.updateDensityClasses();
  }

  /**
   * Updates the density classes on the host element. Applies a unique class for
   * a given density scale, so that the density styles are conditionally applied.
   */
  updateDensityClasses() {
    for (let i = 0; i < this.densityScales.length; i++) {
      const className = `demo-density-${this.densityScales[i]}`;
      if (i === this.currentDensityIndex) {
        this._document.body.classList.add(className);
      } else {
        this._document.body.classList.remove(className);
      }
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
