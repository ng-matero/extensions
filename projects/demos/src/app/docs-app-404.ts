import { Component } from '@angular/core';

@Component({
  template: `
    <h1>404</h1>
    <p>This page does not exist</p>
    <a mat-raised-button routerLink="/">Go back to the home page</a>
  `,
  host: { class: 'mat-typography' },
})
export class DocsApp404 {}
