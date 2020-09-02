import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'doc-heading',
  template: `
    <h3 [id]="id">
      <header-link [example]="text"></header-link>
      <span> {{text}}</span>
    </h3>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class DocHeadingComponent implements OnInit {
  @Input() text = '';

  id = '';

  constructor() { }

  ngOnInit() {
    this.id = this.text.toLowerCase().split(' ').filter(s => s !== '&').join('-');
  }
}
