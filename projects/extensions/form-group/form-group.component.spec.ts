import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxFormGroupComponent } from './form-group.component';

describe('MtxFormGroupComponent', () => {
  let component: MtxFormGroupComponent;
  let fixture: ComponentFixture<MtxFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtxFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
