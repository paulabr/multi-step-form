import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnPickerComponent } from './add-on-picker.component';

describe('AddOnPickerComponent', () => {
  let component: AddOnPickerComponent;
  let fixture: ComponentFixture<AddOnPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOnPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
