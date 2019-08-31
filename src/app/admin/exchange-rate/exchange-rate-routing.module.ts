import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExchangeRateComponent} from './exchange-rate.component';
import {AddExchangeRateComponent} from './add-exchange-rate/add-exchange-rate.component';
import {UpdateExchangeRateComponent} from './update-exchange-rate/update-exchange-rate.component';

const routes: Routes = [
    {
        path: '', component: ExchangeRateComponent
    },
    {
        path: 'addExchangeRate', component: AddExchangeRateComponent
    },
    {
        path: 'updateExchangeRate/:id', component: UpdateExchangeRateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExchangeRateRoutingModule { }
