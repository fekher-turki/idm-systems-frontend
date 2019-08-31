import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseReportComponent } from './user-expense-report.component';
import { ExpenseReportRoutingModule } from './user-expense-report-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailExpenseReportComponent } from './user-detail-expense-report/user-detail-expense-report.component';

@NgModule({
    imports: [
        CommonModule,
        ExpenseReportRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [ExpenseReportComponent, DetailExpenseReportComponent]
})
export class ExpenseReportModule {}
