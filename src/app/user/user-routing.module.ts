import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            { path: '', redirectTo: 'userExpenseReports', pathMatch: 'prefix' },
            { path: 'userExpenseReports', loadChildren: './user-expense-report/user-expense-report.module#ExpenseReportModule' },
            { path: 'userExpenses', loadChildren: './user-expense/user-expense.module#ExpenseModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
