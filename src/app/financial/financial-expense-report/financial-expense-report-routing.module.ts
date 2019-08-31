import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseReportComponent } from './financial-expense-report.component';
import {DetailExpenseReportComponent} from './financial-detail-expense-report/financial-detail-expense-report.component';
import {DetailExpenseComponent} from './financial-detail-expense/financial-detail-expense.component';

const routes: Routes = [
    {
        path: '', component: ExpenseReportComponent
    },
    {
        path: 'detailExpenseReport/:id', component: DetailExpenseReportComponent
    },
    {
        path: 'detailExpense/:id', component: DetailExpenseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpenseReportRoutingModule {
}
