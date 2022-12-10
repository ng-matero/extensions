import {
  Component,
  Input,
  ContentChild,
  TemplateRef,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'mtx-text3d',
  exportAs: 'mtxText3d',
  host: {
    'class': 'mtx-text3d',
    '[style.transform]': 'transform',
  },
  templateUrl: './text3d.html',
  styleUrls: ['./text3d.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxText3d {
  @ContentChild(TemplateRef, { static: false }) template!: TemplateRef<any>;

  @Input() text = '';

  @Input() depth = 20;

  @Input() rotateX = 60;
  @Input() rotateY = 0;
  @Input() rotateZ = 0;

  get transform() {
    return `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`;
  }

  get depthArr() {
    const tmpArr: number[] = [];
    for (let i = 1; i <= this.depth; i++) {
      tmpArr.push(i);
    }
    return tmpArr;
  }
}
