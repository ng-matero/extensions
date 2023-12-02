import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, Component, ElementRef, Inject, ViewEncapsulation } from '@angular/core';
import { DevAppRippleOptions } from './ripple-options';
import { DevAppDirectionality } from './dev-app-directionality';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

const isDarkThemeKey = 'MATERIAL_EXTENSIONS_DEV_APP_DARK_THEME';

export const ANIMATIONS_STORAGE_KEY = 'MATERIAL_EXTENSIONS_ANIMATIONS_DISABLED';

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
    { name: 'Color Picker', route: '/colorpicker' },
    { name: 'Checkbox Group', route: '/checkbox-group' },
    { name: 'Data Grid', route: '/grid' },
    { name: 'Datetimepicker', route: '/datetimepicker' },
    { name: 'Dialog', route: '/dialog' },
    { name: 'Drawer', route: '/drawer' },
    { name: 'Loader', route: '/loader' },
    { name: 'Photoviewer', route: '/photoviewer' },
    { name: 'Popover', route: '/popover' },
    { name: 'Progress', route: '/progress' },
    { name: 'Select', route: '/select' },
    { name: 'Slider', route: '/slider' },
    { name: 'Split Pane', route: '/split' },
    { name: 'Tooltip', route: '/tooltip' },
  ];

  /** Currently selected density scale based on the index. */
  currentDensityIndex = 0;

  /** List of possible global density scale values. */
  densityScales = [0, -1, -2, 'minimum', 'maximum'];

  /** Whether animations are disabled. */
  animationsDisabled = localStorage.getItem(ANIMATIONS_STORAGE_KEY) === 'true';

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
    dir.change.subscribe(value => {
      document.body.dir = value;
      cdr.markForCheck();
    });

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
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
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

  toggleAnimations() {
    localStorage.setItem(ANIMATIONS_STORAGE_KEY, !this.animationsDisabled + '');
    location.reload();
  }

  /** Gets the index of the next density scale that can be selected. */
  getNextDensityIndex() {
    return (this.currentDensityIndex + 1) % this.densityScales.length;
  }

  /** Selects the next possible density scale. */
  selectNextDensity() {
    this.currentDensityIndex = this.getNextDensityIndex();
  }
  /**
   * Updates the density classes on the host element. Applies a unique class for
   * a given density scale, so that the density styles are conditionally applied.
   */
  getDensityClass() {
    return `demo-density-${this.densityScales[this.currentDensityIndex]}`;
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
