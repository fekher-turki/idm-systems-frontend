import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TeamComponent} from './team.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { TeamRoutingModule } from './team-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [TeamComponent, AddTeamComponent, UpdateTeamComponent],
    imports: [
        CommonModule,
        TeamRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class TeamModule { }
