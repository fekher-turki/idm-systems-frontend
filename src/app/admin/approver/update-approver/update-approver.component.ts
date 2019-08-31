import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ApproverService} from '../../../shared/services/approver/approver.service';
import {Observable} from 'rxjs';
import {Employee} from '../../../shared/models/employee';
import {EmployeeService} from '../../../shared/services/employee/employee.service';

@Component({
    selector: 'app-update-approver',
    templateUrl: './update-approver.component.html',
    styleUrls: ['./update-approver.component.scss']
})
export class UpdateApproverComponent implements OnInit {
    approverForm: FormGroup;
    employees: Observable<Employee[]>;
    @Input() employee: Employee;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private employeeService: EmployeeService, private approverService: ApproverService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getApprover(this.route.snapshot.params['id']);
        this.approverForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'employee' : [null, Validators.required],
        });
        this.reloadData();
    }

    getApprover(id) {
        this.approverService.getApproverById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.approverForm.setValue({
                    id: data[0].id,
                    employee: data[0].employee
                });
            });
    }

    onSubmit(form: NgForm) {
        this.approverService.updateApprover(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'Approver updated!';
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
        this.employees = this.employeeService.getEmployeeList();
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
