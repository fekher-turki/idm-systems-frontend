import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SourceRoutingModule } from './source-routing.module';
import {PageHeaderModule} from '../../shared/modules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SourceComponent} from './source.component';
import {AddSourceComponent} from './add-source/add-source.component';
import {UpdateSourceComponent} from './update-source/update-source.component';

@NgModule({
  declarations: [SourceComponent, AddSourceComponent, UpdateSourceComponent],
  imports: [CommonModule,
      SourceRoutingModule,
      PageHeaderModule,
      FormsModule,
      ReactiveFormsModule]
})
export class SourceModule { }
