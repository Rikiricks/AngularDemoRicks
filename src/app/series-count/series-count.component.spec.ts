import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCountComponent } from './series-count.component';

describe('SeriesCountComponent', () => {
  let component: SeriesCountComponent;
  let fixture: ComponentFixture<SeriesCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
