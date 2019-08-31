import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SourceTypeComponent} from './source-type.component';
import { AddSourceTypeComponent } from './add-source-type/add-source-type.component';
import { UpdateSourceTypeComponent } from './update-source-type/update-source-type.component';
import { SourceTypeRoutingModule } from './source-type-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [SourceTypeComponent, AddSourceTypeComponent, UpdateSourceTypeComponent],
    imports: [
        CommonModule,
        SourceTypeRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SourceTypeModule { }
