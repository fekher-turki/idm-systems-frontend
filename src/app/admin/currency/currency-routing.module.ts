import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurrencyComponent} from './currency.component';
import {AddCurrencyComponent} from './add-currency/add-currency.component';
import {UpdateCurrencyComponent} from './update-currency/update-currency.component';

const routes: Routes = [
    {
        path: '', component: CurrencyComponent
    },
    {
        path: 'addCurrency', component: AddCurrencyComponent
    },
    {
        path: 'updateCurrency/:id', component: UpdateCurrencyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CurrencyRoutingModule { }
