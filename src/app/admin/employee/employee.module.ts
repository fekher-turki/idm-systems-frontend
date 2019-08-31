import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from './employee.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [EmployeeComponent, AddEmployeeComponent, UpdateEmployeeComponent]
})
export class EmployeeModule {}
