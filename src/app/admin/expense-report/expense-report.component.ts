import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {ExpenseReportService} from '../../shared/services/expenseReport/expense-report.service';
import {ExpenseReport} from '../../shared/models/expenseReport';
import {SourceTeamService} from '../../shared/services/sourceTeam/source-team.service';
import {SourceTeam} from '../../shared/models/sourceTeam';
import {ApproverTeamService} from '../../shared/services/approverTeam/approver-team.service';
import {ApproverTeam} from '../../shared/models/approverTeam';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import {ExpenseService} from '../../shared/services/expense/expense.service';

@Component({
    selector: 'app-expense-report',
    templateUrl: './expense-report.component.html',
    styleUrls: ['./expense-report.component.scss'],
    animations: [routerTransition()]
})
export class ExpenseReportComponent implements OnInit {

    id: number;
    expenseReports: Observable<ExpenseReport[]>;
    @Input() expenseReport: ExpenseReport;
    sourceTeams: Observable<SourceTeam[]>;
    @Input() sourceTeam: SourceTeam;
    approverTeams: Observable<ApproverTeam[]>;
    @Input() approverTeam: ApproverTeam;
    dataToImport = [];
    dataline = {};
    angular5csv: Angular5Csv;
    requester: string;

    // tslint:disable-next-line:max-line-length
    constructor(private expenseReportService: ExpenseReportService, private expenseService: ExpenseService, private sourceTeamService: SourceTeamService, private approverTeamService: ApproverTeamService) { }

    ngOnInit() {
        this.reloadData();
    }

    exportExpenseReport(id) {
        this.expenseReportService.getExpenseReportById(id).subscribe(data => {
            this.requester = data[0].requesterTeam.requester.employee.personal_number + ' '
                + data[0].requesterTeam.requester.employee.first_name + ' '
                + data[0].requesterTeam.requester.employee.last_name;
        });
        this.expenseService.getExpenseByExpenseReportId(id).subscribe(data => {
            let i;
            this.dataToImport = [
                {
                    'id': 'id',
                    'Reference': 'Reference',
                    'Date': 'Date',
                    'Category': 'Category',
                    'Description': 'Description',
                    'Initial amount': 'Initial amount',
                    'Final amount': 'Final amount',
                    'ExchangeRate': 'ExchangeRate'
                }
            ];
            for (i = 0; i < data.length; i++) {
                if (data[i].draft == 0) {
                    this.dataline = {
                        'id': data[i].id,
                        'Reference': data[i].reference,
                        'Date': data[i].date,
                        'Category': data[i].category.name,
                        'Description': data[i].description,
                        'Initial amount': data[i].amount_ini + data[i].currency.code,
                        'Final amount': data[i].amount_final,
                        'ExchangeRate': data[i].exchangeRate.value
                    };
                    this.dataToImport.push(this.dataline);
                }
            }
            this.angular5csv = new Angular5Csv(this.dataToImport, 'Expense report: ' + this.requester + ' ' + Date());
        });
    }

    deleteExpenseReport(id) {
        this.expenseReportService.deleteExpenseReport(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.expenseReports = this.expenseReportService.getExpenseReportList();
                },
                error => console.log(error));
    }

    deleteExpenseReports() {
        this.expenseReportService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.expenseReports = this.expenseReportService.getExpenseReportList();
        this.sourceTeams = this.sourceTeamService.getSourceTeamList();
        this.approverTeams = this.approverTeamService.getApproverTeamList();
    }
}
