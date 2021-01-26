import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MtxColorPickerComponent } from './color-picker.component';

describe('MtxColorPickerComponent', () => {
  let component: MtxColorPickerComponent;
  let fixture: ComponentFixture<MtxColorPickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
