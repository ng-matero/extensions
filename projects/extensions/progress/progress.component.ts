import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'mtx-progress',
  exportAs: 'mtxProgress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxProgressComponent implements OnInit {
  @Input() value = 0;

  @Input() height: string;

  @Input() color: string;

  @Input() foreground: string;

  @Input() background: string;

  @Input() striped: boolean;

  constructor() {}

  ngOnInit() {}
}
