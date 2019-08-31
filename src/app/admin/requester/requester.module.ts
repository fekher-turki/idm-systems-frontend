import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequesterRoutingModule } from './requester-routing.module';
import {PageHeaderModule} from '../../shared/modules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RequesterComponent} from './requester.component';
import {AddRequesterComponent} from './add-requester/add-requester.component';
import {UpdateRequesterComponent} from './update-requester/update-requester.component';

@NgModule({
    declarations: [RequesterComponent, AddRequesterComponent, UpdateRequesterComponent],
    imports: [CommonModule,
        RequesterRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule]
})
export class RequesterModule { }
