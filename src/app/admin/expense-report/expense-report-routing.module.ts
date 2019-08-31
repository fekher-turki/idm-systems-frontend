import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseReportComponent } from './expense-report.component';
import {AddExpenseReportComponent} from './add-expense-report/add-expense-report.component';
import {UpdateExpenseReportComponent} from './update-expense-report/update-expense-report.component';
import {DetailExpenseReportComponent} from './detail-expense-report/detail-expense-report.component';
import {DetailExpenseComponent} from './detail-expense/detail-expense.component';

const routes: Routes = [
    {
        path: '', component: ExpenseReportComponent
    },
    {
        path: 'addExpenseReport', component: AddExpenseReportComponent
    },
    {
        path: 'updateExpenseReport/:id', component: UpdateExpenseReportComponent
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
