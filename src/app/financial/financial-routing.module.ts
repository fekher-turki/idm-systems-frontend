import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialComponent } from './financial.component';

const routes: Routes = [
    {
        path: '',
        component: FinancialComponent,
        children: [
            { path: '', redirectTo: 'financialExpenseReports', pathMatch: 'prefix' },
            { path: 'financialExpenseReports', loadChildren:
                    './financial-expense-report/financial-expense-report.module#ExpenseReportModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FinancialRoutingModule {}
