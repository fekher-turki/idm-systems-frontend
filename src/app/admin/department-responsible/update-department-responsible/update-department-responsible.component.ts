import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DepartmentResponsibleService} from '../../../shared/services/departmentResponsible/department-responsible.service';
import {Observable} from 'rxjs';
import {Employee} from '../../../shared/models/employee';
import {EmployeeService} from '../../../shared/services/employee/employee.service';
import {Department} from '../../../shared/models/department';
import {DepartmentService} from '../../../shared/services/department/department.service';

@Component({
    selector: 'app-update-department-responsible',
    templateUrl: './update-department-responsible.component.html',
    styleUrls: ['./update-department-responsible.component.scss']
})
export class UpdateDepartmentResponsibleComponent implements OnInit {
    departmentResponsibleForm: FormGroup;
    employees: Observable<Employee[]>;
    departments: Observable<Department[]>;
    @Input() employee: Employee;
    @Input() department: Department;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor(private employeeService: EmployeeService, private departmentService: DepartmentService, private departmentResponsibleService: DepartmentResponsibleService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getDepartmentResponsible(this.route.snapshot.params['id']);
        this.departmentResponsibleForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'employee' : [null, Validators.required],
            'department' : [null, Validators.required]
        });
        this.reloadData();
    }

    getDepartmentResponsible(id) {
        this.departmentResponsibleService.getDepartmentResponsibleById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.departmentResponsibleForm.setValue({
                    id: data[0].id,
                    employee: data[0].employee,
                    department: data[0].department,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.departmentResponsibleService.updateDepartmentResponsible(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'DepartmentResponsible updated!';
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
        this.departments = this.departmentService.getDepartmentList();
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
