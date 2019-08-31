import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ApproverTeamService} from '../../../shared/services/approverTeam/approver-team.service';
import {Observable} from 'rxjs';
import {Approver} from '../../../shared/models/approver';
import {ApproverService} from '../../../shared/services/approver/approver.service';
import {Team} from '../../../shared/models/team';
import {TeamService} from '../../../shared/services/team/team.service';
import {Employee} from '../../../shared/models/employee';
import {EmployeeService} from '../../../shared/services/employee/employee.service';

@Component({
    selector: 'app-update-approver-team',
    templateUrl: './update-approver-team.component.html',
    styleUrls: ['./update-approver-team.component.scss']
})
export class UpdateApproverTeamComponent implements OnInit {
    approverTeamForm: FormGroup;
    approvers: Observable<Approver[]>;
    employees: Observable<Employee[]>;
    teams: Observable<Team[]>;
    @Input() approver: Approver;
    @Input() employee: Employee;
    @Input() team: Team;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private approverService: ApproverService, private employeeService: EmployeeService, private teamService: TeamService, private approverTeamService: ApproverTeamService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getApproverTeam(this.route.snapshot.params['id']);
        this.approverTeamForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'approver' : [null, Validators.required],
            'team' : [null, Validators.required]
        });
        this.reloadData();
    }

    getApproverTeam(id) {
        this.approverTeamService.getApproverTeamById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.approverTeamForm.setValue({
                    id: data[0].id,
                    approver: data[0].approver,
                    team: data[0].team,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.approverTeamService.updateApproverTeam(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'ApproverTeam updated!';
                    this.alertcolor = 'alert-success';
                },
                error => alert('Already assigned !'));
        this.alertmsg = 'Error occurred!';
        this.alertcolor = 'alert-warning';
    }

    closeAlert() {
        this.submitted = false;
    }

    reloadData() {
        this.approvers = this.approverService.getApproverList();
        this.employees = this.employeeService.getEmployeeList();
        this.teams = this.teamService.getTeamList();
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
