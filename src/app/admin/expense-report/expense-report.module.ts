import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseReportComponent } from './expense-report.component';
import { ExpenseReportRoutingModule } from './expense-report-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddExpenseReportComponent } from './add-expense-report/add-expense-report.component';
import { UpdateExpenseReportComponent } from './update-expense-report/update-expense-report.component';
import { DetailExpenseReportComponent } from './detail-expense-report/detail-expense-report.component';
import {DetailExpenseComponent} from './detail-expense/detail-expense.component';

@NgModule({
    imports: [
        CommonModule,
        ExpenseReportRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [ExpenseReportComponent,
        AddExpenseReportComponent,
        UpdateExpenseReportComponent,
        DetailExpenseComponent,
        DetailExpenseReportComponent]
})
export class ExpenseReportModule {}
