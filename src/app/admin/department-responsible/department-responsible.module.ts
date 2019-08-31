import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DepartmentResponsibleComponent} from './department-responsible.component';
import { AddDepartmentResponsibleComponent } from './add-department-responsible/add-department-responsible.component';
import { UpdateDepartmentResponsibleComponent } from './update-department-responsible/update-department-responsible.component';
import { DepartmentResponsibleRoutingModule } from './department-responsible-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [DepartmentResponsibleComponent, AddDepartmentResponsibleComponent, UpdateDepartmentResponsibleComponent],
    imports: [
        CommonModule,
        DepartmentResponsibleRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class DepartmentResponsibleModule { }
