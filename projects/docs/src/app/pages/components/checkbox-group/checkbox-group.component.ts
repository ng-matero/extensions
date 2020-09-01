import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
})
export class CheckboxGroupComponent {
  constructor(public route: ActivatedRoute) {}
}
