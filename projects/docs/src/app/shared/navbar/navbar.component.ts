import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  dark = false;

  constructor(
    private _element: ElementRef<HTMLElement>,
    private _overlayContainer: OverlayContainer,
    private _router: Router
  ) {}

  toggleTheme() {
    const darkThemeClass = 'docs-dark-theme';
    this.dark = !this.dark;
  }
}
