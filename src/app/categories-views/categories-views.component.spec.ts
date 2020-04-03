import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesViewsComponent } from './categories-views.component';

describe('CategoriesViewsComponent', () => {
  let component: CategoriesViewsComponent;
  let fixture: ComponentFixture<CategoriesViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
