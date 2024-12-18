import { PlatformLocation } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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
  styleUrl: './header-link.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [MatIconModule],
})
export class HeaderLinkComponent implements OnInit {
  private platformLocation = inject(PlatformLocation);

  /**
   * Id of the anchor element. Note that is uses "example" because we instantiate the
   * header link components through the ComponentPortal.
   */
  @Input() example!: string;

  private _text = '';

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
