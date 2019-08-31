import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SourceTypeComponent} from './source-type.component';
import {AddSourceTypeComponent} from './add-source-type/add-source-type.component';
import {UpdateSourceTypeComponent} from './update-source-type/update-source-type.component';

const routes: Routes = [
    {
        path: '', component: SourceTypeComponent
    },
    {
        path: 'addSourceType', component: AddSourceTypeComponent
    },
    {
        path: 'updateSourceType/:id', component: UpdateSourceTypeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SourceTypeRoutingModule { }
