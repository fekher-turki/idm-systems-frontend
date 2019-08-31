import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SourceTeamComponent} from './source-team.component';
import {AddSourceTeamComponent} from './add-source-team/add-source-team.component';
import {UpdateSourceTeamComponent} from './update-source-team/update-source-team.component';

const routes: Routes = [
    {
        path: '', component: SourceTeamComponent
    },
    {
        path: 'addSourceTeam', component: AddSourceTeamComponent
    },
    {
        path: 'updateSourceTeam/:id', component: UpdateSourceTeamComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SourceTeamRoutingModule { }
