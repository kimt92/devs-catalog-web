import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsViewsComponent } from './produits-views.component';

describe('ProduitsViewsComponent', () => {
  let component: ProduitsViewsComponent;
  let fixture: ComponentFixture<ProduitsViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
