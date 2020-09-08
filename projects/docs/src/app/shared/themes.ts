import { EventEmitter, Injectable, OnDestroy } from '@angular/core';

export type themeClass = 'docs-theme-light' | 'docs-theme-dark';

@Injectable({
  providedIn: 'root',
})
export class AppThemes implements OnDestroy {
  readonly change = new EventEmitter<themeClass>();

  themes: themeClass[] = ['docs-theme-light', 'docs-theme-dark'];

  get value(): themeClass {
    return this._value;
  }
  set value(value: themeClass) {
    this._value = value;
    this.change.next(value);
  }
  private _value: themeClass = 'docs-theme-light';

  ngOnDestroy() {
    this.change.complete();
  }
}
