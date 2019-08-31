import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentResponsibleComponent} from './department-responsible.component';
import {AddDepartmentResponsibleComponent} from './add-department-responsible/add-department-responsible.component';
import {UpdateDepartmentResponsibleComponent} from './update-department-responsible/update-department-responsible.component';

const routes: Routes = [
    {
        path: '', component: DepartmentResponsibleComponent
    },
    {
        path: 'addDepartmentResponsible', component: AddDepartmentResponsibleComponent
    },
    {
        path: 'updateDepartmentResponsible/:id', component: UpdateDepartmentResponsibleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentResponsibleRoutingModule { }
