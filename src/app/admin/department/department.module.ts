import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DepartmentComponent} from './department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [DepartmentComponent, AddDepartmentComponent, UpdateDepartmentComponent],
    imports: [
        CommonModule,
        DepartmentRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class DepartmentModule { }
