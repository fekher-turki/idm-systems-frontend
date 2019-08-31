import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {EmployeeService} from '../../shared/services/employee/employee.service';
import {Employee} from '../../shared/models/employee';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss'],
    animations: [routerTransition()]
})
export class EmployeeComponent implements OnInit {

    id: number;
    employees: Observable<Employee[]>;
    responsibles: Observable<Employee[]>;
    @Input() employee: Employee;
    @Input() responsible: Employee;

    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteEmployee(id) {
        this.employeeService.deleteEmployee(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.employees = this.employeeService.getEmployeeList();
                },
                error => console.log(error));
    }

    deleteEmployees() {
        this.employeeService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.employees = this.employeeService.getEmployeeList();
        this.responsibles = this.employeeService.getEmployeeList();
    }
}
