import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatAnchor } from '@angular/material/button';

@Component({
  template: `
    <h1>404</h1>
    <p>This page does not exist</p>
    <a mat-raised-button routerLink="/">Go back to the home page</a>
  `,
  host: { class: 'mat-typography' },
  imports: [MatAnchor, RouterLink],
})
export class DevApp404 {}
