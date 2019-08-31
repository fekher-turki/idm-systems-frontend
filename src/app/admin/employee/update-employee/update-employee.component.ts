import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../../shared/services/employee/employee.service';
import {Observable} from 'rxjs';
import {Employee} from '../../../shared/models/employee';
import {Department} from '../../../shared/models/department';
import {Country} from '../../../shared/models/country';
import {DepartmentService} from '../../../shared/services/department/department.service';
import {CountryService} from '../../../shared/services/country/country.service';
@Component({
    selector: 'app-update-employee',
    templateUrl: './update-employee.component.html',
    styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
    employeeForm: FormGroup;
    responsibles: Observable<Employee[]>;
    @Input() responsible: Employee;
    departments: Observable<Department[]>;
    @Input() department: Department;
    countries: Observable<Country[]>;
    @Input() country: Country;
    _id: number = null;
    submitted = false;
    alertmsg: string;
    alertcolor: string;

    // tslint:disable-next-line:max-line-length
    constructor( private departmentService: DepartmentService, private countryService: CountryService, private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getEmployee(this.route.snapshot.params['id']);
        this.employeeForm = this.formBuilder.group({
            'id' : [null, Validators.required],
            'personal_number' : [null, Validators.required],
            'first_name' : [null, Validators.required],
            'last_name' : [null, Validators.required],
            'tel_number' : [null, Validators.required],
            'internal_number' : [null, Validators.required],
            'email' : [null, Validators.required],
            'department' : [null, Validators.required],
            'responsible' : [null, Validators.required],
            'birthday' : [null, Validators.required],
            'gender' : [null, Validators.required],
            'driver_license' : [null, Validators.required],
            'position' : [null, Validators.required],
            'title' : [null, Validators.required],
            'authorized_approver' : [null, Validators.required],
            'address1' : [null, Validators.required],
            'address2' : [null, Validators.required],
            'zip_code' : [null, Validators.required],
            'city' : [null, Validators.required],
            'country' : [null, Validators.required],
        });
        this.reloadData();
    }

    getEmployee(id) {
        this.employeeService.getEmployeeById(id)
            .subscribe(data => {
                this._id = data[0].id;
                this.employeeForm.setValue({
                    id: data[0].id,
                    personal_number: data[0].personal_number,
                    first_name: data[0].first_name,
                    last_name: data[0].last_name,
                    tel_number: data[0].tel_number,
                    internal_number: data[0].internal_number,
                    email: data[0].email,
                    department: data[0].department,
                    responsible: data[0].responsible,
                    birthday: data[0].birthday,
                    gender: data[0].gender,
                    driver_license: data[0].driver_license,
                    position: data[0].position,
                    title: data[0].title,
                    authorized_approver: data[0].authorized_approver,
                    address1: data[0].address1,
                    address2: data[0].address2,
                    zip_code: data[0].zip_code,
                    city: data[0].city,
                    country: data[0].country,
                });
            });
    }

    onSubmit(form: NgForm) {
        this.employeeService.updateEmployee(this._id, form)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                    this.alertmsg = 'Employee updated!';
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
        this.countries = this.countryService.getCountryList();
        this.responsibles = this.employeeService.getEmployeeList();
        this.departments = this.departmentService.getDepartmentList();
    }

    compareFn(c1: any, c2: any): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
}
