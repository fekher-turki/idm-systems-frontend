import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ClientTypeComponent} from './client-type.component';
import { AddClientTypeComponent } from './add-client-type/add-client-type.component';
import { UpdateClientTypeComponent } from './update-client-type/update-client-type.component';
import { ClientTypeRoutingModule } from './client-type-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [ClientTypeComponent, AddClientTypeComponent, UpdateClientTypeComponent],
    imports: [
        CommonModule,
        ClientTypeRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ClientTypeModule { }
