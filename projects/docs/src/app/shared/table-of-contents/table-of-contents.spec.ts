import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TableOfContents } from './table-of-contents';

const mockActivatedRoute = {
  fragment: new Observable(observer => {
    observer.complete();
  }),
};

describe('TableOfContents', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();
  }));

  let fixture: ComponentFixture<TableOfContents>;
  let component: TableOfContents;

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfContents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have no header', () => {
    const header = fixture.nativeElement.querySelector('h2');
    expect(header).toBeNull();
  });

  it('should have header and links', () => {
    component._links = [
      {
        type: 'h2',
        id: 'test',
        name: 'test',
        top: 0,
        active: false,
      },
    ];

    const header = fixture.nativeElement.querySelector('h2');
    expect(header).toBeDefined();

    const links = fixture.nativeElement.querySelector('li');
    expect(links).toBeDefined();
  });
});
