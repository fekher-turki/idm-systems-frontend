import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ExchangeRateComponent} from './exchange-rate.component';
import { AddExchangeRateComponent } from './add-exchange-rate/add-exchange-rate.component';
import { UpdateExchangeRateComponent } from './update-exchange-rate/update-exchange-rate.component';
import { ExchangeRateRoutingModule } from './exchange-rate-routing.module';
import { PageHeaderModule } from './../../shared';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [ExchangeRateComponent, AddExchangeRateComponent, UpdateExchangeRateComponent],
    imports: [
        CommonModule,
        ExchangeRateRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ExchangeRateModule { }
