import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
} from '@angular/core';

@Component({
  selector: 'mtx-alert',
  host: {
    class: 'mtx-alert-wrap',
  },
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MtxAlertComponent implements OnInit {
  @Input() type = 'default';

  @Input() isOpen = true;

  @Input() dismissible: boolean;

  /** Text color */
  @Input() color: string;

  constructor() {}

  ngOnInit() {}

  handleClose() {}
}
