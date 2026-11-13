import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MtxColorpicker } from './colorpicker';
import { MtxColorpickerModule } from './colorpicker-module';

@Component({
  template: `
    <input [mtxColorpicker]="picker" [formControl]="color" (colorChange)="changeCount += 1" />
    <mtx-colorpicker #picker [content]="colors" />
    <ng-template #colors>
      <button type="button" (click)="picker.select('#ff0000')">Red</button>
    </ng-template>
  `,
  imports: [MtxColorpickerModule, ReactiveFormsModule],
})
class TestHostComponent {
  color = new FormControl('#0000ff');
  changeCount = 0;
}

describe('MtxColorpicker', () => {
  it('ignores color choices after the associated input becomes disabled while open', async () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const picker: MtxColorpicker = fixture.debugElement.query(
      By.directive(MtxColorpicker)
    ).componentInstance;
    picker.open();
    fixture.detectChanges();
    await fixture.whenStable();

    const choice = document.querySelector<HTMLButtonElement>('.cdk-overlay-container button')!;
    expect(choice.textContent).toBe('Red');

    const host = fixture.componentInstance;
    host.color.disable();
    fixture.detectChanges();
    choice.click();

    expect(host.color.value).toBe('#0000ff');
    expect(host.changeCount).toBe(0);

    host.color.enable();
    fixture.detectChanges();
    choice.click();

    expect(host.color.value).toBe('#ff0000');
    expect(host.changeCount).toBe(1);
  });
});
