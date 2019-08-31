import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModeratorComponent } from './moderator.component';

const routes: Routes = [
    {
        path: '',
        component: ModeratorComponent,
        children: [
            { path: '', redirectTo: 'moderatorExpenseReports', pathMatch: 'prefix' },
            { path: 'moderatorExpenseReports', loadChildren:
                    './moderator-expense-report/moderator-expense-report.module#ModeratorExpenseReportModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModeratorRoutingModule {}
