import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgProgressModule } from 'ngx-progressbar';
import { map } from 'rxjs';
import { AppLogo } from '../logo/logo';
import { NavigationFocusService } from '../navigation-focus/navigation-focus.service';
import { AppThemes } from '../themes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  standalone: true,
  imports: [
    NgProgressModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    AppLogo,
    NgTemplateOutlet,
    AsyncPipe,
  ],
})
export class Navbar implements OnInit {
  private readonly http = inject(HttpClient);

  dark = false;
  skipLinkHref: string | null | undefined;
  skipLinkHidden = true;

  version$: any;

  constructor(
    private _appThemes: AppThemes,
    private navigationFocusService: NavigationFocusService
  ) {
    setTimeout(() => (this.skipLinkHref = this.navigationFocusService.getSkipLinkHref()), 100);
  }

  toggleTheme() {
    this.dark = !this.dark;
    this._appThemes.value = this.dark ? 'docs-theme-dark' : 'docs-theme-light';
  }

  ngOnInit(): void {
    this.version$ = this.http
      .get('https://registry.npmjs.org/@dcnx/mat-extensions')
      .pipe(map((data: any) => data['dist-tags'].latest));
  }
}
