import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsEditsComponent } from './produits-edits.component';

describe('ProduitsEditsComponent', () => {
  let component: ProduitsEditsComponent;
  let fixture: ComponentFixture<ProduitsEditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsEditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsEditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
