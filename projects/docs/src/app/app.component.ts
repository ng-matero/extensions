import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AppThemes, themeClass } from '@shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(
    private _element: ElementRef<HTMLElement>,
    private _overlayContainer: OverlayContainer,
    private _appThemes: AppThemes
  ) {
    this._appThemes.change.subscribe((themeSelect: themeClass) => {
      this._appThemes.themes
        .filter(theme => theme !== themeSelect)
        .forEach(theme => {
          this._element.nativeElement.classList.remove(theme);
          this._overlayContainer.getContainerElement().classList.remove(theme);
        });

      this._element.nativeElement.classList.add(themeSelect);
      this._overlayContainer.getContainerElement().classList.add(themeSelect);
    });
  }
}
