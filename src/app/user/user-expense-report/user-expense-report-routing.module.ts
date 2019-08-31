import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseReportComponent } from './user-expense-report.component';
import {DetailExpenseReportComponent} from './user-detail-expense-report/user-detail-expense-report.component';

const routes: Routes = [
    {
        path: '', component: ExpenseReportComponent
    },
    {
        path: 'detailExpenseReport/:id', component: DetailExpenseReportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpenseReportRoutingModule {
}
