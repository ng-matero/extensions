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
  /** The progress value */
  @Input() value = 0;

  /** The progress height */
  @Input() height: string;

  /** The progress text color */
  @Input() color: string;

  /** The progress bar color */
  @Input() foreground: string;

  /** The progress track color */
  @Input() background: string;

  @Input() striped: boolean;

  constructor() {}

  ngOnInit() {}
}
