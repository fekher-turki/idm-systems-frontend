import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApproverTeamComponent} from './approver-team.component';
import {AddApproverTeamComponent} from './add-approver-team/add-approver-team.component';
import {UpdateApproverTeamComponent} from './update-approver-team/update-approver-team.component';

const routes: Routes = [
    {
        path: '', component: ApproverTeamComponent
    },
    {
        path: 'addApproverTeam', component: AddApproverTeamComponent
    },
    {
        path: 'updateApproverTeam/:id', component: UpdateApproverTeamComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApproverTeamRoutingModule { }
