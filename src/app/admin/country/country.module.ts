import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CountryComponent} from './country.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { UpdateCountryComponent } from './update-country/update-country.component';
import { CountryRoutingModule } from './country-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CountryComponent, AddCountryComponent, UpdateCountryComponent],
  imports: [
      CommonModule,
      CountryRoutingModule,
      PageHeaderModule,
      FormsModule,
      ReactiveFormsModule
  ]
})
export class CountryModule { }
