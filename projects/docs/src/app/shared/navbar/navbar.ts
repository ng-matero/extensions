import { Component } from '@angular/core';
import { AppThemes } from '../themes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  dark = false;

  constructor(private _appThemes: AppThemes) {}

  toggleTheme() {
    this.dark = !this.dark;
    this._appThemes.value = this.dark ? 'docs-theme-dark' : 'docs-theme-light';
  }
}
