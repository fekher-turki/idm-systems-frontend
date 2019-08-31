import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../shared/models/employee';
import {EmployeeService} from '../../../shared/services/employee/employee.service';
import {Observable} from 'rxjs';
import {Country} from '../../../shared/models/country';
import {CountryService} from '../../../shared/services/country/country.service';
import {Router} from '@angular/router';
import {Department} from '../../../shared/models/department';
import {DepartmentService} from '../../../shared/services/department/department.service';
import {User} from '../../../shared/models/user';
import {RegisterService} from '../../../shared/services/register/register.service';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

    employee: Employee = new Employee();
    id: number;
    responsibles: Observable<Employee[]>;
    @Input() responsible: Employee;
    employees: Observable<Employee[]>;
    departments: Observable<Department[]>;
    @Input() department: Department;
    countries: Observable<Country[]>;
    @Input() country: Country;
    users: Observable<User[]>;
    @Input() user: User;
    submitted = false;

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private registerService: RegisterService, private countryService: CountryService, private employeeService: EmployeeService, private departmentService: DepartmentService) { }

    ngOnInit() {
        this.reloadData();
    }
    newEmployee(): void {
        this.submitted = false;
        this.employee = new Employee();
    }
    save() {
        this.employeeService.createEmployee(this.employee)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => alert('Check your data !'));
        this.employee = new Employee();
    }

    onSubmit() {
        this.save();
    }

    reloadData() {
        this.countries = this.countryService.getCountryList();
        this.responsibles = this.employeeService.getEmployeeList();
        this.employees = this.employeeService.getEmployeeList();
        this.departments = this.departmentService.getDepartmentList();
        this.users = this.registerService.getRegisterByType(3);
    }

    addUser() {
        this.router.navigate(['admin/registers/addRegister']);
    }
}
