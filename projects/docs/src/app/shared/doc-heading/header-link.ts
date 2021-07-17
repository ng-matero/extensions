import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'header-link',
  template: `
    <a
      aria-label="Link to this heading"
      class="docs-markdown-a header-link"
      [attr.aria-describedby]="example"
      [href]="getFragmentUrl()"
    >
      <mat-icon>link</mat-icon>
    </a>
  `,
  styleUrls: ['./header-link.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderLinkComponent implements OnInit {
  /**
   * Id of the anchor element. Note that is uses "example" because we instantiate the
   * header link components through the ComponentPortal.
   */
  @Input() example!: string;

  private _text = '';

  constructor(private platformLocation: PlatformLocation) {}

  ngOnInit() {
    this._text = this.example
      .toLowerCase()
      .split(' ')
      .filter(s => s !== '&')
      .join('-');
  }

  getFragmentUrl(): string {
    return `${this.platformLocation.pathname}#${this._text}`;
  }
}
