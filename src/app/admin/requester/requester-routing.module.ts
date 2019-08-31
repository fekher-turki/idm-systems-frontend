import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequesterComponent} from './requester.component';
import {AddRequesterComponent} from './add-requester/add-requester.component';
import {UpdateRequesterComponent} from './update-requester/update-requester.component';

const routes: Routes = [
    {
        path: '', component: RequesterComponent
    },
    {
        path: 'addRequester', component: AddRequesterComponent
    },
    {
        path: 'updateRequester/:id', component: UpdateRequesterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RequesterRoutingModule { }
