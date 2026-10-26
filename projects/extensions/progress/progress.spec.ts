import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MtxProgressModule } from './progress-module';

@Component({
  template: `
    <mtx-progress [value]="value()" aria-label="Upload progress">{{ value() }}%</mtx-progress>
    <mtx-progress [value]="50" [aria-label]="label"></mtx-progress>
  `,
  imports: [MtxProgressModule],
})
class TestHostComponent {
  value = signal(40);
  label = 'Profile completion';
}

describe('MtxProgress', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let progressEls: HTMLElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    progressEls = fixture.debugElement.queryAll(By.css('mtx-progress')).map(el => el.nativeElement);
  });

  it('should expose the host as a progressbar with its range', () => {
    const progressEl = progressEls[0];

    expect(progressEl.getAttribute('role')).toBe('progressbar');
    expect(progressEl.getAttribute('aria-valuemin')).toBe('0');
    expect(progressEl.getAttribute('aria-valuemax')).toBe('100');
    expect(progressEl.getAttribute('aria-valuenow')).toBe('40');
  });

  it('should update aria-valuenow when the value changes', () => {
    fixture.componentInstance.value.set(75);
    fixture.detectChanges();

    expect(progressEls[0].getAttribute('aria-valuenow')).toBe('75');
  });

  it('should clamp aria-valuenow between 0 and 100', () => {
    fixture.componentInstance.value.set(120);
    fixture.detectChanges();
    expect(progressEls[0].getAttribute('aria-valuenow')).toBe('100');

    fixture.componentInstance.value.set(-5);
    fixture.detectChanges();
    expect(progressEls[0].getAttribute('aria-valuenow')).toBe('0');
  });

  it('should not set a role on the fill element', () => {
    const fillEl = progressEls[0].querySelector('.mtx-progress-fill')!;

    expect(fillEl.hasAttribute('role')).toBe(false);
  });

  it('should keep an aria-label set on the host', () => {
    expect(progressEls[0].getAttribute('aria-label')).toBe('Upload progress');
    expect(progressEls[1].getAttribute('aria-label')).toBe('Profile completion');
  });
});
