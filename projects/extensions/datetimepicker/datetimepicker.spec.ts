import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { provideNativeDatetimeAdapter } from '../core/datetime/datetime.module';
import { MtxDatetimepicker } from './datetimepicker';
import { MtxDatetimepickerModule } from './datetimepicker-module';

@Component({
  template: `
    <input [mtxDatetimepicker]="picker" [formControl]="date" (dateChange)="changeCount += 1" />
    <mtx-datetimepicker #picker type="date">
      @if (actions) {
        <mtx-datetimepicker-actions>
          <button type="button" mtxDatetimepickerApply>Apply</button>
          <button type="button" mtxDatetimepickerClear>Clear</button>
        </mtx-datetimepicker-actions>
      }
    </mtx-datetimepicker>
  `,
  imports: [MtxDatetimepickerModule, ReactiveFormsModule],
  providers: [provideNativeDatetimeAdapter()],
})
class TestHostComponent {
  date = new FormControl(new Date(2026, 4, 5));
  changeCount = 0;
  actions = false;
}

describe('MtxDatetimepicker', () => {
  it('ignores a calendar date after disabling the associated input while open', async () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const picker: MtxDatetimepicker<Date> = fixture.debugElement.query(
      By.directive(MtxDatetimepicker)
    ).componentInstance;
    picker.open();
    fixture.detectChanges();
    await fixture.whenStable();

    const cells = document.querySelectorAll<HTMLButtonElement>('.mtx-calendar-body-cell');
    const choice = [...cells].find(cell => cell.textContent?.trim() === '12')!;

    const host = fixture.componentInstance;
    host.date.disable();
    fixture.detectChanges();
    choice.click();

    expect(host.date.value).toEqual(new Date(2026, 4, 5));
    expect(host.changeCount).toBe(0);
  });

  for (const action of ['Apply', 'Clear']) {
    it(`ignores ${action} after disabling the associated input while open`, async () => {
      const fixture = TestBed.createComponent(TestHostComponent);
      const host = fixture.componentInstance;
      host.actions = true;
      fixture.detectChanges();

      const picker: MtxDatetimepicker<Date> = fixture.debugElement.query(
        By.directive(MtxDatetimepicker)
      ).componentInstance;
      picker.open();
      fixture.detectChanges();
      await fixture.whenStable();

      const cells = document.querySelectorAll<HTMLButtonElement>('.mtx-calendar-body-cell');
      const choice = [...cells].find(cell => cell.textContent?.trim() === '12')!;
      choice.click();
      expect(host.date.value).toEqual(new Date(2026, 4, 5));

      host.date.disable();
      fixture.detectChanges();
      const buttons = document.querySelectorAll<HTMLButtonElement>(
        '.mtx-datetimepicker-actions button'
      );
      [...buttons].find(button => button.textContent?.trim() === action)!.click();

      expect(host.date.value).toEqual(new Date(2026, 4, 5));
      expect(host.changeCount).toBe(0);
    });
  }
});
