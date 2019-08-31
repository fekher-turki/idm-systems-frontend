import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequesterTeamRoutingModule } from './requester-team-routing.module';
import {PageHeaderModule} from '../../shared/modules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RequesterTeamComponent} from './requester-team.component';
import {AddRequesterTeamComponent} from './add-requester-team/add-requester-team.component';
import {UpdateRequesterTeamComponent} from './update-requester-team/update-requester-team.component';

@NgModule({
    declarations: [RequesterTeamComponent, AddRequesterTeamComponent, UpdateRequesterTeamComponent],
    imports: [CommonModule,
        RequesterTeamRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule]
})
export class RequesterTeamModule { }
