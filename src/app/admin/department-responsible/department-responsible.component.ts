import {Component, Input, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs';
import {DepartmentResponsible} from '../../shared/models/departmentResponsible';
import {DepartmentResponsibleService} from '../../shared/services/departmentResponsible/department-responsible.service';

@Component({
    selector: 'app-department-responsible',
    templateUrl: './department-responsible.component.html',
    styleUrls: ['./department-responsible.component.scss'],
    animations: [routerTransition()]
})
export class DepartmentResponsibleComponent implements OnInit {

    id: number;
    departmentResponsibles: Observable<DepartmentResponsible[]>;
    @Input() departmentResponsible: DepartmentResponsible;

    constructor(private departmentResponsibleService: DepartmentResponsibleService) { }

    ngOnInit() {
        this.reloadData();
    }

    deleteDepartmentResponsible(id) {
        this.departmentResponsibleService.deleteDepartmentResponsible(id)
            .subscribe(
                data => {
                    console.log(data);
                    this.departmentResponsibles = this.departmentResponsibleService.getDepartmentResponsibleList();
                },
                error => console.log(error));
    }

    deleteDepartmentResponsibles() {
        this.departmentResponsibleService.deleteAll()
            .subscribe(
                data => {
                    console.log(data);
                    this.reloadData();
                },
                error => console.log('ERROR: ' + error));
    }

    reloadData() {
        this.departmentResponsibles = this.departmentResponsibleService.getDepartmentResponsibleList();
    }
}
