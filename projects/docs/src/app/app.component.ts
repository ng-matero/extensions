import { Component, ViewEncapsulation, ElementRef, inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AppThemes, themeClass } from './shared';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [Navbar, RouterOutlet],
})
export class AppComponent {
  private _element = inject<ElementRef<HTMLElement>>(ElementRef);
  private _overlayContainer = inject(OverlayContainer);
  private _appThemes = inject(AppThemes);

  constructor() {
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
