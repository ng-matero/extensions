import { NgIf } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { MatAnchor, MatIconAnchor, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgProgressComponent } from 'ngx-progressbar';
import { Subscription } from 'rxjs';
import { NavigationFocusService } from '../navigation-focus/navigation-focus.service';
import { AppThemes } from '../themes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  standalone: true,
  imports: [
    NgProgressComponent,
    NgIf,
    MatAnchor,
    RouterLink,
    RouterLinkActive,
    MatIconButton,
    MatTooltip,
    MatIcon,
    MatIconAnchor,
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
