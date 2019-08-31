import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SourceComponent} from './source.component';
import {AddSourceComponent} from './add-source/add-source.component';
import {UpdateSourceComponent} from './update-source/update-source.component';

const routes: Routes = [
    {
        path: '', component: SourceComponent
    },
    {
        path: 'addSource', component: AddSourceComponent
    },
    {
        path: 'updateSource/:id', component: UpdateSourceComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SourceRoutingModule { }
