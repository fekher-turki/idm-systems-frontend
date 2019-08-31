import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamComponent} from './team.component';
import {AddTeamComponent} from './add-team/add-team.component';
import {UpdateTeamComponent} from './update-team/update-team.component';

const routes: Routes = [
    {
        path: '', component: TeamComponent
    },
    {
        path: 'addTeam', component: AddTeamComponent
    },
    {
        path: 'updateTeam/:id', component: UpdateTeamComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeamRoutingModule { }
