import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientComponent } from './client.component';
import {AddClientComponent} from './add-client/add-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ClientRoutingModule } from './client-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ClientRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [ClientComponent, AddClientComponent, UpdateClientComponent]
})
export class ClientModule {}
