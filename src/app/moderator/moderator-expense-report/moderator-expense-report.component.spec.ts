import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorExpenseReportComponent } from './moderator-expense-report.component';

describe('ModeratorExpenseReportComponent', () => {
  let component: ModeratorExpenseReportComponent;
  let fixture: ComponentFixture<ModeratorExpenseReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorExpenseReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorExpenseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
