import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DevAppLayout } from './dev-app/dev-app-layout';

/** Root component for the dev-app demos. */
@Component({
  selector: 'dev-app',
  template: `
    <dev-app-layout>
      <router-outlet></router-outlet>
    </dev-app-layout>
  `,
  encapsulation: ViewEncapsulation.None,
  imports: [DevAppLayout, RouterOutlet],
})
export class AppComponent {}
