import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import {AddClientComponent} from './add-client/add-client.component';
import {UpdateClientComponent} from './update-client/update-client.component';

const routes: Routes = [
    {
        path: '', component: ClientComponent
    },
    {
        path: 'addClient', component: AddClientComponent
    },
    {
        path: 'updateClient/:id', component: UpdateClientComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule {
}
