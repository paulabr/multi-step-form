import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourInfoViewComponent } from './your-info-view.component';

describe('YourInfoViewComponent', () => {
  let component: YourInfoViewComponent;
  let fixture: ComponentFixture<YourInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourInfoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
