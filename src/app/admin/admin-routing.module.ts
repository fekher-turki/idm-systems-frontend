import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'registers', loadChildren: './register/register.module#RegisterModule' },
            { path: 'clients', loadChildren: './client/client.module#ClientModule' },
            { path: 'clientTypes', loadChildren: './client-type/client-type.module#ClientTypeModule' },
            { path: 'countries', loadChildren: './country/country.module#CountryModule' },
            { path: 'companies', loadChildren: './company/company.module#CompanyModule' },
            { path: 'sources', loadChildren: './source/source.module#SourceModule' },
            { path: 'sourceTypes', loadChildren: './source-type/source-type.module#SourceTypeModule' },
            { path: 'teams', loadChildren: './team/team.module#TeamModule' },
            { path: 'sourceTeams', loadChildren: './source-team/source-team.module#SourceTeamModule' },
            { path: 'departments', loadChildren: './department/department.module#DepartmentModule' },
            { path: 'employees', loadChildren: './employee/employee.module#EmployeeModule' },
            { path: 'departmentResponsibles', loadChildren:
                    './department-responsible/department-responsible.module#DepartmentResponsibleModule' },
            { path: 'approvers', loadChildren: './approver/approver.module#ApproverModule' },
            { path: 'requesters', loadChildren: './requester/requester.module#RequesterModule' },
            { path: 'approverTeams', loadChildren: './approver-team/approver-team.module#ApproverTeamModule' },
            { path: 'requesterTeams', loadChildren: './requester-team/requester-team.module#RequesterTeamModule' },
            { path: 'rules', loadChildren: './rule/rule.module#RuleModule' },
            { path: 'currencies', loadChildren: './currency/currency.module#CurrencyModule' },
            { path: 'exchangeRates', loadChildren: './exchange-rate/exchange-rate.module#ExchangeRateModule' },
            { path: 'categories', loadChildren: './category/category.module#CategoryModule' },
            { path: 'expenseReports', loadChildren: './expense-report/expense-report.module#ExpenseReportModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
