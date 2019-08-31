import {Component, Input, OnInit} from '@angular/core';
import {DepartmentResponsible} from '../../../shared/models/departmentResponsible';
import {DepartmentResponsibleService} from '../../../shared/services/departmentResponsible/department-responsible.service';
import {Observable} from 'rxjs';
import {Department} from '../../../shared/models/department';
import {DepartmentService} from '../../../shared/services/department/department.service';
import {Employee} from '../../../shared/models/employee';
import {EmployeeService} from '../../../shared/services/employee/employee.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-department-responsible',
    templateUrl: './add-department-responsible.component.html',
    styleUrls: ['./add-department-responsible.component.scss']
})
export class AddDepartmentResponsibleComponent implements OnInit {

    departmentResponsible: DepartmentResponsible = new DepartmentResponsible();
    id: number;
    departments: Observable<Department[]>;
    responsibles: Observable<Employee[]>;
    @Input() department: Department;
    @Input() responsible: Employee;
    submitted = false;

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private departmentResponsibleService: DepartmentResponsibleService, private departmentService: DepartmentService, private employeeService: EmployeeService) { }

    ngOnInit() {
        this.reloadData();
    }
    newDepartmentResponsible(): void {
        this.submitted = false;
        this.departmentResponsible = new DepartmentResponsible();
    }
    save() {
        this.departmentResponsibleService.createDepartmentResponsible(this.departmentResponsible)
            .subscribe(
                data => {
                    console.log(data);
                    this.submitted = true;
                },
                error => alert('Already assigned !'));
        this.departmentResponsible = new DepartmentResponsible();
    }

    onSubmit() {
        this.save();
    }

    reloadData() {
        this.departments = this.departmentService.getDepartmentList();
        this.responsibles = this.employeeService.getEmployeeList();
    }
}
