import { Component } from '@angular/core';
import { DOCS } from './shared/component-nav/component-nav.component';

@Component({
  template: `
  <div class="docs-component-section" *ngFor="let section of list">
    <div class="docs-component-section-title">{{section.title}}</div>
    <div class="docs-component-list" fxLayout="row wrap" fxLayoutGap="32px grid">
      <div *ngFor="let item of section.children" fxFlex.gt-sm="25" fxFlex.gt-xs="50" fxFlex="100">
        <a class="docs-component-list-item" [routerLink]="[item.route]">
          <mat-card>
            <mat-card-title>
              <p>{{item.name}}</p>
            </mat-card-title>
            <mat-card-content class="docs-component-list-item-summary">
              <p>{{item.summary}}</p>
            </mat-card-content>
          </mat-card>
        </a>
      </div>
    </div>
  </div>
  `,
  styles: [`
  .docs-component-section {
    margin-bottom: 2rem;
  }
  .docs-component-section-title {
    margin-bottom: 1rem;
  }
  .docs-component-list-item {
    display: block;
    height: 100%;
    text-decoration: none;
  }
  mat-card {
    height: 100%;
  }
  .docs-component-list-item-summary {
    color: rgba(0,0,0,.54);
  }
  `]
})
export class DocsAppHome {
  list = DOCS;
}
