import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-text3d',
  templateUrl: './text3d.component.html',
  styleUrls: ['./text3d.component.scss'],
})
export class Text3dComponent {
  constructor(public route: ActivatedRoute) {}
}
