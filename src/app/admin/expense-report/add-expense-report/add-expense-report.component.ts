import {Component, Input, OnInit} from '@angular/core';
import {ExpenseReport} from '../../../shared/models/expenseReport';
import {ExpenseReportService} from '../../../shared/services/expenseReport/expense-report.service';
import {Observable} from 'rxjs';
import {RequesterTeam} from '../../../shared/models/requesterTeam';
import {RequesterTeamService} from '../../../shared/services/requesterTeam/requester-team.service';
import {Router} from '@angular/router';
import {Requester} from '../../../shared/models/requester';
import {RequesterService} from '../../../shared/services/requester/requester.service';
import {Employee} from '../../../shared/models/employee';
import {EmployeeService} from '../../../shared/services/employee/employee.service';
import {Rule} from '../../../shared/models/rule';
import {RuleService} from '../../../shared/services/rule/rule.service';
import {SourceTeam} from '../../../shared/models/sourceTeam';
import {SourceTeamService} from '../../../shared/services/sourceTeam/source-team.service';

@Component({
    selector: 'app-add-expense-report',
    templateUrl: './add-expense-report.component.html',
    styleUrls: ['./add-expense-report.component.scss']
})
export class AddExpenseReportComponent implements OnInit {

    expenseReport: ExpenseReport = new ExpenseReport();
    id: number;
    requesterTeams: Observable<RequesterTeam[]>;
    @Input() requesterTeam: RequesterTeam;
    requesters: Observable<Requester[]>;
    @Input() requester: Requester;
    employees: Observable<Employee[]>;
    @Input() employee: Employee;
    rules: Observable<Rule[]>;
    @Input() rule: Rule
    sourceTeams: Observable<SourceTeam[]>;
    @Input() sourceTeam: SourceTeam;
    submitted = false;

    constructor(private router: Router, private expenseReportService: ExpenseReportService,
                private requesterTeamService: RequesterTeamService, private requesterService: RequesterService,
                private employeeService: EmployeeService, private ruleService: RuleService,
                private sourceTeamService: SourceTeamService) { }

    ngOnInit() {
        this.reloadData();
    }
    newExpenseReport(): void {
        this.submitted = false;
        this.expenseReport = new ExpenseReport();
    }
    save() {
        this.expenseReportService.createExpenseReport(this.expenseReport)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => alert('Check your data !'));
        this.expenseReport = new ExpenseReport();
    }

    onSubmit() {
        this.save();
    }

    reloadData() {
        this.requesterTeams = this.requesterTeamService.getRequesterTeamList();
        this.requesters = this.requesterService.getRequesterList();
        this.employees = this.employeeService.getEmployeeList();
        this.rules = this.ruleService.getRuleList();
        this.sourceTeams = this.sourceTeamService.getSourceTeamList();
    }
}
