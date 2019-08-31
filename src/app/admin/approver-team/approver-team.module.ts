import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApproverTeamRoutingModule } from './approver-team-routing.module';
import {PageHeaderModule} from '../../shared/modules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApproverTeamComponent} from './approver-team.component';
import {AddApproverTeamComponent} from './add-approver-team/add-approver-team.component';
import {UpdateApproverTeamComponent} from './update-approver-team/update-approver-team.component';

@NgModule({
    declarations: [ApproverTeamComponent, AddApproverTeamComponent, UpdateApproverTeamComponent],
    imports: [CommonModule,
        ApproverTeamRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule]
})
export class ApproverTeamModule { }
