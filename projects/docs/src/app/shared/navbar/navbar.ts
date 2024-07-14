import { NgTemplateOutlet } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgProgressModule } from 'ngx-progressbar';
import { Subscription } from 'rxjs';
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
  ],
})
export class Navbar implements OnDestroy {
  private subscriptions = new Subscription();

  dark = false;
  skipLinkHref: string | null | undefined;
  skipLinkHidden = true;

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

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
