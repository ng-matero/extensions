import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DateAdapter, MAT_DATE_LOCALE, ThemePalette } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { provideDateFnsDatetimeAdapter } from '@ng-matero/extensions-date-fns-adapter';
import {
  MTX_DATETIMEPICKER_DEFAULT_OPTIONS,
  MtxDatetimepickerDefaultOptions,
  MtxDatetimepickerFilterType,
  MtxDatetimepickerModule,
} from '@ng-matero/extensions/datetimepicker';
import { TranslateService } from '@ngx-translate/core';
import { addDays, set } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { Subscription } from 'rxjs';
import { CustomHeader } from './custom-header';

@Component({
  selector: 'dev-datetimepicker-demo',
  templateUrl: 'datetimepicker-demo.html',
  styleUrl: 'datetimepicker-demo.scss',
  imports: [
    MatRadioGroup,
    ReactiveFormsModule,
    FormsModule,
    MatRadioButton,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MtxDatetimepickerModule,
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: enUS,
    },
    provideDateFnsDatetimeAdapter({
      parse: {
        dateInput: 'yyyy-MM-dd',
        yearInput: 'yyyy',
        monthInput: 'MMMM',
        datetimeInput: 'yyyy-MM-dd HH:mm',
        timeInput: 'HH:mm',
      },
      display: {
        dateInput: 'yyyy-MM-dd',
        yearInput: 'yyyy',
        monthInput: 'MMMM',
        datetimeInput: 'yyyy-MM-dd HH:mm',
        timeInput: 'HH:mm',
        monthYearLabel: 'yyyy MMMM',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM yyyy',
        popupHeaderDateLabel: 'MMM dd, E',
      },
    }),
    {
      provide: MTX_DATETIMEPICKER_DEFAULT_OPTIONS,
      useValue: {} as MtxDatetimepickerDefaultOptions,
    },
  ],
})
export class DatetimepickerDemo implements OnInit, OnDestroy {
  private dateAdapter = inject<DateAdapter<any>>(DateAdapter);
  private translate = inject(TranslateService);
  private fb = inject(UntypedFormBuilder);

  themeColor: ThemePalette = 'primary';
  timeInputAutoFocus = true;
  showWeekNumbers = false;

  today = new Date();
  tomorrow = addDays(this.today, 1);
  yesterday = addDays(this.today, -1);
  min = new Date(2018, 10, 3, 11, 10);
  max = new Date(2018, 10, 4, 11, 45);
  start = set(this.today, {
    year: 1930,
    month: 9,
    date: 28,
  });
  filter = (date: Date | null, type: MtxDatetimepickerFilterType) => {
    if (date === null) {
      return true;
    }
    switch (type) {
      case MtxDatetimepickerFilterType.DATE:
        return (
          date.getFullYear() % 2 === 0 && date.getMonth() % 2 === 0 && date.getDate() % 2 === 0
        );
      case MtxDatetimepickerFilterType.HOUR:
        return date.getHours() % 2 === 0;
      case MtxDatetimepickerFilterType.MINUTE:
        return date.getMinutes() % 2 === 0;
    }
  };

  group = this.fb.group({
    dateTime: [new Date('2017-11-09T12:10:00.000Z'), Validators.required],
    dateTimeManual: [new Date('2017-11-09T12:10:00.000Z'), Validators.required],
    dateTimeYear: [new Date('2017-11-09T12:10:00.000Z'), Validators.required],
    date: [null, Validators.required],
    time: [null, Validators.required],
    timeAMPM: [null, Validators.required],
    timeAMPM2: [null, Validators.required],
    timeAMPMManual: [null, Validators.required],
    month: [null, Validators.required],
    year: [null, Validators.required],
    mintest: [this.today, Validators.required],
    filtertest: [this.today, Validators.required],
    touch: [null, Validators.required],
    dateTimeButtons: [null, Validators.required],
  });

  customHeader = CustomHeader;

  translateSubscription = Subscription.EMPTY;

  selectedDate: Date | null = null;
  selectedTime: Date | null = null;

  ngOnInit() {
    this.translateSubscription = this.translate.onLangChange.subscribe(res => {
      this.dateAdapter.setLocale(res.lang);
    });
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }
}
