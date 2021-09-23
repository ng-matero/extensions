import { Component, ViewEncapsulation } from '@angular/core';

/** Root component for the dev-app demos. */
@Component({
  selector: 'dev-app',
  template: `
    <dev-app-layout>
      <router-outlet></router-outlet>
    </dev-app-layout>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
