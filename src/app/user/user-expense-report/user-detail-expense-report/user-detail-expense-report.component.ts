import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../../router.animations';
import {Observable} from 'rxjs';
import {ExpenseReportService} from '../../../shared/services/expenseReport/expense-report.service';
import {ExpenseReport} from '../../../shared/models/expenseReport';
import {SourceTeam} from '../../../shared/models/sourceTeam';
import {ApproverTeam} from '../../../shared/models/approverTeam';
import {SourceTeamService} from '../../../shared/services/sourceTeam/source-team.service';
import {ApproverTeamService} from '../../../shared/services/approverTeam/approver-team.service';
import {ActivatedRoute} from '@angular/router';
import {ExpenseService} from '../../../shared/services/expense/expense.service';
import {Expense} from '../../../shared/models/expense';

@Component({
    selector: 'app-user-detail-expense-report',
    templateUrl: './user-detail-expense-report.component.html',
    styleUrls: ['./user-detail-expense-report.component.scss'],
    animations: [routerTransition()]
})
export class DetailExpenseReportComponent implements OnInit {

    user = localStorage.getItem('username');
    id: number;
    expenseReports: Observable<ExpenseReport[]>;
    expenses: Observable<Expense[]>;
    sourceTeams: Observable<SourceTeam[]>;
    approverTeams: Observable<ApproverTeam[]>;
    @Input() expenseReport: ExpenseReport;
    @Input() expense: Expense;
    @Input() sourceTeam: SourceTeam;
    @Input() approverTeam: ApproverTeam;
    total: number;
    baseUrl = 'http://localhost:8000';

    // tslint:disable-next-line:max-line-length
    constructor(private expenseReportService: ExpenseReportService, private expenseService: ExpenseService, private sourceTeamService: SourceTeamService, private approverTeamService: ApproverTeamService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.reloadData();
        this.getData();
    }

    getData() {
        this.expenseService.getExpenseByExpenseReportId(this.route.snapshot.params['id']).subscribe(data => {
            let i;
            this.total = 0.00;
            for (i = 0; i < data.length; i++) {
                if (data[i].draft == 0) {
                    this.total += data[i].amount_final;
                }
            }
        });
        return this.total;
    }

    reloadData() {
        this.expenseReports = this.expenseReportService.getUserExpenseReportById(this.route.snapshot.params['id'], this.user);
        this.expenses = this.expenseService.getExpenseByExpenseReportId(this.route.snapshot.params['id']);
        this.sourceTeams = this.sourceTeamService.getSourceTeamList();
        this.approverTeams = this.approverTeamService.getApproverTeamList();
    }
}
