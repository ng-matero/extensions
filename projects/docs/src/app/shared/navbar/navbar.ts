import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgProgressbar } from 'ngx-progressbar';
import { NgProgressRouter } from 'ngx-progressbar/router';
import { map } from 'rxjs';
import { AppLogo } from '../logo/logo';
import { NavigationFocusService } from '../navigation-focus/navigation-focus.service';
import { AppThemes } from '../themes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports: [
    NgProgressbar,
    NgProgressRouter,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatMenuModule,
    AppLogo,
    NgTemplateOutlet,
    AsyncPipe,
  ],
})
export class Navbar implements OnInit {
  private _appThemes = inject(AppThemes);
  private navigationFocusService = inject(NavigationFocusService);

  private readonly http = inject(HttpClient);

  dark = false;
  skipLinkHref: string | null | undefined;
  skipLinkHidden = true;

  version$: any;

  constructor() {
    setTimeout(() => (this.skipLinkHref = this.navigationFocusService.getSkipLinkHref()), 100);
  }

  toggleTheme() {
    this.dark = !this.dark;
    this._appThemes.value = this.dark ? 'docs-theme-dark' : 'docs-theme-light';
  }

  ngOnInit(): void {
    this.version$ = this.http
      .get('https://registry.npmjs.org/@ng-matero/extensions')
      .pipe(map((data: any) => data['dist-tags'].latest));
  }
}
