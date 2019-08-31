import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseReportComponent } from './financial-expense-report.component';
import { ExpenseReportRoutingModule } from './financial-expense-report-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailExpenseReportComponent } from './financial-detail-expense-report/financial-detail-expense-report.component';
import {DetailExpenseComponent} from './financial-detail-expense/financial-detail-expense.component';

@NgModule({
    imports: [
        CommonModule,
        ExpenseReportRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [ExpenseReportComponent, DetailExpenseReportComponent, DetailExpenseComponent]
})
export class ExpenseReportModule {}
