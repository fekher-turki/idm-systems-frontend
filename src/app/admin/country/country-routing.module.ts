import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryComponent} from './country.component';
import {AddCountryComponent} from './add-country/add-country.component';
import {UpdateCountryComponent} from './update-country/update-country.component';

const routes: Routes = [
    {
        path: '', component: CountryComponent
    },
    {
        path: 'addCountry', component: AddCountryComponent
    },
    {
        path: 'updateCountry/:id', component: UpdateCountryComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
