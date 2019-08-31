import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {DepartmentService} from '../../shared/services/department/department.service';
import {Department} from '../../shared/models/department';

@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.scss'],
    animations: [routerTransition()]
})
export class DepartmentComponent implements OnInit {

    id: number;
    departments: Observable<Department[]>;
    @Input() department: Department;

    constructor(private departmentService: DepartmentService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteDepartment(id) {
        this.departmentService.deleteDepartment(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.departments = this.departmentService.getDepartmentList();
                },
                error => console.log(error));
    }

    deleteDepartments() {
        this.departmentService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.departments = this.departmentService.getDepartmentList();
    }
}
