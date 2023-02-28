import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnsViewComponent } from './add-ons-view.component';

describe('AddOnsViewComponent', () => {
  let component: AddOnsViewComponent;
  let fixture: ComponentFixture<AddOnsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOnsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
