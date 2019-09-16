import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMainInfoComponent } from './movie-main-info.component';

describe('MovieMainInfoComponent', () => {
  let component: MovieMainInfoComponent;
  let fixture: ComponentFixture<MovieMainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieMainInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
