import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApproverRoutingModule } from './approver-routing.module';
import {PageHeaderModule} from '../../shared/modules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApproverComponent} from './approver.component';
import {AddApproverComponent} from './add-approver/add-approver.component';
import {UpdateApproverComponent} from './update-approver/update-approver.component';

@NgModule({
    declarations: [ApproverComponent, AddApproverComponent, UpdateApproverComponent],
    imports: [CommonModule,
        ApproverRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule]
})
export class ApproverModule { }
