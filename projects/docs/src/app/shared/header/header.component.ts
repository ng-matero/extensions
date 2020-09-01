import { Component, ElementRef, Inject, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { AppDirectionality } from '@shared/directionality';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  dark = false;

  constructor(
    private _element: ElementRef<HTMLElement>,
    private _overlayContainer: OverlayContainer,
    private _router: Router,
    @Inject(Directionality) public dir: AppDirectionality,
    cdr: ChangeDetectorRef
  ) {
    dir.change.subscribe(() => cdr.markForCheck());
  }

  toggleTheme() {
    const darkThemeClass = 'docs-dark-theme';
    this.dark = !this.dark;
  }
}
