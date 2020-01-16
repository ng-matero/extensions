import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxSelectComponent } from './select.component';

describe('MtxSelectComponent', () => {
  let component: MtxSelectComponent;
  let fixture: ComponentFixture<MtxSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MtxSelectComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
