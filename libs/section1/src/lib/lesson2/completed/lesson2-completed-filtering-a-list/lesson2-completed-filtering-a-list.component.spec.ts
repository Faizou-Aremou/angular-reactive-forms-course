import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson2CompletedFilteringAListComponent } from './lesson2-completed-filtering-a-list.component';

describe('Lesson2CompletedFilteringAListComponent', () => {
  let component: Lesson2CompletedFilteringAListComponent;
  let fixture: ComponentFixture<Lesson2CompletedFilteringAListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson2CompletedFilteringAListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson2CompletedFilteringAListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
