import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';

const routes: Routes = [
    {
        path: '', component: EmployeeComponent
    },
    {
        path: 'addEmployee', component: AddEmployeeComponent
    },
    {
        path: 'updateEmployee/:id', component: UpdateEmployeeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule {
}
