import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddRegisterComponent} from './add-register/add-register.component';
import {RegisterComponent} from './register.component';

const routes: Routes = [
    {
        path: '', component: RegisterComponent
    },
    {
        path: 'addRegister', component: AddRegisterComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
