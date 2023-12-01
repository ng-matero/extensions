import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DateAdapter, ThemePalette } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { MtxDatetimepickerFilterType } from '@ng-matero/extensions/datetimepicker';

@Component({
  selector: 'dev-datetimepicker-demo',
  templateUrl: 'datetimepicker-demo.component.html',
  styleUrls: ['datetimepicker-demo.component.scss'],
})
export class DatetimepickerDemoComponent implements OnInit, OnDestroy {
  themeColor: ThemePalette = 'primary';

  type = 'moment';

  group: UntypedFormGroup;
  today: moment.Moment;
  tomorrow: moment.Moment;
  yesterday: moment.Moment;
  min: moment.Moment;
  max: moment.Moment;
  start: moment.Moment;
  filter: (date: moment.Moment | null, type: MtxDatetimepickerFilterType) => boolean;

  translateSubscription!: Subscription;

  constructor(
    fb: UntypedFormBuilder,
    private dateAdapter: DateAdapter<any>,
    private translate: TranslateService
  ) {
    this.today = moment.utc();
    this.tomorrow = moment.utc().date(moment.utc().date() + 1);
    this.yesterday = moment.utc().date(moment.utc().date() - 1);
    this.min = this.today.clone().year(2018).month(10).date(3).hour(11).minute(10);
    this.max = this.min.clone().date(4).minute(45);
    this.start = this.today.clone().year(1930).month(9).date(28);
    this.filter = (date: moment.Moment | null, type: MtxDatetimepickerFilterType) => {
      if (date === null) {
        return true;
      }
      switch (type) {
        case MtxDatetimepickerFilterType.DATE:
          return date.year() % 2 === 0 && date.month() % 2 === 0 && date.date() % 2 === 0;
        case MtxDatetimepickerFilterType.HOUR:
          return date.hour() % 2 === 0;
        case MtxDatetimepickerFilterType.MINUTE:
          return date.minute() % 2 === 0;
      }
    };

    this.group = fb.group({
      dateTime: [new Date('2017-11-09T12:10:00.000Z'), Validators.required],
      dateTimeManual: [new Date('2017-11-09T12:10:00.000Z'), Validators.required],
      dateTimeYear: [new Date('2017-11-09T12:10:00.000Z'), Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required],
      timeAMPM: [null, Validators.required],
      timeAMPMManual: [null, Validators.required],
      month: [null, Validators.required],
      year: [null, Validators.required],
      mintest: [this.today, Validators.required],
      filtertest: [this.today, Validators.required],
      touch: [null, Validators.required],
    });
  }

  selectedDate: Date | null = null;
  selectedTime: Date | null = null;

  ngOnInit() {
    this.translateSubscription = this.translate.onLangChange.subscribe((res: { lang: any }) => {
      this.dateAdapter.setLocale(res.lang);
    });
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }
}
