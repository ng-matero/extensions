import {
  Component,
  OnInit,
  Input,
  ContentChild,
  TemplateRef,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'mtx-text3d',
  templateUrl: './text3d.component.html',
  styleUrls: ['./text3d.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxText3dComponent implements OnInit {
  @ContentChild(TemplateRef, { static: false }) template: TemplateRef<any>;

  @Input() text = '';

  @Input() num = 20;

  @Input() rotateX = 60;
  @Input() rotateY = 0;
  @Input() rotateZ = 0;

  arr = [];

  constructor() {
    for (let i = 1; i <= this.num; i++) {
      this.arr.push(i);
    }
  }

  ngOnInit() {}
}
