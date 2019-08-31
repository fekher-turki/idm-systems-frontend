import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentComponent} from './department.component';
import {AddDepartmentComponent} from './add-department/add-department.component';
import {UpdateDepartmentComponent} from './update-department/update-department.component';

const routes: Routes = [
    {
        path: '', component: DepartmentComponent
    },
    {
        path: 'addDepartment', component: AddDepartmentComponent
    },
    {
        path: 'updateDepartment/:id', component: UpdateDepartmentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentRoutingModule { }
