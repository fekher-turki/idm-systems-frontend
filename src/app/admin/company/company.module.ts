import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CompanyComponent} from './company.component';
import {AddCompanyComponent} from './add-company/add-company.component';
import {UpdateCompanyComponent} from './update-company/update-company.component';
import {CompanyRoutingModule } from './company-routing.module';
import {PageHeaderModule} from './../../shared';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [CompanyComponent, AddCompanyComponent, UpdateCompanyComponent],
    imports: [
        CommonModule,
        CompanyRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class CompanyModule { }
