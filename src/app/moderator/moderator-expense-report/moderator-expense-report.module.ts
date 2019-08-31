import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ExpenseReportRoutingModule} from './moderator-expense-report-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailExpenseReportComponent } from './moderator-detail-expense-report/moderator-detail-expense-report.component';
import {ExpenseReportComponent} from './moderator-expense-report.component';
import {DetailExpenseComponent} from './moderator-detail-expense/moderator-detail-expense.component';

@NgModule({
    imports: [
        CommonModule,
        ExpenseReportRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [ExpenseReportComponent, DetailExpenseReportComponent, DetailExpenseComponent]
})
export class ModeratorExpenseReportModule {}
