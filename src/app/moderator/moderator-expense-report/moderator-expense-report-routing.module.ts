import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailExpenseReportComponent} from './moderator-detail-expense-report/moderator-detail-expense-report.component';
import {ExpenseReportComponent} from './moderator-expense-report.component';
import {DetailExpenseComponent} from './moderator-detail-expense/moderator-detail-expense.component';

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
