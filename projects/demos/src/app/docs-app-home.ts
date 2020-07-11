import { Component } from '@angular/core';
import { DOCS } from './shared/component-nav/component-nav.component';

@Component({
  template: `
    <div class="docs-component-category-section" *ngFor="let section of list">
      <div class="docs-component-category-section-title">{{ section.title }}</div>
      <div class="docs-component-category-list" fxLayout="row wrap" fxLayoutGap="32px grid">
        <div
          *ngFor="let item of section.children"
          fxFlex.gt-lg="20"
          fxFlex.gt-md="25"
          fxFlex.gt-sm="33.333"
          fxFlex.gt-xs="50"
          fxFlex="100"
        >
          <a class="docs-component-category-list-item" [routerLink]="[item.route]">
            <div class="docs-component-category-list-card">
              <div class="docs-component-category-list-card-title">{{ item.name }}</div>
              <div class="docs-component-category-list-card-summary">{{ item.summary }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .docs-component-category-section {
        margin-bottom: 2rem;
      }
      .docs-component-category-section-title {
        margin-bottom: 1rem;
      }
      .docs-component-category-list-item {
        text-decoration: none;
      }
      .docs-component-category-list-card {
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        background: #fff;
      }
      .docs-component-category-list-card:hover {
        background: rgba(0, 0, 0, 0.03);
      }
      .docs-component-category-list-card-title {
        padding: 15px;
        font-size: 20px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.87);
      }
      .docs-component-category-list-card-summary {
        padding: 0 15px 15px;
        min-height: 2.4em;
        font-size: 15px;
        color: rgba(0, 0, 0, 0.54);
      }
    `,
  ],
})
export class DocsAppHome {
  list = DOCS;
}
