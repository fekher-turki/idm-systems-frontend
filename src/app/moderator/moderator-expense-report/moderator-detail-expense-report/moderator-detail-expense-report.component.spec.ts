import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorDetailExpenseReportComponent } from './moderator-detail-expense-report.component';

describe('ModeratorDetailExpenseReportComponent', () => {
  let component: ModeratorDetailExpenseReportComponent;
  let fixture: ComponentFixture<ModeratorDetailExpenseReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorDetailExpenseReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorDetailExpenseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
