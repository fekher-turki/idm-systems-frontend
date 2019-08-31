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
import {ApproverService} from '../../../shared/services/approver/approver.service';
import {Approver} from '../../../shared/models/approver';
import {ExpenseStatusService} from '../../../shared/services/expenseStatus/expense-status.service';
import {ExpenseStatus} from '../../../shared/models/expenseStatus';

@Component({
    selector: 'app-moderator-detail-expense-report',
    templateUrl: './moderator-detail-expense-report.component.html',
    styleUrls: ['./moderator-detail-expense-report.component.scss'],
    animations: [routerTransition()]
})
export class DetailExpenseReportComponent implements OnInit {

    user = localStorage.getItem('username');
    id: number;
    expenseReports: Observable<ExpenseReport[]>;
    expenses: Observable<Expense[]>;
    sourceTeams: Observable<SourceTeam[]>;
    approverTeams: Observable<ApproverTeam[]>;
    expenseStatuses: Observable<ExpenseStatus[]>;
    @Input() expenseReport: ExpenseReport;
    @Input() expenseStatus: ExpenseStatus;
    @Input() approver: Approver;
    @Input() expense: Expense;
    @Input() sourceTeam: SourceTeam;
    @Input() approverTeam: ApproverTeam;
    expenseStatus_ = {};
    total: number;
    approvers: number;
    statuses: number;

    // tslint:disable-next-line:max-line-length
    constructor(private expenseReportService: ExpenseReportService, private expenseService: ExpenseService, private sourceTeamService: SourceTeamService, private approverTeamService: ApproverTeamService, private approverService: ApproverService, private expenseStatusService: ExpenseStatusService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.reloadData();
        this.getData();
        this.count();
    }

    getData() {
        this.expenseService.getModExpenseByExpenseReportId(this.route.snapshot.params['id'], this.user).subscribe(data => {
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

    count() {
        this.expenseReportService.countApprovers(this.route.snapshot.params['id']).subscribe( data => {
            this.approvers = data;
        });
        return this.approvers;
    }

    approve(expense_) {
        this.approverService.getApproverByUser(parseInt(this.user, 10)).subscribe(res => {
            this.expenseStatus_['approver'] = res[0];
            this.expenseStatus_['expense'] = expense_;
            this.expenseStatus_['status'] = 1;
            if (this.expenseStatus_) {
                this.expenseStatusService.createExpenseStatus(this.expenseStatus_)
                    .subscribe(
                        req => {
                            console.log(req);
                            location.reload();
                        },
                        error => {
                            console.log(error);
                            alert('You have already decided !');
                        });
            }
        });
    }

    decline(expense_) {
        this.approverService.getApproverByUser(parseInt(this.user, 10)).subscribe(res => {
            this.expenseStatus_['approver'] = res[0];
            this.expenseStatus_['expense'] = expense_;
            this.expenseStatus_['status'] = 0;
            if (this.expenseStatus_) {
                this.expenseStatusService.createExpenseStatus(this.expenseStatus_)
                    .subscribe(
                        req => {
                            console.log(req);
                            location.reload();
                        },
                        error => {
                            console.log(error);
                            alert('You have already decided !');
                        });
            }
        });
    }

    reloadData() {
        this.expenseReports = this.expenseReportService.getModExpenseReportById(this.route.snapshot.params['id'], this.user);
        this.expenses = this.expenseService.getModExpenseByExpenseReportId(this.route.snapshot.params['id'], this.user);
        this.sourceTeams = this.sourceTeamService.getSourceTeamList();
        this.approverTeams = this.approverTeamService.getApproverTeamList();
        this.expenseStatuses = this.expenseStatusService.getExpenseStatusList();
    }
}
