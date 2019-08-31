import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { AddRegisterComponent } from './add-register/add-register.component';
import {PageHeaderModule} from '../../shared/modules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register.component';

@NgModule({
  declarations: [RegisterComponent, AddRegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
