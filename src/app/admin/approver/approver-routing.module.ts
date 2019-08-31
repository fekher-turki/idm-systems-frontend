import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApproverComponent} from './approver.component';
import {AddApproverComponent} from './add-approver/add-approver.component';
import {UpdateApproverComponent} from './update-approver/update-approver.component';

const routes: Routes = [
    {
        path: '', component: ApproverComponent
    },
    {
        path: 'addApprover', component: AddApproverComponent
    },
    {
        path: 'updateApprover/:id', component: UpdateApproverComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApproverRoutingModule { }
