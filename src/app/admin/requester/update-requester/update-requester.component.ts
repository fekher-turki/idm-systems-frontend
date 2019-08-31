import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RequesterService} from '../../../shared/services/requester/requester.service';
import {Observable} from 'rxjs';
import {Employee} from '../../../shared/models/employee';
import {EmployeeService} from '../../../shared/services/employee/employee.service';

@Component({
    selector: 'app-update-requester',
    templateUrl: './update-requester.component.html',
    styleUrls: ['./update-requester.component.scss']
})
export class UpdateRequesterComponent implements OnInit {
    requesterForm: FormGroup;
    employees: Observable<Employee[]>;
    @Input() employee: Employee;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private employeeService: EmployeeService, private requesterService: RequesterService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getRequester(this.route.snapshot.params['id']);
        this.requesterForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'employee' : [null, Validators.required],
        });
        this.reloadData();
    }

    getRequester(id) {
        this.requesterService.getRequesterById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.requesterForm.setValue({
                    id: data[0].id,
                    employee: data[0].employee
                });
            });
    }

    onSubmit(form: NgForm) {
        this.requesterService.updateRequester(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'Requester updated!';
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
        this.employees = this.employeeService.getEmployeeList();
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
