import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { Observable } from 'rxjs';
import { Navbar } from './navbar';

const navItemsId = 'components';

const mockActivatedRoute = {
  fragment: new Observable(observer => {
    observer.complete();
  }),
  params: new Observable(observer => {
    observer.next({ id: navItemsId });
    observer.complete();
  }),
};

describe('Navbar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), { provide: ActivatedRoute, useValue: mockActivatedRoute }],
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Navbar);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
