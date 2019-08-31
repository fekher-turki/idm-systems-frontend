import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialDetailExpenseComponent } from './financial-detail-expense.component';

describe('FinancialDetailExpenseComponent', () => {
  let component: FinancialDetailExpenseComponent;
  let fixture: ComponentFixture<FinancialDetailExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialDetailExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialDetailExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
