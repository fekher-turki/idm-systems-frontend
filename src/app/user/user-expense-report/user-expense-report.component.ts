import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {ExpenseReportService} from '../../shared/services/expenseReport/expense-report.service';
import {ExpenseReport} from '../../shared/models/expenseReport';
import {SourceTeamService} from '../../shared/services/sourceTeam/source-team.service';
import {SourceTeam} from '../../shared/models/sourceTeam';
import {ApproverTeamService} from '../../shared/services/approverTeam/approver-team.service';
import {ApproverTeam} from '../../shared/models/approverTeam';

@Component({
    selector: 'app-user-expense-report',
    templateUrl: './user-expense-report.component.html',
    styleUrls: ['./user-expense-report.component.scss'],
    animations: [routerTransition()]
})
export class ExpenseReportComponent implements OnInit {

    user = localStorage.getItem('username');
    id: number;
    expenseReports: Observable<ExpenseReport[]>;
    @Input() expenseReport: ExpenseReport;
    sourceTeams: Observable<SourceTeam[]>;
    @Input() sourceTeam: SourceTeam;
    approverTeams: Observable<ApproverTeam[]>;
    @Input() approverTeam: ApproverTeam;

    // tslint:disable-next-line:max-line-length
    constructor(private expenseReportService: ExpenseReportService, private sourceTeamService: SourceTeamService, private approverTeamService: ApproverTeamService) { }

    ngOnInit() {
        this.reloadData();
    }

    reloadData() {
        this.expenseReports = this.expenseReportService.getUserExpenseReportList(this.user);
        this.sourceTeams = this.sourceTeamService.getSourceTeamList();
        this.approverTeams = this.approverTeamService.getApproverTeamList();
    }
}
