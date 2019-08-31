import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpenseReportComponent } from './update-expense-report.component';

describe('UpdateExpenseReportComponent', () => {
  let component: UpdateExpenseReportComponent;
  let fixture: ComponentFixture<UpdateExpenseReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExpenseReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExpenseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
