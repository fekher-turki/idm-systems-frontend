import {Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {ExpenseReportService} from '../../shared/services/expenseReport/expense-report.service';
import {ExpenseService} from '../../shared/services/expense/expense.service';
import {CompanyService} from '../../shared/services/company/company.service';
import {ClientService} from '../../shared/services/client/client.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    expenseReportCount;
    expenseCount;
    companiesCount;
    clientsCount;

    constructor(private expenseReportService: ExpenseReportService,
                private expenseService: ExpenseService,
                private companyService: CompanyService,
                private clientService: ClientService) {}

    ngOnInit() {
        this.reloadData();
    }

    reloadData() {
        this.expenseReportService.getExpenseReportCount().subscribe( data => {
            this.expenseReportCount = data;
        });
        this.expenseService.getExpenseCount().subscribe( data => {
            this.expenseCount = data;
        });
        this.companyService.getCompanyCount().subscribe( data => {
            this.companiesCount = data;
        });
        this.clientService.getClientCount().subscribe( data => {
            this.clientsCount = data;
        });
        }
}
