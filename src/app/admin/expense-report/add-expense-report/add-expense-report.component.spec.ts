import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseReportComponent } from './add-expense-report.component';

describe('AddExpenseReportComponent', () => {
  let component: AddExpenseReportComponent;
  let fixture: ComponentFixture<AddExpenseReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpenseReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpenseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
