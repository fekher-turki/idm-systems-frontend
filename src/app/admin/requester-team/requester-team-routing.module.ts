import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequesterTeamComponent} from './requester-team.component';
import {AddRequesterTeamComponent} from './add-requester-team/add-requester-team.component';
import {UpdateRequesterTeamComponent} from './update-requester-team/update-requester-team.component';

const routes: Routes = [
    {
        path: '', component: RequesterTeamComponent
    },
    {
        path: 'addRequesterTeam', component: AddRequesterTeamComponent
    },
    {
        path: 'updateRequesterTeam/:id', component: UpdateRequesterTeamComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RequesterTeamRoutingModule { }
