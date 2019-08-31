import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailExpenseReportComponent } from './financial-detail-expense-report.component';

describe('DetailExpenseReportComponent', () => {
  let component: DetailExpenseReportComponent;
  let fixture: ComponentFixture<DetailExpenseReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailExpenseReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailExpenseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
