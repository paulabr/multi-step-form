import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlanViewComponent } from './select-plan-view.component';

describe('SelectPlanViewComponent', () => {
  let component: SelectPlanViewComponent;
  let fixture: ComponentFixture<SelectPlanViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPlanViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
