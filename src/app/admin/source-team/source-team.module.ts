import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SourceTeamRoutingModule } from './source-team-routing.module';
import {PageHeaderModule} from '../../shared/modules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SourceTeamComponent} from './source-team.component';
import {AddSourceTeamComponent} from './add-source-team/add-source-team.component';
import {UpdateSourceTeamComponent} from './update-source-team/update-source-team.component';

@NgModule({
    declarations: [SourceTeamComponent, AddSourceTeamComponent, UpdateSourceTeamComponent],
    imports: [CommonModule,
        SourceTeamRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule]
})
export class SourceTeamModule { }
