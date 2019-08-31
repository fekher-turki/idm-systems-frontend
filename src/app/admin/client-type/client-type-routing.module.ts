import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientTypeComponent} from './client-type.component';
import {AddClientTypeComponent} from './add-client-type/add-client-type.component';
import {UpdateClientTypeComponent} from './update-client-type/update-client-type.component';

const routes: Routes = [
    {
        path: '', component: ClientTypeComponent
    },
    {
        path: 'addClientType', component: AddClientTypeComponent
    },
    {
        path: 'updateClientType/:id', component: UpdateClientTypeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientTypeRoutingModule { }
