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
    selector: 'app-detail-expense-report',
    templateUrl: './detail-expense-report.component.html',
    styleUrls: ['./detail-expense-report.component.scss'],
    animations: [routerTransition()]
})
export class DetailExpenseReportComponent implements OnInit {

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
                if (data[i].draft == 0 && data[i].status == 1) {
                    this.total += data[i].amount_final;
                }
            }
        });
        return this.total;
    }

    reloadData() {
        this.expenseReports = this.expenseReportService.getExpenseReportById(this.route.snapshot.params['id']);
        this.expenses = this.expenseService.getExpenseByExpenseReportId(this.route.snapshot.params['id']);
        this.sourceTeams = this.sourceTeamService.getSourceTeamList();
        this.approverTeams = this.approverTeamService.getApproverTeamList();
    }
}
