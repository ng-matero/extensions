import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  template: `
    <h1>404</h1>
    <p>This page does not exist</p>
    <a matButton="elevated" routerLink="/">Go back to the home page</a>
  `,
  host: { class: 'mat-typography' },
  imports: [MatAnchor, RouterLink],
})
export class DevApp404 {}
