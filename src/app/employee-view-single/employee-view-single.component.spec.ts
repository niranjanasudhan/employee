import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewSingleComponent } from './employee-view-single.component';

describe('EmployeeViewSingleComponent', () => {
  let component: EmployeeViewSingleComponent;
  let fixture: ComponentFixture<EmployeeViewSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeViewSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
