import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Location, PlatformLocation } from '@angular/common';

@Component({
  selector: 'docs-heading',
  template: `
    <h2 [id]="id">
      <span>{{text}}</span>
      <a class="header-link" [href]="href">
        <mat-icon>link</mat-icon>
      </a>
    </h2>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class DocsHeadingComponent implements OnInit {
  @Input() text = '';

  id = '';
  href = '';

  constructor(private platformLocation: PlatformLocation) { }

  ngOnInit() {
    this.id = this.text.toLowerCase().split(' ').filter(s => s !== '&').join('-');
    this.href = this.platformLocation.pathname + '#' + this.id;
  }
}
