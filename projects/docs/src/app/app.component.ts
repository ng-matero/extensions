import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, inject, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppThemes, themeClass } from './shared';
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
  private _htmlElement = document.querySelector('html')!;

  constructor() {
    this._appThemes.change.subscribe((themeSelect: themeClass) => {
      this._appThemes.themes
        .filter(theme => theme !== themeSelect)
        .forEach(theme => {
          this._htmlElement.classList.remove(theme);
        });

      this._htmlElement.classList.add(themeSelect);
    });
  }
}
