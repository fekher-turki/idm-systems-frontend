import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ExpenseReportService} from '../../../shared/services/expenseReport/expense-report.service';
import {Observable} from 'rxjs';
import {RequesterTeam} from '../../../shared/models/requesterTeam';
import {Requester} from '../../../shared/models/requester';
import {Employee} from '../../../shared/models/employee';
import {RequesterTeamService} from '../../../shared/services/requesterTeam/requester-team.service';
import {RequesterService} from '../../../shared/services/requester/requester.service';
import {EmployeeService} from '../../../shared/services/employee/employee.service';
import {RuleService} from '../../../shared/services/rule/rule.service';
import {Rule} from '../../../shared/models/rule';
import {SourceTeam} from '../../../shared/models/sourceTeam';
import {SourceTeamService} from '../../../shared/services/sourceTeam/source-team.service';

@Component({
    selector: 'app-update-expense-report',
    templateUrl: './update-expense-report.component.html',
    styleUrls: ['./update-expense-report.component.scss']
})
export class UpdateExpenseReportComponent implements OnInit {
    expenseReportForm: FormGroup;
    requesterTeams: Observable<RequesterTeam[]>;
    @Input() requesterTeam: RequesterTeam;
    requesters: Observable<Requester[]>;
    @Input() requester: Requester;
    employees: Observable<Employee[]>;
    @Input() employee: Employee;
    rules: Observable<Rule[]>;
    @Input() rule: Rule;
    sourceTeams: Observable<SourceTeam[]>;
    @Input() sourceTeam: SourceTeam;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    constructor(private expenseReportService: ExpenseReportService, private requesterTeamService: RequesterTeamService,
                private requesterService: RequesterService, private employeeService: EmployeeService,
                private ruleService: RuleService, private router: Router,
                private route: ActivatedRoute, private formBuilder: FormBuilder, private sourceTeamService: SourceTeamService) { }

    ngOnInit() {
        this.getExpenseReport(this.route.snapshot.params['id']);
        this.expenseReportForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'reference' : [null, Validators.required],
            'requesterTeam' : [null, Validators.required],
            'date_start' : [null, Validators.required],
            'date_end' : [null, Validators.required],
            'rule' : [null, Validators.required],
            'sourceTeam' : [null, Validators.required],
        });
        this.reloadData();
    }

    getExpenseReport(id) {
        this.expenseReportService.getExpenseReportById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.expenseReportForm.setValue({
                    id: data[0].id,
                    reference: data[0].reference,
                    requesterTeam: data[0].requesterTeam,
                    date_start: data[0].date_start,
                    date_end: data[0].date_end,
                    rule: data[0].rule,
                    sourceTeam: data[0].sourceTeam,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.expenseReportService.updateExpenseReport(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'ExpenseReport updated!';
                    this.alertcolor = 'alert-success';
                },
                error => alert('Check your data !'));
        this.alertmsg = 'Error occurred!';
        this.alertcolor = 'alert-warning';
    }

    closeAlert() {
        this.submitted = false;
    }

    reloadData() {
        this.requesterTeams = this.requesterTeamService.getRequesterTeamList();
        this.requesters = this.requesterService.getRequesterList();
        this.employees = this.employeeService.getEmployeeList();
        this.rules = this.ruleService.getRuleList();
        this.sourceTeams = this.sourceTeamService.getSourceTeamList();
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
