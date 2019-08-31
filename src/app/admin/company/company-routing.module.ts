import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyComponent} from './company.component';
import {AddCompanyComponent} from './add-company/add-company.component';
import {UpdateCompanyComponent} from './update-company/update-company.component';

const routes: Routes = [
    {
        path: '', component: CompanyComponent
    },
    {
        path: 'addCompany', component: AddCompanyComponent
    },
    {
        path: 'updateCompany/:id', component: UpdateCompanyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule { }
